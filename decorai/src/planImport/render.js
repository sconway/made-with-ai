// Renders the extracted drawing to images for the vision model (browser only):
//   overview  — the whole drawing in black, with text, as the model would see the plan
//   sheets    — contact sheets of tiles; each tile shows the plan in light gray with ONE
//               group in red and its id (G1, G2…), so "what is G7?" is unambiguous

const LONG_EDGE = 2048;          // within the model's 2576px high-res limit
const TILE = 512, COLS = 4, ROWS = 3;

function bounds(prims) {
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const add = (x, y) => { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; };
    for (const s of prims.segments || []) { add(s.x1, s.y1); add(s.x2, s.y2); }
    for (const a of prims.arcs || []) { add(a.cx - a.r, a.cy - a.r); add(a.cx + a.r, a.cy + a.r); }
    if (!isFinite(minX)) return { minX: 0, minY: 0, maxX: 1, maxY: 1 };
    return { minX, minY, maxX, maxY };
}

/** Map source coords into a box of size w×h with padding. */
function fitter(b, w, h, pad) {
    const sw = b.maxX - b.minX || 1, sh = b.maxY - b.minY || 1;
    const s = Math.min((w - pad * 2) / sw, (h - pad * 2) / sh);
    const ox = (w - sw * s) / 2 - b.minX * s, oy = (h - sh * s) / 2 - b.minY * s;
    return { s, x: (x) => x * s + ox, y: (y) => y * s + oy };
}

function drawSet(ctx, prims, f, sel, { color, width, text = true, ox = 0, oy = 0 }) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    for (const i of sel.segments) {
        const s = prims.segments[i];
        ctx.moveTo(ox + f.x(s.x1), oy + f.y(s.y1));
        ctx.lineTo(ox + f.x(s.x2), oy + f.y(s.y2));
    }
    for (const i of sel.arcs) {
        const a = prims.arcs[i];
        // quadratic through start, mid, end is close enough at this size
        const cx = 2 * a.mx - (a.sx + a.ex) / 2, cy = 2 * a.my - (a.sy + a.ey) / 2;
        ctx.moveTo(ox + f.x(a.sx), oy + f.y(a.sy));
        ctx.quadraticCurveTo(ox + f.x(cx), oy + f.y(cy), ox + f.x(a.ex), oy + f.y(a.ey));
    }
    for (const i of sel.curves || []) {
        const c = prims.curves[i];
        ctx.moveTo(ox + f.x(c.x0), oy + f.y(c.y0));
        ctx.bezierCurveTo(ox + f.x(c.x1), oy + f.y(c.y1), ox + f.x(c.x2), oy + f.y(c.y2), ox + f.x(c.x3), oy + f.y(c.y3));
    }
    ctx.stroke();
    if (text) {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (const i of sel.texts || []) {
            const t = prims.texts[i];
            const px = Math.max(7, Math.min(40, (t.height || 0) * f.s));
            ctx.font = `${px}px sans-serif`;
            ctx.save();
            ctx.translate(ox + f.x(t.x), oy + f.y(t.y));
            if (t.rotation) ctx.rotate((t.rotation * Math.PI) / 180);
            ctx.fillText(t.text, 0, 0);
            ctx.restore();
        }
    }
}

const ALL = (prims) => ({
    segments: (prims.segments || []).map((_, i) => i),
    arcs: (prims.arcs || []).map((_, i) => i),
    curves: (prims.curves || []).map((_, i) => i),
    texts: (prims.texts || []).map((_, i) => i)
});

/**
 * @returns {{ overview: string, sheets: Array<{ image: string, ids: string[] }> }} PNG data URLs
 */
export function renderPlanImages(prims, groups, { maxSheets = 3 } = {}) {
    const b = bounds(prims);
    const aspect = (b.maxX - b.minX || 1) / (b.maxY - b.minY || 1);
    const W = aspect >= 1 ? LONG_EDGE : Math.round(LONG_EDGE * aspect);
    const H = aspect >= 1 ? Math.round(LONG_EDGE / aspect) : LONG_EDGE;

    // Overview
    const ov = document.createElement('canvas');
    ov.width = W; ov.height = H;
    const octx = ov.getContext('2d');
    octx.fillStyle = '#fff'; octx.fillRect(0, 0, W, H);
    drawSet(octx, prims, fitter(b, W, H, 24), ALL(prims), { color: '#000', width: 1 });
    const overview = ov.toDataURL('image/png');

    // Gray background tile, drawn once and reused under every group
    const bg = document.createElement('canvas');
    bg.width = TILE; bg.height = TILE;
    const bctx = bg.getContext('2d');
    bctx.fillStyle = '#fff'; bctx.fillRect(0, 0, TILE, TILE);
    const tf = fitter(b, TILE, TILE, 14);
    drawSet(bctx, prims, tf, ALL(prims), { color: '#cfcfcf', width: 0.6, text: false });

    const geomGroups = groups.filter(g => g.kind !== 'text');
    const perSheet = COLS * ROWS;
    const sheets = [];
    for (let start = 0; start < geomGroups.length && sheets.length < maxSheets; start += perSheet) {
        const batch = geomGroups.slice(start, start + perSheet);
        const c = document.createElement('canvas');
        c.width = TILE * COLS; c.height = TILE * ROWS;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
        batch.forEach((g, i) => {
            const ox = (i % COLS) * TILE, oy = Math.floor(i / COLS) * TILE;
            ctx.drawImage(bg, ox, oy);
            drawSet(ctx, prims, tf, g, { color: '#e00000', width: 1.6, text: false, ox, oy });
            ctx.strokeStyle = '#999'; ctx.lineWidth = 1;
            ctx.strokeRect(ox + 0.5, oy + 0.5, TILE - 1, TILE - 1);
            ctx.fillStyle = '#e00000';
            ctx.font = 'bold 30px sans-serif';
            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
            ctx.fillText(g.id, ox + 8, oy + 6);
        });
        sheets.push({ image: c.toDataURL('image/png'), ids: batch.map(g => g.id) });
    }
    return { overview, sheets };
}

/**
 * Object tiles: each tile is zoomed in on ONE object (red) with its surroundings in gray,
 * labelled with its id (O1, O2…) and real size, 16 per sheet.
 * @returns Array<{ image: string, ids: string[] }>
 */
export function renderObjectSheets(prims, objects, feetPerUnit, { maxSheets = 6 } = {}) {
    const OT = 512, OC = 4, OR = 4;
    // prim bounding boxes once, so each tile only draws what's near it
    const segBox = (prims.segments || []).map(s => [Math.min(s.x1, s.x2), Math.min(s.y1, s.y2), Math.max(s.x1, s.x2), Math.max(s.y1, s.y2)]);
    const arcBox = (prims.arcs || []).map(a => [Math.min(a.sx, a.ex, a.mx), Math.min(a.sy, a.ey, a.my), Math.max(a.sx, a.ex, a.mx), Math.max(a.sy, a.ey, a.my)]);
    const curveBox = (prims.curves || []).map(c => [Math.min(c.x0, c.x3), Math.min(c.y0, c.y3), Math.max(c.x0, c.x3), Math.max(c.y0, c.y3)]);
    const textPts = (prims.texts || []).map(t => [t.x, t.y]);
    const within = (bx, w) => bx[2] >= w.minX && bx[0] <= w.maxX && bx[3] >= w.minY && bx[1] <= w.maxY;

    const sheets = [];
    const perSheet = OC * OR;
    for (let start = 0; start < objects.length && sheets.length < maxSheets; start += perSheet) {
        const batch = objects.slice(start, start + perSheet);
        const c = document.createElement('canvas');
        c.width = OT * OC; c.height = OT * OR;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
        batch.forEach((o, i) => {
            const ox = (i % OC) * OT, oy = Math.floor(i / OC) * OT;
            const b = o.bbox;
            const size = Math.max(b.maxX - b.minX, b.maxY - b.minY);
            const pad = Math.max(size * 0.45, 3 / feetPerUnit); // at least 3 ft of context
            const cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2, half = size / 2 + pad;
            const win = { minX: cx - half, minY: cy - half, maxX: cx + half, maxY: cy + half };
            const f = fitter(win, OT, OT, 4);
            const near = {
                segments: segBox.map((bx, j) => (within(bx, win) ? j : -1)).filter(j => j >= 0),
                arcs: arcBox.map((bx, j) => (within(bx, win) ? j : -1)).filter(j => j >= 0),
                curves: curveBox.map((bx, j) => (within(bx, win) ? j : -1)).filter(j => j >= 0),
                texts: textPts.map((p, j) => (p[0] >= win.minX && p[0] <= win.maxX && p[1] >= win.minY && p[1] <= win.maxY ? j : -1)).filter(j => j >= 0)
            };
            ctx.save();
            ctx.beginPath(); ctx.rect(ox, oy, OT, OT); ctx.clip();
            drawSet(ctx, prims, f, near, { color: '#bdbdbd', width: 1, text: true, ox, oy });
            drawSet(ctx, prims, f, o, { color: '#e00000', width: 2.2, text: false, ox, oy });
            ctx.restore();
            ctx.strokeStyle = '#999'; ctx.lineWidth = 1;
            ctx.strokeRect(ox + 0.5, oy + 0.5, OT - 1, OT - 1);
            ctx.fillStyle = '#e00000';
            ctx.font = 'bold 30px sans-serif';
            ctx.textAlign = 'left'; ctx.textBaseline = 'top';
            ctx.fillText(o.id, ox + 8, oy + 6);
            ctx.fillStyle = '#555';
            ctx.font = '20px sans-serif';
            ctx.textBaseline = 'bottom';
            ctx.fillText(`${o.sizeFt.w} × ${o.sizeFt.h} ft`, ox + 8, oy + OT - 6);
        });
        sheets.push({ image: c.toDataURL('image/png'), ids: batch.map(o => o.id) });
    }
    return sheets;
}
