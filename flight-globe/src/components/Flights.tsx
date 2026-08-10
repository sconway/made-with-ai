import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, type ThreeEvent } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import {
  GLOBE_RADIUS,
  altitudeToRadius,
  deadReckon,
  latLonToVector3,
  type BBox,
} from '../lib/geo'
import { thinEvenly } from '../lib/sampling'

const MAX_INSTANCES = 20000

interface PerFlight {
  baseLat: number
  baseLon: number
  alt: number
  track: number
  vel: number
  fixTime: number
  dispVec: THREE.Vector3
}

const COLOR_LOW = new THREE.Color('#ffb14e')
const COLOR_HIGH = new THREE.Color('#4ea8ff')
const COLOR_SELECTED = new THREE.Color('#ffffff')

// Scratch objects reused every frame to avoid per-flight allocation.
const _dummy = new THREE.Object3D()
const _up = new THREE.Vector3()
const _forward = new THREE.Vector3()
const _right = new THREE.Vector3()
const _ahead = new THREE.Vector3()
const _target = new THREE.Vector3()
const _color = new THREE.Color()
const _basis = new THREE.Matrix4()
const _camDir = new THREE.Vector3()

export function Flights() {
  const flights = useStore((s) => s.flights)
  const selectedId = useStore((s) => s.selectedFlightId)
  const setSelectedFlight = useStore((s) => s.setSelectedFlight)
  const viewBBox = useStore((s) => s.viewBBox)

  const meshRef = useRef<THREE.InstancedMesh>(null)
  const statesRef = useRef<Map<string, PerFlight>>(new Map())
  const orderRef = useRef<string[]>([])
  const selectedIdRef = useRef<string | null>(null)
  const viewBBoxRef = useRef<BBox | null>(viewBBox)
  useEffect(() => {
    selectedIdRef.current = selectedId
  }, [selectedId])
  useEffect(() => {
    viewBBoxRef.current = viewBBox
  }, [viewBBox])

  // A dart glyph whose nose points along +Z so it can be oriented by heading.
  const geometry = useMemo(() => {
    const g = new THREE.ConeGeometry(0.006, 0.022, 5)
    g.rotateX(Math.PI / 2) // cone axis +Y -> +Z (nose forward)
    return g
  }, [])

  // Ingest each new batch of states, preserving display positions for smoothing.
  useEffect(() => {
    const now = performance.now() / 1000
    const map = statesRef.current
    const seen = new Set<string>()

    // Even out spatial density: cap planes per grid cell (sized to the view) so
    // dense hubs are thinned and the visible set is spread across the area.
    const visible = thinEvenly(flights, viewBBoxRef.current, selectedIdRef.current)

    for (const f of visible) {
      seen.add(f.icao24)
      const prev = map.get(f.icao24)
      const alt = f.geoAltitude ?? f.baroAltitude ?? 0
      const entry: PerFlight = {
        baseLat: f.lat,
        baseLon: f.lon,
        alt,
        track: f.track ?? 0,
        vel: f.onGround ? 0 : f.velocity ?? 0,
        fixTime: now,
        dispVec:
          prev?.dispVec ??
          latLonToVector3(f.lat, f.lon, altitudeToRadius(alt)),
      }
      map.set(f.icao24, entry)
    }
    for (const key of map.keys()) if (!seen.has(key)) map.delete(key)
    orderRef.current = Array.from(map.keys())

    const mesh = meshRef.current
    if (mesh) mesh.count = Math.min(orderRef.current.length, MAX_INSTANCES)
  }, [flights])

  useFrame((state) => {
    const mesh = meshRef.current
    if (!mesh) return
    const now = performance.now() / 1000
    const order = orderRef.current
    const count = Math.min(order.length, MAX_INSTANCES)

    // Front-hemisphere cull: only draw aircraft on the visible cap facing the
    // camera. A surface point u is visible when u·camDir > GLOBE_RADIUS/dist.
    _camDir.copy(state.camera.position)
    const camDist = _camDir.length() || 1
    _camDir.normalize()
    const frontThreshold = GLOBE_RADIUS / camDist - 0.02

    for (let i = 0; i < count; i++) {
      const e = statesRef.current.get(order[i])
      if (!e) continue
      const elapsed = now - e.fixTime
      const pred = deadReckon(e.baseLat, e.baseLon, e.vel, e.track, elapsed)
      const radius = altitudeToRadius(e.alt)

      latLonToVector3(pred.lat, pred.lon, radius, _target)
      e.dispVec.lerp(_target, 0.2)

      const isSelected = order[i] === selectedId
      const facing = e.dispVec.dot(_camDir) / e.dispVec.length()
      if (facing < frontThreshold && !isSelected) {
        // Behind the globe from the viewer — hide this instance.
        _dummy.position.copy(e.dispVec)
        _dummy.quaternion.identity()
        _dummy.scale.setScalar(0)
        _dummy.updateMatrix()
        mesh.setMatrixAt(i, _dummy.matrix)
        continue
      }

      // Heading: vector toward a point ~1 km ahead along the track.
      const a = deadReckon(pred.lat, pred.lon, 1000, e.track, 1)
      latLonToVector3(a.lat, a.lon, radius, _ahead)

      _up.copy(e.dispVec).normalize()
      _forward.copy(_ahead).sub(e.dispVec).normalize()
      _right.crossVectors(_forward, _up).normalize()
      _forward.crossVectors(_up, _right).normalize()
      _basis.makeBasis(_right, _up, _forward)

      _dummy.position.copy(e.dispVec)
      _dummy.quaternion.setFromRotationMatrix(_basis)
      _dummy.scale.setScalar(isSelected ? 2.4 : 1)
      _dummy.updateMatrix()
      mesh.setMatrixAt(i, _dummy.matrix)

      if (isSelected) {
        _color.copy(COLOR_SELECTED)
      } else {
        const t = Math.min(1, e.alt / 12000)
        _color.copy(COLOR_LOW).lerp(COLOR_HIGH, t)
      }
      mesh.setColorAt(i, _color)
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  })

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.instanceId == null) return
    e.stopPropagation()
    const icao = orderRef.current[e.instanceId]
    if (icao) setSelectedFlight(icao)
  }

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, undefined, MAX_INSTANCES]}
      frustumCulled={false}
      onClick={onClick}
    >
      <meshBasicMaterial toneMapped={false} />
    </instancedMesh>
  )
}
