// 3D guide for "Render a room": the whole floor is modeled (walls with their real thickness,
// door and window openings, floors, ceilings, furniture in every room) and the camera stands
// inside ONE room. Neighboring rooms show through doorways, windows read as daylight, and the
// image model gets an accurate blockout of the room to turn into a photograph.
import * as THREE from 'three';

const CEILING_FT = 8.5;
const DOOR_HEAD_FT = 6.8;
const SILL_FT = 2.8, WINDOW_HEAD_FT = 7.0;
// Camera: level at about chest height, like real-estate photos (no tilt, so walls stay upright),
// with a wide lens so the shot takes in as much of the room as possible
const EYE_FT = 4.75;
const MIN_FOV = 75, MAX_FOV = 100; // horizontal, degrees (100° is about a 15 mm lens)
const CLEAR_FT = 0.6;              // gap between the camera and the wall face behind it
export const GUIDE_W = 1152, GUIDE_H = 768; // 3:2, renders come back landscape

const FURNITURE_LABELS = {
    sofa: 'sofa', armchair: 'armchair', 'coffee-table': 'coffee table', 'floor-plant': 'floor plant', 'tv-stand': 'TV stand',
    bookshelf: 'bookshelf', 'queen-bed': 'queen bed', 'king-bed': 'king bed', 'twin-bed': 'twin bed', nightstand: 'nightstand',
    dresser: 'dresser', wardrobe: 'wardrobe', 'dining-table': 'dining table', 'dining-chair': 'dining chair', buffet: 'sideboard',
    fridge: 'refrigerator', stove: 'stove', 'sink-kitchen': 'kitchen sink', dishwasher: 'dishwasher', counter: 'counter',
    toilet: 'toilet', bathtub: 'bathtub', shower: 'shower', 'sink-bath': 'bathroom sink', 'towel-holder': 'towel rail',
    'floor-mat': 'rug', 'light-fixture': 'lamp', desk: 'desk', 'office-chair': 'desk chair', 'filing-cabinet': 'filing cabinet',
    stairs: 'staircase'
};

export function furnitureLabel(typeId) { return FURNITURE_LABELS[typeId] || String(typeId).replace(/-/g, ' '); }

function furnitureColor(typeId) {
    const beds = ['queen-bed', 'king-bed', 'twin-bed'];
    const seating = ['sofa', 'armchair', 'dining-chair', 'office-chair'];
    const wood = ['coffee-table', 'dining-table', 'desk', 'counter', 'buffet', 'nightstand', 'tv-stand'];
    const storage = ['wardrobe', 'dresser', 'bookshelf', 'fridge', 'filing-cabinet', 'dishwasher'];
    const fixtures = ['toilet', 'bathtub', 'shower', 'sink-bath', 'sink-kitchen', 'stove'];
    if (beds.includes(typeId)) return 0xd8cdbf;
    if (seating.includes(typeId)) return 0x8a94a6;
    if (wood.includes(typeId)) return 0x9c7a55;
    if (storage.includes(typeId)) return 0x6f7480;
    if (fixtures.includes(typeId)) return 0xe8eaed;
    if (typeId === 'floor-plant') return 0x5f7d52;
    if (typeId === 'stairs') return 0xc9b9a3;
    return 0xa7adb8;
}

function furnitureHeight(typeId) {
    const h = {
        wardrobe: 6, fridge: 5.8, bookshelf: 6, 'tv-stand': 1.8, dresser: 3, 'filing-cabinet': 4, 'coffee-table': 1.4,
        'floor-mat': 0.05, 'floor-plant': 4, toilet: 2.5, bathtub: 1.8, shower: 6.5, 'queen-bed': 2, 'king-bed': 2,
        'twin-bed': 2, nightstand: 2, sofa: 2.6, armchair: 2.6, 'dining-table': 2.5, 'dining-chair': 3, desk: 2.5,
        'office-chair': 3, counter: 3, stove: 3, 'sink-kitchen': 3, dishwasher: 3, buffet: 3, 'sink-bath': 2.8,
        'light-fixture': 5, 'towel-holder': 3
    };
    return h[typeId] ?? 2.5;
}

// ── plan helpers (all in feet, plan coordinates: x right, y down) ──────────────

export function pointInPolygon(x, y, pts) {
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const xi = pts[i].x, yi = pts[i].y, xj = pts[j].x, yj = pts[j].y;
        if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
}

function distToSegment(p, a, b) {
    const dx = b.x - a.x, dy = b.y - a.y, L2 = dx * dx + dy * dy;
    const t = L2 ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / L2)) : 0;
    return Math.hypot(p.x - (a.x + dx * t), p.y - (a.y + dy * t));
}

function onBoundary(p, poly, tol) {
    for (let i = 0; i < poly.length; i++) if (distToSegment(p, poly[i], poly[(i + 1) % poly.length]) <= tol) return true;
    return false;
}

function centroid(pts) {
    // area-weighted centroid (falls back to vertex mean for degenerate shapes)
    let a = 0, cx = 0, cy = 0;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const f = pts[j].x * pts[i].y - pts[i].x * pts[j].y;
        a += f; cx += (pts[j].x + pts[i].x) * f; cy += (pts[j].y + pts[i].y) * f;
    }
    if (Math.abs(a) < 1e-6) return { x: pts.reduce((s, p) => s + p.x, 0) / pts.length, y: pts.reduce((s, p) => s + p.y, 0) / pts.length };
    return { x: cx / (3 * a), y: cy / (3 * a) };
}

/** Openings as plan points: { type, center, along (unit), width, wall } */
function openingsOf(wall) {
    const dx = wall.b.x - wall.a.x, dy = wall.b.y - wall.a.y, L = Math.hypot(dx, dy) || 1;
    const u = { x: dx / L, y: dy / L };
    return (wall.openings || []).map(o => ({
        type: o.type, width: o.width, u, wall,
        center: { x: wall.a.x + dx * o.position, y: wall.a.y + dy * o.position }
    }));
}

/**
 * Facts about one room for the prompt and the dialog.
 * plan = { rooms: [{ id, name, points }], walls: [{ a, b, thickness, openings }], furniture: [{ typeId, cx, cy, w, h, rotation }] } (feet)
 */
export function describeRoom(plan, room) {
    const xs = room.points.map(p => p.x), ys = room.points.map(p => p.y);
    const widthFt = Math.max(...xs) - Math.min(...xs), depthFt = Math.max(...ys) - Math.min(...ys);
    const doors = [], windows = [];
    for (const wall of plan.walls) {
        for (const o of openingsOf(wall)) {
            if (!onBoundary(o.center, room.points, wall.thickness / 2 + 0.4)) continue;
            if (o.type === 'window') { windows.push(o); continue; }
            // which room is on the other side of the door?
            const n = { x: -o.u.y, y: o.u.x };
            let beyond = null;
            for (const s of [1, -1]) {
                const p = { x: o.center.x + n.x * s * 2, y: o.center.y + n.y * s * 2 };
                if (pointInPolygon(p.x, p.y, room.points)) continue;
                beyond = plan.rooms.find(r => r !== room && pointInPolygon(p.x, p.y, r.points)) || null;
                break;
            }
            doors.push({ ...o, beyond });
        }
    }
    const items = plan.furniture.filter(f => pointInPolygon(f.cx, f.cy, room.points));
    const counts = {};
    for (const f of items) counts[furnitureLabel(f.typeId)] = (counts[furnitureLabel(f.typeId)] || 0) + 1;
    return { widthFt, depthFt, areaFt: polygonArea(room.points), doors, windows, furniture: counts };
}

function polygonArea(pts) {
    let a = 0;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) a += pts[j].x * pts[i].y - pts[i].x * pts[j].y;
    return Math.abs(a / 2);
}

const compass = (dx, dy) => `${dy < 0 ? 'north' : 'south'}-${dx < 0 ? 'west' : 'east'}`; // plan up = north

/**
 * Camera positions worth offering for a room: from each doorway, then from the corners.
 * Each stands as far back as it can (in the doorway, or tucked into the corner) and gets the
 * aim and lens width that take in the most of the room.
 * @returns [{ id, kind, pos, look, fov, label }] fov = horizontal degrees
 */
export function viewpointsFor(plan, room) {
    const facts = describeRoom(plan, room);
    const views = [];
    // from `from`, step along `dir` until the camera isn't standing in furniture (up to 3 ft more)
    const clearSpot = (from, dir, back) => {
        for (let d = back; d <= back + 3; d += 0.25) {
            const pos = { x: from.x + dir.x * d, y: from.y + dir.y * d };
            if (!pointInPolygon(pos.x, pos.y, room.points)) return null;
            if (!insideFurniture(plan, pos)) return pos;
        }
        return null;
    };
    for (const d of facts.doors) {
        if (views.length >= 3) break; // leave room for corner views
        const n = { x: -d.u.y, y: d.u.x };
        const inward = pointInPolygon(d.center.x + n.x * 1.5, d.center.y + n.y * 1.5, room.points) ? 1 : -1;
        const fwd = { x: n.x * inward, y: n.y * inward };
        // in the doorway itself: the jambs stay out of the wide shot
        const pos = clearSpot(d.center, fwd, 0.05);
        if (!pos) continue;
        // the two leaves of a double door are one doorway
        if (views.some(v => Math.hypot(v.pos.x - pos.x, v.pos.y - pos.y) < 4)) continue;
        const label = d.beyond?.name ? `From the ${d.beyond.name} doorway`
            : d.beyond ? 'From the doorway' : 'From the entrance';
        if (views.some(v => v.label === label)) continue;
        views.push({ id: `door-${views.length}`, kind: 'door', pos, ...frameView(room, pos, fwd), label });
    }
    // convex corners, widest first
    const c = centroid(room.points);
    const corners = [];
    const n = room.points.length;
    const sign = Math.sign(signedArea(room.points));
    for (let i = 0; i < n; i++) {
        const p = room.points[i], prev = room.points[(i - 1 + n) % n], next = room.points[(i + 1) % n];
        const cross = (p.x - prev.x) * (next.y - p.y) - (p.y - prev.y) * (next.x - p.x);
        if (Math.sign(cross) !== sign) continue; // reflex corner
        const unit = (q) => { const L = Math.hypot(q.x - p.x, q.y - p.y) || 1; return { x: (q.x - p.x) / L, y: (q.y - p.y) / L }; };
        const e1 = unit(prev), e2 = unit(next);
        const bl = Math.hypot(e1.x + e2.x, e1.y + e2.y);
        if (bl < 1e-3) continue;
        const bis = { x: (e1.x + e2.x) / bl, y: (e1.y + e2.y) / bl };
        // back into the corner: just clear of both wall faces
        const sinHalf = Math.abs(e1.x * bis.y - e1.y * bis.x) || 1;
        const back = Math.min((wallHalfThickness(plan, p) + CLEAR_FT) / sinHalf, 4);
        const pos = clearSpot(p, bis, back);
        if (!pos) continue;
        corners.push({ id: `corner-${i}`, kind: 'corner', pos, ...frameView(room, pos, bis), dist: Math.hypot(c.x - p.x, c.y - p.y), label: `From the ${compass(p.x - c.x, p.y - c.y)} corner` });
    }
    corners.sort((a, b) => b.dist - a.dist);
    const seen = new Set(views.map(v => v.label));
    for (const v of corners) { if (!seen.has(v.label)) { seen.add(v.label); views.push(v); } }
    return views.slice(0, 6);
}

/**
 * Aim and lens for a camera at `pos` facing roughly `fwd`: wide enough to take in the room's
 * walls (up to MAX_FOV), centered on them. The walls right beside the camera don't count.
 */
function frameView(room, pos, fwd) {
    const base = Math.atan2(fwd.y, fwd.x);
    const limit = (85 * Math.PI) / 180;
    let lo = Infinity, hi = -Infinity;
    const pts = room.points;
    for (let i = 0; i < pts.length; i++) {
        const a = pts[i], b = pts[(i + 1) % pts.length];
        const steps = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / 0.5));
        for (let k = 0; k <= steps; k++) {
            const x = a.x + ((b.x - a.x) * k) / steps, y = a.y + ((b.y - a.y) * k) / steps;
            if (Math.hypot(x - pos.x, y - pos.y) < 4) continue;
            let ang = Math.atan2(y - pos.y, x - pos.x) - base;
            ang = Math.atan2(Math.sin(ang), Math.cos(ang));
            if (Math.abs(ang) > limit) continue;
            lo = Math.min(lo, ang); hi = Math.max(hi, ang);
        }
    }
    const deg = (r) => (r * 180) / Math.PI;
    if (!isFinite(lo)) return { look: { x: pos.x + fwd.x * 10, y: pos.y + fwd.y * 10 }, fov: MAX_FOV };
    const fov = Math.min(MAX_FOV, Math.max(MIN_FOV, deg(hi - lo) + 6));
    const aim = base + (lo + hi) / 2;
    return { look: { x: pos.x + Math.cos(aim) * 10, y: pos.y + Math.sin(aim) * 10 }, fov: Math.round(fov) };
}

/** Half the thickness of the wall nearest a point (feet). */
function wallHalfThickness(plan, p) {
    let best = Infinity, half = 0.25;
    for (const w of plan.walls) {
        const d = distToSegment(p, w.a, w.b);
        if (d < best) { best = d; half = (w.thickness || 0.5) / 2; }
    }
    return half;
}

/** Whether a camera here would stand in furniture (a wardrobe or a plant in the corner). Rugs don't count. */
function insideFurniture(plan, p) {
    return plan.furniture.some(f => {
        if (f.typeId === 'floor-mat') return false;
        const r = ((f.rotation || 0) * Math.PI) / 180, dx = p.x - f.cx, dy = p.y - f.cy;
        const lx = dx * Math.cos(r) + dy * Math.sin(r), ly = -dx * Math.sin(r) + dy * Math.cos(r);
        return Math.abs(lx) <= f.w / 2 + 0.3 && Math.abs(ly) <= f.h / 2 + 0.3;
    });
}

function signedArea(pts) {
    let a = 0;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) a += pts[j].x * pts[i].y - pts[i].x * pts[j].y;
    return a / 2;
}

// ── scene ─────────────────────────────────────────────────────────────────────

/** Render the guide for `room` seen from `view`. Returns a PNG data URL (GUIDE_W × GUIDE_H). */
export function renderGuide(plan, room, view) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdde6ee); // daylight outside the windows
    const disposables = [];
    const mat = (color, extra = {}) => { const m = new THREE.MeshStandardMaterial({ color, roughness: 0.92, ...extra }); disposables.push(m); return m; };
    const wallMat = mat(0xece7dd, { side: THREE.DoubleSide });
    const glassMat = mat(0xf4f8fb, { emissive: 0xe9f1f7, emissiveIntensity: 0.9, roughness: 0.2 });
    const frameMat = mat(0xffffff);

    // A box between two plan points, from y0 to y1 (feet). World: X = plan x, Z = -plan y.
    const slab = (p, q, y0, y1, thick, material) => {
        const dx = q.x - p.x, dz = -(q.y - p.y), len = Math.hypot(dx, dz);
        if (len < 0.02 || y1 - y0 < 0.01) return;
        const geo = new THREE.BoxGeometry(len, y1 - y0, thick);
        disposables.push(geo);
        const mesh = new THREE.Mesh(geo, material);
        mesh.position.set((p.x + q.x) / 2, (y0 + y1) / 2, -(p.y + q.y) / 2);
        mesh.rotation.y = Math.atan2(-dz, dx);
        scene.add(mesh);
    };

    // Walls with door and window openings cut out
    for (const wall of plan.walls) {
        const dx = wall.b.x - wall.a.x, dy = wall.b.y - wall.a.y, L = Math.hypot(dx, dy);
        if (L < 0.05) continue;
        const at = (t) => ({ x: wall.a.x + (dx / L) * t, y: wall.a.y + (dy / L) * t });
        const t = Math.max(0.25, wall.thickness);
        const ops = (wall.openings || []).map(o => ({ ...o, s: Math.max(0, o.position * L - o.width / 2), e: Math.min(L, o.position * L + o.width / 2) }))
            .filter(o => o.e > o.s).sort((a, b) => a.s - b.s);
        let cursor = 0;
        for (const o of ops) {
            if (o.s > cursor) slab(at(cursor), at(o.s), 0, CEILING_FT, t, wallMat);
            if (o.type === 'window') {
                slab(at(o.s), at(o.e), 0, SILL_FT, t, wallMat);
                slab(at(o.s), at(o.e), WINDOW_HEAD_FT, CEILING_FT, t, wallMat);
                slab(at(o.s), at(o.e), SILL_FT, WINDOW_HEAD_FT, 0.06, glassMat);
                // mullion + sill trim so it reads as a window, not a hole
                const mid = (o.s + o.e) / 2;
                slab(at(mid - 0.04), at(mid + 0.04), SILL_FT, WINDOW_HEAD_FT, t * 0.6, frameMat);
                slab(at(o.s), at(o.e), SILL_FT - 0.08, SILL_FT, t + 0.15, frameMat);
            } else {
                slab(at(o.s), at(o.e), DOOR_HEAD_FT, CEILING_FT, t, wallMat);
            }
            cursor = Math.max(cursor, o.e);
        }
        if (cursor < L) slab(at(cursor), at(L), 0, CEILING_FT, t, wallMat);
    }

    // Floors and ceilings for every room; the chosen room gets the warmer floor
    for (const r of plan.rooms) {
        const shape = new THREE.Shape();
        shape.moveTo(r.points[0].x, r.points[0].y);
        for (let i = 1; i < r.points.length; i++) shape.lineTo(r.points[i].x, r.points[i].y);
        shape.closePath();
        const floorGeo = new THREE.ShapeGeometry(shape);
        floorGeo.rotateX(-Math.PI / 2); // (x, y, 0) → (x, 0, -y): plan y → world -z, like the walls
        const ceilGeo = floorGeo.clone();
        ceilGeo.translate(0, CEILING_FT, 0);
        disposables.push(floorGeo, ceilGeo);
        scene.add(new THREE.Mesh(floorGeo, mat(r === room ? 0xb89576 : 0xc4a888, { side: THREE.DoubleSide })));
        scene.add(new THREE.Mesh(ceilGeo, mat(0xf5f3ef, { side: THREE.DoubleSide })));
    }

    // Furniture in every room (stairs as real steps)
    for (const f of plan.furniture) {
        const rot = -(f.rotation || 0) * Math.PI / 180;
        if (f.typeId === 'stairs') {
            const run = Math.max(f.w, f.h), width = Math.min(f.w, f.h), alongX = f.w >= f.h;
            const steps = Math.max(4, Math.round(run / (11 / 12)));
            const group = new THREE.Group();
            for (let i = 0; i < steps; i++) {
                const h = ((i + 1) / steps) * CEILING_FT * 0.95;
                const depth = run / steps;
                const geo = new THREE.BoxGeometry(alongX ? depth : width, h, alongX ? width : depth);
                disposables.push(geo);
                const m = new THREE.Mesh(geo, mat(furnitureColor('stairs')));
                const off = -run / 2 + depth * (i + 0.5);
                m.position.set(alongX ? off : 0, h / 2, alongX ? 0 : off);
                group.add(m);
            }
            group.position.set(f.cx, 0, -f.cy);
            group.rotation.y = rot;
            scene.add(group);
            continue;
        }
        const h = furnitureHeight(f.typeId);
        const geo = new THREE.BoxGeometry(Math.max(f.w, 0.2), h, Math.max(f.h, 0.2));
        disposables.push(geo);
        const m = new THREE.Mesh(geo, mat(furnitureColor(f.typeId)));
        m.position.set(f.cx, h / 2, -f.cy);
        m.rotation.y = rot;
        scene.add(m);
    }

    // Light: soft sky fill, daylight through the windows, a ceiling light in the chosen room
    scene.add(new THREE.HemisphereLight(0xffffff, 0xb7b2a8, 1.35));
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const sun = new THREE.DirectionalLight(0xfff4e2, 0.55);
    sun.position.set(40, 60, 30);
    scene.add(sun);
    const c = centroid(room.points);
    const lamp = new THREE.PointLight(0xfff2e0, 2.2, 0, 1.2);
    lamp.position.set(c.x, CEILING_FT - 1, -c.y);
    scene.add(lamp);

    // three.js takes the vertical angle; views carry the horizontal one
    const hfov = ((view.fov || 84) * Math.PI) / 180;
    const vfov = (2 * Math.atan(Math.tan(hfov / 2) / (GUIDE_W / GUIDE_H)) * 180) / Math.PI;
    const camera = new THREE.PerspectiveCamera(vfov, GUIDE_W / GUIDE_H, 0.05, 400);
    camera.position.set(view.pos.x, EYE_FT, -view.pos.y);
    camera.lookAt(view.look.x, EYE_FT, -view.look.y); // level

    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(GUIDE_W, GUIDE_H);
    renderer.setPixelRatio(1);
    renderer.render(scene, camera);

    // Plan y runs down while world z runs away from the viewer, which mirrors left/right.
    // Flip the image so the room reads the same way round as the plan.
    const out = document.createElement('canvas');
    out.width = GUIDE_W; out.height = GUIDE_H;
    const ctx = out.getContext('2d');
    ctx.translate(GUIDE_W, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(renderer.domElement, 0, 0);
    const dataUrl = out.toDataURL('image/png');

    disposables.forEach(d => d.dispose && d.dispose());
    renderer.dispose();
    renderer.forceContextLoss && renderer.forceContextLoss();
    return dataUrl;
}

/** Plain-language brief of the room for the image model. */
export function roomBrief(plan, room, view) {
    const f = describeRoom(plan, room);
    const ft = (v) => `${Math.round(v)} ft`;
    const parts = [`${room.name ? `${room.name}, ` : ''}about ${Math.round(f.areaFt)} sq ft (${ft(f.widthFt)} by ${ft(f.depthFt)}) with an 8.5 ft ceiling`];
    if (f.windows.length) parts.push(`${f.windows.length} window${f.windows.length === 1 ? '' : 's'}`);
    const named = f.doors.map(d => d.beyond?.name).filter(Boolean);
    if (f.doors.length) parts.push(`${f.doors.length} doorway${f.doors.length === 1 ? '' : 's'}${named.length ? ` leading to the ${[...new Set(named)].join(', the ')}` : ''}`);
    const items = Object.entries(f.furniture).map(([k, n]) => (n > 1 ? `${n} ${k}s` : `a ${k}`));
    if (items.length) parts.push(`furnished with ${items.join(', ')}`);
    return `${parts.join('; ')}. The photo is taken ${view.label.replace(/^From/, 'from').toLowerCase()}.`;
}

/** A sensible name for a room nobody named, from what's in it. */
export function inferRoomName(plan, room) {
    const has = (...ids) => plan.furniture.some(f => ids.includes(f.typeId) && pointInPolygon(f.cx, f.cy, room.points));
    if (has('toilet', 'bathtub', 'shower', 'sink-bath')) return 'Bathroom';
    if (has('stove', 'fridge', 'sink-kitchen', 'dishwasher')) return 'Kitchen';
    if (has('queen-bed', 'king-bed', 'twin-bed')) return 'Bedroom';
    if (has('dining-table')) return 'Dining room';
    if (has('sofa', 'armchair', 'tv-stand', 'coffee-table')) return 'Living room';
    if (has('desk', 'office-chair', 'filing-cabinet')) return 'Office';
    if (has('stairs')) return 'Stair hall';
    return '';
}
