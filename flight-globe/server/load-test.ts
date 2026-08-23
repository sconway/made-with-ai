/**
 * Local multi-client smoke test.
 *
 * Starts N parallel pollers against the shared backend and prints whether
 * apiHits grow much faster than upstreamPolls (the whole point of the backend).
 *
 * Usage (server already running):
 *   npm run test:api
 *   npm run test:api -- --clients=20 --seconds=30
 */

const BASE = process.env.FLIGHT_BACKEND_URL ?? 'http://localhost:8787'

function argNum(name: string, fallback: number): number {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`))
  if (!hit) return fallback
  const n = Number(hit.slice(name.length + 3))
  return Number.isFinite(n) ? n : fallback
}

const clients = argNum('clients', 12)
const seconds = argNum('seconds', 25)
const intervalMs = argNum('interval', 2000)

async function getHealth(): Promise<{
  upstreamPolls: number
  apiHits: number
  hitsPerUpstreamPoll: number
  cache: { count: number; ageMs: number | null }
  mock: boolean
}> {
  const r = await fetch(`${BASE}/api/health`)
  if (!r.ok) throw new Error(`health ${r.status}`)
  return (await r.json()) as Awaited<ReturnType<typeof getHealth>>
}

async function pollFlights(scope: string): Promise<void> {
  const r = await fetch(`${BASE}/api/flights?scope=${scope}`)
  if (!r.ok) throw new Error(`flights ${r.status}`)
}

async function main(): Promise<void> {
  console.log(
    `Load test → ${BASE}  (${clients} clients, ${seconds}s, every ${intervalMs}ms)`,
  )

  let health
  try {
    health = await getHealth()
  } catch (e) {
    console.error(
      'Cannot reach backend. Start it first: npm run server   (or npm run dev)',
    )
    console.error(e)
    process.exit(1)
  }

  console.log(
    `Before: upstreamPolls=${health.upstreamPolls} apiHits=${health.apiHits} cache=${health.cache.count} mock=${health.mock}`,
  )

  const start = await getHealth()
  const stopAt = Date.now() + seconds * 1000
  const scopes = ['world', 'na', 'eu']
  const workers: Promise<void>[] = []

  for (let i = 0; i < clients; i++) {
    const scope = scopes[i % scopes.length]!
    workers.push(
      (async () => {
        while (Date.now() < stopAt) {
          await pollFlights(scope)
          await new Promise((r) => setTimeout(r, intervalMs))
        }
      })(),
    )
  }

  await Promise.all(workers)
  const end = await getHealth()

  const upstreamDelta = end.upstreamPolls - start.upstreamPolls
  const apiDelta = end.apiHits - start.apiHits
  const ratio = upstreamDelta > 0 ? apiDelta / upstreamDelta : apiDelta

  console.log(
    `After:  upstreamPolls=${end.upstreamPolls} (+${upstreamDelta}) apiHits=${end.apiHits} (+${apiDelta})`,
  )
  console.log(
    `Fan-in: ~${ratio.toFixed(1)} client requests per upstream poll during the window`,
  )

  if (apiDelta < clients) {
    console.warn('Few API hits recorded — check that requests reached this server.')
    process.exit(2)
  }
  if (upstreamDelta > Math.ceil(seconds / 5) + 3) {
    console.warn(
      'Upstream polls look high for this window — expected ~1 per poll interval.',
    )
  } else {
    console.log(
      'OK: many client hits against few (or zero extra) upstream polls — shared cache is working.',
    )
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
