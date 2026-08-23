import type { FlightState } from './flight'
import type { BBox } from './geo'
import { MAX_RENDER } from './viewport'

// Grid resolution across the larger dimension of the view. More cells => finer
// even-ness. Cell size therefore scales with zoom (fine when zoomed in).
const GRID_N = 40
const PER_CELL_MAX = 6

const GLOBE_BOUNDS: BBox = { minLon: -180, minLat: -85, maxLon: 180, maxLat: 85 }

/** Deterministic hash of an id -> [0,1). Gives stable, flicker-free selection. */
function hashUnit(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 100000) / 100000
}

function normalizeKeep(
  keepIds?: string | Iterable<string> | null,
): Set<string> {
  if (keepIds == null) return new Set()
  if (typeof keepIds === 'string') return keepIds ? new Set([keepIds]) : new Set()
  return new Set([...keepIds].filter(Boolean))
}

/**
 * Thin flights to a roughly even spatial density: bin into a lat/lon grid sized
 * to the current view and keep at most a few per cell. Dense clusters (hubs) get
 * capped hard; sparse areas keep everything — so you see fewer planes spread
 * over a larger area rather than a blob over a hub. Selection within a cell is
 * hash-based, so the visible set is stable between polls.
 *
 * `keepIds` (selected / pinned) are always retained when present in `flights`.
 */
export function thinEvenly(
  flights: FlightState[],
  bounds: BBox | null,
  keepIds?: string | Iterable<string> | null,
): FlightState[] {
  if (flights.length === 0) return flights

  const protectedIds = normalizeKeep(keepIds)
  const b = bounds ?? GLOBE_BOUNDS
  const inBounds =
    bounds == null
      ? flights
      : flights.filter(
          (f) =>
            protectedIds.has(f.icao24) ||
            (f.lat >= bounds.minLat &&
              f.lat <= bounds.maxLat &&
              f.lon >= bounds.minLon &&
              f.lon <= bounds.maxLon),
        )
  if (inBounds.length === 0) {
    const forced: FlightState[] = []
    for (const id of protectedIds) {
      const sel = flights.find((f) => f.icao24 === id)
      if (sel) forced.push(sel)
    }
    return forced
  }

  const span = Math.max(b.maxLat - b.minLat, b.maxLon - b.minLon)
  const cellDeg = Math.max(0.05, span / GRID_N)

  const cells = new Map<string, FlightState[]>()
  for (const f of inBounds) {
    const key = `${Math.floor(f.lat / cellDeg)}:${Math.floor(f.lon / cellDeg)}`
    let arr = cells.get(key)
    if (!arr) {
      arr = []
      cells.set(key, arr)
    }
    arr.push(f)
  }

  const perCell = Math.min(
    PER_CELL_MAX,
    Math.max(1, Math.round(MAX_RENDER / cells.size)),
  )

  const kept: FlightState[] = []
  const keptIds = new Set<string>()
  for (const arr of cells.values()) {
    // Always keep protected aircraft in this cell first.
    const forced = arr.filter((f) => protectedIds.has(f.icao24))
    const rest = arr.filter((f) => !protectedIds.has(f.icao24))
    for (const f of forced) {
      if (keptIds.has(f.icao24)) continue
      kept.push(f)
      keptIds.add(f.icao24)
    }
    const slots = Math.max(0, perCell - forced.length)
    if (rest.length > slots) {
      rest.sort((x, y) => hashUnit(x.icao24) - hashUnit(y.icao24))
      for (let i = 0; i < slots; i++) {
        kept.push(rest[i]!)
        keptIds.add(rest[i]!.icao24)
      }
    } else {
      for (const f of rest) {
        kept.push(f)
        keptIds.add(f.icao24)
      }
    }
  }

  for (const id of protectedIds) {
    if (keptIds.has(id)) continue
    const sel =
      inBounds.find((f) => f.icao24 === id) ??
      flights.find((f) => f.icao24 === id)
    if (sel) {
      kept.push(sel)
      keptIds.add(id)
    }
  }

  if (kept.length > MAX_RENDER) {
    kept.sort((x, y) => {
      const xp = protectedIds.has(x.icao24) ? 0 : 1
      const yp = protectedIds.has(y.icao24) ? 0 : 1
      if (xp !== yp) return xp - yp
      return hashUnit(x.icao24) - hashUnit(y.icao24)
    })
    return kept.slice(0, MAX_RENDER)
  }
  return kept
}
