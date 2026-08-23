import type { FlightState } from './flight'
import { airlineCodeFromCallsign, airlineName } from './flightInfo'
import { getCachedRoute } from './routes'

/** Flight-phase / altitude / speed / airline / traffic-kind filters. */
export interface TrafficFilters {
  /** all | airborne only | on ground only */
  phase: 'all' | 'airborne' | 'ground'
  /**
   * Altitude band (baro/geo meters). `null` = any.
   * Presets map to common bands in the UI.
   */
  altMinM: number | null
  altMaxM: number | null
  /** Ground speed band (m/s). `null` = any. */
  speedMinMs: number | null
  speedMaxMs: number | null
  /** ICAO airline designator (e.g. UAL). Empty = any. */
  airline: string
  /**
   * commercial ≈ known airline / airline-style callsign;
   * other ≈ GA / private / unknown (OpenSky has no reliable military flag).
   */
  kind: 'all' | 'commercial' | 'other'
  /** Origin/destination route resolved (adsbdb / cache). */
  route: 'all' | 'known' | 'unknown'
}

export const DEFAULT_TRAFFIC_FILTERS: TrafficFilters = {
  phase: 'all',
  altMinM: null,
  altMaxM: null,
  speedMinMs: null,
  speedMaxMs: null,
  airline: '',
  kind: 'all',
  route: 'all',
}

export type AltBand = 'any' | 'low' | 'mid' | 'high'
export type SpeedBand = 'any' | 'slow' | 'cruise' | 'fast'

/** < FL180, FL180–FL350, > FL350 (approx). */
export function altBandFromFilters(f: TrafficFilters): AltBand {
  if (f.altMinM == null && f.altMaxM == null) return 'any'
  if (f.altMaxM != null && f.altMaxM <= 5500) return 'low'
  if (f.altMinM != null && f.altMinM >= 10_000) return 'high'
  return 'mid'
}

export function filtersFromAltBand(band: AltBand): Pick<
  TrafficFilters,
  'altMinM' | 'altMaxM'
> {
  switch (band) {
    case 'low':
      return { altMinM: null, altMaxM: 5500 } // ~FL180
    case 'mid':
      return { altMinM: 5500, altMaxM: 10_700 } // ~FL180–FL350
    case 'high':
      return { altMinM: 10_700, altMaxM: null }
    default:
      return { altMinM: null, altMaxM: null }
  }
}

/** < 250 kt, 250–450 kt, > 450 kt. */
export function speedBandFromFilters(f: TrafficFilters): SpeedBand {
  if (f.speedMinMs == null && f.speedMaxMs == null) return 'any'
  if (f.speedMaxMs != null && f.speedMaxMs <= 129) return 'slow' // ~250 kt
  if (f.speedMinMs != null && f.speedMinMs >= 232) return 'fast' // ~450 kt
  return 'cruise'
}

export function filtersFromSpeedBand(band: SpeedBand): Pick<
  TrafficFilters,
  'speedMinMs' | 'speedMaxMs'
> {
  switch (band) {
    case 'slow':
      return { speedMinMs: null, speedMaxMs: 129 }
    case 'cruise':
      return { speedMinMs: 129, speedMaxMs: 232 }
    case 'fast':
      return { speedMinMs: 232, speedMaxMs: null }
    default:
      return { speedMinMs: null, speedMaxMs: null }
  }
}

export function trafficFiltersActive(f: TrafficFilters): boolean {
  return (
    f.phase !== 'all' ||
    f.altMinM != null ||
    f.altMaxM != null ||
    f.speedMinMs != null ||
    f.speedMaxMs != null ||
    f.airline.trim().length > 0 ||
    f.kind !== 'all' ||
    f.route !== 'all'
  )
}

/** Heuristic: airline-style callsign or known airline name mapping. */
export function isCommercialFlight(flight: FlightState): boolean {
  const callsign = (flight.callsign || '').trim().toUpperCase()
  if (!callsign) return false
  const code = airlineCodeFromCallsign(callsign)
  if (code.length >= 3) {
    const name = airlineName(code)
    if (name !== code && name !== 'Unknown airline') return true
    // UAL123 / BAW9W — letters then digits is typical airline format.
    if (/^[A-Z]{3}\d/.test(callsign)) return true
  }
  return false
}

/** True when origin/destination coords are known for this flight. */
export function flightHasRoute(flight: FlightState): boolean {
  if (flight.route) return true
  const cached = getCachedRoute(flight.callsign)
  return cached != null
}

function altitudeM(flight: FlightState): number {
  return flight.geoAltitude ?? flight.baroAltitude ?? 0
}

function speedMs(flight: FlightState): number {
  if (flight.onGround) return 0
  return flight.velocity ?? 0
}

export function flightMatchesTrafficFilters(
  flight: FlightState,
  filters: TrafficFilters,
): boolean {
  if (filters.phase === 'airborne' && flight.onGround) return false
  if (filters.phase === 'ground' && !flight.onGround) return false

  const alt = altitudeM(flight)
  if (filters.altMinM != null && alt < filters.altMinM) return false
  if (filters.altMaxM != null && alt > filters.altMaxM) return false

  const spd = speedMs(flight)
  if (filters.speedMinMs != null && spd < filters.speedMinMs) return false
  if (filters.speedMaxMs != null && spd > filters.speedMaxMs) return false

  const airlineQ = filters.airline.trim().toUpperCase()
  if (airlineQ) {
    const code = airlineCodeFromCallsign(flight.callsign || '')
    if (!code.startsWith(airlineQ) && code !== airlineQ) return false
  }

  if (filters.kind === 'commercial' && !isCommercialFlight(flight)) return false
  if (filters.kind === 'other' && isCommercialFlight(flight)) return false

  const routeMode = filters.route ?? 'all'
  if (routeMode === 'known' && !flightHasRoute(flight)) return false
  if (routeMode === 'unknown' && flightHasRoute(flight)) return false

  return true
}

export function filterFlightsByTraffic(
  flights: FlightState[],
  filters: TrafficFilters,
): FlightState[] {
  if (!trafficFiltersActive(filters)) return flights
  return flights.filter((f) => flightMatchesTrafficFilters(f, filters))
}
