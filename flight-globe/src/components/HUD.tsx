import { useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
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
import { AirportDetailPanel } from './AirportDetailPanel'
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
  const flatMap = useStore((s) => s.flatMap)
  const setFlatMap = useStore((s) => s.setFlatMap)
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
  const dockRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLElement>(null)
  const peekRef = useRef<HTMLDivElement>(null)

  const emergencyVersion = useStore((s) => s.emergencyVersion)

  const visible = useMemo(() => {
    const emergencyIds = followFlight
      ? []
      : flights.filter((f) => isConfirmedEmergency(f)).map((f) => f.icao24)
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
      searchAirportIata ? null : region.bbox,
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
    followFlight,
    emergencyVersion,
  ])

  // Scroll to the selected row only when selection changes — not on every
  // flights/routes refresh (that was yanking the sidebar back to the top
  // while following / browsing the list).
  useEffect(() => {
    if (!selectedFlightId || !listRef.current) return
    // Selecting a flight collapses the mobile sheet; scrolling a clipped
    // list can resize the dock and bounce the detail actions.
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 720px)').matches
    ) {
      return
    }
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
  const [sheetDragging, setSheetDragging] = useState(false)
  const [sheetSnapping, setSheetSnapping] = useState(false)
  const collapsedHRef = useRef(200)
  const sheetDrag = useRef({
    pointerId: -1,
    startY: 0,
    startH: 0,
    lastY: 0,
    lastT: 0,
    vy: 0,
    moved: false,
  })
  const listPullPending = useRef(false)
  const sheetDraggingRef = useRef(false)
  const sheetSnappingRef = useRef(false)
  const sheetExpandedRef = useRef(false)
  sheetDraggingRef.current = sheetDragging
  sheetSnappingRef.current = sheetSnapping
  sheetExpandedRef.current = sheetExpanded

  const isMobileHud = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 720px)').matches

  const collapseSheetOnMobile = () => {
    if (!isMobileHud()) return
    sheetExpandedRef.current = false
    setSheetSnapping(false)
    setSheetDragging(false)
    setSheetExpanded(false)
    setSheetH(peekCollapsedHeight())
    if (sheetRef.current) sheetRef.current.scrollTop = 0
  }

  const expandSheetOnMobile = () => {
    if (!isMobileHud()) return
    sheetExpandedRef.current = true
    setSheetSnapping(false)
    setSheetDragging(false)
    setSheetExpanded(true)
    setSheetH(sheetMaxHeight())
  }

  const peekCollapsedHeight = () => {
    const sheet = sheetRef.current
    const peek = peekRef.current
    if (!sheet || !peek) return collapsedHRef.current
    const pad = parseFloat(getComputedStyle(sheet).paddingBottom) || 0
    return peek.offsetHeight + pad
  }

  const sheetMaxHeight = () => {
    const dock = dockRef.current
    const stack = dock?.querySelector('.bottom-stack') as HTMLElement | null
    const vh = window.visualViewport?.height ?? window.innerHeight
    return Math.max(240, vh - 12 - (stack?.offsetHeight ?? 0))
  }

  const setSheetH = (px: number) => {
    document.documentElement.style.setProperty('--sheet-h', `${Math.round(px)}px`)
  }

  const syncSheetHeights = (applyResting = false) => {
    if (!isMobileHud()) {
      document.documentElement.style.removeProperty('--sheet-collapsed-h')
      document.documentElement.style.removeProperty('--sheet-expanded-h')
      document.documentElement.style.removeProperty('--sheet-h')
      return
    }
    const collapsed = peekCollapsedHeight()
    const expanded = sheetMaxHeight()
    collapsedHRef.current = collapsed
    document.documentElement.style.setProperty('--sheet-collapsed-h', `${collapsed}px`)
    document.documentElement.style.setProperty('--sheet-expanded-h', `${expanded}px`)
    if (applyResting && !sheetDraggingRef.current && !sheetSnappingRef.current) {
      setSheetH(sheetExpandedRef.current ? expanded : collapsed)
    }
  }

  const beginSheetDrag = (e: ReactPointerEvent) => {
    if (!isMobileHud()) return false
    if (e.pointerType === 'mouse' && e.button !== 0) return false
    const el = sheetRef.current
    if (!el) return false
    if (!sheetExpanded) collapsedHRef.current = peekCollapsedHeight()
    const d = sheetDrag.current
    d.pointerId = e.pointerId
    d.startY = e.clientY
    d.startH = el.offsetHeight
    d.lastY = e.clientY
    d.lastT = performance.now()
    d.vy = 0
    d.moved = false
    setSheetSnapping(false)
    setSheetH(el.offsetHeight)
    el.setPointerCapture(e.pointerId)
    setSheetDragging(true)
    return true
  }

  const moveSheetDrag = (e: ReactPointerEvent) => {
    const d = sheetDrag.current
    if (d.pointerId !== e.pointerId) return
    const el = sheetRef.current
    if (!el) return
    const now = performance.now()
    const dt = Math.max(1, now - d.lastT)
    d.vy = (d.lastY - e.clientY) / dt
    d.lastY = e.clientY
    d.lastT = now
    if (Math.abs(e.clientY - d.startY) > 8) d.moved = true
    const minH = collapsedHRef.current
    const maxH = sheetMaxHeight()
    const next = Math.min(maxH, Math.max(minH, d.startH + (d.startY - e.clientY)))
    setSheetH(next)
  }

  const settleSheet = (expand: boolean) => {
    setSheetH(expand ? sheetMaxHeight() : peekCollapsedHeight())
    setSheetSnapping(false)
    setSheetDragging(false)
    setSheetExpanded(expand)
    if (!expand && sheetRef.current) sheetRef.current.scrollTop = 0
  }

  const endSheetDrag = (e: ReactPointerEvent) => {
    const d = sheetDrag.current
    if (d.pointerId !== e.pointerId) return
    d.pointerId = -1
    listPullPending.current = false
    const el = sheetRef.current
    const h = el?.offsetHeight ?? d.startH
    const minH = collapsedHRef.current
    const maxH = sheetMaxHeight()
    const mid = minH + (maxH - minH) * 0.28
    const expand = !d.moved
      ? !sheetExpanded
      : d.vy > 0.35
        ? true
        : d.vy < -0.35
          ? false
          : h > mid
    const target = expand ? maxH : minH
    if (!el || Math.abs(h - target) < 2) {
      settleSheet(expand)
      return
    }
    el.classList.add('sheet-snapping')
    void el.offsetHeight
    setSheetH(target)
    setSheetDragging(false)
    setSheetSnapping(true)
    let done = false
    const finish = (ev?: Event) => {
      if (done) return
      if (ev && ev.target !== el) return
      done = true
      el.removeEventListener('transitionend', finish)
      settleSheet(expand)
    }
    el.addEventListener('transitionend', finish)
    window.setTimeout(() => finish(), 240)
  }

  useEffect(() => {
    const dock = dockRef.current
    const peek = peekRef.current
    if (!dock) return

    const syncDockHeight = () => {
      if (!isMobileHud()) {
        document.documentElement.style.removeProperty('--dock-h')
        document.documentElement.style.removeProperty('--sheet-collapsed-h')
        document.documentElement.style.removeProperty('--sheet-expanded-h')
        document.documentElement.style.removeProperty('--sheet-h')
        return
      }
      document.documentElement.style.setProperty(
        '--dock-h',
        `${dock.offsetHeight}px`,
      )
      if (!sheetDraggingRef.current && !sheetSnappingRef.current) {
        syncSheetHeights(true)
      }
    }

    syncDockHeight()
    const ro = new ResizeObserver(syncDockHeight)
    ro.observe(dock)
    if (peek) ro.observe(peek)
    window.addEventListener('resize', syncDockHeight)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', syncDockHeight)
      document.documentElement.style.removeProperty('--dock-h')
      document.documentElement.style.removeProperty('--sheet-collapsed-h')
      document.documentElement.style.removeProperty('--sheet-expanded-h')
      document.documentElement.style.removeProperty('--sheet-h')
    }
  }, [selectedCountry])

  useEffect(() => {
    if (sheetDragging || sheetSnapping) return
    if (!isMobileHud()) return
    syncSheetHeights(true)
  }, [sheetExpanded])

  useEffect(() => {
    if (!selectedFlightId) return
    collapseSheetOnMobile()
  }, [selectedFlightId])

  return (
    <div
      className={`hud${
        sheetExpanded || sheetDragging || sheetSnapping ? ' hud-sheet-expanded' : ''
      }${selectedFlightId || searchAirportIata ? ' hud-has-detail' : ''}`}
    >
      <FlightDetailPanel />
      <AirportDetailPanel />

      <div className="hud-dock" ref={dockRef}>
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
            : selectedCountry
              ? `Map of ${selectedCountry.name} — drag to pan · scroll to zoom · click a plane · pick a region to return`
              : flatMap
                ? '2D map — drag to pan · scroll to zoom · Map again or ← Globe to return'
                : '/ to search · Map for a 2D view · click a country · pick a flight'}
        </div>
        <PlaybackBar />
      </div>

      <aside
        ref={sheetRef}
        className={`panel sidebar${sheetExpanded ? ' sheet-expanded' : ''}${
          sheetDragging ? ' sheet-dragging' : ''
        }${sheetSnapping ? ' sheet-snapping' : ''}`}
        onPointerMove={moveSheetDrag}
        onPointerUp={endSheetDrag}
        onPointerCancel={endSheetDrag}
      >
        <div
          className="sheet-inner"
          onPointerDown={(e) => {
            if (!isMobileHud() || !sheetExpanded || sheetDragging) return
            if ((e.target as HTMLElement).closest('input, textarea, button, a'))
              return
            if (sheetRef.current && sheetRef.current.scrollTop > 1) return
            listPullPending.current = true
            sheetDrag.current.startY = e.clientY
          }}
          onPointerMove={(e) => {
            if (!listPullPending.current || sheetDrag.current.pointerId !== -1)
              return
            if (e.clientY - sheetDrag.current.startY > 10) {
              listPullPending.current = false
              beginSheetDrag(e)
            }
          }}
          onPointerUp={() => {
            listPullPending.current = false
          }}
          onPointerCancel={() => {
            listPullPending.current = false
          }}
        >
        <div className="sheet-peek" ref={peekRef}>
        <button
          type="button"
          className="sheet-handle"
          aria-label={sheetExpanded ? 'Collapse flight list' : 'Expand flight list'}
          onPointerDown={beginSheetDrag}
        >
          <span />
        </button>
        {selectedCountry && (
          <button
            type="button"
            className="sidebar-back"
            onClick={() => {
              const world = REGIONS[0]
              if (!world) return
              setSearchAirportIata(null)
              setSearchQuery('')
              setSelectedFlight(null)
              setFlatMap(false)
              setRegion(world, { focus: false })
              collapseSheetOnMobile()
            }}
          >
            <span aria-hidden>←</span>
            World
          </button>
        )}
        {flatMap && !selectedCountry && (
          <button
            type="button"
            className="sidebar-back"
            onClick={() => {
              setFlatMap(false)
              collapseSheetOnMobile()
            }}
          >
            <span aria-hidden>←</span>
            Globe
          </button>
        )}
        <header
          className="sidebar-header"
          onPointerDown={(e) => {
            if ((e.target as HTMLElement).closest('button, input, a')) return
            beginSheetDrag(e)
          }}
        >
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
                      : flatMap
                        ? '2D map'
                        : `${region.label} view`}
              </small>
            </div>
          </div>
        </header>

        <SearchBox onActivate={expandSheetOnMobile} />
        </div>

        <div className="sheet-body">
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
            <span className="active country-chip" title={selectedCountry.name}>
              {selectedCountry.name}
            </span>
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
                  setRegion(r, {
                    focus: !(selectedCountry && r.id === 'world'),
                  })
                  collapseSheetOnMobile()
                }}
            >
              {r.label}
            </button>
          ))}
          {!selectedCountry && (
            <button
              type="button"
              className={flatMap ? 'active' : ''}
              title="Flatten the current view to a 2D map"
              onClick={() => {
                setFlatMap(!flatMap)
                collapseSheetOnMobile()
              }}
            >
              Map
            </button>
          )}
        </div>

        <FlightFilters />
        <AlertsPanel />

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
                    if (next && !selectedCountry) focusCamera(f.lat, f.lon, 1.85)
                    if (next) collapseSheetOnMobile()
                  }}
                />
              </div>
            ))
          )}
        </div>
        </div>
        </div>
      </aside>
      </div>
    </div>
  )
}
