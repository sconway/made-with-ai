import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { useStore } from '../store/useStore'
import { altitudeToRadius } from '../lib/geo'
import { getMapEase, getMapFrame, projectPosition } from '../lib/mapView'
import { setLineSegmentPositions } from '../lib/lineSegments'

const _a = new THREE.Vector3()
const _b = new THREE.Vector3()
const _positions: number[] = []

/** Stored past flight picked in the flight panel's "Recent flights" list. */
export function HistoryTrack() {
  const size = useThree((s) => s.size)
  const track = useStore((s) => s.historyTrack)
  const mapEpoch = useStore((s) => s.mapEpoch)

  const mat = useMemo(
    () =>
      new LineMaterial({
        color: '#c9a7ff',
        linewidth: 2.2,
        transparent: true,
        opacity: 0.9,
        depthTest: true,
        depthWrite: false,
        toneMapped: false,
      }),
    [],
  )
  const { geom, line } = useMemo(() => {
    const geom = new LineSegmentsGeometry()
    geom.setPositions([0, 0, 0, 0, 0.01, 0])
    const line = new LineSegments2(geom, mat)
    line.renderOrder = 20
    line.frustumCulled = false
    line.visible = false
    return { geom, line }
  }, [mat])

  useEffect(
    () => () => {
      geom.dispose()
      mat.dispose()
    },
    [geom, mat],
  )

  const builtFor = useRef<{ track: unknown; ease: number; frame: unknown; epoch: number }>({
    track: null,
    ease: -1,
    frame: null,
    epoch: -1,
  })

  useFrame(() => {
    mat.resolution.set(size.width, size.height)
    const ease = getMapEase()
    const frame = getMapFrame()
    const b = builtFor.current
    if (
      b.track === track &&
      Math.abs(b.ease - ease) < 0.002 &&
      b.frame === frame &&
      b.epoch === mapEpoch
    ) {
      return
    }
    builtFor.current = { track, ease, frame, epoch: mapEpoch }

    const pts = track?.points
    if (!pts || pts.length < 2) {
      line.visible = false
      return
    }
    _positions.length = 0
    for (let i = 1; i < pts.length; i++) {
      const p0 = pts[i - 1]!
      const p1 = pts[i]!
      projectPosition(p0[1], p0[2], altitudeToRadius(p0[3]), _a)
      projectPosition(p1[1], p1[2], altitudeToRadius(p1[3]), _b)
      _positions.push(_a.x, _a.y, _a.z, _b.x, _b.y, _b.z)
    }
    setLineSegmentPositions(geom, _positions)
    line.visible = true
  })

  return <primitive object={line} />
}
