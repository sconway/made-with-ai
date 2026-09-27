import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import type { AirportSize } from './airports'

const RUNWAY = new THREE.Color('#2c3340')
const APRON = new THREE.Color('#5c6775')
const TERMINAL = new THREE.Color('#c3cedb')
const ROOF = new THREE.Color('#dbe3ed')
const TOWER = new THREE.Color('#b7c2d0')
const CAB = new THREE.Color('#ffd48a')

function paint(g: THREE.BufferGeometry, color: THREE.Color): void {
  const count = g.getAttribute('position')?.count ?? 0
  const colors = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  g.deleteAttribute('uv')
  g.deleteAttribute('normal')
}

function box(
  w: number,
  h: number,
  d: number,
  x: number,
  y: number,
  z: number,
  color: THREE.Color,
): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d)
  g.translate(x, y, z)
  paint(g, color)
  return g
}

function cyl(
  radiusTop: number,
  radiusBottom: number,
  height: number,
  x: number,
  y: number,
  z: number,
  color: THREE.Color,
  segments = 6,
): THREE.BufferGeometry {
  const g = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments, 1)
  g.translate(x, y, z)
  paint(g, color)
  return g
}

function mergeParts(parts: THREE.BufferGeometry[]): THREE.BufferGeometry {
  const merged = mergeGeometries(parts, false)
  for (const g of parts) g.dispose()
  if (!merged) {
    const fallback = new THREE.BoxGeometry(0.008, 0.003, 0.008)
    fallback.translate(0, 0.0015, 0)
    paint(fallback, TERMINAL)
    fallback.computeVertexNormals()
    return fallback
  }
  merged.computeVertexNormals()
  merged.computeBoundingSphere()
  merged.computeBoundingBox()
  return merged
}

/**
 * Compact beacon. A round pad and a control tower stay inside a tight
 * footprint so neighboring fields don't cover each other the way the old
 * runway crosses did. `size` is 1 for a large airport.
 */
function beacon(size: number): THREE.BufferGeometry {
  const parts: THREE.BufferGeometry[] = []
  const pad = 0.00215 * size
  parts.push(cyl(pad, pad, 0.00045, 0, 0.00022, 0, APRON, 10))
  parts.push(box(0.0004 * size, 0.00018, pad * 1.35, 0, 0.00048, 0, RUNWAY))
  parts.push(
    box(pad * 0.95, 0.00115 * size, pad * 0.72, 0, 0.00075 * size, pad * 0.28, TERMINAL),
  )
  parts.push(
    box(pad * 0.72, 0.00028 * size, pad * 0.5, 0, 0.0014 * size, pad * 0.28, ROOF),
  )
  const towerH = 0.011 * size
  parts.push(cyl(0.00028 * size, 0.0004 * size, towerH, 0, towerH * 0.5 + 0.0003, 0, TOWER, 6))
  const cabH = 0.00135 * size
  const cabY = towerH + 0.0003 + cabH * 0.5
  parts.push(cyl(0.00095 * size, 0.0008 * size, cabH, 0, cabY, 0, CAB, 8))
  return mergeParts(parts)
}

/** Distant marker — rounder than the old 4-sided pyramid so it doesn’t read as a square. */
export function createAirportPinGeometry(): THREE.BufferGeometry {
  const g = new THREE.ConeGeometry(0.0055, 0.015, 8)
  g.translate(0, 0.0075, 0)
  return g
}

/**
 * Close-zoom airport glyph: pad, short runway, and a control tower.
 * Local Y is up so the existing surface-normal orientation still works.
 */
export function createAirportBuildingGeometry(
  size: AirportSize,
): THREE.BufferGeometry {
  if (size === 'large') return beacon(1)
  if (size === 'medium') return beacon(0.84)
  return beacon(0.68)
}

/**
 * Hover and click volume. Wider than the beacon, but only as tall as the
 * pad so the target stays on the ground instead of up the tower.
 */
export function createAirportPickGeometry(): THREE.BufferGeometry {
  const radius = 0.018
  const height = 0.0045
  const g = new THREE.CylinderGeometry(radius, radius, height, 8)
  g.translate(0, height * 0.5, 0)
  g.computeBoundingSphere()
  return g
}

/** Stable yaw so neighboring fields don’t all face the same way. */
export function airportYawFromIata(iata: string): number {
  let n = 0
  for (let i = 0; i < iata.length; i++) n = (n * 33) ^ iata.charCodeAt(i)
  return ((n >>> 0) % 157) * (Math.PI / 180)
}

/**
 * Zoom at which pins become terminal models.
 * Globe: camera distance from the center. Map: height above the surface.
 * Smaller means closer.
 */
export const AIRPORT_BUILDING_ZOOM = 1.5

export function airportShouldShowBuilding(zoom: number): boolean {
  return zoom <= AIRPORT_BUILDING_ZOOM
}
