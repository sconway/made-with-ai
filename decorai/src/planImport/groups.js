// Splits extracted drawing primitives into reviewable "layers" (Robin-style):
//   DXF  → one group per CAD layer, plus one per small block type (furniture, doors, windows)
//   PDF  → one group per drawing style (fill vs line, color, line weight)
//   text → one group per text layer (room names are picked per item)
// Each group gets a first-guess category from names + geometry; the vision model refines it.
import { classifyLayer, matchFurniture } from './reconstruct.js';

/** Categories a group can be reviewed as. */
export const CATEGORIES = [
    { id: 'wall', label: 'Walls' },
    { id: 'door', label: 'Doors' },
    { id: 'window', label: 'Windows' },
    { id: 'furniture', label: 'Furniture & fixtures' },
    { id: 'stairs', label: 'Stairs' },
    { id: 'detail', label: 'Other drawing detail' },
    { id: 'text', label: 'Text' },
    { id: 'annotation', label: 'Dimensions & notes' }
];
export const CATEGORY_IDS = CATEGORIES.map(c => c.id);

/** Categories hidden by default (noise like dimension strings, grids, title blocks). */
export const HIDDEN_BY_DEFAULT = new Set(['annotation']);

const SMALL_BLOCK_FT = 12;

function segLen(s) { return Math.hypot(s.x2 - s.x1, s.y2 - s.y1); }

/**
 * @param prims        primitives from dxf.js / pdf.js (source units, y down)
 * @param feetPerUnit  drawing scale
 * @param source       'dxf' | 'pdf'
 * @param wallSegments indices of segments the heuristic pass used as walls (optional)
 */
export function buildGroups(prims, feetPerUnit, source, wallSegments = [], stairs = []) {
    const k = feetPerUnit;
    const groups = new Map();
    const wallSet = new Set(wallSegments);
    // detected staircases get their own reviewable layer
    const stairSeg = new Set(stairs.flatMap(st => st.segments));

    const get = (key, init) => {
        if (!groups.has(key)) groups.set(key, { key, segments: [], arcs: [], curves: [], texts: [], lengthFt: 0, wallLengthFt: 0, filledLen: 0, widths: [], ...init() });
        return groups.get(key);
    };

    const geomKey = (p) => {
        if (source === 'dxf') {
            const small = p.block && p.blockExtent != null && p.blockExtent * k < SMALL_BLOCK_FT;
            if (small) return { key: `block:${p.block}`, init: () => ({ kind: 'block', name: p.block, layer: p.layer }) };
            const layer = p.layer || '0';
            return { key: `layer:${layer}`, init: () => ({ kind: 'layer', name: layer, layer }) };
        }
        const filled = !!p.filled;
        const color = p.color && p.color !== 'transparent' ? p.color : '#000000';
        const w = Math.round((p.width || 0) * 10) / 10;
        return {
            key: `style:${filled ? 'fill' : 'line'}:${color}:${filled ? '' : w}`,
            init: () => ({ kind: 'style', filled, color, lineWidth: w, name: filled ? `Filled shapes ${color}` : `Lines ${w}pt ${color}` })
        };
    };

    (prims.segments || []).forEach((s, i) => {
        const { key, init } = stairSeg.has(i)
            ? { key: 'detected:stairs', init: () => ({ kind: 'detected', name: `Stairs (detected) ×${stairs.length}`, stairs }) }
            : geomKey(s);
        const g = get(key, init);
        g.segments.push(i);
        const L = segLen(s) * k;
        g.lengthFt += L;
        if (wallSet.has(i)) g.wallLengthFt += L;
        if (s.filled) g.filledLen += L;
    });
    (prims.arcs || []).forEach((a, i) => {
        const { key, init } = geomKey(a);
        const g = get(key, init);
        g.arcs.push(i);
        g.lengthFt += (a.r || 0) * k * 1.5;
    });
    (prims.curves || []).forEach((c, i) => {
        const { key, init } = geomKey(c);
        get(key, init).curves.push(i);
    });
    (prims.texts || []).forEach((t, i) => {
        const layer = source === 'dxf' ? (t.layer || '0') : 'all';
        const g = get(`text:${layer}`, () => ({ kind: 'text', name: source === 'dxf' ? `Text · ${layer}` : 'Text', layer }));
        g.texts.push(i);
    });

    // block instance counts / sizes (DXF)
    const instances = new Map();
    for (const ins of prims.inserts || []) {
        const list = instances.get(ins.name) || [];
        list.push(ins);
        instances.set(ins.name, list);
    }

    const out = [...groups.values()]
        .filter(g => g.segments.length || g.arcs.length || g.curves.length || g.texts.length)
        // geometry first (longest first), text groups last
        .sort((a, b) => ((a.kind === 'text') - (b.kind === 'text')) || (b.lengthFt - a.lengthFt));

    out.forEach((g, i) => {
        g.id = `G${i + 1}`;
        if (g.kind === 'block') {
            const ins = instances.get(g.name) || [];
            g.instances = ins.length;
            if (ins.length) {
                g.sizeFt = { w: round1(ins[0].w * k), h: round1(ins[0].h * k) };
            }
        }
        g.sampleTexts = g.texts.slice(0, 8).map(ti => prims.texts[ti].text);
        g.lengthFt = round1(g.lengthFt);
        g.category = guessCategory(g, source);
        g.heuristicCategory = g.category;
        g.visible = !HIDDEN_BY_DEFAULT.has(g.category);
        g.aiCategory = null;
    });
    return out;
}

function round1(v) { return Math.round(v * 10) / 10; }

function guessCategory(g, source) {
    if (g.kind === 'text') {
        return /dim/i.test(g.layer || '') ? 'annotation' : 'text';
    }
    if (g.kind === 'detected') return 'stairs';
    const usedAsWalls = g.lengthFt > 0 && g.wallLengthFt / g.lengthFt > 0.3;
    if (g.kind === 'block') {
        const n = `${g.name} ${g.layer || ''}`;
        // furniture names first: "Réfrigérateur deux portes" is a fridge, not a door
        if (matchFurniture(g.name)) return 'furniture';
        if (/door|porte|t[uü]r|문/i.test(n)) return 'door';
        if (/window|wind|fen[eê]tre|fenster|창/i.test(g.name)) return 'window';
        if (/stair|escalier|treppe|계단/i.test(n)) return 'stairs';
        const role = classifyLayer(g.layer);
        if (role === 'door' || role === 'window') return role;
        return 'furniture';
    }
    if (g.kind === 'layer') {
        const role = classifyLayer(g.name);
        if (role === 'wall') return 'wall';
        if (role === 'door' || role === 'window') return role;
        if (role === 'furniture') return 'furniture';
        if (role === 'ignore') return /hatch|patt|hat\b/i.test(g.name) ? 'detail' : 'annotation';
        if (/stair|계단/i.test(g.name)) return 'stairs';
        return usedAsWalls ? 'wall' : 'detail';
    }
    // PDF style groups
    return usedAsWalls ? 'wall' : 'detail';
}

/** Map a reviewed category to the role reconstruct.js understands. */
export function categoryToRole(category) {
    switch (category) {
        case 'wall': return 'wall';
        case 'door': return 'door';
        case 'window': return 'window';
        case 'furniture': return 'furniture';
        case 'annotation': return 'ignore';
        case 'stairs': return 'stairs';
        default: return 'other';
    }
}

/** Compact description of each group for the vision model. */
export function describeGroupsForModel(groups) {
    return groups.map(g => ({
        id: g.id,
        name: g.name,
        kind: g.kind,
        lines: g.segments.length,
        arcs: g.arcs.length,
        texts: g.texts.length,
        total_length_ft: g.lengthFt,
        ...(g.kind === 'style' ? { filled: g.filled, line_weight_pt: g.lineWidth, color: g.color } : {}),
        ...(g.kind === 'block' ? { instances: g.instances || 0, block_size_ft: g.sizeFt || null } : {}),
        ...(g.sampleTexts.length ? { sample_texts: g.sampleTexts } : {}),
        heuristic_guess: g.category
    }));
}
