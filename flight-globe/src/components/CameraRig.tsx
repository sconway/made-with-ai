import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import {
  altitudeToRadius,
  deadReckon,
  GLOBE_RADIUS,
  latLonToVector3,
  trackForward,
  vector3ToLatLon,
} from '../lib/geo'
import { regionCameraDist } from '../lib/regions'
import {
  getMapBlend,
  getMapEase,
  getMapFrame,
  setMapViewCountry,
  setMapViewLookAt,
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
  rotateSpeed?: number
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

const _mapPos = new THREE.Vector3()
const _mapQuat = new THREE.Quaternion()
const _mapQuatTo = new THREE.Quaternion()
const _mapLook = new THREE.Vector3()
const WORLD_UP = new THREE.Vector3(0, 1, 0)
const FOLLOW_EXIT_DIST = 1.85
const GLOBE_NEAR = 0.1
const GLOBE_FOV = 45
/** Drag speed when the camera is at a normal globe distance or farther. */
const GLOBE_ROTATE_FAR = 0.5
/** Drag speed at the closest zoom. Same pixel drag is a much bigger sweep up close. */
const GLOBE_ROTATE_CLOSE = 0.12
const GLOBE_ROTATE_CLOSE_HEIGHT = 0.25
const GLOBE_ROTATE_FAR_HEIGHT = 1.5
/** Log-radius change per wheel pixel. Applied on the scroll, not after it. */
const GLOBE_ZOOM_PER_PX = 0.00086
/** Share of each scroll that moves the camera immediately. */
const GLOBE_ZOOM_IMMEDIATE = 0.92
/** Fade for the small remainder. High so the tail is only a few frames. */
const GLOBE_ZOOM_DECAY = 16
const GLOBE_ZOOM_MAX_VEL = 2.4
const CHASE_NEAR = 0.003
const CHASE_FOV = 38
const CHASE_BLEND_SEC = 1.2
const _homeCam = new THREE.PerspectiveCamera()
const _chasePos = new THREE.Vector3()
const _chaseLook = new THREE.Vector3()
const _chaseFwd = new THREE.Vector3()
const _chaseUp = new THREE.Vector3()
const _chaseRight = new THREE.Vector3()
const _chaseQuat = new THREE.Quaternion()

function chaseFraming(onGround: boolean, altM: number | null): {
  back: number
  lift: number
  side: number
} {
  const altKm = Math.max(0, (altM ?? 0) / 1000)
  // Three-quarter chase: behind, above, and off the right wing so we see the
  // whole airframe instead of looking down the fuselage.
  if (onGround || altKm < 0.35) {
    return { back: 0.06, lift: 0.03, side: 0.028 }
  }
  const t = THREE.MathUtils.clamp((altKm - 0.35) / 10, 0, 1)
  return {
    back: THREE.MathUtils.lerp(0.075, 0.12, t),
    lift: THREE.MathUtils.lerp(0.034, 0.048, t),
    side: THREE.MathUtils.lerp(0.03, 0.045, t),
  }
}

function writeChasePose(
  lat: number,
  lon: number,
  radius: number,
  forward: THREE.Vector3,
  onGround: boolean,
  altM: number | null,
  outPos: THREE.Vector3,
  outQuat: THREE.Quaternion,
  outLook: THREE.Vector3,
  outUp: THREE.Vector3,
): void {
  latLonToVector3(lat, lon, radius, outLook)
  outUp.copy(outLook).normalize()
  _chaseRight.crossVectors(outUp, forward)
  if (_chaseRight.lengthSq() < 1e-10) {
    _chaseRight.set(0, 1, 0).cross(outUp)
  }
  _chaseRight.normalize()
  const { back, lift, side } = chaseFraming(onGround, altM)
  outPos
    .copy(outLook)
    .addScaledVector(forward, -back)
    .addScaledVector(outUp, lift)
    .addScaledVector(_chaseRight, side)
  const minR = radius + lift * 0.25
  if (outPos.length() < minR) outPos.setLength(minR)
  outLook.addScaledVector(outUp, lift * 0.08)
  _homeCam.position.copy(outPos)
  _homeCam.up.copy(outUp)
  _homeCam.lookAt(outLook)
  outQuat.copy(_homeCam.quaternion)
}

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
  const gl = useThree((s) => s.gl)
  const size = useThree((s) => s.size)
  const controls = useThree((s) => s.controls) as OrbitLike | null
  const selectedCountry = useStore((s) => s.selectedCountry)
  const flatMap = useStore((s) => s.flatMap)
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
  const lastFlatRef = useRef(false)
  const lastFocusNonce = useRef(0)

  const fly = useRef<Fly>({
    from: new THREE.Vector3(),
    to: new THREE.Vector3(),
    start: 0,
    duration: 1.1,
    active: false,
  })
  const chaseMix = useRef(1)
  const wasChasing = useRef(false)
  const chaseFromPos = useRef(new THREE.Vector3())
  const chaseFromQuat = useRef(new THREE.Quaternion())
  const chaseForward = useRef(new THREE.Vector3())
  const savedMinDist = useRef(1.25)
  const savedMaxDist = useRef(6)
  const savedNear = useRef(GLOBE_NEAR)
  const savedFov = useRef(GLOBE_FOV)
  const lastChase = useRef({ lat: 0, lon: 0, valid: false })
  const zoomVel = useRef(0)

  useEffect(() => {
    // OrbitControls listens on the canvas parent and applies zoom in one step.
    // Capture here first so a scroll moves the camera on this event.
    const el = gl.domElement.parentElement ?? gl.domElement
    const onWheel = (e: WheelEvent) => {
      const { followFlight: chasing, selectedCountry: country, flatMap: flat } =
        useStore.getState()
      if (chasing || country || flat || getMapBlend() > 0.08) return
      if (!controls?.enabled) return
      e.preventDefault()
      e.stopImmediatePropagation()
      let dy = e.deltaY
      if (e.deltaMode === 1) dy *= 16
      else if (e.deltaMode === 2) dy *= el.clientHeight
      if (!Number.isFinite(dy) || dy === 0) return
      const vel = zoomVel.current
      if (vel !== 0 && Math.sign(dy) !== Math.sign(vel) && Math.abs(dy) < 48) {
        dy *= 0.2
      }
      const min = controls.minDistance ?? 1.25
      const max = controls.maxDistance ?? 6
      const len = camera.position.length()
      if (len < 0.01) return
      const ln = dy * GLOBE_ZOOM_PER_PX
      const next = THREE.MathUtils.clamp(
        len * Math.exp(ln * GLOBE_ZOOM_IMMEDIATE),
        min,
        max,
      )
      camera.position.setLength(next)
      const applied = Math.log(next / len)
      zoomVel.current = THREE.MathUtils.clamp(
        vel + (ln - applied) * GLOBE_ZOOM_DECAY,
        -GLOBE_ZOOM_MAX_VEL,
        GLOBE_ZOOM_MAX_VEL,
      )
    }
    el.addEventListener('wheel', onWheel, { capture: true, passive: false })
    return () => el.removeEventListener('wheel', onWheel, true)
  }, [gl, controls, camera])

  const startFly = (lat: number, lon: number, dist: number, duration: number) => {
    const dir = latLonToVector3(lat, lon, 1).normalize()
    fly.current.from.copy(camera.position)
    fly.current.to.copy(dir.multiplyScalar(dist))
    fly.current.start = performance.now() / 1000
    fly.current.duration = duration
    fly.current.active = true
    zoomVel.current = 0
    if (controls) controls.enabled = false
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
    const wasFlat = lastFlatRef.current
    const nowFlat = flatMap && !selectedCountry
    lastFlatRef.current = nowFlat

    if (selectedCountry) {
      setMapViewCountry(selectedCountry)
    } else if (flatMap) {
      const { lat, lon } = vector3ToLatLon(camera.position)
      const dist = Math.max(1.2, camera.position.length())
      const halfLon = THREE.MathUtils.clamp((dist - 1.05) * 32, 10, 62)
      const halfLat = halfLon * 0.62
      setMapViewLookAt(lat, lon, halfLon, halfLat)
      useStore.getState().bumpMapEpoch()
    } else {
      setMapViewCountry(null)
    }

    const enteringCountry = Boolean(selectedCountry && countryChanged)
    const enteringFlat = nowFlat && !wasFlat
    const leavingMap =
      (prevId != null && !selectedCountry && !nowFlat) || (wasFlat && !nowFlat)

    if (enteringCountry || enteringFlat) {
      fly.current.active = false
      pendingGlobeHome.current = false
      if (!prevId && !wasFlat) {
        globeFromPos.current.copy(camera.position)
        globeFromQuat.current.copy(camera.quaternion)
        poseMix.current = 1
      } else {
        poseFromPos.current.copy(camera.position)
        poseFromQuat.current.copy(camera.quaternion)
        poseMix.current = 0
      }
    }

    if (leavingMap) {
      pendingGlobeHome.current = false
      writeGlobePoseFromDir(
        camera.position,
        regionCameraDist(region),
        globeFromPos.current,
        globeFromQuat.current,
      )
    } else if (!selectedCountry && !flatMap) {
      const focus = useStore.getState().cameraFocus
      pendingGlobeHome.current =
        !focus || focus.dist >= regionCameraDist(region) - 0.02
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, flatMap, region])

  useEffect(() => {
    if (!cameraFocus || followFlight) return
    if (cameraFocus.nonce === lastFocusNonce.current) return
    if (selectedCountry || flatMap) return
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
    if (selectedCountry || flatMap || wasMap.current) {
      if (selectedCountry && !mapNav.current) controls.enabled = false
      fly.current.active = false
      return
    }
    const chasing = Boolean(followFlight && selectedFlightId)
    if (chasing) {
      if (controls.minDistance != null) savedMinDist.current = controls.minDistance
      if (controls.maxDistance != null) savedMaxDist.current = controls.maxDistance
      if (camera instanceof THREE.PerspectiveCamera) {
        savedNear.current = camera.near
        savedFov.current = camera.fov
        camera.near = CHASE_NEAR
        camera.fov = CHASE_FOV
        camera.updateProjectionMatrix()
      }
      chaseFromPos.current.copy(camera.position)
      chaseFromQuat.current.copy(camera.quaternion)
      chaseMix.current = 0
      chaseForward.current.set(0, 0, 0)
      controls.enabled = false
      wasChasing.current = true
      fly.current.active = false
    } else {
      const leaving = wasChasing.current
      wasChasing.current = false
      if (controls.enablePan != null) controls.enablePan = false
      if (controls.minDistance != null) controls.minDistance = savedMinDist.current
      if (controls.maxDistance != null) controls.maxDistance = savedMaxDist.current
      if (leaving && lastChase.current.valid) {
        controls.enabled = false
        startFly(
          lastChase.current.lat,
          lastChase.current.lon,
          FOLLOW_EXIT_DIST,
          1.05,
        )
      } else {
        controls.enabled = true
        controls.target.set(0, 0, 0)
        if (!cameraIsValid(camera)) resetCameraHome()
        else controls.update()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [followFlight, selectedFlightId, selectedCountry, flatMap, controls])

  useFrame((_, delta) => {
    const b = tickMapBlend(delta)
    const map = getMapFrame()
    const t = getMapEase()

    if (controls?.rotateSpeed != null && b < 0.2) {
      const height = Math.max(0, camera.position.length() - GLOBE_RADIUS)
      const span = GLOBE_ROTATE_FAR_HEIGHT - GLOBE_ROTATE_CLOSE_HEIGHT
      const u = THREE.MathUtils.clamp(
        (height - GLOBE_ROTATE_CLOSE_HEIGHT) / span,
        0,
        1,
      )
      controls.rotateSpeed = THREE.MathUtils.lerp(
        GLOBE_ROTATE_CLOSE,
        GLOBE_ROTATE_FAR,
        u,
      )
    }

    if (b > 0.001 && map) {
      zoomVel.current = 0
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
      } else if (selectedCountry || flatMap) {
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

    if (pendingGlobeHome.current && b < 0.05 && !selectedCountry && !flatMap) {
      pendingGlobeHome.current = false
      const focus = useStore.getState().cameraFocus
      if (!fly.current.active && !(focus && focus.dist < regionCameraDist(region) - 0.05)) {
        startFly(
          region.center.lat,
          region.center.lon,
          regionCameraDist(region),
          1.05,
        )
      }
    }

    if (!followFlight && !fly.current.active && !cameraIsValid(camera)) {
      resetCameraHome()
    }

    if (followFlight && selectedFlightId && !selectedCountry && !flatMap) {
      zoomVel.current = 0
      const f = flightsById.get(selectedFlightId)
      if (f) {
        const elapsed =
          !playbackLive || lastUpdate <= 0
            ? 0
            : Math.max(0, (Date.now() - lastUpdate) / 1000)
        const vel = f.onGround ? 0 : f.velocity ?? 0
        const pred = deadReckon(f.lat, f.lon, vel, f.track ?? 0, elapsed)
        const r = altitudeToRadius(f.geoAltitude ?? f.baroAltitude)
        lastChase.current = { lat: pred.lat, lon: pred.lon, valid: true }
        trackForward(pred.lat, pred.lon, f.track ?? 0, _chaseFwd)
        if (chaseForward.current.lengthSq() < 0.5) {
          chaseForward.current.copy(_chaseFwd)
        } else if (chaseForward.current.dot(_chaseFwd) > 0.15) {
          chaseForward.current.lerp(_chaseFwd, 1 - Math.exp(-delta * 3.2)).normalize()
        } else {
          chaseForward.current.copy(_chaseFwd)
        }

        writeChasePose(
          pred.lat,
          pred.lon,
          r,
          chaseForward.current,
          Boolean(f.onGround),
          f.geoAltitude ?? f.baroAltitude,
          _chasePos,
          _chaseQuat,
          _chaseLook,
          _chaseUp,
        )

        if (chaseMix.current < 1) {
          chaseMix.current = Math.min(1, chaseMix.current + delta / CHASE_BLEND_SEC)
          const u = easeInOut(chaseMix.current)
          camera.position.lerpVectors(chaseFromPos.current, _chasePos, u)
          camera.quaternion.slerpQuaternions(chaseFromQuat.current, _chaseQuat, u)
        } else {
          const k = 1 - Math.exp(-delta * 5.5)
          camera.position.lerp(_chasePos, k)
          camera.quaternion.slerp(_chaseQuat, k)
        }
        camera.up.copy(_chaseUp)
        camera.updateMatrixWorld()
        if (controls) {
          controls.target.copy(_chaseLook)
          controls.enabled = false
        }
        return
      }
    }

    if (
      camera instanceof THREE.PerspectiveCamera &&
      camera.near < GLOBE_NEAR - 0.001 &&
      camera.position.length() > 1.32
    ) {
      camera.near = savedNear.current || GLOBE_NEAR
      camera.fov = savedFov.current || GLOBE_FOV
      camera.updateProjectionMatrix()
    }

    if (!fly.current.active && !followFlight && !selectedCountry && !flatMap) {
      let nextVel = zoomVel.current
      if (nextVel !== 0) {
        const dt = Math.min(Math.max(delta, 0), 0.05)
        const min = controls?.minDistance ?? 1.25
        const max = controls?.maxDistance ?? 6
        const len = camera.position.length()
        let next = len * Math.exp(nextVel * dt)
        if (next <= min || next >= max) {
          next = THREE.MathUtils.clamp(next, min, max)
          nextVel = 0
        } else {
          nextVel *= Math.exp(-GLOBE_ZOOM_DECAY * dt)
          if (Math.abs(nextVel) < 0.02) nextVel = 0
        }
        if (len > 0.01 && Math.abs(next - len) > 1e-6) camera.position.setLength(next)
      }
      zoomVel.current = nextVel
    }

    const anim = fly.current
    if (!anim.active) return
    const ft = (performance.now() / 1000 - anim.start) / anim.duration
    if (ft >= 1) {
      camera.position.copy(anim.to)
      anim.active = false
      camera.up.copy(WORLD_UP)
      camera.lookAt(0, 0, 0)
      camera.updateMatrixWorld()
      if (controls) {
        controls.target.set(0, 0, 0)
        if (controls.enablePan != null) controls.enablePan = false
        const spherical = (controls as { spherical?: { radius: number } }).spherical
        if (spherical) spherical.radius = anim.to.length()
        controls.enabled = true
        controls.update()
        camera.position.copy(anim.to)
        camera.lookAt(0, 0, 0)
        camera.updateMatrixWorld()
      }
    } else {
      camera.position.lerpVectors(anim.from, anim.to, easeInOut(ft))
      camera.up.copy(WORLD_UP)
      camera.lookAt(0, 0, 0)
      camera.updateMatrixWorld()
    }
  })

  return null
}
