import { useMemo } from 'react'
import { useStore } from '../store/useStore'
import { findAirport } from '../lib/airports'
import {
  estimateFlightTimes,
  fmtClock,
  fmtDuration,
  resolveRoute,
} from '../lib/flightInfo'
import { flightsForAirportIata } from '../lib/search'
import type { FlightState } from '../lib/flight'

/**
 * Arrivals / departures / nearby board for the selected airport.
 */
export function AirportDetailPanel() {
  const iata = useStore((s) => s.searchAirportIata)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const flights = useStore((s) => s.flights)
  const routesVersion = useStore((s) => s.routesVersion)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const focusCamera = useStore((s) => s.focusCamera)
  void routesVersion

  const airport = iata ? findAirport(iata) : undefined
  const board = useMemo(() => {
    if (!iata) {
      return { deps: [] as FlightState[], arrs: [] as FlightState[], near: [] as FlightState[] }
    }
    const related = flightsForAirportIata(flights, iata)
    const deps: FlightState[] = []
    const arrs: FlightState[] = []
    const near: FlightState[] = []
    for (const f of related) {
      const r = resolveRoute(f)
      if (r?.oIata === iata) deps.push(f)
      else if (r?.dIata === iata) arrs.push(f)
      else near.push(f)
    }
    const byCall = (a: FlightState, b: FlightState) =>
      (a.callsign || a.icao24).localeCompare(b.callsign || b.icao24)
    deps.sort(byCall)
    arrs.sort(byCall)
    near.sort(byCall)
    return { deps, arrs, near }
  }, [flights, iata, routesVersion])

  if (!iata || !airport || selectedFlightId) return null

  return (
    <aside className="panel flight-detail airport-detail">
      <div className="flight-detail-body">
        <header className="flight-detail-header">
          <div className="flight-detail-ident">
            <div className="airline-mark" aria-hidden>
              {airport.iata.slice(0, 3)}
            </div>
            <div>
              <strong>{airport.iata}</strong>
              <small>
                {airport.name}
                {airport.city ? ` · ${airport.city}` : ''}
              </small>
            </div>
          </div>
          <button
            type="button"
            className="flight-detail-close"
            onClick={() => {
              setSearchAirportIata(null)
              setSearchQuery('')
            }}
            aria-label="Close airport"
          >
            ×
          </button>
        </header>

        <div className="flight-detail-route">
          <span>{airport.icao || airport.iata}</span>
        </div>
        <div className="flight-detail-route-full">
          {airport.size === 'large'
            ? 'Large airport'
            : airport.size === 'medium'
              ? 'Medium airport'
              : 'Airport'}
        </div>

        <AirportGroup
          title={`Departures · ${board.deps.length}`}
          flights={board.deps.slice(0, 12)}
          kind="dep"
          iata={iata}
          onPick={(f) => {
            setSelectedFlight(f.icao24)
            if (!selectedCountry) focusCamera(f.lat, f.lon, 1.85)
          }}
        />
        <AirportGroup
          title={`Arrivals · ${board.arrs.length}`}
          flights={board.arrs.slice(0, 12)}
          kind="arr"
          iata={iata}
          onPick={(f) => {
            setSelectedFlight(f.icao24)
            if (!selectedCountry) focusCamera(f.lat, f.lon, 1.85)
          }}
        />
        <AirportGroup
          title={`Nearby · ${board.near.length}`}
          flights={board.near.slice(0, 8)}
          kind="near"
          iata={iata}
          onPick={(f) => {
            setSelectedFlight(f.icao24)
            if (!selectedCountry) focusCamera(f.lat, f.lon, 1.85)
          }}
        />
      </div>
    </aside>
  )
}

function AirportGroup({
  title,
  flights,
  kind,
  iata,
  onPick,
}: {
  title: string
  flights: FlightState[]
  kind: 'dep' | 'arr' | 'near'
  iata: string
  onPick: (f: FlightState) => void
}) {
  return (
    <section className="airport-board-group">
      <h3>{title}</h3>
      {flights.length === 0 ? (
        <p className="airport-board-empty">None in the current feed</p>
      ) : (
        <ul>
          {flights.map((f) => (
            <li key={f.icao24}>
              <button type="button" onClick={() => onPick(f)}>
                <span className="airport-board-cs">
                  {f.callsign || f.icao24.toUpperCase()}
                </span>
                <span className="airport-board-meta">
                  {rowMeta(f, kind, iata)}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function rowMeta(f: FlightState, kind: 'dep' | 'arr' | 'near', iata: string): string {
  const r = resolveRoute(f)
  if (kind === 'near') {
    if (f.onGround) return 'On ground'
    return f.typeCode || 'Overhead'
  }
  if (r) {
    const times = estimateFlightTimes(f, r)
    if (kind === 'dep') {
      const dest = r.dIata && r.dIata !== iata ? r.dIata : r.dCity || '—'
      if (times.notDeparted) return `To ${dest} · not departed`
      if (times.arrived) return `To ${dest} · arrived`
      return `To ${dest} · ${fmtClock(times.takeoffMs)}`
    }
    const origin = r.oIata && r.oIata !== iata ? r.oIata : r.oCity || '—'
    if (times.arrived) return `From ${origin} · arrived`
    if (times.remainingSec != null) {
      return `From ${origin} · ${fmtDuration(times.remainingSec)}`
    }
    return `From ${origin}`
  }
  return f.onGround ? 'On ground' : f.typeCode || '—'
}
