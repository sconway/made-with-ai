import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { Route } from './types'
import {
  callsignLookupVariants,
  looksLikeAirlineCallsign,
} from '../src/lib/callsignVariants'
import { findAirport } from '../src/lib/airports'
import { fetchOpenSkyFlightAirports, isOpenSkyUnreachable } from './opensky'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CACHE_PATH = path.join(__dirname, '.route-cache.json')

// callsign -> Route | null (null = confirmed no route)
const memory = new Map<string, Route | null>()
const inflight = new Map<string, Promise<Route | null>>()
/** ICAO airport → coords + names (from hub list or adsbdb airport endpoint). */
const airportCoords = new Map<
  string,
  { lat: number; lon: number; iata?: string; name?: string; city?: string }
>()
const airportMissing = new Set<string>()

const ADSBDB = 'https://api.adsbdb.com'

interface AdsbdbRouteResponse {
  response?: {
    flightroute?: {
      origin?: {
        latitude?: number
        longitude?: number
        iata_code?: string
        name?: string
        municipality?: string
      }
      destination?: {
        latitude?: number
        longitude?: number
        iata_code?: string
        name?: string
        municipality?: string
      }
    }
  }
}

interface AdsbdbAirportResponse {
  response?: {
    airport?: {
      latitude?: number
      longitude?: number
      iata_code?: string
      icao_code?: string
      name?: string
      municipality?: string
    }
  }
}

export async function loadRouteCache(): Promise<void> {
  try {
    const raw = await readFile(CACHE_PATH, 'utf8')
    const data = JSON.parse(raw) as Record<string, Route | null>
    let loaded = 0
    let skippedStale = 0
    for (const [k, v] of Object.entries(data)) {
      // Pre-name cache entries: drop so the next lookup picks up airport names.
      if (v && !v.oName && !v.dName) {
        skippedStale++
        continue
      }
      memory.set(k, v)
      loaded++
    }
    console.log(
      `[routes] loaded ${loaded} cached callsigns` +
        (skippedStale ? ` (skipped ${skippedStale} without airport names)` : ''),
    )
  } catch {
    // first run — fine
  }
}

async function persist(): Promise<void> {
  try {
    await mkdir(path.dirname(CACHE_PATH), { recursive: true })
    const obj: Record<string, Route | null> = {}
    for (const [k, v] of memory) obj[k] = v
    await writeFile(CACHE_PATH, JSON.stringify(obj))
  } catch (e) {
    console.warn('[routes] persist failed:', e)
  }
}

let persistTimer: ReturnType<typeof setTimeout> | null = null
function schedulePersist(): void {
  if (persistTimer) return
  persistTimer = setTimeout(() => {
    persistTimer = null
    void persist()
  }, 2000)
}

function remember(callsign: string, route: Route | null, variants?: string[]) {
  const keys = new Set(
    [callsign, ...(variants ?? callsignLookupVariants(callsign))].map((c) =>
      c.trim().toUpperCase(),
    ),
  )
  for (const k of keys) {
    if (!k) continue
    memory.set(k, route)
  }
  schedulePersist()
}

async function fetchAdsbdbRoute(callsign: string): Promise<Route | null> {
  const res = await fetch(
    `${ADSBDB}/v0/callsign/${encodeURIComponent(callsign)}`,
    { headers: { 'User-Agent': 'flight-globe-backend/0.1' } },
  )
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`adsbdb ${res.status}`)
  }
  const d = (await res.json()) as AdsbdbRouteResponse
  const fr = d.response?.flightroute
  const o = fr?.origin
  const de = fr?.destination
  if (
    o?.latitude != null &&
    o.longitude != null &&
    de?.latitude != null &&
    de.longitude != null
  ) {
    return {
      oLat: o.latitude,
      oLon: o.longitude,
      dLat: de.latitude,
      dLon: de.longitude,
      oIata: o.iata_code,
      dIata: de.iata_code,
      oName: o.name,
      dName: de.name,
      oCity: o.municipality,
      dCity: de.municipality,
    }
  }
  return null
}

async function resolveAirportIcao(icao: string): Promise<{
  lat: number
  lon: number
  iata?: string
  name?: string
  city?: string
} | null> {
  const code = icao.trim().toUpperCase()
  if (!code) return null
  if (airportMissing.has(code)) return null
  const hit = airportCoords.get(code)
  if (hit) return hit

  const local = findAirport(code)
  if (local) {
    const row = {
      lat: local.lat,
      lon: local.lon,
      iata: local.iata,
      name: local.name,
      city: local.city,
    }
    airportCoords.set(code, row)
    return row
  }

  try {
    const res = await fetch(
      `${ADSBDB}/v0/airport/${encodeURIComponent(code)}`,
      { headers: { 'User-Agent': 'flight-globe-backend/0.1' } },
    )
    if (res.status === 404) {
      airportMissing.add(code)
      return null
    }
    if (!res.ok) return null
    const d = (await res.json()) as AdsbdbAirportResponse
    const a = d.response?.airport
    if (a?.latitude == null || a.longitude == null) {
      airportMissing.add(code)
      return null
    }
    const row = {
      lat: a.latitude,
      lon: a.longitude,
      iata: a.iata_code,
      name: a.name,
      city: a.municipality,
    }
    airportCoords.set(code, row)
    if (a.icao_code) airportCoords.set(a.icao_code.toUpperCase(), row)
    return row
  } catch {
    return null
  }
}

async function routeFromOpenSky(icao24: string): Promise<Route | null> {
  const est = await fetchOpenSkyFlightAirports(icao24)
  if (!est?.dep || !est?.arr) return null
  const o = await resolveAirportIcao(est.dep)
  const d = await resolveAirportIcao(est.arr)
  if (!o || !d) return null
  return {
    oLat: o.lat,
    oLon: o.lon,
    dLat: d.lat,
    dLon: d.lon,
    oIata: o.iata,
    dIata: d.iata,
    oName: o.name,
    dName: d.name,
    oCity: o.city,
    dCity: d.city,
  }
}

async function fetchUpstream(
  callsign: string,
  icao24?: string,
): Promise<Route | null> {
  const variants = callsignLookupVariants(callsign)
  for (const v of variants) {
    // Skip variants already known-null (but still try others / OpenSky).
    if (memory.has(v) && memory.get(v) === null) continue
    if (memory.has(v) && memory.get(v)) return memory.get(v)!
    try {
      const route = await fetchAdsbdbRoute(v)
      if (route) return route
    } catch (e) {
      // Transient on one variant — try the next; rethrow if all fail later.
      if (variants.indexOf(v) === variants.length - 1 && !icao24) throw e
    }
  }

  // OpenSky estimated airports (1 credit) — only when OpenSky is reachable.
  if (
    icao24 &&
    looksLikeAirlineCallsign(callsign) &&
    process.env.FLIGHT_ROUTE_OPENSKY_FALLBACK !== '0' &&
    !isOpenSkyUnreachable()
  ) {
    try {
      const route = await routeFromOpenSky(icao24.toLowerCase())
      if (route) return route
    } catch (e) {
      // One line max — circuit breaker stops further attempts on this host.
      console.warn(
        `[routes] OpenSky fallback failed for ${icao24}:`,
        e instanceof Error ? e.message : e,
      )
    }
  }

  return null
}

/**
 * Shared route lookup — one upstream call per callsign across all users.
 * Tries IATA/ICAO callsign variants, then optional OpenSky airport estimate.
 */
export async function resolveRoute(
  callsign: string,
  icao24?: string,
): Promise<{
  route: Route | null
  cached: boolean
}> {
  const cs = callsign.trim().toUpperCase()
  if (!cs) return { route: null, cached: true }

  const variants = callsignLookupVariants(cs)
  for (const v of variants) {
    if (memory.has(v)) {
      return { route: memory.get(v)!, cached: true }
    }
  }

  const inflightKey = `${cs}|${(icao24 ?? '').toLowerCase()}`
  let pending = inflight.get(inflightKey)
  if (!pending) {
    pending = (async () => {
      try {
        const route = await fetchUpstream(cs, icao24)
        remember(cs, route, variants)
        return route
      } finally {
        inflight.delete(inflightKey)
      }
    })()
    inflight.set(inflightKey, pending)
  }

  const route = await pending
  return { route, cached: false }
}

export function routeCacheSize(): number {
  return memory.size
}
