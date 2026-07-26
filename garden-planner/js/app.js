/* ============================================================
   Heliotrope — sun-mapped garden planner
   Satellite imagery: Esri World Imagery · Geocoding: Nominatim
   ============================================================ */
(() => {
  'use strict';

  const YEAR = new Date().getFullYear();
  const R = Math.PI / 180;
  /* Below this altitude the sun is behind the neighborhood's own horizon —
     the far treeline, roofs, the slope of the land — none of which this app
     models. Shadow geometry there is technically h/tan(2°) ≈ 29× the object's
     height, which paints the whole map with slabs nobody's yard ever sees.
     The sun-hours math has always called this blocked; the render now agrees. */
  const HORIZON = 2 * R;
  /* A canopy shadow stretches as 1/sin(altitude); at the horizon cutoff that
     is its longest, so nothing is ever clamped inside the drawn range. */
  const MAX_STRETCH = 1 / Math.sin(HORIZON);
  const canopyStretch = (alt) => Math.min(1 / Math.sin(alt), MAX_STRETCH);
  const FT = 3.28084;
  const SAVE_KEY = 'heliotrope-v1';
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // magma-family perceptual ramp for the sun-hours raster (CVD-safe, ordered)
  const SUNRAMP = [
    [0.0, [10, 7, 33]], [0.15, [43, 17, 82]], [0.3, [93, 24, 127]],
    [0.45, [143, 39, 129]], [0.6, [193, 58, 110]], [0.72, [232, 92, 86]],
    [0.84, [250, 142, 84]], [0.93, [254, 194, 135]], [1.0, [252, 253, 191]],
  ];
  const HEAT_DOMAIN = 12; // hours mapped across the ramp

  /* ---------------- state ---------------- */
  const state = {
    tool: 'select',
    selectedPlant: null,        // plant id armed in the drawer
    plantCat: 'All',
    objects: { beds: [], trees: [], buildings: [], fences: [], plants: [] },
    rev: 0,                     // bumped on any object mutation
    selection: null,            // { type, id }
    drawing: null,              // { type, pts: [latlng], cursor: latlng }
    rectDraw: null,             // { type, start, cur, moved, shift } — drag-to-draw
    drag: null,
    doy: 172,
    time: 12,
    playing: false,
    show: { shadows: true, heatmap: false, best: false, trails: false, spread: true, labels: true, snap: true },
    probe: null,                // { latlng } — the light-probe marker
    snap: null,                 // { at: latlng, marks: [...] } — live snap feedback
    loc: { lat: 39.8283, lng: -98.5795 },
    day: null,                  // Sun.dayInfo cache
    heat: null,                 // { canvas, bounds, grid, cell, nx, ny, rev, doy }
    undoStack: [],
  };
  let uid = 1;
  const nextId = () => `o${Date.now().toString(36)}${(uid++).toString(36)}`;

  /* ---------------- map ---------------- */
  const map = L.map('map', {
    center: [state.loc.lat, state.loc.lng],
    zoom: 5,
    zoomControl: false,
    doubleClickZoom: false,
    fadeAnimation: false, // half-faded tiles over a black page read as broken imagery
    attributionControl: true,
    worldCopyJump: true,
  });
  L.control.zoom({ position: 'bottomleft' }).addTo(map);
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'Imagery © Esri, Maxar, Earthstar Geographics & the GIS User Community',
      maxZoom: 21,
      maxNativeZoom: 19,
    }
  ).addTo(map);

  /* ---------------- canvas ---------------- */
  const canvas = document.getElementById('overlay');
  const ctx = canvas.getContext('2d');
  const shadowCv = document.createElement('canvas');
  const shadowCtx = shadowCv.getContext('2d');
  let dpr = 1;

  function sizeCanvas() {
    // self-healing: re-derive from the live layout every time
    dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = Math.round(rect.width), h = Math.round(rect.height);
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr; canvas.height = h * dpr;
      shadowCv.width = w; shadowCv.height = h;
    }
    return { w, h };
  }
  window.addEventListener('resize', () => { sizeCanvas(); requestRender(); });

  /* ---------------- geo helpers ---------------- */
  const M_PER_DEG_LAT = 111320;
  const mPerDegLng = (lat) => M_PER_DEG_LAT * Math.cos(lat * R);

  function destLatLng(ll, eastM, northM) {
    return L.latLng(ll.lat + northM / M_PER_DEG_LAT, ll.lng + eastM / mPerDegLng(ll.lat));
  }
  function metersBetween(a, b) {
    const dx = (b.lng - a.lng) * mPerDegLng((a.lat + b.lat) / 2);
    const dy = (b.lat - a.lat) * M_PER_DEG_LAT;
    return Math.hypot(dx, dy);
  }
  function pxPerMeter() {
    const c = map.getCenter();
    const p1 = map.latLngToContainerPoint(c);
    const p2 = map.latLngToContainerPoint(destLatLng(c, 10, 0));
    return Math.abs(p2.x - p1.x) / 10;
  }
  function polygonAreaM2(pts) {
    if (pts.length < 3) return 0;
    const lat0 = pts[0].lat, kx = mPerDegLng(lat0);
    let s = 0;
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      s += (a.lng * kx) * (b.lat * M_PER_DEG_LAT) - (b.lng * kx) * (a.lat * M_PER_DEG_LAT);
    }
    return Math.abs(s) / 2;
  }
  function pointInPoly(ll, pts) {
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const xi = pts[i].lng, yi = pts[i].lat, xj = pts[j].lng, yj = pts[j].lat;
      if (((yi > ll.lat) !== (yj > ll.lat)) &&
          (ll.lng < ((xj - xi) * (ll.lat - yi)) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }
  function polyCenterLL(pts) {
    let lat = 0, lng = 0;
    pts.forEach((p) => { lat += p.lat; lng += p.lng; });
    return L.latLng(lat / pts.length, lng / pts.length);
  }
  function bearingFrom(c, ll) {
    return Math.atan2((ll.lat - c.lat) * M_PER_DEG_LAT, (ll.lng - c.lng) * mPerDegLng(c.lat));
  }
  function distToSegPx(p, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const len2 = dx * dx + dy * dy;
    let t = len2 ? ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
  }

  const fmtFt = (m) => {
    const f = m * FT;
    return f >= 10 ? `${Math.round(f)} ft` : `${f.toFixed(1)} ft`;
  };
  const fmtIn = (m) => `${Math.round(m * 39.37)} in`;
  const monthOfDoy = (doy) => new Date(Date.UTC(YEAR, 0, doy)).getUTCMonth() + 1;
  const dateLabel = (doy) => {
    const d = new Date(Date.UTC(YEAR, 0, doy));
    return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;
  };

  /* ---------------- sun ---------------- */
  function tz() { return Sun.tzOffsetHours(state.loc.lng); }
  function sunNow() {
    return Sun.position(Sun.localDate(YEAR, state.doy, state.time, tz()), state.loc.lat, state.loc.lng);
  }
  function refreshDay() {
    state.day = Sun.dayInfo(YEAR, state.doy, state.loc.lat, state.loc.lng, tz());
  }
  function leafFactor(type, month) {
    if (type !== 'deciduous') return 1;
    return month >= 4 && month <= 10 ? 1 : 0.2;
  }
  /** Height of the canopy ball's center: its top sits at the tree's height. */
  const canopyCenterH = (t) => Math.max(t.height - t.canopy, t.height * 0.5);

  /* ============================================================
     Shadow geometry — shared between the screen and the heat grid.
     P(latlng) -> [x, y] in target space; V(eastM, northM) -> [dx, dy].
     ============================================================ */
  function drawShadows(g, P, V, sun, month, opts = {}) {
    if (sun.altitude < HORIZON) return false;
    const tanA = Math.tan(sun.altitude);
    const bearing = sun.azimuth + Math.PI;
    const off = (h) => {
      const len = Math.min(h / tanA, 1000); // safety valve, not a realism knob
      return V(len * Math.sin(bearing), len * Math.cos(bearing));
    };
    const unit = V(1, 0);
    const s = Math.hypot(unit[0], unit[1]); // units per meter
    const stroke = !!opts.stroke; // trails mode: outline where shadows reach
    let drew = false;

    // A canopy is a ball of leaves, so its ground shadow is an ellipse: the
    // cross-sun width stays the canopy width, but the along-sun length grows
    // as 1/sin(altitude) — round overhead, long and reaching back toward the
    // trunk at dusk, the same way a building's shadow stretches.
    const stretch = canopyStretch(sun.altitude);
    const dirV = V(Math.sin(bearing), Math.cos(bearing));
    const sunAngle = Math.atan2(dirV[1], dirV[0]); // shadow heading in target space
    const canopyEllipse = (cx, cy, r) =>
      g.ellipse(cx, cy, r * s * stretch, r * s, sunAngle, 0, Math.PI * 2);

    const poly = (pts, forceStroke) => {
      g.beginPath();
      pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
      g.closePath();
      if (stroke || forceStroke) g.stroke(); else g.fill();
    };
    const timeLabel = (x, y) => {
      if (!opts.label) return;
      g.save();
      g.font = '9px "Spline Sans Mono", monospace';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.lineWidth = 3;
      g.strokeStyle = 'rgba(8,10,4,0.8)';
      g.strokeText(opts.label, x, y);
      g.fillStyle = opts.stroke;
      g.fillText(opts.label, x, y);
      g.restore();
    };

    if (stroke) { g.strokeStyle = opts.stroke; g.lineWidth = 1.2; }

    for (const b of state.objects.buildings) {
      const base = b.pts.map((ll) => P(ll));
      const [dx, dy] = off(b.height);
      const top = base.map(([x, y]) => [x + dx, y + dy]);
      if (stroke) {
        poly(top); // just the reach outline
        const c = top.reduce((a, p2) => [a[0] + p2[0] / top.length, a[1] + p2[1] / top.length], [0, 0]);
        timeLabel(c[0], c[1]);
      } else {
        poly(top);
        for (let i = 0; i < base.length; i++) {
          const j = (i + 1) % base.length;
          poly([base[i], base[j], top[j], top[i]]);
        }
      }
      drew = true;
    }
    for (const f of state.objects.fences) {
      const pts = f.pts.map((ll) => P(ll));
      const [dx, dy] = off(f.height);
      if (stroke) {
        g.beginPath();
        pts.forEach(([x, y], i) => (i ? g.lineTo(x + dx, y + dy) : g.moveTo(x + dx, y + dy)));
        g.stroke();
      } else {
        for (let i = 0; i < pts.length - 1; i++) {
          poly([pts[i], pts[i + 1], [pts[i + 1][0] + dx, pts[i + 1][1] + dy], [pts[i][0] + dx, pts[i][1] + dy]]);
        }
      }
      drew = true;
    }
    for (const t of state.objects.trees) {
      const lf = leafFactor(t.type, month);
      const p = P(t.latlng);
      const canopyH = canopyCenterH(t);
      const [dx, dy] = off(canopyH);
      if (stroke) {
        g.save();
        if (lf < 1) g.setLineDash([3, 3]);
        g.beginPath();
        canopyEllipse(p[0] + dx, p[1] + dy, t.canopy);
        g.stroke();
        g.restore();
        timeLabel(p[0] + dx, p[1] + dy);
      } else {
        // Canopy only — the trunk's own sliver of shade is left unmodelled, as
        // it is in shadeAtPoint. The stretched canopy ellipse already reaches
        // back over most of the ground a trunk shadow would cover.
        g.save();
        // leafless deciduous trees barely block winter sun
        g.globalAlpha = g.globalAlpha * lf;
        g.beginPath();
        canopyEllipse(p[0] + dx, p[1] + dy, t.canopy);
        g.fill();
        g.restore();
      }
      drew = true;
    }
    return drew;
  }

  /* ============================================================
     Point-in-shadow test (analytic, for the light probe)
     Returns { block: 0..1, by: label } for a lat/lng at a sun position.
     ============================================================ */
  function shadeAtPoint(ll, sun, month) {
    if (sun.altitude < HORIZON) return { block: 1, by: 'horizon' };
    const tanA = Math.tan(sun.altitude);
    const bearing = sun.azimuth + Math.PI;
    const off = (h) => {
      const len = Math.min(h / tanA, 1000);
      return [len * Math.sin(bearing), len * Math.cos(bearing)];
    };
    const kx = mPerDegLng(ll.lat);
    const rel = (p) => [(p.lng - ll.lng) * kx, (p.lat - ll.lat) * M_PER_DEG_LAT];
    // is the origin (the probe point) inside this meter-space polygon?
    const pipO = (pts) => {
      let ins = false;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [xi, yi] = pts[i], [xj, yj] = pts[j];
        if ((yi > 0) !== (yj > 0) && 0 < ((xj - xi) * (0 - yi)) / (yj - yi) + xi) ins = !ins;
      }
      return ins;
    };
    let block = 0, by = null;
    for (const b of state.objects.buildings) {
      const base = b.pts.map(rel);
      const [dx, dy] = off(b.height);
      const top = base.map(([x, y]) => [x + dx, y + dy]);
      let hit = pipO(base) || pipO(top);
      for (let i = 0; !hit && i < base.length; i++) {
        const j = (i + 1) % base.length;
        hit = pipO([base[i], base[j], top[j], top[i]]);
      }
      if (hit) return { block: 1, by: 'building' };
    }
    for (const f of state.objects.fences) {
      const pts = f.pts.map(rel);
      const [dx, dy] = off(f.height);
      for (let i = 0; i < pts.length - 1; i++) {
        if (pipO([pts[i], pts[i + 1], [pts[i + 1][0] + dx, pts[i + 1][1] + dy], [pts[i][0] + dx, pts[i][1] + dy]])) {
          return { block: 1, by: 'fence' };
        }
      }
    }
    // same stretched-ellipse canopy shadow the renderer draws
    const stretch = canopyStretch(sun.altitude);
    for (const t of state.objects.trees) {
      const lf = leafFactor(t.type, month);
      if (lf <= block) continue;
      const [px, py] = rel(t.latlng);
      const [dx, dy] = off(canopyCenterH(t));
      // vector from this point to the shadow's center, split along / across sun
      const ex = px + dx, ny = py + dy;
      const along = ex * Math.sin(bearing) + ny * Math.cos(bearing);
      const across = ex * Math.cos(bearing) - ny * Math.sin(bearing);
      const a = t.canopy * stretch, b = t.canopy;
      if ((along * along) / (a * a) + (across * across) / (b * b) <= 1) {
        block = lf;
        by = `${t.type === 'evergreen' ? 'evergreen' : 'tree'}, ${fmtFt(t.height)}${lf < 1 ? ' (leafless)' : ''}`;
      }
    }
    return { block, by };
  }

  /* ============================================================
     Sun-hours heat map
     ============================================================ */
  const heatCv = document.createElement('canvas');
  const heatCtx = heatCv.getContext('2d', { willReadFrequently: true });
  const bestCv = document.createElement('canvas');
  const bestCtx = bestCv.getContext('2d', { willReadFrequently: true });
  const gridCv = document.createElement('canvas');
  const gridCtx = gridCv.getContext('2d', { willReadFrequently: true });

  function heatRegion() {
    // at yard scale, analyze everything on screen so sunny spots show up
    // before anything is drawn; fall back to the objects' bbox when zoomed out
    const vb = map.getBounds();
    const vsw = vb.getSouthWest(), vne = vb.getNorthEast();
    const viewportM = metersBetween(L.latLng(vsw.lat, vsw.lng), L.latLng(vsw.lat, vne.lng));
    if (viewportM <= 450) return vb.pad(0.1);

    const o = state.objects;
    const pts = [];
    o.beds.forEach((b) => pts.push(...b.pts));
    o.plants.forEach((p) => pts.push(p.latlng));
    if (!pts.length) {
      o.trees.forEach((t) => pts.push(t.latlng));
      o.buildings.forEach((b) => pts.push(...b.pts));
      o.fences.forEach((f) => pts.push(...f.pts));
    }
    if (!pts.length) return null;
    let s = Infinity, w = Infinity, n = -Infinity, e = -Infinity;
    pts.forEach((ll) => {
      s = Math.min(s, ll.lat); n = Math.max(n, ll.lat);
      w = Math.min(w, ll.lng); e = Math.max(e, ll.lng);
    });
    const pad = 12; // meters
    const sw = destLatLng(L.latLng(s, w), -pad, -pad);
    const ne = destLatLng(L.latLng(n, e), pad, pad);
    return L.latLngBounds(sw, ne);
  }

  function computeHeat() {
    const bounds = heatRegion();
    if (!bounds || !state.day || state.day.polarNight) { state.heat = null; return; }

    const sw = bounds.getSouthWest(), ne = bounds.getNorthEast();
    const wM = metersBetween(L.latLng(sw.lat, sw.lng), L.latLng(sw.lat, ne.lng));
    const hM = metersBetween(sw, L.latLng(ne.lat, sw.lng));
    const cell = Math.max(0.25, wM / 220, hM / 220);
    const nx = Math.max(8, Math.round(wM / cell));
    const ny = Math.max(8, Math.round(hM / cell));
    gridCv.width = nx; gridCv.height = ny;

    const kx = mPerDegLng((sw.lat + ne.lat) / 2);
    const P = (ll) => [((ll.lng - sw.lng) * kx) / cell, (hM - (ll.lat - sw.lat) * M_PER_DEG_LAT) / cell];
    const V = (eM, nM) => [eM / cell, -nM / cell];

    const { sunrise, sunset } = state.day;
    const t0 = sunrise ?? 0, t1 = sunset ?? 24;
    const nSamples = 48;
    const dtH = (t1 - t0) / nSamples;
    const month = monthOfDoy(state.doy);
    const n = nx * ny;
    const sun2 = new Float32Array(n); // full-day sun hours (drives plant warnings)
    // per-sample shade (0 = lit, 255 = blocked) so the display can accumulate
    // "sun banked so far" as the time slider moves through the day
    const perSample = new Uint8Array(nSamples * n).fill(255);

    for (let i = 0; i < nSamples; i++) {
      const t = t0 + (i + 0.5) * dtH;
      const sun = Sun.position(Sun.localDate(YEAR, state.doy, t, tz()), state.loc.lat, state.loc.lng);
      if (sun.altitude < HORIZON) continue; // grazing light: blocked by the horizon
      gridCtx.setTransform(1, 0, 0, 1, 0, 0);
      gridCtx.globalAlpha = 1;
      gridCtx.fillStyle = '#fff';
      gridCtx.fillRect(0, 0, nx, ny);
      gridCtx.fillStyle = '#000';
      drawShadows(gridCtx, P, V, sun, month);
      const px = gridCtx.getImageData(0, 0, nx, ny).data;
      const row = i * n;
      for (let j = 0; j < n; j++) {
        sun2[j] += (px[j * 4] / 255) * dtH;
        perSample[row + j] = 255 - px[j * 4];
      }
    }

    state.heat = {
      bounds, grid: sun2, perSample, nSamples, t0, t1, dtH,
      cell, nx, ny, rev: state.rev, doy: state.doy, kx, sw, hM,
    };
    heatShade.forHeat = null; // force a recolor for the new grid
    ensureHeatColors();
    updateSummary();
    if (state.selection && state.selection.type === 'plants') openInspector();
  }

  /* The displayed rasters follow the TIME slider: they show sun accumulated
     from sunrise up to the chosen hour. At day's end they equal the full-day
     totals that the plant warnings use. Recoloring is incremental, so
     playback animates the yard "banking" sun in real time. */
  const heatShade = { forHeat: null, idx: 0, cum: null };

  function heatCutoffIdx() {
    const h = state.heat;
    if (!h) return 0;
    const idx = Math.ceil((state.time - h.t0) / h.dtH);
    return Math.max(0, Math.min(h.nSamples, idx));
  }

  function ensureHeatColors() {
    const h = state.heat;
    if (!h) return;
    const idx = heatCutoffIdx();
    if (heatShade.forHeat === h && heatShade.idx === idx) return;
    const n = h.nx * h.ny;
    if (heatShade.forHeat !== h || idx < heatShade.idx) {
      heatShade.forHeat = h;
      heatShade.idx = 0;
      heatShade.cum = new Float32Array(n);
    }
    const cum = heatShade.cum;
    for (let i = heatShade.idx; i < idx; i++) {
      const row = i * n;
      for (let j = 0; j < n; j++) cum[j] += ((255 - h.perSample[row + j]) / 255) * h.dtH;
    }
    heatShade.idx = idx;

    // gradient raster
    heatCv.width = h.nx; heatCv.height = h.ny;
    const img = heatCtx.createImageData(h.nx, h.ny);
    for (let j = 0; j < n; j++) {
      const c = rampColor(cum[j] / HEAT_DOMAIN);
      img.data[j * 4] = c[0]; img.data[j * 4 + 1] = c[1]; img.data[j * 4 + 2] = c[2];
      img.data[j * 4 + 3] = 255;
    }
    heatCtx.putImageData(img, 0, 0);

    // "best sun" highlight raster — gold for 6h+, faint amber for 4–6h
    bestCv.width = h.nx; bestCv.height = h.ny;
    const img2 = bestCtx.createImageData(h.nx, h.ny);
    for (let j = 0; j < n; j++) {
      const hrs = cum[j];
      let r = 0, g = 0, b = 0, a = 0;
      if (hrs >= 6) {
        const t = Math.min(1, (hrs - 6) / 5);
        r = 255; g = Math.round(196 + 36 * t); b = Math.round(80 + 70 * t);
        a = Math.round(80 + 115 * t);
      } else if (hrs >= 4) {
        r = 255; g = 170; b = 60; a = 42;
      }
      img2.data[j * 4] = r; img2.data[j * 4 + 1] = g; img2.data[j * 4 + 2] = b;
      img2.data[j * 4 + 3] = a;
    }
    bestCtx.putImageData(img2, 0, 0);

    const note = document.getElementById('lg-note');
    if (note) {
      note.textContent = idx >= h.nSamples
        ? `day total · ${dateLabel(state.doy)}`
        : `banked by ${Sun.formatHour(Math.max(state.time, h.t0))}`;
    }
  }

  /** Hours shown in the raster right now (accumulated to the time cutoff). */
  function sampleBankedHours(ll) {
    const h = state.heat;
    if (!h || !heatShade.cum || !h.bounds.contains(ll)) return null;
    const x = Math.floor(((ll.lng - h.sw.lng) * h.kx) / h.cell);
    const y = Math.floor((h.hM - (ll.lat - h.sw.lat) * M_PER_DEG_LAT) / h.cell);
    if (x < 0 || y < 0 || x >= h.nx || y >= h.ny) return null;
    return heatShade.cum[y * h.nx + x];
  }

  function rampColor(t) {
    t = Math.max(0, Math.min(1, t));
    for (let i = 1; i < SUNRAMP.length; i++) {
      if (t <= SUNRAMP[i][0]) {
        const [t0, c0] = SUNRAMP[i - 1], [t1, c1] = SUNRAMP[i];
        const k = (t - t0) / (t1 - t0);
        return [0, 1, 2].map((j) => Math.round(c0[j] + (c1[j] - c0[j]) * k));
      }
    }
    return SUNRAMP[SUNRAMP.length - 1][1];
  }

  function sampleSunHours(ll) {
    const h = state.heat;
    if (!h || !h.bounds.contains(ll)) return null;
    const x = Math.floor(((ll.lng - h.sw.lng) * h.kx) / h.cell);
    const y = Math.floor((h.hM - (ll.lat - h.sw.lat) * M_PER_DEG_LAT) / h.cell);
    if (x < 0 || y < 0 || x >= h.nx || y >= h.ny) return null;
    return h.grid[y * h.nx + x];
  }

  const heatModeOn = () => state.show.heatmap || state.show.best;
  let heatTimer = null;
  function scheduleHeat(delay = 500) {
    if (!heatModeOn()) return;
    clearTimeout(heatTimer);
    heatTimer = setTimeout(() => { computeHeat(); requestRender(); }, delay);
  }
  function heatStale() {
    if (!state.heat || state.heat.rev !== state.rev || state.heat.doy !== state.doy) return true;
    const r = heatRegion();
    if (!r) return false;
    return metersBetween(r.getSouthWest(), state.heat.bounds.getSouthWest()) > 10 ||
           metersBetween(r.getNorthEast(), state.heat.bounds.getNorthEast()) > 10;
  }

  /* ============================================================
     Rendering
     ============================================================ */
  let renderQueued = false;
  function requestRender() {
    if (renderQueued) return;
    renderQueued = true;
    const run = () => {
      if (!renderQueued) return;
      renderQueued = false;
      draw();
    };
    // rAF for smoothness, with a timer fallback — some environments throttle
    // or pause rAF entirely (background tabs, battery saver, embedded panes)
    requestAnimationFrame(run);
    setTimeout(run, 90);
  }

  const CP = (ll) => map.latLngToContainerPoint(ll);

  function draw() {
    const { w, h } = sizeCanvas();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    const sun = sunNow();
    const altD = sun.altitude / R;
    const pxm = pxPerMeter();
    const month = monthOfDoy(state.doy);
    const showDetail = pxm > 1.2;

    // --- heat / best-sun raster (accumulated up to the time slider) ---
    if ((state.show.heatmap || state.show.best) && state.heat) {
      ensureHeatColors();
      const nw = CP(state.heat.bounds.getNorthWest());
      const se = CP(state.heat.bounds.getSouthEast());
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      if (state.show.heatmap) {
        ctx.globalAlpha = 0.62;
        ctx.drawImage(heatCv, nw.x, nw.y, se.x - nw.x, se.y - nw.y);
      } else {
        ctx.globalAlpha = 0.9; // per-pixel alpha already encodes the tiers
        ctx.drawImage(bestCv, nw.x, nw.y, se.x - nw.x, se.y - nw.y);
      }
      ctx.restore();
    }

    // --- beds ---
    for (const b of state.objects.beds) {
      const pts = b.pts.map(CP);
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.closePath();
      ctx.fillStyle = state.show.heatmap ? 'rgba(122,84,48,0.10)' : 'rgba(122,84,48,0.30)';
      ctx.fill();
      ctx.strokeStyle = isSel('beds', b.id) ? '#ffd97a' : 'rgba(201,161,95,0.95)';
      ctx.lineWidth = isSel('beds', b.id) ? 2.5 : 1.6;
      ctx.stroke();
      if (state.show.labels && showDetail) {
        const c = polyCenterPx(pts);
        label(`${b.name} · ${Math.round(polygonAreaM2(b.pts) * 10.7639)} ft²`, c.x, c.y, '#e8d9b0');
      }
    }

    // --- shadows ---
    if (state.show.shadows && sun.altitude >= HORIZON) {
      shadowCtx.setTransform(1, 0, 0, 1, 0, 0);
      shadowCtx.clearRect(0, 0, w, h);
      shadowCtx.fillStyle = '#0a1428';
      shadowCtx.globalAlpha = 1;
      const P = (ll) => { const p = CP(ll); return [p.x, p.y]; };
      const V = (eM, nM) => [eM * pxm, -nM * pxm];
      drawShadows(shadowCtx, P, V, sun, month);
      ctx.save();
      // over the saturated heat colors, shadows need extra weight to read
      // low sun is dim and diffuse: fade the layer toward the horizon cutoff
      // instead of letting hundred-meter slabs blink off at full strength
      const dim = Math.min(1, (altD - HORIZON / R) / 4);
      ctx.globalAlpha = (heatModeOn() ? 0.52 : 0.42) * dim;
      ctx.drawImage(shadowCv, 0, 0, w, h);
      ctx.restore();
    }

    // --- hourly shadow trails: where shade reaches at each hour, all at once ---
    if (state.show.trails && state.day && !state.day.polarNight) {
      const { sunrise, sunset } = state.day;
      const t0 = sunrise ?? 0, t1 = sunset ?? 24;
      const P = (ll) => { const p = CP(ll); return [p.x, p.y]; };
      const V = (eM, nM) => [eM * pxm, -nM * pxm];
      const cool = [111, 168, 255], warm = [255, 154, 77];
      ctx.save();
      ctx.globalAlpha = 0.85;
      for (let hr = Math.ceil(t0 + 0.25); hr <= Math.floor(t1 - 0.25); hr++) {
        const sp = Sun.position(Sun.localDate(YEAR, state.doy, hr, tz()), state.loc.lat, state.loc.lng);
        if (sp.altitude < HORIZON) continue;
        const k = (hr - t0) / (t1 - t0);
        const col = `rgb(${cool.map((c, i) => Math.round(c + (warm[i] - c) * k)).join(',')})`;
        const h12 = ((hr + 11) % 12) + 1;
        const label = showDetail && hr % 2 === 0 ? `${h12}${hr >= 12 ? 'p' : 'a'}` : null;
        drawShadows(ctx, P, V, sp, month, { stroke: col, label });
      }
      ctx.restore();
    }

    // --- buildings & fences ---
    for (const b of state.objects.buildings) {
      const pts = b.pts.map(CP);
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.closePath();
      ctx.fillStyle = 'rgba(105,110,122,0.30)';
      ctx.fill();
      ctx.strokeStyle = isSel('buildings', b.id) ? '#ffd97a' : 'rgba(178,184,198,0.85)';
      ctx.lineWidth = isSel('buildings', b.id) ? 2.5 : 1.5;
      ctx.stroke();
      if (state.show.labels && showDetail) {
        const c = polyCenterPx(pts);
        label(`▲ ${fmtFt(b.height)}`, c.x, c.y, '#c9cedb');
      }
    }
    for (const f of state.objects.fences) {
      const pts = f.pts.map(CP);
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      ctx.strokeStyle = isSel('fences', f.id) ? '#ffd97a' : 'rgba(185,138,82,0.95)';
      ctx.lineWidth = isSel('fences', f.id) ? 4 : 3;
      ctx.lineCap = 'round';
      ctx.stroke();
      if (state.show.labels && showDetail && pts.length > 1) {
        const m = pts[Math.floor(pts.length / 2) - 1], m2 = pts[Math.floor(pts.length / 2)];
        label(`fence ${fmtFt(f.height)}`, (m.x + m2.x) / 2, (m.y + m2.y) / 2 - 10, '#d9b98a');
      }
    }

    // --- trees ---
    for (const t of state.objects.trees) {
      const p = CP(t.latlng);
      const r = t.canopy * pxm;
      const lf = leafFactor(t.type, month);
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(r, 4), 0, Math.PI * 2);
      ctx.fillStyle = t.type === 'evergreen'
        ? 'rgba(46,94,60,0.38)'
        : lf < 1 ? 'rgba(120,105,70,0.28)' : 'rgba(84,132,58,0.34)';
      ctx.fill();
      ctx.strokeStyle = isSel('trees', t.id) ? '#ffd97a' : 'rgba(158,196,106,0.8)';
      ctx.lineWidth = isSel('trees', t.id) ? 2.5 : 1.4;
      if (lf < 1) ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      dot(p.x, p.y, 3, '#5a3d22', '#9ec46a');
      if (state.show.labels && showDetail) {
        label(`${t.type === 'evergreen' ? '🌲' : '🌳'} ${fmtFt(t.height)}`, p.x, p.y - r - 10, '#cfe3a8');
      }
    }

    // --- plants ---
    for (const pl of state.objects.plants) {
      const meta = PLANT_INDEX[pl.plantId];
      if (!meta) continue;
      const p = CP(pl.latlng);
      const r = (meta.spread / 2) * pxm;
      if (state.show.spread && r > 3) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(164,196,101,0.13)';
        ctx.fill();
        ctx.strokeStyle = isSel('plants', pl.id) ? '#ffd97a' : 'rgba(164,196,101,0.5)';
        ctx.lineWidth = isSel('plants', pl.id) ? 2 : 1;
        ctx.stroke();
      } else if (isSel('plants', pl.id)) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(r, 8), 0, Math.PI * 2);
        ctx.strokeStyle = '#ffd97a';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      const fs = Math.max(11, Math.min(r * 1.1, 40));
      ctx.font = `${fs}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(meta.emoji, p.x, p.y);
      const st = plantSunStatus(pl);
      if (st && st.level !== 'ok' && st.level !== 'na') {
        dot(p.x + fs * 0.45, p.y - fs * 0.45, 5.5, st.level === 'bad' ? '#e0684b' : '#e8a53a', '#14170e');
        ctx.fillStyle = '#14170e';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText('!', p.x + fs * 0.45, p.y - fs * 0.45 + 0.5);
      }
    }

    // --- light probe marker ---
    if (state.probe) {
      const p = CP(state.probe.latlng);
      const sel = state.selection && state.selection.type === 'probe';
      ctx.save();
      ctx.strokeStyle = sel ? '#ffd97a' : 'rgba(255,217,122,0.85)';
      ctx.lineWidth = sel ? 2 : 1.5;
      ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath();
      [[0, -14, 0, -5], [0, 5, 0, 14], [-14, 0, -5, 0], [5, 0, 14, 0]].forEach(([a, b, c, d]) => {
        ctx.moveTo(p.x + a, p.y + b); ctx.lineTo(p.x + c, p.y + d);
      });
      ctx.stroke();
      dot(p.x, p.y, 2.5, '#ffd97a');
      ctx.restore();
    }

    // --- drag-to-draw preview, with live dimensions ---
    if (state.rectDraw && state.rectDraw.moved) {
      const r = state.rectDraw;
      const geo = rectShapePoints(r);
      const pts = geo.map((p) => CP(L.latLng(p.lat, p.lng)));
      ctx.save();
      ctx.strokeStyle = '#ffd97a';
      ctx.lineWidth = 1.8;
      ctx.setLineDash([6, 5]);
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      if (r.type !== 'fence') {
        ctx.closePath();
        ctx.fillStyle = r.type === 'bed' ? 'rgba(122,84,48,0.28)' : 'rgba(105,110,122,0.28)';
        ctx.fill();
      }
      ctx.stroke();
      ctx.setLineDash([]);
      pts.forEach((p) => dot(p.x, p.y, 3.5, '#ffd97a', '#14170e'));
      const G = (i) => L.latLng(geo[i].lat, geo[i].lng);
      if (r.type === 'fence') {
        label(fmtFt(metersBetween(G(0), G(1))),
          (pts[0].x + pts[1].x) / 2, (pts[0].y + pts[1].y) / 2 - 12, '#ffd97a');
      } else {
        const wM = metersBetween(G(0), G(1));
        const hM = metersBetween(G(1), G(2));
        label(fmtFt(wM), (pts[0].x + pts[1].x) / 2, pts[0].y - 11, '#ffd97a');
        label(fmtFt(hM), pts[1].x + 30, (pts[1].y + pts[2].y) / 2, '#ffd97a');
        const c = polyCenterPx(pts);
        label(`${Math.round(wM * hM * 10.7639)} ft²`, c.x, c.y, '#ffd97a');
      }
      ctx.restore();
    }

    // --- in-progress drawing ---
    if (state.drawing) {
      const d = state.drawing;
      const pts = d.pts.map(CP);
      ctx.beginPath();
      pts.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
      if (d.cursor) { const c = CP(d.cursor); ctx.lineTo(c.x, c.y); }
      if (d.type !== 'fence' && pts.length > 1) {
        ctx.lineTo(pts[0].x, pts[0].y);
      }
      ctx.strokeStyle = '#ffd97a';
      ctx.lineWidth = 1.6;
      ctx.setLineDash([6, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      pts.forEach((p) => dot(p.x, p.y, 3.5, '#ffd97a', '#14170e'));
    }

    // --- snap feedback: a ring on the corner grabbed, dashed guides for
    //     points merely lined up with ---
    if (state.snap) {
      const p = CP(state.snap.at);
      const onPoint = state.snap.marks.some((m) => m.kind === 'point');
      ctx.save();
      ctx.strokeStyle = '#7ee7ff';
      state.snap.marks.forEach((m) => {
        if (m.kind !== 'guide') return;
        const r = CP(m.ll);
        ctx.globalAlpha = 0.75;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      ctx.lineWidth = 1.6;
      if (onPoint) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p.x - 3.5, p.y - 3.5); ctx.lineTo(p.x + 3.5, p.y + 3.5);
        ctx.moveTo(p.x + 3.5, p.y - 3.5); ctx.lineTo(p.x - 3.5, p.y + 3.5);
        ctx.stroke();
      } else {
        ctx.strokeRect(p.x - 4.5, p.y - 4.5, 9, 9);
      }
      ctx.restore();
    }

    // --- selection handles ---
    if (state.selection && showDetail) drawHandles();

    // --- dusk / dawn / night tint ---
    if (altD < 10) {
      const night = Math.min(1, Math.max(0, (2 - altD) / 11)); // 0 at +2°, 1 at -9°
      if (night > 0) {
        ctx.fillStyle = `rgba(8,12,34,${0.55 * night})`;
        ctx.fillRect(0, 0, w, h);
      }
      if (altD > -2) {
        const gold = 1 - Math.abs(altD - 4) / 6;
        if (gold > 0) {
          ctx.fillStyle = `rgba(255,140,40,${0.10 * gold})`;
          ctx.fillRect(0, 0, w, h);
        }
      }
    }

    drawDial(sun);
  }

  function label(text, x, y, color) {
    ctx.font = '11px "Spline Sans Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(8,10,4,0.85)';
    ctx.strokeText(text, x, y);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  }
  function dot(x, y, r, fill, stroke) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke(); }
  }
  function polyCenterPx(pts) {
    let x = 0, y = 0;
    pts.forEach((p) => { x += p.x; y += p.y; });
    return { x: x / pts.length, y: y / pts.length };
  }
  function isSel(type, id) {
    return state.selection && state.selection.type === type && state.selection.id === id;
  }

  function selectedObj() {
    if (!state.selection) return null;
    if (state.selection.type === 'probe') return state.probe;
    return state.objects[state.selection.type].find((o) => o.id === state.selection.id) || null;
  }

  /** Screen position of the rotate grip: centered above the shape's top edge. */
  function rotHandle(o) {
    if (!o || !o.pts || o.pts.length < 2) return null;
    const pts = o.pts.map(CP);
    const c = polyCenterPx(pts);
    const top = Math.min(...pts.map((p) => p.y));
    return { x: c.x, y: top - 20, anchorY: top };
  }

  function drawHandles() {
    const o = selectedObj();
    if (!o) return;
    if (o.pts) {
      o.pts.forEach((ll) => {
        const p = CP(ll);
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#14170e';
        ctx.lineWidth = 1.5;
        ctx.fillRect(p.x - 4, p.y - 4, 8, 8);
        ctx.strokeRect(p.x - 4, p.y - 4, 8, 8);
      });
      const rh = rotHandle(o);
      if (rh) {
        ctx.save();
        ctx.strokeStyle = 'rgba(255,217,122,0.65)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(rh.x, rh.anchorY);
        ctx.lineTo(rh.x, rh.y);
        ctx.stroke();
        ctx.setLineDash([]);
        dot(rh.x, rh.y, 6, '#14170e', '#ffd97a');
        ctx.strokeStyle = '#ffd97a';
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.arc(rh.x, rh.y, 3.2, -0.65 * Math.PI, 0.85 * Math.PI);
        ctx.stroke();
        ctx.restore();
      }
    } else if (state.selection.type === 'trees') {
      const p = CP(o.latlng);
      const hp = CP(destLatLng(o.latlng, o.canopy, 0));
      ctx.beginPath();
      ctx.arc(hp.x, hp.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.strokeStyle = '#14170e';
      ctx.stroke();
    }
  }

  /* ============================================================
     Sun dial
     ============================================================ */
  const dial = document.getElementById('dialbox');
  function drawDial(sun) {
    const C = 64, RIM = 52;
    const altD = sun.altitude / R, azD = sun.azimuth / R;
    const pos = (az, alt) => {
      const rr = RIM * (1 - Math.max(0, Math.min(90, alt)) / 90);
      return [C + rr * Math.sin(az * R), C - rr * Math.cos(az * R)];
    };
    let path = '';
    if (state.day && !state.day.polarNight) {
      const { sunrise, sunset } = state.day;
      const t0 = sunrise ?? 0, t1 = sunset ?? 24;
      for (let i = 0; i <= 40; i++) {
        const t = t0 + ((t1 - t0) * i) / 40;
        const sp = Sun.position(Sun.localDate(YEAR, state.doy, t, tz()), state.loc.lat, state.loc.lng);
        const [x, y] = pos(sp.azimuth / R, sp.altitude / R);
        path += `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`;
      }
    }
    const up = altD > 0;
    const [sx, sy] = pos(azD, altD);
    dial.innerHTML = `
      <circle cx="${C}" cy="${C}" r="${RIM}" fill="rgba(0,0,0,0.28)" stroke="#3b4126"/>
      <circle cx="${C}" cy="${C}" r="${RIM * (1 - 30 / 90)}" fill="none" stroke="#2a2e1c" stroke-dasharray="2 3"/>
      <circle cx="${C}" cy="${C}" r="${RIM * (1 - 60 / 90)}" fill="none" stroke="#2a2e1c" stroke-dasharray="2 3"/>
      ${['N', 'E', 'S', 'W'].map((c2, i) => {
        const a = i * 90 * R;
        return `<text x="${C + (RIM + 8) * Math.sin(a)}" y="${C - (RIM + 8) * Math.cos(a)}"
          fill="${c2 === 'N' ? '#e8b64c' : '#7d795f'}" font-size="9" text-anchor="middle"
          dominant-baseline="middle" font-family="Spline Sans Mono">${c2}</text>`;
      }).join('')}
      <path d="${path}" fill="none" stroke="rgba(232,182,76,0.4)" stroke-width="1.2"/>
      <circle cx="${sx}" cy="${sy}" r="${up ? 5 : 3.5}"
        fill="${up ? '#ffd97a' : '#3f4257'}" stroke="${up ? '#a87c1e' : '#23253a'}">
        ${up ? '' : ''}
      </circle>
      ${up ? `<circle cx="${sx}" cy="${sy}" r="9" fill="none" stroke="rgba(255,217,122,0.35)"/>` : ''}
    `;
    document.getElementById('f-alt').textContent = `${altD.toFixed(0)}°`;
    document.getElementById('f-az').textContent = `${azD.toFixed(0)}°`;
    document.getElementById('f-day').textContent = state.day
      ? `${state.day.daylight.toFixed(1)}h` : '—';
  }

  /* ============================================================
     Plant status & summary
     ============================================================ */
  function plantSunStatus(pl) {
    const meta = PLANT_INDEX[pl.plantId];
    if (!meta) return null;
    const hours = sampleSunHours(pl.latlng);
    if (hours === null || heatStale()) return { level: 'na', hours: null };
    const need = SUN_LEVELS[meta.sun].minHours;
    if (meta.sun === 'shade' && hours > 6.5) {
      return { level: 'warn', hours, msg: `gets ${hours.toFixed(1)}h — may scorch in full sun` };
    }
    if (hours >= need) return { level: 'ok', hours };
    if (hours >= need - 1.5) {
      return { level: 'warn', hours, msg: `gets ${hours.toFixed(1)}h, wants ${need}h+` };
    }
    return { level: 'bad', hours, msg: `only ${hours.toFixed(1)}h of sun — needs ${need}h+` };
  }

  function gatherWarnings() {
    const warns = [];
    const P = state.objects.plants;
    for (const pl of P) {
      const meta = PLANT_INDEX[pl.plantId];
      if (!meta) continue;
      const st = plantSunStatus(pl);
      if (st && (st.level === 'bad' || st.level === 'warn') && st.msg) {
        warns.push({ level: st.level === 'bad' ? 'bad' : 'warn', icon: st.level === 'bad' ? '✗' : '⚠',
          text: `${meta.name}: ${st.msg}`, focus: pl });
      }
    }
    // spacing + companions
    for (let i = 0; i < P.length; i++) {
      for (let j = i + 1; j < P.length; j++) {
        const a = PLANT_INDEX[P[i].plantId], b = PLANT_INDEX[P[j].plantId];
        if (!a || !b) continue;
        const d = metersBetween(P[i].latlng, P[j].latlng);
        const minD = (a.spacing + b.spacing) / 2;
        if (d < minD * 0.55) {
          warns.push({ level: 'warn', icon: '⚠',
            text: `${a.name} & ${b.name} are crowded — ${fmtIn(d)} apart, want ${fmtIn(minD)}`, focus: P[i] });
        } else if (d < 1.6 && (a.avoid.includes(b.id) || b.avoid.includes(a.id))) {
          warns.push({ level: 'warn', icon: '⚠',
            text: `${a.name} and ${b.name} are poor companions — separate them`, focus: P[i] });
        }
      }
    }
    return warns;
  }

  function updateSummary() {
    const o = state.objects;
    document.getElementById('st-beds').textContent = o.beds.length;
    document.getElementById('st-plants').textContent = o.plants.length;
    const area = o.beds.reduce((s, b) => s + polygonAreaM2(b.pts), 0) * 10.7639;
    document.getElementById('st-area').textContent = area >= 1000 ? `${(area / 1000).toFixed(1)}k` : Math.round(area);

    const box = document.getElementById('warnings');
    box.innerHTML = '';
    const warns = gatherWarnings();
    if (!o.plants.length && !o.beds.length) {
      box.innerHTML = `<div class="allclear" style="color:var(--ink-faint)">Nothing planted yet — trace a bed and open the plant library.</div>`;
      return;
    }
    if (!warns.length) {
      box.innerHTML = heatModeOn() && !heatStale()
        ? `<div class="allclear">✓ Every plant gets the light it needs${warnDate()}</div>`
        : `<div class="allclear" style="color:var(--ink-faint)">Turn on the Sun map to check every plant's light.</div>`;
      return;
    }
    warns.slice(0, 8).forEach((w2) => {
      const el = document.createElement('div');
      el.className = `warnrow w-${w2.level}`;
      el.innerHTML = `<span class="ic">${w2.icon}</span><span>${w2.text}</span>`;
      el.addEventListener('click', () => {
        if (w2.focus) {
          map.panTo(w2.focus.latlng);
          state.selection = { type: 'plants', id: w2.focus.id };
          openInspector();
          requestRender();
        }
      });
      box.appendChild(el);
    });
    if (warns.length > 8) {
      const more = document.createElement('div');
      more.className = 'allclear';
      more.style.color = 'var(--ink-faint)';
      more.textContent = `…and ${warns.length - 8} more`;
      box.appendChild(more);
    }
  }
  const warnDate = () => ` on ${dateLabel(state.doy)}`;

  /* ============================================================
     Getting started — the order that actually works, ticked off
     from the real design rather than from a tour script. Clicking
     a step arms the tool it is asking for.
     ============================================================ */
  const guideEl = document.getElementById('guide');
  const guideStepsEl = document.getElementById('guidesteps');
  const guideReopen = document.getElementById('guide-reopen');
  let guideOff = false;
  let guideAllSetAt = 0;

  const shadeCasters = () =>
    state.objects.trees.length + state.objects.buildings.length + state.objects.fences.length;

  const GUIDE = [
    {
      label: 'Find your yard',
      hint: 'Search your address up top, or press ◎ for your location. The map flies in and the sun math locks to your latitude.',
      done: () => map.getZoom() >= 17,
      go: () => { searchEl.focus(); searchEl.select(); },
    },
    {
      label: 'Trace what casts shade',
      hint: 'Trees (T), the house and sheds (U), fences (F) — then set each one\'s real height in the inspector. Neighbours\' trees count.',
      note: () => (shadeCasters() ? `${shadeCasters()} traced` : ''),
      done: () => shadeCasters() > 0,
      go: () => setTool('tree'),
    },
    {
      label: 'Switch on Best sun',
      hint: 'Gold marks ground that clears 6 hours of direct light on this date. Drag the date slider to compare seasons.',
      done: () => state.show.best || state.show.heatmap,
      go: () => {
        if (!heatModeOn()) document.querySelector('.tog[data-show="best"]').click();
      },
    },
    {
      label: 'Draw a bed on the gold',
      hint: 'Drag a rectangle over good ground (B). Corners snap to what you have already drawn.',
      done: () => state.objects.beds.length > 0,
      go: () => setTool('bed'),
    },
    {
      label: 'Plant it',
      hint: 'Pick from the library (P), then click inside the bed. The ledger flags anything that won\'t get the light it needs.',
      done: () => state.objects.plants.length > 0,
      go: () => setTool('plant'),
    },
  ];

  function refreshGuide() {
    const flags = GUIDE.map((s) => s.done());
    const left = flags.indexOf(false);
    const allSet = left < 0;

    if (guideReopen) guideReopen.hidden = !(guideOff && !allSet);
    if (guideOff) { guideEl.classList.remove('open'); return; }
    guideEl.classList.add('open');

    guideStepsEl.innerHTML = '';
    GUIDE.forEach((s, i) => {
      const now = i === left;
      const b = document.createElement('button');
      b.className = `gstep${flags[i] ? ' done' : ''}${now ? ' now' : ''}`;
      const note = !now && s.note ? s.note() : '';
      b.innerHTML = `<span class="gmark">${flags[i] ? '✓' : now ? '▸' : '○'}</span>
        <span><span class="glabel">${i + 1}. ${esc(s.label)}</span>
        ${now ? `<span class="ghint">${esc(s.hint)}</span>` : ''}
        ${note ? `<span class="gnote">${esc(note)}</span>` : ''}</span>`;
      b.addEventListener('click', () => { s.go(); refreshGuide(); });
      guideStepsEl.appendChild(b);
    });

    if (allSet) {
      const el = document.createElement('div');
      el.className = 'guide-allset';
      el.textContent = '✓ That is the whole loop. Keep scrubbing the time and date sliders — the ledger re-checks every plant as you go.';
      guideStepsEl.appendChild(el);
      // let it be read, then get out of the way for good
      if (!guideAllSetAt) guideAllSetAt = Date.now();
      setTimeout(() => {
        if (guideAllSetAt && Date.now() - guideAllSetAt >= 9000) hideGuide();
      }, 9200);
    }
  }

  function hideGuide() {
    guideOff = true;
    refreshGuide();
    scheduleSave();
  }
  document.getElementById('guide-close').addEventListener('click', hideGuide);
  guideReopen.addEventListener('click', () => {
    guideOff = false;
    guideAllSetAt = 0;
    refreshGuide();
    scheduleSave();
  });

  /* ============================================================
     Light probe — a spot's minute-by-minute sun through the day
     ============================================================ */
  function probeDay(ll) {
    const d = state.day;
    if (!d || d.polarNight) return null;
    const t0 = d.sunrise ?? 0, t1 = d.sunset ?? 24;
    const n = 96;
    const dt = (t1 - t0) / n;
    const month = monthOfDoy(state.doy);
    const samples = [];
    let sunH = 0;
    for (let i = 0; i < n; i++) {
      const t = t0 + (i + 0.5) * dt;
      const sun = Sun.position(Sun.localDate(YEAR, state.doy, t, tz()), state.loc.lat, state.loc.lng);
      let block = 1, by = 'horizon';
      if (sun.altitude >= HORIZON) ({ block, by } = shadeAtPoint(ll, sun, month));
      sunH += (1 - block) * dt;
      samples.push({ t, block, by });
    }
    // contiguous shaded stretches (>15 min), with what mostly causes them
    const intervals = [];
    let run = null;
    const flush = () => {
      if (!run) return;
      if (run.end - run.start > 0.25) {
        const counts = {};
        run.by.forEach((b) => { if (b) counts[b] = (counts[b] || 0) + 1; });
        const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
        intervals.push({ start: run.start, end: run.end, by: top ? top[0] : 'shade' });
      }
      run = null;
    };
    samples.forEach((s) => {
      if (s.block >= 0.5) {
        if (!run) run = { start: s.t - dt / 2, end: s.t + dt / 2, by: [] };
        run.end = s.t + dt / 2;
        run.by.push(s.by);
      } else flush();
    });
    flush();
    return { t0, t1, dt, samples, sunH, intervals };
  }

  function renderProbeStrip(data) {
    const cv = document.getElementById('probestrip');
    if (!cv || !data) return;
    const g = cv.getContext('2d');
    const W = cv.width, H = cv.height;
    g.clearRect(0, 0, W, H);
    const n = data.samples.length;
    data.samples.forEach((s, i) => {
      g.fillStyle = s.block >= 0.9 ? '#262b45' : s.block >= 0.1 ? '#a97b3c' : '#ffd97a';
      g.fillRect((i / n) * W, 4, W / n + 0.6, H - 12);
    });
    // solar-noon tick
    const noonX = ((state.day.solarNoon - data.t0) / (data.t1 - data.t0)) * W;
    g.fillStyle = 'rgba(236,231,212,0.8)';
    g.fillRect(noonX, 0, 1, H - 8);
    g.font = '8px "Spline Sans Mono", monospace';
    g.fillStyle = '#7d795f';
    g.textAlign = 'left';
    g.fillText(Sun.formatHour(data.t0), 0, H - 1);
    g.textAlign = 'center';
    g.fillText('noon', noonX, H - 1);
    g.textAlign = 'right';
    g.fillText(Sun.formatHour(data.t1), W, H - 1);
  }

  /* ============================================================
     Inspector
     ============================================================ */
  const inspector = document.getElementById('inspector');

  function openInspector() {
    if (state.selection && state.selection.type === 'probe' && state.probe) {
      const data = probeDay(state.probe.latlng);
      const list = data ? data.intervals.slice(0, 5).map((iv) =>
        `<div class="prop"><label>◐ ${Sun.formatHour(iv.start)}–${Sun.formatHour(iv.end)}</label><span class="val">${esc(iv.by)}</span></div>`).join('') : '';
      inspector.innerHTML = `
        <div class="kind">Light probe · ${dateLabel(state.doy)}</div>
        <h2 class="paneltitle" style="margin-top:4px">Sunlight at this spot</h2>
        ${data ? `
          <canvas id="probestrip" width="264" height="34" style="width:100%;margin-top:10px"></canvas>
          <div class="sunbadge ${data.sunH >= 6 ? 'ok' : data.sunH >= 4 ? 'warn' : 'bad'}" style="margin-top:6px">
            ☀ ${data.sunH.toFixed(1)}h direct sun — ${data.sunH >= 6 ? 'full sun' : data.sunH >= 4 ? 'part sun' : 'shade'}</div>
          <div class="props" style="margin-top:10px">
            ${list || '<div class="prop"><label>No shade all day</label><span class="val">☀</span></div>'}
          </div>
          <div style="margin-top:10px;font-size:10px;color:var(--ink-faint);line-height:1.5">
            Gold = direct sun · amber = filtered · slate = shaded. Move the probe or scrub the date to compare.</div>`
        : '<div class="plantcard">No daylight on this date at this latitude.</div>'}
        <div class="inspector-actions"><button class="mini danger" id="i-del">Clear probe</button></div>`;
      inspector.classList.add('open');
      if (data) renderProbeStrip(data);
      document.getElementById('i-del').addEventListener('click', () => deleteSelection());
      return;
    }
    const o = selectedObj();
    if (!o) { inspector.classList.remove('open'); inspector.innerHTML = ''; return; }
    const t = state.selection.type;
    let html = '';
    if (t === 'beds') {
      const area = polygonAreaM2(o.pts);
      const count = state.objects.plants.filter((p) => pointInPoly(p.latlng, o.pts)).length;
      html = `
        <div class="kind">Garden bed</div>
        <h2 class="paneltitle" style="margin-top:4px">${esc(o.name)}</h2>
        <div class="props">
          <div class="prop"><label>Name</label><input type="text" id="i-name" value="${esc(o.name)}"/></div>
          <div class="prop"><label>Area</label><span class="val">${Math.round(area * 10.7639)} ft² (${area.toFixed(1)} m²)</span></div>
          <div class="prop"><label>Planted</label><span class="val">${count} plants</span></div>
        </div>`;
    } else if (t === 'trees') {
      html = `
        <div class="kind">Tree</div>
        <h2 class="paneltitle" style="margin-top:4px">${o.type === 'evergreen' ? 'Evergreen' : 'Deciduous'} tree</h2>
        <div class="props">
          <div class="prop"><label>Type</label>
            <select id="i-treetype">
              <option value="deciduous"${o.type === 'deciduous' ? ' selected' : ''}>Deciduous (bare in winter)</option>
              <option value="evergreen"${o.type === 'evergreen' ? ' selected' : ''}>Evergreen</option>
            </select></div>
          <div class="prop"><label>Height</label><input type="range" id="i-height" min="2" max="30" step="0.5" value="${o.height}"/><span class="val" id="i-height-v">${fmtFt(o.height)}</span></div>
          <div class="prop"><label>Canopy r.</label><input type="range" id="i-canopy" min="0.5" max="12" step="0.25" value="${o.canopy}"/><span class="val" id="i-canopy-v">${fmtFt(o.canopy)}</span></div>
        </div>`;
    } else if (t === 'buildings') {
      html = `
        <div class="kind">Building / structure</div>
        <h2 class="paneltitle" style="margin-top:4px">Structure</h2>
        <div class="props">
          <div class="prop"><label>Height</label><input type="range" id="i-height" min="2" max="25" step="0.5" value="${o.height}"/><span class="val" id="i-height-v">${fmtFt(o.height)}</span></div>
          <div class="prop"><label>Footprint</label><span class="val">${Math.round(polygonAreaM2(o.pts) * 10.7639)} ft²</span></div>
        </div>`;
    } else if (t === 'fences') {
      html = `
        <div class="kind">Fence / wall</div>
        <h2 class="paneltitle" style="margin-top:4px">Fence</h2>
        <div class="props">
          <div class="prop"><label>Height</label><input type="range" id="i-height" min="0.5" max="5" step="0.1" value="${o.height}"/><span class="val" id="i-height-v">${fmtFt(o.height)}</span></div>
        </div>`;
    } else if (t === 'plants') {
      const m = PLANT_INDEX[o.plantId];
      const st = plantSunStatus(o);
      const badge = !st || st.level === 'na'
        ? `<span class="sunbadge na">◌ turn on the Sun map to check light here</span>`
        : st.level === 'ok'
          ? `<span class="sunbadge ok">✓ ${st.hours.toFixed(1)}h direct sun${warnDate()}</span>`
          : `<span class="sunbadge ${st.level}">${st.level === 'bad' ? '✗' : '⚠'} ${st.msg}</span>`;
      const comp = m.companions.map((id) => PLANT_INDEX[id]?.name).filter(Boolean).join(', ');
      const avoid = m.avoid.map((id) => PLANT_INDEX[id]?.name).filter(Boolean).join(', ');
      html = `
        <div class="kind">Plant</div>
        <h2 class="paneltitle" style="margin-top:4px">${m.emoji} ${m.name}</h2>
        <div class="plantcard">
          <div class="bot">${m.botanical}</div>
          ${badge}
          <div class="facts">
            <span>Light <b>${SUN_LEVELS[m.sun].icon} ${SUN_LEVELS[m.sun].label}</b></span>
            <span>Water <b>${m.water}</b></span>
            <span>Spacing <b>${fmtIn(m.spacing)}</b></span>
            <span>Spread <b>${fmtIn(m.spread)}</b></span>
            <span>Height <b>${fmtFt(m.height)}</b></span>
            <span>Harvest <b>${m.days}</b></span>
          </div>
          <div><b style="color:var(--ink)">Sow:</b> ${m.sow}</div>
          ${comp ? `<div style="margin-top:6px"><b style="color:var(--ok)">Friends:</b> ${comp}</div>` : ''}
          ${avoid ? `<div><b style="color:var(--bad)">Keep from:</b> ${avoid}</div>` : ''}
          <div class="tip" style="margin-top:8px">☞ ${m.tip}</div>
        </div>`;
    }
    html += `<div class="inspector-actions">
      <button class="mini" id="i-dup">Duplicate</button>
      <button class="mini danger" id="i-del">Delete</button>
    </div>`;
    inspector.innerHTML = html;
    inspector.classList.add('open');
    wireInspector(o, t);
  }

  function wireInspector(o, t) {
    const bind = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', fn);
    };
    bind('i-name', (e) => { o.name = e.target.value || 'Bed'; touch(); });
    bind('i-height', (e) => {
      o.height = parseFloat(e.target.value);
      document.getElementById('i-height-v').textContent = fmtFt(o.height);
      touch();
    });
    bind('i-canopy', (e) => {
      o.canopy = parseFloat(e.target.value);
      document.getElementById('i-canopy-v').textContent = fmtFt(o.canopy);
      touch();
    });
    bind('i-treetype', (e) => { o.type = e.target.value; touch(); openInspector(); });
    document.getElementById('i-del').addEventListener('click', () => deleteSelection());
    document.getElementById('i-dup').addEventListener('click', () => {
      pushUndo();
      const copy = JSON.parse(JSON.stringify(o));
      copy.id = nextId();
      const shift = (ll) => destLatLng(L.latLng(ll.lat, ll.lng), 2, -2);
      if (copy.pts) copy.pts = copy.pts.map((p) => { const s = shift(p); return { lat: s.lat, lng: s.lng }; });
      if (copy.latlng) { const s = shift(copy.latlng); copy.latlng = { lat: s.lat, lng: s.lng }; }
      state.objects[t].push(copy);
      state.selection = { type: t, id: copy.id };
      touch();
      openInspector();
    });
  }

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function deleteSelection() {
    if (!state.selection) return;
    if (state.selection.type === 'probe') {
      state.probe = null;
      state.selection = null;
      openInspector();
      requestRender();
      scheduleSave();
      return;
    }
    pushUndo();
    const arr = state.objects[state.selection.type];
    const i = arr.findIndex((o) => o.id === state.selection.id);
    if (i >= 0) arr.splice(i, 1);
    state.selection = null;
    openInspector();
    touch();
  }

  /* ============================================================
     Mutation plumbing
     ============================================================ */
  function pushUndo() {
    state.undoStack.push(JSON.stringify(state.objects));
    if (state.undoStack.length > 40) state.undoStack.shift();
  }
  function undo() {
    const prev = state.undoStack.pop();
    if (!prev) { toast('Nothing to undo'); return; }
    state.objects = JSON.parse(prev);
    state.selection = null;
    openInspector();
    touch();
  }
  function touch() {
    state.rev++; // geometry and height changes both affect shadows
    updateSummary();
    refreshGuide();
    scheduleHeat(600);
    if (state.selection && state.selection.type === 'probe') openInspector();
    requestRender();
    scheduleSave();
  }

  /* ============================================================
     Tools & interaction
     ============================================================ */
  const mapEl = document.getElementById('map');
  const HINTS = {
    bed: '<b>Drag</b> a rectangle, or <b>click</b> corner by corner · <b>Shift</b> squares it · corners snap (<b>Alt</b> to free)',
    building: '<b>Drag</b> the footprint, or <b>click</b> corners · corners snap to what you have drawn (<b>Alt</b> to free)',
    fence: '<b>Drag</b> a straight run, or <b>click</b> along the line · <b>Shift</b> snaps the angle · ends snap to corners',
    tree: 'Click to place a tree — set its height &amp; canopy in the inspector',
    plant: 'Pick a plant on the left, then click inside a bed to plant it',
    probe: 'Click any spot to chart its sunlight through the whole day',
    erase: 'Click anything to remove it',
  };

  function setTool(tool) {
    state.tool = tool;
    cancelDrawing();
    document.querySelectorAll('.tool[data-tool]').forEach((b) =>
      b.classList.toggle('on', b.dataset.tool === tool && !b.dataset.momentary));
    document.getElementById('plantdrawer').classList.toggle('open', tool === 'plant');
    mapEl.style.cursor = tool === 'select' ? '' : tool === 'erase' ? 'not-allowed' : 'crosshair';
    const hint = document.getElementById('hint');
    if (HINTS[tool]) { hint.innerHTML = HINTS[tool]; hint.classList.add('show'); positionHint(); }
    else hint.classList.remove('show');
  }

  /** Keep the hint clear of the dock, which changes height as rows wrap. */
  function positionHint() {
    const hint = document.getElementById('hint');
    if (!hint.classList.contains('show')) return;
    const d = document.getElementById('dock').getBoundingClientRect();
    hint.style.bottom = `${Math.round(window.innerHeight - d.top + 10)}px`;
  }
  window.addEventListener('resize', positionHint);

  document.querySelectorAll('.tool').forEach((b) => {
    b.addEventListener('click', () => {
      if (b.dataset.momentary) { undo(); return; }
      setTool(b.dataset.tool);
    });
  });

  function cancelDrawing() {
    state.drawing = null;
    state.snap = null;
    if (state.rectDraw) { state.rectDraw = null; map.dragging.enable(); }
    requestRender();
  }

  function createShape(type, pts) {
    pushUndo();
    if (type === 'bed') {
      const bed = { id: nextId(), name: `Bed ${state.objects.beds.length + 1}`, pts };
      state.objects.beds.push(bed);
      state.selection = { type: 'beds', id: bed.id };
    } else if (type === 'building') {
      const bl = { id: nextId(), pts, height: 5 };
      state.objects.buildings.push(bl);
      state.selection = { type: 'buildings', id: bl.id };
    } else {
      const f = { id: nextId(), pts, height: 1.8 };
      state.objects.fences.push(f);
      state.selection = { type: 'fences', id: f.id };
    }
    state.drawing = null;
    state.rectDraw = null;
    state.snap = null;
    openInspector();
    touch();
  }

  function finishDrawing() {
    const d = state.drawing;
    if (!d) return;
    const minPts = d.type === 'fence' ? 2 : 3;
    if (d.pts.length < minPts) return; // not enough corners yet — keep drawing (Esc cancels)
    createShape(d.type, d.pts.map((ll) => ({ lat: ll.lat, lng: ll.lng })));
  }

  /* ---- drag-to-draw: a rectangle from two opposite corners, a fence from
     two endpoints. Shift squares the rectangle / snaps the fence to 15°. ---- */
  function rectPoints(r) {
    let corner = r.cur;
    if (r.shift) {
      const eSign = r.cur.lng >= r.start.lng ? 1 : -1;
      const nSign = r.cur.lat >= r.start.lat ? 1 : -1;
      const wM = metersBetween(r.start, L.latLng(r.start.lat, r.cur.lng));
      const hM = metersBetween(r.start, L.latLng(r.cur.lat, r.start.lng));
      const s = Math.max(wM, hM);
      corner = destLatLng(r.start, eSign * s, nSign * s);
    }
    const n = Math.max(r.start.lat, corner.lat), s = Math.min(r.start.lat, corner.lat);
    const w = Math.min(r.start.lng, corner.lng), e = Math.max(r.start.lng, corner.lng);
    return [{ lat: n, lng: w }, { lat: n, lng: e }, { lat: s, lng: e }, { lat: s, lng: w }];
  }

  function fencePoints(r) {
    let end = r.cur;
    if (r.shift) {
      const kx = mPerDegLng(r.start.lat);
      const dx = (r.cur.lng - r.start.lng) * kx, dy = (r.cur.lat - r.start.lat) * M_PER_DEG_LAT;
      const step = 15 * R;
      const a = Math.round(Math.atan2(dy, dx) / step) * step;
      const len = Math.hypot(dx, dy);
      end = destLatLng(r.start, Math.cos(a) * len, Math.sin(a) * len);
    }
    return [{ lat: r.start.lat, lng: r.start.lng }, { lat: end.lat, lng: end.lng }];
  }

  const rectShapePoints = (r) => (r.type === 'fence' ? fencePoints(r) : rectPoints(r));

  function rectDragPx(r) {
    const a = CP(r.start), b = CP(r.cur);
    return Math.hypot(b.x - a.x, b.y - a.y);
  }

  let dragTipShown = false;
  function commitRect(r) {
    const pts = rectShapePoints(r);
    const far = pts[r.type === 'fence' ? 1 : 2];
    // a hand-tremor smudge is a mis-click, not a shape
    if (metersBetween(L.latLng(pts[0].lat, pts[0].lng), L.latLng(far.lat, far.lng)) < 0.3) return;
    createShape(r.type, pts);
    if (!dragTipShown) {
      toast('Drag again for another · press V to pan the map and select what you have drawn.', 4500);
      dragTipShown = true;
    }
  }

  /* ---- snapping ------------------------------------------------
     Hand-tracing over imagery never lands twice on the same spot, so new
     points are pulled onto nearby corners — or into line with them — while
     drawing and while dragging a vertex. Alt draws free for one gesture. ---- */
  const SNAP_PX = 11;   // corner-to-corner grab radius
  const ALIGN_PX = 8;   // how close counts as "in line with"
  let snapOff = false;  // Alt held

  const snapOn = () => state.show.snap && !snapOff;

  /** Every corner a new point may latch onto, in lat/lng. */
  function snapTargets(exclude) {
    const out = [];
    for (const key of ['beds', 'buildings', 'fences']) {
      for (const o of state.objects[key]) {
        o.pts.forEach((p, i) => {
          if (exclude && exclude.obj === o && exclude.index === i) return;
          out.push(p);
        });
      }
    }
    // corners of the shape being traced right now, minus the one just placed
    // (snapping back onto it would only make a zero-length edge)
    if (state.drawing) out.push(...state.drawing.pts.slice(0, -1));
    return out;
  }

  /** Snap a lat/lng, record the feedback marks, and return the adjusted point. */
  function applySnap(latlng, exclude) {
    state.snap = null;
    if (!snapOn()) return latlng;
    const targets = snapTargets(exclude);
    if (!targets.length) return latlng;
    const cp = CP(latlng);

    // 1. land straight on a corner
    let best = null, bestD = SNAP_PX;
    for (const t of targets) {
      const p = CP(t);
      const d = Math.hypot(p.x - cp.x, p.y - cp.y);
      if (d < bestD) { bestD = d; best = t; }
    }
    if (best) {
      const at = L.latLng(best.lat, best.lng);
      state.snap = { at, marks: [{ kind: 'point', ll: at }] };
      return at;
    }

    // 2. otherwise line up with a corner on either axis (north-up map, so
    //    a shared lng is a shared screen x)
    let bx = ALIGN_PX, by = ALIGN_PX, cx = null, cy = null;
    for (const t of targets) {
      const p = CP(t);
      const dx = Math.abs(p.x - cp.x), dy = Math.abs(p.y - cp.y);
      if (dx < bx) { bx = dx; cx = t; }
      if (dy < by) { by = dy; cy = t; }
    }
    if (!cx && !cy) return latlng;
    const at = L.latLng(cy ? cy.lat : latlng.lat, cx ? cx.lng : latlng.lng);
    const marks = [];
    if (cx) marks.push({ kind: 'guide', ll: cx });
    if (cy) marks.push({ kind: 'guide', ll: cy });
    state.snap = { at, marks };
    return at;
  }

  function clearSnap() {
    if (!state.snap) return false;
    state.snap = null;
    return true;
  }

  function hitTest(cp, latlng) {
    const pxm = pxPerMeter();
    if (state.probe) {
      const p = CP(state.probe.latlng);
      if (Math.hypot(cp.x - p.x, cp.y - p.y) < 14) return { type: 'probe', obj: state.probe };
    }
    // plants first (smallest)
    for (const pl of [...state.objects.plants].reverse()) {
      const p = CP(pl.latlng);
      const m = PLANT_INDEX[pl.plantId];
      const r = Math.max((m ? m.spread / 2 : 0.2) * pxm, 12);
      if (Math.hypot(cp.x - p.x, cp.y - p.y) < r) return { type: 'plants', obj: pl };
    }
    for (const t of [...state.objects.trees].reverse()) {
      const p = CP(t.latlng);
      if (Math.hypot(cp.x - p.x, cp.y - p.y) < Math.max(t.canopy * pxm, 12)) return { type: 'trees', obj: t };
    }
    for (const f of [...state.objects.fences].reverse()) {
      const pts = f.pts.map(CP);
      for (let i = 0; i < pts.length - 1; i++) {
        if (distToSegPx(cp, pts[i], pts[i + 1]) < 8) return { type: 'fences', obj: f };
      }
    }
    for (const b of [...state.objects.buildings].reverse()) {
      if (pointInPoly(latlng, b.pts)) return { type: 'buildings', obj: b };
    }
    for (const b of [...state.objects.beds].reverse()) {
      if (pointInPoly(latlng, b.pts)) return { type: 'beds', obj: b };
    }
    return null;
  }

  function handleAt(cp) {
    const o = selectedObj();
    if (!o) return null;
    if (o.pts) {
      const rh = rotHandle(o);
      if (rh && Math.hypot(cp.x - rh.x, cp.y - rh.y) < 9) return { kind: 'rotate' };
      for (let i = 0; i < o.pts.length; i++) {
        const p = CP(o.pts[i]);
        if (Math.hypot(cp.x - p.x, cp.y - p.y) < 8) return { kind: 'vertex', index: i };
      }
    } else if (state.selection.type === 'trees') {
      const hp = CP(destLatLng(o.latlng, o.canopy, 0));
      if (Math.hypot(cp.x - hp.x, cp.y - hp.y) < 9) return { kind: 'radius' };
    }
    return null;
  }

  function requireZoom(minZ, what) {
    if (map.getZoom() >= minZ) return true;
    toast(`Zoom in closer to your yard to ${what} — search your address above.`);
    return false;
  }

  let lastClick = { t: 0, x: -99, y: -99 };
  let suppressClickUntil = 0;
  map.on('click', (e) => {
    if (state.drag && state.drag.moved) return;
    // a drag-drawn shape still ends in a DOM click — don't also start a polygon
    if (performance.now() < suppressClickUntil) { suppressClickUntil = 0; return; }
    // some input paths (trackpad taps, synthetic events) fire bursts of
    // click events — collapse anything within 350ms of the same spot
    const now = performance.now();
    const cp = e.containerPoint;
    if (now - lastClick.t < 350 && Math.hypot(cp.x - lastClick.x, cp.y - lastClick.y) < 4) return;
    lastClick = { t: now, x: cp.x, y: cp.y };
    const tool = state.tool;
    if (tool === 'bed' || tool === 'building' || tool === 'fence') {
      if (!requireZoom(16, 'draw')) return;
      if (!state.drawing) state.drawing = { type: tool, pts: [], cursor: null };
      const d = state.drawing;
      snapOff = e.originalEvent.altKey;
      const ll = applySnap(e.latlng);
      // close polygon by clicking near the first vertex
      if (d.pts.length > 2 && d.type !== 'fence') {
        const p0 = CP(d.pts[0]), ps = CP(ll);
        if (Math.hypot(ps.x - p0.x, ps.y - p0.y) < 10) { finishDrawing(); return; }
      }
      d.pts.push(ll);
      requestRender();
    } else if (tool === 'tree') {
      if (!requireZoom(16, 'place trees')) return;
      pushUndo();
      const t = { id: nextId(), latlng: { lat: e.latlng.lat, lng: e.latlng.lng }, height: 8, canopy: 3.5, type: 'deciduous' };
      state.objects.trees.push(t);
      state.selection = { type: 'trees', id: t.id };
      openInspector();
      touch();
    } else if (tool === 'plant') {
      if (!requireZoom(17, 'plant')) return;
      if (!state.selectedPlant) { toast('Pick a plant from the library first.'); return; }
      pushUndo();
      const pl = { id: nextId(), plantId: state.selectedPlant, latlng: { lat: e.latlng.lat, lng: e.latlng.lng } };
      state.objects.plants.push(pl);
      const inBed = state.objects.beds.some((b) => pointInPoly(pl.latlng, b.pts));
      if (state.objects.beds.length && !inBed) toast(`${PLANT_INDEX[state.selectedPlant].name} planted outside your beds — that's allowed, just saying.`);
      state.selection = { type: 'plants', id: pl.id };
      openInspector();
      touch();
    } else if (tool === 'probe') {
      if (!requireZoom(16, 'probe the light')) return;
      state.probe = { latlng: { lat: e.latlng.lat, lng: e.latlng.lng } };
      state.selection = { type: 'probe', id: 'probe' };
      openInspector();
      requestRender();
      scheduleSave();
    } else if (tool === 'erase') {
      const hit = hitTest(e.containerPoint, e.latlng);
      if (hit) {
        if (hit.type === 'probe') {
          state.probe = null;
          if (state.selection && state.selection.type === 'probe') { state.selection = null; openInspector(); }
          requestRender();
          scheduleSave();
          return;
        }
        pushUndo();
        const arr = state.objects[hit.type];
        arr.splice(arr.indexOf(hit.obj), 1);
        if (isSel(hit.type, hit.obj.id)) { state.selection = null; openInspector(); }
        touch();
      }
    } else {
      // select
      const hit = hitTest(e.containerPoint, e.latlng);
      state.selection = hit ? { type: hit.type, id: hit.obj.id } : null;
      openInspector();
      requestRender();
    }
  });

  map.on('dblclick', () => {
    if (state.drawing) finishDrawing();
  });

  map.on('mousemove', (e) => {
    if (state.drawing) {
      snapOff = e.originalEvent.altKey;
      state.drawing.cursor = applySnap(e.latlng);
      requestRender();
    } else if (!state.rectDraw && !state.drag && clearSnap()) requestRender();
    if (heatModeOn() && state.heat) {
      const hrs = sampleBankedHours(e.latlng);
      if (hrs !== null) {
        const partial = heatCutoffIdx() < state.heat.nSamples;
        document.getElementById('lg-note').textContent =
          `${hrs.toFixed(1)}h here${partial ? ` by ${Sun.formatHour(Math.max(state.time, state.heat.t0))}` : ''}`;
      }
    }
    if (state.tool === 'select' && !state.drag) {
      const h = handleAt(e.containerPoint);
      const hit = h || hitTest(e.containerPoint, e.latlng);
      mapEl.style.cursor = h && h.kind === 'rotate' ? 'grab' : hit ? 'pointer' : '';
    }
  });

  // ---- drag-to-draw / dragging objects & handles ----
  map.on('mousedown', (e) => {
    const tool = state.tool;
    if (tool === 'bed' || tool === 'building' || tool === 'fence') {
      // mid-polygon (2+ corners down), clicks keep placing corners
      if (state.drawing && state.drawing.pts.length > 1) return;
      if (!requireZoom(16, 'draw')) return;
      snapOff = e.originalEvent.altKey;
      const start = applySnap(e.latlng);
      state.rectDraw = { type: tool, start, cur: start, moved: false, shift: e.originalEvent.shiftKey };
      map.dragging.disable();
      L.DomEvent.stop(e.originalEvent);
      return;
    }
    if (tool !== 'select') return;
    const handle = handleAt(e.containerPoint);
    const hit = handle ? { type: state.selection.type, obj: selectedObj() } : hitTest(e.containerPoint, e.latlng);
    if (!hit) return;
    if (handle && handle.kind === 'rotate') {
      const c = polyCenterLL(hit.obj.pts);
      handle.center = c;
      handle.orig = hit.obj.pts.map((p) => ({ lat: p.lat, lng: p.lng }));
      handle.startAngle = bearingFrom(c, e.latlng);
    }
    pushUndo();
    state.drag = { hit, handle, start: e.latlng, moved: false };
    map.dragging.disable();
    L.DomEvent.stop(e.originalEvent);
  });

  window.addEventListener('mousemove', (e) => {
    snapOff = e.altKey;
    if (state.rectDraw) {
      const r = state.rectDraw;
      r.shift = e.shiftKey;
      // shift already pins the far corner (square / 15° run), so leave it free
      const ll = map.mouseEventToLatLng(e);
      r.cur = r.shift ? (clearSnap(), ll) : applySnap(ll);
      if (!r.moved && rectDragPx(r) > 5) {
        r.moved = true;
        state.drawing = null; // a lone stray corner gives way to the drag
      }
      requestRender();
      return;
    }
    if (!state.drag) return;
    const ll = map.mouseEventToLatLng(e);
    const d = state.drag;
    if (!d.handle || d.handle.kind !== 'vertex') clearSnap();
    const dLat = ll.lat - d.start.lat, dLng = ll.lng - d.start.lng;
    if (Math.abs(dLat) + Math.abs(dLng) > 1e-7) d.moved = true;
    if (d.handle && d.handle.kind === 'rotate') {
      const c = d.handle.center;
      const kx = mPerDegLng(c.lat);
      let da = bearingFrom(c, ll) - d.handle.startAngle;
      if (e.shiftKey) { const st = 15 * R; da = Math.round(da / st) * st; }
      const cos = Math.cos(da), sin = Math.sin(da);
      d.hit.obj.pts = d.handle.orig.map((p) => {
        const x = (p.lng - c.lng) * kx, y = (p.lat - c.lat) * M_PER_DEG_LAT;
        return {
          lat: c.lat + (x * sin + y * cos) / M_PER_DEG_LAT,
          lng: c.lng + (x * cos - y * sin) / kx,
        };
      });
    } else if (d.handle && d.handle.kind === 'vertex') {
      const s = applySnap(ll, { obj: d.hit.obj, index: d.handle.index });
      d.hit.obj.pts[d.handle.index] = { lat: s.lat, lng: s.lng };
    } else if (d.handle && d.handle.kind === 'radius') {
      d.hit.obj.canopy = Math.max(0.5, Math.min(15, metersBetween(d.hit.obj.latlng, ll)));
    } else if (d.hit.obj.pts) {
      d.hit.obj.pts = d.hit.obj.pts.map((p) => ({ lat: p.lat + dLat, lng: p.lng + dLng }));
      d.start = ll;
    } else {
      d.hit.obj.latlng = { lat: d.hit.obj.latlng.lat + dLat, lng: d.hit.obj.latlng.lng + dLng };
      d.start = ll;
    }
    requestRender();
  });

  window.addEventListener('mouseup', (e) => {
    if (state.rectDraw) {
      const r = state.rectDraw;
      state.rectDraw = null;
      map.dragging.enable();
      // read the far corner off the mouseup itself: a fast flick can outrun
      // the mousemove stream entirely
      if (e && typeof e.clientX === 'number') {
        r.shift = e.shiftKey;
        snapOff = e.altKey;
        const ll = map.mouseEventToLatLng(e);
        r.cur = r.shift ? ll : applySnap(ll);
      }
      clearSnap();
      // a click that never travelled falls through to corner-by-corner tracing
      if (r.moved || rectDragPx(r) > 5) {
        commitRect(r);
        suppressClickUntil = performance.now() + 400;
      }
      requestRender();
      return;
    }
    if (!state.drag) return;
    const moved = state.drag.moved;
    if (!moved) state.undoStack.pop(); // no-op drag: drop the snapshot
    state.drag = null;
    clearSnap();
    map.dragging.enable();
    if (moved) { touch(); openInspector(); }
  });

  /* ============================================================
     Keyboard
     ============================================================ */
  window.addEventListener('keydown', (e) => {
    if (e.target.matches('input, select, textarea')) {
      if (e.key === 'Escape') e.target.blur();
      return;
    }
    const k = e.key.toLowerCase();
    if ((e.metaKey || e.ctrlKey) && k === 'z') { e.preventDefault(); undo(); return; }
    if (e.metaKey || e.ctrlKey) return;
    const tools = { v: 'select', b: 'bed', p: 'plant', t: 'tree', u: 'building', f: 'fence', l: 'probe', e: 'erase' };
    if (tools[k]) { setTool(tools[k]); return; }
    if (e.key === 'Escape') {
      if (state.drawing) cancelDrawing();
      else { state.selection = null; openInspector(); setTool('select'); requestRender(); }
    }
    if (e.key === 'Enter' && state.drawing) finishDrawing();
    if ((e.key === 'Delete' || e.key === 'Backspace') && state.selection) { e.preventDefault(); deleteSelection(); }
    if (e.key === ' ') { e.preventDefault(); togglePlay(); }
  });

  /* ============================================================
     Plant drawer
     ============================================================ */
  const plantList = document.getElementById('plantlist');
  const plantCats = document.getElementById('plantcats');

  function buildCats() {
    plantCats.innerHTML = '';
    ['All', ...PLANT_CATS].forEach((c) => {
      const b = document.createElement('button');
      b.className = 'cat' + (state.plantCat === c ? ' on' : '');
      b.textContent = c;
      b.addEventListener('click', () => { state.plantCat = c; buildCats(); buildPlantList(); });
      plantCats.appendChild(b);
    });
  }

  function buildPlantList() {
    const q = document.getElementById('plantsearch').value.trim().toLowerCase();
    plantList.innerHTML = '';
    PLANTS.filter((p) =>
      (state.plantCat === 'All' || p.cat === state.plantCat) &&
      (!q || p.name.toLowerCase().includes(q) || p.botanical.toLowerCase().includes(q))
    ).forEach((p) => {
      const row = document.createElement('div');
      row.className = 'plantrow' + (state.selectedPlant === p.id ? ' on' : '');
      row.innerHTML = `<span class="pe">${p.emoji}</span>
        <span><div class="pn">${p.name}</div>
        <div class="pm">${SUN_LEVELS[p.sun].icon} ${SUN_LEVELS[p.sun].label} · ${fmtIn(p.spacing)} apart</div></span>`;
      row.addEventListener('click', () => {
        state.selectedPlant = p.id;
        buildPlantList();
        toast(`${p.emoji} ${p.name} armed — click the map to plant.`, 1800);
      });
      plantList.appendChild(row);
    });
  }
  document.getElementById('plantsearch').addEventListener('input', buildPlantList);

  /* ============================================================
     Dock: time, date, seasons, toggles, play
     ============================================================ */
  const timeSlider = document.getElementById('timeslider');
  const dateSlider = document.getElementById('dateslider');

  function updateDock() {
    document.getElementById('timelab').textContent = Sun.formatHour(state.time);
    document.getElementById('datelab').textContent = dateLabel(state.doy);
    if (state.day) {
      document.getElementById('riselab').textContent = state.day.polarNight ? 'polar night'
        : state.day.polarDay ? 'midnight sun' : `↑ ${Sun.formatHour(state.day.sunrise)}`;
      document.getElementById('setlab').textContent = state.day.polarNight || state.day.polarDay ? ''
        : `↓ ${Sun.formatHour(state.day.sunset)}`;
    }
    document.querySelectorAll('.season').forEach((b) =>
      b.classList.toggle('on', parseInt(b.dataset.doy, 10) === state.doy));
    // paint daylight band onto the time track
    if (state.day && !state.day.polarNight) {
      const r0 = ((state.day.sunrise ?? 0) / 24) * 100, s0 = ((state.day.sunset ?? 24) / 24) * 100;
      timeSlider.style.setProperty('--track',
        `linear-gradient(90deg, #1b2030 0%, #1b2030 ${r0}%, #7a5c1e ${r0}%, #b08428 50%, #7a5c1e ${s0}%, #1b2030 ${s0}%, #1b2030 100%)`);
    } else {
      timeSlider.style.setProperty('--track', '#1b2030');
    }
  }

  timeSlider.addEventListener('input', () => {
    state.time = parseFloat(timeSlider.value);
    stopPlay();
    updateDock();
    requestRender();
    scheduleSave();
  });
  dateSlider.addEventListener('input', () => {
    state.doy = parseInt(dateSlider.value, 10);
    refreshDay();
    updateDock();
    scheduleHeat(400);
    updateSummary();
    if (state.selection && state.selection.type === 'probe') openInspector();
    requestRender();
    scheduleSave();
  });
  document.querySelectorAll('.season').forEach((b) =>
    b.addEventListener('click', () => {
      state.doy = parseInt(b.dataset.doy, 10);
      dateSlider.value = state.doy;
      refreshDay();
      updateDock();
      scheduleHeat(200);
      updateSummary();
      if (state.selection && state.selection.type === 'probe') openInspector();
      requestRender();
      scheduleSave();
    }));

  let toggleTipShown = false;
  let trailsTipShown = false;
  function syncTogButtons() {
    document.querySelectorAll('.tog').forEach((b) =>
      b.classList.toggle('on', !!state.show[b.dataset.show]));
  }

  document.querySelectorAll('.tog').forEach((b) =>
    b.addEventListener('click', () => {
      const key = b.dataset.show;
      state.show[key] = !state.show[key];
      if (key === 'heatmap' && state.show.heatmap) state.show.best = false;
      if (key === 'best' && state.show.best) state.show.heatmap = false;
      syncTogButtons();
      if (key === 'trails' && state.show.trails && !trailsTipShown) {
        toast('Each outline marks where shade reaches at that hour — cool blue mornings through warm orange evenings.', 4500);
        trailsTipShown = true;
      }
      if (key === 'heatmap' || key === 'best') {
        document.getElementById('legend').classList.toggle('open', heatModeOn());
        buildLegend();
        positionHint();
        setTimeout(positionHint, 350); // after the legend finishes opening
        if (heatModeOn()) {
          if (!heatRegion()) {
            toast('Zoom in to your yard first — then the sun analysis covers everything on screen.');
          } else if (heatStale()) {
            computeHeat();
          }
          const o = state.objects;
          if (!toggleTipShown && o.trees.length + o.buildings.length + o.fences.length < 2) {
            toast('Tip: only obstacles you trace cast shade — outline the big trees and buildings for a truthful sun map.', 4500);
            toggleTipShown = true;
          }
        }
        updateSummary();
      }
      refreshGuide();
      requestRender();
      scheduleSave();
    }));

  // playback — interval-driven so it survives rAF throttling
  let playTimer = null, lastTick = 0;
  function togglePlay() { state.playing ? stopPlay() : startPlay(); }
  function startPlay() {
    state.playing = true;
    document.getElementById('playbtn').textContent = '❚❚';
    lastTick = performance.now();
    playTimer = setInterval(() => {
      const now = performance.now();
      const dt = Math.min((now - lastTick) / 1000, 0.25);
      lastTick = now;
      const d = state.day;
      const t0 = d && d.sunrise !== null ? d.sunrise - 1 : 5;
      const t1 = d && d.sunset !== null ? d.sunset + 1 : 21;
      state.time += dt * Math.max((t1 - t0) / 12, 0.5);
      if (state.time > t1) state.time = t0;
      timeSlider.value = state.time;
      updateDock();
      requestRender();
    }, 33);
  }
  function stopPlay() {
    state.playing = false;
    document.getElementById('playbtn').textContent = '▶';
    if (playTimer) { clearInterval(playTimer); playTimer = null; }
  }
  document.getElementById('playbtn').addEventListener('click', togglePlay);

  // legend ramp
  function buildLegend() {
    const bar = document.getElementById('rampbar');
    if (state.show.best) {
      // tiers: nothing below 4h, amber part sun, gold ramp for 6h+
      bar.style.background =
        'linear-gradient(90deg, rgba(120,120,110,0.18) 0%, rgba(120,120,110,0.18) 33%, ' +
        'rgba(255,170,60,0.4) 33.5%, rgba(255,180,70,0.45) 49.5%, ' +
        'rgba(255,196,80,0.75) 50%, #ffe88c 100%)';
    } else {
      const stops = SUNRAMP.map(([t, c]) => `rgb(${c.join(',')}) ${(t * 100).toFixed(0)}%`).join(', ');
      bar.style.background = `linear-gradient(90deg, ${stops})`;
    }
    const ticks = document.getElementById('rampticks');
    ticks.innerHTML = '';
    [[0, '0h'], [4, '4h part'], [6, '6h full'], [9, '9h'], [12, '12h+']].forEach(([hr, lab]) => {
      const el = document.createElement('span');
      el.className = 'tick' + (hr === 4 || hr === 6 ? ' thresh' : '');
      el.style.left = `${(hr / HEAT_DOMAIN) * 100}%`;
      el.textContent = lab;
      ticks.appendChild(el);
    });
  }

  /* ============================================================
     Search (Nominatim) & geolocation
     ============================================================ */
  const searchEl = document.getElementById('search');
  const resultsEl = document.getElementById('results');
  let searchTimer = null;

  async function doSearch(q) {
    if (!q || q.length < 3) { resultsEl.classList.remove('open'); return; }
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=6&q=${encodeURIComponent(q)}`,
        { headers: { Accept: 'application/json' } }
      );
      const items = await res.json();
      resultsEl.innerHTML = '';
      if (!items.length) {
        resultsEl.innerHTML = `<div class="result"><span class="r-detail">No matches — try adding a city or zip.</span></div>`;
      }
      items.forEach((it) => {
        const row = document.createElement('div');
        row.className = 'result';
        const parts = it.display_name.split(', ');
        row.innerHTML = `<div class="r-name">${esc(parts.slice(0, 2).join(', '))}</div>
          <div class="r-detail">${esc(parts.slice(2).join(', '))}</div>`;
        row.addEventListener('click', () => {
          resultsEl.classList.remove('open');
          searchEl.value = parts.slice(0, 2).join(', ');
          goTo(parseFloat(it.lat), parseFloat(it.lon));
        });
        resultsEl.appendChild(row);
      });
      resultsEl.classList.add('open');
    } catch {
      toast('Address search is unreachable right now — you can still pan and zoom the map by hand.');
    }
  }

  function goTo(lat, lng) {
    map.flyTo([lat, lng], 19, { duration: 1.8 });
    toast('Locked on. Trace your beds, trees and buildings over the imagery.', 3200);
  }

  searchEl.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => doSearch(searchEl.value.trim()), 450);
  });
  searchEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { clearTimeout(searchTimer); doSearch(searchEl.value.trim()); }
    if (e.key === 'Escape') resultsEl.classList.remove('open');
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#searchwrap')) resultsEl.classList.remove('open');
  });
  document.getElementById('locbtn').addEventListener('click', () => {
    if (!navigator.geolocation) { toast('Geolocation is not available in this browser.'); return; }
    toast('Locating…', 1500);
    navigator.geolocation.getCurrentPosition(
      (pos) => goTo(pos.coords.latitude, pos.coords.longitude),
      () => toast('Could not get your location — search your address instead.')
    );
  });

  /* ============================================================
     Persistence, export / import / clear
     ============================================================ */
  let saveTimer = null;
  function scheduleSave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 600);
  }
  function save() {
    try {
      const c = map.getCenter();
      localStorage.setItem(SAVE_KEY, JSON.stringify({
        v: 1, center: { lat: c.lat, lng: c.lng }, zoom: map.getZoom(),
        objects: state.objects, doy: state.doy, time: state.time, show: state.show,
        probe: state.probe, guideOff,
      }));
    } catch { /* storage may be unavailable */ }
  }
  function load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return false;
      const s = JSON.parse(raw);
      if (s.objects) state.objects = { beds: [], trees: [], buildings: [], fences: [], plants: [], ...s.objects };
      if (s.probe && s.probe.latlng) state.probe = s.probe;
      if (s.guideOff) guideOff = true;
      if (s.doy) { state.doy = s.doy; dateSlider.value = s.doy; }
      if (typeof s.time === 'number') { state.time = s.time; timeSlider.value = s.time; }
      if (s.show) {
        state.show = { ...state.show, ...s.show };
        syncTogButtons();
        document.getElementById('legend').classList.toggle('open', heatModeOn());
      }
      if (s.center) map.setView([s.center.lat, s.center.lng], s.zoom || 18);
      return true;
    } catch { return false; }
  }

  document.getElementById('exportbtn').addEventListener('click', () => {
    const c = map.getCenter();
    const blob = new Blob([JSON.stringify({
      app: 'heliotrope', v: 1, exported: new Date().toISOString(),
      center: { lat: c.lat, lng: c.lng }, zoom: map.getZoom(), objects: state.objects,
    }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'heliotrope-garden.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });
  document.getElementById('importbtn').addEventListener('click', () =>
    document.getElementById('importfile').click());
  document.getElementById('importfile').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (!data.objects) throw new Error('bad file');
      pushUndo();
      state.objects = { beds: [], trees: [], buildings: [], fences: [], plants: [], ...data.objects };
      if (data.center) map.setView([data.center.lat, data.center.lng], data.zoom || 18);
      state.selection = null;
      openInspector();
      touch();
      toast('Garden imported.');
    } catch {
      toast('That file doesn\'t look like a Heliotrope garden export.');
    }
    e.target.value = '';
  });
  document.getElementById('clearbtn').addEventListener('click', () => {
    if (!confirm('Clear the entire garden? (Undo can bring it back this session.)')) return;
    pushUndo();
    state.objects = { beds: [], trees: [], buildings: [], fences: [], plants: [] };
    state.selection = null;
    openInspector();
    touch();
  });

  /* ============================================================
     Toast & intro
     ============================================================ */
  let toastTimer = null;
  function toast(msg, ms = 3000) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), ms);
  }

  document.getElementById('introgo').addEventListener('click', () => {
    document.getElementById('intro').classList.add('hide');
    searchEl.focus();
  });

  /* ============================================================
     Map lifecycle
     ============================================================ */
  map.on('move zoom viewreset resize', requestRender);
  map.on('moveend', () => {
    const c = map.getCenter();
    const movedFar = Math.abs(c.lat - state.loc.lat) > 0.01 || Math.abs(c.lng - state.loc.lng) > 0.01;
    state.loc = { lat: c.lat, lng: c.lng };
    if (movedFar) {
      refreshDay();
      updateDock();
      requestRender();
    }
    // viewport-following analysis: recompute once the pan/zoom settles
    if (heatModeOn() && heatStale()) scheduleHeat(350);
    refreshGuide(); // step 1 ticks off once they are down at yard zoom
    scheduleSave();
  });

  /* ============================================================
     Boot
     ============================================================ */
  window.__helio = { map, state }; // console access for tinkerers
  sizeCanvas();
  buildCats();
  buildPlantList();
  buildLegend();
  const restored = load();
  if (restored) document.getElementById('intro').classList.add('hide');
  buildLegend(); // again, now that saved mode flags are in
  state.loc = { lat: map.getCenter().lat, lng: map.getCenter().lng };
  refreshDay();
  updateDock();
  updateSummary();
  refreshGuide();
  if (heatModeOn()) computeHeat();
  requestRender();
})();
