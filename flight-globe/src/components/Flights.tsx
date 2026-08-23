import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import {
  GLOBE_RADIUS,
  altitudeToRadius,
  deadReckon,
  latLonToVector3,
  trackForward,
  type BBox,
} from '../lib/geo'
import { createAirplaneGeometry } from '../lib/airplaneGeometry'
import { getVisibleFlights } from '../lib/visibleFlights'
import { filterFlightsByQuery, flightsForAirportIata, haversineKm } from '../lib/search'
import { filterFlightsByTraffic } from '../lib/filters'
import { findAirport } from '../lib/airports'
import { enqueueRoutes, getCachedRoute } from '../lib/routes'
import { looksLikeAirlineCallsign } from '../lib/callsignVariants'
import type { Route } from '../lib/flight'
import { isConfirmedEmergency } from '../lib/squawk'

const MAX_INSTANCES = 20000
/** Unit sphere; instance scale = world pick radius. */
const pickGeometry = new THREE.SphereGeometry(1, 8, 6)

interface PerFlight {
  baseLat: number
  baseLon: number
  alt: number
  track: number
  vel: number
  dispVec: THREE.Vector3
  route: Route | null
  emergency: boolean
}

const COLOR_LOW = new THREE.Color('#ffb14e')
const COLOR_HIGH = new THREE.Color('#4ea8ff')
const COLOR_SELECTED = new THREE.Color('#ffffff')
const COLOR_HOVER = new THREE.Color('#ffe08a')
const COLOR_PINNED = new THREE.Color('#7dffb3')
const COLOR_EMERGENCY = new THREE.Color('#ff3b3b')

// Scratch objects reused every frame to avoid per-flight allocation.
const _dummy = new THREE.Object3D()
const _pickDummy = new THREE.Object3D()
const _up = new THREE.Vector3()
const _forward = new THREE.Vector3()
const _right = new THREE.Vector3()
const _target = new THREE.Vector3()
const _color = new THREE.Color()
const _basis = new THREE.Matrix4()
const _camDir = new THREE.Vector3()

/** Invisible hit radius grows with camera distance (world ≈ 0.03–0.04). */
function pickRadiusForCamera(camDist: number): number {
  return Math.min(0.048, Math.max(0.01, camDist * 0.014))
}

export function Flights() {
  const flights = useStore((s) => s.flights)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const selectedId = useStore((s) => s.selectedFlightId)
  const hoveredId = useStore((s) => s.hoveredFlightId)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const setHoveredFlight = useStore((s) => s.setHoveredFlight)
  const region = useStore((s) => s.region)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const routesVersion = useStore((s) => s.routesVersion)
  const playbackLive = useStore((s) => s.playbackLive)
  const pinnedFlightIds = useStore((s) => s.pinnedFlightIds)
  const searchQuery = useStore((s) => s.searchQuery)
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const trafficFilters = useStore((s) => s.trafficFilters)
  const followFlight = useStore((s) => s.followFlight)
  const emergencyVersion = useStore((s) => s.emergencyVersion)
  const pinnedSetRef = useRef(new Set<string>())
  useEffect(() => {
    pinnedSetRef.current = new Set(pinnedFlightIds)
  }, [pinnedFlightIds])

  const meshRef = useRef<THREE.InstancedMesh>(null)
  const pickRef = useRef<THREE.InstancedMesh>(null)
  const statesRef = useRef<Map<string, PerFlight>>(new Map())
  const orderRef = useRef<string[]>([])
  const selectedIdRef = useRef<string | null>(null)
  const hoveredIdRef = useRef<string | null>(null)
  const scopeBBoxRef = useRef<BBox | null>(region.bbox)
  useEffect(() => {
    selectedIdRef.current = selectedId
  }, [selectedId])
  useEffect(() => {
    hoveredIdRef.current = hoveredId
  }, [hoveredId])
  useEffect(() => {
    scopeBBoxRef.current = selectedCountry?.bbox ?? region.bbox
  }, [region, selectedCountry])

  // Shared low-poly airliner (+Z nose) — one InstancedMesh draw call for all aircraft.
  const geometry = useMemo(() => createAirplaneGeometry(), [])

  // Resolve routes for the visible/thinned set (not only selection).
  // Priority: selected → pinned → airline-like callsigns → everything else.
  // Cap keeps adsbdb/OpenSky from being flooded on world view.
  useEffect(() => {
    const keep = [
      ...(selectedId ? [selectedId] : []),
      ...pinnedFlightIds,
    ]
    const visible = getVisibleFlights(
      flights,
      selectedCountry,
      searchAirportIata ? null : scopeBBoxRef.current,
      keep,
    )

    const need: Array<{
      callsign: string
      icao24?: string
      priority: number
    }> = []
    const seen = new Set<string>()

    const push = (f: (typeof flights)[0], priority: number) => {
      const cs = f.callsign?.trim()
      if (!cs) return
      const key = cs.toUpperCase()
      if (seen.has(key)) return
      if (f.route) return
      if (getCachedRoute(cs) !== undefined) return
      seen.add(key)
      need.push({ callsign: cs, icao24: f.icao24, priority })
    }

    for (const id of keep) {
      const f = flights.find((x) => x.icao24 === id)
      if (f) push(f, id === selectedId ? 0 : 1)
    }

    // Airport mode: also prioritize traffic near the hub.
    if (searchAirportIata) {
      const airport = findAirport(searchAirportIata)
      const ranked = flights
        .filter((f) => !!f.callsign)
        .map((f) => ({
          f,
          dist: airport
            ? haversineKm(f.lat, f.lon, airport.lat, airport.lon)
            : 1e9,
        }))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 400)
      for (const { f, dist } of ranked) {
        push(f, dist < 90 ? 2 : 8)
      }
    }

    for (const f of visible) {
      push(f, looksLikeAirlineCallsign(f.callsign) ? 5 : 20)
    }

    // Soft cap — queue itself also truncates; this limits per-poll enqueue.
    need.sort((a, b) => a.priority - b.priority)
    if (need.length) enqueueRoutes(need.slice(0, 500))
  }, [
    selectedCountry,
    selectedId,
    searchAirportIata,
    flights,
    routesVersion,
    region,
    pinnedFlightIds,
  ])

  // Ingest each new batch of states, preserving display positions for smoothing.
  useEffect(() => {
    const map = statesRef.current
    const seen = new Set<string>()
    const keepIds = [
      ...(selectedId ? [selectedId] : []),
      ...pinnedFlightIds,
      ...flights.filter((f) => isConfirmedEmergency(f)).map((f) => f.icao24),
    ]

    let pool = filterFlightsByQuery(flights, searchQuery)
    pool = filterFlightsByTraffic(pool, trafficFilters)
    if (searchAirportIata) {
      pool = flightsForAirportIata(pool, searchAirportIata)
      // Keep selected/pinned even if they don't have route data for this airport yet.
      for (const id of keepIds) {
        if (pool.some((f) => f.icao24 === id)) continue
        const f = flights.find((x) => x.icao24 === id)
        if (f) pool.push(f)
      }
    }
    // Keep selected/pinned through traffic filters so follow/pin don't vanish.
    for (const id of keepIds) {
      if (pool.some((f) => f.icao24 === id)) continue
      const f = flights.find((x) => x.icao24 === id)
      if (f) pool.push(f)
    }

    // Region/country-scoped set — camera motion must not change membership.
    // Airport filter: do not clip to the region box (departed flights leave it).
    // Selected / pinned are always retained (incl. during playback scrubbing).
    let visible = getVisibleFlights(
      pool,
      selectedCountry,
      searchAirportIata ? null : scopeBBoxRef.current,
      keepIds,
    )

    // Follow = focus mode: only the followed flight (+ pinned comparisons).
    if (followFlight && selectedId) {
      const focus = new Set(keepIds)
      visible = visible.filter((f) => focus.has(f.icao24))
      for (const id of keepIds) {
        if (visible.some((f) => f.icao24 === id)) continue
        const f = flights.find((x) => x.icao24 === id)
        if (f) visible.push(f)
      }
    }

    // Only clear selection if the aircraft left the *full* feed, not merely
    // the thinned subset (that used to wipe selection during playback).
    if (
      selectedIdRef.current &&
      !flights.some((f) => f.icao24 === selectedIdRef.current)
    ) {
      setSelectedFlight(null)
    }
    if (
      hoveredIdRef.current &&
      !visible.some((f) => f.icao24 === hoveredIdRef.current)
    ) {
      setHoveredFlight(null)
    }

    for (const f of visible) {
      seen.add(f.icao24)
      const prev = map.get(f.icao24)
      const alt = f.geoAltitude ?? f.baroAltitude ?? 0
      const entry: PerFlight = {
        baseLat: f.lat,
        baseLon: f.lon,
        alt,
        track: f.track ?? 0,
        vel: f.onGround ? 0 : f.velocity ?? 0,
        dispVec:
          prev?.dispVec ??
          latLonToVector3(f.lat, f.lon, altitudeToRadius(alt)),
        route: f.route ?? getCachedRoute(f.callsign) ?? null,
        emergency: isConfirmedEmergency(f),
      }
      map.set(f.icao24, entry)
    }
    for (const key of map.keys()) if (!seen.has(key)) map.delete(key)
    orderRef.current = Array.from(map.keys())

    const n = Math.min(orderRef.current.length, MAX_INSTANCES)
    if (meshRef.current) meshRef.current.count = n
    if (pickRef.current) pickRef.current.count = n
  }, [
    flights,
    selectedCountry,
    region,
    routesVersion,
    selectedId,
    pinnedFlightIds,
    searchQuery,
    searchAirportIata,
    trafficFilters,
    followFlight,
    emergencyVersion,
    setSelectedFlight,
    setHoveredFlight,
  ])

  useFrame((state) => {
    const mesh = meshRef.current
    const pick = pickRef.current
    if (!mesh) return
    // Shared with Arcs so the selected plane and its path stay co-located.
    // Historical scrub: freeze at snapshot positions (no dead-reckon drift).
    const elapsed =
      !playbackLive || lastUpdate <= 0
        ? 0
        : Math.max(0, (Date.now() - lastUpdate) / 1000)
    const order = orderRef.current
    const count = Math.min(order.length, MAX_INSTANCES)

    // Front-hemisphere cull: only draw aircraft on the visible cap facing the
    // camera. A surface point u is visible when u·camDir > GLOBE_RADIUS/dist.
    _camDir.copy(state.camera.position)
    const camDist = _camDir.length() || 1
    _camDir.normalize()
    const frontThreshold = GLOBE_RADIUS / camDist - 0.02
    const hitR = pickRadiusForCamera(camDist)

    for (let i = 0; i < count; i++) {
      const e = statesRef.current.get(order[i])
      if (!e) continue
      const pred = deadReckon(e.baseLat, e.baseLon, e.vel, e.track, elapsed)
      const radius = altitudeToRadius(e.alt)
      const isSelected = order[i] === selectedId

      latLonToVector3(pred.lat, pred.lon, radius, _target)
      // Selected aircraft must sit exactly on the route arc (no smoothing lag).
      if (isSelected) e.dispVec.copy(_target)
      else e.dispVec.lerp(_target, 0.2)

      const isHovered = order[i] === hoveredIdRef.current
      const isPinned = pinnedSetRef.current.has(order[i]!)
      const isEmergency = e.emergency
      const facing = e.dispVec.dot(_camDir) / e.dispVec.length()
      if (
        facing < frontThreshold &&
        !isSelected &&
        !isHovered &&
        !isPinned &&
        !isEmergency
      ) {
        // Behind the globe from the viewer — hide this instance (and its pick).
        _dummy.position.copy(e.dispVec)
        _dummy.quaternion.identity()
        _dummy.scale.setScalar(0)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        if (pick) {
          _pickDummy.position.copy(e.dispVec)
          _pickDummy.scale.setScalar(0)
          _pickDummy.updateMatrix()
          pick.setMatrixAt(i, _pickDummy.matrix)
        }
        continue
      }

      // Level attitude: +Y = radial (belly to earth), +Z = nose along track.
      // Use reported/interpolated track (not destination bearing) so playback
      // headings match motion between history frames.
      _up.copy(e.dispVec).normalize()
      trackForward(pred.lat, pred.lon, e.track, _forward)

      _right.crossVectors(_up, _forward)
      if (_right.lengthSq() < 1e-10) {
        trackForward(pred.lat, pred.lon, e.track + 90, _right)
      } else {
        _right.normalize()
      }
      _forward.crossVectors(_right, _up).normalize()
      _basis.makeBasis(_right, _up, _forward)

      const pulse = isEmergency
        ? 0.55 + 0.45 * Math.sin(state.clock.elapsedTime * 7)
        : 1
      _dummy.position.copy(e.dispVec)
      _dummy.quaternion.setFromRotationMatrix(_basis)
      _dummy.scale.setScalar(
        (isSelected
          ? 2.4
          : isEmergency
            ? 2.1
            : isHovered || isPinned
              ? 1.75
              : 1) * (isEmergency ? 0.85 + 0.25 * pulse : 1),
      )
      _dummy.updateMatrix()
      mesh.setMatrixAt(i, _dummy.matrix)

      if (pick) {
        _pickDummy.position.copy(e.dispVec)
        _pickDummy.quaternion.identity()
        _pickDummy.scale.setScalar(hitR * (isEmergency ? 1.35 : 1))
        _pickDummy.updateMatrix()
        pick.setMatrixAt(i, _pickDummy.matrix)
      }

      if (isEmergency) {
        _color.copy(COLOR_EMERGENCY).multiplyScalar(0.65 + 0.35 * pulse)
      } else if (isSelected) {
        _color.copy(COLOR_SELECTED)
      } else if (isPinned) {
        _color.copy(COLOR_PINNED)
      } else if (isHovered) {
        _color.copy(COLOR_HOVER)
      } else {
        const t = Math.min(1, e.alt / 12000)
        _color.copy(COLOR_LOW).lerp(COLOR_HIGH, t)
      }
      mesh.setColorAt(i, _color)
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    if (pick) pick.instanceMatrix.needsUpdate = true
  })

  const drag = useRef({ x: 0, y: 0, moved: false })
  const DRAG_CLICK_THRESHOLD_PX = 5

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    drag.current = { x: e.clientX, y: e.clientY, moved: false }
  }

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (e.buttons !== 0) {
      const dx = e.clientX - drag.current.x
      const dy = e.clientY - drag.current.y
      if (
        dx * dx + dy * dy >
        DRAG_CLICK_THRESHOLD_PX * DRAG_CLICK_THRESHOLD_PX
      ) {
        drag.current.moved = true
      }
      return
    }
    if (e.instanceId == null) return
    e.stopPropagation()
    const icao = orderRef.current[e.instanceId]
    if (!icao) return
    document.body.style.cursor = 'pointer'
    setHoveredFlight(icao, { x: e.clientX, y: e.clientY })
  }

  const onPointerOut = () => {
    document.body.style.cursor = 'default'
    setHoveredFlight(null)
  }

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.instanceId == null) return
    if (drag.current.moved) return
    e.stopPropagation()
    const icao = orderRef.current[e.instanceId]
    if (icao) setSelectedFlight(icao)
  }

  return (
    <>
      {/* Visual only — glyph is too small to raycast reliably at world zoom. */}
      <instancedMesh
        ref={meshRef}
        args={[geometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        raycast={() => {}}
      >
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      {/* Distance-scaled hit targets (invisible). */}
      <instancedMesh
        ref={pickRef}
        args={[pickGeometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerOut={onPointerOut}
        onClick={onClick}
      >
        <meshBasicMaterial
          transparent
          opacity={0}
          depthWrite={false}
          toneMapped={false}
        />
      </instancedMesh>
    </>
  )
}
