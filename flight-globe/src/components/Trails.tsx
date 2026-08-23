import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { useStore } from '../store/useStore'
import { altitudeToRadius, latLonToVector3, type BBox } from '../lib/geo'
import {
  clearAllTrails,
  getTrail,
  pruneTrails,
  recordTrailSample,
} from '../lib/trails'
import { getVisibleFlights } from '../lib/visibleFlights'
import { filterFlightsByQuery, flightsForAirportIata } from '../lib/search'
import { filterFlightsByTraffic } from '../lib/filters'
import { setLineSegmentPositions } from '../lib/lineSegments'

const MAX_SELECTED_PTS = 56
const MAX_ALL_PTS = 18
const MAX_ALL_TRAILS = 400

const _a = new THREE.Vector3()
const _b = new THREE.Vector3()
const _positions: number[] = []

function makeTrailMaterial(
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

function appendTrailSegments(
  pts: { lat: number; lon: number; alt: number }[],
  out: number[],
): void {
  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1]!
    const p1 = pts[i]!
    latLonToVector3(p0.lat, p0.lon, altitudeToRadius(p0.alt), _a)
    latLonToVector3(p1.lat, p1.lon, altitudeToRadius(p1.alt), _b)
    out.push(_a.x, _a.y, _a.z, _b.x, _b.y, _b.z)
  }
}

/**
 * Breadcrumb trails behind aircraft.
 * - selected: long trail on the focused flight (+ pinned)
 * - all: short trails on the currently visible / thinned set
 *
 * Samples only when the feed updates (not every render frame).
 */
export function Trails() {
  const size = useThree((s) => s.size)
  const flights = useStore((s) => s.flights)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const selectedId = useStore((s) => s.selectedFlightId)
  const pinnedFlightIds = useStore((s) => s.pinnedFlightIds)
  const trailMode = useStore((s) => s.trailMode)
  const region = useStore((s) => s.region)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const searchQuery = useStore((s) => s.searchQuery)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const trafficFilters = useStore((s) => s.trafficFilters)
  const routesVersion = useStore((s) => s.routesVersion)
  const playbackLive = useStore((s) => s.playbackLive)
  const playbackAt = useStore((s) => s.playbackAt)
  const scopeBBoxRef = useRef<BBox | null>(region.bbox)
  const lastPlaybackAt = useRef<number | null>(null)

  useEffect(() => {
    scopeBBoxRef.current = selectedCountry?.bbox ?? region.bbox
  }, [region, selectedCountry])

  useEffect(() => {
    if (playbackLive || playbackAt == null) {
      lastPlaybackAt.current = playbackAt
      return
    }
    const prev = lastPlaybackAt.current
    lastPlaybackAt.current = playbackAt
    if (prev != null && Math.abs(playbackAt - prev) > 90_000) {
      clearAllTrails()
    }
  }, [playbackAt, playbackLive])

  const selMat = useMemo(() => makeTrailMaterial('#ffe08a', 2.4, 0.75), [])
  const allMat = useMemo(() => makeTrailMaterial('#6ec8ff', 1.35, 0.28), [])

  const layers = useMemo(() => {
    const selGeom = new LineSegmentsGeometry()
    selGeom.setPositions([0, 0, 0, 0, 0.01, 0])
    const selected = new LineSegments2(selGeom, selMat)
    selected.renderOrder = 6
    selected.frustumCulled = false
    selected.visible = false

    const allGeom = new LineSegmentsGeometry()
    allGeom.setPositions([0, 0, 0, 0, 0.01, 0])
    const all = new LineSegments2(allGeom, allMat)
    all.renderOrder = 2
    all.frustumCulled = false
    all.visible = false

    return { selGeom, allGeom, selected, all }
  }, [selMat, allMat])

  useEffect(() => {
    return () => {
      layers.selGeom.dispose()
      layers.allGeom.dispose()
      selMat.dispose()
      allMat.dispose()
    }
  }, [layers, selMat, allMat])

  // Sample + rebuild on feed / filter / mode changes.
  useEffect(() => {
    if (trailMode === 'off') {
      layers.selected.visible = false
      layers.all.visible = false
      return
    }

    const keepIds = [
      ...(selectedId ? [selectedId] : []),
      ...pinnedFlightIds,
    ]

    let pool = filterFlightsByQuery(flights, searchQuery)
    pool = filterFlightsByTraffic(pool, trafficFilters)
    if (searchAirportIata) {
      pool = flightsForAirportIata(pool, searchAirportIata)
      for (const id of keepIds) {
        if (pool.some((f) => f.icao24 === id)) continue
        const f = flights.find((x) => x.icao24 === id)
        if (f) pool.push(f)
      }
    }

    const visible = getVisibleFlights(
      pool,
      selectedCountry,
      scopeBBoxRef.current,
      keepIds,
    )

    const keep = new Set<string>()
    const focusIds = new Set(keepIds)
    const t = lastUpdate || Date.now()

    if (trailMode === 'selected') {
      for (const id of focusIds) {
        const f = flights.find((x) => x.icao24 === id)
        if (!f) continue
        keep.add(id)
        recordTrailSample(
          id,
          f.lat,
          f.lon,
          f.geoAltitude ?? f.baroAltitude ?? 0,
          MAX_SELECTED_PTS,
          t,
        )
      }
    } else {
      let n = 0
      for (const f of visible) {
        if (n >= MAX_ALL_TRAILS && !focusIds.has(f.icao24)) continue
        keep.add(f.icao24)
        const maxPts = focusIds.has(f.icao24) ? MAX_SELECTED_PTS : MAX_ALL_PTS
        recordTrailSample(
          f.icao24,
          f.lat,
          f.lon,
          f.geoAltitude ?? f.baroAltitude ?? 0,
          maxPts,
          t,
        )
        if (!focusIds.has(f.icao24)) n++
      }
      for (const id of focusIds) {
        if (keep.has(id)) continue
        const f = flights.find((x) => x.icao24 === id)
        if (!f) continue
        keep.add(id)
        recordTrailSample(
          id,
          f.lat,
          f.lon,
          f.geoAltitude ?? f.baroAltitude ?? 0,
          MAX_SELECTED_PTS,
          t,
        )
      }
    }

    pruneTrails(keep)

    _positions.length = 0
    for (const id of focusIds) {
      const pts = getTrail(id)
      if (pts && pts.length >= 2) appendTrailSegments(pts, _positions)
    }
    if (_positions.length >= 6) {
      setLineSegmentPositions(layers.selGeom, _positions)
      layers.selected.visible = true
    } else {
      layers.selected.visible = false
    }

    if (trailMode === 'all') {
      _positions.length = 0
      for (const id of keep) {
        if (focusIds.has(id)) continue
        const pts = getTrail(id)
        if (pts && pts.length >= 2) appendTrailSegments(pts, _positions)
      }
      if (_positions.length >= 6) {
        setLineSegmentPositions(layers.allGeom, _positions)
        layers.all.visible = true
      } else {
        layers.all.visible = false
      }
    } else {
      layers.all.visible = false
    }
  }, [
    trailMode,
    flights,
    lastUpdate,
    selectedId,
    pinnedFlightIds,
    searchQuery,
    searchAirportIata,
    trafficFilters,
    selectedCountry,
    region,
    routesVersion,
    layers,
  ])

  useFrame(() => {
    selMat.resolution.set(size.width, size.height)
    allMat.resolution.set(size.width, size.height)
  })

  return (
    <group>
      <primitive object={layers.all} />
      <primitive object={layers.selected} />
    </group>
  )
}
