import type { BBox, FlightState } from './types'
import dns from 'node:dns'

// Render (and many cloud hosts) often prefer IPv6; OpenSky's AAAA path can
// fail with opaque "fetch failed". Prefer IPv4 for outbound API calls.
dns.setDefaultResultOrder('ipv4first')

const OPENSKY_API = 'https://opensky-network.org/api'
const OPENSKY_TOKEN_URL =
  'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token'

/** Unwrap undici/Node fetch failures into something useful in /api/health. */
export function formatUpstreamError(err: unknown): string {
  if (!(err instanceof Error)) return String(err)
  const parts = [err.message]
  let c: unknown = (err as Error & { cause?: unknown }).cause
  let depth = 0
  while (c instanceof Error && depth < 4) {
    const code =
      'code' in c && typeof (c as { code?: unknown }).code === 'string'
        ? ` [${(c as { code: string }).code}]`
        : ''
    parts.push(`${c.message}${code}`)
    c = (c as Error & { cause?: unknown }).cause
    depth++
  }
  return parts.filter(Boolean).join(' → ')
}

/** True for DNS/TLS/TCP failures (not HTTP 4xx/5xx from OpenSky). */
export function isOpenSkyNetworkError(err: unknown): boolean {
  if (err instanceof OpenSkyError) return false
  const msg = formatUpstreamError(err).toLowerCase()
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

/** How long to skip OpenSky after repeated connect failures (cloud IP blocks). */
const OPENSKY_DOWN_MS = 2 * 60_000
/** Open circuit after this many consecutive connect/DNS failures. */
const OPENSKY_FAILS_BEFORE_DOWN = 2
let openskyDownUntil = 0
let openskyNetFails = 0
let loggedOpenSkyDown = false

/** Skip further OpenSky calls while this host looks firewalled from OpenSky. */
export function isOpenSkyUnreachable(): boolean {
  return Date.now() < openskyDownUntil
}

/** Ms until the OpenSky circuit breaker reopens (0 if currently reachable). */
export function openskyUnreachableRemainingMs(): number {
  return Math.max(0, openskyDownUntil - Date.now())
}

export function noteOpenSkySuccess(): void {
  openskyNetFails = 0
  openskyDownUntil = 0
  loggedOpenSkyDown = false
}

export function noteOpenSkyFailure(err: unknown): void {
  if (!isOpenSkyNetworkError(err)) return
  openskyNetFails += 1
  if (openskyNetFails < OPENSKY_FAILS_BEFORE_DOWN) return
  openskyDownUntil = Date.now() + OPENSKY_DOWN_MS
  if (!loggedOpenSkyDown) {
    loggedOpenSkyDown = true
    console.warn(
      `[opensky] host appears unable to reach OpenSky (${formatUpstreamError(err)}) — ` +
        `skipping OpenSky for ${OPENSKY_DOWN_MS / 1000}s (common on cloud IPs)`,
    )
  }
}

export class OpenSkyError extends Error {
  status: number
  retryAfterMs?: number
  remaining?: number
  constructor(
    status: number,
    statusText: string,
    opts?: { retryAfterMs?: number; remaining?: number },
  ) {
    const extra =
      opts?.remaining != null ? ` (credits left: ${opts.remaining})` : ''
    super(`OpenSky ${status} ${statusText}${extra}`)
    this.name = 'OpenSkyError'
    this.status = status
    this.retryAfterMs = opts?.retryAfterMs
    this.remaining = opts?.remaining
  }
}

/** Thrown when the circuit breaker is open — never treat as a short transient retry. */
export class OpenSkyCircuitOpenError extends Error {
  constructor() {
    super('OpenSky unreachable from this host (circuit open)')
    this.name = 'OpenSkyCircuitOpenError'
  }
}

type RawState = (number | string | boolean | null)[]

interface StatesResponse {
  time: number
  states: RawState[] | null
}

export interface OpenSkyFetchMeta {
  remaining: number | null
  /** World/global /states/all costs 4 credits on OpenSky's scale. */
  creditCost: number
}

let token: string | null = null
let expiresAt = 0
let lastMeta: OpenSkyFetchMeta = { remaining: null, creditCost: 4 }

export function lastOpenSkyMeta(): OpenSkyFetchMeta {
  return lastMeta
}

function creds(): { id: string; secret: string } | null {
  const id = process.env.OPENSKY_CLIENT_ID?.trim()
  const secret = process.env.OPENSKY_CLIENT_SECRET?.trim()
  if (!id || !secret) return null
  return { id, secret }
}

export function hasOpenSkyAuth(): boolean {
  return creds() != null
}

async function getToken(): Promise<string | null> {
  const c = creds()
  if (!c) return null
  if (token && Date.now() < expiresAt) return token

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: c.id,
    client_secret: c.secret,
  })
  const r = await fetch(OPENSKY_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
    signal: AbortSignal.timeout(20_000),
  })
  if (!r.ok) {
    console.warn(`[opensky] token request failed: ${r.status} ${r.statusText}`)
    // Don't silently fall back to anonymous on Render — auth failures should
    // surface. Still return null so callers can decide; poller logs the fetch.
    return null
  }
  const j = (await r.json()) as { access_token: string; expires_in: number }
  token = j.access_token
  expiresAt = Date.now() + (j.expires_in - 30) * 1000
  return token
}

function parseStates(data: StatesResponse): FlightState[] {
  if (!data.states) return []
  const out: FlightState[] = []
  for (const s of data.states) {
    const lon = s[5] as number | null
    const lat = s[6] as number | null
    if (lon == null || lat == null) continue
    out.push({
      icao24: s[0] as string,
      callsign: ((s[1] as string) || '').trim(),
      originCountry: (s[2] as string) || '',
      lon,
      lat,
      baroAltitude: s[7] as number | null,
      onGround: s[8] as boolean,
      velocity: s[9] as number | null,
      track: s[10] as number | null,
      verticalRate: s[11] as number | null,
      geoAltitude: s[13] as number | null,
      lastContact: s[4] as number,
      squawk: ((s[14] as string) || '').trim() || null,
    })
  }
  return out
}

function creditCostForBBox(bbox?: BBox): number {
  if (!bbox) return 4 // global
  const area = Math.abs((bbox.maxLat - bbox.minLat) * (bbox.maxLon - bbox.minLon))
  if (area <= 25) return 1
  if (area <= 100) return 2
  if (area <= 400) return 3
  return 4
}

function readRetryAfterMs(res: Response): number | undefined {
  // OpenSky documents X-Rate-Limit-Retry-After-Seconds; also honor Retry-After.
  const x = res.headers.get('X-Rate-Limit-Retry-After-Seconds')
  if (x != null && Number.isFinite(Number(x))) return Number(x) * 1000
  const ra = res.headers.get('Retry-After')
  if (ra != null && Number.isFinite(Number(ra))) return Number(ra) * 1000
  return undefined
}

function readRemaining(res: Response): number | undefined {
  const h = res.headers.get('X-Rate-Limit-Remaining')
  if (h == null) return undefined
  const n = Number(h)
  return Number.isFinite(n) ? n : undefined
}

/**
 * One OpenSky request. Global /states/all costs **4 credits** (not 1).
 * Prefer infrequent world polls + server-side filtering over many bbox calls.
 */
export async function fetchStates(bbox?: BBox): Promise<FlightState[]> {
  if (isOpenSkyUnreachable()) {
    throw new OpenSkyCircuitOpenError()
  }
  try {
    let url = `${OPENSKY_API}/states/all`
    if (bbox) {
      const params = new URLSearchParams({
        lamin: bbox.minLat.toFixed(4),
        lomin: bbox.minLon.toFixed(4),
        lamax: bbox.maxLat.toFixed(4),
        lomax: bbox.maxLon.toFixed(4),
      })
      url += `?${params.toString()}`
    }

    const headers: Record<string, string> = {
      'User-Agent': 'flight-globe-backend/0.1',
    }
    const t = await getToken()
    if (t) headers.Authorization = `Bearer ${t}`

    const res = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(45_000),
    })
    const remaining = readRemaining(res)
    const creditCost = creditCostForBBox(bbox)
    lastMeta = { remaining: remaining ?? null, creditCost }

    if (!res.ok) {
      throw new OpenSkyError(res.status, res.statusText, {
        retryAfterMs: readRetryAfterMs(res),
        remaining,
      })
    }

    if (remaining != null) {
      console.log(
        `[opensky] ok — ${creditCost} credit(s) used, ${remaining} remaining today`,
      )
    }
    const flights = parseStates((await res.json()) as StatesResponse)
    noteOpenSkySuccess()
    return flights
  } catch (e) {
    noteOpenSkyFailure(e)
    throw e
  }
}

export interface OpenSkyEstAirports {
  dep: string | null
  arr: string | null
}

/**
 * Recent flight record for an aircraft — estimated departure/arrival ICAO
 * airports when OpenSky could infer them from the track. Costs ~1 credit.
 * Returns null when nothing useful is available (404 / empty / no airports).
 */
export async function fetchOpenSkyFlightAirports(
  icao24: string,
  lookbackSec = 12 * 3600,
): Promise<OpenSkyEstAirports | null> {
  const id = icao24.trim().toLowerCase()
  if (!/^[0-9a-f]{6}$/.test(id)) return null
  if (isOpenSkyUnreachable()) return null

  const end = Math.floor(Date.now() / 1000)
  const begin = end - lookbackSec
  const url =
    `${OPENSKY_API}/flights/aircraft?icao24=${encodeURIComponent(id)}` +
    `&begin=${begin}&end=${end}`

  const headers: Record<string, string> = {
    'User-Agent': 'flight-globe-backend/0.1',
  }

  try {
    const t = await getToken()
    if (t) headers.Authorization = `Bearer ${t}`

    const res = await fetch(url, {
      headers,
      signal: AbortSignal.timeout(20_000),
    })
    const remaining = readRemaining(res)
    lastMeta = { remaining: remaining ?? null, creditCost: 1 }

    if (res.status === 404) return null
    if (!res.ok) {
      throw new OpenSkyError(res.status, res.statusText, {
        retryAfterMs: readRetryAfterMs(res),
        remaining,
      })
    }

    const rows = (await res.json()) as Array<{
      estDepartureAirport?: string | null
      estArrivalAirport?: string | null
      lastSeen?: number
      firstSeen?: number
    }>
    if (!Array.isArray(rows) || rows.length === 0) return null

    // Prefer the most recently active leg that has both airports.
    const sorted = rows
      .slice()
      .sort((a, b) => (b.lastSeen ?? 0) - (a.lastSeen ?? 0))
    for (const row of sorted) {
      const dep = (row.estDepartureAirport || '').trim().toUpperCase() || null
      const arr = (row.estArrivalAirport || '').trim().toUpperCase() || null
      if (dep && arr) {
        noteOpenSkySuccess()
        return { dep, arr }
      }
    }
    noteOpenSkySuccess()
    return null
  } catch (e) {
    noteOpenSkyFailure(e)
    throw e
  }
}
