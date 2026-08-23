import type { Country } from './countries'
import type { FlightState } from './flight'
import { pointInBBox, type BBox } from './geo'
import { filterFlightsServingCountry } from './countryFlights'
import { thinEvenly } from './sampling'

/** True when the aircraft's current position lies inside the bbox. */
export function flightInBBox(flight: FlightState, bbox: BBox): boolean {
  return pointInBBox(flight.lon, flight.lat, bbox)
}

/**
 * Flights drawn on the globe / listed in the sidebar.
 *
 * Scope is the selected country bbox, or the active region bbox — never the
 * live camera footprint. Zoom/rotate must not change which aircraft are in
 * the set (far-side ones stay in the set; the renderer hides them).
 *
 * When a country is selected, keep only flights whose route serves it.
 * Then spatially thin for render budget against that same stable scope.
 * `keepIds` (selected / pinned) are never dropped by thinning.
 */
export function getVisibleFlights(
  flights: FlightState[],
  selectedCountry: Country | null,
  /** Region or country query box; null = world. */
  scopeBBox: BBox | null,
  keepIds?: Iterable<string> | null,
): FlightState[] {
  const area = selectedCountry?.bbox ?? scopeBBox
  const keep = keepIds ? [...keepIds].filter(Boolean) : []

  let list = flights
  if (area) {
    list = list.filter(
      (f) => flightInBBox(f, area) || keep.includes(f.icao24),
    )
  }
  if (selectedCountry) {
    const serving = filterFlightsServingCountry(list, selectedCountry)
    // Still force-keep selected/pinned even if route data isn't ready.
    const servingIds = new Set(serving.map((f) => f.icao24))
    for (const id of keep) {
      if (servingIds.has(id)) continue
      const f = list.find((x) => x.icao24 === id) ?? flights.find((x) => x.icao24 === id)
      if (f) serving.push(f)
    }
    list = serving
  }

  return thinEvenly(list, area, keep)
}

/** Filter a raw feed down to a query bbox. */
export function filterFlightsToBBox(
  flights: FlightState[],
  bbox: BBox | null,
): FlightState[] {
  if (!bbox) return flights
  return flights.filter((f) => flightInBBox(f, bbox))
}
