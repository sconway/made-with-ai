import type { Country } from './countries'
import type { FlightState, Route } from './flight'
import { pointInBBox, pointInPolygons } from './geo'
import { getCachedRoute } from './routes'

function pointInCountry(lon: number, lat: number, country: Country): boolean {
  if (!pointInBBox(lon, lat, country.bbox)) return false
  return pointInPolygons(lon, lat, country.polys)
}

/** True when a known route has its origin or destination inside the country. */
export function routeServesCountry(route: Route, country: Country): boolean {
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
