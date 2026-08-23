import type { FlightState } from './types'

/** Deterministic fake traffic so local multi-client tests don't burn OpenSky credits. */
export function buildMockFlights(nowSec = Math.floor(Date.now() / 1000)): FlightState[] {
  const seeds: Array<{
    icao: string
    cs: string
    lat: number
    lon: number
    alt: number
    track: number
    vel: number
    country: string
  }> = [
    { icao: 'a1b2c3', cs: 'UAL100', lat: 40.7, lon: -74.0, alt: 11000, track: 90, vel: 230, country: 'United States' },
    { icao: 'd4e5f6', cs: 'DAL200', lat: 33.9, lon: -118.4, alt: 9800, track: 45, vel: 210, country: 'United States' },
    { icao: 'aabb11', cs: 'BAW15', lat: 51.5, lon: -0.1, alt: 10500, track: 120, vel: 240, country: 'United Kingdom' },
    { icao: 'bbcc22', cs: 'AFR44', lat: 48.9, lon: 2.4, alt: 11200, track: 200, vel: 220, country: 'France' },
    { icao: 'ccdd33', cs: 'DLH400', lat: 50.1, lon: 8.7, alt: 10000, track: 280, vel: 225, country: 'Germany' },
    { icao: 'ddee44', cs: 'JAL61', lat: 35.6, lon: 139.7, alt: 12000, track: 10, vel: 250, country: 'Japan' },
    { icao: 'eeff55', cs: 'QFA12', lat: -33.9, lon: 151.2, alt: 11500, track: 350, vel: 245, country: 'Australia' },
    { icao: 'ff0011', cs: 'SIA22', lat: 1.3, lon: 103.8, alt: 11800, track: 40, vel: 255, country: 'Singapore' },
    { icao: '112233', cs: 'ACA88', lat: 43.7, lon: -79.4, alt: 9500, track: 180, vel: 200, country: 'Canada' },
    { icao: '445566', cs: 'AMX450', lat: 19.4, lon: -99.1, alt: 10200, track: 15, vel: 215, country: 'Mexico' },
    { icao: '778899', cs: 'SAS900', lat: 59.3, lon: 18.0, alt: 10800, track: 250, vel: 230, country: 'Sweden' },
    { icao: '99aabb', cs: 'EIN55', lat: 53.4, lon: -6.3, alt: 9700, track: 95, vel: 205, country: 'Ireland' },
  ]

  // Slow drift so the globe still looks alive between "polls".
  const t = nowSec % 3600
  return seeds.map((s, i) => {
    const driftLon = ((t * s.vel * 0.00001) % 4) - 2
    const driftLat = Math.sin((t + i * 40) / 80) * 0.4
    return {
      icao24: s.icao,
      callsign: s.cs,
      originCountry: s.country,
      lon: ((((s.lon + driftLon + 180) % 360) + 360) % 360) - 180,
      lat: Math.max(-85, Math.min(85, s.lat + driftLat)),
      baroAltitude: s.alt,
      geoAltitude: s.alt,
      onGround: false,
      velocity: s.vel,
      track: s.track,
      verticalRate: 0,
      lastContact: nowSec,
    }
  })
}
