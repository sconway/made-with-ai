import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GLOBE_RADIUS } from '../lib/geo'
import { getMapEase } from '../lib/mapView'
import { useStore } from '../store/useStore'

const ATMOS_SCALE = 1.16
/** Hide the rim shell once the camera is inside it (chase cam). */
const ATMOS_INNER = GLOBE_RADIUS * ATMOS_SCALE * 0.98

// A back-side sphere slightly larger than the globe with a fresnel falloff,
// additively blended, to produce the signature glowing atmosphere rim.
const vertexShader = /* glsl */ `
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldNormal = normalize(worldPos.xyz);
    vViewDir = normalize(cameraPosition - worldPos.xyz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform vec3 glowColor;
  uniform float globeFade;
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  void main() {
    float intensity = pow(1.0 - abs(dot(vWorldNormal, vViewDir)), 3.2) * globeFade;
    gl_FragColor = vec4(glowColor, 1.0) * intensity;
  }
`

export function Atmosphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const matRef = useRef<THREE.ShaderMaterial>(null)
  const camera = useThree((s) => s.camera)
  const mapView = useStore((s) => Boolean(s.selectedCountry || s.flatMap))
  const followFlight = useStore((s) => s.followFlight)

  useFrame(() => {
    const fade = mapView ? 0 : 1 - getMapEase()
    const inside = camera.position.length() < ATMOS_INNER
    if (matRef.current) matRef.current.uniforms.globeFade.value = fade
    if (meshRef.current) {
      meshRef.current.visible = fade > 0.25 && !inside && !followFlight
    }
  })

  return (
    <mesh ref={meshRef} scale={ATMOS_SCALE}>
      <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          glowColor: { value: new THREE.Color(0x3a86ff) },
          globeFade: { value: 1 },
        }}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}
