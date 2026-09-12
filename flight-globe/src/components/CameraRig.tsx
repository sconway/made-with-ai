import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import { altitudeToRadius, deadReckon, latLonToVector3 } from '../lib/geo'
import { regionCameraDist } from '../lib/regions'
import {
  getMapBlend,
  getMapEase,
  getMapFrame,
  setMapViewCountry,
  tickMapBlend,
  writeMapCameraPose,
} from '../lib/mapView'

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
  screenSpacePanning?: boolean
  minDistance?: number
  maxDistance?: number
  mouseButtons?: { LEFT?: number; MIDDLE?: number; RIGHT?: number }
  touches?: { ONE?: number; TWO?: number }
}

const GLOBE_MOUSE = {
  LEFT: THREE.MOUSE.ROTATE,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.PAN,
}
const MAP_MOUSE = {
  LEFT: THREE.MOUSE.PAN,
  MIDDLE: THREE.MOUSE.DOLLY,
  RIGHT: THREE.MOUSE.PAN,
}

const _dir = new THREE.Vector3()
const _prev = new THREE.Vector3()
const _quat = new THREE.Quaternion()
const _mapPos = new THREE.Vector3()
const _mapQuat = new THREE.Quaternion()
const _mapQuatTo = new THREE.Quaternion()
const _mapLook = new THREE.Vector3()
const WORLD_UP = new THREE.Vector3(0, 1, 0)
const FOLLOW_CAM_DIST = 1.85
const _homeCam = new THREE.PerspectiveCamera()

function writeGlobePoseFromDir(
  dir: THREE.Vector3,
  dist: number,
  outPos: THREE.Vector3,
  outQuat: THREE.Quaternion,
) {
  if (dir.lengthSq() < 1e-8) outPos.set(0, 0, dist)
  else outPos.copy(dir).normalize().multiplyScalar(dist)
  _homeCam.position.copy(outPos)
  _homeCam.up.copy(WORLD_UP)
  _homeCam.lookAt(0, 0, 0)
  outQuat.copy(_homeCam.quaternion)
}

function writeGlobeHomePose(
  lat: number,
  lon: number,
  dist: number,
  outPos: THREE.Vector3,
  outQuat: THREE.Quaternion,
) {
  writeGlobePoseFromDir(latLonToVector3(lat, lon, 1), dist, outPos, outQuat)
}

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
 * Region/search camera flies, optional follow, and in-place country flatten.
 *
 * Country select: the country unpeels onto its tangent plane while the same
 * perspective camera slerps to a north-up top-down fit — no projection swap.
 */
export function CameraRig() {
  const camera = useThree((s) => s.camera)
  const size = useThree((s) => s.size)
  const controls = useThree((s) => s.controls) as OrbitLike | null
  const selectedCountry = useStore((s) => s.selectedCountry)
  const region = useStore((s) => s.region)
  const cameraFocus = useStore((s) => s.cameraFocus)
  const followFlight = useStore((s) => s.followFlight)
  const selectedFlightId = useStore((s) => s.selectedFlightId)
  const flightsById = useStore((s) => s.flightsById)
  const lastUpdate = useStore((s) => s.lastUpdate)
  const playbackLive = useStore((s) => s.playbackLive)

  const globeFromPos = useRef(new THREE.Vector3())
  const globeFromQuat = useRef(new THREE.Quaternion())
  const mapLeavePos = useRef(new THREE.Vector3())
  const mapLeaveQuat = useRef(new THREE.Quaternion())
  const poseFromPos = useRef(new THREE.Vector3())
  const poseFromQuat = useRef(new THREE.Quaternion())
  const poseMix = useRef(1)
  const lastCountryId = useRef<string | null>(null)
  const pendingGlobeHome = useRef(false)
  const wasMap = useRef(false)
  const mapNav = useRef(false)
  const lastFocusNonce = useRef(0)

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

  const enableMapPan = (lookAt: THREE.Vector3) => {
    if (!controls) return
    if (controls.minDistance != null) savedMinDist.current = controls.minDistance
    if (controls.maxDistance != null) savedMaxDist.current = controls.maxDistance
    const dist = Math.max(0.2, camera.position.distanceTo(lookAt))
    controls.target.copy(lookAt)
    if (controls.enableRotate != null) controls.enableRotate = false
    if (controls.enablePan != null) controls.enablePan = true
    if (controls.enableZoom != null) controls.enableZoom = true
    if (controls.screenSpacePanning != null) controls.screenSpacePanning = true
    if (controls.mouseButtons) {
      controls.mouseButtons.LEFT = MAP_MOUSE.LEFT
      controls.mouseButtons.MIDDLE = MAP_MOUSE.MIDDLE
      controls.mouseButtons.RIGHT = MAP_MOUSE.RIGHT
    }
    if (controls.touches) {
      controls.touches.ONE = THREE.TOUCH.PAN
      controls.touches.TWO = THREE.TOUCH.DOLLY_PAN
    }
    if (controls.minDistance != null) {
      controls.minDistance = Math.max(0.14, dist * 0.22)
    }
    if (controls.maxDistance != null) controls.maxDistance = dist * 2.6
    controls.enabled = true
    controls.update()
  }

  const restoreGlobeOrbit = () => {
    mapNav.current = false
    camera.up.copy(WORLD_UP)
    if (controls) {
      controls.target.set(0, 0, 0)
      if (controls.enableRotate != null) controls.enableRotate = true
      if (controls.enablePan != null) controls.enablePan = false
      if (controls.enableZoom != null) controls.enableZoom = true
      if (controls.mouseButtons) {
        controls.mouseButtons.LEFT = GLOBE_MOUSE.LEFT
        controls.mouseButtons.MIDDLE = GLOBE_MOUSE.MIDDLE
        controls.mouseButtons.RIGHT = GLOBE_MOUSE.RIGHT
      }
      if (controls.touches) {
        controls.touches.ONE = THREE.TOUCH.ROTATE
        controls.touches.TWO = THREE.TOUCH.DOLLY_PAN
      }
      if (controls.minDistance != null) controls.minDistance = savedMinDist.current
      if (controls.maxDistance != null) controls.maxDistance = savedMaxDist.current
      controls.enabled = true
      controls.update()
    } else {
      camera.lookAt(0, 0, 0)
    }
  }

  const resetCameraHome = () => {
    writeGlobeHomePose(
      region.center.lat,
      region.center.lon,
      regionCameraDist(region),
      camera.position,
      camera.quaternion,
    )
    restoreGlobeOrbit()
  }

  useEffect(() => {
    const prevId = lastCountryId.current
    const countryChanged = selectedCountry?.id !== prevId
    lastCountryId.current = selectedCountry?.id ?? null
    setMapViewCountry(selectedCountry)

    if (selectedCountry && countryChanged) {
      fly.current.active = false
      pendingGlobeHome.current = false
      if (!prevId) {
        globeFromPos.current.copy(camera.position)
        globeFromQuat.current.copy(camera.quaternion)
        poseMix.current = 1
      } else {
        poseFromPos.current.copy(camera.position)
        poseFromQuat.current.copy(camera.quaternion)
        poseMix.current = 0
      }
    }

    const leavingCountry = prevId != null && !selectedCountry
    if (leavingCountry) {
      pendingGlobeHome.current = false
      // Pull back along the current view so the country stays in frame —
      // a region fly-to (N. America / Europe) may replace this next.
      writeGlobePoseFromDir(
        camera.position,
        regionCameraDist(region),
        globeFromPos.current,
        globeFromQuat.current,
      )
    } else if (!selectedCountry) {
      pendingGlobeHome.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, region])

  useEffect(() => {
    if (!cameraFocus || followFlight) return
    if (cameraFocus.nonce === lastFocusNonce.current) return
    if (selectedCountry) return
    lastFocusNonce.current = cameraFocus.nonce
    // Leaving a country: aim the reverse blend at this home pose so we don't
    // settle on the old country-facing side of the globe.
    const blendingOut = wasMap.current || getMapBlend() > 0.001
    if (blendingOut) {
      writeGlobeHomePose(
        cameraFocus.lat,
        cameraFocus.lon,
        cameraFocus.dist,
        globeFromPos.current,
        globeFromQuat.current,
      )
      pendingGlobeHome.current = false
      fly.current.active = false
      return
    }
    pendingGlobeHome.current = false
    startFly(cameraFocus.lat, cameraFocus.lon, cameraFocus.dist, 0.95)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraFocus?.nonce, selectedCountry, followFlight])

  useEffect(() => {
    if (!controls) return
    if (selectedCountry || wasMap.current) {
      if (selectedCountry && !mapNav.current) controls.enabled = false
      followReady.current = false
      prevFollowDir.current.set(0, 0, 0)
      fly.current.active = false
      return
    }
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
  }, [followFlight, selectedFlightId, selectedCountry, controls])

  useFrame((_, delta) => {
    const b = tickMapBlend(delta)
    const map = getMapFrame()
    const t = getMapEase()

    if (b > 0.001 && map) {
      wasMap.current = true
      const fov =
        camera instanceof THREE.PerspectiveCamera ? camera.fov : 45
      writeMapCameraPose(
        map,
        size.width,
        size.height,
        fov,
        _mapPos,
        _mapQuatTo,
        _mapLook,
      )

      if (poseMix.current < 1) {
        poseMix.current = Math.min(1, poseMix.current + delta * 1.35)
        const u = easeInOut(poseMix.current)
        _mapPos.lerpVectors(poseFromPos.current, _mapPos, u)
        _mapQuat.slerpQuaternions(poseFromQuat.current, _mapQuatTo, u)
      } else {
        _mapQuat.copy(_mapQuatTo)
      }

      if (t > 0.97) {
        if (!mapNav.current) {
          camera.position.copy(_mapPos)
          camera.up.copy(map.north)
          camera.lookAt(_mapLook)
          camera.updateMatrixWorld()
          mapLeavePos.current.copy(camera.position)
          mapLeaveQuat.current.copy(camera.quaternion)
          enableMapPan(_mapLook)
          mapNav.current = true
        }
        return
      }

      if (mapNav.current) {
        mapLeavePos.current.copy(camera.position)
        mapLeaveQuat.current.copy(camera.quaternion)
        mapNav.current = false
      } else if (selectedCountry) {
        mapLeavePos.current.copy(_mapPos)
        mapLeaveQuat.current.copy(_mapQuat)
      }
      camera.position.lerpVectors(
        globeFromPos.current,
        mapLeavePos.current,
        t,
      )
      camera.quaternion.slerpQuaternions(
        globeFromQuat.current,
        mapLeaveQuat.current,
        t,
      )
      camera.up.lerpVectors(WORLD_UP, map.north, t).normalize()
      camera.updateMatrixWorld()
      if (controls) controls.enabled = false
      return
    }

    if (wasMap.current) {
      wasMap.current = false
      restoreGlobeOrbit()
    }

    if (pendingGlobeHome.current && b < 0.05 && !selectedCountry) {
      pendingGlobeHome.current = false
      startFly(
        region.center.lat,
        region.center.lon,
        regionCameraDist(region),
        1.05,
      )
    }

    if (!cameraIsValid(camera)) {
      resetCameraHome()
      followReady.current = false
      prevFollowDir.current.set(0, 0, 0)
    }

    if (followFlight && selectedFlightId && !selectedCountry) {
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
        camera.lookAt(0, 0, 0)
        return
      }
    }

    const anim = fly.current
    if (!anim.active) return
    const ft = (performance.now() / 1000 - anim.start) / anim.duration
    if (ft >= 1) {
      camera.position.copy(anim.to)
      anim.active = false
    } else {
      camera.position.lerpVectors(anim.from, anim.to, easeInOut(ft))
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
