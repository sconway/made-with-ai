import type { BBox } from './geo'
import type { FlightState, Route } from './flight'

export interface FlightsApiResponse {
  flights: FlightState[]
  updatedAt: number
  ageMs: number
  scope: string
  count: number
  pending?: boolean
  error?: string | null
  playback?: boolean
}

export interface RouteApiResponse {
  callsign: string
  route: Route | null
  cached: boolean
}

export interface PlaybackMeta {
  earliest: number | null
  latest: number | null
  count: number
  points: Array<{ t: number; count: number }>
  pollIntervalMs: number
}

/**
 * When true (default), the browser talks only to our backend (`/api/*`).
 * Set VITE_USE_BACKEND=0 to fall back to the old direct OpenSky / airplanes.live
 * proxies (dev-only; not suitable for many users).
 */
export function useBackend(): boolean {
  return import.meta.env.VITE_USE_BACKEND !== '0'
}

export async function fetchFlightsFromBackend(opts: {
  scope?: string
  bbox?: BBox | null
  /** Historical snapshot time (unix ms). Omit for live cache. */
  at?: number | null
}): Promise<FlightsApiResponse> {
  const params = new URLSearchParams()
  if (opts.bbox) {
    params.set('minLat', opts.bbox.minLat.toFixed(4))
    params.set('minLon', opts.bbox.minLon.toFixed(4))
    params.set('maxLat', opts.bbox.maxLat.toFixed(4))
    params.set('maxLon', opts.bbox.maxLon.toFixed(4))
  } else if (opts.scope) {
    params.set('scope', opts.scope)
  } else {
    params.set('scope', 'world')
  }
  if (opts.at != null) params.set('at', String(Math.round(opts.at)))

  const res = await fetch(`/api/flights?${params}`)
  if (!res.ok) {
    throw new Error(`flights ${res.status}`)
  }
  return (await res.json()) as FlightsApiResponse
}

export async function fetchPlaybackMeta(): Promise<PlaybackMeta> {
  const res = await fetch('/api/playback')
  if (!res.ok) throw new Error(`playback ${res.status}`)
  return (await res.json()) as PlaybackMeta
}

export async function fetchRouteFromBackend(
  callsign: string,
  icao24?: string,
): Promise<Route | null | undefined> {
  try {
    const params = new URLSearchParams()
    if (icao24) params.set('icao24', icao24)
    const q = params.toString()
    const res = await fetch(
      `/api/routes/${encodeURIComponent(callsign)}${q ? `?${q}` : ''}`,
    )
    if (res.status === 404) return null
    if (!res.ok) return undefined
    const data = (await res.json()) as RouteApiResponse
    return data.route
  } catch {
    return undefined
  }
}
