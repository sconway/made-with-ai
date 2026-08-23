import { buildMockFlights } from './mock'
import {
  fetchStates,
  formatUpstreamError,
  isOpenSkyNetworkError,
  isOpenSkyUnreachable,
  lastOpenSkyMeta,
  OpenSkyError,
  openskyUnreachableRemainingMs,
} from './opensky'
import {
  getCache,
  setCreditsRemaining,
  setFlights,
  setPollError,
  ensurePollError,
  setPollWakeHandler,
} from './cache'

/** Clients idle longer than this → skip OpenSky (save credits). */
const IDLE_MS = 5 * 60_000
/** Poller wake interval while waiting for a browser. */
const WAKE_CHECK_MS = 2_000
/** When 429 has no Retry-After, wait at least this long (credits refill daily). */
const MIN_429_WAIT_MS = 15 * 60_000
/** Cap absurd headers; still long enough to stop hammering an empty bucket. */
const MAX_429_WAIT_MS = 6 * 60 * 60_000
/** Transient errors before the circuit opens: short retries, but wake-proof. */
const MAX_TRANSIENT_WAIT_MS = 60_000
const MAX_URGENT_WAIT_MS = 20_000
/** Minimum sleep while OpenSky circuit is open (even if remaining ms glitches). */
const MIN_CIRCUIT_SLEEP_MS = 60_000

export function pollIntervalMs(): number {
  const n = Number(process.env.FLIGHT_POLL_INTERVAL_MS)
  if (Number.isFinite(n) && n >= 5_000) return n
  if (isMockMode()) return 15_000
  return 120_000
}

export function isMockMode(): boolean {
  return (
    process.env.FLIGHT_BACKEND_MOCK === '1' ||
    process.env.FLIGHT_BACKEND_MOCK === 'true'
  )
}

function clientsActive(): boolean {
  const hit = getCache().lastApiHitAt
  return hit != null && Date.now() - hit < IDLE_MS
}

function needsLiveRefresh(): boolean {
  const c = getCache()
  if (c.source !== 'opensky' || c.flights.length === 0) return true
  if (c.updatedAt == null) return true
  return Date.now() - c.updatedAt >= pollIntervalMs()
}

function cacheIsUrgent(): boolean {
  const c = getCache()
  if (c.source !== 'opensky' || c.flights.length === 0) return true
  if (c.updatedAt == null) return true
  return Date.now() - c.updatedAt >= pollIntervalMs() * 2
}

function waitFor429(e: OpenSkyError): number {
  if (e.retryAfterMs != null && e.retryAfterMs > 0) {
    return Math.min(Math.max(e.retryAfterMs, 5_000), MAX_429_WAIT_MS)
  }
  return MIN_429_WAIT_MS
}

function waitForTransient(streak: number, urgent: boolean): number {
  const start = urgent ? 2_000 : 5_000
  const cap = urgent ? MAX_URGENT_WAIT_MS : MAX_TRANSIENT_WAIT_MS
  const exp = Math.min(Math.max(streak - 1, 0), 5)
  return Math.min(cap, start * 2 ** exp)
}

function isCircuitError(err: unknown, msg: string): boolean {
  if (isOpenSkyUnreachable()) return true
  return /circuit open|unreachable from this host/i.test(msg)
}

// ─── module singleton (Render / double-import must not run two loops) ───
let started = false
let timer: ReturnType<typeof setTimeout> | null = null
let running = false
let loggedWaiting = false
let loggedCircuit = false
let failStreak = 0
/** Absolute timestamp — API-hit wakes must not cancel this backoff. */
let hardBackoffUntil = 0

function schedule(ms: number): void {
  if (timer) clearTimeout(timer)
  const delay = Math.max(0, ms)
  hardBackoffUntil = Date.now() + delay
  timer = setTimeout(() => void tick(), delay)
}

async function tick(): Promise<void> {
  if (running) return
  running = true
  const base = pollIntervalMs()
  try {
    if (isMockMode()) {
      setFlights(buildMockFlights(), 'mock')
      const c = getCache()
      console.log(
        `[poller] mock refresh — ${c.flights.length} flights (api hits since last poll: ${c.hitsSinceLastPoll})`,
      )
      failStreak = 0
      schedule(base)
      return
    }

    if (!clientsActive()) {
      if (!loggedWaiting) {
        console.log(
          '[poller] waiting for client… (no OpenSky call until the UI connects)',
        )
        loggedWaiting = true
      }
      // Soft wait — wakes may advance this when a client connects.
      if (timer) clearTimeout(timer)
      hardBackoffUntil = 0
      timer = setTimeout(() => void tick(), WAKE_CHECK_MS)
      return
    }
    loggedWaiting = false

    const circuitMs = openskyUnreachableRemainingMs()
    if (circuitMs > 0) {
      ensurePollError('OpenSky unreachable from this host')
      const sleep = Math.max(circuitMs, MIN_CIRCUIT_SLEEP_MS)
      if (!loggedCircuit) {
        loggedCircuit = true
        console.warn(
          `[poller] OpenSky circuit open — next probe in ${Math.round(sleep / 1000)}s (empty feed until then)`,
        )
      }
      schedule(sleep)
      return
    }
    loggedCircuit = false

    if (!needsLiveRefresh()) {
      schedule(Math.min(base, 15_000))
      return
    }

    const flights = await fetchStates()
    const meta = lastOpenSkyMeta()
    setCreditsRemaining(meta.remaining)
    setFlights(flights, 'opensky')
    failStreak = 0
    const c = getCache()
    console.log(
      `[poller] OpenSky ok — ${flights.length} flights, poll #${c.upstreamPolls}, ~${meta.creditCost} credit(s)` +
        (meta.remaining != null ? `, ${meta.remaining} left` : '') +
        ` (api hits since last poll: ${c.hitsSinceLastPoll})`,
    )
    schedule(base)
  } catch (e) {
    const msg = formatUpstreamError(e)
    if (isCircuitError(e, msg)) {
      ensurePollError('OpenSky unreachable from this host')
    } else {
      setPollError(msg)
    }

    if (e instanceof OpenSkyError && e.status === 429) {
      failStreak = 0
      const wait = waitFor429(e)
      console.warn(
        `[poller] ${msg} — credits exhausted; backing off ${Math.round(wait / 1000)}s`,
      )
      schedule(wait)
    } else if (isCircuitError(e, msg)) {
      failStreak = 0
      const wait = Math.max(
        openskyUnreachableRemainingMs(),
        MIN_CIRCUIT_SLEEP_MS,
      )
      if (!loggedCircuit) {
        loggedCircuit = true
        console.warn(
          `[poller] OpenSky unreachable — next probe in ${Math.round(wait / 1000)}s`,
        )
      }
      schedule(wait)
    } else if (isOpenSkyNetworkError(e)) {
      // Toward circuit open — still wake-proof so clients can't stampede.
      failStreak += 1
      const wait = waitForTransient(failStreak, true)
      console.warn(
        `[poller] ${msg} — retry in ${Math.round(wait / 1000)}s [streak ${failStreak}]`,
      )
      schedule(wait)
    } else {
      failStreak += 1
      const urgent = cacheIsUrgent()
      const wait = waitForTransient(failStreak, urgent)
      console.warn(
        `[poller] ${msg} — retry in ${Math.round(wait / 1000)}s` +
          (urgent ? ' (no live snapshot)' : '') +
          ` [streak ${failStreak}]`,
      )
      schedule(wait)
    }
  } finally {
    running = false
  }
}

/**
 * Single upstream poll loop. All browsers share this cache — N clients do not
 * multiply OpenSky credits. Skips polls while no client has hit the API recently.
 *
 * Policy: live OpenSky snapshot or empty — never serve stale / synthetic / hub-
 * sampled fallbacks (those look like random clusters on the globe).
 */
export function startPoller(): void {
  if (started) {
    console.warn('[poller] startPoller() called again — ignoring duplicate')
    return
  }
  started = true

  setPollWakeHandler(() => {
    if (running) return
    if (Date.now() < hardBackoffUntil) return
    if (isOpenSkyUnreachable()) return
    schedule(0)
  })

  const base = pollIntervalMs()
  console.log(
    `[poller] starting (${isMockMode() ? 'MOCK' : 'OpenSky'}, interval ${base}ms` +
      (isMockMode()
        ? ''
        : `; world poll = 4 credits; idle skip after ${IDLE_MS / 1000}s`) +
      ')',
  )
  schedule(isMockMode() ? 0 : 500)
}
