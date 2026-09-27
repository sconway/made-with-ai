import type http from 'node:http'

const CATALOG_URL = 'https://api.rainviewer.com/public/weather-maps.json'
const CATALOG_TTL_MS = 2 * 60 * 1000
const TILE_TTL_MS = 10 * 60 * 1000
const TILE_PATH_RE = /^\/v2\/radar\/[a-zA-Z0-9]+$/
const UA = 'flight-globe/0.1'

export interface WeatherCatalog {
  host: string
  path: string
  time: number
}

type CatalogCache = { at: number; body: WeatherCatalog | null }
let catalogCache: CatalogCache | null = null

type TileCache = { at: number; buf: Buffer; type: string }
const tileCache = new Map<string, TileCache>()

function allowedHost(host: string): boolean {
  try {
    const u = new URL(host)
    return u.protocol === 'https:' && u.hostname.endsWith('rainviewer.com')
  } catch {
    return false
  }
}

export async function getWeatherCatalog(): Promise<WeatherCatalog | null> {
  const ttl = catalogCache?.body ? CATALOG_TTL_MS : 15_000
  if (catalogCache && Date.now() - catalogCache.at < ttl) {
    return catalogCache.body
  }
  const upstream = await fetch(CATALOG_URL, { headers: { 'User-Agent': UA } })
  if (!upstream.ok) {
    catalogCache = { at: Date.now(), body: catalogCache?.body ?? null }
    return catalogCache.body
  }
  const data = (await upstream.json()) as {
    host?: string
    radar?: { past?: Array<{ time?: number; path?: string }> }
  }
  const past = data.radar?.past ?? []
  const last = past[past.length - 1]
  const host = (data.host || '').replace(/\/$/, '')
  const path = last?.path || ''
  const time = last?.time ?? 0
  const body =
    host && path && allowedHost(host) && TILE_PATH_RE.test(path)
      ? { host, path, time }
      : null
  catalogCache = { at: Date.now(), body }
  return body
}

export async function getWeatherTile(
  host: string,
  path: string,
  z: number,
  x: number,
  y: number,
): Promise<{ buf: Buffer; type: string } | null> {
  if (!allowedHost(host) || !TILE_PATH_RE.test(path)) return null
  if (!Number.isInteger(z) || z < 0 || z > 7) return null
  const n = 2 ** z
  if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 || x >= n || y >= n) {
    return null
  }
  const key = `${host}|${path}|${z}|${x}|${y}|4`
  const hit = tileCache.get(key)
  if (hit && Date.now() - hit.at < TILE_TTL_MS) {
    return { buf: hit.buf, type: hit.type }
  }
  const url = `${host}${path}/256/${z}/${x}/${y}/4/1_1.png`
  const upstream = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!upstream.ok) return null
  const type = upstream.headers.get('content-type') || 'image/png'
  const buf = Buffer.from(await upstream.arrayBuffer())
  tileCache.set(key, { at: Date.now(), buf, type })
  if (tileCache.size > 800) {
    const oldest = tileCache.keys().next().value
    if (oldest) tileCache.delete(oldest)
  }
  return { buf, type }
}

export function sendWeatherCatalog(
  res: http.ServerResponse,
  body: WeatherCatalog | null,
): void {
  const payload = JSON.stringify(body ?? { host: null, path: null, time: 0 })
  res.writeHead(200, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'public, max-age=60',
    'access-control-allow-origin': '*',
  })
  res.end(payload)
}

export function sendWeatherTile(
  res: http.ServerResponse,
  tile: { buf: Buffer; type: string },
): void {
  res.writeHead(200, {
    'content-type': tile.type,
    'cache-control': 'public, max-age=600',
    'access-control-allow-origin': '*',
  })
  res.end(tile.buf)
}
