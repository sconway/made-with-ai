# Flight Globe — Feature Roadmap

A set of feature specs meant to be handed to a coding model (or a person) one at a
time. Each feature is self-contained: read **Part 1 (Shared context)** first, then the
feature's section in **Part 2**. **Part 3** has a prompt template for handing off a
feature.

The goal is to make Flight Globe more useful than Flightradar24's web map. It does
that by answering questions FR24 doesn't ("why is that plane circling?", "how bad
is it at my airport?", "what's over my house?"), and by making features FR24
charges for free.

---

## Part 1 — Shared context (read before any feature)

### 1.1 What the app is

A real-time air-traffic tracker: a stylized WebGL globe with live aircraft drawn at
their true position, altitude and heading. Users can drill into regions, countries,
airports and single flights, switch to a flat 2D street map, follow a plane with a
chase camera, scrub a short playback history, and set simple alerts.

### 1.2 Stack

| Layer | Tech |
|---|---|
| UI | React 18, TypeScript 5.6, Vite |
| 3D | three r169, @react-three/fiber 8, @react-three/drei 9 |
| State | zustand 4 (`src/store/useStore.ts`) |
| Backend | Node 20+, plain `node:http` server run with `tsx` (`server/index.ts`) |
| Deploy | One always-on Node process serves `/api/*` and the built `dist/` UI (Hetzner VPS via `npm run deploy`; Render also documented) |

There is **no database** today. Server state is in memory, with a few JSON cache
files on disk (`server/.flights-cache.json`, route cache).

### 1.3 Data sources in use

| Data | Source | Where |
|---|---|---|
| Live positions | OpenSky `/states/all` (OAuth2), whole world in one call | `server/opensky.ts`, `server/poller.ts` |
| Routes (origin/destination by callsign) | adsbdb `/v0/callsign/:cs` | `server/routes.ts` (shared + disk cache) |
| Aircraft type & registration by hex | adsbdb `/v0/aircraft/:hex` | `src/lib/aircraftLookup.ts` (client, queued and rate-limited) |
| Aircraft photos | Planespotters `/pub/photos/hex/:hex`, then a Wikipedia lead image per ICAO type | `server/index.ts` `handlePhoto`, `server/typePhotos.ts` |
| Weather radar | RainViewer tiles (proxied and cached) | `server/weather.ts`, `src/components/WeatherLayer.tsx` |
| Airports | OurAirports, compacted into `src/data/airports.json` | `src/lib/airports.ts` |
| Street map tiles | OpenStreetMap standard tiles (darkened in a shader) | `src/lib/mapTiles.ts`, `src/components/MapBasemap.tsx` |
| Countries | GeoJSON loaded at runtime | `src/lib/countries.ts` |

### 1.4 Hard constraints — every feature must respect these

1. **Position cadence is coarse.** The backend polls OpenSky about **every 2
   minutes** (`FLIGHT_POLL_INTERVAL_MS`, default 120000). A world poll costs 4
   credits, and the free tier gives about 4,000 per day. Do **not** add per-user
   or per-feature OpenSky calls. Any behavior detection (holding, go-around)
   must work with roughly one sample per aircraft every 2 minutes, or must add a
   *shared* denser source and document its cost.
2. **One shared upstream, many clients.** Every new upstream call goes through
   the backend, uses a shared cache, and sends a User-Agent with a contact URL:
   `flight-globe/0.1 (+<PUBLIC_SITE_URL or repo URL>)`. Planespotters and
   Wikipedia reject requests without one. See `PHOTO_UA` in `server/index.ts`.
3. **History is small.** `server/history.ts` keeps `MAX_SNAPSHOTS = 60` world
   snapshots (about 2 hours at a 2-minute poll), in memory only. Anything that
   needs longer history must add persistence (see F7).
4. **Rendering budget.** `MAX_RENDER = 4000` aircraft are drawn per view
   (`src/lib/viewport.ts`). Larger sets are thinned evenly but stably
   (`src/lib/visibleFlights.ts`). Planes are drawn as instances (one draw call for
   all of them; `MAX_INSTANCES = 20000` in `src/components/Flights.tsx`). Never
   create a mesh per aircraft.
5. **No schedule data.** We have no scheduled departure or arrival times, gates,
   or delay codes. "Delay" can only be *estimated* (see F1, F12). Anything that
   truly needs schedules must name a paid provider and stay behind a feature
   flag.
6. **Secrets stay server-side.** `.env` is never committed and never sent to the
   browser. Browser code calls `/api/*` only.
7. **Do not commit** unless the owner asks. Do not add analytics.

### 1.5 Architecture map

```
server/
  index.ts        HTTP routes: /api/health, /api/flights, /api/playback,
                  /api/routes/:callsign, /api/photos/:hex, /api/photos/type/:code,
                  /api/weather, /api/weather/tile; serves dist/ + SEO pages
  poller.ts       Polls the world snapshot on an interval; skips while no client is active
  opensky.ts      OAuth2 + states/all
  cache.ts        In-memory world feed; region filtering by bbox; resolveScope()
  history.ts      Ring buffer of snapshots for playback (flightsAt(t))
  routes.ts       adsbdb route lookups, shared + disk cache
  weather.ts      RainViewer catalog + tile proxy cache
  typePhotos.ts   ICAO type -> Wikipedia article photo
  regions.ts      Region presets (world, na, eu, as, oc, sa, af)
src/
  App.tsx, main.tsx
  store/useStore.ts          All app state (zustand). Selection, hover, region,
                             country, airport, filters, alerts, playback, display prefs
  components/
    Scene.tsx                r3f Canvas + scene graph
    DataLayer.tsx            Polls /api/flights (region scope, or world while a country is selected)
    Flights.tsx              Instanced aircraft, picking, hover/selection visuals, map-mode scaling
    Trails.tsx, Arcs.tsx     Breadcrumb trails, route arcs
    Earth.tsx, Atmosphere.tsx, Countries.tsx, WeatherLayer.tsx, MapBasemap.tsx, AirportPins.tsx
    CameraRig.tsx            Globe/map camera, focus animations
    HUD.tsx                  Sidebar: region chips, search, filters, alerts, pins, flight list
    FlightDetailPanel.tsx    Right-hand card for the selected flight
    AirportDetailPanel.tsx   Departures / arrivals / nearby board for a selected airport
    AlertWatcher.tsx, AlertsPanel.tsx   Alert rules -> in-app toasts
    PlaybackBar.tsx          Live / scrub history
    DeepLinkSync.tsx         URL <-> store (region, icao, flight, airport, follow, camera)
  lib/
    geo.ts                   latLonToVector3 (single source of truth for placement), dead reckoning
    flightInfo.ts            resolveRoute, estimateFlightTimes, formatting
    squawk.ts                Emergency squawk detection (confirmed across samples)
    filters.ts, search.ts, visibleFlights.ts, countryFlights.ts
    aircraftTypes.ts         ICAO type -> display name
    aircraftFamily.ts        ICAO type -> 3D model family
    prefs.ts                 localStorage-backed preferences
    deepLink.ts              Parse/serialize URL params
    mapView.ts, mapTiles.ts  2D map projection + tiles
```

### 1.6 Conventions

- **Units:** `FlightState` uses SI units: meters, m/s, degrees, unix seconds for
  `lastContact`. Convert only when displaying (`fmtAltitude`, `fmtSpeed`).
- **Placement:** always use `latLonToVector3` / `altitudeToRadius` from
  `src/lib/geo.ts` on the globe, and `projectMapLocal` / `projectMapWorld` from
  `src/lib/mapView.ts` in map mode.
- **State:** add fields and actions to `useStore.ts`. Preferences that should
  survive a refresh get `readX` / `writeX` in `src/lib/prefs.ts`.
- **Server endpoints:** add a branch in the router in `server/index.ts`, return
  JSON with `sendJson`, cache with a TTL `Map`, and list the endpoint in the 404
  `endpoints` array.
- **URL state:** new shareable state goes through `src/lib/deepLink.ts` and
  `DeepLinkSync.tsx`. Writes use `replaceState` only.
- **Styling:** plain CSS in `src/index.css`, dark navy palette, panels use the
  `.panel` class, and the UI uses CSS variables such as `--text-dim`.
- **Comments:** only explain constraints the code can't show. Match the
  surrounding density.
- **Verification:** run `npx tsc --noEmit` after changes. For UI, run
  `npm run dev` (Vite on 5180, backend on 8787) and check it in a browser.
  `npm run dev:mock` gives synthetic traffic without using OpenSky credits.

### 1.7 Key types

```ts
// src/lib/flight.ts
interface FlightState {
  icao24: string; callsign: string; originCountry: string
  lon: number; lat: number
  baroAltitude: number | null; geoAltitude: number | null   // m
  onGround: boolean
  velocity: number | null      // m/s
  track: number | null         // deg true
  verticalRate: number | null  // m/s
  lastContact: number          // unix s
  squawk?: string | null; registration?: string; typeCode?: string; category?: string
  route?: Route
}
interface Route {
  oLat: number; oLon: number; dLat: number; dLon: number
  oIata?: string; dIata?: string; oName?: string; dName?: string; oCity?: string; dCity?: string
}
```

`estimateFlightTimes(flight, route)` in `src/lib/flightInfo.ts` returns estimated
takeoff and arrival times, remaining seconds, progress, and `arrived` /
`notDeparted` flags, all derived from position and speed.

---

## Part 2 — Feature specs

Priority key: **P0** build first, **P1** high value, **P2** nice to have.
Effort key: **S** about 1 day, **M** 2–4 days, **L** a week or more.

| ID | Feature | Priority | Effort | New data needed? |
|---|---|---|---|---|
| F1 | Delay & disruption heatmap | P1 | M | No (estimated) |
| F2 | Flight behavior events ("why is it doing that?") | P1 | L | Better with a denser feed |
| F3 | Weather impact on routes & airports | P2 | M | No |
| F4 | Sky above me (location + AR) | P1 | M | No |
| F5 | Noise & overflight report | P2 | M | Needs F7 |
| F6 | Rich custom alerts + push | P0 | M | No |
| F7 | Long history & per-aircraft flight log | P0 | L | Storage (SQLite) |
| F8 | Advanced filters & shareable presets | P1 | S | No |
| F9 | Cinematic camera modes | P2 | M | Terrain tiles (optional) |
| F10 | Global traffic time-lapse | P1 | M | Needs F7 |
| F11 | Route & network explorer | P2 | M | No |
| F12 | My trip tracker | P0 | M | Better with schedules |
| F13 | Emissions estimates | P2 | S | No |
| F14 | Spotter tools | P2 | M | No |
| F15 | Embeddable widget & public API | P2 | M | No |

Recommended order: **F7, then F6 and F12, then F8, F1, F10**, with the rest after.
F7 comes first because F5, F10 and parts of F2, F6 and F12 depend on it.

---

### F1 — Delay & disruption heatmap

**Goal.** Show at a glance where the air traffic system is struggling right now.

**User stories**
- As a traveler, I can see which airports are congested before I leave.
- As an enthusiast, I can spot a ground stop or weather disruption forming.

**Signals.** We have no schedules, so measure disruption with proxies:
1. **Holding / circling density** near an airport (from F2's detector, or a
   simpler version: aircraft within 40 km whose track changes by more than 270°
   over the last N samples).
2. **Ground backlog:** aircraft with `onGround` within 5 km of the airport whose
   routes depart from it, compared with a rolling baseline for that airport and
   hour.
3. **Arrival slowdown:** for inbound aircraft within 150 km, compare ground speed
   with the typical approach speed for their type family. Sustained low speed
   far out suggests metering.
4. **Diversions:** count from F2 when available.

Combine these into a 0–100 **disruption score** per airport, using weights that
live in a config constant.

**Design**
- Server: new `server/disruption.ts`. On every poll, compute scores for large
  and medium airports that have nearby traffic. Keep a 7-day rolling baseline per
  airport and hour bucket (in memory to start; persisted through F7 when it
  exists).
- Endpoint: `GET /api/disruption?scope=<region>` returns
  `{ updatedAt, airports: [{ iata, score, holding, groundQueue, slowInbound, diversions }] }`.
- Client: new `src/components/DisruptionLayer.tsx`. On the globe, draw instanced
  discs at airports, colored green, then amber, then red, sized by score. In map
  mode, draw the same discs in the map frame. Add a toggle in
  `DisplayMenu.tsx`, saved in `prefs.ts` (`display.disruption`).
- `AirportDetailPanel.tsx` gets a "Status" row with the score and its parts in
  plain words ("6 aircraft holding, ground queue 2× normal").
- Sidebar: a "Most disrupted" list (top 10) when the layer is on.

**Acceptance criteria**
- The layer toggles on and off and is remembered across reloads.
- Scores refresh on every poll. Airports with no traffic don't render.
- Clicking a disc opens that airport's panel.
- In mock mode, a fake holding cluster near one airport makes it turn red.

**Risks.** Baselines need about a week of data, so show "calibrating" until there
are at least 3 days of samples. With 2-minute sampling, holding detection is
rough; keep thresholds conservative.

---

### F2 — Flight behavior events ("why is it doing that?")

**Goal.** Automatically spot unusual behavior and explain it in plain language.

**Events to detect (MVP)**

| Event | Heuristic (with about 2-minute samples) |
|---|---|
| Holding | Within 60 km of a large/medium airport, total track change over the last 4–6 samples above 300°, altitude roughly stable (±1,500 ft) |
| Go-around | Inbound, below 3,000 ft within 10 km of the destination, then climbing more than 1,000 ft within 1–2 samples |
| Diversion | Known route destination D. The aircraft descends below 10,000 ft near a different airport A that is more than 100 km from D, or lands at A |
| Rapid descent | Vertical rate below −4,000 ft/min sustained over 2 samples while above 10,000 ft |
| Emergency squawk | Already detected: `isConfirmedEmergency` in `src/lib/squawk.ts` |
| Return to origin | Track turns back toward the route origin within 30 minutes of takeoff |

**Design**
- Server: `server/events.ts` keeps a short per-aircraft track (last 10 samples:
  lat, lon, alt, track, speed, time) built from each poll. Detectors are pure
  functions `(track, route, airports) => Event | null`, so they can be unit
  tested.
- Event model:
  `{ id, icao24, callsign, kind, startedAt, lastSeenAt, lat, lon, airportIata?, summary, confidence }`.
  Remove an event when it hasn't been re-observed for 20 minutes.
- Endpoint: `GET /api/events?scope=` lists active events, newest first.
- Client: an "Events" sidebar section (pattern: `SidebarSection.tsx`) with cards.
  Clicking a card selects and focuses the aircraft. A small icon badge appears
  next to affected planes. `FlightDetailPanel.tsx` shows a banner for that
  flight's active event.
- Summaries come from templates, for example:
  `"${callsign} is holding near ${airport} (${n} min). Likely traffic or weather."`
  If F3 sees heavy weather at the airport, add "Heavy weather reported nearby."
- Alerts (F6) can subscribe to event kinds.

**Denser data (optional, phase 2).** A second shared source with faster updates
(for example an airplanes.live or ADS-B Exchange feed, already prototyped in
`src/lib/airplaneslive.ts`) polled only for bboxes around active candidate events.
This must be server-side, shared and rate-limited.

**Acceptance criteria**
- Detectors have unit tests with synthetic tracks: circling, a go-around
  profile, a diversion, and a normal approach, which must produce *no* event.
- No more than about 1 false positive per 500 tracked aircraft per hour on live
  data (check this by logging for an hour).
- Events show up within one poll of the condition being met.

---

### F3 — Weather impact on routes & airports

**Goal.** Connect the weather layer to the traffic: which flights are flying
through storms, and which airports have weather that will slow arrivals.

**Design**
- Server: sample RainViewer radar intensity at points. Tiles are already proxied
  in `server/weather.ts`. Add a helper that decodes a tile PNG (use `pngjs` or a
  similarly tiny dependency, server-side only) and reads the pixel intensity at
  a lat/lon for the latest frame. Cache the decoded tiles.
- Per poll:
  - **Airport weather:** maximum intensity within 25 km of each large/medium
    airport, bucketed into none, light, moderate and heavy.
  - **Route weather:** for flights with a known route, sample the remaining path
    every 50 km (great circle from the current position to the destination) and
    record the heaviest cell ahead and its distance.
- Endpoint: `GET /api/weather-impact?scope=` returns airports and flights with
  impact data.
- Client:
  - `FlightDetailPanel.tsx`: a line such as "Heavy precipitation ahead, about
    180 km, near arrival."
  - `AirportDetailPanel.tsx`: a weather chip.
  - Optional "Weather impact" coloring mode in `flightColor.ts` (planes flying
    toward heavy weather tint orange).
- Feeds F1's score and F2's summaries.

**Acceptance criteria**
- With the weather layer on, a flight visibly entering a storm cell shows the
  warning.
- Tile decoding happens server-side and is cached, with at most one decode per
  tile per frame.

**Note.** RainViewer is radar only, so coverage is mostly land in NA, Europe and
parts of Asia. Show "no radar coverage" rather than "clear" where data is
missing.

---

### F4 — Sky above me

**Goal.** Point at the sky (or open the page) and see what's overhead.

**MVP (no AR)**
- A "Near me" button asks for `navigator.geolocation`. It then focuses the
  camera there in map mode and opens a "Sky above you" panel listing aircraft
  within 30 km. Each row shows distance, altitude, bearing as a compass arrow,
  type, route, and an "overhead in N min" estimate (closest point of approach
  from current track and speed).
- The location is stored only in memory. Don't put it in the URL unless the
  user presses Share.

**Phase 2 (AR / compass view)**
- On mobile, use `DeviceOrientationEvent` (iOS needs a permission prompt) for
  the compass heading and pitch.
- Show a full-screen camera feed (`getUserMedia`, environment camera) with an
  overlay that places each nearby aircraft at its azimuth and elevation angle,
  computed from the observer and aircraft positions with ENU math (reuse the
  local-frame code in `mapView.ts`). Labels show callsign, type and altitude.
- Fallback without a camera: a radar-scope view (polar plot, heading-up).

**Design notes**
- Pure math lives in `src/lib/skyView.ts`:
  `azEl(observer, aircraft) => { azimuthDeg, elevationDeg, slantKm }` and
  `closestApproach(observer, flight) => { minutes, distanceKm }`. Unit test it.
- Positions refresh every 2 minutes, so dead-reckon between updates (reuse the
  logic from `geo.ts`).

**Acceptance criteria**
- Denying location shows a friendly message and a search-by-place fallback
  (reuse airport search).
- The AR overlay stays within about 5° when the device is held steady (manual
  test on iOS Safari and Android Chrome).

---

### F5 — Noise & overflight report

**Goal.** "How many planes flew over my address today, and how low?"

**Depends on F7** (stored history).

**Design**
- Input: an address or a map click. Geocoding uses Nominatim through a backend
  proxy with a contact User-Agent, cached, at most 1 request per second, per
  Nominatim policy.
- Query F7 storage for samples within radius R (default 3 km) of the point over
  a time window (today, 7 days, 30 days). Because samples are 2 minutes apart,
  interpolate between consecutive samples per aircraft and count a pass when the
  interpolated segment comes within R.
- Output: passes per hour (bar chart), lowest altitude, median altitude, busiest
  hours, top airlines and types, and night passes (22:00–06:00 local).
- Endpoint: `GET /api/overflights?lat&lon&radiusKm&from&to`.
- UI: a "Overflight report" panel with a simple SVG or canvas chart (no
  charting dependency unless it's tiny), plus a shareable link via deepLink
  params `ovr=lat,lon,r`.

**Acceptance criteria**
- Results for a point under a busy approach path (for example near LHR's 27L
  approach) clearly beat a point 20 km to the side.
- Query time under 500 ms for 7 days at 3 km (needs a spatial index; see F7).

---

### F6 — Rich custom alerts + push

**Goal.** Make alerts powerful and deliver them when the tab is closed.

**Current state.** `AlertWatch` in `useStore.ts` supports `kind: 'callsign' | 'country'`.
`AlertWatcher.tsx` checks the live feed in the browser and shows toasts. Watches
are saved in localStorage (`prefs.ts`).

**New watch kinds**

| Kind | Value | Fires when |
|---|---|---|
| `registration` | e.g. `G-XLEA` | That airframe appears (needs a registration from adsbdb lookup) |
| `type` | ICAO type, e.g. `A388`, or a family | Any aircraft of that type appears in a scope |
| `airline` | ICAO airline prefix, e.g. `UAL` | Appears in a scope |
| `area` | A polygon or circle drawn on the map | Any aircraft (optionally filtered) enters the area |
| `rare` | Built-in list (Beluga A3ST/A337, An-124, An-225, VC-25, E-4B, B-52, Concorde-era…) | Any rare aircraft appears |
| `event` | F2 event kinds | Event detected (optionally limited to a scope or airport) |
| `squawk` | 7500 / 7600 / 7700 | Confirmed emergency in scope |

**Delivery**
- In-app toasts (existing).
- **Web Push:** add a service worker (`public/sw.js`), VAPID keys in `.env`, and
  `POST /api/push/subscribe`. Alert evaluation then has to move **server-side**
  for push to work while the tab is closed: store subscriptions plus their
  watches (SQLite from F7), evaluate on every poll in `server/alerts.ts`, and
  send with the `web-push` package.
- Optional email digest later (needs an SMTP provider; keep it behind a flag).

**Design**
- Share the watch matching logic between client and server by moving it into
  `src/lib/alertMatch.ts` as pure functions. The server imports from `../src/lib`,
  as `server/seo.ts` already does.
- Each `(watch, icao24)` pair fires at most once until the aircraft leaves the
  feed for more than 30 minutes (same rule as today, done server-side).
- UI: rework `AlertsPanel.tsx` into a list with a kind picker, value
  autocomplete (types from `aircraftTypes.ts`, airlines from `listKnownAirlines()`),
  a scope picker, and an area-drawing tool in map mode.

**Acceptance criteria**
- Creating a `type: A388` watch and closing the tab still gives a system
  notification when one appears (test with mock mode injecting an A388).
- Duplicate notifications don't happen across polls.
- Unsubscribing removes the server record.

---

### F7 — Long history & per-aircraft flight log  *(foundation)*

> **Status: MVP implemented.** The as-built design differs from the plan below:
> - Storage is `server/historyDb.ts`, using `better-sqlite3`. The production VPS
>   runs Node 20, which has no `node:sqlite`.
> - Tables are `pos` (a `WITHOUT ROWID` table keyed by `(hex, t)`, plus an index
>   on `t`), `polls` (with a `keep` flag for thinning) and `strs` (callsign and
>   country dictionary).
> - Retention is `HISTORY_RETENTION_DAYS` (default 7). Every poll is kept for
>   48 hours, then one poll per 6 minutes. Pruning runs hourly.
> - Flights are **segmented on read** in `server/flightlog.ts` (no `flights`
>   table). Airports are inferred from ground or low-altitude endpoints.
> - Endpoints: `/api/aircraft/:hex/flights`, `/api/aircraft/:hex/track`.
>   `/api/flights?at=` falls back to SQLite beyond the in-memory ring.
>   `/api/health` reports `history` stats.
> - UI: `AircraftHistory.tsx` ("Recent flights" in the flight panel) and
>   `HistoryTrack.tsx` (draws the selected past track). `PlaybackBar.tsx` shows
>   dates and caps the autoplay speed.
> - Not done yet: an R*Tree spatial index (needed by F5) and binary bulk export
>   (needed by F10).
> - Measured: about 62 bytes per row, about 60 ms to insert a 10k-aircraft poll,
>   and about 27 ms to load a stored world snapshot.

**Goal.** Keep 7–30 days of positions. This enables per-aircraft history ("this
plane's last 10 flights"), long playback, and F5 / F10.

**Storage**
- **SQLite** through `better-sqlite3` (synchronous, fast, one file, fits the
  single-VPS deploy). Database file path in `HISTORY_DB_PATH` (default
  `server/data/history.db`, gitignored).
- Size estimate: about 10k aircraft × 720 polls per day ≈ 7.2M rows per day. At
  roughly 30 bytes per row compressed in a narrow schema that's about 200 MB per
  day, so **downsample**:
  - Keep every sample for 48 hours.
  - After that keep every 3rd sample (6-minute resolution) up to 30 days.
  - Run a nightly prune job.
- Schema (narrow, integer-encoded):
  ```sql
  CREATE TABLE pos (
    t INTEGER NOT NULL,          -- unix seconds
    hex INTEGER NOT NULL,        -- icao24 parsed as int
    lat INTEGER NOT NULL,        -- deg * 1e5
    lon INTEGER NOT NULL,        -- deg * 1e5
    alt INTEGER,                 -- meters
    spd INTEGER,                 -- m/s * 10
    trk INTEGER,                 -- deg
    gnd INTEGER NOT NULL,        -- 0/1
    cs TEXT                      -- callsign (dictionary table if size matters)
  );
  CREATE INDEX pos_hex_t ON pos(hex, t);
  CREATE INDEX pos_t ON pos(t);
  -- spatial: R*Tree on (minLat,maxLat,minLon,maxLon) per (hex, hour) segment, for F5
  ```
- **Flight segmentation** (`server/flightlog.ts`): split each aircraft's samples
  into flights. A new flight starts on a ground-to-air transition or after a gap
  of more than 45 minutes. Save
  `flights(hex, cs, start_t, end_t, o_iata, d_iata, max_alt)`, and infer airports
  from the first and last positions with a nearest-airport lookup if the route
  is unknown.

**Endpoints**
- `GET /api/aircraft/:hex/flights?limit=20` lists past flights.
- `GET /api/aircraft/:hex/track?from&to` returns a downsampled polyline.
- `GET /api/playback` and `GET /api/flights?at=` gain the longer range (keep
  the memory ring for the last 2 hours and read SQLite beyond that).

**Client**
- `FlightDetailPanel.tsx` gets a "History" tab: the last flights with
  date/time, route and duration. Clicking one draws its track as a pinned
  trail.
- `PlaybackBar.tsx`: the range picker extends to days, with coarser scrubbing
  beyond 2 hours.

**Acceptance criteria**
- Inserting one poll's rows takes under 200 ms (use a transaction and prepared
  statement).
- Disk use stays within budget after 7 days (log the database size in
  `/api/health`).
- A restart loses nothing older than the last poll.
- Mock mode writes to a separate database file.

---

### F8 — Advanced filters & shareable presets

> **Status: implemented.** Built on the existing filter panel:
> - `src/lib/filters.ts` — type / family / military / squawk / airport /
>   registration / ADS-B category / hide-unknown. Pure predicates +
>   `encodeFilters` / `decodeFilters` for the `f=` URL param.
> - `src/lib/military.ts` + `src/data/military.json` — hex ranges and callsign
>   prefixes; labelled "likely".
> - `src/lib/emitterCategory.ts` — OpenSky A1–A7 / B1 / B6 groups.
> - `FlightFilters.tsx` — chip row, More filters, named localStorage presets,
>   Copy link. `DeepLinkSync` reads and writes `?f=`.
> - Unknown airframes stay visible unless **Hide unknown** is on; type lookups
>   are queued when an airframe filter is active (`Flights.tsx`).
> - Tests: `npm test` (`scripts/filters.test.ts`).
>
**Goal.** Filtering at FR24 premium level, free, and shareable.

**Current state.** `TrafficFilters` in `prefs.ts`: phase, altitude min/max,
speed min/max, airline, kind (airline/GA), route.

**Add**
- Aircraft **type / family** (multi-select, from `aircraftTypes.ts` and
  `aircraftFamily.ts`).
- **Squawk** (exact, or "emergency only").
- **Category** (OpenSky emitter category: light, heavy, rotorcraft, glider, UAV…).
- **Military / government** (heuristic: hex ranges allocated to military
  operators plus a callsign prefix list in a data file `src/data/military.json`;
  label it "likely").
- **Origin / destination airport** (IATA).
- **Registration prefix** (for example `N`, `G-`, `D-`).

**Presets**
- Save named presets in localStorage. Share a preset as a URL param
  `f=<base64url JSON>` through `deepLink.ts`. Opening such a link applies the
  filter and shows a removable chip.

**Design**
- Extend `filterFlightsByTraffic` in `src/lib/filters.ts`. Keep it a pure
  function and add tests.
- `FlightFilters.tsx`: grouped UI with an "Active filters" chip row.
- When a filter needs a type the aircraft doesn't have yet, enqueue the lookup
  (`enqueueAircraftTypes`). Treat "unknown" as excluded only when the user ticks
  "Hide unknown types".

**Acceptance criteria**
- Filters apply consistently to the globe, the sidebar list and the counts.
  Selected and pinned flights stay visible, which is existing behavior.
- A preset link reproduces the same visible set in a fresh browser.

---

### F9 — Cinematic camera modes

**Goal.** Make the 3D view a showcase: cockpit view, approach replays, auto tour.

**Modes**
1. **Cockpit:** camera at the aircraft's position, looking along its track, with
   a slight pitch from vertical rate. Interpolate smoothly between dead-reckoned
   positions. Reuse the chase-cam plumbing in `CameraRig.tsx` and `Flights.tsx`
   (`followFlight`).
2. **Approach replay:** for a flight that just landed (F7 track), replay the last
   15 minutes at 10–30× speed with the camera trailing. Optional terrain:
   Mapzen/AWS Terrarium elevation tiles on map-mode tiles (vertex displacement
   in the tile mesh in `MapBasemap.tsx`).
3. **Tour:** every 20–40 seconds, pick an "interesting" flight (F2 event, rare
   type, emergency, or just a heavy jet over a nice region), fly the camera there,
   chase it for a while, then move on. Show a small caption card.
   Hide the UI with the `H` key; Esc exits.

**Acceptance criteria**
- Holds 60 fps on an M1 laptop with 4,000 aircraft.
- No camera jumps when a new poll lands (smooth toward the new dead-reckoned
  target).
- Tour mode can run unattended for an hour without errors or memory growth.

---

### F10 — Global traffic time-lapse

**Goal.** A 24-hour world replay that's fun to watch and share.

**Depends on F7.**

**Design**
- Server: `GET /api/timelapse?date=YYYY-MM-DD&step=10m` returns compact frames:
  a typed-array-friendly JSON or a binary format (for example
  `Float32Array [lat, lon, alt, track]` per aircraft per frame, with a hex
  dictionary). Cache generated days on disk.
- Client: a "Time-lapse" mode in `PlaybackBar.tsx`. Plays frames at 1 frame per
  second up to 60 per second, interpolating positions between frames. Uses the
  existing instanced renderer with trails off and a glow on. Shows a UTC clock
  and the day/night terminator moving (the earth shader already takes a time
  input).
- **Export:** record the canvas with `MediaRecorder` to WebM (a GIF later), at
  1080p, 30–60 seconds long. Add a "Copy link" option too
  (`?timelapse=2026-10-04`).

**Acceptance criteria**
- A full day at 10-minute steps (144 frames) loads in under 3 seconds on
  broadband (aim for 5 MB or less, gzipped).
- Playback stays smooth at 60 fps.
- The exported video plays in Chrome and Safari.

---

### F11 — Route & network explorer

**Goal.** Show the shape of the network: which routes an airport or airline flies
today.

**Design**
- Data: the route cache (`server/routes.ts`) plus today's observed flights from
  F7 (or the live feed alone as an MVP). Aggregate `(origin, destination,
  airline) => count` over the last 24 hours.
- Endpoint: `GET /api/network?airport=LHR` or `?airline=BAW` returns
  `[{ o, d, count, airlines[] }]`.
- Client: draw great-circle arcs (reuse `Arcs.tsx`), with thickness by count and
  color by airline (or by distance). Hovering an arc shows the route and its
  count. Clicking an arc filters the flight list to that route.
- Entry points: an "Explore routes" button in `AirportDetailPanel.tsx`, and an
  airline chip in `FlightDetailPanel.tsx`.

**Acceptance criteria**
- LHR shows at least 100 distinct routes during a busy day.
- Arcs render as one or a few batched geometries, not one mesh per arc.

---

### F12 — My trip tracker

**Goal.** The everyday use case: "Is my flight on time? Where is my plane now?"

**MVP (no schedule provider)**
- Input: a flight number (IATA such as `BA117` or ICAO such as `BAW117`). Reuse
  `callsignLookupVariants`.
- Show: live status (not yet airborne, en route, landed), estimated arrival from
  `estimateFlightTimes`, distance remaining, a progress bar, and a map
  thumbnail.
- **Inbound aircraft (best effort):** once the flight is seen on the ground at
  the origin, use F7 to find that airframe's previous flight. Show "Your aircraft
  arrived from CDG 25 minutes ago" or "is still 40 minutes out", which is the
  biggest predictor of a delay.
- **Share card:** a link `?trip=BA117&date=2026-10-04` that opens a simplified
  mobile view for whoever is doing the pickup.
- **Notify:** subscribe to takeoff, 30 minutes to arrival, and landed events,
  using F6 push.

**Phase 2 (schedule provider)**
- Add a provider behind `SCHEDULE_PROVIDER` (FlightAware AeroAPI, AviationStack
  or Cirium). Server-side only, cached, metered per day. This adds scheduled
  times, gates, terminals and real delay minutes. Without the key everything
  degrades gracefully to the MVP.

**Design**
- `src/components/TripTracker.tsx` (panel plus a mobile full-screen view).
- Endpoint `GET /api/trip?flight=BA117&date=` resolves to the current or most
  recent matching icao24 using the live feed and F7.
- Remember up to 5 trips in localStorage.

**Acceptance criteria**
- Entering a flight that is currently airborne shows its live position within
  one poll.
- Entering a flight that hasn't departed yet shows a clear "Not yet airborne —
  we'll pick it up when it departs" state.
- The share link works without login and on mobile.

---

### F13 — Emissions estimates

**Goal.** A rough CO₂ estimate per flight, plus totals for an airport or airline.

**Design**
- Data file `src/data/fuelBurn.json`: for each type family, average cruise fuel
  burn (kg/km) and seats. Seed it from public sources (EEA/ICAO calculator
  tables, manufacturer data) and cite the sources in the file.
- CO₂ = fuel × 3.16. Per passenger = CO₂ / (seats × load factor 0.82).
- Show it in `FlightDetailPanel.tsx`: "≈ 38 t CO₂ for this flight (≈ 110 kg per
  passenger)".
- Totals: sum over today's flights (F7) for an airport or airline panel.
- Label everything "estimate". Unknown types show "—".

**Acceptance criteria**
- Numbers for common pairs are within ±25% of the ICAO calculator, for example
  LHR–JFK on a B77W.

---

### F14 — Spotter tools

**Goal.** Features for plane spotters, a core FR24 audience.

**Features**
- **Rare today at airport X:** aircraft seen near the airport today whose type is
  uncommon for that airport (fewer than 1% of its 30-day traffic, from F7) or on
  the global rare list (F6).
- **Runway in use (estimated):** from the last hour's arrivals and departures,
  compute the dominant final-approach heading and match it to runway headings.
  Runway data comes from OurAirports `runways.csv`, compacted like
  `airports.json` by `scripts/build-airports.mjs`.
- **Arrivals forecast by runway:** inbound aircraft with an estimated arrival in
  the next 60 minutes, grouped by likely runway.
- **Photo links:** the panel already shows a Planespotters photo. Add "More photos
  of this airframe" (the Planespotters registration page) and "Log a sighting"
  (a local list in localStorage, exportable as CSV).

**Acceptance criteria**
- The runway estimate matches the published active runway at a major airport in
  4 out of 5 spot checks.

---

### F15 — Embeddable widget & public API

**Goal.** Let other sites embed Flight Globe views; grow through referrals.

**Design**
- **Embed route** `/embed`: a minimal-chrome build of the app configured by URL
  params: `mode=airport-board|map|globe`, `airport=LHR`, `lat,lon,zoom`,
  `theme=dark|light`, `limit`. No sidebar, small attribution footer
  ("Flight Globe · OpenStreetMap") linking back.
- **Snippet generator:** an "Embed" button in the share menu produces an
  `<iframe>` snippet with a size picker.
- **Public read API** (rate-limited, read-only):
  `GET /api/v1/flights?bbox=`, `/api/v1/airports/:iata/board`. Add a simple
  per-IP token bucket in `server/index.ts`. Document it at `/api/v1` with a JSON
  index.
- Set `Content-Security-Policy: frame-ancestors *` only on `/embed`.

**Acceptance criteria**
- The embedded airport board renders in a 400×300 iframe and updates live.
- Abuse protection: more than 60 requests per minute per IP returns 429 with a
  `Retry-After` header.

---

## Part 3 — Handoff prompt template

Copy this, fill in the brackets, and give it to a model along with this file.

```
You are working in the Flight Globe repo at /Users/scott/Documents/github/made-with-ai/flight-globe.

Read docs/FEATURE_ROADMAP.md Part 1 (Shared context) fully, then implement
feature [F#] — [name] from Part 2.

Scope for this task: [MVP only | MVP + phase 2 | a specific sub-part]

Rules:
- Respect every constraint in Part 1.4 (shared upstream, 2-minute cadence, no
  per-user OpenSky calls, secrets server-side, MAX_RENDER, instanced rendering).
- Follow the conventions in Part 1.6. Match the surrounding code style and
  comment density.
- Prefer pure functions in src/lib/ for logic (unit-testable), thin components.
- Do not commit. Do not add analytics.
- Run `npx tsc --noEmit` and fix all errors.
- Verify in the browser with `npm run dev` (or `npm run dev:mock` if the feature
  can be exercised with synthetic traffic).

When done, report: what you built, files changed, how you verified each
acceptance criterion, and anything left out or uncertain.
```

### Tips for splitting work across models

- Give **foundation work (F7)** to one model at a time. Its schema and endpoints
  are shared contracts, so freeze them before dependent features start.
- **Pure-logic pieces** (F2 detectors, F4 sky math, F8 filter predicates, F13
  emissions) are ideal for parallel handoff: specify input and output types and
  test cases, and integrate afterwards.
- **UI-heavy pieces** (F9, F10, F11) benefit from a model that can run the dev
  server and take screenshots.
- After each feature, update Part 1.5 (architecture map) and the endpoint list
  in Part 1.5 / `server/index.ts` so later handoffs stay accurate.
