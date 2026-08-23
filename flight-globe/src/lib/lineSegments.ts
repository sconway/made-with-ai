import type { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'

type GeomWithMax = LineSegmentsGeometry & { _maxInstanceCount?: number }

/**
 * Update fat-line segment positions and keep the instance draw count in sync.
 *
 * three.js WebGLBindingStates sets `_maxInstanceCount` on first bind and never
 * revisits it when `setPositions` grows or shrinks the buffer — so a second
 * pinned path (or a longer trail) silently stops drawing past the first size.
 */
export function setLineSegmentPositions(
  geom: LineSegmentsGeometry,
  positions: ArrayLike<number>,
): void {
  geom.setPositions(positions as number[] | Float32Array)
  const count = Math.floor(positions.length / 6)
  geom.instanceCount = count
  ;(geom as GeomWithMax)._maxInstanceCount = count
}
