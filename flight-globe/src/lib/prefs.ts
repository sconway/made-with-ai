import {
  nonDefaultFilters,
  sanitizeTrafficFilters,
  type TrafficFilters,
} from './filters'
import type { AlertWatch, AlertWatchKind, TrailMode } from '../store/useStore'

const KEY_PINS = 'fg-pins'
const KEY_FILTERS = 'fg-filters'
const KEY_PRESETS = 'fg-filter-presets'
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
  return sanitizeTrafficFilters(readJson(KEY_FILTERS))
}

export function writeTrafficFilters(filters: TrafficFilters): void {
  writeJson(KEY_FILTERS, filters)
}

export interface FilterPreset {
  name: string
  filters: TrafficFilters
}

const MAX_PRESETS = 12

export function readFilterPresets(): FilterPreset[] {
  const raw = readJson(KEY_PRESETS)
  if (!Array.isArray(raw)) return []
  const out: FilterPreset[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const o = item as Record<string, unknown>
    const name = typeof o.name === 'string' ? o.name.trim().slice(0, 40) : ''
    if (!name || out.some((p) => p.name === name)) continue
    out.push({ name, filters: sanitizeTrafficFilters(o.filters) })
    if (out.length >= MAX_PRESETS) break
  }
  return out
}

/** Saves (or replaces by name) and returns the new list, newest first. */
export function saveFilterPreset(name: string, filters: TrafficFilters): FilterPreset[] {
  const trimmed = name.trim().slice(0, 40)
  if (!trimmed) return readFilterPresets()
  const next = [
    { name: trimmed, filters },
    ...readFilterPresets().filter((p) => p.name !== trimmed),
  ].slice(0, MAX_PRESETS)
  writeJson(
    KEY_PRESETS,
    next.map((p) => ({ name: p.name, filters: nonDefaultFilters(p.filters) })),
  )
  return next
}

export function deleteFilterPreset(name: string): FilterPreset[] {
  const next = readFilterPresets().filter((p) => p.name !== name)
  writeJson(
    KEY_PRESETS,
    next.map((p) => ({ name: p.name, filters: nonDefaultFilters(p.filters) })),
  )
  return next
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
