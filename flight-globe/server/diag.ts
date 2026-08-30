import dnsSync from 'node:dns'
import dns from 'node:dns/promises'
import net from 'node:net'
import tls from 'node:tls'

export interface ProbeResult {
  url: string
  host: string
  a: string[]
  aaaa: string[]
  tcpMs: number | null
  httpStatus: number | null
  httpMs: number | null
  error: string | null
}

async function resolve(host: string): Promise<{ a: string[]; aaaa: string[] }> {
  const [a, aaaa] = await Promise.all([
    dns.resolve4(host).catch(() => [] as string[]),
    dns.resolve6(host).catch(() => [] as string[]),
  ])
  return { a, aaaa }
}

function tcpConnect(host: string, port: number, timeoutMs: number): Promise<number> {
  const t0 = Date.now()
  return new Promise((resolve, reject) => {
    const socket = net.connect({ host, port })
    const done = (err?: Error) => {
      socket.removeAllListeners()
      socket.destroy()
      if (err) reject(err)
      else resolve(Date.now() - t0)
    }
    socket.setTimeout(timeoutMs)
    socket.once('connect', () => done())
    socket.once('timeout', () => done(new Error(`tcp timeout after ${timeoutMs}ms`)))
    socket.once('error', done)
  })
}

async function probe(url: string, method = 'GET'): Promise<ProbeResult> {
  const u = new URL(url)
  const host = u.hostname
  const port = Number(u.port) || (u.protocol === 'https:' ? 443 : 80)
  let a: string[] = []
  let aaaa: string[] = []
  let tcpMs: number | null = null
  let httpStatus: number | null = null
  let httpMs: number | null = null
  let error: string | null = null

  try {
    const rec = await resolve(host)
    a = rec.a
    aaaa = rec.aaaa
    tcpMs = await tcpConnect(host, port, 8_000)
    const t0 = Date.now()
    const res = await fetch(url, {
      method,
      headers: { 'User-Agent': 'flight-globe-diag/1' },
      signal: AbortSignal.timeout(12_000),
      // HEAD/GET only — never send secrets
    })
    httpMs = Date.now() - t0
    httpStatus = res.status
    await res.body?.cancel().catch(() => undefined)
  } catch (e) {
    error = e instanceof Error ? e.message : String(e)
  }

  return { url, host, a, aaaa, tcpMs, httpStatus, httpMs, error }
}

/** Outbound connectivity from *this* process (Render vs laptop). */
export async function runOutboundDiag(): Promise<{
  node: string
  dnsOrder: string
  tls: string
  probes: ProbeResult[]
}> {
  const probes = await Promise.all([
    probe(
      'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token',
      'HEAD',
    ),
    probe('https://opensky-network.org/api/states/all?lamin=40&lomin=-74&lamax=41&lomax=-73'),
    probe('https://api.github.com'),
    probe('https://api.adsb.lol/v2/mil'),
  ])
  return {
    node: process.version,
    dnsOrder: dnsSync.getDefaultResultOrder?.() ?? 'unknown',
    tls: tls.DEFAULT_MIN_VERSION ?? 'unknown',
    probes,
  }
}
