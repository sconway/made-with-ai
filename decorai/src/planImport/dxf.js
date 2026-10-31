// Reads a DXF (text) file and flattens it into the primitives reconstruct.js expects.
// Block references (INSERTs) are exploded with their transforms; y is flipped so
// it points down like the editor's canvas.
import DxfParser from 'dxf-parser';

const INSUNITS_TO_FEET = {
    1: 1 / 12,      // inches
    2: 1,           // feet
    4: 1 / 304.8,   // millimeters
    5: 1 / 30.48,   // centimeters
    6: 3.28084,     // meters
    10: 3          // yards
};

// 2D affine matrix [a, b, c, d, e, f]: x' = a x + c y + e, y' = b x + d y + f
const IDENTITY = [1, 0, 0, 1, 0, 0];
function mult(m, n) {
    return [
        m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
        m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
        m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]
    ];
}
const apply = (m, p) => ({ x: m[0] * p.x + m[2] * p.y + m[4], y: m[1] * p.x + m[3] * p.y + m[5] });
const scaleOf = (m) => Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]));

function insertMatrix(ins, block) {
    const sx = ins.xScale ?? 1, sy = ins.yScale ?? 1;
    const r = ((ins.rotation || 0) * Math.PI) / 180;
    const cos = Math.cos(r), sin = Math.sin(r);
    const base = block?.position || { x: 0, y: 0 };
    const pos = ins.position || { x: 0, y: 0 };
    // translate(pos) * rotate(r) * scale(sx, sy) * translate(-base)
    const T = [1, 0, 0, 1, pos.x, pos.y];
    const R = [cos, sin, -sin, cos, 0, 0];
    const S = [sx, 0, 0, sy, 0, 0];
    const B = [1, 0, 0, 1, -base.x, -base.y];
    return mult(mult(mult(T, R), S), B);
}

function cleanMText(s = '') {
    return String(s)
        .replace(/\\P/g, ' ')
        .replace(/\\[A-Za-z][^;\\{}]*;/g, '')
        .replace(/\\[~LlOoKk]/g, '')
        .replace(/[{}]/g, '')
        .replace(/%%[cdp]/gi, '')
        .replace(/\s+/g, ' ')
        .trim();
}

export function parseDxfText(text) {
    const parser = new DxfParser();
    const dxf = parser.parseSync(text);
    if (!dxf) throw new Error('Could not read this DXF file.');
    return dxfToPrimitives(dxf);
}

export function dxfToPrimitives(dxf) {
    const segments = [], arcs = [], texts = [], inserts = [];
    const layers = dxf.tables?.layer?.layers || {};
    const layerHidden = (name) => {
        const l = layers[name];
        return l && (l.frozen || l.visible === false);
    };
    const blocks = dxf.blocks || {};

    const all = dxf.entities || [];
    const modelSpace = all.filter(e => !e.inPaperSpace);
    const entities = modelSpace.length ? modelSpace : all;

    // y-flip so the output points down
    const FLIP = [1, 0, 0, -1, 0, 0];

    function emitSeg(m, a, b, layer, extra) {
        const p = apply(m, a), q = apply(m, b);
        segments.push({ x1: p.x, y1: p.y, x2: q.x, y2: q.y, layer, ...extra });
    }

    function emitArc(m, center, r, a0, a1, layer, block, circle = false) {
        // DXF arcs run counter-clockwise from a0 to a1 (y-up, before any mirroring)
        let sweep = a1 - a0;
        while (sweep <= 0) sweep += Math.PI * 2;
        const pt = (ang) => ({ x: center.x + r * Math.cos(ang), y: center.y + r * Math.sin(ang) });
        const c = apply(m, center), s = apply(m, pt(a0)), e = apply(m, pt(a0 + sweep)), mid = apply(m, pt(a0 + sweep / 2));
        arcs.push({ cx: c.x, cy: c.y, r: r * scaleOf(m), sx: s.x, sy: s.y, ex: e.x, ey: e.y, mx: mid.x, my: mid.y, layer, block, ...(circle ? { circle: true } : {}) });
    }

    function bulgeArc(m, p, q, bulge, layer, block) {
        // A polyline bulge encodes an arc between p and q
        const theta = 4 * Math.atan(bulge);
        const chord = Math.hypot(q.x - p.x, q.y - p.y);
        if (chord < 1e-9) return;
        const r = Math.abs(chord / (2 * Math.sin(theta / 2)));
        const mid = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
        const h = r * Math.cos(theta / 2) * Math.sign(bulge);
        const nx = -(q.y - p.y) / chord, ny = (q.x - p.x) / chord;
        const center = { x: mid.x + nx * h, y: mid.y + ny * h };
        let a0 = Math.atan2(p.y - center.y, p.x - center.x);
        let a1 = Math.atan2(q.y - center.y, q.x - center.x);
        if (bulge < 0) [a0, a1] = [a1, a0];
        emitArc(m, center, r, a0, a1, layer, block);
    }

    function walk(list, m, inheritedLayer, depth, blockExtent, blockName) {
        if (depth > 12) return;
        for (const e of list) {
            if (e.visible === false) continue;
            let layer = e.layer || '0';
            if (layer === '0' && inheritedLayer) layer = inheritedLayer;
            if (layerHidden(layer)) continue;
            const extra = blockExtent != null ? { blockExtent, block: blockName } : {};
            switch (e.type) {
                case 'LINE': {
                    if (e.vertices?.length >= 2) emitSeg(m, e.vertices[0], e.vertices[1], layer, extra);
                    break;
                }
                case 'LWPOLYLINE':
                case 'POLYLINE': {
                    const v = e.vertices || [];
                    if (e.isPolyfaceMesh || e.is3dPolygonMesh) break;
                    const n = v.length;
                    const count = e.shape ? n : n - 1;
                    const width = e.width ? e.width * scaleOf(m) : 0;
                    for (let i = 0; i < count; i++) {
                        const p = v[i], q = v[(i + 1) % n];
                        if (p.bulge) bulgeArc(m, p, q, p.bulge, layer, blockName);
                        else emitSeg(m, p, q, layer, width ? { ...extra, width } : extra);
                    }
                    break;
                }
                case 'SOLID': {
                    const pts = (e.points || []).filter(Boolean);
                    // SOLID vertex order is 1-2-4-3
                    const order = pts.length === 4 ? [pts[0], pts[1], pts[3], pts[2]] : pts;
                    for (let i = 0; i < order.length; i++) emitSeg(m, order[i], order[(i + 1) % order.length], layer, { ...extra, filled: true });
                    break;
                }
                case 'ARC':
                    emitArc(m, e.center, e.radius, e.startAngle, e.endAngle, layer, blockName);
                    break;
                case 'CIRCLE': {
                    if (!e.center || !(e.radius > 0)) break;
                    // two half arcs keep circles in the drawing (fixtures, columns, plants)
                    emitArc(m, e.center, e.radius, 0, Math.PI, layer, blockName, true);
                    emitArc(m, e.center, e.radius, Math.PI, Math.PI * 2, layer, blockName, true);
                    break;
                }
                case 'SPLINE':
                case 'ELLIPSE': {
                    // approximated as short segments; drawn, but never used as wall candidates
                    const pts = curvePoints(e);
                    for (let i = 0; i < pts.length - 1; i++) emitSeg(m, pts[i], pts[i + 1], layer, { ...extra, approx: true });
                    break;
                }
                case 'TEXT':
                case 'ATTDEF': {
                    if (e.type === 'ATTDEF') break;
                    const anchor = (e.halign || e.valign) && e.endPoint ? e.endPoint : e.startPoint;
                    if (!anchor || !e.text) break;
                    const hl = e.textHeight || 1; // height in the entity's own units
                    const h = hl * scaleOf(m);
                    const txt = cleanMText(e.text);
                    let local = anchor;
                    if (!(e.halign || e.valign)) {
                        // Left-aligned baseline anchor: move to the approximate visual center
                        const r = ((e.rotation || 0) * Math.PI) / 180;
                        const dx = txt.length * hl * 0.3, dy = hl / 2;
                        local = { x: anchor.x + Math.cos(r) * dx - Math.sin(r) * dy, y: anchor.y + Math.sin(r) * dx + Math.cos(r) * dy };
                    }
                    const c = apply(m, local);
                    const rotation = textRotation(m, e.rotation);
                    texts.push({ x: c.x, y: c.y, text: txt, height: h, layer, rotation, ...(blockName ? { block: blockName } : {}) });
                    break;
                }
                case 'MTEXT': {
                    if (!e.position || !e.text) break;
                    const h = (e.height || 1) * scaleOf(m);
                    const txt = cleanMText(e.text);
                    const p = apply(m, e.position);
                    // attachment 1..9: TL TC TR ML MC MR BL BC BR (we nudge toward center)
                    const att = e.attachmentPoint || 1;
                    const col = (att - 1) % 3, row = Math.floor((att - 1) / 3);
                    const halfW = (txt.length * h * 0.3);
                    const dx = col === 0 ? halfW : col === 2 ? -halfW : 0;
                    const dy = row === 0 ? h / 2 : row === 2 ? -h / 2 : 0; // already y-down after FLIP
                    texts.push({ x: p.x + dx, y: p.y + dy, text: txt, height: h, layer, rotation: textRotation(m, e.rotation), ...(blockName ? { block: blockName } : {}) });
                    break;
                }
                case 'INSERT': {
                    const block = blocks[e.name];
                    if (!block || !block.entities) break;
                    const cols = Math.max(1, e.columnCount || 1), rows = Math.max(1, e.rowCount || 1);
                    for (let ci = 0; ci < cols; ci++) {
                        for (let ri = 0; ri < rows; ri++) {
                            const off = { ...e, position: { x: (e.position?.x || 0) + ci * (e.columnSpacing || 0), y: (e.position?.y || 0) + ri * (e.rowSpacing || 0) } };
                            const im = mult(m, insertMatrix(off, block));
                            const local = blockBounds(block, blocks);
                            const ext = blockExtent ?? (local ? Math.max(local.maxX - local.minX, local.maxY - local.minY) * scaleOf(im) : null);
                            if (local && depth === 0) {
                                const sx = Math.abs(off.xScale ?? 1), sy = Math.abs(off.yScale ?? 1);
                                // block bounds are in block coordinates; im already removes the base point
                                const c = apply(im, { x: (local.minX + local.maxX) / 2, y: (local.minY + local.maxY) / 2 });
                                inserts.push({
                                    name: e.name, layer,
                                    cx: c.x, cy: c.y,
                                    w: (local.maxX - local.minX) * sx * scaleOf(m),
                                    h: (local.maxY - local.minY) * sy * scaleOf(m),
                                    // CCW in y-up becomes clockwise on screen after the flip
                                    rotation: -(e.rotation || 0)
                                });
                            }
                            walk(block.entities, im, layer, depth + 1, ext, blockName ?? e.name);
                        }
                    }
                    break;
                }
                default:
                    break;
            }
        }
    }

    walk(entities, FLIP, null, 0, null);

    const unitsCode = dxf.header?.$INSUNITS;
    return {
        segments, arcs, texts, inserts,
        units: { feetPerUnit: INSUNITS_TO_FEET[unitsCode] || null, kind: 'cad' }
    };
}

/** Screen rotation (degrees, clockwise) of text drawn at `deg` (CCW, y-up) under matrix m. */
function textRotation(m, deg = 0) {
    const r = ((deg || 0) * Math.PI) / 180;
    const v = { x: m[0] * Math.cos(r) + m[2] * Math.sin(r), y: m[1] * Math.cos(r) + m[3] * Math.sin(r) };
    return Math.round((Math.atan2(v.y, v.x) * 180) / Math.PI * 10) / 10;
}

function curvePoints(e) {
    if (e.type === 'SPLINE') {
        const pts = (e.fitPoints && e.fitPoints.length > 1) ? e.fitPoints : (e.controlPoints || []);
        return pts.filter(Boolean);
    }
    // ELLIPSE: center, majorAxisEndPoint (relative), axisRatio, start/end parameters (radians)
    if (!e.center || !e.majorAxisEndPoint) return [];
    const a = e.majorAxisEndPoint, ratio = e.axisRatio || 1;
    const b = { x: -a.y * ratio, y: a.x * ratio };
    let t0 = e.startAngle ?? 0, t1 = e.endAngle ?? Math.PI * 2;
    while (t1 <= t0) t1 += Math.PI * 2;
    const n = Math.max(8, Math.ceil(((t1 - t0) / (Math.PI * 2)) * 48));
    const out = [];
    for (let i = 0; i <= n; i++) {
        const t = t0 + ((t1 - t0) * i) / n;
        out.push({ x: e.center.x + a.x * Math.cos(t) + b.x * Math.sin(t), y: e.center.y + a.y * Math.cos(t) + b.y * Math.sin(t) });
    }
    return out;
}

const boundsCache = new WeakMap();
function blockBounds(block, blocks, depth = 0) {
    if (boundsCache.has(block)) return boundsCache.get(block);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const addPt = (p) => { if (!p) return; minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); };
    for (const e of block.entities || []) {
        if (e.type === 'LINE' || e.type === 'LWPOLYLINE' || e.type === 'POLYLINE') (e.vertices || []).forEach(addPt);
        else if (e.type === 'ARC' || e.type === 'CIRCLE') { addPt({ x: e.center.x - e.radius, y: e.center.y - e.radius }); addPt({ x: e.center.x + e.radius, y: e.center.y + e.radius }); }
        else if (e.type === 'SOLID') (e.points || []).forEach(addPt);
        else if (e.type === 'INSERT' && depth < 6) {
            const b = blocks[e.name];
            const bb = b && blockBounds(b, blocks, depth + 1);
            if (bb) {
                const m = insertMatrix(e, b);
                [[bb.minX, bb.minY], [bb.maxX, bb.minY], [bb.minX, bb.maxY], [bb.maxX, bb.maxY]].forEach(([x, y]) => addPt(apply(m, { x, y })));
            }
        }
    }
    const out = isFinite(minX) ? { minX, minY, maxX, maxY } : null;
    boundsCache.set(block, out);
    return out;
}
