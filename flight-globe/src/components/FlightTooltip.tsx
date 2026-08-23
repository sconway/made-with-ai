import { useStore } from '../store/useStore'
import {
  airlineCodeFromCallsign,
  airlineName,
  fmtAltitude,
  fmtSpeed,
  resolveRoute,
} from '../lib/flightInfo'

/** Cursor-following tip for the hovered aircraft — only uses already-loaded fields. */
export function FlightTooltip() {
  const id = useStore((s) => s.hoveredFlightId)
  const pointer = useStore((s) => s.hoverPointer)
  const flight = useStore((s) => (id ? s.flightsById.get(id) : undefined))

  if (!id || !pointer || !flight) return null

  const callsign = flight.callsign || flight.icao24.toUpperCase()
  const code = airlineCodeFromCallsign(flight.callsign)
  const airline = code ? airlineName(code) : null
  const alt = fmtAltitude(flight.geoAltitude ?? flight.baroAltitude)
  const speed = fmtSpeed(flight.onGround ? 0 : flight.velocity)
  const route = resolveRoute(flight)
  const routeLabel =
    route?.oIata && route?.dIata ? `${route.oIata} → ${route.dIata}` : null

  const bits = [
    flight.registration,
    flight.typeCode,
    flight.onGround ? 'On ground' : alt,
    !flight.onGround ? speed : null,
    flight.originCountry || null,
    routeLabel,
  ].filter(Boolean)

  return (
    <div
      className="flight-tooltip"
      style={{ left: pointer.x + 14, top: pointer.y + 14 }}
      role="tooltip"
    >
      <div className="flight-tooltip-call">{callsign}</div>
      {airline && <div className="flight-tooltip-airline">{airline}</div>}
      {bits.length > 0 && (
        <div className="flight-tooltip-meta">{bits.join(' · ')}</div>
      )}
    </div>
  )
}
