import { useEffect, useMemo, useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { GLOBE_RADIUS } from '../lib/geo'

// UVs are computed analytically in the shader from object-space position using
// the exact inverse of latLonToVector3 (geo.ts), so the imagery aligns with the
// countries and aircraft that use that same formula. The mesh is NOT rotated.
const vertexShader = /* glsl */ `
  varying vec3 vObj;
  varying vec3 vWorldNormal;
  void main() {
    vObj = normalize(position);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  #define PI 3.141592653589793
  uniform sampler2D dayTexture;
  uniform sampler2D nightTexture;
  uniform vec3 sunDirection;
  varying vec3 vObj;
  varying vec3 vWorldNormal;

  void main() {
    // Equirectangular UV matching vector3ToLatLon(): lon = atan2(z, -x).
    float u = atan(vObj.z, -vObj.x) / (2.0 * PI);
    float v = 1.0 - acos(clamp(vObj.y, -1.0, 1.0)) / PI;
    vec2 uv = vec2(u, v);

    vec3 day = texture2D(dayTexture, uv).rgb;
    vec3 night = texture2D(nightTexture, uv).rgb;
    float d = dot(normalize(vWorldNormal), normalize(sunDirection));
    float t = smoothstep(-0.12, 0.28, d);
    vec3 color = mix(night * 1.35 + vec3(0.01, 0.02, 0.05), day, t);
    gl_FragColor = vec4(color, 1.0);
  }
`

interface EarthProps {
  sunDirection: THREE.Vector3
}

export function Earth({ sunDirection }: EarthProps) {
  const [dayMap, nightMap] = useLoader(THREE.TextureLoader, [
    '/textures/earth_day.jpg',
    '/textures/earth_night.png',
  ])
  const matRef = useRef<THREE.ShaderMaterial>(null)

  useEffect(() => {
    for (const t of [dayMap, nightMap]) {
      t.wrapS = THREE.RepeatWrapping
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 4
      t.needsUpdate = true
    }
  }, [dayMap, nightMap])

  const uniforms = useMemo(
    () => ({
      dayTexture: { value: dayMap },
      nightTexture: { value: nightMap },
      sunDirection: { value: sunDirection.clone() },
    }),
    [dayMap, nightMap], // eslint-disable-line react-hooks/exhaustive-deps
  )

  useFrame(() => {
    if (matRef.current) {
      matRef.current.uniforms.sunDirection.value.copy(sunDirection)
    }
  })

  return (
    <mesh>
      <sphereGeometry args={[GLOBE_RADIUS, 96, 96]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  )
}
