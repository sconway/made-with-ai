import type { FlightState } from './types'

/**
 * Keyless ADS-B fallback when OpenSky is unreachable (common on cloud hosts —
 * OpenSky may block hyperscaler / datacenter egress IPs).
 *
 * Uses https://api.adsb.lol point queries (tar1090 JSON), merged across hubs.
 */

const API = 'https://api.adsb.lol/v2'
const FEET_TO_M = 0.3048
const KNOT_TO_MS = 0.514444
const FTMIN_TO_MS = 0.00508
/** adsb.lol radius is in nautical miles; API accepts up to ~250. */
const RADIUS_NM = 250
const CONCURRENCY = 4

/**
 * Hub centers covering major traffic corridors. Overlaps are fine — we
 * de-dupe by ICAO. Dense NA/EU because those are the common UI scopes.
 */
const HUBS: Array<{ lat: number; lon: number }> = [
  // North America
  { lat: 40.7, lon: -74.0 },
  { lat: 42.4, lon: -71.0 },
  { lat: 38.9, lon: -77.0 },
  { lat: 33.6, lon: -84.4 },
  { lat: 25.8, lon: -80.3 },
  { lat: 41.9, lon: -87.9 },
  { lat: 32.9, lon: -97.0 },
  { lat: 39.9, lon: -104.7 },
  { lat: 33.9, lon: -118.4 },
  { lat: 37.6, lon: -122.4 },
  { lat: 47.4, lon: -122.3 },
  { lat: 45.5, lon: -73.7 },
  { lat: 43.7, lon: -79.4 },
  { lat: 19.4, lon: -99.1 },
  // Europe / Mid-East
  { lat: 51.5, lon: -0.1 },
  { lat: 53.4, lon: -6.3 },
  { lat: 48.9, lon: 2.3 },
  { lat: 50.0, lon: 8.5 },
  { lat: 52.3, lon: 4.8 },
  { lat: 41.8, lon: 12.5 },
  { lat: 40.5, lon: -3.7 },
  { lat: 59.7, lon: 17.9 },
  { lat: 52.2, lon: 21.0 },
  { lat: 41.0, lon: 29.0 },
  { lat: 25.3, lon: 55.4 },
  // Asia-Pacific
  { lat: 35.6, lon: 139.8 },
  { lat: 31.1, lon: 121.8 },
  { lat: 22.3, lon: 114.2 },
  { lat: 1.4, lon: 103.9 },
  { lat: 13.7, lon: 100.6 },
  { lat: -33.9, lon: 151.2 },
  { lat: -37.7, lon: 144.8 },
  // LatAm / Africa
  { lat: -23.4, lon: -46.5 },
  { lat: -34.6, lon: -58.4 },
  { lat: -26.1, lon: 28.2 },
]

interface RawAircraft {
  hex: string
  flight?: string
  r?: string
  t?: string
  category?: string
  lat?: number
  lon?: number
  alt_baro?: number | 'ground'
  alt_geom?: number
  gs?: number
  track?: number
  true_heading?: number
  baro_rate?: number
  geom_rate?: number
  seen_pos?: number
  squawk?: string
}

interface PointResponse {
  ac?: RawAircraft[]
}

function normalize(a: RawAircraft): FlightState | null {
  if (a.lat == null || a.lon == null || !a.hex) return null
  const onGround = a.alt_baro === 'ground'
  const baroM =
    typeof a.alt_baro === 'number' ? a.alt_baro * FEET_TO_M : onGround ? 0 : null
  const geoM = typeof a.alt_geom === 'number' ? a.alt_geom * FEET_TO_M : null
  const rate = a.baro_rate ?? a.geom_rate
  const squawk = (a.squawk || '').trim() || null
  return {
    icao24: a.hex.toLowerCase(),
    callsign: (a.flight ?? '').trim(),
    originCountry: '',
    lon: a.lon,
    lat: a.lat,
    baroAltitude: baroM,
    geoAltitude: geoM,
    onGround,
    velocity: a.gs != null ? a.gs * KNOT_TO_MS : null,
    track: a.track ?? a.true_heading ?? null,
    verticalRate: rate != null ? rate * FTMIN_TO_MS : null,
    lastContact: Math.round(Date.now() / 1000 - (a.seen_pos ?? 0)),
    squawk,
    registration: a.r,
    typeCode: a.t,
    category: a.category,
  }
}

async function fetchHub(
  hub: { lat: number; lon: number },
): Promise<RawAircraft[]> {
  const url =
    `${API}/lat/${hub.lat.toFixed(4)}/lon/${hub.lon.toFixed(4)}/dist/${RADIUS_NM}`
  const res = await fetch(url, {
    headers: { 'User-Agent': 'flight-globe-backend/0.1' },
    signal: AbortSignal.timeout(25_000),
  })
  if (!res.ok) {
    throw new Error(`adsb.lol ${res.status} ${res.statusText}`)
  }
  const data = (await res.json()) as PointResponse
  return data.ac ?? []
}

async function mapPool<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<R>,
): Promise<PromiseSettledResult<R>[]> {
  const out: PromiseSettledResult<R>[] = new Array(items.length)
  let next = 0
  async function worker() {
    while (next < items.length) {
      const i = next++
      try {
        out[i] = { status: 'fulfilled', value: await fn(items[i]) }
      } catch (reason) {
        out[i] = { status: 'rejected', reason }
      }
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, () => worker()),
  )
  return out
}

/** World-ish snapshot by merging overlapping hub queries. */
export async function fetchAdsbLolStates(): Promise<FlightState[]> {
  const results = await mapPool(HUBS, CONCURRENCY, fetchHub)
  const byIcao = new Map<string, FlightState>()
  let ok = 0
  let lastErr: unknown = null

  for (const r of results) {
    if (r.status === 'rejected') {
      lastErr = r.reason
      continue
    }
    ok += 1
    for (const raw of r.value) {
      const f = normalize(raw)
      if (f && !byIcao.has(f.icao24)) byIcao.set(f.icao24, f)
    }
  }

  if (ok === 0) {
    const msg =
      lastErr instanceof Error ? lastErr.message : String(lastErr ?? 'unknown')
    throw new Error(`adsb.lol unreachable — ${msg}`)
  }

  return Array.from(byIcao.values())
}
