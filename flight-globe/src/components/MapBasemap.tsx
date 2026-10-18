import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import {
  acquireTileTexture,
  tileGeometry,
  tileKey,
  TILE_ZOOM_MAX,
  tileZoomFloat,
  tilesInWindow,
  trimTileTextures,
  visibleMapWindow,
} from '../lib/mapTiles'
import {
  applyMapGroupTransform,
  getMapEase,
  getMapFrame,
  type MapFrame,
} from '../lib/mapView'
import { useStore } from '../store/useStore'

type TileMesh = {
  mesh: THREE.Mesh
  z: number
}

/**
 * Street basemap on the country / 2D tangent plane. Zoom picks a coarser or
 * finer slippy-map level; planes, weather, and airports draw above it.
 */
export function MapBasemap() {
  const mapOn = useStore((s) => Boolean(s.selectedCountry || s.flatMap))
  const groupRef = useRef<THREE.Group>(null)
  const tiles = useRef(new Map<string, TileMesh>())
  const zoomHold = useRef<number | null>(null)
  const frameKey = useRef('')

  useEffect(() => {
    const live = tiles.current
    return () => {
      for (const rec of live.values()) disposeTile(rec.mesh)
      live.clear()
    }
  }, [])

  useFrame(({ camera, size }) => {
    const group = groupRef.current
    const map = getMapFrame()
    const ease = getMapEase()
    if (!group || !mapOn || !map || ease < 0.82) {
      if (group) group.visible = false
      if (!mapOn || !map) {
        dropAll(tiles.current)
        zoomHold.current = null
        frameKey.current = ''
      }
      return
    }

    applyMapGroupTransform(group, map)
    group.visible = true
    const fade = THREE.MathUtils.smoothstep(ease, 0.84, 0.98)
    const key = `${map.lon0.toFixed(3)}:${map.lat0.toFixed(3)}`
    if (key !== frameKey.current) {
      dropAll(tiles.current)
      frameKey.current = key
      zoomHold.current = null
    }

    const fov = camera instanceof THREE.PerspectiveCamera ? camera.fov : 45
    const view = visibleMapWindow(camera.position, map, size.width, size.height, fov)
    const ideal = THREE.MathUtils.clamp(
      tileZoomFloat(view.height, view.centerLat, size.height, fov),
      3,
      TILE_ZOOM_MAX,
    )
    let z = zoomHold.current
    if (z == null || Math.abs(ideal - z) >= 0.7) {
      z = THREE.MathUtils.clamp(Math.round(ideal), 3, TILE_ZOOM_MAX)
      let level = tilesInWindow(view, z)
      while ((level === null || level.length > 48) && z > 3) {
        z -= 1
        level = tilesInWindow(view, z)
      }
      zoomHold.current = z
    }

    const want = new Set<string>()
    const levels = z > 3 ? [z - 1, z] : [z]
    for (const level of levels) {
      const covered = tilesInWindow(view, level)
      if (!covered) continue
      for (const tile of covered) want.add(tileKey(level, tile.x, tile.y))
    }
    if (want.size > 80) {
      for (const key of [...want]) {
        if (!key.startsWith(`${z}/`)) want.delete(key)
      }
    }

    syncTiles(group, tiles.current, map, want, z, fade)
    trimTileTextures(want)
  })

  return <group ref={groupRef} />
}

/**
 * OpenStreetMap tiles are light. Invert lightness while keeping hue (CSS
 * `invert(1) hue-rotate(180deg)`), then tint toward the app's navy so the
 * plane and airport colors, picked for a dark globe, still stand out.
 */
const DARK_TILE_GLSL = /* glsl */ `
  #include <map_fragment>
  {
    vec3 s = pow(max(diffuseColor.rgb, vec3(0.0)), vec3(1.0 / 2.2));
    s = 1.0 - s;
    s = clamp(mat3(
      -0.574, 0.426, 0.426,
       1.430, 0.430, 1.430,
       0.144, 0.144, -0.856
    ) * s, 0.0, 1.0);
    s = mix(vec3(0.035, 0.07, 0.13), vec3(0.62, 0.72, 0.86), s * 0.82);
    diffuseColor.rgb = pow(s, vec3(2.2));
  }
`

function darkenTiles(shader: { fragmentShader: string }): void {
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <map_fragment>',
    DARK_TILE_GLSL,
  )
}

function disposeTile(mesh: THREE.Mesh): void {
  mesh.geometry.dispose()
  const mat = mesh.material
  if (mat && !Array.isArray(mat)) mat.dispose()
}

function dropAll(live: Map<string, TileMesh>): void {
  for (const rec of live.values()) {
    rec.mesh.removeFromParent()
    disposeTile(rec.mesh)
  }
  live.clear()
}

function syncTiles(
  group: THREE.Group,
  live: Map<string, TileMesh>,
  map: MapFrame,
  want: Set<string>,
  detailZ: number,
  fade: number,
): void {
  for (const [key, rec] of live) {
    if (want.has(key)) continue
    rec.mesh.removeFromParent()
    disposeTile(rec.mesh)
    live.delete(key)
  }

  for (const key of want) {
    const [zs, xs, ys] = key.split('/')
    const z = Number(zs)
    const x = Number(xs)
    const y = Number(ys)
    let rec = live.get(key)
    if (!rec) {
      const tex = acquireTileTexture(z, x, y)
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
        opacity: 0,
      })
      mat.onBeforeCompile = darkenTiles
      mat.customProgramCacheKey = () => 'map-tile-dark'
      const mesh = new THREE.Mesh(tileGeometry(map, z, x, y), mat)
      mesh.renderOrder = z === detailZ ? 2.2 : 2
      mesh.frustumCulled = false
      mesh.raycast = () => {}
      group.add(mesh)
      rec = { mesh, z }
      live.set(key, rec)
    }
    const mat = rec.mesh.material as THREE.MeshBasicMaterial
    const ready = mat.map?.userData.ready === 1
    mat.opacity = ready ? fade : 0
  }
}
