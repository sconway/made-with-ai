import { useEffect, useState } from 'react'
import { useStore } from '../store/useStore'
import { callsignLookupVariants } from '../lib/callsignVariants'

/**
 * Compact alert watches + toast stack.
 * Callsign watches fire when a matching aircraft appears in the feed;
 * country watches fire when a flight is over / routed to that country.
 */
export function AlertsPanel() {
  const watches = useStore((s) => s.alertWatches)
  const addAlertWatch = useStore((s) => s.addAlertWatch)
  const removeAlertWatch = useStore((s) => s.removeAlertWatch)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const flightsById = useStore((s) => s.flightsById)
  const [draft, setDraft] = useState('')

  const addCallsign = () => {
    const raw = draft.trim().toUpperCase().replace(/\s+/g, '')
    if (!raw) return
    const label = callsignLookupVariants(raw)[0] ?? raw
    addAlertWatch({ kind: 'callsign', value: raw, label })
    setDraft('')
  }

  const addSelectedFlight = () => {
    if (!selectedFlightId) return
    const f = flightsById.get(selectedFlightId)
    const raw = (f?.callsign || selectedFlightId).trim().toUpperCase()
    if (!raw) return
    addAlertWatch({
      kind: 'callsign',
      value: raw.replace(/\s+/g, ''),
      label: raw,
    })
  }

  const addCountry = () => {
    if (!selectedCountry) return
    addAlertWatch({
      kind: 'country',
      value: selectedCountry.id,
      label: selectedCountry.name,
    })
  }

  return (
    <div className="alerts-panel">
      <div className="alerts-panel-head">
        <span className="flight-filters-label">Alert</span>
        <div className="alerts-add-row">
          <input
            type="text"
            value={draft}
            maxLength={10}
            placeholder="UAL882"
            spellCheck={false}
            aria-label="Watch callsign"
            onChange={(e) =>
              setDraft(
                e.target.value
                  .toUpperCase()
                  .replace(/[^A-Z0-9]/g, '')
                  .slice(0, 10),
              )
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                addCallsign()
              }
            }}
          />
          <button type="button" onClick={addCallsign} disabled={!draft.trim()}>
            Watch
          </button>
        </div>
      </div>
      <div className="alerts-quick">
        <button
          type="button"
          disabled={!selectedFlightId}
          title="Watch the selected flight’s callsign"
          onClick={addSelectedFlight}
        >
          + Selected
        </button>
        <button
          type="button"
          disabled={!selectedCountry}
          title="Watch flights over / to the selected country"
          onClick={addCountry}
        >
          + Country
        </button>
      </div>
      {watches.length > 0 && (
        <ul className="alerts-list">
          {watches.map((w) => (
            <li key={w.id}>
              <span className="alerts-kind">
                {w.kind === 'callsign' ? 'CS' : 'CY'}
              </span>
              <span className="alerts-label">{w.label}</span>
              <button
                type="button"
                className="alerts-remove"
                aria-label={`Remove watch ${w.label}`}
                onClick={() => removeAlertWatch(w.id)}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function AlertToasts() {
  const toasts = useStore((s) => s.alertToasts)
  const dismissAlertToast = useStore((s) => s.dismissAlertToast)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const focusCamera = useStore((s) => s.focusCamera)
  const flightsById = useStore((s) => s.flightsById)

  useEffect(() => {
    if (toasts.length === 0) return
    const timers = toasts.map((t) =>
      window.setTimeout(() => dismissAlertToast(t.id), 10_000),
    )
    return () => {
      for (const id of timers) clearTimeout(id)
    }
  }, [toasts, dismissAlertToast])

  if (toasts.length === 0) return null

  return (
    <div className="alert-toasts" aria-live="polite">
      {toasts.map((t) => (
        <button
          key={t.id}
          type="button"
          className="panel alert-toast"
          onClick={() => {
            if (t.flightId) {
              const f = flightsById.get(t.flightId)
              setSelectedFlight(t.flightId)
              if (f) focusCamera(f.lat, f.lon, 1.85)
            }
            dismissAlertToast(t.id)
          }}
        >
          <strong>{t.title}</strong>
          <span>{t.body}</span>
        </button>
      ))}
    </div>
  )
}
