import { useEffect, useMemo, useRef, useState } from 'react'
import { useStore } from '../store/useStore'
import { REGIONS } from '../lib/regions'
import { getVisibleFlights } from '../lib/visibleFlights'
import {
  airlineCodeFromCallsign,
  airlineName,
  endpointLabel,
  fmtAltitude,
  fmtSpeed,
  resolveRoute,
} from '../lib/flightInfo'
import { flightsForAirportIata, filterFlightsByQuery, scoreFlight } from '../lib/search'
import { filterFlightsByTraffic, trafficFiltersActive } from '../lib/filters'
import { findAirport } from '../lib/airports'
import { SearchBox } from './SearchBox'
import { FlightFilters } from './FlightFilters'
import { AlertsPanel } from './AlertsPanel'
import { PlaybackBar } from './PlaybackBar'
import { FlightDetailPanel } from './FlightDetailPanel'
import type { FlightState } from '../lib/flight'
import { isConfirmedEmergency, emergencySquawkLabel } from '../lib/squawk'

function FlightRow({
  flight,
  active,
  onSelect,
}: {
  flight: FlightState
  active: boolean
  onSelect: () => void
}) {
  const countries = useStore((s) => s.countries)
  const routesVersion = useStore((s) => s.routesVersion)
  const emergencyVersion = useStore((s) => s.emergencyVersion)
  const setHoveredFlight = useStore((s) => s.setHoveredFlight)
  // Touch versions so rows refresh as lookups / squawk confirmation land.
  void routesVersion
  void emergencyVersion

  const code = airlineCodeFromCallsign(flight.callsign)
  const airline = airlineName(code)
  const route = resolveRoute(flight)
  const origin = route
    ? endpointLabel(route.oLat, route.oLon, route.oIata, countries, {
        name: route.oName,
        city: route.oCity,
      })
    : null
  const dest = route
    ? endpointLabel(route.dLat, route.dLon, route.dIata, countries, {
        name: route.dName,
        city: route.dCity,
      })
    : null
  const callsign = flight.callsign || flight.icao24.toUpperCase()
  const alt = fmtAltitude(flight.geoAltitude ?? flight.baroAltitude)
  const speed = fmtSpeed(flight.onGround ? 0 : flight.velocity)
  const emergency = isConfirmedEmergency(flight)

  return (
    <button
      type="button"
      className={`flight-row${active ? ' active' : ''}${emergency ? ' emergency' : ''}`}
      onClick={onSelect}
      onMouseEnter={() => setHoveredFlight(flight.icao24, null)}
      onMouseLeave={() => setHoveredFlight(null)}
    >
      <div className="flight-row-top">
        <span className="flight-call">{callsign}</span>
        <span className="flight-meta">
          {emergency ? `SQ ${flight.squawk}` : alt}
        </span>
      </div>
      {emergency && (
        <div className="flight-emergency-tag">
          {emergencySquawkLabel(flight.squawk!)}
        </div>
      )}
      <div className="flight-airline">{airline}</div>
      <div className="flight-route">
        {origin && dest ? (
          <>
            <span title={origin.airportName ?? origin.label}>
              {origin.iata ?? origin.label}
            </span>
            <span className="flight-arrow" aria-hidden>
              →
            </span>
            <span title={dest.airportName ?? dest.label}>
              {dest.iata ?? dest.label}
            </span>
          </>
        ) : (
          <span className="flight-route-pending">No route data</span>
        )}
      </div>
      {active && (
        <div className="flight-row-detail">
          {origin && dest && (
            <div>
              {(origin.airportName ?? origin.label) +
                ' → ' +
                (dest.airportName ?? dest.label)}
            </div>
          )}
          <div>
            {[flight.typeCode, flight.registration, speed]
              .filter(Boolean)
              .join(' · ') || flight.icao24.toUpperCase()}
          </div>
          <div>
            {flight.onGround ? 'On ground' : 'Airborne'} ·{' '}
            {flight.lat.toFixed(2)}°, {flight.lon.toFixed(2)}°
          </div>
        </div>
      )}
    </button>
  )
}

export function HUD() {
  const flights = useStore((s) => s.flights)
  const loading = useStore((s) => s.loading)
  const error = useStore((s) => s.error)
  const region = useStore((s) => s.region)
  const setRegion = useStore((s) => s.setRegion)
  const setSelectedCountry = useStore((s) => s.setSelectedCountry)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const routesVersion = useStore((s) => s.routesVersion)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const searchQuery = useStore((s) => s.searchQuery)
  const setSearchQuery = useStore((s) => s.setSearchQuery)
  const trafficFilters = useStore((s) => s.trafficFilters)
  const followFlight = useStore((s) => s.followFlight)
  const focusCamera = useStore((s) => s.focusCamera)
  const playbackLive = useStore((s) => s.playbackLive)
  const playbackPlaying = useStore((s) => s.playbackPlaying)
  const listRef = useRef<HTMLDivElement>(null)

  const emergencyVersion = useStore((s) => s.emergencyVersion)

  const visible = useMemo(() => {
    const emergencyIds = flights
      .filter((f) => isConfirmedEmergency(f))
      .map((f) => f.icao24)
    const keepIds = [
      ...(selectedFlightId ? [selectedFlightId] : []),
      ...emergencyIds,
    ]
    let pool = filterFlightsByQuery(flights, searchQuery)
    pool = filterFlightsByTraffic(pool, trafficFilters)
    if (searchAirportIata) {
      pool = flightsForAirportIata(pool, searchAirportIata)
    }
    const base = getVisibleFlights(
      pool,
      selectedCountry,
      // Airport mode: keep en-route traffic anywhere, not just over the region.
      searchAirportIata
        ? null
        : (selectedCountry?.bbox ?? region.bbox),
      keepIds,
    )
    const list = base.slice()
    // If filters hide the selection, still surface it so the row stays put.
    if (
      selectedFlightId &&
      !list.some((f) => f.icao24 === selectedFlightId)
    ) {
      const sel =
        pool.find((f) => f.icao24 === selectedFlightId) ??
        flights.find((f) => f.icao24 === selectedFlightId)
      if (sel) list.unshift(sel)
    }
    // Ensure emergency aircraft stay listed even if thinned/filtered out.
    for (const id of emergencyIds) {
      if (list.some((f) => f.icao24 === id)) continue
      const f = flights.find((x) => x.icao24 === id)
      if (f) list.unshift(f)
    }
    return list.sort((a, b) => {
      // Keep the selected row near the top so it doesn't scroll away during playback.
      if (a.icao24 === selectedFlightId) return -1
      if (b.icao24 === selectedFlightId) return 1
      const ae = isConfirmedEmergency(a)
      const be = isConfirmedEmergency(b)
      if (ae !== be) return ae ? -1 : 1
      const q = searchQuery.trim()
      if (q.length >= 1 && !searchAirportIata) {
        const d = scoreFlight(b, q) - scoreFlight(a, q)
        if (d !== 0) return d
      }
      return (a.callsign || a.icao24).localeCompare(b.callsign || b.icao24)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    flights,
    selectedCountry,
    region,
    routesVersion,
    searchAirportIata,
    searchQuery,
    trafficFilters,
    selectedFlightId,
    emergencyVersion,
  ])

  // Scroll to the selected row only when selection changes — not on every
  // flights/routes refresh (that was yanking the sidebar back to the top
  // while following / browsing the list).
  useEffect(() => {
    if (!selectedFlightId || !listRef.current) return
    const list = listRef.current
    const raf = requestAnimationFrame(() => {
      const el = list.querySelector<HTMLElement>(
        `[data-icao="${selectedFlightId}"]`,
      )
      if (!el) return
      const first = list.querySelector<HTMLElement>('[data-icao]')
      if (first?.dataset.icao === selectedFlightId) {
        list.scrollTop = 0
        return
      }
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    })
    return () => cancelAnimationFrame(raf)
  }, [selectedFlightId])

  const airportMeta = searchAirportIata
    ? findAirport(searchAirportIata)
    : undefined
  const filtersOn = trafficFiltersActive(trafficFilters)
  const [sheetExpanded, setSheetExpanded] = useState(false)

  return (
    <div className="hud">
      <aside
        className={`panel sidebar${sheetExpanded ? ' sheet-expanded' : ''}`}
      >
        <button
          type="button"
          className="sheet-handle"
          aria-label={sheetExpanded ? 'Collapse flight list' : 'Expand flight list'}
          onClick={() => setSheetExpanded((v) => !v)}
        >
          <span />
        </button>
        <header className="sidebar-header">
          <div className="sidebar-title">
            <span className="dot" />
            <div>
              <strong>Flights</strong>
              <small>
                {searchAirportIata
                  ? `${searchAirportIata}${airportMeta ? ` · ${airportMeta.city}` : ''}`
                  : searchQuery.trim()
                    ? `Search “${searchQuery.trim()}”`
                    : selectedCountry
                      ? `To/from ${selectedCountry.name}`
                      : `${region.label} view`}
              </small>
            </div>
          </div>
        </header>

        <SearchBox />
        <FlightFilters />
        <AlertsPanel />

        <div className="region-select sidebar-regions">
          {searchAirportIata && (
            <button
              type="button"
              className="active country-chip"
              title="Clear airport filter"
              onClick={() => {
                setSearchAirportIata(null)
                setSearchQuery('')
              }}
            >
              {searchAirportIata}
            </button>
          )}
          {searchQuery.trim() && !searchAirportIata && (
            <button
              type="button"
              className="active country-chip"
              title="Clear search"
              onClick={() => setSearchQuery('')}
            >
              Search
            </button>
          )}
          {selectedCountry && (
            <button
              type="button"
              className="active country-chip"
              title="Clear country filter"
              onClick={() => setSelectedCountry(null)}
            >
              {selectedCountry.name}
            </button>
          )}
          {REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              className={
                !selectedCountry &&
                !searchAirportIata &&
                !searchQuery.trim() &&
                r.id === region.id
                  ? 'active'
                  : ''
                }
                onClick={() => {
                  setSelectedCountry(null)
                  setSearchAirportIata(null)
                  setSearchQuery('')
                  setSelectedFlight(null)
                  setRegion(r)
                }}
            >
              {r.label}
            </button>
          ))}
        </div>

        <div className="sidebar-count">
          {followFlight && selectedFlightId
            ? `Focusing · ${visible.length.toLocaleString()} in list`
            : searchAirportIata
            ? `${visible.length.toLocaleString()} via / near ${searchAirportIata}`
            : searchQuery.trim() || filtersOn
              ? `${visible.length.toLocaleString()} matching`
              : `${visible.length.toLocaleString()} in region`}
        </div>

        <div className="flight-list" ref={listRef}>
          {visible.length === 0 ? (
            <div className="sidebar-empty">
              {searchAirportIata
                ? 'No flights near this airport yet — route matches appear as lookups finish.'
                : searchQuery.trim() || filtersOn
                  ? 'No flights match these filters in the current feed.'
                  : 'No flights in view.'}
            </div>
          ) : (
            visible.map((f) => (
              <div key={f.icao24} data-icao={f.icao24}>
                <FlightRow
                  flight={f}
                  active={f.icao24 === selectedFlightId}
                  onSelect={() => {
                    const next =
                      f.icao24 === selectedFlightId ? null : f.icao24
                    setSelectedFlight(next)
                    if (next) focusCamera(f.lat, f.lon, 1.85)
                  }}
                />
              </div>
            ))
          )}
        </div>
      </aside>

      <FlightDetailPanel />

      <div className="bottom-stack">
        <div className="bottom-status" aria-live="polite">
          {loading && !error && playbackLive && !playbackPlaying && (
            <div className="panel loading">
              <span className="spin" /> Updating live positions…
            </div>
          )}
          {error && <div className="panel loading err">⚠ {error}</div>}
        </div>
        <div className="panel hint">
          {followFlight
            ? 'Following — drag to orbit · pick another flight in the list to switch · Esc to exit'
            : '/ to search · filters & trails in sidebar · scrub playback · pick a flight for its path'}
        </div>
        <PlaybackBar />
      </div>
    </div>
  )
}
