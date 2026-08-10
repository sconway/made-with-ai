import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const OPENSKY_API = 'https://opensky-network.org/api'
const OPENSKY_TOKEN_URL =
  'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token'

/**
 * Dev-server middleware that proxies `/opensky/*` to the OpenSky API. If
 * OPENSKY_CLIENT_ID / OPENSKY_CLIENT_SECRET are set (from a .env file or the
 * shell), it performs the OAuth2 client-credentials flow server-side and adds a
 * Bearer token — raising the rate limit from the throttled anonymous tier to
 * the authenticated one. The secret stays in the Node process, never the
 * browser bundle. Without credentials it proxies anonymously.
 */
function openSkyProxy(clientId?: string, clientSecret?: string): Plugin {
  let token: string | null = null
  let expiresAt = 0

  async function getToken(): Promise<string | null> {
    if (!clientId || !clientSecret) return null
    if (token && Date.now() < expiresAt) return token
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    })
    const r = await fetch(OPENSKY_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    if (!r.ok) {
      console.warn(`[opensky] token request failed: ${r.status} ${r.statusText}`)
      return null
    }
    const j = (await r.json()) as { access_token: string; expires_in: number }
    token = j.access_token
    expiresAt = Date.now() + (j.expires_in - 30) * 1000
    return token
  }

  return {
    name: 'opensky-proxy',
    configureServer(server) {
      server.middlewares.use('/opensky', async (req, res) => {
        try {
          const target = OPENSKY_API + (req.url ?? '')
          const headers: Record<string, string> = {}
          const t = await getToken()
          if (t) headers.Authorization = `Bearer ${t}`

          const upstream = await fetch(target, { headers })
          res.statusCode = upstream.status
          const ct = upstream.headers.get('content-type')
          if (ct) res.setHeader('content-type', ct)
          const ra = upstream.headers.get('retry-after')
          if (ra) res.setHeader('retry-after', ra)
          const buf = Buffer.from(await upstream.arrayBuffer())
          res.end(buf)
        } catch (e) {
          res.statusCode = 502
          res.end(JSON.stringify({ error: String(e) }))
        }
      })
    },
  }
}

const AIRPLANES_LIVE_API = 'https://api.airplanes.live'

/**
 * Proxies `/adsblive/*` to airplanes.live (keyless ADS-B). Sets a descriptive
 * User-Agent server-side (browsers can't) as the API requests, and avoids CORS.
 */
function adsbLiveProxy(): Plugin {
  return {
    name: 'adsblive-proxy',
    configureServer(server) {
      server.middlewares.use('/adsblive', async (req, res) => {
        try {
          const upstream = await fetch(AIRPLANES_LIVE_API + (req.url ?? ''), {
            headers: { 'User-Agent': 'flight-globe/0.1 (dev)' },
          })
          res.statusCode = upstream.status
          const ct = upstream.headers.get('content-type')
          if (ct) res.setHeader('content-type', ct)
          const buf = Buffer.from(await upstream.arrayBuffer())
          res.end(buf)
        } catch (e) {
          res.statusCode = 502
          res.end(JSON.stringify({ error: String(e) }))
        }
      })
    },
  }
}

const ADSBDB_API = 'https://api.adsbdb.com'

/** Proxies `/adsbdb/*` to adsbdb (keyless callsign -> route lookups). */
function adsbdbProxy(): Plugin {
  return {
    name: 'adsbdb-proxy',
    configureServer(server) {
      server.middlewares.use('/adsbdb', async (req, res) => {
        try {
          const upstream = await fetch(ADSBDB_API + (req.url ?? ''), {
            headers: { 'User-Agent': 'flight-globe/0.1 (dev)' },
          })
          res.statusCode = upstream.status
          const ct = upstream.headers.get('content-type')
          if (ct) res.setHeader('content-type', ct)
          const buf = Buffer.from(await upstream.arrayBuffer())
          res.end(buf)
        } catch (e) {
          res.statusCode = 502
          res.end(JSON.stringify({ error: String(e) }))
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      adsbLiveProxy(),
      adsbdbProxy(),
      openSkyProxy(env.OPENSKY_CLIENT_ID, env.OPENSKY_CLIENT_SECRET),
    ],
    server: { port: 5180 },
  }
})
