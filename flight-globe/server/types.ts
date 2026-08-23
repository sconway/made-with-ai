/** Shared API shapes — keep in sync with `src/lib/flight.ts`. */

export interface BBox {
  minLon: number
  minLat: number
  maxLon: number
  maxLat: number
}

export interface Route {
  oLat: number
  oLon: number
  dLat: number
  dLon: number
  oIata?: string
  dIata?: string
  oName?: string
  dName?: string
  oCity?: string
  dCity?: string
}

export interface FlightState {
  icao24: string
  callsign: string
  originCountry: string
  lon: number
  lat: number
  baroAltitude: number | null
  geoAltitude: number | null
  onGround: boolean
  velocity: number | null
  track: number | null
  verticalRate: number | null
  lastContact: number
  squawk?: string | null
  registration?: string
  typeCode?: string
  category?: string
  route?: Route
}

export interface FlightsResponse {
  flights: FlightState[]
  updatedAt: number
  ageMs: number
  scope: string
  count: number
  /** True until the first successful upstream poll fills the cache. */
  pending?: boolean
  /** Upstream failure message when the cache is still empty. */
  error?: string | null
  /** True when this payload came from the history ring buffer (`?at=`). */
  playback?: boolean
}

export interface HealthResponse {
  ok: boolean
  mock: boolean
  pollIntervalMs: number
  upstreamPolls: number
  apiHits: number
  hitsPerUpstreamPoll: number
  lastPollAt: number | null
  lastPollOk: boolean
  lastError: string | null
  cache: {
    count: number
    updatedAt: number | null
    ageMs: number | null
  }
  openskyAuth: boolean
}
