import * as THREE from 'three'
import { latLonToVector3 } from './geo'

/**
 * Approximate sub-solar point (where the sun is directly overhead) for the
 * given time, giving a realistic day/night terminator. Seasonal declination is
 * approximated; good enough for the visual.
 */
export function sunDirection(date = new Date()): THREE.Vector3 {
  const utcHours =
    date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600
  const subsolarLon = -(utcHours - 12) * 15

  // Rough declination from day-of-year.
  const start = Date.UTC(date.getUTCFullYear(), 0, 0)
  const dayOfYear = (date.getTime() - start) / 86400000
  const decl = 23.44 * Math.sin(((2 * Math.PI) / 365) * (dayOfYear - 81))

  return latLonToVector3(decl, subsolarLon, 1).normalize()
}
