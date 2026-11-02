// Splits mixed layers into separate objects so each one can be labeled on its own.
// A PDF line style (or a catch-all CAD layer) often holds walls, doors, furniture, stairs and
// dimension strings all at once; labeling the whole layer can't be right for all of them.
//
// Per eligible group:
//   - "structure": the lines the wall pass already paired into walls (one object)
//   - "parts":     connected pieces of everything else (a door = leaf + swing, a sofa, a
//                  dimension string, …). Walls are set aside first, otherwise anything touching
//                  a wall would merge into one giant piece.
// An object's category overrides its group's; null means "same as the layer".

const TOL = 0.15;            // ft: lines closer than this belong to the same piece
const NEAR = 0.35;           // ft: small pieces this close are one object (a window's glass + jambs)
const MAX_ITEMS = 12000;     // denser layers (patterns) aren't split; hatching is set aside earlier
const MAX_OBJECTS_FOR_AI = 96;

function round1(v) { return Math.round(v * 10) / 10; }

class DSU {
    constructor(n) { this.p = Array.from({ length: n }, (_, i) => i); }
    find(i) { while (this.p[i] !== i) { this.p[i] = this.p[this.p[i]]; i = this.p[i]; } return i; }
    union(a, b) { const ra = this.find(a), rb = this.find(b); if (ra !== rb) this.p[ra] = rb; }
}

/** A line along a wall face's own line, on it or carrying on from where it stops. */
function continuesFace(seg, faces) {
    const [x1, y1, x2, y2] = seg;
    const L = Math.hypot(x2 - x1, y2 - y1);
    if (L < 0.5) return false;
    for (const f of faces) {
        const fl = Math.hypot(f[2] - f[0], f[3] - f[1]);
        if (fl < 0.5) continue;
        const ux = (f[2] - f[0]) / fl, uy = (f[3] - f[1]) / fl;
        const off = (x, y) => Math.abs((x - f[0]) * uy - (y - f[1]) * ux);
        if (off(x1, y1) > 0.03 || off(x2, y2) > 0.03) continue;
        const t1 = (x1 - f[0]) * ux + (y1 - f[1]) * uy, t2 = (x2 - f[0]) * ux + (y2 - f[1]) * uy;
        if (Math.max(t1, t2) >= -0.1 && Math.min(t1, t2) <= fl + 0.1) return true;
    }
    return false;
}

/** Does the segment (ax, ay)–(bx, by) cross the line segment f? */
function crosses(ax, ay, bx, by, [x1, y1, x2, y2]) {
    const d = (px, py, qx, qy, rx, ry) => (qx - px) * (ry - py) - (qy - py) * (rx - px);
    const d1 = d(x1, y1, x2, y2, ax, ay), d2 = d(x1, y1, x2, y2, bx, by);
    const d3 = d(ax, ay, bx, by, x1, y1), d4 = d(ax, ay, bx, by, x2, y2);
    return d1 * d2 < 0 && d3 * d4 < 0;
}

function distPointSeg(px, py, x1, y1, x2, y2) {
    const dx = x2 - x1, dy = y2 - y1, L2 = dx * dx + dy * dy;
    const t = L2 ? Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / L2)) : 0;
    return Math.hypot(px - (x1 + dx * t), py - (y1 + dy * t));
}

/**
 * Adds `objects` to eligible groups (in place) and returns all objects.
 * @param wallSegments indices of segments the heuristic pass used as wall faces
 */
export function splitIntoObjects(prims, groups, feetPerUnit, wallSegments = [], { classifyLayer } = {}) {
    const k = feetPerUnit;
    const wallSet = new Set(wallSegments);
    const all = [];
    let next = 1;

    for (const g of groups) {
        // PDF line styles are always candidates; CAD layers only when the name doesn't say what they are
        const role = g.kind === 'layer' && classifyLayer ? classifyLayer(g.name) : 'other';
        const eligible = (g.kind === 'style' && !g.filled) || (g.kind === 'layer' && (role === 'none' || role === 'other'));
        if (!eligible) continue;
        if (g.segments.length + g.arcs.length + (g.curves?.length || 0) > MAX_ITEMS) continue;

        // items in feet: { type, i, pts: [[x,y]...], seg?: [x1,y1,x2,y2] }
        const items = [];
        const structure = g.segments.filter(i => wallSet.has(i));
        const faces = structure.map(i => { const s = prims.segments[i]; return [s.x1 * k, s.y1 * k, s.x2 * k, s.y2 * k]; });
        // specks lying on a wall face (left over from hatching) belong to the wall, or they'd
        // join whatever touches the wall on either side
        const onFace = (x, y) => faces.some(f => distPointSeg(x, y, f[0], f[1], f[2], f[3]) <= 0.06);
        for (const i of g.segments) {
            if (wallSet.has(i)) continue;
            const s = prims.segments[i];
            const seg = [s.x1 * k, s.y1 * k, s.x2 * k, s.y2 * k];
            if (Math.hypot(seg[2] - seg[0], seg[3] - seg[1]) < 0.15 && onFace(seg[0], seg[1]) && onFace(seg[2], seg[3])) { structure.push(i); continue; }
            // so do lines drawn along a wall face (a window's sill line across the opening), which
            // a counter or bed touching the wall would otherwise join to the window
            if (continuesFace(seg, faces)) { structure.push(i); continue; }
            items.push({ type: 'segments', i, pts: [[seg[0], seg[1]], [seg[2], seg[3]]], seg });
        }
        for (const i of g.arcs) {
            const a = prims.arcs[i];
            items.push({ type: 'arcs', i, pts: [[a.sx * k, a.sy * k], [a.ex * k, a.ey * k], [a.mx * k, a.my * k]] });
        }
        for (const i of g.curves || []) {
            const c = prims.curves[i];
            items.push({ type: 'curves', i, pts: [[c.x0 * k, c.y0 * k], [c.x3 * k, c.y3 * k]] });
        }
        const parts = mergeNearby(components(items, faces).map(comp => makeObject(prims, k, g, comp, 'part')), prims, k);
        const objs = [];
        if (structure.length) objs.push(makeObject(prims, k, g, { segments: structure, arcs: [], curves: [] }, 'structure'));
        objs.push(...parts);
        if (objs.length < 2) continue; // nothing to split

        // tiny specks (glyph bits, dots) just follow the layer
        g.objects = objs.filter(o => o.kind === 'structure' || Math.max(o.sizeFt.w, o.sizeFt.h) >= 0.4 || o.count >= 3);
        for (const o of g.objects) {
            o.id = `O${next++}`;
            o.groupId = g.id;
            o.heuristicCategory = o.kind === 'structure' ? 'wall' : guessObjectCategory(o, prims, k);
            o.category = o.heuristicCategory;
            o.aiCategory = null;
            o.userSet = false;
            all.push(o);
        }
    }
    return all;
}

/**
 * Separate pieces of a set of primitives ({ segments, arcs, curves } indices), e.g. a layer
 * labeled furniture as a whole: one piece per sofa, bed, plant… Same joining rules as above.
 */
export function splitIntoPieces(prims, sel, feetPerUnit) {
    const k = feetPerUnit;
    const items = [];
    for (const i of sel.segments || []) {
        const s = prims.segments[i];
        const seg = [s.x1 * k, s.y1 * k, s.x2 * k, s.y2 * k];
        items.push({ type: 'segments', i, pts: [[seg[0], seg[1]], [seg[2], seg[3]]], seg });
    }
    for (const i of sel.arcs || []) {
        const a = prims.arcs[i];
        items.push({ type: 'arcs', i, pts: [[a.sx * k, a.sy * k], [a.ex * k, a.ey * k], [a.mx * k, a.my * k]] });
    }
    for (const i of sel.curves || []) {
        const c = prims.curves[i];
        items.push({ type: 'curves', i, pts: [[c.x0 * k, c.y0 * k], [c.x3 * k, c.y3 * k]] });
    }
    if (!items.length || items.length > MAX_ITEMS) return [];
    return mergeNearby(components(items).map(comp => makeObject(prims, k, null, comp, 'part')), prims, k);
}

/**
 * @param faces wall faces [x1, y1, x2, y2] (ft). Pieces touching at a wall face on opposite
 *              sides of it stay apart: window glass inside the wall vs. a bed against it.
 */
function components(items, faces = []) {
    if (!items.length) return [];
    const dsu = new DSU(items.length);
    const centroid = items.map(it => {
        let x = 0, y = 0;
        for (const [px, py] of it.pts) { x += px; y += py; }
        return [x / it.pts.length, y / it.pts.length];
    });
    const faceBox = faces.map(([x1, y1, x2, y2]) => [Math.min(x1, x2) - TOL, Math.min(y1, y2) - TOL, Math.max(x1, x2) + TOL, Math.max(y1, y2) + TOL]);
    const side = (f, [px, py]) => {
        const [x1, y1, x2, y2] = f;
        const L = Math.hypot(x2 - x1, y2 - y1) || 1;
        const d = ((x2 - x1) * (py - y1) - (y2 - y1) * (px - x1)) / L;
        return Math.abs(d) < 0.03 ? 0 : Math.sign(d);
    };
    // joined at (x, y): false when a wall face separates the two pieces, either right at that
    // point or between their centers (a jamb line drawn a little past the wall face)
    const canJoin = (a, b, x, y) => {
        const [ax, ay] = centroid[a], [bx2, by2] = centroid[b];
        const lo = [Math.min(ax, bx2, x), Math.min(ay, by2, y)], hi = [Math.max(ax, bx2, x), Math.max(ay, by2, y)];
        for (let fi = 0; fi < faces.length; fi++) {
            const bx = faceBox[fi];
            if (hi[0] < bx[0] || lo[0] > bx[2] || hi[1] < bx[1] || lo[1] > bx[3]) continue;
            const f = faces[fi];
            const sa = side(f, centroid[a]), sb = side(f, centroid[b]);
            if (!sa || !sb || sa === sb) continue;
            if (distPointSeg(x, y, f[0], f[1], f[2], f[3]) <= TOL) return false;
            if (crosses(ax, ay, bx2, by2, f)) return false;
        }
        return true;
    };
    // endpoints that (almost) coincide
    const cell = TOL * 2;
    const hash = new Map();
    const key = (x, y) => `${Math.floor(x / cell)},${Math.floor(y / cell)}`;
    items.forEach((it, idx) => {
        for (const [x, y] of it.pts) {
            const cx = Math.floor(x / cell), cy = Math.floor(y / cell);
            for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
                const list = hash.get(`${cx + dx},${cy + dy}`);
                if (!list) continue;
                for (const [j, px, py] of list) if (dsu.find(j) !== dsu.find(idx) && Math.hypot(px - x, py - y) <= TOL && canJoin(idx, j, x, y)) dsu.union(idx, j);
            }
            const k0 = key(x, y);
            if (!hash.has(k0)) hash.set(k0, []);
            hash.get(k0).push([idx, x, y]);
        }
    });
    // endpoints landing on another line (T-joins)
    const big = 1; // ft: small cells, so dense pieces (a plant drawn as thousands of strokes) stay quick
    const grid = new Map();
    items.forEach((it, idx) => {
        if (!it.seg) return;
        const [x1, y1, x2, y2] = it.seg;
        // padded by the join distance, so an endpoint just across a cell edge still finds it
        const gx0 = Math.floor((Math.min(x1, x2) - TOL) / big), gx1 = Math.floor((Math.max(x1, x2) + TOL) / big);
        const gy0 = Math.floor((Math.min(y1, y2) - TOL) / big), gy1 = Math.floor((Math.max(y1, y2) + TOL) / big);
        if ((gx1 - gx0 + 1) * (gy1 - gy0 + 1) > 2000) return; // very long lines: endpoints only
        for (let gx = gx0; gx <= gx1; gx++) for (let gy = gy0; gy <= gy1; gy++) {
            const kk = `${gx},${gy}`;
            if (!grid.has(kk)) grid.set(kk, []);
            grid.get(kk).push(idx);
        }
    });
    items.forEach((it, idx) => {
        for (const [x, y] of it.pts) {
            const list = grid.get(`${Math.floor(x / big)},${Math.floor(y / big)}`);
            if (!list) continue;
            for (const j of list) {
                if (j === idx || dsu.find(j) === dsu.find(idx)) continue; // already one piece
                const [x1, y1, x2, y2] = items[j].seg;
                if (distPointSeg(x, y, x1, y1, x2, y2) <= TOL && canJoin(idx, j, x, y)) dsu.union(idx, j);
            }
        }
    });
    const byRoot = new Map();
    items.forEach((it, idx) => {
        const r = dsu.find(idx);
        if (!byRoot.has(r)) byRoot.set(r, { segments: [], arcs: [], curves: [] });
        byRoot.get(r)[it.type].push(it.i);
    });
    return [...byRoot.values()];
}

/** Join small pieces that nearly touch (window glass + jamb ticks, a table and its chairs). */
function mergeNearby(objs, prims, k) {
    const LIMIT = 12; // ft: never grow a merged object past this
    const near = NEAR / k, limit = LIMIT / k;
    // doors and windows stay on their own (a bed right next to a door or window must not swallow it)
    const doorish = objs.map(o => { const c = guessObjectCategory(o, prims, k); return c === 'door' || c === 'window'; });
    const order = objs.map((_, i) => i).sort((i, j) => objs[i].bbox.minX - objs[j].bbox.minX);
    const dsu = new DSU(objs.length);
    const box = objs.map(o => ({ ...o.bbox }));
    for (let x = 0; x < order.length; x++) {
        const i = order[x];
        const a = objs[i].bbox;
        if (Math.max(a.maxX - a.minX, a.maxY - a.minY) >= limit || doorish[i]) continue;
        for (let y = x + 1; y < order.length; y++) {
            const j = order[y];
            const b = objs[j].bbox;
            if (b.minX - a.maxX > near) break;
            if (doorish[j]) continue;
            if (Math.max(b.maxX - b.minX, b.maxY - b.minY) >= limit) continue;
            if (Math.max(a.minY - b.maxY, b.minY - a.maxY) > near) continue;
            const ri = dsu.find(i), rj = dsu.find(j);
            if (ri === rj) continue;
            const u = { minX: Math.min(box[ri].minX, box[rj].minX), minY: Math.min(box[ri].minY, box[rj].minY), maxX: Math.max(box[ri].maxX, box[rj].maxX), maxY: Math.max(box[ri].maxY, box[rj].maxY) };
            if (Math.max(u.maxX - u.minX, u.maxY - u.minY) >= limit) continue;
            dsu.union(ri, rj);
            box[dsu.find(ri)] = u;
        }
    }
    const groupsOf = new Map();
    objs.forEach((o, i) => {
        const r = dsu.find(i);
        if (!groupsOf.has(r)) groupsOf.set(r, { segments: [], arcs: [], curves: [] });
        const c = groupsOf.get(r);
        c.segments.push(...o.segments); c.arcs.push(...o.arcs); c.curves.push(...o.curves);
    });
    return [...groupsOf.values()].map(c => makeObject(prims, k, null, c, 'part'));
}

function makeObject(prims, k, g, comp, kind) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const add = (x, y) => { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; };
    for (const i of comp.segments) { const s = prims.segments[i]; add(s.x1, s.y1); add(s.x2, s.y2); }
    for (const i of comp.arcs) { const a = prims.arcs[i]; add(a.sx, a.sy); add(a.ex, a.ey); add(a.mx, a.my); }
    for (const i of comp.curves) { const c = prims.curves[i]; add(c.x0, c.y0); add(c.x3, c.y3); }
    return {
        kind,
        segments: comp.segments, arcs: comp.arcs, curves: comp.curves,
        count: comp.segments.length + comp.arcs.length + comp.curves.length,
        bbox: { minX, minY, maxX, maxY },
        sizeFt: { w: round1((maxX - minX) * k), h: round1((maxY - minY) * k) }
    };
}

/** First guess without AI: door swings and dimension strings are recognizable from geometry. */
function guessObjectCategory(o, prims, k) {
    const span = Math.max(o.sizeFt.w, o.sizeFt.h), thin = Math.min(o.sizeFt.w, o.sizeFt.h);
    // door swings; a pair of doors side by side (or a door and its threshold) is still a door
    const swings = o.arcs.map(i => prims.arcs[i]).map(a => {
        const r = a.r * k, chord = Math.hypot(a.ex - a.sx, a.ey - a.sy) * k;
        return r > 0 && chord / r > 1.2 && chord / r < 1.6 && r >= 1.5 && r <= 4.2 ? r : 0;
    }).filter(Boolean);
    if (swings.length && span <= Math.max(...swings) * 2.3 * swings.length + 1) return 'door';
    // long and thin with a number next to it: a dimension string
    // window glass before dimensions: room sizes are often written right next to a window
    if (looksLikeWindow(o, prims, k, span, thin)) return 'window';
    if (span >= 2 && thin <= 0.8 && nearbyTexts(o, prims, k, 1.5).some(t => /\d/.test(t))) return 'annotation';
    return null; // same as the layer
}

/** Window glass: a narrow strip of long parallel lines (plus jamb ticks across it), no arcs. */
function looksLikeWindow(o, prims, k, span, thin) {
    if (o.arcs.length || o.curves.length || span < 1.5 || span > 16 || thin > 1.2 || o.segments.length < 2 || o.segments.length > 16) return false;
    const alongX = o.sizeFt.w >= o.sizeFt.h;
    let long = 0;
    for (const i of o.segments) {
        const s = prims.segments[i];
        const dx = Math.abs(s.x2 - s.x1) * k, dy = Math.abs(s.y2 - s.y1) * k;
        const along = alongX ? dx : dy, across = alongX ? dy : dx;
        if (Math.hypot(dx, dy) < 0.15) continue; // specks at the corners
        if (across > 0.02 * along + 0.02 && along > 0.02) return false; // only lines along or across the strip
        if (along >= 0.6 * span) long++;
        else if (along > thin + 0.2) return false; // something else drawn in the strip
    }
    return long >= 2;
}

export function nearbyTexts(o, prims, k, padFt = 1.5) {
    const pad = padFt / k;
    const out = [];
    for (const t of prims.texts || []) {
        if (t.x >= o.bbox.minX - pad && t.x <= o.bbox.maxX + pad && t.y >= o.bbox.minY - pad && t.y <= o.bbox.maxY + pad) {
            out.push(String(t.text).slice(0, 24));
            if (out.length >= 4) break;
        }
    }
    return out;
}

/** Objects worth showing the model, most informative first. */
export function objectsForAI(objects) {
    return [...objects]
        .filter(o => o.kind === 'structure' || o.count >= 2 || Math.max(o.sizeFt.w, o.sizeFt.h) >= 1)
        .sort((a, b) => (b.kind === 'structure') - (a.kind === 'structure') || (b.count * Math.max(b.sizeFt.w, b.sizeFt.h)) - (a.count * Math.max(a.sizeFt.w, a.sizeFt.h)))
        .slice(0, MAX_OBJECTS_FOR_AI);
}

export function describeObjectsForModel(objects, prims, k) {
    return objects.map(o => ({
        id: o.id,
        layer: o.groupId,
        kind: o.kind === 'structure' ? 'lines the wall finder paired as walls' : 'connected piece',
        size_ft: [o.sizeFt.w, o.sizeFt.h],
        lines: o.segments.length,
        arcs: o.arcs.length,
        curves: o.curves.length,
        ...(nearbyTexts(o, prims, k).length ? { nearby_text: nearbyTexts(o, prims, k) } : {}),
        heuristic_guess: o.heuristicCategory || 'same as layer'
    }));
}

/** The category that applies to an object (its own, else its layer's). */
export function effectiveCategory(group, obj) {
    return (obj && obj.category) || group.category;
}
