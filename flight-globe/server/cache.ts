import { readFile, writeFile, mkdir, unlink } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { BBox, FlightState } from './types'
import { REGIONS } from './regions'
import { pushSnapshot } from './history'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DISK_PATH = path.join(__dirname, '.flights-cache.json')

export type CacheSource = 'opensky' | 'mock'

export interface FlightCacheSnapshot {
  flights: FlightState[]
  updatedAt: number | null
  source: CacheSource | null
  lastPollOk: boolean
  lastError: string | null
  upstreamPolls: number
  apiHits: number
  hitsSinceLastPoll: number
  lastApiHitAt: number | null
  /** From last successful OpenSky response header, if present. */
  creditsRemaining: number | null
}

const state: FlightCacheSnapshot = {
  flights: [],
  updatedAt: null,
  source: null,
  lastPollOk: false,
  lastError: null,
  upstreamPolls: 0,
  apiHits: 0,
  hitsSinceLastPoll: 0,
  lastApiHitAt: null,
  creditsRemaining: null,
}

/** Optional wake-up when a browser hits the API while the poller is sleeping. */
let wakePoll: (() => void) | null = null

export function setPollWakeHandler(fn: (() => void) | null): void {
  wakePoll = fn
}

export function getCache(): FlightCacheSnapshot {
  return state
}

export function setCreditsRemaining(n: number | null): void {
  state.creditsRemaining = n
}

export function setFlights(flights: FlightState[], source: CacheSource): void {
  state.flights = flights
  state.updatedAt = Date.now()
  state.source = source
  state.lastPollOk = true
  state.lastError = null
  state.upstreamPolls += 1
  state.hitsSinceLastPoll = 0
  pushSnapshot(flights, state.updatedAt)
  schedulePersist()
}

export function setPollError(err: string): void {
  state.lastPollOk = false
  state.lastError = err
  state.upstreamPolls += 1
  state.hitsSinceLastPoll = 0
  // Live or nothing: never keep serving a previous snapshot after a failed poll.
  state.flights = []
  state.updatedAt = null
  state.source = null
  void unlink(DISK_PATH).catch(() => {
    /* ignore missing cache file */
  })
}

export function recordApiHit(): void {
  const firstHit = state.lastApiHitAt == null
  state.apiHits += 1
  state.hitsSinceLastPoll += 1
  state.lastApiHitAt = Date.now()
  const stale =
    state.updatedAt != null && Date.now() - state.updatedAt > 4 * 60_000
  // First client, empty cache, or data older than ~4 min → nudge poller.
  if (firstHit || state.flights.length === 0 || stale) {
    wakePoll?.()
  }
}

export function clearMemoryCache(): void {
  state.flights = []
  state.updatedAt = null
  state.source = null
  state.lastPollOk = false
}

function sourceAllowed(
  source: CacheSource,
  expect: CacheSource | 'live',
): boolean {
  if (expect === 'live') return source === 'opensky'
  return source === expect
}

/**
 * Load last successful snapshot. Live mode only restores a fresh OpenSky
 * snapshot — never mock leftovers or old hub-sampled ADS-B files.
 */
export async function loadFlightCache(
  expectSource: CacheSource | 'live',
): Promise<boolean> {
  try {
    const raw = await readFile(DISK_PATH, 'utf8')
    const data = JSON.parse(raw) as {
      flights?: FlightState[]
      updatedAt?: number
      source?: CacheSource | 'adsb'
    }
    if (!Array.isArray(data.flights) || data.flights.length === 0) return false

    // Drop legacy / non-OpenSky disk files (hub ADS-B looked like random clusters).
    if (data.source === 'adsb') {
      try {
        await unlink(DISK_PATH)
        console.log('[cache] removed hub-sampled ADS-B snapshot from disk')
      } catch {
        /* ignore */
      }
      return false
    }

    // Untagged files are treated as mock (older builds wrote mock without a tag).
    const source: CacheSource = data.source === 'opensky' ? 'opensky' : 'mock'
    if (!sourceAllowed(source, expectSource)) {
      console.log(
        `[cache] ignoring disk snapshot (source=${source}, need ${expectSource})`,
      )
      if (expectSource === 'live' && source === 'mock') {
        try {
          await unlink(DISK_PATH)
          console.log('[cache] removed stale mock snapshot from disk')
        } catch {
          /* ignore */
        }
      }
      return false
    }

    const updatedAt = data.updatedAt ?? Date.now()
    // Only restore if still reasonably fresh — otherwise start empty.
    const maxAgeMs = 3 * 60_000
    if (Date.now() - updatedAt > maxAgeMs) {
      console.log(
        `[cache] ignoring disk snapshot (age ${Math.round((Date.now() - updatedAt) / 1000)}s > ${maxAgeMs / 1000}s)`,
      )
      return false
    }

    state.flights = data.flights
    state.updatedAt = updatedAt
    state.source = source
    state.lastPollOk = true
    state.lastError = null
    pushSnapshot(state.flights, state.updatedAt)
    console.log(
      `[cache] restored ${state.flights.length} ${source} flights from disk (age ${Math.round((Date.now() - state.updatedAt) / 1000)}s)`,
    )
    return true
  } catch {
    return false
  }
}

let persistTimer: ReturnType<typeof setTimeout> | null = null
function schedulePersist(): void {
  if (persistTimer) return
  persistTimer = setTimeout(() => {
    persistTimer = null
    void persist()
  }, 1500)
}

async function persist(): Promise<void> {
  if (state.updatedAt == null || state.flights.length === 0 || !state.source) {
    return
  }
  // Never persist mock into the live cache file path confusion — still tag it.
  try {
    await mkdir(path.dirname(DISK_PATH), { recursive: true })
    await writeFile(
      DISK_PATH,
      JSON.stringify({
        source: state.source,
        updatedAt: state.updatedAt,
        flights: state.flights,
      }),
    )
  } catch (e) {
    console.warn('[cache] persist failed:', e)
  }
}

function inBBox(f: FlightState, b: BBox): boolean {
  return (
    f.lon >= b.minLon &&
    f.lon <= b.maxLon &&
    f.lat >= b.minLat &&
    f.lat <= b.maxLat
  )
}

export function resolveScope(
  scope: string | null,
  bboxParams: Partial<BBox> | null,
): { key: string; bbox: BBox | null } {
  if (
    bboxParams &&
    bboxParams.minLat != null &&
    bboxParams.minLon != null &&
    bboxParams.maxLat != null &&
    bboxParams.maxLon != null
  ) {
    const bbox: BBox = {
      minLat: bboxParams.minLat,
      minLon: bboxParams.minLon,
      maxLat: bboxParams.maxLat,
      maxLon: bboxParams.maxLon,
    }
    return {
      key: `bbox:${bbox.minLon},${bbox.minLat},${bbox.maxLon},${bbox.maxLat}`,
      bbox,
    }
  }

  const id = (scope || 'world').toLowerCase()
  const region = REGIONS.find((r) => r.id === id) ?? REGIONS[0]
  return { key: region.id, bbox: region.bbox }
}

export function flightsForScope(bbox: BBox | null): FlightState[] {
  if (!bbox) return state.flights
  return state.flights.filter((f) => inBBox(f, bbox))
}
