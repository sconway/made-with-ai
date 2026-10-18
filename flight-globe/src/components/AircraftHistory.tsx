import { useEffect, useState } from 'react'
import { useStore } from '../store/useStore'
import {
  fetchAircraftFlights,
  fetchAircraftTrack,
  useBackend,
  type LoggedFlight,
} from '../lib/api'
import { fmtClock, fmtDuration } from '../lib/flightInfo'

const REFRESH_MS = 120_000
const TRACK_PAD_MS = 5 * 60 * 1000

function dayLabel(ms: number): string {
  const d = new Date(ms)
  const today = new Date()
  const yesterday = new Date(today.getTime() - 86_400_000)
  if (d.toDateString() === today.toDateString()) return 'Today'
  if (d.toDateString() === yesterday.toDateString()) return 'Yesterday'
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
}

function routeLabel(f: LoggedFlight): string {
  const from = f.from?.iata ?? 'Unknown'
  const to = f.inProgress ? 'In flight' : (f.to?.iata ?? 'Unknown')
  return `${from} → ${to}`
}

function metaLabel(f: LoggedFlight): string {
  const day = dayLabel(f.start)
  if (f.inProgress) return `${day} · in the air since ${fmtClock(f.start)}`
  return `${day} · ${fmtClock(f.start)}–${fmtClock(f.end)} · ${fmtDuration((f.end - f.start) / 1000)}`
}

/** This airframe's recent flights from stored history; click one to draw its track. */
export function AircraftHistory({ icao24 }: { icao24: string }) {
  const backend = useBackend()
  const historyTrack = useStore((s) => s.historyTrack)
  const setHistoryTrack = useStore((s) => s.setHistoryTrack)
  const focusCamera = useStore((s) => s.focusCamera)
  const [flights, setFlights] = useState<LoggedFlight[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!backend) return
    let cancelled = false
    setFlights(null)
    setFailed(false)
    const load = () =>
      fetchAircraftFlights(icao24)
        .then((list) => {
          if (!cancelled) setFlights(list)
        })
        .catch(() => {
          if (!cancelled) setFailed(true)
        })
    void load()
    const id = window.setInterval(load, REFRESH_MS)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [icao24, backend])

  if (!backend || failed) return null

  const showTrack = async (f: LoggedFlight) => {
    if (historyTrack?.icao24 === icao24 && historyTrack.start === f.start) {
      setHistoryTrack(null)
      return
    }
    try {
      const points = await fetchAircraftTrack(
        icao24,
        f.start - TRACK_PAD_MS,
        f.inProgress ? Date.now() : f.end + TRACK_PAD_MS,
      )
      if (points.length < 2) return
      setHistoryTrack({ icao24, start: f.start, points })
      const s = useStore.getState()
      if (!s.followFlight) {
        let minLat = 90
        let maxLat = -90
        let minLon = 180
        let maxLon = -180
        for (const p of points) {
          minLat = Math.min(minLat, p[1])
          maxLat = Math.max(maxLat, p[1])
          minLon = Math.min(minLon, p[2])
          maxLon = Math.max(maxLon, p[2])
        }
        const span = Math.max(maxLat - minLat, (maxLon - minLon) * 0.6)
        const mid = points[Math.floor(points.length / 2)]!
        focusCamera(mid[1], mid[2], Math.min(3.4, Math.max(1.6, 1.5 + span / 28)))
      }
    } catch {
      /* track unavailable — leave the list as is */
    }
  }

  return (
    <section className="airport-board-group aircraft-history">
      <h3>Recent flights{flights ? ` · ${flights.length}` : ''}</h3>
      {flights == null ? (
        <p className="airport-board-empty">Loading history…</p>
      ) : flights.length === 0 ? (
        <p className="airport-board-empty">
          No stored flights yet — history builds while the tracker runs.
        </p>
      ) : (
        <ul>
          {flights.map((f) => {
            const active =
              historyTrack?.icao24 === icao24 && historyTrack.start === f.start
            return (
              <li key={f.start}>
                <button
                  type="button"
                  className={active ? 'active' : undefined}
                  onClick={() => void showTrack(f)}
                  title={active ? 'Hide this track' : 'Show this flight’s track'}
                >
                  <span className="airport-board-cs">
                    {routeLabel(f)}
                    {f.callsign ? (
                      <span className="aircraft-history-cs"> {f.callsign}</span>
                    ) : null}
                  </span>
                  <span className="airport-board-meta">{metaLabel(f)}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}
