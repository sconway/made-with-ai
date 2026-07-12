// Woodworking 3D Editor — isolated module.
// Owns its DOM (within #woodworking-editor-screen), Three.js scene, state, persistence.
//
// Persistence requires a Supabase table. Run this migration once in the Supabase SQL editor:
//   create table public.user_woodworking_projects (
//     id uuid primary key default gen_random_uuid(),
//     user_id uuid not null references auth.users(id) on delete cascade,
//     name text not null default 'Untitled project',
//     state jsonb not null,
//     updated_at timestamptz not null default now()
//   );
//   create index user_woodworking_projects_user_id_idx on public.user_woodworking_projects(user_id);
//   alter table public.user_woodworking_projects enable row level security;
//   create policy "users access their own woodworking projects"
//     on public.user_woodworking_projects for all
//     using (auth.uid() = user_id) with check (auth.uid() = user_id);

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

const DEFAULTS = {
    board: { length: 24, width: 6, thickness: 0.75 }, // inches
    scenePadding: 60,
    gridSizeInches: 96,
    gridDivisions: 32
};

// Wood color palette (cycled when adding boards)
const WOOD_COLORS = ['#c69c6d', '#a87544', '#8b5a2b', '#d4a574', '#deb887', '#cd853f'];

// Common construction lumber catalog. Dimensions are *actual* (inches), not nominal.
// length is the long dimension, width is the broad face, thickness is the narrow face.
// "color" optional — falls back to the cycled wood palette.
const BOARD_TYPES = [
    // ---- Dimensional softwood (SPF / pine) — nominal 1× ----
    { id: '1x2',  category: 'dimensional', name: '1×2',  length: 96, width: 1.5,   thickness: 0.75 },
    { id: '1x3',  category: 'dimensional', name: '1×3',  length: 96, width: 2.5,   thickness: 0.75 },
    { id: '1x4',  category: 'dimensional', name: '1×4',  length: 96, width: 3.5,   thickness: 0.75 },
    { id: '1x6',  category: 'dimensional', name: '1×6',  length: 96, width: 5.5,   thickness: 0.75 },
    { id: '1x8',  category: 'dimensional', name: '1×8',  length: 96, width: 7.25,  thickness: 0.75 },
    { id: '1x10', category: 'dimensional', name: '1×10', length: 96, width: 9.25,  thickness: 0.75 },
    { id: '1x12', category: 'dimensional', name: '1×12', length: 96, width: 11.25, thickness: 0.75 },
    // ---- Dimensional softwood — nominal 2× ----
    { id: '2x2',  category: 'dimensional', name: '2×2',  length: 96, width: 1.5,   thickness: 1.5 },
    { id: '2x3',  category: 'dimensional', name: '2×3',  length: 96, width: 2.5,   thickness: 1.5 },
    { id: '2x4',  category: 'dimensional', name: '2×4',  length: 96, width: 3.5,   thickness: 1.5 },
    { id: '2x6',  category: 'dimensional', name: '2×6',  length: 96, width: 5.5,   thickness: 1.5 },
    { id: '2x8',  category: 'dimensional', name: '2×8',  length: 96, width: 7.25,  thickness: 1.5 },
    { id: '2x10', category: 'dimensional', name: '2×10', length: 96, width: 9.25,  thickness: 1.5 },
    { id: '2x12', category: 'dimensional', name: '2×12', length: 96, width: 11.25, thickness: 1.5 },
    // ---- Posts ----
    { id: '4x4',  category: 'dimensional', name: '4×4',  length: 96, width: 3.5,   thickness: 3.5 },
    { id: '4x6',  category: 'dimensional', name: '4×6',  length: 96, width: 5.5,   thickness: 3.5 },
    { id: '6x6',  category: 'dimensional', name: '6×6',  length: 96, width: 5.5,   thickness: 5.5 },
    // ---- Hardwood S4S (typical lumberyard sizing) ----
    { id: 'hw-4-4',  category: 'hardwood', name: '4/4 × 4″', length: 72, width: 4,  thickness: 0.75, color: '#a0703d' },
    { id: 'hw-4-6',  category: 'hardwood', name: '4/4 × 6″', length: 72, width: 6,  thickness: 0.75, color: '#a0703d' },
    { id: 'hw-4-8',  category: 'hardwood', name: '4/4 × 8″', length: 72, width: 8,  thickness: 0.75, color: '#a0703d' },
    { id: 'hw-5-4-6', category: 'hardwood', name: '5/4 × 6″', length: 72, width: 6,  thickness: 1.0,  color: '#a0703d' },
    { id: 'hw-8-4-4', category: 'hardwood', name: '8/4 × 4″', length: 72, width: 4,  thickness: 1.75, color: '#a0703d' },
    { id: 'hw-8-4-6', category: 'hardwood', name: '8/4 × 6″', length: 72, width: 6,  thickness: 1.75, color: '#a0703d' },
    // ---- Sheet goods (4×8 ft) ----
    { id: 'ply-3-4',  category: 'sheet', name: 'Plywood 3/4″', length: 96, width: 48, thickness: 0.75, color: '#d6b88a' },
    { id: 'ply-1-2',  category: 'sheet', name: 'Plywood 1/2″', length: 96, width: 48, thickness: 0.5,  color: '#d6b88a' },
    { id: 'ply-1-4',  category: 'sheet', name: 'Plywood 1/4″', length: 96, width: 48, thickness: 0.25, color: '#d6b88a' },
    { id: 'mdf-3-4',  category: 'sheet', name: 'MDF 3/4″',     length: 96, width: 48, thickness: 0.75, color: '#b8a378' },
    { id: 'mdf-1-2',  category: 'sheet', name: 'MDF 1/2″',     length: 96, width: 48, thickness: 0.5,  color: '#b8a378' },
    { id: 'osb-7-16', category: 'sheet', name: 'OSB 7/16″',    length: 96, width: 48, thickness: 0.4375, color: '#c8a66b' },
    { id: 'hb-1-4',   category: 'sheet', name: 'Hardboard 1/4″', length: 96, width: 48, thickness: 0.25, color: '#9b7e58' }
];

const BOARD_CATEGORIES = [
    { id: 'dimensional', label: 'Dimensional' },
    { id: 'hardwood',    label: 'Hardwood' },
    { id: 'sheet',       label: 'Sheet goods' }
];

// Orientation controls which logical dimension stands vertical, letting users
// build legs, sides, and on-edge members. It's modeled as axis-remapping rather
// than a tilt rotation so boards stay axis-aligned (face-snapping, the Y-rotation
// gizmo, and the L×W×T cut list all keep working). The cut list is unaffected —
// orientation never changes which board you buy.
//   flat → lying down (broad face up)   : x=length, y=thickness, z=width
//   edge → standing on its long edge     : x=length, y=width,     z=thickness
//   end  → standing on end (table leg)   : x=width,  y=length,    z=thickness
const VALID_ORIENTATIONS = ['flat', 'edge', 'end'];

function boardExtents(length, width, thickness, orientation) {
    switch (orientation) {
        case 'edge': return { x: length, y: width,     z: thickness };
        case 'end':  return { x: width,  y: length,    z: thickness };
        case 'flat':
        default:     return { x: length, y: thickness, z: width };
    }
}
function boardGeometry(length, width, thickness, orientation) {
    const e = boardExtents(length, width, thickness, orientation);
    return new THREE.BoxGeometry(e.x, e.y, e.z);
}
// Half the vertical extent — the y position at which the board rests on the floor.
function boardRestHeight(length, width, thickness, orientation) {
    return boardExtents(length, width, thickness, orientation).y / 2;
}

// A thin dark outline drawn on every board's edges so adjacent same-colored boards
// stay visually distinct. One shared material — outlines never change color.
const boardEdgeMaterial = new THREE.LineBasicMaterial({ color: 0x2a2118 });

// Builds (or rebuilds) the edge outline for a board mesh from its current geometry,
// attached as a non-pickable child so it inherits the board's transform.
function buildBoardEdges(mesh) {
    if (mesh.userData.edges) {
        mesh.remove(mesh.userData.edges);
        mesh.userData.edges.geometry.dispose();
    }
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry), boardEdgeMaterial);
    edges.raycast = () => {};        // never hit-test the outline
    mesh.userData.edges = edges;
    mesh.add(edges);
}

const WoodworkingEditor = (() => {
    let screenEl;
    let canvasContainer;
    let scene, camera, renderer, orbitControls, transformControls;
    let groundMesh;
    let raycaster, pointer;
    let boards = [];                  // { id, mesh, length, width, thickness, color }
    let nextBoardId = 1;
    let selectedBoardIds = new Set(); // multi-select; size 0 = nothing selected
    let initialized = false;
    let animationId = null;
    let resizeObserver = null;
    let hasLoadedFromServer = false;
    let supabaseClient = null; // resolved lazily from window.supabase (set by main app)
    let currentProjectId = null;          // server id of the loaded project, or null for an unsaved one
    let currentProjectName = 'Untitled project';
    let hasUnsavedChanges = false;        // drives the back/refresh guard + dirty indicator
    let beforeUnloadListener = null;
    let isDraggingBoard = false;
    let draggedBoardId = null;
    let isApplyingSnap = false;
    let gizmoMode = 'off'; // 'off' | 'translate' | 'rotate'
    let libraryCategoryId = BOARD_CATEGORIES[0].id;
    let pointerDragState = null;      // active during freestyle XZ drag
    let groupDragOffsets = null;      // Map<boardId, {dx, dz}> for moving the whole selection
    let gizmoPivot = null;            // proxy Object3D the TransformControls attaches to for multi-select
    let gizmoLastPos = new THREE.Vector3();
    let gizmoLastQuat = new THREE.Quaternion();
    let historyPast = [];             // each entry is a getState() snapshot
    let historyFuture = [];
    const HISTORY_LIMIT = 100;
    let clipboard = [];               // last copy/paste payload
    let keydownListener = null;
    const SNAP_DISTANCE_INCHES = 6.0;
    const dragPlane = { plane: null }; // lazy-init THREE.Plane

    function init() {
        if (initialized) return;
        screenEl = document.getElementById('woodworking-editor-screen');
        const openBtn = document.getElementById('woodworking-editor-btn');
        if (!openBtn || !screenEl) return; // markup not present, bail quietly
        openBtn.addEventListener('click', show);
        screenEl.querySelector('[data-action="back"]')?.addEventListener('click', hide);
        renderLibrary();
        screenEl.querySelector('[data-action="delete-board"]')?.addEventListener('click', deleteSelected);
        screenEl.querySelector('[data-action="array"]')?.addEventListener('click', createLinearArray);
        screenEl.querySelector('[data-action="cutopt-open"]')?.addEventListener('click', openCutOpt);
        screenEl.querySelectorAll('[data-action="cutopt-close"]').forEach(el => el.addEventListener('click', closeCutOpt));
        screenEl.querySelector('[data-action="cutopt-run"]')?.addEventListener('click', runCutOptimization);
        screenEl.querySelectorAll('[data-align]').forEach(btn => {
            const [axis, mode] = btn.dataset.align.split('-');
            btn.addEventListener('click', () => alignSelection(axis, mode));
        });
        screenEl.querySelectorAll('[data-distribute]').forEach(btn => {
            btn.addEventListener('click', () => distributeSelection(btn.dataset.distribute));
        });
        screenEl.querySelector('[data-action="reset-view"]')?.addEventListener('click', resetCamera);
        screenEl.querySelector('[data-action="clear"]')?.addEventListener('click', clearGrid);
        screenEl.querySelector('[data-action="export-csv"]')?.addEventListener('click', exportCutListCsv);
        screenEl.querySelector('[data-action="export-png"]')?.addEventListener('click', exportViewPng);
        screenEl.querySelector('[data-action="save"]')?.addEventListener('click', handleSave);
        screenEl.querySelector('[data-action="projects"]')?.addEventListener('click', openProjects);
        screenEl.querySelectorAll('[data-action="projects-close"]').forEach(el => el.addEventListener('click', closeProjects));
        screenEl.querySelector('[data-action="project-new"]')?.addEventListener('click', newProject);
        const nameEl = screenEl.querySelector('[data-ww-project-name]');
        if (nameEl) {
            nameEl.addEventListener('input', () => {
                currentProjectName = nameEl.textContent.replace(/\n/g, ' ').trim() || 'Untitled project';
                markDirty();
            });
            nameEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') { e.preventDefault(); nameEl.blur(); }
            });
            nameEl.addEventListener('blur', () => {
                if (!nameEl.textContent.trim()) { currentProjectName = 'Untitled project'; nameEl.textContent = currentProjectName; }
            });
        }
        if (!beforeUnloadListener) {
            beforeUnloadListener = handleBeforeUnload;
            window.addEventListener('beforeunload', beforeUnloadListener);
        }
        screenEl.querySelectorAll('[data-gizmo-mode]').forEach(btn => {
            btn.addEventListener('click', () => {
                // Click the already-active mode to toggle it off.
                const next = btn.dataset.gizmoMode === gizmoMode ? 'off' : btn.dataset.gizmoMode;
                setGizmoMode(next);
            });
        });
        screenEl.querySelectorAll('[data-board-input]').forEach(input => {
            input.addEventListener('input', handleSelectedBoardInputChange);
        });
        initialized = true;
    }

    function show() {
        if (typeof window.__decoraitRequireEmailConfirmed === 'function'
            && !window.__decoraitRequireEmailConfirmed('the woodworking editor')) {
            return;
        }
        screenEl.classList.remove('hidden');
        document.body.classList.add('woodworking-active');
        if (!scene) buildScene();
        startRenderLoop();
        setTimeout(handleResize, 0);
        if (!keydownListener) {
            keydownListener = handleKeydown;
            document.addEventListener('keydown', keydownListener);
        }
        // First time the editor opens for a logged-in user, try loading their saved project.
        if (!hasLoadedFromServer) {
            hasLoadedFromServer = true;
            loadFromServer().catch(err => console.warn('[Woodworking] load failed:', err));
        }
    }

    async function hide() {
        if (hasUnsavedChanges && typeof window.showConfirmDialog === 'function') {
            const proceed = await window.showConfirmDialog(
                'You have unsaved changes. Leave without saving?',
                'Unsaved changes',
                'Leave',
                'Cancel'
            );
            if (!proceed) return;
        }
        screenEl.classList.add('hidden');
        document.body.classList.remove('woodworking-active');
        stopRenderLoop();
        if (keydownListener) {
            document.removeEventListener('keydown', keydownListener);
            keydownListener = null;
        }
    }

    function buildScene() {
        canvasContainer = screenEl.querySelector('.ww-canvas');
        const w = canvasContainer.clientWidth || 800;
        const h = canvasContainer.clientHeight || 600;

        scene = new THREE.Scene();
        scene.background = new THREE.Color('#eef2f7');

        camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 50000);
        camera.position.set(60, 60, 80);
        camera.lookAt(0, 0, 0);

        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(w, h);
        // Shadows disabled — they'd require a second render pass per frame for little benefit
        // in this view. Keeping the editor as cheap as possible on user hardware.
        canvasContainer.appendChild(renderer.domElement);

        // Lights — ambient + a single directional. No shadow casting.
        scene.add(new THREE.AmbientLight(0xffffff, 0.55));
        const sun = new THREE.DirectionalLight(0xffffff, 0.85);
        sun.position.set(80, 120, 60);
        scene.add(sun);

        // Ground: a large quad textured with a procedurally-generated concrete + grid image.
        // The texture is built once on a 2D canvas and tiled across the plane via texture.repeat,
        // so the per-frame GPU cost stays at one cheap textured-plane draw. Mipmaps + anisotropic
        // filtering handle distance falloff and oblique angles, no custom shader needed.
        const groundGeom = new THREE.PlaneGeometry(10000, 10000);
        const floorTexture = makeFloorTexture(renderer);
        const groundMat = new THREE.MeshBasicMaterial({ map: floorTexture });
        groundMesh = new THREE.Mesh(groundGeom, groundMat);
        groundMesh.rotation.x = -Math.PI / 2;
        groundMesh.userData.isGround = true;
        scene.add(groundMesh);

        // Controls
        orbitControls = new OrbitControls(camera, renderer.domElement);
        orbitControls.enableDamping = true;
        orbitControls.dampingFactor = 0.08;
        orbitControls.target.set(0, 0, 0);
        // Stop just above the floor so the user can't orbit under it.
        orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;

        // TransformControls is opt-in via the gizmo mode toggle in the side panel.
        // Direct XZ translation is handled by handlePointerDown/Move/Up below.
        transformControls = new TransformControls(camera, renderer.domElement);
        transformControls.setTranslationSnap(0.25);
        transformControls.setRotationSnap(THREE.MathUtils.degToRad(15));
        let gizmoSnapshotPushed = false;
        transformControls.addEventListener('dragging-changed', (e) => {
            orbitControls.enabled = !e.value;
            if (e.value) gizmoSnapshotPushed = false; // arm: push on first objectChange below
            // Reset the pivot baseline whenever a drag starts/ends so multi-select deltas are
            // computed against the correct origin.
            if (gizmoPivot && transformControls.object === gizmoPivot) {
                gizmoLastPos.copy(gizmoPivot.position);
                gizmoLastQuat.copy(gizmoPivot.quaternion);
            }
            // After a multi-select drag ends, re-center the pivot at the new centroid.
            if (!e.value && selectedBoardIds.size > 1) refreshGizmoAttachment();
            updateGizmoCursor();
            updateRotationBadge();
        });
        // 'change' fires on hover (axis change) too, not just during drag — perfect for cursor feedback.
        transformControls.addEventListener('change', () => {
            updateGizmoCursor();
        });
        transformControls.addEventListener('objectChange', () => {
            // First actual change since drag start — record a snapshot so undo restores pre-drag state.
            if (transformControls.dragging && !gizmoSnapshotPushed) {
                recordHistorySnapshot();
                gizmoSnapshotPushed = true;
            }
            // Multi-select: apply the gizmo's incremental delta to every selected board.
            if (transformControls.dragging && selectedBoardIds.size > 1 && transformControls.object === gizmoPivot) {
                applyGroupDelta();
            } else if (gizmoMode === 'translate' && transformControls.dragging && selectedBoardIds.size === 1) {
                // Single-select: live face-snap while translating with the gizmo.
                applyBoardSnap([...selectedBoardIds][0]);
            }
            if (selectedBoardIds.size === 1) syncSelectedBoardInputsFromMesh();
            updateRotationBadge();
        });
        scene.add(transformControls.getHelper ? transformControls.getHelper() : transformControls);
        transformControls.detach();
        if (transformControls.getHelper) transformControls.getHelper().visible = false;

        raycaster = new THREE.Raycaster();
        pointer = new THREE.Vector2();
        dragPlane.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        renderer.domElement.addEventListener('pointerdown', handlePointerDown);
        renderer.domElement.addEventListener('pointermove', handlePointerMove);
        window.addEventListener('pointerup', handlePointerUp);

        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(canvasContainer);

        // No seed board — users pick from the library to start.
    }

    // Builds a tileable concrete-with-grid texture on a 2D canvas. One tile represents
    // a 96"×96" patch of floor: a slab-grey base with low-frequency mottling and grit speckle,
    // overlaid by faint 1" minor grid lines and slightly stronger 12" major grid lines.
    function makeFloorTexture(rendererForAniso) {
        const inchesPerTile = 96;
        const pxPerInch = 4;
        const size = inchesPerTile * pxPerInch; // 384px
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = size;
        const ctx = canvas.getContext('2d');

        // Base concrete color
        ctx.fillStyle = '#bfc3c7';
        ctx.fillRect(0, 0, size, size);

        // Low-frequency mottling — a few large soft blobs of slightly varied tone
        for (let i = 0; i < 14; i++) {
            const cx = Math.random() * size;
            const cy = Math.random() * size;
            const r = 40 + Math.random() * 110;
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
            const tint = Math.random() < 0.5 ? '180,184,188' : '198,202,206';
            grad.addColorStop(0, `rgba(${tint},0.22)`);
            grad.addColorStop(1, `rgba(${tint},0)`);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);
        }

        // Fine grit speckle
        const img = ctx.getImageData(0, 0, size, size);
        const data = img.data;
        for (let i = 0; i < data.length; i += 4) {
            const n = (Math.random() - 0.5) * 18;
            data[i]     = Math.max(0, Math.min(255, data[i]     + n));
            data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + n));
            data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + n));
        }
        ctx.putImageData(img, 0, 0);

        // Translucent grid lines — minor (1") and major (12")
        ctx.strokeStyle = 'rgba(60, 70, 85, 0.18)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= inchesPerTile; i++) {
            const p = i * pxPerInch + 0.5;
            ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke();
        }
        ctx.strokeStyle = 'rgba(40, 50, 65, 0.42)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i <= inchesPerTile; i += 12) {
            const p = i * pxPerInch + 0.5;
            ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, size); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(size, p); ctx.stroke();
        }

        const texture = new THREE.CanvasTexture(canvas);
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        // Tile the 96" patch across the full plane.
        texture.repeat.set(10000 / inchesPerTile, 10000 / inchesPerTile);
        if (rendererForAniso?.capabilities?.getMaxAnisotropy) {
            texture.anisotropy = rendererForAniso.capabilities.getMaxAnisotropy();
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        return texture;
    }

    function startRenderLoop() {
        if (animationId) return;
        const loop = () => {
            animationId = requestAnimationFrame(loop);
            orbitControls.update();
            updateBoardToolbarPosition();
            renderer.render(scene, camera);
        };
        loop();
    }

    function updateBoardToolbarPosition() {
        const toolbar = screenEl?.querySelector('.ww-board-toolbar');
        if (!toolbar || toolbar.hidden) return;
        if (selectedBoardIds.size === 0) return;
        // Anchor: top-center of the union AABB of all selected boards.
        const union = new THREE.Box3();
        for (const b of getSelectedBoards()) {
            b.mesh.updateMatrixWorld(true);
            union.union(new THREE.Box3().setFromObject(b.mesh));
        }
        const top = new THREE.Vector3((union.min.x + union.max.x) / 2, union.max.y, (union.min.z + union.max.z) / 2);
        top.project(camera);
        const rect = renderer.domElement.getBoundingClientRect();
        const containerRect = canvasContainer.getBoundingClientRect();
        const x = (top.x * 0.5 + 0.5) * rect.width + (rect.left - containerRect.left);
        const y = (-top.y * 0.5 + 0.5) * rect.height + (rect.top - containerRect.top);
        toolbar.style.left = `${x}px`;
        toolbar.style.top = `${y - 10}px`;

        // Park the rotation badge a bit below the toolbar.
        const badge = screenEl.querySelector('.ww-rotation-badge');
        if (badge && !badge.hidden) {
            badge.style.left = `${x}px`;
            badge.style.top = `${y + 14}px`;
        }
    }

    function updateGizmoCursor() {
        if (!renderer) return;
        const dom = renderer.domElement;
        const axis = transformControls?.axis;
        // axis is non-null when the gizmo is hovered or being dragged. For rotate we want
        // a grab cursor; for translate we want move. While actively dragging, show grabbing.
        if (!axis) {
            dom.style.cursor = '';
            return;
        }
        if (transformControls.dragging) {
            dom.style.cursor = 'grabbing';
        } else if (gizmoMode === 'rotate') {
            dom.style.cursor = 'grab';
        } else if (gizmoMode === 'translate') {
            dom.style.cursor = 'move';
        }
    }

    function updateRotationBadge() {
        const badge = screenEl?.querySelector('.ww-rotation-badge');
        if (!badge) return;
        const rotating = gizmoMode === 'rotate' && transformControls?.dragging && selectedBoardIds.size > 0;
        if (!rotating) { badge.hidden = true; return; }
        // Show the angle around whichever axis is being dragged (falls back to Y).
        const axisStr = (transformControls.axis || 'Y').toUpperCase();
        const axisKey = axisStr.includes('X') ? 'x' : axisStr.includes('Z') ? 'z' : 'y';
        // Single selection: read that board's Euler. Multi-selection: read the gizmo pivot's.
        const euler = selectedBoardIds.size === 1
            ? (getSelectedBoard()?.mesh.rotation ?? new THREE.Euler())
            : new THREE.Euler().setFromQuaternion(gizmoPivot.quaternion, 'YXZ');
        let deg = THREE.MathUtils.radToDeg(euler[axisKey]) % 360;
        if (deg > 180) deg -= 360;
        if (deg <= -180) deg += 360;
        badge.textContent = `${axisKey.toUpperCase()} ${Math.round(deg)}°`;
        badge.hidden = false;
    }

    function stopRenderLoop() {
        if (animationId) cancelAnimationFrame(animationId);
        animationId = null;
    }

    function handleResize() {
        if (!renderer || !canvasContainer) return;
        const w = canvasContainer.clientWidth;
        const h = canvasContainer.clientHeight;
        if (!w || !h) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }

    function updatePointerNDC(event) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function handlePointerDown(event) {
        if (event.button !== 0) return; // only left-click starts a board drag
        if (gizmoMode !== 'off' && transformControls.dragging) return;
        updatePointerNDC(event);
        raycaster.setFromCamera(pointer, camera);
        const meshes = boards.map(b => b.mesh);
        const hits = raycaster.intersectObjects(meshes, false);
        const additive = event.shiftKey || event.metaKey || event.ctrlKey;

        if (hits.length > 0) {
            const hit = hits[0];
            const hitId = hit.object.userData.boardId;

            // Shift/Cmd/Ctrl-click toggles membership without starting a drag.
            if (additive) {
                toggleInSelection(hitId);
                return;
            }

            // If the user clicked an unselected board, replace the selection with just it.
            // If they clicked into an existing multi-selection, keep the selection and drag the group.
            if (!selectedBoardIds.has(hitId)) setSelection(hitId);

            // Capture per-board offsets relative to the hit point so the whole selection drags as one.
            dragPlane.plane.set(new THREE.Vector3(0, 1, 0), -hit.point.y);
            groupDragOffsets = new Map();
            for (const b of getSelectedBoards()) {
                groupDragOffsets.set(b.id, {
                    dx: b.mesh.position.x - hit.point.x,
                    dz: b.mesh.position.z - hit.point.z
                });
            }
            pointerDragState = {
                hitX: hit.point.x, hitZ: hit.point.z, planeY: hit.point.y,
                lastHitX: hit.point.x, lastHitZ: hit.point.z,
                snapshotPushed: false,
            };
            isDraggingBoard = true;
            draggedBoardId = hitId;
            orbitControls.enabled = false;
            renderer.domElement.setPointerCapture?.(event.pointerId);
            event.preventDefault();
        } else {
            const ground = raycaster.intersectObject(groundMesh, false);
            if (ground.length > 0 && !additive) clearSelection();
        }
    }

    function handlePointerMove(event) {
        if (!pointerDragState || !groupDragOffsets) return;
        updatePointerNDC(event);
        raycaster.setFromCamera(pointer, camera);
        const hitPoint = new THREE.Vector3();
        if (!raycaster.ray.intersectPlane(dragPlane.plane, hitPoint)) return;
        // Defer the undo snapshot until actual movement occurs, so a bare click doesn't pollute history.
        if (!pointerDragState.snapshotPushed) {
            recordHistorySnapshot();
            pointerDragState.snapshotPushed = true;
        }
        // Frame-to-frame delta on the drag plane. Shift halves the cursor's
        // effective speed for fine-grained positioning (board drifts behind
        // the cursor while held; tracking re-anchors when released).
        const FINE_SCALE = 0.2;
        const scale = event.shiftKey ? FINE_SCALE : 1.0;
        const dx = (hitPoint.x - pointerDragState.lastHitX) * scale;
        const dz = (hitPoint.z - pointerDragState.lastHitZ) * scale;
        pointerDragState.lastHitX = hitPoint.x;
        pointerDragState.lastHitZ = hitPoint.z;
        for (const id of groupDragOffsets.keys()) {
            const b = boards.find(x => x.id === id);
            if (!b) continue;
            b.mesh.position.x += dx;
            b.mesh.position.z += dz;
        }
        // Face-snapping is meaningful for single-board drags; skip for groups (which would fight each other).
        if (selectedBoardIds.size === 1) {
            applyBoardSnap([...selectedBoardIds][0]);
        }
        syncSelectedBoardInputsFromMesh();
        // Keep the gizmo pivot riding the centroid during multi-board drags.
        if (selectedBoardIds.size > 1 && gizmoPivot) {
            const c = computeSelectionCentroid();
            gizmoPivot.position.copy(c);
            gizmoLastPos.copy(c);
        }
    }

    function handlePointerUp(event) {
        if (!pointerDragState) return;
        renderer.domElement.releasePointerCapture?.(event.pointerId);
        pointerDragState = null;
        groupDragOffsets = null;
        isDraggingBoard = false;
        draggedBoardId = null;
        orbitControls.enabled = true;
    }

    function setGizmoMode(mode) {
        if (mode !== 'off' && mode !== 'translate' && mode !== 'rotate') mode = 'off';
        gizmoMode = mode;
        screenEl.querySelectorAll('[data-gizmo-mode]').forEach(btn => {
            btn.setAttribute('aria-pressed', String(btn.dataset.gizmoMode === mode));
        });
        if (mode === 'translate') {
            transformControls.setMode('translate');
            transformControls.showX = true;
            transformControls.showY = true;
            transformControls.showZ = true;
        } else if (mode === 'rotate') {
            transformControls.setMode('rotate');
            // Full 3D rotation — tilt boards onto any face, build angled joinery, etc.
            transformControls.showX = true;
            transformControls.showY = true;
            transformControls.showZ = true;
        }
        refreshGizmoAttachment();
    }

    function addBoard(opts = {}) {
        const length = opts.length ?? DEFAULTS.board.length;
        const width = opts.width ?? DEFAULTS.board.width;
        const thickness = opts.thickness ?? DEFAULTS.board.thickness;
        const color = opts.color ?? WOOD_COLORS[boards.length % WOOD_COLORS.length];
        const orientation = VALID_ORIENTATIONS.includes(opts.orientation) ? opts.orientation : 'flat';

        const geom = boardGeometry(length, width, thickness, orientation);
        const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05 });
        const mesh = new THREE.Mesh(geom, mat);
        buildBoardEdges(mesh);
        // Default position: rest on the floor for the chosen orientation, stacked a
        // little so newly-added duplicates don't z-fight.
        const rest = boardRestHeight(length, width, thickness, orientation);
        const stackOffset = (opts.x === undefined && opts.z === undefined)
            ? boards.length * (thickness + 0.1)
            : 0;
        mesh.position.set(opts.x ?? 0, (opts.y ?? rest) + stackOffset, opts.z ?? 0);
        mesh.rotation.set(opts.rotationX || 0, opts.rotationY || 0, opts.rotationZ || 0);

        const id = opts.id ?? nextBoardId++;
        if (id >= nextBoardId) nextBoardId = id + 1;
        mesh.userData.boardId = id;
        scene.add(mesh);
        const board = { id, mesh, length, width, thickness, color, orientation };
        boards.push(board);
        if (opts.select !== false) setSelection(id);
        renderCutList();
        return id;
    }

    // Removes every board in the current selection. Records an undo snapshot before mutating.
    function deleteSelected() {
        if (selectedBoardIds.size === 0) return;
        recordHistorySnapshot();
        transformControls.detach();
        for (const id of [...selectedBoardIds]) {
            const idx = boards.findIndex(b => b.id === id);
            if (idx < 0) continue;
            const b = boards[idx];
            scene.remove(b.mesh);
            b.mesh.userData.edges?.geometry.dispose();
            b.mesh.geometry.dispose();
            b.mesh.material.dispose();
            boards.splice(idx, 1);
        }
        selectedBoardIds.clear();
        refreshSelectionVisuals();
        refreshGizmoAttachment();
        renderCutList();
        renderSelectedPanel();
    }

    // Removes every board from the project (keeps the project's name/id so the empty
    // state can be saved). Undoable — records a snapshot first, mirroring the layout
    // editor's "Clear floor plan".
    async function clearGrid() {
        if (boards.length === 0) return;
        if (typeof window.showConfirmDialog === 'function') {
            const proceed = await window.showConfirmDialog(
                'Clear all boards from this project?',
                'Clear project',
                'Clear',
                'Cancel'
            );
            if (!proceed) return;
        }
        recordHistorySnapshot(); // undoable + marks the project dirty
        applySnapshot({ boards: [], selectedIds: [] });
        setSaveStatus('Cleared all boards.');
        setTimeout(() => setSaveStatus(''), 2500);
    }

    // Replaces the current selection with `ids` (number, number[], Set, or null/undefined to clear).
    function setSelection(ids) {
        let next;
        if (ids === null || ids === undefined) next = new Set();
        else if (typeof ids === 'number') next = new Set([ids]);
        else if (ids instanceof Set) next = new Set(ids);
        else next = new Set(ids);
        // Drop ids that no longer exist.
        for (const id of [...next]) {
            if (!boards.find(b => b.id === id)) next.delete(id);
        }
        selectedBoardIds = next;
        refreshSelectionVisuals();
        refreshGizmoAttachment();
        renderCutList();
        renderSelectedPanel();
    }

    // Adds/removes one id without disturbing the rest of the selection (shift-click semantics).
    function toggleInSelection(id) {
        if (!boards.find(b => b.id === id)) return;
        if (selectedBoardIds.has(id)) selectedBoardIds.delete(id);
        else selectedBoardIds.add(id);
        refreshSelectionVisuals();
        refreshGizmoAttachment();
        renderCutList();
        renderSelectedPanel();
    }

    function clearSelection() { setSelection(null); }

    // Highlights selected boards via material emissive — cheap, no extra geometry.
    function refreshSelectionVisuals() {
        for (const b of boards) {
            const sel = selectedBoardIds.has(b.id);
            const mat = b.mesh.material;
            if (mat?.emissive) {
                mat.emissive.setHex(sel ? 0x4f46e5 : 0x000000);
                mat.emissiveIntensity = sel ? 0.35 : 0;
            }
        }
        const toolbar = screenEl?.querySelector('.ww-board-toolbar');
        if (toolbar) toolbar.hidden = selectedBoardIds.size === 0;
    }

    // Decides whether the gizmo attaches to a single mesh or to a centroid pivot for the group.
    function refreshGizmoAttachment() {
        const helper = transformControls.getHelper ? transformControls.getHelper() : transformControls;
        if (selectedBoardIds.size === 0 || gizmoMode === 'off') {
            transformControls.detach();
            helper.visible = false;
            return;
        }
        if (selectedBoardIds.size === 1) {
            const id = [...selectedBoardIds][0];
            const b = boards.find(x => x.id === id);
            if (!b) { transformControls.detach(); helper.visible = false; return; }
            transformControls.attach(b.mesh);
            helper.visible = true;
            return;
        }
        // Multi-select: position a non-rendered pivot at the centroid and gizmo-target it.
        if (!gizmoPivot) {
            gizmoPivot = new THREE.Object3D();
            scene.add(gizmoPivot);
        }
        const centroid = computeSelectionCentroid();
        gizmoPivot.position.copy(centroid);
        gizmoPivot.quaternion.identity();
        gizmoLastPos.copy(gizmoPivot.position);
        gizmoLastQuat.copy(gizmoPivot.quaternion);
        transformControls.attach(gizmoPivot);
        helper.visible = true;
    }

    function computeSelectionCentroid() {
        const sum = new THREE.Vector3();
        let n = 0;
        for (const b of getSelectedBoards()) { sum.add(b.mesh.position); n++; }
        if (n) sum.divideScalar(n);
        return sum;
    }

    // Per-frame application of the gizmo pivot's incremental delta to every selected board,
    // so translating/rotating the pivot translates/rotates the whole group around the pivot.
    function applyGroupDelta() {
        if (!gizmoPivot) return;
        const dPos = new THREE.Vector3().subVectors(gizmoPivot.position, gizmoLastPos);
        const invLast = gizmoLastQuat.clone().invert();
        const dQuat = new THREE.Quaternion().multiplyQuaternions(gizmoPivot.quaternion, invLast);
        for (const b of getSelectedBoards()) {
            // Translate first, then rotate around the new pivot position.
            b.mesh.position.add(dPos);
            const offset = b.mesh.position.clone().sub(gizmoPivot.position);
            offset.applyQuaternion(dQuat);
            b.mesh.position.copy(gizmoPivot.position).add(offset);
            b.mesh.quaternion.premultiply(dQuat);
        }
        gizmoLastPos.copy(gizmoPivot.position);
        gizmoLastQuat.copy(gizmoPivot.quaternion);
    }

    function getSelectedBoards() {
        return boards.filter(b => selectedBoardIds.has(b.id));
    }

    // Convenience for code that only makes sense for a single-board selection (side panel inputs).
    function getSelectedBoard() {
        if (selectedBoardIds.size !== 1) return null;
        const id = [...selectedBoardIds][0];
        return boards.find(b => b.id === id) || null;
    }

    function syncSelectedBoardInputsFromMesh() {
        const b = getSelectedBoard();
        if (!b) return;
        const inputs = collectInputs();
        inputs.posX.value = b.mesh.position.x.toFixed(2);
        if (inputs.posY) inputs.posY.value = b.mesh.position.y.toFixed(2);
        inputs.posZ.value = b.mesh.position.z.toFixed(2);
        if (inputs.rotX) inputs.rotX.value = THREE.MathUtils.radToDeg(b.mesh.rotation.x).toFixed(0);
        inputs.rotY.value = THREE.MathUtils.radToDeg(b.mesh.rotation.y).toFixed(0);
        if (inputs.rotZ) inputs.rotZ.value = THREE.MathUtils.radToDeg(b.mesh.rotation.z).toFixed(0);
    }

    function collectInputs() {
        return {
            length: screenEl.querySelector('[data-board-input="length"]'),
            width: screenEl.querySelector('[data-board-input="width"]'),
            thickness: screenEl.querySelector('[data-board-input="thickness"]'),
            orientation: screenEl.querySelector('[data-board-input="orientation"]'),
            posX: screenEl.querySelector('[data-board-input="posX"]'),
            posY: screenEl.querySelector('[data-board-input="posY"]'),
            posZ: screenEl.querySelector('[data-board-input="posZ"]'),
            rotX: screenEl.querySelector('[data-board-input="rotX"]'),
            rotY: screenEl.querySelector('[data-board-input="rotY"]'),
            rotZ: screenEl.querySelector('[data-board-input="rotZ"]')
        };
    }

    function handleSelectedBoardInputChange() {
        const b = getSelectedBoard();
        if (!b) return;
        const inputs = collectInputs();
        const length = parseFloat(inputs.length.value) || b.length;
        const width = parseFloat(inputs.width.value) || b.width;
        const thickness = parseFloat(inputs.thickness.value) || b.thickness;
        const orientation = VALID_ORIENTATIONS.includes(inputs.orientation?.value) ? inputs.orientation.value : (b.orientation || 'flat');
        const posX = parseFloat(inputs.posX.value) || 0;
        const posZ = parseFloat(inputs.posZ.value) || 0;
        const rotX = parseFloat(inputs.rotX?.value) || 0;
        const rotY = parseFloat(inputs.rotY.value) || 0;
        const rotZ = parseFloat(inputs.rotZ?.value) || 0;

        // Was the board sitting on the floor before this edit? If so, keep it grounded
        // when its dimensions/orientation change rather than letting it float or sink.
        const wasGrounded = Math.abs(b.mesh.position.y - boardRestHeight(b.length, b.width, b.thickness, b.orientation)) < 0.01;
        const dimsChanged = length !== b.length || width !== b.width || thickness !== b.thickness;
        const orientationChanged = orientation !== b.orientation;

        if (dimsChanged || orientationChanged) {
            b.mesh.geometry.dispose();
            b.mesh.geometry = boardGeometry(length, width, thickness, orientation);
            buildBoardEdges(b.mesh);
            b.length = length;
            b.width = width;
            b.thickness = thickness;
            b.orientation = orientation;
        }

        b.mesh.position.x = posX;
        b.mesh.position.z = posZ;
        const rest = boardRestHeight(length, width, thickness, orientation);
        // Orientation change always re-grounds; a dimension change re-grounds only if the
        // board was already on the floor; otherwise honor the explicit Y input.
        if (orientationChanged || (dimsChanged && wasGrounded)) {
            b.mesh.position.y = rest;
            if (inputs.posY) inputs.posY.value = rest.toFixed(2);
        } else {
            b.mesh.position.y = inputs.posY ? (parseFloat(inputs.posY.value) || rest) : rest;
        }
        b.mesh.rotation.set(
            THREE.MathUtils.degToRad(rotX),
            THREE.MathUtils.degToRad(rotY),
            THREE.MathUtils.degToRad(rotZ)
        );
        renderCutList();
        markDirty();
    }

    function renderLibrary() {
        const catsEl = screenEl.querySelector('.ww-library-categories');
        const gridEl = screenEl.querySelector('.ww-library-grid');
        if (!catsEl || !gridEl) return;
        catsEl.innerHTML = '';
        BOARD_CATEGORIES.forEach(cat => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ww-library-cat';
            btn.dataset.category = cat.id;
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', String(cat.id === libraryCategoryId));
            btn.textContent = cat.label;
            btn.addEventListener('click', () => {
                libraryCategoryId = cat.id;
                renderLibrary();
            });
            catsEl.appendChild(btn);
        });
        gridEl.innerHTML = '';
        BOARD_TYPES.filter(b => b.category === libraryCategoryId).forEach(type => {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'ww-library-item';
            item.setAttribute('role', 'listitem');
            item.title = `Add ${type.name} (${type.length}″ × ${type.width}″ × ${type.thickness}″)`;
            const name = document.createElement('span');
            name.className = 'ww-library-item-name';
            name.textContent = type.name;
            const dims = document.createElement('span');
            dims.className = 'ww-library-item-dims';
            dims.textContent = `${formatDim(type.length)} × ${formatDim(type.width)} × ${formatDim(type.thickness)}″`;
            item.append(name, dims);
            item.addEventListener('click', () => {
                recordHistorySnapshot();
                addBoard({
                    length: type.length,
                    width: type.width,
                    thickness: type.thickness,
                    color: type.color
                });
            });
            gridEl.appendChild(item);
        });
    }

    function renderSelectedPanel() {
        const panel = screenEl.querySelector('.ww-selected-panel');
        if (!panel) return;
        // Multi-select: show a summary badge instead of single-board property inputs.
        if (selectedBoardIds.size > 1) {
            panel.classList.remove('ww-selected-panel--empty');
            panel.classList.add('ww-selected-panel--multi');
            let badge = panel.querySelector('.ww-selected-multi-badge');
            if (!badge) {
                badge = document.createElement('div');
                badge.className = 'ww-selected-multi-badge';
                panel.appendChild(badge);
            }
            badge.textContent = `${selectedBoardIds.size} boards selected`;
            return;
        }
        panel.classList.remove('ww-selected-panel--multi');
        const badge = panel.querySelector('.ww-selected-multi-badge');
        if (badge) badge.remove();
        const b = getSelectedBoard();
        if (!b) {
            panel.classList.add('ww-selected-panel--empty');
            return;
        }
        panel.classList.remove('ww-selected-panel--empty');
        const inputs = collectInputs();
        if (inputs.length) inputs.length.value = b.length;
        if (inputs.width) inputs.width.value = b.width;
        if (inputs.thickness) inputs.thickness.value = b.thickness;
        if (inputs.orientation) inputs.orientation.value = b.orientation || 'flat';
        if (inputs.posX) inputs.posX.value = b.mesh.position.x.toFixed(2);
        if (inputs.posY) inputs.posY.value = b.mesh.position.y.toFixed(2);
        if (inputs.posZ) inputs.posZ.value = b.mesh.position.z.toFixed(2);
        if (inputs.rotX) inputs.rotX.value = THREE.MathUtils.radToDeg(b.mesh.rotation.x).toFixed(0);
        if (inputs.rotY) inputs.rotY.value = THREE.MathUtils.radToDeg(b.mesh.rotation.y).toFixed(0);
        if (inputs.rotZ) inputs.rotZ.value = THREE.MathUtils.radToDeg(b.mesh.rotation.z).toFixed(0);
    }

    // Cut list groups boards by their L x W x T dimensions and shows totals.
    function renderCutList() {
        const listEl = screenEl.querySelector('.ww-cutlist-body');
        const totalEl = screenEl.querySelector('.ww-cutlist-total');
        if (!listEl) return;
        if (boards.length === 0) {
            listEl.innerHTML = '<tr><td colspan="3" class="ww-empty">No boards yet — click "Add Board" to start.</td></tr>';
            if (totalEl) totalEl.textContent = '0.00';
            return;
        }
        // Group by dimension key
        const groups = new Map();
        boards.forEach(b => {
            const key = `${round(b.length)}x${round(b.width)}x${round(b.thickness)}`;
            const existing = groups.get(key);
            if (existing) {
                existing.qty += 1;
            } else {
                groups.set(key, { length: b.length, width: b.width, thickness: b.thickness, qty: 1 });
            }
        });
        let totalBoardFeet = 0;
        const rows = [];
        for (const g of groups.values()) {
            const bf = boardFeet(g.length, g.width, g.thickness) * g.qty;
            totalBoardFeet += bf;
            rows.push(`<tr>
                <td>${g.qty}</td>
                <td>${formatDim(g.length)} × ${formatDim(g.width)} × ${formatDim(g.thickness)}</td>
                <td>${bf.toFixed(2)}</td>
            </tr>`);
        }
        listEl.innerHTML = rows.join('');
        if (totalEl) totalEl.textContent = totalBoardFeet.toFixed(2);
    }

    function boardFeet(lengthIn, widthIn, thicknessIn) {
        return (lengthIn * widthIn * thicknessIn) / 144;
    }
    function round(n) { return Math.round(n * 100) / 100; }
    function formatDim(n) { return Number.isInteger(n) ? n.toString() : n.toFixed(2); }

    // Snap the dragged board's bounding box to face-align with any nearby board's bounding box.
    // Per axis, finds the minimum-distance pairing among (dragged.min↔other.min/max, dragged.max↔other.min/max)
    // and shifts the mesh by that delta when within SNAP_DISTANCE_INCHES.
    function applyBoardSnap(boardId) {
        const targetId = boardId ?? draggedBoardId;
        if (targetId === null) return;
        const dragged = boards.find(b => b.id === targetId);
        if (!dragged || boards.length < 2) return;
        dragged.mesh.updateMatrixWorld(true);

        const draggedBox = new THREE.Box3().setFromObject(dragged.mesh);
        const found = { x: null, y: null, z: null };

        for (const other of boards) {
            if (other.id === targetId) continue;
            other.mesh.updateMatrixWorld(true);
            const otherBox = new THREE.Box3().setFromObject(other.mesh);
            for (const axis of ['x', 'y', 'z']) {
                const candidates = [
                    otherBox.min[axis] - draggedBox.min[axis], // align min faces
                    otherBox.max[axis] - draggedBox.min[axis], // dragged sits to the +axis side of other
                    otherBox.min[axis] - draggedBox.max[axis], // dragged sits to the -axis side of other
                    otherBox.max[axis] - draggedBox.max[axis]  // align max faces
                ];
                for (const delta of candidates) {
                    if (Math.abs(delta) > SNAP_DISTANCE_INCHES) continue;
                    if (found[axis] === null || Math.abs(delta) < Math.abs(found[axis])) {
                        found[axis] = delta;
                    }
                }
            }
        }

        if (found.x !== null) dragged.mesh.position.x += found.x;
        if (found.y !== null) dragged.mesh.position.y += found.y;
        if (found.z !== null) dragged.mesh.position.z += found.z;
    }

    function resetCamera() {
        if (!camera) return;
        camera.position.set(60, 60, 80);
        camera.lookAt(0, 0, 0);
        orbitControls.target.set(0, 0, 0);
        orbitControls.update();
    }

    async function getAccessToken() {
        const sb = window.__decoraitSupabase;
        if (!sb) return null;
        try {
            const { data: { session } } = await sb.auth.getSession();
            return session?.access_token || null;
        } catch { return null; }
    }

    function setSaveStatus(text, isError = false) {
        const el = screenEl.querySelector('.ww-save-status');
        if (!el) return;
        el.textContent = text;
        el.style.color = isError ? '#b91c1c' : '#6b7280';
    }

    async function handleSave() {
        const token = await getAccessToken();
        if (!token) {
            setSaveStatus('Sign in to save your project.', true);
            return;
        }
        setSaveStatus('Saving…');
        try {
            // Create on first save, update thereafter — mirrors the layout editor.
            const url = currentProjectId
                ? `/api/woodworking-projects/${currentProjectId}`
                : '/api/woodworking-projects';
            const method = currentProjectId ? 'PUT' : 'POST';
            const resp = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ name: currentProjectName, state: getState() })
            });
            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                console.error('[Woodworking] save failed:', resp.status, err);
                setSaveStatus(`Save failed: ${err.error || resp.status}`, true);
                return;
            }
            const data = await resp.json().catch(() => ({}));
            if (data.id) currentProjectId = data.id;
            if (data.name) currentProjectName = data.name;
            markClean();
            setSaveStatus('Saved.');
            setTimeout(() => setSaveStatus(''), 2500);
        } catch (err) {
            console.error('[Woodworking] save error:', err);
            setSaveStatus('Save failed. Check console.', true);
        }
    }

    // On first open, resume the user's most-recently-updated project.
    async function loadFromServer() {
        const token = await getAccessToken();
        if (!token) return; // not logged in — nothing to load
        const resp = await fetch('/api/woodworking-project', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!resp.ok) return;
        const data = await resp.json();
        if (data && data.state) {
            loadState(data.state);
            currentProjectId = data.id || null;
            currentProjectName = data.name || 'Untitled project';
            updateProjectTitleUI();
            markClean();
        }
    }

    // Dirty tracking ---------------------------------------------------------

    function markDirty() {
        if (!hasUnsavedChanges) {
            hasUnsavedChanges = true;
            updateProjectTitleUI();
        }
    }
    function markClean() {
        hasUnsavedChanges = false;
        updateProjectTitleUI();
    }
    // Reflect the project name + dirty state in the toolbar. Skips overwriting the
    // name field while the user is actively typing in it.
    function updateProjectTitleUI() {
        const el = screenEl?.querySelector('[data-ww-project-name]');
        if (!el) return;
        if (document.activeElement !== el) el.textContent = currentProjectName;
        el.classList.toggle('ww-project-name--dirty', hasUnsavedChanges);
    }
    // Native browser confirm on tab close / refresh while the editor is open + dirty.
    function handleBeforeUnload(e) {
        if (screenEl && !screenEl.classList.contains('hidden') && hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    }

    // Projects ---------------------------------------------------------------

    function openProjects() {
        const modal = screenEl.querySelector('#ww-projects-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        refreshProjectsList();
    }
    function closeProjects() {
        screenEl.querySelector('#ww-projects-modal')?.classList.add('hidden');
    }

    async function refreshProjectsList() {
        const listEl = screenEl.querySelector('#ww-projects-list');
        if (!listEl) return;
        const token = await getAccessToken();
        if (!token) {
            listEl.innerHTML = '<p class="ww-projects-empty">Sign in to save and load projects.</p>';
            return;
        }
        listEl.innerHTML = '<p class="ww-projects-empty">Loading…</p>';
        try {
            const resp = await fetch('/api/woodworking-projects', { headers: { 'Authorization': `Bearer ${token}` } });
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            renderProjectsList(data.projects || []);
        } catch (err) {
            console.error('[Woodworking] list projects failed:', err);
            listEl.innerHTML = '<p class="ww-projects-empty">Couldn’t load projects. Check console.</p>';
        }
    }

    function renderProjectsList(projects) {
        const listEl = screenEl.querySelector('#ww-projects-list');
        if (!listEl) return;
        if (projects.length === 0) {
            listEl.innerHTML = '<p class="ww-projects-empty">No saved projects yet. Click “New project”, build something, and Save.</p>';
            return;
        }
        listEl.innerHTML = '';
        for (const p of projects) {
            const row = document.createElement('div');
            row.className = 'ww-project-row';
            if (p.id === currentProjectId) row.classList.add('ww-project-row--current');
            const info = document.createElement('div');
            info.className = 'ww-project-info';
            const name = document.createElement('span');
            name.className = 'ww-project-row-name';
            name.textContent = p.name || 'Untitled project';
            const meta = document.createElement('span');
            meta.className = 'ww-project-row-meta';
            meta.textContent = (p.id === currentProjectId ? 'Open · ' : '') + formatUpdatedAt(p.updated_at);
            info.append(name, meta);
            const actions = document.createElement('div');
            actions.className = 'ww-project-actions';
            const loadBtn = document.createElement('button');
            loadBtn.type = 'button';
            loadBtn.className = 'ww-btn';
            loadBtn.textContent = p.id === currentProjectId ? 'Reload' : 'Open';
            loadBtn.addEventListener('click', () => loadProject(p.id));
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'ww-btn ww-btn--danger';
            delBtn.textContent = 'Delete';
            delBtn.addEventListener('click', () => deleteProject(p.id, p.name));
            actions.append(loadBtn, delBtn);
            row.append(info, actions);
            listEl.appendChild(row);
        }
    }

    function formatUpdatedAt(iso) {
        if (!iso) return '';
        const d = new Date(iso);
        if (isNaN(d)) return '';
        return `Updated ${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }

    async function confirmDiscardIfDirty() {
        if (!hasUnsavedChanges) return true;
        if (typeof window.showConfirmDialog !== 'function') return true;
        return window.showConfirmDialog(
            'You have unsaved changes. Discard them?',
            'Unsaved changes',
            'Discard',
            'Cancel'
        );
    }

    async function loadProject(id) {
        if (!(await confirmDiscardIfDirty())) return;
        const token = await getAccessToken();
        if (!token) { setSaveStatus('Sign in to load projects.', true); return; }
        try {
            const resp = await fetch(`/api/woodworking-projects/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const data = await resp.json();
            if (data && data.state) loadState(data.state);
            else applySnapshot({ boards: [], selectedIds: [] });
            currentProjectId = data.id || id;
            currentProjectName = data.name || 'Untitled project';
            updateProjectTitleUI();
            markClean();
            closeProjects();
            setSaveStatus(`Opened “${currentProjectName}”.`);
            setTimeout(() => setSaveStatus(''), 2500);
        } catch (err) {
            console.error('[Woodworking] load project failed:', err);
            setSaveStatus('Couldn’t open project. Check console.', true);
        }
    }

    async function newProject() {
        if (!(await confirmDiscardIfDirty())) return;
        applySnapshot({ boards: [], selectedIds: [] });
        historyPast = [];
        historyFuture = [];
        currentProjectId = null;
        currentProjectName = 'Untitled project';
        updateProjectTitleUI();
        markClean();
        closeProjects();
    }

    async function deleteProject(id, name) {
        const ok = typeof window.showConfirmDialog === 'function'
            ? await window.showConfirmDialog(`Delete “${name || 'this project'}”? This can’t be undone.`, 'Delete project', 'Delete', 'Cancel')
            : true;
        if (!ok) return;
        const token = await getAccessToken();
        if (!token) { setSaveStatus('Sign in to manage projects.', true); return; }
        try {
            const resp = await fetch(`/api/woodworking-projects/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!resp.ok && resp.status !== 204) throw new Error(`HTTP ${resp.status}`);
            // Deleting the open project detaches it (its contents stay on screen as an unsaved draft).
            if (id === currentProjectId) {
                currentProjectId = null;
                updateProjectTitleUI();
                markDirty();
            }
            refreshProjectsList();
        } catch (err) {
            console.error('[Woodworking] delete project failed:', err);
            setSaveStatus('Couldn’t delete project. Check console.', true);
        }
    }

    // Snapshot of everything an undo/redo or save needs to reconstruct the scene.
    function getState() {
        return {
            version: 4,
            boards: boards.map(b => ({
                id: b.id,
                length: b.length, width: b.width, thickness: b.thickness,
                color: b.color,
                orientation: b.orientation || 'flat',
                x: b.mesh.position.x, y: b.mesh.position.y, z: b.mesh.position.z,
                rotationX: b.mesh.rotation.x,
                rotationY: b.mesh.rotation.y,
                rotationZ: b.mesh.rotation.z
            })),
            selectedIds: [...selectedBoardIds]
        };
    }

    function loadState(state) {
        if (!state || !Array.isArray(state.boards)) return;
        applySnapshot(state);
        // Loading from disk discards any in-memory undo history.
        historyPast = [];
        historyFuture = [];
    }

    // Tear down current boards and rebuild from a snapshot. Used by both load and undo/redo.
    function applySnapshot(state) {
        boards.slice().forEach(b => {
            scene.remove(b.mesh);
            b.mesh.userData.edges?.geometry.dispose();
            b.mesh.geometry.dispose();
            b.mesh.material.dispose();
        });
        boards = [];
        nextBoardId = 1;
        selectedBoardIds.clear();
        transformControls.detach();
        if (gizmoPivot) { scene.remove(gizmoPivot); gizmoPivot = null; }
        for (const b of state.boards) addBoard({ ...b, select: false });
        setSelection(state.selectedIds || []);
        renderCutList();
        renderSelectedPanel();
    }

    // Undo/redo --------------------------------------------------------------

    function recordHistorySnapshot() {
        historyPast.push(getState());
        if (historyPast.length > HISTORY_LIMIT) historyPast.shift();
        historyFuture.length = 0;
        // Every undoable mutation funnels through here, so it's the natural dirty hook.
        markDirty();
    }

    function undo() {
        if (historyPast.length === 0) return;
        historyFuture.push(getState());
        applySnapshot(historyPast.pop());
        markDirty();
    }

    function redo() {
        if (historyFuture.length === 0) return;
        historyPast.push(getState());
        applySnapshot(historyFuture.pop());
        markDirty();
    }

    // Copy/paste -------------------------------------------------------------

    function copySelection() {
        if (selectedBoardIds.size === 0) return;
        clipboard = getSelectedBoards().map(b => ({
            length: b.length, width: b.width, thickness: b.thickness,
            color: b.color,
            orientation: b.orientation || 'flat',
            x: b.mesh.position.x, y: b.mesh.position.y, z: b.mesh.position.z,
            rotationX: b.mesh.rotation.x,
            rotationY: b.mesh.rotation.y,
            rotationZ: b.mesh.rotation.z
        }));
    }

    function pasteClipboard() {
        if (clipboard.length === 0) return;
        recordHistorySnapshot();
        const offset = 6; // inches
        const newIds = [];
        for (const item of clipboard) {
            const id = addBoard({
                length: item.length, width: item.width, thickness: item.thickness,
                color: item.color,
                orientation: item.orientation,
                x: item.x + offset, y: item.y, z: item.z + offset,
                rotationX: item.rotationX,
                rotationY: item.rotationY,
                rotationZ: item.rotationZ,
                select: false
            });
            newIds.push(id);
        }
        setSelection(newIds);
    }

    // Linear array -----------------------------------------------------------

    // Duplicates the current selection N-1 times along the X or Z axis at a fixed
    // center-to-center spacing — e.g. shelf slats, fence pickets, or a row of legs.
    // Originals plus copies end up selected so the whole run can be moved as one.
    function createLinearArray() {
        if (selectedBoardIds.size === 0) return;
        const countEl = screenEl.querySelector('[data-array-input="count"]');
        const spacingEl = screenEl.querySelector('[data-array-input="spacing"]');
        const axisEl = screenEl.querySelector('[data-array-input="axis"]');
        let count = Math.round(parseFloat(countEl?.value) || 0);
        const spacing = parseFloat(spacingEl?.value) || 0;
        const axis = axisEl?.value === 'z' ? 'z' : 'x';
        if (count < 2 || spacing === 0) return; // nothing to array / no offset
        count = Math.min(count, 200);           // sanity cap

        // Snapshot the sources before adding, since addBoard mutates `boards`.
        const sources = getSelectedBoards().map(b => ({
            length: b.length, width: b.width, thickness: b.thickness,
            color: b.color, orientation: b.orientation,
            x: b.mesh.position.x, y: b.mesh.position.y, z: b.mesh.position.z,
            rotationX: b.mesh.rotation.x,
            rotationY: b.mesh.rotation.y,
            rotationZ: b.mesh.rotation.z
        }));
        recordHistorySnapshot();
        const newIds = [];
        for (const src of sources) {
            for (let i = 1; i < count; i++) {
                const id = addBoard({
                    ...src,
                    x: src.x + (axis === 'x' ? spacing * i : 0),
                    z: src.z + (axis === 'z' ? spacing * i : 0),
                    select: false
                });
                newIds.push(id);
            }
        }
        setSelection([...selectedBoardIds, ...newIds]);
    }

    // Align & distribute -----------------------------------------------------
    // Operates on the multi-selection using each board's world-space AABB, so it
    // works for axis-aligned boxes regardless of their Y rotation.

    function getSelectionBoxes() {
        return getSelectedBoards().map(b => {
            b.mesh.updateMatrixWorld(true);
            return { board: b, box: new THREE.Box3().setFromObject(b.mesh) };
        });
    }

    // Re-centers the gizmo pivot and refreshes panel/inputs after a group move.
    function afterGroupTransform() {
        if (selectedBoardIds.size > 1) refreshGizmoAttachment();
        if (selectedBoardIds.size === 1) syncSelectedBoardInputsFromMesh();
        renderSelectedPanel();
    }

    // axis: 'x' | 'y' | 'z'; mode: 'min' | 'center' | 'max'.
    function alignSelection(axis, mode) {
        if (selectedBoardIds.size < 2) return;
        recordHistorySnapshot();
        const entries = getSelectionBoxes();
        const coordOf = (box) =>
            mode === 'min' ? box.min[axis] :
            mode === 'max' ? box.max[axis] :
            (box.min[axis] + box.max[axis]) / 2;

        let target;
        if (mode === 'min') target = Math.min(...entries.map(e => e.box.min[axis]));
        else if (mode === 'max') target = Math.max(...entries.map(e => e.box.max[axis]));
        else {
            const lo = Math.min(...entries.map(e => e.box.min[axis]));
            const hi = Math.max(...entries.map(e => e.box.max[axis]));
            target = (lo + hi) / 2;
        }
        for (const e of entries) {
            e.board.mesh.position[axis] += target - coordOf(e.box);
        }
        afterGroupTransform();
    }

    // Even spacing edge-to-edge: outermost boards stay put, the rest are spread so
    // the gaps between consecutive boxes are equal.
    function distributeSelection(axis) {
        if (selectedBoardIds.size < 3) return;
        recordHistorySnapshot();
        const entries = getSelectionBoxes();
        entries.sort((a, b) =>
            (a.box.min[axis] + a.box.max[axis]) - (b.box.min[axis] + b.box.max[axis]));
        const sizes = entries.map(e => e.box.max[axis] - e.box.min[axis]);
        const first = entries[0].box.min[axis];
        const last = entries[entries.length - 1].box.max[axis];
        const totalSize = sizes.reduce((s, v) => s + v, 0);
        const gap = (last - first - totalSize) / (entries.length - 1);
        let cursor = first;
        for (let i = 0; i < entries.length; i++) {
            entries[i].board.mesh.position[axis] += cursor - entries[i].box.min[axis];
            cursor += sizes[i] + gap;
        }
        afterGroupTransform();
    }

    // Cut optimization -------------------------------------------------------
    // Given every board in the project, work out how many standard stock pieces to
    // buy and how to cut each one, grouped by cross-section (width × thickness).
    // Pieces of the same cross-section are packed into stock-length boards with a
    // First-Fit-Decreasing 1D bin-pack, accounting for saw kerf between cuts.

    function openCutOpt() {
        const modal = screenEl.querySelector('#ww-cutopt-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        runCutOptimization();
    }
    function closeCutOpt() {
        screenEl.querySelector('#ww-cutopt-modal')?.classList.add('hidden');
    }

    function getCutOptSettings() {
        const kerf = Math.max(0, parseFloat(document.getElementById('ww-cutopt-kerf')?.value) || 0);
        const defaultStock = Math.max(1, parseFloat(document.getElementById('ww-cutopt-stock')?.value) || 96);
        return { kerf, defaultStock };
    }

    // Look up the purchasable stock length / display name for a cross-section by
    // matching the lumber catalog; fall back to the user's default stock length.
    function matchBoardType(width, thickness) {
        return BOARD_TYPES.find(bt =>
            Math.abs(bt.width - width) < 0.01 && Math.abs(bt.thickness - thickness) < 0.01) || null;
    }
    function profileLabel(width, thickness) {
        const t = matchBoardType(width, thickness);
        return t ? t.name : `${formatDim(thickness)}″ × ${formatDim(width)}″`;
    }

    // First-Fit-Decreasing 1D bin pack. Each bin is one stock board.
    // `used` already includes the kerf consumed between adjacent pieces.
    function packLinear(lengths, stockLength, kerf) {
        const items = lengths.slice().sort((a, b) => b - a);
        const bins = [];
        for (const len of items) {
            let placed = false;
            for (const bin of bins) {
                const add = (bin.pieces.length ? kerf : 0) + len;
                if (bin.used + add <= stockLength + 1e-6) {
                    bin.pieces.push(len);
                    bin.used += add;
                    placed = true;
                    break;
                }
            }
            if (!placed) bins.push({ pieces: [len], used: len });
        }
        return bins;
    }

    function runCutOptimization() {
        const summaryEl = document.getElementById('ww-cutopt-summary');
        const resultsEl = document.getElementById('ww-cutopt-results');
        if (!resultsEl || !summaryEl) return;

        if (boards.length === 0) {
            summaryEl.innerHTML = '';
            resultsEl.innerHTML = '<p class="ww-cutopt-empty">Add boards to the project first.</p>';
            return;
        }

        const { kerf, defaultStock } = getCutOptSettings();

        // Group every board by cross-section.
        const groups = new Map();
        for (const b of boards) {
            const key = `${round(b.width)}x${round(b.thickness)}`;
            let g = groups.get(key);
            if (!g) {
                const t = matchBoardType(b.width, b.thickness);
                g = {
                    width: b.width, thickness: b.thickness,
                    name: profileLabel(b.width, b.thickness),
                    stock: t ? t.length : defaultStock,
                    lengths: []
                };
                groups.set(key, g);
            }
            g.lengths.push(b.length);
        }

        let totalStockPieces = 0, totalStockLen = 0, totalUsedLen = 0;
        const warnings = [];
        const rendered = [];
        for (const g of groups.values()) {
            const overlen = g.lengths.filter(l => l > g.stock + 1e-6);
            if (overlen.length) {
                warnings.push(`${g.name}: ${overlen.length} piece(s) exceed the ${formatDim(g.stock)}″ stock length — buy longer stock or split the cut.`);
            }
            const bins = packLinear(g.lengths, g.stock, kerf);
            const usedLen = g.lengths.reduce((s, l) => s + l, 0);
            totalStockPieces += bins.length;
            totalStockLen += bins.length * g.stock;
            totalUsedLen += usedLen;
            rendered.push({ ...g, bins });
        }

        const wastePct = totalStockLen > 0 ? (1 - totalUsedLen / totalStockLen) * 100 : 0;

        summaryEl.innerHTML = `
            <div class="ww-cutopt-stat"><span>${totalStockPieces}</span><label>stock pieces</label></div>
            <div class="ww-cutopt-stat"><span>${groups.size}</span><label>profiles</label></div>
            <div class="ww-cutopt-stat"><span>${wastePct.toFixed(1)}%</span><label>offcut waste</label></div>`;

        let html = '';
        if (warnings.length) {
            html += `<div class="ww-cutopt-warn">${warnings.map(w => `<div>⚠ ${w}</div>`).join('')}</div>`;
        }
        for (const g of rendered) {
            html += `<div class="ww-cutopt-group">
                <div class="ww-cutopt-group-head">
                    <strong>${g.name}</strong>
                    <span>${g.bins.length} × ${formatDim(g.stock)}″ stock</span>
                </div>
                ${g.bins.map(bin => renderStockBar(bin, g.stock, kerf)).join('')}
            </div>`;
        }
        resultsEl.innerHTML = html;
    }

    // One horizontal stock board rendered as a flex bar of proportional segments:
    // cut pieces (labeled), thin kerf gaps, and a trailing offcut.
    function renderStockBar(bin, stock, kerf) {
        let segs = '';
        let used = 0;
        bin.pieces.forEach((len, idx) => {
            if (idx > 0) {
                used += kerf;
                segs += `<span class="ww-cut-kerf" style="width:${(kerf / stock) * 100}%"></span>`;
            }
            used += len;
            const pct = (len / stock) * 100;
            segs += `<span class="ww-cut-piece" style="width:${pct}%" title="${formatDim(len)}″">${pct > 6 ? formatDim(len) + '″' : ''}</span>`;
        });
        const leftover = Math.max(0, stock - used);
        if (leftover > 0.01) {
            const pct = (leftover / stock) * 100;
            segs += `<span class="ww-cut-waste" style="width:${pct}%" title="offcut ${formatDim(leftover)}″">${pct > 8 ? formatDim(leftover) + '″' : ''}</span>`;
        }
        return `<div class="ww-cut-bar">${segs}</div>`;
    }

    // Export -----------------------------------------------------------------

    // Triggers a browser download of `content` (string or Blob) as `filename`.
    function downloadFile(content, filename, mime) {
        const blob = content instanceof Blob ? content : new Blob([content], { type: mime || 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        // Revoke on the next tick so the download has a chance to start.
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    // Wraps a CSV cell, escaping per RFC 4180 (quote it if it contains comma/quote/newline).
    function csvCell(value) {
        const s = String(value ?? '');
        return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    }

    // Exports the cut list as CSV: one row per dimension group plus a totals row.
    // Mirrors the grouping shown in the Cut List panel.
    function exportCutListCsv() {
        if (boards.length === 0) {
            setSaveStatus('Nothing to export — add some boards first.', true);
            setTimeout(() => setSaveStatus(''), 2500);
            return;
        }
        const groups = new Map();
        boards.forEach(b => {
            const key = `${round(b.length)}x${round(b.width)}x${round(b.thickness)}`;
            const existing = groups.get(key);
            if (existing) existing.qty += 1;
            else groups.set(key, { length: b.length, width: b.width, thickness: b.thickness, qty: 1 });
        });
        const rows = [['Qty', 'Length (in)', 'Width (in)', 'Thickness (in)', 'Profile', 'Board feet']];
        let totalBoardFeet = 0;
        for (const g of groups.values()) {
            const bf = boardFeet(g.length, g.width, g.thickness) * g.qty;
            totalBoardFeet += bf;
            rows.push([
                g.qty,
                formatDim(g.length), formatDim(g.width), formatDim(g.thickness),
                profileLabel(g.width, g.thickness),
                bf.toFixed(2)
            ]);
        }
        rows.push([]);
        rows.push(['', '', '', '', 'Total board feet', totalBoardFeet.toFixed(2)]);
        const csv = rows.map(r => r.map(csvCell).join(',')).join('\r\n');
        downloadFile(csv, `cut-list-${exportTimestamp()}.csv`, 'text/csv;charset=utf-8');
        setSaveStatus('Cut list exported.');
        setTimeout(() => setSaveStatus(''), 2500);
    }

    // Exports the current 3D view as a PNG. Renders once synchronously and reads the
    // canvas in the same tick (no preserveDrawingBuffer needed) so the buffer is intact.
    function exportViewPng() {
        if (!renderer || !scene || !camera) return;
        renderer.render(scene, camera);
        renderer.domElement.toBlob(blob => {
            if (!blob) {
                setSaveStatus('PNG export failed.', true);
                setTimeout(() => setSaveStatus(''), 2500);
                return;
            }
            downloadFile(blob, `woodworking-${exportTimestamp()}.png`, 'image/png');
            setSaveStatus('View exported.');
            setTimeout(() => setSaveStatus(''), 2500);
        }, 'image/png');
    }

    // YYYYMMDD-HHMMSS for collision-free, sortable export filenames.
    function exportTimestamp() {
        const d = new Date();
        const p = n => String(n).padStart(2, '0');
        return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
    }

    // Keyboard ---------------------------------------------------------------

    function handleKeydown(e) {
        if (!screenEl || screenEl.classList.contains('hidden')) return;
        // While the cut-optimization modal is open, only handle Escape (to close it)
        // and let editor shortcuts (undo/delete/etc.) stay dormant.
        const cutoptModal = screenEl.querySelector('#ww-cutopt-modal');
        if (cutoptModal && !cutoptModal.classList.contains('hidden')) {
            if (e.key === 'Escape') { e.preventDefault(); closeCutOpt(); }
            return;
        }
        const projectsModal = screenEl.querySelector('#ww-projects-modal');
        if (projectsModal && !projectsModal.classList.contains('hidden')) {
            if (e.key === 'Escape') { e.preventDefault(); closeProjects(); }
            return;
        }
        // Don't intercept while the user is editing a text/number field.
        const t = e.target;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
        const meta = e.metaKey || e.ctrlKey;
        const k = e.key.toLowerCase();
        if (meta && k === 'z' && !e.shiftKey)            { e.preventDefault(); undo(); return; }
        if (meta && (k === 'y' || (e.shiftKey && k === 'z'))) { e.preventDefault(); redo(); return; }
        if (meta && k === 'c')                            { e.preventDefault(); copySelection(); return; }
        if (meta && k === 'v')                            { e.preventDefault(); pasteClipboard(); return; }
        if (e.key === 'Delete' || e.key === 'Backspace')  { e.preventDefault(); deleteSelected(); return; }
        if (e.key === 'Escape')                            { e.preventDefault(); clearSelection(); return; }
    }

    return { init, show, hide, getState, loadState };
})();

// Self-initialize on DOM ready (mirrors floorPlanEditor.js pattern). Safe no-op if markup is missing.
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => WoodworkingEditor.init());
    } else {
        WoodworkingEditor.init();
    }
}

export default WoodworkingEditor;
