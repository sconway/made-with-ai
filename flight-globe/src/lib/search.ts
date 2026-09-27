import type { FlightState } from './flight'
import {
  airlineCodeFromCallsign,
  airlineName,
  callsignCandidatesFromQuery,
  iataToIcaoAirline,
  listKnownAirlines,
  parseFlightNumber,
  resolveRoute,
} from './flightInfo'
import { AIRPORTS, findAirport, type Airport } from './airports'
import { haversineKm } from './geo'

export type SearchHit =
  | {
      kind: 'flight'
      flight: FlightState
      label: string
      detail: string
      score: number
    }
  | {
      kind: 'airport'
      airport: Airport
      label: string
      detail: string
      score: number
      /** Live flights currently in the feed whose route touches this airport. */
      relatedCount: number
    }
  | {
      kind: 'airline'
      code: string
      name: string
      label: string
      detail: string
      score: number
    }

/** Case/accent/punctuation-insensitive token for matching "sao paulo" to "São Paulo". */
function fold(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '')
}

function norm(s: string): string {
  return fold(s)
}

function includesLoose(hay: string, needle: string): boolean {
  return fold(hay).includes(fold(needle))
}

function scorePrefix(value: string, q: string): number {
  const v = norm(value)
  const n = norm(q)
  if (!n || !v) return 0
  if (v === n) return 100
  if (v.startsWith(n)) return 80
  if (v.includes(n)) return 50
  return 0
}

/**
 * Score a flight against a search query.
 *
 * Flight-number shaped queries ("UA882", "UAL 882") prefer exact / expanded
 * callsign matches and do **not** fall back to "same airline, any flight",
 * which previously surfaced the wrong aircraft.
 */
export function scoreFlight(flight: FlightState, q: string): number {
  const callsign = norm(flight.callsign || '')
  const icao = norm(flight.icao24)
  const reg = norm(flight.registration || '')
  const code = airlineCodeFromCallsign(flight.callsign || '')
  const airline = airlineName(code)
  const route = resolveRoute(flight)
  const oIata = route?.oIata || ''
  const dIata = route?.dIata || ''

  const flightNum = parseFlightNumber(q)
  if (flightNum) {
    const candidates = callsignCandidatesFromQuery(q).map(norm)
    for (const c of candidates) {
      if (callsign === c) return 100
      // OpenSky sometimes pads / omits a letter suffix.
      if (callsign.startsWith(c) && callsign.length <= c.length + 1) return 96
    }
    const csParsed = parseFlightNumber(callsign)
    if (csParsed) {
      const qNum = flightNum.number.replace(/^0+/, '') || flightNum.number
      const fNum = csParsed.number.replace(/^0+/, '') || csParsed.number
      if (qNum === fNum) {
        const airlines = new Set<string>([flightNum.airline])
        const icao = iataToIcaoAirline(flightNum.airline)
        if (icao) airlines.add(icao)
        if (airlines.has(csParsed.airline)) return 94
      }
    }
    // Flight-number query must not fall through to "any United flight".
    return 0
  }

  let score = 0
  score = Math.max(score, scorePrefix(callsign, q))
  score = Math.max(score, scorePrefix(icao, q) * 0.95)
  if (reg) score = Math.max(score, scorePrefix(reg, q))
  const type = norm(flight.typeCode || '')
  if (type) score = Math.max(score, scorePrefix(type, q) * 0.92)

  // Airline-only queries (e.g. "UAL", "United") — weaker than a flight number.
  const qn = norm(q)
  if (qn.length >= 2) {
    if (code && code === qn) score = Math.max(score, 72)
    else if (code && includesLoose(code, qn) && qn.length >= 3)
      score = Math.max(score, 55)
    if (airline !== code && includesLoose(airline, q))
      score = Math.max(score, 50)
  }

  if (oIata && oIata === qn) score = Math.max(score, 60)
  if (dIata && dIata === qn) score = Math.max(score, 60)

  return score
}

/** True when a flight matches the free-text search (callsign, airline, airport, etc.). */
export function flightMatchesQuery(flight: FlightState, query: string): boolean {
  const q = query.trim()
  if (q.length < 1) return true
  return scoreFlight(flight, q) > 0
}

/** Filter the live set down to flights matching `query`. Empty query → unchanged. */
export function filterFlightsByQuery(
  flights: FlightState[],
  query: string,
): FlightState[] {
  const q = query.trim()
  if (q.length < 1) return flights
  return flights.filter((f) => scoreFlight(f, q) > 0)
}

/** Highest-scoring live flight for a query, or null if nothing matches. */
export function bestFlightForQuery(
  flights: FlightState[],
  query: string,
): FlightState | null {
  const q = query.trim()
  if (q.length < 1) return null
  let best: FlightState | null = null
  let bestScore = 0
  for (const f of flights) {
    const score = scoreFlight(f, q)
    if (score > bestScore) {
      bestScore = score
      best = f
    }
  }
  return best
}

function scoreAirport(airport: Airport, q: string): number {
  let score = 0
  score = Math.max(score, scorePrefix(airport.iata, q))
  score = Math.max(score, scorePrefix(airport.icao, q) * 0.9)
  const city = fold(airport.city)
  const needle = fold(q)
  if (city && needle) {
    if (city === needle) score = Math.max(score, 88)
    else if (city.startsWith(needle) && needle.length >= 3) score = Math.max(score, 74)
    else if (city.includes(needle) && needle.length >= 3) score = Math.max(score, 62)
  }
  if (includesLoose(airport.name, q) && needle.length >= 3) {
    score = Math.max(score, city === needle ? 70 : 48)
  }
  return score
}

function scoreAirline(code: string, name: string, q: string): number {
  const needle = fold(q)
  if (needle.length < 2) return 0
  let score = scorePrefix(code, q)
  const folded = fold(name)
  if (folded === needle) score = Math.max(score, 86)
  else if (folded.startsWith(needle)) score = Math.max(score, 76)
  else if (folded.includes(needle) && needle.length >= 3) score = Math.max(score, 58)
  return score
}

/** Best airport match for a query (IATA / city / name), or null. */
export function bestAirportForQuery(query: string): Airport | null {
  const q = query.trim()
  if (q.length < 1) return null
  let best: Airport | null = null
  let bestScore = 0
  for (const airport of AIRPORTS) {
    const score = scoreAirport(airport, q)
    if (score > bestScore) {
      bestScore = score
      best = airport
    }
  }
  return bestScore > 0 ? best : null
}

/** Ranked search over current flights, known airports, and airlines. */
export function searchTraffic(
  query: string,
  flights: FlightState[],
  limit = 8,
): SearchHit[] {
  const q = query.trim()
  if (q.length < 2) return []

  const hits: SearchHit[] = []

  for (const flight of flights) {
    const score = scoreFlight(flight, q)
    if (score <= 0) continue

    const callsign = flight.callsign || ''
    const icao = flight.icao24
    const code = airlineCodeFromCallsign(callsign)
    const airline = airlineName(code)
    const route = resolveRoute(flight)
    const oIata = route?.oIata || ''
    const dIata = route?.dIata || ''
    const label = callsign.trim() || icao.toUpperCase()
    const routeBit =
      oIata && dIata
        ? `${oIata} → ${dIata}`
        : airline !== 'Unknown airline'
          ? airline
          : icao.toUpperCase()
    hits.push({
      kind: 'flight',
      flight,
      label,
      detail: routeBit,
      score,
    })
  }

  for (const airport of AIRPORTS) {
    const score = scoreAirport(airport, q)
    if (score <= 0) continue
    hits.push({
      kind: 'airport',
      airport,
      label: airport.iata,
      detail: `${airport.city} · ${airport.name}`,
      score,
      relatedCount: 0,
    })
  }

  const seenAirline = new Set<string>()
  const addAirline = (code: string, name: string) => {
    if (!code || seenAirline.has(code)) return
    const score = scoreAirline(code, name, q)
    if (score <= 0) return
    seenAirline.add(code)
    hits.push({
      kind: 'airline',
      code,
      name: name === 'Unknown airline' ? code : name,
      label: name === 'Unknown airline' ? code : name,
      detail: code,
      score,
    })
  }
  for (const { code, name } of listKnownAirlines()) addAirline(code, name)
  for (const flight of flights) {
    const code = airlineCodeFromCallsign(flight.callsign || '')
    if (code) addAirline(code, airlineName(code))
  }

  hits.sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
  const top = hits.slice(0, limit)

  for (const hit of top) {
    if (hit.kind !== 'airport') continue
    let relatedCount = 0
    for (const f of flights) {
      const r = resolveRoute(f)
      if (!r) continue
      if (r.oIata === hit.airport.iata || r.dIata === hit.airport.iata) {
        relatedCount++
      }
    }
    hit.relatedCount = relatedCount
  }

  return top
}

/** Flights tied to an airport: known route O/D match, or currently near the field. */
export function flightsForAirportIata(
  flights: FlightState[],
  iata: string,
  nearKm = 90,
): FlightState[] {
  const code = iata.toUpperCase()
  const airport = findAirport(code)
  const out: FlightState[] = []
  const seen = new Set<string>()

  for (const f of flights) {
    const r = resolveRoute(f)
    if (r != null && (r.oIata === code || r.dIata === code)) {
      out.push(f)
      seen.add(f.icao24)
    }
  }

  // Immediate local traffic (taxi / climb / approach) while route lookups fill in.
  if (airport && nearKm > 0) {
    for (const f of flights) {
      if (seen.has(f.icao24)) continue
      if (haversineKm(f.lat, f.lon, airport.lat, airport.lon) <= nearKm) {
        out.push(f)
        seen.add(f.icao24)
      }
    }
  }

  return out
}

/** @deprecated Prefer `haversineKm` from `./geo` — re-exported for callers. */
export { haversineKm } from './geo'
