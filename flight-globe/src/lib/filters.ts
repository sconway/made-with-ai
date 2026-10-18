import type { FlightState } from './flight'
import { airlineCodeFromCallsign, airlineName, resolveRoute } from './flightInfo'
import { getCachedRoute } from './routes'
import {
  AIRCRAFT_FAMILIES,
  FAMILY_LABEL,
  classifyAircraft,
  type AircraftFamily,
} from './aircraftFamily'
import { getCachedAircraftType, getCachedRegistration } from './aircraftLookup'
import { findAirport } from './airports'
import { isLikelyMilitary } from './military'
import { isEmergencySquawkCode } from './squawk'
import {
  EMITTER_CATEGORIES,
  emitterCategory,
  CATEGORY_LABEL,
  type EmitterCategory,
} from './emitterCategory'

export type MilitaryMode = 'all' | 'only' | 'hide'
export type { EmitterCategory }
export { EMITTER_CATEGORIES, CATEGORY_LABEL }

/** Flight-phase / altitude / speed / airline / traffic-kind filters. */
export interface TrafficFilters {
  /** all | airborne only | on ground only */
  phase: 'all' | 'airborne' | 'ground'
  /**
   * Altitude band (baro/geo meters). `null` = any.
   * Presets map to common bands in the UI.
   */
  altMinM: number | null
  altMaxM: number | null
  /** Ground speed band (m/s). `null` = any. */
  speedMinMs: number | null
  speedMaxMs: number | null
  /** ICAO airline designator (e.g. UAL). Empty = any. */
  airline: string
  /**
   * commercial ≈ known airline / airline-style callsign;
   * other ≈ GA / private / unknown (OpenSky has no reliable military flag).
   */
  kind: 'all' | 'commercial' | 'other'
  /** Origin/destination route resolved (adsbdb / cache). */
  route: 'all' | 'known' | 'unknown'
  /** Airframe families; empty = any. Unknown airframes are excluded when set. */
  families: AircraftFamily[]
  /** ICAO type designators; `B77*` matches by prefix. Empty = any. */
  types: string[]
  military: MilitaryMode
  /** '' = any, 'emergency' = 7500/7600/7700, else 1–4 octal digits (prefix). */
  squawk: string
  /** IATA or ICAO; matches the resolved route's origin or destination. */
  airport: string
  /** Registration prefix, dashes ignored (N, G-, D-A…). */
  regPrefix: string
  /** ADS-B emitter groups; empty = any. */
  categories: EmitterCategory[]
  /**
   * When a type / family / category / registration filter is on, drop aircraft
   * whose airframe isn't known yet. Off = keep unknowns until the lookup lands.
   */
  hideUnknown: boolean
}

export const DEFAULT_TRAFFIC_FILTERS: TrafficFilters = {
  phase: 'all',
  altMinM: null,
  altMaxM: null,
  speedMinMs: null,
  speedMaxMs: null,
  airline: '',
  kind: 'all',
  route: 'all',
  families: [],
  types: [],
  military: 'all',
  squawk: '',
  airport: '',
  regPrefix: '',
  categories: [],
  hideUnknown: false,
}

const MAX_TYPES = 12

function isPhase(v: unknown): v is TrafficFilters['phase'] {
  return v === 'all' || v === 'airborne' || v === 'ground'
}

function isKind(v: unknown): v is TrafficFilters['kind'] {
  return v === 'all' || v === 'commercial' || v === 'other'
}

function isRouteMode(v: unknown): v is TrafficFilters['route'] {
  return v === 'all' || v === 'known' || v === 'unknown'
}

function isMilitaryMode(v: unknown): v is MilitaryMode {
  return v === 'all' || v === 'only' || v === 'hide'
}

function numOrNull(v: unknown): number | null {
  if (typeof v !== 'number' || !Number.isFinite(v)) return null
  return v
}

/** `B738, a32*  B77W` → ['B738', 'A32*', 'B77W']. */
export function parseTypeList(input: string): string[] {
  const out: string[] = []
  for (const raw of input.toUpperCase().split(/[\s,;]+/)) {
    const t = raw.replace(/[^A-Z0-9*]/g, '').replace(/\*.*$/, '*')
    if (!t || t === '*' || t.length > 5 || out.includes(t)) continue
    out.push(t)
    if (out.length >= MAX_TYPES) break
  }
  return out
}

export function normalizeSquawk(input: string): string {
  const s = input.trim().toLowerCase()
  if (s === 'emergency' || s === 'emer') return 'emergency'
  return s.replace(/[^0-7]/g, '').slice(0, 4)
}

export function normalizeAirportCode(input: string): string {
  return input.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4)
}

export function normalizeRegPrefix(input: string): string {
  return input.toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 8)
}

/** Validates untrusted input (localStorage, presets, share links). */
export function sanitizeTrafficFilters(raw: unknown): TrafficFilters {
  if (!raw || typeof raw !== 'object') return { ...DEFAULT_TRAFFIC_FILTERS }
  const o = raw as Record<string, unknown>
  const str = (v: unknown) => (typeof v === 'string' ? v : '')
  const families = Array.isArray(o.families)
    ? AIRCRAFT_FAMILIES.filter((fam) => (o.families as unknown[]).includes(fam))
    : []
  const types = Array.isArray(o.types)
    ? parseTypeList((o.types as unknown[]).filter((t) => typeof t === 'string').join(' '))
    : []
  return {
    phase: isPhase(o.phase) ? o.phase : 'all',
    altMinM: numOrNull(o.altMinM),
    altMaxM: numOrNull(o.altMaxM),
    speedMinMs: numOrNull(o.speedMinMs),
    speedMaxMs: numOrNull(o.speedMaxMs),
    airline: str(o.airline).toUpperCase().replace(/[^A-Z]/g, '').slice(0, 3),
    kind: isKind(o.kind) ? o.kind : 'all',
    route: isRouteMode(o.route) ? o.route : 'all',
    families,
    types,
    military: isMilitaryMode(o.military) ? o.military : 'all',
    squawk: normalizeSquawk(str(o.squawk)),
    airport: normalizeAirportCode(str(o.airport)),
    regPrefix: normalizeRegPrefix(str(o.regPrefix)),
    categories: Array.isArray(o.categories)
      ? EMITTER_CATEGORIES.filter((c) => (o.categories as unknown[]).includes(c))
      : [],
    hideUnknown: o.hideUnknown === true,
  }
}

/** Only the fields that differ from the defaults (compact for URLs / presets). */
export function nonDefaultFilters(f: TrafficFilters): Partial<TrafficFilters> {
  const out: Record<string, unknown> = {}
  for (const k of Object.keys(DEFAULT_TRAFFIC_FILTERS) as Array<keyof TrafficFilters>) {
    const v = f[k]
    const d = DEFAULT_TRAFFIC_FILTERS[k]
    if (Array.isArray(v) ? v.length > 0 : v !== d) out[k] = v
  }
  return out as Partial<TrafficFilters>
}

/** base64url(JSON) of the non-default fields; '' when nothing is active. */
export function encodeFilters(f: TrafficFilters): string {
  const diff = nonDefaultFilters(f)
  if (Object.keys(diff).length === 0) return ''
  return btoa(JSON.stringify(diff)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

export function decodeFilters(s: string): TrafficFilters | null {
  try {
    const b64 = s.replace(/-/g, '+').replace(/_/g, '/')
    const parsed = JSON.parse(atob(b64 + '='.repeat((4 - (b64.length % 4)) % 4))) as unknown
    const f = sanitizeTrafficFilters(parsed)
    return trafficFiltersActive(f) ? f : null
  } catch {
    return null
  }
}

export type AltBand = 'any' | 'low' | 'mid' | 'high'
export type SpeedBand = 'any' | 'slow' | 'cruise' | 'fast'

/** < FL180, FL180–FL350, > FL350 (approx). */
export function altBandFromFilters(f: TrafficFilters): AltBand {
  if (f.altMinM == null && f.altMaxM == null) return 'any'
  if (f.altMaxM != null && f.altMaxM <= 5500) return 'low'
  if (f.altMinM != null && f.altMinM >= 10_000) return 'high'
  return 'mid'
}

export function filtersFromAltBand(band: AltBand): Pick<
  TrafficFilters,
  'altMinM' | 'altMaxM'
> {
  switch (band) {
    case 'low':
      return { altMinM: null, altMaxM: 5500 } // ~FL180
    case 'mid':
      return { altMinM: 5500, altMaxM: 10_700 } // ~FL180–FL350
    case 'high':
      return { altMinM: 10_700, altMaxM: null }
    default:
      return { altMinM: null, altMaxM: null }
  }
}

/** < 250 kt, 250–450 kt, > 450 kt. */
export function speedBandFromFilters(f: TrafficFilters): SpeedBand {
  if (f.speedMinMs == null && f.speedMaxMs == null) return 'any'
  if (f.speedMaxMs != null && f.speedMaxMs <= 129) return 'slow' // ~250 kt
  if (f.speedMinMs != null && f.speedMinMs >= 232) return 'fast' // ~450 kt
  return 'cruise'
}

export function filtersFromSpeedBand(band: SpeedBand): Pick<
  TrafficFilters,
  'speedMinMs' | 'speedMaxMs'
> {
  switch (band) {
    case 'slow':
      return { speedMinMs: null, speedMaxMs: 129 }
    case 'cruise':
      return { speedMinMs: 129, speedMaxMs: 232 }
    case 'fast':
      return { speedMinMs: 232, speedMaxMs: null }
    default:
      return { speedMinMs: null, speedMaxMs: null }
  }
}

export function trafficFiltersActive(f: TrafficFilters): boolean {
  return (
    f.phase !== 'all' ||
    f.altMinM != null ||
    f.altMaxM != null ||
    f.speedMinMs != null ||
    f.speedMaxMs != null ||
    f.airline.trim().length > 0 ||
    f.kind !== 'all' ||
    f.route !== 'all' ||
    f.families.length > 0 ||
    f.types.length > 0 ||
    f.military !== 'all' ||
    f.squawk !== '' ||
    f.airport !== '' ||
    f.regPrefix !== '' ||
    f.categories.length > 0
  )
}

/** Airframe-dependent filters (type / family / registration) are set. */
export function airframeFiltersActive(f: TrafficFilters): boolean {
  return (
    f.families.length > 0 ||
    f.types.length > 0 ||
    f.regPrefix !== '' ||
    f.categories.length > 0
  )
}

export function flightTypeCode(flight: FlightState): string {
  return (flight.typeCode || getCachedAircraftType(flight.icao24) || '').trim().toUpperCase()
}

function typeMatches(code: string, patterns: string[]): boolean {
  for (const p of patterns) {
    if (p.endsWith('*') ? code.startsWith(p.slice(0, -1)) : code === p) return true
  }
  return false
}

export interface FilterChip {
  id: string
  label: string
  /** Patch that removes just this filter. */
  clear: Partial<TrafficFilters>
}

/** One removable chip per active filter, for the chip row and the HUD summary. */
export function describeFilters(f: TrafficFilters): FilterChip[] {
  const chips: FilterChip[] = []
  if (f.phase !== 'all') {
    chips.push({ id: 'phase', label: f.phase === 'airborne' ? 'Air' : 'Gnd', clear: { phase: 'all' } })
  }
  const alt = altBandFromFilters(f)
  if (alt !== 'any') {
    chips.push({
      id: 'alt',
      label: alt === 'low' ? 'Low' : alt === 'mid' ? 'Mid' : 'High',
      clear: filtersFromAltBand('any'),
    })
  }
  const spd = speedBandFromFilters(f)
  if (spd !== 'any') {
    chips.push({
      id: 'speed',
      label: spd === 'slow' ? '<250 kt' : spd === 'cruise' ? '250–450 kt' : '450+ kt',
      clear: filtersFromSpeedBand('any'),
    })
  }
  if (f.kind !== 'all') {
    chips.push({ id: 'kind', label: f.kind === 'commercial' ? 'Airline' : 'GA', clear: { kind: 'all' } })
  }
  if (f.route !== 'all') {
    chips.push({ id: 'route', label: f.route === 'known' ? 'Routed' : 'No route', clear: { route: 'all' } })
  }
  if (f.airline) chips.push({ id: 'airline', label: f.airline, clear: { airline: '' } })
  for (const fam of f.families) {
    chips.push({
      id: `fam-${fam}`,
      label: FAMILY_LABEL[fam],
      clear: { families: f.families.filter((x) => x !== fam) },
    })
  }
  for (const t of f.types) {
    chips.push({ id: `type-${t}`, label: t, clear: { types: f.types.filter((x) => x !== t) } })
  }
  if (f.military !== 'all') {
    chips.push({
      id: 'mil',
      label: f.military === 'only' ? 'Military' : 'No military',
      clear: { military: 'all' },
    })
  }
  if (f.squawk) {
    chips.push({
      id: 'squawk',
      label: f.squawk === 'emergency' ? 'Emergency' : `Sqk ${f.squawk}${f.squawk.length < 4 ? '…' : ''}`,
      clear: { squawk: '' },
    })
  }
  if (f.airport) chips.push({ id: 'airport', label: `✈ ${f.airport}`, clear: { airport: '' } })
  if (f.regPrefix) chips.push({ id: 'reg', label: `Reg ${f.regPrefix}…`, clear: { regPrefix: '' } })
  for (const cat of f.categories) {
    chips.push({
      id: `cat-${cat}`,
      label: CATEGORY_LABEL[cat],
      clear: { categories: f.categories.filter((x) => x !== cat) },
    })
  }
  if (f.hideUnknown && airframeFiltersActive(f)) {
    chips.push({ id: 'unknown', label: 'Hide unknown', clear: { hideUnknown: false } })
  }
  return chips
}

/** Heuristic: airline-style callsign or known airline name mapping. */
export function isCommercialFlight(flight: FlightState): boolean {
  const callsign = (flight.callsign || '').trim().toUpperCase()
  if (!callsign) return false
  const code = airlineCodeFromCallsign(callsign)
  if (code.length >= 3) {
    const name = airlineName(code)
    if (name !== code && name !== 'Unknown airline') return true
    // UAL123 / BAW9W — letters then digits is typical airline format.
    if (/^[A-Z]{3}\d/.test(callsign)) return true
  }
  return false
}

/** True when origin/destination coords are known for this flight. */
export function flightHasRoute(flight: FlightState): boolean {
  if (flight.route) return true
  const cached = getCachedRoute(flight.callsign)
  return cached != null
}

function altitudeM(flight: FlightState): number {
  return flight.geoAltitude ?? flight.baroAltitude ?? 0
}

function speedMs(flight: FlightState): number {
  if (flight.onGround) return 0
  return flight.velocity ?? 0
}

export function flightMatchesTrafficFilters(
  flight: FlightState,
  filters: TrafficFilters,
): boolean {
  if (filters.phase === 'airborne' && flight.onGround) return false
  if (filters.phase === 'ground' && !flight.onGround) return false

  const alt = altitudeM(flight)
  if (filters.altMinM != null && alt < filters.altMinM) return false
  if (filters.altMaxM != null && alt > filters.altMaxM) return false

  const spd = speedMs(flight)
  if (filters.speedMinMs != null && spd < filters.speedMinMs) return false
  if (filters.speedMaxMs != null && spd > filters.speedMaxMs) return false

  const airlineQ = filters.airline.trim().toUpperCase()
  if (airlineQ) {
    const code = airlineCodeFromCallsign(flight.callsign || '')
    if (!code.startsWith(airlineQ) && code !== airlineQ) return false
  }

  if (filters.kind === 'commercial' && !isCommercialFlight(flight)) return false
  if (filters.kind === 'other' && isCommercialFlight(flight)) return false

  const routeMode = filters.route ?? 'all'
  if (routeMode === 'known' && !flightHasRoute(flight)) return false
  if (routeMode === 'unknown' && flightHasRoute(flight)) return false

  if (filters.military !== 'all') {
    const mil = isLikelyMilitary(flight)
    if (filters.military === 'only' ? !mil : mil) return false
  }

  if (filters.squawk) {
    const sq = (flight.squawk || '').trim()
    if (filters.squawk === 'emergency') {
      if (!isEmergencySquawkCode(sq)) return false
    } else if (!sq.startsWith(filters.squawk)) {
      return false
    }
  }

  if (filters.airport) {
    const r = resolveRoute(flight)
    if (!r) return false
    const iata = airportIata(filters.airport)
    if (r.oIata !== iata && r.dIata !== iata) return false
  }

  if (filters.types.length > 0) {
    const code = flightTypeCode(flight)
    if (!code) {
      if (filters.hideUnknown) return false
    } else if (!typeMatches(code, filters.types)) {
      return false
    }
  }

  if (filters.families.length > 0) {
    const fam = classifyAircraft(
      flightTypeCode(flight),
      flight.typeClass,
      flight.category,
    )
    if (!fam) {
      if (filters.hideUnknown) return false
    } else if (!filters.families.includes(fam)) {
      return false
    }
  }

  if (filters.categories.length > 0) {
    const cat = emitterCategory(flight.category)
    if (!cat) {
      if (filters.hideUnknown) return false
    } else if (!filters.categories.includes(cat)) {
      return false
    }
  }

  if (filters.regPrefix) {
    const reg = (flight.registration || getCachedRegistration(flight.icao24) || '').replace(/-/g, '')
    if (!reg) {
      if (filters.hideUnknown) return false
    } else if (!reg.startsWith(filters.regPrefix.replace(/-/g, ''))) {
      return false
    }
  }

  return true
}

const iataMemo = new Map<string, string>()

/** Routes carry IATA; accept ICAO input by mapping through the airport table. */
function airportIata(code: string): string {
  let v = iataMemo.get(code)
  if (v === undefined) {
    v = findAirport(code)?.iata || code
    iataMemo.set(code, v)
  }
  return v
}

export function filterFlightsByTraffic(
  flights: FlightState[],
  filters: TrafficFilters,
): FlightState[] {
  if (!trafficFiltersActive(filters)) return flights
  return flights.filter((f) => flightMatchesTrafficFilters(f, filters))
}
