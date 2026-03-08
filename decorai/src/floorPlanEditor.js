import feather from 'feather-icons';

// ==========================================
// FLOOR PLAN EDITOR
// ==========================================

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
    let detectedEdges = []; // Store detected edges from reference images
    let showEdgeOverlay = true; // Toggle for edge detection overlay
    
    // Current tool and drawing state
    let currentTool = 'select';
    let isDrawing = false;
    let drawingStartCorner = null;
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
    let snapDistance = 30; // pixels for corner snapping
    let cornerAngleSnapDistance = 25; // pixels: when moving a corner, snap to 90°/180° positions within this
    let snapRelease = 45; // pixels to break free once snapped (hysteresis)
    let axisSnapThreshold = 14; // pixels: snap to horizontal/vertical when within this
    let angleSnapDegrees = 2.5; // degrees: snap to 90°/180° only when very close (connecting lines)
    let currentSnapTarget = null; // { x, y, type } — tracks the active magnetic snap
    let zoom = 1;
    
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
        { id: 'desk', name: 'Desk', category: 'office', width: 5, height: 2.5, color: '#8D6E63' },
        { id: 'office-chair', name: 'Office Chair', category: 'office', width: 2, height: 2, color: '#333' },
        { id: 'filing-cabinet', name: 'Filing Cabinet', category: 'office', width: 1.5, height: 2, color: '#757575' },
    ];
    
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
        document.getElementById('rotate-left-btn')?.addEventListener('click', () => rotateSelectedBy(-90));
        document.getElementById('rotate-right-btn')?.addEventListener('click', () => rotateSelectedBy(90));
        
        // Initialize furniture grid with all categories active
        updateFurnitureGrid();
        
        // Update canvas info
        updateCanvasInfo();
    }
    
    function show() {
        layoutEditorScreen.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        const stateToRestore = typeof window.__decoraiGetLayoutStateToRestore === 'function' ? window.__decoraiGetLayoutStateToRestore() : null;
        if (stateToRestore) restoreState(stateToRestore);
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
    
    function handleBackFromEditor() {
        if (hasUnsavedChanges && !layoutEditorScreen.classList.contains('hidden')) {
            if (!confirm('You have unsaved changes. Leave without exporting?')) {
                return;
            }
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
                    isDragging = true;
                    dragTarget = { type: 'label', element: label };
                    dragOffset = { x: pos.x - label.x, y: pos.y - label.y };
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
            
            // Check if clicking on a wall — but if click is near a corner, select/drag the corner instead
            if (target.classList.contains('wall-line')) {
                const nearbyCorner = findNearbyCorner(pos);
                if (nearbyCorner) {
                    deselectAll();
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
                if (!targetCorner) {
                    const edgeSnap = findNearestEdgePoint(rawPos, snapDistance);
                    if (edgeSnap) snapPos = edgeSnap;
                } else {
                    snapPos = rawPos;
                }
            }
            
            if (drawingStartCorner) {
                if (snapToGrid && !targetCorner) {
                    snapPos = applyDrawingSnaps(drawingStartCorner, snapPos);
                }
                const endCorner = targetCorner || createCorner(snapPos);
                if (endCorner.id !== drawingStartCorner.id) {
                    createWall(drawingStartCorner, endCorner);
                    drawingStartCorner = endCorner;
                }
            } else {
                drawingStartCorner = targetCorner || createCorner(snapPos);
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
            // Use raw position for wall detection so grid snapping doesn't push us away from walls
            const rawPos = getMousePos(e, true);
            
            if (!openingStartPoint) {
                // First click - find the nearest wall using the raw cursor position
                const nearestWall = findNearestWall(rawPos);
                if (nearestWall) {
                    const projected = projectPointOnWall(nearestWall, rawPos);
                    openingStartPoint = { x: projected.x, y: projected.y, wall: nearestWall, projected };
                } else {
                    openingStartPoint = { x: rawPos.x, y: rawPos.y };
                }
                
                showOpeningStartMarker(openingStartPoint);
            } else {
                // Second click - create the door/window
                const endWall = findNearestWall(rawPos);
                
                if (openingStartPoint.wall && endWall && openingStartPoint.wall === endWall) {
                    const endProjected = projectPointOnWall(endWall, rawPos);
                    placeOpeningBetweenPoints(endWall, openingStartPoint.projected, endProjected, currentTool);
                } else {
                    createFreeformOpening(openingStartPoint, rawPos, currentTool);
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
            if (currentTool === 'wall' && drawingStartCorner) {
                const rawPos = getMousePos(e, true);
                let previewEnd = rawPos;
                if (snapToGrid) {
                    const snap = getMagneticSnapPos(rawPos);
                    previewEnd = snap || rawPos;
                    if (!currentSnapTarget) {
                        previewEnd = applyDrawingSnaps(drawingStartCorner, previewEnd);
                    }
                    highlightSnapTarget(rawPos);
                } else {
                    removeWallSnapIndicator();
                    removeMagneticIndicator();
                    cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
                }
                drawWallPreview(drawingStartCorner, previewEnd);
            } else if (currentTool === 'room' && drawingStartCorner) {
                const rawPos = getMousePos(e, true);
                drawRoomPreview(drawingStartCorner, rawPos);
            }
        }
        
        // Handle door/window placement preview
        if ((currentTool === 'door' || currentTool === 'window') && openingStartPoint) {
            const rawPos = getMousePos(e, true);
            const endWall = findNearestWall(rawPos);
            
            if (openingStartPoint.wall && endWall && openingStartPoint.wall === endWall) {
                const endProjected = projectPointOnWall(endWall, rawPos);
                showWallOpeningPreview(endWall, openingStartPoint.projected, endProjected, currentTool);
            } else {
                showFreeformOpeningPreview(openingStartPoint, rawPos, currentTool);
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
        
        // Stop group selection rotation
        if (isRotatingSelection) {
            isRotatingSelection = false;
            selectionRotationCenter = null;
            selectionRotationStart = 0;
            svg.style.cursor = '';
            addToHistory();
            showScaleHandles();
            return;
        }
        
        // Stop rotation
        if (isRotating) {
            isRotating = false;
            rotationTarget = null;
            svg.style.cursor = '';
            addToHistory();
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
        
        // Finalize corner snap if we were dragging a corner
        if (dragTarget && dragTarget.type === 'corner') {
            finalizeCornerSnap(dragTarget.element);
        }
        
        if (isDragging && dragTarget && dragTarget.type === 'selection-bbox') {
            svg.style.cursor = '';
            addToHistory();
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
                addToHistory();
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
                    addToHistory();
                    return;
                }
            }
        }
        
        // No snap occurred, just save history for the move
        addToHistory();
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
            alert('Drop an image file (PNG, JPG) or a DecorAI layout file (.decorai-layout.json)');
            return;
        }
        
        // Show options dialog
        showImageImportDialog(file);
    }
    
    function showImageImportDialog(file) {
        const dialog = document.createElement('div');
        dialog.className = 'image-import-dialog';
        dialog.innerHTML = `
            <div class="image-import-content">
                <h3>Import Image</h3>
                <p>How would you like to import this image?</p>
                <div class="import-options">
                    <button class="import-option recommended" id="import-with-edge-detection">
                        <div class="option-badge">Recommended</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        <span>Trace with Edge Detection</span>
                        <small>Auto-snap to detected edges while drawing walls.</small>
                    </button>
                    <button class="import-option" id="import-basic-trace">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        <span>Trace</span>
                        <small>Simple background layer for manual tracing.</small>
                    </button>
                </div>
                <div class="import-actions">
                    <button class="cancel-btn" id="import-cancel">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        // Event handlers
        document.getElementById('import-with-edge-detection').addEventListener('click', () => {
            dialog.remove();
            addImageAsReference(file, true); // with edge detection
        });
        
        document.getElementById('import-basic-trace').addEventListener('click', () => {
            dialog.remove();
            addImageAsReference(file, false); // without edge detection
        });
        
        document.getElementById('import-cancel').addEventListener('click', () => {
            dialog.remove();
        });
        
        // Close on backdrop click
        dialog.addEventListener('click', (e) => {
            if (e.target === dialog) {
                dialog.remove();
            }
        });
    }
    
    // Vectorize floor plan to native walls using floor plan recognition API
    function addImageAsReference(file, withEdgeDetection = true) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target.result;
            const img = new Image();
            img.onload = () => {
                const wrapper = document.getElementById('layout-canvas-wrapper');
                const canvasWidth = wrapper.clientWidth;
                const canvasHeight = wrapper.clientHeight;
                
                // Scale image to fit canvas while maintaining aspect ratio
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
                
                // Center the image
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
                    opacity: 0.5,
                    hasEdgeDetection: withEdgeDetection
                };
                
                addToHistory();
                referenceImages.push(refImage);
                renderReferenceImage(refImage);
                
                // Run edge detection only if requested
                if (withEdgeDetection) {
                    detectEdges(img, refImage);
                }
                
                // Show reference image controls
                showReferenceImageControls(refImage);
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    }
    
    // Edge detection using Sobel operator on canvas
    function detectEdges(img, refImage) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Use a reasonable resolution for edge detection
        const maxDim = 800;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
            const scale = maxDim / Math.max(w, h);
            w = Math.floor(w * scale);
            h = Math.floor(h * scale);
        }
        
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        
        const imageData = ctx.getImageData(0, 0, w, h);
        const data = imageData.data;
        
        // Convert to grayscale
        const gray = new Uint8Array(w * h);
        for (let i = 0; i < w * h; i++) {
            const idx = i * 4;
            gray[i] = Math.round(0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2]);
        }
        
        // Apply Sobel operator for edge detection
        const edges = new Uint8Array(w * h);
        const sobelX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
        const sobelY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
        
        for (let y = 1; y < h - 1; y++) {
            for (let x = 1; x < w - 1; x++) {
                let gx = 0, gy = 0;
                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        const idx = (y + ky) * w + (x + kx);
                        const ki = (ky + 1) * 3 + (kx + 1);
                        gx += gray[idx] * sobelX[ki];
                        gy += gray[idx] * sobelY[ki];
                    }
                }
                const magnitude = Math.sqrt(gx * gx + gy * gy);
                edges[y * w + x] = magnitude > 50 ? 255 : 0; // Threshold
            }
        }
        
        // Extract line segments using a simple connected component approach
        const scaleX = refImage.width / w;
        const scaleY = refImage.height / h;
        
        // Find edge points and cluster them into lines
        const edgePoints = [];
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (edges[y * w + x] === 255) {
                    edgePoints.push({
                        x: refImage.x + x * scaleX,
                        y: refImage.y + y * scaleY
                    });
                }
            }
        }
        
        // Store edge points for snapping
        detectedEdges = edgePoints;
        refImage.edgePoints = edgePoints;
        
        // Render edge overlay
        renderEdgeOverlay(refImage);
        
        console.log(`Detected ${edgePoints.length} edge points`);
    }
    
    // Render detected edges as an overlay
    function renderEdgeOverlay(refImage) {
        // Remove existing overlay
        const existingOverlay = document.getElementById('edge-overlay-' + refImage.id);
        if (existingOverlay) existingOverlay.remove();
        
        if (!showEdgeOverlay || !refImage.edgePoints || refImage.edgePoints.length === 0) return;
        
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('id', 'edge-overlay-' + refImage.id);
        g.classList.add('edge-overlay');
        
        // Sample points to avoid performance issues (show every Nth point)
        const sampleRate = Math.max(1, Math.floor(refImage.edgePoints.length / 5000));
        
        for (let i = 0; i < refImage.edgePoints.length; i += sampleRate) {
            const p = refImage.edgePoints[i];
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', p.x);
            circle.setAttribute('cy', p.y);
            circle.setAttribute('r', 1.5);
            circle.setAttribute('fill', '#00ff88');
            circle.setAttribute('opacity', '0.6');
            g.appendChild(circle);
        }
        
        // Insert after image layer but before wall layer
        imageLayer.parentNode.insertBefore(g, imageLayer.nextSibling);
    }
    
    // Toggle edge overlay visibility
    function toggleEdgeOverlay() {
        showEdgeOverlay = !showEdgeOverlay;
        referenceImages.forEach(refImage => {
            if (showEdgeOverlay) {
                renderEdgeOverlay(refImage);
            } else {
                const overlay = document.getElementById('edge-overlay-' + refImage.id);
                if (overlay) overlay.remove();
            }
        });
    }
    
    // Find nearest edge point for snapping
    function findNearestEdgePoint(pos, maxDistance = 30) {
        if (!detectedEdges || detectedEdges.length === 0) return null;
        
        let nearestPoint = null;
        let minDist = maxDistance;
        
        for (const edge of detectedEdges) {
            const dist = Math.sqrt((edge.x - pos.x) ** 2 + (edge.y - pos.y) ** 2);
            if (dist < minDist) {
                minDist = dist;
                nearestPoint = { x: edge.x, y: edge.y };
            }
        }
        
        return nearestPoint;
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
        
        const edgeDetectionHtml = refImage.hasEdgeDetection ? `
                <div class="control-row edge-detection-row">
                    <label class="checkbox-label">
                        <input type="checkbox" id="ref-show-edges" ${showEdgeOverlay ? 'checked' : ''}>
                        <span>Show Edge Detection</span>
                    </label>
                </div>
                <div class="control-row snap-info">
                    <small>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        Wall corners will snap to detected edges
                    </small>
                </div>` : '';
        
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
                ${edgeDetectionHtml}
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
        
        // Edge detection toggle (only if edge detection is enabled)
        if (refImage.hasEdgeDetection) {
            document.getElementById('ref-show-edges').addEventListener('change', (e) => {
                toggleEdgeOverlay();
            });
        }
        
        // Center button
        document.getElementById('ref-center-btn').addEventListener('click', () => {
            centerReferenceImage(refImage);
        });
        
        // Delete button
        document.getElementById('ref-delete-btn').addEventListener('click', () => {
            removeReferenceImage(refImage.id);
            controls.remove();
        });
        
        // Make reference image draggable and resizable
        makeReferenceImageDraggable(refImage);
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
            handle.setAttribute('width', 12);
            handle.setAttribute('height', 12);
            
            updateHandlePosition(handle, refImage, pos);
            
            cornersLayer.appendChild(handle);
            
            // Make handle draggable for resize
            setupResizeHandle(handle, refImage, pos);
        });
    }
    
    function updateHandlePosition(handle, refImage, pos) {
        const x = pos.includes('w') ? refImage.x - 6 : refImage.x + refImage.width - 6;
        const y = pos.includes('n') ? refImage.y - 6 : refImage.y + refImage.height - 6;
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
                // Re-run edge detection if enabled
                if (refImage.hasEdgeDetection) {
                    const img = new Image();
                    img.onload = () => {
                        detectEdges(img, refImage);
                    };
                    img.src = refImage.dataUrl;
                }
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
        
        // Update edge detection overlay position
        if (refImage.hasEdgeDetection) {
            const img = new Image();
            img.onload = () => {
                detectEdges(img, refImage);
            };
            img.src = refImage.dataUrl;
        }
    }
    
    function makeReferenceImageDraggable(refImage) {
        const imgEl = imageLayer.querySelector(`[data-ref-image-id="${refImage.id}"]`);
        if (!imgEl) return;
        
        let isDragging = false;
        let startX, startY, origX, origY;
        
        imgEl.addEventListener('mousedown', (e) => {
            if (currentTool !== 'select') return;
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            origX = refImage.x;
            origY = refImage.y;
            
            // Show resize handles on click
            addResizeHandles(refImage);
            
            e.stopPropagation();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            refImage.x = origX + dx;
            refImage.y = origY + dy;
            
            imgEl.setAttribute('x', refImage.x);
            imgEl.setAttribute('y', refImage.y);
            
            // Update resize handles position
            updateAllHandlePositions(refImage);
            
            // Update edge overlay position in real-time
            const edgeOverlay = document.getElementById('edge-overlay-' + refImage.id);
            if (edgeOverlay) {
                edgeOverlay.setAttribute('transform', `translate(${dx}, ${dy})`);
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                // Re-calculate edge positions after drag
                if (refImage.hasEdgeDetection && showEdgeOverlay) {
                    const img = new Image();
                    img.onload = () => {
                        detectEdges(img, refImage);
                    };
                    img.src = refImage.dataUrl;
                }
            }
        });
    }
    
    function removeReferenceImage(id) {
        const refImage = referenceImages.find(img => img.id === id);
        if (refImage && refImage.edgePoints) {
            // Remove edge points from global array
            detectedEdges = detectedEdges.filter(p => !refImage.edgePoints.includes(p));
        }
        
        referenceImages = referenceImages.filter(img => img.id !== id);
        
        const imgEl = imageLayer.querySelector(`[data-ref-image-id="${id}"]`);
        if (imgEl) {
            imgEl.remove();
        }
        
        // Remove edge overlay
        const edgeOverlay = document.getElementById('edge-overlay-' + id);
        if (edgeOverlay) {
            edgeOverlay.remove();
        }
    }
    
    async function convertImageToSVG(file) {
        if (isConvertingImage) {
            alert('Already converting an image. Please wait...');
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
            if (confirm(fallbackMsg)) {
                addImageAsReference(file);
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
        
        if (e.key === 'Escape') {
            cancelDrawing();
            deselectAll();
        } else if (e.key === 'Delete' || e.key === 'Backspace') {
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
    
    // Corner management
    function createCorner(pos) {
        const corner = {
            id: 'corner-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
            x: pos.x,
            y: pos.y,
            walls: []
        };
        addToHistory();
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
                // Corner / edge: distance to the fixed snap point
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
        
        // Edge detection snap
        const edgeSnap = findNearestEdgePoint(rawPos);
        if (edgeSnap) {
            currentSnapTarget = { x: edgeSnap.x, y: edgeSnap.y, type: 'edge' };
            return currentSnapTarget;
        }
        
        currentSnapTarget = null;
        return null;
    }
    
    function highlightSnapTarget(pos) {
        // Remove existing highlights
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        removeWallSnapIndicator();
        removeEdgeSnapIndicator();
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
        } else if (snap.type === 'edge') {
            showEdgeSnapIndicator(snap);
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
    
    function showEdgeSnapIndicator(point) {
        removeEdgeSnapIndicator();
        
        const indicator = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        indicator.setAttribute('cx', point.x);
        indicator.setAttribute('cy', point.y);
        indicator.setAttribute('r', 10);
        indicator.classList.add('edge-snap-indicator');
        indicator.id = 'edge-snap-indicator';
        cornersLayer.appendChild(indicator);
    }
    
    function removeEdgeSnapIndicator() {
        const indicator = document.getElementById('edge-snap-indicator');
        if (indicator) indicator.remove();
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
    function createWall(startCorner, endCorner) {
        addToHistory();
        
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
            
            // Door swing arc
            const arcRadius = length * 0.9;
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arc.setAttribute('d', `M ${-halfLength} 0 A ${arcRadius} ${arcRadius} 0 0 1 ${-halfLength + arcRadius} ${-arcRadius}`);
            arc.setAttribute('stroke', '#8B4513');
            arc.setAttribute('stroke-width', '1');
            arc.setAttribute('fill', 'none');
            arc.setAttribute('stroke-dasharray', '4,2');
            group.appendChild(arc);
            
            // Door panel (the actual door)
            const doorPanel = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            doorPanel.setAttribute('x1', -halfLength);
            doorPanel.setAttribute('y1', 0);
            doorPanel.setAttribute('x2', -halfLength);
            doorPanel.setAttribute('y2', -arcRadius);
            doorPanel.setAttribute('stroke', '#8B4513');
            doorPanel.setAttribute('stroke-width', '3');
            group.appendChild(doorPanel);
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
        
        if (opening.type === 'door') {
            // Draw door opening (gap in wall with swing arc)
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('door-element');
            group.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${wallAngle})`);
            
            // Door frame (white rectangle to cover wall) - drawn in local coordinates
            const frame = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            frame.setAttribute('x', -halfWidth);
            frame.setAttribute('y', -wallThickness / 2 - 1);
            frame.setAttribute('width', opening.width);
            frame.setAttribute('height', wallThickness + 2);
            frame.classList.add('door-frame');
            group.appendChild(frame);
            
            // Door swing arc - starts from left side of opening
            const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const swingRadius = opening.width * 0.9;
            arc.setAttribute('d', `M ${-halfWidth} 0 A ${swingRadius} ${swingRadius} 0 0 0 ${-halfWidth} ${-swingRadius}`);
            arc.classList.add('door-swing');
            group.appendChild(arc);
            
            // Door panel line
            const doorPanel = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            doorPanel.setAttribute('x1', -halfWidth);
            doorPanel.setAttribute('y1', 0);
            doorPanel.setAttribute('x2', -halfWidth);
            doorPanel.setAttribute('y2', -swingRadius);
            doorPanel.setAttribute('stroke', '#8B4513');
            doorPanel.setAttribute('stroke-width', '2');
            group.appendChild(doorPanel);
            
            wallsLayer.appendChild(group);
            
        } else if (opening.type === 'window') {
            // Draw window (light blue rectangle)
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            group.classList.add('window-element');
            group.setAttribute('transform', `translate(${centerX}, ${centerY}) rotate(${wallAngle})`);
            
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
    
    // Generate SVG icon for furniture items in sidebar
    function getFurnitureIcon(item) {
        const size = 44;
        const color = item.color;
        const stroke = '#555';
        
        // Calculate aspect ratio to fit in the icon
        const aspectRatio = item.width / item.height;
        let w, h;
        if (aspectRatio > 1) {
            w = size - 4;
            h = (size - 4) / aspectRatio;
        } else {
            h = size - 4;
            w = (size - 4) * aspectRatio;
        }
        const x = (size - w) / 2;
        const y = (size - h) / 2;
        
        const icons = {
            // Living Room
            'sofa': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y + h * 0.3}" width="${w}" height="${h * 0.7}" rx="3" fill="${color}" stroke="${stroke}"/>
                <rect x="${x}" y="${y + h * 0.15}" width="${w * 0.15}" height="${h * 0.85}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.85}" y="${y + h * 0.15}" width="${w * 0.15}" height="${h * 0.85}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.15}" y="${y}" width="${w * 0.7}" height="${h * 0.35}" rx="2" fill="${color}" stroke="${stroke}"/>
                <line x1="${x + w * 0.4}" y1="${y + h * 0.35}" x2="${x + w * 0.4}" y2="${y + h * 0.7}" stroke="${stroke}" stroke-width="1"/>
                <line x1="${x + w * 0.6}" y1="${y + h * 0.35}" x2="${x + w * 0.6}" y2="${y + h * 0.7}" stroke="${stroke}" stroke-width="1"/>
            </svg>`,
            'armchair': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x + w * 0.15}" y="${y + h * 0.3}" width="${w * 0.7}" height="${h * 0.7}" rx="3" fill="${color}" stroke="${stroke}"/>
                <rect x="${x}" y="${y + h * 0.2}" width="${w * 0.2}" height="${h * 0.7}" rx="3" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.8}" y="${y + h * 0.2}" width="${w * 0.2}" height="${h * 0.7}" rx="3" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.2}" y="${y}" width="${w * 0.6}" height="${h * 0.35}" rx="3" fill="${color}" stroke="${stroke}"/>
            </svg>`,
            'coffee-table': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <circle cx="${x + 4}" cy="${y + h - 2}" r="2" fill="${stroke}"/>
                <circle cx="${x + w - 4}" cy="${y + h - 2}" r="2" fill="${stroke}"/>
                <circle cx="${x + 4}" cy="${y + 2}" r="2" fill="${stroke}"/>
                <circle cx="${x + w - 4}" cy="${y + 2}" r="2" fill="${stroke}"/>
            </svg>`,
            'tv-stand': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.1}" y="${y + h * 0.2}" width="${w * 0.35}" height="${h * 0.6}" rx="1" fill="#222" stroke="${stroke}"/>
                <rect x="${x + w * 0.55}" y="${y + h * 0.2}" width="${w * 0.35}" height="${h * 0.6}" rx="1" fill="#222" stroke="${stroke}"/>
            </svg>`,
            'bookshelf': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}" stroke="${stroke}"/>
                <line x1="${x}" y1="${y + h * 0.33}" x2="${x + w}" y2="${y + h * 0.33}" stroke="${stroke}"/>
                <line x1="${x}" y1="${y + h * 0.66}" x2="${x + w}" y2="${y + h * 0.66}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + 2}" width="4" height="${h * 0.28}" fill="#4a6fa5"/>
                <rect x="${x + 7}" y="${y + 2}" width="3" height="${h * 0.28}" fill="#c0392b"/>
                <rect x="${x + 11}" y="${y + 2}" width="5" height="${h * 0.28}" fill="#27ae60"/>
            </svg>`,
            
            // Bedroom
            'queen-bed': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x}" y="${y}" width="${w}" height="${h * 0.25}" rx="2" fill="#8B7355" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.3}" width="${w * 0.45}" height="${h * 0.25}" rx="2" fill="#fff" stroke="#ccc"/>
                <rect x="${x + w * 0.52}" y="${y + h * 0.3}" width="${w * 0.45}" height="${h * 0.25}" rx="2" fill="#fff" stroke="#ccc"/>
            </svg>`,
            'king-bed': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x}" y="${y}" width="${w}" height="${h * 0.2}" rx="2" fill="#8B7355" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.25}" width="${w * 0.45}" height="${h * 0.2}" rx="2" fill="#fff" stroke="#ccc"/>
                <rect x="${x + w * 0.52}" y="${y + h * 0.25}" width="${w * 0.45}" height="${h * 0.2}" rx="2" fill="#fff" stroke="#ccc"/>
            </svg>`,
            'twin-bed': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x}" y="${y}" width="${w}" height="${h * 0.15}" rx="2" fill="#8B7355" stroke="${stroke}"/>
                <rect x="${x + w * 0.15}" y="${y + h * 0.2}" width="${w * 0.7}" height="${h * 0.2}" rx="2" fill="#fff" stroke="#ccc"/>
            </svg>`,
            'nightstand': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.1}" y="${y + h * 0.15}" width="${w * 0.8}" height="${h * 0.35}" rx="1" fill="#7B5544" stroke="${stroke}"/>
                <circle cx="${x + w/2}" cy="${y + h * 0.32}" r="2" fill="#c9a86c"/>
                <rect x="${x + w * 0.1}" y="${y + h * 0.55}" width="${w * 0.8}" height="${h * 0.35}" rx="1" fill="#7B5544" stroke="${stroke}"/>
                <circle cx="${x + w/2}" cy="${y + h * 0.72}" r="2" fill="#c9a86c"/>
            </svg>`,
            'dresser': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.1}" width="${w/2 - 3}" height="${h * 0.35}" rx="1" fill="#7B4513" stroke="${stroke}"/>
                <rect x="${x + w/2 + 1}" y="${y + h * 0.1}" width="${w/2 - 3}" height="${h * 0.35}" rx="1" fill="#7B4513" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.55}" width="${w/2 - 3}" height="${h * 0.35}" rx="1" fill="#7B4513" stroke="${stroke}"/>
                <rect x="${x + w/2 + 1}" y="${y + h * 0.55}" width="${w/2 - 3}" height="${h * 0.35}" rx="1" fill="#7B4513" stroke="${stroke}"/>
            </svg>`,
            'wardrobe': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <line x1="${x + w/2}" y1="${y + 2}" x2="${x + w/2}" y2="${y + h - 2}" stroke="${stroke}"/>
                <circle cx="${x + w * 0.35}" cy="${y + h/2}" r="2" fill="#c9a86c"/>
                <circle cx="${x + w * 0.65}" cy="${y + h/2}" r="2" fill="#c9a86c"/>
            </svg>`,
            
            // Dining
            'dining-table': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${color}" stroke="${stroke}"/>
                <circle cx="${x + 4}" cy="${y + 4}" r="2" fill="${stroke}"/>
                <circle cx="${x + w - 4}" cy="${y + 4}" r="2" fill="${stroke}"/>
                <circle cx="${x + 4}" cy="${y + h - 4}" r="2" fill="${stroke}"/>
                <circle cx="${x + w - 4}" cy="${y + h - 4}" r="2" fill="${stroke}"/>
            </svg>`,
            'dining-chair': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x + w * 0.1}" y="${y + h * 0.6}" width="${w * 0.8}" height="${h * 0.35}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.15}" y="${y}" width="${w * 0.7}" height="${h * 0.65}" rx="2" fill="${color}" stroke="${stroke}"/>
            </svg>`,
            'buffet': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.2}" width="${w * 0.28}" height="${h * 0.6}" rx="1" fill="#7B4513" stroke="${stroke}"/>
                <rect x="${x + w * 0.36}" y="${y + h * 0.2}" width="${w * 0.28}" height="${h * 0.6}" rx="1" fill="#7B4513" stroke="${stroke}"/>
                <rect x="${x + w * 0.7}" y="${y + h * 0.2}" width="${w * 0.28}" height="${h * 0.6}" rx="1" fill="#7B4513" stroke="${stroke}"/>
            </svg>`,
            
            // Kitchen
            'fridge': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <line x1="${x}" y1="${y + h * 0.35}" x2="${x + w}" y2="${y + h * 0.35}" stroke="${stroke}"/>
                <rect x="${x + w - 5}" y="${y + h * 0.1}" width="2" height="${h * 0.15}" rx="1" fill="${stroke}"/>
                <rect x="${x + w - 5}" y="${y + h * 0.45}" width="2" height="${h * 0.2}" rx="1" fill="${stroke}"/>
            </svg>`,
            'stove': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <circle cx="${x + w * 0.3}" cy="${y + h * 0.35}" r="${Math.min(w, h) * 0.18}" fill="none" stroke="#666" stroke-width="2"/>
                <circle cx="${x + w * 0.7}" cy="${y + h * 0.35}" r="${Math.min(w, h) * 0.18}" fill="none" stroke="#666" stroke-width="2"/>
                <circle cx="${x + w * 0.3}" cy="${y + h * 0.7}" r="${Math.min(w, h) * 0.15}" fill="none" stroke="#666" stroke-width="2"/>
                <circle cx="${x + w * 0.7}" cy="${y + h * 0.7}" r="${Math.min(w, h) * 0.15}" fill="none" stroke="#666" stroke-width="2"/>
            </svg>`,
            'sink-kitchen': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 3}" y="${y + 3}" width="${w * 0.42}" height="${h - 6}" rx="3" fill="#bbb" stroke="${stroke}"/>
                <rect x="${x + w * 0.52}" y="${y + 3}" width="${w * 0.42}" height="${h - 6}" rx="3" fill="#bbb" stroke="${stroke}"/>
                <circle cx="${x + w/2}" cy="${y + 3}" r="2" fill="#888"/>
            </svg>`,
            'dishwasher': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.15}" width="${w - 4}" height="${h * 0.7}" rx="1" fill="#ccc" stroke="${stroke}"/>
                <rect x="${x + w/2 - 4}" y="${y + 3}" width="8" height="3" rx="1" fill="${stroke}"/>
            </svg>`,
            'counter': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" fill="${color}" stroke="${stroke}"/>
                <rect x="${x}" y="${y}" width="${w}" height="${h * 0.3}" fill="#888" stroke="${stroke}"/>
            </svg>`,
            
            // Bathroom
            'toilet': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <ellipse cx="${x + w/2}" cy="${y + h * 0.6}" rx="${w * 0.45}" ry="${h * 0.35}" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.15}" y="${y}" width="${w * 0.7}" height="${h * 0.35}" rx="2" fill="${color}" stroke="${stroke}"/>
                <ellipse cx="${x + w/2}" cy="${y + h * 0.6}" rx="${w * 0.3}" ry="${h * 0.22}" fill="#eee" stroke="#ccc"/>
            </svg>`,
            'bathtub': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + 2}" width="${w - 4}" height="${h - 4}" rx="3" fill="#e3f2fd" stroke="#90caf9"/>
                <circle cx="${x + w/2}" cy="${y + h - 6}" r="3" fill="#90caf9"/>
            </svg>`,
            'shower': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + 2}" width="${w - 4}" height="${h - 4}" rx="1" fill="#bbdefb" stroke="#90caf9"/>
                <circle cx="${x + w/2}" cy="${y + h * 0.3}" r="4" fill="none" stroke="#64b5f6" stroke-width="1.5"/>
                <line x1="${x + w/2}" y1="${y + h * 0.35}" x2="${x + w/2}" y2="${y + h * 0.5}" stroke="#64b5f6" stroke-width="1.5" stroke-dasharray="2,2"/>
            </svg>`,
            'sink-bath': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <ellipse cx="${x + w/2}" cy="${y + h/2}" rx="${w * 0.45}" ry="${h * 0.4}" fill="${color}" stroke="${stroke}"/>
                <ellipse cx="${x + w/2}" cy="${y + h/2}" rx="${w * 0.32}" ry="${h * 0.28}" fill="#eee" stroke="#ccc"/>
                <circle cx="${x + w/2}" cy="${y + h * 0.65}" r="2" fill="#888"/>
            </svg>`,
            
            // Office
            'desk': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.6}" width="${w * 0.35}" height="${h * 0.35}" rx="1" fill="#755647" stroke="${stroke}"/>
                <circle cx="${x + w * 0.19}" cy="${y + h * 0.75}" r="2" fill="#c9a86c"/>
            </svg>`,
            'office-chair': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <ellipse cx="${x + w/2}" cy="${y + h * 0.85}" rx="${w * 0.35}" ry="${h * 0.1}" fill="#555" stroke="${stroke}"/>
                <rect x="${x + w * 0.4}" y="${y + h * 0.55}" width="${w * 0.2}" height="${h * 0.3}" fill="#444" stroke="${stroke}"/>
                <rect x="${x + w * 0.15}" y="${y + h * 0.4}" width="${w * 0.7}" height="${h * 0.2}" rx="3" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + w * 0.2}" y="${y}" width="${w * 0.6}" height="${h * 0.45}" rx="3" fill="${color}" stroke="${stroke}"/>
            </svg>`,
            'filing-cabinet': `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
                <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" fill="${color}" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.05}" width="${w - 4}" height="${h * 0.28}" rx="1" fill="#666" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.36}" width="${w - 4}" height="${h * 0.28}" rx="1" fill="#666" stroke="${stroke}"/>
                <rect x="${x + 2}" y="${y + h * 0.67}" width="${w - 4}" height="${h * 0.28}" rx="1" fill="#666" stroke="${stroke}"/>
                <rect x="${x + w/2 - 3}" y="${y + h * 0.15}" width="6" height="2" rx="1" fill="#aaa"/>
                <rect x="${x + w/2 - 3}" y="${y + h * 0.46}" width="6" height="2" rx="1" fill="#aaa"/>
                <rect x="${x + w/2 - 3}" y="${y + h * 0.77}" width="6" height="2" rx="1" fill="#aaa"/>
            </svg>`,
        };
        
        // Return the specific icon or a default rectangle
        return icons[item.id] || `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
            <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${color}" stroke="${stroke}"/>
        </svg>`;
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
    
    function addFurniture(typeId, x, y) {
        const template = furnitureLibrary.find(f => f.id === typeId);
        if (!template) return;
        
        const item = {
            id: 'furniture-' + Date.now(),
            typeId: typeId,
            name: template.name,
            x: x,
            y: y,
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
    
    function renderFurniture(item) {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.classList.add('furniture-element');
        group.dataset.furnitureId = item.id;
        group.setAttribute('transform', `translate(${item.x}, ${item.y}) rotate(${item.rotation}, ${item.width / 2}, ${item.height / 2})`);
        
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', item.width);
        rect.setAttribute('height', item.height);
        rect.setAttribute('fill', item.color);
        rect.setAttribute('rx', 4);
        rect.classList.add('furniture-body');
        group.appendChild(rect);
        
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', item.width / 2);
        label.setAttribute('y', item.height / 2);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('dominant-baseline', 'middle');
        label.setAttribute('font-size', '11');
        label.setAttribute('fill', '#333');
        label.textContent = item.name;
        group.appendChild(label);
        
        furnitureLayer.appendChild(group);
    }
    
    function moveFurniture(item, x, y) {
        if (snapToGrid) {
            x = Math.round(x / gridSize) * gridSize;
            y = Math.round(y / gridSize) * gridSize;
        }
        
        item.x = x;
        item.y = y;
        
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
        }
        
        // Show scale handles for scalable elements
        if (type === 'wall' || type === 'label' || type === 'imported') {
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
        wallsLayer.querySelectorAll('.imported-svg-element.selected, .imported-svg-group.selected').forEach(el => el.classList.remove('selected'));
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
        }
        for (const item of furniture) {
            selectedElements.push({ element: item, type: 'furniture' });
        }
        for (const label of labels) {
            selectedElements.push({ element: label, type: 'label' });
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
        btn.title = 'Detach selected walls from connected walls';
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
        const snap = { corners: {}, furniture: {}, labels: {} };
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
            }
        }
        
        // Update selectedElement for single selection compatibility
        if (selectedElements.length === 1) {
            selectedElement = selectedElements[0];
            if (selectedElement.type === 'furniture') {
                addRotationHandle(selectedElement.element);
                showProperties(selectedElement.element);
            }
        } else if (selectedElements.length > 1) {
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
            }
        }
        
        // Redraw walls and corners if any were moved
        if (movedCornerIds.size > 0) {
            redrawAll();
        }
    }
    
    function isElementSelected(element, type) {
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
        document.getElementById('prop-width').value = (item.width / scale).toFixed(1);
        document.getElementById('prop-height').value = (item.height / scale).toFixed(1);
        document.getElementById('prop-rotation').value = item.rotation;
    }
    
    function hideProperties() {
        document.getElementById('properties-panel')?.classList.add('hidden');
    }
    
    function updateSelectedProperties() {
        if (!selectedElement || selectedElement.type !== 'furniture') return;
        
        const item = selectedElement.element;
        item.width = parseFloat(document.getElementById('prop-width').value) * scale;
        item.height = parseFloat(document.getElementById('prop-height').value) * scale;
        item.rotation = parseInt(document.getElementById('prop-rotation').value);
        
        redrawFurniture();
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
            } else if (sel.type === 'imported') {
                const imported = sel.element;
                if (imported.element && imported.element.parentNode) {
                    imported.element.parentNode.removeChild(imported.element);
                }
                importedElements = importedElements.filter(i => i.id !== imported.id);
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
    
    function clearAll() {
        if (!confirm('Clear the entire floor plan?')) return;
        
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
        const wallData = walls.map(w => ({
            id: w.id,
            start: { x: w.start.x, y: w.start.y },
            end: { x: w.end.x, y: w.end.y },
            lengthFeet: Math.sqrt((w.end.x - w.start.x) ** 2 + (w.end.y - w.start.y) ** 2) / scale,
            openings: (w.openings || []).map(o => ({
                type: o.type,
                position: o.position,
                width: o.width
            }))
        }));
        
        const furnitureData = furniture.map(f => ({
            id: f.id,
            typeId: f.typeId,
            name: f.name,
            category: f.category,
            x: f.x,
            y: f.y,
            width: f.width,
            height: f.height,
            widthFeet: f.width / scale,
            heightFeet: f.height / scale,
            rotation: f.rotation || 0
        }));
        
        const doorData = freeformOpenings.filter(o => o.type === 'door').map(d => ({
            type: 'door',
            x: d.x, y: d.y,
            width: d.width, height: d.height
        }));
        
        const windowData = freeformOpenings.filter(o => o.type === 'window').map(w => ({
            type: 'window',
            x: w.x, y: w.y,
            width: w.width, height: w.height
        }));
        
        // Calculate room bounds
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        for (const w of walls) {
            minX = Math.min(minX, w.start.x, w.end.x);
            minY = Math.min(minY, w.start.y, w.end.y);
            maxX = Math.max(maxX, w.start.x, w.end.x);
            maxY = Math.max(maxY, w.start.y, w.end.y);
        }
        
        return {
            scale,
            unit,
            roomBounds: walls.length > 0 ? {
                x: minX, y: minY,
                width: maxX - minX, height: maxY - minY,
                widthFeet: (maxX - minX) / scale,
                heightFeet: (maxY - minY) / scale
            } : null,
            walls: wallData,
            doors: doorData,
            windows: windowData,
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
    
    async function startFengShuiAnalysis() {
        const hasImages = referenceImages.length > 0;
        const hasDrawnContent = furniture.length > 0 || walls.length > 0;
        
        if (!hasImages && !hasDrawnContent) {
            showFengShuiMessage('Add a floor plan image or draw some walls and furniture before running feng shui analysis.');
            return;
        }
        
        if (!hasImages && furniture.length === 0) {
            showFengShuiMessage('Add furniture to your floor plan first. Feng shui analysis rearranges furniture — it won\'t modify walls, doors, or windows.');
            return;
        }
        
        showFengShuiPanel();
        const panel = document.getElementById('feng-shui-panel');
        if (panel) {
            panel.querySelector('.feng-shui-body').innerHTML = `
                <div class="feng-shui-loading">
                    <div class="feng-shui-spinner"></div>
                    <p>Analyzing your floor plan...</p>
                    <small>${hasImages ? 'Analyzing image and generating improved layout — this may take a minute...' : 'Evaluating energy flow, furniture placement, and feng shui principles'}</small>
                </div>
            `;
        }
        
        try {
            if (hasImages) {
                const refImage = referenceImages[0];
                const imageBase64 = refImage.dataUrl;
                
                const response = await fetch('/api/feng-shui-image', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ imageBase64 })
                });
                
                if (!response.ok) {
                    const err = await response.json().catch(() => ({}));
                    throw new Error(err.error || 'Image analysis failed');
                }
                
                const result = await response.json();
                displayImageFengShuiResults(result, imageBase64);
            } else {
                const floorPlanData = extractFloorPlanData();
                
                const response = await fetch('/api/feng-shui', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ floorPlanData })
                });
                
                if (!response.ok) {
                    const err = await response.json().catch(() => ({}));
                    throw new Error(err.error || 'Analysis failed');
                }
                
                const result = await response.json();
                displayFengShuiResults(result);
            }
        } catch (err) {
            console.error('Feng shui analysis error:', err);
            const panel = document.getElementById('feng-shui-panel');
            if (panel) {
                panel.querySelector('.feng-shui-body').innerHTML = `
                    <div class="feng-shui-error">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                        <p>${err.message}</p>
                        <button class="secondary-btn" onclick="this.closest('.feng-shui-body').innerHTML=''; document.getElementById('feng-shui-panel')?.remove();">Close</button>
                    </div>
                `;
            }
        }
    }
    
    function showFengShuiPanel() {
        document.getElementById('feng-shui-panel')?.remove();
        removeFengShuiZones();
        
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
            removeFengShuiZones();
        });
    }
    
    function displayFengShuiResults(result) {
        const panel = document.getElementById('feng-shui-panel');
        if (!panel) return;
        
        const body = panel.querySelector('.feng-shui-body');
        
        // Score display
        const scoreColor = result.overallScore >= 7 ? '#22c55e' : result.overallScore >= 4 ? '#f59e0b' : '#ef4444';
        
        let html = `
            <div class="feng-shui-score">
                <div class="score-circle" style="border-color: ${scoreColor}">
                    <span class="score-number" style="color: ${scoreColor}">${result.overallScore}</span>
                    <span class="score-label">/ 10</span>
                </div>
                <p class="score-summary">${result.summary}</p>
            </div>
        `;
        
        if (result.suggestions && result.suggestions.length > 0) {
            html += `<div class="feng-shui-suggestions">`;
            
            // Apply All button
            html += `
                <button class="feng-shui-apply-all" id="feng-shui-apply-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Apply All Suggestions
                </button>
            `;
            
            result.suggestions.forEach((suggestion, i) => {
                const priorityColor = suggestion.priority === 'high' ? '#ef4444' : suggestion.priority === 'medium' ? '#f59e0b' : '#22c55e';
                const matchedFurniture = furniture.find(f => f.id === suggestion.furnitureId);
                
                html += `
                    <div class="feng-shui-suggestion" data-index="${i}">
                        <div class="suggestion-header">
                            <span class="suggestion-priority" style="background: ${priorityColor}">${suggestion.priority}</span>
                            <span class="suggestion-name">${suggestion.furnitureName || (matchedFurniture?.name) || 'Furniture'}</span>
                        </div>
                        <p class="suggestion-principle">${suggestion.principle}</p>
                        <p class="suggestion-desc">${suggestion.description}</p>
                        <div class="suggestion-actions">
                            <button class="feng-shui-show-btn" data-index="${i}">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/></svg>
                                Show Zone
                            </button>
                            ${matchedFurniture ? `<button class="feng-shui-apply-btn" data-index="${i}">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                                Apply
                            </button>` : `<span class="suggestion-no-match">Furniture not found</span>`}
                        </div>
                    </div>
                `;
            });
            
            html += `</div>`;
        } else {
            html += `<p class="feng-shui-no-suggestions">Your floor plan has good feng shui! No major changes suggested.</p>`;
        }
        
        body.innerHTML = html;
        
        // Store suggestions for later use
        panel.dataset.suggestions = JSON.stringify(result.suggestions || []);
        
        // Hook up buttons
        body.querySelectorAll('.feng-shui-show-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                const suggestions = JSON.parse(panel.dataset.suggestions);
                showFengShuiZone(suggestions[idx], idx);
            });
        });
        
        body.querySelectorAll('.feng-shui-apply-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.index);
                const suggestions = JSON.parse(panel.dataset.suggestions);
                applyFengShuiSuggestion(suggestions[idx]);
                btn.textContent = 'Applied';
                btn.disabled = true;
                btn.classList.add('applied');
            });
        });
        
        document.getElementById('feng-shui-apply-all')?.addEventListener('click', () => {
            const suggestions = JSON.parse(panel.dataset.suggestions);
            addToHistory();
            suggestions.forEach(s => applyFengShuiSuggestion(s, true));
            redrawAll();
            removeFengShuiZones();
            body.querySelectorAll('.feng-shui-apply-btn').forEach(b => {
                b.textContent = 'Applied';
                b.disabled = true;
                b.classList.add('applied');
            });
        });
    }
    
    function displayImageFengShuiResults(result, originalImageBase64) {
        const panel = document.getElementById('feng-shui-panel');
        if (!panel) return;
        
        panel.classList.add('feng-shui-panel-wide');
        const body = panel.querySelector('.feng-shui-body');
        const scoreColor = result.overallScore >= 7 ? '#22c55e' : result.overallScore >= 4 ? '#f59e0b' : '#ef4444';
        
        let html = `
            <div class="feng-shui-score">
                <div class="score-circle" style="border-color: ${scoreColor}">
                    <span class="score-number" style="color: ${scoreColor}">${result.overallScore}</span>
                    <span class="score-label">/ 10</span>
                </div>
                <p class="score-summary">${result.summary}</p>
            </div>
        `;
        
        if (result.newImageBase64) {
            html += `
                <div class="feng-shui-image-comparison">
                    <div class="comparison-tabs">
                        <button class="comparison-tab active" data-view="after">Improved Layout</button>
                        <button class="comparison-tab" data-view="before">Original</button>
                        <button class="comparison-tab" data-view="side-by-side">Side by Side</button>
                    </div>
                    <div class="comparison-view comparison-after active" data-view="after">
                        <img src="${result.newImageBase64}" alt="Improved feng shui layout" />
                    </div>
                    <div class="comparison-view comparison-before" data-view="before">
                        <img src="${originalImageBase64}" alt="Original layout" />
                    </div>
                    <div class="comparison-view comparison-side-by-side" data-view="side-by-side">
                        <div class="side-by-side-container">
                            <div class="side-by-side-item">
                                <span class="side-by-side-label">Before</span>
                                <img src="${originalImageBase64}" alt="Original layout" />
                            </div>
                            <div class="side-by-side-item">
                                <span class="side-by-side-label">After</span>
                                <img src="${result.newImageBase64}" alt="Improved layout" />
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else {
            html += `<p class="feng-shui-image-note">Could not generate an improved layout image. See suggestions below.</p>`;
        }
        
        if (result.suggestions && result.suggestions.length > 0) {
            html += `<div class="feng-shui-suggestions feng-shui-image-suggestions">`;
            html += `<h4 class="suggestions-heading">Suggestions</h4>`;
            
            result.suggestions.forEach((suggestion, i) => {
                const priorityColor = suggestion.priority === 'high' ? '#ef4444' : suggestion.priority === 'medium' ? '#f59e0b' : '#22c55e';
                
                html += `
                    <div class="feng-shui-suggestion">
                        <div class="suggestion-header">
                            <span class="suggestion-priority" style="background: ${priorityColor}">${suggestion.priority}</span>
                            <span class="suggestion-name">${suggestion.furnitureName || 'Furniture'}</span>
                        </div>
                        <p class="suggestion-principle">${suggestion.principle}</p>
                        <p class="suggestion-desc">${suggestion.description}</p>
                        ${suggestion.currentPosition ? `<p class="suggestion-position"><strong>Current:</strong> ${suggestion.currentPosition}</p>` : ''}
                        ${suggestion.suggestedPosition ? `<p class="suggestion-position"><strong>Move to:</strong> ${suggestion.suggestedPosition}</p>` : ''}
                    </div>
                `;
            });
            
            html += `</div>`;
        }
        
        body.innerHTML = html;
        
        // Hook up comparison tabs
        body.querySelectorAll('.comparison-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const view = tab.dataset.view;
                body.querySelectorAll('.comparison-tab').forEach(t => t.classList.remove('active'));
                body.querySelectorAll('.comparison-view').forEach(v => v.classList.remove('active'));
                tab.classList.add('active');
                body.querySelector(`.comparison-view[data-view="${view}"]`)?.classList.add('active');
            });
        });
    }
    
    function showFengShuiZone(suggestion, index) {
        removeFengShuiZones();
        
        if (!suggestion.zoneX && !suggestion.newX) return;
        
        const floorPlanGroup = document.getElementById('floor-plan-group');
        if (!floorPlanGroup) return;
        
        const zoneGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        zoneGroup.classList.add('feng-shui-zone');
        
        const cx = suggestion.zoneX || suggestion.newX;
        const cy = suggestion.zoneY || suggestion.newY;
        const zw = suggestion.zoneWidth || 150;
        const zh = suggestion.zoneHeight || 150;
        
        // Highlighted zone
        const zone = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        zone.setAttribute('x', cx - zw / 2);
        zone.setAttribute('y', cy - zh / 2);
        zone.setAttribute('width', zw);
        zone.setAttribute('height', zh);
        zone.setAttribute('rx', 8);
        zone.setAttribute('fill', 'rgba(34, 197, 94, 0.15)');
        zone.setAttribute('stroke', '#22c55e');
        zone.setAttribute('stroke-width', 2 / zoom);
        zone.setAttribute('stroke-dasharray', `${6 / zoom}`);
        zoneGroup.appendChild(zone);
        
        // Ghost furniture at suggested position
        const matchedFurniture = furniture.find(f => f.id === suggestion.furnitureId);
        if (matchedFurniture && suggestion.newX !== undefined) {
            const ghost = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            ghost.setAttribute('x', suggestion.newX);
            ghost.setAttribute('y', suggestion.newY);
            ghost.setAttribute('width', matchedFurniture.width);
            ghost.setAttribute('height', matchedFurniture.height);
            ghost.setAttribute('rx', 3);
            ghost.setAttribute('fill', 'rgba(34, 197, 94, 0.25)');
            ghost.setAttribute('stroke', '#22c55e');
            ghost.setAttribute('stroke-width', 2 / zoom);
            
            if (suggestion.newRotation !== undefined && suggestion.newRotation !== (matchedFurniture.rotation || 0)) {
                const rcx = suggestion.newX + matchedFurniture.width / 2;
                const rcy = suggestion.newY + matchedFurniture.height / 2;
                ghost.setAttribute('transform', `rotate(${suggestion.newRotation}, ${rcx}, ${rcy})`);
            }
            zoneGroup.appendChild(ghost);
            
            // Arrow from current to suggested position
            const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            arrow.setAttribute('x1', matchedFurniture.x + matchedFurniture.width / 2);
            arrow.setAttribute('y1', matchedFurniture.y + matchedFurniture.height / 2);
            arrow.setAttribute('x2', suggestion.newX + matchedFurniture.width / 2);
            arrow.setAttribute('y2', suggestion.newY + matchedFurniture.height / 2);
            arrow.setAttribute('stroke', '#22c55e');
            arrow.setAttribute('stroke-width', 2 / zoom);
            arrow.setAttribute('stroke-dasharray', `${4 / zoom}`);
            arrow.setAttribute('marker-end', 'url(#feng-shui-arrow)');
            zoneGroup.appendChild(arrow);
        }
        
        // Label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', cx);
        label.setAttribute('y', cy - zh / 2 - 8 / zoom);
        label.setAttribute('text-anchor', 'middle');
        label.setAttribute('font-size', 12 / zoom);
        label.setAttribute('fill', '#22c55e');
        label.setAttribute('font-weight', '600');
        label.textContent = suggestion.principle || 'Suggested zone';
        zoneGroup.appendChild(label);
        
        // Add arrow marker if not present
        let defs = svg.querySelector('defs');
        if (!defs.querySelector('#feng-shui-arrow')) {
            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
            marker.setAttribute('id', 'feng-shui-arrow');
            marker.setAttribute('markerWidth', '10');
            marker.setAttribute('markerHeight', '7');
            marker.setAttribute('refX', '10');
            marker.setAttribute('refY', '3.5');
            marker.setAttribute('orient', 'auto');
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
            path.setAttribute('points', '0 0, 10 3.5, 0 7');
            path.setAttribute('fill', '#22c55e');
            marker.appendChild(path);
            defs.appendChild(marker);
        }
        
        floorPlanGroup.appendChild(zoneGroup);
    }
    
    function removeFengShuiZones() {
        document.querySelectorAll('.feng-shui-zone').forEach(el => el.remove());
    }
    
    function applyFengShuiSuggestion(suggestion, skipHistory) {
        const item = furniture.find(f => f.id === suggestion.furnitureId);
        if (!item) return;
        
        if (!skipHistory) addToHistory();
        
        if (suggestion.newX !== undefined) item.x = suggestion.newX;
        if (suggestion.newY !== undefined) item.y = suggestion.newY;
        if (suggestion.newRotation !== undefined) item.rotation = suggestion.newRotation;
        
        if (!skipHistory) {
            redrawAll();
            removeFengShuiZones();
        }
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
        loadState
    };
})();

// Initialize floor plan editor when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    FloorPlanEditor.init();
});

export default FloorPlanEditor;
