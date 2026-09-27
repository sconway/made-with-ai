import http from 'node:http'
import { URL } from 'node:url'
import {
  flightsForScope,
  getCache,
  loadFlightCache,
  recordApiHit,
  resolveScope,
} from './cache'
import { flightsAt, historyMeta } from './history'
import { hasOpenSkyAuth } from './opensky'
import { isMockMode, pollIntervalMs, startPoller } from './poller'
import { loadRouteCache, resolveRoute, routeCacheSize } from './routes'
import { distAvailable, tryServeStatic } from './static'
import { sendRobots, sendSitemap } from './seo'
import { runOutboundDiag } from './diag'
import {
  getWeatherCatalog,
  getWeatherTile,
  sendWeatherCatalog,
  sendWeatherTile,
} from './weather'
import type { BBox, FlightsResponse, HealthResponse } from './types'

/** Prefer host-provided PORT (Render/Fly/Railway); fall back to local default. */
const PORT =
  Number(process.env.PORT) ||
  Number(process.env.FLIGHT_BACKEND_PORT) ||
  8787

function sendJson(
  res: http.ServerResponse,
  status: number,
  body: unknown,
  extraHeaders?: Record<string, string>,
): void {
  const payload = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'access-control-allow-origin': '*',
    ...extraHeaders,
  })
  res.end(payload)
}

function parseBBox(url: URL): Partial<BBox> | null {
  const minLat = url.searchParams.get('minLat')
  const minLon = url.searchParams.get('minLon')
  const maxLat = url.searchParams.get('maxLat')
  const maxLon = url.searchParams.get('maxLon')
  if (minLat == null || minLon == null || maxLat == null || maxLon == null) {
    return null
  }
  return {
    minLat: Number(minLat),
    minLon: Number(minLon),
    maxLat: Number(maxLat),
    maxLon: Number(maxLon),
  }
}

/** Safe code for the flights API — never leak upstream vendor / infra details. */
function publicFeedError(raw: string | null): string | null {
  if (!raw) return null
  if (/429|too many/i.test(raw)) return 'limited'
  return 'unavailable'
}

function handleHealth(_req: http.IncomingMessage, res: http.ServerResponse): void {
  const c = getCache()
  const ageMs = c.updatedAt != null ? Date.now() - c.updatedAt : null
  const body: HealthResponse = {
    ok: c.updatedAt != null && c.lastPollOk,
    mock: isMockMode(),
    pollIntervalMs: pollIntervalMs(),
    upstreamPolls: c.upstreamPolls,
    apiHits: c.apiHits,
    hitsPerUpstreamPoll:
      c.upstreamPolls > 0 ? c.apiHits / c.upstreamPolls : 0,
    lastPollAt: c.updatedAt,
    lastPollOk: c.lastPollOk,
    lastError: c.lastError,
    cache: {
      count: c.flights.length,
      updatedAt: c.updatedAt,
      ageMs,
    },
    openskyAuth: hasOpenSkyAuth(),
  }
  // Expose route cache + credit hint for local debugging.
  sendJson(res, 200, {
    ...body,
    routeCacheSize: routeCacheSize(),
    creditsRemaining: c.creditsRemaining,
    cacheSource: c.source,
  })
}

function handleFlights(req: http.IncomingMessage, res: http.ServerResponse): void {
  recordApiHit()
  const host = req.headers.host ?? `localhost:${PORT}`
  const url = new URL(req.url ?? '/', `http://${host}`)
  const { key, bbox } = resolveScope(url.searchParams.get('scope'), parseBBox(url))
  const c = getCache()
  const atRaw = url.searchParams.get('at')
  const at = atRaw != null ? Number(atRaw) : NaN
  const historical = Number.isFinite(at)

  // Always 200 so the browser console isn't flooded with 503s while OpenSky
  // is warming or rate-limiting. Clients read `pending` / `error` instead.
  // Live or nothing: no snapshot, failed last poll, or empty → pending empty.
  if (
    !historical &&
    (c.updatedAt == null || !c.lastPollOk || c.flights.length === 0)
  ) {
    const body: FlightsResponse = {
      flights: [],
      updatedAt: 0,
      ageMs: 0,
      scope: key,
      count: 0,
      pending: true,
      error: publicFeedError(c.lastError),
    }
    sendJson(res, 200, body, {
      'cache-control': 'no-store',
      'x-upstream-polls': String(c.upstreamPolls),
      'x-api-hits': String(c.apiHits),
    })
    return
  }

  if (historical) {
    const flights = flightsAt(at, bbox)
    const body: FlightsResponse = {
      flights,
      updatedAt: at,
      ageMs: Date.now() - at,
      scope: key,
      count: flights.length,
      pending: false,
      error: null,
      playback: true,
    }
    sendJson(res, 200, body, {
      'cache-control': 'public, max-age=30',
    })
    return
  }

  const flights = flightsForScope(bbox)
  const ageMs = Date.now() - c.updatedAt!
  const body: FlightsResponse = {
    flights,
    updatedAt: c.updatedAt!,
    ageMs,
    scope: key,
    count: flights.length,
    pending: false,
    error: null,
  }

  // Short TTL hint for any reverse proxy; browsers still poll on their cadence.
  sendJson(res, 200, body, {
    'cache-control': 'public, max-age=5',
    'x-cache-age-ms': String(ageMs),
    'x-upstream-polls': String(c.upstreamPolls),
    'x-api-hits': String(c.apiHits),
  })
}

function handlePlayback(_req: http.IncomingMessage, res: http.ServerResponse): void {
  const meta = historyMeta()
  sendJson(res, 200, {
    ...meta,
    pollIntervalMs: pollIntervalMs(),
    live: true,
  })
}

async function handleRoute(
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> {
  const host = req.headers.host ?? `localhost:${PORT}`
  const url = new URL(req.url ?? '/', `http://${host}`)
  const parts = url.pathname.split('/').filter(Boolean)
  // /api/routes/:callsign
  const callsign = decodeURIComponent(parts[2] ?? '')
  if (!callsign) {
    sendJson(res, 400, { error: 'missing callsign' })
    return
  }
  try {
    const icao24 = url.searchParams.get('icao24') ?? undefined
    const { route, cached } = await resolveRoute(callsign, icao24 ?? undefined)
    sendJson(
      res,
      200,
      { callsign: callsign.toUpperCase(), route, cached },
      {
        'cache-control': cached ? 'public, max-age=86400' : 'public, max-age=3600',
      },
    )
  } catch (e) {
    sendJson(res, 502, {
      error: e instanceof Error ? e.message : String(e),
    })
  }
}

async function handleWeather(
  _req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> {
  try {
    const cat = await getWeatherCatalog()
    sendWeatherCatalog(res, cat)
  } catch {
    sendJson(res, 502, { error: 'weather unavailable' })
  }
}

async function handleWeatherTile(
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> {
  const hostHdr = req.headers.host ?? `localhost:${PORT}`
  const url = new URL(req.url ?? '/', `http://${hostHdr}`)
  const host = url.searchParams.get('host') ?? ''
  const path = url.searchParams.get('path') ?? ''
  const z = Number(url.searchParams.get('z'))
  const x = Number(url.searchParams.get('x'))
  const y = Number(url.searchParams.get('y'))
  try {
    const tile = await getWeatherTile(host, path, z, x, y)
    if (!tile) {
      sendJson(res, 404, { error: 'tile' })
      return
    }
    sendWeatherTile(res, tile)
  } catch {
    sendJson(res, 502, { error: 'tile unavailable' })
  }
}

type PhotoCache = {
  at: number
  body: { src: string; link: string; photographer: string } | null
}
const photoCache = new Map<string, PhotoCache>()
const PHOTO_TTL_MS = 24 * 60 * 60 * 1000

async function handlePhoto(
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> {
  const host = req.headers.host ?? `localhost:${PORT}`
  const url = new URL(req.url ?? '/', `http://${host}`)
  const parts = url.pathname.split('/').filter(Boolean)
  const hex = (parts[2] ?? '').trim().toLowerCase()
  if (!/^[0-9a-f]{6}$/.test(hex)) {
    sendJson(res, 400, { error: 'bad hex' })
    return
  }
  const hit = photoCache.get(hex)
  if (hit && Date.now() - hit.at < PHOTO_TTL_MS) {
    sendJson(res, 200, hit.body ?? { src: null }, {
      'cache-control': 'public, max-age=86400',
    })
    return
  }
  try {
    const upstream = await fetch(
      `https://api.planespotters.net/pub/photos/hex/${hex}`,
      { headers: { 'User-Agent': 'flight-globe/0.1' } },
    )
    if (!upstream.ok) {
      photoCache.set(hex, { at: Date.now(), body: null })
      sendJson(res, 200, { src: null }, { 'cache-control': 'public, max-age=600' })
      return
    }
    const data = (await upstream.json()) as {
      photos?: Array<{
        thumbnail?: { src?: string }
        thumbnail_large?: { src?: string }
        link?: string
        photographer?: string
      }>
    }
    const first = data.photos?.[0]
    const src = first?.thumbnail_large?.src || first?.thumbnail?.src || null
    const body = src
      ? {
          src,
          link: first?.link || '',
          photographer: first?.photographer || '',
        }
      : null
    photoCache.set(hex, { at: Date.now(), body })
    sendJson(res, 200, body ?? { src: null }, {
      'cache-control': 'public, max-age=86400',
    })
  } catch {
    sendJson(res, 200, { src: null }, { 'cache-control': 'public, max-age=60' })
  }
}

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'access-control-allow-origin': '*',
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'content-type',
    })
    res.end()
    return
  }

  const pathOnly = (req.url ?? '/').split('?')[0] ?? '/'

  // API first — never fall through to the SPA.
  if (pathOnly === '/api/health' || pathOnly === '/health') {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    handleHealth(req, res)
    return
  }
  if (pathOnly === '/api/diag') {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    void runOutboundDiag()
      .then((body) => sendJson(res, 200, body))
      .catch((e) =>
        sendJson(res, 500, {
          error: e instanceof Error ? e.message : String(e),
        }),
      )
    return
  }
  if (pathOnly === '/api/flights') {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    handleFlights(req, res)
    return
  }
  if (pathOnly === '/api/playback') {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    handlePlayback(req, res)
    return
  }
  if (pathOnly === '/api/weather') {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    void handleWeather(req, res)
    return
  }
  if (pathOnly === '/api/weather/tile') {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    void handleWeatherTile(req, res)
    return
  }
  if (pathOnly.startsWith('/api/photos/')) {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    void handlePhoto(req, res)
    return
  }
  if (pathOnly.startsWith('/api/routes/')) {
    if (req.method !== 'GET') {
      sendJson(res, 405, { error: 'method not allowed' })
      return
    }
    void handleRoute(req, res)
    return
  }
  if (pathOnly.startsWith('/api/')) {
    sendJson(res, 404, {
      error: 'not found',
      endpoints: [
        'GET /api/health',
        'GET /api/diag',
        'GET /api/flights?scope=world|na|eu|as|oc|sa|af',
        'GET /api/flights?at=<ms>',
        'GET /api/playback',
        'GET /api/routes/:callsign',
        'GET /api/photos/:hex',
        'GET /api/weather',
        'GET /api/weather/tile?host&path&z&x&y',
      ],
    })
    return
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    sendJson(res, 405, { error: 'method not allowed' })
    return
  }

  if (pathOnly === '/robots.txt') {
    sendRobots(req, res)
    return
  }
  if (pathOnly === '/sitemap.xml') {
    sendSitemap(req, res)
    return
  }

  if (tryServeStatic(req, res)) return

  sendJson(res, 404, {
    error: 'not found',
    hint: 'Run `npm run build` to generate dist/ for the UI, or call /api/*.',
  })
})

await loadRouteCache()
await loadFlightCache(isMockMode() ? 'mock' : 'live')
startPoller()

server.listen(PORT, () => {
  console.log(
    `[backend] http://localhost:${PORT}  (mock=${isMockMode()}, auth=${hasOpenSkyAuth()}, ui=${distAvailable()})`,
  )
  if (!isMockMode()) {
    console.log(
      '[backend] live OpenSky: world poll = 4 credits. Use `npm run dev:mock` if you need to avoid the credit budget while iterating.',
    )
  }
  if (!distAvailable()) {
    console.log(
      '[backend] no dist/ yet — API only. `npm run build` then restart to serve the UI.',
    )
  }
  console.log(
    `[backend] try: curl -s http://localhost:${PORT}/api/health | jq`,
  )
})
