import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

/**
 * Low-poly airliner glyph for InstancedMesh.
 * Local axes match the flight orientation basis: +Z nose, +Y up, +X right.
 * Triangle count stays tiny (~120) so tens of thousands of instances stay cheap.
 */
export function createAirplaneGeometry(): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = []

  const push = (g: THREE.BufferGeometry) => {
    // Drop unused attrs so merges stay lean (instance colors replace materials).
    g.deleteAttribute('uv')
    g.deleteAttribute('normal')
    parts.push(g)
  }

  // Fuselage — elongated tube along +Z.
  {
    const g = new THREE.CylinderGeometry(0.00205, 0.00245, 0.0165, 6, 1)
    g.rotateX(Math.PI / 2)
    g.translate(0, 0, -0.0005)
    push(g)
  }

  // Nose.
  {
    const g = new THREE.ConeGeometry(0.00205, 0.0048, 6)
    g.rotateX(Math.PI / 2)
    g.translate(0, 0, 0.0104)
    push(g)
  }

  // Tail cone.
  {
    const g = new THREE.ConeGeometry(0.00245, 0.0042, 6)
    g.rotateX(-Math.PI / 2)
    g.translate(0, 0, -0.0108)
    push(g)
  }

  // Main wing.
  {
    const g = new THREE.BoxGeometry(0.028, 0.00055, 0.0062)
    g.translate(0, -0.00035, -0.0008)
    push(g)
  }

  // Wing root fairing (slightly thicker center).
  {
    const g = new THREE.BoxGeometry(0.008, 0.0009, 0.005)
    g.translate(0, -0.0002, -0.0006)
    push(g)
  }

  // Horizontal stabilizer.
  {
    const g = new THREE.BoxGeometry(0.01, 0.0004, 0.003)
    g.translate(0, 0.0006, -0.0115)
    push(g)
  }

  // Vertical stabilizer.
  {
    const g = new THREE.BoxGeometry(0.00045, 0.0042, 0.0036)
    g.translate(0, 0.0025, -0.0112)
    push(g)
  }

  // Engine pods (under each wing).
  for (const side of [-1, 1] as const) {
    const g = new THREE.CylinderGeometry(0.00115, 0.00135, 0.0055, 5, 1)
    g.rotateX(Math.PI / 2)
    g.translate(side * 0.0065, -0.00155, 0.0006)
    push(g)
  }

  const merged = mergeGeometries(parts, false)
  for (const g of parts) g.dispose()
  if (!merged) {
    // Should never happen with the primitives above; keep a fallback glyph.
    const fallback = new THREE.ConeGeometry(0.006, 0.022, 5)
    fallback.rotateX(Math.PI / 2)
    return fallback
  }

  merged.computeBoundingSphere()
  merged.computeBoundingBox()
  return merged
}
