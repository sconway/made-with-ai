import type { Country } from './countries'
import type { FlightState, Route } from './flight'
import { AIRPORTS } from './airports'
import { padBBox, pointInBBox, pointInPolygons } from './geo'
import { getCachedRoute } from './routes'

const iataByCountry = new Map<string, Set<string>>()

export function pointInCountry(lon: number, lat: number, country: Country): boolean {
  if (!pointInBBox(lon, lat, country.bbox)) return false
  return pointInPolygons(lon, lat, country.polys)
}

/** IATA codes of fields that sit in the country's bounding box. */
export function airportIatasInCountry(country: Country): Set<string> {
  let set = iataByCountry.get(country.id)
  if (set) return set
  set = new Set<string>()
  for (const a of AIRPORTS) {
    if (pointInBBox(a.lon, a.lat, country.bbox)) set.add(a.iata)
  }
  iataByCountry.set(country.id, set)
  return set
}

const pinsByCountry = new Map<string, Set<string>>()

/**
 * Pins to draw on the country map — land polygons only, so neighboring
 * fields that merely sit in the bounding box stay hidden.
 */
export function airportPinsInCountry(country: Country): Set<string> {
  let set = pinsByCountry.get(country.id)
  if (set) return set
  set = new Set<string>()
  for (const a of AIRPORTS) {
    if (pointInCountry(a.lon, a.lat, country)) set.add(a.iata)
  }
  pinsByCountry.set(country.id, set)
  return set
}

function approachPadDeg(country: Country): number {
  const span = Math.max(
    country.bbox.maxLat - country.bbox.minLat,
    country.bbox.maxLon - country.bbox.minLon,
  )
  return Math.min(8, Math.max(2.5, span * 0.08))
}

/** True when a known route has its origin or destination inside the country. */
export function routeServesCountry(route: Route, country: Country): boolean {
  const iatas = airportIatasInCountry(country)
  const o = route.oIata?.toUpperCase()
  const d = route.dIata?.toUpperCase()
  if (o && iatas.has(o)) return true
  if (d && iatas.has(d)) return true
  return (
    pointInCountry(route.oLon, route.oLat, country) ||
    pointInCountry(route.dLon, route.dLat, country)
  )
}

/**
 * Flights whose scheduled route starts or ends in `country`. Uses the flight's
 * embedded route (demo) or the adsbdb cache (live). Flights with no known route
 * yet are excluded — registration "origin country" is not a flight origin.
 */
export function flightServesCountry(
  flight: FlightState,
  country: Country,
): boolean {
  const route = flight.route ?? getCachedRoute(flight.callsign)
  if (!route) return false
  return routeServesCountry(route, country)
}

/** Filter a flight list to those flying to/from the given country. */
export function filterFlightsServingCountry(
  flights: FlightState[],
  country: Country | null,
): FlightState[] {
  if (!country) return flights
  return flights.filter((f) => flightServesCountry(f, country))
}

/**
 * Traffic for the country map + sidebar: inbound/outbound routes (incl. IATA
 * like GRU), aircraft in a padded country box, or aircraft near a hub.
 */
export function flightRelatedToCountry(
  flight: FlightState,
  country: Country,
): boolean {
  if (flightServesCountry(flight, country)) return true
  return pointInBBox(
    flight.lon,
    flight.lat,
    padBBox(country.bbox, approachPadDeg(country)),
  )
}
