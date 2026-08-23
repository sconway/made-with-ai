/**
 * Callsign normalization helpers shared by client search + server route lookup.
 * Kept free of Three.js / React so the Node backend can import it.
 */

/** Ticket / booking IATA codes → ADS-B ICAO callsign prefix. */
const IATA_TO_ICAO: Record<string, string> = {
  AA: 'AAL',
  AC: 'ACA',
  AF: 'AFR',
  BA: 'BAW',
  CA: 'CCA',
  MU: 'CES',
  OK: 'CSA',
  DL: 'DAL',
  LH: 'DLH',
  EI: 'EIN',
  EY: 'ETD',
  U2: 'EZY',
  FX: 'FDX',
  F9: 'FFT',
  IB: 'IBE',
  JL: 'JAL',
  B6: 'JBU',
  KE: 'KAL',
  KL: 'KLM',
  QF: 'QFA',
  QR: 'QTR',
  FR: 'RYR',
  SK: 'SAS',
  SQ: 'SIA',
  WN: 'SWA',
  TK: 'THY',
  UA: 'UAL',
  EK: 'UAE',
  '5X': 'UPS',
  VS: 'VIR',
  VY: 'VLG',
  W6: 'WZZ',
}

const ICAO_TO_IATA: Record<string, string> = Object.fromEntries(
  Object.entries(IATA_TO_ICAO).map(([iata, icao]) => [icao, iata]),
)

export function iataToIcaoAirline(iata: string): string | null {
  return IATA_TO_ICAO[iata.trim().toUpperCase()] ?? null
}

export function icaoToIataAirline(icao: string): string | null {
  return ICAO_TO_IATA[icao.trim().toUpperCase()] ?? null
}

export function parseFlightNumber(
  raw: string,
): { airline: string; number: string } | null {
  const s = raw.trim().toUpperCase().replace(/[\s\-_/]/g, '')
  const m = s.match(/^([A-Z0-9]{2,3})(\d{1,4}[A-Z]?)$/)
  if (!m) return null
  return { airline: m[1]!, number: m[2]! }
}

/**
 * Likely callsign spellings for search / route DB lookup.
 * e.g. UA882 → UAL882, UAL882 → UA882
 */
export function callsignLookupVariants(raw: string): string[] {
  const base = raw.trim().toUpperCase().replace(/\s+/g, '')
  if (!base) return []
  const out = new Set<string>([base])
  const parsed = parseFlightNumber(base)
  if (!parsed) return [...out]

  const num = parsed.number
  const numStrip = num.replace(/^0+(\d)/, '$1')
  const nums = numStrip !== num ? [num, numStrip] : [num]

  for (const n of nums) {
    out.add(`${parsed.airline}${n}`)
    if (parsed.airline.length === 2) {
      const icao = iataToIcaoAirline(parsed.airline)
      if (icao) out.add(`${icao}${n}`)
    } else if (parsed.airline.length === 3) {
      const iata = icaoToIataAirline(parsed.airline)
      if (iata) out.add(`${iata}${n}`)
    }
  }
  return [...out]
}

/** True when callsign looks like an airline flight (worth OpenSky credit spend). */
export function looksLikeAirlineCallsign(callsign: string): boolean {
  const parsed = parseFlightNumber(callsign)
  if (!parsed) return false
  if (parsed.airline.length === 3) {
    return (
      icaoToIataAirline(parsed.airline) != null ||
      /^[A-Z]{3}\d/.test(callsign.trim().toUpperCase())
    )
  }
  return iataToIcaoAirline(parsed.airline) != null
}
