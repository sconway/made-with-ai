// Finds staircases in plan geometry so they don't get mistaken for walls.
// A stair run is a stack of 5+ parallel tread lines of similar length at an even spacing
// (7–16 in). Everything inside the run's footprint — treads, stringers, handrails, the
// direction arrow, the break line — belongs to the stair.

const DEG = Math.PI / 180;
const TREAD_MIN = 7 / 12, TREAD_MAX = 16 / 12;   // tread depth range (ft)
const WIDTH_MIN = 1.5, WIDTH_MAX = 8;            // stair width = tread line length (ft)
const MIN_TREAD_LINES = 5;

function frame(p1, p2) {
    let theta = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    if (theta < 0) theta += Math.PI;
    if (theta >= Math.PI) theta -= Math.PI;
    const u = { x: Math.cos(theta), y: Math.sin(theta) };
    const n = { x: -u.y, y: u.x };
    const a1 = u.x * p1.x + u.y * p1.y, a2 = u.x * p2.x + u.y * p2.y;
    return { theta, u, n, a: Math.min(a1, a2), b: Math.max(a1, a2), off: n.x * p1.x + n.y * p1.y, len: Math.hypot(p2.x - p1.x, p2.y - p1.y) };
}
const angleDiff = (a, b) => { const d = Math.abs(a - b) % Math.PI; return Math.min(d, Math.PI - d); };
const median = (arr) => { const s = [...arr].sort((x, y) => x - y); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };

/**
 * @param prims        primitives (source units, y down)
 * @param feetPerUnit  scale
 * @param candidates   optional segment indices to search (default: all non-filled segments)
 * @returns Array<{ segments: number[], cx, cy (source units), runAngleDeg, runFt, widthFt, treadFt, treads }>
 *          runAngleDeg is the direction the stair climbs (screen degrees, y down), before UP/DN is known
 */
export function detectStairs(prims, feetPerUnit, { candidates } = {}) {
    const k = feetPerUnit;
    const idx = candidates || prims.segments.map((_, i) => i);
    const segs = [];
    for (const i of idx) {
        const s = prims.segments[i];
        if (!s || s.filled || s.approx) continue;
        const p1 = { x: s.x1 * k, y: s.y1 * k }, p2 = { x: s.x2 * k, y: s.y2 * k };
        const f = frame(p1, p2);
        if (f.len < 0.05) continue;
        segs.push({ i, p1, p2, ...f });
    }

    // Tread candidates, bucketed by direction
    const buckets = new Map();
    for (const s of segs) {
        if (s.len < WIDTH_MIN * 0.5 || s.len > WIDTH_MAX) continue;
        const key = Math.round(s.theta / (2 * DEG)) % 90;
        if (!buckets.has(key)) buckets.set(key, []);
        buckets.get(key).push(s);
    }

    const found = [];
    const usedTreads = new Set();
    for (const list of buckets.values()) {
        // Treads split by a center line/arrow are merged back into one line per offset
        const lines = mergeCollinear(list);
        lines.sort((a, b) => a.off - b.off);
        for (let start = 0; start < lines.length; start++) {
            const first = lines[start];
            if (usedTreads.has(first) || first.len < WIDTH_MIN || first.len > WIDTH_MAX) continue;
            const chain = [first];
            let last = first, spacing = null;
            for (let j = start + 1; j < lines.length; j++) {
                const c = lines[j];
                const d = c.off - last.off;
                if (d < 0.02) continue;
                if (d > TREAD_MAX * 1.05) break;
                if (usedTreads.has(c) || angleDiff(c.theta, first.theta) > 2 * DEG) continue;
                if (d < TREAD_MIN * 0.95) continue;
                if (spacing && Math.abs(d - spacing) > 0.15 * spacing) continue;
                const ov = Math.min(c.b, first.b) - Math.max(c.a, first.a);
                if (ov < 0.8 * Math.min(c.len, first.len)) continue;
                if (c.len / first.len < 0.75 || c.len / first.len > 1.33) continue;
                chain.push(c);
                spacing = spacing == null ? d : (spacing * (chain.length - 2) + d) / (chain.length - 1);
                last = c;
            }
            if (chain.length < MIN_TREAD_LINES) continue;
            const gaps = chain.slice(1).map((c, i) => c.off - chain[i].off);
            const med = median(gaps);
            if (gaps.some(g => Math.abs(g - med) > 0.18 * med)) continue;
            chain.forEach(c => usedTreads.add(c));

            const { u, n } = first;
            const a0 = Math.min(...chain.map(c => c.a)), a1 = Math.max(...chain.map(c => c.b));
            const o0 = chain[0].off, o1 = chain[chain.length - 1].off;
            // Everything inside the footprint (+ a little) belongs to the stair
            const pad = 0.3;
            const inside = (p) => {
                const a = u.x * p.x + u.y * p.y, o = n.x * p.x + n.y * p.y;
                return a >= a0 - pad && a <= a1 + pad && o >= o0 - pad && o <= o1 + pad;
            };
            const memberSegs = segs.filter(s => inside(s.p1) && inside(s.p2));
            // A tile/floor pattern has a second evenly spaced set of lines across the first; a stair doesn't
            const across = memberSegs.filter(s => angleDiff(s.theta, first.theta) > 80 * DEG && s.len > 0.5 * (o1 - o0))
                .map(s => u.x * s.p1.x + u.y * s.p1.y) // position across the stair width
                .sort((x, y) => x - y);
            const acrossGaps = across.slice(1).map((v, i) => v - across[i]).filter(g => g > 0.05);
            if (acrossGaps.length >= 3) {
                const m = median(acrossGaps);
                if (m < 2.5 && acrossGaps.every(g => Math.abs(g - m) < 0.15 * m)) continue;
            }
            const members = memberSegs.map(s => s.i);
            const ca = (a0 + a1) / 2, co = (o0 + o1) / 2;
            const cx = u.x * ca + n.x * co, cy = u.y * ca + n.y * co;
            found.push({
                segments: members,
                cx: cx / k, cy: cy / k,
                runAngleDeg: Math.round(Math.atan2(n.y, n.x) / DEG * 10) / 10,
                runFt: o1 - o0,
                widthFt: a1 - a0,
                treadFt: med,
                treads: chain.length,
                frame: { u, n, a0, a1, o0, o1 }
            });
        }
    }
    return found;
}

function mergeCollinear(list) {
    const sorted = [...list].sort((a, b) => a.off - b.off || a.a - b.a);
    const out = [];
    for (const s of sorted) {
        // rejoin a tread drawn in pieces around the arrow line, but keep side-by-side flights apart
        const prev = out.find(o => Math.abs(o.off - s.off) < 0.04 && angleDiff(o.theta, s.theta) < 2 * DEG && s.a <= o.b + 0.3 && s.b >= o.a - 0.3);
        if (prev) {
            prev.a = Math.min(prev.a, s.a);
            prev.b = Math.max(prev.b, s.b);
            prev.len = prev.b - prev.a;
            prev.members.push(s.i);
        } else {
            out.push({ ...s, members: [s.i] });
        }
    }
    return out;
}

/**
 * Turns detected runs into editor stairs items (feet; the caller converts to px).
 * UP / DN text near one end of the run sets which way it climbs (the label sits at the bottom).
 */
export function stairsToItems(stairs, texts, feetPerUnit) {
    const k = feetPerUnit;
    return stairs.map(st => {
        const { u, n, o0, o1, a0, a1 } = st.frame;
        let climbsTowardHigh = true, direction = 'up';
        let best = null;
        for (const t of texts || []) {
            const s = String(t.text).trim().toUpperCase();
            const isUp = /^(UP|UPSTAIRS|올라감|上)$/.test(s), isDn = /^(DN|DOWN|DOWNSTAIRS|내려감|下)$/.test(s);
            if (!isUp && !isDn) continue;
            const p = { x: t.x * k, y: t.y * k };
            const a = u.x * p.x + u.y * p.y, o = n.x * p.x + n.y * p.y;
            if (a < a0 - 2 || a > a1 + 2 || o < o0 - 3 || o > o1 + 3) continue;
            const dLow = Math.abs(o - o0), dHigh = Math.abs(o - o1);
            const dist = Math.min(dLow, dHigh);
            if (!best || dist < best.dist) best = { dist, nearLow: dLow < dHigh, isUp };
        }
        if (best) {
            // the label sits at the end you start from
            climbsTowardHigh = best.nearLow;
            direction = best.isUp ? 'up' : 'down';
        }
        const angle = st.runAngleDeg + (climbsTowardHigh ? 0 : 180);
        return {
            typeId: 'stairs',
            cx: st.cx * k, cy: st.cy * k,          // feet
            w: Math.max(st.runFt, 1), h: Math.max(st.widthFt, 1),
            rotation: Math.round(((angle % 360) + 360) % 360),
            direction
        };
    });
}
