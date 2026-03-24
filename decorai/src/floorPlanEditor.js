import feather from 'feather-icons';

// ==========================================
// FLOOR PLAN EDITOR
// ==========================================

// Base URL for furniture assets (works in dev and deployed builds; public/furniture is copied to dist)
const FURNITURE_BASE = `${(import.meta.env.BASE_URL || '/').replace(/\/?$/, '/')}furniture/`;
function furnitureAssetUrl(id) {
    return `${FURNITURE_BASE}${id}.svg`;
}

const FloorPlanEditor = (() => {
    // DOM Elements
    let svg, wallsLayer, roomsLayer, furnitureLayer, labelsLayer, dimensionsLayer, cornersLayer, imageLayer;
    let layoutEditorScreen, layoutEditorBtn;
    
    // State
    let corners = [];
    let walls = [];
    let furniture = [];
    let labels = [];
    let freeformOpenings = []; // Doors/windows not attached to walls
    let referenceImages = [];
    let importedElements = []; // Track imported SVG elements for selection/deletion
    let undoStack = [];
    let redoStack = [];
    let hasUnsavedChanges = false;
    let isConvertingImage = false;
    
    // Current tool and drawing state
    let currentTool = 'select';
    let isDrawing = false;
    let drawingStartCorner = null;
    /** First wall click on empty space: store {x,y} until second click commits both corners + wall (so undo removes the whole segment). */
    let wallDrawPendingStart = null;
    let previewLine = null;
    let selectedElement = null;
    let selectedElements = []; // For multi-selection
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };
    let dragTarget = null;
    
    // Marquee selection state
    let isMarqueeSelecting = false;
    let marqueeStart = null;
    let marqueeBox = null;
    
    // Clipboard for copy/paste
    let clipboard = [];
    
    // Door/window placement state
    let openingStartPoint = null;
    let openingPreview = null;
    
    // Settings
    let scale = 50; // pixels per foot (must match gridSize)
    let unit = 'ft';
    let wallThickness = 8;
    let showGrid = false; // Toggle for grid overlay (starts hidden until reference image added)
    let snapToGrid = true;
    let showDimensions = true;
    let gridSize = 50; // pixels per grid unit (1 foot = 50 pixels)
    /** Furniture uses a finer snap than walls (quarter-foot) so placement and drags move in smaller steps */
    const FURNITURE_GRID_DIVISOR = 4;
    let snapDistance = 30; // pixels for corner snapping
    let cornerAngleSnapDistance = 25; // pixels: when moving a corner, snap to 90°/180° positions within this
    let snapRelease = 45; // pixels to break free once snapped (hysteresis)
    let axisSnapThreshold = 14; // pixels: snap to horizontal/vertical when within this
    let angleSnapDegrees = 2.5; // degrees: snap to 90°/180° only when very close (connecting lines)
    let currentSnapTarget = null; // { x, y, type } — tracks the active magnetic snap
    let zoom = 1;
    
    /** Reference image corner resize handles (SVG px) — larger = easier to grab / touch */
    const REF_IMAGE_HANDLE_SIZE = 32;
    const REF_IMAGE_HANDLE_HALF = REF_IMAGE_HANDLE_SIZE / 2;
    
    // Panning state
    let isPanning = false;
    let panStart = { x: 0, y: 0 };
    let panOffset = { x: 0, y: 0 };
    
    // Rotation state
    let isRotating = false;
    let rotationStart = 0;
    let rotationTarget = null;
    
    // Helper to check if a fill color is white/near-white
    function isWhiteFill(color) {
        if (!color) return false;
        const c = color.toLowerCase().trim();
        
        // Direct white values
        if (c === '#fff' || c === '#ffffff' || c === 'white' || c === 'none') return c !== 'none';
        
        // Near-white hex values
        if (c.match(/^#f[8-9a-f]f[8-9a-f]f[8-9a-f]$/)) return true;
        
        // RGB format
        const rgbMatch = c.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);
        if (rgbMatch) {
            const [, r, g, b] = rgbMatch.map(Number);
            return r >= 248 && g >= 248 && b >= 248;
        }
        
        // RGBA format
        const rgbaMatch = c.match(/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);
        if (rgbaMatch) {
            const [, r, g, b, a] = rgbaMatch;
            if (parseFloat(a) < 0.1) return false;
            return parseInt(r) >= 248 && parseInt(g) >= 248 && parseInt(b) >= 248;
        }
        
        return false;
    }
    
    // Furniture library
    const furnitureLibrary = [
        { id: 'sofa', name: 'Sofa', category: 'living', width: 7, height: 3, color: '#8B7355' },
        { id: 'armchair', name: 'Armchair', category: 'living', width: 3, height: 3, color: '#A0896B' },
        { id: 'coffee-table', name: 'Coffee Table', category: 'living', width: 4, height: 2, color: '#A0522D' },
        { id: 'floor-plant', name: 'Floor Plant', category: 'living', width: 1.5, height: 1.5, color: '#2E7D32' },
        { id: 'tv-stand', name: 'TV Stand', category: 'living', width: 5, height: 1.5, color: '#4A4A4A' },
        { id: 'bookshelf', name: 'Bookshelf', category: 'living', width: 4, height: 1, color: '#8B4513' },
        { id: 'queen-bed', name: 'Queen Bed', category: 'bedroom', width: 5, height: 6.5, color: '#D4C4B7' },
        { id: 'king-bed', name: 'King Bed', category: 'bedroom', width: 6.5, height: 6.5, color: '#D4C4B7' },
        { id: 'twin-bed', name: 'Twin Bed', category: 'bedroom', width: 3.5, height: 6.5, color: '#D4C4B7' },
        { id: 'nightstand', name: 'Nightstand', category: 'bedroom', width: 2, height: 2, color: '#A0522D' },
        { id: 'dresser', name: 'Dresser', category: 'bedroom', width: 5, height: 2, color: '#8B4513' },
        { id: 'wardrobe', name: 'Wardrobe', category: 'bedroom', width: 4, height: 2, color: '#5D4037' },
        { id: 'dining-table', name: 'Dining Table', category: 'dining', width: 6, height: 3.5, color: '#A0522D' },
        { id: 'dining-chair', name: 'Dining Chair', category: 'dining', width: 1.5, height: 1.5, color: '#CD853F' },
        { id: 'buffet', name: 'Buffet', category: 'dining', width: 5, height: 1.5, color: '#8B4513' },
        { id: 'fridge', name: 'Refrigerator', category: 'kitchen', width: 3, height: 3, color: '#E0E0E0' },
        { id: 'stove', name: 'Stove', category: 'kitchen', width: 2.5, height: 2.5, color: '#333' },
        { id: 'sink-kitchen', name: 'Kitchen Sink', category: 'kitchen', width: 3, height: 2, color: '#E0E0E0' },
        { id: 'dishwasher', name: 'Dishwasher', category: 'kitchen', width: 2, height: 2, color: '#E0E0E0' },
        { id: 'counter', name: 'Counter', category: 'kitchen', width: 4, height: 2, color: '#9E9E9E' },
        { id: 'toilet', name: 'Toilet', category: 'bathroom', width: 1.5, height: 2.5, color: '#FAFAFA' },
        { id: 'bathtub', name: 'Bathtub', category: 'bathroom', width: 2.5, height: 5, color: '#FAFAFA' },
        { id: 'shower', name: 'Shower', category: 'bathroom', width: 3, height: 3, color: '#E3F2FD' },
        { id: 'sink-bath', name: 'Bathroom Sink', category: 'bathroom', width: 2, height: 1.5, color: '#FAFAFA' },
        { id: 'towel-holder', name: 'Towel Holder', category: 'bathroom', width: 1.5, height: 0.5, color: '#C0C0C0' },
        { id: 'floor-mat', name: 'Floor Mat', category: 'bathroom', width: 2, height: 3, color: '#8B7355' },
        { id: 'light-fixture', name: 'Light Fixture', category: 'lighting', width: 1, height: 1, color: '#F5F5DC' },
        { id: 'desk', name: 'Desk', category: 'office', width: 5, height: 2.5, color: '#8D6E63' },
        { id: 'office-chair', name: 'Office Chair', category: 'office', width: 2, height: 2, color: '#333' },
        { id: 'filing-cabinet', name: 'Filing Cabinet', category: 'office', width: 1.5, height: 2, color: '#757575' },
    ];
    
    const furnitureSvgCache = {};

    async function loadFurnitureSvgs() {
        const ids = furnitureLibrary.map(f => f.id);
        await Promise.all(ids.map(async (id) => {
            try {
                const res = await fetch(furnitureAssetUrl(id));
                if (!res.ok) return;
                const text = await res.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'image/svg+xml');
                const svgEl = doc.querySelector('svg');
                if (svgEl) furnitureSvgCache[id] = svgEl;
            } catch (e) { /* ignore missing files */ }
        }));
    }

    // Initialize the editor
    function init() {
        layoutEditorBtn = document.getElementById('layout-editor-btn');
        layoutEditorScreen = document.getElementById('layout-editor-screen');
        
        if (!layoutEditorBtn || !layoutEditorScreen) return;
        
        svg = document.getElementById('layout-svg');
        imageLayer = document.getElementById('image-layer');
        wallsLayer = document.getElementById('walls-layer');
        roomsLayer = document.getElementById('rooms-layer');
        furnitureLayer = document.getElementById('furniture-layer');
        labelsLayer = document.getElementById('labels-layer');
        dimensionsLayer = document.getElementById('dimensions-layer');
        cornersLayer = document.getElementById('corners-layer');
        
        // Button to open editor
        layoutEditorBtn.addEventListener('click', show);
        
        // Image drag and drop
        const canvasWrapper = document.getElementById('layout-canvas-wrapper');
        canvasWrapper.addEventListener('dragover', handleImageDragOver);
        canvasWrapper.addEventListener('dragleave', handleImageDragLeave);
        canvasWrapper.addEventListener('drop', handleImageDrop);
        
        // Back button (warn if unsaved changes)
        document.getElementById('layout-editor-back-btn')?.addEventListener('click', handleBackFromEditor);
        
        // Tool buttons
        document.querySelectorAll('.floor-tool').forEach(btn => {
            btn.addEventListener('click', () => selectTool(btn.dataset.tool));
        });
        
        // Action buttons
        document.getElementById('layout-undo-btn')?.addEventListener('click', undo);
        document.getElementById('layout-redo-btn')?.addEventListener('click', redo);
        document.getElementById('layout-select-all-btn')?.addEventListener('click', selectAll);
        document.getElementById('layout-clear-btn')?.addEventListener('click', clearAll);
        
        // Feng Shui
        document.getElementById('feng-shui-btn')?.addEventListener('click', startFengShuiAnalysis);
        updateFengShuiButtonState();

        // Export
        document.getElementById('layout-export-btn')?.addEventListener('click', toggleExportMenu);
        document.getElementById('export-png-btn')?.addEventListener('click', () => exportAs('png'));
        document.getElementById('export-svg-btn')?.addEventListener('click', () => exportAs('svg'));
        document.getElementById('export-layout-file-btn')?.addEventListener('click', () => { document.getElementById('export-menu')?.classList.remove('show'); downloadLayoutFile(); });
        
        // Close export menu when clicking outside
        document.addEventListener('click', (e) => {
            const exportDropdown = document.querySelector('.export-dropdown');
            if (exportDropdown && !exportDropdown.contains(e.target)) {
                document.getElementById('export-menu')?.classList.remove('show');
            }
        });
        
        // Settings
        document.getElementById('scale-select')?.addEventListener('change', (e) => {
            scale = parseInt(e.target.value);
            updateCanvasInfo();
            redrawAll();
        });
        
        document.getElementById('unit-select')?.addEventListener('change', (e) => {
            unit = e.target.value;
            updateCanvasInfo();
            redrawAll();
        });
        
        document.getElementById('show-grid')?.addEventListener('change', (e) => {
            showGrid = e.target.checked;
            document.getElementById('grid-background').style.display = showGrid ? 'block' : 'none';
        });
        
        document.getElementById('snap-to-grid')?.addEventListener('change', (e) => {
            snapToGrid = e.target.checked;
            const row = document.getElementById('snap-threshold-row');
            if (row) row.style.display = snapToGrid ? '' : 'none';
        });
        
        const snapThresholdEl = document.getElementById('snap-threshold');
        const snapThresholdValueEl = document.getElementById('snap-threshold-value');
        if (snapThresholdEl) {
            snapThresholdEl.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                snapDistance = val;
                snapRelease = Math.min(60, Math.max(val + 15, 40));
                axisSnapThreshold = Math.max(8, Math.round(val * 0.5));
                if (snapThresholdValueEl) snapThresholdValueEl.textContent = val + 'px';
            });
        }
        
        document.getElementById('snap-threshold-row').style.display = snapToGrid ? '' : 'none';
        
        document.getElementById('show-dimensions')?.addEventListener('change', (e) => {
            showDimensions = e.target.checked;
            redrawDimensions();
        });
        
        document.getElementById('wall-thickness')?.addEventListener('input', (e) => {
            wallThickness = parseInt(e.target.value);
            document.getElementById('wall-thickness-value').textContent = wallThickness + 'px';
            redrawWalls();
        });
        
        // Zoom controls
        document.getElementById('zoom-in-btn')?.addEventListener('click', () => setZoom(zoom + 0.1));
        document.getElementById('zoom-out-btn')?.addEventListener('click', () => setZoom(zoom - 0.1));
        document.getElementById('zoom-fit-btn')?.addEventListener('click', fitToScreen);
        
        // Canvas events
        svg.addEventListener('mousedown', handleMouseDown);
        svg.addEventListener('mousemove', handleMouseMove);
        svg.addEventListener('mouseup', handleMouseUp);
        
        // Scroll/trackpad for pan and zoom (Figma-style)
        canvasWrapper?.addEventListener('wheel', handleWheel, { passive: false });
        svg.addEventListener('mouseleave', handleMouseUp);
        
        // Touch support
        svg.addEventListener('touchstart', handleTouchStart, { passive: false });
        svg.addEventListener('touchmove', handleTouchMove, { passive: false });
        svg.addEventListener('touchend', handleTouchEnd);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyDown);
        
        // Warn when leaving the page with unsaved changes (tab close, refresh, navigate away)
        window.addEventListener('beforeunload', (e) => {
            if (layoutEditorScreen && !layoutEditorScreen.classList.contains('hidden') && hasUnsavedChanges) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
        
        // Furniture categories - toggle on/off
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                updateFurnitureGrid();
            });
        });
        
        // Search furniture
        document.getElementById('furniture-search')?.addEventListener('input', () => {
            updateFurnitureGrid();
        });
        
        // Properties panel
        document.getElementById('prop-width')?.addEventListener('change', updateSelectedProperties);
        document.getElementById('prop-height')?.addEventListener('change', updateSelectedProperties);
        document.getElementById('prop-rotation')?.addEventListener('change', updateSelectedProperties);
        document.getElementById('delete-selected-btn')?.addEventListener('click', deleteSelected);
        document.getElementById('door-reverse-swing-btn')?.addEventListener('click', reverseSelectedDoorSwing);
        document.getElementById('door-invert-direction-btn')?.addEventListener('click', invertSelectedDoorDirection);
        document.getElementById('rotate-left-btn')?.addEventListener('click', () => rotateSelectedBy(-90));
        document.getElementById('rotate-right-btn')?.addEventListener('click', () => rotateSelectedBy(90));
        
        // Load furniture SVGs then populate the grid
        loadFurnitureSvgs().then(() => updateFurnitureGrid());
        
        // Update canvas info
        updateCanvasInfo();
    }
    
    function show() {
        layoutEditorScreen.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        const stateToRestore = typeof window.__decoraiGetLayoutStateToRestore === 'function' ? window.__decoraiGetLayoutStateToRestore() : null;
        if (stateToRestore) {
            const state = stateToRestore && (stateToRestore.state !== undefined ? stateToRestore.state : stateToRestore);
            if (state) restoreState(state);
            if (stateToRestore && stateToRestore.layoutId) window.__decoraiCurrentLayoutId = stateToRestore.layoutId;
        }
        const layoutName = (stateToRestore && stateToRestore.name) || 'Untitled layout';
        if (typeof window.__decoraiOnLayoutEditorShown === 'function') window.__decoraiOnLayoutEditorShown({ name: layoutName });
        feather.replace();
        updateCanvasInfo();
        initRulers();
        setInitialZoom();
    }
    
    function setInitialZoom() {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return;
        // Fit 50 feet across the smaller dimension
        const targetFeet = 50;
        const dim = Math.min(wrapper.clientWidth, wrapper.clientHeight);
        zoom = dim / (targetFeet * scale);
        panOffset = { x: 0, y: 0 };
        applyTransform();
    }
    
    function hide() {
        layoutEditorScreen.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    async function handleBackFromEditor() {
        if (hasUnsavedChanges && !layoutEditorScreen.classList.contains('hidden')) {
            let proceed = true;
            if (window.showConfirmDialog) {
                proceed = await window.showConfirmDialog(
                    'You have unsaved changes. Leave without exporting?',
                    'Unsaved changes',
                    'Leave without exporting',
                    'Cancel'
                );
            }
            if (!proceed) return;
        }
        hide();
    }
    
    function selectTool(tool) {
        // Reset opening placement state when switching tools
        openingStartPoint = null;
        removeOpeningPreview();
        
        currentTool = tool;
        document.querySelectorAll('.floor-tool').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tool === tool);
        });
        
        // Update cursor and reference image interactivity
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (tool === 'select') {
            wrapper.style.cursor = 'default';
            imageLayer.querySelectorAll('.reference-image').forEach(img => img.classList.add('selectable'));
        } else {
            wrapper.style.cursor = 'crosshair';
            imageLayer.querySelectorAll('.reference-image').forEach(img => img.classList.remove('selectable'));
            removeRefImageHandles();
        }
        
        // Cancel any drawing in progress
        cancelDrawing();
        deselectAll();
    }
    
    function getMousePos(e, forceNoSnap) {
        const rect = svg.getBoundingClientRect();
        let x = (e.clientX - rect.left - panOffset.x) / zoom;
        let y = (e.clientY - rect.top - panOffset.y) / zoom;
        
        if (snapToGrid && !forceNoSnap) {
            x = Math.round(x / gridSize) * gridSize;
            y = Math.round(y / gridSize) * gridSize;
        }
        
        return { x, y };
    }
    
    function handleMouseDown(e) {
        // Check for panning (Cmd/Ctrl + drag)
        if (e.metaKey || e.ctrlKey) {
            isPanning = true;
            panStart = { x: e.clientX, y: e.clientY };
            svg.style.cursor = 'grabbing';
            e.preventDefault();
            return;
        }
        
        const pos = getMousePos(e, currentTool === 'select');
        const target = e.target;
        
        if (currentTool === 'select') {
            // Check if clicking on a scale handle
            if (target.classList.contains('scale-handle')) {
                const corner = target.dataset.scaleCorner;
                isScaling = true;
                scaleHandle = corner;
                scaleBBoxStart = getSelectionBBox();
                scaleStartPositions = snapshotPositions();
                addToHistory();
                svg.style.cursor = target.style.cursor;
                e.preventDefault();
                return;
            }
            
            // Check if clicking on the selection bounding box (drag to move)
            if (target.classList.contains('scale-bbox')) {
                addToHistory(); // Save pre-drag state so undo restores positions (not post-drag)
                isDragging = true;
                dragTarget = { type: 'selection-bbox', element: null };
                dragOffset = { x: pos.x, y: pos.y };
                svg.style.cursor = 'move';
                e.preventDefault();
                return;
            }
            
            // Check if clicking on selection (group) rotation handle
            if (target.closest('.selection-rotation-handle')) {
                const bbox = getSelectionBBox();
                if (bbox && selectedElements.length > 0) {
                    addToHistory(); // Pre-rotation state for undo
                    isRotatingSelection = true;
                    selectionRotationCenter = { x: bbox.x + bbox.width / 2, y: bbox.y + bbox.height / 2 };
                    selectionRotationStart = Math.atan2(pos.y - selectionRotationCenter.y, pos.x - selectionRotationCenter.x) * 180 / Math.PI;
                    svg.style.cursor = 'grab';
                    return;
                }
            }
            
            // Check if clicking on rotation handle
            if (target.closest('.rotation-handle')) {
                const handleEl = target.closest('.rotation-handle');
                const furnitureId = handleEl.dataset.furnitureId;
                const item = furniture.find(f => f.id === furnitureId);
                if (item) {
                    addToHistory(); // Pre-rotation state for undo
                    isRotating = true;
                    rotationTarget = item;
                    // Calculate initial angle from furniture center to mouse
                    const centerX = item.x + item.width / 2;
                    const centerY = item.y + item.height / 2;
                    rotationStart = Math.atan2(pos.y - centerY, pos.x - centerX) * 180 / Math.PI - item.rotation;
                    svg.style.cursor = 'grabbing';
                    return;
                }
            }
            
            // Check if clicking on a corner
            if (target.classList.contains('corner-node')) {
                const cornerId = target.dataset.cornerId;
                const corner = corners.find(c => c.id === cornerId);
                if (corner) {
                    addToHistory(); // Pre-drag / pre-gesture state for undo
                    isDragging = true;
                    dragTarget = { type: 'corner', element: corner };
                    return;
                }
            }
            
            // Check if clicking on furniture
            if (target.closest('.furniture-element')) {
                const furnitureEl = target.closest('.furniture-element');
                const furnitureId = furnitureEl.dataset.furnitureId;
                const item = furniture.find(f => f.id === furnitureId);
                if (item) {
                    if (e.shiftKey) {
                        addToSelection(item, 'furniture');
                    } else if (!isElementSelected(item, 'furniture')) {
                        selectElement(item, 'furniture');
                    }
                    addToHistory(); // Pre-drag state for undo
                    isDragging = true;
                    dragTarget = { type: 'furniture', element: item };
                    dragOffset = { x: pos.x - item.x, y: pos.y - item.y };
                    return;
                }
            }
            
            // Check if clicking on a label
            if (target.classList.contains('room-label')) {
                const labelId = target.dataset.labelId;
                const label = labels.find(l => l.id === labelId);
                if (label) {
                    if (e.shiftKey) {
                        addToSelection(label, 'label');
                    } else if (!isElementSelected(label, 'label')) {
                        selectElement(label, 'label');
                    }
                    addToHistory(); // Pre-drag state for undo
                    isDragging = true;
                    dragTarget = { type: 'label', element: label };
                    dragOffset = { x: pos.x - label.x, y: pos.y - label.y };
                    return;
                }
            }
            
            // Reference image (drawn under walls; only receives clicks where not covered)
            if (target.closest('.reference-image')) {
                const refEl = target.closest('.reference-image');
                const rid = refEl.dataset.refImageId;
                const refImg = referenceImages.find(r => r.id === rid);
                if (refImg) {
                    if (e.shiftKey) {
                        addToSelection(refImg, 'referenceImage');
                        return;
                    }
                    if (!isElementSelected(refImg, 'referenceImage')) {
                        selectElement(refImg, 'referenceImage');
                    }
                    const refOnly =
                        selectedElements.length > 0 && selectedElements.every(s => s.type === 'referenceImage');
                    addToHistory(); // Pre-drag state for undo
                    isDragging = true;
                    dragTarget = { type: 'referenceImage' };
                    if (refOnly && selectedElements.length === 1) {
                        dragOffset = { x: pos.x - refImg.x, y: pos.y - refImg.y };
                    } else {
                        dragOffset = { x: pos.x, y: pos.y };
                    }
                    e.preventDefault();
                    return;
                }
            }
            
            // Check if clicking on an imported SVG element
            if (target.classList.contains('imported-svg-element')) {
                const importedId = target.dataset.importedId;
                const imported = importedElements.find(i => i.id === importedId);
                if (imported) {
                    if (e.shiftKey) {
                        addToSelection(imported, 'imported');
                    } else {
                        selectElement(imported, 'imported');
                    }
                    return;
                }
            }
            
            // Check if clicking inside a group
            const parentGroup = target.closest('.imported-svg-group');
            if (parentGroup) {
                let clickedElement = target;
                const validTags = ['path', 'line', 'rect', 'polyline', 'polygon', 'circle', 'ellipse'];
                if (validTags.includes(clickedElement.tagName.toLowerCase())) {
                    let existingId = clickedElement.dataset.importedId;
                    let imported;
                    
                    if (existingId) {
                        imported = importedElements.find(i => i.id === existingId);
                    }
                    
                    if (!imported) {
                        const newId = 'imported-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
                        clickedElement.dataset.importedId = newId;
                        clickedElement.classList.add('imported-svg-element');
                        
                        imported = {
                            id: newId,
                            element: clickedElement,
                            type: clickedElement.tagName.toLowerCase()
                        };
                        importedElements.push(imported);
                    }
                    
                    if (e.shiftKey) {
                        addToSelection(imported, 'imported');
                    } else {
                        selectElement(imported, 'imported');
                    }
                    return;
                }
            }
            
            // Check if clicking on a door or window (opening)
            const openingEl = target.closest('.door-element') || target.closest('.window-element');
            if (openingEl) {
                const wallId = openingEl.dataset.wallId;
                const openingId = openingEl.dataset.openingId;
                let wall = wallId ? walls.find(w => w.id === wallId) : null;
                let opening = wall?.openings?.find(o => o.id === openingId);
                if (!opening && openingEl.classList.contains('freeform-opening')) {
                    opening = freeformOpenings.find(o => o.id === openingId);
                }
                if (opening) {
                    const payload = wall ? { wall, opening } : { opening, freeform: true };
                    if (e.shiftKey) {
                        addToSelection(payload, 'opening');
                        return;
                    }
                    if (!isElementSelected(payload, 'opening')) {
                        selectElement(payload, 'opening');
                    }
                    addToHistory(); // Pre-drag state for undo
                    isDragging = true;
                    dragTarget = { type: 'opening' };
                    dragOffset = { x: pos.x, y: pos.y };
                    return;
                }
            }
            
            // Check if clicking on a wall — but if click is near a corner, select/drag the corner instead
            if (target.classList.contains('wall-line')) {
                const nearbyCorner = findNearbyCorner(pos);
                if (nearbyCorner) {
                    deselectAll();
                    addToHistory(); // Pre-drag state for undo
                    isDragging = true;
                    dragTarget = { type: 'corner', element: nearbyCorner };
                    return;
                }
                const wallId = target.dataset.wallId;
                const wall = walls.find(w => w.id === wallId);
                if (wall) {
                    if (e.shiftKey) {
                        addToSelection(wall, 'wall');
                    } else if (!isElementSelected(wall, 'wall')) {
                        selectElement(wall, 'wall');
                    }
                    addToHistory(); // Pre-drag state for undo
                    isDragging = true;
                    dragTarget = { type: 'wall', element: wall };
                    dragOffset = { x: pos.x, y: pos.y };
                    return;
                }
            }
            
            // Clicked on empty space - start marquee selection
            deselectAll();
            isMarqueeSelecting = true;
            marqueeStart = pos;
            createMarqueeBox(pos);
            
        } else if (currentTool === 'wall') {
            const rawPos = getMousePos(e, true);
            let targetCorner = null;
            let snapPos = rawPos;
            
            if (snapToGrid) {
                targetCorner = findNearbyCorner(rawPos);
                if (!targetCorner) {
                    const wallSnap = findSnapPointOnWall(rawPos, drawingStartCorner);
                    if (wallSnap) {
                        targetCorner = splitWallAtPoint(wallSnap.wall, wallSnap.point);
                        redrawAll();
                    }
                }
                if (targetCorner) {
                    snapPos = rawPos;
                }
            }
            
            const hasSegmentStart = !!(drawingStartCorner || wallDrawPendingStart);
            
            if (hasSegmentStart) {
                // Second click: finish segment — one history entry for corners + wall together
                if (snapToGrid && !targetCorner) {
                    snapPos = applyDrawingSnaps(
                        drawingStartCorner || { x: wallDrawPendingStart.x, y: wallDrawPendingStart.y, walls: [] },
                        snapPos
                    );
                }
                
                if (drawingStartCorner) {
                    if (targetCorner) {
                        if (targetCorner.id !== drawingStartCorner.id) {
                            addToHistory();
                            createWall(drawingStartCorner, targetCorner, { skipHistory: true });
                            drawingStartCorner = targetCorner;
                            wallDrawPendingStart = null;
                        }
                    } else {
                        addToHistory();
                        const endCorner = createCorner(snapPos, { skipHistory: true });
                        if (endCorner.id !== drawingStartCorner.id) {
                            createWall(drawingStartCorner, endCorner, { skipHistory: true });
                            drawingStartCorner = endCorner;
                        }
                        wallDrawPendingStart = null;
                    }
                } else if (wallDrawPendingStart) {
                    const dx = snapPos.x - wallDrawPendingStart.x;
                    const dy = snapPos.y - wallDrawPendingStart.y;
                    if (Math.sqrt(dx * dx + dy * dy) >= 1) {
                        addToHistory();
                        const startCorner = createCorner(wallDrawPendingStart, { skipHistory: true });
                        const endCorner = targetCorner || createCorner(snapPos, { skipHistory: true });
                        if (endCorner.id !== startCorner.id) {
                            createWall(startCorner, endCorner, { skipHistory: true });
                        }
                        drawingStartCorner = endCorner;
                        wallDrawPendingStart = null;
                    }
                }
            } else {
                // First click: use existing corner / split, or defer corner until segment completes (undo-friendly)
                if (targetCorner) {
                    drawingStartCorner = targetCorner;
                } else {
                    wallDrawPendingStart = { x: snapPos.x, y: snapPos.y };
                }
            }
            isDrawing = true;
            currentSnapTarget = null;
            removeWallSnapIndicator();
            removeMagneticIndicator();
            
        } else if (currentTool === 'room') {
            const rawPos = getMousePos(e, true);
            isDrawing = true;
            drawingStartCorner = { x: rawPos.x, y: rawPos.y };
            
        } else if (currentTool === 'door' || currentTool === 'window') {
            const rawPos = getMousePos(e, true);
            
            if (!openingStartPoint) {
                const resolved = resolveWallOpeningEndpoint(rawPos);
                if (resolved) {
                    openingStartPoint = {
                        x: resolved.x,
                        y: resolved.y,
                        wall: resolved.wall,
                        projected: resolved.projected
                    };
                } else {
                    const p = snapFreeformOpeningPoint(rawPos);
                    openingStartPoint = { x: p.x, y: p.y, wall: null, projected: null };
                }
                
                showOpeningStartMarker(openingStartPoint);
            } else {
                const resolvedEnd = resolveWallOpeningEndpoint(rawPos);
                
                if (openingStartPoint.wall && resolvedEnd && resolvedEnd.wall === openingStartPoint.wall) {
                    placeOpeningBetweenPoints(
                        openingStartPoint.wall,
                        openingStartPoint.projected,
                        resolvedEnd.projected,
                        currentTool
                    );
                } else {
                    const startPt = { x: openingStartPoint.x, y: openingStartPoint.y };
                    let endPt = resolvedEnd
                        ? { x: resolvedEnd.x, y: resolvedEnd.y }
                        : snapFreeformOpeningPoint(rawPos);
                    if (snapToGrid) {
                        endPt = applyDrawingSnaps(
                            { x: startPt.x, y: startPt.y, walls: [] },
                            endPt
                        );
                    }
                    createFreeformOpening(startPt, endPt, currentTool);
                }
                
                openingStartPoint = null;
                removeOpeningPreview();
            }
            
        } else if (currentTool === 'label') {
            // Create label at click position
            const text = prompt('Enter room label:');
            if (text) {
                createLabel(pos, text);
            }
        }
    }
    
    function handleMouseMove(e) {
        // Handle panning
        if (isPanning) {
            const dx = e.clientX - panStart.x;
            const dy = e.clientY - panStart.y;
            
            panOffset.x += dx;
            panOffset.y += dy;
            panStart = { x: e.clientX, y: e.clientY };
            
            applyTransform();
            return;
        }
        
        const pos = getMousePos(e, currentTool === 'select');
        
        // Handle scaling
        if (isScaling && scaleHandle) {
            applyScale(scaleHandle, pos);
            return;
        }
        
        // Handle group selection rotation
        if (isRotatingSelection && selectionRotationCenter) {
            const currentAngle = Math.atan2(pos.y - selectionRotationCenter.y, pos.x - selectionRotationCenter.x) * 180 / Math.PI;
            let delta = currentAngle - selectionRotationStart;
            if (Math.abs(delta) > 180) delta -= 360 * Math.sign(delta);
            selectionRotationStart = currentAngle;
            rotateSelectionBy(delta, selectionRotationCenter, true);
            return;
        }
        
        // Handle rotation
        if (isRotating && rotationTarget) {
            const centerX = rotationTarget.x + rotationTarget.width / 2;
            const centerY = rotationTarget.y + rotationTarget.height / 2;
            let angle = Math.atan2(pos.y - centerY, pos.x - centerX) * 180 / Math.PI - rotationStart;
            
            // Normalize angle to 0-360
            angle = ((angle % 360) + 360) % 360;
            
            // Snap to wall angles and cardinal directions
            angle = snapToWallAngle(angle);
            
            rotateFurniture(rotationTarget, angle);
            return;
        }
        
        // Update mouse coordinates display
        const coordsDisplay = document.getElementById('mouse-coords');
        if (coordsDisplay) {
            const realX = pos.x / scale;
            const realY = pos.y / scale;
            coordsDisplay.textContent = formatDimension(realX) + ' × ' + formatDimension(realY);
        }
        
        // Handle marquee selection
        if (isMarqueeSelecting && marqueeStart) {
            updateMarqueeBox(marqueeStart, pos);
            return;
        }
        
        // Handle dragging
        if (isDragging && dragTarget) {
            if (dragTarget.type === 'corner') {
                moveCorner(dragTarget.element, pos);
            } else if (dragTarget.type === 'furniture') {
                if (selectedElements.length > 1) {
                    const dx = pos.x - dragOffset.x;
                    const dy = pos.y - dragOffset.y;
                    moveSelectedElements(dx, dy);
                    dragOffset = { x: pos.x, y: pos.y };
                } else {
                    moveFurniture(dragTarget.element, pos.x - dragOffset.x, pos.y - dragOffset.y);
                }
            } else if (dragTarget.type === 'label') {
                if (selectedElements.length > 1) {
                    const dx = pos.x - dragOffset.x;
                    const dy = pos.y - dragOffset.y;
                    moveSelectedElements(dx, dy);
                    dragOffset = { x: pos.x, y: pos.y };
                } else {
                    moveLabel(dragTarget.element, pos.x - dragOffset.x, pos.y - dragOffset.y);
                }
            } else if (dragTarget.type === 'referenceImage') {
                const refOnly =
                    selectedElements.length > 0 && selectedElements.every(s => s.type === 'referenceImage');
                if (refOnly && selectedElements.length === 1) {
                    const ref = selectedElements[0].element;
                    ref.x = pos.x - dragOffset.x;
                    ref.y = pos.y - dragOffset.y;
                    const imgEl = imageLayer.querySelector(`[data-ref-image-id="${ref.id}"]`);
                    if (imgEl) {
                        imgEl.setAttribute('x', ref.x);
                        imgEl.setAttribute('y', ref.y);
                    }
                    updateAllHandlePositions(ref);
                } else {
                    const dx = pos.x - dragOffset.x;
                    const dy = pos.y - dragOffset.y;
                    dragOffset = { x: pos.x, y: pos.y };
                    moveSelectedElements(dx, dy);
                }
                showScaleHandles();
            } else if (dragTarget.type === 'opening') {
                const dx = pos.x - dragOffset.x;
                const dy = pos.y - dragOffset.y;
                dragOffset = { x: pos.x, y: pos.y };
                const onlyOpenings =
                    selectedElements.length > 0 &&
                    selectedElements.every(s => s.type === 'opening');
                if (onlyOpenings) {
                    for (const sel of selectedElements) {
                        if (sel.type !== 'opening') continue;
                        const el = sel.element;
                        if (el.freeform) {
                            slideFreeformOpeningByDelta(el.opening, dx, dy);
                        } else {
                            slideWallOpeningByDelta(el.wall, el.opening, dx, dy);
                        }
                    }
                    redrawWalls();
                } else {
                    moveSelectedElements(dx, dy);
                }
                showScaleHandles();
            } else if (dragTarget.type === 'wall' || dragTarget.type === 'selection-bbox') {
                const dx = pos.x - dragOffset.x;
                const dy = pos.y - dragOffset.y;
                moveSelectedElements(dx, dy);
                dragOffset = { x: pos.x, y: pos.y };
                showScaleHandles();
            }
            return;
        }
        
        // Handle drawing preview
        if (isDrawing) {
            if (currentTool === 'wall' && (drawingStartCorner || wallDrawPendingStart)) {
                const rawPos = getMousePos(e, true);
                let previewEnd = rawPos;
                const wallPreviewStart = drawingStartCorner || wallDrawPendingStart;
                if (snapToGrid) {
                    const snap = getMagneticSnapPos(rawPos);
                    previewEnd = snap || rawPos;
                    if (!currentSnapTarget) {
                        previewEnd = applyDrawingSnaps(
                            drawingStartCorner || { x: wallDrawPendingStart.x, y: wallDrawPendingStart.y, walls: [] },
                            previewEnd
                        );
                    }
                    highlightSnapTarget(rawPos);
                } else {
                    removeWallSnapIndicator();
                    removeMagneticIndicator();
                    cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
                }
                drawWallPreview(wallPreviewStart, previewEnd);
            } else if (currentTool === 'room' && drawingStartCorner) {
                const rawPos = getMousePos(e, true);
                drawRoomPreview(drawingStartCorner, rawPos);
            }
        }
        
        // Handle door/window placement preview (snapped endpoints match click behavior)
        if ((currentTool === 'door' || currentTool === 'window') && openingStartPoint) {
            const rawPos = getMousePos(e, true);
            const resolvedEnd = resolveWallOpeningEndpoint(rawPos);
            
            if (openingStartPoint.wall && resolvedEnd && resolvedEnd.wall === openingStartPoint.wall) {
                showWallOpeningPreview(
                    openingStartPoint.wall,
                    openingStartPoint.projected,
                    resolvedEnd.projected,
                    currentTool
                );
            } else {
                let endPt = resolvedEnd
                    ? { x: resolvedEnd.x, y: resolvedEnd.y }
                    : snapFreeformOpeningPoint(rawPos);
                if (snapToGrid) {
                    endPt = applyDrawingSnaps(
                        { x: openingStartPoint.x, y: openingStartPoint.y, walls: [] },
                        endPt
                    );
                }
                showFreeformOpeningPreview(openingStartPoint, endPt, currentTool);
            }
        }
    }
    
    function handleMouseUp(e) {
        // Stop panning
        if (isPanning) {
            isPanning = false;
            svg.style.cursor = '';
            return;
        }
        
        // Stop group selection rotation (history saved on mousedown)
        if (isRotatingSelection) {
            isRotatingSelection = false;
            selectionRotationCenter = null;
            selectionRotationStart = 0;
            svg.style.cursor = '';
            showScaleHandles();
            return;
        }
        
        // Stop rotation (history saved on mousedown)
        if (isRotating) {
            isRotating = false;
            rotationTarget = null;
            svg.style.cursor = '';
            return;
        }
        
        // Stop scaling
        if (isScaling) {
            isScaling = false;
            scaleHandle = null;
            scaleBBoxStart = null;
            scaleStartPositions = null;
            svg.style.cursor = '';
            showScaleHandles();
            return;
        }
        
        // Complete marquee selection
        if (isMarqueeSelecting && marqueeStart) {
            const pos = getMousePos(e, true);
            finishMarqueeSelection(marqueeStart, pos);
            isMarqueeSelecting = false;
            marqueeStart = null;
            removeMarqueeBox();
            return;
        }
        
        if (currentTool === 'room' && isDrawing && drawingStartCorner) {
            const pos = getMousePos(e, true);
            createRoomFromRect(drawingStartCorner, pos);
        }
        
        // Finalize corner snap if we were dragging a corner (history saved on mousedown)
        if (dragTarget && dragTarget.type === 'corner') {
            finalizeCornerSnap(dragTarget.element);
        }
        
        if (isDragging && dragTarget && dragTarget.type === 'selection-bbox') {
            svg.style.cursor = '';
            showScaleHandles();
        }
        
        if (isDragging && dragTarget && dragTarget.type === 'opening') {
            showScaleHandles();
        }
        
        if (isDragging && dragTarget && dragTarget.type === 'referenceImage') {
            showScaleHandles();
        }
        
        isDragging = false;
        dragTarget = null;
        
        // Clean up snap and angle indicators
        removeWallSnapIndicator();
        removeAngleIndicators();
        removeMagneticIndicator();
        currentSnapTarget = null;
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        
        if (currentTool === 'room') {
            isDrawing = false;
            drawingStartCorner = null;
            removePreview();
        }
    }
    
    function finalizeCornerSnap(corner) {
        // Check if this corner is at the same position as another corner (should merge)
        for (const otherCorner of corners) {
            if (otherCorner.id === corner.id) continue;
            const dist = Math.sqrt((otherCorner.x - corner.x) ** 2 + (otherCorner.y - corner.y) ** 2);
            if (dist < 1) { // Very close - they should be merged
                mergeCorners(corner, otherCorner);
                return;
            }
        }
        
        // Check if this corner is on a wall (should split and connect)
        for (const wall of walls) {
            // Skip walls connected to this corner
            if (wall.start === corner || wall.end === corner) continue;
            
            // Check if corner is on this wall line
            const projection = projectPointOntoWallLine(wall, corner);
            if (projection) {
                const dist = Math.sqrt((projection.x - corner.x) ** 2 + (projection.y - corner.y) ** 2);
                if (dist < 1) { // Corner is on the wall
                    // Split the wall at this point
                    const newCorner = splitWallAtPoint(wall, { x: corner.x, y: corner.y });
                    // Merge our corner with the new corner
                    mergeCorners(corner, newCorner);
                    return;
                }
            }
        }
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMouseDown({ clientX: touch.clientX, clientY: touch.clientY, target: document.elementFromPoint(touch.clientX, touch.clientY) });
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        handleMouseMove({ clientX: touch.clientX, clientY: touch.clientY });
    }
    
    function handleTouchEnd(e) {
        handleMouseUp(e);
    }
    
    // Image drag and drop handling
    // Check if the drag event is from an external file (not internal furniture)
    function isExternalFileDrag(e) {
        // Check if dataTransfer contains files from outside the browser
        if (e.dataTransfer && e.dataTransfer.types) {
            const types = Array.from(e.dataTransfer.types);
            
            // 'furnitureType' is set for internal furniture drags
            if (types.includes('furnituretype')) {
                return false;
            }
            
            // 'Files' type indicates external file drag
            if (types.includes('Files')) {
                return true;
            }
        }
        return false;
    }
    
    function handleImageDragOver(e) {
        e.preventDefault(); // Required to allow drop
        
        // Only show overlay for external file drags, not internal furniture
        if (isExternalFileDrag(e)) {
            const canvasWrapper = document.getElementById('layout-canvas-wrapper');
            canvasWrapper.classList.add('drag-over');
        }
    }
    
    function handleImageDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        const canvasWrapper = document.getElementById('layout-canvas-wrapper');
        canvasWrapper.classList.remove('drag-over');
    }
    
    function handleImageDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const canvasWrapper = document.getElementById('layout-canvas-wrapper');
        canvasWrapper.classList.remove('drag-over');
        
        // Check if this is a furniture drop
        const furnitureType = e.dataTransfer.getData('furnitureType');
        if (furnitureType) {
            // Get drop position relative to canvas (account for pan and zoom)
            const rect = svg.getBoundingClientRect();
            const x = (e.clientX - rect.left - panOffset.x) / zoom;
            const y = (e.clientY - rect.top - panOffset.y) / zoom;
            addFurniture(furnitureType, x, y);
            return;
        }
        
        // Check if this is an external file drop
        const files = e.dataTransfer.files;
        if (files.length === 0) {
            return;
        }
        
        const file = files[0];
        if (isLayoutFile(file)) {
            loadLayoutFromFile(file);
            return;
        }
        if (!file.type.startsWith('image/')) {
            if (window.showAlertDialog) {
                window.showAlertDialog('Drop an image file (PNG, JPG) or a DecorAI layout file (.decorai-layout.json)');
            }
            return;
        }
        
        addImageAsReference(file);
    }
    
    function addImageAsReference(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target.result;
            const img = new Image();
            img.onload = () => {
                const wrapper = document.getElementById('layout-canvas-wrapper');
                const canvasWidth = wrapper.clientWidth;
                const canvasHeight = wrapper.clientHeight;
                
                let width = img.width;
                let height = img.height;
                const maxWidth = canvasWidth * 0.9;
                const maxHeight = canvasHeight * 0.9;
                
                if (width > maxWidth) {
                    height = height * (maxWidth / width);
                    width = maxWidth;
                }
                if (height > maxHeight) {
                    width = width * (maxHeight / height);
                    height = maxHeight;
                }
                
                // At least 10 ft on the shorter side (layout units: scale px = 1 ft) so traced walls have room
                const minSpanFeet = 10;
                const minSpanPx = minSpanFeet * scale;
                const minDim = Math.min(width, height);
                if (minDim > 0 && minDim < minSpanPx) {
                    const up = minSpanPx / minDim;
                    width *= up;
                    height *= up;
                }
                
                const x = (canvasWidth - width) / 2;
                const y = (canvasHeight - height) / 2;
                
                const refImage = {
                    id: 'ref-image-' + Date.now(),
                    dataUrl: dataUrl,
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    originalWidth: img.width,
                    originalHeight: img.height,
                    opacity: 0.5
                };
                
                addToHistory();
                referenceImages.push(refImage);
                renderReferenceImage(refImage);
                
                showReferenceImageControls(refImage);
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    }
    
    function renderReferenceImage(refImage) {
        const image = document.createElementNS('http://www.w3.org/2000/svg', 'image');
        image.setAttribute('id', refImage.id);
        image.setAttribute('href', refImage.dataUrl);
        image.setAttribute('x', refImage.x);
        image.setAttribute('y', refImage.y);
        image.setAttribute('width', refImage.width);
        image.setAttribute('height', refImage.height);
        image.setAttribute('opacity', refImage.opacity);
        image.classList.add('reference-image');
        if (currentTool === 'select') {
            image.classList.add('selectable');
        }
        image.dataset.refImageId = refImage.id;
        
        imageLayer.appendChild(image);
    }
    
    function showReferenceImageControls(refImage) {
        // Remove any existing controls
        document.querySelector('.ref-image-controls')?.remove();
        
        // Store initial dimensions for scaling reference
        if (!refImage.baseWidth) {
            refImage.baseWidth = refImage.width;
            refImage.baseHeight = refImage.height;
        }
        
        const controls = document.createElement('div');
        controls.className = 'ref-image-controls';
        controls.innerHTML = `
            <div class="ref-controls-content">
                <h4>Reference Image</h4>
                <div class="control-row">
                    <label>Opacity:</label>
                    <input type="range" id="ref-opacity" min="0" max="100" value="${refImage.opacity * 100}">
                    <span id="ref-opacity-value">${Math.round(refImage.opacity * 100)}%</span>
                </div>
                <div class="control-row resize-info">
                    <small>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                        Drag corners to resize • Zoom to see more area
                    </small>
                </div>
                <div class="control-row">
                    <button id="ref-center-btn" class="secondary-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>
                        Center Image
                    </button>
                </div>
                <div class="control-row">
                    <button id="ref-delete-btn" class="delete-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        Remove Image
                    </button>
                </div>
            </div>
        `;
        
        document.querySelector('.layout-toolbar').appendChild(controls);
        
        // Opacity slider
        document.getElementById('ref-opacity').addEventListener('input', (e) => {
            const opacity = e.target.value / 100;
            refImage.opacity = opacity;
            document.getElementById('ref-opacity-value').textContent = e.target.value + '%';
            const imgEl = imageLayer.querySelector(`[data-ref-image-id="${refImage.id}"]`);
            if (imgEl) {
                imgEl.setAttribute('opacity', opacity);
            }
        });
        
        // Center button
        document.getElementById('ref-center-btn').addEventListener('click', () => {
            centerReferenceImage(refImage);
        });
        
        // Delete button
        document.getElementById('ref-delete-btn').addEventListener('click', () => {
            removeReferenceImage(refImage.id);
            controls.remove();
        });
    }
    
    // Ruler functions
    function initRulers() {
        const container = document.querySelector('.layout-canvas-container');
        if (!container || document.getElementById('ruler-top')) return;
        
        // Top horizontal ruler
        const hRuler = document.createElement('canvas');
        hRuler.id = 'ruler-top';
        hRuler.className = 'ruler ruler-top';
        container.appendChild(hRuler);
        
        // Left vertical ruler
        const vRuler = document.createElement('canvas');
        vRuler.id = 'ruler-left';
        vRuler.className = 'ruler ruler-left';
        container.appendChild(vRuler);
        
        // Corner square showing unit
        const corner = document.createElement('div');
        corner.className = 'ruler-corner';
        corner.textContent = unit;
        container.appendChild(corner);
        
        // Resize observer to keep rulers sized to the wrapper
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (wrapper) {
            const ro = new ResizeObserver(() => updateRulers());
            ro.observe(wrapper);
        }
        
        updateRulers();
    }
    
    function updateRulers() {
        const hCanvas = document.getElementById('ruler-top');
        const vCanvas = document.getElementById('ruler-left');
        if (!hCanvas || !vCanvas) return;
        
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return;
        const wrapperRect = wrapper.getBoundingClientRect();
        const containerRect = wrapper.parentElement.getBoundingClientRect();
        
        const offsetLeft = wrapperRect.left - containerRect.left;
        const offsetTop = wrapperRect.top - containerRect.top;
        
        const RULER_SIZE = 25;
        const MAX_FEET = 200;
        const dpr = window.devicePixelRatio || 1;
        const pxPerFoot = scale * zoom;
        
        // Determine label interval so ticks don't overlap
        let interval = 1;
        if (pxPerFoot < 12) interval = 20;
        else if (pxPerFoot < 20) interval = 10;
        else if (pxPerFoot < 40) interval = 5;
        else if (pxPerFoot < 80) interval = 2;
        
        // --- Size and position canvases ---
        hCanvas.style.left = offsetLeft + 'px';
        hCanvas.style.top = (offsetTop - RULER_SIZE) + 'px';
        hCanvas.style.width = wrapperRect.width + 'px';
        hCanvas.style.height = RULER_SIZE + 'px';
        hCanvas.width = wrapperRect.width * dpr;
        hCanvas.height = RULER_SIZE * dpr;
        
        vCanvas.style.left = (offsetLeft - RULER_SIZE) + 'px';
        vCanvas.style.top = offsetTop + 'px';
        vCanvas.style.width = RULER_SIZE + 'px';
        vCanvas.style.height = wrapperRect.height + 'px';
        vCanvas.width = RULER_SIZE * dpr;
        vCanvas.height = wrapperRect.height * dpr;
        
        const corner = document.querySelector('.ruler-corner');
        if (corner) {
            corner.style.left = (offsetLeft - RULER_SIZE) + 'px';
            corner.style.top = (offsetTop - RULER_SIZE) + 'px';
        }
        
        // --- Horizontal ruler (fixed 0–60) ---
        const hCtx = hCanvas.getContext('2d');
        hCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        hCtx.clearRect(0, 0, wrapperRect.width, RULER_SIZE);
        hCtx.fillStyle = '#f8f9fa';
        hCtx.fillRect(0, 0, wrapperRect.width, RULER_SIZE);
        
        hCtx.strokeStyle = '#d1d5db';
        hCtx.lineWidth = 1;
        hCtx.beginPath();
        hCtx.moveTo(0, RULER_SIZE - 0.5);
        hCtx.lineTo(wrapperRect.width, RULER_SIZE - 0.5);
        hCtx.stroke();
        
        hCtx.fillStyle = '#4b5563';
        hCtx.font = '500 9px system-ui, -apple-system, sans-serif';
        hCtx.textAlign = 'left';
        
        for (let foot = 0; foot <= MAX_FEET; foot += interval) {
            const x = foot * pxPerFoot;
            if (x > wrapperRect.width) break;
            
            hCtx.strokeStyle = '#9ca3af';
            hCtx.lineWidth = 1;
            hCtx.beginPath();
            hCtx.moveTo(x + 0.5, RULER_SIZE);
            hCtx.lineTo(x + 0.5, RULER_SIZE - 8);
            hCtx.stroke();
            
            hCtx.fillText(foot, x + 3, RULER_SIZE - 11);
        }
        
        // --- Vertical ruler (fixed 0–60) ---
        const vCtx = vCanvas.getContext('2d');
        vCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        vCtx.clearRect(0, 0, RULER_SIZE, wrapperRect.height);
        vCtx.fillStyle = '#f8f9fa';
        vCtx.fillRect(0, 0, RULER_SIZE, wrapperRect.height);
        
        vCtx.strokeStyle = '#d1d5db';
        vCtx.lineWidth = 1;
        vCtx.beginPath();
        vCtx.moveTo(RULER_SIZE - 0.5, 0);
        vCtx.lineTo(RULER_SIZE - 0.5, wrapperRect.height);
        vCtx.stroke();
        
        vCtx.fillStyle = '#4b5563';
        vCtx.font = '500 9px system-ui, -apple-system, sans-serif';
        
        for (let foot = 0; foot <= MAX_FEET; foot += interval) {
            const y = foot * pxPerFoot;
            if (y > wrapperRect.height) break;
            
            vCtx.strokeStyle = '#9ca3af';
            vCtx.lineWidth = 1;
            vCtx.beginPath();
            vCtx.moveTo(RULER_SIZE, y + 0.5);
            vCtx.lineTo(RULER_SIZE - 8, y + 0.5);
            vCtx.stroke();
            
            vCtx.save();
            vCtx.translate(RULER_SIZE - 11, y + 3);
            vCtx.rotate(-Math.PI / 2);
            vCtx.textAlign = 'left';
            vCtx.fillText(foot, 0, 0);
            vCtx.restore();
        }
    }
    
    function renderGrid() {
        // The grid is already in the SVG via the pattern defined in HTML
        // This function just ensures rulers are initialized
        initRulers();
    }
    
    function removeGrid() {
        // Don't remove the SVG grid pattern, just the custom scale-grid if it exists
        document.getElementById('scale-grid')?.remove();
    }
    
    // Add resize handles to reference image
    function addResizeHandles(refImage) {
        // Remove existing handles
        document.querySelectorAll('.ref-image-handle').forEach(h => h.remove());
        
        const imgEl = imageLayer.querySelector(`[data-ref-image-id="${refImage.id}"]`);
        if (!imgEl) return;
        
        const handles = ['nw', 'ne', 'se', 'sw'];
        
        handles.forEach(pos => {
            const handle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            handle.classList.add('ref-image-handle');
            handle.dataset.handle = pos;
            handle.dataset.refImageId = refImage.id;
            handle.setAttribute('width', REF_IMAGE_HANDLE_SIZE);
            handle.setAttribute('height', REF_IMAGE_HANDLE_SIZE);
            handle.setAttribute('rx', '4');
            handle.setAttribute('ry', '4');
            
            updateHandlePosition(handle, refImage, pos);
            
            cornersLayer.appendChild(handle);
            
            // Make handle draggable for resize
            setupResizeHandle(handle, refImage, pos);
        });
    }
    
    function updateHandlePosition(handle, refImage, pos) {
        const h = REF_IMAGE_HANDLE_HALF;
        const x = pos.includes('w') ? refImage.x - h : refImage.x + refImage.width - h;
        const y = pos.includes('n') ? refImage.y - h : refImage.y + refImage.height - h;
        handle.setAttribute('x', x);
        handle.setAttribute('y', y);
    }
    
    function updateAllHandlePositions(refImage) {
        document.querySelectorAll(`.ref-image-handle[data-ref-image-id="${refImage.id}"]`).forEach(handle => {
            updateHandlePosition(handle, refImage, handle.dataset.handle);
        });
    }
    
    function removeRefImageHandles() {
        document.querySelectorAll('.ref-image-handle').forEach(h => h.remove());
    }
    
    function setupResizeHandle(handle, refImage, corner) {
        let isResizing = false;
        let startX, startY, startWidth, startHeight, startImgX, startImgY;
        
        handle.addEventListener('mousedown', (e) => {
            isResizing = true;
            startX = e.clientX;
            startY = e.clientY;
            startWidth = refImage.width;
            startHeight = refImage.height;
            startImgX = refImage.x;
            startImgY = refImage.y;
            e.stopPropagation();
            e.preventDefault();
        });
        
        const onMouseMove = (e) => {
            if (!isResizing) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            // Maintain aspect ratio
            const aspectRatio = refImage.baseWidth / refImage.baseHeight;
            let newWidth, newHeight, newX, newY;
            
            if (corner === 'se') {
                newWidth = Math.max(50, startWidth + dx);
                newHeight = newWidth / aspectRatio;
                newX = startImgX;
                newY = startImgY;
            } else if (corner === 'sw') {
                newWidth = Math.max(50, startWidth - dx);
                newHeight = newWidth / aspectRatio;
                newX = startImgX + startWidth - newWidth;
                newY = startImgY;
            } else if (corner === 'ne') {
                newWidth = Math.max(50, startWidth + dx);
                newHeight = newWidth / aspectRatio;
                newX = startImgX;
                newY = startImgY + startHeight - newHeight;
            } else if (corner === 'nw') {
                newWidth = Math.max(50, startWidth - dx);
                newHeight = newWidth / aspectRatio;
                newX = startImgX + startWidth - newWidth;
                newY = startImgY + startHeight - newHeight;
            }
            
            refImage.width = newWidth;
            refImage.height = newHeight;
            refImage.x = newX;
            refImage.y = newY;
            
            // Update image element
            const imgEl = imageLayer.querySelector(`[data-ref-image-id="${refImage.id}"]`);
            if (imgEl) {
                imgEl.setAttribute('x', newX);
                imgEl.setAttribute('y', newY);
                imgEl.setAttribute('width', newWidth);
                imgEl.setAttribute('height', newHeight);
            }
            
            // Update all handles
            updateAllHandlePositions(refImage);
        };
        
        const onMouseUp = () => {
            if (isResizing) {
                isResizing = false;
            }
        };
        
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }
    
    function centerReferenceImage(refImage) {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        const canvasWidth = wrapper.clientWidth;
        const canvasHeight = wrapper.clientHeight;
        
        refImage.x = (canvasWidth - refImage.width) / 2;
        refImage.y = (canvasHeight - refImage.height) / 2;
        
        const imgEl = imageLayer.querySelector(`[data-ref-image-id="${refImage.id}"]`);
        if (imgEl) {
            imgEl.setAttribute('x', refImage.x);
            imgEl.setAttribute('y', refImage.y);
        }
    }
    
    function removeReferenceImage(id) {
        referenceImages = referenceImages.filter(img => img.id !== id);
        
        const imgEl = imageLayer.querySelector(`[data-ref-image-id="${id}"]`);
        if (imgEl) {
            imgEl.remove();
        }
    }
    
    async function convertImageToSVG(file) {
        if (isConvertingImage) {
            if (window.showAlertDialog) {
                window.showAlertDialog('Already converting an image. Please wait...');
            }
            return;
        }
        
        isConvertingImage = true;
        
        // Show loading indicator
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'image-convert-loading';
        loadingOverlay.innerHTML = `
            <div class="loading-content">
                <div class="spinner"></div>
                <p>Converting image to SVG...</p>
                <small>This may take a moment</small>
            </div>
        `;
        document.body.appendChild(loadingOverlay);
        
        try {
            // Convert file to base64
            const base64 = await fileToBase64(file);
            
            // Call the server API to convert image to SVG using AI
            const response = await fetch('/api/image-to-svg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    image: base64,
                    filename: file.name
                })
            });
            
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Failed to convert image');
            }
            
            const result = await response.json();
            
            if (result.svg) {
                // Parse and add SVG paths to the canvas
                addSVGToCanvas(result.svg);
            } else {
                throw new Error('No SVG data returned');
            }
        } catch (error) {
            console.error('Error converting image:', error);
            
            // Fallback: add as reference image
            const fallbackMsg = `Could not convert image to SVG: ${error.message}\n\nWould you like to add it as a reference image instead?`;
            if (window.showConfirmDialog) {
                const proceed = await window.showConfirmDialog(
                    fallbackMsg,
                    'Import image as reference?',
                    'Add as reference',
                    'Cancel'
                );
                if (proceed) addImageAsReference(file);
            }
        } finally {
            isConvertingImage = false;
            loadingOverlay.remove();
        }
    }
    
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    
    function addSVGToCanvas(svgString) {
        // Save state before making changes
        addToHistory();
        
        // Parse the SVG string
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        
        if (!svgElement) {
            console.error('Invalid SVG');
            return;
        }
        
        const wrapper = document.getElementById('layout-canvas-wrapper');
        const canvasWidth = wrapper.clientWidth;
        const canvasHeight = wrapper.clientHeight;
        
        // Get SVG dimensions
        const viewBox = svgElement.getAttribute('viewBox');
        let svgWidth = parseFloat(svgElement.getAttribute('width')) || canvasWidth;
        let svgHeight = parseFloat(svgElement.getAttribute('height')) || canvasHeight;
        
        if (viewBox) {
            const parts = viewBox.split(/[\s,]+/).map(parseFloat);
            if (parts.length >= 4) {
                svgWidth = parts[2] || svgWidth;
                svgHeight = parts[3] || svgHeight;
            }
        }
        
        // Calculate scale to fit
        const scaleX = (canvasWidth * 0.8) / svgWidth;
        const scaleY = (canvasHeight * 0.8) / svgHeight;
        const fitScale = Math.min(scaleX, scaleY);
        
        // Offset to center
        const offsetX = (canvasWidth - svgWidth * fitScale) / 2;
        const offsetY = (canvasHeight - svgHeight * fitScale) / 2;
        
        // Extract all paths, lines, rects, etc. and add them directly
        const elements = svgElement.querySelectorAll('path, line, rect, polyline, polygon, circle, ellipse');
        
        elements.forEach(el => {
            const clone = el.cloneNode(true);
            clone.classList.add('imported-svg-element');
            
            // Generate unique ID for tracking
            const elementId = 'imported-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
            clone.dataset.importedId = elementId;
            
            // Remove white fills - convert to transparent
            const fill = clone.getAttribute('fill');
            if (fill && isWhiteFill(fill)) {
                clone.setAttribute('fill', 'none');
            }
            
            // Transform the element
            const existingTransform = clone.getAttribute('transform') || '';
            clone.setAttribute('transform', `translate(${offsetX}, ${offsetY}) scale(${fitScale}) ${existingTransform}`);
            
            // Ensure it has a stroke for visibility
            if (!clone.getAttribute('stroke') && !clone.getAttribute('fill')) {
                clone.setAttribute('stroke', '#333');
                clone.setAttribute('stroke-width', '2');
                clone.setAttribute('fill', 'none');
            }
            
            // Track the imported element
            importedElements.push({
                id: elementId,
                element: clone,
                type: el.tagName.toLowerCase()
            });
            
            wallsLayer.appendChild(clone);
        });
        
        // Also check for grouped elements - but track individual children
        const groups = svgElement.querySelectorAll('g');
        groups.forEach(g => {
            const clone = g.cloneNode(true);
            clone.classList.add('imported-svg-group');
            
            // Remove white fills and track each child element individually
            clone.querySelectorAll('path, line, rect, polyline, polygon, circle, ellipse').forEach(child => {
                const fill = child.getAttribute('fill');
                if (fill && isWhiteFill(fill)) {
                    child.setAttribute('fill', 'none');
                }
                
                // Track each child element individually for selection/deletion
                const childId = 'imported-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
                child.dataset.importedId = childId;
                child.classList.add('imported-svg-element');
                
                importedElements.push({
                    id: childId,
                    element: child,
                    type: child.tagName.toLowerCase()
                });
            });
            
            const existingTransform = clone.getAttribute('transform') || '';
            clone.setAttribute('transform', `translate(${offsetX}, ${offsetY}) scale(${fitScale}) ${existingTransform}`);
            
            wallsLayer.appendChild(clone);
        });
    }
    
    function handleKeyDown(e) {
        if (!layoutEditorScreen || layoutEditorScreen.classList.contains('hidden')) return;
        
        const isTyping = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable;
        
        if (e.key === 'Escape') {
            cancelDrawing();
            deselectAll();
        } else if ((e.key === 'Delete' || e.key === 'Backspace') && !isTyping) {
            if (selectedElement || selectedElements.length > 0) {
                deleteSelected();
            }
        } else if (e.ctrlKey || e.metaKey) {
            if (e.shiftKey && e.key.toLowerCase() === 'z') {
                e.preventDefault();
                redo();
            } else if (e.key.toLowerCase() === 'z') {
                e.preventDefault();
                undo();
            } else if (e.key.toLowerCase() === 'y') {
                e.preventDefault();
                redo();
            } else if (e.key.toLowerCase() === 'c') {
                e.preventDefault();
                copySelected();
            } else if (e.key.toLowerCase() === 'v') {
                e.preventDefault();
                pasteClipboard();
            } else if (e.key.toLowerCase() === 'a') {
                e.preventDefault();
                selectAll();
            }
        } else if (!isTyping) {
            if (e.key.toLowerCase() === 'f' && selectedElement?.type === 'opening' && selectedElement.element.opening?.type === 'door') {
                e.preventDefault();
                reverseSelectedDoorSwing();
            } else if (e.key.toLowerCase() === 'i' && selectedElement?.type === 'opening' && selectedElement.element.opening?.type === 'door') {
                e.preventDefault();
                invertSelectedDoorDirection();
            } else if (e.key === 'v') {
                selectTool('select');
            } else if (e.key === 'w') {
                selectTool('wall');
            } else if (e.key === 'r') {
                selectTool('room');
            } else if (e.key === 'd') {
                selectTool('door');
            } else if (e.key === 'l') {
                selectTool('label');
            }
        }
    }
    
    // Corner management
    function createCorner(pos, opts = {}) {
        const corner = {
            id: 'corner-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
            x: pos.x,
            y: pos.y,
            walls: []
        };
        if (!opts.skipHistory) addToHistory();
        corners.push(corner);
        renderCorner(corner);
        return corner;
    }
    
    function findNearbyCorner(pos) {
        for (const corner of corners) {
            const dist = Math.sqrt((corner.x - pos.x) ** 2 + (corner.y - pos.y) ** 2);
            if (dist < snapDistance) {
                return corner;
            }
        }
        return null;
    }
    
    // Find snap point on any wall (mid-wall snapping)
    function findSnapPointOnWall(pos, excludeCorner = null) {
        let bestWall = null;
        let bestPoint = null;
        let minDist = snapDistance;
        
        for (const wall of walls) {
            // Skip if position is near the wall's endpoints (those are handled by corner snapping)
            const distToStart = Math.sqrt((wall.start.x - pos.x) ** 2 + (wall.start.y - pos.y) ** 2);
            const distToEnd = Math.sqrt((wall.end.x - pos.x) ** 2 + (wall.end.y - pos.y) ** 2);
            if (distToStart < snapDistance || distToEnd < snapDistance) continue;
            
            // Skip walls connected to the exclude corner (to avoid snapping to our own drawing start)
            if (excludeCorner && (wall.start === excludeCorner || wall.end === excludeCorner)) continue;
            
            // Calculate the projection of pos onto the wall line
            const projection = projectPointOntoWallLine(wall, pos);
            if (!projection) continue;
            
            const dist = Math.sqrt((projection.x - pos.x) ** 2 + (projection.y - pos.y) ** 2);
            if (dist < minDist) {
                minDist = dist;
                bestWall = wall;
                bestPoint = projection;
            }
        }
        
        return bestWall ? { wall: bestWall, point: bestPoint } : null;
    }
    
    // Project a point onto a wall line segment, returning null if outside the segment
    function projectPointOntoWallLine(wall, pos) {
        const dx = wall.end.x - wall.start.x;
        const dy = wall.end.y - wall.start.y;
        const lenSq = dx * dx + dy * dy;
        if (lenSq === 0) return null;
        
        // Calculate parameter t for the projection
        const t = ((pos.x - wall.start.x) * dx + (pos.y - wall.start.y) * dy) / lenSq;
        
        // Clamp to segment, but exclude endpoints (those are corner snaps)
        if (t <= 0.05 || t >= 0.95) return null;
        
        return {
            x: wall.start.x + t * dx,
            y: wall.start.y + t * dy,
            t: t
        };
    }
    
    // Split a wall at a given point, creating a new corner
    function splitWallAtPoint(wall, point) {
        // Create new corner at the split point
        const newCorner = createCorner(point);
        
        // Store original end corner
        const originalEnd = wall.end;
        
        // Update the original wall to end at the new corner
        wall.end.walls = wall.end.walls.filter(w => w !== wall);
        wall.end = newCorner;
        newCorner.walls.push(wall);
        
        // Create new wall from new corner to original end
        const newWall = {
            id: 'wall-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
            start: newCorner,
            end: originalEnd,
            openings: []
        };
        
        walls.push(newWall);
        newCorner.walls.push(newWall);
        originalEnd.walls.push(newWall);
        
        // Transfer any openings that belong on the new wall segment
        const originalLength = Math.sqrt((originalEnd.x - wall.start.x) ** 2 + (originalEnd.y - wall.start.y) ** 2);
        const splitT = Math.sqrt((newCorner.x - wall.start.x) ** 2 + (newCorner.y - wall.start.y) ** 2) / originalLength;
        
        const openingsToMove = [];
        for (const opening of wall.openings) {
            if (opening.position > splitT) {
                // Recalculate position relative to new wall
                const newWallLength = Math.sqrt((originalEnd.x - newCorner.x) ** 2 + (originalEnd.y - newCorner.y) ** 2);
                const oldAbsPosition = opening.position * originalLength;
                const newAbsPosition = oldAbsPosition - splitT * originalLength;
                opening.position = newAbsPosition / newWallLength;
                openingsToMove.push(opening);
            }
        }
        
        // Move openings to the new wall
        for (const opening of openingsToMove) {
            wall.openings = wall.openings.filter(o => o !== opening);
            newWall.openings.push(opening);
        }
        
        return newCorner;
    }
    
    function getAngleSnapPositionForCorner(corner, newPos) {
        if (!corner.walls || corner.walls.length < 2) return null;
        
        const others = corner.walls.map(w => (w.start === corner ? w.end : w.start));
        let best = null;
        let bestDist = cornerAngleSnapDistance;
        
        for (let i = 0; i < others.length; i++) {
            for (let j = i + 1; j < others.length; j++) {
                const A = others[i];
                const B = others[j];
                
                // 90°: locus is circle with diameter AB. Closest point on circle to newPos.
                const midX = (A.x + B.x) / 2;
                const midY = (A.y + B.y) / 2;
                const dx = B.x - A.x;
                const dy = B.y - A.y;
                const r = Math.sqrt(dx * dx + dy * dy) / 2;
                if (r >= 1) {
                    const toPosX = newPos.x - midX;
                    const toPosY = newPos.y - midY;
                    const len = Math.sqrt(toPosX * toPosX + toPosY * toPosY) || 1;
                    const snapX = midX + r * (toPosX / len);
                    const snapY = midY + r * (toPosY / len);
                    const d = Math.sqrt((newPos.x - snapX) ** 2 + (newPos.y - snapY) ** 2);
                    if (d < bestDist) {
                        bestDist = d;
                        best = { x: snapX, y: snapY };
                    }
                }
                
                // 180°: locus is line through A and B. Closest point on line to newPos.
                const lenSq = dx * dx + dy * dy;
                if (lenSq >= 1) {
                    const t = ((newPos.x - A.x) * dx + (newPos.y - A.y) * dy) / lenSq;
                    const snapX = A.x + t * dx;
                    const snapY = A.y + t * dy;
                    const d = Math.sqrt((newPos.x - snapX) ** 2 + (newPos.y - snapY) ** 2);
                    if (d < bestDist) {
                        bestDist = d;
                        best = { x: snapX, y: snapY };
                    }
                }
            }
        }
        return best;
    }
    
    function moveCorner(corner, newPos) {
        // Clear any existing snap indicators
        removeWallSnapIndicator();
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        
        // First check for snap to other corners
        const cornerSnapTarget = findSnapTarget(newPos, corner);
        if (cornerSnapTarget) {
            // Show visual indicator on the target corner
            const node = cornersLayer.querySelector(`[data-corner-id="${cornerSnapTarget.id}"]`);
            if (node) node.classList.add('snap-target');
            
            // Move corner to the snap position (visual feedback)
            corner.x = cornerSnapTarget.x;
            corner.y = cornerSnapTarget.y;
            redrawAll();
            showAngleIndicators(corner);
            return;
        }
        
        // Then check for snap to mid-wall points
        const wallSnap = findSnapPointOnWallForCorner(newPos, corner);
        if (wallSnap) {
            // Show visual indicator
            showWallSnapIndicator(wallSnap.point);
            
            // Move corner to the snap position (visual feedback)
            corner.x = wallSnap.point.x;
            corner.y = wallSnap.point.y;
            redrawAll();
            showAngleIndicators(corner);
            return;
        }
        
        // No corner or wall snap — apply 90°/180° angle snap if this corner has multiple walls
        let finalPos = newPos;
        const angleSnapPos = getAngleSnapPositionForCorner(corner, newPos);
        if (angleSnapPos) finalPos = angleSnapPos;
        
        corner.x = finalPos.x;
        corner.y = finalPos.y;
        redrawAll();
        showAngleIndicators(corner);
    }
    
    // Find snap point on wall, excluding walls connected to a specific corner
    function findSnapPointOnWallForCorner(pos, excludeCorner) {
        let bestWall = null;
        let bestPoint = null;
        let minDist = snapDistance;
        
        for (const wall of walls) {
            // Skip walls connected to the corner we're moving
            if (wall.start === excludeCorner || wall.end === excludeCorner) continue;
            
            // Skip if position is near the wall's endpoints (those are handled by corner snapping)
            const distToStart = Math.sqrt((wall.start.x - pos.x) ** 2 + (wall.start.y - pos.y) ** 2);
            const distToEnd = Math.sqrt((wall.end.x - pos.x) ** 2 + (wall.end.y - pos.y) ** 2);
            if (distToStart < snapDistance || distToEnd < snapDistance) continue;
            
            // Calculate the projection of pos onto the wall line
            const projection = projectPointOntoWallLine(wall, pos);
            if (!projection) continue;
            
            const dist = Math.sqrt((projection.x - pos.x) ** 2 + (projection.y - pos.y) ** 2);
            if (dist < minDist) {
                minDist = dist;
                bestWall = wall;
                bestPoint = projection;
            }
        }
        
        return bestWall ? { wall: bestWall, point: bestPoint } : null;
    }
    
    function findSnapTarget(pos, excludeCorner) {
        for (const corner of corners) {
            if (corner.id === excludeCorner.id) continue;
            const dist = Math.sqrt((corner.x - pos.x) ** 2 + (corner.y - pos.y) ** 2);
            if (dist < snapDistance) {
                return corner;
            }
        }
        return null;
    }
    
    function mergeCorners(movingCorner, targetCorner) {
        // Transfer all walls from moving corner to target
        for (const wall of movingCorner.walls) {
            if (wall.start === movingCorner) {
                wall.start = targetCorner;
            } else if (wall.end === movingCorner) {
                wall.end = targetCorner;
            }
            if (!targetCorner.walls.includes(wall)) {
                targetCorner.walls.push(wall);
            }
        }
        
        // Remove the moving corner
        corners = corners.filter(c => c.id !== movingCorner.id);
        
        // Remove any duplicate walls (same start and end)
        walls = walls.filter(w => w.start.id !== w.end.id);
        
        redrawAll();
    }
    
    function renderCorner(corner) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', corner.x);
        circle.setAttribute('cy', corner.y);
        circle.setAttribute('r', 6);
        circle.classList.add('corner-node');
        circle.dataset.cornerId = corner.id;
        cornersLayer.appendChild(circle);
    }
    
    function showAngleIndicators(corner) {
        removeAngleIndicators();
        
        if (!corner.walls || corner.walls.length < 2) return;
        
        // Collect the angle of each wall relative to this corner
        const wallAngles = [];
        for (const wall of corner.walls) {
            const other = wall.start === corner ? wall.end : wall.start;
            const angle = Math.atan2(other.y - corner.y, other.x - corner.x);
            wallAngles.push(angle);
        }
        
        // Sort angles so we draw arcs between adjacent walls
        wallAngles.sort((a, b) => a - b);
        
        const arcRadius = 30 / zoom;
        const textRadius = 42 / zoom;
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.classList.add('angle-indicator-group');
        
        for (let i = 0; i < wallAngles.length; i++) {
            const a1 = wallAngles[i];
            const a2 = wallAngles[(i + 1) % wallAngles.length];
            
            // Sweep from a1 to a2 going counter-clockwise
            let sweep = a2 - a1;
            if (sweep <= 0) sweep += Math.PI * 2;
            
            const degrees = Math.round(sweep * 180 / Math.PI);
            if (degrees === 0 || degrees === 360) continue;
            
            // Arc start/end points
            const x1 = corner.x + arcRadius * Math.cos(a1);
            const y1 = corner.y + arcRadius * Math.sin(a1);
            const x2 = corner.x + arcRadius * Math.cos(a2);
            const y2 = corner.y + arcRadius * Math.sin(a2);
            
            const largeArc = sweep > Math.PI ? 1 : 0;
            
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arc.setAttribute('d', `M ${x1} ${y1} A ${arcRadius} ${arcRadius} 0 ${largeArc} 1 ${x2} ${y2}`);
            arc.setAttribute('fill', 'none');
            arc.setAttribute('stroke', degrees === 90 ? '#22c55e' : '#6366f1');
            arc.setAttribute('stroke-width', 1.5 / zoom);
            arc.setAttribute('opacity', '0.8');
            g.appendChild(arc);
            
            // Right-angle square indicator for 90 degrees
            if (degrees === 90) {
                const sq = 10 / zoom;
                const sx = corner.x + sq * Math.cos(a1);
                const sy = corner.y + sq * Math.sin(a1);
                const mx = corner.x + sq * Math.cos(a1) + sq * Math.cos(a2);
                const my = corner.y + sq * Math.sin(a1) + sq * Math.sin(a2);
                const ex = corner.x + sq * Math.cos(a2);
                const ey = corner.y + sq * Math.sin(a2);
                
                const square = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                square.setAttribute('d', `M ${sx} ${sy} L ${mx} ${my} L ${ex} ${ey}`);
                square.setAttribute('fill', 'none');
                square.setAttribute('stroke', '#22c55e');
                square.setAttribute('stroke-width', 1.5 / zoom);
                square.setAttribute('opacity', '0.8');
                g.appendChild(square);
            }
            
            // Degree label at the midpoint angle
            const midAngle = a1 + sweep / 2;
            const tx = corner.x + textRadius * Math.cos(midAngle);
            const ty = corner.y + textRadius * Math.sin(midAngle);
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', tx);
            text.setAttribute('y', ty);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.setAttribute('font-size', 11 / zoom);
            text.setAttribute('font-weight', '600');
            text.setAttribute('fill', degrees === 90 ? '#16a34a' : '#4f46e5');
            text.textContent = degrees + '°';
            g.appendChild(text);
        }
        
        cornersLayer.appendChild(g);
    }
    
    function removeAngleIndicators() {
        document.querySelectorAll('.angle-indicator-group').forEach(g => g.remove());
    }
    
    function getMagneticSnapPos(rawPos) {
        // If already snapped, check whether cursor has moved far enough to break free
        if (currentSnapTarget) {
            if (currentSnapTarget.type === 'wall' && currentSnapTarget.wall) {
                // For walls, measure distance to the wall line so you can slide along it
                const distToWall = pointToLineDistance(
                    rawPos,
                    currentSnapTarget.wall.start,
                    currentSnapTarget.wall.end
                );
                if (distToWall < snapRelease) {
                    // Still snapped: slide along the wall
                    const projected = projectPointOnWall(currentSnapTarget.wall, rawPos);
                    currentSnapTarget.x = projected.x;
                    currentSnapTarget.y = projected.y;
                    return currentSnapTarget;
                }
                // Too far from the wall – break snap
                currentSnapTarget = null;
            } else {
                // Corner (fixed snap point)
                const distFromSnap = Math.sqrt(
                    (rawPos.x - currentSnapTarget.x) ** 2 + (rawPos.y - currentSnapTarget.y) ** 2
                );
                if (distFromSnap < snapRelease) {
                    return currentSnapTarget; // still locked
                }
                currentSnapTarget = null;
            }
        }
        
        // Corner snap (highest priority)
        const cornerTarget = findNearbyCorner(rawPos);
        if (cornerTarget && (!drawingStartCorner || cornerTarget.id !== drawingStartCorner.id)) {
            currentSnapTarget = { x: cornerTarget.x, y: cornerTarget.y, type: 'corner', id: cornerTarget.id };
            return currentSnapTarget;
        }
        
        // Mid-wall snap
        const wallSnap = findSnapPointOnWall(rawPos, drawingStartCorner);
        if (wallSnap) {
            currentSnapTarget = { x: wallSnap.point.x, y: wallSnap.point.y, type: 'wall', wall: wallSnap.wall };
            return currentSnapTarget;
        }
        
        currentSnapTarget = null;
        return null;
    }
    
    function highlightSnapTarget(pos) {
        // Remove existing highlights
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        removeWallSnapIndicator();
        removeMagneticIndicator();
        
        const snap = currentSnapTarget;
        if (!snap) return;
        
        if (snap.type === 'corner') {
            const node = cornersLayer.querySelector(`[data-corner-id="${snap.id}"]`);
            if (node) node.classList.add('snap-target');
            showMagneticIndicator(snap);
        } else if (snap.type === 'wall') {
            showWallSnapIndicator(snap);
            showMagneticIndicator(snap);
        }
    }
    
    function showMagneticIndicator(point) {
        removeMagneticIndicator();
        
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.id = 'magnetic-snap-indicator';
        
        // Outer pulsing ring
        const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        ring.setAttribute('cx', point.x);
        ring.setAttribute('cy', point.y);
        ring.setAttribute('r', 12 / zoom);
        ring.setAttribute('fill', 'none');
        ring.setAttribute('stroke', '#22c55e');
        ring.setAttribute('stroke-width', 2 / zoom);
        ring.setAttribute('opacity', '0.7');
        ring.classList.add('magnetic-pulse');
        g.appendChild(ring);
        
        // Inner filled dot
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('cx', point.x);
        dot.setAttribute('cy', point.y);
        dot.setAttribute('r', 4 / zoom);
        dot.setAttribute('fill', '#22c55e');
        dot.setAttribute('opacity', '0.9');
        g.appendChild(dot);
        
        // Crosshair lines
        const size = 8 / zoom;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', point.x + dx * (6 / zoom));
            line.setAttribute('y1', point.y + dy * (6 / zoom));
            line.setAttribute('x2', point.x + dx * (6 / zoom + size));
            line.setAttribute('y2', point.y + dy * (6 / zoom + size));
            line.setAttribute('stroke', '#22c55e');
            line.setAttribute('stroke-width', 1.5 / zoom);
            line.setAttribute('opacity', '0.6');
            g.appendChild(line);
        }
        
        cornersLayer.appendChild(g);
    }
    
    function removeMagneticIndicator() {
        document.getElementById('magnetic-snap-indicator')?.remove();
    }
    
    function showWallSnapIndicator(point) {
        removeWallSnapIndicator();
        
        const indicator = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        indicator.setAttribute('cx', point.x);
        indicator.setAttribute('cy', point.y);
        indicator.setAttribute('r', 8);
        indicator.classList.add('wall-snap-indicator');
        indicator.id = 'wall-snap-indicator';
        cornersLayer.appendChild(indicator);
    }
    
    function removeWallSnapIndicator() {
        document.getElementById('wall-snap-indicator')?.remove();
    }
    
    // Wall management
    function createWall(startCorner, endCorner, opts = {}) {
        if (!opts.skipHistory) addToHistory();
        
        const wall = {
            id: 'wall-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
            start: startCorner,
            end: endCorner,
            openings: []
        };
        
        walls.push(wall);
        startCorner.walls.push(wall);
        endCorner.walls.push(wall);
        
        redrawWalls();
        redrawDimensions();
    }
    
    function redrawWalls() {
        wallsLayer.innerHTML = '';
        
        for (const wall of walls) {
            renderWall(wall);
        }
        
        // Also re-render freeform openings (doors/windows not attached to walls)
        for (const opening of freeformOpenings) {
            renderFreeformOpening(opening);
        }
    }
    
    function renderWall(wall) {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', wall.start.x);
        line.setAttribute('y1', wall.start.y);
        line.setAttribute('x2', wall.end.x);
        line.setAttribute('y2', wall.end.y);
        line.setAttribute('stroke-width', wallThickness);
        line.classList.add('wall-line');
        line.dataset.wallId = wall.id;
        wallsLayer.appendChild(line);
        
        // Render openings (doors/windows)
        for (const opening of wall.openings) {
            renderOpening(wall, opening);
        }
    }
    
    function applyDrawingSnaps(start, end) {
        let x = end.x;
        let y = end.y;
        const dx = x - start.x;
        const dy = y - start.y;
        
        // Axis snap: snap to horizontal or vertical when close
        const axisTh = axisSnapThreshold;
        if (Math.abs(dy) <= axisTh && Math.abs(dx) > Math.abs(dy)) {
            y = start.y;
        } else if (Math.abs(dx) <= axisTh && Math.abs(dy) > Math.abs(dx)) {
            x = start.x;
        }
        
        // Angle snap: if this corner has a connecting wall, snap to 90° or 180° relative to it
        if (start.walls && start.walls.length > 0) {
            const wall = start.walls[0];
            const other = wall.start === start ? wall.end : wall.start;
            const baseAngle = Math.atan2(other.y - start.y, other.x - start.x);
            
            const curDx = x - start.x;
            const curDy = y - start.y;
            const length = Math.sqrt(curDx * curDx + curDy * curDy);
            if (length < 2) return { x, y };
            
            let currentAngle = Math.atan2(curDy, curDx);
            let relAngle = currentAngle - baseAngle;
            while (relAngle > Math.PI) relAngle -= 2 * Math.PI;
            while (relAngle < -Math.PI) relAngle += 2 * Math.PI;
            
            const angleTh = (angleSnapDegrees * Math.PI) / 180;
            const steps = [0, Math.PI / 2, Math.PI, -Math.PI / 2];
            let best = null;
            let bestDiff = Infinity;
            for (const step of steps) {
                let d = Math.abs(relAngle - step);
                if (d > Math.PI) d = 2 * Math.PI - d;
                if (d < bestDiff && d <= angleTh) {
                    bestDiff = d;
                    best = step;
                }
            }
            if (best !== null) {
                const snapAngle = baseAngle + best;
                x = start.x + length * Math.cos(snapAngle);
                y = start.y + length * Math.sin(snapAngle);
            }
        }
        
        return { x, y };
    }
    
    function drawWallPreview(start, end) {
        removePreview();
        
        const floorPlanGroup = document.getElementById('floor-plan-group');
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', start.x);
        line.setAttribute('y1', start.y);
        line.setAttribute('x2', end.x);
        line.setAttribute('y2', end.y);
        line.classList.add('drawing-preview');
        line.id = 'drawing-preview';
        floorPlanGroup.appendChild(line);
        
        // Show dimension near cursor end point
        const length = Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2) / scale;
        const fontSize = 33 / zoom;
        const pad = 8 / zoom;
        
        const goingRight = end.x >= start.x;
        const goingDown = end.y >= start.y;
        
        const textX = end.x + (goingRight ? pad : -pad);
        const textY = end.y + (goingDown ? pad + fontSize : -pad);
        const anchor = goingRight ? 'start' : 'end';
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', anchor);
        text.setAttribute('font-size', fontSize);
        text.classList.add('dimension-text');
        text.id = 'preview-dimension';
        text.textContent = formatDimension(length);
        floorPlanGroup.appendChild(text);
    }
    
    function drawRoomPreview(start, end) {
        removePreview();
        
        const floorPlanGroup = document.getElementById('floor-plan-group');
        
        const x = Math.min(start.x, end.x);
        const y = Math.min(start.y, end.y);
        const width = Math.abs(end.x - start.x);
        const height = Math.abs(end.y - start.y);
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.classList.add('drawing-preview');
        rect.id = 'drawing-preview';
        floorPlanGroup.appendChild(rect);
        
        // Show dimensions near the cursor (end point)
        const widthFt = width / scale;
        const heightFt = height / scale;
        const fontSize = 33 / zoom;
        const pad = 8 / zoom;
        
        // Position relative to the end point (cursor)
        const goingRight = end.x >= start.x;
        const goingDown = end.y >= start.y;
        
        const textX = end.x + (goingRight ? pad : -pad);
        const textY = end.y + (goingDown ? pad + fontSize : -pad);
        const anchor = goingRight ? 'start' : 'end';
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', anchor);
        text.setAttribute('font-size', fontSize);
        text.classList.add('dimension-text');
        text.id = 'preview-dimension';
        text.textContent = formatDimension(widthFt) + ' × ' + formatDimension(heightFt);
        floorPlanGroup.appendChild(text);
    }
    
    function removePreview() {
        document.getElementById('drawing-preview')?.remove();
        document.getElementById('preview-dimension')?.remove();
    }
    
    function cancelDrawing() {
        // If we were drawing a wall and only the first point was placed, remove that corner
        if (drawingStartCorner && drawingStartCorner.walls && drawingStartCorner.walls.length === 0) {
            corners = corners.filter(c => c.id !== drawingStartCorner.id);
            redrawAll();
        }
        
        isDrawing = false;
        drawingStartCorner = null;
        wallDrawPendingStart = null;
        currentSnapTarget = null;
        removePreview();
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        removeWallSnapIndicator();
        removeMagneticIndicator();
        
        // Also cancel door/window placement
        openingStartPoint = null;
        removeOpeningPreview();
    }
    
    function createRoomFromRect(start, end) {
        const x1 = Math.min(start.x, end.x);
        const y1 = Math.min(start.y, end.y);
        const x2 = Math.max(start.x, end.x);
        const y2 = Math.max(start.y, end.y);
        
        if (Math.abs(x2 - x1) < 20 || Math.abs(y2 - y1) < 20) return; // Too small
        
        // Create 4 corners
        const tl = findNearbyCorner({ x: x1, y: y1 }) || createCorner({ x: x1, y: y1 });
        const tr = findNearbyCorner({ x: x2, y: y1 }) || createCorner({ x: x2, y: y1 });
        const br = findNearbyCorner({ x: x2, y: y2 }) || createCorner({ x: x2, y: y2 });
        const bl = findNearbyCorner({ x: x1, y: y2 }) || createCorner({ x: x1, y: y2 });
        
        // Create 4 walls
        createWall(tl, tr);
        createWall(tr, br);
        createWall(br, bl);
        createWall(bl, tl);
        
        removePreview();
    }
    
    // Openings (doors/windows)
    function findNearestWall(pos) {
        let nearestWall = null;
        let minDist = Infinity;
        
        for (const wall of walls) {
            const dist = pointToLineDistance(pos, wall.start, wall.end);
            if (dist < minDist && dist < snapDistance) {
                minDist = dist;
                nearestWall = wall;
            }
        }
        
        return nearestWall;
    }
    
    /**
     * Snap a door/window endpoint onto a wall: corner → mid-wall → nearest wall projection.
     * Returns { x, y, wall, projected } or null if not near any wall.
     */
    function resolveWallOpeningEndpoint(rawPos) {
        const corner = findNearbyCorner(rawPos);
        if (corner && corner.walls && corner.walls.length) {
            let bestWall = corner.walls[0];
            let bestDist = Infinity;
            for (const wall of corner.walls) {
                const d = pointToLineDistance(rawPos, wall.start, wall.end);
                if (d < bestDist) {
                    bestDist = d;
                    bestWall = wall;
                }
            }
            const proj = projectPointOnWall(bestWall, { x: corner.x, y: corner.y });
            return { x: proj.x, y: proj.y, wall: bestWall, projected: proj };
        }
        const wallSnap = findSnapPointOnWall(rawPos, null);
        if (wallSnap) {
            const proj = projectPointOnWall(wallSnap.wall, wallSnap.point);
            return { x: proj.x, y: proj.y, wall: wallSnap.wall, projected: proj };
        }
        const nearestWall = findNearestWall(rawPos);
        if (nearestWall) {
            const proj = projectPointOnWall(nearestWall, rawPos);
            return { x: proj.x, y: proj.y, wall: nearestWall, projected: proj };
        }
        return null;
    }
    
    /** Snap a freeform door/window endpoint to corner, mid-wall, or grid. */
    function snapFreeformOpeningPoint(rawPos) {
        const corner = findNearbyCorner(rawPos);
        if (corner) {
            return { x: corner.x, y: corner.y };
        }
        const wallSnap = findSnapPointOnWall(rawPos, null);
        if (wallSnap) {
            return { x: wallSnap.point.x, y: wallSnap.point.y };
        }
        if (snapToGrid) {
            return {
                x: Math.round(rawPos.x / gridSize) * gridSize,
                y: Math.round(rawPos.y / gridSize) * gridSize
            };
        }
        return { x: rawPos.x, y: rawPos.y };
    }
    
    function pointToLineDistance(point, lineStart, lineEnd) {
        const A = point.x - lineStart.x;
        const B = point.y - lineStart.y;
        const C = lineEnd.x - lineStart.x;
        const D = lineEnd.y - lineStart.y;
        
        const dot = A * C + B * D;
        const lenSq = C * C + D * D;
        let param = -1;
        
        if (lenSq !== 0) param = dot / lenSq;
        
        let xx, yy;
        
        if (param < 0) {
            xx = lineStart.x;
            yy = lineStart.y;
        } else if (param > 1) {
            xx = lineEnd.x;
            yy = lineEnd.y;
        } else {
            xx = lineStart.x + param * C;
            yy = lineStart.y + param * D;
        }
        
        const dx = point.x - xx;
        const dy = point.y - yy;
        
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    function placeOpening(wall, pos, type) {
        const width = type === 'door' ? 3 * scale : 4 * scale;
        
        // Calculate position along wall
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        const dx = (wall.end.x - wall.start.x) / wallLength;
        const dy = (wall.end.y - wall.start.y) / wallLength;
        
        // Project click point onto wall
        const t = ((pos.x - wall.start.x) * dx + (pos.y - wall.start.y) * dy) / wallLength;
        const centerPos = Math.max(width / 2, Math.min(wallLength - width / 2, t * wallLength));
        
        const opening = {
            id: type + '-' + Date.now(),
            type: type,
            position: centerPos / wallLength, // Normalized position (0-1)
            width: width
        };
        
        addToHistory();
        wall.openings.push(opening);
        redrawWalls();
    }
    
    // Project a point onto a wall line and return the projected point
    function projectPointOnWall(wall, pos) {
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        const dx = (wall.end.x - wall.start.x) / wallLength;
        const dy = (wall.end.y - wall.start.y) / wallLength;
        
        // Calculate t parameter (how far along the wall)
        const t = ((pos.x - wall.start.x) * dx + (pos.y - wall.start.y) * dy) / wallLength;
        const clampedT = Math.max(0, Math.min(1, t));
        
        return {
            x: wall.start.x + clampedT * (wall.end.x - wall.start.x),
            y: wall.start.y + clampedT * (wall.end.y - wall.start.y),
            t: clampedT
        };
    }
    
    /** Keep opening center (normalized `position`) so the gap stays fully on the wall segment. */
    function clampOpeningPositionOnWall(wall, opening, t) {
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        if (wallLength < 1e-6) return t;
        const halfNorm = (opening.width / 2) / wallLength;
        if (halfNorm >= 0.5) return 0.5;
        return Math.max(halfNorm, Math.min(1 - halfNorm, t));
    }
    
    /** Slide a wall-attached opening by a screen delta (center moves, then re-projects onto wall). */
    function slideWallOpeningByDelta(wall, opening, dx, dy) {
        const cx = wall.start.x + opening.position * (wall.end.x - wall.start.x);
        const cy = wall.start.y + opening.position * (wall.end.y - wall.start.y);
        const proj = projectPointOnWall(wall, { x: cx + dx, y: cy + dy });
        opening.position = clampOpeningPositionOnWall(wall, opening, proj.t);
    }
    
    /** Move a freeform opening by translation. */
    function slideFreeformOpeningByDelta(opening, dx, dy) {
        opening.start.x += dx;
        opening.start.y += dy;
        opening.end.x += dx;
        opening.end.y += dy;
    }
    
    // Show a marker at the start point when placing door/window
    function showOpeningStartMarker(point) {
        removeOpeningPreview();
        
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        marker.setAttribute('cx', point.x);
        marker.setAttribute('cy', point.y);
        marker.setAttribute('r', 6);
        marker.setAttribute('fill', currentTool === 'door' ? '#8B4513' : '#87CEEB');
        marker.setAttribute('stroke', '#333');
        marker.setAttribute('stroke-width', '2');
        marker.classList.add('opening-preview', 'opening-start-marker');
        
        wallsLayer.appendChild(marker);
        openingPreview = marker;
    }
    
    // Show preview of door/window between start and current position
    function showOpeningPreview(wall, startPoint, endPoint, type) {
        removeOpeningPreview();
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('opening-preview');
        
        // Draw start marker
        const startMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        startMarker.setAttribute('cx', startPoint.x);
        startMarker.setAttribute('cy', startPoint.y);
        startMarker.setAttribute('r', 5);
        startMarker.setAttribute('fill', type === 'door' ? '#8B4513' : '#87CEEB');
        startMarker.setAttribute('stroke', '#333');
        startMarker.setAttribute('stroke-width', '1');
        group.appendChild(startMarker);
        
        // Draw end marker
        const endMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        endMarker.setAttribute('cx', endPoint.x);
        endMarker.setAttribute('cy', endPoint.y);
        endMarker.setAttribute('r', 5);
        endMarker.setAttribute('fill', type === 'door' ? '#8B4513' : '#87CEEB');
        endMarker.setAttribute('stroke', '#333');
        endMarker.setAttribute('stroke-width', '1');
        group.appendChild(endMarker);
        
        // Draw preview line between points
        const previewLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        previewLine.setAttribute('x1', startPoint.x);
        previewLine.setAttribute('y1', startPoint.y);
        previewLine.setAttribute('x2', endPoint.x);
        previewLine.setAttribute('y2', endPoint.y);
        previewLine.setAttribute('stroke', type === 'door' ? '#8B4513' : '#87CEEB');
        previewLine.setAttribute('stroke-width', wallThickness);
        previewLine.setAttribute('stroke-linecap', 'round');
        previewLine.setAttribute('opacity', '0.7');
        group.appendChild(previewLine);
        
        // Show width dimension
        const width = Math.sqrt((endPoint.x - startPoint.x) ** 2 + (endPoint.y - startPoint.y) ** 2);
        const midX = (startPoint.x + endPoint.x) / 2;
        const midY = (startPoint.y + endPoint.y) / 2;
        
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', midX);
        label.setAttribute('y', midY - 15);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-size', '12');
        label.setAttribute('fill', '#333');
        label.textContent = formatDimension(width);
        group.appendChild(label);
        
        wallsLayer.appendChild(group);
        openingPreview = group;
    }
    
    function removeOpeningPreview() {
        if (openingPreview) {
            openingPreview.remove();
            openingPreview = null;
        }
        // Also remove any stray preview elements
        wallsLayer.querySelectorAll('.opening-preview').forEach(el => el.remove());
    }
    
    // Show preview for wall-attached opening placement
    function showWallOpeningPreview(wall, startPoint, endPoint, type) {
        removeOpeningPreview();
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('opening-preview');
        group.setAttribute('opacity', '0.7');
        
        // Calculate the positions along the wall
        const startX = startPoint.x;
        const startY = startPoint.y;
        const endX = endPoint.x;
        const endY = endPoint.y;
        
        const width = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
        const centerX = (startX + endX) / 2;
        const centerY = (startY + endY) / 2;
        
        // Wall direction for perpendicular offset
        const wallDx = wall.end.x - wall.start.x;
        const wallDy = wall.end.y - wall.start.y;
        const wallLen = Math.sqrt(wallDx * wallDx + wallDy * wallDy);
        const perpX = -wallDy / wallLen;
        const perpY = wallDx / wallLen;
        
        if (type === 'door') {
            // Door preview - gap in wall with swing arc
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', startX);
            line.setAttribute('y1', startY);
            line.setAttribute('x2', endX);
            line.setAttribute('y2', endY);
            line.setAttribute('stroke', '#8B4513');
            line.setAttribute('stroke-width', wallThickness + 2);
            line.setAttribute('stroke-linecap', 'round');
            group.appendChild(line);
            
            // Door swing arc
            const arcRadius = width * 0.9;
            const arcEndX = startX + perpX * arcRadius;
            const arcEndY = startY + perpY * arcRadius;
            
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arc.setAttribute('d', `M ${startX} ${startY} A ${arcRadius} ${arcRadius} 0 0 1 ${arcEndX} ${arcEndY}`);
            arc.setAttribute('stroke', '#8B4513');
            arc.setAttribute('stroke-width', '1.5');
            arc.setAttribute('fill', 'none');
            arc.setAttribute('stroke-dasharray', '4,2');
            group.appendChild(arc);
            
            // Door panel line
            const doorLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            doorLine.setAttribute('x1', startX);
            doorLine.setAttribute('y1', startY);
            doorLine.setAttribute('x2', arcEndX);
            doorLine.setAttribute('y2', arcEndY);
            doorLine.setAttribute('stroke', '#8B4513');
            doorLine.setAttribute('stroke-width', '2');
            group.appendChild(doorLine);
        } else {
            // Window preview
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            rect.setAttribute('x1', startX);
            rect.setAttribute('y1', startY);
            rect.setAttribute('x2', endX);
            rect.setAttribute('y2', endY);
            rect.setAttribute('stroke', '#87CEEB');
            rect.setAttribute('stroke-width', wallThickness + 2);
            rect.setAttribute('stroke-linecap', 'round');
            group.appendChild(rect);
            
            // Window frame lines
            const frame1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            frame1.setAttribute('x1', startX + perpX * wallThickness/2);
            frame1.setAttribute('y1', startY + perpY * wallThickness/2);
            frame1.setAttribute('x2', endX + perpX * wallThickness/2);
            frame1.setAttribute('y2', endY + perpY * wallThickness/2);
            frame1.setAttribute('stroke', '#4A90A4');
            frame1.setAttribute('stroke-width', '2');
            group.appendChild(frame1);
            
            const frame2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            frame2.setAttribute('x1', startX - perpX * wallThickness/2);
            frame2.setAttribute('y1', startY - perpY * wallThickness/2);
            frame2.setAttribute('x2', endX - perpX * wallThickness/2);
            frame2.setAttribute('y2', endY - perpY * wallThickness/2);
            frame2.setAttribute('stroke', '#4A90A4');
            frame2.setAttribute('stroke-width', '2');
            group.appendChild(frame2);
        }
        
        // Show dimension
        const dimLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dimLabel.setAttribute('x', centerX + perpX * 20);
        dimLabel.setAttribute('y', centerY + perpY * 20);
        dimLabel.setAttribute('text-anchor', 'middle');
        dimLabel.setAttribute('font-size', '12');
        dimLabel.setAttribute('fill', '#333');
        dimLabel.textContent = formatDimension(width / scale);
        group.appendChild(dimLabel);
        
        // Start and end markers
        const startMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        startMarker.setAttribute('cx', startX);
        startMarker.setAttribute('cy', startY);
        startMarker.setAttribute('r', 4);
        startMarker.setAttribute('fill', type === 'door' ? '#8B4513' : '#87CEEB');
        startMarker.setAttribute('stroke', '#333');
        group.appendChild(startMarker);
        
        const endMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        endMarker.setAttribute('cx', endX);
        endMarker.setAttribute('cy', endY);
        endMarker.setAttribute('r', 4);
        endMarker.setAttribute('fill', type === 'door' ? '#8B4513' : '#87CEEB');
        endMarker.setAttribute('stroke', '#333');
        group.appendChild(endMarker);
        
        // "Attached to wall" indicator
        const indicator = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        indicator.setAttribute('x', centerX + perpX * 35);
        indicator.setAttribute('y', centerY + perpY * 35);
        indicator.setAttribute('text-anchor', 'middle');
        indicator.setAttribute('font-size', '10');
        indicator.setAttribute('fill', '#27ae60');
        indicator.textContent = '⚓ On wall';
        group.appendChild(indicator);
        
        wallsLayer.appendChild(group);
        openingPreview = group;
    }
    
    // Show preview for freeform door/window placement
    function showFreeformOpeningPreview(start, end, type) {
        removeOpeningPreview();
        
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        const centerX = (start.x + end.x) / 2;
        const centerY = (start.y + end.y) / 2;
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('opening-preview');
        group.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${angle})`);
        group.setAttribute('opacity', '0.6');
        
        const halfLength = length / 2;
        
        if (type === 'door') {
            // Door preview
            const frameLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            frameLine.setAttribute('x1', -halfLength);
            frameLine.setAttribute('y1', 0);
            frameLine.setAttribute('x2', halfLength);
            frameLine.setAttribute('y2', 0);
            frameLine.setAttribute('stroke', '#8B4513');
            frameLine.setAttribute('stroke-width', wallThickness);
            frameLine.setAttribute('stroke-linecap', 'round');
            group.appendChild(frameLine);
            
            // Door swing arc preview
            const arcRadius = length * 0.9;
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arc.setAttribute('d', `M ${-halfLength} 0 A ${arcRadius} ${arcRadius} 0 0 1 ${-halfLength + arcRadius} ${-arcRadius}`);
            arc.setAttribute('stroke', '#8B4513');
            arc.setAttribute('stroke-width', '1');
            arc.setAttribute('fill', 'none');
            arc.setAttribute('stroke-dasharray', '4,2');
            group.appendChild(arc);
        } else {
            // Window preview
            const windowRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            windowRect.setAttribute('x', -halfLength);
            windowRect.setAttribute('y', -wallThickness / 2);
            windowRect.setAttribute('width', length);
            windowRect.setAttribute('height', wallThickness);
            windowRect.setAttribute('fill', '#87CEEB');
            windowRect.setAttribute('stroke', '#4A90A4');
            windowRect.setAttribute('stroke-width', '2');
            group.appendChild(windowRect);
        }
        
        // Show dimension
        const dimLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        dimLabel.setAttribute('x', 0);
        dimLabel.setAttribute('y', -20);
        dimLabel.setAttribute('text-anchor', 'middle');
        dimLabel.setAttribute('font-size', '12');
        dimLabel.setAttribute('fill', '#333');
        dimLabel.setAttribute('transform', `rotate(${-angle})`);
        dimLabel.textContent = formatDimension(length / scale);
        group.appendChild(dimLabel);
        
        // Start and end markers
        const startMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        startMarker.setAttribute('cx', -halfLength);
        startMarker.setAttribute('cy', 0);
        startMarker.setAttribute('r', 4);
        startMarker.setAttribute('fill', type === 'door' ? '#8B4513' : '#87CEEB');
        startMarker.setAttribute('stroke', '#333');
        group.appendChild(startMarker);
        
        const endMarker = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        endMarker.setAttribute('cx', halfLength);
        endMarker.setAttribute('cy', 0);
        endMarker.setAttribute('r', 4);
        endMarker.setAttribute('fill', type === 'door' ? '#8B4513' : '#87CEEB');
        endMarker.setAttribute('stroke', '#333');
        group.appendChild(endMarker);
        
        wallsLayer.appendChild(group);
        openingPreview = group;
    }
    
    // Find a wall that connects two corners
    function findWallBetweenCorners(corner1, corner2) {
        for (const wall of walls) {
            if ((wall.start === corner1 && wall.end === corner2) ||
                (wall.start === corner2 && wall.end === corner1)) {
                return wall;
            }
        }
        return null;
    }
    
    // Place an opening that spans the entire wall (minus small margins)
    function placeOpeningAcrossWall(wall, type) {
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        
        // Leave small margins at each end (5% on each side)
        const margin = 0.05;
        const width = wallLength * (1 - 2 * margin);
        
        const opening = {
            id: type + '-' + Date.now(),
            type: type,
            position: 0.5, // Center of wall
            width: width
        };
        
        addToHistory();
        wall.openings.push(opening);
        redrawWalls();
    }
    
    // Create a freeform door/window (not attached to a wall)
    function createFreeformOpening(start, end, type) {
        addToHistory();
        
        const opening = {
            id: type + '-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
            type: type,
            start: { x: start.x, y: start.y },
            end: { x: end.x, y: end.y }
        };
        
        freeformOpenings.push(opening);
        renderFreeformOpening(opening);
    }
    
    // Render a freeform door/window
    function renderFreeformOpening(opening) {
        const dx = opening.end.x - opening.start.x;
        const dy = opening.end.y - opening.start.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        const centerX = (opening.start.x + opening.end.x) / 2;
        const centerY = (opening.start.y + opening.end.y) / 2;
        
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('freeform-opening', `${opening.type}-element`);
        group.dataset.openingId = opening.id;
        group.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${angle})`);
        
        const halfLength = length / 2;
        
        if (opening.type === 'door') {
            // Door frame lines
            const frameLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            frameLine.setAttribute('x1', -halfLength);
            frameLine.setAttribute('y1', 0);
            frameLine.setAttribute('x2', halfLength);
            frameLine.setAttribute('y2', 0);
            frameLine.setAttribute('stroke', '#8B4513');
            frameLine.setAttribute('stroke-width', wallThickness);
            frameLine.setAttribute('stroke-linecap', 'round');
            group.appendChild(frameLine);
            
            // Door swing arc (hinge left or right)
            const arcRadius = length * 0.9;
            const swingRight = !!opening.swingRight;
            const hingeX = swingRight ? halfLength : -halfLength;
            const sweep = swingRight ? 0 : 1;
            const arcEndX = swingRight ? hingeX - arcRadius : hingeX + arcRadius;
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arc.setAttribute('d', `M ${hingeX} 0 A ${arcRadius} ${arcRadius} 0 0 ${sweep} ${arcEndX} ${-arcRadius}`);
            arc.setAttribute('stroke', '#8B4513');
            arc.setAttribute('stroke-width', '1');
            arc.setAttribute('fill', 'none');
            arc.setAttribute('stroke-dasharray', '4,2');
            
            // Door panel (the actual door)
            const doorPanel = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            doorPanel.setAttribute('x1', hingeX);
            doorPanel.setAttribute('y1', 0);
            doorPanel.setAttribute('x2', hingeX);
            doorPanel.setAttribute('y2', -arcRadius);
            doorPanel.setAttribute('stroke', '#8B4513');
            doorPanel.setAttribute('stroke-width', '3');
            
            let swingParentFf = group;
            if (opening.swingInvert) {
                const wrap = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                wrap.setAttribute('transform', 'scale(1,-1)');
                group.appendChild(wrap);
                swingParentFf = wrap;
            }
            swingParentFf.appendChild(arc);
            swingParentFf.appendChild(doorPanel);
        } else {
            // Window - double line with glass fill
            const windowRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            windowRect.setAttribute('x', -halfLength);
            windowRect.setAttribute('y', -wallThickness / 2);
            windowRect.setAttribute('width', length);
            windowRect.setAttribute('height', wallThickness);
            windowRect.setAttribute('fill', '#87CEEB');
            windowRect.setAttribute('stroke', '#4A90A4');
            windowRect.setAttribute('stroke-width', '2');
            group.appendChild(windowRect);
            
            // Window frame center line
            const centerLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            centerLine.setAttribute('x1', 0);
            centerLine.setAttribute('y1', -wallThickness / 2);
            centerLine.setAttribute('x2', 0);
            centerLine.setAttribute('y2', wallThickness / 2);
            centerLine.setAttribute('stroke', '#4A90A4');
            centerLine.setAttribute('stroke-width', '2');
            group.appendChild(centerLine);
        }
        
        wallsLayer.appendChild(group);
    }
    
    // Redraw all freeform openings
    function redrawFreeformOpenings() {
        // Remove existing freeform openings from DOM
        wallsLayer.querySelectorAll('.freeform-opening').forEach(el => el.remove());
        
        // Re-render each opening
        for (const opening of freeformOpenings) {
            renderFreeformOpening(opening);
        }
    }
    
    // Place an opening between two points on a wall
    function placeOpeningBetweenPoints(wall, startPoint, endPoint, type) {
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        
        // Calculate positions along wall (0-1)
        const startT = startPoint.t;
        const endT = endPoint.t;
        
        // Make sure start is before end
        const minT = Math.min(startT, endT);
        const maxT = Math.max(startT, endT);
        
        // Calculate width in pixels (with a minimum of 1 foot)
        let width = (maxT - minT) * wallLength;
        const minWidth = 1 * scale;
        if (width < minWidth) {
            width = minWidth;
        }
        
        // Center position (normalized)
        const centerT = (minT + maxT) / 2;
        
        const opening = {
            id: type + '-' + Date.now(),
            type: type,
            position: centerT,
            width: width
        };
        
        addToHistory();
        wall.openings.push(opening);
        redrawWalls();
    }
    
    function renderOpening(wall, opening) {
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        const dx = (wall.end.x - wall.start.x) / wallLength;
        const dy = (wall.end.y - wall.start.y) / wallLength;
        
        // Calculate wall angle in degrees
        const wallAngle = Math.atan2(wall.end.y - wall.start.y, wall.end.x - wall.start.x) * 180 / Math.PI;
        
        // Center position of the opening
        const centerX = wall.start.x + opening.position * (wall.end.x - wall.start.x);
        const centerY = wall.start.y + opening.position * (wall.end.y - wall.start.y);
        
        const halfWidth = opening.width / 2;
        const hitPadding = Math.max(8, wallThickness);
        
        if (opening.type === 'door') {
            // Draw door opening (gap in wall with swing arc)
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('door-element');
            group.dataset.wallId = wall.id;
            group.dataset.openingId = opening.id;
            group.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${wallAngle})`);
            
            // Hit area for selection
            const hitRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            hitRect.setAttribute('x', -halfWidth - hitPadding);
            hitRect.setAttribute('y', -wallThickness / 2 - hitPadding);
            hitRect.setAttribute('width', opening.width + hitPadding * 2);
            hitRect.setAttribute('height', wallThickness + hitPadding * 2);
            hitRect.setAttribute('fill', 'transparent');
            hitRect.setAttribute('pointer-events', 'all');
            group.appendChild(hitRect);
            
            // Door frame (white rectangle to cover wall) - drawn in local coordinates
            const frame = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            frame.setAttribute('x', -halfWidth);
            frame.setAttribute('y', -wallThickness / 2 - 1);
            frame.setAttribute('width', opening.width);
            frame.setAttribute('height', wallThickness + 2);
            frame.classList.add('door-frame');
            group.appendChild(frame);
            
            // Door swing arc — hinge on left (-halfWidth) or right (+halfWidth) when swingRight is set
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const swingRadius = opening.width * 0.9;
            const swingRight = !!opening.swingRight;
            const hingeX = swingRight ? halfWidth : -halfWidth;
            const sweep = swingRight ? 1 : 0;
            arc.setAttribute('d', `M ${hingeX} 0 A ${swingRadius} ${swingRadius} 0 0 ${sweep} ${hingeX} ${-swingRadius}`);
            arc.classList.add('door-swing');
            
            // Door panel line
            const doorPanel = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            doorPanel.setAttribute('x1', hingeX);
            doorPanel.setAttribute('y1', 0);
            doorPanel.setAttribute('x2', hingeX);
            doorPanel.setAttribute('y2', -swingRadius);
            doorPanel.setAttribute('stroke', '#8B4513');
            doorPanel.setAttribute('stroke-width', '2');
            
            // Flip arc + panel to opposite side of wall (local Y)
            let swingParent = group;
            if (opening.swingInvert) {
                const wrap = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                wrap.setAttribute('transform', 'scale(1,-1)');
                group.appendChild(wrap);
                swingParent = wrap;
            }
            swingParent.appendChild(arc);
            swingParent.appendChild(doorPanel);
            
            wallsLayer.appendChild(group);
            
        } else if (opening.type === 'window') {
            // Draw window (light blue rectangle)
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('window-element');
            group.dataset.wallId = wall.id;
            group.dataset.openingId = opening.id;
            group.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${wallAngle})`);
            
            // Hit area for selection
            const hitRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            hitRect.setAttribute('x', -halfWidth - hitPadding);
            hitRect.setAttribute('y', -wallThickness / 2 - hitPadding);
            hitRect.setAttribute('width', opening.width + hitPadding * 2);
            hitRect.setAttribute('height', wallThickness + hitPadding * 2);
            hitRect.setAttribute('fill', 'transparent');
            hitRect.setAttribute('pointer-events', 'all');
            group.appendChild(hitRect);
            
            // Window frame - drawn in local coordinates
            const frame = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            frame.setAttribute('x', -halfWidth);
            frame.setAttribute('y', -wallThickness / 2);
            frame.setAttribute('width', opening.width);
            frame.setAttribute('height', wallThickness);
            frame.classList.add('window-frame');
            group.appendChild(frame);
            
            // Center mullion (vertical line through center of window)
            const mullion = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            mullion.setAttribute('x1', 0);
            mullion.setAttribute('y1', -wallThickness / 2);
            mullion.setAttribute('x2', 0);
            mullion.setAttribute('y2', wallThickness / 2);
            mullion.classList.add('window-mullion');
            group.appendChild(mullion);
            
            wallsLayer.appendChild(group);
        }
    }
    
    // Dimensions
    function redrawDimensions() {
        dimensionsLayer.innerHTML = '';
        
        if (!showDimensions) return;
        
        for (const wall of walls) {
            renderWallDimension(wall);
        }
    }
    
    function renderWallDimension(wall) {
        const length = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2) / scale;
        const midX = (wall.start.x + wall.end.x) / 2;
        const midY = (wall.start.y + wall.end.y) / 2;
        
        const dx = wall.end.x - wall.start.x;
        const dy = wall.end.y - wall.start.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        
        let perpX = -dy / len;
        let perpY = dx / len;
        
        const allWallsCenter = getWallsCenter();
        const testPointX = midX + perpX * 10;
        const testPointY = midY + perpY * 10;
        const distToCenter = Math.sqrt((testPointX - allWallsCenter.x) ** 2 + (testPointY - allWallsCenter.y) ** 2);
        const oppDistToCenter = Math.sqrt((midX - perpX * 10 - allWallsCenter.x) ** 2 + (midY - perpY * 10 - allWallsCenter.y) ** 2);
        
        if (distToCenter < oppDistToCenter) {
            perpX = -perpX;
            perpY = -perpY;
        }
        
        // Scale offset so it stays visually consistent regardless of zoom
        const dimensionOffset = 20 / zoom;
        const fontSize = 33 / zoom;
        
        const textX = midX + perpX * dimensionOffset;
        const textY = midY + perpY * dimensionOffset;
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', textX);
        text.setAttribute('y', textY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-size', fontSize);
        text.classList.add('dimension-text');
        text.textContent = formatDimension(length);
        dimensionsLayer.appendChild(text);
    }
    
    function getWallsCenter() {
        if (walls.length === 0) return { x: 0, y: 0 };
        
        let sumX = 0, sumY = 0, count = 0;
        for (const wall of walls) {
            sumX += wall.start.x + wall.end.x;
            sumY += wall.start.y + wall.end.y;
            count += 2;
        }
        return { x: sumX / count, y: sumY / count };
    }
    
    function formatDimension(value) {
        if (unit === 'ft') {
            const feet = Math.floor(value);
            const inches = Math.round((value - feet) * 12);
            if (inches === 12) {
                return (feet + 1) + "'";
            }
            return feet + "'" + (inches > 0 ? ' ' + inches + '"' : '');
        } else {
            return value.toFixed(2) + 'm';
        }
    }
    
    function getFurnitureIcon(item) {
        return `<img src="${furnitureAssetUrl(item.id)}" alt="${item.name}" width="44" height="44" style="object-fit:contain">`;
    }
    
    // Furniture
    function updateFurnitureGrid() {
        // Get all active categories
        const activeCategories = Array.from(document.querySelectorAll('.category-btn.active'))
            .map(btn => btn.dataset.category);
        
        // Get search term
        const searchTerm = document.getElementById('furniture-search')?.value || '';
        
        populateFurnitureGrid(activeCategories, searchTerm);
    }
    
    function populateFurnitureGrid(categories, searchTerm = '') {
        const grid = document.getElementById('furniture-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        // If no categories selected, show nothing (or could show all)
        const showAll = !categories || categories.length === 0;
        
        const filteredItems = furnitureLibrary.filter(item => {
            const matchesCategory = showAll || categories.includes(item.category);
            const matchesSearch = !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        
        for (const item of filteredItems) {
            const div = document.createElement('div');
            div.className = 'furniture-item';
            div.draggable = true;
            div.dataset.furnitureType = item.id;
            
            div.innerHTML = `
                <div class="furniture-preview">${getFurnitureIcon(item)}</div>
                <span>${item.name}</span>
            `;
            div.dataset.tooltip = `Add ${item.name} — click or drag`;
            div.setAttribute('aria-label', `Add ${item.name} to the plan—click to place at center, or drag onto the canvas`);
            
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('furnitureType', item.id);
            });
            
            div.addEventListener('click', () => {
                // Add furniture at center of visible canvas area
                const wrapper = document.getElementById('layout-canvas-wrapper');
                const centerX = (wrapper.clientWidth / 2 - panOffset.x) / zoom;
                const centerY = (wrapper.clientHeight / 2 - panOffset.y) / zoom;
                addFurniture(item.id, centerX, centerY);
                
                // Switch to select tool so user can move/adjust the furniture
                selectTool('select');
            });
            
            grid.appendChild(div);
        }
    }
    
    /** Snap furniture to a finer grid than walls (quarter-foot when snap-to-grid is on). */
    function snapFurniturePosition(x, y) {
        if (!snapToGrid) return { x, y };
        const inc = gridSize / FURNITURE_GRID_DIVISOR;
        return {
            x: Math.round(x / inc) * inc,
            y: Math.round(y / inc) * inc
        };
    }

    const FURNITURE_WALL_SNAP_THRESHOLD = 25;

    /** Snap furniture position to align with a nearby wall. Returns adjusted {x, y} or null if not near any wall. */
    function snapFurnitureToWall(shape, x, y) {
        if (walls.length === 0) return null;
        const s = { x, y, width: shape.width, height: shape.height, rotation: shape.rotation || 0 };
        const corners = getRotatedCorners(s, 1);
        let bestWall = null, bestDist = Infinity, bestCorner = null, bestProj = null;
        for (const w of walls) {
            for (const p of corners) {
                const d = distPointToSegment(p.x, p.y, w.start.x, w.start.y, w.end.x, w.end.y);
                if (d < bestDist) {
                    bestDist = d;
                    bestWall = w;
                    bestCorner = p;
                    const dx = w.end.x - w.start.x, dy = w.end.y - w.start.y;
                    const len2 = dx * dx + dy * dy;
                    if (len2 === 0) bestProj = { x: w.start.x, y: w.start.y };
                    else {
                        const t = Math.max(0, Math.min(1, ((p.x - w.start.x) * dx + (p.y - w.start.y) * dy) / len2));
                        bestProj = { x: w.start.x + t * dx, y: w.start.y + t * dy };
                    }
                }
            }
        }
        if (!bestWall || bestDist >= FURNITURE_WALL_SNAP_THRESHOLD) return null;
        const halfThick = wallThickness / 2;
        const vx = bestCorner.x - bestProj.x, vy = bestCorner.y - bestProj.y;
        const vlen = Math.sqrt(vx * vx + vy * vy);
        if (vlen < 1e-9) return { x, y };
        const shift = (halfThick - bestDist) / vlen;
        return { x: x + vx * shift, y: y + vy * shift };
    }

    /** True if furniture is placed against a wall (min distance to any wall < 1 foot). Uses scale so threshold is meaningful. */
    function isFurnitureSnappedToWall(f) {
        if (walls.length === 0) return false;
        const minDist = minEdgeToWallDistance(f);
        return minDist < scale;
    }

    function addFurniture(typeId, x, y) {
        const template = furnitureLibrary.find(f => f.id === typeId);
        if (!template) return;
        
        let pos = snapFurniturePosition(x, y);
        const shape = { width: template.width * scale, height: template.height * scale, rotation: 0 };
        const wallSnap = snapFurnitureToWall(shape, pos.x, pos.y);
        if (wallSnap) pos = wallSnap;
        const item = {
            id: 'furniture-' + Date.now(),
            typeId: typeId,
            name: template.name,
            x: pos.x,
            y: pos.y,
            width: template.width * scale,
            height: template.height * scale,
            rotation: 0,
            color: template.color
        };
        
        addToHistory();
        furniture.push(item);
        renderFurniture(item);
        selectElement(item, 'furniture');
    }
    
    /** Build SVG elements for furniture on the canvas using cached SVG files. */
    function buildFurnitureBody(item) {
        const w = item.width;
        const h = item.height;
        const els = [];
        const ns = 'http://www.w3.org/2000/svg';

        // Transparent hit rect for pointer events
        const hitRect = document.createElementNS(ns, 'rect');
        hitRect.setAttribute('x', 0);
        hitRect.setAttribute('y', 0);
        hitRect.setAttribute('width', w);
        hitRect.setAttribute('height', h);
        hitRect.setAttribute('fill', 'transparent');
        hitRect.setAttribute('pointer-events', 'all');
        els.push(hitRect);
        // Debug: border showing full bounds
        const debugRect = document.createElementNS(ns, 'rect');
        debugRect.setAttribute('x', 0);
        debugRect.setAttribute('y', 0);
        debugRect.setAttribute('width', w);
        debugRect.setAttribute('height', h);
        debugRect.setAttribute('fill', 'none');
        debugRect.setAttribute('stroke', '#e11d48');
        debugRect.setAttribute('stroke-width', '1');
        debugRect.setAttribute('stroke-dasharray', '4 2');
        debugRect.classList.add('furniture-debug-border');
        els.push(debugRect);

        const cached = furnitureSvgCache[item.typeId];
        if (cached) {
            const nested = document.createElementNS(ns, 'svg');
            nested.setAttribute('width', w);
            nested.setAttribute('height', h);
            const vb = cached.getAttribute('viewBox');
            if (vb) nested.setAttribute('viewBox', vb);
            nested.setAttribute('preserveAspectRatio', 'none');
            for (const attr of ['fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin']) {
                const val = cached.getAttribute(attr);
                if (val) nested.setAttribute(attr, val);
            }
            for (const child of cached.children) {
                nested.appendChild(child.cloneNode(true));
            }
            els.push(nested);
        } else {
            const rect = document.createElementNS(ns, 'rect');
            rect.setAttribute('width', w);
            rect.setAttribute('height', h);
            rect.setAttribute('fill', 'none');
            rect.setAttribute('stroke', '#333');
            rect.setAttribute('stroke-width', '1');
            rect.setAttribute('rx', 2);
            els.push(rect);
        }
        return els;
    }

    function renderFurniture(item) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('furniture-element');
        group.dataset.furnitureId = item.id;
        group.setAttribute('transform', `translate(${item.x}, ${item.y}) rotate(${item.rotation}, ${item.width / 2}, ${item.height / 2})`);
        const bodyEls = buildFurnitureBody(item);
        bodyEls.forEach(el => group.appendChild(el));
        furnitureLayer.appendChild(group);
    }
    
    function moveFurniture(item, x, y) {
        let pos = snapFurniturePosition(x, y);
        const wallSnap = snapFurnitureToWall(item, pos.x, pos.y);
        if (wallSnap) pos = wallSnap;
        item.x = pos.x;
        item.y = pos.y;
        
        const el = furnitureLayer.querySelector(`[data-furniture-id="${item.id}"]`);
        if (el) {
            el.setAttribute('transform', `translate(${item.x}, ${item.y}) rotate(${item.rotation}, ${item.width / 2}, ${item.height / 2})`);
        }
    }
    
    function rotateFurniture(item, angle) {
        item.rotation = angle;
        
        const el = furnitureLayer.querySelector(`[data-furniture-id="${item.id}"]`);
        if (el) {
            el.setAttribute('transform', `translate(${item.x}, ${item.y}) rotate(${item.rotation}, ${item.width / 2}, ${item.height / 2})`);
        }
        
        // Update properties panel if visible
        const rotationInput = document.getElementById('prop-rotation');
        if (rotationInput) {
            rotationInput.value = Math.round(angle);
        }
    }
    
    function snapToWallAngle(angle) {
        const snapThreshold = 15; // degrees - more generous snapping
        
        // If we have a rotation target, find the nearest wall and prioritize its angle
        if (rotationTarget) {
            const centerX = rotationTarget.x + rotationTarget.width / 2;
            const centerY = rotationTarget.y + rotationTarget.height / 2;
            
            // Find nearest wall
            let nearestWall = null;
            let minDist = Infinity;
            
            for (const wall of walls) {
                const dist = pointToLineDistance({ x: centerX, y: centerY }, wall.start, wall.end);
                if (dist < minDist) {
                    minDist = dist;
                    nearestWall = wall;
                }
            }
            
            // If there's a nearby wall (within 100 pixels), strongly snap to it
            if (nearestWall && minDist < 100) {
                const dx = nearestWall.end.x - nearestWall.start.x;
                const dy = nearestWall.end.y - nearestWall.start.y;
                let wallAngle = Math.atan2(dy, dx) * 180 / Math.PI;
                wallAngle = ((wallAngle % 360) + 360) % 360;
                
                // The top of furniture (where handle is) should align with wall
                // So furniture rotation should be perpendicular to wall + 90 (top facing wall)
                const alignAngles = [
                    wallAngle + 90,           // Top faces along wall direction
                    wallAngle - 90,           // Top faces opposite wall direction  
                    wallAngle,                // Top perpendicular to wall
                    wallAngle + 180           // Top perpendicular other way
                ].map(a => ((a % 360) + 360) % 360);
                
                // Check if current angle is close to any wall-aligned angle
                for (const alignAngle of alignAngles) {
                    let diff = Math.abs(angle - alignAngle);
                    if (diff > 180) diff = 360 - diff;
                    
                    if (diff < snapThreshold) {
                        return alignAngle;
                    }
                }
            }
        }
        
        // Fall back to cardinal directions
        const cardinalAngles = [0, 90, 180, 270];
        for (const snapAngle of cardinalAngles) {
            let diff = Math.abs(angle - snapAngle);
            if (diff > 180) diff = 360 - diff;
            
            if (diff < snapThreshold) {
                return snapAngle;
            }
        }
        
        return angle;
    }
    
    function rotateSelectedBy(degrees) {
        if (selectedElement && selectedElement.type === 'furniture') {
            const item = selectedElement.element;
            let newAngle = (item.rotation + degrees) % 360;
            if (newAngle < 0) newAngle += 360;
            
            addToHistory();
            rotateFurniture(item, newAngle);
        }
    }
    
    // Labels
    function createLabel(pos, text) {
        const label = {
            id: 'label-' + Date.now(),
            x: pos.x,
            y: pos.y,
            text: text
        };
        
        addToHistory();
        labels.push(label);
        renderLabel(label);
    }
    
    function renderLabel(label) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', label.x);
        text.setAttribute('y', label.y);
        text.classList.add('room-label');
        text.dataset.labelId = label.id;
        text.textContent = label.text;
        labelsLayer.appendChild(text);
    }
    
    function moveLabel(label, x, y) {
        label.x = x;
        label.y = y;
        
        const el = labelsLayer.querySelector(`[data-label-id="${label.id}"]`);
        if (el) {
            el.setAttribute('x', x);
            el.setAttribute('y', y);
        }
    }
    
    // Selection
    function selectElement(element, type) {
        // Switch to select tool when selecting any element
        selectTool('select');
        
        deselectAll();
        selectedElement = { element, type };
        selectedElements = [{ element, type }]; // Also populate multi-selection array
        
        if (type === 'furniture') {
            const el = furnitureLayer.querySelector(`[data-furniture-id="${element.id}"]`);
            if (el) {
                el.classList.add('selected');
                addRotationHandle(element);
            }
            showProperties(element);
        } else if (type === 'label') {
            const el = labelsLayer.querySelector(`[data-label-id="${element.id}"]`);
            if (el) el.style.fill = 'var(--primary-color)';
        } else if (type === 'imported') {
            // Highlight the imported element
            if (element.element) {
                element.element.classList.add('selected');
            }
        } else if (type === 'wall') {
            const el = wallsLayer.querySelector(`[data-wall-id="${element.id}"]`);
            if (el) el.classList.add('selected');
        } else if (type === 'opening') {
            const el = wallsLayer.querySelector(`[data-opening-id="${element.opening.id}"]`);
            if (el) el.classList.add('selected');
            showPropertiesForOpening(element);
        } else if (type === 'referenceImage') {
            const el = imageLayer.querySelector(`[data-ref-image-id="${element.id}"]`);
            if (el) el.classList.add('selected');
            addResizeHandles(element);
            showReferenceImageControls(element);
        }
        
        // Show scale handles for scalable elements
        if (type === 'wall' || type === 'label' || type === 'imported' || type === 'referenceImage') {
            showScaleHandles();
        }
    }
    
    function addToSelection(element, type) {
        if (isElementSelected(element, type)) {
            // Shift-clicking an already-selected element removes it
            selectedElements = selectedElements.filter(
                sel => !(sel.element === element && sel.type === type)
            );
            // Remove highlight
            highlightElement(element, type, false);
        } else {
            selectedElements.push({ element, type });
            highlightElement(element, type, true);
        }
        
        // Update single-selection compat
        removeRotationHandle();
        removeScaleHandles();
        hideProperties();
        if (selectedElements.length === 1) {
            selectedElement = selectedElements[0];
            if (selectedElement.type === 'furniture') {
                addRotationHandle(selectedElement.element);
                showProperties(selectedElement.element);
            } else if (selectedElement.type === 'opening') {
                showPropertiesForOpening(selectedElement.element);
            } else if (selectedElement.type === 'referenceImage') {
                showReferenceImageControls(selectedElement.element);
                addResizeHandles(selectedElement.element);
            }
        } else {
            selectedElement = null;
        }
        
        if (selectedElements.length > 0) {
            showScaleHandles();
        }
    }
    
    function highlightElement(element, type, on) {
        if (type === 'furniture') {
            const el = furnitureLayer.querySelector(`[data-furniture-id="${element.id}"]`);
            if (el) on ? el.classList.add('selected') : el.classList.remove('selected');
        } else if (type === 'label') {
            const el = labelsLayer.querySelector(`[data-label-id="${element.id}"]`);
            if (el) el.style.fill = on ? 'var(--primary-color)' : '';
        } else if (type === 'imported') {
            if (element.element) on ? element.element.classList.add('selected') : element.element.classList.remove('selected');
        } else if (type === 'wall') {
            const el = wallsLayer.querySelector(`[data-wall-id="${element.id}"]`);
            if (el) on ? el.classList.add('selected') : el.classList.remove('selected');
        } else if (type === 'opening') {
            const el = wallsLayer.querySelector(`[data-opening-id="${element.opening.id}"]`);
            if (el) on ? el.classList.add('selected') : el.classList.remove('selected');
        } else if (type === 'referenceImage') {
            const el = imageLayer.querySelector(`[data-ref-image-id="${element.id}"]`);
            if (el) on ? el.classList.add('selected') : el.classList.remove('selected');
            if (on) addResizeHandles(element);
            else removeRefImageHandles();
        }
    }
    
    function addRotationHandle(item) {
        removeRotationHandle();
        
        const group = furnitureLayer.querySelector(`[data-furniture-id="${item.id}"]`);
        if (!group) return;
        
        // Create rotation handle at the top center of furniture
        const handle = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        handle.classList.add('rotation-handle');
        handle.dataset.furnitureId = item.id;
        
        // Line connecting to furniture
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', item.width / 2);
        line.setAttribute('y1', 0);
        line.setAttribute('x2', item.width / 2);
        line.setAttribute('y2', -20);
        line.setAttribute('stroke', '#6366f1');
        line.setAttribute('stroke-width', '2');
        handle.appendChild(line);
        
        // Circular handle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', item.width / 2);
        circle.setAttribute('cy', -25);
        circle.setAttribute('r', 8);
        circle.setAttribute('fill', '#6366f1');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', '2');
        circle.setAttribute('cursor', 'grab');
        handle.appendChild(circle);
        
        // Rotation icon inside circle
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        icon.setAttribute('d', 'M' + (item.width / 2 - 4) + ',-27 A 4 4 0 1 1 ' + (item.width / 2 + 4) + ',-27');
        icon.setAttribute('fill', 'none');
        icon.setAttribute('stroke', '#fff');
        icon.setAttribute('stroke-width', '1.5');
        icon.setAttribute('stroke-linecap', 'round');
        handle.appendChild(icon);
        
        group.appendChild(handle);
    }
    
    function removeRotationHandle() {
        furnitureLayer.querySelectorAll('.rotation-handle').forEach(h => h.remove());
    }
    
    function deselectAll() {
        selectedElement = null;
        selectedElements = [];
        furnitureLayer.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
        labelsLayer.querySelectorAll('.room-label').forEach(el => el.style.fill = '');
        wallsLayer.querySelectorAll('.wall-line.selected').forEach(el => el.classList.remove('selected'));
        wallsLayer.querySelectorAll('.door-element.selected, .window-element.selected').forEach(el => el.classList.remove('selected'));
        wallsLayer.querySelectorAll('.imported-svg-element.selected, .imported-svg-group.selected').forEach(el => el.classList.remove('selected'));
        imageLayer.querySelectorAll('.reference-image.selected').forEach(el => el.classList.remove('selected'));
        removeRotationHandle();
        removeScaleHandles();
        removeRefImageHandles();
        hideProperties();
    }
    
    function selectAll() {
        deselectAll();
        selectedElements = [];
        for (const wall of walls) {
            selectedElements.push({ element: wall, type: 'wall' });
            if (wall.openings) {
                for (const opening of wall.openings) {
                    selectedElements.push({ element: { wall, opening }, type: 'opening' });
                }
            }
        }
        for (const item of furniture) {
            selectedElements.push({ element: item, type: 'furniture' });
        }
        for (const label of labels) {
            selectedElements.push({ element: label, type: 'label' });
        }
        for (const opening of freeformOpenings) {
            selectedElements.push({ element: { opening, freeform: true }, type: 'opening' });
        }
        for (const ref of referenceImages) {
            selectedElements.push({ element: ref, type: 'referenceImage' });
        }
        for (const imported of importedElements) {
            selectedElements.push({ element: imported, type: 'imported' });
        }
        if (selectedElements.length === 0) return;
        // Highlight all selected elements
        for (const sel of selectedElements) {
            if (sel.type === 'furniture') {
                const el = furnitureLayer.querySelector(`[data-furniture-id="${sel.element.id}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'label') {
                const el = labelsLayer.querySelector(`[data-label-id="${sel.element.id}"]`);
                if (el) el.style.fill = 'var(--primary-color)';
            } else if (sel.type === 'wall') {
                const el = wallsLayer.querySelector(`[data-wall-id="${sel.element.id}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'opening') {
                const el = wallsLayer.querySelector(`[data-opening-id="${sel.element.opening.id}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'referenceImage') {
                const el = imageLayer.querySelector(`[data-ref-image-id="${sel.element.id}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'imported' && sel.element.element) {
                sel.element.element.classList.add('selected');
            }
        }
        if (selectedElements.length === 1) {
            selectedElement = selectedElements[0];
            if (selectedElement.type === 'furniture') {
                addRotationHandle(selectedElement.element);
                showProperties(selectedElement.element);
            } else if (selectedElement.type === 'wall' || selectedElement.type === 'label' || selectedElement.type === 'imported') {
                showScaleHandles();
            } else if (selectedElement.type === 'referenceImage') {
                addResizeHandles(selectedElement.element);
                showReferenceImageControls(selectedElement.element);
            }
        } else {
            hideProperties();
            showScaleHandles();
        }
    }
    
    // --- Scale handles for selected elements ---
    let isScaling = false;
    let scaleHandle = null;
    let scaleOrigin = null; // The anchor corner (opposite of the handle being dragged)
    let scaleBBoxStart = null; // Bounding box at drag start
    let scaleStartPositions = null; // Snapshot of element positions at drag start
    
    // --- Group rotation ---
    let isRotatingSelection = false;
    let selectionRotationStart = 0; // angle (deg) when drag started
    let selectionRotationCenter = null; // { x, y }
    
    function getSelectionBBox() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        let hasScalable = false;
        
        for (const sel of selectedElements) {
            if (sel.type === 'wall') {
                const w = sel.element;
                minX = Math.min(minX, w.start.x, w.end.x);
                minY = Math.min(minY, w.start.y, w.end.y);
                maxX = Math.max(maxX, w.start.x, w.end.x);
                maxY = Math.max(maxY, w.start.y, w.end.y);
                hasScalable = true;
            } else if (sel.type === 'label') {
                minX = Math.min(minX, sel.element.x);
                minY = Math.min(minY, sel.element.y);
                maxX = Math.max(maxX, sel.element.x);
                maxY = Math.max(maxY, sel.element.y);
                hasScalable = true;
            } else if (sel.type === 'furniture') {
                // Include furniture in bbox for positioning but it won't scale
                minX = Math.min(minX, sel.element.x);
                minY = Math.min(minY, sel.element.y);
                maxX = Math.max(maxX, sel.element.x + sel.element.width);
                maxY = Math.max(maxY, sel.element.y + sel.element.height);
            } else if (sel.type === 'opening') {
                const payload = sel.element;
                const b = payload.freeform
                    ? getFreeformOpeningMarqueeBounds(payload.opening)
                    : getWallOpeningMarqueeBounds(payload.wall, payload.opening);
                if (b) {
                    minX = Math.min(minX, b.minX);
                    minY = Math.min(minY, b.minY);
                    maxX = Math.max(maxX, b.maxX);
                    maxY = Math.max(maxY, b.maxY);
                }
            } else if (sel.type === 'referenceImage') {
                const r = sel.element;
                minX = Math.min(minX, r.x);
                minY = Math.min(minY, r.y);
                maxX = Math.max(maxX, r.x + r.width);
                maxY = Math.max(maxY, r.y + r.height);
                hasScalable = true;
            }
        }
        
        if (minX === Infinity) return null;
        return { x: minX, y: minY, width: maxX - minX, height: maxY - minY, hasScalable };
    }
    
    function showScaleHandles() {
        removeScaleHandles();
        const bbox = getSelectionBBox();
        if (!bbox) return;
        // Show bbox + rotation for any selection; corner scale handles only when selection has scalable elements
        const pad = 6;
        const handleSize = 10;
        const positions = {
            nw: { x: bbox.x - pad, y: bbox.y - pad },
            ne: { x: bbox.x + bbox.width + pad, y: bbox.y - pad },
            se: { x: bbox.x + bbox.width + pad, y: bbox.y + bbox.height + pad },
            sw: { x: bbox.x - pad, y: bbox.y + bbox.height + pad }
        };
        
        const floorPlanGroup = document.getElementById('floor-plan-group');
        
        // Bounding box outline (draggable)
        const outline = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        outline.setAttribute('x', bbox.x - pad);
        outline.setAttribute('y', bbox.y - pad);
        outline.setAttribute('width', bbox.width + pad * 2);
        outline.setAttribute('height', bbox.height + pad * 2);
        outline.setAttribute('fill', 'rgba(79, 70, 229, 0.03)');
        outline.setAttribute('stroke', 'var(--primary-color, #4f46e5)');
        outline.setAttribute('stroke-width', 1 / zoom);
        outline.setAttribute('stroke-dasharray', `${4 / zoom}`);
        outline.classList.add('scale-handle-group', 'scale-bbox');
        outline.style.cursor = 'move';
        floorPlanGroup.appendChild(outline);
        
        // Corner scale handles (only when selection contains walls/labels/etc. that scale)
        if (bbox.hasScalable) {
            for (const [corner, pos] of Object.entries(positions)) {
                const handle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                handle.setAttribute('x', pos.x - handleSize / 2);
                handle.setAttribute('y', pos.y - handleSize / 2);
                handle.setAttribute('width', handleSize);
                handle.setAttribute('height', handleSize);
                handle.setAttribute('fill', 'white');
                handle.setAttribute('stroke', 'var(--primary-color, #4f46e5)');
                handle.setAttribute('stroke-width', 1.5 / zoom);
                handle.setAttribute('rx', 2);
                handle.classList.add('scale-handle-group', 'scale-handle');
                handle.dataset.scaleCorner = corner;
                handle.style.cursor = corner === 'nw' || corner === 'se' ? 'nwse-resize' : 'nesw-resize';
                floorPlanGroup.appendChild(handle);
            }
        }
        
        // Rotation handle above bbox center (for single or multi selection)
        const cx = bbox.x + bbox.width / 2;
        const cy = bbox.y;
        const rotHandleY = cy - 28;
        const rotGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        rotGroup.classList.add('scale-handle-group', 'selection-rotation-handle');
        rotGroup.style.cursor = 'grab';
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', cx);
        line.setAttribute('y1', cy);
        line.setAttribute('x2', cx);
        line.setAttribute('y2', rotHandleY);
        line.setAttribute('stroke', 'var(--primary-color, #4f46e5)');
        line.setAttribute('stroke-width', 1.5 / zoom);
        rotGroup.appendChild(line);
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', rotHandleY);
        circle.setAttribute('r', 8);
        circle.setAttribute('fill', 'var(--primary-color, #4f46e5)');
        circle.setAttribute('stroke', '#fff');
        circle.setAttribute('stroke-width', 1.5 / zoom);
        rotGroup.appendChild(circle);
        floorPlanGroup.appendChild(rotGroup);
        
        showSelectionActions(bbox);
    }
    
    function removeScaleHandles() {
        document.querySelectorAll('.scale-handle-group').forEach(el => el.remove());
        document.getElementById('selection-actions')?.remove();
    }
    
    function hasSharedCorners() {
        const selectedWalls = selectedElements.filter(s => s.type === 'wall').map(s => s.element);
        if (selectedWalls.length === 0) return false;
        
        const selectedWallIds = new Set(selectedWalls.map(w => w.id));
        
        for (const wall of selectedWalls) {
            for (const c of [wall.start, wall.end]) {
                const hasUnselectedWall = c.walls.some(w => !selectedWallIds.has(w.id));
                if (hasUnselectedWall) return true;
            }
        }
        return false;
    }
    
    function showSelectionActions(bbox) {
        document.getElementById('selection-actions')?.remove();
        if (!hasSharedCorners()) return;
        
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return;
        
        const container = document.createElement('div');
        container.id = 'selection-actions';
        container.className = 'selection-actions';
        
        // Position above the bounding box top-center, in screen coords
        const screenX = bbox.x * zoom + bbox.width * zoom / 2 + panOffset.x;
        const screenY = bbox.y * zoom + panOffset.y - 10;
        
        container.style.left = screenX + 'px';
        container.style.top = screenY + 'px';
        
        const btn = document.createElement('button');
        btn.className = 'selection-action-btn';
        btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Detach`;
        btn.dataset.tooltip = 'Detach walls';
        btn.setAttribute('aria-label', 'Detach selected walls from connected walls');
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            detachSelectedWalls();
        });
        
        container.appendChild(btn);
        wrapper.appendChild(container);
    }
    
    function detachSelectedWalls() {
        const selectedWalls = selectedElements.filter(s => s.type === 'wall').map(s => s.element);
        if (selectedWalls.length === 0) return;
        
        addToHistory();
        
        const selectedWallIds = new Set(selectedWalls.map(w => w.id));
        const processedCorners = new Map(); // old corner id -> new corner
        
        for (const wall of selectedWalls) {
            for (const endpoint of ['start', 'end']) {
                const corner = wall[endpoint];
                const hasUnselectedWall = corner.walls.some(w => !selectedWallIds.has(w.id));
                
                if (hasUnselectedWall && !processedCorners.has(corner.id)) {
                    // Create a duplicate corner at the same position
                    const newCorner = {
                        id: 'corner-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                        x: corner.x,
                        y: corner.y,
                        walls: []
                    };
                    corners.push(newCorner);
                    processedCorners.set(corner.id, newCorner);
                }
            }
        }
        
        // Rewire selected walls to use the new corners
        for (const wall of selectedWalls) {
            for (const endpoint of ['start', 'end']) {
                const oldCorner = wall[endpoint];
                const newCorner = processedCorners.get(oldCorner.id);
                if (newCorner) {
                    // Remove this wall from the old corner
                    oldCorner.walls = oldCorner.walls.filter(w => w.id !== wall.id);
                    // Point wall to new corner
                    wall[endpoint] = newCorner;
                    newCorner.walls.push(wall);
                }
            }
        }
        
        redrawAll();
        showScaleHandles();
    }
    
    function snapshotPositions() {
        const snap = { corners: {}, furniture: {}, labels: {}, referenceImages: {} };
        const seenCorners = new Set();
        
        for (const sel of selectedElements) {
            if (sel.type === 'wall') {
                for (const c of [sel.element.start, sel.element.end]) {
                    if (!seenCorners.has(c.id)) {
                        snap.corners[c.id] = { x: c.x, y: c.y };
                        seenCorners.add(c.id);
                    }
                }
            } else if (sel.type === 'furniture') {
                snap.furniture[sel.element.id] = { x: sel.element.x, y: sel.element.y };
            } else if (sel.type === 'label') {
                snap.labels[sel.element.id] = { x: sel.element.x, y: sel.element.y };
            } else if (sel.type === 'referenceImage') {
                const r = sel.element;
                snap.referenceImages[r.id] = { x: r.x, y: r.y, width: r.width, height: r.height };
            }
        }
        return snap;
    }
    
    function applyScale(corner, mousePos) {
        if (!scaleBBoxStart || !scaleStartPositions) return;
        
        const bbox = scaleBBoxStart;
        
        // Anchor is the opposite corner
        const anchorX = corner.includes('e') ? bbox.x : bbox.x + bbox.width;
        const anchorY = corner.includes('s') ? bbox.y : bbox.y + bbox.height;
        
        // Original far edge from anchor
        const origFarX = corner.includes('e') ? bbox.x + bbox.width : bbox.x;
        const origFarY = corner.includes('s') ? bbox.y + bbox.height : bbox.y;
        
        const origW = origFarX - anchorX;
        const origH = origFarY - anchorY;
        
        if (Math.abs(origW) < 1 || Math.abs(origH) < 1) return;
        
        // Distance from anchor to current handle position
        let newW = mousePos.x - anchorX;
        let newH = mousePos.y - anchorY;
        
        // Prevent the handle from crossing over the anchor, which would flip the geometry.
        // This keeps scaling on the side being dragged and avoids the line "jumping" to the opposite side.
        const minSize = 5;
        if (origW > 0) {
            newW = Math.max(newW, minSize);
        } else {
            newW = Math.min(newW, -minSize);
        }
        if (origH > 0) {
            newH = Math.max(newH, minSize);
        } else {
            newH = Math.min(newH, -minSize);
        }
        
        // Uniform scale based on the larger axis change
        const sx = newW / origW;
        const sy = newH / origH;
        const uniScale = Math.max(0.1, (Math.abs(sx) + Math.abs(sy)) / 2);
        // Always keep the scale factor positive so geometry stays on the same side
        const finalSx = uniScale;
        const finalSy = uniScale;
        
        const snap = scaleStartPositions;
        
        // Scale wall corners (not furniture size)
        for (const sel of selectedElements) {
            if (sel.type === 'wall') {
                for (const c of [sel.element.start, sel.element.end]) {
                    if (snap.corners[c.id]) {
                        c.x = anchorX + (snap.corners[c.id].x - anchorX) * finalSx;
                        c.y = anchorY + (snap.corners[c.id].y - anchorY) * finalSy;
                    }
                }
            } else if (sel.type === 'furniture') {
                // Move furniture position proportionally but don't change its size
                if (snap.furniture[sel.element.id]) {
                    sel.element.x = anchorX + (snap.furniture[sel.element.id].x - anchorX) * finalSx;
                    sel.element.y = anchorY + (snap.furniture[sel.element.id].y - anchorY) * finalSy;
                }
            } else if (sel.type === 'label') {
                if (snap.labels[sel.element.id]) {
                    sel.element.x = anchorX + (snap.labels[sel.element.id].x - anchorX) * finalSx;
                    sel.element.y = anchorY + (snap.labels[sel.element.id].y - anchorY) * finalSy;
                }
            } else if (sel.type === 'referenceImage') {
                const r = sel.element;
                const o = snap.referenceImages && snap.referenceImages[r.id];
                if (o) {
                    r.x = anchorX + (o.x - anchorX) * finalSx;
                    r.y = anchorY + (o.y - anchorY) * finalSy;
                    r.width = Math.max(20, o.width * finalSx);
                    r.height = Math.max(20, o.height * finalSy);
                    const imgEl = imageLayer.querySelector(`[data-ref-image-id="${r.id}"]`);
                    if (imgEl) {
                        imgEl.setAttribute('x', r.x);
                        imgEl.setAttribute('y', r.y);
                        imgEl.setAttribute('width', r.width);
                        imgEl.setAttribute('height', r.height);
                    }
                    updateAllHandlePositions(r);
                }
            }
        }
        
        redrawAll();
        showScaleHandles();
    }
    
    // Marquee selection functions
    function createMarqueeBox(start) {
        removeMarqueeBox();
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', start.x);
        rect.setAttribute('y', start.y);
        rect.setAttribute('width', 0);
        rect.setAttribute('height', 0);
        rect.classList.add('marquee-selection');
        rect.id = 'marquee-selection';
        
        const floorPlanGroup = document.getElementById('floor-plan-group');
        floorPlanGroup.appendChild(rect);
        marqueeBox = rect;
    }
    
    function updateMarqueeBox(start, end) {
        if (!marqueeBox) return;
        
        const x = Math.min(start.x, end.x);
        const y = Math.min(start.y, end.y);
        const width = Math.abs(end.x - start.x);
        const height = Math.abs(end.y - start.y);
        
        marqueeBox.setAttribute('x', x);
        marqueeBox.setAttribute('y', y);
        marqueeBox.setAttribute('width', width);
        marqueeBox.setAttribute('height', height);
    }
    
    function removeMarqueeBox() {
        document.getElementById('marquee-selection')?.remove();
        marqueeBox = null;
    }
    
    /** Axis-aligned bounds of a wall opening's hit rect (matches renderOpening hit area). */
    function getWallOpeningMarqueeBounds(wall, opening) {
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        if (wallLength < 1e-6) return null;
        const ux = (wall.end.x - wall.start.x) / wallLength;
        const uy = (wall.end.y - wall.start.y) / wallLength;
        const cx = wall.start.x + opening.position * (wall.end.x - wall.start.x);
        const cy = wall.start.y + opening.position * (wall.end.y - wall.start.y);
        const halfWidth = opening.width / 2;
        const hitPadding = Math.max(8, wallThickness);
        const lxMin = -halfWidth - hitPadding;
        const lxMax = halfWidth + hitPadding;
        const lyMin = -wallThickness / 2 - hitPadding;
        const lyMax = wallThickness / 2 + hitPadding;
        const corners = [
            { lx: lxMin, ly: lyMin },
            { lx: lxMax, ly: lyMin },
            { lx: lxMax, ly: lyMax },
            { lx: lxMin, ly: lyMax }
        ];
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        for (const c of corners) {
            const wx = cx + c.lx * ux - c.ly * uy;
            const wy = cy + c.lx * uy + c.ly * ux;
            minX = Math.min(minX, wx);
            maxX = Math.max(maxX, wx);
            minY = Math.min(minY, wy);
            maxY = Math.max(maxY, wy);
        }
        return { minX, minY, maxX, maxY };
    }
    
    /** Axis-aligned bounds of a freeform opening (matches visual extent in renderFreeformOpening). */
    function getFreeformOpeningMarqueeBounds(opening) {
        const dx = opening.end.x - opening.start.x;
        const dy = opening.end.y - opening.start.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        if (length < 1e-6) return null;
        const ux = dx / length;
        const uy = dy / length;
        const cx = (opening.start.x + opening.end.x) / 2;
        const cy = (opening.start.y + opening.end.y) / 2;
        const halfL = length / 2;
        const hitPadding = Math.max(8, wallThickness);
        let lxMin;
        let lxMax;
        let lyMin;
        let lyMax;
        if (opening.type === 'door') {
            const arcR = length * 0.9;
            lxMin = -halfL - hitPadding;
            lxMax = halfL + hitPadding;
            lyMin = -arcR - hitPadding;
            lyMax = wallThickness / 2 + hitPadding;
        } else {
            lxMin = -halfL - hitPadding;
            lxMax = halfL + hitPadding;
            lyMin = -wallThickness / 2 - hitPadding;
            lyMax = wallThickness / 2 + hitPadding;
        }
        const corners = [
            { lx: lxMin, ly: lyMin },
            { lx: lxMax, ly: lyMin },
            { lx: lxMax, ly: lyMax },
            { lx: lxMin, ly: lyMax }
        ];
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;
        for (const c of corners) {
            const wx = cx + c.lx * ux - c.ly * uy;
            const wy = cy + c.lx * uy + c.ly * ux;
            minX = Math.min(minX, wx);
            maxX = Math.max(maxX, wx);
            minY = Math.min(minY, wy);
            maxY = Math.max(maxY, wy);
        }
        return { minX, minY, maxX, maxY };
    }
    
    function marqueeBoundsOverlap(b, mx1, my1, mx2, my2) {
        return b.minX < mx2 && b.maxX > mx1 && b.minY < my2 && b.maxY > my1;
    }
    
    function finishMarqueeSelection(start, end) {
        const x1 = Math.min(start.x, end.x);
        const y1 = Math.min(start.y, end.y);
        const x2 = Math.max(start.x, end.x);
        const y2 = Math.max(start.y, end.y);
        
        // If the box is too small, treat as a click (deselect)
        if (Math.abs(x2 - x1) < 5 && Math.abs(y2 - y1) < 5) {
            return;
        }
        
        selectedElements = [];
        
        // Find walls within or intersecting the box
        for (const wall of walls) {
            // Check if wall intersects with selection box
            if (lineIntersectsRect(wall.start, wall.end, x1, y1, x2, y2)) {
                selectedElements.push({ element: wall, type: 'wall' });
            }
        }
        
        // Find furniture within the box
        for (const item of furniture) {
            const itemRight = item.x + item.width;
            const itemBottom = item.y + item.height;
            
            // Check if furniture overlaps with selection box
            if (item.x < x2 && itemRight > x1 && item.y < y2 && itemBottom > y1) {
                selectedElements.push({ element: item, type: 'furniture' });
            }
        }
        
        // Find labels within the box
        for (const label of labels) {
            if (label.x >= x1 && label.x <= x2 && label.y >= y1 && label.y <= y2) {
                selectedElements.push({ element: label, type: 'label' });
            }
        }
        
        // Wall-attached doors/windows (same payload shape as click selection)
        for (const wall of walls) {
            if (!wall.openings || wall.openings.length === 0) continue;
            for (const opening of wall.openings) {
                const b = getWallOpeningMarqueeBounds(wall, opening);
                if (b && marqueeBoundsOverlap(b, x1, y1, x2, y2)) {
                    selectedElements.push({ element: { wall, opening }, type: 'opening' });
                }
            }
        }
        
        // Freeform doors/windows
        for (const opening of freeformOpenings) {
            const b = getFreeformOpeningMarqueeBounds(opening);
            if (b && marqueeBoundsOverlap(b, x1, y1, x2, y2)) {
                selectedElements.push({ element: { opening, freeform: true }, type: 'opening' });
            }
        }
        
        // Reference images
        for (const ref of referenceImages) {
            const b = {
                minX: ref.x,
                minY: ref.y,
                maxX: ref.x + ref.width,
                maxY: ref.y + ref.height
            };
            if (marqueeBoundsOverlap(b, x1, y1, x2, y2)) {
                selectedElements.push({ element: ref, type: 'referenceImage' });
            }
        }
        
        // Highlight all selected elements
        for (const sel of selectedElements) {
            if (sel.type === 'furniture') {
                const el = furnitureLayer.querySelector(`[data-furniture-id="${sel.element.id}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'label') {
                const el = labelsLayer.querySelector(`[data-label-id="${sel.element.id}"]`);
                if (el) el.style.fill = 'var(--primary-color)';
            } else if (sel.type === 'wall') {
                const el = wallsLayer.querySelector(`[data-wall-id="${sel.element.id}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'opening') {
                const oid = sel.element.opening.id;
                const el = wallsLayer.querySelector(`[data-opening-id="${oid}"]`);
                if (el) el.classList.add('selected');
            } else if (sel.type === 'referenceImage') {
                const el = imageLayer.querySelector(`[data-ref-image-id="${sel.element.id}"]`);
                if (el) el.classList.add('selected');
            }
        }
        
        // Update selectedElement for single selection compatibility
        removeRotationHandle();
        if (selectedElements.length === 1) {
            selectedElement = selectedElements[0];
            if (selectedElement.type === 'furniture') {
                addRotationHandle(selectedElement.element);
                showProperties(selectedElement.element);
            } else if (selectedElement.type === 'opening') {
                showPropertiesForOpening(selectedElement.element);
            } else if (selectedElement.type === 'referenceImage') {
                addResizeHandles(selectedElement.element);
                showReferenceImageControls(selectedElement.element);
            }
        } else if (selectedElements.length > 1) {
            selectedElement = null;
            hideProperties();
        } else {
            selectedElement = null;
            hideProperties();
        }
        
        // Show scale handles if any scalable elements are selected
        if (selectedElements.length > 0) {
            showScaleHandles();
        }
    }
    
    function rotatePointAround(px, py, cx, cy, angleDeg) {
        const rad = (angleDeg * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const dx = px - cx;
        const dy = py - cy;
        return {
            x: cx + dx * cos - dy * sin,
            y: cy + dx * sin + dy * cos
        };
    }
    
    function rotateSelectionBy(degrees, fixedCenter, skipHistory) {
        const bbox = getSelectionBBox();
        if (!bbox || selectedElements.length === 0) return;
        const cx = fixedCenter ? fixedCenter.x : bbox.x + bbox.width / 2;
        const cy = fixedCenter ? fixedCenter.y : bbox.y + bbox.height / 2;
        
        if (!skipHistory) addToHistory();
        
        const movedCornerIds = new Set();
        for (const sel of selectedElements) {
            if (sel.type === 'wall') {
                const wall = sel.element;
                for (const corner of [wall.start, wall.end]) {
                    if (movedCornerIds.has(corner.id)) continue;
                    movedCornerIds.add(corner.id);
                    const p = rotatePointAround(corner.x, corner.y, cx, cy, degrees);
                    corner.x = p.x;
                    corner.y = p.y;
                }
            } else if (sel.type === 'label') {
                const label = sel.element;
                const p = rotatePointAround(label.x, label.y, cx, cy, degrees);
                label.x = p.x;
                label.y = p.y;
            } else if (sel.type === 'furniture') {
                const item = sel.element;
                const centerX = item.x + item.width / 2;
                const centerY = item.y + item.height / 2;
                const p = rotatePointAround(centerX, centerY, cx, cy, degrees);
                item.x = p.x - item.width / 2;
                item.y = p.y - item.height / 2;
                item.rotation = (item.rotation + degrees) % 360;
                if (item.rotation < 0) item.rotation += 360;
            }
            // imported: rotation would require consistent position storage; skip for now
        }
        redrawAll();
        showScaleHandles();
    }
    
    function moveSelectedElements(dx, dy) {
        // Track corners already moved so shared corners aren't moved twice
        const movedCornerIds = new Set();
        
        for (const sel of selectedElements) {
            if (sel.type === 'wall') {
                const wall = sel.element;
                // Move start corner if not already moved
                if (!movedCornerIds.has(wall.start.id)) {
                    wall.start.x += dx;
                    wall.start.y += dy;
                    movedCornerIds.add(wall.start.id);
                }
                // Move end corner if not already moved
                if (!movedCornerIds.has(wall.end.id)) {
                    wall.end.x += dx;
                    wall.end.y += dy;
                    movedCornerIds.add(wall.end.id);
                }
            } else if (sel.type === 'furniture') {
                sel.element.x += dx;
                sel.element.y += dy;
                
                const el = furnitureLayer.querySelector(`[data-furniture-id="${sel.element.id}"]`);
                if (el) {
                    el.setAttribute('transform', `translate(${sel.element.x}, ${sel.element.y}) rotate(${sel.element.rotation}, ${sel.element.width / 2}, ${sel.element.height / 2})`);
                }
            } else if (sel.type === 'label') {
                sel.element.x += dx;
                sel.element.y += dy;
                
                const el = labelsLayer.querySelector(`[data-label-id="${sel.element.id}"]`);
                if (el) {
                    el.setAttribute('x', sel.element.x);
                    el.setAttribute('y', sel.element.y);
                }
            } else if (sel.type === 'opening') {
                const el = sel.element;
                if (el.freeform) {
                    slideFreeformOpeningByDelta(el.opening, dx, dy);
                } else {
                    const wallAlsoSelected = selectedElements.some(
                        s => s.type === 'wall' && s.element === el.wall
                    );
                    if (!wallAlsoSelected) {
                        slideWallOpeningByDelta(el.wall, el.opening, dx, dy);
                    }
                }
            } else if (sel.type === 'referenceImage') {
                const r = sel.element;
                r.x += dx;
                r.y += dy;
                const imgEl = imageLayer.querySelector(`[data-ref-image-id="${r.id}"]`);
                if (imgEl) {
                    imgEl.setAttribute('x', r.x);
                    imgEl.setAttribute('y', r.y);
                }
                updateAllHandlePositions(r);
            }
        }
        
        // Redraw walls and corners if any were moved
        if (movedCornerIds.size > 0) {
            redrawAll();
        } else if (selectedElements.some(s => s.type === 'opening')) {
            redrawWalls();
        }
    }
    
    function isElementSelected(element, type) {
        if (type === 'opening' && element && element.opening) {
            return selectedElements.some(sel => sel.type === 'opening' && sel.element.opening.id === element.opening.id);
        }
        if (type === 'referenceImage' && element && element.id) {
            return selectedElements.some(sel => sel.type === 'referenceImage' && sel.element.id === element.id);
        }
        return selectedElements.some(sel => sel.element === element && sel.type === type);
    }
    
    // Check if a line segment intersects with a rectangle
    function lineIntersectsRect(p1, p2, x1, y1, x2, y2) {
        // Check if either endpoint is inside the rectangle
        if ((p1.x >= x1 && p1.x <= x2 && p1.y >= y1 && p1.y <= y2) ||
            (p2.x >= x1 && p2.x <= x2 && p2.y >= y1 && p2.y <= y2)) {
            return true;
        }
        
        // Check if line intersects any edge of the rectangle
        return lineIntersectsLine(p1, p2, {x: x1, y: y1}, {x: x2, y: y1}) || // top
               lineIntersectsLine(p1, p2, {x: x2, y: y1}, {x: x2, y: y2}) || // right
               lineIntersectsLine(p1, p2, {x: x1, y: y2}, {x: x2, y: y2}) || // bottom
               lineIntersectsLine(p1, p2, {x: x1, y: y1}, {x: x1, y: y2});   // left
    }
    
    // Check if two line segments intersect
    function lineIntersectsLine(p1, p2, p3, p4) {
        const d1 = direction(p3, p4, p1);
        const d2 = direction(p3, p4, p2);
        const d3 = direction(p1, p2, p3);
        const d4 = direction(p1, p2, p4);
        
        if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
            ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
            return true;
        }
        
        if (d1 === 0 && onSegment(p3, p4, p1)) return true;
        if (d2 === 0 && onSegment(p3, p4, p2)) return true;
        if (d3 === 0 && onSegment(p1, p2, p3)) return true;
        if (d4 === 0 && onSegment(p1, p2, p4)) return true;
        
        return false;
    }
    
    function direction(p1, p2, p3) {
        return (p3.x - p1.x) * (p2.y - p1.y) - (p2.x - p1.x) * (p3.y - p1.y);
    }
    
    function onSegment(p1, p2, p) {
        return p.x >= Math.min(p1.x, p2.x) && p.x <= Math.max(p1.x, p2.x) &&
               p.y >= Math.min(p1.y, p2.y) && p.y <= Math.max(p1.y, p2.y);
    }
    
    // Copy/Paste functions
    function copySelected() {
        if (selectedElements.length === 0) return;
        
        // Deep copy the selected elements to clipboard
        clipboard = selectedElements.map(sel => {
            if (sel.type === 'furniture') {
                return {
                    type: 'furniture',
                    data: {
                        typeId: sel.element.typeId,
                        name: sel.element.name,
                        x: sel.element.x,
                        y: sel.element.y,
                        width: sel.element.width,
                        height: sel.element.height,
                        rotation: sel.element.rotation,
                        color: sel.element.color
                    }
                };
            } else if (sel.type === 'label') {
                return {
                    type: 'label',
                    data: {
                        x: sel.element.x,
                        y: sel.element.y,
                        text: sel.element.text
                    }
                };
            }
            return null;
        }).filter(item => item !== null);
    }
    
    function pasteClipboard() {
        if (clipboard.length === 0) return;
        
        addToHistory();
        deselectAll();
        
        const pasteOffset = 20; // Offset so pasted items don't overlap originals
        const newElements = [];
        
        for (const item of clipboard) {
            if (item.type === 'furniture') {
                const newItem = {
                    id: 'furniture-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                    typeId: item.data.typeId,
                    name: item.data.name,
                    x: item.data.x + pasteOffset,
                    y: item.data.y + pasteOffset,
                    width: item.data.width,
                    height: item.data.height,
                    rotation: item.data.rotation,
                    color: item.data.color
                };
                furniture.push(newItem);
                renderFurniture(newItem);
                newElements.push({ element: newItem, type: 'furniture' });
                
                // Highlight as selected
                const el = furnitureLayer.querySelector(`[data-furniture-id="${newItem.id}"]`);
                if (el) el.classList.add('selected');
            } else if (item.type === 'label') {
                const newLabel = {
                    id: 'label-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                    x: item.data.x + pasteOffset,
                    y: item.data.y + pasteOffset,
                    text: item.data.text
                };
                labels.push(newLabel);
                renderLabel(newLabel);
                newElements.push({ element: newLabel, type: 'label' });
                
                // Highlight as selected
                const el = labelsLayer.querySelector(`[data-label-id="${newLabel.id}"]`);
                if (el) el.style.fill = 'var(--primary-color)';
            }
        }
        
        // Select the pasted elements
        selectedElements = newElements;
        if (newElements.length === 1) {
            selectedElement = newElements[0];
            if (selectedElement.type === 'furniture') {
                addRotationHandle(selectedElement.element);
                showProperties(selectedElement.element);
            }
        }
        
        // Update clipboard positions for subsequent pastes
        clipboard = clipboard.map(item => ({
            ...item,
            data: {
                ...item.data,
                x: item.data.x + pasteOffset,
                y: item.data.y + pasteOffset
            }
        }));
    }
    
    function showProperties(item) {
        const panel = document.getElementById('properties-panel');
        if (!panel) return;
        
        panel.classList.remove('hidden');
        const doorSwingRow = document.getElementById('property-row-door-swing');
        if (doorSwingRow) doorSwingRow.style.display = 'none';
        const nameEl = document.getElementById('property-item-name');
        if (nameEl) nameEl.textContent = item.name || '';
        ['property-row-height', 'property-row-rotation', 'property-row-rotate-buttons'].forEach(id => {
            const row = document.getElementById(id);
            if (row) row.style.display = '';
        });
        document.getElementById('prop-width').value = (item.width / scale).toFixed(1);
        document.getElementById('prop-height').value = (item.height / scale).toFixed(1);
        document.getElementById('prop-rotation').value = item.rotation;
    }
    
    function showPropertiesForOpening(element) {
        const panel = document.getElementById('properties-panel');
        if (!panel) return;
        
        panel.classList.remove('hidden');
        const nameEl = document.getElementById('property-item-name');
        if (nameEl) {
            const type = element.opening?.type;
            nameEl.textContent = type ? type.charAt(0).toUpperCase() + type.slice(1) : '';
        }
        document.getElementById('property-row-width').style.display = '';
        document.getElementById('property-row-height').style.display = 'none';
        document.getElementById('property-row-rotation').style.display = 'none';
        const rotateRow = document.getElementById('property-row-rotate-buttons');
        if (rotateRow) rotateRow.style.display = 'none';
        const doorSwingRow = document.getElementById('property-row-door-swing');
        if (doorSwingRow) {
            doorSwingRow.style.display = element.opening?.type === 'door' ? '' : 'none';
        }
        let widthPx = element.opening.width;
        if (widthPx == null && element.opening.start && element.opening.end) {
            const dx = element.opening.end.x - element.opening.start.x;
            const dy = element.opening.end.y - element.opening.start.y;
            widthPx = Math.sqrt(dx * dx + dy * dy);
        }
        document.getElementById('prop-width').value = ((widthPx || 0) / scale).toFixed(1);
    }
    
    function reverseSelectedDoorSwing() {
        if (!selectedElement || selectedElement.type !== 'opening') return;
        const opening = selectedElement.element.opening;
        if (!opening || opening.type !== 'door') return;
        
        addToHistory();
        opening.swingRight = !opening.swingRight;
        redrawWalls();
    }
    
    /** Swing arc to the opposite side of the wall (which way the door opens into the plan). */
    function invertSelectedDoorDirection() {
        if (!selectedElement || selectedElement.type !== 'opening') return;
        const opening = selectedElement.element.opening;
        if (!opening || opening.type !== 'door') return;
        
        addToHistory();
        opening.swingInvert = !opening.swingInvert;
        redrawWalls();
    }
    
    function hideProperties() {
        document.getElementById('properties-panel')?.classList.add('hidden');
    }
    
    function updateSelectedProperties() {
        if (!selectedElement) return;
        
        if (selectedElement.type === 'furniture') {
            const item = selectedElement.element;
            item.width = parseFloat(document.getElementById('prop-width').value) * scale;
            item.height = parseFloat(document.getElementById('prop-height').value) * scale;
            item.rotation = parseInt(document.getElementById('prop-rotation').value);
            redrawFurniture();
        } else if (selectedElement.type === 'opening') {
            const pack = selectedElement.element;
            const { wall, opening } = pack;
            const minWidth = 1 * scale;
            let newWidth = parseFloat(document.getElementById('prop-width').value) * scale;
            if (wall) {
                const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
                newWidth = Math.max(minWidth, Math.min(wallLength, newWidth));
                opening.width = newWidth;
            } else if (pack.freeform && opening.start && opening.end) {
                newWidth = Math.max(minWidth, newWidth);
                const cx = (opening.start.x + opening.end.x) / 2;
                const cy = (opening.start.y + opening.end.y) / 2;
                const dx = opening.end.x - opening.start.x;
                const dy = opening.end.y - opening.start.y;
                const curLen = Math.sqrt(dx * dx + dy * dy) || 1;
                const ux = dx / curLen;
                const uy = dy / curLen;
                const half = newWidth / 2;
                opening.start = { x: cx - ux * half, y: cy - uy * half };
                opening.end = { x: cx + ux * half, y: cy + uy * half };
            }
            document.getElementById('prop-width').value = (newWidth / scale).toFixed(1);
            redrawWalls();
        }
    }
    
    function deleteSelected() {
        if (selectedElements.length === 0 && !selectedElement) return;
        
        addToHistory();
        
        const toDelete = selectedElements.length > 0 ? selectedElements : (selectedElement ? [selectedElement] : []);
        
        // Collect corners that should be removed (only if all their walls are being deleted)
        const wallsToDelete = new Set();
        const cornersToCheck = new Set();
        
        for (const sel of toDelete) {
            if (sel.type === 'wall') {
                wallsToDelete.add(sel.element.id);
                cornersToCheck.add(sel.element.start.id);
                cornersToCheck.add(sel.element.end.id);
            } else if (sel.type === 'furniture') {
                furniture = furniture.filter(f => f.id !== sel.element.id);
            } else if (sel.type === 'label') {
                labels = labels.filter(l => l.id !== sel.element.id);
            } else if (sel.type === 'opening') {
                const { wall, opening } = sel.element;
                if (wall) {
                    wall.openings = wall.openings.filter(o => o.id !== opening.id);
                } else {
                    freeformOpenings = freeformOpenings.filter(o => o.id !== opening.id);
                }
            } else if (sel.type === 'imported') {
                const imported = sel.element;
                if (imported.element && imported.element.parentNode) {
                    imported.element.parentNode.removeChild(imported.element);
                }
                importedElements = importedElements.filter(i => i.id !== imported.id);
            } else if (sel.type === 'referenceImage') {
                removeReferenceImage(sel.element.id);
                document.querySelector('.ref-image-controls')?.remove();
            }
        }
        
        // Remove walls
        if (wallsToDelete.size > 0) {
            walls = walls.filter(w => !wallsToDelete.has(w.id));
            
            // Remove wall references from corners
            for (const corner of corners) {
                corner.walls = corner.walls.filter(w => !wallsToDelete.has(w.id));
            }
            
            // Remove orphaned corners (no remaining walls)
            for (const cornerId of cornersToCheck) {
                const corner = corners.find(c => c.id === cornerId);
                if (corner && corner.walls.length === 0) {
                    corners = corners.filter(c => c.id !== cornerId);
                }
            }
        }
        
        deselectAll();
        redrawAll();
    }
    
    // Layout file format (for save-as-file and drop-to-load)
    const LAYOUT_FILE_FORMAT = 'decorai-layout';
    const LAYOUT_FILE_VERSION = 1;
    
    function downloadLayoutFile() {
        const state = saveState();
        const payload = { format: LAYOUT_FILE_FORMAT, version: LAYOUT_FILE_VERSION, state };
        const json = JSON.stringify(payload, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const name = `decorai-layout-${new Date().toISOString().slice(0, 10)}.decorai-layout.json`;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
        URL.revokeObjectURL(url);
        showLayoutFileMessage('Layout saved as file.');
    }
    
    function showLayoutFileMessage(msg) {
        const canvasWrapper = document.getElementById('layout-canvas-wrapper');
        if (!canvasWrapper) return;
        const el = document.getElementById('layout-file-message');
        if (el) el.remove();
        const div = document.createElement('div');
        div.id = 'layout-file-message';
        div.className = 'export-message';
        div.innerHTML = `<div class="export-message-content"><i data-feather="check"></i><span>${msg}</span></div>`;
        canvasWrapper.appendChild(div);
        if (typeof feather !== 'undefined') feather.replace();
        setTimeout(() => {
            div.classList.add('fade-out');
            setTimeout(() => div.remove(), 300);
        }, 2500);
    }
    
    function isLayoutFile(file) {
        const n = (file.name || '').toLowerCase();
        return n.endsWith('.decorai-layout.json') || (n.endsWith('.json') && (file.type === 'application/json' || file.type === ''));
    }
    
    function loadLayoutFromFile(file, onDone) {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                if (data && data.format === LAYOUT_FILE_FORMAT && data.state && Array.isArray(data.state.corners) && Array.isArray(data.state.walls)) {
                    restoreState(data.state);
                    showLayoutFileMessage('Layout loaded from file.');
                } else {
                    showLayoutFileMessage('Not a valid DecorAI layout file.');
                }
            } catch (err) {
                showLayoutFileMessage('Could not read layout file.');
            }
            if (onDone) onDone();
        };
        reader.onerror = () => {
            showLayoutFileMessage('Could not read file.');
            if (onDone) onDone();
        };
        reader.readAsText(file);
    }
    
    // History (Undo/Redo) - State-based snapshots
    function saveState() {
        // Create a deep copy of the current state
        return {
            corners: JSON.parse(JSON.stringify(corners.map(c => ({
                id: c.id,
                x: c.x,
                y: c.y,
                wallIds: c.walls.map(w => w.id)
            })))),
            walls: JSON.parse(JSON.stringify(walls.map(w => ({
                id: w.id,
                startId: w.start.id,
                endId: w.end.id,
                openings: w.openings
            })))),
            furniture: JSON.parse(JSON.stringify(furniture)),
            labels: JSON.parse(JSON.stringify(labels)),
            freeformOpenings: JSON.parse(JSON.stringify(freeformOpenings)),
            referenceImages: JSON.parse(JSON.stringify(referenceImages)),
            // For imported elements, we store their outerHTML to recreate them
            importedElementsHTML: importedElements.map(el => ({
                id: el.id,
                type: el.type,
                html: el.element.outerHTML,
                parentId: el.element.parentNode?.id || 'walls-layer'
            }))
        };
    }
    
    function restoreState(state) {
        if (!state || !state.corners || !state.walls) return;
        corners = [];
        walls = [];
        freeformOpenings = state.freeformOpenings ? state.freeformOpenings.map(o => ({ ...o })) : [];
        furniture = Array.isArray(state.furniture) ? state.furniture.map(f => ({ ...f })) : [];
        labels = Array.isArray(state.labels) ? state.labels.map(l => ({ ...l })) : [];
        referenceImages = Array.isArray(state.referenceImages) ? state.referenceImages.map(r => ({ ...r })) : [];
        
        // Restore corners first
        (state.corners || []).forEach(c => {
            corners.push({
                id: c.id,
                x: c.x,
                y: c.y,
                walls: [] // Will be linked after walls are created
            });
        });
        
        // Restore walls and link to corners
        (state.walls || []).forEach(w => {
            const startCorner = corners.find(c => c.id === w.startId);
            const endCorner = corners.find(c => c.id === w.endId);
            if (startCorner && endCorner) {
                const wall = {
                    id: w.id,
                    start: startCorner,
                    end: endCorner,
                    openings: w.openings || []
                };
                walls.push(wall);
                startCorner.walls.push(wall);
                endCorner.walls.push(wall);
            }
        });
        
        // Restore imported elements
        importedElements = [];
        wallsLayer.querySelectorAll('.imported-svg-element, .imported-svg-group').forEach(el => el.remove());
        const importedHTML = state.importedElementsHTML || [];
        importedHTML.forEach(item => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${item.html}</svg>`, 'image/svg+xml');
            const element = doc.querySelector('svg').firstChild;
            if (element) {
                wallsLayer.appendChild(element);
                importedElements.push({
                    id: item.id,
                    type: item.type,
                    element: element
                });
            }
        });
        
        // Redraw everything
        redrawAll();
    }
    
    function addToHistory() {
        hasUnsavedChanges = true;
        // Save current state before making changes
        const state = saveState();
        undoStack.push(state);
        redoStack = []; // Clear redo stack on new action
        
        // Limit history size to prevent memory issues
        if (undoStack.length > 50) {
            undoStack.shift();
        }
    }
    
    function undo() {
        if (undoStack.length === 0) return;
        
        // Save current state to redo stack
        const currentState = saveState();
        redoStack.push(currentState);
        
        // Restore previous state
        const previousState = undoStack.pop();
        restoreState(previousState);
    }
    
    function redo() {
        if (redoStack.length === 0) return;
        
        // Save current state to undo stack
        const currentState = saveState();
        undoStack.push(currentState);
        
        // Restore next state
        const nextState = redoStack.pop();
        restoreState(nextState);
    }
    
    async function clearAll() {
        if (window.showConfirmDialog) {
            const proceed = await window.showConfirmDialog(
                'Clear the entire floor plan?',
                'Clear floor plan',
                'Clear',
                'Cancel'
            );
            if (!proceed) return;
        }
        
        corners = [];
        walls = [];
        furniture = [];
        labels = [];
        freeformOpenings = [];
        referenceImages = [];
        importedElements = [];
        undoStack = [];
        redoStack = [];
        
        // Remove reference image controls
        document.querySelector('.ref-image-controls')?.remove();
        
        const nameEl = document.getElementById('layout-name-display');
        if (nameEl) nameEl.textContent = '';
        
        redrawAll();
    }
    
    // Redraw functions
    function redrawAll() {
        imageLayer.innerHTML = '';
        wallsLayer.innerHTML = '';
        roomsLayer.innerHTML = '';
        furnitureLayer.innerHTML = '';
        labelsLayer.innerHTML = '';
        dimensionsLayer.innerHTML = '';
        cornersLayer.innerHTML = '';
        
        // Redraw in order
        referenceImages.forEach(img => renderReferenceImage(img));
        walls.forEach(wall => renderWall(wall));
        freeformOpenings.forEach(opening => renderFreeformOpening(opening));
        furniture.forEach(item => renderFurniture(item));
        labels.forEach(label => renderLabel(label));
        corners.forEach(corner => renderCorner(corner));
        redrawDimensions();
        updateFengShuiButtonState();
        reapplySelectionHighlights();
    }
    
    function reapplySelectionHighlights() {
        if (selectedElements.length === 0) return;
        for (const sel of selectedElements) {
            highlightElement(sel.element, sel.type, true);
        }
        if (selectedElements.length === 1) {
            const s = selectedElements[0];
            if (s.type === 'furniture') {
                addRotationHandle(s.element);
                showProperties(s.element);
            } else if (s.type === 'opening') {
                showPropertiesForOpening(s.element);
            } else if (s.type === 'referenceImage') {
                showReferenceImageControls(s.element);
            }
        }
        showScaleHandles();
    }

    function updateFengShuiButtonState() {
        const btn = document.getElementById('feng-shui-btn');
        if (!btn) return;
        const multiRoomTooltip = 'Feng shui analysis only supports single-room layouts. Your plan has multiple enclosed rooms.';
        const defaultHover = 'Feng Shui';
        const defaultAria = 'Analyze layout with Feng Shui (energy and flow) — uses your drawn walls and furniture';
        const roomCount = countEnclosedRooms();
        if (roomCount > 1) {
            btn.disabled = true;
            btn.removeAttribute('data-tooltip');
            btn.setAttribute('aria-label', defaultAria);
            wrapFengShuiButtonForTooltip(multiRoomTooltip);
        } else {
            unwrapFengShuiButton();
            btn.disabled = false;
            btn.dataset.tooltip = defaultHover;
            btn.setAttribute('aria-label', defaultAria);
        }
    }

    function wrapFengShuiButtonForTooltip(tooltipText) {
        const btn = document.getElementById('feng-shui-btn');
        if (!btn || btn.closest('.feng-shui-btn-tooltip-wrap')) return;
        btn.removeAttribute('data-tooltip');
        const wrap = document.createElement('span');
        wrap.className = 'feng-shui-btn-tooltip-wrap';
        wrap.dataset.tooltip = tooltipText;
        wrap.setAttribute('aria-label', tooltipText);
        btn.parentNode.insertBefore(wrap, btn);
        wrap.appendChild(btn);
    }

    function unwrapFengShuiButton() {
        const wrap = document.querySelector('.feng-shui-btn-tooltip-wrap');
        if (!wrap || !wrap.parentNode) return;
        const btn = document.getElementById('feng-shui-btn');
        if (btn) wrap.parentNode.insertBefore(btn, wrap);
        wrap.remove();
    }

    function redrawFurniture() {
        furnitureLayer.innerHTML = '';
        furniture.forEach(item => renderFurniture(item));
    }
    
    function getZoomLimits() {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return { min: 0.05, max: 20 };
        const dim = Math.min(wrapper.clientWidth, wrapper.clientHeight);
        return {
            min: dim / (200 * scale), // 200 feet visible
            max: dim / (1 * scale)    // 1 foot visible
        };
    }
    
    // Zoom
    function setZoom(newZoom) {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return;
        
        const limits = getZoomLimits();
        const clampedZoom = Math.max(limits.min, Math.min(limits.max, newZoom));
        
        // Zoom toward center of viewport
        const centerX = wrapper.clientWidth / 2;
        const centerY = wrapper.clientHeight / 2;
        
        // Calculate the point at center in canvas coordinates
        const canvasX = (centerX - panOffset.x) / zoom;
        const canvasY = (centerY - panOffset.y) / zoom;
        
        // Update zoom
        zoom = clampedZoom;
        
        // Adjust pan so center point stays in place
        panOffset.x = centerX - canvasX * zoom;
        panOffset.y = centerY - canvasY * zoom;
        
        document.getElementById('zoom-level') && (document.getElementById('zoom-level').textContent = Math.round(zoom * 100) + '%');
        applyTransform();
        updateRulers();
    }
    
    function applyTransform() {
        const group = document.getElementById('floor-plan-group');
        if (group) {
            group.setAttribute('transform', `translate(${panOffset.x}, ${panOffset.y}) scale(${zoom})`);
        }
        // Keep grid sized to fill viewport regardless of pan/zoom
        const gridBg = document.getElementById('grid-background');
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (gridBg && wrapper) {
            const pad = 2000;
            const x = -panOffset.x / zoom - pad;
            const y = -panOffset.y / zoom - pad;
            const w = wrapper.clientWidth / zoom + pad * 2;
            const h = wrapper.clientHeight / zoom + pad * 2;
            gridBg.setAttribute('x', x);
            gridBg.setAttribute('y', y);
            gridBg.setAttribute('width', w);
            gridBg.setAttribute('height', h);
        }
        updateRulers();
        redrawDimensions();
    }
    
    function resetPan() {
        panOffset = { x: 0, y: 0 };
        applyTransform();
    }
    
    function handleWheel(e) {
        e.preventDefault();
        
        // Cmd/Ctrl + scroll = zoom (like Figma)
        if (e.metaKey || e.ctrlKey) {
            // Get mouse position relative to canvas for zoom centering
            const rect = svg.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            // Calculate zoom delta
            const delta = -e.deltaY * 0.002;
            const zoomFactor = 1 + delta;
            const limits = getZoomLimits();
            const newZoom = Math.max(limits.min, Math.min(limits.max, zoom * zoomFactor));
            
            // Zoom toward mouse position
            if (newZoom !== zoom) {
                // Calculate the point under the mouse in canvas coordinates
                const canvasX = (mouseX - panOffset.x) / zoom;
                const canvasY = (mouseY - panOffset.y) / zoom;
                
                // Update zoom
                const oldZoom = zoom;
                zoom = newZoom;
                
                // Adjust pan so the point under mouse stays in place
                panOffset.x = mouseX - canvasX * zoom;
                panOffset.y = mouseY - canvasY * zoom;
                
                document.getElementById('zoom-level') && (document.getElementById('zoom-level').textContent = Math.round(zoom * 100) + '%');
                applyTransform();
            }
        } else {
            // Regular scroll = pan (like Figma)
            // Scroll direction: content stays fixed, viewport moves
            // When you scroll down (deltaY > 0), you want to see content below,
            // so we subtract from panOffset (move the canvas up)
            panOffset.x -= e.deltaX;
            panOffset.y -= e.deltaY;
            applyTransform();
        }
    }
    
    function fitToScreen() {
        setInitialZoom();
    }
    
    // Export
    function toggleExportMenu() {
        const menu = document.getElementById('export-menu');
        if (menu) {
            menu.classList.toggle('show');
        }
    }
    
    function exportAs(format) {
        document.getElementById('export-menu')?.classList.remove('show');
        
        // Check if there are selected elements
        if (selectedElements.length === 0) {
            showExportMessage('Please select items to export');
            return;
        }
        
        if (format === 'svg') {
            exportSVG();
        } else if (format === 'png') {
            exportPNG();
        }
    }
    
    function showExportMessage(message) {
        // Remove existing message if any
        document.getElementById('export-message')?.remove();
        
        const messageEl = document.createElement('div');
        messageEl.id = 'export-message';
        messageEl.className = 'export-message';
        messageEl.innerHTML = `
            <div class="export-message-content">
                <i data-feather="info"></i>
                <span>${message}</span>
            </div>
        `;
        
        const canvasWrapper = document.getElementById('layout-canvas-wrapper');
        canvasWrapper.appendChild(messageEl);
        
        // Initialize feather icon
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
        
        // Auto-remove after 3 seconds
        setTimeout(() => {
            messageEl.classList.add('fade-out');
            setTimeout(() => messageEl.remove(), 300);
        }, 3000);
    }
    
    function getSelectedBounds() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        
        for (const sel of selectedElements) {
            if (sel.type === 'furniture') {
                const item = sel.element;
                minX = Math.min(minX, item.x);
                minY = Math.min(minY, item.y);
                maxX = Math.max(maxX, item.x + item.width);
                maxY = Math.max(maxY, item.y + item.height);
            } else if (sel.type === 'label') {
                const label = sel.element;
                // Labels are points, give them some padding
                minX = Math.min(minX, label.x - 50);
                minY = Math.min(minY, label.y - 20);
                maxX = Math.max(maxX, label.x + 50);
                maxY = Math.max(maxY, label.y + 20);
            } else if (sel.type === 'wall') {
                const wall = sel.element;
                minX = Math.min(minX, wall.start.x, wall.end.x);
                minY = Math.min(minY, wall.start.y, wall.end.y);
                maxX = Math.max(maxX, wall.start.x, wall.end.x);
                maxY = Math.max(maxY, wall.start.y, wall.end.y);
            }
        }
        
        // Add padding
        const padding = 40;
        return {
            x: minX - padding,
            y: minY - padding,
            width: maxX - minX + padding * 2,
            height: maxY - minY + padding * 2
        };
    }

    /** Bounds of all floor plan content (reference images, walls, furniture, labels) for preview/export. */
    function getAllContentBounds() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const ref of referenceImages) {
            minX = Math.min(minX, ref.x);
            minY = Math.min(minY, ref.y);
            maxX = Math.max(maxX, ref.x + (ref.width || 0));
            maxY = Math.max(maxY, ref.y + (ref.height || 0));
        }
        for (const wall of walls) {
            minX = Math.min(minX, wall.start.x, wall.end.x);
            minY = Math.min(minY, wall.start.y, wall.end.y);
            maxX = Math.max(maxX, wall.start.x, wall.end.x);
            maxY = Math.max(maxY, wall.start.y, wall.end.y);
        }
        for (const item of furniture) {
            minX = Math.min(minX, item.x);
            minY = Math.min(minY, item.y);
            maxX = Math.max(maxX, item.x + item.width);
            maxY = Math.max(maxY, item.y + item.height);
        }
        for (const label of labels) {
            minX = Math.min(minX, label.x - 30);
            minY = Math.min(minY, label.y - 15);
            maxX = Math.max(maxX, label.x + 30);
            maxY = Math.max(maxY, label.y + 15);
        }
        const padding = 40;
        if (minX === Infinity) {
            return { x: 0, y: 0, width: 400, height: 300 };
        }
        return {
            x: minX - padding,
            y: minY - padding,
            width: Math.max(100, maxX - minX + padding * 2),
            height: Math.max(100, maxY - minY + padding * 2)
        };
    }

    /** Build a minimal SVG containing all floor plan content for preview thumbnail (matches what's visible in the editor). */
    function buildPreviewSVG() {
        const bounds = getAllContentBounds();
        const exportSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        exportSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        exportSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        exportSvg.setAttribute('width', bounds.width);
        exportSvg.setAttribute('height', bounds.height);
        exportSvg.setAttribute('viewBox', `${bounds.x} ${bounds.y} ${bounds.width} ${bounds.height}`);
        const contentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        contentGroup.setAttribute('transform', `translate(${-bounds.x}, ${-bounds.y})`);
        if (imageLayer && imageLayer.children.length > 0) {
            const imageClone = imageLayer.cloneNode(true);
            contentGroup.appendChild(imageClone);
        }
        if (wallsLayer) {
            const wallsClone = wallsLayer.cloneNode(true);
            wallsClone.querySelectorAll('.selection-handle, .rotation-handle, .opening-preview').forEach(el => el.remove());
            wallsClone.querySelectorAll('[marker-end], [marker-start], [marker-mid]').forEach(el => {
                el.removeAttribute('marker-end');
                el.removeAttribute('marker-start');
                el.removeAttribute('marker-mid');
            });
            contentGroup.appendChild(wallsClone);
        }
        if (furnitureLayer) {
            const furnitureClone = furnitureLayer.cloneNode(true);
            furnitureClone.querySelectorAll('.selection-handle, .rotation-handle').forEach(el => el.remove());
            contentGroup.appendChild(furnitureClone);
        }
        if (labelsLayer) {
            contentGroup.appendChild(labelsLayer.cloneNode(true));
        }
        exportSvg.appendChild(contentGroup);
        applyInlineStylesToSVG(exportSvg);
        return { svg: exportSvg, bounds };
    }

    /** Returns a small gray placeholder image as data URL (for failed preview or empty layout). */
    function getPlaceholderPreviewDataURL(maxSize = 120) {
        const canvas = document.createElement('canvas');
        canvas.width = maxSize;
        canvas.height = Math.round(maxSize * 0.75);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#9ca3af';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Preview', maxSize / 2, canvas.height / 2);
        return canvas.toDataURL('image/jpeg', 0.8);
    }
    
    function prepareExportSVG() {
        const includeDimensions = document.getElementById('export-include-dimensions')?.checked || false;
        const bounds = getSelectedBounds();
        
        // Create a new SVG with only selected elements
        const exportSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        exportSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        
        // Create a group for the content, translated to center the selection
        const contentGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        contentGroup.setAttribute('transform', `translate(${-bounds.x}, ${-bounds.y})`);
        
        // Clone and add only selected elements
        for (const sel of selectedElements) {
            if (sel.type === 'wall') {
                // Clone wall line
                const originalEl = wallsLayer.querySelector(`[data-wall-id="${sel.element.id}"]`);
                if (originalEl) {
                    const clone = originalEl.cloneNode(true);
                    clone.classList.remove('selected');
                    // Set inline stroke color for export
                    clone.setAttribute('stroke', '#333');
                    contentGroup.appendChild(clone);
                }
                
                // Clone any openings (doors/windows) on this wall
                const wall = sel.element;
                for (const opening of wall.openings) {
                    // Find and clone door/window elements
                    const doorEls = wallsLayer.querySelectorAll('.door-element, .window-element');
                    doorEls.forEach(el => {
                        // Check if this element is on the selected wall (based on transform position)
                        const transform = el.getAttribute('transform');
                        if (transform) {
                            const clone = el.cloneNode(true);
                            contentGroup.appendChild(clone);
                        }
                    });
                }
            } else if (sel.type === 'furniture') {
                const originalEl = furnitureLayer.querySelector(`[data-furniture-id="${sel.element.id}"]`);
                if (originalEl) {
                    const clone = originalEl.cloneNode(true);
                    // Remove text label from furniture
                    clone.querySelectorAll('text').forEach(t => t.remove());
                    // Remove selection class
                    clone.classList.remove('selected');
                    contentGroup.appendChild(clone);
                }
            } else if (sel.type === 'label') {
                const originalEl = labelsLayer.querySelector(`[data-label-id="${sel.element.id}"]`);
                if (originalEl) {
                    const clone = originalEl.cloneNode(true);
                    clone.style.fill = ''; // Reset selection color
                    contentGroup.appendChild(clone);
                }
            }
        }
        
        // Optionally include dimensions for selected furniture
        if (includeDimensions) {
            for (const sel of selectedElements) {
                if (sel.type === 'furniture') {
                    const item = sel.element;
                    const widthText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    widthText.setAttribute('x', item.x + item.width / 2);
                    widthText.setAttribute('y', item.y - 8);
                    widthText.setAttribute('text-anchor', 'middle');
                    widthText.setAttribute('font-size', '11');
                    widthText.setAttribute('fill', '#666');
                    widthText.setAttribute('font-family', 'Arial, sans-serif');
                    widthText.textContent = formatDimension(item.width / scale);
                    contentGroup.appendChild(widthText);
                    
                    const heightText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    heightText.setAttribute('x', item.x - 8);
                    heightText.setAttribute('y', item.y + item.height / 2);
                    heightText.setAttribute('text-anchor', 'end');
                    heightText.setAttribute('dominant-baseline', 'middle');
                    heightText.setAttribute('font-size', '11');
                    heightText.setAttribute('fill', '#666');
                    heightText.setAttribute('font-family', 'Arial, sans-serif');
                    heightText.textContent = formatDimension(item.height / scale);
                    contentGroup.appendChild(heightText);
                }
            }
        }
        
        exportSvg.appendChild(contentGroup);
        
        // Remove rotation handles if any were cloned
        exportSvg.querySelectorAll('.rotation-handle').forEach(h => h.remove());
        
        // Add embedded styles for proper rendering
        const styleElement = document.createElementNS('http://www.w3.org/2000/svg', 'style');
        styleElement.textContent = `
            .wall-line { stroke: #333; stroke-linecap: round; }
            .door-element .door-frame { fill: white; }
            .door-element .door-swing { stroke: #8B4513; stroke-width: 1.5; fill: none; stroke-dasharray: 4,2; }
            .window-element .window-frame { fill: #87CEEB; stroke: #4A90A4; stroke-width: 2; }
            .window-element .window-mullion { stroke: #4A90A4; stroke-width: 2; }
            .furniture-element rect { stroke: #666; stroke-width: 1; }
            .furniture-element circle { stroke: #666; stroke-width: 1; }
            .furniture-element ellipse { stroke: #666; stroke-width: 1; }
            .room-label { font-family: Arial, sans-serif; font-size: 14px; fill: #666; }
        `;
        exportSvg.insertBefore(styleElement, exportSvg.firstChild);
        
        return { svg: exportSvg, bounds: bounds };
    }
    
    function applyInlineStylesToSVG(svgElement) {
        // Apply inline styles to wall lines
        svgElement.querySelectorAll('.wall-line').forEach(el => {
            if (!el.getAttribute('stroke')) {
                el.setAttribute('stroke', '#333');
            }
            el.setAttribute('stroke-linecap', 'round');
        });
        
        // Apply inline styles to door elements
        svgElement.querySelectorAll('.door-element .door-frame, .door-frame').forEach(el => {
            el.setAttribute('fill', 'white');
        });
        svgElement.querySelectorAll('.door-element .door-swing, .door-swing').forEach(el => {
            el.setAttribute('stroke', '#8B4513');
            el.setAttribute('stroke-width', '1.5');
            el.setAttribute('fill', 'none');
            el.setAttribute('stroke-dasharray', '4,2');
        });
        
        // Apply inline styles to window elements
        svgElement.querySelectorAll('.window-element .window-frame, .window-frame').forEach(el => {
            el.setAttribute('fill', '#87CEEB');
            el.setAttribute('stroke', '#4A90A4');
            el.setAttribute('stroke-width', '2');
        });
        svgElement.querySelectorAll('.window-element .window-mullion, .window-mullion').forEach(el => {
            el.setAttribute('stroke', '#4A90A4');
            el.setAttribute('stroke-width', '2');
        });
        
        // Apply inline styles to furniture elements
        svgElement.querySelectorAll('.furniture-element rect').forEach(el => {
            if (!el.getAttribute('stroke')) {
                el.setAttribute('stroke', '#666');
                el.setAttribute('stroke-width', '1');
            }
        });
        svgElement.querySelectorAll('.furniture-element circle').forEach(el => {
            if (!el.getAttribute('stroke')) {
                el.setAttribute('stroke', '#666');
                el.setAttribute('stroke-width', '1');
            }
        });
        svgElement.querySelectorAll('.furniture-element ellipse').forEach(el => {
            if (!el.getAttribute('stroke')) {
                el.setAttribute('stroke', '#666');
                el.setAttribute('stroke-width', '1');
            }
        });
        
        // Apply inline styles to dimension text
        svgElement.querySelectorAll('.dimension-text').forEach(el => {
            el.setAttribute('font-family', 'Arial, sans-serif');
            el.setAttribute('font-size', '33');
            el.setAttribute('fill', '#666');
        });
        
        // Apply inline styles to room labels
        svgElement.querySelectorAll('.room-label').forEach(el => {
            el.setAttribute('font-family', 'Arial, sans-serif');
            el.setAttribute('font-size', '14');
            el.setAttribute('fill', '#666');
        });
        
        // Apply styles to freeform openings
        svgElement.querySelectorAll('.freeform-opening line').forEach(el => {
            el.setAttribute('stroke-linecap', 'round');
        });
    }
    
    function exportSVG() {
        const { svg: exportSvg, bounds } = prepareExportSVG();
        
        // Set dimensions based on selected elements bounds
        exportSvg.setAttribute('width', bounds.width);
        exportSvg.setAttribute('height', bounds.height);
        exportSvg.setAttribute('viewBox', `0 0 ${bounds.width} ${bounds.height}`);
        
        // Apply inline styles
        applyInlineStylesToSVG(exportSvg);
        
        const svgString = new XMLSerializer().serializeToString(exportSvg);
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        downloadBlob(blob, 'floor-plan.svg');
        hasUnsavedChanges = false;
    }
    
    function exportPNG() {
        const { svg: exportSvg, bounds } = prepareExportSVG();
        const width = bounds.width;
        const height = bounds.height;
        
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = width * 2; // 2x for better quality
        canvas.height = height * 2;
        const ctx = canvas.getContext('2d');
        ctx.scale(2, 2);
        
        // White background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        // Set SVG dimensions
        exportSvg.setAttribute('width', width);
        exportSvg.setAttribute('height', height);
        exportSvg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        exportSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        
        // Apply inline styles to all elements for PNG rendering
        applyInlineStylesToSVG(exportSvg);
        
        const svgString = new XMLSerializer().serializeToString(exportSvg);
        const img = new Image();
        
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(blob => {
                downloadBlob(blob, 'floor-plan.png');
                hasUnsavedChanges = false;
            }, 'image/png');
        };
        
        img.onerror = (err) => {
            console.error('Error loading SVG for PNG export:', err);
            showExportMessage('Error generating PNG. Please try again.');
        };
        
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
    }
    
    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }
    
    // Canvas info
    function updateCanvasInfo() {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return;
        
        const widthFt = wrapper.clientWidth / scale;
        const heightFt = wrapper.clientHeight / scale;
        
        const sizeDisplay = document.getElementById('canvas-size');
        if (sizeDisplay) {
            sizeDisplay.textContent = formatDimension(widthFt) + ' × ' + formatDimension(heightFt);
        }
    }
    
    // ==========================================
    // FENG SHUI ANALYSIS
    // ==========================================
    
    function extractFloorPlanData() {
        // Collect all door/window openings with absolute positions
        const allDoors = [];
        const allWindows = [];

        for (const w of walls) {
            for (const o of (w.openings || [])) {
                const cx = w.start.x + o.position * (w.end.x - w.start.x);
                const cy = w.start.y + o.position * (w.end.y - w.start.y);
                const wallDx = w.end.x - w.start.x;
                const wallDy = w.end.y - w.start.y;
                const wallAngle = Math.atan2(wallDy, wallDx) * 180 / Math.PI;
                const normalAngle = wallAngle + 90;
                const entry = {
                    type: o.type,
                    centerX: cx,
                    centerY: cy,
                    widthFeet: o.width / scale,
                    wallAngleDeg: wallAngle,
                    facingAngleDeg: normalAngle
                };
                if (o.type === 'door') allDoors.push(entry);
                else allWindows.push(entry);
            }
        }

        for (const fo of freeformOpenings) {
            const cx = fo.x + fo.width / 2;
            const cy = fo.y + fo.height / 2;
            const entry = {
                type: fo.type,
                centerX: cx,
                centerY: cy,
                widthFeet: Math.max(fo.width, fo.height) / scale
            };
            if (fo.type === 'door') allDoors.push(entry);
            else allWindows.push(entry);
        }

        // Calculate room bounds
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const w of walls) {
            minX = Math.min(minX, w.start.x, w.end.x);
            minY = Math.min(minY, w.start.y, w.end.y);
            maxX = Math.max(maxX, w.start.x, w.end.x);
            maxY = Math.max(maxY, w.start.y, w.end.y);
        }
        const roomCx = (minX + maxX) / 2;
        const roomCy = (minY + maxY) / 2;

        function describePosition(x, y) {
            if (walls.length === 0) return '';
            const relX = (x - minX) / (maxX - minX || 1);
            const relY = (y - minY) / (maxY - minY || 1);
            const vertical = relY < 0.33 ? 'top' : relY > 0.66 ? 'bottom' : 'middle';
            const horizontal = relX < 0.33 ? 'left' : relX > 0.66 ? 'right' : 'center';
            if (vertical === 'middle' && horizontal === 'center') return 'center of room';
            if (vertical === 'middle') return `${horizontal} side`;
            if (horizontal === 'center') return `${vertical} side`;
            return `${vertical}-${horizontal} corner`;
        }

        function distanceFeet(x1, y1, x2, y2) {
            return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) / scale;
        }

        const furnitureData = furniture.map(f => {
            const fcx = f.x + f.width / 2;
            const fcy = f.y + f.height / 2;

            const nearestDoors = allDoors.map((d, i) => ({
                doorIndex: i,
                distanceFeet: distanceFeet(fcx, fcy, d.centerX, d.centerY),
                direction: describePosition(d.centerX, d.centerY)
            })).sort((a, b) => a.distanceFeet - b.distanceFeet);

            const nearestWindows = allWindows.map((w, i) => ({
                windowIndex: i,
                distanceFeet: distanceFeet(fcx, fcy, w.centerX, w.centerY),
                direction: describePosition(w.centerX, w.centerY)
            })).sort((a, b) => a.distanceFeet - b.distanceFeet);

            let nearestWallDistPx = Infinity;
            let nearestWallSide = '';
            for (const w of walls) {
                const wx = w.end.x - w.start.x;
                const wy = w.end.y - w.start.y;
                const wLen2 = wx * wx + wy * wy;
                if (wLen2 === 0) continue;
                const t = Math.max(0, Math.min(1, ((fcx - w.start.x) * wx + (fcy - w.start.y) * wy) / wLen2));
                const projX = w.start.x + t * wx;
                const projY = w.start.y + t * wy;
                const dist = Math.sqrt((fcx - projX) ** 2 + (fcy - projY) ** 2);
                if (dist < nearestWallDistPx) {
                    nearestWallDistPx = dist;
                    const wallMidX = (w.start.x + w.end.x) / 2;
                    const wallMidY = (w.start.y + w.end.y) / 2;
                    nearestWallSide = describePosition(wallMidX, wallMidY);
                }
            }

            return {
                id: f.id,
                typeId: f.typeId,
                name: f.name,
                x: f.x,
                y: f.y,
                centerX: fcx,
                centerY: fcy,
                widthFeet: f.width / scale,
                heightFeet: f.height / scale,
                rotation: f.rotation || 0,
                position: describePosition(fcx, fcy),
                nearestWallDistFeet: nearestWallDistPx / scale,
                nearestWallSide,
                nearestDoors: nearestDoors.slice(0, 3),
                nearestWindows: nearestWindows.slice(0, 3)
            };
        });

        const wallData = walls.map(w => ({
            start: { x: w.start.x, y: w.start.y },
            end: { x: w.end.x, y: w.end.y },
            lengthFeet: Math.sqrt((w.end.x - w.start.x) ** 2 + (w.end.y - w.start.y) ** 2) / scale
        }));

        return {
            scale,
            unit,
            coordinateSystem: 'x increases rightward, y increases downward; positions are in pixels',
            roomBounds: walls.length > 0 ? {
                x: minX, y: minY,
                width: maxX - minX, height: maxY - minY,
                widthFeet: (maxX - minX) / scale,
                heightFeet: (maxY - minY) / scale
            } : null,
            walls: wallData,
            doors: allDoors,
            windows: allWindows,
            furniture: furnitureData,
            labels: labels.map(l => ({ text: l.text, x: l.x, y: l.y }))
        };
    }
    
    async function captureFloorPlanImage() {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (!wrapper) return null;
        
        // Create a temporary canvas to render the SVG
        const svgClone = svg.cloneNode(true);
        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(svgClone);
        const blob = new Blob([svgStr], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = Math.min(img.width, 1024);
                canvas.height = Math.min(img.height, 1024);
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                URL.revokeObjectURL(url);
                resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                resolve(null);
            };
            img.src = url;
        });
    }

    /** Returns a small thumbnail data URL for the current floor plan (e.g. for layout list preview). Never returns null. */
    async function getPreviewDataURL(maxSize = 120) {
        const placeholder = getPlaceholderPreviewDataURL(maxSize);
        if (!wallsLayer && !furnitureLayer && !labelsLayer) return placeholder;
        let exportSvg, bounds;
        try {
            const built = buildPreviewSVG();
            exportSvg = built.svg;
            bounds = built.bounds;
        } catch (e) {
            return placeholder;
        }
        const w = bounds.width;
        const h = bounds.height;
        exportSvg.setAttribute('width', w);
        exportSvg.setAttribute('height', h);
        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(exportSvg);
        const blob = new Blob([svgStr], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const scale = maxSize / Math.max(img.width, img.height, 1);
                const cw = Math.round(img.width * scale);
                const ch = Math.round(img.height * scale);
                const canvas = document.createElement('canvas');
                canvas.width = cw;
                canvas.height = ch;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, cw, ch);
                ctx.drawImage(img, 0, 0, cw, ch);
                URL.revokeObjectURL(url);
                resolve(canvas.toDataURL('image/jpeg', 0.75));
            };
            img.onerror = () => {
                URL.revokeObjectURL(url);
                resolve(placeholder);
            };
            img.src = url;
        });
    }
    
    function getAllDoorPositions() {
        const doors = [];
        for (const w of walls) {
            for (const o of (w.openings || [])) {
                if (o.type !== 'door') continue;
                const cx = w.start.x + o.position * (w.end.x - w.start.x);
                const cy = w.start.y + o.position * (w.end.y - w.start.y);
                const dx = w.end.x - w.start.x;
                const dy = w.end.y - w.start.y;
                const len = Math.sqrt(dx * dx + dy * dy);
                doors.push({
                    cx, cy,
                    widthPx: o.width,
                    normalX: len ? -dy / len : 0,
                    normalY: len ? dx / len : 0,
                    wallAngle: Math.atan2(dy, dx)
                });
            }
        }
        for (const fo of freeformOpenings) {
            if (fo.type !== 'door') continue;
            doors.push({
                cx: fo.x + fo.width / 2,
                cy: fo.y + fo.height / 2,
                widthPx: Math.max(fo.width, fo.height),
                normalX: 0, normalY: -1, wallAngle: 0
            });
        }
        return doors;
    }

    function getAllWindowPositions() {
        const wins = [];
        for (const w of walls) {
            for (const o of (w.openings || [])) {
                if (o.type !== 'window') continue;
                const cx = w.start.x + o.position * (w.end.x - w.start.x);
                const cy = w.start.y + o.position * (w.end.y - w.start.y);
                wins.push({ cx, cy, widthPx: o.width });
            }
        }
        for (const fo of freeformOpenings) {
            if (fo.type !== 'window') continue;
            wins.push({ cx: fo.x + fo.width / 2, cy: fo.y + fo.height / 2, widthPx: Math.max(fo.width, fo.height) });
        }
        return wins;
    }

    function furnitureCenter(f) {
        return { x: f.x + f.width / 2, y: f.y + f.height / 2 };
    }

    function dist(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function nearestWallSide(fx, fy, bounds) {
        const dTop = fy - bounds.minY;
        const dBot = bounds.maxY - fy;
        const dLeft = fx - bounds.minX;
        const dRight = bounds.maxX - fx;
        const min = Math.min(dTop, dBot, dLeft, dRight);
        if (min === dTop) return 'top';
        if (min === dBot) return 'bottom';
        if (min === dLeft) return 'left';
        return 'right';
    }

    function oppositeWall(side) {
        return { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[side] || 'top';
    }

    function isDirectlyInLineWithDoor(f, door, bounds) {
        const fc = furnitureCenter(f);
        const roomW = bounds.maxX - bounds.minX;
        const roomH = bounds.maxY - bounds.minY;
        const threshold = Math.min(roomW, roomH) * 0.2;
        const isHorizontalWall = Math.abs(Math.cos(door.wallAngle)) > 0.7;
        if (isHorizontalWall) {
            return Math.abs(fc.x - door.cx) < threshold;
        } else {
            return Math.abs(fc.y - door.cy) < threshold;
        }
    }

    function distPointToSegment(px, py, ax, ay, bx, by) {
        const dx = bx - ax, dy = by - ay;
        const len2 = dx * dx + dy * dy;
        if (len2 === 0) return dist(px, py, ax, ay);
        const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2));
        return dist(px, py, ax + t * dx, ay + t * dy);
    }

    /** Minimum distance from point (px, py) to the boundary of rotated furniture f (clearance). */
    function minDistancePointToRotatedRect(px, py, f) {
        const corners = getRotatedCorners(f);
        let minD = Infinity;
        for (let i = 0; i < 4; i++) {
            const a = corners[i];
            const b = corners[(i + 1) % 4];
            minD = Math.min(minD, distPointToSegment(px, py, a.x, a.y, b.x, b.y));
        }
        return minD;
    }

    function minWallDistance(px, py) {
        let min = Infinity;
        for (const w of walls) {
            min = Math.min(min, distPointToSegment(px, py, w.start.x, w.start.y, w.end.x, w.end.y));
        }
        return min;
    }

    /** Scale factor for overlap/clipping bounds (0.85 = 85%). Collision rect is inset so it matches visual footprint; SVGs often have padding. */
    const OVERLAP_BOUNDS_SCALE = 0.85;

    function getRotatedCorners(f, boundsScale = 1) {
        const rot = (f.rotation || 0) * Math.PI / 180;
        const c = Math.cos(rot), s = Math.sin(rot);
        const cx = f.x + f.width / 2, cy = f.y + f.height / 2;
        const hw = (f.width / 2) * boundsScale, hh = (f.height / 2) * boundsScale;
        return [
            { x: cx + (-hw) * c - (-hh) * s, y: cy + (-hw) * s + (-hh) * c },
            { x: cx + ( hw) * c - (-hh) * s, y: cy + ( hw) * s + (-hh) * c },
            { x: cx + ( hw) * c - ( hh) * s, y: cy + ( hw) * s + ( hh) * c },
            { x: cx + (-hw) * c - ( hh) * s, y: cy + (-hw) * s + ( hh) * c }
        ];
    }

    function getRotatedAABB(f, boundsScale = 1) {
        const corners = getRotatedCorners(f, boundsScale);
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const p of corners) {
            minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
            maxX = Math.max(maxX, p.x); maxY = Math.max(maxY, p.y);
        }
        return { minX, minY, maxX, maxY };
    }

    /** Point-in-convex-polygon test. Uses centroid to determine inside-side of each edge. */
    function pointInConvexPolygon(px, py, corners) {
        const n = corners.length;
        const cx = corners.reduce((s, p) => s + p.x, 0) / n;
        const cy = corners.reduce((s, p) => s + p.y, 0) / n;
        for (let i = 0; i < n; i++) {
            const a = corners[i];
            const b = corners[(i + 1) % n];
            const crossP = (b.x - a.x) * (py - a.y) - (b.y - a.y) * (px - a.x);
            const crossC = (b.x - a.x) * (cy - a.y) - (b.y - a.y) * (cx - a.x);
            if ((crossP > 0) !== (crossC > 0) && crossP !== 0 && crossC !== 0) return false;
        }
        return true;
    }

    /** Segment-segment intersection. Returns true if segments (a1,a2) and (b1,b2) intersect. */
    function segmentsIntersect(a1x, a1y, a2x, a2y, b1x, b1y, b2x, b2y) {
        const d = (a2x - a1x) * (b2y - b1y) - (a2y - a1y) * (b2x - b1x);
        if (Math.abs(d) < 1e-9) return false;
        const t = ((b1x - a1x) * (b2y - b1y) - (b1y - a1y) * (b2x - b1x)) / d;
        const u = ((a2x - a1x) * (b1y - a1y) - (a2y - a1y) * (b1x - a1x)) / d;
        return t >= 0 && t <= 1 && u >= 0 && u <= 1;
    }

    /** True if two rotated rectangles actually overlap (polygon intersection). Uses scaled bounds to match visual footprint. */
    function rectsOverlap(a, b) {
        const scale = OVERLAP_BOUNDS_SCALE;
        const ca = getRotatedCorners(a, scale), cb = getRotatedCorners(b, scale);
        // AABB quick-reject
        const aa = getRotatedAABB(a, scale), ab = getRotatedAABB(b, scale);
        if (aa.minX >= ab.maxX || aa.maxX <= ab.minX || aa.minY >= ab.maxY || aa.maxY <= ab.minY) return false;
        // Check if any vertex of a is inside b
        for (const p of ca) if (pointInConvexPolygon(p.x, p.y, cb)) return true;
        // Check if any vertex of b is inside a
        for (const p of cb) if (pointInConvexPolygon(p.x, p.y, ca)) return true;
        // Check edge-edge intersections
        for (let i = 0; i < 4; i++) {
            const a1 = ca[i], a2 = ca[(i + 1) % 4];
            for (let j = 0; j < 4; j++) {
                const b1 = cb[j], b2 = cb[(j + 1) % 4];
                if (segmentsIntersect(a1.x, a1.y, a2.x, a2.y, b1.x, b1.y, b2.x, b2.y)) return true;
            }
        }
        return false;
    }

    function minEdgeToWallDistance(f) {
        const corners = getRotatedCorners(f);
        const midpoints = [
            { x: (corners[0].x + corners[1].x) / 2, y: (corners[0].y + corners[1].y) / 2 },
            { x: (corners[1].x + corners[2].x) / 2, y: (corners[1].y + corners[2].y) / 2 },
            { x: (corners[2].x + corners[3].x) / 2, y: (corners[2].y + corners[3].y) / 2 },
            { x: (corners[3].x + corners[0].x) / 2, y: (corners[3].y + corners[0].y) / 2 }
        ];
        let min = Infinity;
        for (const pt of [...corners, ...midpoints]) {
            for (const w of walls) {
                min = Math.min(min, distPointToSegment(pt.x, pt.y, w.start.x, w.start.y, w.end.x, w.end.y));
            }
        }
        return min;
    }

    function edgeGap(a, b) {
        const aa = getRotatedAABB(a), ab = getRotatedAABB(b);
        const gapX = Math.max(aa.minX - ab.maxX, ab.minX - aa.maxX);
        const gapY = Math.max(aa.minY - ab.maxY, ab.minY - aa.maxY);
        if (gapX > 0 && gapY > 0) return Math.sqrt(gapX * gapX + gapY * gapY);
        return Math.max(gapX, gapY);
    }

    /** Get solid wall segments (excluding door/window openings). Returns [{startT,endT},...] with 0<=startT<endT<=1. */
    function getWallSolidSegments(wall) {
        const segments = [];
        let lastT = 0;
        const openings = (wall.openings || []).slice().sort((a, b) => a.position - b.position);
        const wallLength = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2);
        for (const o of openings) {
            if (wallLength < 1e-6) continue;
            const halfNorm = Math.min(0.499, (o.width / 2) / wallLength);
            const t1 = Math.max(0, o.position - halfNorm);
            const t2 = Math.min(1, o.position + halfNorm);
            if (t1 > lastT) segments.push({ startT: lastT, endT: t1 });
            lastT = Math.max(lastT, t2);
        }
        if (lastT < 1) segments.push({ startT: lastT, endT: 1 });
        return segments;
    }

    /** Extract line segments from imported SVG elements (from image conversion) for obstacle checks. */
    function getImportedObstacleSegments() {
        const segments = [];
        if (!svg) return segments;
        const toGlobal = (el, x, y) => {
            const pt = svg.createSVGPoint();
            pt.x = x;
            pt.y = y;
            const ctm = el.getCTM();
            if (!ctm) return null;
            const t = pt.matrixTransform(ctm);
            return { x: t.x, y: t.y };
        };
        for (const imp of importedElements) {
            const el = imp.element;
            if (!el || !el.ownerDocument || !el.ownerDocument.contains(el)) continue;
            try {
                if (imp.type === 'line') {
                    const x1 = parseFloat(el.getAttribute('x1')) || 0;
                    const y1 = parseFloat(el.getAttribute('y1')) || 0;
                    const x2 = parseFloat(el.getAttribute('x2')) || 0;
                    const y2 = parseFloat(el.getAttribute('y2')) || 0;
                    const p1 = toGlobal(el, x1, y1), p2 = toGlobal(el, x2, y2);
                    if (p1 && p2) segments.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
                } else if (imp.type === 'rect') {
                    const x = parseFloat(el.getAttribute('x')) || 0;
                    const y = parseFloat(el.getAttribute('y')) || 0;
                    const w = parseFloat(el.getAttribute('width')) || 0;
                    const h = parseFloat(el.getAttribute('height')) || 0;
                    const corners = [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
                    for (let i = 0; i < 4; i++) {
                        const [ax, ay] = corners[i], [bx, by] = corners[(i + 1) % 4];
                        const p1 = toGlobal(el, ax, ay), p2 = toGlobal(el, bx, by);
                        if (p1 && p2) segments.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
                    }
                } else if (imp.type === 'polyline' || imp.type === 'polygon') {
                    const pts = (el.getAttribute('points') || '').trim().split(/[\s,]+/).map(parseFloat);
                    for (let i = 0; i + 3 < pts.length; i += 2) {
                        const p1 = toGlobal(el, pts[i], pts[i + 1]);
                        const p2 = toGlobal(el, pts[i + 2], pts[i + 3]);
                        if (p1 && p2) segments.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
                    }
                    if (imp.type === 'polygon' && pts.length >= 4) {
                        const p1 = toGlobal(el, pts[pts.length - 2], pts[pts.length - 1]);
                        const p2 = toGlobal(el, pts[0], pts[1]);
                        if (p1 && p2) segments.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
                    }
                } else if (imp.type === 'path') {
                    try {
                        const len = el.getTotalLength();
                        const n = Math.max(2, Math.ceil(len / 8));
                        for (let i = 0; i < n; i++) {
                            const t1 = i / n, t2 = (i + 1) / n;
                            const pt1 = el.getPointAtLength(t1 * len);
                            const pt2 = el.getPointAtLength(t2 * len);
                            const p1 = toGlobal(el, pt1.x, pt1.y), p2 = toGlobal(el, pt2.x, pt2.y);
                            if (p1 && p2 && (Math.abs(p1.x - p2.x) > 0.5 || Math.abs(p1.y - p2.y) > 0.5)) {
                                segments.push({ x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y });
                            }
                        }
                    } catch (_) {}
                }
            } catch (_) {}
        }
        return segments;
    }

    /** All obstacle segments to check: solid wall parts + freeform doors/windows + imported SVG (e.g. converted floor plan walls). */
    function getAllObstacleSegments() {
        const segments = [];
        for (const w of walls) {
            const dx = w.end.x - w.start.x, dy = w.end.y - w.start.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len === 0) continue;
            const solid = getWallSolidSegments(w);
            for (const seg of solid) {
                segments.push({
                    x1: w.start.x + seg.startT * dx, y1: w.start.y + seg.startT * dy,
                    x2: w.start.x + seg.endT * dx, y2: w.start.y + seg.endT * dy
                });
            }
        }
        for (const o of freeformOpenings) {
            if (o.start && o.end) {
                segments.push({ x1: o.start.x, y1: o.start.y, x2: o.end.x, y2: o.end.y });
            }
        }
        for (const seg of getImportedObstacleSegments()) {
            segments.push(seg);
        }
        return segments;
    }

    /**
     * Check if furniture overlaps solid wall segments or freeform openings.
     * @param {Object} f - furniture {x, y, width, height, rotation}
     * @param {boolean} strict - If true, reject any overlap (for placement). If false, only reject when furniture fully passes through (for analysis).
     */
    function rectOverlapsWallRotated(f, strict = false) {
        // For placement, use full bounds (1.0) to avoid allowing overlaps. For analysis, use scaled bounds to avoid false positives on wall-adjacent furniture.
        const boundsScale = strict ? 1 : OVERLAP_BOUNDS_SCALE;
        const corners = getRotatedCorners(f, boundsScale);
        // Slightly larger buffer for placement to avoid furniture clipping into walls
        const halfThick = strict ? wallThickness : wallThickness / 2 + 2;
        const allSegments = getAllObstacleSegments();
        for (const seg of allSegments) {
            const dx = seg.x2 - seg.x1, dy = seg.y2 - seg.y1;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len === 0) continue;
            const nx = -dy / len, ny = dx / len;
            const wx1 = Math.min(seg.x1 + nx * halfThick, seg.x2 + nx * halfThick, seg.x2 - nx * halfThick, seg.x1 - nx * halfThick);
            const wy1 = Math.min(seg.y1 + ny * halfThick, seg.y2 + ny * halfThick, seg.y2 - ny * halfThick, seg.y1 - ny * halfThick);
            const wx2 = Math.max(seg.x1 + nx * halfThick, seg.x2 + nx * halfThick, seg.x2 - nx * halfThick, seg.x1 - nx * halfThick);
            const wy2 = Math.max(seg.y1 + ny * halfThick, seg.y2 + ny * halfThick, seg.y2 - ny * halfThick, seg.y1 - ny * halfThick);
            let hasOverlap = false;
            for (const p of corners) {
                if (p.x >= wx1 && p.x <= wx2 && p.y >= wy1 && p.y <= wy2) { hasOverlap = true; break; }
            }
            if (!hasOverlap) {
                for (let i = 0; i < corners.length; i++) {
                    const p1 = corners[i], p2 = corners[(i + 1) % corners.length];
                    if (segmentIntersectRect(p1.x, p1.y, p2.x, p2.y, wx1, wy1, wx2, wy2)) { hasOverlap = true; break; }
                }
            }
            if (!hasOverlap) continue;
            if (strict) return true;
            const segMidX = (seg.x1 + seg.x2) / 2, segMidY = (seg.y1 + seg.y2) / 2;
            const signedDist = (p) => (p.x - segMidX) * ny - (p.y - segMidY) * nx;
            const sides = corners.map(p => Math.sign(signedDist(p))).filter(s => s !== 0);
            const hasPos = sides.some(s => s > 0);
            const hasNeg = sides.some(s => s < 0);
            if (hasPos && hasNeg) return true;
        }
        return false;
    }

    /** Orientation of point c relative to segment (a,b): -1=cw, 0=collinear, 1=ccw. */
    function orient(ax, ay, bx, by, cx, cy) {
        const v = (bx - ax) * (cy - by) - (by - ay) * (cx - bx);
        if (Math.abs(v) < 1e-9) return 0;
        return v > 0 ? 1 : -1;
    }
    function segmentIntersectRect(x1, y1, x2, y2, rx1, ry1, rx2, ry2) {
        const segs = [[rx1, ry1, rx2, ry1], [rx2, ry1, rx2, ry2], [rx2, ry2, rx1, ry2], [rx1, ry2, rx1, ry1]];
        for (const [sx1, sy1, sx2, sy2] of segs) {
            const o1 = orient(x1, y1, x2, y2, sx1, sy1);
            const o2 = orient(x1, y1, x2, y2, sx2, sy2);
            const o3 = orient(sx1, sy1, sx2, sy2, x1, y1);
            const o4 = orient(sx1, sy1, sx2, sy2, x2, y2);
            if (o1 !== o2 && o3 !== o4) return true; // straddle
            if (o1 === 0 && o2 === 0) {
                const minX = Math.min(sx1, sx2), maxX = Math.max(sx1, sx2), minY = Math.min(sy1, sy2), maxY = Math.max(sy1, sy2);
                if (Math.max(x1, x2) >= minX && Math.min(x1, x2) <= maxX && Math.max(y1, y2) >= minY && Math.min(y1, y2) <= maxY) return true;
            }
        }
        return false;
    }

    function getFacingVector(f) {
        const rot = (f.rotation || 0) * Math.PI / 180;
        return { x: Math.cos(rot), y: Math.sin(rot) };
    }

    function getWallSideFromDirection(dx, dy) {
        if (dy < -0.3) return 'top';
        if (dy > 0.3) return 'bottom';
        if (dx < -0.3) return 'left';
        if (dx > 0.3) return 'right';
        return null;
    }

    function analyzeFengShui() {
        const bounds = getRoomBounds();
        if (!bounds) return { overallScore: 5, summary: 'Unable to determine room bounds.', suggestions: [] };

        const doors = getAllDoorPositions();
        const windows = getAllWindowPositions();
        const ft = scale;
        const roomW = bounds.maxX - bounds.minX;
        const roomH = bounds.maxY - bounds.minY;

        const itemIssues = new Map();
        function addIssue(f, weight, principle, description, priority) {
            if (!itemIssues.has(f.id)) {
                itemIssues.set(f.id, { weight: 0, suggestions: [] });
            }
            const entry = itemIssues.get(f.id);
            entry.weight += weight;
            entry.suggestions.push({ furnitureId: f.id, furnitureName: f.name, principle, description, priority });
        }

        // ---------- RULE: Furniture overlapping other furniture ----------
        for (let i = 0; i < furniture.length; i++) {
            for (let j = i + 1; j < furniture.length; j++) {
                const a = furniture[i], b = furniture[j];
                const aSnapped = isFurnitureSnappedToWall(a), bSnapped = isFurnitureSnappedToWall(b);
                if (aSnapped && bSnapped) continue;
                if (rectsOverlap(a, b)) {
                    const smaller = (a.width * a.height <= b.width * b.height) ? a : b;
                    const larger = smaller === a ? b : a;
                    addIssue(smaller, 3, 'Overlapping furniture',
                        `${smaller.name} overlaps with ${larger.name}. Overlapping items block energy flow.`, 'high');
                }
            }
        }

        // ---------- RULE: Furniture overlapping walls (only flag when fully passes through; skip if snapped and not clipping) ----------
        for (const f of furniture) {
            if (isFurnitureSnappedToWall(f) && !rectOverlapsWallRotated(f, false)) continue;
            if (rectOverlapsWallRotated(f, false)) {
                addIssue(f, 3, 'Wall obstruction',
                    `${f.name} is clipping through a wall. Move it fully inside the room.`, 'high');
            }
        }

        // ---------- RULE: Furniture outside room ----------
        for (const f of furniture) {
            const aabb = getRotatedAABB(f);
            if (aabb.minX < bounds.minX || aabb.maxX > bounds.maxX || aabb.minY < bounds.minY || aabb.maxY > bounds.maxY) {
                addIssue(f, 3, 'Outside room',
                    `${f.name} is outside the room boundaries.`, 'high');
            }
        }

        // ---------- RULE: Furniture blocking doors (use clearance: nearest edge to door) ----------
        for (const f of furniture) {
            for (const door of doors) {
                const clearancePx = minDistancePointToRotatedRect(door.cx, door.cy, f);
                const clearanceFt = clearancePx / ft;
                if (clearanceFt < 3) {
                    addIssue(f, 2.5, 'Door clearance',
                        `${f.name} is ${clearanceFt.toFixed(1)} ft from a door (clearance). Keep at least 3 ft clear for chi to enter.`, 'high');
                    break;
                }
            }
        }

        // ---------- RULE: Large furniture not anchored to wall ----------
        const anchorTypes = new Set(['queen-bed', 'king-bed', 'twin-bed', 'sofa', 'desk', 'dresser', 'wardrobe', 'bookshelf', 'tv-stand', 'buffet', 'dining-table']);
        for (const f of furniture) {
            if (!anchorTypes.has(f.typeId)) continue;
            const edgeDist = minEdgeToWallDistance(f);
            if (edgeDist > 1.5 * ft) {
                addIssue(f, 2, 'Wall anchoring',
                    `${f.name} is floating ${(edgeDist / ft).toFixed(1)} ft from the nearest wall. Large furniture should be placed against a wall for grounding and stability.`, 'medium');
            }
        }

        // ---------- RULE: Bed in "coffin position" (directly in line with door) ----------
        const bedTypes = new Set(['queen-bed', 'king-bed', 'twin-bed']);
        for (const f of furniture) {
            if (!bedTypes.has(f.typeId)) continue;
            for (const door of doors) {
                if (isDirectlyInLineWithDoor(f, door, bounds)) {
                    addIssue(f, 2.5, 'Coffin position',
                        `${f.name} is directly in line with a door — the "coffin position" in feng shui. Move to a side wall where you can see the door diagonally.`, 'high');
                    break;
                }
            }
        }

        // ---------- RULE: Bed headboard near window ----------
        for (const f of furniture) {
            if (!bedTypes.has(f.typeId)) continue;
            const rot = (f.rotation || 0) * Math.PI / 180;
            const length = Math.max(f.width, f.height);
            const headDx = Math.sin(rot), headDy = -Math.cos(rot);
            const cx = furnitureCenter(f).x, cy = furnitureCenter(f).y;
            const headboardCenter = { x: cx + (length / 2) * headDx, y: cy + (length / 2) * headDy };
            for (const win of windows) {
                const d = dist(headboardCenter.x, headboardCenter.y, win.cx, win.cy);
                if (d < 2 * ft) {
                    addIssue(f, 1.5, 'Bed near window',
                        `${f.name} is too close to a window. Place the headboard against a solid wall for restful sleep.`, 'medium');
                    break;
                }
            }
        }

        // ---------- RULE: Sofa/desk command position (back to door) ----------
        for (const f of furniture) {
            if (f.typeId !== 'sofa' && f.typeId !== 'desk') continue;
            if (doors.length === 0) continue;
            const fc = furnitureCenter(f);
            const facing = getFacingVector(f);
            const depth = Math.min(f.width, f.height) / 2;
            const backPoint = { x: fc.x - facing.x * depth, y: fc.y - facing.y * depth };
            const backSide = nearestWallSide(backPoint.x, backPoint.y, bounds);
            const nearestDoor = doors.reduce((best, d) => {
                const dd = dist(fc.x, fc.y, d.cx, d.cy);
                return dd < best.dist ? { door: d, dist: dd } : best;
            }, { door: null, dist: Infinity });
            if (!nearestDoor.door) continue;
            const doorSide = nearestWallSide(nearestDoor.door.cx, nearestDoor.door.cy, bounds);
            if (backSide === doorSide) {
                addIssue(f, 1.5, 'Command position',
                    `${f.name} has its back facing the door. In feng shui, you should be able to see the entrance — reposition to the opposite wall.`, 'medium');
            }
        }

        // ---------- RULE: Furniture crowding ----------
        const crowded = new Set();
        for (let i = 0; i < furniture.length; i++) {
            for (let j = i + 1; j < furniture.length; j++) {
                const gap = edgeGap(furniture[i], furniture[j]);
                if (gap >= 0 && gap < ft * 0.5) {
                    const smaller = (furniture[i].width * furniture[i].height <= furniture[j].width * furniture[j].height) ? furniture[i] : furniture[j];
                    if (!crowded.has(smaller.id)) {
                        crowded.add(smaller.id);
                        addIssue(smaller, 0.75, 'Crowding',
                            `${smaller.name} is too close to adjacent furniture (${(gap / ft).toFixed(1)} ft gap). Allow at least 1.5–2 ft between pieces for chi to circulate.`, 'low');
                    }
                }
            }
        }

        // ---------- RULE: Balance ----------
        if (furniture.length >= 3) {
            const roomCx = (bounds.minX + bounds.maxX) / 2;
            const roomCy = (bounds.minY + bounds.maxY) / 2;
            let leftW = 0, rightW = 0, topW = 0, bottomW = 0;
            const leftItems = [], rightItems = [], topItems = [], bottomItems = [];
            for (const f of furniture) {
                const fc = furnitureCenter(f);
                const w = f.width * f.height;
                if (fc.x < roomCx) { leftW += w; leftItems.push(f); } else { rightW += w; rightItems.push(f); }
                if (fc.y < roomCy) { topW += w; topItems.push(f); } else { bottomW += w; bottomItems.push(f); }
            }
            const hBal = Math.min(leftW, rightW) / Math.max(leftW, rightW, 1);
            const vBal = Math.min(topW, bottomW) / Math.max(topW, bottomW, 1);
            if (hBal < 0.25) {
                const heavySide = leftW > rightW ? 'left' : 'right';
                const lightSide = oppositeWall(heavySide);
                const heavyItems = heavySide === 'left' ? leftItems : rightItems;
                const candidate = heavyItems.reduce((best, f) => (!best || f.width * f.height > best.width * best.height) ? f : best, null);
                if (candidate) {
                    addIssue(candidate, hBal < 0.1 ? 2.5 : 1.5, 'Room balance',
                        `Furniture is heavily concentrated on the ${heavySide} side. Move ${candidate.name} toward the ${lightSide} to create visual and energetic balance.`, 'medium');
                }
            }
            if (vBal < 0.25) {
                const heavySide = topW > bottomW ? 'top' : 'bottom';
                const lightSide = oppositeWall(heavySide);
                const heavyItems = heavySide === 'top' ? topItems : bottomItems;
                const candidate = heavyItems.reduce((best, f) => (!best || f.width * f.height > best.width * best.height) ? f : best, null);
                if (candidate && !itemIssues.has(candidate.id)) {
                    addIssue(candidate, vBal < 0.1 ? 2.5 : 1.5, 'Room balance',
                        `Furniture is concentrated toward the ${heavySide}. Move ${candidate.name} toward the ${lightSide} for better balance.`, 'medium');
                }
            }
        }

        // ---------- RULE: Center of room should be open (tai chi) ----------
        const centerZone = {
            x: bounds.minX + roomW * 0.3,
            y: bounds.minY + roomH * 0.3,
            width: roomW * 0.4,
            height: roomH * 0.4
        };
        const centerBlockers = [];
        for (const f of furniture) {
            const aabb = getRotatedAABB(f);
            const ox = Math.max(0, Math.min(aabb.maxX, centerZone.x + centerZone.width) - Math.max(aabb.minX, centerZone.x));
            const oy = Math.max(0, Math.min(aabb.maxY, centerZone.y + centerZone.height) - Math.max(aabb.minY, centerZone.y));
            if (ox > 0 && oy > 0) {
                centerBlockers.push({ f, overlap: ox * oy });
            }
        }
        centerBlockers.sort((a, b) => b.overlap - a.overlap);
        const centerTotalArea = centerBlockers.reduce((s, c) => s + c.overlap, 0);
        const centerFillRatio = centerTotalArea / (centerZone.width * centerZone.height);
        if (centerFillRatio > 0.1) {
            const priority = centerFillRatio > 0.2 ? 'high' : 'medium';
            const penalty = centerFillRatio > 0.4 ? 2 : centerFillRatio > 0.2 ? 1.5 : 0.75;
            for (const { f } of centerBlockers.slice(0, 3)) {
                addIssue(f, penalty, 'Open center (tai chi)',
                    `${f.name} is in the center of the room. In feng shui, the center ("tai chi") should remain open to allow energy to gather and circulate.`, priority);
            }
        }

        // ---------- RULE: Clear pathway from door ----------
        for (const door of doors) {
            const pathWidth = 2 * ft;
            const pathLength = Math.max(roomW, roomH) * 0.6;
            const isHWall = Math.abs(Math.cos(door.wallAngle)) > 0.7;
            for (const f of furniture) {
                const aabb = getRotatedAABB(f);
                let blocks = false;
                if (isHWall) {
                    const pathMinX = door.cx - pathWidth / 2;
                    const pathMaxX = door.cx + pathWidth / 2;
                    const pathMinY = Math.min(door.cy, door.cy + door.normalY * pathLength);
                    const pathMaxY = Math.max(door.cy, door.cy + door.normalY * pathLength);
                    blocks = aabb.minX < pathMaxX && aabb.maxX > pathMinX && aabb.minY < pathMaxY && aabb.maxY > pathMinY;
                } else {
                    const pathMinY = door.cy - pathWidth / 2;
                    const pathMaxY = door.cy + pathWidth / 2;
                    const pathMinX = Math.min(door.cx, door.cx + door.normalX * pathLength);
                    const pathMaxX = Math.max(door.cx, door.cx + door.normalX * pathLength);
                    blocks = aabb.minX < pathMaxX && aabb.maxX > pathMinX && aabb.minY < pathMaxY && aabb.maxY > pathMinY;
                }
                if (blocks) {
                    addIssue(f, 1.5, 'Pathway blocked',
                        `${f.name} is blocking the pathway from a door. Keep a clear 2 ft path from every entrance so chi can flow freely into the room.`, 'high');
                }
            }
        }

        // ---------- RULE: Desk/sofa facing wall (should face into room) ----------
        for (const f of furniture) {
            if (f.typeId !== 'desk' && f.typeId !== 'sofa') continue;
            const fc = furnitureCenter(f);
            const edgeDist = minEdgeToWallDistance(f);
            if (edgeDist > 1.5 * ft) continue;
            const side = nearestWallSide(fc.x, fc.y, bounds);
            const facing = getFacingVector(f);
            const facingWall = getWallSideFromDirection(facing.x, facing.y);
            const facesWall = facingWall && side === facingWall;
            if (facesWall && doors.length > 0) {
                addIssue(f, 1.5, 'Facing wall',
                    `${f.name} faces the wall. Rotate so it faces into the room for better awareness and energy flow.`, 'medium');
            }
        }

        // ---------- RULE: Nightstand without bed nearby ----------
        for (const f of furniture) {
            if (f.typeId !== 'nightstand') continue;
            const fc = furnitureCenter(f);
            const nearBed = furniture.some(b => bedTypes.has(b.typeId) && dist(fc.x, fc.y, furnitureCenter(b).x, furnitureCenter(b).y) < 4 * ft);
            if (!nearBed) {
                addIssue(f, 1, 'Nightstand placement',
                    `${f.name} is far from any bed. Place nightstands adjacent to the bed for balanced energy on both sides.`, 'low');
            }
        }

        // ---------- RULE: Bed should see the door (command position) ----------
        for (const f of furniture) {
            if (!bedTypes.has(f.typeId)) continue;
            if (doors.length === 0) continue;
            if (itemIssues.has(f.id)) continue;
            const rot = (f.rotation || 0) * Math.PI / 180;
            const length = Math.max(f.width, f.height);
            const headDx = Math.sin(rot), headDy = -Math.cos(rot);
            const cx = furnitureCenter(f).x, cy = furnitureCenter(f).y;
            const headboardCenter = { x: cx + (length / 2) * headDx, y: cy + (length / 2) * headDy };
            const bedHeadWall = nearestWallSide(headboardCenter.x, headboardCenter.y, bounds);
            for (const door of doors) {
                const doorSide = nearestWallSide(door.cx, door.cy, bounds);
                if (bedHeadWall === doorSide) {
                    addIssue(f, 1.5, 'Bed command position',
                        `${f.name} is on the same wall as the door. Ideally place the bed on a wall diagonal to the door for the command position.`, 'medium');
                    break;
                }
            }
        }

        // ---------- Compute score ----------
        let totalWeight = 0;
        const issueBreakdown = [];
        for (const [id, entry] of itemIssues) {
            totalWeight += entry.weight;
            const f = furniture.find(fi => fi.id === id);
            issueBreakdown.push({ item: f?.name || id, weight: entry.weight, rules: entry.suggestions.map(s => s.principle) });
        }
        const denom = Math.max(furniture.length * 1.5, 4);
        const rawScore = 10 - (totalWeight / denom) * 9;
        const score = Math.max(1, Math.min(10, Math.round(rawScore)));
        console.log('[Feng Shui]', { totalWeight, denom, rawScore, score, issueBreakdown });

        // Collect one suggestion per item (highest priority first)
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        const allSuggestions = [];
        for (const [, entry] of itemIssues) {
            if (entry.suggestions.length === 0) continue;
            entry.suggestions.sort((a, b) => (priorityOrder[a.priority] || 2) - (priorityOrder[b.priority] || 2));
            allSuggestions.push(entry.suggestions[0]);
        }
        const seen = new Set();
        const dedupedSuggestions = allSuggestions.filter(s => {
            if (seen.has(s.furnitureId)) return false;
            seen.add(s.furnitureId);
            return true;
        });

        let summary;
        if (score >= 8 && dedupedSuggestions.length === 0) {
            summary = 'Excellent feng shui! Furniture is well-placed with balanced energy flow.';
        } else if (score >= 7) {
            summary = 'Good layout with minor feng shui improvements possible.';
        } else if (score >= 4) {
            summary = 'Several feng shui issues found — applying the suggestions will improve energy flow and harmony.';
        } else {
            summary = 'Major feng shui problems detected. The furniture arrangement significantly blocks energy flow.';
        }

        return { overallScore: score, summary, suggestions: dedupedSuggestions };
    }

    const ALIGN_ORDERS = [
        [0.5, 0.3, 0.7, 0.2, 0.8, 0.15, 0.85, 0.1, 0.9],
        [0.3, 0.7, 0.5, 0.2, 0.8, 0.4, 0.6, 0.1, 0.9],
        [0.7, 0.3, 0.5, 0.8, 0.2, 0.6, 0.4, 0.9, 0.1],
        [0.2, 0.8, 0.5, 0.4, 0.6, 0.3, 0.7, 0.15, 0.85],
        [0.8, 0.2, 0.5, 0.6, 0.4, 0.7, 0.3, 0.85, 0.15],
        [0.4, 0.6, 0.5, 0.25, 0.75, 0.1, 0.9, 0.35, 0.65],
        [0.6, 0.4, 0.5, 0.75, 0.25, 0.9, 0.1, 0.65, 0.35],
        [0.25, 0.75, 0.5, 0.35, 0.65, 0.2, 0.8, 0.4, 0.6]
    ];

    function generateAlternativeLayout(tryIndex) {
        tryIndex = tryIndex || 0;
        const bounds = getRoomBounds();
        if (!bounds) return null;
        const ft = scale;
        const margin = wallThickness + 12;
        const doors = getAllDoorPositions();
        const windows = getAllWindowPositions();
        const alignOrder = ALIGN_ORDERS[tryIndex % ALIGN_ORDERS.length] || ALIGN_ORDERS[0];

        const items = furniture.map(f => ({
            id: f.id, typeId: f.typeId, name: f.name,
            width: f.width, height: f.height,
            x: f.x, y: f.y, rotation: f.rotation || 0
        }));

        const placed = [];
        const gap = 2;

        function aabbOverlap(a, b) {
            return a.minX < b.maxX + gap && a.maxX > b.minX - gap && a.minY < b.maxY + gap && a.maxY > b.minY - gap;
        }
        function overlapsAny(rx, ry, rw, rh, rot) {
            const candidate = { x: rx, y: ry, width: rw, height: rh, rotation: rot };
            const aabb = getRotatedAABB(candidate);
            for (const p of placed) {
                const pAabb = getRotatedAABB(p);
                if (aabbOverlap(aabb, pAabb)) return true;
            }
            return false;
        }
        function inBoundsRotated(rx, ry, rw, rh, rot) {
            const candidate = { x: rx, y: ry, width: rw, height: rh, rotation: rot };
            const aabb = getRotatedAABB(candidate);
            return aabb.minX >= bounds.minX + margin && aabb.maxX <= bounds.maxX - margin &&
                   aabb.minY >= bounds.minY + margin && aabb.maxY <= bounds.maxY - margin;
        }
        function tooNearDoor(rx, ry, rw, rh) {
            const cx = rx + rw / 2, cy = ry + rh / 2;
            for (const d of doors) {
                if (dist(cx, cy, d.cx, d.cy) < 3 * ft) return true;
            }
            return false;
        }
        function tryPlace(rx, ry, rw, rh, rot) {
            if (!inBoundsRotated(rx, ry, rw, rh, rot)) return false;
            if (rectOverlapsWallRotated({ x: rx, y: ry, width: rw, height: rh, rotation: rot }, true)) return false;
            if (overlapsAny(rx, ry, rw, rh, rot)) return false;
            if (tooNearDoor(rx, ry, rw, rh)) return false;
            return true;
        }
        function findSpot(rw, rh, rot, preferWall, preferAlign) {
            const aabbAtOrigin = getRotatedAABB({ x: 0, y: 0, width: rw, height: rh, rotation: rot });
            const aabbW = aabbAtOrigin.maxX - aabbAtOrigin.minX;
            const aabbH = aabbAtOrigin.maxY - aabbAtOrigin.minY;
            const roomW = bounds.maxX - bounds.minX;
            const roomH = bounds.maxY - bounds.minY;
            const aligns = [preferAlign, ...alignOrder.filter(a => Math.abs(a - preferAlign) > 0.05)];
            const wallOrder = [preferWall, ...['top', 'bottom', 'left', 'right'].filter(w => w !== preferWall)];
            for (const wall of wallOrder) {
                for (const a of aligns) {
                    let x, y;
                    if (wall === 'top') {
                        y = bounds.minY + margin - aabbAtOrigin.minY;
                        x = bounds.minX + margin + a * (roomW - aabbW - 2 * margin) - aabbAtOrigin.minX;
                    } else if (wall === 'bottom') {
                        y = bounds.maxY - margin - aabbAtOrigin.maxY;
                        x = bounds.minX + margin + a * (roomW - aabbW - 2 * margin) - aabbAtOrigin.minX;
                    } else if (wall === 'left') {
                        x = bounds.minX + margin - aabbAtOrigin.minX;
                        y = bounds.minY + margin + a * (roomH - aabbH - 2 * margin) - aabbAtOrigin.minY;
                    } else {
                        x = bounds.maxX - margin - aabbAtOrigin.maxX;
                        y = bounds.minY + margin + a * (roomH - aabbH - 2 * margin) - aabbAtOrigin.minY;
                    }
                    if (tryPlace(x, y, rw, rh, rot)) return { x, y };
                }
            }
            const step = ft * 0.5;
            for (let y = bounds.minY + margin - aabbAtOrigin.minY; y <= bounds.maxY - margin - aabbAtOrigin.maxY; y += step) {
                for (let x = bounds.minX + margin - aabbAtOrigin.minX; x <= bounds.maxX - margin - aabbAtOrigin.maxX; x += step) {
                    if (tryPlace(x, y, rw, rh, rot)) return { x, y };
                }
            }
            return null;
        }

        const bedTypes = new Set(['queen-bed', 'king-bed', 'twin-bed']);
        const doorSides = doors.length ? doors.map(d => nearestWallSide(d.cx, d.cy, bounds)) : [];
        const windowSides = windows.length ? windows.map(w => nearestWallSide(w.cx, w.cy, bounds)) : [];

        function bestBedWall() {
            const sides = ['top', 'bottom', 'left', 'right'];
            const avoid = new Set([...doorSides, ...windowSides]);
            const perp = sides.filter(s => !avoid.has(s) && !doorSides.some(ds => ds === oppositeWall(s)));
            return perp[0] || sides.find(s => !doorSides.includes(s)) || 'top';
        }
        function wallToRotation(wall) {
            return { top: 0, bottom: 180, left: 90, right: 270 }[wall] || 0;
        }
        function bestSeatWall() {
            if (!doorSides.length) return 'bottom';
            return oppositeWall(doorSides[0]);
        }

        const sortedItems = [...items].sort((a, b) => {
            const areaA = a.width * a.height, areaB = b.width * b.height;
            const bedA = bedTypes.has(a.typeId) ? 0 : 1;
            const bedB = bedTypes.has(b.typeId) ? 0 : 1;
            if (bedA !== bedB) return bedA - bedB;
            return areaB - areaA;
        });

        for (const item of sortedItems) {
            let wall, align, rot = item.rotation;
            if (bedTypes.has(item.typeId)) {
                wall = bestBedWall();
                align = 0.5;
                rot = wallToRotation(wall);
            } else if (item.typeId === 'sofa' || item.typeId === 'desk') {
                wall = bestSeatWall();
                align = 0.5;
                rot = wallToRotation(wall);
            } else if (item.typeId === 'nightstand') {
                const bed = placed.find(p => bedTypes.has(p.typeId));
                if (bed) {
                    const leftOfBed = { x: bed.x - item.width - 4, y: bed.y };
                    const rightOfBed = { x: bed.x + bed.width + 4, y: bed.y };
                    if (tryPlace(leftOfBed.x, leftOfBed.y, item.width, item.height, item.rotation)) {
                        item.x = leftOfBed.x; item.y = leftOfBed.y;
                        placed.push(item); continue;
                    }
                    if (tryPlace(rightOfBed.x, rightOfBed.y, item.width, item.height, item.rotation)) {
                        item.x = rightOfBed.x; item.y = rightOfBed.y;
                        placed.push(item); continue;
                    }
                }
                wall = 'left'; align = 0.3;
            } else if (item.typeId === 'tv-stand') {
                const sofa = placed.find(p => p.typeId === 'sofa');
                wall = sofa ? oppositeWall(nearestWallSide(sofa.x + sofa.width / 2, sofa.y + sofa.height / 2, bounds)) : 'top';
                align = sofa ? (sofa.x + sofa.width / 2 - bounds.minX) / (bounds.maxX - bounds.minX) : 0.5;
            } else if (item.typeId === 'dresser' || item.typeId === 'wardrobe' || item.typeId === 'bookshelf') {
                wall = doorSides[0] ? oppositeWall(doorSides[0]) : 'right';
                align = 0.7;
            } else {
                wall = 'right'; align = 0.5;
            }
            const spot = findSpot(item.width, item.height, rot, wall, align);
            if (spot) {
                item.x = spot.x;
                item.y = spot.y;
                item.rotation = rot;
            }
            placed.push(item);
        }

        return items;
    }

    function renderLayoutThumbnail(layoutItems, maxSize) {
        const bounds = getRoomBounds();
        if (!bounds) return '';
        const pad = 10;
        const bw = bounds.maxX - bounds.minX + pad * 2;
        const bh = bounds.maxY - bounds.minY + pad * 2;
        const sc = maxSize / Math.max(bw, bh);
        const w = Math.round(bw * sc);
        const h = Math.round(bh * sc);
        const ox = bounds.minX - pad;
        const oy = bounds.minY - pad;

        let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${ox} ${oy} ${bw} ${bh}" style="background:#fff;border-radius:6px">`;

        for (const wall of walls) {
            svg += `<line x1="${wall.start.x}" y1="${wall.start.y}" x2="${wall.end.x}" y2="${wall.end.y}" stroke="#333" stroke-width="${wallThickness}" stroke-linecap="round"/>`;
            for (const o of (wall.openings || [])) {
                const cx = wall.start.x + o.position * (wall.end.x - wall.start.x);
                const cy = wall.start.y + o.position * (wall.end.y - wall.start.y);
                const dx = wall.end.x - wall.start.x;
                const dy = wall.end.y - wall.start.y;
                const len = Math.sqrt(dx * dx + dy * dy);
                const ux = dx / len, uy = dy / len;
                const hw = o.width / 2;
                if (o.type === 'door') {
                    svg += `<line x1="${cx - ux * hw}" y1="${cy - uy * hw}" x2="${cx + ux * hw}" y2="${cy + uy * hw}" stroke="#fff" stroke-width="${wallThickness + 2}"/>`;
                    svg += `<line x1="${cx - ux * hw}" y1="${cy - uy * hw}" x2="${cx + ux * hw}" y2="${cy + uy * hw}" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4"/>`;
                } else if (o.type === 'window') {
                    svg += `<line x1="${cx - ux * hw}" y1="${cy - uy * hw}" x2="${cx + ux * hw}" y2="${cy + uy * hw}" stroke="#fff" stroke-width="${wallThickness + 2}"/>`;
                    svg += `<line x1="${cx - ux * hw}" y1="${cy - uy * hw}" x2="${cx + ux * hw}" y2="${cy + uy * hw}" stroke="#38bdf8" stroke-width="3"/>`;
                }
            }
        }

        for (const item of layoutItems) {
            const cx = item.x + item.width / 2, cy = item.y + item.height / 2;
            const rw = item.width * OVERLAP_BOUNDS_SCALE, rh = item.height * OVERLAP_BOUNDS_SCALE;
            const fw = item.width, fh = item.height;
            const rot = item.rotation || 0;
            svg += `<g transform="translate(${cx},${cy}) rotate(${rot})">`;
            svg += `<rect x="${-fw/2}" y="${-fh/2}" width="${fw}" height="${fh}" fill="none" stroke="#e11d48" stroke-width="1" stroke-dasharray="3 2"/>`;
            svg += `<g transform="translate(${-rw/2},${-rh/2})">`;
            svg += `<rect x="0" y="0" width="${rw}" height="${rh}" rx="2" fill="#e0e7ff" stroke="#6366f1" stroke-width="1"/>`;
            const fontSize = Math.min(rw * 0.3, rh * 0.4, 10);
            if (fontSize > 4) {
                const label = (item.name || item.typeId || '').split(' ').map(w => w[0] || '').join('').toUpperCase().slice(0, 3);
                svg += `<text x="${rw / 2}" y="${rh / 2}" text-anchor="middle" dominant-baseline="central" font-size="${fontSize}" fill="#4338ca" font-family="sans-serif" font-weight="600">${label}</text>`;
            }
            svg += `</g></g>`;
        }

        svg += `</svg>`;
        return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
    }

    function startFengShuiAnalysis() {
        const hasDrawnContent = furniture.length > 0 || walls.length > 0;

        if (countEnclosedRooms() > 1) {
            showFengShuiMessage('Feng shui analysis only supports single-room layouts. Your plan has multiple enclosed rooms.');
            return;
        }
        
        if (!hasDrawnContent) {
            showFengShuiMessage('Draw walls and add furniture in the layout editor before running feng shui analysis.');
            return;
        }
        
        if (furniture.length === 0) {
            showFengShuiMessage('Add furniture to your floor plan first. Feng shui analysis rearranges furniture — it won\'t modify walls, doors, or windows.');
            return;
        }
        
        showFengShuiPanel();
        const result = analyzeFengShui();
        displayFengShuiResults(result);
    }
    
    function showFengShuiPanel() {
        document.getElementById('feng-shui-panel')?.remove();
        
        const container = document.querySelector('.layout-canvas-container');
        if (!container) return;
        
        const panel = document.createElement('div');
        panel.id = 'feng-shui-panel';
        panel.className = 'feng-shui-panel';
        panel.innerHTML = `
            <div class="feng-shui-header">
                <div class="feng-shui-title">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/></svg>
                    <span>Feng Shui Analysis</span>
                </div>
                <button class="feng-shui-close" id="feng-shui-close-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            <div class="feng-shui-body"></div>
        `;
        
        container.appendChild(panel);
        
        document.getElementById('feng-shui-close-btn').addEventListener('click', () => {
            panel.remove();
        });
    }
    
    function displayFengShuiResults(result) {
        const panel = document.getElementById('feng-shui-panel');
        if (!panel) return;
        panel.classList.add('feng-shui-panel-wide');

        const body = panel.querySelector('.feng-shui-body');
        const scoreColor = result.overallScore >= 7 ? '#22c55e' : result.overallScore >= 4 ? '#f59e0b' : '#ef4444';

        const currentItems = furniture.map(f => ({ id: f.id, typeId: f.typeId, name: f.name, width: f.width, height: f.height, x: f.x, y: f.y, rotation: f.rotation }));
        const currentThumb = renderLayoutThumbnail(currentItems, 280);

        let altItems = null;
        let altScore = null;
        let altThumb = null;
        const currentScore = result.overallScore;
        if (currentScore < 8) {
            const origPositions = furniture.map(f => ({ id: f.id, x: f.x, y: f.y, rotation: f.rotation }));
            let bestScore = currentScore;
            let bestLayout = null;
            // Try multiple alternative layouts and keep the best-scoring one
            const numTries = 16;
            for (let tryIndex = 0; tryIndex < numTries; tryIndex++) {
                const candidate = generateAlternativeLayout(tryIndex);
                if (!candidate) continue;
                for (const ai of candidate) {
                    const f = furniture.find(fi => fi.id === ai.id);
                    if (f) { f.x = ai.x; f.y = ai.y; f.rotation = ai.rotation; }
                }
                const r = analyzeFengShui();
                for (const op of origPositions) {
                    const f = furniture.find(fi => fi.id === op.id);
                    if (f) { f.x = op.x; f.y = op.y; f.rotation = op.rotation; }
                }
                if (r.overallScore > bestScore) {
                    bestScore = r.overallScore;
                    bestLayout = candidate.map(it => ({ ...it }));
                }
            }
            // Only surface a suggested layout if it actually improves the score
            // and reaches at least 8/10 overall
            if (bestLayout && bestScore > currentScore && bestScore >= 8) {
                altItems = bestLayout;
                altScore = bestScore;
                altThumb = renderLayoutThumbnail(altItems, 280);
            }
        }
        const altScoreColor = altScore != null && altScore >= 7 ? '#22c55e' : altScore != null && altScore >= 4 ? '#f59e0b' : '#ef4444';

        let html = `
            <div class="feng-shui-score">
                <div class="score-circle" style="border-color: ${scoreColor}">
                    <span class="score-number" style="color: ${scoreColor}">${result.overallScore}</span>
                    <span class="score-label">/ 10</span>
                </div>
                <p class="score-summary">${result.summary}</p>
            </div>
        `;

        if (altThumb && altScore != null) {
            html += `
                <div class="fs-layouts">
                    <div class="fs-layout-card">
                        <div class="fs-layout-label">Current Layout</div>
                        <img class="fs-layout-img" src="${currentThumb}" alt="Current layout"/>
                        <div class="fs-layout-score" style="color:${scoreColor}">${result.overallScore}/10</div>
                    </div>
                    <div class="fs-layout-card fs-layout-alt">
                        <div class="fs-layout-label">Suggested Layout</div>
                        <img class="fs-layout-img" src="${altThumb}" alt="Suggested layout"/>
                        <div class="fs-layout-score" style="color:${altScoreColor}">${altScore}/10</div>
                    </div>
                </div>
                <div class="fs-apply-wrap">
                    <button type="button" id="feng-shui-apply-btn" class="primary-btn fs-apply-btn">Apply suggested layout</button>
                </div>
            `;
        }

        if (result.suggestions && result.suggestions.length > 0) {
            html += `<div class="feng-shui-suggestions"><div class="fs-suggestions-title">Recommendations</div>`;
            result.suggestions.forEach((suggestion) => {
                const priorityColor = suggestion.priority === 'high' ? '#ef4444' : suggestion.priority === 'medium' ? '#f59e0b' : '#22c55e';
                html += `
                    <div class="feng-shui-suggestion">
                        <div class="suggestion-header">
                            <span class="suggestion-priority" style="background: ${priorityColor}">${suggestion.priority}</span>
                            <span class="suggestion-name">${suggestion.furnitureName || 'Furniture'}</span>
                        </div>
                        <p class="suggestion-principle">${suggestion.principle}</p>
                        <p class="suggestion-desc">${suggestion.description}</p>
                    </div>
                `;
            });
            html += `</div>`;
        } else if (result.overallScore >= 8) {
            html += `<p class="feng-shui-no-suggestions">Your floor plan has good feng shui! No major changes suggested.</p>`;
        } else {
            html += `<p class="feng-shui-no-suggestions">${result.summary}</p>`;
        }

        body.innerHTML = html;

        // Apply button: only enabled when suggested layout scores higher (altItems is set only when altScore > currentScore)
        const applyBtn = body.querySelector('#feng-shui-apply-btn');
        if (applyBtn && altItems) {
            applyBtn.addEventListener('click', () => {
                addToHistory();
                for (const ai of altItems) {
                    const f = furniture.find(fi => fi.id === ai.id);
                    if (f) {
                        f.x = ai.x;
                        f.y = ai.y;
                        f.rotation = ai.rotation;
                    }
                }
                redrawFurniture();
                hasUnsavedChanges = true;
                showFengShuiMessage('Layout applied');
                panel.remove();
            });
        }
    }
    
    
    /** Count enclosed regions (rooms) from the wall graph. Planar formula: rooms = E - V + C. */
    function countEnclosedRooms() {
        if (!walls.length) return 0;
        const vertexIds = new Set();
        const adj = new Map();
        for (const w of walls) {
            const a = w.start?.id ?? w.start;
            const b = w.end?.id ?? w.end;
            if (a == null || b == null) continue;
            vertexIds.add(a);
            vertexIds.add(b);
            if (!adj.has(a)) adj.set(a, new Set());
            if (!adj.has(b)) adj.set(b, new Set());
            adj.get(a).add(b);
            adj.get(b).add(a);
        }
        const V = vertexIds.size;
        const E = walls.length;
        if (E === 0 || V === 0) return 0;
        let C = 0;
        const visited = new Set();
        for (const id of vertexIds) {
            if (visited.has(id)) continue;
            C++;
            const stack = [id];
            visited.add(id);
            while (stack.length) {
                const cur = stack.pop();
                for (const next of (adj.get(cur) || [])) {
                    if (!visited.has(next)) {
                        visited.add(next);
                        stack.push(next);
                    }
                }
            }
        }
        const rooms = E - V + C;
        return Math.max(0, rooms);
    }

    function getRoomBounds() {
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const w of walls) {
            minX = Math.min(minX, w.start.x, w.end.x);
            minY = Math.min(minY, w.start.y, w.end.y);
            maxX = Math.max(maxX, w.start.x, w.end.x);
            maxY = Math.max(maxY, w.start.y, w.end.y);
        }
        if (!isFinite(minX)) return null;
        return { minX, minY, maxX, maxY };
    }

    function rectOverlapsWall(rx, ry, rw, rh) {
        const halfThick = wallThickness / 2 + 2;
        for (const w of walls) {
            const dx = w.end.x - w.start.x;
            const dy = w.end.y - w.start.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            if (len === 0) continue;
            const nx = -dy / len * halfThick;
            const ny = dx / len * halfThick;
            const corners = [
                { x: w.start.x + nx, y: w.start.y + ny },
                { x: w.end.x + nx, y: w.end.y + ny },
                { x: w.end.x - nx, y: w.end.y - ny },
                { x: w.start.x - nx, y: w.start.y - ny }
            ];
            const wx1 = Math.min(corners[0].x, corners[1].x, corners[2].x, corners[3].x);
            const wy1 = Math.min(corners[0].y, corners[1].y, corners[2].y, corners[3].y);
            const wx2 = Math.max(corners[0].x, corners[1].x, corners[2].x, corners[3].x);
            const wy2 = Math.max(corners[0].y, corners[1].y, corners[2].y, corners[3].y);
            if (rx < wx2 && rx + rw > wx1 && ry < wy2 && ry + rh > wy1) {
                return true;
            }
        }
        return false;
    }

    
    function showFengShuiMessage(msg) {
        const container = document.querySelector('.layout-canvas-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = 'feng-shui-toast';
        toast.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <span>${msg}</span>
        `;
        container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
    
    function getState() {
        return saveState();
    }
    
    function loadState(state) {
        if (state) restoreState(state);
    }
    
    // Public API
    return {
        init,
        show,
        hide,
        getState,
        loadState,
        getPreviewDataURL
    };
})();

// Initialize floor plan editor when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    FloorPlanEditor.init();
});

export default FloorPlanEditor;
