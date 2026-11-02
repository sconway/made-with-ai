// Generates the synthetic floor plans used to test DXF / PDF import.
// Every plan is the same 30 × 20 ft apartment (living room, bedroom, bath; 6" exterior and
// 4.5" interior walls; 3 doors, 2 windows), drawn in different ways to exercise one case each.
//
//   node test-fixtures/floor-plans/generate.mjs
//
// Writes into test-fixtures/floor-plans/synthetic/.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, 'synthetic');
fs.mkdirSync(outDir, { recursive: true });

const E = 0.25, I = 0.1875; // half wall thicknesses (ft)

/** Builds the apartment's lines, arcs and texts in feet (y down). */
function apartment({ stairs = false, extraFurniture = false } = {}) {
    const L = [], A = [], T = [];
    const line = (x1, y1, x2, y2, layer = 'A-WALL') => L.push({ x1, y1, x2, y2, layer });
    const rect = (x1, y1, x2, y2, layer) => { line(x1, y1, x2, y1, layer); line(x2, y1, x2, y2, layer); line(x2, y2, x1, y2, layer); line(x1, y2, x1, y1, layer); };

    // exterior: outer faces (window gap top 5–10, door gap bottom 6–9)
    line(-E, -E, 5, -E); line(10, -E, 30 + E, -E);
    line(-E, 20 + E, 6, 20 + E); line(9, 20 + E, 30 + E, 20 + E);
    line(-E, -E, -E, 20 + E); line(30 + E, -E, 30 + E, 20 + E);
    // exterior inner faces
    line(E, E, 5, E); line(10, E, 18 - I, E); line(18 + I, E, 30 - E, E);
    line(E, 20 - E, 6, 20 - E); line(9, 20 - E, 18 - I, 20 - E); line(18 + I, 20 - E, 30 - E, 20 - E);
    line(E, E, E, 20 - E);
    line(30 - E, E, 30 - E, 12 - I); line(30 - E, 12 + I, 30 - E, 20 - E);
    for (const x of [5, 10]) line(x, -E, x, E);
    for (const x of [6, 9]) line(x, 20 - E, x, 20 + E);
    for (const y of [3, 8]) line(30 - E, y, 30 + E, y, 'A-GLAZ');
    // interior wall x = 18 with the bedroom door at y 4–6.75
    line(18 - I, E, 18 - I, 4); line(18 - I, 6.75, 18 - I, 20 - E);
    line(18 + I, E, 18 + I, 4); line(18 + I, 6.75, 18 + I, 12 - I); line(18 + I, 12 + I, 18 + I, 20 - E);
    for (const y of [4, 6.75]) line(18 - I, y, 18 + I, y);
    // interior wall y = 12 with the bath door at x 22–24.5
    line(18 + I, 12 - I, 22, 12 - I); line(24.5, 12 - I, 30 - E, 12 - I);
    line(18 + I, 12 + I, 22, 12 + I); line(24.5, 12 + I, 30 - E, 12 + I);
    for (const x of [22, 24.5]) line(x, 12 - I, x, 12 + I);
    // glazing
    line(5, -0.08, 10, -0.08, 'A-GLAZ'); line(5, 0.08, 10, 0.08, 'A-GLAZ');
    line(30, 3, 30, 8, 'A-GLAZ');
    // doors: leaf + swing (angles in degrees, y down, clockwise from +x)
    line(6, 20 - E, 6, 20 - E - 3, 'A-DOOR'); A.push({ cx: 6, cy: 20 - E, r: 3, a0: 270, a1: 360, layer: 'A-DOOR' });
    line(18 + I, 4, 18 + I + 2.75, 4, 'A-DOOR'); A.push({ cx: 18 + I, cy: 4, r: 2.75, a0: 0, a1: 90, layer: 'A-DOOR' });
    line(24.5, 12 + I, 24.5, 12 + I + 2.5, 'A-DOOR'); A.push({ cx: 24.5, cy: 12 + I, r: 2.5, a0: 90, a1: 180, layer: 'A-DOOR' });
    // bathtub with rim (a fixture that must not become walls)
    rect(27.1, 14.5, 29.6, 19.5, 'P-FIXT'); rect(27.35, 14.75, 29.35, 19.25, 'P-FIXT');
    // room names
    T.push({ x: 9, y: 10, text: 'LIVING ROOM', h: 0.6, layer: 'A-AREA-IDEN' });
    T.push({ x: 24, y: 6, text: 'BEDROOM', h: 0.6, layer: 'A-AREA-IDEN' });
    T.push({ x: 22, y: 16, text: 'BATH', h: 0.6, layer: 'A-AREA-IDEN' });
    if (stairs) {
        // 3.5 × 10 ft run, treads every 11", drawn in the wall style (the hard case)
        const x0 = 2, x1 = 5.5, y0 = 4, y1 = 14, tread = 11 / 12;
        rect(x0, y0, x1, y1, 'A-WALL');
        for (let y = y0 + tread; y < y1 - 0.01; y += tread) line(x0, y, x1, y, 'A-WALL');
        line(x0 + 0.15, y0, x0 + 0.15, y1, 'A-WALL'); line(x1 - 0.15, y0, x1 - 0.15, y1, 'A-WALL');
        line(3.75, y1 - 0.5, 3.75, y0 + 1, 'A-WALL');
        line(3.75, y0 + 1, 3.45, y0 + 1.4, 'A-WALL'); line(3.75, y0 + 1, 4.05, y0 + 1.4, 'A-WALL');
        line(x0, 9.6, x1, 8.8, 'A-WALL');
        T.push({ x: 3.75, y: y1 + 0.5, text: 'UP', h: 0.4, layer: 'A-ANNO-TEXT' });
    }
    if (extraFurniture) {
        rect(9, 14, 16, 17, 'I-FURN'); line(9, 15, 16, 15, 'I-FURN'); line(10, 14, 10, 17, 'I-FURN'); line(15, 14, 15, 17, 'I-FURN'); // sofa
        rect(10.5, 9.5, 14.5, 12, 'I-FURN'); // coffee table
        rect(23, 18, 25, 19.5, 'P-FIXT'); rect(23.5, 16.6, 24.5, 18, 'P-FIXT'); // toilet
    }
    return { L, A, T, bed: { x: 21, y: 4.5, w: 5, h: 6.67 } };
}

/** Fills every wall with 45° hatching (thin lines every `gap` ft), as many CAD exports do. */
function addHatching(plan, gap = 0.08) {
    const walls = [
        [-E, -E, 5, E], [10, -E, 30 + E, E],                       // top (window 5–10)
        [-E, 20 - E, 6, 20 + E], [9, 20 - E, 30 + E, 20 + E],     // bottom (door 6–9)
        [-E, -E, E, 20 + E],                                      // left
        [30 - E, -E, 30 + E, 3], [30 - E, 8, 30 + E, 20 + E],     // right (window 3–8)
        [18 - I, E, 18 + I, 4], [18 - I, 6.75, 18 + I, 20 - E],   // interior x = 18
        [18 + I, 12 - I, 22, 12 + I], [24.5, 12 - I, 30 - E, 12 + I] // interior y = 12
    ];
    const step = gap * Math.SQRT2;
    for (const [x0, y0, x1, y1] of walls) {
        // lines x = y + c, clipped to the wall's rectangle
        for (let c = x0 - y1 + step / 2; c < x1 - y0; c += step) {
            const lo = Math.max(y0, x0 - c), hi = Math.min(y1, x1 - c);
            if (hi - lo > 0.01) plan.L.push({ x1: lo + c, y1: lo, x2: hi + c, y2: hi, layer: 'A-WALL-PATT' });
        }
    }
}

/** Filled star-shaped plants in a planter along the top (filled shapes that aren't walls). */
function addPlants(plan) {
    plan.fills = [];
    for (let i = 0; i < 7; i++) {
        const cx = 2 + i * 4, cy = -2.2, pts = [];
        for (let j = 0; j < 16; j++) {
            const r = j % 2 ? 0.35 : 0.8, a = (j / 16) * 2 * Math.PI;
            pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
        }
        plan.fills.push(pts);
    }
}

function addDimensions(plan) {
    const dim = (x1, y1, x2, y2, text) => {
        plan.L.push({ x1, y1, x2, y2, layer: 'A-ANNO-DIMS' });
        plan.T.push({ x: (x1 + x2) / 2, y: y1 === y2 ? y1 - 0.4 : (y1 + y2) / 2, text, h: 0.5, layer: 'A-ANNO-DIMS' });
    };
    dim(-E, 22, 30 + E, 22, `30'-6"`);
    dim(0, 23.5, 18, 23.5, `18'-0"`);
    dim(18, 23.5, 30, 23.5, `12'-0"`);
    dim(-2, -E, -2, 20 + E, `20'-6"`);
}

function rotate(plan, deg) {
    const r = (deg * Math.PI) / 180;
    const rp = (x, y) => { const dx = x - 15, dy = y - 10; return [15 + dx * Math.cos(r) - dy * Math.sin(r), 10 + dx * Math.sin(r) + dy * Math.cos(r)]; };
    for (const s of plan.L) { [s.x1, s.y1] = rp(s.x1, s.y1); [s.x2, s.y2] = rp(s.x2, s.y2); }
    for (const a of plan.A) { [a.cx, a.cy] = rp(a.cx, a.cy); a.a0 += deg; a.a1 += deg; }
    for (const t of plan.T) [t.x, t.y] = rp(t.x, t.y);
    plan.bed = null;
}

// ── DXF (inches, y up) ─────────────────────────────────────────────────────────
function writeDxf(plan, file, { units = 1 } = {}) {
    const k = 12, g = [];
    const p = (code, val) => g.push(String(code), String(val));
    p(0, 'SECTION'); p(2, 'HEADER'); p(9, '$INSUNITS'); p(70, units); p(0, 'ENDSEC');
    p(0, 'SECTION'); p(2, 'BLOCKS');
    if (plan.bed) {
        p(0, 'BLOCK'); p(8, '0'); p(2, 'BED-QUEEN'); p(70, 0); p(10, 0); p(20, 0); p(30, 0); p(3, 'BED-QUEEN');
        const bw = plan.bed.w * k, bh = plan.bed.h * k;
        for (const [x1, y1, x2, y2] of [[0, 0, bw, 0], [bw, 0, bw, bh], [bw, bh, 0, bh], [0, bh, 0, 0], [6, bh - 6, bw / 2 - 3, bh - 6], [bw / 2 + 3, bh - 6, bw - 6, bh - 6]]) {
            p(0, 'LINE'); p(8, '0'); p(10, x1); p(20, y1); p(30, 0); p(11, x2); p(21, y2); p(31, 0);
        }
        p(0, 'ENDBLK'); p(8, '0');
    }
    p(0, 'ENDSEC');
    p(0, 'SECTION'); p(2, 'ENTITIES');
    for (const s of plan.L) { p(0, 'LINE'); p(8, s.layer); p(10, s.x1 * k); p(20, -s.y1 * k); p(30, 0); p(11, s.x2 * k); p(21, -s.y2 * k); p(31, 0); }
    for (const a of plan.A) {
        p(0, 'ARC'); p(8, a.layer); p(10, a.cx * k); p(20, -a.cy * k); p(30, 0); p(40, a.r * k);
        p(50, ((-a.a1) % 360 + 360) % 360); p(51, ((-a.a0) % 360 + 360) % 360);
    }
    for (const t of plan.T) { p(0, 'TEXT'); p(8, t.layer); p(10, t.x * k); p(20, -t.y * k); p(30, 0); p(40, t.h * k); p(1, t.text); p(72, 1); p(11, t.x * k); p(21, -t.y * k); p(31, 0); }
    if (plan.bed) { p(0, 'INSERT'); p(8, 'I-FURN'); p(2, 'BED-QUEEN'); p(10, plan.bed.x * k); p(20, -(plan.bed.y + plan.bed.h) * k); p(30, 0); }
    p(0, 'ENDSEC'); p(0, 'EOF');
    fs.writeFileSync(path.join(outDir, file), g.join('\n') + '\n');
}

// ── PDF (points, 1/4" = 1'-0" → 18 pt per ft) ──────────────────────────────────
function writePdf(plan, file, { mono = false, scaleNote = true, offset = [100, 80] } = {}) {
    const S = 18, [OX, OY] = offset, H = 612;
    const X = (x) => (OX + x * S).toFixed(3), Y = (y) => (H - (OY + y * S)).toFixed(3);
    const c = ['0 0 0 RG'];
    for (const s of plan.L) c.push(`${mono ? 0.5 : s.layer === 'A-WALL' ? 1.2 : 0.4} w ${X(s.x1)} ${Y(s.y1)} m ${X(s.x2)} ${Y(s.y2)} l S`);
    for (const a of plan.A) {
        const r = a.r, kk = 0.5523 * r, rad = (d) => (d * Math.PI) / 180;
        const P = (d) => ({ x: a.cx + r * Math.cos(rad(d)), y: a.cy + r * Math.sin(rad(d)) });
        const Tn = (d) => ({ x: -Math.sin(rad(d)), y: Math.cos(rad(d)) });
        const p0 = P(a.a0), p3 = P(a.a1), t0 = Tn(a.a0), t3 = Tn(a.a1);
        const p1 = { x: p0.x + t0.x * kk, y: p0.y + t0.y * kk }, p2 = { x: p3.x - t3.x * kk, y: p3.y - t3.y * kk };
        c.push(`${mono ? 0.5 : 0.4} w ${X(p0.x)} ${Y(p0.y)} m ${X(p1.x)} ${Y(p1.y)} ${X(p2.x)} ${Y(p2.y)} ${X(p3.x)} ${Y(p3.y)} c S`);
    }
    for (const pts of plan.fills || []) {
        c.push(`0 0.4 0 rg ${pts.map(([x, y], i) => `${X(x)} ${Y(y)} ${i ? 'l' : 'm'}`).join(' ')} h f 0 0 0 rg`);
    }
    if (plan.bed) { const f = plan.bed; c.push(`${mono ? 0.5 : 0.4} w ${X(f.x)} ${Y(f.y + f.h)} ${(f.w * S).toFixed(3)} ${(f.h * S).toFixed(3)} re S`); }
    for (const t of plan.T) {
        const size = t.h * S, wEst = t.text.length * size * 0.55;
        c.push(`BT /F1 ${size.toFixed(2)} Tf ${(OX + t.x * S - wEst / 2).toFixed(2)} ${(H - (OY + t.y * S) - size * 0.35).toFixed(2)} Td (${t.text.replace(/([()\\])/g, '\\$1')}) Tj ET`);
    }
    if (scaleNote) c.push(`BT /F1 9 Tf 560 40 Td (SCALE: 1/4" = 1'-0") Tj ET`);
    const content = c.join('\n');
    const objs = [
        '<< /Type /Catalog /Pages 2 0 R >>',
        '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
        '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 792 612] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
        `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
        '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'
    ];
    let pdf = '%PDF-1.4\n';
    const offs = [];
    objs.forEach((o, i) => { offs.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${o}\nendobj\n`; });
    const xref = Buffer.byteLength(pdf);
    pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n` + offs.map(o => `${String(o).padStart(10, '0')} 00000 n \n`).join('');
    pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
    fs.writeFileSync(path.join(outDir, file), pdf);
}

// ── the set ────────────────────────────────────────────────────────────────────
{ const p = apartment(); addDimensions(p); writePdf(p, '01-simple-apartment.pdf'); writeDxf(p, '01-simple-apartment.dxf'); }
{ const p = apartment({ stairs: true }); addDimensions(p); writePdf(p, '02-stairs-drawn-like-walls.pdf'); }
{ const p = apartment({ stairs: true, extraFurniture: true }); addDimensions(p); writePdf(p, '03-single-line-style.pdf', { mono: true }); }
{ const p = apartment(); addDimensions(p); rotate(p, 30); writePdf(p, '04-rotated-30-degrees.pdf', { offset: [160, 140] }); writeDxf(p, '04-rotated-30-degrees.dxf'); }
{ const p = apartment(); writePdf(p, '05-no-dimensions-no-scale.pdf', { scaleNote: false }); }
{ const p = apartment(); writeDxf(p, '06-dxf-without-units.dxf', { units: 0 }); }
{ const p = apartment({ extraFurniture: true }); addDimensions(p); addHatching(p); addPlants(p); writePdf(p, '07-hatched-walls.pdf', { mono: true }); }

console.log(`Wrote synthetic plans to ${path.relative(process.cwd(), outDir) || outDir}`);
