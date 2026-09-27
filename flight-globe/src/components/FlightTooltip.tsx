import { useEffect, useState } from 'react'
import { useStore } from '../store/useStore'
import { getCachedAircraftType } from '../lib/aircraftLookup'
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
  const [shownId, setShownId] = useState<string | null>(null)

  useEffect(() => {
    setShownId(null)
    if (!id) return
    const timer = window.setTimeout(() => setShownId(id), 200)
    return () => window.clearTimeout(timer)
  }, [id])

  const shown = shownId ? flight && shownId === id ? flight : null : null
  if (!shown || !pointer) return null

  const callsign = shown.callsign || shown.icao24.toUpperCase()
  const code = airlineCodeFromCallsign(shown.callsign)
  const airline = code ? airlineName(code) : null
  const alt = fmtAltitude(shown.geoAltitude ?? shown.baroAltitude)
  const speed = fmtSpeed(shown.onGround ? 0 : shown.velocity)
  const route = resolveRoute(shown)
  const routeLabel =
    route?.oIata && route?.dIata ? `${route.oIata} → ${route.dIata}` : null

  const bits = [
    shown.registration,
    shown.typeCode || getCachedAircraftType(shown.icao24),
    shown.onGround ? 'On ground' : alt,
    !shown.onGround ? speed : null,
    shown.originCountry || null,
    routeLabel,
  ].filter(Boolean)

  const pad = 8
  const left = Math.max(
    pad,
    Math.min(pointer.x + 14, window.innerWidth - 248),
  )
  const top = Math.max(
    pad,
    Math.min(pointer.y + 14, window.innerHeight - 120),
  )

  return (
    <div
      className="flight-tooltip"
      style={{ left, top }}
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
