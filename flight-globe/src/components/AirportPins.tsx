import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import { AIRPORTS, type Airport, type AirportSize } from '../lib/airports'
import { airportPinsInCountry } from '../lib/countryFlights'
import { GLOBE_RADIUS } from '../lib/geo'
import {
  getMapBlend,
  getMapEase,
  getMapFrame,
  inMapFrame,
  MAP_LAND_Z,
  mapFeatureScale,
  projectPosition,
} from '../lib/mapView'
import {
  airportShouldShowBuilding,
  airportYawFromIata,
  createAirportBuildingGeometry,
  createAirportPickGeometry,
  createAirportPinGeometry,
} from '../lib/airportGeometry'

/** On the globe, just clear of the sphere. Polygon offset covers the rest. */
const SURFACE_RADIUS = GLOBE_RADIUS + 0.0004
const SURFACE_BIAS = SURFACE_RADIUS - GLOBE_RADIUS
/** Steel field marks — same as --text-dim, apart from the plane ramps. */
const COLOR_IDLE = new THREE.Color('#8fa3bd')
const COLOR_MAP = new THREE.Color('#8fa3bd')
const COLOR_ACTIVE = new THREE.Color('#ffcf6b')
const COLOR_HOVER = new THREE.Color('#ffffff')

const SIZE_SCALE: Record<AirportSize, number> = {
  large: 1.15,
  medium: 0.72,
  small: 0.48,
}

const BUILDING_SCALE: Record<AirportSize, number> = {
  large: 1.05,
  medium: 0.88,
  small: 0.74,
}

/** Country / 2D map glyphs were crowding flights and coastlines. */
const MAP_AIRPORT_SCALE = 0.5
/** Globe markers — 40% smaller than the shared pin/building scale. */
const GLOBE_AIRPORT_SCALE = 0.6

const SIZES: AirportSize[] = ['large', 'medium', 'small']
/** Wait before showing a hover label so a sweep across fields does not strobe. */
const HOVER_LABEL_DELAY_MS = 220
/** Keep the last hover label through brief gaps between meshes. */
const HOVER_LABEL_GAP_MS = 100

/** Match the country fill as the globe flattens, so markers do not hover over it. */
function seatOnLand(
  target: THREE.Vector3,
  map: { origin: THREE.Vector3 } | null,
): void {
  if (!map) return
  const ease = getMapEase()
  if (ease <= 0) return
  target.addScaledVector(map.origin, -(SURFACE_BIAS - MAP_LAND_Z) * ease)
}

const _dummy = new THREE.Object3D()
const _up = new THREE.Vector3()
const _camDir = new THREE.Vector3()
const _color = new THREE.Color()
const _yAxis = new THREE.Vector3(0, 1, 0)
const _zeroScale = new THREE.Vector3(0, 0, 0)

interface PinLayout {
  airport: Airport
  pos: THREE.Vector3
  yaw: number
  buildingIndex: number
}

const _labelUp = new THREE.Vector3()
const _labelToCam = new THREE.Vector3()

interface LabelTexture {
  tex: THREE.CanvasTexture
  w: number
  h: number
}

/** Screen-size label drawn in the scene, under the aircraft render order. */
function makeLabelTexture(iata: string, name: string): LabelTexture {
  const dpr = 2
  const measure = document.createElement('canvas').getContext('2d')!
  const codeFont = '600 12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  const nameFont = '10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  measure.font = codeFont
  const codeW = measure.measureText(iata).width
  measure.font = nameFont
  const maxName = 220
  const words = name.split(/\s+/).filter(Boolean)
  const lines: string[] = []
  let line = ''
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (measure.measureText(test).width > maxName && line) {
      lines.push(line)
      line = word
    } else {
      line = test
    }
  }
  if (line) lines.push(line)
  const nameW = lines.reduce((m, l) => Math.max(m, measure.measureText(l).width), 0)
  const padX = 8
  const padY = 4
  const codeH = 14
  const lineH = 12
  const w = Math.max(8, Math.ceil(Math.max(codeW, nameW) + padX * 2))
  const h = Math.max(8, Math.ceil(padY * 2 + codeH + 1 + Math.max(1, lines.length) * lineH))
  const canvas = document.createElement('canvas')
  canvas.width = w * dpr
  canvas.height = h * dpr
  const ctx = canvas.getContext('2d')!
  ctx.scale(dpr, dpr)
  ctx.beginPath()
  const r = 8
  ctx.moveTo(r, 0)
  ctx.arcTo(w, 0, w, h, r)
  ctx.arcTo(w, h, 0, h, r)
  ctx.arcTo(0, h, 0, 0, r)
  ctx.arcTo(0, 0, w, 0, r)
  ctx.closePath()
  ctx.fillStyle = 'rgba(10, 14, 24, 0.9)'
  ctx.fill()
  ctx.strokeStyle = 'rgba(143, 163, 189, 0.45)'
  ctx.lineWidth = 1
  ctx.stroke()
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = codeFont
  ctx.fillStyle = '#8fa3bd'
  ctx.fillText(iata, w / 2, padY + codeH / 2)
  ctx.font = nameFont
  ctx.fillStyle = '#8fa3bd'
  lines.forEach((text, i) => {
    ctx.fillText(text, w / 2, padY + codeH + 1 + lineH * i + lineH / 2)
  })
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return { tex, w, h }
}

function AirportPinLabel({ entry }: { entry: PinLayout }) {
  const spriteRef = useRef<THREE.Sprite>(null)
  const built = useMemo(
    () => makeLabelTexture(entry.airport.iata, entry.airport.name),
    [entry.airport.iata, entry.airport.name],
  )
  useEffect(() => () => built.tex.dispose(), [built])
  useFrame(({ camera, size }) => {
    const sprite = spriteRef.current
    if (!sprite) return
    _labelToCam.copy(camera.position).sub(entry.pos)
    const dist = Math.max(0.05, _labelToCam.length())
    _labelToCam.multiplyScalar(1 / dist)
    const fov = camera instanceof THREE.PerspectiveCamera ? camera.fov : 45
    const worldPerPx =
      (2 * Math.tan(((fov * Math.PI) / 180) / 2) * dist) / Math.max(1, size.height)
    // Same lift the old HTML label used, so the tag sits just above the beacon.
    sprite.scale.set(built.w * worldPerPx, built.h * worldPerPx, 1)
    _labelUp.set(0, 1, 0).applyQuaternion(camera.quaternion)
    sprite.position.copy(entry.pos)
    sprite.position.addScaledVector(_labelUp, 18 * worldPerPx)
    sprite.position.addScaledVector(_labelToCam, 0.004)
  })
  return (
    <sprite
      ref={spriteRef}
      // Above airport beacons (18–20), under aircraft (21+).
      renderOrder={20.5}
      raycast={() => {}}
    >
      <spriteMaterial
        map={built.tex}
        transparent
        depthTest={false}
        depthWrite={false}
        toneMapped={false}
      />
    </sprite>
  )
}

function writeHidden(mesh: THREE.InstancedMesh, index: number, pos: THREE.Vector3) {
  _dummy.position.copy(pos)
  _dummy.quaternion.identity()
  _dummy.scale.copy(_zeroScale)
  _dummy.updateMatrix()
  mesh.setMatrixAt(index, _dummy.matrix)
}

/**
 * Worldwide airport pins. Distant view uses a compact marker; zooming in
 * swaps it for a control-tower beacon with a tight footprint so nearby
 * fields stay separate.
 */
export function AirportPins() {
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const followFlight = useStore((s) => s.followFlight)
  const focusCamera = useStore((s) => s.focusCamera)
  const display = useStore((s) => s.display)
  const displayRef = useRef(display)
  displayRef.current = display

  const pinRef = useRef<THREE.InstancedMesh>(null)
  const largeRef = useRef<THREE.InstancedMesh>(null)
  const mediumRef = useRef<THREE.InstancedMesh>(null)
  const smallRef = useRef<THREE.InstancedMesh>(null)
  const pickLargeRef = useRef<THREE.InstancedMesh>(null)
  const pickMediumRef = useRef<THREE.InstancedMesh>(null)
  const pickSmallRef = useRef<THREE.InstancedMesh>(null)
  const hoveredRef = useRef<string | null>(null)
  const hoverEpoch = useRef(0)
  const hoverCandidate = useRef<{
    iata: string | null
    since: number
    missingSince: number
  }>({
    iata: null,
    since: 0,
    missingSince: 0,
  })
  const hoverLabelRef = useRef<string | null>(null)
  const drag = useRef({ x: 0, y: 0 })
  const [hoverLabelIata, setHoverLabelIata] = useState<string | null>(null)

  const inSelectedCountry = useMemo(
    () => (selectedCountry ? airportPinsInCountry(selectedCountry) : null),
    [selectedCountry],
  )

  const { layout, bySize, byIata } = useMemo(() => {
    const groups: Record<AirportSize, PinLayout[]> = {
      large: [],
      medium: [],
      small: [],
    }
    const byIata = new Map<string, PinLayout>()
    const layout = AIRPORTS.map((airport) => {
      const entry: PinLayout = {
        airport,
        pos: new THREE.Vector3(),
        yaw: airportYawFromIata(airport.iata),
        buildingIndex: groups[airport.size].length,
      }
      groups[airport.size].push(entry)
      byIata.set(airport.iata, entry)
      return entry
    })
    return { layout, bySize: groups, byIata }
  }, [])

  const pinGeometry = useMemo(() => createAirportPinGeometry(), [])
  // Wider than the beacon so nearby fields are easy to hit; the closest center wins.
  const pickGeometry = useMemo(() => createAirportPickGeometry(), [])
  const buildingGeometry = useMemo(
    () => ({
      large: createAirportBuildingGeometry('large'),
      medium: createAirportBuildingGeometry('medium'),
      small: createAirportBuildingGeometry('small'),
    }),
    [],
  )

  useLayoutEffect(() => {
    const meshes = [
      pinRef.current,
      largeRef.current,
      mediumRef.current,
      smallRef.current,
    ]
    for (const mesh of meshes) {
      if (!mesh) continue
      for (let i = 0; i < mesh.count; i++) mesh.setColorAt(i, COLOR_IDLE)
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
      const mat = mesh.material
      if (mat && !Array.isArray(mat)) mat.needsUpdate = true
    }
  }, [])

  const hoverEntry =
    hoverLabelIata && hoverLabelIata !== searchAirportIata
      ? byIata.get(hoverLabelIata) ?? null
      : null

  useFrame((state) => {
    const pinMesh = pinRef.current
    const buildingMeshes: Record<AirportSize, THREE.InstancedMesh | null> = {
      large: largeRef.current,
      medium: mediumRef.current,
      small: smallRef.current,
    }
    const pickMeshes: Record<AirportSize, THREE.InstancedMesh | null> = {
      large: pickLargeRef.current,
      medium: pickMediumRef.current,
      small: pickSmallRef.current,
    }
    if (
      !pinMesh ||
      !buildingMeshes.large ||
      !buildingMeshes.medium ||
      !buildingMeshes.small ||
      !pickMeshes.large ||
      !pickMeshes.medium ||
      !pickMeshes.small
    ) {
      return
    }

    const cameraPos = state.camera.position
    _camDir.copy(cameraPos)
    const camDist = _camDir.length() || 1
    _camDir.normalize()
    const mapBlend = getMapBlend()
    const map = getMapFrame()
    const mapMode = mapBlend > 0.2
    const frontThreshold = GLOBE_RADIUS / camDist - 0.02
    const zoom = mapMode
      ? 1
      : THREE.MathUtils.clamp((4.4 - camDist) / 2.6, 0.58, 1.35)
    const buildingZoom = mapMode
      ? 1
      : THREE.MathUtils.clamp((3.8 - camDist) / 2.4, 0.88, 1.18)
    const mapHeight = map
      ? Math.max(0, cameraPos.dot(map.origin) - GLOBE_RADIUS)
      : Math.max(0, camDist - GLOBE_RADIUS)
    const showBuildings = airportShouldShowBuilding(mapMode ? mapHeight : camDist)
    const featureScale = mapFeatureScale()
    const viewScale =
      (mapMode ? Math.max(0.85, featureScale) : featureScale) *
      (mapMode ? MAP_AIRPORT_SCALE : GLOBE_AIRPORT_SCALE)

    for (let i = 0; i < layout.length; i++) {
      const entry = layout[i]!
      const { airport, pos, yaw, buildingIndex } = entry
      const buildingMesh = buildingMeshes[airport.size]!
      projectPosition(airport.lat, airport.lon, SURFACE_RADIUS, pos)
      seatOnLand(pos, map)
      const isActive = airport.iata === searchAirportIata
      const isHovered = airport.iata === hoveredRef.current
      const airportMode = displayRef.current.airports
      const shownByDisplay =
        airportMode === 'all' ||
        (airportMode === 'large' && (airport.size === 'large' || isActive))
      const hide =
        !shownByDisplay ||
        (inSelectedCountry != null &&
          !inSelectedCountry.has(airport.iata) &&
          !isActive) ||
        (inSelectedCountry == null &&
          mapMode &&
          !isActive &&
          !isHovered &&
          !inMapFrame(airport.lat, airport.lon, 1.5)) ||
        (!mapMode &&
          inSelectedCountry == null &&
          pos.dot(_camDir) / (pos.length() || 1) < frontThreshold &&
          !isActive &&
          !isHovered)

      if (hide) {
        writeHidden(pinMesh, i, pos)
        writeHidden(buildingMesh, buildingIndex, pos)
        writeHidden(pickMeshes[airport.size]!, buildingIndex, pos)
        continue
      }

      if (followFlight && !mapMode) {
        writeHidden(pinMesh, i, pos)
        writeHidden(buildingMesh, buildingIndex, pos)
        writeHidden(pickMeshes[airport.size]!, buildingIndex, pos)
        continue
      }
      const showBuilding = showBuildings

      if (mapMode && map) _up.copy(map.origin)
      else _up.copy(pos).normalize()

      if (isActive) _color.copy(COLOR_ACTIVE)
      else if (isHovered) _color.copy(COLOR_HOVER)
      else if (mapMode) _color.copy(COLOR_MAP)
      else _color.copy(COLOR_IDLE)

      if (showBuilding) {
        writeHidden(pinMesh, i, pos)
        _dummy.position.copy(pos)
        _dummy.quaternion.setFromUnitVectors(_yAxis, _up)
        _dummy.rotateY(yaw)
        const scale =
          BUILDING_SCALE[airport.size] *
          buildingZoom *
          viewScale *
          (isActive ? 1.45 : isHovered ? 1.22 : 1)
        _dummy.scale.set(scale, scale, scale)
        _dummy.updateMatrix()
        buildingMesh.setMatrixAt(buildingIndex, _dummy.matrix)
        buildingMesh.setColorAt(buildingIndex, _color)
        // Hover stays on the pad. The tower stretch would put the target in the air.
        _dummy.scale.set(scale, scale * 0.55, scale)
        _dummy.updateMatrix()
        pickMeshes[airport.size]!.setMatrixAt(buildingIndex, _dummy.matrix)
      } else {
        writeHidden(buildingMesh, buildingIndex, pos)
        writeHidden(pickMeshes[airport.size]!, buildingIndex, pos)
        _dummy.position.copy(pos)
        _dummy.quaternion.setFromUnitVectors(_yAxis, _up)
        const scale =
          SIZE_SCALE[airport.size] *
          zoom *
          viewScale *
          (isActive ? 1.9 : isHovered ? 1.5 : 1)
        _dummy.scale.setScalar(scale)
        _dummy.updateMatrix()
        pinMesh.setMatrixAt(i, _dummy.matrix)
        pinMesh.setColorAt(i, _color)
      }
    }

    pinMesh.instanceMatrix.needsUpdate = true
    if (pinMesh.instanceColor) pinMesh.instanceColor.needsUpdate = true
    const instanceRaycast = THREE.InstancedMesh.prototype.raycast
    const noopRaycast = () => {}
    pinMesh.raycast = showBuildings ? noopRaycast : instanceRaycast
    for (const size of SIZES) {
      const mesh = buildingMeshes[size]!
      const pick = pickMeshes[size]!
      mesh.instanceMatrix.needsUpdate = true
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
      mesh.raycast = noopRaycast
      pick.instanceMatrix.needsUpdate = true
      pick.raycast = showBuildings ? instanceRaycast : noopRaycast
    }

    const namesOn =
      displayRef.current.airportLabels && displayRef.current.airports !== 'off'
    const rawHover = namesOn && showBuildings ? hoveredRef.current : null
    const candidate =
      rawHover && rawHover !== searchAirportIata ? rawHover : null
    const now = performance.now()
    const tracked = hoverCandidate.current
    if (!showBuildings) {
      tracked.iata = null
      tracked.missingSince = 0
    } else if (candidate != null) {
      if (candidate !== tracked.iata) {
        tracked.iata = candidate
        tracked.since = now
      }
      tracked.missingSince = 0
    } else if (tracked.iata != null) {
      if (!tracked.missingSince) tracked.missingSince = now
      if (now - tracked.missingSince >= HOVER_LABEL_GAP_MS) {
        tracked.iata = null
        tracked.missingSince = 0
      }
    }
    const ready =
      tracked.iata != null && now - tracked.since >= HOVER_LABEL_DELAY_MS
        ? tracked.iata
        : null
    if (ready !== hoverLabelRef.current) {
      hoverLabelRef.current = ready
      setHoverLabelIata(ready)
    }
  })

  const layoutFromHit = (
    hit: {
      instanceId?: number
      object?: THREE.Object3D
      eventObject?: THREE.Object3D
    },
  ): PinLayout | null => {
    const id = hit.instanceId
    const list = (hit.object?.userData?.airports ??
      hit.eventObject?.userData?.airports) as PinLayout[] | undefined
    if (id == null || id < 0 || !list || id >= list.length) return null
    return list[id] ?? null
  }

  const pickClosest = (e: ThreeEvent<PointerEvent | MouseEvent>): PinLayout | null => {
    const ray = e.ray
    const hits = e.intersections?.length ? e.intersections : [e]
    let best: PinLayout | null = null
    let bestD = Infinity
    for (const hit of hits) {
      const entry = layoutFromHit(hit)
      if (!entry) continue
      const d = ray.distanceToPoint(entry.pos)
      if (d < bestD) {
        bestD = d
        best = entry
      }
    }
    return best
  }

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    drag.current = { x: e.clientX, y: e.clientY }
  }

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    // A plane under the cursor wins, even when the airport disc is closer.
    if (e.intersections?.some((hit) => hit.object?.userData?.flightPick)) {
      if (hoveredRef.current) {
        hoverEpoch.current += 1
        hoveredRef.current = null
      }
      return
    }
    const hit = pickClosest(e)
    if (!hit) return
    hoverEpoch.current += 1
    hoveredRef.current = hit.airport.iata
    e.stopPropagation()
  }

  const onPointerOut = (e: ThreeEvent<PointerEvent>) => {
    const leaving = layoutFromHit(e)?.airport.iata ?? null
    const epoch = hoverEpoch.current
    // Pointer-out on the previous instance can land in the same turn as
    // pointer-move onto the next one. Clear only if nothing else took over.
    queueMicrotask(() => {
      if (hoverEpoch.current !== epoch) return
      if (leaving == null || hoveredRef.current === leaving) hoveredRef.current = null
    })
  }

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.intersections?.some((hit) => hit.object?.userData?.flightPick)) return
    const dx = e.clientX - drag.current.x
    const dy = e.clientY - drag.current.y
    if (dx * dx + dy * dy > 25) return
    const hit = pickClosest(e)
    if (!hit) return
    e.stopPropagation()
    const { airport } = hit
    setSelectedFlight(null)
    if (searchAirportIata === airport.iata) {
      setSearchAirportIata(null)
    } else {
      setSearchAirportIata(airport.iata)
      if (!selectedCountry) {
        focusCamera(airport.lat, airport.lon, 1.48)
      }
    }
  }

  const pointerProps = {
    onPointerDown,
    onPointerMove,
    onPointerOut,
    onClick,
  }

  return (
    <group renderOrder={10}>
      <instancedMesh
        ref={pinRef}
        args={[pinGeometry, undefined, layout.length]}
        frustumCulled={false}
        renderOrder={20}
        userData={{ airports: layout }}
        {...pointerProps}
      >
        <meshBasicMaterial
          transparent
          opacity={1}
          toneMapped={false}
          depthTest
          depthWrite={false}
        />
      </instancedMesh>
      <instancedMesh
        ref={largeRef}
        args={[buildingGeometry.large, undefined, bySize.large.length]}
        frustumCulled={false}
        renderOrder={18}
        userData={{ airports: bySize.large }}
      >
        <meshBasicMaterial
          vertexColors
          toneMapped={false}
          depthTest
          depthWrite
          polygonOffset
          polygonOffsetFactor={-8}
          polygonOffsetUnits={-8}
        />
      </instancedMesh>
      <instancedMesh
        ref={mediumRef}
        args={[buildingGeometry.medium, undefined, bySize.medium.length]}
        frustumCulled={false}
        renderOrder={18}
        userData={{ airports: bySize.medium }}
      >
        <meshBasicMaterial
          vertexColors
          toneMapped={false}
          depthTest
          depthWrite
          polygonOffset
          polygonOffsetFactor={-8}
          polygonOffsetUnits={-8}
        />
      </instancedMesh>
      <instancedMesh
        ref={smallRef}
        args={[buildingGeometry.small, undefined, bySize.small.length]}
        frustumCulled={false}
        renderOrder={18}
        userData={{ airports: bySize.small }}
      >
        <meshBasicMaterial
          vertexColors
          toneMapped={false}
          depthTest
          depthWrite
          polygonOffset
          polygonOffsetFactor={-8}
          polygonOffsetUnits={-8}
        />
      </instancedMesh>
      <instancedMesh
        ref={pickLargeRef}
        args={[pickGeometry, undefined, bySize.large.length]}
        frustumCulled={false}
        renderOrder={19}
        userData={{ airports: bySize.large }}
        {...pointerProps}
      >
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </instancedMesh>
      <instancedMesh
        ref={pickMediumRef}
        args={[pickGeometry, undefined, bySize.medium.length]}
        frustumCulled={false}
        renderOrder={19}
        userData={{ airports: bySize.medium }}
        {...pointerProps}
      >
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </instancedMesh>
      <instancedMesh
        ref={pickSmallRef}
        args={[pickGeometry, undefined, bySize.small.length]}
        frustumCulled={false}
        renderOrder={19}
        userData={{ airports: bySize.small }}
        {...pointerProps}
      >
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </instancedMesh>
      {display.airportLabels &&
        display.airports !== 'off' &&
        hoverEntry && <AirportPinLabel entry={hoverEntry} />}
    </group>
  )
}
