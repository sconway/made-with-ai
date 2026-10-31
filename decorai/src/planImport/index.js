// Floor plan import pipeline (DXF / vector PDF):
//   1. analyzePlanFile   — read the file, split it into reviewable layer groups, first guesses
//   2. classifyWithAI    — a vision model labels each group and picks room names (server)
//   3. buildFromReview   — rebuild walls/doors/windows/rooms from the confirmed groups and keep
//                          the rest of the drawing exactly as drawn, as a vector underlay
// Parsers load on demand so they don't weigh down the main bundle.

export function planFileKind(file) {
    const name = (file?.name || '').toLowerCase();
    if (name.endsWith('.dxf')) return 'dxf';
    if (name.endsWith('.dwg')) return 'dwg';
    if (name.endsWith('.pdf') || file?.type === 'application/pdf') return 'pdf';
    return null;
}

let pdfjsPromise = null;
async function loadPdfjs() {
    if (!pdfjsPromise) {
        pdfjsPromise = (async () => {
            const [lib, worker] = await Promise.all([
                import('pdfjs-dist/legacy/build/pdf.mjs'),
                import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url')
            ]);
            lib.GlobalWorkerOptions.workerSrc = worker.default;
            return lib;
        })();
    }
    return pdfjsPromise;
}

/** Step 1: read the file and propose layer groups. */
export async function analyzePlanFile(file) {
    const kind = planFileKind(file);
    if (kind === 'dwg') {
        const err = new Error('DWG files can’t be read directly yet. In your CAD app, use “Save As” → DXF and import that file.');
        err.code = 'dwg';
        throw err;
    }
    if (!kind) throw new Error('Unsupported file type.');

    let prims;
    if (kind === 'dxf') {
        const { parseDxfText } = await import('./dxf.js');
        prims = parseDxfText(await file.text());
    } else {
        const [pdfjs, { pdfToPrimitives }] = await Promise.all([loadPdfjs(), import('./pdf.js')]);
        prims = await pdfToPrimitives(pdfjs, new Uint8Array(await file.arrayBuffer()));
    }
    const [{ reconstructLayout, estimateScale, classifyLayer }, { buildGroups }, { detectStairs }, { splitIntoObjects }] = await Promise.all([import('./reconstruct.js'), import('./groups.js'), import('./stairs.js'), import('./objects.js')]);
    // Staircases first: their evenly spaced treads look like a run of walls otherwise
    const stairs = detectStairs(prims, estimateScale(prims).feetPerUnit);
    const stairSeg = new Set(stairs.flatMap(st => st.segments));
    const withStairs = { ...prims, segments: prims.segments.map((s, i) => (stairSeg.has(i) ? { ...s, role: 'stairs' } : s)) };
    // A heuristic pass gives the scale and tells us which lines look like walls
    const heuristic = reconstructLayout(withStairs);
    const feetPerUnit = heuristic.report.scale.feetPerUnit;
    const groups = buildGroups(prims, feetPerUnit, kind, heuristic.report.wallSegments, stairs);
    // Mixed layers (walls + doors + furniture + dimensions in one line style) are split into objects
    const objects = splitIntoObjects(prims, groups, feetPerUnit, heuristic.report.wallSegments, { classifyLayer });
    const roomLabels = (heuristic.report.labelCandidates || []).map(i => ({ index: i, name: prims.texts[i].text, source: 'heuristic' }));
    const warnings = [...heuristic.report.warnings];
    if (prims.pageCount > 1) warnings.push(`Imported page ${prims.page} of ${prims.pageCount}.`);
    return { kind, fileName: file.name, prims, groups, objects, roomLabels, scale: heuristic.report.scale, sizeFt: planSizeFt(prims, heuristic.report), warnings };
}

/**
 * Overall size the review shows (and lets the user correct), to the outside faces of the
 * walls like the overall dimensions on a drawing. Falls back to the whole drawing.
 */
function planSizeFt(prims, report) {
    const k = report.scale.feetPerUnit;
    const b = report.boundsFt;
    // faces of the walls that were kept (not of other drawings on the same sheet)
    const near = (x, y) => b && x * k >= b.minX - 1.5 && x * k <= b.maxX + 1.5 && y * k >= b.minY - 1.5 && y * k <= b.maxY + 1.5;
    const faces = (report.wallSegments || []).map(i => prims.segments[i]).filter(s => s && near(s.x1, s.y1) && near(s.x2, s.y2));
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const s of faces.length >= 4 ? faces : prims.segments) {
        minX = Math.min(minX, s.x1, s.x2); maxX = Math.max(maxX, s.x1, s.x2);
        minY = Math.min(minY, s.y1, s.y2); maxY = Math.max(maxY, s.y1, s.y2);
    }
    if (!isFinite(minX)) return null;
    return { w: Math.round((maxX - minX) * k * 10) / 10, h: Math.round((maxY - minY) * k * 10) / 10 };
}

/**
 * Rescale the import so the plan measures `feet` along `dim` ('w' or 'h'). Used when the
 * scale read from the drawing is wrong; the layout is rebuilt at the new scale.
 */
export function setPlanSize(analysis, dim, feet) {
    const base = analysis.sizeFt?.[dim];
    if (!(base > 0) || !(feet > 0)) return;
    const f = feet / base;
    analysis.scale = { feetPerUnit: analysis.scale.feetPerUnit * f, source: 'size you entered', confidence: 'high' };
    analysis.sizeFt = { w: Math.round(analysis.sizeFt.w * f * 10) / 10, h: Math.round(analysis.sizeFt.h * f * 10) / 10 };
}

/**
 * Step 2: ask the vision model. Updates analysis.groups[].category/aiCategory/aiConfidence/furnitureType
 * and analysis.roomLabels in place. Returns the raw server result.
 */
export async function classifyWithAI(analysis, { accessToken, signal } = {}) {
    const [{ renderPlanImages, renderObjectSheets }, { describeGroupsForModel, HIDDEN_BY_DEFAULT }, { objectsForAI, describeObjectsForModel }] = await Promise.all([import('./render.js'), import('./groups.js'), import('./objects.js')]);
    const k = analysis.scale.feetPerUnit;
    const { overview, sheets } = renderPlanImages(analysis.prims, analysis.groups);
    // up to 10 images in total: overview + layer sheets + object sheets
    const forAI = objectsForAI(analysis.objects || []);
    const objectSheets = forAI.length ? renderObjectSheets(analysis.prims, forAI, k, { maxSheets: 9 - sheets.length }) : [];
    const shownObjects = new Set(objectSheets.flatMap(s => s.ids));
    const objectList = forAI.filter(o => shownObjects.has(o.id));
    const texts = analysis.prims.texts.slice(0, 600).map((t, i) => ({ id: `T${i}`, text: t.text, ...(t.layer ? { layer: t.layer } : {}) }));
    const res = await fetch('/api/classify-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}) },
        body: JSON.stringify({
            overview,
            sheets,
            objectSheets,
            objects: describeObjectsForModel(objectList, analysis.prims, k),
            groups: describeGroupsForModel(analysis.groups).slice(0, 120),
            texts,
            source: analysis.kind
        }),
        signal
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || `AI layer review failed (${res.status})`);

    const byId = new Map(analysis.groups.map(g => [g.id, g]));
    for (const r of data.groups || []) {
        const g = byId.get(r.id);
        if (!g) continue;
        g.aiCategory = r.category;
        g.aiConfidence = r.confidence;
        g.furnitureType = r.furniture_type && r.furniture_type !== 'none' ? r.furniture_type : null;
        if (g.userSet) continue; // never overwrite a choice the user already made
        g.category = r.category;
        g.visible = !HIDDEN_BY_DEFAULT.has(r.category);
    }
    const objById = new Map((analysis.objects || []).map(o => [o.id, o]));
    for (const r of data.objects || []) {
        const o = objById.get(r.id);
        if (!o) continue;
        o.aiCategory = r.category;
        o.furnitureType = r.furniture_type && r.furniture_type !== 'none' ? r.furniture_type : null;
        if (o.userSet) continue;
        o.category = r.category;
    }
    if (Array.isArray(data.room_labels)) {
        analysis.roomLabels = data.room_labels
            .map(r => ({ index: Number(String(r.id).slice(1)), name: r.name, source: 'ai' }))
            .filter(r => Number.isInteger(r.index) && analysis.prims.texts[r.index]);
    }
    analysis.hiddenTexts = new Set((data.hidden_texts || []).map(id => Number(String(id).slice(1))).filter(Number.isInteger));
    analysis.aiNotes = data.notes || '';
    analysis.aiModel = data.model;
    return data;
}

/**
 * Step 3: build the editor layout from the reviewed groups.
 * @param options.convertFurniture  replace furniture blocks that match the catalog with editable items
 * @returns {{ state, report, underlay }} underlay = { dataUrl, x, y, width, height } in editor px, or null
 */
export async function buildFromReview(analysis, { pxPerFoot = 50, convertFurniture = true } = {}) {
    const [{ reconstructLayout, matchFurniture }, { categoryToRole }] = await Promise.all([import('./reconstruct.js'), import('./groups.js')]);
    const { prims, groups } = analysis;

    // Tag every primitive with what it was reviewed as: its object's label, else its layer's
    const segRole = new Array(prims.segments.length).fill('ignore');
    const arcRole = new Array(prims.arcs.length).fill('ignore');
    const arcUserSet = new Array(prims.arcs.length).fill(false); // labeled by the user, not a guess
    const textRole = new Array(prims.texts.length).fill('ignore');
    const groupOfSeg = new Array(prims.segments.length), groupOfArc = new Array(prims.arcs.length), groupOfCurve = new Array((prims.curves || []).length), groupOfText = new Array(prims.texts.length);
    const catSeg = new Array(prims.segments.length), catArc = new Array(prims.arcs.length), catCurve = new Array((prims.curves || []).length);
    for (const g of groups) {
        const role = g.visible ? categoryToRole(g.category) : 'ignore';
        g.segments.forEach(i => { segRole[i] = role; groupOfSeg[i] = g; catSeg[i] = g.category; });
        g.arcs.forEach(i => { arcRole[i] = role; groupOfArc[i] = g; catArc[i] = g.category; arcUserSet[i] = !!g.userSet; });
        (g.curves || []).forEach(i => { groupOfCurve[i] = g; catCurve[i] = g.category; });
        g.texts.forEach(i => { textRole[i] = role; groupOfText[i] = g; });
        for (const o of g.objects || []) {
            if (!o.category) continue;
            const oRole = g.visible ? categoryToRole(o.category) : 'ignore';
            o.segments.forEach(i => { segRole[i] = oRole; catSeg[i] = o.category; });
            o.arcs.forEach(i => { arcRole[i] = oRole; catArc[i] = o.category; arcUserSet[i] = !!o.userSet; });
            o.curves.forEach(i => { catCurve[i] = o.category; });
        }
    }
    const anyCat = (c) => catSeg.some((x, i) => x === c && groupOfSeg[i]?.visible) || catArc.some((x, i) => x === c && groupOfArc[i]?.visible);
    const tagged = {
        ...prims,
        segments: prims.segments.map((s, i) => ({ ...s, role: segRole[i] })),
        arcs: prims.arcs.map((a, i) => ({ ...a, role: arcRole[i], userSet: arcUserSet[i] })),
        texts: prims.texts.map((t, i) => ({ ...t, role: textRole[i] })),
        // keep the scale that was found on the full drawing
        units: { ...prims.units, feetPerUnit: analysis.scale.feetPerUnit }
    };

    // Furniture blocks → catalog items (only for visible furniture groups)
    const furnitureTypes = {};
    const convertedGroups = new Set();
    for (const g of groups) {
        if (g.kind !== 'block') continue;
        const isFurniture = g.visible && g.category === 'furniture' && convertFurniture;
        const type = isFurniture ? (g.furnitureType || undefined) : null;
        furnitureTypes[g.name] = type;
        if (isFurniture && (g.furnitureType || matchFurniture(g.name))) convertedGroups.add(g);
    }

    const result = reconstructLayout(tagged, {
        pxPerFoot,
        roomLabels: analysis.roomLabels.map(r => ({ index: r.index, name: r.name })),
        // doors/windows come from their reviewed layers rather than from gaps in the walls
        explicitRoles: anyCat('door') || anyCat('window'),
        furnitureTypes
    });
    const k = analysis.scale.feetPerUnit;
    const off = result.report.offsetFt || { x: 0, y: 0 };
    // Kept drawing: visible layers, minus converted furniture/stairs and anything labeled as noise
    const stairsConverted = result.report.stairs > 0;
    const keep = (g, cat) => !!g && g.visible && !convertedGroups.has(g) && cat !== 'annotation' && !(stairsConverted && cat === 'stairs');
    result.underlay = buildUnderlay(prims, {
        keepSeg: (i) => keep(groupOfSeg[i], catSeg[i]),
        keepArc: (i) => keep(groupOfArc[i], catArc[i]),
        keepCurve: (i) => keep(groupOfCurve[i], catCurve[i]),
        keepText: (i) => keep(groupOfText[i], groupOfText[i]?.category),
        roomLabelIdx: new Set(analysis.roomLabels.map(r => r.index)),
        hiddenTexts: analysis.hiddenTexts || defaultHiddenTexts(prims),
        toPx: (v, axis) => (v * k + (axis === 'x' ? off.x : off.y)) * pxPerFoot,
        corners: result.state.corners
    });
    return result;
}

/**
 * The kept drawing: every visible group except converted furniture, as one vector SVG,
 * positioned in editor pixels so it lines up with the rebuilt walls. Room names that became
 * room labels are left out (the editor shows them on the rooms instead).
 */
function buildUnderlay(prims, { keepSeg, keepArc, keepCurve, keepText, roomLabelIdx, hiddenTexts, toPx, corners }) {
    const X = (v) => toPx(v, 'x'), Y = (v) => toPx(v, 'y');
    // Crop to the rebuilt plan (+ margin) so other drawings on the same sheet don't come along
    let crop = null;
    if (corners && corners.length) {
        const xs = corners.map(c => c.x), ys = corners.map(c => c.y), m = 600; // 12 ft at 50 px/ft
        crop = { minX: Math.min(...xs) - m, minY: Math.min(...ys) - m, maxX: Math.max(...xs) + m, maxY: Math.max(...ys) + m };
    }
    const inCrop = (x, y) => !crop || (x >= crop.minX && x <= crop.maxX && y >= crop.minY && y <= crop.maxY);
    const r1 = (v) => Math.round(v * 10) / 10;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    const grow = (x, y) => { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y; };
    const lineD = [], fillD = [], textEls = [];

    prims.segments.forEach((s, i) => {
        if (!keepSeg(i)) return;
        const x1 = X(s.x1), y1 = Y(s.y1), x2 = X(s.x2), y2 = Y(s.y2);
        if (!inCrop(x1, y1) && !inCrop(x2, y2)) return;
        (s.filled ? fillD : lineD).push(`M${r1(x1)} ${r1(y1)}L${r1(x2)} ${r1(y2)}`);
        grow(x1, y1); grow(x2, y2);
    });
    prims.arcs.forEach((a, i) => {
        if (!keepArc(i)) return;
        const sx = X(a.sx), sy = Y(a.sy), ex = X(a.ex), ey = Y(a.ey), mx = X(a.mx), my = Y(a.my);
        if (!inCrop(sx, sy) && !inCrop(ex, ey)) return;
        const r = Math.abs(X(a.cx + a.r) - X(a.cx));
        // which way round: sign of the turn from start→mid→end
        const sweep = ((mx - sx) * (ey - sy) - (my - sy) * (ex - sx)) > 0 ? 1 : 0;
        const chord = Math.hypot(ex - sx, ey - sy);
        const large = Math.hypot(mx - (sx + ex) / 2, my - (sy + ey) / 2) > r ? 1 : 0;
        if (chord < 0.01) return;
        lineD.push(`M${r1(sx)} ${r1(sy)}A${r1(r)} ${r1(r)} 0 ${large} ${sweep} ${r1(ex)} ${r1(ey)}`);
        grow(sx, sy); grow(ex, ey); grow(mx, my);
    });
    (prims.curves || []).forEach((c, i) => {
        if (!keepCurve(i)) return;
        if (!inCrop(X(c.x0), Y(c.y0))) return;
        lineD.push(`M${r1(X(c.x0))} ${r1(Y(c.y0))}C${r1(X(c.x1))} ${r1(Y(c.y1))} ${r1(X(c.x2))} ${r1(Y(c.y2))} ${r1(X(c.x3))} ${r1(Y(c.y3))}`);
        grow(X(c.x0), Y(c.y0)); grow(X(c.x3), Y(c.y3));
    });
    prims.texts.forEach((t, i) => {
        if (!keepText(i) || roomLabelIdx.has(i) || hiddenTexts.has(i)) return;
        const x = X(t.x), y = Y(t.y);
        if (!inCrop(x, y)) return;
        const size = Math.max(4, Math.abs(Y(t.y + (t.height || 0)) - y));
        const rot = t.rotation ? ` transform="rotate(${t.rotation} ${r1(x)} ${r1(y)})"` : '';
        textEls.push(`<text x="${r1(x)}" y="${r1(y)}" font-size="${r1(size)}"${rot}>${escapeXml(t.text)}</text>`);
        grow(x, y);
    });
    if (!isFinite(minX)) return null;
    const pad = 10;
    minX -= pad; minY -= pad; maxX += pad; maxY += pad;
    const w = maxX - minX, h = maxY - minY;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r1(minX)} ${r1(minY)} ${r1(w)} ${r1(h)}" width="${r1(w)}" height="${r1(h)}">`
        + (fillD.length ? `<path d="${fillD.join('')}" fill="none" stroke="#8a8f98" stroke-width="1.2" stroke-linecap="round"/>` : '')
        + (lineD.length ? `<path d="${lineD.join('')}" fill="none" stroke="#4b5058" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>` : '')
        + (textEls.length ? `<g font-family="sans-serif" fill="#4b5058" text-anchor="middle" dominant-baseline="middle">${textEls.join('')}</g>` : '')
        + '</svg>';
    return {
        dataUrl: 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg),
        x: minX, y: minY, width: w, height: h
    };
}

/** Without the AI review: hide texts that are plainly dimension values or numbers. */
function defaultHiddenTexts(prims) {
    const out = new Set();
    prims.texts.forEach((t, i) => {
        const s = String(t.text).trim();
        if (/^[\d\s.,'"’”x×\-+/:%Ø∅]+$/.test(s) || /^\d+(\.\d+)?\s*(mm|cm|m)$/i.test(s)) out.add(i);
    });
    return out;
}

function escapeXml(s) {
    return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
}
