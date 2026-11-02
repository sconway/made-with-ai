// Finds hatching: rows of short parallel lines that fill an area (most often the diagonal
// fill inside walls, drawn so the walls look solid). Thousands of these lines would
// otherwise be read as walls, doors and furniture outlines, and make the import crawl.
//
// A line counts as hatching when it runs diagonal to the plan, is short, and has several
// lines of the same style beside it at a small, even spacing. Walls, windows, stairs and
// furniture outlines run along the plan's axes, so they're never caught.

const MAX_LEN_FT = 3;        // hatch lines inside walls are short (wall thickness × √2 at most)
const GAP_FT = 0.6;          // neighbouring hatch lines are at most this far apart
const MIN_NEIGHBOURS = 3;
const MIN_LINES = 40;        // fewer than this is a drawing detail, not a fill
const DIAGONAL_DEG = 15;     // how far off the plan's axes a hatch must run
const SAME_ANGLE_DEG = 1;

/**
 * @param prims        primitives from dxf.js / pdf.js (source units)
 * @param feetPerUnit  drawing scale
 * @returns {Set<number>} indices into prims.segments
 */
export function findHatching(prims, feetPerUnit) {
    const k = feetPerUnit;
    const out = new Set();
    const segs = prims.segments || [];
    if (!(k > 0) || segs.length < MIN_LINES) return out;

    const lines = segs.map((s, i) => {
        let theta = Math.atan2(s.y2 - s.y1, s.x2 - s.x1);
        if (theta < 0) theta += Math.PI;
        if (theta >= Math.PI) theta -= Math.PI;
        return { i, s, theta, L: Math.hypot(s.x2 - s.x1, s.y2 - s.y1) * k };
    });

    // The plan's axes: the direction most long lines run in (mod 90°)
    const hist = new Float64Array(90);
    for (const l of lines) if (l.L >= 2) hist[Math.round(l.theta * 180 / Math.PI) % 90] += l.L;
    let axis = 0;
    for (let d = 1; d < 90; d++) if (hist[d] > hist[axis]) axis = d;
    const offAxis = (theta) => {
        const d = Math.abs((theta * 180 / Math.PI - axis) % 90);
        return Math.min(d, 90 - d);
    };

    // Families: same style, (nearly) the same angle
    const byStyle = new Map();
    for (const l of lines) {
        if (l.s.filled || l.L > MAX_LEN_FT || l.L < 0.01 || offAxis(l.theta) < DIAGONAL_DEG) continue;
        const key = `${l.s.layer || ''}|${l.s.color || ''}|${Math.round((l.s.width || 0) * 100)}`;
        if (!byStyle.has(key)) byStyle.set(key, []);
        byStyle.get(key).push(l);
    }
    for (const list of byStyle.values()) {
        if (list.length < MIN_LINES) continue;
        list.sort((a, b) => a.theta - b.theta);
        let start = 0;
        for (let j = 1; j <= list.length; j++) {
            if (j < list.length && list[j].theta - list[j - 1].theta <= SAME_ANGLE_DEG * Math.PI / 180) continue;
            if (j - start >= MIN_LINES) markFamily(list.slice(start, j), k, out);
            start = j;
        }
    }
    return out;
}

function markFamily(fam, k, out) {
    const theta = fam.reduce((t, l) => t + l.theta, 0) / fam.length;
    const ux = Math.cos(theta), uy = Math.sin(theta), nx = -uy, ny = ux;
    const items = fam.map(l => {
        const a1 = (ux * l.s.x1 + uy * l.s.y1) * k, a2 = (ux * l.s.x2 + uy * l.s.y2) * k;
        return { i: l.i, off: (nx * l.s.x1 + ny * l.s.y1) * k, a: Math.min(a1, a2), b: Math.max(a1, a2), n: 0 };
    }).sort((p, q) => p.off - q.off);
    for (let x = 0; x < items.length; x++) {
        const p = items[x];
        for (let y = x + 1; y < items.length; y++) {
            const q = items[y];
            const d = q.off - p.off;
            if (d > GAP_FT) break;
            if (d < 0.002) continue; // collinear pieces of the same line
            if (Math.min(p.b, q.b) - Math.max(p.a, q.a) < -0.05) continue; // side by side, not stacked
            p.n++; q.n++;
        }
    }
    const hits = items.filter(p => p.n >= MIN_NEIGHBOURS);
    if (hits.length < MIN_LINES) return;
    for (const p of hits) out.add(p.i);
}
