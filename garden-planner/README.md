# Heliotrope ☀ — Sun-Mapped Garden Planner

Plan a garden on **real satellite imagery of your own yard**, then simulate the sun
across the day and the seasons to see exactly how much light every plant will get.

**Live:** https://sconway.github.io/made-with-ai/garden-planner/

## What it does

1. **Find your yard** — address search (OpenStreetMap Nominatim) flies the map to a
   high-resolution satellite view (Esri World Imagery). All solar math locks to the
   viewed latitude/longitude.
2. **Trace what's there** — draw garden beds over the soil you can see, then outline
   the shade-casters with their real heights:
   - **Trees** (deciduous or evergreen — deciduous trees barely block winter sun)
   - **Buildings** (extruded footprint shadows)
   - **Fences / walls**
3. **Plant from the library** — 40 plants (vegetables, herbs, fruit, flowers) with
   sun requirements, spacing, spread, water needs, days to maturity, sowing windows,
   companion/antagonist lists, and growing tips.
4. **Simulate** —
   - **Time & date sliders** with solstice/equinox presets and a play button that
     animates the day
   - **Real-time shadows** cast on the imagery from every obstacle, plus golden-hour
     and night tinting
   - **Sun-hours heat map**: the day is sampled at 48 solar positions and shadow
     coverage is rasterized per ~0.5 m cell, producing a direct-sun-hours map with a
     legend anchored to the gardening thresholds (4 h part sun / 6 h full sun)
   - **Best sun mode**: leaves the imagery untouched and paints only the strongest
     light — glowing gold where a spot earns 6 h+ of full sun, faint amber for the
     4–6 h part-sun band — so the prime planting real estate jumps out at a glance.
     When zoomed to yard scale the analysis covers the whole visible viewport (and
     follows as you pan), so you can scout for sunny ground before drawing anything
   - **Sun dial** instrument showing live azimuth/altitude and the sun's path arc
   - **Shadow trails**: outlines of where every obstacle's shadow reaches at each
     hour of the day, all at once — color-coded from cool-blue morning to warm-orange
     evening with hour labels, so you can read the whole day's shade sweep in one look
   - **Light probe**: click any spot to chart its personal sun timeline — a
     sunrise-to-sunset strip showing exactly when it sits in sun or shade, total
     direct-sun hours, and which obstacle causes each shaded stretch
     (e.g. "6:23–7:48am · tree, 26 ft"). The probe persists, is draggable, and
     re-charts as you scrub the date
5. **Get judged (gently)** — every plant is checked against the light it actually
   receives, spacing conflicts, and bad companions. Warnings land in the Garden
   Ledger; clicking one flies to the plant.

Designs auto-save to `localStorage` and can be exported/imported as JSON.

## Solar model

Sun position uses the standard low-precision solar ephemeris (same derivation as
SunCalc / Astronomy Answers): mean anomaly → equation of center → ecliptic
longitude → declination/right ascension → local hour angle → azimuth/altitude.
Sunrise/sunset are found by scanning altitude at 2-minute resolution (robust at
high latitudes, handles polar day/night). Time is displayed as approximate local
solar time (timezone estimated from longitude). The model is clear-sky: real light
varies with weather, terrain, and reflections.

Shadow lengths are `height / tan(altitude)`, capped at 400 m; building shadows are
extruded footprints. A canopy is treated as a ball of leaves, so its shadow is an
ellipse offset by `canopyCenterHeight / tan(altitude)` and stretched along the sun's
bearing by `1 / sin(altitude)` — round overhead, long at dusk; the trunk is not
modelled.

Sun below 2° is treated as horizon-blocked everywhere — the raster, the light probe
*and* the drawn shadows. Below that, true geometry stretches shadows past 29× an
object's height, which the app has no terrain or treeline to interrupt; the shadow
layer fades out over 2–6° so it doesn't snap off.

## Stack

- Vanilla JS, single canvas overlay on [Leaflet 1.9](https://leafletjs.com/) — no build step
- Imagery: Esri World Imagery tiles (© Esri, Maxar, Earthstar Geographics)
- Geocoding: OpenStreetMap Nominatim
- Type: Fraunces + Spline Sans Mono

## Keyboard

| Key | Action |
| --- | --- |
| `V` | Select / move |
| `B` | Draw bed |
| `P` | Plant |
| `T` | Tree |
| `U` | Building |
| `F` | Fence |
| `L` | Light probe |
| `E` | Erase |
| `Enter` / double-click | Close polygon |
| `Esc` | Cancel / deselect |
| `⌫` | Delete selection |
| `Space` | Play/pause the day |
| `⌘Z` | Undo |
