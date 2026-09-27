import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
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
import {
  getMapBlend,
  getMapEase,
  getMapFrame,
  mapFeatureScale,
  projectPosition,
} from '../lib/mapView'
import {
  createAirplaneGeometry,
  createAirplaneGlowGeometry,
  createAirplaneOutlineGeometry,
  createMapPlaneGeometry,
  createMapPlaneOutlineGeometry,
  createPlaneBloomGeometry,
  createPlaneBloomTexture,
} from '../lib/airplaneGeometry'
import {
  AIRCRAFT_FAMILIES,
  FAMILY_SCALE,
  aircraftFamily,
  type AircraftFamily,
} from '../lib/aircraftFamily'
import {
  enqueueAircraftTypes,
  getCachedAircraftType,
} from '../lib/aircraftLookup'
import { getVisibleFlights } from '../lib/visibleFlights'
import { filterFlightsByQuery, flightsForAirportIata, haversineKm } from '../lib/search'
import { filterFlightsByTraffic } from '../lib/filters'
import { findAirport } from '../lib/airports'
import { enqueueRoutes, getCachedRoute } from '../lib/routes'
import { looksLikeAirlineCallsign } from '../lib/callsignVariants'
import type { Route } from '../lib/flight'
import { beginFlightAnchors, pushFlightAnchor } from '../lib/flightAnchors'
import { isConfirmedEmergency } from '../lib/squawk'
import { punchFlightColor, writeFlightColor } from '../lib/flightColor'
import { airlineCodeFromCallsign } from '../lib/flightInfo'

const MAX_INSTANCES = 20000
/** Unit sphere; instance scale = world pick radius. */
const pickGeometry = new THREE.SphereGeometry(1, 8, 6)
/** Show the type mesh instead of the outline dart. */
const BODY_DIST = 0.11
/** Map / country view: camera height above the surface. Slightly generous so max zoom still reaches the mesh. */
const MAP_BODY_HEIGHT = 0.42
const FAMILY_INDEX: Record<AircraftFamily, number> = {
  narrow: 0,
  wide: 1,
  jumbo: 2,
  regional: 3,
  turbo: 4,
  bizjet: 5,
  ga: 6,
  helo: 7,
}

interface PerFlight {
  baseLat: number
  baseLon: number
  alt: number
  track: number
  vel: number
  dispVec: THREE.Vector3
  route: Route | null
  emergency: boolean
  airline: string
  family: AircraftFamily
  typeCode: string
  category: string
}

const COLOR_SELECTED = new THREE.Color('#ffffff').multiplyScalar(1.8)
const COLOR_HOVER = new THREE.Color('#ffe9a3').multiplyScalar(1.55)
const COLOR_PINNED = new THREE.Color('#b6ffd6').multiplyScalar(1.45)
const COLOR_EMERGENCY = new THREE.Color('#ff6b6b').multiplyScalar(1.5)
const MAP_COLOR_SELECTED = new THREE.Color('#ffffff')
const MAP_COLOR_HOVER = new THREE.Color('#fff36b')
const MAP_COLOR_PINNED = new THREE.Color('#b6ffd4')
const MAP_COLOR_EMERGENCY = new THREE.Color('#ff5c5c')

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
const _bodyCounts = new Uint16Array(AIRCRAFT_FAMILIES.length)

/**
 * World-space pick radius that stays ~targetPx on screen, so zooming the
 * country map does not turn every plane into a hundred-pixel hit blob.
 */
function pickRadiusForScreen(
  dist: number,
  fovDeg: number,
  heightPx: number,
  targetPx = 18,
): number {
  const tan = Math.tan(((fovDeg * Math.PI) / 180) / 2)
  const r = Math.max(0.06, dist) * tan * ((targetPx * 2) / Math.max(1, heightPx))
  return THREE.MathUtils.clamp(r, 0.001, 0.045)
}

export function Flights() {
  const flights = useStore((s) => s.flights)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const selectedId = useStore((s) => s.selectedFlightId)
  const hoveredId = useStore((s) => s.hoveredFlightId)
  const showPlanes = useStore((s) => s.display.planes)
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
  const colorMode = useStore((s) => s.colorMode)
  const colorModeRef = useRef(colorMode)
  colorModeRef.current = colorMode
  const weatherMode = useStore((s) => s.weatherMode)
  const flatMap = useStore((s) => s.flatMap)
  const weatherOnRef = useRef(false)
  weatherOnRef.current = weatherMode === 'radar' && Boolean(selectedCountry || flatMap)
  const pinnedSetRef = useRef(new Set<string>())
  useEffect(() => {
    pinnedSetRef.current = new Set(pinnedFlightIds)
  }, [pinnedFlightIds])

  const meshRef = useRef<THREE.InstancedMesh>(null)
  const bodyRefs = useRef<(THREE.InstancedMesh | null)[]>(
    AIRCRAFT_FAMILIES.map(() => null),
  )
  const glowRef = useRef<THREE.InstancedMesh>(null)
  const bloomRef = useRef<THREE.InstancedMesh>(null)
  const mapMeshRef = useRef<THREE.InstancedMesh>(null)
  const mapHaloRef = useRef<THREE.InstancedMesh>(null)
  const pickRef = useRef<THREE.InstancedMesh>(null)
  const statesRef = useRef<Map<string, PerFlight>>(new Map())
  const orderRef = useRef<string[]>([])
  const selectedIdRef = useRef<string | null>(null)
  const hoveredIdRef = useRef<string | null>(null)
  const showPlanesRef = useRef(true)
  const scopeBBoxRef = useRef<BBox | null>(region.bbox)
  useEffect(() => {
    selectedIdRef.current = selectedId
  }, [selectedId])
  useEffect(() => {
    hoveredIdRef.current = hoveredId
  }, [hoveredId])
  useEffect(() => {
    showPlanesRef.current = showPlanes
  }, [showPlanes])
  useEffect(() => {
    scopeBBoxRef.current = region.bbox
  }, [region])

  const geometry = useMemo(() => createAirplaneOutlineGeometry(), [])
  const bodyGeometries = useMemo(
    () => AIRCRAFT_FAMILIES.map((fam) => createAirplaneGeometry(fam)),
    [],
  )
  useLayoutEffect(() => {
    for (const mesh of bodyRefs.current) {
      if (mesh) mesh.count = 0
    }
  }, [])
  const glowGeometry = useMemo(() => createAirplaneGlowGeometry(), [])
  const mapGeometry = useMemo(() => createMapPlaneGeometry(), [])
  const mapOutlineGeometry = useMemo(() => createMapPlaneOutlineGeometry(), [])
  const bloomGeometry = useMemo(() => createPlaneBloomGeometry(), [])
  const bloomTexture = useMemo(() => createPlaneBloomTexture(), [])

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
    const focusIds = [
      ...(selectedId ? [selectedId] : []),
      ...pinnedFlightIds,
    ]
    const keepIds = [
      ...focusIds,
      ...(followFlight
        ? []
        : flights.filter((f) => isConfirmedEmergency(f)).map((f) => f.icao24)),
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
    // Unusual squawks are not exempt — they hide with everyone else.
    if (followFlight && selectedId) {
      const focus = new Set(focusIds)
      visible = visible.filter((f) => focus.has(f.icao24))
      for (const id of focusIds) {
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

    const needTypes: Array<{ icao24: string; priority: number }> = []
    for (const f of visible) {
      seen.add(f.icao24)
      const prev = map.get(f.icao24)
      const alt = f.geoAltitude ?? f.baroAltitude ?? 0
      const cachedType = getCachedAircraftType(f.icao24)
      const typeCode = (f.typeCode || cachedType || '').trim().toUpperCase()
      if (!f.typeCode && cachedType === undefined) {
        needTypes.push({
          icao24: f.icao24,
          priority: f.icao24 === selectedId ? 0 : 12,
        })
      }
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
        airline: airlineCodeFromCallsign(f.callsign || ''),
        typeCode,
        category: f.category || '',
        family: aircraftFamily(typeCode, f.category),
      }
      map.set(f.icao24, entry)
    }
    if (needTypes.length) enqueueAircraftTypes(needTypes.slice(0, 400))
    for (const key of map.keys()) if (!seen.has(key)) map.delete(key)
    orderRef.current = Array.from(map.keys())

    const n = Math.min(orderRef.current.length, MAX_INSTANCES)
    if (meshRef.current) meshRef.current.count = n
    if (glowRef.current) glowRef.current.count = n
    if (bloomRef.current) bloomRef.current.count = n
    if (mapMeshRef.current) mapMeshRef.current.count = n
    if (mapHaloRef.current) mapHaloRef.current.count = n
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
    const mapBlend = getMapBlend()
    const mapEase = getMapEase()
    const map = getMapFrame()
    const mapMode = mapBlend > 0.2
    const frontThreshold = GLOBE_RADIUS / camDist - 0.02
    // Height above the map. Camera distance from the origin grows when the
    // view is panned, which kept meshes off even at maximum zoom.
    const mapHeight = map
      ? Math.max(0.12, state.camera.position.dot(map.origin) - GLOBE_RADIUS)
      : Math.max(0.12, camDist - GLOBE_RADIUS)
    const fov =
      state.camera instanceof THREE.PerspectiveCamera ? state.camera.fov : 45
    const featureScale = mapFeatureScale()
    const mapGlyph =
      mapEase > 0.03
        ? THREE.MathUtils.clamp(mapHeight * 1.05, 0.38, 2.1)
        : 0
    const glow = glowRef.current
    const bloom = bloomRef.current
    const bodies = bodyRefs.current
    const mapMesh = mapMeshRef.current
    const mapHalo = mapHaloRef.current
    _bodyCounts.fill(0)
    beginFlightAnchors()

    for (let i = 0; i < count; i++) {
      const e = statesRef.current.get(order[i])
      if (!e) continue
      const pred = deadReckon(e.baseLat, e.baseLon, e.vel, e.track, elapsed)
      const radius = altitudeToRadius(e.alt)
      const isSelected = order[i] === selectedId

      projectPosition(pred.lat, pred.lon, radius, _target)
      if (mapMode && map) _target.addScaledVector(map.origin, 0.012)
      // Selected aircraft must sit exactly on the route arc (no smoothing lag).
      if (isSelected || mapBlend > 0.02) e.dispVec.copy(_target)
      else e.dispVec.lerp(_target, 0.2)

      const isHovered = order[i] === hoveredIdRef.current
      const isPinned = pinnedSetRef.current.has(order[i]!)
      const isEmergency = e.emergency
      const facing = e.dispVec.dot(_camDir) / (e.dispVec.length() || 1)
      if (
        !showPlanesRef.current ||
        (!mapMode &&
          facing < frontThreshold &&
          !isSelected &&
          !isHovered &&
          !isPinned &&
          !isEmergency)
      ) {
        // Behind the globe from the viewer — hide this instance (and its pick).
        _dummy.position.copy(e.dispVec)
        _dummy.quaternion.identity()
        _dummy.scale.setScalar(0)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        if (glow) glow.setMatrixAt(i, _dummy.matrix)
        if (bloom) bloom.setMatrixAt(i, _dummy.matrix)
        if (mapMesh) mapMesh.setMatrixAt(i, _dummy.matrix)
        if (mapHalo) mapHalo.setMatrixAt(i, _dummy.matrix)
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
      if (mapMode && map) {
        const rad = (e.track * Math.PI) / 180
        _up.copy(map.origin)
        _forward
          .copy(map.east)
          .multiplyScalar(Math.sin(rad))
          .addScaledVector(map.north, Math.cos(rad))
          .normalize()
        _right.crossVectors(_up, _forward)
        if (_right.lengthSq() < 1e-10) {
          _right.copy(map.east)
        } else {
          _right.normalize()
        }
        _forward.crossVectors(_right, _up).normalize()
        _basis.makeBasis(_right, _up, _forward)
      } else {
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
      }

      const pulse = isEmergency
        ? 0.55 + 0.45 * Math.sin(state.clock.elapsedTime * 7)
        : 1
      const emphasis =
        (isSelected
          ? followFlight
            ? 1.15
            : 2.4
          : isEmergency
            ? 2.1
            : isHovered || isPinned
              ? 1.75
              : 1) * (isEmergency ? 0.85 + 0.25 * pulse : 1)

      _dummy.position.copy(e.dispVec)
      _dummy.quaternion.setFromRotationMatrix(_basis)

      const globeScale = mapEase > 0.85 ? 0 : emphasis * featureScale
      const weatherOn = weatherOnRef.current
      const camDistTo = state.camera.position.distanceTo(e.dispVec)
      const chaseBody = Boolean(followFlight && isSelected && !mapMode)
      const showBody =
        chaseBody ||
        (!mapMode && camDistTo < BODY_DIST && globeScale > 0.02) ||
        (mapMode && mapHeight < MAP_BODY_HEIGHT && mapEase > 0.55)
      if (globeScale > 0.02 && !showBody) {
        _dummy.scale.setScalar(globeScale * (weatherOn ? 1.62 : 1.4))
        _dummy.updateMatrix()
        if (glow) glow.setMatrixAt(i, _dummy.matrix)
        _dummy.scale.setScalar(globeScale)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        _dummy.scale.setScalar(globeScale * (isSelected || isEmergency ? 1.28 : weatherOn ? 1.18 : 1.16))
        _dummy.updateMatrix()
        if (bloom) bloom.setMatrixAt(i, _dummy.matrix)
      } else {
        _dummy.scale.setScalar(0)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        if (glow) glow.setMatrixAt(i, _dummy.matrix)
        if (bloom) bloom.setMatrixAt(i, _dummy.matrix)
      }

      if (mapMesh && mapHalo) {
        const mapScale = mapGlyph * mapEase * (isSelected ? 1.35 : isHovered || isEmergency ? 1.2 : 1)
        if (mapScale > 0.02 && !showBody) {
          _dummy.scale.setScalar(mapScale * 1.2)
          _dummy.updateMatrix()
          mapHalo.setMatrixAt(i, _dummy.matrix)
          _dummy.position.addScaledVector(_up, 0.0006)
          _dummy.scale.setScalar(mapScale * 0.78)
          _dummy.updateMatrix()
          mapMesh.setMatrixAt(i, _dummy.matrix)
        } else {
          _dummy.scale.setScalar(0)
          _dummy.updateMatrix()
          mapHalo.setMatrixAt(i, _dummy.matrix)
          mapMesh.setMatrixAt(i, _dummy.matrix)
        }
      }

      if (pick) {
        const screenR =
          pickRadiusForScreen(camDistTo, fov, state.size.height) *
          (isEmergency ? 1.35 : 1)
        // Cover the graphic itself. The visible mesh does not raycast, and a
        // short screen radius lets the airport disc under a wing take the hit.
        const glyph =
          mapGlyph *
          mapEase *
          (isSelected ? 1.35 : isHovered || isEmergency ? 1.2 : 1)
        const spriteR = !showBody ? Math.max(globeScale, glyph) * 0.016 : 0
        const bodyR = showBody
          ? (chaseBody
              ? 0.65
              : mapMode
                ? THREE.MathUtils.clamp(mapHeight * 0.95, 0.18, 0.36)
                : 0.3) * 0.03
          : 0
        const hitR = Math.max(screenR, spriteR, bodyR)
        _pickDummy.position.copy(e.dispVec)
        _pickDummy.quaternion.identity()
        _pickDummy.scale.setScalar(hitR)
        _pickDummy.updateMatrix()
        pick.setMatrixAt(i, _pickDummy.matrix)
      }

      if (mapEase > 0.45) {
        if (isEmergency) {
          _color.copy(MAP_COLOR_EMERGENCY).multiplyScalar(0.75 + 0.25 * pulse)
        } else if (isSelected) {
          _color.copy(MAP_COLOR_SELECTED)
        } else if (isPinned) {
          _color.copy(MAP_COLOR_PINNED)
        } else if (isHovered) {
          _color.copy(MAP_COLOR_HOVER)
        } else {
          writeFlightColor(_color, colorModeRef.current, e.alt, e.vel, e.airline)
          punchFlightColor(_color, weatherOn, true)
        }
        if (mapMesh) mapMesh.setColorAt(i, _color)
      } else if (isEmergency) {
        _color.copy(COLOR_EMERGENCY).multiplyScalar(0.65 + 0.35 * pulse)
      } else if (isSelected) {
        _color.copy(COLOR_SELECTED)
      } else if (isPinned) {
        _color.copy(COLOR_PINNED)
      } else if (isHovered) {
        _color.copy(COLOR_HOVER)
      } else {
        writeFlightColor(_color, colorModeRef.current, e.alt, e.vel, e.airline)
        punchFlightColor(_color, weatherOn, false)
      }
      mesh.setColorAt(i, _color)
      if (bloom) {
        if (weatherOn && !isEmergency && !isSelected) {
          _color.lerp(COLOR_SELECTED, 0.55)
        }
        bloom.setColorAt(i, _color)
      }

      if (showBody) {
        const typeCode =
          e.typeCode || getCachedAircraftType(order[i]!) || ''
        const family = aircraftFamily(typeCode, e.category)
        const fi = FAMILY_INDEX[family]
        const body = bodies[fi]
        const slot = _bodyCounts[fi]++
        if (body && slot < MAX_INSTANCES) {
          const famScale = FAMILY_SCALE[family]
          const closeBoost = isSelected ? 1.1 : isHovered || isPinned ? 1.05 : 1
          const bodyScale =
            (chaseBody
              ? 0.65
              : mapMode
                ? THREE.MathUtils.clamp(mapHeight * 0.95, 0.18, 0.36)
                : 0.3) *
            famScale *
            closeBoost
          _dummy.position.copy(e.dispVec)
          _dummy.quaternion.setFromRotationMatrix(_basis)
          _dummy.scale.setScalar(bodyScale)
          _dummy.updateMatrix()
          body.setMatrixAt(slot, _dummy.matrix)
          body.setColorAt(slot, _color)
        }
      }

      const mapScale =
        mapGlyph * mapEase * (isSelected ? 1.35 : isHovered || isEmergency ? 1.2 : 1)
      if (globeScale > 0.02 || mapScale > 0.02 || showBody) {
        const f = useStore.getState().flightsById.get(order[i]!)
        pushFlightAnchor({
          id: order[i]!,
          x: e.dispVec.x,
          y: e.dispVec.y,
          z: e.dispVec.z,
          callsign: (f?.callsign || f?.icao24 || order[i]!).trim().toUpperCase(),
          typeCode: (f?.typeCode || '').trim().toUpperCase(),
          emergency: isEmergency,
          selected: isSelected,
          hovered: isHovered,
          pinned: isPinned,
        })
      }
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
    for (let f = 0; f < AIRCRAFT_FAMILIES.length; f++) {
      const body = bodies[f]
      if (!body) continue
      body.count = _bodyCounts[f]
      body.instanceMatrix.needsUpdate = true
      if (body.instanceColor) body.instanceColor.needsUpdate = true
    }
    if (glow) glow.instanceMatrix.needsUpdate = true
    if (bloom) {
      bloom.instanceMatrix.needsUpdate = true
      if (bloom.instanceColor) bloom.instanceColor.needsUpdate = true
    }
    if (mapMesh) {
      mapMesh.instanceMatrix.needsUpdate = true
      if (mapMesh.instanceColor) mapMesh.instanceColor.needsUpdate = true
    }
    if (mapHalo) mapHalo.instanceMatrix.needsUpdate = true
    if (pick) pick.instanceMatrix.needsUpdate = true
  })

  const drag = useRef({ x: 0, y: 0, moved: false })
  const hoverEpoch = useRef(0)
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
    hoverEpoch.current += 1
    document.body.style.cursor = 'pointer'
    setHoveredFlight(icao, { x: e.clientX, y: e.clientY })
  }

  const onPointerOut = () => {
    const epoch = hoverEpoch.current
    // Leaving one plane can land in the same turn as entering the next.
    queueMicrotask(() => {
      if (hoverEpoch.current !== epoch) return
      document.body.style.cursor = 'default'
      setHoveredFlight(null)
    })
  }

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.instanceId == null) return
    if (drag.current.moved) return
    e.stopPropagation()
    const icao = orderRef.current[e.instanceId]
    if (icao) setSelectedFlight(icao)
  }

  return (
    <group renderOrder={10}>
      <instancedMesh
        ref={bloomRef}
        args={[bloomGeometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        renderOrder={19}
        raycast={() => {}}
      >
        <meshBasicMaterial
          map={bloomTexture}
          transparent
          opacity={0.38}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
          depthTest
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
      <instancedMesh
        ref={glowRef}
        args={[glowGeometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        renderOrder={20}
        raycast={() => {}}
      >
        <meshBasicMaterial
          color="#000000"
          transparent={false}
          toneMapped={false}
          depthTest
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
      <instancedMesh
        ref={meshRef}
        args={[geometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        renderOrder={21}
        raycast={() => {}}
      >
        <meshBasicMaterial
          transparent
          opacity={1}
          toneMapped={false}
          depthTest
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
      {AIRCRAFT_FAMILIES.map((fam, fi) => (
        <instancedMesh
          key={fam}
          ref={(el) => {
            bodyRefs.current[fi] = el
          }}
          args={[bodyGeometries[fi], undefined, MAX_INSTANCES]}
          frustumCulled={false}
          renderOrder={22}
          raycast={() => {}}
        >
          <meshStandardMaterial
            color="#e8eef8"
            metalness={0.28}
            roughness={0.42}
            emissive="#6a93c8"
            emissiveIntensity={0.22}
            toneMapped={false}
            transparent
            opacity={1}
            depthWrite
          />
        </instancedMesh>
      ))}
      <instancedMesh
        ref={mapHaloRef}
        args={[mapOutlineGeometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        renderOrder={22}
        raycast={() => {}}
      >
        <meshBasicMaterial
          color="#000000"
          transparent={false}
          toneMapped={false}
          depthTest={false}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
      <instancedMesh
        ref={mapMeshRef}
        args={[mapGeometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        renderOrder={23}
        raycast={() => {}}
      >
        <meshBasicMaterial
          transparent
          opacity={1}
          toneMapped={false}
          depthTest={false}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </instancedMesh>
      {/* Distance-scaled hit targets (invisible). */}
      <instancedMesh
        ref={pickRef}
        args={[pickGeometry, undefined, MAX_INSTANCES]}
        frustumCulled={false}
        renderOrder={7}
        userData={{ flightPick: true }}
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
    </group>
  )
}
