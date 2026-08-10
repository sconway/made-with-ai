import type { BBox } from './geo'
import type { FlightState } from './flight'
import { MAX_RADIUS_NM } from './viewport'

// airplanes.live returns tar1090/readsb JSON in imperial units.
const FEET_TO_M = 0.3048
const KNOT_TO_MS = 0.514444
const FTMIN_TO_MS = 0.00508

const MAX_POINTS = 8 // bound the request fan-out (and thus the rate)
const NM_PER_DEG_LAT = 60

// Coarse spread over busy regions for the zoomed-out (world) view.
const OVERVIEW_POINTS = [
  { lat: 40, lon: -95 },
  { lat: 50, lon: 8 },
  { lat: 35, lon: 135 },
  { lat: 25, lon: 55 },
  { lat: -28, lon: 135 },
  { lat: -20, lon: -50 },
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
}

interface PointResponse {
  ac?: RawAircraft[]
}

interface QueryPoint {
  lat: number
  lon: number
  radius: number
}

// airplanes.live asks for <= 1 request/second. Serialize requests so a tiled
// query can't burst past the limit.
const MIN_REQUEST_GAP_MS = 1100
let lastRequestAt = 0
async function throttle(): Promise<void> {
  const wait = lastRequestAt + MIN_REQUEST_GAP_MS - Date.now()
  if (wait > 0) await new Promise((r) => setTimeout(r, wait))
  lastRequestAt = Date.now()
}

/** Tile the visible bbox into <= MAX_POINTS radius queries covering the area. */
function queryPoints(bbox: BBox | null): QueryPoint[] {
  if (!bbox) return OVERVIEW_POINTS.map((p) => ({ ...p, radius: MAX_RADIUS_NM }))

  const midLat = (bbox.minLat + bbox.maxLat) / 2
  const latSpanNm = (bbox.maxLat - bbox.minLat) * NM_PER_DEG_LAT
  const lonSpanNm =
    (bbox.maxLon - bbox.minLon) *
    NM_PER_DEG_LAT *
    Math.max(0.15, Math.cos((midLat * Math.PI) / 180))

  let nLat = Math.max(1, Math.ceil(latSpanNm / (2 * MAX_RADIUS_NM)))
  let nLon = Math.max(1, Math.ceil(lonSpanNm / (2 * MAX_RADIUS_NM)))
  while (nLat * nLon > MAX_POINTS) {
    if (nLat >= nLon && nLat > 1) nLat--
    else if (nLon > 1) nLon--
    else break
  }

  const pts: QueryPoint[] = []
  const cellLatNm = latSpanNm / nLat / 2
  const cellLonNm = lonSpanNm / nLon / 2
  const radius = Math.min(MAX_RADIUS_NM, Math.ceil(Math.max(cellLatNm, cellLonNm) * 1.15))
  for (let i = 0; i < nLat; i++) {
    for (let j = 0; j < nLon; j++) {
      pts.push({
        lat: bbox.minLat + ((i + 0.5) * (bbox.maxLat - bbox.minLat)) / nLat,
        lon: bbox.minLon + ((j + 0.5) * (bbox.maxLon - bbox.minLon)) / nLon,
        radius: Math.max(20, radius),
      })
    }
  }
  return pts
}

function normalize(a: RawAircraft): FlightState | null {
  if (a.lat == null || a.lon == null) return null
  const onGround = a.alt_baro === 'ground'
  const baroM =
    typeof a.alt_baro === 'number' ? a.alt_baro * FEET_TO_M : onGround ? 0 : null
  const geoM = typeof a.alt_geom === 'number' ? a.alt_geom * FEET_TO_M : null
  const rate = a.baro_rate ?? a.geom_rate
  return {
    icao24: a.hex,
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
    registration: a.r,
    typeCode: a.t,
    category: a.category,
  }
}

async function fetchPoint(p: QueryPoint): Promise<RawAircraft[]> {
  await throttle()
  const r = Math.min(MAX_RADIUS_NM, p.radius)
  const res = await fetch(`/adsblive/v2/point/${p.lat.toFixed(4)}/${p.lon.toFixed(4)}/${r}`)
  if (!res.ok) throw new Error(`airplanes.live ${res.status} ${res.statusText}`)
  const data = (await res.json()) as PointResponse
  return data.ac ?? []
}

/**
 * Fetch flights for the current view from airplanes.live, tiling the area into
 * multiple radius queries (fetched sequentially to stay under the rate limit),
 * merged and de-duplicated by ICAO. Partial failures are tolerated.
 */
export async function fetchFlightsForBBox(bbox: BBox | null): Promise<FlightState[]> {
  const points = queryPoints(bbox)
  const byIcao = new Map<string, FlightState>()
  let anySuccess = false
  let lastError: unknown = null

  for (const p of points) {
    try {
      const raw = await fetchPoint(p)
      anySuccess = true
      for (const a of raw) {
        const f = normalize(a)
        if (f && !byIcao.has(f.icao24)) byIcao.set(f.icao24, f)
      }
    } catch (e) {
      lastError = e
    }
  }

  if (!anySuccess && lastError) throw lastError as Error
  return Array.from(byIcao.values())
}
