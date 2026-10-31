import { detectStairs, stairsToItems } from './stairs.js';
// Turns raw drawing geometry (from a DXF or vector PDF) into a layout the
// floor plan editor can load: wall graph (corners + walls with thickness),
// doors/windows on walls, room labels and catalog furniture.
//
// Input "primitives" are in source units with y pointing down:
//   segments: [{ x1, y1, x2, y2, layer?, width?, filled?, blockExtent? }]
//   arcs:     [{ cx, cy, r, sx, sy, ex, ey, mx, my, layer? }]   (start/end/mid points)
//   texts:    [{ x, y, text, height, layer?, centered? }]
//   inserts:  [{ name, layer, cx, cy, w, h, rotation }]          (DXF blocks, already in world units)
//   units:    { feetPerUnit: number|null, kind: 'pt'|'cad' }
//
// Everything below works in feet; the output is in editor pixels.

const DEFAULTS = {
    pxPerFoot: 50,
    minThickness: 0.2,   // ~2.4in
    maxThickness: 1.6,   // ~19in
    marginFt: 2
};

const DEG = Math.PI / 180;

// ---------- small vector helpers ----------
const sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });
const dot = (a, b) => a.x * b.x + a.y * b.y;
const len = (a) => Math.hypot(a.x, a.y);
const add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
const mul = (a, k) => ({ x: a.x * k, y: a.y * k });

function angleDiff(a, b) {
    // a, b in [0, π)
    let d = Math.abs(a - b) % Math.PI;
    return Math.min(d, Math.PI - d);
}

function lineFrame(p1, p2) {
    let dx = p2.x - p1.x, dy = p2.y - p1.y;
    const L = Math.hypot(dx, dy);
    let theta = Math.atan2(dy, dx);
    if (theta < 0) theta += Math.PI;
    if (theta >= Math.PI) theta -= Math.PI;
    const u = { x: Math.cos(theta), y: Math.sin(theta) };
    const n = { x: -u.y, y: u.x };
    const a1 = dot(u, p1), a2 = dot(u, p2);
    return { theta, u, n, off: dot(n, p1), a: Math.min(a1, a2), b: Math.max(a1, a2), len: L };
}

// Interval list helpers (sorted, non-overlapping [s, e] pairs)
function intersectIntervals(list, s, e) {
    const out = [];
    for (const [a, b] of list) {
        const lo = Math.max(a, s), hi = Math.min(b, e);
        if (hi > lo) out.push([lo, hi]);
    }
    return out;
}
function subtractInterval(list, s, e) {
    const out = [];
    for (const [a, b] of list) {
        if (e <= a || s >= b) { out.push([a, b]); continue; }
        if (s > a) out.push([a, s]);
        if (e < b) out.push([e, b]);
    }
    return out;
}

// ---------- layer naming ----------
export function classifyLayer(name = '') {
    const n = String(name).toLowerCase();
    if (!n || n === '0') return 'none';
    if (/(dim|anno|text|txt|hatch|patt|grid|title|border|frame|viewport|vport|defpoints|note|tag|symb|axis|north|keynote|revision|iden|elev|sect|detail|insul|leader|centre|center)/.test(n)) return 'ignore';
    // short AIA/KCS-style codes: A-CEN (centerline), A-HAT (hatch), A-HID (hidden), A-FIN (finish), A-TIT, A-LEAD, A-ELE*, A-SYM
    if (/(^|[-_ ])(cen|hat|hid|fin|tit|lead|ele\d*|sym|tex|pat)([-_ \d]|$)/.test(n)) return 'ignore';
    if (/(door|t[uü]e?r\b|porte|puerta|(^|[-_ ])dr([-_ ]|$)|문)/.test(n)) return 'door';
    if (/(window|glaz|fenster|fen[eê]tre|ventana|(^|[-_ ])win([-_ ]|$)|창)/.test(n)) return 'window';
    if (/(wall|wand|\bmur|partition|concrete|(^|[-_ ])conc?([-_ ]|$)|벽)/.test(n)) return 'wall';
    if (/(furn|fixt|equip|appl|plumb|casework|millwork|^i-|^f-|sanit|kitchen|bath)/.test(n)) return 'furniture';
    if (/(room|space|area|name)/.test(n)) return 'room';
    return 'other';
}

// ---------- text helpers ----------
const FT_IN_RE = /(\d+(?:\.\d+)?)\s*(?:'|’|ft|feet)\s*[-\s]?\s*(?:(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+))?\s*(?:"|”|in)?)?/i;
const IN_ONLY_RE = /^(\d+(?:\.\d+)?)\s*(?:"|”|in)$/i;
const METRIC_RE = /^(\d+(?:[.,]\d+)?)\s*(mm|cm|m)$/i;

/** Parse a dimension string to feet, or null. */
export function parseDimensionFeet(str) {
    const s = String(str).trim().replace(/[‘’′]/g, "'").replace(/[“”″]/g, '"');
    if (!s || s.length > 16) return null;
    let m = s.match(/^(\d+(?:\.\d+)?)\s*'\s*-?\s*(?:(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+))?\s*"?)?$/);
    if (m) {
        const ft = parseFloat(m[1]);
        let inch = m[2] ? parseFloat(m[2]) : 0;
        if (m[3] && m[4]) inch += parseFloat(m[3]) / parseFloat(m[4]);
        return ft + inch / 12;
    }
    m = s.match(IN_ONLY_RE);
    if (m) return parseFloat(m[1]) / 12;
    m = s.match(METRIC_RE);
    if (m) {
        const v = parseFloat(m[1].replace(',', '.'));
        const unit = m[2].toLowerCase();
        return unit === 'mm' ? v / 304.8 : unit === 'cm' ? v / 30.48 : v * 3.28084;
    }
    return null;
}

function looksLikeDimensionOrNumber(str) {
    const s = String(str).trim();
    if (FT_IN_RE.test(s) && /\d/.test(s) && /['"’”]|ft|in\b/i.test(s)) return true;
    if (/^[\d\s.,x×X/\-+'"°%:#()]+$/.test(s)) return true;
    if (/^\d+(\.\d+)?\s*(mm|cm|m|m2|m²|sf|sq\.?\s*ft\.?)$/i.test(s)) return true;
    return false;
}

function isRoomNameText(str) {
    const s = String(str).trim();
    if (s.length < 2 || s.length > 32) return false;
    const letters = (s.match(/\p{L}/gu) || []).length;
    // CJK names are often 2 characters; Latin ones need at least 2 letters too
    if (letters < 2) return false;
    if (/^(up|dn|down)$/i.test(s)) return false; // stair arrows
    if (/^[A-Z](\.[A-Z])+\.?$/.test(s)) return false; // level markers like F.L, S.L
    if (/^[A-Z]{2}$/.test(s) && s !== 'WC') return false; // tag codes like PD, AW
    // material/spec notes ("T30 limestone (color A)", "Ø100 F.D", "W:150 ...") rather than room names
    if (/[()Ø∅%:@=/\[\]]/.test(s)) return false;
    if (/\d/.test(s) && s.length > 14) return false;
    if (/\b[A-Z]?\d+(\.\d+)?\s*(mm|cm|ply|t)\b/i.test(s)) return false;
    if (/^[A-Z]\d{1,3}\s/.test(s) || /^[-+]/.test(s)) return false; // "T80 board…" specs, "-1C1A" tags
    if (looksLikeDimensionOrNumber(s)) return false;
    if (/scale|drawn|sheet|date|project|revision|copyright|©|www\.|http|\.com|n\.?t\.?s\.?|not to scale/i.test(s)) return false;
    return true;
}

// ---------- scale ----------
function median(arr) {
    if (!arr.length) return null;
    const a = [...arr].sort((x, y) => x - y);
    const m = Math.floor(a.length / 2);
    return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
}

/** Find the most common value in log space. Returns { value, votes, share } or null. */
function logMode(values, binRatio = 1.03) {
    if (!values.length) return null;
    const lb = Math.log(binRatio);
    const bins = new Map();
    for (const v of values) {
        if (!(v > 0) || !isFinite(v)) continue;
        const k = Math.round(Math.log(v) / lb);
        bins.set(k, (bins.get(k) || 0) + 1);
    }
    let bestK = null, best = 0;
    for (const [k] of bins) {
        const score = (bins.get(k - 1) || 0) + (bins.get(k) || 0) * 2 + (bins.get(k + 1) || 0);
        if (score > best) { best = score; bestK = k; }
    }
    if (bestK === null) return null;
    const near = values.filter(v => Math.abs(Math.log(v) / lb - bestK) <= 1.5);
    return { value: median(near), votes: near.length, share: near.length / values.length };
}

const isDoorArc = (a) => classifyLayer(a.layer) === 'door' || /door|porte|t[uü]r|문/i.test(a.block || '');

function doorArcRadii(arcs) {
    // Door swings are ~90° arcs (or pieces of one). Use chord/radius to keep only those.
    const out = [];
    for (const a of arcs) {
        if (!(a.r > 0)) continue;
        const chord = Math.hypot(a.ex - a.sx, a.ey - a.sy);
        const sweep = 2 * Math.asin(Math.min(1, chord / (2 * a.r)));
        if (sweep > 60 * DEG && sweep < 100 * DEG) out.push(a.r);
    }
    return out;
}

/**
 * For each dimension label, the length of the dimension line it labels. Handles lines broken
 * around the label ("|<---- 20' ---->|") and measures to the arrow tips or extension lines.
 * Returns [{ text, ratio (feet per unit), segs (source segments of the line) }].
 */
function dimensionChains(dimTexts, segments) {
    const frames = segments.map(s => ({ s, ...lineFrame({ x: s.x1, y: s.y1 }, { x: s.x2, y: s.y2 }) })).filter(f => f.len > 0);
    const strokes = frames.filter(f => !f.s.filled);
    const out = [];
    for (const t of dimTexts) {
        const h = Math.max(t.height || 0, 1e-6);
        const c = { x: t.x, y: t.y };
        const textW = Math.max(h, 0.65 * h * String(t.text).length);
        let best = null;
        for (const f of strokes) {
            if (f.len < h * 0.5) continue;
            const d = Math.abs(dot(f.n, c) - f.off);
            if (d > h * 1.5) continue;
            const tc = dot(f.u, c);
            if (tc < f.a - textW || tc > f.b + textW) continue;
            // every line piece along this one
            const onLine = strokes.filter(g => angleDiff(g.theta, f.theta) < 1 * DEG
                && Math.abs(dot(f.n, { x: g.s.x1, y: g.s.y1 }) - f.off) < 0.15 * h
                && Math.abs(dot(f.n, { x: g.s.x2, y: g.s.y2 }) - f.off) < 0.15 * h);
            const span = (g) => { const a = dot(f.u, { x: g.s.x1, y: g.s.y1 }), b = dot(f.u, { x: g.s.x2, y: g.s.y2 }); return [Math.min(a, b), Math.max(a, b)]; };
            let A, B, used;
            const holding = onLine.filter(g => { const [a, b] = span(g); return a <= tc && tc <= b; });
            if (holding.length) {
                const g = holding.reduce((x, y) => (span(x)[1] - span(x)[0] <= span(y)[1] - span(y)[0] ? x : y));
                [A, B] = span(g); used = [g];
            } else {
                // label sits in a break in the line
                let left = null, right = null;
                for (const g of onLine) {
                    const [a, b] = span(g);
                    if (b <= tc && (!left || b > span(left)[1])) left = g;
                    if (a >= tc && (!right || a < span(right)[0])) right = g;
                }
                if (!left || !right || span(right)[0] - span(left)[1] > textW + 2 * h) continue;
                A = span(left)[0]; B = span(right)[1]; used = [left, right];
            }
            if (tc < A + 0.1 * (B - A) || tc > B - 0.1 * (B - A)) continue;
            if (!best || d < best.d) best = { d, f, A, B, used };
        }
        if (!best) continue;
        const { f } = best;
        let { A, B } = best;
        const at = (s) => add(mul(f.u, s), mul(f.n, f.off));
        // Out to the arrow tips: arrowhead edges touch the line end and run (nearly) along it
        const extend = (E, dir) => {
            const start = E;
            for (let pass = 0; pass < 4; pass++) {
                let next = E;
                for (const g of frames) {
                    if (best.used.some(u => u === g)) continue;
                    const p1 = { x: g.s.x1, y: g.s.y1 }, p2 = { x: g.s.x2, y: g.s.y2 };
                    if (Math.abs(dot(f.n, p1) - f.off) > 0.6 * h || Math.abs(dot(f.n, p2) - f.off) > 0.6 * h) continue;
                    const ad = angleDiff(g.theta, f.theta);
                    const collinear = ad < 2 * DEG && Math.abs(dot(f.n, p1) - f.off) < 0.1 * h;
                    if (collinear || (!g.s.filled && ad > 35 * DEG)) continue; // the next dimension / a tick mark
                    const near = [p1, p2].find(p => len(sub(p, at(E))) < 0.35 * h);
                    if (!near) continue;
                    for (const p of [p1, p2]) { const s = dot(f.u, p); if ((s - next) * dir > 0) next = s; }
                }
                if ((next - E) * dir <= 1e-9 || Math.abs(next - start) > 1.5 * h) break;
                E = next;
            }
            // snap to an extension line crossing the end
            for (const g of strokes) {
                if (angleDiff(g.theta, f.theta) < 60 * DEG) continue;
                const s = dot(f.u, { x: g.s.x1, y: g.s.y1 });
                if (Math.abs(s - E) > 0.4 * h) continue;
                const o1 = dot(f.n, { x: g.s.x1, y: g.s.y1 }) - f.off, o2 = dot(f.n, { x: g.s.x2, y: g.s.y2 }) - f.off;
                if (Math.min(o1, o2) > 0.6 * h || Math.max(o1, o2) < -0.6 * h) continue;
                return s;
            }
            return E;
        };
        A = extend(A, -1);
        B = extend(B, 1);
        if (B - A < h) continue;
        out.push({ text: t, ratio: t.ft / (B - A), segs: best.used.map(g => g.s) });
    }
    return out;
}

export function estimateScale(prims) {
    const { units = {}, texts = [], segments = [], arcs = [] } = prims;
    // Doors vary (2'-4" to 3'-0"), so use the median swing radius rather than a sharp mode.
    // Arcs known to be doors (door layer / door block) are trusted; other quarter arcs are only a last resort.
    const knownDoor = doorArcRadii(arcs.filter(isDoorArc));
    // tiny arcs (rounded door-frame corners, fixture details) aren't door swings
    const quarterAll = doorArcRadii(arcs.filter(a => classifyLayer(a.layer) !== 'ignore'));
    const maxQuarter = Math.max(0, ...quarterAll);
    const anyQuarter = quarterAll.filter(r => r >= 0.3 * maxQuarter);
    const knownDoorR = knownDoor.length ? median(knownDoor) : null;
    const doorR = knownDoorR ?? (anyQuarter.length ? median(anyQuarter) : null);
    const plausibleDoor = (ftPerUnit) => !knownDoorR || (knownDoorR * ftPerUnit > 1.4 && knownDoorR * ftPerUnit < 5);

    // 1. Units declared by the CAD file
    if (units.feetPerUnit) {
        if (plausibleDoor(units.feetPerUnit)) {
            return { feetPerUnit: units.feetPerUnit, source: 'file units', confidence: 'high' };
        }
        // Header disagrees with door sizes (common with mis-set $INSUNITS): try other CAD units
        for (const [name, k] of [['inches', 1 / 12], ['millimeters', 1 / 304.8], ['feet', 1], ['meters', 3.28084], ['centimeters', 1 / 30.48]]) {
            if (plausibleDoor(k)) return { feetPerUnit: k, source: `door sizes (file said otherwise; using ${name})`, confidence: 'medium' };
        }
    }

    // A scale that makes the door swings impossibly small or large is wrong
    const doorsAgree = (ftPerUnit) => anyQuarter.length < 2 || (median(anyQuarter) * ftPerUnit > 1.2 && median(anyQuarter) * ftPerUnit < 5);

    // 2. Dimension strings matched to their dimension lines
    const dimTexts = texts.map(t => ({ ...t, ft: parseDimensionFeet(t.text) })).filter(t => t.ft && t.ft >= 1 && t.ft <= 400);
    if (dimTexts.length >= 2 && segments.length) {
        // 2a. Rebuild each label's whole dimension line: pieces split around the label, plus arrowheads
        const chains = dimensionChains(dimTexts, segments);
        const chainMode = logMode(chains.map(c => c.ratio), 1.02);
        if (chainMode && (chainMode.votes >= 3 ? chainMode.share >= 0.15 : chainMode.votes >= 2 && chainMode.share >= 0.5) && doorsAgree(chainMode.value)) {
            const dimensionLines = new Set(chains.filter(c => Math.abs(c.ratio / chainMode.value - 1) < 0.03).flatMap(c => c.segs));
            return { feetPerUnit: chainMode.value, source: 'dimension labels', confidence: chainMode.votes >= 4 ? 'high' : 'medium', dimensionLines };
        }

        // 2b. Older drawings: any outlined line near a label whose length matches it
        const ratios = [], ratioSeg = [];
        for (const t of dimTexts) {
            const h = Math.max(t.height || 0, 1e-6);
            const reach = h * 4;
            for (const s of segments) {
                if (s.filled) continue; // fill edges are walls, not dimension lines
                const L = Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
                if (L < h * 2) continue;
                // distance from text anchor to the segment
                const p = { x: t.x, y: t.y }, a = { x: s.x1, y: s.y1 }, b = { x: s.x2, y: s.y2 };
                const ab = sub(b, a);
                const tt = Math.max(0, Math.min(1, dot(sub(p, a), ab) / dot(ab, ab)));
                const proj = add(a, mul(ab, tt));
                if (len(sub(p, proj)) > reach) continue;
                // the text should sit near the middle of its dimension line
                if (tt < 0.2 || tt > 0.8) continue;
                ratios.push(t.ft / L);
                ratioSeg.push({ s, t, dist: len(sub(p, proj)) });
            }
        }
        const mode = logMode(ratios, 1.02);
        if (mode && mode.votes >= 3 && mode.share >= 0.15 && doorsAgree(mode.value)) {
            // Lines whose length matches their label are dimension lines, not walls
            // (only the closest matching line per label, so a wall face of the same length nearby survives)
            const nearest = new Map();
            ratioSeg.forEach((r, i) => {
                if (Math.abs(ratios[i] / mode.value - 1) >= 0.03) return;
                const cur = nearest.get(r.t);
                if (!cur || r.dist < cur.dist) nearest.set(r.t, r);
            });
            const dimensionLines = new Set([...nearest.values()].map(r => r.s));
            return { feetPerUnit: mode.value, source: 'dimension labels', confidence: mode.votes >= 6 ? 'high' : 'medium', dimensionLines };
        }
    }

    // 3. A printed scale note on a PDF sheet ("1/4" = 1'-0"", "1:100")
    if (units.kind === 'pt') {
        for (const t of texts) {
            const s = String(t.text).replace(/[“”″]/g, '"').replace(/[‘’′]/g, "'");
            let m = s.match(/(\d+)\s*\/\s*(\d+)\s*"\s*=\s*1\s*'/);
            if (m) {
                const paperIn = parseFloat(m[1]) / parseFloat(m[2]);
                return { feetPerUnit: (1 / 72) / paperIn, source: `scale note ${m[0]}`, confidence: 'medium' };
            }
            m = s.match(/(?:^|\s|scale:?\s*)1\s*:\s*(\d{2,4})\b/i);
            if (m) {
                const n = parseFloat(m[1]);
                return { feetPerUnit: n / 864, source: `scale note 1:${n}`, confidence: 'medium' };
            }
        }
    }

    // 4. Door swings (≈ 2'-9" average)
    if (doorR) {
        return { feetPerUnit: 2.75 / doorR, source: knownDoorR ? 'door sizes' : 'arc sizes (assumed doors)', confidence: 'low' };
    }

    // 5. Last resort: assume the drawing spans ~40 ft
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const s of segments) {
        minX = Math.min(minX, s.x1, s.x2); maxX = Math.max(maxX, s.x1, s.x2);
        minY = Math.min(minY, s.y1, s.y2); maxY = Math.max(maxY, s.y1, s.y2);
    }
    const span = Math.max(maxX - minX, maxY - minY);
    return { feetPerUnit: span > 0 ? 40 / span : 1, source: 'guessed from drawing size', confidence: 'none' };
}

/** Segments whose length matches a nearby dimension label at the chosen scale. */
function findDimensionLines(prims, k) {
    const out = new Set();
    const texts = (prims.texts || []).map(t => ({ ...t, ft: parseDimensionFeet(t.text) })).filter(t => t.ft);
    if (!texts.length) return out;
    for (const t of texts) {
        const reach = Math.max(t.height || 0, 1e-6) * 4;
        let best = null, bestD = Infinity;
        for (const s of prims.segments || []) {
            const L = Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
            if (Math.abs(L * k / t.ft - 1) > 0.03) continue;
            const a = { x: s.x1, y: s.y1 }, ab = { x: s.x2 - s.x1, y: s.y2 - s.y1 };
            const tt = dot(sub({ x: t.x, y: t.y }, a), ab) / dot(ab, ab);
            if (tt < 0.2 || tt > 0.8) continue;
            const d = len(sub({ x: t.x, y: t.y }, add(a, mul(ab, tt))));
            if (d <= reach && d < bestD) { bestD = d; best = s; }
        }
        if (best) out.add(best);
    }
    return out;
}

// ---------- main ----------
export function reconstructLayout(prims, options = {}) {
    const o = { ...DEFAULTS, ...options };
    const warnings = [];
    const scale = estimateScale(prims);
    const k = scale.feetPerUnit;
    if (scale.confidence === 'none') warnings.push('Could not find the drawing scale; sizes are a guess.');
    else if (scale.confidence === 'low') warnings.push('Scale was estimated from door sizes; check a known dimension.');

    const dimLines = scale.dimensionLines || findDimensionLines(prims, k);

    // Convert everything to feet
    const segs = (prims.segments || []).map((s, i) => {
        const p1 = { x: s.x1 * k, y: s.y1 * k }, p2 = { x: s.x2 * k, y: s.y2 * k };
        const f = lineFrame(p1, p2);
        return {
            i, p1, p2, ...f,
            layer: s.layer || '',
            // an explicit role (from the layer review) wins over layer-name guessing
            role: s.role || (dimLines.has(s) ? 'ignore' : classifyLayer(s.layer)),
            approx: !!s.approx,
            width: (s.width || 0) * k,
            filled: !!s.filled,
            blockExtent: s.blockExtent != null ? s.blockExtent * k : null,
            free: [[f.a, f.b]],
            claimed: 0
        };
    }).filter(s => s.len > 0.03);
    const arcs = (prims.arcs || []).map(a => ({
        c: { x: a.cx * k, y: a.cy * k }, r: a.r * k,
        s: { x: a.sx * k, y: a.sy * k }, e: { x: a.ex * k, y: a.ey * k }, m: { x: a.mx * k, y: a.my * k },
        role: a.role || classifyLayer(a.layer),
        userSet: !!a.userSet,
        circle: !!a.circle
    })).filter(a => a.role !== 'ignore' && !a.circle);
    markDoorLeaves(segs, arcs);
    const texts = (prims.texts || []).map((t, i) => ({ ...t, index: i, x: t.x * k, y: t.y * k, height: (t.height || 0) * k, role: t.role || classifyLayer(t.layer) }));
    const inserts = (prims.inserts || []).map(b => ({ ...b, cx: b.cx * k, cy: b.cy * k, w: b.w * k, h: b.h * k }));

    // ---- pick wall candidates ----
    const wallLayerLen = segs.filter(s => s.role === 'wall').reduce((t, s) => t + s.len, 0);
    const usingWallLayers = wallLayerLen >= 20;
    const inSmallBlock = (s) => s.blockExtent != null && s.blockExtent < 10 && s.role !== 'wall';
    let cand = segs.filter(s => !s.approx && (usingWallLayers
        ? s.role === 'wall'
        : (s.role === 'none' || s.role === 'other' || s.role === 'wall') && !inSmallBlock(s)));

    // Many PDFs (and some DXFs) draw walls as solid fills while furniture is outlined only.
    // Filled shapes contribute their outline only (fills split into triangles share inner edges).
    let usingFills = false;
    const filledCand = cand.filter(s => s.filled);
    if (filledCand.length) {
        const fillBoundary = boundaryEdges(filledCand);
        const fillLen = fillBoundary.reduce((t, s) => t + s.len, 0);
        const fillsAreWalls = fillBoundary.length >= 8 && fillLen >= 40;
        if (fillsAreWalls && (!usingWallLayers || (o.explicitRoles && prims.units?.kind === 'pt'))) {
            // The fills are the walls; outlined runs are recovered in a second pass. Also after a
            // review of a PDF: its "wall" line style usually outlines the fills and holds the
            // window glass too, and pairing those lines would close every window.
            cand = fillBoundary;
            usingFills = true;
        } else if (usingWallLayers) {
            cand = cand.filter(s => !s.filled).concat(fillBoundary);
        }
    }

    // Thick single strokes are walls on their own
    const pieces = [];
    const solid = cand.filter(s => s.width >= o.minThickness && s.width <= o.maxThickness * 1.5 && !s.filled && s.len >= 0.5);
    for (const s of solid) {
        pieces.push(makePiece(s.p1, s.p2, s.width));
        s.claimed = s.len;
    }
    cand = cand.filter(s => !solid.includes(s) && s.len >= 0.25);

    // ---- pair parallel lines into wall pieces ----
    const paired = pairIntoPieces(cand, o);
    pieces.push(...paired.pieces);
    const peaks = paired.peaks;

    // Fill mode: some wall runs may be drawn as outlines only. Accept outline pairs that match
    // the filled walls' thickness and connect to them (furniture outlines do neither).
    if (usingFills && peaks.length) {
        const strokes = segs.filter(s => !s.filled && s.len >= 0.25 && !inSmallBlock(s)
            && (o.explicitRoles ? s.role === 'wall' : s.role === 'none' || s.role === 'other' || s.role === 'wall'));
        const extra = pairIntoPieces(strokes, o, peaks).pieces;
        const base = [...pieces];
        const distToPiece = (p, pc) => {
            const t = Math.max(0, Math.min(pc.len, dot(sub(p, pc.p1), mul(sub(pc.p2, pc.p1), 1 / (pc.len || 1)))));
            return len(sub(p, add(pc.p1, mul(sub(pc.p2, pc.p1), t / (pc.len || 1)))));
        };
        for (const pc of extra) {
            const duplicate = base.some(b => angleDiff(b.theta, pc.theta) < 2 * DEG
                && Math.abs(dot(b.n, pc.mid) - b.off) < b.t / 2
                && Math.min(b.b, Math.max(dot(b.u, pc.p1), dot(b.u, pc.p2))) - Math.max(b.a, Math.min(dot(b.u, pc.p1), dot(b.u, pc.p2))) > 0.5 * pc.len);
            if (duplicate) continue;
            // A missing wall run links two existing walls end-on: the walls it meets run in another
            // direction. Window outlines (ending against the same wall line) and fixtures sitting
            // alongside a wall don't qualify; those gaps become doors/windows later.
            const near = (p) => base.some(b => b.len >= 3 && angleDiff(b.theta, pc.theta) > 25 * DEG && distToPiece(p, b) <= b.t / 2 + pc.t / 2 + 0.3);
            if (near(pc.p1) && near(pc.p2)) pieces.push(pc);
        }
    }

    if (!pieces.length) {
        return emptyResult(scale, warnings.concat('No walls found. The file may be a scanned image or use an unusual drawing style.'));
    }

    // ---- drop thin pieces that sit inside a thicker wall (window glass lines) ----
    pieces.sort((a, b) => b.len - a.len);
    const windowHints = []; // { piece, a, b } in the host piece's frame
    const kept = [];
    for (const pc of pieces) {
        let host = null;
        for (const big of kept) {
            if (angleDiff(big.theta, pc.theta) > 2 * DEG) continue;
            if (big.t <= pc.t * 1.05) continue;
            const offC = dot(big.n, pc.mid) - big.off;
            if (Math.abs(offC) > big.t / 2 + 0.02) continue;
            const a = Math.min(dot(big.u, pc.p1), dot(big.u, pc.p2)), b = Math.max(dot(big.u, pc.p1), dot(big.u, pc.p2));
            const ov = Math.min(b, big.b) - Math.max(a, big.a);
            if (ov >= 0.8 * (b - a)) { host = big; windowHints.push({ host: big, a, b }); break; }
        }
        if (!host) kept.push(pc);
    }

    // ---- walls drawn as two stacked strips (common with filled walls): merge face-to-face bands ----
    mergeStackedBands(kept);

    // ---- reviewed wall layers: long lines with no partner are single-line partitions ----
    if (usingWallLayers && o.explicitRoles) {
        const SINGLE_T = 4 / 12;
        for (const sg of cand) {
            if (sg.filled || sg.len < 1.5 || sg.claimed > 0.3 * sg.len) continue;
            const alongExisting = kept.some(pc => angleDiff(pc.theta, sg.theta) < 5 * DEG
                && Math.abs(dot(pc.n, mul(add(sg.p1, sg.p2), 0.5)) - pc.off) <= pc.t / 2 + 0.15
                && Math.min(pc.b, Math.max(dot(pc.u, sg.p1), dot(pc.u, sg.p2))) - Math.max(pc.a, Math.min(dot(pc.u, sg.p1), dot(pc.u, sg.p2))) > 0.5 * sg.len);
            if (alongExisting) continue;
            // inside a thicker wall's line, in a gap: window glass, not a partition
            const inWallLine = kept.some(pc => pc.t > SINGLE_T * 1.2 && angleDiff(pc.theta, sg.theta) < 3 * DEG
                && Math.abs(dot(pc.n, sg.p1) - pc.off) < pc.t / 2 && Math.abs(dot(pc.n, sg.p2) - pc.off) < pc.t / 2);
            if (inWallLine) continue;
            // partitions run between walls; extension lines, steps and leaders touch one at most
            const held = (p) => kept.some(pc => {
                const t = dot(pc.u, p);
                return Math.abs(dot(pc.n, p) - pc.off) <= pc.t / 2 + 0.3 && t >= pc.a - 0.3 && t <= pc.b + 0.3;
            });
            if (!held(sg.p1) || !held(sg.p2)) continue;
            kept.push(makePiece(sg.p1, sg.p2, SINGLE_T));
            sg.claimed = sg.len;
        }
    }

    // ---- door swings pin down their openings: run the wall through each one ----
    const doorFill = doorPieces(kept, arcs);
    kept.push(...doorFill.pieces);
    const gapArcs = arcs.filter(a => !doorFill.used.has(a));

    // ---- merge collinear pieces into walls; gaps become doors/windows ----
    const evidenceSegs = segs.filter(s => s.role !== 'ignore' && s.role !== 'stairs' && s.role !== 'leaf');
    // lines a review didn't mark as anything specific (furniture, doors) can still be window glass
    const glassRole = (s) => s.role === 'wall' || s.role === 'window' || s.role === 'other' || s.role === 'none';
    const wallishSegs = evidenceSegs.filter(glassRole);
    const joinMax = Math.max(0.75, 1.5 * Math.max(...peaks, 0.5));
    const groups = [];
    for (const pc of kept) {
        let g = groups.find(g => angleDiff(g.theta, pc.theta) < 1.5 * DEG
            && Math.abs(dot(g.n, pc.mid) - g.off) <= Math.max(0.06, 0.25 * g.t)
            && pc.t / g.t > 0.7 && pc.t / g.t < 1.43);
        if (!g) { g = { theta: pc.theta, u: pc.u, n: pc.n, off: pc.off, t: pc.t, items: [] }; groups.push(g); }
        g.items.push(pc);
    }

    let walls = [];
    for (const g of groups) {
        const items = g.items.map(pc => {
            const a = dot(g.u, pc.p1), b = dot(g.u, pc.p2);
            return { a: Math.min(a, b), b: Math.max(a, b), t: pc.t, ops: pc.ops || [] };
        }).sort((x, y) => x.a - y.a);
        const startCur = (it) => ({ a: it.a, b: it.b, tw: it.t * (it.b - it.a), cov: it.b - it.a, openings: [...it.ops] });
        let cur = startCur(items[0]);
        const flush = () => {
            const L = cur.b - cur.a;
            if (L < 0.3) return;
            walls.push({
                p1: add(mul(g.u, cur.a), mul(g.n, g.off)),
                p2: add(mul(g.u, cur.b), mul(g.n, g.off)),
                t: cur.tw / Math.max(cur.cov, 1e-6),
                openings: cur.openings
            });
        };
        for (let idx = 1; idx < items.length; idx++) {
            const it = items[idx];
            const gap = it.a - cur.b;
            if (gap <= 0.12) {
                cur.openings.push(...it.ops);
                const extra = Math.max(0, it.b - Math.max(it.a, cur.b));
                cur.tw += it.t * extra;
                cur.cov += extra;
                cur.b = Math.max(cur.b, it.b);
                continue;
            }
            const line = { u: g.u, n: g.n, off: g.off, t: g.t, theta: g.theta };
            // After a review, reviewed door/window geometry decides. Failing that, glass drawn in
            // the wall line style (and so labeled with the walls) still reads as a window.
            const ops = !o.explicitRoles ? classifyGap(line, cur.b, it.a, gapArcs, evidenceSegs)
                : gapHasOpening(line, cur.b, it.a, evidenceSegs, gapArcs) ? [{ type: 'bridge' }]
                    : classifyGap(line, cur.b, it.a, [], wallishSegs);
            if (ops.length || gap <= joinMax) {
                cur.openings.push(...ops.filter(op => op.type !== 'bridge'), ...it.ops);
                cur.tw += it.t * (it.b - it.a);
                cur.cov += it.b - it.a;
                cur.b = Math.max(cur.b, it.b);
            } else {
                flush();
                cur = startCur(it);
            }
        }
        flush();
    }

    // Reviewed layers: place doors and windows straight from their own geometry
    if (o.explicitRoles) placeExplicitOpenings(walls, segs, arcs, doorFill.used);

    // Windows inside continuous walls: thin parallel lines within the wall band.
    // Also after a review: window glass drawn in the wall line style is often labeled along
    // with the walls. (Lines reviewed as doors or furniture never count as glass.)
    for (const w of walls) {
        const f = lineFrame(w.p1, w.p2);
        const spans = [];
        for (const h of windowHints) {
            if (angleDiff(h.host.theta, f.theta) > 2 * DEG) continue;
            if (Math.abs(dot(f.n, h.host.mid) - f.off) > w.t) continue;
            spans.push([dot(f.u, add(mul(h.host.u, h.a), mul(h.host.n, h.host.off))), dot(f.u, add(mul(h.host.u, h.b), mul(h.host.n, h.host.off)))].sort((x, y) => x - y));
        }
        for (const s of evidenceSegs) {
            if (s.claimed > 0.5 * s.len || s.len < 1) continue;
            if (o.explicitRoles && !glassRole(s)) continue;
            if (angleDiff(s.theta, f.theta) > 2 * DEG) continue;
            const o1 = dot(f.n, s.p1) - f.off, o2 = dot(f.n, s.p2) - f.off;
            // glass lines sit well inside the wall, not hugging a face (fixtures pushed against a wall do that)
            const inner = w.t / 2 - Math.max(0.03, 0.15 * w.t);
            if (Math.abs(o1) >= inner || Math.abs(o2) >= inner) continue;
            const a = Math.min(dot(f.u, s.p1), dot(f.u, s.p2)), b = Math.max(dot(f.u, s.p1), dot(f.u, s.p2));
            if (a < f.a - 0.1 || b > f.b + 0.1) continue;
            spans.push([a, b]);
        }
        for (const [a, b] of mergeSpans(spans)) {
            if (b - a < 1) continue;
            const c = add(mul(f.u, (a + b) / 2), mul(f.n, f.off));
            const clash = w.openings.some(op => Math.abs(dot(f.u, op.c) - (a + b) / 2) < (op.w + (b - a)) / 2);
            if (!clash) w.openings.push({ type: 'window', c, w: b - a });
        }
    }

    // ---- connect wall ends (L corners, T junctions, crossings) ----
    for (const w of walls) { Object.assign(w, lineFrame(w.p1, w.p2)); w.dir = mul(sub(w.p2, w.p1), 1 / w.len); w.splits = []; }
    const maxT = Math.max(...walls.map(w => w.t));
    for (const w of walls) {
        for (const end of [0, 1]) {
            const E = end === 0 ? w.p1 : w.p2;
            const v = end === 0 ? mul(w.dir, -1) : w.dir;
            let best = null;
            for (const x of walls) {
                if (x === w) continue;
                if (angleDiff(x.theta, w.theta) < 25 * DEG) continue;
                const I = intersectLines(w.p1, w.dir, x.p1, x.dir);
                if (!I) continue;
                const delta = dot(sub(I, E), v);
                if (delta < -(x.t / 2 + 0.25) || delta > x.t / 2 + Math.min(0.6, maxT)) continue;
                // x's ends may already have been snapped this pass, so measure it fresh
                const xLen = len(sub(x.p2, x.p1));
                const tx = dot(sub(I, x.p1), x.dir);
                const slack = w.t / 2 + 0.4;
                if (tx < -slack || tx > xLen + slack) continue;
                const outside = tx < 0 ? -tx : tx > xLen ? tx - xLen : 0;
                const score = Math.abs(delta) + outside;
                if (!best || score < best.score) best = { score, I, x, tx, xLen };
            }
            if (!best) continue;
            if (end === 0) w.p1 = best.I; else w.p2 = best.I;
            const { x, tx, I, xLen } = best;
            if (tx > 0.25 && tx < xLen - 0.25) x.splits.push(I);
            else if (tx <= 0.25) x.p1 = I;
            else x.p2 = I;
        }
    }
    for (const w of walls) { const keepSplits = w.splits; Object.assign(w, lineFrame(w.p1, w.p2)); w.dir = mul(sub(w.p2, w.p1), 1 / (w.len || 1)); w.splits = keepSplits; }
    // proper crossings
    for (let i = 0; i < walls.length; i++) {
        for (let j = i + 1; j < walls.length; j++) {
            const A = walls[i], B = walls[j];
            if (angleDiff(A.theta, B.theta) < 25 * DEG) continue;
            const I = intersectLines(A.p1, A.dir, B.p1, B.dir);
            if (!I) continue;
            const ta = dot(sub(I, A.p1), A.dir), tb = dot(sub(I, B.p1), B.dir);
            if (ta > 0.25 && ta < A.len - 0.25 && tb > 0.25 && tb < B.len - 0.25) { A.splits.push(I); B.splits.push(I); }
        }
    }

    // ---- corner graph ----
    const cornerPts = [];
    const cornerFor = (p) => {
        for (const c of cornerPts) if (Math.hypot(c.x - p.x, c.y - p.y) < 0.12) return c;
        const c = { x: p.x, y: p.y, id: null };
        cornerPts.push(c);
        return c;
    };
    let edges = [];
    for (const w of walls) {
        if (w.len < 0.3) continue;
        const pts = [w.p1, ...w.splits, w.p2]
            .map(p => ({ p, t: dot(sub(p, w.p1), w.dir) }))
            .sort((a, b) => a.t - b.t)
            .map(o2 => cornerFor(o2.p));
        for (let idx = 0; idx < pts.length - 1; idx++) {
            const a = pts[idx], b = pts[idx + 1];
            if (a === b) continue;
            if (edges.some(e => (e.a === a && e.b === b) || (e.a === b && e.b === a))) continue;
            edges.push({ a, b, t: w.t, src: w });
        }
    }

    // Drop small disconnected islands (fixtures, furniture outlines) and tiny dead-end stubs
    edges = dropIslands(edges);
    if (edges.skippedDrawings) warnings.push(`This file has ${edges.skippedDrawings + 1} separate drawings; imported the largest one.`);
    edges = dropStubs(edges);

    // ---- openings onto final edges ----
    let doorCount = 0, windowCount = 0;
    const edgeOpenings = new Map(edges.map(e => [e, []]));
    for (const w of walls) {
        for (const op of w.openings) {
            let bestE = null, bestD = Infinity;
            for (const e of edges) {
                if (e.src !== w) continue;
                const d = sub(e.b, e.a), L = len(d);
                const t = dot(sub(op.c, e.a), d) / (L * L);
                if (t < 0 || t > 1) continue;
                const dist = Math.abs(dot(sub(op.c, e.a), { x: -d.y / L, y: d.x / L }));
                if (dist < bestD) { bestD = dist; bestE = e; }
            }
            if (!bestE) continue;
            const d = sub(bestE.b, bestE.a), L = len(d);
            const u = mul(d, 1 / L);
            const centerT = dot(sub(op.c, bestE.a), u);
            const width = Math.min(op.w, L - 0.05);
            if (width < 0.8) continue;
            const pos = Math.max(width / 2, Math.min(L - width / 2, centerT)) / L;
            const out = {
                id: `${op.type}-imp-${edgeOpenings.size}-${Math.random().toString(36).slice(2, 8)}`,
                type: op.type,
                position: pos,
                width: width * o.pxPerFoot
            };
            if (op.type === 'door') {
                doorCount++;
                if (op.hinge) out.swingRight = dot(sub(op.hinge, op.c), u) > 0;
                if (op.swing) {
                    const n0 = { x: u.y, y: -u.x }; // editor's default swing side
                    out.swingInvert = dot(sub(op.swing, op.c), n0) < 0;
                }
            } else windowCount++;
            edgeOpenings.get(bestE).push(out);
        }
    }

    // ---- labels ----
    const usedCorners = new Set(edges.flatMap(e => [e.a, e.b]));
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const c of usedCorners) { minX = Math.min(minX, c.x); minY = Math.min(minY, c.y); maxX = Math.max(maxX, c.x); maxY = Math.max(maxY, c.y); }
    const inside = (x, y, pad = 0) => x >= minX - pad && x <= maxX + pad && y >= minY - pad && y <= maxY + pad;
    const labelCandidates = texts.filter(t => !/dim/i.test(t.layer || '') && isRoomNameText(t.text) && inside(t.x, t.y, 0.5));
    const labels = Array.isArray(o.roomLabels)
        // names picked in the layer review (by the vision model and/or the user)
        ? o.roomLabels.map(r => texts[r.index] && { x: texts[r.index].x, y: texts[r.index].y, text: r.name || texts[r.index].text }).filter(Boolean)
        : mergeLabelLines(labelCandidates);

    // ---- furniture from CAD blocks ----
    const furniture = [];
    for (const b of inserts) {
        // the layer review can say which catalog item a block is (or that it should stay as drawn)
        const override = o.furnitureTypes ? o.furnitureTypes[b.name] : undefined;
        if (override === null) continue;
        const typeId = override || matchFurniture(b.name, b.layer);
        if (!typeId || !inside(b.cx, b.cy)) continue;
        if (b.w < 0.3 || b.h < 0.3 || b.w > 15 || b.h > 15) continue;
        furniture.push({ typeId, cx: b.cx, cy: b.cy, w: b.w, h: b.h, rotation: b.rotation || 0 });
    }

    // ---- staircases (lines reviewed or detected as stairs) → editor stairs ----
    const stairIdx = segs.filter(s => s.role === 'stairs').map(s => s.i);
    if (stairIdx.length) {
        const runs = detectStairs(prims, k, { candidates: stairIdx });
        for (const it of stairsToItems(runs, prims.texts, k)) {
            if (!inside(it.cx, it.cy, 2)) continue;
            furniture.push({ typeId: 'stairs', cx: it.cx, cy: it.cy, w: it.w, h: it.h, rotation: it.rotation, direction: it.direction });
        }
        // Labeled stairs without a clean tread pattern (curved, spiral, sketchy): use the footprint
        const covered = new Set(runs.flatMap(r => r.segments));
        const rest = segs.filter(sg => sg.role === 'stairs' && !covered.has(sg.i));
        for (const box of clusterBoxes(rest)) {
            const w = box.maxX - box.minX, h = box.maxY - box.minY;
            if (Math.min(w, h) < 2 || Math.max(w, h) > 30) continue;
            const cx = (box.minX + box.maxX) / 2, cy = (box.minY + box.maxY) / 2;
            if (!inside(cx, cy, 2)) continue;
            // the run goes along the longer side
            furniture.push({ typeId: 'stairs', cx, cy, w: Math.max(w, h), h: Math.min(w, h), rotation: w >= h ? 0 : 90, direction: 'up' });
        }
    }

    // ---- emit in editor pixels ----
    const P = o.pxPerFoot;
    const ox = o.marginFt - minX, oy = o.marginFt - minY;
    const px = (x) => Math.round((x + ox) * P * 100) / 100;
    const py = (y) => Math.round((y + oy) * P * 100) / 100;
    const stamp = Date.now().toString(36);
    let n = 0;
    const id = (pfx) => `${pfx}-imp-${stamp}-${(n++).toString(36)}`;
    for (const c of usedCorners) c.id = id('corner');
    const outCorners = [...usedCorners].map(c => ({ id: c.id, x: px(c.x), y: py(c.y), wallIds: [] }));
    const cornerById = new Map(outCorners.map(c => [c.id, c]));
    const outWalls = edges.map(e => {
        const wid = id('wall');
        cornerById.get(e.a.id).wallIds.push(wid);
        cornerById.get(e.b.id).wallIds.push(wid);
        return { id: wid, startId: e.a.id, endId: e.b.id, openings: edgeOpenings.get(e) || [], control: null, thickness: Math.round(e.t * P * 10) / 10 };
    });
    const outLabels = labels.map(l => ({ id: id('label'), x: px(l.x), y: py(l.y), text: l.text }));
    const outFurniture = furniture.map(f => ({
        id: id('furniture'),
        typeId: f.typeId,
        name: f.typeId.replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase()),
        x: px(f.cx - f.w / 2), y: py(f.cy - f.h / 2),
        width: f.w * P, height: f.h * P,
        rotation: Math.round(f.rotation),
        ...(f.direction ? { direction: f.direction } : {})
    }));

    const thicknesses = [...new Set(outWalls.map(w => Math.round(w.thickness / P * 12)))].sort((a, b) => a - b);
    return {
        state: { corners: outCorners, walls: outWalls, labels: outLabels, furniture: outFurniture },
        report: {
            walls: outWalls.length,
            doors: doorCount,
            windows: windowCount,
            labels: outLabels.length,
            furniture: outFurniture.filter(f => f.typeId !== 'stairs').length,
            stairs: outFurniture.filter(f => f.typeId === 'stairs').length,
            widthFt: Math.round((maxX - minX) * 10) / 10,
            heightFt: Math.round((maxY - minY) * 10) / 10,
            wallThicknessInches: thicknesses,
            scale,
            // editor px = (feet + offsetFt) * pxPerFoot; lets callers line up the source drawing
            offsetFt: { x: ox, y: oy },
            // wall centerline extent of the drawing that was kept, in source feet
            boundsFt: { minX, minY, maxX, maxY },
            // source lines that ended up as wall faces (indices into prims.segments)
            wallSegments: segs.filter(s => s.claimed > 0.3 * s.len).map(s => s.i),
            labelCandidates: labelCandidates.map(t => t.index),
            usedWallLayers: usingWallLayers,
            usedFills: usingFills,
            warnings
        }
    };
}

/**
 * Outline of a set of filled shapes: drop edges shared by two shapes (e.g. the
 * diagonals of a fill split into triangles), keep the rest.
 */
function boundaryEdges(filled) {
    const key = (p) => `${Math.round(p.x * 100)},${Math.round(p.y * 100)}`;
    const count = new Map();
    const k = (s) => [key(s.p1), key(s.p2)].sort().join('|');
    for (const s of filled) count.set(k(s), (count.get(k(s)) || 0) + 1);
    return filled.filter(s => count.get(k(s)) === 1);
}

function emptyResult(scale, warnings) {
    return {
        state: { corners: [], walls: [], labels: [], furniture: [] },
        report: { walls: 0, doors: 0, windows: 0, labels: 0, furniture: 0, scale, warnings }
    };
}

function makePiece(p1, p2, t) {
    const f = lineFrame(p1, p2);
    return { p1, p2, t, ...f, mid: mul(add(p1, p2), 0.5) };
}

/** Pair parallel lines into wall pieces (centerline + thickness). */
function pairIntoPieces(cand, o, forcePeaks = null) {
    const out = [];
    const buckets = new Map();
    for (const s of cand) {
        const key = Math.round(s.theta / DEG) % 180;
        if (!buckets.has(key)) buckets.set(key, []);
        buckets.get(key).push(s);
    }
    const pairs = [];
    for (const s of cand) {
        const key = Math.round(s.theta / DEG) % 180;
        for (const dk of [-1, 0, 1]) {
            const list = buckets.get((key + dk + 180) % 180);
            if (!list) continue;
            for (const t of list) {
                if (t.i <= s.i) continue;
                if (angleDiff(s.theta, t.theta) > 0.75 * DEG) continue;
                // t's projection into s's frame
                const ta = dot(s.u, t.p1), tb = dot(s.u, t.p2);
                const lo = Math.max(s.a, Math.min(ta, tb)), hi = Math.min(s.b, Math.max(ta, tb));
                const ov = hi - lo;
                if (ov < 0.4) continue;
                const o1 = dot(s.n, t.p1) - s.off, o2 = dot(s.n, t.p2) - s.off;
                // offsets of t at the overlap ends (linear along t)
                const tf = (x) => (x - ta) / ((tb - ta) || 1e-9);
                const dLo = o1 + (o2 - o1) * tf(lo), dHi = o1 + (o2 - o1) * tf(hi);
                const d = Math.abs((dLo + dHi) / 2);
                if (d < o.minThickness || d > o.maxThickness) continue;
                if (Math.abs(dLo - dHi) > Math.max(0.03, 0.15 * d)) continue;
                if (ov < Math.min(1, d)) continue;
                pairs.push({ s, t, d, side: Math.sign((dLo + dHi) / 2), lo, hi, ov });
            }
        }
    }

    // Wall thicknesses cluster around a few values; keep pairs near those peaks
    const peaks = forcePeaks || thicknessPeaks(pairs, o);
    const nearPeak = (d) => peaks.some(p => Math.abs(d - p) <= Math.max(0.04, 0.1 * p));
    const goodPairs = pairs.filter(p => nearPeak(p.d)).sort((a, b) => b.ov - a.ov);

    for (const p of goodPairs) {
        const { s, t } = p;
        // free intervals of t, mapped into s's frame
        const tFreeInS = [];
        for (const [fa, fb] of t.free) {
            const A = add(mul(t.u, fa), mul(t.n, t.off)), B = add(mul(t.u, fb), mul(t.n, t.off));
            const x1 = dot(s.u, A), x2 = dot(s.u, B);
            tFreeInS.push([Math.min(x1, x2), Math.max(x1, x2)]);
        }
        let parts = intersectIntervals(s.free, p.lo, p.hi);
        parts = parts.flatMap(([a, b]) => intersectIntervals(tFreeInS, a, b));
        const minPiece = Math.max(0.4, 0.8 * p.d);
        for (const [a, b] of parts) {
            if (b - a < minPiece) continue;
            const centerOff = s.off + p.side * p.d / 2;
            const P = add(mul(s.u, a), mul(s.n, centerOff));
            const Q = add(mul(s.u, b), mul(s.n, centerOff));
            out.push(makePiece(P, Q, p.d));
            s.free = subtractInterval(s.free, a, b);
            s.claimed += b - a;
            const A = dot(t.u, add(mul(s.u, a), mul(s.n, s.off))), B = dot(t.u, add(mul(s.u, b), mul(s.n, s.off)));
            t.free = subtractInterval(t.free, Math.min(A, B), Math.max(A, B));
            t.claimed += b - a;
        }
    }

    return { pieces: out, peaks };
}

function thicknessPeaks(pairs, o) {
    const bin = 0.02;
    const nb = Math.ceil((o.maxThickness - o.minThickness) / bin) + 1;
    const h = new Array(nb).fill(0);
    for (const p of pairs) h[Math.round((p.d - o.minThickness) / bin)] += p.ov;
    const sm = h.map((v, i) => (h[i - 1] || 0) + 2 * v + (h[i + 1] || 0));
    const max = Math.max(...sm, 0);
    if (!max) return [];
    const peaks = [];
    for (let i = 0; i < nb; i++) {
        if (sm[i] < 0.12 * max) continue;
        if (sm[i] >= (sm[i - 1] || 0) && sm[i] > (sm[i + 1] || 0)) peaks.push(o.minThickness + i * bin);
    }
    return peaks;
}

function mergeStackedBands(list) {
    let changed = true;
    while (changed) {
        changed = false;
        outer: for (let i = 0; i < list.length; i++) {
            for (let j = i + 1; j < list.length; j++) {
                const A = list[i], B = list[j];
                if (angleDiff(A.theta, B.theta) > 1 * DEG) continue;
                const offB = dot(A.n, B.mid);
                const gap = Math.abs(offB - A.off) - (A.t + B.t) / 2;
                if (Math.abs(gap) > 0.05) continue;
                const a1 = dot(A.u, B.p1), a2 = dot(A.u, B.p2);
                const lo = Math.max(A.a, Math.min(a1, a2)), hi = Math.min(A.b, Math.max(a1, a2));
                const ov = hi - lo;
                if (ov < 0.8 * A.len || ov < 0.8 * B.len) continue;
                // union band: outer faces of both
                const facesA = [A.off - A.t / 2, A.off + A.t / 2], facesB = [offB - B.t / 2, offB + B.t / 2];
                const f0 = Math.min(facesA[0], facesB[0]), f1 = Math.max(facesA[1], facesB[1]);
                const c = (f0 + f1) / 2;
                const s0 = Math.min(A.a, Math.min(a1, a2)), s1 = Math.max(A.b, Math.max(a1, a2));
                const merged = makePiece(add(mul(A.u, s0), mul(A.n, c)), add(mul(A.u, s1), mul(A.n, c)), f1 - f0);
                list.splice(j, 1);
                list[i] = merged;
                changed = true;
                break outer;
            }
        }
    }
}

function intersectLines(p, r, q, s) {
    const den = r.x * s.y - r.y * s.x;
    if (Math.abs(den) < 1e-9) return null;
    const t = ((q.x - p.x) * s.y - (q.y - p.y) * s.x) / den;
    return { x: p.x + r.x * t, y: p.y + r.y * t };
}

function mergeSpans(spans) {
    const s = spans.filter(x => x[1] > x[0]).sort((a, b) => a[0] - b[0]);
    const out = [];
    for (const sp of s) {
        if (out.length && sp[0] <= out[out.length - 1][1] + 0.1) out[out.length - 1][1] = Math.max(out[out.length - 1][1], sp[1]);
        else out.push([...sp]);
    }
    return out;
}

/**
 * Decide what fills a gap between two collinear wall pieces. A gap can hold several
 * openings (e.g. a window right next to a door, or a double door).
 * Returns a list of openings; empty when nothing explains the gap.
 */
function classifyGap(line, g0, g1, arcs, segs) {
    const w = g1 - g0;
    if (w < 1.2 || w > 24) return [];
    const at = (t) => add(mul(line.u, t), mul(line.n, line.off));
    const out = [];

    // Doors: each swing arc hinged on the wall line inside the gap
    const tol = Math.max(0.5, 0.2 * Math.min(w, 4));
    const doors = [];
    for (const a of arcs) {
        if (a.r < 1.2 || a.r > 5) continue;
        const off = dot(line.n, a.c) - line.off;
        if (Math.abs(off) > line.t / 2 + 0.4) continue;
        const ta = dot(line.u, a.c);
        if (ta < g0 - tol || ta > g1 + tol) continue;
        // the leaf swings toward whichever side has room
        const dir = (g1 - ta) >= (ta - g0) ? 1 : -1;
        let s0 = dir > 0 ? ta : ta - a.r, s1 = dir > 0 ? ta + a.r : ta;
        if (s1 - s0 < 1) continue;
        if (doors.some(d => Math.abs(d.ta - ta) < 0.3)) continue; // same hinge drawn twice
        doors.push({ ta, s0, s1, hinge: at(ta), swing: a.m });
    }
    doors.sort((x, y) => x.s0 - y.s0);
    for (const d of doors) {
        // door trim: snap to a jamb that's close
        if (Math.abs(d.s0 - g0) < tol) d.s0 = g0;
        if (Math.abs(d.s1 - g1) < tol) d.s1 = g1;
        d.s0 = Math.max(d.s0, g0); d.s1 = Math.min(d.s1, g1);
    }
    for (let i = 1; i < doors.length; i++) {
        // neighbours (double doors) meet in the middle
        if (doors[i].s0 < doors[i - 1].s1) { const m = (doors[i].s0 + doors[i - 1].s1) / 2; doors[i - 1].s1 = m; doors[i].s0 = m; }
    }
    for (const d of doors) {
        if (d.s1 - d.s0 < 1) continue;
        out.push({ type: 'door', c: at((d.s0 + d.s1) / 2), w: d.s1 - d.s0, hinge: d.hinge, swing: d.swing });
    }

    // Windows: lines running along the wall inside what's left of the gap
    let free = [[g0, g1]];
    for (const o of out) { const tc = dot(line.u, o.c); free = subtractInterval(free, tc - o.w / 2, tc + o.w / 2); }
    let covered = out.reduce((t, o) => t + o.w, 0);
    for (const [f0, f1] of free) {
        if (f1 - f0 < 1) { covered += f1 - f0; continue; }
        const cover = [];
        let roleHit = null;
        for (const s of segs) {
            const ta = dot(line.u, s.p1), tb = dot(line.u, s.p2);
            const lo = Math.max(f0, Math.min(ta, tb)), hi = Math.min(f1, Math.max(ta, tb));
            const o1 = dot(line.n, s.p1) - line.off, o2 = dot(line.n, s.p2) - line.off;
            if (Math.abs(o1) > line.t / 2 + 0.05 || Math.abs(o2) > line.t / 2 + 0.05) continue;
            if (hi - lo > -0.05 && (s.role === 'window' || s.role === 'door')) roleHit = roleHit || s.role;
            if (angleDiff(s.theta, line.theta) > 2 * DEG) continue;
            if (hi - lo > 0.05) cover.push([lo, hi]);
        }
        const c = mergeSpans(cover).reduce((t, [a, b]) => t + (b - a), 0);
        if (c >= 0.6 * (f1 - f0) || roleHit === 'window') {
            out.push({ type: 'window', c: at((f0 + f1) / 2), w: f1 - f0 });
            covered += f1 - f0;
        } else if (roleHit === 'door' && f1 - f0 <= 8) {
            out.push({ type: 'door', c: at((f0 + f1) / 2), w: f1 - f0 });
            covered += f1 - f0;
        }
    }
    // Only bridge the gap when the openings explain most of it
    return covered >= 0.7 * w ? out : [];
}

/**
 * A door swing arc says exactly where its opening is: the hinge is the arc center and the
 * far jamb is the arc end that lies along the wall (the other end is the open leaf).
 * For each swing whose opening is bounded by walls on both sides (a wall running on, or a
 * wall crossing at the jamb, as at a T-junction), add a wall piece spanning the opening
 * with the door on it. That keeps walls continuous through doorways the gap logic can't
 * explain, e.g. a door between a wall end and a corner, or several doors in a row.
 */
function doorPieces(kept, arcs) {
    const pieces = [], used = new Set();
    // ft between a door end and the wall that bounds it (frames and trim leave a little)
    const jambGap = (a) => Math.max(0.4, 0.2 * a.r);
    const quarter = (a) => {
        const sweep = 2 * Math.asin(Math.min(1, len(sub(a.e, a.s)) / (2 * a.r)));
        return sweep > 60 * DEG && sweep < 100 * DEG;
    };
    const swings = arcs.filter(a => a.r >= 1.2 && a.r <= 5 && quarter(a) && maybeDoorSwing(a));
    const hinges = [];
    for (const a of swings) {
        if (hinges.some(h => len(sub(h, a.c)) < 0.3)) continue; // same door drawn twice
        let best = null;
        const JAMB = jambGap(a);
        for (const P of [a.s, a.e]) {
            const f = lineFrame(a.c, P);
            const tH = dot(f.u, a.c), tP = dot(f.u, P);
            const lo = Math.min(tH, tP), hi = Math.max(tH, tP);
            let blocked = false, host = null, hostD = Infinity, jambT = Infinity;
            const anchored = { lo: false, hi: false };
            for (const pc of kept) {
                const ad = angleDiff(pc.theta, f.theta);
                if (ad < 3 * DEG) {
                    const dOff = Math.abs(dot(pc.n, a.c) - pc.off);
                    if (dOff > pc.t / 2 + 0.2) continue;
                    const pa = dot(f.u, pc.p1), pb = dot(f.u, pc.p2);
                    const A = Math.min(pa, pb), B = Math.max(pa, pb);
                    // a wall already runs here: this end of the arc is the open leaf, not the jamb
                    if (Math.min(B, hi) - Math.max(A, lo) > 0.25 * (hi - lo)) { blocked = true; break; }
                    const touchLo = lo - B > -0.3 && lo - B < JAMB, touchHi = A - hi > -0.3 && A - hi < JAMB;
                    if (touchLo) anchored.lo = true;
                    if (touchHi) anchored.hi = true;
                    if ((touchLo || touchHi) && dOff < hostD) { hostD = dOff; host = pc; }
                } else if (ad > 60 * DEG) {
                    for (const [side, Q] of [['lo', tH < tP ? a.c : P], ['hi', tH < tP ? P : a.c]]) {
                        const d = Math.abs(dot(pc.n, Q) - pc.off), along = dot(pc.u, Q);
                        if (d <= pc.t / 2 + JAMB && along >= pc.a - 0.3 && along <= pc.b + 0.3) {
                            anchored[side] = true;
                            jambT = Math.min(jambT, pc.t);
                        }
                    }
                }
            }
            // double doors: each leaf closes against the other one
            for (const [side, Q] of [['lo', tH < tP ? a.c : P], ['hi', tH < tP ? P : a.c]]) {
                if (anchored[side] || Q === a.c) continue;
                anchored[side] = swings.some(b => b !== a && Math.abs(dot(f.n, b.c) - f.off) < 0.3
                    && (side === 'lo' ? dot(f.u, b.c) < lo : dot(f.u, b.c) > hi)
                    && [b.s, b.e].some(q => len(sub(q, Q)) < 0.35));
            }
            if (blocked || !anchored.lo || !anchored.hi || (!host && !isFinite(jambT))) continue;
            const score = (host ? 0 : 1) + hostD;
            if (!best || score < best.score) best = { score, P, host, t: host ? host.t : jambT };
        }
        if (!best) continue;
        hinges.push(a.c);
        used.add(a);
        // sit the opening on the host wall's centerline
        const onHost = (p) => (best.host ? sub(p, mul(best.host.n, dot(best.host.n, p) - best.host.off)) : p);
        const H = onHost(a.c), P = onHost(best.P);
        const pc = makePiece(H, P, best.t);
        pc.ops = [{ type: 'door', c: pc.mid, w: pc.len, hinge: H, swing: a.m }];
        pieces.push(pc);
    }
    return { pieces, used };
}

/**
 * Could this arc be a door swing? A mixed line style often gets labeled "wall" or "detail" as
 * a whole, and walls are never quarter arcs hinged at a wall end. A full-size swing labeled
 * stairs or furniture by a guess (the AI, or the automatic pass) is most likely a door too;
 * only the user's own label overrules the geometry. Windows never count. The callers still
 * require door size, a 90° sweep and walls bounding the opening.
 */
function maybeDoorSwing(a) {
    if (a.role === 'door' || a.role === 'wall' || a.role === 'none' || a.role === 'other') return true;
    return (a.role === 'stairs' || a.role === 'furniture') && !a.userSet && a.r >= 1.8;
}

/**
 * Door leaves: short lines running from a swing's hinge along either end of the arc (the
 * open leaf, or a closed one). Drawn in the wall line style, an open leaf resting along a
 * wall otherwise reads as window glass or a stub of wall. Marks them role 'leaf' in place
 * (not 'door': that would make every leaf an opening of its own).
 */
function markDoorLeaves(segs, arcs) {
    for (const a of arcs) {
        if (a.r < 1.2 || a.r > 5 || !maybeDoorSwing(a)) continue;
        const sweep = 2 * Math.asin(Math.min(1, len(sub(a.e, a.s)) / (2 * a.r)));
        if (sweep < 60 * DEG || sweep > 100 * DEG) continue;
        for (const end of [a.s, a.e]) {
            const f = lineFrame(a.c, end);
            const t0 = Math.min(dot(f.u, a.c), dot(f.u, end)) - 0.25, t1 = Math.max(dot(f.u, a.c), dot(f.u, end)) + 0.25;
            for (const sg of segs) {
                if (sg.filled || sg.len > a.r + 0.3) continue;
                if (sg.role !== 'wall' && sg.role !== 'none' && sg.role !== 'other') continue;
                const inBand = (p) => Math.abs(dot(f.n, p) - f.off) <= 0.25 && dot(f.u, p) >= t0 && dot(f.u, p) <= t1;
                if (inBand(sg.p1) && inBand(sg.p2)) sg.role = 'leaf';
            }
        }
    }
}

/** Explicit mode: does reviewed door/window geometry sit in this gap? */
function gapHasOpening(line, g0, g1, segs, arcs) {
    const w = g1 - g0;
    if (w < 0.8 || w > 30) return false;
    const inBand = (p) => Math.abs(dot(line.n, p) - line.off) <= line.t / 2 + 0.5;
    const along = (p) => dot(line.u, p);
    let cover = [];
    for (const s of segs) {
        if (s.role !== 'window' && s.role !== 'door') continue;
        if (!inBand(s.p1) && !inBand(s.p2)) continue;
        const lo = Math.max(g0, Math.min(along(s.p1), along(s.p2))), hi = Math.min(g1, Math.max(along(s.p1), along(s.p2)));
        if (hi > lo) cover.push([lo, hi]);
    }
    for (const a of arcs) {
        if (a.role !== 'door' && a.role !== 'window') continue;
        if (!inBand(a.c)) continue;
        const t = along(a.c);
        if (t > g0 - 0.6 && t < g1 + 0.6) cover.push([Math.max(g0, t - a.r), Math.min(g1, t + a.r)]);
    }
    const covered = mergeSpans(cover).reduce((t, [a, b]) => t + (b - a), 0);
    return covered >= 0.5 * w;
}

/**
 * Explicit mode: every cluster of window-layer geometry becomes a window on the wall it sits in;
 * every door swing arc becomes a door (hinge at the arc center, width = radius). Door-layer
 * clusters without an arc (sliding/pocket doors) become doors spanning their extent.
 */
function placeExplicitOpenings(walls, segs, arcs, placed = new Set()) {
    const frames = walls.map(w => ({ w, f: lineFrame(w.p1, w.p2) }));
    const hostFor = (p, slack = 0.5) => {
        let best = null, bestD = Infinity;
        for (const h of frames) {
            const d = Math.abs(dot(h.f.n, p) - h.f.off);
            const t = dot(h.f.u, p);
            if (d > h.w.t / 2 + slack || t < h.f.a - 0.5 || t > h.f.b + 0.5) continue;
            if (d < bestD) { bestD = d; best = h; }
        }
        return best;
    };
    const addOpening = (h, type, t0, t1, extra = {}) => {
        const lo = Math.max(h.f.a, Math.min(t0, t1)), hi = Math.min(h.f.b, Math.max(t0, t1));
        if (hi - lo < 0.8) return;
        const c = add(mul(h.f.u, (lo + hi) / 2), mul(h.f.n, h.f.off));
        const clash = h.w.openings.some(op => Math.abs(dot(h.f.u, op.c) - (lo + hi) / 2) < (op.w + (hi - lo)) / 2 - 0.05);
        if (!clash) h.w.openings.push({ type, c, w: hi - lo, ...extra });
    };

    // Doors from swing arcs
    const doorArcs = arcs.filter(a => a.role === 'door' && a.r >= 1.2 && a.r <= 5);
    const usedHinges = [];
    for (const a of doorArcs) {
        if (usedHinges.some(p => Math.hypot(p.x - a.c.x, p.y - a.c.y) < 0.3)) continue;
        if (placed.has(a)) { usedHinges.push(a.c); continue; } // already on its wall
        const h = hostFor(a.c, 0.8);
        if (!h) continue;
        usedHinges.push(a.c);
        // the arc end lying along the wall marks the far jamb; the other end is the open leaf
        const offS = Math.abs(dot(h.f.n, a.s) - h.f.off), offE = Math.abs(dot(h.f.n, a.e) - h.f.off);
        const closed = offS < offE ? a.s : a.e;
        addOpening(h, 'door', dot(h.f.u, a.c), dot(h.f.u, closed), { hinge: a.c, swing: a.m });
    }

    // Clusters of window/door lines
    for (const role of ['window', 'door']) {
        const items = segs.filter(s => s.role === role && s.len > 0.05);
        const parent = items.map((_, i) => i);
        const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
        const near = (a, b) => {
            const pts = [[a.p1, b], [a.p2, b], [b.p1, a], [b.p2, a]];
            return pts.some(([p, s]) => distPointSeg(p, s.p1, s.p2) < 0.25);
        };
        for (let i = 0; i < items.length; i++) {
            for (let j = i + 1; j < items.length; j++) {
                if (find(i) !== find(j) && near(items[i], items[j])) parent[find(i)] = find(j);
            }
        }
        const clusters = new Map();
        items.forEach((s, i) => { const r = find(i); if (!clusters.has(r)) clusters.set(r, []); clusters.get(r).push(s); });
        for (const list of clusters.values()) {
            const pts = list.flatMap(s => [s.p1, s.p2]);
            const center = mul(pts.reduce((acc, p) => add(acc, p), { x: 0, y: 0 }), 1 / pts.length);
            const h = hostFor(center);
            if (!h) continue;
            if (role === 'door' && usedHinges.some(p => Math.abs(dot(h.f.u, p) - dot(h.f.u, center)) < 4 && Math.abs(dot(h.f.n, p) - h.f.off) < h.w.t)) continue;
            // doors/windows sit in the wall; things that stick out (a tub against a wall) aren't openings
            const depth = Math.max(...pts.map(p => Math.abs(dot(h.f.n, p) - h.f.off)));
            if (depth > h.w.t / 2 + 1.0) continue;
            const ts = pts.map(p => dot(h.f.u, p));
            if (Math.max(...ts) - Math.min(...ts) > 12) continue;
            // no swing arc and lines running along the wall = glazing, even in a layer labeled doors
            const extent = Math.max(...ts) - Math.min(...ts);
            const glass = list.some(sg => angleDiff(sg.theta, h.f.theta) < 3 * DEG && sg.len >= 0.7 * extent);
            const type = role === 'door' && glass ? 'window' : role;
            addOpening(h, type, Math.min(...ts), Math.max(...ts));
        }
    }
}

function distPointSeg(p, a, b) {
    const ab = sub(b, a), L2 = dot(ab, ab);
    const t = L2 ? Math.max(0, Math.min(1, dot(sub(p, a), ab) / L2)) : 0;
    return len(sub(p, add(a, mul(ab, t))));
}

function dropIslands(edges) {
    if (!edges.length) return edges;
    const parent = new Map();
    const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
    for (const e of edges) { if (!parent.has(e.a)) parent.set(e.a, e.a); if (!parent.has(e.b)) parent.set(e.b, e.b); }
    for (const e of edges) { const ra = find(e.a), rb = find(e.b); if (ra !== rb) parent.set(ra, rb); }
    const comps = new Map();
    for (const e of edges) {
        const r = find(e.a);
        if (!comps.has(r)) comps.set(r, { len: 0, minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
        const c = comps.get(r);
        c.len += Math.hypot(e.b.x - e.a.x, e.b.y - e.a.y);
        for (const p of [e.a, e.b]) { c.minX = Math.min(c.minX, p.x); c.maxX = Math.max(c.maxX, p.x); c.minY = Math.min(c.minY, p.y); c.maxY = Math.max(c.maxY, p.y); }
    }
    const all = [...comps.values()];
    const main = all.reduce((m, c) => (c.len > m.len ? c : m), all[0]);
    // Other drawings on the same sheet (elevations, other floors) sit well away from the main plan
    const NEAR = 30;
    const nearMain = (c) => c.minX < main.maxX + NEAR && c.maxX > main.minX - NEAR && c.minY < main.maxY + NEAR && c.maxY > main.minY - NEAR;
    let skipped = 0;
    const kept = edges.filter(e => {
        const c = comps.get(find(e.a));
        if (c === main) return true;
        const span = Math.max(c.maxX - c.minX, c.maxY - c.minY);
        if (span < 6 || c.len < 0.05 * main.len) return false;
        if (!nearMain(c)) { c.skipped = true; return false; }
        return true;
    });
    skipped = all.filter(c => c.skipped && c.len >= 0.2 * main.len).length;
    kept.skippedDrawings = skipped;
    return kept;
}

/** Bounding boxes of groups of segments that touch (within 0.3 ft). */
function clusterBoxes(list) {
    const parent = list.map((_, i) => i);
    const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (find(i) === find(j)) continue;
            const a = list[i], b = list[j];
            const close = [[a.p1, b], [a.p2, b], [b.p1, a], [b.p2, a]].some(([p, sg]) => distPointSeg(p, sg.p1, sg.p2) < 0.3);
            if (close) parent[find(i)] = find(j);
        }
    }
    const boxes = new Map();
    list.forEach((sg, i) => {
        const r = find(i);
        const b = boxes.get(r) || { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity };
        for (const p of [sg.p1, sg.p2]) { b.minX = Math.min(b.minX, p.x); b.maxX = Math.max(b.maxX, p.x); b.minY = Math.min(b.minY, p.y); b.maxY = Math.max(b.maxY, p.y); }
        boxes.set(r, b);
    });
    return [...boxes.values()];
}

function dropStubs(edges) {
    let changed = true;
    while (changed) {
        changed = false;
        const deg = new Map();
        for (const e of edges) { deg.set(e.a, (deg.get(e.a) || 0) + 1); deg.set(e.b, (deg.get(e.b) || 0) + 1); }
        const next = edges.filter(e => {
            const L = Math.hypot(e.b.x - e.a.x, e.b.y - e.a.y);
            const dangling = deg.get(e.a) === 1 || deg.get(e.b) === 1;
            return !(dangling && L < Math.max(0.6, 1.2 * e.t));
        });
        if (next.length !== edges.length) { edges = next; changed = true; }
    }
    return edges;
}

function mergeLabelLines(texts) {
    // Stack lines like "MASTER" / "BEDROOM" into one label
    const sorted = [...texts].sort((a, b) => a.y - b.y);
    const used = new Set();
    const out = [];
    for (const t of sorted) {
        if (used.has(t)) continue;
        used.add(t);
        let text = String(t.text).trim();
        let x = t.x, y = t.y, last = t;
        for (const u of sorted) {
            if (used.has(u)) continue;
            const h = Math.max(last.height, u.height, 0.3);
            if (u.y > last.y && u.y - last.y < 1.8 * h && Math.abs(u.x - last.x) < 3 * h) {
                used.add(u);
                text += ' ' + String(u.text).trim();
                y = (y + u.y) / 2;
                last = u;
            }
        }
        out.push({ x, y, text: text.replace(/\s+/g, ' ') });
    }
    return out;
}

const FURNITURE_RULES = [
    // fixtures first: names like "double sink" must not match the bed rules
    [/baignoire|badewanne|bañera|욕조/i, 'bathtub'], [/lavabo|waschbecken|세면/i, 'sink-bath'],
    [/[ée]vier|sp[uü]le|fregadero|싱크/i, 'sink-kitchen'], [/cuisini[eè]re|herd|cocina|가스레인지/i, 'stove'],
    [/sink/i, 'sink-kitchen'],
    [/king/i, 'king-bed'], [/queen|double\s*bed|grand lit|lit double/i, 'queen-bed'], [/twin|single\s*bed|lit simple/i, 'twin-bed'], [/bed|\blit\b|bett|cama|침대/i, 'queen-bed'],
    [/canap|sof[aá]|소파/i, 'sofa'],
    [/frig|k[uü]hlschrank|nevera|냉장고/i, 'fridge'], [/lamp|lampe|l[aá]mpara|light|luminaire/i, 'light-fixture'], [/toilet|wc|inodoro|변기/i, 'toilet'], [/salle [àa] manger|esstisch/i, 'dining-table'],
    [/night\s*stand|bedside/i, 'nightstand'], [/dresser|chest/i, 'dresser'], [/wardrobe|armoire/i, 'wardrobe'],
    [/sofa|couch|settee|sectional/i, 'sofa'], [/arm\s*chair|lounge|recliner/i, 'armchair'],
    [/coffee|cocktail/i, 'coffee-table'], [/dining.*(table|tbl)|(table|tbl).*dining/i, 'dining-table'],
    [/dining.*chair|chair.*dining/i, 'dining-chair'], [/office.*chair|task.*chair/i, 'office-chair'],
    [/desk|workstation/i, 'desk'], [/chair/i, 'dining-chair'], [/table|tbl/i, 'dining-table'],
    [/toilet|\bwc\b|water\s*closet|\bw\.c\./i, 'toilet'], [/tub|bath(?!room)/i, 'bathtub'], [/shower/i, 'shower'],
    [/lav|vanity|basin|wash/i, 'sink-bath'], [/sink/i, 'sink-kitchen'],
    [/fridge|refrig|\bref\b/i, 'fridge'], [/range|stove|oven|cooktop|hob/i, 'stove'], [/dish\s*wash|\bdw\b/i, 'dishwasher'],
    [/buffet|sideboard|credenza/i, 'buffet'], [/book\s*(shelf|case)|shelv/i, 'bookshelf'], [/\btv\b|media|entertainment/i, 'tv-stand'],
    [/file|filing/i, 'filing-cabinet'], [/plant/i, 'floor-plant'], [/counter/i, 'counter'], [/stair/i, null]
];

export function matchFurniture(name = '', layer = '') {
    const s = `${name}`;
    if (/door|window|win\b|glaz|dim|tag|north|title|grid/i.test(s)) return null;
    for (const [re, id] of FURNITURE_RULES) if (re.test(s)) return id;
    return null;
}
