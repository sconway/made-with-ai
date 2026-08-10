import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import { appendGreatCircle, GLOBE_RADIUS } from '../lib/geo'
import { thinEvenly } from '../lib/sampling'
import { enqueueRoutes, getCachedRoute } from '../lib/routes'
import type { Route } from '../lib/flight'

const ARC_RADIUS = GLOBE_RADIUS + 0.004 // just above the surface / borders
const _camDir = new THREE.Vector3()

/**
 * Thin glowing great-circle arcs from each visible flight's origin to its
 * destination. Routes come from the flight itself (demo) or from the adsbdb
 * cache (live); unknown ones are queued for resolution. All arcs share one
 * merged line geometry, and the opaque globe depth-occludes the far side.
 */
export function Arcs() {
  const camera = useThree((s) => s.camera)
  const flights = useStore((s) => s.flights)
  const viewBBox = useStore((s) => s.viewBBox)
  const selectedId = useStore((s) => s.selectedFlightId)
  const routesVersion = useStore((s) => s.routesVersion)
  const showRoutes = useStore((s) => s.showRoutes)

  // Same thinned set the aircraft layer draws, so arcs match the planes.
  const thinned = useMemo(
    () => (showRoutes ? thinEvenly(flights, viewBBox, selectedId) : []),
    [flights, viewBBox, selectedId, showRoutes],
  )

  // Resolve routes we don't know yet for the visible flights.
  useEffect(() => {
    if (!showRoutes) return
    const need: string[] = []
    for (const f of thinned) {
      if (f.route) continue
      if (f.callsign && getCachedRoute(f.callsign) === undefined) need.push(f.callsign)
    }
    if (need.length) enqueueRoutes(need)
  }, [thinned, routesVersion, showRoutes])

  const geometry = useMemo(() => {
    if (!showRoutes) return null
    // Front-hemisphere cull matching the aircraft layer, so arcs vanish behind
    // the globe. Read the current camera at build time (rebuilds on settle).
    _camDir.copy(camera.position)
    const dist = _camDir.length() || 1
    _camDir.normalize()
    const cosThreshold = GLOBE_RADIUS / dist - 0.02

    const positions: number[] = []
    for (const f of thinned) {
      const route: Route | null | undefined = f.route ?? getCachedRoute(f.callsign)
      if (!route) continue // unknown or no-route
      appendGreatCircle(
        route.oLat,
        route.oLon,
        route.dLat,
        route.dLon,
        ARC_RADIUS,
        positions,
        _camDir,
        cosThreshold,
      )
    }
    if (positions.length === 0) return null
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return g
    // routesVersion drives rebuilds as lookups resolve; camera read at build.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thinned, routesVersion, showRoutes])

  // Dispose superseded geometries.
  useEffect(() => {
    return () => geometry?.dispose()
  }, [geometry])

  if (!geometry) return null

  return (
    <lineSegments geometry={geometry} renderOrder={4}>
      <lineBasicMaterial
        color={0x66ccff}
        transparent
        opacity={0.28}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  )
}
