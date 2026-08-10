import type { Route } from './flight'

// callsign -> Route (resolved), null (adsbdb has no route), or absent (unknown).
const cache = new Map<string, Route | null>()
const queue: string[] = []
const queued = new Set<string>()

// adsbdb is a free community API; keep lookups gentle.
const BATCH = 4
const INTERVAL_MS = 1200

export function getCachedRoute(callsign: string): Route | null | undefined {
  return cache.get(callsign)
}

/** Queue callsigns whose route we don't yet know. Deduplicated. */
export function enqueueRoutes(callsigns: string[]): void {
  for (const cs of callsigns) {
    if (!cs || cache.has(cs) || queued.has(cs)) continue
    queued.add(cs)
    queue.push(cs)
  }
  // Cap the backlog so a huge feed can't build an unbounded queue; the visible
  // set is re-enqueued each poll anyway.
  if (queue.length > 1200) queue.splice(0, queue.length - 1200)
}

interface AdsbdbResponse {
  response?: {
    flightroute?: {
      origin?: { latitude?: number; longitude?: number; iata_code?: string }
      destination?: { latitude?: number; longitude?: number; iata_code?: string }
    }
  }
}

/** Returns Route, null (no route), or undefined (transient — retry later). */
async function fetchRoute(callsign: string): Promise<Route | null | undefined> {
  try {
    const res = await fetch(`/adsbdb/v0/callsign/${encodeURIComponent(callsign)}`)
    if (res.status === 404) return null
    if (!res.ok) return undefined
    const d = (await res.json()) as AdsbdbResponse
    const fr = d.response?.flightroute
    const o = fr?.origin
    const de = fr?.destination
    if (o?.latitude != null && o.longitude != null && de?.latitude != null && de.longitude != null) {
      return {
        oLat: o.latitude,
        oLon: o.longitude,
        dLat: de.latitude,
        dLon: de.longitude,
        oIata: o.iata_code,
        dIata: de.iata_code,
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
      const cs = queue.shift()!
      queued.delete(cs)
      const r = await fetchRoute(cs)
      if (r !== undefined) {
        cache.set(cs, r) // Route or null (no route) — both are final.
        changed = true
      }
      // undefined = transient; leave uncached so it can be re-enqueued later.
    }
    if (changed) onBatch()
    setTimeout(tick, INTERVAL_MS)
  }
  tick()
}
