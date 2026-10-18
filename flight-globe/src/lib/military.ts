import type { FlightState } from './flight'
import raw from '../data/military.json'

/**
 * Best-effort military / government heuristic. No feed has a reliable flag;
 * this combines the server's operator match, published hex blocks, and
 * callsign prefixes. Always label the result "likely".
 */

interface MilitaryData {
  hexRanges: Array<[string, string]>
  callsigns: string[]
}

const data = raw as MilitaryData

const HEX_RANGES = data.hexRanges.map(([lo, hi]) => ({
  lo: parseInt(lo, 16),
  hi: parseInt(hi, 16),
}))

/** Prefix must be followed by a digit so ordinary words (SAMSON…) don't match. */
const MIL_CALLSIGN = new RegExp(
  `^(${data.callsigns
    .slice()
    .sort((a, b) => b.length - a.length)
    .map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|')})\\d`,
)

export function isLikelyMilitary(
  f: Pick<FlightState, 'icao24' | 'callsign' | 'military'>,
): boolean {
  if (f.military) return true
  const hex = parseInt(f.icao24, 16)
  if (Number.isFinite(hex)) {
    for (const r of HEX_RANGES) {
      if (hex >= r.lo && hex <= r.hi) return true
    }
  }
  return MIL_CALLSIGN.test((f.callsign || '').trim().toUpperCase())
}
