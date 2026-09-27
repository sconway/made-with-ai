import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { useStore } from '../store/useStore'
import {
  applyMapGroupTransform,
  frameFromCountry,
  getMapEase,
  getMapFrame,
  mapExtent,
  type MapFrame,
} from '../lib/mapView'
import {
  loadRadarPatch,
  mercatorUV,
  patchUV,
  type RadarPatch,
} from '../lib/weather'

function writeUV(
  lon: number,
  lat: number,
  patch: RadarPatch | null,
  out: THREE.Vector2,
): void {
  const uv = patch ? patchUV(lon, lat, patch) : mercatorUV(lon, lat)
  out.set(uv.u, 1 - uv.v)
}

function mapGeometry(map: MapFrame, patch: RadarPatch | null): THREE.PlaneGeometry {
  const { w, h } = mapExtent(map)
  const extW = w * 1.15
  const extH = h * 1.15
  const g = new THREE.PlaneGeometry(extW, extH, 48, 32)
  const pos = g.attributes.position!
  const uv = g.attributes.uv!
  const cosLat0 = Math.max(0.12, Math.cos((map.lat0 * Math.PI) / 180))
  const _uv = new THREE.Vector2()
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const y = pos.getY(i)
    const lon = map.lon0 + x / (cosLat0 * (Math.PI / 180))
    const lat = map.lat0 + y / (Math.PI / 180)
    writeUV(lon, lat, patch, _uv)
    uv.setXY(i, _uv.x, _uv.y)
  }
  uv.needsUpdate = true
  return g
}

/**
 * Higher-zoom RainViewer patch on country / 2D map only — never on the globe.
 */
export function WeatherLayer() {
  const mode = useStore((s) => s.weatherMode)
  const mapEpoch = useStore((s) => s.mapEpoch)
  const selectedCountry = useStore((s) => s.selectedCountry)
  const flatMap = useStore((s) => s.flatMap)
  const [patch, setPatch] = useState<RadarPatch | null>(null)
  const mapMat = useRef<THREE.MeshBasicMaterial>(null)
  const mapGroup = useRef<THREE.Group>(null)

  const mapKey = `${selectedCountry?.id ?? ''}:${flatMap}:${mapEpoch}`
  const mapOn = Boolean(selectedCountry || flatMap)
  const mapFrame = useMemo(() => {
    if (selectedCountry) return frameFromCountry(selectedCountry)
    if (flatMap) return getMapFrame()
    return null
  }, [mapKey, selectedCountry, flatMap])
  const plane = useMemo(
    () => (mapFrame && patch ? mapGeometry(mapFrame, patch) : null),
    [mapFrame, patch],
  )

  useEffect(() => {
    if (mode !== 'radar' || !mapOn) {
      setPatch(null)
      return
    }
    const map = selectedCountry
      ? frameFromCountry(selectedCountry)
      : getMapFrame()
    if (!map) {
      setPatch(null)
      return
    }
    let cancelled = false
    void loadRadarPatch({
      minLon: map.minLon,
      maxLon: map.maxLon,
      minLat: map.minLat,
      maxLat: map.maxLat,
    }).then((next) => {
      if (!cancelled) setPatch(next)
    })
    return () => {
      cancelled = true
    }
  }, [mode, mapOn, mapKey, selectedCountry])

  useFrame(() => {
    const ease = getMapEase()
    const mapFade = mode === 'radar' && patch ? ease : 0
    const map = getMapFrame()
    if (mapGroup.current && map && mapFade > 0.06) {
      applyMapGroupTransform(mapGroup.current, map)
      if (mapMat.current) mapMat.current.opacity = 0.58 * mapFade
      mapGroup.current.visible = true
    } else if (mapGroup.current) {
      mapGroup.current.visible = false
    }
  })

  if (mode !== 'radar' || !mapOn || !plane || !patch) return null

  return (
    <group ref={mapGroup}>
      <mesh
        geometry={plane}
        position={[0, 0, 0.0012]}
        renderOrder={3}
        raycast={() => {}}
      >
        <meshBasicMaterial
          ref={mapMat}
          map={patch.texture}
          transparent
          depthWrite={false}
          depthTest={false}
          toneMapped={false}
          opacity={0.58}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}
