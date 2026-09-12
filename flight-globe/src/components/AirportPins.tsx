import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useStore } from '../store/useStore'
import { AIRPORTS, type AirportSize } from '../lib/airports'
import { airportIatasInCountry } from '../lib/countryFlights'
import { GLOBE_RADIUS } from '../lib/geo'
import {
  getMapBlend,
  getMapFrame,
  inMapFrame,
  mapFeatureScale,
  projectPosition,
} from '../lib/mapView'

const PIN_RADIUS = GLOBE_RADIUS + 0.006
const COLOR_IDLE = new THREE.Color('#6ec8ff')
const COLOR_MAP = new THREE.Color('#3fd4ff')
const COLOR_ACTIVE = new THREE.Color('#ffcf6b')
const COLOR_HOVER = new THREE.Color('#ffffff')

const SIZE_SCALE: Record<AirportSize, number> = {
  large: 1.15,
  medium: 0.72,
  small: 0.48,
}

const _dummy = new THREE.Object3D()
const _up = new THREE.Vector3()
const _camDir = new THREE.Vector3()
const _color = new THREE.Color()
const _yAxis = new THREE.Vector3(0, 1, 0)

/**
 * Worldwide airport pins. Same cone glyph on the globe and the country map —
 * cyan on the map, gold planes stay the heading chevrons.
 */
export function AirportPins() {
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const focusCamera = useStore((s) => s.focusCamera)

  const meshRef = useRef<THREE.InstancedMesh>(null)
  const hoveredRef = useRef<string | null>(null)
  const labelKeyRef = useRef<string>('')
  const drag = useRef({ x: 0, y: 0 })
  const [labelIata, setLabelIata] = useState<string | null>(null)

  const inSelectedCountry = useMemo(
    () => (selectedCountry ? airportIatasInCountry(selectedCountry) : null),
    [selectedCountry],
  )

  const layout = useMemo(
    () =>
      AIRPORTS.map((airport) => ({
        airport,
        pos: new THREE.Vector3(),
      })),
    [],
  )

  const geometry = useMemo(() => {
    const g = new THREE.ConeGeometry(0.0055, 0.015, 4)
    g.translate(0, 0.0075, 0)
    return g
  }, [])

  const labelEntry = useMemo(() => {
    if (!labelIata) return null
    return layout.find((l) => l.airport.iata === labelIata) ?? null
  }, [labelIata, layout])

  useFrame((state) => {
    const mesh = meshRef.current
    if (!mesh) return

    _camDir.copy(state.camera.position)
    const camDist = _camDir.length() || 1
    _camDir.normalize()
    const mapBlend = getMapBlend()
    const map = getMapFrame()
    const mapMode = mapBlend > 0.2
    const frontThreshold = GLOBE_RADIUS / camDist - 0.02
    const zoom = mapMode
      ? 1
      : THREE.MathUtils.clamp((4.4 - camDist) / 2.6, 0.58, 1.35)
    const featureScale = mapFeatureScale()

    for (let i = 0; i < layout.length; i++) {
      const { airport, pos } = layout[i]!
      projectPosition(airport.lat, airport.lon, PIN_RADIUS, pos)
      const isActive = airport.iata === searchAirportIata
      const isHovered = airport.iata === hoveredRef.current
      const hide =
        (inSelectedCountry != null &&
          !inSelectedCountry.has(airport.iata) &&
          !isActive) ||
        (mapMode &&
          !isActive &&
          !isHovered &&
          !inMapFrame(airport.lat, airport.lon, 1.5)) ||
        (!mapMode &&
          pos.dot(_camDir) / (pos.length() || 1) < frontThreshold &&
          !isActive &&
          !isHovered)

      if (hide) {
        _dummy.position.copy(pos)
        _dummy.quaternion.identity()
        _dummy.scale.setScalar(0)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        continue
      }

      if (mapMode && map) {
        _dummy.position.copy(pos)
        _dummy.quaternion.setFromUnitVectors(_yAxis, map.origin)
      } else {
        _up.copy(pos).normalize()
        _dummy.position.copy(pos)
        _dummy.quaternion.setFromUnitVectors(_yAxis, _up)
      }

      const scale =
        SIZE_SCALE[airport.size] *
        zoom *
        featureScale *
        (isActive ? 1.9 : isHovered ? 1.5 : 1)
      _dummy.scale.setScalar(scale)
      _dummy.updateMatrix()
      mesh.setMatrixAt(i, _dummy.matrix)

      if (isActive) _color.copy(COLOR_ACTIVE)
      else if (isHovered) _color.copy(COLOR_HOVER)
      else if (mapMode) _color.copy(COLOR_MAP)
      else _color.copy(COLOR_IDLE)
      mesh.setColorAt(i, _color)
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true

    const nextLabel = searchAirportIata ?? hoveredRef.current
    const key = nextLabel ?? ''
    if (key !== labelKeyRef.current) {
      labelKeyRef.current = key
      setLabelIata(nextLabel)
    }
  })

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    drag.current = { x: e.clientX, y: e.clientY }
  }

  const onPointerMove = (e: ThreeEvent<PointerEvent>) => {
    const id = e.instanceId
    if (id == null || id < 0 || id >= layout.length) {
      hoveredRef.current = null
      return
    }
    hoveredRef.current = layout[id]!.airport.iata
  }

  const onPointerOut = () => {
    hoveredRef.current = null
  }

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    const dx = e.clientX - drag.current.x
    const dy = e.clientY - drag.current.y
    if (dx * dx + dy * dy > 25) return
    const id = e.instanceId
    if (id == null || id < 0 || id >= layout.length) return
    e.stopPropagation()
    const { airport } = layout[id]!
    setSelectedFlight(null)
    if (searchAirportIata === airport.iata) {
      setSearchAirportIata(null)
    } else {
      setSearchAirportIata(airport.iata)
      if (!selectedCountry) {
        focusCamera(airport.lat, airport.lon, 1.75)
      }
    }
  }

  return (
    <group>
      <instancedMesh
        ref={meshRef}
        args={[geometry, undefined, layout.length]}
        frustumCulled={false}
        renderOrder={20}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerOut={onPointerOut}
        onClick={onClick}
      >
        <meshBasicMaterial
          transparent
          opacity={1}
          toneMapped={false}
          depthTest={false}
          depthWrite={false}
        />
      </instancedMesh>
      {labelEntry && (
        <group position={labelEntry.pos}>
          <Html
            center
            style={{ pointerEvents: 'none' }}
            zIndexRange={[20, 0]}
          >
            <div
              className={`airport-pin-label${
                labelEntry.airport.iata === searchAirportIata
                  ? ''
                  : ' airport-pin-label-map'
              }`}
            >
              <strong>{labelEntry.airport.iata}</strong>
              <span>{labelEntry.airport.city}</span>
            </div>
          </Html>
        </group>
      )}
    </group>
  )
}
