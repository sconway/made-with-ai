import { useEffect, useMemo, useState } from 'react'
import { useStore, MAX_PINNED_FLIGHTS } from '../store/useStore'
import {
  airlineCodeFromCallsign,
  airlineName,
  climbLabel,
  endpointLabel,
  estimateFlightTimes,
  fmtAltitude,
  fmtClock,
  fmtDuration,
  fmtSpeed,
  fmtVerticalRate,
  resolveRoute,
} from '../lib/flightInfo'
import {
  buildShareUrl,
  copyText,
  deepLinkFromApp,
} from '../lib/deepLink'
import { isConfirmedEmergency, emergencySquawkLabel, emergencySquawkHint } from '../lib/squawk'

interface TrendSample {
  t: number
  speed: number | null
}

const prevSpeed = new Map<string, TrendSample>()

function speedTrend(id: string, speed: number | null): string {
  const prev = prevSpeed.get(id)
  if (prev && prev.speed != null && speed != null && Date.now() - prev.t < 180_000) {
    const d = speed - prev.speed
    if (d > 2) return 'Accelerating'
    if (d < -2) return 'Decelerating'
  }
  return 'Steady'
}

/**
 * Right-side detail card for the selected aircraft.
 */
export function FlightDetailPanel() {
  const selectedId = useStore((s) => s.selectedFlightId)
  const flight = useStore((s) =>
    selectedId ? s.flightsById.get(selectedId) : undefined,
  )
  const countries = useStore((s) => s.countries)
  const routesVersion = useStore((s) => s.routesVersion)
  const followFlight = useStore((s) => s.followFlight)
  const setFollowFlight = useStore((s) => s.setFollowFlight)
  const pinnedFlightIds = useStore((s) => s.pinnedFlightIds)
  const togglePinnedFlight = useStore((s) => s.togglePinnedFlight)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const region = useStore((s) => s.region)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const emergencyVersion = useStore((s) => s.emergencyVersion)
  const [tick, setTick] = useState(0)
  const [shareLabel, setShareLabel] = useState<'Share' | 'Copied' | 'Failed'>(
    'Share',
  )
  void routesVersion
  void emergencyVersion

  // Refresh ETA clocks while a flight is selected.
  useEffect(() => {
    if (!selectedId) return
    const id = window.setInterval(() => setTick((n) => n + 1), 30_000)
    return () => clearInterval(id)
  }, [selectedId])

  // Esc exits follow (or closes the panel if not following).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      const t = e.target as HTMLElement | null
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return
      if (followFlight) {
        e.preventDefault()
        setFollowFlight(false)
        return
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [followFlight, setFollowFlight])

  useEffect(() => {
    if (!flight) return
    const id = flight.icao24
    const before = prevSpeed.get(id)
    // Defer writing the new sample so this render can still compare against before.
    const handle = window.setTimeout(() => {
      prevSpeed.set(id, { t: Date.now(), speed: flight.velocity })
      setTick((n) => n + 1)
    }, 0)
    void before
    return () => clearTimeout(handle)
  }, [flight?.icao24, flight?.velocity])

  const details = useMemo(() => {
    if (!flight) return null
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
    const alt = flight.geoAltitude ?? flight.baroAltitude
    const squawk = flight.squawk?.trim() || null
    const emergency = isConfirmedEmergency(flight)
    const times = route ? estimateFlightTimes(flight, route) : null
    return {
      callsign: flight.callsign || flight.icao24.toUpperCase(),
      code,
      airline,
      origin,
      dest,
      alt,
      squawk,
      emergency,
      trend: speedTrend(flight.icao24, flight.velocity),
      times,
    }
  }, [flight, countries, routesVersion, tick])

  if (!flight || !details) return null

  const pinned = pinnedFlightIds.includes(flight.icao24)
  const times = details.times
  const takeoffLabel = times?.notDeparted
    ? 'Not departed'
    : fmtClock(times?.takeoffMs ?? null)
  const arrivalLabel = times?.arrived
    ? 'Arrived'
    : times?.notDeparted
      ? fmtClock(times.arrivalMs)
      : fmtClock(times?.arrivalMs ?? null)

  const share = async () => {
    const url = buildShareUrl(
      deepLinkFromApp({
        regionId: region.id,
        selected: flight,
        airportIata: searchAirportIata,
        follow: followFlight,
        includeCamera: true,
      }),
    )
    const ok = await copyText(url)
    setShareLabel(ok ? 'Copied' : 'Failed')
    window.setTimeout(() => setShareLabel('Share'), 1600)
    // Keep the address bar in sync with what we copied.
    const path = `${window.location.pathname}${new URL(url).search}${window.location.hash}`
    window.history.replaceState(null, '', path)
  }

  return (
    <aside className="panel flight-detail">
      <header className="flight-detail-header">
        <div className="flight-detail-ident">
          <div className="airline-mark" aria-hidden title={details.airline}>
            {(details.code || '??').slice(0, 2)}
          </div>
          <div>
            <strong>{details.callsign}</strong>
            <small>{details.airline}</small>
          </div>
        </div>
        <button
          type="button"
          className="flight-detail-close"
          onClick={() => {
            setFollowFlight(false)
            setSelectedFlight(null)
          }}
          aria-label="Close"
        >
          ×
        </button>
      </header>

      {details.emergency && details.squawk && (
        <div className="flight-detail-emergency" role="status">
          <div>
            Squawk {details.squawk} — {emergencySquawkLabel(details.squawk)}
          </div>
          <small>{emergencySquawkHint()}</small>
        </div>
      )}

      <div className="flight-detail-route">
        {details.origin && details.dest ? (
          <>
            <span>{details.origin.iata ?? details.origin.label}</span>
            <span className="flight-arrow">→</span>
            <span>{details.dest.iata ?? details.dest.label}</span>
          </>
        ) : (
          <span className="flight-route-pending">No route data</span>
        )}
      </div>
      {details.origin && details.dest && (
        <div className="flight-detail-route-full">
          {(details.origin.airportName ?? details.origin.label) +
            ' → ' +
            (details.dest.airportName ?? details.dest.label)}
        </div>
      )}

      {times && (
        <dl className="flight-detail-times">
          <div>
            <dt>Est. takeoff</dt>
            <dd>{takeoffLabel}</dd>
          </div>
          <div>
            <dt>Est. arrival</dt>
            <dd>{arrivalLabel}</dd>
          </div>
          <div>
            <dt>Remaining</dt>
            <dd>
              {times.arrived ? '—' : fmtDuration(times.remainingSec)}
            </dd>
          </div>
          <div>
            <dt>Progress</dt>
            <dd>
              {times.progress != null
                ? `${Math.round(times.progress * 100)}%`
                : '—'}
            </dd>
          </div>
          <p className="flight-detail-times-note">
            From position &amp; speed — not the airline schedule
          </p>
        </dl>
      )}

      <dl className="flight-detail-grid">
        <div>
          <dt>Altitude</dt>
          <dd>{fmtAltitude(details.alt)}</dd>
        </div>
        <div>
          <dt>Speed</dt>
          <dd>{fmtSpeed(flight.onGround ? 0 : flight.velocity)}</dd>
        </div>
        <div>
          <dt>Track</dt>
          <dd>{flight.track != null ? `${Math.round(flight.track)}°` : '—'}</dd>
        </div>
        <div>
          <dt>Vertical</dt>
          <dd>{fmtVerticalRate(flight.verticalRate)}</dd>
        </div>
        <div>
          <dt>Phase</dt>
          <dd>
            {flight.onGround ? 'On ground' : climbLabel(flight.verticalRate)}
          </dd>
        </div>
        <div>
          <dt>Speed trend</dt>
          <dd>{details.trend}</dd>
        </div>
        <div>
          <dt>ICAO24</dt>
          <dd className="mono">{flight.icao24.toUpperCase()}</dd>
        </div>
        <div>
          <dt>Squawk</dt>
          <dd className={details.emergency ? 'emergency' : undefined}>
            {details.squawk ?? '—'}
          </dd>
        </div>
        {flight.registration && (
          <div>
            <dt>Reg</dt>
            <dd>{flight.registration}</dd>
          </div>
        )}
        {flight.typeCode && (
          <div>
            <dt>Type</dt>
            <dd>{flight.typeCode}</dd>
          </div>
        )}
        <div>
          <dt>Position</dt>
          <dd className="mono">
            {flight.lat.toFixed(2)}°, {flight.lon.toFixed(2)}°
          </dd>
        </div>
        <div>
          <dt>Country</dt>
          <dd>{flight.originCountry || '—'}</dd>
        </div>
      </dl>

      <div className="flight-detail-actions">
        <button
          type="button"
          className={followFlight ? 'active' : ''}
          onClick={() => setFollowFlight(!followFlight)}
          title={
            followFlight
              ? 'Exit focus (Esc)'
              : 'Focus this flight: hide others, mild camera zoom'
          }
        >
          {followFlight ? 'Following' : 'Follow'}
        </button>
        <button
          type="button"
          className={pinned ? 'active' : ''}
          onClick={() => togglePinnedFlight(flight.icao24)}
          disabled={!pinned && pinnedFlightIds.length >= MAX_PINNED_FLIGHTS}
          title={
            pinned
              ? 'Unpin path'
              : pinnedFlightIds.length >= MAX_PINNED_FLIGHTS
                ? `Max ${MAX_PINNED_FLIGHTS} pinned`
                : 'Pin path to compare'
          }
        >
          {pinned ? 'Pinned' : 'Pin path'}
        </button>
        <button
          type="button"
          className={shareLabel === 'Copied' ? 'active' : ''}
          onClick={() => void share()}
          title="Copy a link to this flight"
        >
          {shareLabel}
        </button>
      </div>
      {followFlight && (
        <p className="flight-detail-follow-hint">
          Focus mode — other traffic hidden. Drag to orbit the globe · Esc to
          exit. Selecting another plane transfers follow.
        </p>
      )}
    </aside>
  )
}
