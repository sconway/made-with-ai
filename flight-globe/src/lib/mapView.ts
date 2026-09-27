import * as THREE from 'three'
import earcut from 'earcut'
import type { Country } from './countries'
import {
  GLOBE_RADIUS,
  latLonToVector3,
  vector3ToLatLon,
  type Polygon,
} from './geo'

const DEG2RAD = Math.PI / 180
/** Flatten + camera slerp, ~1.15s end-to-end. */
const BLEND_PER_SEC = 0.88
/**
 * Country fill, in the map group's local up axis. Just inside the tangent
 * plane so the polygon does not z-fight the globe while it flattens.
 */
export const MAP_LAND_Z = -0.003

export interface MapFrame {
  lon0: number
  lat0: number
  minLon: number
  maxLon: number
  minLat: number
  maxLat: number
  /** Unit radial at the country center. */
  origin: THREE.Vector3
  east: THREE.Vector3
  north: THREE.Vector3
}

let targetBlend = 0
let blend = 0
let frame: MapFrame | null = null

const _sphere = new THREE.Vector3()
const _plane = new THREE.Vector3()
const _gcA = new THREE.Vector3()
const _gcB = new THREE.Vector3()
const _gcPt = new THREE.Vector3()
const _lookAt = new THREE.Vector3()
const _basis = new THREE.Matrix4()
const _dummyCam = new THREE.PerspectiveCamera()

export function getMapBlend(): number {
  return blend
}

/** Cubic ease of the flatten, shared by camera and positions. */
export function getMapEase(): number {
  return easeInOutCubic(blend)
}

export function getMapFrame(): MapFrame | null {
  return frame
}

export function unwrapLon(lon: number, refLon: number): number {
  let d = lon - refLon
  while (d > 180) d -= 360
  while (d < -180) d += 360
  return refLon + d
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function buildBasis(
  lat0: number,
  lon0: number,
): { origin: THREE.Vector3; east: THREE.Vector3; north: THREE.Vector3 } {
  const origin = latLonToVector3(lat0, lon0, 1).normalize()
  const east = new THREE.Vector3(origin.z, 0, -origin.x)
  if (east.lengthSq() < 1e-12) east.set(1, 0, 0)
  else east.normalize()
  const north = new THREE.Vector3().crossVectors(origin, east).normalize()
  east.crossVectors(north, origin).normalize()
  return { origin, east, north }
}

export function frameFromCountry(country: Country): MapFrame {
  const first = country.polys[0]?.[0]?.[0]
  const lonRef = first ? first[0]! : (country.bbox.minLon + country.bbox.maxLon) / 2
  let minLon = Infinity
  let maxLon = -Infinity
  let minLat = Infinity
  let maxLat = -Infinity
  for (const poly of country.polys) {
    const ring = poly[0]
    if (!ring) continue
    for (const [lon, lat] of ring) {
      const u = unwrapLon(lon, lonRef)
      if (u < minLon) minLon = u
      if (u > maxLon) maxLon = u
      if (lat < minLat) minLat = lat
      if (lat > maxLat) maxLat = lat
    }
  }
  if (!Number.isFinite(minLon)) {
    minLon = country.bbox.minLon
    maxLon = country.bbox.maxLon
    minLat = country.bbox.minLat
    maxLat = country.bbox.maxLat
  }
  const lonPad = Math.max(0.35, (maxLon - minLon) * 0.07)
  const latPad = Math.max(0.35, (maxLat - minLat) * 0.07)
  const lon0 = (minLon + maxLon) / 2
  const lat0 = (minLat + maxLat) / 2
  return {
    lon0,
    lat0,
    minLon: minLon - lonPad,
    maxLon: maxLon + lonPad,
    minLat: Math.max(-85, minLat - latPad),
    maxLat: Math.min(85, maxLat + latPad),
    ...buildBasis(lat0, lon0),
  }
}

export function setMapViewCountry(country: Country | null): void {
  if (country) {
    frame = frameFromCountry(country)
    targetBlend = 1
  } else {
    targetBlend = 0
  }
}

/** Flatten a patch of earth around a look-at (current globe view → 2D map). */
export function frameFromLookAt(
  lat0: number,
  lon0: number,
  halfLon: number,
  halfLat: number,
): MapFrame {
  const lat = Math.max(-80, Math.min(80, lat0))
  const hLon = Math.max(6, Math.min(70, halfLon))
  const hLat = Math.max(5, Math.min(50, halfLat))
  return {
    lon0,
    lat0: lat,
    minLon: lon0 - hLon,
    maxLon: lon0 + hLon,
    minLat: Math.max(-85, lat - hLat),
    maxLat: Math.min(85, lat + hLat),
    ...buildBasis(lat, lon0),
  }
}

export function setMapViewLookAt(
  lat: number,
  lon: number,
  halfLon: number,
  halfLat: number,
): void {
  frame = frameFromLookAt(lat, lon, halfLon, halfLat)
  targetBlend = 1
}

export function tickMapBlend(dt: number): number {
  const delta = targetBlend - blend
  if (Math.abs(delta) < 0.0015) {
    blend = targetBlend
    if (blend === 0) frame = null
    return blend
  }
  blend = THREE.MathUtils.clamp(
    blend + Math.sign(delta) * BLEND_PER_SEC * dt,
    0,
    1,
  )
  if (blend === 0 && targetBlend === 0) frame = null
  return blend
}

export function mapExtent(map: MapFrame): { w: number; h: number } {
  const w =
    (map.maxLon - map.minLon) * Math.cos(map.lat0 * DEG2RAD) * DEG2RAD
  const h = (map.maxLat - map.minLat) * DEG2RAD
  return { w: Math.max(0.01, w), h: Math.max(0.01, h) }
}

/** Local east/north/up on the country tangent plane (for map meshes). */
export function projectMapLocal(
  lat: number,
  lon: number,
  radius: number,
  map: MapFrame,
  target: THREE.Vector3,
): THREE.Vector3 {
  const lonU = unwrapLon(lon, map.lon0)
  const x = (lonU - map.lon0) * Math.cos(map.lat0 * DEG2RAD) * DEG2RAD
  const y = (lat - map.lat0) * DEG2RAD
  const z = Math.max(0, radius - GLOBE_RADIUS)
  return target.set(x, y, z)
}

/** Same point in world space, sitting on the globe at the country. */
export function projectMapWorld(
  lat: number,
  lon: number,
  radius: number,
  map: MapFrame,
  target: THREE.Vector3,
): THREE.Vector3 {
  projectMapLocal(lat, lon, radius, map, target)
  const x = target.x
  const y = target.y
  const z = target.z
  return target
    .copy(map.origin)
    .multiplyScalar(GLOBE_RADIUS + z)
    .addScaledVector(map.east, x)
    .addScaledVector(map.north, y)
}

/** Globe position at blend 0, in-place tangent map at blend 1. */
export function projectPosition(
  lat: number,
  lon: number,
  radius: number,
  target: THREE.Vector3,
): THREE.Vector3 {
  if (blend <= 0.0008 || !frame) {
    return latLonToVector3(lat, lon, radius, target)
  }
  const t = easeInOutCubic(blend)
  projectMapWorld(lat, lon, radius, frame, _plane)
  if (t >= 0.999) return target.copy(_plane)
  latLonToVector3(lat, lon, radius, _sphere)
  return target.lerpVectors(_sphere, _plane, t)
}

export function mapFeatureScale(): number {
  if (!frame || blend < 0.05) return 1
  const { w, h } = mapExtent(frame)
  const m = Math.max(0.01, Math.min(w, h))
  const mapScale = THREE.MathUtils.clamp(m * 2.4, 0.16, 1.2)
  return THREE.MathUtils.lerp(1, mapScale, easeInOutCubic(blend))
}

export function inMapFrame(
  lat: number,
  lon: number,
  padDeg = 1.5,
): boolean {
  if (!frame) return true
  const lonU = unwrapLon(lon, frame.lon0)
  return (
    lonU >= frame.minLon - padDeg &&
    lonU <= frame.maxLon + padDeg &&
    lat >= frame.minLat - padDeg &&
    lat <= frame.maxLat + padDeg
  )
}

export function overlayMargins(
  width: number,
  height: number,
): { left: number; right: number; top: number; bottom: number } {
  if (width <= 720) {
    const raw =
      typeof document !== 'undefined'
        ? getComputedStyle(document.documentElement).getPropertyValue('--dock-h')
        : ''
    const dock = Number.parseFloat(raw)
    const bottom = Number.isFinite(dock) && dock > 0 ? dock + 8 : height * 0.24 + 8
    return { left: 16, right: 16, top: 16, bottom }
  }
  return { left: 376, right: 28, top: 22, bottom: 100 }
}

/**
 * Top-down pose looking at the country, north-up, fitted into the HUD-free
 * part of the canvas. Same camera object as the globe — no projection swap.
 */
export function writeMapCameraPose(
  map: MapFrame,
  width: number,
  height: number,
  fovDeg: number,
  outPos: THREE.Vector3,
  outQuat: THREE.Quaternion,
  outLookAt?: THREE.Vector3,
): void {
  const { w: mapW, h: mapH } = mapExtent(map)
  const m = overlayMargins(width, height)
  const ndcLeft = (m.left / width) * 2 - 1
  const ndcRight = ((width - m.right) / width) * 2 - 1
  const ndcTop = 1 - (m.top / height) * 2
  const ndcBottom = 1 - ((height - m.bottom) / height) * 2
  const ndcSpanX = Math.max(0.12, ndcRight - ndcLeft)
  const ndcSpanY = Math.max(0.12, ndcTop - ndcBottom)
  const ndcCx = (ndcLeft + ndcRight) / 2
  const ndcCy = (ndcBottom + ndcTop) / 2
  const aspect = width / Math.max(1, height)
  const tan = Math.tan(((fovDeg * DEG2RAD) / 2) || 0.4)
  const distH = mapH / (tan * ndcSpanY)
  const distW = mapW / (tan * aspect * ndcSpanX)
  // Crop in so the country fills the view; pan to see edges. Stay beyond near: 0.1.
  const dist = Math.max(0.2, Math.max(distH, distW) * 0.7)

  const planeDx = ndcCx * dist * tan * aspect
  const planeDy = ndcCy * dist * tan
  const surface = GLOBE_RADIUS
  _lookAt
    .copy(map.origin)
    .multiplyScalar(surface)
    .addScaledVector(map.east, -planeDx)
    .addScaledVector(map.north, -planeDy)
  outPos.copy(_lookAt).addScaledVector(map.origin, dist)

  // Must use a Camera: Object3D.lookAt faces +Z, cameras look down -Z.
  _dummyCam.fov = fovDeg
  _dummyCam.position.copy(outPos)
  _dummyCam.up.copy(map.north)
  _dummyCam.lookAt(_lookAt)
  outQuat.copy(_dummyCam.quaternion)
  if (outLookAt) outLookAt.copy(_lookAt)
}

/** Place a local-ENU map group onto the globe at the country. */
export function applyMapGroupTransform(
  group: THREE.Object3D,
  map: MapFrame,
): void {
  group.position.copy(map.origin).multiplyScalar(GLOBE_RADIUS)
  _basis.makeBasis(map.east, map.north, map.origin)
  group.quaternion.setFromRotationMatrix(_basis)
}

export function polygonsToMapFillGeometry(
  polys: Polygon[],
  map: MapFrame,
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
      for (const [lon, lat] of poly[r]!) {
        flat.push(unwrapLon(lon, map.lon0), lat)
      }
    }
    const tris = earcut(flat, holes, 2)
    const vertCount = flat.length / 2
    for (let i = 0; i < vertCount; i++) {
      projectMapLocal(flat[i * 2 + 1]!, flat[i * 2]!, GLOBE_RADIUS, map, v)
      positions.push(v.x, v.y, 0)
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

export function polygonsToMapLineSegments(
  polys: Polygon[],
  map: MapFrame,
): Float32Array {
  const pts: number[] = []
  const v0 = new THREE.Vector3()
  const v1 = new THREE.Vector3()
  for (const poly of polys) {
    for (const ring of poly) {
      for (let i = 0; i < ring.length - 1; i++) {
        projectMapLocal(ring[i]![1], ring[i]![0], GLOBE_RADIUS, map, v0)
        projectMapLocal(ring[i + 1]![1], ring[i + 1]![0], GLOBE_RADIUS, map, v1)
        pts.push(v0.x, v0.y, 0.001, v1.x, v1.y, 0.001)
      }
    }
  }
  return new Float32Array(pts)
}

export function appendProjectedSegment(
  aLat: number,
  aLon: number,
  aRadius: number,
  bLat: number,
  bLon: number,
  bRadius: number,
  extraBulge: number,
  out: number[],
): void {
  latLonToVector3(aLat, aLon, 1, _gcA).normalize()
  latLonToVector3(bLat, bLon, 1, _gcB).normalize()
  const dot = Math.min(1, Math.max(-1, _gcA.dot(_gcB)))
  const omega = Math.acos(dot)
  if (omega < 1e-5) return
  const sinOmega = Math.sin(omega)
  const segments = Math.min(64, Math.max(6, Math.round((omega * 180) / Math.PI / 2.2)))
  const v = _plane
  let hasPrev = false
  let px = 0
  let py = 0
  let pz = 0
  for (let k = 0; k <= segments; k++) {
    const t = k / segments
    const sa = Math.sin((1 - t) * omega) / sinOmega
    const sb = Math.sin(t * omega) / sinOmega
    _gcPt
      .set(_gcA.x * sa + _gcB.x * sb, _gcA.y * sa + _gcB.y * sb, _gcA.z * sa + _gcB.z * sb)
      .normalize()
    const { lat, lon } = vector3ToLatLon(_gcPt)
    const r =
      aRadius + (bRadius - aRadius) * t + extraBulge * Math.sin(Math.PI * t)
    projectPosition(lat, lon, r, v)
    if (hasPrev) out.push(px, py, pz, v.x, v.y, v.z)
    px = v.x
    py = v.y
    pz = v.z
    hasPrev = true
  }
}

export function appendProjectedFlightPath(
  oLat: number,
  oLon: number,
  dLat: number,
  dLon: number,
  pLat: number,
  pLon: number,
  pRadius: number,
  out: number[],
): void {
  const planeR = Math.max(pRadius, GLOBE_RADIUS + 0.004)
  const surface = GLOBE_RADIUS + 0.004
  appendProjectedSegment(oLat, oLon, surface, pLat, pLon, planeR, 0.012, out)
  appendProjectedSegment(pLat, pLon, planeR, dLat, dLon, surface, 0.012, out)
}
