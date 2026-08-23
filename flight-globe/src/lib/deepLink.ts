import { callsignLookupVariants } from './callsignVariants'
import { REGIONS, type Region } from './regions'
import type { FlightState } from './flight'
import { findAirport } from './airports'

/** Default region in the store (`REGIONS[1]`). Omitted from the URL when active. */
export const DEFAULT_REGION_ID = REGIONS[1]!.id

export interface DeepLink {
  regionId?: string
  /** ICAO24 hex (preferred stable id). */
  icao?: string
  /** Callsign for human-readable links / fallback match. */
  flight?: string
  airport?: string
  lat?: number
  lon?: number
  dist?: number
  follow?: boolean
}

function normCallsign(s: string): string {
  return s.trim().toUpperCase().replace(/\s+/g, '')
}

function parseNum(raw: string | null): number | undefined {
  if (raw == null || raw === '') return undefined
  const n = Number(raw)
  return Number.isFinite(n) ? n : undefined
}

/** Read deep-link fields from a query string (`?...` or bare params). */
export function parseDeepLink(search: string): DeepLink {
  const q = search.startsWith('?') ? search.slice(1) : search
  const params = new URLSearchParams(q)

  const regionRaw = params.get('region')?.trim().toLowerCase()
  const regionId =
    regionRaw && REGIONS.some((r) => r.id === regionRaw) ? regionRaw : undefined

  const icao = params.get('icao')?.trim().toLowerCase() || undefined
  const flight = params.get('flight')?.trim() || undefined
  const airportRaw = params.get('airport')?.trim().toUpperCase()
  const airportHit = airportRaw ? findAirport(airportRaw) : undefined
  const airport = airportHit?.iata

  const lat = parseNum(params.get('lat'))
  const lon = parseNum(params.get('lon'))
  const dist = parseNum(params.get('dist'))
  const followRaw = params.get('follow')
  const follow =
    followRaw === '1' || followRaw?.toLowerCase() === 'true' ? true : undefined

  const out: DeepLink = {}
  if (regionId) out.regionId = regionId
  if (icao) out.icao = icao
  if (flight) out.flight = flight
  if (airport) out.airport = airport
  if (lat != null && lat >= -90 && lat <= 90) out.lat = lat
  if (lon != null && lon >= -180 && lon <= 180) out.lon = lon
  if (dist != null && dist > 0.5 && dist < 20) out.dist = dist
  if (follow) out.follow = true
  return out
}

/** Serialize deep-link fields to a query string (no leading `?` if empty). */
export function serializeDeepLink(link: DeepLink): string {
  const params = new URLSearchParams()
  if (link.regionId) params.set('region', link.regionId)
  if (link.icao) params.set('icao', link.icao.toLowerCase())
  if (link.flight) {
    const cs = normCallsign(link.flight)
    if (cs) params.set('flight', cs)
  }
  if (link.airport) params.set('airport', link.airport.toUpperCase())
  if (link.lat != null) params.set('lat', link.lat.toFixed(4))
  if (link.lon != null) params.set('lon', link.lon.toFixed(4))
  if (link.dist != null) params.set('dist', link.dist.toFixed(2))
  if (link.follow) params.set('follow', '1')
  const s = params.toString()
  return s ? `?${s}` : ''
}

export function regionById(id: string | undefined): Region | undefined {
  if (!id) return undefined
  return REGIONS.find((r) => r.id === id)
}

/** Match a live flight to deep-link icao / callsign (IATA↔ICAO aware). */
export function findFlightForDeepLink(
  flights: Iterable<FlightState>,
  link: Pick<DeepLink, 'icao' | 'flight'>,
): FlightState | undefined {
  const icao = link.icao?.trim().toLowerCase()
  if (icao) {
    for (const f of flights) {
      if (f.icao24 === icao) return f
    }
  }
  const raw = link.flight?.trim()
  if (!raw) return undefined
  const variants = new Set(callsignLookupVariants(raw).map(normCallsign))
  variants.add(normCallsign(raw))
  for (const f of flights) {
    const cs = normCallsign(f.callsign || '')
    if (!cs) continue
    if (variants.has(cs)) return f
    for (const v of variants) {
      if (cs.startsWith(v) && cs.length <= v.length + 1) return f
    }
  }
  return undefined
}

export function deepLinkFromApp(state: {
  regionId: string
  selected?: FlightState | null
  airportIata?: string | null
  follow?: boolean
  /** When true, include a camera snapshot (share button / bootstrap fallback). */
  includeCamera?: boolean
  camera?: { lat: number; lon: number; dist?: number } | null
}): DeepLink {
  const link: DeepLink = {}
  const hasFocus =
    !!state.selected || !!state.airportIata || !!state.follow || state.includeCamera
  // Include region whenever the link carries focus, or when it isn't the app default
  // (so refresh keeps World/Europe). Bare default NA stays as a clean URL.
  if (hasFocus || state.regionId !== DEFAULT_REGION_ID) {
    link.regionId = state.regionId
  }
  if (state.airportIata) link.airport = state.airportIata
  if (state.selected) {
    link.icao = state.selected.icao24
    const cs = state.selected.callsign?.trim()
    if (cs) link.flight = cs
    if (state.follow) link.follow = true
    if (state.includeCamera) {
      link.lat = state.selected.lat
      link.lon = state.selected.lon
      link.dist = 1.85
    }
  } else if (state.includeCamera && state.camera) {
    link.lat = state.camera.lat
    link.lon = state.camera.lon
    if (state.camera.dist != null) link.dist = state.camera.dist
  }
  return link
}

/** Full URL for the current page with the given deep-link query. */
export function buildShareUrl(link: DeepLink): string {
  const url = new URL(window.location.href)
  url.search = serializeDeepLink(link)
  url.hash = ''
  return url.toString()
}

export async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {
    /* fall through */
  }
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.setAttribute('readonly', '')
    ta.style.position = 'fixed'
    ta.style.left = '-9999px'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  } catch {
    return false
  }
}
