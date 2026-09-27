import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store/useStore'
import type { LabelMode } from '../store/useStore'

function Segmented<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
}: {
  value: T
  options: { id: T; label: string; title?: string }[]
  onChange: (v: T) => void
  ariaLabel: string
}) {
  return (
    <div className="filter-seg" role="group" aria-label={ariaLabel}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          title={o.title}
          className={value === o.id ? 'active' : undefined}
          onClick={() => onChange(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

/** Gear in the bottom-right that opens the display layer options. */
export function DisplayMenu() {
  const display = useStore((s) => s.display)
  const setDisplay = useStore((s) => s.setDisplay)
  const labelMode = useStore((s) => s.labelMode)
  const setLabelMode = useStore((s) => s.setLabelMode)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  return (
    <div className="display-menu" ref={rootRef}>
      {open && (
        <div className="panel display-panel" role="dialog" aria-label="Display options">
          <div className="flight-filters-row">
            <span className="flight-filters-label">Plane</span>
            <Segmented
              ariaLabel="Airplanes"
              value={display.planes ? 'on' : 'off'}
              onChange={(v) => setDisplay({ planes: v === 'on' })}
              options={[
                { id: 'on', label: 'On' },
                { id: 'off', label: 'Off' },
              ]}
            />
          </div>
          <div className="flight-filters-row">
            <span className="flight-filters-label">Apt</span>
            <Segmented
              ariaLabel="Airports"
              value={display.airports}
              onChange={(airports) => setDisplay({ airports })}
              options={[
                { id: 'off', label: 'Off' },
                { id: 'large', label: 'Large', title: 'Large airports only' },
                { id: 'all', label: 'All' },
              ]}
            />
          </div>
          <div className="flight-filters-row">
            <span className="flight-filters-label">Tags</span>
            <Segmented<LabelMode>
              ariaLabel="Callsign labels"
              value={labelMode}
              onChange={setLabelMode}
              options={[
                {
                  id: 'auto',
                  label: 'Auto',
                  title: 'More flight labels as you zoom in',
                },
                { id: 'on', label: 'On', title: 'Always show flight labels' },
                { id: 'off', label: 'Off' },
              ]}
            />
          </div>
          <div className="flight-filters-row">
            <span className="flight-filters-label">Names</span>
            <Segmented
              ariaLabel="Airport name labels"
              value={display.airportLabels ? 'on' : 'off'}
              onChange={(v) => setDisplay({ airportLabels: v === 'on' })}
              options={[
                { id: 'on', label: 'On', title: 'Airport code and name' },
                { id: 'off', label: 'Off' },
              ]}
            />
          </div>
          <div className="flight-filters-row">
            <span className="flight-filters-label">Path</span>
            <Segmented
              ariaLabel="Route lines"
              value={display.routes ? 'on' : 'off'}
              onChange={(v) => setDisplay({ routes: v === 'on' })}
              options={[
                { id: 'on', label: 'On', title: 'Selected and pinned routes' },
                { id: 'off', label: 'Off' },
              ]}
            />
          </div>
          <div className="flight-filters-row">
            <span className="flight-filters-label">Bdr</span>
            <Segmented
              ariaLabel="Country borders"
              value={display.borders ? 'on' : 'off'}
              onChange={(v) => setDisplay({ borders: v === 'on' })}
              options={[
                { id: 'on', label: 'On', title: 'Country outlines' },
                { id: 'off', label: 'Off' },
              ]}
            />
          </div>
        </div>
      )}
      <button
        type="button"
        className="display-gear"
        aria-expanded={open}
        aria-label={open ? 'Close display options' : 'Display options'}
        title="Display options"
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.2 7.2 0 0 0-1.63-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.22-1.13.53-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.84a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.41 1.05.72 1.63.94l.36 2.54c.05.24.26.42.5.42h3.84c.24 0 .45-.18.5-.42l.36-2.54c.58-.22 1.13-.53 1.63-.94l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z"
          />
        </svg>
      </button>
    </div>
  )
}
