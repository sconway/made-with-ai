import type { FlightState } from './flight'

/**
 * Bundled snapshot of real aircraft (captured from airplanes.live over the
 * central US). Used as a graceful fallback when the live API is unavailable or
 * rate-limited, so the globe still shows moving planes. They animate via the
 * normal dead-reckoning path since each carries a velocity + heading.
 */
export async function loadDemoFlights(): Promise<FlightState[]> {
  const res = await fetch('/data/demo-flights.json')
  if (!res.ok) throw new Error(`demo data ${res.status}`)
  return (await res.json()) as FlightState[]
}
