import type { FlightState } from './flight'

/** Mode-A codes that *may* indicate an emergency (often spurious on open ADS-B). */
const EMERGENCY_CODES = new Set(['7700', '7600', '7500'])

/** Same unusual code must appear in this many distinct feed snapshots. */
const CONFIRM_SNAPSHOTS = 2

interface Streak {
  code: string
  count: number
}

const streaks = new Map<string, Streak>()
const confirmed = new Set<string>()
let lastSnapshotAt = -1

export function isEmergencySquawkCode(
  squawk: string | null | undefined,
): boolean {
  if (!squawk) return false
  return EMERGENCY_CODES.has(squawk.trim())
}

/**
 * True only after the unusual squawk has persisted across consecutive
 * upstream snapshots (filters one-off spoof / bad decodes).
 */
export function isConfirmedEmergency(
  flight: Pick<FlightState, 'icao24' | 'squawk'>,
): boolean {
  if (!isEmergencySquawkCode(flight.squawk)) return false
  return confirmed.has(flight.icao24)
}

/** @deprecated Prefer `isConfirmedEmergency(flight)` for UI highlights. */
export function isEmergencySquawk(
  squawk: string | null | undefined,
): boolean {
  return isEmergencySquawkCode(squawk)
}

export function emergencySquawkLabel(squawk: string): string {
  const code = squawk.trim()
  if (EMERGENCY_CODES.has(code)) return `Unusual squawk (${code})`
  return 'Unusual squawk'
}

export function emergencySquawkHint(): string {
  return 'Not verified — open ADS-B feeds often show these codes spuriously'
}

/**
 * Advance persistence streaks for a new upstream snapshot.
 * No-ops when `snapshotAt` matches the last observation (same cache hit).
 * Returns true when the confirmed set changed.
 */
export function observeEmergencySquawks(
  flights: Iterable<Pick<FlightState, 'icao24' | 'squawk'>>,
  snapshotAt: number,
): boolean {
  if (!Number.isFinite(snapshotAt) || snapshotAt <= 0) return false
  if (snapshotAt === lastSnapshotAt) return false
  lastSnapshotAt = snapshotAt

  const before = confirmed.size
  const beforeIds = new Set(confirmed)
  const seen = new Set<string>()
  confirmed.clear()

  for (const f of flights) {
    seen.add(f.icao24)
    const code = (f.squawk || '').trim()
    if (!EMERGENCY_CODES.has(code)) {
      streaks.delete(f.icao24)
      continue
    }
    const prev = streaks.get(f.icao24)
    if (prev && prev.code === code) {
      prev.count += 1
    } else {
      streaks.set(f.icao24, { code, count: 1 })
    }
    const streak = streaks.get(f.icao24)!
    if (streak.count >= CONFIRM_SNAPSHOTS) confirmed.add(f.icao24)
  }

  for (const id of [...streaks.keys()]) {
    if (!seen.has(id)) streaks.delete(id)
  }

  if (confirmed.size !== before) return true
  for (const id of confirmed) {
    if (!beforeIds.has(id)) return true
  }
  for (const id of beforeIds) {
    if (!confirmed.has(id)) return true
  }
  return false
}
