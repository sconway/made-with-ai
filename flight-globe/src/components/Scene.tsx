import { Suspense, useMemo, useRef } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Earth } from './Earth'
import { Atmosphere } from './Atmosphere'
import { Countries } from './Countries'
import { Flights } from './Flights'
import { FlightLabels } from './FlightLabels'
import { WeatherLayer } from './WeatherLayer'
import { Arcs } from './Arcs'
import { Trails } from './Trails'
import { AirportPins } from './AirportPins'
import { CameraRig } from './CameraRig'
import { sunDirection } from '../lib/sun'
import { GLOBE_RADIUS } from '../lib/geo'
import { getMapEase } from '../lib/mapView'
import { useStore } from '../store/useStore'

/** Plain dark sphere shown while the earth textures load. */
function EarthFallback() {
  const meshRef = useRef<THREE.Mesh>(null)
  const mapView = useStore((s) => Boolean(s.selectedCountry || s.flatMap))
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.visible = !mapView && 1 - getMapEase() > 0.25
    }
  })
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
      <meshBasicMaterial color="#0a1526" />
    </mesh>
  )
}

function StarsLayer() {
  const group = useRef<THREE.Group>(null)
  useFrame(() => {
    if (group.current) group.current.visible = 1 - getMapEase() > 0.12
  })
  return (
    <group ref={group}>
      <Stars radius={80} depth={40} count={6000} factor={4} fade speed={0.5} />
    </group>
  )
}

export function Scene() {
  const sun = useMemo(() => sunDirection(), [])

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={sun.clone().multiplyScalar(5) as THREE.Vector3}
        intensity={1.4}
      />

      <StarsLayer />

      {/* Only the texture-dependent earth suspends; everything else keeps the
          render loop alive so the scene never blanks out. */}
      <Suspense fallback={<EarthFallback />}>
        <Earth sunDirection={sun} />
      </Suspense>
      <Atmosphere />
      <WeatherLayer />
      <Countries />
      <AirportPins />
      <Trails />
      <Arcs />
      <Flights />
      <FlightLabels />

      <OrbitControls
        makeDefault
        enablePan={false}
        autoRotate={false}
        minDistance={1.25}
        maxDistance={6}
        rotateSpeed={0.5}
        zoomSpeed={0.7}
      />
      <CameraRig />
    </>
  )
}
