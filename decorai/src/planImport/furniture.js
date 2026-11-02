// Turns pieces of the drawing that were labeled furniture into editor furniture items.
// Each catalog item is fitted into its piece's outline (a bed drawn with its nightstands keeps
// the bed's size, centered between them) and turned so its back faces the nearest wall.
import { matchFurniture } from './reconstruct.js';

// Catalog size (ft, as drawn in the editor: back along the top edge) and the range each side
// can have and still be that item. Wider pieces are trimmed back to the catalog size.
const CATALOG = {
    'sofa': { w: 7, h: 3, rw: [4.5, 10], rh: [2.2, 3.8] },
    'armchair': { w: 3, h: 3, rw: [2, 4], rh: [2, 4] },
    'coffee-table': { w: 4, h: 2, rw: [2, 6], rh: [1.3, 4], any: true },
    'floor-plant': { w: 1.5, h: 1.5, rw: [0.6, 3], rh: [0.6, 3], any: true },
    'tv-stand': { w: 5, h: 1.5, rw: [3, 9], rh: [1, 2.2] },
    'bookshelf': { w: 4, h: 1, rw: [2, 10], rh: [0.7, 2] },
    'queen-bed': { w: 5, h: 6.5, rw: [4.2, 5.6], rh: [6, 7.4] },
    'king-bed': { w: 6.5, h: 6.5, rw: [5.6, 7.2], rh: [6, 7.4] },
    'twin-bed': { w: 3.5, h: 6.5, rw: [2.8, 4.2], rh: [6, 7.4] },
    'nightstand': { w: 2, h: 2, rw: [1.2, 3], rh: [1.2, 2.5] },
    'dresser': { w: 5, h: 2, rw: [2.5, 7], rh: [1.3, 2.5] },
    'wardrobe': { w: 4, h: 2, rw: [2.5, 8], rh: [1.5, 2.8] },
    'dining-table': { w: 6, h: 3.5, rw: [3, 10], rh: [2.5, 5], any: true },
    'dining-chair': { w: 1.5, h: 1.5, rw: [1.1, 2.2], rh: [1.1, 2.2] },
    'buffet': { w: 5, h: 1.5, rw: [3, 8], rh: [1, 2.2] },
    'fridge': { w: 3, h: 3, rw: [2.2, 3.6], rh: [2.2, 3.4] },
    'stove': { w: 2.5, h: 2.5, rw: [1.8, 3.2], rh: [1.8, 2.8] },
    'sink-kitchen': { w: 3, h: 2, rw: [1.8, 4], rh: [1.3, 2.6] },
    'dishwasher': { w: 2, h: 2, rw: [1.6, 2.4], rh: [1.6, 2.6] },
    'counter': { w: 4, h: 2, rw: [1.5, 16], rh: [1.5, 3] },
    'toilet': { w: 1.5, h: 2.5, rw: [1.1, 2.2], rh: [1.7, 3] },
    'bathtub': { w: 2.5, h: 5, rw: [2, 3.6], rh: [4, 6.5] },
    'shower': { w: 3, h: 3, rw: [2.3, 6], rh: [2.3, 6] },
    'sink-bath': { w: 2, h: 1.5, rw: [1.2, 6], rh: [1.1, 2.5] },
    'towel-holder': { w: 1.5, h: 0.5, rw: [0.8, 3], rh: [0.1, 0.8] },
    'floor-mat': { w: 2, h: 3, rw: [1.5, 4], rh: [2, 5], any: true },
    'light-fixture': { w: 1, h: 1, rw: [0.4, 3], rh: [0.4, 3], any: true },
    'desk': { w: 5, h: 2.5, rw: [3, 8], rh: [1.8, 3.5] },
    'office-chair': { w: 2, h: 2, rw: [1.4, 3], rh: [1.4, 3] },
    'filing-cabinet': { w: 1.5, h: 2, rw: [1.1, 3], rh: [1.4, 3] }
};

export const FURNITURE_TYPE_IDS = Object.keys(CATALOG);

/** The catalog by room, for the review's type picker. */
export const FURNITURE_ROOMS = [
    ['Living room', ['sofa', 'armchair', 'coffee-table', 'tv-stand', 'bookshelf', 'floor-plant', 'floor-mat', 'light-fixture']],
    ['Bedroom', ['queen-bed', 'king-bed', 'twin-bed', 'nightstand', 'dresser', 'wardrobe']],
    ['Dining', ['dining-table', 'dining-chair', 'buffet']],
    ['Kitchen', ['fridge', 'stove', 'sink-kitchen', 'dishwasher', 'counter']],
    ['Bathroom', ['toilet', 'bathtub', 'shower', 'sink-bath', 'towel-holder']],
    ['Office', ['desk', 'office-chair', 'filing-cabinet']]
];

/** Whether a piece this size (ft) can become this item. */
export function fitsFurniture(typeId, wFt, hFt) {
    return !!placeFurniture(typeId, { minX: 0, minY: 0, maxX: wFt, maxY: hFt }, [], 1);
}

const NAMES = { fridge: 'Refrigerator', 'sink-kitchen': 'Kitchen Sink', 'sink-bath': 'Bathroom Sink', 'tv-stand': 'TV Stand' };
export function furnitureName(typeId) {
    return NAMES[typeId] || typeId.replace(/-/g, ' ').replace(/\b\w/g, ch => ch.toUpperCase());
}

/**
 * Best type for a piece labeled furniture without a type from the AI: a name written inside
 * it ("REF", "W/C"), else a bed by its size. Anything else stays as drawn.
 */
export function guessFurnitureType(piece, prims, k) {
    const b = piece.bbox;
    for (const t of prims.texts || []) {
        if (t.x < b.minX || t.x > b.maxX || t.y < b.minY || t.y > b.maxY) continue;
        const id = matchFurniture(String(t.text));
        if (id && CATALOG[id]) return id;
    }
    const w = (b.maxX - b.minX) * k, h = (b.maxY - b.minY) * k;
    const short = Math.min(w, h);
    // a bed, alone or between its nightstands: its sides are long straight lines the bed's length
    // (a table with chairs around it can be the same size, but its edges are shorter)
    const side = (alongX) => Math.max(0, ...piece.segments.map(i => {
        const s = prims.segments[i], dx = Math.abs(s.x2 - s.x1) * k, dy = Math.abs(s.y2 - s.y1) * k;
        return alongX ? (dy < dx * 0.05 ? dx : 0) : (dx < dy * 0.05 ? dy : 0);
    }));
    const len = [w, h].find(v => v >= 6.1 && v <= 7.4 && side(v === w) >= v * 0.85);
    if (len) {
        const across = w === len ? h : w;
        if (across >= 5.6 && across <= 7.2) return 'king-bed';
        if (across >= 4.2 && across <= 5.6) return 'queen-bed';
        if (across > 7.2 && across <= 12 && short >= 6.1) return 'queen-bed';
    }
    return null;
}

/**
 * Where the item goes, in editor px.
 * @param box   the piece's outline in editor px { minX, minY, maxX, maxY }
 * @param walls [{ x1, y1, x2, y2, t }] wall centerlines and thickness, editor px
 * @returns { x, y, width, height, rotation } or null when the piece can't be that item
 */
export function placeFurniture(typeId, box, walls, pxPerFoot) {
    const c = CATALOG[typeId];
    if (!c) return null;
    const P = pxPerFoot;
    const W = (box.maxX - box.minX) / P, H = (box.maxY - box.minY) / P;

    // fit one side: in range → as drawn; bigger → catalog size (it holds more than the item);
    // smaller → as drawn, but it's a worse match
    const fit = (len, nat, [lo, hi]) => {
        if (len >= lo && len <= hi) return { size: len, cost: Math.abs(Math.log(len / nat)) * 0.3, trimmed: false };
        if (len > hi) return { size: nat, cost: 0.25 + 0.15 * Math.log(len / hi), trimmed: true };
        return { size: Math.max(len, 0.3), cost: 0.6 + 2 * Math.log(lo / Math.max(len, 0.05)), trimmed: false };
    };
    // upright: the catalog's width runs along x; turned: along y
    const upright = { x: fit(W, c.w, c.rw), y: fit(H, c.h, c.rh), turned: false };
    const turned = { x: fit(W, c.h, c.rh), y: fit(H, c.w, c.rw), turned: true };
    const cost = (o) => o.x.cost + o.y.cost;
    const best = cost(turned) < cost(upright) - 0.01 ? turned : upright;
    if (cost(best) > 1.2) return null; // nothing like this item

    const sx = best.x.size * P, sy = best.y.size * P; // footprint on screen
    const cx = (box.minX + box.maxX) / 2, cy = (box.minY + box.maxY) / 2;
    // back toward the nearest wall: upright → top (0°) or bottom (180°); turned → right (90°) or left (270°)
    const options = best.turned || c.any ? (c.any ? [0, 90, 180, 270] : [90, 270]) : [0, 180];
    const sideOf = (rot) => rot === 0 ? [cx, cy - sy / 2] : rot === 180 ? [cx, cy + sy / 2] : rot === 90 ? [cx + sx / 2, cy] : [cx - sx / 2, cy];
    let rotation = options[0], bestD = Infinity;
    if (!c.any) {
        for (const rot of options) {
            const [px, py] = sideOf(rot);
            const d = wallDistance(px, py, walls);
            if (d < bestD - 0.5) { bestD = d; rotation = rot; }
        }
    } else {
        rotation = best.turned ? 90 : 0;
    }
    // trimmed toward the back: push it against that side of the piece (a counter along the wall)
    let x0 = cx - sx / 2, y0 = cy - sy / 2;
    if (rotation === 0 && best.y.trimmed) y0 = box.minY;
    if (rotation === 180 && best.y.trimmed) y0 = box.maxY - sy;
    if (rotation === 90 && best.x.trimmed) x0 = box.maxX - sx;
    if (rotation === 270 && best.x.trimmed) x0 = box.minX;
    // the item's own width/height are before rotation; it turns about its center
    const iw = rotation === 90 || rotation === 270 ? sy : sx;
    const ih = rotation === 90 || rotation === 270 ? sx : sy;
    const mx = x0 + sx / 2, my = y0 + sy / 2;
    return { x: mx - iw / 2, y: my - ih / 2, width: iw, height: ih, rotation };
}

function wallDistance(px, py, walls) {
    let best = Infinity;
    for (const w of walls) {
        const dx = w.x2 - w.x1, dy = w.y2 - w.y1, L2 = dx * dx + dy * dy;
        const t = L2 ? Math.max(0, Math.min(1, ((px - w.x1) * dx + (py - w.y1) * dy) / L2)) : 0;
        const d = Math.hypot(px - (w.x1 + dx * t), py - (w.y1 + dy * t)) - (w.t || 0) / 2;
        if (d < best) best = d;
    }
    return best;
}

/** Pieces drawn twice (a plant's fill and its outline, in two styles) become one. */
export function mergeOverlapping(pieces) {
    const area = (b) => Math.max(1e-9, (b.maxX - b.minX) * (b.maxY - b.minY));
    const out = [];
    for (const p of [...pieces].sort((a, b) => area(b.bbox) - area(a.bbox))) {
        const host = out.find(q => {
            const ix = Math.min(p.bbox.maxX, q.bbox.maxX) - Math.max(p.bbox.minX, q.bbox.minX);
            const iy = Math.min(p.bbox.maxY, q.bbox.maxY) - Math.max(p.bbox.minY, q.bbox.minY);
            // the same thing: mostly inside, about as big (a big piece mustn't swallow a small one)
            return ix > 0 && iy > 0 && (ix * iy) / area(p.bbox) > 0.6
                && (area(q.bbox) <= area(p.bbox) * 2.5 || (q.typeId && q.typeId === p.typeId));
        });
        if (!host) { out.push({ ...p, segments: [...p.segments], arcs: [...p.arcs], curves: [...p.curves] }); continue; }
        host.segments.push(...p.segments); host.arcs.push(...p.arcs); host.curves.push(...p.curves);
        host.typeId = host.typeId || p.typeId;
    }
    return out;
}
