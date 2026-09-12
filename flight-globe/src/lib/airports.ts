import rawAirports from '../data/airports.json'

/** Compact OurAirports row: iata, icao, name, city, lat, lon, size (l/m/s). */
type AirportRow = [string, string, string, string, number, number, string]

export type AirportSize = 'large' | 'medium' | 'small'

/** Airports with IATA codes + coordinates (OurAirports, Unlicense). */
export interface Airport {
  iata: string
  icao: string
  name: string
  city: string
  lat: number
  lon: number
  size: AirportSize
}

const SIZE_FROM_CODE: Record<string, AirportSize> = {
  l: 'large',
  m: 'medium',
  s: 'small',
}

export const AIRPORTS: Airport[] = (rawAirports as AirportRow[]).map(
  ([iata, icao, name, city, lat, lon, size]) => ({
    iata,
    icao,
    name,
    city,
    lat,
    lon,
    size: SIZE_FROM_CODE[size] ?? 'small',
  }),
)

const byIata = new Map<string, Airport>()
const byIcao = new Map<string, Airport>()
for (const airport of AIRPORTS) {
  byIata.set(airport.iata, airport)
  if (airport.icao) byIcao.set(airport.icao, airport)
}

export function findAirport(iataOrIcao: string): Airport | undefined {
  const q = iataOrIcao.trim().toUpperCase()
  if (!q) return undefined
  return byIata.get(q) ?? byIcao.get(q)
}
