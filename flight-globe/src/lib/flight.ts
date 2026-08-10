/** Origin/destination airports for a flight's route (degrees). */
export interface Route {
  oLat: number
  oLon: number
  dLat: number
  dLon: number
  oIata?: string
  dIata?: string
}

/**
 * Normalized flight state used throughout the app. Units are SI (meters, m/s)
 * regardless of the upstream data source, so rendering code needs no per-source
 * knowledge.
 */
export interface FlightState {
  icao24: string
  callsign: string
  originCountry: string
  lon: number
  lat: number
  baroAltitude: number | null // meters
  geoAltitude: number | null // meters
  onGround: boolean
  velocity: number | null // m/s ground speed
  track: number | null // heading deg from north
  verticalRate: number | null // m/s
  lastContact: number // unix seconds
  registration?: string
  typeCode?: string
  category?: string
  /** Present when the route is known up-front (e.g. demo data). */
  route?: Route
}
