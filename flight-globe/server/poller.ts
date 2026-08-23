import { buildMockFlights } from './mock'
import { fetchAdsbLolStates } from './adsblol'
import {
  fetchStates,
  formatUpstreamError,
  lastOpenSkyMeta,
  OpenSkyError,
} from './opensky'
import {
  getCache,
  setCreditsRemaining,
  setFlights,
  setPollError,
  setPollWakeHandler,
  type CacheSource,
} from './cache'

/** Clients idle longer than this → skip upstream polls (save credits / quota). */
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
/** After this many consecutive OpenSky network failures, prefer ADS-B for a while. */
const OPENSKY_FAIL_BEFORE_ADSB = 2
/** How long to stick with ADS-B before probing OpenSky again. */
const OPENSKY_RETRY_AFTER_MS = 30 * 60_000

/**
 * Default 2 minutes for OpenSky (4 credits / world poll). ADS-B fallback can
 * poll a bit faster — no credit budget.
 */
export function pollIntervalMs(): number {
  const n = Number(process.env.FLIGHT_POLL_INTERVAL_MS)
  if (Number.isFinite(n) && n >= 5_000) return n
  if (isMockMode()) return 15_000
  if (activeSource() === 'adsb') return 60_000
  return 120_000
}

export function isMockMode(): boolean {
  return (
    process.env.FLIGHT_BACKEND_MOCK === '1' ||
    process.env.FLIGHT_BACKEND_MOCK === 'true'
  )
}

/** opensky | adsb | auto (try OpenSky, fall back when cloud IPs are blocked). */
export function upstreamMode(): 'opensky' | 'adsb' | 'auto' {
  const v = (process.env.FLIGHT_UPSTREAM || 'auto').trim().toLowerCase()
  if (v === 'adsb' || v === 'adsblol' || v === 'adsb.lol') return 'adsb'
  if (v === 'opensky') return 'opensky'
  return 'auto'
}

let preferAdsbUntil = 0
let openskyNetFails = 0

function activeSource(): CacheSource | null {
  return getCache().source
}

function clientsActive(): boolean {
  const hit = getCache().lastApiHitAt
  return hit != null && Date.now() - hit < IDLE_MS
}

function needsLiveRefresh(): boolean {
  const c = getCache()
  if (c.source !== 'opensky' && c.source !== 'adsb') return true
  if (c.flights.length === 0) return true
  if (c.updatedAt == null) return true
  return Date.now() - c.updatedAt >= pollIntervalMs()
}

/** True when the UI would feel frozen without a fresh poll. */
function cacheIsUrgent(): boolean {
  const c = getCache()
  if (c.source !== 'opensky' && c.source !== 'adsb') return true
  if (c.flights.length === 0) return true
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

function isOpenSkyNetworkError(e: unknown): boolean {
  if (e instanceof OpenSkyError) return false
  const msg = formatUpstreamError(e).toLowerCase()
  return (
    msg.includes('fetch failed') ||
    msg.includes('aborted') ||
    msg.includes('timeout') ||
    msg.includes('econnreset') ||
    msg.includes('etimedout') ||
    msg.includes('enotfound') ||
    msg.includes('eai_again') ||
    msg.includes('cert') ||
    msg.includes('socket')
  )
}

async function pollOpenSky(): Promise<void> {
  const flights = await fetchStates()
  const meta = lastOpenSkyMeta()
  setCreditsRemaining(meta.remaining)
  setFlights(flights, 'opensky')
  openskyNetFails = 0
  preferAdsbUntil = 0
  const c = getCache()
  console.log(
    `[poller] OpenSky ok — ${flights.length} flights, poll #${c.upstreamPolls}, ~${meta.creditCost} credit(s)` +
      (meta.remaining != null ? `, ${meta.remaining} left` : '') +
      ` (api hits since last poll: ${c.hitsSinceLastPoll})`,
  )
}

async function pollAdsb(reason: string): Promise<void> {
  const flights = await fetchAdsbLolStates()
  setCreditsRemaining(null)
  setFlights(flights, 'adsb')
  const c = getCache()
  console.log(
    `[poller] ADS-B (adsb.lol) ok — ${flights.length} flights, poll #${c.upstreamPolls}` +
      ` (${reason}; api hits since last poll: ${c.hitsSinceLastPoll})`,
  )
}

/**
 * Single upstream poll loop. All browsers share this cache — N clients do not
 * multiply OpenSky credits. Skips polls while no client has hit the API recently.
 */
export function startPoller(): void {
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
    const base = pollIntervalMs()
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

      if (!clientsActive()) {
        if (!loggedWaiting) {
          console.log(
            '[poller] waiting for client… (no upstream call until the UI connects)',
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

      const mode = upstreamMode()
      const forceAdsb =
        mode === 'adsb' || (mode === 'auto' && Date.now() < preferAdsbUntil)

      if (forceAdsb) {
        await pollAdsb(mode === 'adsb' ? 'FLIGHT_UPSTREAM=adsb' : 'OpenSky skipped')
      } else {
        try {
          await pollOpenSky()
        } catch (e) {
          if (e instanceof OpenSkyError && e.status === 429) throw e
          if (mode === 'auto' && isOpenSkyNetworkError(e)) {
            openskyNetFails += 1
            console.warn(
              `[poller] OpenSky network error (${openskyNetFails}): ${formatUpstreamError(e)}`,
            )
            if (openskyNetFails >= OPENSKY_FAIL_BEFORE_ADSB) {
              preferAdsbUntil = Date.now() + OPENSKY_RETRY_AFTER_MS
              console.warn(
                '[poller] OpenSky unreachable from this host (common on cloud IPs) — using ADS-B fallback for 30m',
              )
              await pollAdsb('OpenSky blocked / unreachable')
            } else {
              throw e
            }
          } else if (mode === 'auto') {
            // HTTP errors other than 429 — still try ADS-B so the globe stays live.
            console.warn(
              `[poller] OpenSky failed (${formatUpstreamError(e)}) — trying ADS-B`,
            )
            preferAdsbUntil = Date.now() + OPENSKY_RETRY_AFTER_MS
            await pollAdsb('OpenSky error fallback')
          } else {
            throw e
          }
        }
      }

      failStreak = 0
      creditBackoffUntil = 0
      schedule(pollIntervalMs())
    } catch (e) {
      const msg = formatUpstreamError(e)
      setPollError(msg)

      if (e instanceof OpenSkyError && e.status === 429) {
        failStreak = 0
        const wait = waitFor429(e)
        creditBackoffUntil = Date.now() + wait
        const hasLive =
          (getCache().source === 'opensky' || getCache().source === 'adsb') &&
          getCache().flights.length > 0
        console.warn(
          `[poller] ${msg} — credits exhausted; backing off ${Math.round(wait / 1000)}s` +
            (hasLive
              ? ' (serving last snapshot)'
              : ' (no live snapshot yet — wait for daily credit refill, set FLIGHT_UPSTREAM=adsb, or npm run dev:mock)') +
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
    if (Date.now() < creditBackoffUntil) return
    schedule(0)
  })

  const mode = upstreamMode()
  console.log(
    `[poller] starting (${isMockMode() ? 'MOCK' : mode}, interval ~${pollIntervalMs()}ms` +
      (isMockMode()
        ? ''
        : `; idle skip after ${IDLE_MS / 1000}s`) +
      ')',
  )
  schedule(isMockMode() ? 0 : 500)
}
