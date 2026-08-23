# Flight Globe

A 3D, real-time global air-traffic tracker — a stylized WebGL earth showing live
aircraft at their true position, altitude, and heading, with click-to-drill-in
country detail. Built with React + TypeScript + react-three-fiber.

![Flight Globe](docs/preview.png)

## Features

- **Stylized 3D earth** — custom GLSL day/night shader with a real-time
  terminator (sub-solar point from the current UTC time), city lights on the
  night side, a fresnel atmosphere glow, and a starfield.
- **Live aircraft** — polled from the [OpenSky Network](https://opensky-network.org),
  rendered as a single `InstancedMesh` (scales to ~20k), each placed at its real
  lat/lon/altitude and oriented along its heading. Colored by altitude.
- **Smooth motion** — between polls, aircraft are dead-reckoned from their last
  known velocity + heading, so they glide instead of teleporting.
- **Country interaction** — hover highlights a country (fill + outline
  conforming to its borders); click flies the camera in and scopes the live
  feed to that country's bounding box, listing its flights by altitude.
- **Per-flight detail** — click any plane for callsign, ICAO24, altitude,
  ground speed, heading, vertical rate, and live position.
- **Region presets** — World / North America / Europe, each with a scoped query.
- **Filters** — airborne/ground, altitude & speed bands, airline code, airline vs GA.
- **Trails** — breadcrumbs on selected/pinned aircraft (or all visible traffic).
- **Search, playback, follow, multi-pin** — tracker-style tools on the shared feed.

## Running

Requires **Node 20+** (uses `--env-file`).

```bash
cp .env.example .env   # add OpenSky client id/secret
npm install
npm run dev            # shared backend + Vite (real OpenSky, same as deploy)
npm run dev:mock       # synthetic planes only (no credits)
```

`npm run dev` starts two processes — the same architecture you’d run in
production:

1. **Shared backend** (`server/`) — polls OpenSky once on an interval, serves
   `/api/flights` and `/api/routes/:callsign` from a shared cache.
2. **Vite** — React app; browser only talks to `/api/*` (proxied to the backend).

Many browser tabs share one OpenSky credit stream. Secrets never leave the
Node process. Use `npm run dev:mock` only when you want to avoid OpenSky
entirely (UI work, load tests).

**Credit note:** a global `/states/all` costs **4 credits**. The poller defaults
to **2 minutes**, skips OpenSky while no client is active, restores the last
snapshot from disk, and on 429 backs off at least 15 minutes (honoring
OpenSky’s `X-Rate-Limit-Retry-After-Seconds`). Free-tier credits refill daily.

### Local testing (accurate multi-user path)

| Goal | Command |
|------|---------|
| Live OpenSky (mirrors deploy) | `npm run dev` — open 2+ tabs |
| UI / load tests without credits | `npm run dev:mock` |
| Prove fan-in (N clients ≫ upstream polls) | `npm run server:mock` then `npm run test:api` |
| Health / credits remaining | `curl -s localhost:8787/api/health \| jq` |
| Bypass backend (old direct proxies) | `VITE_USE_BACKEND=0 npm run web` |

`npm run test:api` spins up parallel clients against `/api/flights` and prints
`apiHits` vs `upstreamPolls`. A healthy run shows many client hits per upstream
poll (or zero extra polls during a short window if the cache is already warm).

Useful env knobs (see `.env.example`):

- `FLIGHT_UPSTREAM` — `auto` (OpenSky → adsb.lol), `opensky`, or `adsb`
- `FLIGHT_POLL_INTERVAL_MS` — backend poll cadence (default 120000 / OpenSky)
- `FLIGHT_BACKEND_MOCK=1` — synthetic traffic (`npm run dev:mock`)
- `VITE_USE_BACKEND=0` — browser hits OpenSky/airplanes.live directly (debug only)

```bash
npm run build    # type-check + production bundle
npm start        # serve API + dist/ on PORT (or FLIGHT_BACKEND_PORT / 8787)
npm run preview  # build then start (local prod check)
```

## Deploy (Render / Fly / Railway)

One **always-on** Web Service is enough: the Node server polls an upstream feed
and serves both `/api/*` and the Vite `dist/` UI (same origin, so relative `/api`
calls keep working).

**Important:** [OpenSky may block cloud / hyperscaler egress IPs](https://openskynetwork.github.io/opensky-api/).
On Render/Fly/Railway the poller therefore defaults to `FLIGHT_UPSTREAM=auto`:
try OpenSky, then fall back to keyless [adsb.lol](https://api.adsb.lol) hub
queries so the globe still fills. Set `FLIGHT_UPSTREAM=adsb` to skip OpenSky
entirely on those hosts.

**Render.com example**

1. New **Web Service** from this repo (Node 20+).
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Instance: **paid / always-on** (free tier spin-down breaks the live poller).
5. Environment:

| Key | Notes |
|-----|--------|
| `FLIGHT_UPSTREAM` | `auto` (default) or `adsb` on cloud hosts |
| `OPENSKY_CLIENT_ID` | Optional if using `adsb`; needed for local OpenSky |
| `OPENSKY_CLIENT_SECRET` | Optional if using `adsb` |
| `FLIGHT_POLL_INTERVAL_MS` | `120000` for OpenSky; ADS-B defaults to 60s |
| `PORT` | Set automatically by Render |

Optional: attach a small disk and point caches at it later; in-memory + optional
on-disk files under `server/` already restore across restarts when the
filesystem persists.

Local check: `npm run preview` then open `http://localhost:8787`.

## Architecture

```
server/            # shared poller (one upstream for all users)
  index.ts         # HTTP: /api/health, /api/flights, /api/routes/:callsign
  poller.ts        # world snapshot on an interval (+ mock / ADS-B fallback)
  opensky.ts       # OAuth2 + states/all
  adsblol.ts       # keyless ADS-B fallback for cloud hosts
  cache.ts         # in-memory flights; region/bbox filter with no extra upstream
  routes.ts        # shared adsbdb lookup + disk cache
src/
  lib/
    api.ts         # browser → /api/*
    geo.ts         # lat/lon <-> vector3, altitude scaling, dead reckoning
    opensky.ts     # direct OpenSky client (only when VITE_USE_BACKEND=0)
    …
  components/
    DataLayer.tsx  # polls /api/flights for region/country scope
    …
```

### Key design notes

- **Placement is the single source of truth.** `latLonToVector3` in `geo.ts`
  positions countries and aircraft; the earth's texture UVs are computed
  analytically in the shader as the exact inverse of that formula, so imagery,
  borders, and planes are guaranteed to align (no manual rotation fudging).
- **Country picking without thousands of meshes.** An invisible pick-sphere is
  raycast; the hit point is converted to lat/lon and tested against country
  polygons (bbox pre-filter + point-in-polygon). Only the hovered/selected
  country builds fill geometry (earcut triangulation projected to the sphere).
- **Shared backend, scoped responses.** The server keeps one world snapshot and
  filters by region/country bbox on read — switching region does not burn a new
  OpenSky credit. Clients dead-reckon between cache refreshes.

## Data sources

The backend polls OpenSky `/states/all` on a fixed interval while clients are
active (default **2 min**; world queries cost **4 credits** ≈ 2.9k/day on the
free tier). Region and country views are **slices of that cache**. When a view
has more than `MAX_RENDER` (4,000) aircraft, a monotonic hash samples a stable
fraction (HUD shows counts). Client errors back off and surface an on-screen
message.

### OpenSky credentials

Anonymous OpenSky is ~400 credits/day; a **free** account gets ~4,000.

1. Create a free account at https://opensky-network.org
2. Account → create an API client (OAuth2 client credentials)
3. Put `OPENSKY_CLIENT_ID` / `OPENSKY_CLIENT_SECRET` in `.env` and restart

Used by `server/` (and by Vite’s `/opensky` proxy only if `VITE_USE_BACKEND=0`).

### Direct / legacy path (`VITE_USE_BACKEND=0`)

`VITE_FLIGHT_SOURCE=opensky` or airplanes.live via Vite proxies — fine for solo
debugging, not for many concurrent users.

For ocean coverage beyond terrestrial ADS-B you'd add satellite ADS-B
(Aireon/Spire) or a commercial feed (FlightAware AeroAPI, ADS-B Exchange).

## Possible next steps

- **Deploy** — one always-on Node service (`npm run build` + `npm start`) on
  Render / Fly / Railway; serves `/api/*` and the Vite `dist/` UI.
- **CDN in front of `/api/flights`** — `Cache-Control: max-age=5` is already set;
  edge caching multiplies fan-in further.
- **WebSocket / SSE push** — push snapshot updates instead of client polling.
- **Weather overlay** — drape RainViewer / OpenWeatherMap tiles as an additive
  layer, or volumetric cloud/storm cells at altitude.
- **Bloom** — re-add a glow pass (was removed due to a Vite pre-bundling bug in
  `@react-three/postprocessing` 2.16 + `postprocessing` 6.37+; pin
  `postprocessing@6.36.x` or use a newer r3f-postprocessing when re-adding).
- **LOD aircraft** — swap the instanced dart glyph for detailed glTF models when
  zoomed into a country.
```
