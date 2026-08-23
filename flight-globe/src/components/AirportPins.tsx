import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useStore } from '../store/useStore'
import { AIRPORTS } from '../lib/airports'
import { GLOBE_RADIUS, latLonToVector3 } from '../lib/geo'

const PIN_RADIUS = GLOBE_RADIUS + 0.006
const COLOR_IDLE = new THREE.Color('#9ec5ff')
const COLOR_ACTIVE = new THREE.Color('#ffcf6b')
const COLOR_HOVER = new THREE.Color('#ffffff')

const _dummy = new THREE.Object3D()
const _up = new THREE.Vector3()
const _camDir = new THREE.Vector3()
const _color = new THREE.Color()
const _yAxis = new THREE.Vector3(0, 1, 0)

/**
 * Major hub markers on the globe. Click filters to flights near the field
 * plus those whose known route originates/terminates there (same as search).
 */
export function AirportPins() {
  const searchAirportIata = useStore((s) => s.searchAirportIata)
  const setSearchAirportIata = useStore((s) => s.setSearchAirportIata)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const setSelectedCountry = useStore((s) => s.setSelectedCountry)
  const focusCamera = useStore((s) => s.focusCamera)

  const meshRef = useRef<THREE.InstancedMesh>(null)
  const hoveredRef = useRef<string | null>(null)
  const labelKeyRef = useRef<string | null>(null)
  const drag = useRef({ x: 0, y: 0 })
  const [labelIata, setLabelIata] = useState<string | null>(null)

  const layout = useMemo(
    () =>
      AIRPORTS.map((airport) => ({
        airport,
        pos: latLonToVector3(airport.lat, airport.lon, PIN_RADIUS),
      })),
    [],
  )

  const geometry = useMemo(() => {
    const g = new THREE.ConeGeometry(0.008, 0.022, 4)
    g.translate(0, 0.011, 0)
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
    const frontThreshold = GLOBE_RADIUS / camDist - 0.02

    let nextLabel: string | null = null

    for (let i = 0; i < layout.length; i++) {
      const { airport, pos } = layout[i]!
      const facing = pos.dot(_camDir) / pos.length()
      const isActive = airport.iata === searchAirportIata
      const isHovered = airport.iata === hoveredRef.current

      if (facing < frontThreshold && !isActive && !isHovered) {
        _dummy.position.copy(pos)
        _dummy.quaternion.identity()
        _dummy.scale.setScalar(0)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        continue
      }

      _up.copy(pos).normalize()
      _dummy.position.copy(pos)
      _dummy.quaternion.setFromUnitVectors(_yAxis, _up)
      _dummy.scale.setScalar(isActive ? 1.85 : isHovered ? 1.45 : 1)
      _dummy.updateMatrix()
      mesh.setMatrixAt(i, _dummy.matrix)

      if (isActive) _color.copy(COLOR_ACTIVE)
      else if (isHovered) _color.copy(COLOR_HOVER)
      else _color.copy(COLOR_IDLE)
      mesh.setColorAt(i, _color)

      if (isHovered || isActive) nextLabel = airport.iata
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true

    if (nextLabel !== labelKeyRef.current) {
      labelKeyRef.current = nextLabel
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
    e.stopPropagation()
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
    setSelectedCountry(null)
    setSelectedFlight(null)
    if (searchAirportIata === airport.iata) {
      setSearchAirportIata(null)
    } else {
      setSearchAirportIata(airport.iata)
      focusCamera(airport.lat, airport.lon, 1.75)
    }
  }

  return (
    <group>
      <instancedMesh
        ref={meshRef}
        args={[geometry, undefined, layout.length]}
        frustumCulled={false}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerOut={onPointerOut}
        onClick={onClick}
      >
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
      {labelEntry && (
        <Html
          position={labelEntry.pos}
          center
          style={{ pointerEvents: 'none' }}
          zIndexRange={[100, 0]}
        >
          <div className="airport-pin-label">
            <strong>{labelEntry.airport.iata}</strong>
            <span>{labelEntry.airport.city}</span>
          </div>
        </Html>
      )}
    </group>
  )
}
