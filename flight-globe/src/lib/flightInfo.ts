import type { Country } from './countries'
import type { FlightState, Route } from './flight'
import { findAirport } from './airports'
import { haversineKm, pointInBBox, pointInPolygons } from './geo'
import { getCachedRoute } from './routes'
import {
  callsignLookupVariants as callsignCandidatesFromQuery,
  iataToIcaoAirline,
  parseFlightNumber,
} from './callsignVariants'

/** Common ICAO airline designators → display name. Unknown codes fall back to the code. */
const AIRLINES: Record<string, string> = {
  AAL: 'American Airlines',
  ACA: 'Air Canada',
  AFR: 'Air France',
  BAW: 'British Airways',
  CCA: 'Air China',
  CES: 'China Eastern',
  CSA: 'Czech Airlines',
  DAL: 'Delta Air Lines',
  DLH: 'Lufthansa',
  EIN: 'Aer Lingus',
  ETD: 'Etihad',
  EZY: 'easyJet',
  FDX: 'FedEx',
  FFT: 'Frontier',
  IBE: 'Iberia',
  JAL: 'Japan Airlines',
  JBU: 'JetBlue',
  KAL: 'Korean Air',
  KLM: 'KLM',
  QFA: 'Qantas',
  QTR: 'Qatar Airways',
  RYR: 'Ryanair',
  SAS: 'SAS',
  SIA: 'Singapore Airlines',
  SWA: 'Southwest',
  THY: 'Turkish Airlines',
  UAL: 'United Airlines',
  UAE: 'Emirates',
  UPS: 'UPS',
  VIR: 'Virgin Atlantic',
  VLG: 'Vueling',
  WZZ: 'Wizz Air',
}

/** ICAO airline code from a callsign (leading letters), e.g. JBU97 → JBU. */
export function airlineCodeFromCallsign(callsign: string): string {
  const m = callsign.trim().toUpperCase().match(/^([A-Z]{2,3})/)
  return m ? m[1] : ''
}

export function airlineName(code: string): string {
  if (!code) return 'Unknown airline'
  return AIRLINES[code] ?? code
}

export {
  callsignCandidatesFromQuery,
  iataToIcaoAirline,
  parseFlightNumber,
}

export function resolveRoute(flight: FlightState): Route | null {
  return flight.route ?? getCachedRoute(flight.callsign) ?? null
}

function countryAt(
  lon: number,
  lat: number,
  countries: Country[],
): Country | null {
  for (const c of countries) {
    if (!pointInBBox(lon, lat, c.bbox)) continue
    if (pointInPolygons(lon, lat, c.polys)) return c
  }
  return null
}

export interface EndpointLabel {
  iata: string | null
  country: string | null
  /** Compact label (IATA · country, or coords). */
  label: string
  /** Full airport name when known, else city, else null. */
  airportName: string | null
}

export function endpointLabel(
  lat: number,
  lon: number,
  iata: string | undefined,
  countries: Country[],
  meta?: { name?: string; city?: string },
): EndpointLabel {
  const country = countryAt(lon, lat, countries)
  const code = iata?.trim().toUpperCase() || null
  const hub = code ? findAirport(code) : undefined
  const name = meta?.name?.trim() || hub?.name || null
  const city = meta?.city?.trim() || hub?.city || null
  const countryName = country?.name ?? null

  let airportName: string | null = null
  if (name && city && !name.toLowerCase().includes(city.toLowerCase())) {
    airportName = `${name}, ${city}`
  } else if (name) {
    airportName = name
  } else if (city) {
    airportName = city
  }

  if (code && countryName) {
    return {
      iata: code,
      country: countryName,
      label: `${code} · ${countryName}`,
      airportName,
    }
  }
  if (code) {
    return { iata: code, country: countryName, label: code, airportName }
  }
  if (countryName) {
    return {
      iata: null,
      country: countryName,
      label: countryName,
      airportName,
    }
  }
  return {
    iata: null,
    country: null,
    label: `${lat.toFixed(1)}°, ${lon.toFixed(1)}°`,
    airportName,
  }
}

export function fmtAltitude(m: number | null): string {
  if (m == null) return '—'
  const ft = Math.round(m * 3.28084)
  return `FL${String(Math.round(ft / 100)).padStart(3, '0')}`
}

export function fmtSpeed(ms: number | null): string {
  if (ms == null) return '—'
  return `${Math.round(ms * 1.94384)} kn`
}

export function fmtVerticalRate(ms: number | null): string {
  if (ms == null) return '—'
  const fpm = Math.round(ms * 196.85)
  if (Math.abs(fpm) < 50) return 'Level'
  return `${fpm > 0 ? '+' : ''}${fpm} fpm`
}

export function climbLabel(ms: number | null): string {
  if (ms == null) return '—'
  if (ms > 0.5) return 'Climbing'
  if (ms < -0.5) return 'Descending'
  return 'Level'
}

/** Path factor: real airways are longer than a pure great-circle. */
const ROUTE_PATH_FACTOR = 1.08
/** Fallback cruise when groundspeed is missing / too low to extrapolate. */
const CRUISE_MS = 230 // ~450 kt
const MIN_SPEED_MS = 40 // ~80 kt — ignore taxi/hover for ETA math

export interface FlightTimeEstimate {
  /** Estimated wheels-up (unix ms), or null if unknown. */
  takeoffMs: number | null
  /** Estimated arrival at destination (unix ms), or null if unknown. */
  arrivalMs: number | null
  /** 0–1 progress along origin→destination great circle. */
  progress: number | null
  /** Remaining flight time in seconds. */
  remainingSec: number | null
  /** True when the aircraft looks parked near the destination. */
  arrived: boolean
  /** True when still on the ground near origin. */
  notDeparted: boolean
}

/**
 * Estimate takeoff / arrival from current position, ground speed, and route.
 * Not an airline schedule — OpenSky/adsbdb don't publish ETD/ETA.
 */
export function estimateFlightTimes(
  flight: FlightState,
  route: Route,
  now = Date.now(),
): FlightTimeEstimate {
  const distFromOrigin = haversineKm(flight.lat, flight.lon, route.oLat, route.oLon)
  const distToDest = haversineKm(flight.lat, flight.lon, route.dLat, route.dLon)
  const routeKm =
    haversineKm(route.oLat, route.oLon, route.dLat, route.dLon) * ROUTE_PATH_FACTOR

  const nearOrigin = distFromOrigin < 40
  const nearDest = distToDest < 40
  const arrived = flight.onGround && nearDest
  const notDeparted = flight.onGround && nearOrigin && !nearDest

  const flownKm = Math.max(0, distFromOrigin) * ROUTE_PATH_FACTOR
  const remainKm = Math.max(0, distToDest) * ROUTE_PATH_FACTOR
  const progress =
    routeKm > 1 ? Math.min(1, Math.max(0, flownKm / (flownKm + remainKm))) : null

  if (arrived) {
    return {
      takeoffMs: null,
      arrivalMs: now,
      progress: 1,
      remainingSec: 0,
      arrived: true,
      notDeparted: false,
    }
  }

  const speed =
    flight.velocity != null && flight.velocity >= MIN_SPEED_MS
      ? flight.velocity
      : flight.onGround
        ? CRUISE_MS
        : flight.velocity != null && flight.velocity > 5
          ? Math.max(flight.velocity, MIN_SPEED_MS)
          : CRUISE_MS

  const speedKmS = speed / 1000

  let remainingSec: number | null = null
  let arrivalMs: number | null = null
  if (speedKmS > 0) {
    const kmLeft = notDeparted ? routeKm : remainKm
    remainingSec = kmLeft / speedKmS
    // Approach / descent buffer (~8 min) when still far out.
    if (kmLeft > 80) remainingSec += 8 * 60
    arrivalMs = now + remainingSec * 1000
  }

  let takeoffMs: number | null = null
  if (notDeparted) {
    takeoffMs = null
  } else if (flownKm > 15 && speedKmS > 0) {
    // Retrodict airborne time from distance already covered.
    const elapsedSec = flownKm / speedKmS
    takeoffMs = now - elapsedSec * 1000
    // Sanity: ignore wild extrapolations (bad route / circling).
    const ageH = (now - takeoffMs) / 3_600_000
    if (ageH < 0 || ageH > 18) takeoffMs = null
  }

  return {
    takeoffMs,
    arrivalMs,
    progress,
    remainingSec,
    arrived,
    notDeparted,
  }
}

export function fmtClock(ms: number | null): string {
  if (ms == null) return '—'
  return new Date(ms).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function fmtDuration(sec: number | null): string {
  if (sec == null || !Number.isFinite(sec)) return '—'
  const s = Math.max(0, Math.round(sec))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  if (h <= 0) return `${m}m`
  return `${h}h ${m}m`
}
