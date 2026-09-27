import {
  DEFAULT_TRAFFIC_FILTERS,
  type TrafficFilters,
} from './filters'
import type { AlertWatch, AlertWatchKind, TrailMode } from '../store/useStore'

const KEY_PINS = 'fg-pins'
const KEY_FILTERS = 'fg-filters'
const KEY_WATCHES = 'fg-watches'
const KEY_TRAILS = 'fg-trails'

function readJson(key: string): unknown {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    return JSON.parse(raw) as unknown
  } catch {
    return null
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* ignore quota / private mode */
  }
}

function isPhase(v: unknown): v is TrafficFilters['phase'] {
  return v === 'all' || v === 'airborne' || v === 'ground'
}

function isKind(v: unknown): v is TrafficFilters['kind'] {
  return v === 'all' || v === 'commercial' || v === 'other'
}

function isRoute(v: unknown): v is TrafficFilters['route'] {
  return v === 'all' || v === 'known' || v === 'unknown'
}

function numOrNull(v: unknown): number | null {
  if (v == null) return null
  if (typeof v !== 'number' || !Number.isFinite(v)) return null
  return v
}

export function readPinnedFlightIds(): string[] {
  const raw = readJson(KEY_PINS)
  if (!Array.isArray(raw)) return []
  const ids: string[] = []
  for (const item of raw) {
    if (typeof item !== 'string') continue
    const id = item.trim().toLowerCase()
    if (!/^[a-f0-9]{1,8}$/.test(id)) continue
    if (ids.includes(id)) continue
    ids.push(id)
    if (ids.length >= 8) break
  }
  return ids
}

export function writePinnedFlightIds(ids: string[]): void {
  writeJson(KEY_PINS, ids)
}

export function readTrafficFilters(): TrafficFilters {
  const raw = readJson(KEY_FILTERS)
  if (!raw || typeof raw !== 'object') return { ...DEFAULT_TRAFFIC_FILTERS }
  const o = raw as Record<string, unknown>
  const airline =
    typeof o.airline === 'string'
      ? o.airline.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3)
      : ''
  return {
    phase: isPhase(o.phase) ? o.phase : 'all',
    altMinM: numOrNull(o.altMinM),
    altMaxM: numOrNull(o.altMaxM),
    speedMinMs: numOrNull(o.speedMinMs),
    speedMaxMs: numOrNull(o.speedMaxMs),
    airline,
    kind: isKind(o.kind) ? o.kind : 'all',
    route: isRoute(o.route) ? o.route : 'all',
  }
}

export function writeTrafficFilters(filters: TrafficFilters): void {
  writeJson(KEY_FILTERS, filters)
}

export function readAlertWatches(): AlertWatch[] {
  const raw = readJson(KEY_WATCHES)
  if (!Array.isArray(raw)) return []
  const out: AlertWatch[] = []
  const seen = new Set<string>()
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const o = item as Record<string, unknown>
    const kind = o.kind as AlertWatchKind
    if (kind !== 'callsign' && kind !== 'country') continue
    const value = typeof o.value === 'string' ? o.value.trim() : ''
    if (!value) continue
    const label = typeof o.label === 'string' && o.label.trim() ? o.label.trim() : value
    const dup = `${kind}:${value}`
    if (seen.has(dup)) continue
    seen.add(dup)
    const id =
      typeof o.id === 'string' && o.id.trim()
        ? o.id.trim()
        : `${kind}-${value}`
    out.push({ id, kind, value, label })
    if (out.length >= 12) break
  }
  return out
}

export function writeAlertWatches(watches: AlertWatch[]): void {
  writeJson(KEY_WATCHES, watches)
}

export function readTrailMode(): TrailMode {
  try {
    const v = localStorage.getItem(KEY_TRAILS)
    if (v === 'off' || v === 'selected' || v === 'all') return v
  } catch {
    /* ignore */
  }
  return 'selected'
}

export function writeTrailMode(mode: TrailMode): void {
  try {
    localStorage.setItem(KEY_TRAILS, mode)
  } catch {
    /* ignore */
  }
}

const KEY_DISPLAY = 'fg-display'

export type AirportDisplay = 'off' | 'large' | 'all'

/** Which globe layers are drawn. Flight callsign density stays on labelMode. */
export interface GlobeDisplay {
  planes: boolean
  airports: AirportDisplay
  /** Name/code tags on airports, including the selected field. */
  airportLabels: boolean
  /** Selected and pinned route lines. */
  routes: boolean
  /** Country outlines. */
  borders: boolean
}

export const DEFAULT_DISPLAY: GlobeDisplay = {
  planes: true,
  airports: 'all',
  airportLabels: true,
  routes: true,
  borders: true,
}

function isAirportDisplay(v: unknown): v is AirportDisplay {
  return v === 'off' || v === 'large' || v === 'all'
}

export function readDisplay(): GlobeDisplay {
  const raw = readJson(KEY_DISPLAY)
  if (!raw || typeof raw !== 'object') return { ...DEFAULT_DISPLAY }
  const o = raw as Record<string, unknown>
  return {
    planes: typeof o.planes === 'boolean' ? o.planes : true,
    airports: isAirportDisplay(o.airports) ? o.airports : 'all',
    airportLabels: typeof o.airportLabels === 'boolean' ? o.airportLabels : true,
    routes: typeof o.routes === 'boolean' ? o.routes : true,
    borders: typeof o.borders === 'boolean' ? o.borders : true,
  }
}

export function writeDisplay(display: GlobeDisplay): void {
  writeJson(KEY_DISPLAY, display)
}
