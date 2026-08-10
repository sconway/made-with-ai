import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import { bboxChanged, roundBBox } from '../lib/viewport'
import { GLOBE_RADIUS, vector3ToLatLon, type BBox } from '../lib/geo'

const SETTLE_SECONDS = 0.4 // wait for the camera to stop before committing
const GRID = 6 // sample (GRID+1)^2 screen points across the viewport

const _sphere = new THREE.Sphere(new THREE.Vector3(0, 0, 0), GLOBE_RADIUS)
const _ray = new THREE.Raycaster()
const _hit = new THREE.Vector3()
const _ndc = new THREE.Vector2()

/**
 * The actual visible slice of the globe: raycast a grid of screen points onto
 * the sphere and bound the hits. This reflects what's genuinely on screen
 * (front-facing, FOV-limited) rather than the geometric silhouette, so a
 * continental view yields that continent's box instead of collapsing to
 * "world". Returns null when ~the whole globe is visible (=> world query).
 */
function visibleBBox(camera: THREE.Camera): BBox | null {
  const lats: number[] = []
  const lons: number[] = []
  for (let i = 0; i <= GRID; i++) {
    for (let j = 0; j <= GRID; j++) {
      _ndc.set(-1 + (2 * i) / GRID, -1 + (2 * j) / GRID)
      _ray.setFromCamera(_ndc, camera)
      if (_ray.ray.intersectSphere(_sphere, _hit)) {
        const { lat, lon } = vector3ToLatLon(_hit)
        lats.push(lat)
        lons.push(lon)
      }
    }
  }
  if (lats.length < 4) return null

  let minLat = Math.min(...lats)
  let maxLat = Math.max(...lats)

  // Longitude may wrap the antimeridian. Sort, find the widest empty gap; the
  // covered arc is its complement.
  const sorted = [...lons].sort((a, b) => a - b)
  let gapMax = -1
  let gapIdx = sorted.length - 1
  for (let k = 0; k < sorted.length; k++) {
    const next = k + 1 < sorted.length ? sorted[k + 1] : sorted[0] + 360
    const gap = next - sorted[k]
    if (gap > gapMax) {
      gapMax = gap
      gapIdx = k
    }
  }
  let minLon: number
  let maxLon: number
  if (gapIdx === sorted.length - 1) {
    // Widest gap is the wrap-around region -> data is contiguous (no wrap).
    minLon = sorted[0]
    maxLon = sorted[sorted.length - 1]
  } else {
    // Data straddles the antimeridian.
    minLon = sorted[gapIdx + 1]
    maxLon = sorted[gapIdx] + 360
  }

  const latSpan = maxLat - minLat
  const lonSpan = maxLon - minLon
  if (latSpan > 150 || lonSpan > 260) return null // ~whole globe -> world

  const padLat = latSpan * 0.06 + 1
  const padLon = lonSpan * 0.06 + 1
  minLat = Math.max(-85, minLat - padLat)
  maxLat = Math.min(85, maxLat + padLat)
  minLon -= padLon
  maxLon += padLon

  if (minLon < -180 || maxLon > 180) return null // can't express as one bbox
  return { minLon, minLat, maxLon, maxLat }
}

/**
 * Watches the camera and, once it settles, writes the visible bounding box to
 * the store so the data layer requests just that slice of the globe. Renders
 * nothing.
 */
export function ViewportTracker() {
  const camera = useThree((s) => s.camera)
  const setViewBBox = useStore((s) => s.setViewBBox)

  const lastPos = useRef(new THREE.Vector3(Infinity, 0, 0))
  const settledAt = useRef(0)
  const pending = useRef(true)
  const committed = useRef<BBox | null | undefined>(undefined)

  useFrame(() => {
    const now = performance.now() / 1000
    const moved = camera.position.distanceTo(lastPos.current) > 1e-4
    lastPos.current.copy(camera.position)

    if (moved) {
      settledAt.current = now
      pending.current = true
      return
    }
    if (now - settledAt.current < SETTLE_SECONDS || !pending.current) return
    pending.current = false

    const next = roundBBox(visibleBBox(camera))
    if (committed.current === undefined || bboxChanged(committed.current, next)) {
      committed.current = next
      setViewBBox(next)
    }
  })

  return null
}
