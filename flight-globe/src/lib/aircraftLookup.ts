/** Resolve ICAO type designators for OpenSky hexes (adsbdb aircraft lookup). */

const cache = new Map<string, string | null>()
const queue: Array<{ icao24: string; priority: number }> = []
const queued = new Set<string>()

const BATCH = 3
const INTERVAL_MS = 1100
const MAX_QUEUE = 400

function keyOf(hex: string): string {
  return hex.trim().toLowerCase()
}

/** Cached ICAO type, null if known-missing, undefined if not looked up yet. */
export function getCachedAircraftType(icao24: string): string | null | undefined {
  return cache.get(keyOf(icao24))
}

export function enqueueAircraftTypes(
  items: Array<{ icao24: string; priority?: number }>,
): void {
  for (const item of items) {
    const hex = item.icao24?.trim()
    if (!hex) continue
    const key = keyOf(hex)
    if (cache.has(key) || queued.has(key)) continue
    queued.add(key)
    queue.push({ icao24: hex, priority: item.priority ?? 50 })
  }
  queue.sort((a, b) => a.priority - b.priority)
  if (queue.length > MAX_QUEUE) {
    const dropped = queue.splice(MAX_QUEUE)
    for (const d of dropped) queued.delete(keyOf(d.icao24))
  }
}

interface AdsbdbAircraft {
  response?: {
    aircraft?: {
      icao_type?: string
      type?: string
    }
  }
}

async function fetchType(icao24: string): Promise<string | null | undefined> {
  try {
    const res = await fetch(`/adsbdb/v0/aircraft/${encodeURIComponent(icao24)}`)
    if (res.status === 404) return null
    if (!res.ok) return undefined
    const d = (await res.json()) as AdsbdbAircraft
    const code = (d.response?.aircraft?.icao_type || '').trim().toUpperCase()
    return code || null
  } catch {
    return undefined
  }
}

let running = false

export function startAircraftTypeResolver(onBatch: () => void): void {
  if (running) return
  running = true

  const tick = async () => {
    let changed = false
    for (let i = 0; i < BATCH && queue.length > 0; i++) {
      const item = queue.shift()!
      queued.delete(keyOf(item.icao24))
      const key = keyOf(item.icao24)
      const type = await fetchType(item.icao24)
      if (type !== undefined) {
        cache.set(key, type)
        changed = true
      }
    }
    if (changed) onBatch()
    setTimeout(tick, INTERVAL_MS)
  }
  tick()
}
