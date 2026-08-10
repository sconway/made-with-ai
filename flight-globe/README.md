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

## Running

Requires **Node 18+** (developed on Node 20).

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # type-check + production bundle
```

## Architecture

```
src/
  lib/
    geo.ts         # lat/lon <-> vector3, altitude scaling, dead reckoning,
                   #   point-in-polygon, polygon -> line/fill geometry
    opensky.ts     # OpenSky states client (normalizes the positional arrays)
    countries.ts   # loads + normalizes Natural Earth country GeoJSON
    regions.ts     # region presets (bbox + camera target)
    sun.ts         # sub-solar point for the day/night terminator
  store/
    useStore.ts    # zustand store (flights, countries, selection, region)
  components/
    Scene.tsx      # composes the r3f scene
    Earth.tsx      # day/night shader sphere (UVs derived from geo.ts formula)
    Atmosphere.tsx # additive fresnel glow shell
    Countries.tsx  # merged borders + raycast pick + hover/selected highlight
    Flights.tsx    # instanced aircraft + interpolation + click selection
    CameraRig.tsx  # animated fly-to for country / region selection
    DataLayer.tsx  # loads countries once, polls OpenSky on region/country change
    HUD.tsx        # overlay UI (topbar, detail panels, region switch)
  App.tsx          # Canvas + HUD + DataLayer
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
- **Viewport-scoped data.** Selecting a country re-queries OpenSky with that
  country's bbox — the same pattern that keeps a production tracker's bandwidth
  sane (send only what's in view).

## Data sources

Queries follow the camera: `ViewportTracker` computes the visible lat/lon box,
and the data layer requests just that area (or the selected country's box), so
coverage spreads across the **whole view** rather than a single spot. When a view
returns more than `MAX_RENDER` (4,000) aircraft, a monotonic hash samples a
stable, flicker-free fraction spread across the area (HUD shows "shown / in
view"). Cadence scales with area; errors back off exponentially, then fall back
to bundled demo data.

Pick the source with `VITE_FLIGHT_SOURCE` in `.env`:

### OpenSky (recommended — full bbox coverage)

`VITE_FLIGHT_SOURCE=opensky`. Returns every aircraft in the visible box in one
request, so coverage is uniform across the view. Anonymous OpenSky is
rate-limited (~400 credits/day → frequent 429s); a **free** account gets 4,000.

1. Create a free account at https://opensky-network.org
2. Account → create an API client (OAuth2 client credentials)
3. Put `OPENSKY_CLIENT_ID` / `OPENSKY_CLIENT_SECRET` in `.env` and restart

The OAuth2 token exchange runs in the Vite dev server (`vite.config.ts`,
proxied at `/opensky`), so the secret never reaches the browser.

### airplanes.live (default — keyless)

Unset / any other value. A keyless community feed proxied at `/adsblive` (a
User-Agent is set server-side). Since its API caps each query at 250 nm, the app
**tiles** the visible box into up to 8 requests (throttled to ≤ 1/s) and merges
them. Good coverage on a fresh IP; on a heavily shared IP some tiles may be rate-
limited.

### Demo mode

Append `?demo=1` to force the bundled `public/data/demo-flights.json` (850
globally-distributed aircraft) — useful for offline previews and screenshots.
The app also drops to this automatically after repeated live-fetch failures, and
returns to live data on the next success.

For ocean coverage beyond terrestrial ADS-B you'd add satellite ADS-B
(Aireon/Spire) or a commercial feed (FlightAware AeroAPI, ADS-B Exchange).

## Possible next steps

- **Weather overlay** — drape RainViewer / OpenWeatherMap tiles as an additive
  layer, or volumetric cloud/storm cells at altitude. The layered component
  model makes this an additive `<Weather />` in `Scene.tsx`.
- **Bloom** — re-add a glow pass (was removed due to a Vite pre-bundling bug in
  `@react-three/postprocessing` 2.16 + `postprocessing` 6.37+; pin
  `postprocessing@6.36.x` or use a newer r3f-postprocessing when re-adding).
- **WebSocket backend** — replace polling with a socket that pushes only the
  current camera-frustum bbox, plus server-side interpolation.
- **LOD aircraft** — swap the instanced dart glyph for detailed glTF models when
  zoomed into a country.
- **Flight routes** — great-circle arcs from origin→destination on selection.
```
