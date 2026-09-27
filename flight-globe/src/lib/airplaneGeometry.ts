import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { AircraftFamily } from './aircraftFamily'

type Engine = { x: number; y: number; z: number; r: number; len: number }

interface BodySpec {
  fuseRt: number
  fuseRb: number
  fuseLen: number
  nose: number
  tailcone: number
  segs: number
  wingSpan: number
  wingChord: number
  wingThick: number
  wingZ: number
  wingY: number
  stabSpan: number
  stabChord: number
  stabY: number
  stabZ: number
  finH: number
  finC: number
  finZ: number
  engines: Engine[]
  hump?: { z: number; y: number; r: number; len: number }
  rotor?: { r: number; y: number }
  tailRotor?: { x: number; y: number; z: number; r: number }
  prop?: { z: number; r: number }
}

const SPECS: Record<AircraftFamily, BodySpec> = {
  narrow: {
    fuseRt: 0.00205,
    fuseRb: 0.00245,
    fuseLen: 0.0165,
    nose: 0.0048,
    tailcone: 0.0042,
    segs: 10,
    wingSpan: 0.028,
    wingChord: 0.0062,
    wingThick: 0.00055,
    wingZ: -0.0008,
    wingY: -0.00035,
    stabSpan: 0.01,
    stabChord: 0.003,
    stabY: 0.0006,
    stabZ: -0.0115,
    finH: 0.0042,
    finC: 0.0036,
    finZ: -0.0112,
    engines: [
      { x: -0.0065, y: -0.00155, z: 0.0006, r: 0.00125, len: 0.0055 },
      { x: 0.0065, y: -0.00155, z: 0.0006, r: 0.00125, len: 0.0055 },
    ],
  },
  wide: {
    fuseRt: 0.0027,
    fuseRb: 0.00315,
    fuseLen: 0.021,
    nose: 0.0054,
    tailcone: 0.005,
    segs: 10,
    wingSpan: 0.036,
    wingChord: 0.0074,
    wingThick: 0.0007,
    wingZ: -0.0012,
    wingY: -0.0004,
    stabSpan: 0.013,
    stabChord: 0.0036,
    stabY: 0.0007,
    stabZ: -0.0142,
    finH: 0.0052,
    finC: 0.0042,
    finZ: -0.0138,
    engines: [
      { x: -0.0084, y: -0.0017, z: 0.0004, r: 0.0017, len: 0.0066 },
      { x: 0.0084, y: -0.0017, z: 0.0004, r: 0.0017, len: 0.0066 },
    ],
  },
  jumbo: {
    fuseRt: 0.003,
    fuseRb: 0.0034,
    fuseLen: 0.0225,
    nose: 0.0052,
    tailcone: 0.0052,
    segs: 10,
    wingSpan: 0.04,
    wingChord: 0.008,
    wingThick: 0.00075,
    wingZ: -0.0014,
    wingY: -0.00045,
    stabSpan: 0.014,
    stabChord: 0.0038,
    stabY: 0.0008,
    stabZ: -0.015,
    finH: 0.0058,
    finC: 0.0044,
    finZ: -0.0146,
    engines: [
      { x: -0.0062, y: -0.00175, z: 0.0008, r: 0.00145, len: 0.0058 },
      { x: 0.0062, y: -0.00175, z: 0.0008, r: 0.00145, len: 0.0058 },
      { x: -0.0118, y: -0.00155, z: -0.0006, r: 0.00135, len: 0.0054 },
      { x: 0.0118, y: -0.00155, z: -0.0006, r: 0.00135, len: 0.0054 },
    ],
    hump: { z: 0.0048, y: 0.0024, r: 0.00205, len: 0.009 },
  },
  regional: {
    fuseRt: 0.0017,
    fuseRb: 0.00195,
    fuseLen: 0.0135,
    nose: 0.0036,
    tailcone: 0.0034,
    segs: 8,
    wingSpan: 0.022,
    wingChord: 0.005,
    wingThick: 0.00045,
    wingZ: -0.0006,
    wingY: -0.00015,
    stabSpan: 0.009,
    stabChord: 0.0028,
    stabY: 0.0034,
    stabZ: -0.0096,
    finH: 0.004,
    finC: 0.0032,
    finZ: -0.0094,
    engines: [
      { x: -0.0024, y: 0.00015, z: -0.0068, r: 0.00105, len: 0.0044 },
      { x: 0.0024, y: 0.00015, z: -0.0068, r: 0.00105, len: 0.0044 },
    ],
  },
  turbo: {
    fuseRt: 0.00165,
    fuseRb: 0.0019,
    fuseLen: 0.0128,
    nose: 0.0034,
    tailcone: 0.0032,
    segs: 8,
    wingSpan: 0.024,
    wingChord: 0.0046,
    wingThick: 0.00042,
    wingZ: -0.0004,
    wingY: 0.00155,
    stabSpan: 0.0085,
    stabChord: 0.0026,
    stabY: 0.0012,
    stabZ: -0.0092,
    finH: 0.0038,
    finC: 0.003,
    finZ: -0.009,
    engines: [
      { x: -0.0072, y: 0.00115, z: 0.0004, r: 0.00095, len: 0.0036 },
      { x: 0.0072, y: 0.00115, z: 0.0004, r: 0.00095, len: 0.0036 },
    ],
  },
  bizjet: {
    fuseRt: 0.00155,
    fuseRb: 0.00175,
    fuseLen: 0.0122,
    nose: 0.0038,
    tailcone: 0.0032,
    segs: 8,
    wingSpan: 0.02,
    wingChord: 0.0044,
    wingThick: 0.00038,
    wingZ: -0.001,
    wingY: -0.0002,
    stabSpan: 0.0076,
    stabChord: 0.0024,
    stabY: 0.0028,
    stabZ: -0.0088,
    finH: 0.0036,
    finC: 0.0028,
    finZ: -0.0086,
    engines: [
      { x: -0.00215, y: 0.0002, z: -0.0062, r: 0.0009, len: 0.0038 },
      { x: 0.00215, y: 0.0002, z: -0.0062, r: 0.0009, len: 0.0038 },
    ],
  },
  ga: {
    fuseRt: 0.00135,
    fuseRb: 0.00155,
    fuseLen: 0.0084,
    nose: 0.0026,
    tailcone: 0.0024,
    segs: 7,
    wingSpan: 0.018,
    wingChord: 0.0038,
    wingThick: 0.00032,
    wingZ: -0.0002,
    wingY: 0.00135,
    stabSpan: 0.0064,
    stabChord: 0.0022,
    stabY: 0.0004,
    stabZ: -0.0062,
    finH: 0.0028,
    finC: 0.0024,
    finZ: -0.006,
    engines: [],
    prop: { z: 0.0066, r: 0.0022 },
  },
  helo: {
    fuseRt: 0.0017,
    fuseRb: 0.0021,
    fuseLen: 0.0072,
    nose: 0.0028,
    tailcone: 0.0022,
    segs: 8,
    wingSpan: 0.0042,
    wingChord: 0.0024,
    wingThick: 0.0003,
    wingZ: -0.0004,
    wingY: -0.0016,
    stabSpan: 0.0032,
    stabChord: 0.0016,
    stabY: 0.0006,
    stabZ: -0.0088,
    finH: 0.0022,
    finC: 0.0018,
    finZ: -0.0086,
    engines: [],
    rotor: { r: 0.0115, y: 0.0036 },
    tailRotor: { x: 0.0016, y: 0.0018, z: -0.0092, r: 0.0024 },
  },
}

function alongZ(g: THREE.BufferGeometry): THREE.BufferGeometry {
  g.rotateX(Math.PI / 2)
  return g
}

function mergeParts(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const merged = mergeGeometries(parts, false)
  for (const g of parts) g.dispose()
  if (!merged) {
    const fallback = new THREE.ConeGeometry(0.006, 0.022, 5)
    fallback.rotateX(Math.PI / 2)
    return fallback
  }
  merged.computeVertexNormals()
  merged.computeBoundingSphere()
  merged.computeBoundingBox()
  return merged
}

/**
 * Low-poly aircraft for InstancedMesh. Local axes: +Z nose, +Y up, +X right.
 */
export function createAirplaneGeometry(
  family: AircraftFamily = 'narrow',
): THREE.BufferGeometry {
  const s = SPECS[family]
  const parts: THREE.BufferGeometry[] = []
  const push = (g: THREE.BufferGeometry) => {
    g.deleteAttribute('uv')
    g.deleteAttribute('normal')
    parts.push(g)
  }

  {
    const g = alongZ(new THREE.CylinderGeometry(s.fuseRt, s.fuseRb, s.fuseLen, s.segs, 1))
    g.translate(0, 0, -0.0004)
    push(g)
  }
  {
    const g = alongZ(new THREE.ConeGeometry(s.fuseRt, s.nose, s.segs))
    g.translate(0, 0, s.fuseLen * 0.5 + s.nose * 0.28)
    push(g)
  }
  {
    const g = new THREE.ConeGeometry(s.fuseRb, s.tailcone, s.segs)
    g.rotateX(-Math.PI / 2)
    g.translate(0, 0, -s.fuseLen * 0.5 - s.tailcone * 0.22)
    push(g)
  }
  {
    const g = new THREE.BoxGeometry(s.wingSpan, s.wingThick, s.wingChord)
    g.translate(0, s.wingY, s.wingZ)
    push(g)
  }
  {
    const g = new THREE.BoxGeometry(s.stabSpan, s.wingThick * 0.8, s.stabChord)
    g.translate(0, s.stabY, s.stabZ)
    push(g)
  }
  {
    const g = new THREE.BoxGeometry(s.wingThick * 0.9, s.finH, s.finC)
    g.translate(0, s.finH * 0.52, s.finZ)
    push(g)
  }
  for (const e of s.engines) {
    const g = alongZ(new THREE.CylinderGeometry(e.r * 0.85, e.r, e.len, 6, 1))
    g.translate(e.x, e.y, e.z)
    push(g)
    if (family === 'turbo') {
      const prop = alongZ(new THREE.CylinderGeometry(e.r * 2.6, e.r * 2.6, 0.00016, 10, 1))
      prop.translate(e.x, e.y, e.z + e.len * 0.52)
      push(prop)
    }
  }
  if (s.hump) {
    const g = alongZ(
      new THREE.CylinderGeometry(s.hump.r * 0.85, s.hump.r, s.hump.len, 8, 1),
    )
    g.translate(0, s.hump.y, s.hump.z)
    push(g)
  }
  if (s.rotor) {
    const disc = new THREE.CylinderGeometry(s.rotor.r, s.rotor.r, 0.00022, 16, 1)
    disc.translate(0, s.rotor.y, 0)
    push(disc)
    const mast = new THREE.CylinderGeometry(0.00028, 0.00028, s.rotor.y, 5, 1)
    mast.translate(0, s.rotor.y * 0.5, 0)
    push(mast)
    const boom = alongZ(new THREE.CylinderGeometry(0.00045, 0.0007, 0.0078, 5, 1))
    boom.translate(0, 0.0004, -0.0064)
    push(boom)
  }
  if (s.tailRotor) {
    const g = new THREE.CylinderGeometry(s.tailRotor.r, s.tailRotor.r, 0.00018, 10, 1)
    g.rotateZ(Math.PI / 2)
    g.translate(s.tailRotor.x, s.tailRotor.y, s.tailRotor.z)
    push(g)
  }
  if (s.prop) {
    const g = alongZ(new THREE.CylinderGeometry(s.prop.r, s.prop.r, 0.00018, 12, 1))
    g.translate(0, 0, s.prop.z)
    push(g)
  }

  return mergeParts(parts)
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

function vertexMiters(points: XZ[], hw: number): XZ[] {
  const n = points.length
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
  const out: XZ[] = []
  for (let i = 0; i < n; i++) {
    const prev = leftNormal((i - 1 + n) % n)
    const next = leftNormal(i)
    let mx = prev.x + next.x
    let mz = prev.z + next.z
    const mlen = Math.hypot(mx, mz)
    if (mlen < 1e-6) {
      out.push({ x: next.x * hw, z: next.z * hw })
      continue
    }
    mx /= mlen
    mz /= mlen
    const align = mx * next.x + mz * next.z
    const scale = Math.min(hw * 3.2, hw / Math.max(0.28, Math.abs(align)))
    out.push({ x: mx * scale, z: mz * scale })
  }
  return out
}

function expandLoopXZ(points: XZ[], dist: number): XZ[] {
  const miters = vertexMiters(points, dist)
  return points.map((p, i) => ({
    x: p.x + miters[i]!.x,
    z: p.z + miters[i]!.z,
  }))
}

function triangleGeometry(points: XZ[]): THREE.BufferGeometry {
  const [a, b, c] = points
  const g = new THREE.BufferGeometry()
  g.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(
      [a!.x, 0, a!.z, b!.x, 0, b!.z, c!.x, 0, c!.z],
      3,
    ),
  )
  g.computeVertexNormals()
  g.computeBoundingSphere()
  return g
}

/**
 * Solid stroke along a closed XZ path — the outer outline only, no internals.
 */
function strokeLoopXZ(points: XZ[], width: number): THREE.BufferGeometry {
  const hw = width * 0.5
  const n = points.length
  const miters = vertexMiters(points, hw)
  const positions: number[] = []

  for (let i = 0; i < n; i++) {
    const a = points[i]!
    const b = points[(i + 1) % n]!
    const oa = miters[i]!
    const ob = miters[(i + 1) % n]!
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
  return strokeLoopXZ(airplaneSilhouette(), 0.0017)
}

/** Dark rim just outside the bright stroke so nearby planes stay separable. */
export function createAirplaneGlowGeometry(): THREE.BufferGeometry {
  return strokeLoopXZ(airplaneSilhouette(), 0.0034)
}

const MAP_CHEVRON: XZ[] = [
  { x: 0, z: 0.0062 },
  { x: -0.0038, z: -0.0044 },
  { x: 0.0038, z: -0.0044 },
]

/**
 * Flat top-down chevron for the 2D country map. Lies in XZ (nose +Z) so the
 * existing flight basis (+Y toward camera) shows it face-on.
 */
export function createMapPlaneGeometry(): THREE.BufferGeometry {
  return triangleGeometry(MAP_CHEVRON)
}

/** Larger solid chevron drawn behind the fill — a fat black frame, not a 1px stroke. */
export function createMapPlaneOutlineGeometry(): THREE.BufferGeometry {
  return triangleGeometry(expandLoopXZ(MAP_CHEVRON, 0.0044))
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
