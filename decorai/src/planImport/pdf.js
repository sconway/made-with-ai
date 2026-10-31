// Reads the vector drawing on a PDF page (lines, fills, door arcs, text) into the
// primitives reconstruct.js expects. Units are PDF points, y pointing down.
// `pdfjsLib` is passed in so the browser and Node tests can each supply their own build.

const DRAW = { moveTo: 0, lineTo: 1, curveTo: 2, quadraticCurveTo: 3, closePath: 4 };

function mult(m, n) {
    return [
        m[0] * n[0] + m[2] * n[1], m[1] * n[0] + m[3] * n[1],
        m[0] * n[2] + m[2] * n[3], m[1] * n[2] + m[3] * n[3],
        m[0] * n[4] + m[2] * n[5] + m[4], m[1] * n[4] + m[3] * n[5] + m[5]
    ];
}
const apply = (m, x, y) => ({ x: m[0] * x + m[2] * y + m[4], y: m[1] * x + m[3] * y + m[5] });
const scaleOf = (m) => Math.sqrt(Math.abs(m[0] * m[3] - m[1] * m[2]));

/** If a cubic Bézier is (close to) a circular arc, return it. Points are already transformed. */
function cubicAsArc(p0, p1, p2, p3) {
    const t0 = { x: p1.x - p0.x, y: p1.y - p0.y }, t3 = { x: p3.x - p2.x, y: p3.y - p2.y };
    if (Math.hypot(t0.x, t0.y) < 1e-6 || Math.hypot(t3.x, t3.y) < 1e-6) return null;
    // center = intersection of the normals at both ends
    const n0 = { x: -t0.y, y: t0.x }, n3 = { x: -t3.y, y: t3.x };
    const den = n0.x * n3.y - n0.y * n3.x;
    if (Math.abs(den) < 1e-9) return null;
    const s = ((p3.x - p0.x) * n3.y - (p3.y - p0.y) * n3.x) / den;
    const c = { x: p0.x + n0.x * s, y: p0.y + n0.y * s };
    const r0 = Math.hypot(p0.x - c.x, p0.y - c.y), r3 = Math.hypot(p3.x - c.x, p3.y - c.y);
    const bz = (t) => {
        const u = 1 - t;
        return {
            x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
            y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y
        };
    };
    const mid = bz(0.5);
    const rm = Math.hypot(mid.x - c.x, mid.y - c.y);
    const r = (r0 + r3) / 2;
    if (!(r > 0) || Math.abs(r0 - r3) > 0.04 * r || Math.abs(rm - r) > 0.04 * r) return null;
    return { cx: c.x, cy: c.y, r, sx: p0.x, sy: p0.y, ex: p3.x, ey: p3.y, mx: mid.x, my: mid.y };
}

async function extractPage(pdfjsLib, page) {
    const { OPS } = pdfjsLib;
    const vp = page.getViewport({ scale: 1 });
    const opList = await page.getOperatorList();
    const segments = [], arcs = [], curves = [];
    let ctm = vp.transform.slice();
    let lineWidth = 1;
    let strokeColor = '#000000', fillColor = '#000000';
    const stack = [];
    const toHex = (c) => {
        if (typeof c === 'string') return c.toLowerCase();
        if (Array.isArray(c) || ArrayBuffer.isView(c)) {
            const v = Array.from(c).slice(0, 3).map(x => Math.round((x > 1 ? x / 255 : x) * 255));
            return '#' + v.map(x => x.toString(16).padStart(2, '0')).join('');
        }
        return null;
    };
    let images = 0;

    const STROKE = new Set([OPS.stroke, OPS.closeStroke]);
    const FILL = new Set([OPS.fill, OPS.eoFill]);
    const BOTH = new Set([OPS.fillStroke, OPS.eoFillStroke, OPS.closeFillStroke, OPS.closeEOFillStroke]);

    function emitPath(path, paintOp) {
        const stroked = STROKE.has(paintOp) || BOTH.has(paintOp);
        const filled = FILL.has(paintOp) || BOTH.has(paintOp);
        if (!stroked && !filled) return; // clipping paths, invisible
        const width = stroked ? Math.max(lineWidth, 0) * scaleOf(ctm) : 0;
        const extra = filled ? { filled: true, color: fillColor } : { color: strokeColor };
        if (width) extra.width = width;
        let cur = null, start = null;
        const line = (a, b) => {
            if (Math.hypot(b.x - a.x, b.y - a.y) < 1e-6) return;
            segments.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, ...extra });
        };
        for (let i = 0; i < path.length;) {
            const op = path[i++];
            if (op === DRAW.moveTo) {
                cur = start = apply(ctm, path[i], path[i + 1]); i += 2;
            } else if (op === DRAW.lineTo) {
                const p = apply(ctm, path[i], path[i + 1]); i += 2;
                if (cur) line(cur, p);
                cur = p;
            } else if (op === DRAW.curveTo) {
                const p1 = apply(ctm, path[i], path[i + 1]);
                const p2 = apply(ctm, path[i + 2], path[i + 3]);
                const p3 = apply(ctm, path[i + 4], path[i + 5]);
                i += 6;
                if (cur) {
                    const arc = cubicAsArc(cur, p1, p2, p3);
                    if (arc) arcs.push({ ...arc, color: stroked ? strokeColor : fillColor, width });
                    else if (stroked) {
                        // keep other curves (glyph-like shapes, round fixtures) so the kept drawing is complete
                        curves.push({ x0: cur.x, y0: cur.y, x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y, x3: p3.x, y3: p3.y, color: strokeColor, width });
                    }
                }
                cur = p3;
            } else if (op === DRAW.quadraticCurveTo) {
                cur = apply(ctm, path[i + 2], path[i + 3]); i += 4;
            } else if (op === DRAW.closePath) {
                if (cur && start) line(cur, start);
                cur = start;
            } else {
                break; // unknown encoding; stop rather than misread
            }
        }
    }

    const { fnArray, argsArray } = opList;
    for (let i = 0; i < fnArray.length; i++) {
        const fn = fnArray[i], args = argsArray[i];
        switch (fn) {
            case OPS.save: stack.push({ ctm, lineWidth, strokeColor, fillColor }); break;
            case OPS.restore: { const s = stack.pop(); if (s) ({ ctm, lineWidth, strokeColor, fillColor } = s); break; }
            case OPS.setStrokeRGBColor: strokeColor = toHex(args?.[0] ?? args) || strokeColor; break;
            case OPS.setFillRGBColor: fillColor = toHex(args?.[0] ?? args) || fillColor; break;
            case OPS.setStrokeTransparent: strokeColor = 'transparent'; break;
            case OPS.setFillTransparent: fillColor = 'transparent'; break;
            case OPS.transform: ctm = mult(ctm, args); break;
            case OPS.setLineWidth: lineWidth = args[0]; break;
            case OPS.paintFormXObjectBegin:
                stack.push({ ctm, lineWidth, strokeColor, fillColor });
                if (Array.isArray(args?.[0]) || ArrayBuffer.isView(args?.[0])) ctm = mult(ctm, Array.from(args[0]));
                break;
            case OPS.paintFormXObjectEnd: { const s = stack.pop(); if (s) ({ ctm, lineWidth, strokeColor, fillColor } = s); break; }
            case OPS.constructPath: {
                // pdf.js ≥ 5: args = [paintOp, [pathData], minMax]
                const [paintOp, data] = args;
                const path = Array.isArray(data) || ArrayBuffer.isView(data) ? (ArrayBuffer.isView(data) ? data : data[0]) : null;
                if (path && path.length) emitPath(path, paintOp);
                break;
            }
            case OPS.paintImageXObject:
            case OPS.paintInlineImageXObject:
            case OPS.paintImageMaskXObject:
            case OPS.paintImageXObjectRepeat:
                images++;
                break;
            default: break;
        }
    }

    const texts = [];
    const tc = await page.getTextContent();
    for (const it of tc.items || []) {
        const str = (it.str || '').trim();
        if (!str) continue;
        const [a, b, c, d, e, f] = it.transform;
        const size = Math.hypot(c, d) || it.height || 1;
        const dirLen = Math.hypot(a, b) || 1;
        const ux = a / dirLen, uy = b / dirLen, vx = c / (Math.hypot(c, d) || 1), vy = d / (Math.hypot(c, d) || 1);
        const w = it.width || str.length * size * 0.5;
        // visual center in PDF space, then into page space (y down)
        const cx = e + ux * w / 2 + vx * size * 0.35, cy = f + uy * w / 2 + vy * size * 0.35;
        const p = apply(vp.transform, cx, cy);
        texts.push({ x: p.x, y: p.y, text: str, height: size * scaleOf(vp.transform) });
    }

    return { segments, arcs, curves, texts, images, width: vp.width, height: vp.height };
}

/**
 * @param pdfjsLib  the pdf.js module
 * @param data      Uint8Array of the PDF file
 * @returns primitives + { page, pageCount }
 */
export async function pdfToPrimitives(pdfjsLib, data, { maxPages = 10 } = {}) {
    const task = pdfjsLib.getDocument({ data, isEvalSupported: false, disableFontFace: true, verbosity: 0 });
    const doc = await task.promise;
    try {
        let best = null, bestPage = 1, sawImages = false;
        const n = Math.min(doc.numPages, maxPages);
        for (let p = 1; p <= n; p++) {
            const page = await doc.getPage(p);
            const res = await extractPage(pdfjsLib, page);
            if (res.images) sawImages = true;
            if (!best || res.segments.length > best.segments.length) { best = res; bestPage = p; }
            page.cleanup();
        }
        if (!best || best.segments.length < 30) {
            const err = new Error(sawImages
                ? 'This PDF contains a scanned image rather than drawn lines, so it can’t be converted yet. Try exporting a vector PDF or DXF from your CAD app.'
                : 'No floor plan lines were found in this PDF.');
            err.code = sawImages ? 'raster-pdf' : 'empty-pdf';
            throw err;
        }
        return {
            segments: best.segments,
            arcs: best.arcs,
            curves: best.curves,
            texts: best.texts,
            inserts: [],
            units: { feetPerUnit: null, kind: 'pt' },
            page: bestPage,
            pageCount: doc.numPages
        };
    } finally {
        task.destroy();
    }
}
