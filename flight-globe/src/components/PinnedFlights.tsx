import { useStore } from '../store/useStore'
import { resolveRoute } from '../lib/flightInfo'

/**
 * Saved comparison flights. They stay listed after the camera leaves the
 * region, country, or airport that was on screen when they were pinned.
 */
export function PinnedFlights({ onOpen }: { onOpen?: () => void }) {
  const pinnedFlightIds = useStore((s) => s.pinnedFlightIds)
  const flightsById = useStore((s) => s.flightsById)
  const routesVersion = useStore((s) => s.routesVersion)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const flatMap = useStore((s) => s.flatMap)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const setSelectedCountry = useStore((s) => s.setSelectedCountry)
  const setFlatMap = useStore((s) => s.setFlatMap)
  const focusCamera = useStore((s) => s.focusCamera)
  const togglePinnedFlight = useStore((s) => s.togglePinnedFlight)
  void routesVersion

  if (pinnedFlightIds.length === 0) {
    return (
      <p className="pins-empty">Pin a path from a flight to keep it here.</p>
    )
  }

  return (
    <ul className="pins-list">
      {pinnedFlightIds.map((id) => {
        const flight = flightsById.get(id)
        const callsign = (flight?.callsign || id).trim().toUpperCase()
        const route = flight ? resolveRoute(flight) : null
        const routeLabel =
          route?.oIata && route.dIata
            ? `${route.oIata} → ${route.dIata}`
            : flight
              ? flight.onGround
                ? 'On ground'
                : 'Airborne'
              : 'Not in the current feed'
        return (
          <li key={id} className={id === selectedFlightId ? 'active' : ''}>
            <button
              type="button"
              className="pins-open"
              onClick={() => {
                setSelectedFlight(id)
                if (flight) {
                  if (selectedCountry) setSelectedCountry(null)
                  if (flatMap) setFlatMap(false)
                  focusCamera(flight.lat, flight.lon, 1.85)
                }
                onOpen?.()
              }}
            >
              <span className="pins-callsign">{callsign}</span>
              <span className="pins-route">{routeLabel}</span>
            </button>
            <button
              type="button"
              className="pins-remove"
              aria-label={`Unpin ${callsign}`}
              title="Unpin"
              onClick={() => togglePinnedFlight(id)}
            >
              ×
            </button>
          </li>
        )
      })}
    </ul>
  )
}
