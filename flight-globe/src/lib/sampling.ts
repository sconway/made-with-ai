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

/**
 * Thin flights to a roughly even spatial density: bin into a lat/lon grid sized
 * to the current view and keep at most a few per cell. Dense clusters (hubs) get
 * capped hard; sparse areas keep everything — so you see fewer planes spread
 * over a larger area rather than a blob over a hub. Selection within a cell is
 * hash-based, so the visible set is stable between polls.
 */
export function thinEvenly(
  flights: FlightState[],
  bounds: BBox | null,
  keepId?: string | null,
): FlightState[] {
  if (flights.length === 0) return flights

  const b = bounds ?? GLOBE_BOUNDS
  const span = Math.max(b.maxLat - b.minLat, b.maxLon - b.minLon)
  const cellDeg = Math.max(0.05, span / GRID_N)

  const cells = new Map<string, FlightState[]>()
  for (const f of flights) {
    const key = `${Math.floor(f.lat / cellDeg)}:${Math.floor(f.lon / cellDeg)}`
    let arr = cells.get(key)
    if (!arr) {
      arr = []
      cells.set(key, arr)
    }
    arr.push(f)
  }

  // Spread the render budget evenly across occupied cells.
  const perCell = Math.min(PER_CELL_MAX, Math.max(1, Math.round(MAX_RENDER / cells.size)))

  const kept: FlightState[] = []
  for (const arr of cells.values()) {
    if (arr.length > perCell) {
      arr.sort((x, y) => hashUnit(x.icao24) - hashUnit(y.icao24))
      for (let i = 0; i < perCell; i++) kept.push(arr[i])
    } else {
      for (const f of arr) kept.push(f)
    }
  }

  if (keepId && !kept.some((f) => f.icao24 === keepId)) {
    const sel = flights.find((f) => f.icao24 === keepId)
    if (sel) kept.push(sel)
  }

  // Safety cap if even 1/cell exceeds the budget (very fine grids).
  if (kept.length > MAX_RENDER) {
    kept.sort((x, y) => hashUnit(x.icao24) - hashUnit(y.icao24))
    return kept.slice(0, MAX_RENDER)
  }
  return kept
}
