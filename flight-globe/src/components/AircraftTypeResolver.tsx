import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { startAircraftTypeResolver } from '../lib/aircraftLookup'

/** Fills missing OpenSky type codes via adsbdb so close-up meshes can match. */
export function AircraftTypeResolver() {
  const bumpRoutes = useStore((s) => s.bumpRoutes)
  useEffect(() => {
    startAircraftTypeResolver(bumpRoutes)
  }, [bumpRoutes])
  return null
}
