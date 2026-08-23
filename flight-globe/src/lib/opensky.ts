import type { BBox } from './geo'
import type { FlightState } from './flight'

export type { FlightState }

/** Error carrying the HTTP status so the poller can react to 429s. */
export class OpenSkyError extends Error {
  status: number
  retryAfterMs?: number
  constructor(status: number, statusText: string, retryAfterMs?: number) {
    super(`OpenSky ${status} ${statusText}`)
    this.name = 'OpenSkyError'
    this.status = status
    this.retryAfterMs = retryAfterMs
  }
}

// OpenSky /states/all: state vectors are positional arrays.
type RawState = (number | string | boolean | null)[]

interface StatesResponse {
  time: number
  states: RawState[] | null
}

/**
 * Fetch live aircraft states from OpenSky (proxied through the dev server).
 * Pass a bbox to restrict the query — smaller queries are cheaper on
 * OpenSky's credit system and return faster.
 */
export async function fetchStates(bbox?: BBox): Promise<FlightState[]> {
  let url = '/opensky/states/all'
  if (bbox) {
    const params = new URLSearchParams({
      lamin: bbox.minLat.toFixed(4),
      lomin: bbox.minLon.toFixed(4),
      lamax: bbox.maxLat.toFixed(4),
      lomax: bbox.maxLon.toFixed(4),
    })
    url += `?${params.toString()}`
  }

  const res = await fetch(url)
  if (!res.ok) {
    const retryHeader = res.headers.get('Retry-After')
    const retryAfterMs = retryHeader ? Number(retryHeader) * 1000 : undefined
    throw new OpenSkyError(res.status, res.statusText, retryAfterMs)
  }
  const data = (await res.json()) as StatesResponse
  if (!data.states) return []

  const out: FlightState[] = []
  for (const s of data.states) {
    const lon = s[5] as number | null
    const lat = s[6] as number | null
    if (lon == null || lat == null) continue // no position fix
    out.push({
      icao24: s[0] as string,
      callsign: ((s[1] as string) || '').trim(),
      originCountry: (s[2] as string) || '',
      lon,
      lat,
      baroAltitude: s[7] as number | null,
      onGround: s[8] as boolean,
      velocity: s[9] as number | null,
      track: s[10] as number | null,
      verticalRate: s[11] as number | null,
      geoAltitude: s[13] as number | null,
      lastContact: s[4] as number,
      squawk: ((s[14] as string) || '').trim() || null,
    })
  }
  return out
}
