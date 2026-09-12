import type { Country } from './countries'
import type { FlightState } from './flight'
import { pointInBBox, type BBox } from './geo'
import { flightRelatedToCountry } from './countryFlights'
import { thinEvenly } from './sampling'
import { MAX_RENDER } from './viewport'

/** True when the aircraft's current position lies inside the bbox. */
export function flightInBBox(flight: FlightState, bbox: BBox): boolean {
  return pointInBBox(flight.lon, flight.lat, bbox)
}

/**
 * Flights drawn on the globe / listed in the sidebar.
 *
 * Region scope is the active region bbox — never the live camera footprint.
 * When a country is selected, search the full feed for flights whose route
 * starts or ends there, or that are currently over it. Do not clip to the
 * country box first: departed/arriving aircraft would vanish.
 * `keepIds` (selected / pinned) are never dropped by thinning.
 */
export function getVisibleFlights(
  flights: FlightState[],
  selectedCountry: Country | null,
  /** Region query box; null = world. Ignored while a country is selected. */
  scopeBBox: BBox | null,
  keepIds?: Iterable<string> | null,
): FlightState[] {
  const keep = keepIds ? [...keepIds].filter(Boolean) : []

  if (selectedCountry) {
    const related = flights.filter(
      (f) =>
        keep.includes(f.icao24) || flightRelatedToCountry(f, selectedCountry),
    )
    if (related.length <= MAX_RENDER) return related
    return thinEvenly(related, null, keep)
  }

  let list = flights
  if (scopeBBox) {
    list = list.filter(
      (f) => flightInBBox(f, scopeBBox) || keep.includes(f.icao24),
    )
  }
  return thinEvenly(list, scopeBBox, keep)
}

/** Filter a raw feed down to a query bbox. */
export function filterFlightsToBBox(
  flights: FlightState[],
  bbox: BBox | null,
): FlightState[] {
  if (!bbox) return flights
  return flights.filter((f) => flightInBBox(f, bbox))
}
