import { Suspense, useMemo } from 'react'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { Earth } from './Earth'
import { Atmosphere } from './Atmosphere'
import { Countries } from './Countries'
import { Flights } from './Flights'
import { Arcs } from './Arcs'
import { CameraRig } from './CameraRig'
import { ViewportTracker } from './ViewportTracker'
import { sunDirection } from '../lib/sun'
import { GLOBE_RADIUS } from '../lib/geo'

/** Plain dark sphere shown while the earth textures load. */
function EarthFallback() {
  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
      <meshBasicMaterial color="#0a1526" />
    </mesh>
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

      <Stars radius={80} depth={40} count={6000} factor={4} fade speed={0.5} />

      {/* Only the texture-dependent earth suspends; everything else keeps the
          render loop alive so the scene never blanks out. */}
      <Suspense fallback={<EarthFallback />}>
        <Earth sunDirection={sun} />
      </Suspense>
      <Atmosphere />
      <Countries />
      <Arcs />
      <Flights />

      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={1.25}
        maxDistance={6}
        rotateSpeed={0.5}
        zoomSpeed={0.7}
        enableDamping
        dampingFactor={0.08}
      />
      <CameraRig />
      <ViewportTracker />
    </>
  )
}
