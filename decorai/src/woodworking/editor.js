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
        screenEl.querySelector('[data-action="reset-view"]')?.addEventListener('click', resetCamera);
        screenEl.querySelector('[data-action="save"]')?.addEventListener('click', handleSave);
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

    function hide() {
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
        // Single selection: show that board's actual Y rotation.
        // Multi-selection: show the gizmo pivot's accumulated Y rotation since the drag started.
        let rad;
        if (selectedBoardIds.size === 1) {
            rad = getSelectedBoard()?.mesh.rotation.y ?? 0;
        } else {
            rad = new THREE.Euler().setFromQuaternion(gizmoPivot.quaternion, 'YXZ').y;
        }
        let deg = THREE.MathUtils.radToDeg(rad) % 360;
        if (deg > 180) deg -= 360;
        if (deg <= -180) deg += 360;
        badge.textContent = `${Math.round(deg)}°`;
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
            pointerDragState = { hitX: hit.point.x, hitZ: hit.point.z, planeY: hit.point.y, snapshotPushed: false };
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
        for (const [id, off] of groupDragOffsets) {
            const b = boards.find(x => x.id === id);
            if (!b) continue;
            b.mesh.position.x = hitPoint.x + off.dx;
            b.mesh.position.z = hitPoint.z + off.dz;
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
            // Y-axis rotation only — X/Z rotation isn't meaningful for boards on the ground.
            transformControls.showX = false;
            transformControls.showY = true;
            transformControls.showZ = false;
        }
        refreshGizmoAttachment();
    }

    function addBoard(opts = {}) {
        const length = opts.length ?? DEFAULTS.board.length;
        const width = opts.width ?? DEFAULTS.board.width;
        const thickness = opts.thickness ?? DEFAULTS.board.thickness;
        const color = opts.color ?? WOOD_COLORS[boards.length % WOOD_COLORS.length];

        // Three.js convention here: x=length, y=thickness (vertical), z=width
        const geom = new THREE.BoxGeometry(length, thickness, width);
        const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05 });
        const mesh = new THREE.Mesh(geom, mat);
        // Default position: stack a little so newly-added duplicates don't z-fight.
        const stackOffset = (opts.x === undefined && opts.z === undefined)
            ? boards.length * (thickness + 0.1)
            : 0;
        mesh.position.set(opts.x ?? 0, (opts.y ?? thickness / 2) + stackOffset, opts.z ?? 0);
        if (opts.rotationY) mesh.rotation.y = opts.rotationY;

        const id = opts.id ?? nextBoardId++;
        if (id >= nextBoardId) nextBoardId = id + 1;
        mesh.userData.boardId = id;
        scene.add(mesh);
        const board = { id, mesh, length, width, thickness, color };
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
        inputs.posZ.value = b.mesh.position.z.toFixed(2);
        inputs.rotY.value = THREE.MathUtils.radToDeg(b.mesh.rotation.y).toFixed(0);
    }

    function collectInputs() {
        return {
            length: screenEl.querySelector('[data-board-input="length"]'),
            width: screenEl.querySelector('[data-board-input="width"]'),
            thickness: screenEl.querySelector('[data-board-input="thickness"]'),
            posX: screenEl.querySelector('[data-board-input="posX"]'),
            posZ: screenEl.querySelector('[data-board-input="posZ"]'),
            rotY: screenEl.querySelector('[data-board-input="rotY"]')
        };
    }

    function handleSelectedBoardInputChange() {
        const b = getSelectedBoard();
        if (!b) return;
        const inputs = collectInputs();
        const length = parseFloat(inputs.length.value) || b.length;
        const width = parseFloat(inputs.width.value) || b.width;
        const thickness = parseFloat(inputs.thickness.value) || b.thickness;
        const posX = parseFloat(inputs.posX.value) || 0;
        const posZ = parseFloat(inputs.posZ.value) || 0;
        const rotY = parseFloat(inputs.rotY.value) || 0;

        // Rebuild geometry only if dimensions changed
        if (length !== b.length || width !== b.width || thickness !== b.thickness) {
            b.mesh.geometry.dispose();
            b.mesh.geometry = new THREE.BoxGeometry(length, thickness, width);
            b.length = length;
            b.width = width;
            b.thickness = thickness;
        }
        b.mesh.position.x = posX;
        b.mesh.position.z = posZ;
        b.mesh.position.y = thickness / 2; // keep on ground after thickness change
        b.mesh.rotation.y = THREE.MathUtils.degToRad(rotY);
        renderCutList();
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
        if (inputs.posX) inputs.posX.value = b.mesh.position.x.toFixed(2);
        if (inputs.posZ) inputs.posZ.value = b.mesh.position.z.toFixed(2);
        if (inputs.rotY) inputs.rotY.value = THREE.MathUtils.radToDeg(b.mesh.rotation.y).toFixed(0);
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
        const sb = window.__decoraiSupabase;
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
            const resp = await fetch('/api/woodworking-project', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ state: getState() })
            });
            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                console.error('[Woodworking] save failed:', resp.status, err);
                setSaveStatus(`Save failed: ${err.error || resp.status}`, true);
                return;
            }
            setSaveStatus('Saved.');
            setTimeout(() => setSaveStatus(''), 2500);
        } catch (err) {
            console.error('[Woodworking] save error:', err);
            setSaveStatus('Save failed. Check console.', true);
        }
    }

    async function loadFromServer() {
        const token = await getAccessToken();
        if (!token) return; // not logged in — nothing to load
        const resp = await fetch('/api/woodworking-project', {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!resp.ok) return;
        const data = await resp.json();
        if (data && data.state) loadState(data.state);
    }

    // Snapshot of everything an undo/redo or save needs to reconstruct the scene.
    function getState() {
        return {
            version: 2,
            boards: boards.map(b => ({
                id: b.id,
                length: b.length, width: b.width, thickness: b.thickness,
                color: b.color,
                x: b.mesh.position.x, y: b.mesh.position.y, z: b.mesh.position.z,
                rotationY: b.mesh.rotation.y
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
    }

    function undo() {
        if (historyPast.length === 0) return;
        historyFuture.push(getState());
        applySnapshot(historyPast.pop());
    }

    function redo() {
        if (historyFuture.length === 0) return;
        historyPast.push(getState());
        applySnapshot(historyFuture.pop());
    }

    // Copy/paste -------------------------------------------------------------

    function copySelection() {
        if (selectedBoardIds.size === 0) return;
        clipboard = getSelectedBoards().map(b => ({
            length: b.length, width: b.width, thickness: b.thickness,
            color: b.color,
            x: b.mesh.position.x, y: b.mesh.position.y, z: b.mesh.position.z,
            rotationY: b.mesh.rotation.y
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
                x: item.x + offset, y: item.y, z: item.z + offset,
                rotationY: item.rotationY,
                select: false
            });
            newIds.push(id);
        }
        setSelection(newIds);
    }

    // Keyboard ---------------------------------------------------------------

    function handleKeydown(e) {
        if (!screenEl || screenEl.classList.contains('hidden')) return;
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
