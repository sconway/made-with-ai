import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import type { ThreeEvent } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import {
  GLOBE_RADIUS,
  pointInBBox,
  pointInPolygons,
  polygonsToFillGeometry,
  polygonsToLineSegments,
  vector3ToLatLon,
  type BBox,
} from '../lib/geo'
import {
  applyMapGroupTransform,
  frameFromCountry,
  getMapBlend,
  getMapEase,
  getMapFrame,
  MAP_LAND_Z,
  polygonsToMapFillGeometry,
  polygonsToMapLineSegments,
  type MapFrame,
} from '../lib/mapView'
import type { Country } from '../lib/countries'

const BORDER_RADIUS = GLOBE_RADIUS + 0.001
/** Sit clearly above the earth facets; fill mesh is also sphere-subdivided. */
const HIGHLIGHT_RADIUS = GLOBE_RADIUS + 0.004
/** Earcut → sphere subdivision passes so fill chords don't sink under the globe. */
const HIGHLIGHT_SUBDIVISIONS = 2
/** Ignore country clicks if the pointer moved more than this (px) — a drag, not a tap. */
const DRAG_CLICK_THRESHOLD_PX = 5

/** Merged outlines for every country (single draw call). */
function BaseBorders({
  countries,
  show,
}: {
  countries: Country[]
  show: boolean
}) {
  const matRef = useRef<THREE.LineBasicMaterial>(null)
  const mapView = useStore((s) => Boolean(s.selectedCountry || s.flatMap))
  const geometry = useMemo(() => {
    const all: number[] = []
    for (const c of countries) {
      const seg = polygonsToLineSegments(c.polys, BORDER_RADIUS)
      for (let i = 0; i < seg.length; i++) all.push(seg[i])
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(all, 3))
    return g
  }, [countries])

  useFrame(() => {
    const fade = mapView ? 0 : 1 - getMapEase()
    if (matRef.current) {
      matRef.current.opacity = 0.55 * fade
      matRef.current.visible = show && fade > 0.25
    }
  })

  return (
    <lineSegments geometry={geometry} renderOrder={2}>
      <lineBasicMaterial
        ref={matRef}
        color={0x2f5b8f}
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </lineSegments>
  )
}

/** Filled + outlined highlight for one country. */
function CountryHighlight({
  country,
  color,
  opacity,
}: {
  country: Country
  color: number
  opacity: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const mapView = useStore((s) => Boolean(s.selectedCountry || s.flatMap))
  const fill = useMemo(
    () =>
      polygonsToFillGeometry(
        country.polys,
        HIGHLIGHT_RADIUS,
        HIGHLIGHT_SUBDIVISIONS,
      ),
    [country],
  )
  const outline = useMemo(() => {
    const seg = polygonsToLineSegments(country.polys, HIGHLIGHT_RADIUS + 0.001)
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3))
    return g
  }, [country])

  useFrame(() => {
    if (groupRef.current) groupRef.current.visible = !mapView && getMapEase() < 0.92
  })

  return (
    <group ref={groupRef}>
      <mesh geometry={fill} renderOrder={3}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={opacity}
          side={THREE.FrontSide}
          depthWrite={false}
          depthTest
          polygonOffset
          polygonOffsetFactor={-2}
          polygonOffsetUnits={-2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <lineSegments geometry={outline} renderOrder={4}>
        <lineBasicMaterial
          color={color}
          transparent
          opacity={0.9}
          depthWrite={false}
          depthTest
          polygonOffset
          polygonOffsetFactor={-2}
          polygonOffsetUnits={-2}
        />
      </lineSegments>
    </group>
  )
}

function bboxOverlapsFrame(b: BBox, frame: MapFrame, pad = 2): boolean {
  return !(
    b.maxLat < frame.minLat - pad ||
    b.minLat > frame.maxLat + pad ||
    b.maxLon < frame.minLon - pad ||
    b.minLon > frame.maxLon + pad
  )
}

function CountryMap({
  countries,
  selected,
  frame,
}: {
  countries: Country[]
  selected: Country | null
  frame: MapFrame
}) {
  const groupRef = useRef<THREE.Group>(null)

  const fill = useMemo(() => {
    const polys = selected
      ? selected.polys
      : countries
          .filter((c) => bboxOverlapsFrame(c.bbox, frame))
          .flatMap((c) => c.polys)
    return polygonsToMapFillGeometry(polys, frame)
  }, [countries, selected, frame])

  const outline = useMemo(() => {
    const polys = selected
      ? selected.polys
      : countries
          .filter((c) => bboxOverlapsFrame(c.bbox, frame))
          .flatMap((c) => c.polys)
    const seg = polygonsToMapLineSegments(polys, frame)
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3))
    return g
  }, [countries, selected, frame])

  const neighbors = useMemo(() => {
    const all: number[] = []
    for (const c of countries) {
      if (selected && c.id === selected.id) continue
      if (!selected && !bboxOverlapsFrame(c.bbox, frame, 8)) continue
      const seg = polygonsToMapLineSegments(c.polys, frame)
      for (let i = 0; i < seg.length; i++) all.push(seg[i]!)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(all, 3))
    return g
  }, [countries, selected, frame])

  useFrame(() => {
    const b = getMapBlend()
    const ease = getMapEase()
    if (groupRef.current) {
      applyMapGroupTransform(groupRef.current, frame)
      groupRef.current.visible = b > 0.02
      const fade = THREE.MathUtils.smoothstep(ease, 0.12, 0.78)
      groupRef.current.traverse((obj) => {
        const mat = (obj as THREE.Mesh).material
        if (mat && !Array.isArray(mat) && 'opacity' in mat) {
          const base = obj.userData.mapOpacity as number | undefined
          if (base != null) (mat as THREE.Material & { opacity: number }).opacity = base * fade
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      <lineSegments
        geometry={neighbors}
        renderOrder={1}
        userData={{ mapOpacity: 0.35 }}
        raycast={() => {}}
      >
        <lineBasicMaterial
          color={0x3d6a9a}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </lineSegments>
      <mesh
        geometry={fill}
        position={[0, 0, MAP_LAND_Z]}
        renderOrder={1}
        userData={{ mapOpacity: selected ? 0.88 : 0.72 }}
        raycast={() => {}}
      >
        <meshBasicMaterial
          color={selected ? 0x2d6cad : 0x1e4a72}
          transparent
          opacity={selected ? 0.88 : 0.72}
          depthWrite={false}
          depthTest
          side={THREE.FrontSide}
        />
      </mesh>
      <lineSegments
        geometry={outline}
        position={[0, 0, -0.002]}
        renderOrder={1}
        userData={{ mapOpacity: 0.95 }}
        raycast={() => {}}
      >
        <lineBasicMaterial
          color={selected ? 0xffcf6b : 0x7eb6ff}
          transparent
          opacity={0.95}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

export function Countries() {
  const countries = useStore((s) => s.countries)
  const hovered = useStore((s) => s.hoveredCountry)
  const selected = useStore((s) => s.selectedCountry)
  const flatMap = useStore((s) => s.flatMap)
  const followFlight = useStore((s) => s.followFlight)
  const showBorders = useStore((s) => s.display.borders)
  const mapEpoch = useStore((s) => s.mapEpoch)
  const setHovered = useStore((s) => s.setHoveredCountry)
  const setSelected = useStore((s) => s.setSelectedCountry)
  const lastLookup = useRef<Country | null>(null)
  const drag = useRef({ x: 0, y: 0, moved: false })
  const pickSphere = useRef<THREE.Mesh>(null)
  const mapFrame = selected
    ? frameFromCountry(selected)
    : flatMap
      ? getMapFrame()
      : null
  void mapEpoch

  const findCountry = (point: THREE.Vector3): Country | null => {
    const { lat, lon } = vector3ToLatLon(point)
    for (const c of countries) {
      if (!pointInBBox(lon, lat, c.bbox)) continue
      if (pointInPolygons(lon, lat, c.polys)) return c
    }
    return null
  }

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    drag.current = { x: e.clientX, y: e.clientY, moved: false }
  }

  const onMove = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    if (e.buttons !== 0) {
      const dx = e.clientX - drag.current.x
      const dy = e.clientY - drag.current.y
      if (dx * dx + dy * dy > DRAG_CLICK_THRESHOLD_PX * DRAG_CLICK_THRESHOLD_PX) {
        drag.current.moved = true
      }
    }
    if (getMapBlend() > 0.45) return
    const c = findCountry(e.point)
    if (c !== lastLookup.current) {
      lastLookup.current = c
      setHovered(c)
      document.body.style.cursor = c ? 'pointer' : 'default'
    }
  }

  const onLeave = () => {
    lastLookup.current = null
    setHovered(null)
    document.body.style.cursor = 'default'
  }

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (drag.current.moved) return
    e.stopPropagation()
    if (selected || getMapBlend() > 0.45) return
    const c = findCountry(e.point)
    if (c) setSelected(c)
  }

  useFrame(() => {
    if (pickSphere.current) pickSphere.current.visible = getMapBlend() < 0.5
  })

  if (countries.length === 0) return null

  return (
    <group visible={!followFlight}>
      <BaseBorders countries={countries} show={showBorders} />

      <mesh
        ref={pickSphere}
        onPointerDown={onPointerDown}
        onPointerMove={onMove}
        onPointerOut={onLeave}
        onClick={onClick}
      >
        <sphereGeometry args={[GLOBE_RADIUS + 0.0005, 96, 96]} />
        <meshBasicMaterial
          transparent
          opacity={0}
          colorWrite={false}
          depthWrite={false}
        />
      </mesh>

      {hovered && hovered !== selected && (
        <CountryHighlight country={hovered} color={0x4ea8ff} opacity={0.22} />
      )}
      {selected && (
        <CountryHighlight country={selected} color={0xffcf6b} opacity={0.3} />
      )}
      {mapFrame && (
        <CountryMap
          countries={countries}
          selected={selected}
          frame={mapFrame}
        />
      )}
    </group>
  )
}
