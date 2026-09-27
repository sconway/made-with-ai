import * as THREE from 'three'

export type WeatherMode = 'off' | 'radar'

export interface WeatherCatalog {
  host: string
  path: string
  time: number
}

export interface WeatherFrame {
  time: number
  path: string
  texture: THREE.CanvasTexture
}

/** Hi-res radar covering a lat/lon box (country / 2D map). */
export interface RadarPatch extends WeatherFrame {
  zoom: number
  x0: number
  y0: number
  x1: number
  y1: number
}

export interface GeoBounds {
  minLon: number
  maxLon: number
  minLat: number
  maxLat: number
}

const WORLD_ZOOM = 3
const TILE = 256
const WORLD_N = 2 ** WORLD_ZOOM
const TTL_MS = 8 * 60 * 1000
const CONCURRENCY = 8
const MAX_PATCH_TILES = 128
const MAX_PATCH_EDGE = 20
/** Bump when tile size / color / composite rules change. */
const COMPOSITE_REV = 7

let cached: WeatherFrame | null = null
let cachedAt = 0
let cachedRev = 0
let inflight: Promise<WeatherFrame | null> | null = null

const patchCache = new Map<string, { at: number; patch: RadarPatch }>()
const patchInflight = new Map<string, Promise<RadarPatch | null>>()

export function readWeatherMode(): WeatherMode {
  try {
    const v = localStorage.getItem('fg-weather')
    if (v === 'off' || v === 'radar') return v
  } catch {
    /* ignore */
  }
  return 'radar'
}

export async function fetchWeatherCatalog(): Promise<WeatherCatalog | null> {
  const res = await fetch('/api/weather')
  if (!res.ok) return null
  const data = (await res.json()) as Partial<WeatherCatalog> | null
  if (!data?.host || !data.path || !data.time) return null
  return { host: data.host, path: data.path, time: data.time }
}

/** Web Mercator UV: u west→east, v 0 at north / 1 at south. */
export function mercatorUV(lon: number, lat: number): { u: number; v: number } {
  const latR = THREE.MathUtils.clamp(lat, -85, 85) * (Math.PI / 180)
  const u = (lon + 180) / 360
  const v = 0.5 - Math.log(Math.tan(Math.PI / 4 + latR / 2)) / (2 * Math.PI)
  return { u, v: THREE.MathUtils.clamp(v, 0, 1) }
}

/** Map a world mercator UV into a composited tile patch (0–1). */
export function patchUV(
  lon: number,
  lat: number,
  patch: Pick<RadarPatch, 'zoom' | 'x0' | 'y0' | 'x1' | 'y1'>,
): { u: number; v: number } {
  const { u, v } = mercatorUV(lon, lat)
  const n = 2 ** patch.zoom
  const cols = patch.x1 - patch.x0 + 1
  const rows = patch.y1 - patch.y0 + 1
  return {
    u: (u * n - patch.x0) / cols,
    v: (v * n - patch.y0) / rows,
  }
}

function tileUrl(
  host: string,
  path: string,
  z: number,
  x: number,
  y: number,
): string {
  const q = new URLSearchParams({
    host,
    path,
    z: String(z),
    x: String(x),
    y: String(y),
  })
  return `/api/weather/tile?${q}`
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

async function mapPool<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const out: R[] = new Array(items.length)
  let i = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++
      out[idx] = await fn(items[idx]!)
    }
  })
  await Promise.all(workers)
  return out
}

function boostRadar(ctx: CanvasRenderingContext2D, w: number, h: number): void {
  const imgData = ctx.getImageData(0, 0, w, h)
  const px = imgData.data
  for (let i = 0; i < px.length; i += 4) {
    const a = px[i + 3]!
    if (a < 8) continue
    px[i] = Math.min(255, px[i]! * 1.4 + 18)
    px[i + 1] = Math.min(255, px[i + 1]! * 1.35 + 8)
    px[i + 2] = Math.min(255, px[i + 2]! * 1.2)
    px[i + 3] = Math.min(255, Math.max(a * 1.7, 110))
  }
  ctx.putImageData(imgData, 0, 0)
}

function makeTexture(canvas: HTMLCanvasElement, wrapS: THREE.Wrapping): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = wrapS
  tex.wrapT = THREE.ClampToEdgeWrapping
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  tex.generateMipmaps = false
  tex.flipY = true
  tex.needsUpdate = true
  return tex
}

function tileRange(bounds: GeoBounds, z: number): {
  x0: number
  y0: number
  x1: number
  y1: number
} {
  const n = 2 ** z
  const nw = mercatorUV(bounds.minLon, bounds.maxLat)
  const se = mercatorUV(bounds.maxLon, bounds.minLat)
  let x0 = Math.floor(nw.u * n)
  let x1 = Math.floor(se.u * n - 1e-9)
  let y0 = Math.floor(nw.v * n)
  let y1 = Math.floor(se.v * n - 1e-9)
  if (x1 < x0) [x0, x1] = [x1, x0]
  if (y1 < y0) [y0, y1] = [y1, y0]
  x0 -= 1
  y0 -= 1
  x1 += 1
  y1 += 1
  return { x0, y0, x1, y1 }
}

function pickZoom(bounds: GeoBounds): number {
  for (let z = 7; z >= 4; z--) {
    const { x0, y0, x1, y1 } = tileRange(bounds, z)
    const cols = x1 - x0 + 1
    const rows = y1 - y0 + 1
    if (cols <= MAX_PATCH_EDGE && rows <= MAX_PATCH_EDGE && cols * rows <= MAX_PATCH_TILES) {
      return z
    }
  }
  return 4
}

async function compositeTiles(
  host: string,
  path: string,
  z: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): Promise<HTMLCanvasElement> {
  const n = 2 ** z
  const cols = x1 - x0 + 1
  const rows = y1 - y0 + 1
  const canvas = document.createElement('canvas')
  canvas.width = cols * TILE
  canvas.height = rows * TILE
  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) throw new Error('weather canvas')

  const jobs: Array<{ x: number; y: number; col: number; row: number }> = []
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = ((x0 + col) % n + n) % n
      const y = THREE.MathUtils.clamp(y0 + row, 0, n - 1)
      jobs.push({ x, y, col, row })
    }
  }

  const images = await mapPool(jobs, CONCURRENCY, (job) =>
    loadImage(tileUrl(host, path, z, job.x, job.y)),
  )
  for (let i = 0; i < jobs.length; i++) {
    const img = images[i]
    const job = jobs[i]!
    if (!img) continue
    ctx.drawImage(img, job.col * TILE, job.row * TILE, TILE, TILE)
  }
  boostRadar(ctx, canvas.width, canvas.height)
  return canvas
}

async function compositeRadar(host: string, path: string): Promise<THREE.CanvasTexture> {
  const canvas = await compositeTiles(host, path, WORLD_ZOOM, 0, 0, WORLD_N - 1, WORLD_N - 1)
  return makeTexture(canvas, THREE.RepeatWrapping)
}

/** Latest RainViewer radar, composited to a world Mercator canvas texture. */
export async function loadRadarFrame(force = false): Promise<WeatherFrame | null> {
  if (!force && cached && cachedRev === COMPOSITE_REV && Date.now() - cachedAt < TTL_MS) {
    return cached
  }
  if (inflight) return inflight
  inflight = (async () => {
    try {
      const cat = await fetchWeatherCatalog()
      if (!cat) return cached
      if (!force && cached && cached.path === cat.path && cachedRev === COMPOSITE_REV) {
        cachedAt = Date.now()
        return cached
      }
      const texture = await compositeRadar(cat.host, cat.path)
      cached?.texture.dispose()
      cached = { time: cat.time, path: cat.path, texture }
      cachedAt = Date.now()
      cachedRev = COMPOSITE_REV
      return cached
    } catch {
      return cached
    } finally {
      inflight = null
    }
  })()
  return inflight
}

function padBounds(b: GeoBounds, pad = 0.12): GeoBounds {
  const lonPad = Math.max(0.6, (b.maxLon - b.minLon) * pad)
  const latPad = Math.max(0.45, (b.maxLat - b.minLat) * pad)
  return {
    minLon: b.minLon - lonPad,
    maxLon: b.maxLon + lonPad,
    minLat: Math.max(-85, b.minLat - latPad),
    maxLat: Math.min(85, b.maxLat + latPad),
  }
}

/** Higher-zoom radar for a country / flatten-map frame. */
export async function loadRadarPatch(bounds: GeoBounds): Promise<RadarPatch | null> {
  const cat = await fetchWeatherCatalog()
  if (!cat) return null
  const box = padBounds(bounds)
  const zoom = pickZoom(box)
  const { x0, y0, x1, y1 } = tileRange(box, zoom)
  const key = `${COMPOSITE_REV}|${cat.path}|${zoom}|${x0}|${y0}|${x1}|${y1}`
  const hit = patchCache.get(key)
  if (hit && Date.now() - hit.at < TTL_MS) return hit.patch
  const pending = patchInflight.get(key)
  if (pending) return pending

  const work = (async () => {
    try {
      const canvas = await compositeTiles(cat.host, cat.path, zoom, x0, y0, x1, y1)
      const texture = makeTexture(canvas, THREE.ClampToEdgeWrapping)
      const patch: RadarPatch = {
        time: cat.time,
        path: cat.path,
        texture,
        zoom,
        x0,
        y0,
        x1,
        y1,
      }
      const prev = patchCache.get(key)
      if (prev && prev.patch.texture !== texture) prev.patch.texture.dispose()
      patchCache.set(key, { at: Date.now(), patch })
      if (patchCache.size > 6) {
        const oldest = patchCache.keys().next().value
        if (oldest && oldest !== key) {
          const evict = patchCache.get(oldest)
          evict?.patch.texture.dispose()
          patchCache.delete(oldest)
        }
      }
      return patch
    } catch {
      return null
    } finally {
      patchInflight.delete(key)
    }
  })()
  patchInflight.set(key, work)
  return work
}
