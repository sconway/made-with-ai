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
} from '../lib/geo'
import {
  applyMapGroupTransform,
  frameFromCountry,
  getMapBlend,
  getMapEase,
  polygonsToMapFillGeometry,
  polygonsToMapLineSegments,
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
function BaseBorders({ countries }: { countries: Country[] }) {
  const matRef = useRef<THREE.LineBasicMaterial>(null)
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
    const fade = 1 - getMapEase()
    if (matRef.current) {
      matRef.current.opacity = 0.55 * fade
      matRef.current.visible = fade > 0.04
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
    if (groupRef.current) groupRef.current.visible = getMapEase() < 0.92
  })

  return (
    <group ref={groupRef} renderOrder={3}>
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

function CountryMap({
  countries,
  selected,
}: {
  countries: Country[]
  selected: Country
}) {
  const groupRef = useRef<THREE.Group>(null)
  const frame = useMemo(() => frameFromCountry(selected), [selected])

  const ocean = useMemo(() => {
    const w =
      (frame.maxLon - frame.minLon) *
      Math.cos((frame.lat0 * Math.PI) / 180) *
      (Math.PI / 180)
    const h = (frame.maxLat - frame.minLat) * (Math.PI / 180)
    const g = new THREE.PlaneGeometry(w * 1.15, h * 1.15)
    return g
  }, [frame])

  const fill = useMemo(
    () => polygonsToMapFillGeometry(selected.polys, frame),
    [selected, frame],
  )
  const outline = useMemo(() => {
    const seg = polygonsToMapLineSegments(selected.polys, frame)
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3))
    return g
  }, [selected, frame])

  const neighbors = useMemo(() => {
    const all: number[] = []
    for (const c of countries) {
      if (c.id === selected.id) continue
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
    <group ref={groupRef} renderOrder={1}>
      <mesh
        geometry={ocean}
        position={[0, 0, -0.002]}
        userData={{ mapOpacity: 1 }}
        raycast={() => {}}
      >
        <meshBasicMaterial
          color={0x0c1a2e}
          transparent
          opacity={1}
          depthWrite={false}
        />
      </mesh>
      <lineSegments geometry={neighbors} renderOrder={2} userData={{ mapOpacity: 0.35 }} raycast={() => {}}>
        <lineBasicMaterial
          color={0x3d6a9a}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </lineSegments>
      <mesh geometry={fill} renderOrder={3} userData={{ mapOpacity: 0.55 }} raycast={() => {}}>
        <meshBasicMaterial
          color={0x2d6cad}
          transparent
          opacity={0.55}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <lineSegments geometry={outline} renderOrder={4} userData={{ mapOpacity: 0.95 }} raycast={() => {}}>
        <lineBasicMaterial
          color={0xffcf6b}
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
  const setHovered = useStore((s) => s.setHoveredCountry)
  const setSelected = useStore((s) => s.setSelectedCountry)
  const lastLookup = useRef<Country | null>(null)
  const drag = useRef({ x: 0, y: 0, moved: false })
  const pickSphere = useRef<THREE.Mesh>(null)

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
    <group>
      <BaseBorders countries={countries} />

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
      {selected && (
        <CountryMap countries={countries} selected={selected} />
      )}
    </group>
  )
}
