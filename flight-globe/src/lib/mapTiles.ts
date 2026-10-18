import * as THREE from 'three'
import { GLOBE_RADIUS } from './geo'
import { projectMapLocal, type MapFrame } from './mapView'

const DEG = Math.PI / 180
/** OpenStreetMap standard tiles run from 0 through 19. */
export const TILE_ZOOM_MAX = 19
const SEGS = 3
const EARTH_M = 6_371_000
const M_PER_PX_Z0 = 156543.03392

const loader = new THREE.TextureLoader()
loader.setCrossOrigin('anonymous')

const textures = new Map<string, THREE.Texture>()

export interface ViewWindow {
  minLon: number
  maxLon: number
  minLat: number
  maxLat: number
  height: number
  centerLat: number
  centerLon: number
}

export function tileKey(z: number, x: number, y: number): string {
  return `${z}/${x}/${y}`
}

export function tileUrl(z: number, x: number, y: number): string {
  const n = 2 ** z
  const xx = ((x % n) + n) % n
  return `https://tile.openstreetmap.org/${z}/${xx}/${y}.png`
}

export function lonToTileX(lon: number, z: number): number {
  return Math.floor(((lon + 180) / 360) * 2 ** z)
}

export function latToTileY(lat: number, z: number): number {
  const latR = THREE.MathUtils.clamp(lat, -85.05, 85.05) * DEG
  const y =
    (1 - Math.log(Math.tan(latR) + 1 / Math.cos(latR)) / Math.PI) / 2
  return Math.floor(y * 2 ** z)
}

/** Unrounded Web Mercator zoom that puts tile pixels near screen pixels. */
export function tileZoomFloat(
  height: number,
  lat: number,
  viewPx: number,
  fovDeg: number,
): number {
  const tan = Math.tan(((fovDeg * DEG) / 2) || 0.4)
  const groundM = 2 * Math.max(height, 1e-6) * tan * EARTH_M
  const mpp = groundM / Math.max(1, viewPx)
  const cos = Math.cos(THREE.MathUtils.clamp(lat, -75, 75) * DEG)
  return Math.log2((M_PER_PX_Z0 * Math.max(0.15, cos)) / Math.max(0.04, mpp))
}

/** `null` means the window covers too many tiles at this zoom — step down. */
export function tilesInWindow(
  view: ViewWindow,
  z: number,
): { x: number; y: number }[] | null {
  const n = 2 ** z
  let x0 = lonToTileX(view.minLon, z)
  let x1 = lonToTileX(view.maxLon, z)
  if (x1 < x0) x1 += n
  const yNorth = latToTileY(view.maxLat, z)
  const ySouth = latToTileY(view.minLat, z)
  const y0 = Math.max(0, Math.min(yNorth, ySouth))
  const y1 = Math.min(n - 1, Math.max(yNorth, ySouth))
  const xSpan = x1 - x0 + 1
  const ySpan = y1 - y0 + 1
  if (xSpan <= 0 || ySpan <= 0) return []
  if (xSpan > 18 || ySpan > 18) return null
  const out: { x: number; y: number }[] = []
  for (let x = x0; x <= x1; x++) {
    const xx = ((x % n) + n) % n
    for (let y = y0; y <= y1; y++) out.push({ x: xx, y })
  }
  return out
}

/** Camera is straight above the look-at, so its ground position is the view center. */
export function visibleMapWindow(
  camera: THREE.Vector3,
  map: MapFrame,
  width: number,
  height: number,
  fovDeg: number,
  pad = 0.35,
): ViewWindow {
  const dx = camera.x - map.origin.x * GLOBE_RADIUS
  const dy = camera.y - map.origin.y * GLOBE_RADIUS
  const dz = camera.z - map.origin.z * GLOBE_RADIUS
  const east = dx * map.east.x + dy * map.east.y + dz * map.east.z
  const north = dx * map.north.x + dy * map.north.y + dz * map.north.z
  const up = dx * map.origin.x + dy * map.origin.y + dz * map.origin.z
  const tan = Math.tan(((fovDeg * DEG) / 2) || 0.4)
  const h = Math.max(1e-6, up)
  const halfY = h * tan * (1 + pad)
  const halfX = halfY * (width / Math.max(1, height))
  const cos = Math.max(0.12, Math.cos(map.lat0 * DEG))
  const centerLon = map.lon0 + east / (cos * DEG)
  const centerLat = THREE.MathUtils.clamp(map.lat0 + north / DEG, -85, 85)
  return {
    minLon: centerLon - halfX / (cos * DEG),
    maxLon: centerLon + halfX / (cos * DEG),
    minLat: THREE.MathUtils.clamp(centerLat - halfY / DEG, -85, 85),
    maxLat: THREE.MathUtils.clamp(centerLat + halfY / DEG, -85, 85),
    height: h,
    centerLat,
    centerLon,
  }
}

function mercatorLat(yFrac: number): number {
  const n = Math.PI * (1 - 2 * yFrac)
  return Math.atan(Math.sinh(n)) * (180 / Math.PI)
}

/** Tile mesh in the country tangent frame. UVs stay mercator; vertices match flights. */
export function tileGeometry(
  map: MapFrame,
  z: number,
  x: number,
  y: number,
): THREE.BufferGeometry {
  const n = 2 ** z
  const positions: number[] = []
  const uvs: number[] = []
  const indices: number[] = []
  const v = new THREE.Vector3()
  const stride = SEGS + 1
  for (let iy = 0; iy <= SEGS; iy++) {
    const ty = iy / SEGS
    const lat = mercatorLat((y + ty) / n)
    for (let ix = 0; ix <= SEGS; ix++) {
      const tx = ix / SEGS
      const lon = ((x + tx) / n) * 360 - 180
      projectMapLocal(lat, lon, GLOBE_RADIUS, map, v)
      positions.push(v.x, v.y, 0)
      uvs.push(tx, 1 - ty)
    }
  }
  for (let iy = 0; iy < SEGS; iy++) {
    for (let ix = 0; ix < SEGS; ix++) {
      const a = iy * stride + ix
      const b = a + 1
      const c = a + stride
      const d = c + 1
      indices.push(a, c, b, b, c, d)
    }
  }
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geo.setIndex(indices)
  return geo
}

export function acquireTileTexture(z: number, x: number, y: number): THREE.Texture {
  const key = tileKey(z, x, y)
  const hit = textures.get(key)
  if (hit) return hit
  const tex = loader.load(
    tileUrl(z, x, y),
    (loaded) => {
      loaded.userData.ready = 1
      loaded.needsUpdate = true
    },
    undefined,
    () => {
      const failed = textures.get(key)
      if (failed) failed.userData.ready = -1
    },
  )
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  tex.generateMipmaps = false
  if (tex.userData.ready !== 1) tex.userData.ready = 0
  textures.set(key, tex)
  return tex
}

export function trimTileTextures(keep: Set<string>): void {
  if (textures.size <= 220) return
  for (const [key, tex] of textures) {
    if (keep.has(key)) continue
    tex.dispose()
    textures.delete(key)
    if (textures.size <= 160) break
  }
}
