import * as THREE from 'three'
import earcut from 'earcut'

export const GLOBE_RADIUS = 1
export const EARTH_RADIUS_KM = 6371
// Multiplier applied to real altitude so aircraft are visibly separated from
// the surface. Real 12 km altitude is only ~0.002 of the globe radius, so we
// exaggerate it for legibility.
export const ALTITUDE_EXAGGERATION = 18

const DEG2RAD = Math.PI / 180
const RAD2DEG = 180 / Math.PI

/**
 * Convert geographic lat/lon (degrees) to a point on the globe.
 * This is the single source of truth for placement of countries + aircraft;
 * the textured earth mesh is rotated to match it (see EARTH_TEXTURE_OFFSET).
 */
export function latLonToVector3(
  lat: number,
  lon: number,
  radius = GLOBE_RADIUS,
  target = new THREE.Vector3(),
): THREE.Vector3 {
  const phi = (90 - lat) * DEG2RAD
  const theta = (lon + 180) * DEG2RAD
  target.set(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  )
  return target
}

/** Exact inverse of latLonToVector3 (radius-independent). */
export function vector3ToLatLon(p: THREE.Vector3): { lat: number; lon: number } {
  const r = p.length()
  const lat = 90 - Math.acos(p.y / r) * RAD2DEG
  let lon = Math.atan2(p.z, -p.x) * RAD2DEG - 180
  if (lon < -180) lon += 360
  if (lon > 180) lon -= 360
  return { lat, lon }
}

/** Altitude (meters) -> globe-space radius offset above the surface. */
export function altitudeToRadius(altitudeMeters: number | null): number {
  const km = Math.max(0, (altitudeMeters ?? 0) / 1000)
  return GLOBE_RADIUS + (km / EARTH_RADIUS_KM) * ALTITUDE_EXAGGERATION
}

/**
 * Advance a lat/lon position by dead reckoning: given ground speed (m/s),
 * heading (deg from north, clockwise) and elapsed seconds, return the new
 * position. Used to smoothly animate aircraft between API polls.
 */
export function deadReckon(
  lat: number,
  lon: number,
  velocity: number,
  trackDeg: number,
  seconds: number,
): { lat: number; lon: number } {
  if (!velocity || seconds <= 0) return { lat, lon }
  const distKm = (velocity * seconds) / 1000
  const angular = distKm / EARTH_RADIUS_KM // radians of arc
  const brng = trackDeg * DEG2RAD
  const lat1 = lat * DEG2RAD
  const lon1 = lon * DEG2RAD
  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(angular) +
      Math.cos(lat1) * Math.sin(angular) * Math.cos(brng),
  )
  const lon2 =
    lon1 +
    Math.atan2(
      Math.sin(brng) * Math.sin(angular) * Math.cos(lat1),
      Math.cos(angular) - Math.sin(lat1) * Math.sin(lat2),
    )
  return { lat: lat2 * RAD2DEG, lon: ((lon2 * RAD2DEG + 540) % 360) - 180 }
}

// ---------------------------------------------------------------------------
// Polygon helpers (GeoJSON coordinates are [lon, lat])
// ---------------------------------------------------------------------------

export type Ring = number[][] // [ [lon,lat], ... ]
export type Polygon = Ring[] // [outer, hole, hole, ...]

export interface BBox {
  minLon: number
  minLat: number
  maxLon: number
  maxLat: number
}

export function ringBBox(polys: Polygon[]): BBox {
  let minLon = Infinity
  let minLat = Infinity
  let maxLon = -Infinity
  let maxLat = -Infinity
  for (const poly of polys) {
    for (const [lon, lat] of poly[0]) {
      if (lon < minLon) minLon = lon
      if (lon > maxLon) maxLon = lon
      if (lat < minLat) minLat = lat
      if (lat > maxLat) maxLat = lat
    }
  }
  return { minLon, minLat, maxLon, maxLat }
}

export function pointInBBox(lon: number, lat: number, b: BBox): boolean {
  return lon >= b.minLon && lon <= b.maxLon && lat >= b.minLat && lat <= b.maxLat
}

function pointInRing(lon: number, lat: number, ring: Ring): boolean {
  let inside = false
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0]
    const yi = ring[i][1]
    const xj = ring[j][0]
    const yj = ring[j][1]
    const intersect =
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
    if (intersect) inside = !inside
  }
  return inside
}

/** Point-in-polygon respecting holes, over a MultiPolygon. */
export function pointInPolygons(
  lon: number,
  lat: number,
  polys: Polygon[],
): boolean {
  for (const poly of polys) {
    if (!pointInRing(lon, lat, poly[0])) continue
    let inHole = false
    for (let h = 1; h < poly.length; h++) {
      if (pointInRing(lon, lat, poly[h])) {
        inHole = true
        break
      }
    }
    if (!inHole) return true
  }
  return false
}

/**
 * Build outline line-segment positions for a set of polygons, projected onto
 * the globe at `radius`. Returns a flat Float32Array of xyz pairs.
 */
export function polygonsToLineSegments(
  polys: Polygon[],
  radius: number,
): Float32Array {
  const pts: number[] = []
  const v = new THREE.Vector3()
  for (const poly of polys) {
    for (const ring of poly) {
      for (let i = 0; i < ring.length - 1; i++) {
        latLonToVector3(ring[i][1], ring[i][0], radius, v)
        pts.push(v.x, v.y, v.z)
        latLonToVector3(ring[i + 1][1], ring[i + 1][0], radius, v)
        pts.push(v.x, v.y, v.z)
      }
    }
  }
  return new Float32Array(pts)
}

/**
 * Triangulate polygons (with holes) via earcut and project the vertices onto
 * the globe at `radius`, producing a fillable BufferGeometry. Used for the
 * highlighted / selected country overlay.
 */
export function polygonsToFillGeometry(
  polys: Polygon[],
  radius: number,
): THREE.BufferGeometry {
  const positions: number[] = []
  const indices: number[] = []
  const v = new THREE.Vector3()
  let vertOffset = 0

  for (const poly of polys) {
    const flat: number[] = []
    const holes: number[] = []
    for (let r = 0; r < poly.length; r++) {
      if (r > 0) holes.push(flat.length / 2)
      for (const [lon, lat] of poly[r]) flat.push(lon, lat)
    }
    const tris = earcut(flat, holes, 2)
    const vertCount = flat.length / 2
    for (let i = 0; i < vertCount; i++) {
      latLonToVector3(flat[i * 2 + 1], flat[i * 2], radius, v)
      positions.push(v.x, v.y, v.z)
    }
    for (const idx of tris) indices.push(idx + vertOffset)
    vertOffset += vertCount
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setIndex(indices)
  geo.computeVertexNormals()
  return geo
}

const _gcFrom = new THREE.Vector3()
const _gcTo = new THREE.Vector3()
const _gcPt = new THREE.Vector3()

/**
 * Append a great-circle arc (the accurate shortest surface path) between two
 * lat/lon points as consecutive line segments into `out` (flat xyz). Segment
 * count scales with arc length; points sit just above the globe at `radius`.
 *
 * When `camDir` (unit, toward the camera) and `cosThreshold` are given, only the
 * front-facing portion is emitted, so the arc vanishes behind the globe instead
 * of drawing over the far side. The line is broken where it crosses the horizon.
 */
export function appendGreatCircle(
  oLat: number,
  oLon: number,
  dLat: number,
  dLon: number,
  radius: number,
  out: number[],
  camDir?: THREE.Vector3,
  cosThreshold = -2,
): void {
  latLonToVector3(oLat, oLon, 1, _gcFrom).normalize()
  latLonToVector3(dLat, dLon, 1, _gcTo).normalize()
  const dot = Math.min(1, Math.max(-1, _gcFrom.dot(_gcTo)))
  const omega = Math.acos(dot)
  if (omega < 1e-4) return // origin == destination
  const sinOmega = Math.sin(omega)
  const segments = Math.min(96, Math.max(6, Math.round((omega * RAD2DEG) / 2.5)))

  let hasPrev = false
  let px = 0
  let py = 0
  let pz = 0
  for (let k = 0; k <= segments; k++) {
    const t = k / segments
    const a = Math.sin((1 - t) * omega) / sinOmega
    const b = Math.sin(t * omega) / sinOmega
    _gcPt
      .set(
        _gcFrom.x * a + _gcTo.x * b,
        _gcFrom.y * a + _gcTo.y * b,
        _gcFrom.z * a + _gcTo.z * b,
      )
      .normalize()

    if (camDir && _gcPt.dot(camDir) < cosThreshold) {
      hasPrev = false // behind the horizon — break the line here
      continue
    }
    const x = _gcPt.x * radius
    const y = _gcPt.y * radius
    const z = _gcPt.z * radius
    if (hasPrev) out.push(px, py, pz, x, y, z)
    px = x
    py = y
    pz = z
    hasPrev = true
  }
}
