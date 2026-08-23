import { useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { useStore } from '../store/useStore'
import {
  altitudeToRadius,
  appendFlightPathArc,
  deadReckon,
} from '../lib/geo'
import { enqueueRoutes, getCachedRoute } from '../lib/routes'
import { setLineSegmentPositions } from '../lib/lineSegments'
import type { FlightState } from '../lib/flight'

const _positions: number[] = []

function makeArcMaterial(
  color: string,
  linewidth: number,
  opacity: number,
): LineMaterial {
  return new LineMaterial({
    color,
    linewidth,
    transparent: true,
    opacity,
    depthTest: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    toneMapped: false,
  })
}

function resolveFlightRoute(f: FlightState) {
  return f.route ?? getCachedRoute(f.callsign) ?? null
}

/**
 * Route arcs for the selected flight plus any pinned comparison flights.
 */
export function Arcs() {
  const size = useThree((s) => s.size)
  const flightsById = useStore((s) => s.flightsById)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const selectedId = useStore((s) => s.selectedFlightId)
  const pinnedFlightIds = useStore((s) => s.pinnedFlightIds)
  const routesVersion = useStore((s) => s.routesVersion)
  const playbackLive = useStore((s) => s.playbackLive)

  const glowMat = useMemo(() => makeArcMaterial('#5eb8ff', 4.5, 0.18), [])
  const coreMat = useMemo(() => makeArcMaterial('#ffe08a', 2.25, 0.85), [])
  const pinMat = useMemo(() => makeArcMaterial('#7dffb3', 2.0, 0.55), [])

  const layers = useMemo(() => {
    const selectedGeom = new LineSegmentsGeometry()
    selectedGeom.setPositions([0, 0, 0, 0, 0.01, 0])
    const glow = new LineSegments2(selectedGeom, glowMat)
    glow.renderOrder = 4
    glow.frustumCulled = false
    glow.visible = false
    const core = new LineSegments2(selectedGeom, coreMat)
    core.renderOrder = 5
    core.frustumCulled = false
    core.visible = false

    const pinGeom = new LineSegmentsGeometry()
    pinGeom.setPositions([0, 0, 0, 0, 0.01, 0])
    const pinned = new LineSegments2(pinGeom, pinMat)
    pinned.renderOrder = 3
    pinned.frustumCulled = false
    pinned.visible = false

    return { selectedGeom, pinGeom, glow, core, pinned }
  }, [glowMat, coreMat, pinMat])

  useEffect(() => {
    const ids = new Set<string>([
      ...(selectedId ? [selectedId] : []),
      ...pinnedFlightIds,
    ])
    for (const id of ids) {
      const f = flightsById.get(id)
      if (!f?.callsign || f.route) continue
      if (getCachedRoute(f.callsign) !== undefined) continue
      enqueueRoutes([{ callsign: f.callsign, icao24: f.icao24, priority: 0 }])
    }
  }, [selectedId, pinnedFlightIds, flightsById, routesVersion])

  useEffect(() => {
    return () => {
      layers.selectedGeom.dispose()
      layers.pinGeom.dispose()
    }
  }, [layers])

  useEffect(() => {
    return () => {
      glowMat.dispose()
      coreMat.dispose()
      pinMat.dispose()
    }
  }, [glowMat, coreMat, pinMat])

  useFrame(() => {
    glowMat.resolution.set(size.width, size.height)
    coreMat.resolution.set(size.width, size.height)
    pinMat.resolution.set(size.width, size.height)

    const elapsed =
      !playbackLive || lastUpdate <= 0
        ? 0
        : Math.max(0, (Date.now() - lastUpdate) / 1000)

    const appendFor = (f: FlightState, out: number[]) => {
      const route = resolveFlightRoute(f)
      if (!route) return
      const vel = f.onGround ? 0 : f.velocity ?? 0
      const pred = deadReckon(f.lat, f.lon, vel, f.track ?? 0, elapsed)
      const pRadius = altitudeToRadius(f.geoAltitude ?? f.baroAltitude)
      appendFlightPathArc(
        route.oLat,
        route.oLon,
        route.dLat,
        route.dLon,
        pred.lat,
        pred.lon,
        pRadius,
        out,
      )
    }

    // Selected path
    const selected = selectedId ? flightsById.get(selectedId) : undefined
    _positions.length = 0
    if (selected && resolveFlightRoute(selected)) {
      appendFor(selected, _positions)
    }
    if (_positions.length >= 6) {
      setLineSegmentPositions(layers.selectedGeom, _positions)
      layers.glow.visible = true
      layers.core.visible = true
    } else {
      layers.glow.visible = false
      layers.core.visible = false
    }

    // Pinned comparison paths (exclude selected — already drawn)
    _positions.length = 0
    for (const id of pinnedFlightIds) {
      if (id === selectedId) continue
      const f = flightsById.get(id)
      if (!f) continue
      appendFor(f, _positions)
    }
    if (_positions.length >= 6) {
      setLineSegmentPositions(layers.pinGeom, _positions)
      layers.pinned.visible = true
    } else {
      layers.pinned.visible = false
    }
  })

  return (
    <group>
      <primitive object={layers.pinned} />
      <primitive object={layers.glow} />
      <primitive object={layers.core} />
    </group>
  )
}
