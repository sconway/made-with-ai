import type { Route } from './flight'
import { fetchRouteFromBackend, useBackend } from './api'

export type RouteLookup = {
  callsign: string
  icao24?: string
  /** Lower = sooner (selected / pinned / airline). */
  priority?: number
}

// callsign -> Route (resolved), null (adsbdb has no route), or absent (unknown).
const cache = new Map<string, Route | null>()
const queue: RouteLookup[] = []
const queued = new Set<string>()

// Keep lookups gentle whether hitting the shared backend or adsbdb directly.
const BATCH = 4
const INTERVAL_MS = 1000
const MAX_QUEUE = 800

export function getCachedRoute(callsign: string): Route | null | undefined {
  const key = callsign.trim().toUpperCase()
  return cache.get(key)
}

function queueKey(item: RouteLookup): string {
  return item.callsign.trim().toUpperCase()
}

/**
 * Queue callsigns whose route we don't yet know. Deduplicated.
 * Higher priority (lower number) items are drained first.
 */
export function enqueueRoutes(
  callsigns: Array<string | RouteLookup>,
): void {
  for (const raw of callsigns) {
    const item: RouteLookup =
      typeof raw === 'string' ? { callsign: raw } : raw
    const cs = item.callsign?.trim()
    if (!cs) continue
    const key = queueKey(item)
    if (cache.has(key) || queued.has(key)) continue
    queued.add(key)
    queue.push({
      callsign: cs,
      icao24: item.icao24,
      priority: item.priority ?? 50,
    })
  }
  queue.sort((a, b) => (a.priority ?? 50) - (b.priority ?? 50))
  if (queue.length > MAX_QUEUE) {
    const dropped = queue.splice(MAX_QUEUE)
    for (const d of dropped) queued.delete(queueKey(d))
  }
}

interface AdsbdbResponse {
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

/** Returns Route, null (no route), or undefined (transient — retry later). */
async function fetchRoute(
  item: RouteLookup,
): Promise<Route | null | undefined> {
  if (useBackend()) {
    return fetchRouteFromBackend(item.callsign, item.icao24)
  }
  try {
    const res = await fetch(
      `/adsbdb/v0/callsign/${encodeURIComponent(item.callsign)}`,
    )
    if (res.status === 404) return null
    if (!res.ok) return undefined
    const d = (await res.json()) as AdsbdbResponse
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
  } catch {
    return undefined
  }
}

let running = false

/**
 * Start the background resolver. Drains the queue a few at a time on an
 * interval, caching results, and calls `onBatch` after each batch so the UI can
 * refresh. Idempotent.
 */
export function startRouteResolver(onBatch: () => void): void {
  if (running) return
  running = true

  const tick = async () => {
    let changed = false
    for (let i = 0; i < BATCH && queue.length > 0; i++) {
      const item = queue.shift()!
      queued.delete(queueKey(item))
      const key = queueKey(item)
      const r = await fetchRoute(item)
      if (r !== undefined) {
        cache.set(key, r) // Route or null (no route) — both are final.
        changed = true
      }
      // undefined = transient; leave uncached so it can be re-enqueued later.
    }
    if (changed) onBatch()
    setTimeout(tick, INTERVAL_MS)
  }
  tick()
}
