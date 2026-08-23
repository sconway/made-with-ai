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

/** Great-circle distance in km (WGS84 sphere approx). */
export function haversineKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const dLat = (lat2 - lat1) * DEG2RAD
  const dLon = (lon2 - lon1) * DEG2RAD
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * DEG2RAD) *
      Math.cos(lat2 * DEG2RAD) *
      Math.sin(dLon / 2) ** 2
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(a)))
}

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
 *
 * When `sphereSubdivisions` > 0, each triangle is split and midpoints are
 * re-projected onto the sphere. Without that, large flat chords sink under the
 * earth mesh and the globe occludes the overlay.
 */
export function polygonsToFillGeometry(
  polys: Polygon[],
  radius: number,
  sphereSubdivisions = 0,
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
  if (sphereSubdivisions > 0) {
    return subdivideOntoSphere(geo, radius, sphereSubdivisions)
  }
  geo.computeVertexNormals()
  return geo
}

/**
 * Split every triangle, project edge midpoints onto the sphere, repeat.
 * Keeps country fill meshes hugging the globe instead of cutting through it.
 */
export function subdivideOntoSphere(
  geometry: THREE.BufferGeometry,
  radius: number,
  iterations: number,
): THREE.BufferGeometry {
  let positions = Array.from(
    geometry.getAttribute('position').array as ArrayLike<number>,
  )
  let indices = geometry.getIndex()
    ? Array.from(geometry.getIndex()!.array as ArrayLike<number>)
    : Array.from({ length: positions.length / 3 }, (_, i) => i)

  const a = new THREE.Vector3()
  const b = new THREE.Vector3()
  const mid = new THREE.Vector3()

  for (let iter = 0; iter < iterations; iter++) {
    const midpointOf = new Map<string, number>()
    const nextIndices: number[] = []

    const midIndex = (i: number, j: number): number => {
      const key = i < j ? `${i},${j}` : `${j},${i}`
      const cached = midpointOf.get(key)
      if (cached != null) return cached
      a.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2])
      b.set(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
      mid.addVectors(a, b).normalize().multiplyScalar(radius)
      const idx = positions.length / 3
      positions.push(mid.x, mid.y, mid.z)
      midpointOf.set(key, idx)
      return idx
    }

    for (let t = 0; t < indices.length; t += 3) {
      const i0 = indices[t]
      const i1 = indices[t + 1]
      const i2 = indices[t + 2]
      const m01 = midIndex(i0, i1)
      const m12 = midIndex(i1, i2)
      const m20 = midIndex(i2, i0)
      nextIndices.push(
        i0, m01, m20,
        m01, i1, m12,
        m20, m12, i2,
        m01, m12, m20,
      )
    }
    indices = nextIndices
  }

  const out = new THREE.BufferGeometry()
  out.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  out.setIndex(indices)
  out.computeVertexNormals()
  return out
}

const _gcFrom = new THREE.Vector3()
const _gcTo = new THREE.Vector3()
const _gcPt = new THREE.Vector3()
const _gcA = new THREE.Vector3()
const _gcB = new THREE.Vector3()
const _gcAhead = new THREE.Vector3()
const _east = new THREE.Vector3()
const _north = new THREE.Vector3()

/** Route endpoints sit on the globe with country borders (not floating). */
export const ARC_SURFACE_RADIUS = GLOBE_RADIUS + 0.004

export function greatCirclePeakHeight(omega: number): number {
  return THREE.MathUtils.clamp(0.045 + 0.28 * (omega / Math.PI), 0.05, 0.32)
}

function slerpGreatCircle(
  from: THREE.Vector3,
  to: THREE.Vector3,
  omega: number,
  sinOmega: number,
  t: number,
  target: THREE.Vector3,
): THREE.Vector3 {
  const a = Math.sin((1 - t) * omega) / sinOmega
  const b = Math.sin(t * omega) / sinOmega
  return target
    .set(from.x * a + to.x * b, from.y * a + to.y * b, from.z * a + to.z * b)
    .normalize()
}

/**
 * World-space unit forward for a heading (degrees clockwise from north) at
 * lat/lon. Used to aim aircraft noses along their reported track.
 */
export function trackForward(
  lat: number,
  lon: number,
  trackDeg: number,
  target: THREE.Vector3,
): THREE.Vector3 {
  latLonToVector3(lat, lon, 1, _gcPt).normalize()
  // East ∝ ∂pos/∂lon — stable except at the poles.
  _east.set(_gcPt.z, 0, -_gcPt.x)
  if (_east.lengthSq() < 1e-12) {
    // At a pole: pick an arbitrary east so heading still resolves.
    _east.set(1, 0, 0)
  } else {
    _east.normalize()
  }
  // N = U × E (right-handed ENU).
  _north.crossVectors(_gcPt, _east).normalize()
  _east.crossVectors(_north, _gcPt).normalize()
  const rad = trackDeg * DEG2RAD
  return target
    .copy(_north)
    .multiplyScalar(Math.cos(rad))
    .addScaledVector(_east, Math.sin(rad))
    .normalize()
}

/**
 * Level (surface-tangent) unit forward from (lat,lon) toward (dLat,dLon).
 * Yaw only — no pitch — so aircraft noses point along the route, not up/down.
 */
export function destinationForward(
  lat: number,
  lon: number,
  dLat: number,
  dLon: number,
  target: THREE.Vector3,
): boolean {
  latLonToVector3(lat, lon, 1, _gcPt).normalize()
  latLonToVector3(dLat, dLon, 1, _gcAhead).normalize()
  // Initial direction along the chord, then flatten onto the local tangent plane.
  target.subVectors(_gcAhead, _gcPt)
  target.addScaledVector(_gcPt, -target.dot(_gcPt))
  if (target.lengthSq() < 1e-14) return false
  target.normalize()
  return true
}

/**
 * Great-circle segment between two geographic points at (possibly different)
 * radii. Radius is linearly interpolated along the segment, plus an optional
 * `extraBulge` that peaks at the midpoint and is 0 at both ends — so airport
 * endpoints can sit on the surface while the path still clears the globe.
 */
function appendGreatCircleSegment(
  aLat: number,
  aLon: number,
  aRadius: number,
  bLat: number,
  bLon: number,
  bRadius: number,
  out: number[],
  camDir?: THREE.Vector3,
  cosThreshold = -2,
  extraBulge = 0,
): void {
  latLonToVector3(aLat, aLon, 1, _gcA).normalize()
  latLonToVector3(bLat, bLon, 1, _gcB).normalize()
  const dot = Math.min(1, Math.max(-1, _gcA.dot(_gcB)))
  const omega = Math.acos(dot)
  if (omega < 1e-5) return
  const sinOmega = Math.sin(omega)
  const segments = Math.min(96, Math.max(8, Math.round((omega * RAD2DEG) / 1.8)))

  let hasPrev = false
  let px = 0
  let py = 0
  let pz = 0
  for (let k = 0; k <= segments; k++) {
    const t = k / segments
    slerpGreatCircle(_gcA, _gcB, omega, sinOmega, t, _gcPt)

    if (camDir && _gcPt.dot(camDir) < cosThreshold) {
      hasPrev = false
      continue
    }
    const r = aRadius + (bRadius - aRadius) * t + extraBulge * Math.sin(Math.PI * t)
    const x = _gcPt.x * r
    const y = _gcPt.y * r
    const z = _gcPt.z * r
    if (hasPrev) out.push(px, py, pz, x, y, z)
    px = x
    py = y
    pz = z
    hasPrev = true
  }
}

/**
 * Flight path origin → aircraft → destination as two great-circle legs.
 *
 * A quadratic Bezier forced through the plane at t=½ looks smooth, but when the
 * aircraft is still near either airport the control point is mirrored *away*
 * from the far end (e.g. SAN→PHL with the plane near SAN bows into the
 * Pacific). Geodesic legs stay geographically honest; a mild kink at the
 * plane is preferable to a fake ocean detour.
 */
export function appendFlightPathArc(
  oLat: number,
  oLon: number,
  dLat: number,
  dLon: number,
  pLat: number,
  pLon: number,
  pRadius: number,
  out: number[],
  camDir?: THREE.Vector3,
  cosThreshold = -2,
): void {
  const planeR = Math.max(pRadius, ARC_SURFACE_RADIUS)

  latLonToVector3(oLat, oLon, 1, _gcFrom).normalize()
  latLonToVector3(pLat, pLon, 1, _gcTo).normalize()
  const omega1 = Math.acos(Math.min(1, Math.max(-1, _gcFrom.dot(_gcTo))))
  latLonToVector3(dLat, dLon, 1, _gcFrom).normalize()
  const omega2 = Math.acos(Math.min(1, Math.max(-1, _gcFrom.dot(_gcTo))))

  // Light altitude bow on each leg (not enough to invent a fake waypoint).
  const bulge1 = Math.min(0.028, greatCirclePeakHeight(omega1) * 0.18)
  const bulge2 = Math.min(0.028, greatCirclePeakHeight(omega2) * 0.18)

  appendGreatCircleSegment(
    oLat,
    oLon,
    ARC_SURFACE_RADIUS,
    pLat,
    pLon,
    planeR,
    out,
    camDir,
    cosThreshold,
    bulge1,
  )
  appendGreatCircleSegment(
    pLat,
    pLon,
    planeR,
    dLat,
    dLon,
    ARC_SURFACE_RADIUS,
    out,
    camDir,
    cosThreshold,
    bulge2,
  )
}

/**
 * Append a great-circle arc between two lat/lon points as consecutive line
 * segments into `out` (flat xyz). Endpoints sit at `radius`; the path lifts
 * toward mid-route by `peakHeight` (or a distance-based default) so long-haul
 * flights bow away from the surface instead of hugging it.
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
  peakHeight?: number,
): void {
  latLonToVector3(oLat, oLon, 1, _gcFrom).normalize()
  latLonToVector3(dLat, dLon, 1, _gcTo).normalize()
  const dot = Math.min(1, Math.max(-1, _gcFrom.dot(_gcTo)))
  const omega = Math.acos(dot)
  if (omega < 1e-4) return
  const lift = peakHeight ?? greatCirclePeakHeight(omega)
  appendGreatCircleSegment(
    oLat,
    oLon,
    radius,
    dLat,
    dLon,
    radius,
    out,
    camDir,
    cosThreshold,
    lift,
  )
}
