import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import { latLonToVector3 } from '../lib/geo'

interface Fly {
  from: THREE.Vector3
  to: THREE.Vector3
  start: number
  duration: number
  active: boolean
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

/** Animates the camera to frame the selected country / active region. */
export function CameraRig() {
  const camera = useThree((s) => s.camera)
  const controls = useThree((s) => s.controls) as
    | { target: THREE.Vector3; update: () => void }
    | null
  const selectedCountry = useStore((s) => s.selectedCountry)
  const region = useStore((s) => s.region)
  const fly = useRef<Fly>({
    from: new THREE.Vector3(),
    to: new THREE.Vector3(),
    start: 0,
    duration: 1.1,
    active: false,
  })

  useEffect(() => {
    let lat: number
    let lon: number
    let dist: number
    if (selectedCountry) {
      lat = (selectedCountry.bbox.minLat + selectedCountry.bbox.maxLat) / 2
      lon = (selectedCountry.bbox.minLon + selectedCountry.bbox.maxLon) / 2
      const span = Math.max(
        selectedCountry.bbox.maxLat - selectedCountry.bbox.minLat,
        selectedCountry.bbox.maxLon - selectedCountry.bbox.minLon,
      )
      dist = THREE.MathUtils.clamp(1.4 + span / 40, 1.5, 2.6)
    } else {
      lat = region.center.lat
      lon = region.center.lon
      dist = region.bbox ? 2.4 : 3.0
    }
    const dir = latLonToVector3(lat, lon, 1).normalize()
    fly.current.from.copy(camera.position)
    fly.current.to.copy(dir.multiplyScalar(dist))
    fly.current.start = performance.now() / 1000
    fly.current.active = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, region])

  useFrame(() => {
    const f = fly.current
    if (!f.active) return
    const t = (performance.now() / 1000 - f.start) / f.duration
    if (t >= 1) {
      camera.position.copy(f.to)
      f.active = false
    } else {
      camera.position.lerpVectors(f.from, f.to, easeInOut(t))
    }
    if (controls) {
      controls.target.set(0, 0, 0)
      controls.update()
    } else {
      camera.lookAt(0, 0, 0)
    }
  })

  return null
}
