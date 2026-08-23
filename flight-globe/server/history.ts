import type { BBox, FlightState } from './types'

export interface HistoryPoint {
  t: number
  count: number
}

export interface FlightSnapshot {
  t: number
  flights: FlightState[]
}

/** Keep ~60 minutes at a 2‑minute poll ≈ 30 frames; allow denser mock polls too. */
const MAX_SNAPSHOTS = 60

const snapshots: FlightSnapshot[] = []

function inBBox(f: FlightState, b: BBox): boolean {
  return (
    f.lon >= b.minLon &&
    f.lon <= b.maxLon &&
    f.lat >= b.minLat &&
    f.lat <= b.maxLat
  )
}

function clamp01(t: number): number {
  return Math.max(0, Math.min(1, t))
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

/** Shortest-path lerp for longitude across the antimeridian. */
function lerpLon(a: number, b: number, t: number): number {
  let d = b - a
  if (d > 180) d -= 360
  if (d < -180) d += 360
  let out = a + d * t
  if (out > 180) out -= 360
  if (out < -180) out += 360
  return out
}

/** Heading from A→B in degrees, or null if the points are coincident. */
function bearingDeg(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number | null {
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180
  const y = Math.sin(Δλ) * Math.cos(φ2)
  const x =
    Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ)
  if (Math.abs(x) < 1e-12 && Math.abs(y) < 1e-12) return null
  const θ = Math.atan2(y, x)
  return ((θ * 180) / Math.PI + 360) % 360
}

export function pushSnapshot(flights: FlightState[], t = Date.now()): void {
  // Store a shallow copy so later in-place mutations can't rewrite history.
  snapshots.push({ t, flights: flights.map((f) => ({ ...f })) })
  while (snapshots.length > MAX_SNAPSHOTS) snapshots.shift()
}

export function historyMeta(): {
  earliest: number | null
  latest: number | null
  count: number
  points: HistoryPoint[]
} {
  if (snapshots.length === 0) {
    return { earliest: null, latest: null, count: 0, points: [] }
  }
  return {
    earliest: snapshots[0]!.t,
    latest: snapshots[snapshots.length - 1]!.t,
    count: snapshots.length,
    points: snapshots.map((s) => ({ t: s.t, count: s.flights.length })),
  }
}

/** Nearest snapshot at or before `at` (ms). */
export function snapshotAt(at: number): FlightSnapshot | null {
  if (snapshots.length === 0) return null
  let best = snapshots[0]!
  for (const s of snapshots) {
    if (s.t <= at) best = s
    else break
  }
  if (at < snapshots[0]!.t) return snapshots[0]!
  if (at >= snapshots[snapshots.length - 1]!.t) {
    return snapshots[snapshots.length - 1]!
  }
  return best
}

function bracketing(at: number): {
  a: FlightSnapshot
  b: FlightSnapshot
  t: number
} | null {
  if (snapshots.length === 0) return null
  if (snapshots.length === 1 || at <= snapshots[0]!.t) {
    return { a: snapshots[0]!, b: snapshots[0]!, t: 0 }
  }
  const last = snapshots[snapshots.length - 1]!
  if (at >= last.t) return { a: last, b: last, t: 0 }

  for (let i = 0; i < snapshots.length - 1; i++) {
    const a = snapshots[i]!
    const b = snapshots[i + 1]!
    if (at >= a.t && at <= b.t) {
      const span = b.t - a.t
      return { a, b, t: span > 0 ? clamp01((at - a.t) / span) : 0 }
    }
  }
  return { a: last, b: last, t: 0 }
}

function mergeFlight(a: FlightState, b: FlightState, t: number): FlightState {
  const lat = lerp(a.lat, b.lat, t)
  const lon = lerpLon(a.lon, b.lon, t)
  const motionTrack = bearingDeg(a.lat, a.lon, b.lat, b.lon)
  const track =
    motionTrack ??
    (a.track != null && b.track != null
      ? lerp(a.track, b.track, t)
      : (b.track ?? a.track))

  const lerpNullable = (
    x: number | null,
    y: number | null,
  ): number | null => {
    if (x == null && y == null) return null
    if (x == null) return y
    if (y == null) return x
    return lerp(x, y, t)
  }

  return {
    ...b,
    ...a,
    // Prefer identity fields from either side.
    icao24: a.icao24,
    callsign: (t < 0.5 ? a.callsign : b.callsign) || a.callsign || b.callsign,
    originCountry: a.originCountry || b.originCountry,
    lat,
    lon,
    baroAltitude: lerpNullable(a.baroAltitude, b.baroAltitude),
    geoAltitude: lerpNullable(a.geoAltitude, b.geoAltitude),
    onGround: t < 0.5 ? a.onGround : b.onGround,
    velocity: lerpNullable(a.velocity, b.velocity),
    track,
    verticalRate: lerpNullable(a.verticalRate, b.verticalRate),
    lastContact: Math.round(lerp(a.lastContact, b.lastContact, t)),
    squawk: (t < 0.5 ? a.squawk : b.squawk) ?? a.squawk ?? b.squawk,
    registration: a.registration ?? b.registration,
    typeCode: a.typeCode ?? b.typeCode,
    route: a.route ?? b.route,
  }
}

/**
 * Flights at time `at`, interpolated between adjacent history frames so
 * scrubbing stays continuous (selected aircraft don't blink out between polls).
 */
export function flightsAt(at: number, bbox: BBox | null): FlightState[] {
  const pair = bracketing(at)
  if (!pair) return []

  const { a, b, t } = pair
  if (a === b || t === 0) {
    const flights = a.flights
    return bbox ? flights.filter((f) => inBBox(f, bbox)) : flights
  }

  const bMap = new Map(b.flights.map((f) => [f.icao24, f]))
  const out: FlightState[] = []
  const seen = new Set<string>()

  for (const fa of a.flights) {
    seen.add(fa.icao24)
    const fb = bMap.get(fa.icao24)
    out.push(fb ? mergeFlight(fa, fb, t) : fa)
  }
  // Aircraft that appear only in the later frame fade in after midpoint.
  if (t > 0.5) {
    for (const fb of b.flights) {
      if (seen.has(fb.icao24)) continue
      out.push(fb)
    }
  }

  return bbox ? out.filter((f) => inBBox(f, bbox)) : out
}
