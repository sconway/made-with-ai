import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import { altitudeToRadius, deadReckon, latLonToVector3 } from '../lib/geo'

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

type OrbitLike = {
  target: THREE.Vector3
  update: () => void
  enabled: boolean
  enableRotate?: boolean
  enableZoom?: boolean
  enablePan?: boolean
  minDistance?: number
  maxDistance?: number
}

const _dir = new THREE.Vector3()
const _prev = new THREE.Vector3()
const _quat = new THREE.Quaternion()
const FOLLOW_CAM_DIST = 1.85

function cameraIsValid(camera: THREE.Camera): boolean {
  const p = camera.position
  return (
    Number.isFinite(p.x) &&
    Number.isFinite(p.y) &&
    Number.isFinite(p.z) &&
    p.lengthSq() > 0.25
  )
}

/**
 * Region/country/search camera flies, plus optional follow.
 *
 * Follow = one mild zoom toward the aircraft, then rotate the camera around
 * the globe with the plane's motion only. Orbit/zoom stay fully user-driven;
 * we never rewrite OrbitControls internals.
 */
export function CameraRig() {
  const camera = useThree((s) => s.camera)
  const controls = useThree((s) => s.controls) as OrbitLike | null
  const selectedCountry = useStore((s) => s.selectedCountry)
  const region = useStore((s) => s.region)
  const cameraFocus = useStore((s) => s.cameraFocus)
  const followFlight = useStore((s) => s.followFlight)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const flightsById = useStore((s) => s.flightsById)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const playbackLive = useStore((s) => s.playbackLive)

  const fly = useRef<Fly>({
    from: new THREE.Vector3(),
    to: new THREE.Vector3(),
    start: 0,
    duration: 1.1,
    active: false,
  })
  const followPos = useRef(new THREE.Vector3())
  const prevFollowDir = useRef(new THREE.Vector3(0, 0, 0))
  const followReady = useRef(false)
  const savedMinDist = useRef(1.25)
  const savedMaxDist = useRef(6)

  const startFly = (lat: number, lon: number, dist: number, duration: number) => {
    const dir = latLonToVector3(lat, lon, 1).normalize()
    fly.current.from.copy(camera.position)
    fly.current.to.copy(dir.multiplyScalar(dist))
    fly.current.start = performance.now() / 1000
    fly.current.duration = duration
    fly.current.active = true
  }

  const resetCameraHome = () => {
    const lat = region.center.lat
    const lon = region.center.lon
    const dist = region.bbox ? 2.4 : 3.0
    const dir = latLonToVector3(lat, lon, 1).normalize()
    camera.position.copy(dir.multiplyScalar(dist))
    if (controls) {
      controls.target.set(0, 0, 0)
      controls.update()
    } else {
      camera.lookAt(0, 0, 0)
    }
  }

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
    startFly(lat, lon, dist, 1.1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, region])

  useEffect(() => {
    if (!cameraFocus || followFlight) return
    startFly(cameraFocus.lat, cameraFocus.lon, cameraFocus.dist, 0.95)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraFocus?.nonce])

  useEffect(() => {
    if (!controls) return
    if (followFlight && selectedFlightId) {
      if (controls.minDistance != null) savedMinDist.current = controls.minDistance
      if (controls.maxDistance != null) savedMaxDist.current = controls.maxDistance
      controls.enabled = true
      if (controls.enablePan != null) controls.enablePan = false
      if (controls.minDistance != null) controls.minDistance = 1.35
      if (controls.maxDistance != null) controls.maxDistance = 4.5
      followReady.current = false
      prevFollowDir.current.set(0, 0, 0)
      fly.current.active = false
    } else {
      controls.enabled = true
      if (controls.enablePan != null) controls.enablePan = false
      if (controls.minDistance != null) controls.minDistance = savedMinDist.current
      if (controls.maxDistance != null) controls.maxDistance = savedMaxDist.current
      controls.target.set(0, 0, 0)
      if (!cameraIsValid(camera)) resetCameraHome()
      else controls.update()
      followReady.current = false
      prevFollowDir.current.set(0, 0, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followFlight, selectedFlightId, controls])

  useFrame(() => {
    // Recover from a corrupted camera (e.g. bad follow math).
    if (!cameraIsValid(camera)) {
      resetCameraHome()
      followReady.current = false
      prevFollowDir.current.set(0, 0, 0)
    }

    if (followFlight && selectedFlightId) {
      const f = flightsById.get(selectedFlightId)
      if (f) {
        const elapsed =
          !playbackLive || lastUpdate <= 0
            ? 0
            : Math.max(0, (Date.now() - lastUpdate) / 1000)
        const vel = f.onGround ? 0 : f.velocity ?? 0
        const pred = deadReckon(f.lat, f.lon, vel, f.track ?? 0, elapsed)
        const r = altitudeToRadius(f.geoAltitude ?? f.baroAltitude)
        latLonToVector3(pred.lat, pred.lon, r, followPos.current)
        _dir.copy(followPos.current).normalize()

        if (!followReady.current) {
          camera.position.copy(_dir).multiplyScalar(FOLLOW_CAM_DIST)
          prevFollowDir.current.copy(_dir)
          followReady.current = true
          if (controls) {
            controls.target.set(0, 0, 0)
            controls.update()
          } else {
            camera.lookAt(0, 0, 0)
          }
          return
        }

        _prev.copy(prevFollowDir.current)
        if (_prev.lengthSq() > 0.5) {
          const dot = THREE.MathUtils.clamp(_prev.dot(_dir), -1, 1)
          // Skip tiny moves; skip near-opposite (setFromUnitVectors goes unstable).
          if (dot < 0.9999 && dot > -0.99) {
            _quat.setFromUnitVectors(_prev, _dir)
            camera.position.applyQuaternion(_quat)
            if (!cameraIsValid(camera)) {
              camera.position.copy(_dir).multiplyScalar(FOLLOW_CAM_DIST)
            }
          }
        }
        prevFollowDir.current.copy(_dir)

        if (controls) controls.target.set(0, 0, 0)
        // Do not call controls.update() every frame — it fights user orbit.
        camera.lookAt(0, 0, 0)
        return
      }
    }

    const anim = fly.current
    if (!anim.active) return
    const t = (performance.now() / 1000 - anim.start) / anim.duration
    if (t >= 1) {
      camera.position.copy(anim.to)
      anim.active = false
    } else {
      camera.position.lerpVectors(anim.from, anim.to, easeInOut(t))
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
