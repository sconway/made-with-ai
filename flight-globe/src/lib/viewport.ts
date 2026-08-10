import * as THREE from 'three'
import { GLOBE_RADIUS, vector3ToLatLon, type BBox } from './geo'

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

// Max aircraft drawn at once. When a view returns more, we render a stable
// fraction spread across the whole area; focused views return fewer and show all.
export const MAX_RENDER = 4000

// airplanes.live caps a single query at 250 nm radius (used for keyless tiling).
export const MAX_RADIUS_NM = 250

// Beyond this visible half-angle the view spans ~the whole globe, so we treat it
// as "world" (bbox = null): OpenSky serves /states/all; the keyless path samples.
const WORLD_ANGLE_DEG = 68

/**
 * Approximate the visible lat/lon bounding box from the orbit camera (which
 * targets the origin). Returns null for a whole-globe view or one that would
 * wrap the antimeridian (which a single bbox query can't express).
 */
export function computeViewBBox(cameraPos: THREE.Vector3): BBox | null {
  const d = cameraPos.length()
  if (d <= GLOBE_RADIUS) return null

  const center = vector3ToLatLon(cameraPos)
  const limbRad = Math.acos(clamp(GLOBE_RADIUS / d, -1, 1))
  const rDeg = (limbRad * 180) / Math.PI * 1.08 // small padding
  if (rDeg >= WORLD_ANGLE_DEG) return null

  const cosLat = Math.max(0.15, Math.cos((center.lat * Math.PI) / 180))
  const lonPad = rDeg / cosLat
  const minLat = clamp(center.lat - rDeg, -85, 85)
  const maxLat = clamp(center.lat + rDeg, -85, 85)
  const minLon = center.lon - lonPad
  const maxLon = center.lon + lonPad

  if (minLon < -180 || maxLon > 180 || lonPad >= 175) return null
  return { minLon, minLat, maxLon, maxLat }
}

/** Round to whole degrees so tiny camera jitter doesn't re-trigger fetches. */
export function roundBBox(b: BBox | null): BBox | null {
  if (!b) return null
  const r = Math.round
  return { minLon: r(b.minLon), minLat: r(b.minLat), maxLon: r(b.maxLon), maxLat: r(b.maxLat) }
}

/** True if two (rounded) boxes differ enough to warrant a new query. */
export function bboxChanged(a: BBox | null, b: BBox | null): boolean {
  if (a === null || b === null) return a !== b
  const T = 2
  return (
    Math.abs(a.minLon - b.minLon) >= T ||
    Math.abs(a.minLat - b.minLat) >= T ||
    Math.abs(a.maxLon - b.maxLon) >= T ||
    Math.abs(a.maxLat - b.maxLat) >= T
  )
}

/** Stable string key for a bbox (for effect dependencies). */
export function bboxKey(b: BBox | null): string {
  return b ? `${b.minLon},${b.minLat},${b.maxLon},${b.maxLat}` : 'world'
}

/** Poll interval (ms) scaled to the queried area — wider view, slower polling. */
export function intervalForBBox(b: BBox | null): number {
  if (!b) return 30000
  const area = Math.abs((b.maxLat - b.minLat) * (b.maxLon - b.minLon))
  if (area < 200) return 8000
  if (area < 1200) return 12000
  if (area < 4000) return 18000
  return 26000
}
