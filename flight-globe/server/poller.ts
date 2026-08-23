import { buildMockFlights } from './mock'
import { fetchStates, lastOpenSkyMeta, OpenSkyError } from './opensky'
import {
  getCache,
  setCreditsRemaining,
  setFlights,
  setPollError,
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
/** Transient errors (network / 5xx): never sit idle longer than this. */
const MAX_TRANSIENT_WAIT_MS = 60_000
/** Empty or very stale cache: retry even sooner. */
const MAX_URGENT_WAIT_MS = 20_000

/**
 * Default 2 minutes. Global /states/all costs **4 credits**; at 45s that was
 * ~7.6k credits/day vs a 4k free-tier budget. 120s ≈ 2.9k credits/day.
 */
export function pollIntervalMs(): number {
  const n = Number(process.env.FLIGHT_POLL_INTERVAL_MS)
  if (Number.isFinite(n) && n >= 5_000) return n
  // Mock drifts each poll — denser frames make playback useful while developing.
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

/** True when the UI would feel frozen without a fresh poll. */
function cacheIsUrgent(): boolean {
  const c = getCache()
  if (c.source !== 'opensky' || c.flights.length === 0) return true
  if (c.updatedAt == null) return true
  // Older than 2 poll intervals → treat as stale.
  return Date.now() - c.updatedAt >= pollIntervalMs() * 2
}

/**
 * Honor Retry-After when present. Only fall back to the long minimum when
 * OpenSky gives no guidance (typical empty credit bucket).
 */
function waitFor429(e: OpenSkyError): number {
  if (e.retryAfterMs != null && e.retryAfterMs > 0) {
    return Math.min(Math.max(e.retryAfterMs, 5_000), MAX_429_WAIT_MS)
  }
  return MIN_429_WAIT_MS
}

/**
 * Short exponential backoff for timeouts / 5xx / auth blips.
 * Previously this was always `pollInterval * 2` (240s) — that left a stale
 * globe sitting for minutes after a transient blip.
 */
function waitForTransient(streak: number, urgent: boolean): number {
  const start = urgent ? 2_000 : 5_000
  const cap = urgent ? MAX_URGENT_WAIT_MS : MAX_TRANSIENT_WAIT_MS
  const exp = Math.min(Math.max(streak - 1, 0), 5)
  return Math.min(cap, start * 2 ** exp)
}

/**
 * Single upstream poll loop. All browsers share this cache — N clients do not
 * multiply OpenSky credits. Skips polls while no client has hit the API recently.
 */
export function startPoller(): void {
  const base = pollIntervalMs()
  let timer: ReturnType<typeof setTimeout> | null = null
  let running = false
  let loggedWaiting = false
  let failStreak = 0
  /** Don't let API-hit wakeups cancel an active 429 credit backoff. */
  let creditBackoffUntil = 0

  const schedule = (ms: number) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => void tick(), ms)
  }

  const tick = async () => {
    if (running) return
    running = true
    try {
      if (isMockMode()) {
        setFlights(buildMockFlights(), 'mock')
        const c = getCache()
        console.log(
          `[poller] mock refresh — ${c.flights.length} flights (api hits since last poll: ${c.hitsSinceLastPoll})`,
        )
        failStreak = 0
        creditBackoffUntil = 0
        schedule(base)
        return
      }

      // Demand-driven: don't burn credits when nobody is looking.
      if (!clientsActive()) {
        if (!loggedWaiting) {
          console.log(
            '[poller] waiting for client… (no OpenSky call until the UI connects)',
          )
          loggedWaiting = true
        }
        schedule(WAKE_CHECK_MS)
        return
      }
      loggedWaiting = false

      if (!needsLiveRefresh()) {
        schedule(Math.min(base, 15_000))
        return
      }

      const flights = await fetchStates()
      const meta = lastOpenSkyMeta()
      setCreditsRemaining(meta.remaining)
      setFlights(flights, 'opensky')
      failStreak = 0
      creditBackoffUntil = 0
      const c = getCache()
      console.log(
        `[poller] OpenSky ok — ${flights.length} flights, poll #${c.upstreamPolls}, ~${meta.creditCost} credit(s)` +
          (meta.remaining != null ? `, ${meta.remaining} left` : '') +
          ` (api hits since last poll: ${c.hitsSinceLastPoll})`,
      )
      schedule(base)
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      setPollError(msg)

      if (e instanceof OpenSkyError && e.status === 429) {
        failStreak = 0
        const wait = waitFor429(e)
        creditBackoffUntil = Date.now() + wait
        const hasLive =
          getCache().source === 'opensky' && getCache().flights.length > 0
        console.warn(
          `[poller] ${msg} — credits exhausted; backing off ${Math.round(wait / 1000)}s` +
            (hasLive
              ? ' (serving last OpenSky snapshot)'
              : ' (no live snapshot yet — wait for daily credit refill, or npm run dev:mock)') +
            '.',
        )
        schedule(wait)
      } else {
        failStreak += 1
        creditBackoffUntil = 0
        const urgent = cacheIsUrgent()
        const wait = waitForTransient(failStreak, urgent)
        console.warn(
          `[poller] ${msg} — retry in ${Math.round(wait / 1000)}s` +
            (urgent ? ' (stale/empty cache, short backoff)' : '') +
            ` [streak ${failStreak}]`,
        )
        schedule(wait)
      }
    } finally {
      running = false
    }
  }

  setPollWakeHandler(() => {
    if (running) return
    // Still in a credit backoff — don't burn more 429s on every page refresh.
    if (Date.now() < creditBackoffUntil) return
    schedule(0)
  })

  console.log(
    `[poller] starting (${isMockMode() ? 'MOCK' : 'OpenSky'}, interval ${base}ms` +
      (isMockMode()
        ? ''
        : `; world poll = 4 credits; idle skip after ${IDLE_MS / 1000}s`) +
      ')',
  )
  schedule(isMockMode() ? 0 : 500)
}
