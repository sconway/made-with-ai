import { useState, type ReactNode } from 'react'

export type SidebarSectionId = 'region' | 'filters' | 'alerts' | 'pins'

type OpenMap = Record<SidebarSectionId, boolean>

const KEY = 'fg-sidebar'

/** Region stays open; the taller blocks start closed so the flight list is visible. */
const DEFAULT_OPEN: OpenMap = {
  region: true,
  filters: false,
  alerts: false,
  pins: false,
}

function readOpen(): OpenMap {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { ...DEFAULT_OPEN }
    const parsed = JSON.parse(raw) as Partial<OpenMap>
    return {
      region:
        typeof parsed.region === 'boolean' ? parsed.region : DEFAULT_OPEN.region,
      filters:
        typeof parsed.filters === 'boolean'
          ? parsed.filters
          : DEFAULT_OPEN.filters,
      alerts:
        typeof parsed.alerts === 'boolean' ? parsed.alerts : DEFAULT_OPEN.alerts,
      pins: typeof parsed.pins === 'boolean' ? parsed.pins : DEFAULT_OPEN.pins,
    }
  } catch {
    return { ...DEFAULT_OPEN }
  }
}

function writeOpen(open: OpenMap): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(open))
  } catch {
    /* ignore quota / private mode */
  }
}

export function useSidebarSections() {
  const [open, setOpen] = useState<OpenMap>(readOpen)
  const toggle = (id: SidebarSectionId) => {
    setOpen((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      writeOpen(next)
      return next
    })
  }
  return { open, toggle }
}

export function SidebarSection({
  id,
  title,
  summary,
  open,
  onToggle,
  action,
  children,
}: {
  id: SidebarSectionId
  title: string
  summary: string
  open: boolean
  onToggle: () => void
  /** Sits beside the toggle, so it does not expand or collapse the section. */
  action?: ReactNode
  children: ReactNode
}) {
  const panelId = `sidebar-section-${id}`
  return (
    <section className={`sidebar-section${open ? ' open' : ''}`}>
      <div className="sidebar-section-head">
        <button
          type="button"
          className="sidebar-section-toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <svg className="sidebar-section-chevron" viewBox="0 0 8 8" aria-hidden>
            <path d="M1 2.5 L4 5.5 L7 2.5" />
          </svg>
          <span className="sidebar-section-title">{title}</span>
          {!open && <span className="sidebar-section-summary">{summary}</span>}
        </button>
        {action}
      </div>
      <div className="sidebar-section-body" id={panelId} hidden={!open}>
        {children}
      </div>
    </section>
  )
}
