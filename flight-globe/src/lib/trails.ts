/**
 * Per-aircraft position breadcrumbs for trail rendering.
 * Module-level (not React state) so high-frequency updates stay cheap.
 */

export type TrailPoint = {
  lat: number
  lon: number
  alt: number
  t: number
}

const trails = new Map<string, TrailPoint[]>()

const MIN_STEP_DEG = 0.015
const MIN_STEP_ALT_M = 80

function farEnough(a: TrailPoint, b: TrailPoint): boolean {
  const dLat = a.lat - b.lat
  const dLon = a.lon - b.lon
  if (dLat * dLat + dLon * dLon >= MIN_STEP_DEG * MIN_STEP_DEG) return true
  return Math.abs(a.alt - b.alt) >= MIN_STEP_ALT_M
}

export function recordTrailSample(
  icao24: string,
  lat: number,
  lon: number,
  alt: number,
  maxPoints: number,
  now = Date.now(),
): void {
  if (maxPoints < 2) return
  const pt: TrailPoint = { lat, lon, alt, t: now }
  let list = trails.get(icao24)
  if (!list) {
    list = [pt]
    trails.set(icao24, list)
    return
  }
  const last = list[list.length - 1]
  if (last && !farEnough(last, pt)) {
    // Refresh timestamp / alt on the tip without growing the ring.
    last.lat = lat
    last.lon = lon
    last.alt = alt
    last.t = now
    return
  }
  list.push(pt)
  if (list.length > maxPoints) list.splice(0, list.length - maxPoints)
}

export function getTrail(icao24: string): TrailPoint[] | undefined {
  return trails.get(icao24)
}

export function pruneTrails(keep: Set<string>): void {
  for (const id of trails.keys()) {
    if (!keep.has(id)) trails.delete(id)
  }
}

export function clearAllTrails(): void {
  trails.clear()
}

export function clearTrail(icao24: string): void {
  trails.delete(icao24)
}
