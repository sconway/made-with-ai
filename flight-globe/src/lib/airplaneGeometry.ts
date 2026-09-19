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
    g.deleteAttribute('uv')
    g.deleteAttribute('normal')
    parts.push(g)
  }

  {
    const g = new THREE.CylinderGeometry(0.00205, 0.00245, 0.0165, 6, 1)
    g.rotateX(Math.PI / 2)
    g.translate(0, 0, -0.0005)
    push(g)
  }

  {
    const g = new THREE.ConeGeometry(0.00205, 0.0048, 6)
    g.rotateX(Math.PI / 2)
    g.translate(0, 0, 0.0104)
    push(g)
  }

  {
    const g = new THREE.ConeGeometry(0.00245, 0.0042, 6)
    g.rotateX(-Math.PI / 2)
    g.translate(0, 0, -0.0108)
    push(g)
  }

  {
    const g = new THREE.BoxGeometry(0.028, 0.00055, 0.0062)
    g.translate(0, -0.00035, -0.0008)
    push(g)
  }

  {
    const g = new THREE.BoxGeometry(0.008, 0.0009, 0.005)
    g.translate(0, -0.0002, -0.0006)
    push(g)
  }

  {
    const g = new THREE.BoxGeometry(0.01, 0.0004, 0.003)
    g.translate(0, 0.0006, -0.0115)
    push(g)
  }

  {
    const g = new THREE.BoxGeometry(0.00045, 0.0042, 0.0036)
    g.translate(0, 0.0025, -0.0112)
    push(g)
  }

  for (const side of [-1, 1] as const) {
    const g = new THREE.CylinderGeometry(0.00115, 0.00135, 0.0055, 5, 1)
    g.rotateX(Math.PI / 2)
    g.translate(side * 0.0065, -0.00155, 0.0006)
    push(g)
  }

  const merged = mergeGeometries(parts, false)
  for (const g of parts) g.dispose()
  if (!merged) {
    const fallback = new THREE.ConeGeometry(0.006, 0.022, 5)
    fallback.rotateX(Math.PI / 2)
    return fallback
  }

  merged.computeBoundingSphere()
  merged.computeBoundingBox()
  return merged
}

type XZ = { x: number; z: number }

/** Closed top-down airliner silhouette, +Z nose, +X right. */
function airplaneSilhouette(): XZ[] {
  const right: XZ[] = [
    { x: 0, z: 0.0116 },
    { x: 0.0011, z: 0.0074 },
    { x: 0.00125, z: 0.0026 },
    { x: 0.0128, z: 0.0006 },
    { x: 0.0136, z: -0.0014 },
    { x: 0.0116, z: -0.0028 },
    { x: 0.0013, z: -0.0014 },
    { x: 0.00115, z: -0.0062 },
    { x: 0.005, z: -0.0086 },
    { x: 0.0044, z: -0.0102 },
    { x: 0.0007, z: -0.0092 },
    { x: 0, z: -0.0108 },
  ]
  const left = right
    .slice(1, -1)
    .reverse()
    .map((p) => ({ x: -p.x, z: p.z }))
  return [...right, ...left]
}

/**
 * Solid stroke along a closed XZ path — the outer outline only, no internals.
 */
function strokeLoopXZ(points: XZ[], width: number): THREE.BufferGeometry {
  const hw = width * 0.5
  const n = points.length
  const positions: number[] = []

  const segment = (i: number): XZ => {
    const a = points[i]!
    const b = points[(i + 1) % n]!
    const dx = b.x - a.x
    const dz = b.z - a.z
    const len = Math.hypot(dx, dz) || 1
    return { x: dx / len, z: dz / len }
  }

  const leftNormal = (i: number): XZ => {
    const d = segment(i)
    return { x: -d.z, z: d.x }
  }

  const miter = (i: number): XZ => {
    const prev = leftNormal((i - 1 + n) % n)
    const next = leftNormal(i)
    let mx = prev.x + next.x
    let mz = prev.z + next.z
    const mlen = Math.hypot(mx, mz)
    if (mlen < 1e-6) return { x: next.x * hw, z: next.z * hw }
    mx /= mlen
    mz /= mlen
    const align = mx * next.x + mz * next.z
    const scale = Math.min(hw * 3.2, hw / Math.max(0.28, Math.abs(align)))
    return { x: mx * scale, z: mz * scale }
  }

  for (let i = 0; i < n; i++) {
    const a = points[i]!
    const b = points[(i + 1) % n]!
    const oa = miter(i)
    const ob = miter((i + 1) % n)
    positions.push(
      a.x + oa.x, 0, a.z + oa.z,
      b.x + ob.x, 0, b.z + ob.z,
      a.x - oa.x, 0, a.z - oa.z,
      a.x - oa.x, 0, a.z - oa.z,
      b.x + ob.x, 0, b.z + ob.z,
      b.x - ob.x, 0, b.z - ob.z,
    )
  }

  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  g.computeVertexNormals()
  g.computeBoundingSphere()
  g.computeBoundingBox()
  return g
}

/**
 * Outer airliner silhouette as a glowing stroke (no fill, no internal edges).
 * Lies in XZ so the flight basis (+Y up) shows it face-on.
 */
export function createAirplaneOutlineGeometry(): THREE.BufferGeometry {
  return strokeLoopXZ(airplaneSilhouette(), 0.00115)
}

/** Dark rim just outside the bright stroke so nearby planes stay separable. */
export function createAirplaneGlowGeometry(): THREE.BufferGeometry {
  return strokeLoopXZ(airplaneSilhouette(), 0.00235)
}

/**
 * Flat top-down chevron for the 2D country map. Lies in XZ (nose +Z) so the
 * existing flight basis (+Y toward camera) shows it face-on.
 */
export function createMapPlaneGeometry(): THREE.BufferGeometry {
  const nose = 0.0062
  const tail = -0.0044
  const half = 0.0038
  const g = new THREE.BufferGeometry()
  g.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(
      [0, 0, nose, -half, 0, tail, half, 0, tail],
      3,
    ),
  )
  g.computeVertexNormals()
  g.computeBoundingSphere()
  return g
}

/** Soft circular sprite used as a point-light halo behind each plane. */
export function createPlaneBloomGeometry(): THREE.BufferGeometry {
  const g = new THREE.PlaneGeometry(0.042, 0.042)
  g.rotateX(-Math.PI / 2)
  return g
}

export function createPlaneBloomTexture(): THREE.CanvasTexture {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.CanvasTexture(canvas)
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2,
  )
  grad.addColorStop(0, 'rgba(255,255,255,0.95)')
  grad.addColorStop(0.28, 'rgba(255,255,255,0.42)')
  grad.addColorStop(0.62, 'rgba(255,255,255,0.12)')
  grad.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.needsUpdate = true
  return tex
}
