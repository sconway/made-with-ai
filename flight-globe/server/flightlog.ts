import { AIRPORTS, type Airport } from '../src/lib/airports'
import { aircraftRows, strOf, type HistoryRow } from './historyDb'

/** Splits an aircraft's stored positions into flights and infers airports. */

const GAP_SPLIT_S = 45 * 60
const LOW_GAP_SPLIT_S = 15 * 60
const LOW_ALT_M = 1500
const APPROACH_ALT_M = 3000
const IN_PROGRESS_S = 10 * 60
const MAX_TRACK_POINTS = 600

export interface LoggedAirport {
  iata: string
  name: string
  city: string
}

export interface LoggedFlight {
  callsign: string
  /** First airborne sample (ms) — takeoff happened at or before this. */
  start: number
  /** Landing (first ground sample after the flight) or last airborne sample (ms). */
  end: number
  from: LoggedAirport | null
  to: LoggedAirport | null
  inProgress: boolean
  maxAltM: number | null
  distanceKm: number
  samples: number
}

const MAJOR = AIRPORTS.filter((a) => a.size !== 'small')

function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)))
}

function nearest(list: Airport[], lat: number, lon: number, maxKm: number): Airport | null {
  let best: Airport | null = null
  let bestKm = maxKm
  const dLatMax = maxKm / 111
  for (const a of list) {
    if (Math.abs(a.lat - lat) > dLatMax) continue
    const km = haversineKm(lat, lon, a.lat, a.lon)
    if (km < bestKm) {
      bestKm = km
      best = a
    }
  }
  return best
}

function altOf(r: HistoryRow): number | null {
  return r.galt ?? r.alt
}

/** Airport at a flight endpoint, only when the sample is on/near the ground. */
function airportAt(r: HistoryRow): LoggedAirport | null {
  const lat = r.lat / 1e5
  const lon = r.lon / 1e5
  const alt = altOf(r)
  let hit: Airport | null = null
  if (r.gnd === 1) {
    hit = nearest(AIRPORTS, lat, lon, 6) ?? nearest(MAJOR, lat, lon, 15)
  } else if (alt != null && alt < APPROACH_ALT_M) {
    hit = nearest(MAJOR, lat, lon, alt < LOW_ALT_M ? 20 : 35)
  }
  return hit ? { iata: hit.iata, name: hit.name, city: hit.city } : null
}

function isLow(r: HistoryRow): boolean {
  if (r.gnd === 1) return true
  const alt = altOf(r)
  return alt != null && alt < LOW_ALT_M
}

function mostCommon(ids: Array<number | null>): string {
  const counts = new Map<number, number>()
  for (const id of ids) if (id != null) counts.set(id, (counts.get(id) ?? 0) + 1)
  let best: number | null = null
  let n = 0
  for (const [id, c] of counts) {
    if (c > n) {
      best = id
      n = c
    }
  }
  return strOf(best)
}

function splitSegments(rows: HistoryRow[]): HistoryRow[][] {
  const segments: HistoryRow[][] = []
  let cur: HistoryRow[] = []
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i]!
    const prev = rows[i - 1]
    if (prev) {
      const gap = r.t - prev.t
      const split =
        gap > GAP_SPLIT_S ||
        (prev.gnd === 1 && r.gnd === 0) ||
        (gap > LOW_GAP_SPLIT_S && isLow(prev) && isLow(r))
      if (split) {
        segments.push(cur)
        // Keep the ground fix before takeoff as the departure anchor.
        cur = prev.gnd === 1 && r.gnd === 0 && gap <= GAP_SPLIT_S ? [prev] : []
      }
    }
    cur.push(r)
  }
  if (cur.length) segments.push(cur)
  return segments
}

export function flightLog(hex: string, sinceMs: number, nowMs: number, limit: number): LoggedFlight[] {
  const rows = aircraftRows(hex, sinceMs, nowMs)
  const latestS = Math.floor(nowMs / 1000)
  const out: LoggedFlight[] = []

  for (const seg of splitSegments(rows)) {
    const firstAir = seg.findIndex((r) => r.gnd === 0)
    if (firstAir < 0) continue
    let lastAir = seg.length - 1
    while (lastAir > firstAir && seg[lastAir]!.gnd === 1) lastAir--
    const air = seg.slice(firstAir, lastAir + 1)
    if (air.length < 2) continue

    const depAnchor = firstAir > 0 ? seg[firstAir - 1]! : air[0]!
    const arrAnchor = lastAir < seg.length - 1 ? seg[lastAir + 1]! : air[air.length - 1]!
    const lastSample = seg[seg.length - 1]!
    const inProgress = lastSample.gnd === 0 && latestS - lastSample.t <= IN_PROGRESS_S

    let distanceKm = 0
    let maxAlt: number | null = null
    for (let i = 0; i < air.length; i++) {
      const r = air[i]!
      const alt = altOf(r)
      if (alt != null && (maxAlt == null || alt > maxAlt)) maxAlt = alt
      if (i > 0) {
        const p = air[i - 1]!
        distanceKm += haversineKm(p.lat / 1e5, p.lon / 1e5, r.lat / 1e5, r.lon / 1e5)
      }
    }

    out.push({
      callsign: mostCommon(seg.map((r) => r.cs)),
      start: air[0]!.t * 1000,
      end: arrAnchor.t * 1000,
      from: airportAt(depAnchor),
      to: inProgress ? null : airportAt(arrAnchor),
      inProgress,
      maxAltM: maxAlt,
      distanceKm: Math.round(distanceKm),
      samples: air.length,
    })
  }

  return out.reverse().slice(0, limit)
}

/** [t ms, lat, lon, alt m] points, evenly thinned to MAX_TRACK_POINTS. */
export function aircraftTrack(
  hex: string,
  fromMs: number,
  toMs: number,
): Array<[number, number, number, number]> {
  const rows = aircraftRows(hex, fromMs, toMs)
  const stride = Math.max(1, Math.ceil(rows.length / MAX_TRACK_POINTS))
  const out: Array<[number, number, number, number]> = []
  for (let i = 0; i < rows.length; i += stride) {
    const r = rows[i]!
    out.push([r.t * 1000, r.lat / 1e5, r.lon / 1e5, r.gnd ? 0 : altOf(r) ?? 0])
  }
  const last = rows[rows.length - 1]
  if (last && out[out.length - 1]?.[0] !== last.t * 1000) {
    out.push([last.t * 1000, last.lat / 1e5, last.lon / 1e5, last.gnd ? 0 : altOf(last) ?? 0])
  }
  return out
}
