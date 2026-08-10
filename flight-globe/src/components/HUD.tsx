import { useStore } from '../store/useStore'
import { REGIONS } from '../lib/regions'
import { MAX_RENDER } from '../lib/viewport'
import type { FlightState } from '../lib/opensky'

function fmtAlt(m: number | null): string {
  if (m == null) return '—'
  return `${Math.round(m).toLocaleString()} m`
}
function fmtSpeed(ms: number | null): string {
  if (ms == null) return '—'
  return `${Math.round(ms * 1.94384)} kn`
}

function FlightDetail({ flight }: { flight: FlightState }) {
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  return (
    <div className="panel detail">
      <button className="close" onClick={() => setSelectedFlight(null)}>
        ×
      </button>
      <h3>{flight.callsign || flight.registration || flight.icao24.toUpperCase()}</h3>
      <div className="sub">
        {[flight.originCountry, flight.typeCode, flight.registration]
          .filter(Boolean)
          .join(' · ') || 'Live aircraft'}
      </div>
      <dl>
        <dt>ICAO24</dt>
        <dd>{flight.icao24.toUpperCase()}</dd>
        <dt>Altitude</dt>
        <dd>{fmtAlt(flight.geoAltitude ?? flight.baroAltitude)}</dd>
        <dt>Ground speed</dt>
        <dd>{fmtSpeed(flight.velocity)}</dd>
        <dt>Heading</dt>
        <dd>{flight.track != null ? `${Math.round(flight.track)}°` : '—'}</dd>
        <dt>Vert. rate</dt>
        <dd>{fmtSpeed(flight.verticalRate)}</dd>
        <dt>Position</dt>
        <dd>
          {flight.lat.toFixed(2)}, {flight.lon.toFixed(2)}
        </dd>
        <dt>Status</dt>
        <dd>{flight.onGround ? 'On ground' : 'Airborne'}</dd>
      </dl>
    </div>
  )
}

function CountryDetail() {
  const country = useStore((s) => s.selectedCountry)!
  const flights = useStore((s) => s.flights)
  const setSelectedCountry = useStore((s) => s.setSelectedCountry)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)

  const inView = flights
    .filter(
      (f) =>
        f.lon >= country.bbox.minLon &&
        f.lon <= country.bbox.maxLon &&
        f.lat >= country.bbox.minLat &&
        f.lat <= country.bbox.maxLat,
    )
    .sort((a, b) => (b.geoAltitude ?? 0) - (a.geoAltitude ?? 0))

  return (
    <div className="panel detail">
      <button className="close" onClick={() => setSelectedCountry(null)}>
        ×
      </button>
      <h3>{country.name}</h3>
      <div className="sub">{inView.length} aircraft in view</div>
      <div className="country-list">
        {inView.slice(0, 60).map((f) => (
          <div
            key={f.icao24}
            className="row"
            onClick={() => setSelectedFlight(f.icao24)}
          >
            <span className="call">{f.callsign || f.icao24.toUpperCase()}</span>
            <span className="alt">{fmtAlt(f.geoAltitude ?? f.baroAltitude)}</span>
          </div>
        ))}
        {inView.length === 0 && (
          <div className="sub">No aircraft currently reported here.</div>
        )}
      </div>
    </div>
  )
}

export function HUD() {
  const flights = useStore((s) => s.flights)
  const loading = useStore((s) => s.loading)
  const error = useStore((s) => s.error)
  const demoMode = useStore((s) => s.demoMode)
  const region = useStore((s) => s.region)
  const setRegion = useStore((s) => s.setRegion)
  const setSelectedCountry = useStore((s) => s.setSelectedCountry)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const flightsById = useStore((s) => s.flightsById)
  const showRoutes = useStore((s) => s.showRoutes)
  const setShowRoutes = useStore((s) => s.setShowRoutes)

  const selectedFlight = selectedFlightId
    ? flightsById.get(selectedFlightId)
    : undefined

  return (
    <div className="hud">
      <div className="panel topbar">
        <div className="brand">
          <span className="dot" />
          <div>
            Flight Globe
            <small>live global air traffic</small>
          </div>
        </div>

        <div className="region-select">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              className={r.id === region.id ? 'active' : ''}
              onClick={() => {
                setSelectedCountry(null)
                setRegion(r)
              }}
            >
              {r.label}
            </button>
          ))}
          <button
            className={showRoutes ? 'active' : ''}
            title="Toggle origin → destination route arcs"
            onClick={() => setShowRoutes(!showRoutes)}
          >
            Routes
          </button>
        </div>

        <div className="stats">
          {flights.length > MAX_RENDER && (
            <div className="stat">
              <div className="num">{MAX_RENDER.toLocaleString()}</div>
              <div className="lbl">Shown</div>
            </div>
          )}
          <div className="stat">
            <div className="num">{flights.length.toLocaleString()}</div>
            <div className="lbl">
              {flights.length > MAX_RENDER ? 'In view' : 'Aircraft'}
            </div>
          </div>
        </div>
      </div>

      {selectedFlight ? (
        <FlightDetail flight={selectedFlight} />
      ) : selectedCountry ? (
        <CountryDetail />
      ) : null}

      {loading && !demoMode && (
        <div className="panel loading">
          <span className="spin" /> Updating live positions…
        </div>
      )}
      {error && (
        <div className={`panel loading ${demoMode ? 'demo' : 'err'}`}>
          {demoMode ? '◆' : '⚠'} {error}
        </div>
      )}

      <div className="panel hint">
        Drag to rotate · scroll to zoom · hover a country to highlight · click to
        drill in · click a plane for details
      </div>
    </div>
  )
}
