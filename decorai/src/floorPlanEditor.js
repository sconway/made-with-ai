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
    let isConvertingImage = false;
    
    // Current tool and drawing state
    let currentTool = 'select';
    let isDrawing = false;
    let drawingStartCorner = null;
    let previewLine = null;
    let selectedElement = null;
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };
    let dragTarget = null;
    
    // Door/window placement state
    let openingStartPoint = null;
    let openingPreview = null;
    
    // Settings
    let scale = 20; // pixels per foot
    let unit = 'ft';
    let wallThickness = 8;
    let showGrid = true;
    let snapToGrid = true;
    let showDimensions = true;
    let gridSize = 10; // pixels
    let snapDistance = 15; // pixels for corner snapping
    let zoom = 1;
    
    // Panning state
    let isPanning = false;
    let panStart = { x: 0, y: 0 };
    let panOffset = { x: 0, y: 0 };
    
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
        
        // Back button
        document.getElementById('layout-editor-back-btn')?.addEventListener('click', hide);
        
        // Tool buttons
        document.querySelectorAll('.floor-tool').forEach(btn => {
            btn.addEventListener('click', () => selectTool(btn.dataset.tool));
        });
        
        // Action buttons
        document.getElementById('layout-undo-btn')?.addEventListener('click', undo);
        document.getElementById('layout-redo-btn')?.addEventListener('click', redo);
        document.getElementById('layout-clear-btn')?.addEventListener('click', clearAll);
        
        // Export
        document.getElementById('layout-export-btn')?.addEventListener('click', toggleExportMenu);
        document.getElementById('export-png-btn')?.addEventListener('click', () => exportAs('png'));
        document.getElementById('export-svg-btn')?.addEventListener('click', () => exportAs('svg'));
        
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
        });
        
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
        
        // Scroll wheel zoom on canvas
        canvasWrapper?.addEventListener('wheel', handleWheelZoom, { passive: false });
        svg.addEventListener('mouseleave', handleMouseUp);
        
        // Touch support
        svg.addEventListener('touchstart', handleTouchStart, { passive: false });
        svg.addEventListener('touchmove', handleTouchMove, { passive: false });
        svg.addEventListener('touchend', handleTouchEnd);
        
        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyDown);
        
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
        
        // Initialize furniture grid with all categories active
        updateFurnitureGrid();
        
        // Update canvas info
        updateCanvasInfo();
    }
    
    function show() {
        layoutEditorScreen.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        feather.replace();
        updateCanvasInfo();
    }
    
    function hide() {
        layoutEditorScreen.classList.add('hidden');
        document.body.style.overflow = '';
    }
    
    function selectTool(tool) {
        // Reset opening placement state when switching tools
        openingStartPoint = null;
        removeOpeningPreview();
        
        currentTool = tool;
        document.querySelectorAll('.floor-tool').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tool === tool);
        });
        
        // Update cursor
        const wrapper = document.getElementById('layout-canvas-wrapper');
        if (tool === 'select') {
            wrapper.style.cursor = 'default';
        } else {
            wrapper.style.cursor = 'crosshair';
        }
        
        // Cancel any drawing in progress
        cancelDrawing();
        deselectAll();
    }
    
    function getMousePos(e) {
        const rect = svg.getBoundingClientRect();
        // Account for pan offset and zoom
        let x = (e.clientX - rect.left - panOffset.x) / zoom;
        let y = (e.clientY - rect.top - panOffset.y) / zoom;
        
        if (snapToGrid) {
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
        
        const pos = getMousePos(e);
        const target = e.target;
        
        if (currentTool === 'select') {
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
                    selectElement(item, 'furniture');
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
                    selectElement(label, 'label');
                    isDragging = true;
                    dragTarget = { type: 'label', element: label };
                    dragOffset = { x: pos.x - label.x, y: pos.y - label.y };
                    return;
                }
            }
            
            // Check if clicking on an imported SVG element
            // First check if the target itself is an imported element
            if (target.classList.contains('imported-svg-element')) {
                const importedId = target.dataset.importedId;
                const imported = importedElements.find(i => i.id === importedId);
                if (imported) {
                    selectElement(imported, 'imported');
                    return;
                }
            }
            
            // Check if clicking inside a group - find the specific child element
            const parentGroup = target.closest('.imported-svg-group');
            if (parentGroup) {
                // The target is the actual element clicked, not the group
                // We need to track and select this specific element
                let clickedElement = target;
                
                // If it's a valid SVG element (path, rect, line, etc.)
                const validTags = ['path', 'line', 'rect', 'polyline', 'polygon', 'circle', 'ellipse'];
                if (validTags.includes(clickedElement.tagName.toLowerCase())) {
                    // Check if this element is already tracked
                    let existingId = clickedElement.dataset.importedId;
                    let imported;
                    
                    if (existingId) {
                        imported = importedElements.find(i => i.id === existingId);
                    }
                    
                    if (!imported) {
                        // Track this element for future selection/deletion
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
                    
                    selectElement(imported, 'imported');
                    return;
                }
            }
            
            // Clicked on empty space
            deselectAll();
            
        } else if (currentTool === 'wall') {
            // Start or continue drawing walls
            const existingCorner = findNearbyCorner(pos);
            
            if (drawingStartCorner) {
                // Complete the wall segment
                const endCorner = existingCorner || createCorner(pos);
                if (endCorner.id !== drawingStartCorner.id) {
                    createWall(drawingStartCorner, endCorner);
                    drawingStartCorner = endCorner; // Continue from this corner
                }
            } else {
                // Start new wall
                drawingStartCorner = existingCorner || createCorner(pos);
            }
            isDrawing = true;
            
        } else if (currentTool === 'room') {
            // Start drawing room rectangle
            isDrawing = true;
            drawingStartCorner = { x: pos.x, y: pos.y };
            
        } else if (currentTool === 'door' || currentTool === 'window') {
            // Door/window works like wall tool: click two points anywhere
            if (!openingStartPoint) {
                // First click - set start point
                openingStartPoint = { x: pos.x, y: pos.y };
                
                // Check if starting on a wall
                const nearestWall = findNearestWall(pos);
                if (nearestWall) {
                    openingStartPoint.wall = nearestWall;
                    openingStartPoint.projected = projectPointOnWall(nearestWall, pos);
                }
                
                // Show start marker
                showOpeningStartMarker(openingStartPoint);
            } else {
                // Second click - create the door/window
                const endWall = findNearestWall(pos);
                
                // Check if both points are on the same wall
                if (openingStartPoint.wall && endWall && openingStartPoint.wall === endWall) {
                    // Place as a wall-attached opening
                    const endProjected = projectPointOnWall(endWall, pos);
                    placeOpeningBetweenPoints(endWall, openingStartPoint.projected, endProjected, currentTool);
                } else {
                    // Create as freeform opening (not on a wall)
                    createFreeformOpening(openingStartPoint, pos, currentTool);
                }
                
                // Reset state
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
        
        const pos = getMousePos(e);
        
        // Update mouse coordinates display
        const coordsDisplay = document.getElementById('mouse-coords');
        if (coordsDisplay) {
            const realX = pos.x / scale;
            const realY = pos.y / scale;
            coordsDisplay.textContent = formatDimension(realX) + ' × ' + formatDimension(realY);
        }
        
        // Handle dragging
        if (isDragging && dragTarget) {
            if (dragTarget.type === 'corner') {
                moveCorner(dragTarget.element, pos);
            } else if (dragTarget.type === 'furniture') {
                moveFurniture(dragTarget.element, pos.x - dragOffset.x, pos.y - dragOffset.y);
            } else if (dragTarget.type === 'label') {
                moveLabel(dragTarget.element, pos.x - dragOffset.x, pos.y - dragOffset.y);
            }
            return;
        }
        
        // Handle drawing preview
        if (isDrawing) {
            if (currentTool === 'wall' && drawingStartCorner) {
                drawWallPreview(drawingStartCorner, pos);
            } else if (currentTool === 'room' && drawingStartCorner) {
                drawRoomPreview(drawingStartCorner, pos);
            }
        }
        
        // Handle door/window placement preview
        if ((currentTool === 'door' || currentTool === 'window') && openingStartPoint) {
            const endWall = findNearestWall(pos);
            
            // If both start and end are on the same wall, show wall-attached preview
            if (openingStartPoint.wall && endWall && openingStartPoint.wall === endWall) {
                const endProjected = projectPointOnWall(endWall, pos);
                showWallOpeningPreview(endWall, openingStartPoint.projected, endProjected, currentTool);
            } else {
                // Show freeform preview
                showFreeformOpeningPreview(openingStartPoint, pos, currentTool);
            }
        }
        
        // Highlight snap targets
        if (currentTool === 'wall' && isDrawing) {
            highlightSnapTarget(pos);
        }
    }
    
    function handleMouseUp(e) {
        // Stop panning
        if (isPanning) {
            isPanning = false;
            svg.style.cursor = '';
            return;
        }
        
        if (currentTool === 'room' && isDrawing && drawingStartCorner) {
            const pos = getMousePos(e);
            createRoomFromRect(drawingStartCorner, pos);
        }
        
        isDragging = false;
        dragTarget = null;
        
        if (currentTool === 'room') {
            isDrawing = false;
            drawingStartCorner = null;
            removePreview();
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
        if (!file.type.startsWith('image/')) {
            alert('Please drop an image file (PNG, JPG, etc.)');
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
                    <button class="import-option recommended" id="import-as-reference">
                        <div class="option-badge">For Tracing</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        <span>As Reference Layer</span>
                        <small>Add as a background layer to trace over manually. Adjustable opacity.</small>
                    </button>
                    <button class="import-option" id="import-convert-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        <span>Vectorize (AI)</span>
                        <small>Convert to editable vector paths. Each path is selectable and deletable.</small>
                    </button>
                </div>
                <div class="import-actions">
                    <button class="cancel-btn" id="import-cancel">Cancel</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(dialog);
        
        // Event handlers
        document.getElementById('import-as-reference').addEventListener('click', () => {
            dialog.remove();
            addImageAsReference(file);
        });
        
        document.getElementById('import-convert-svg').addEventListener('click', () => {
            dialog.remove();
            convertImageToSVG(file);
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
    
    
    function addImageAsReference(file) {
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
                    opacity: 0.5
                };
                
                addToHistory();
                referenceImages.push(refImage);
                renderReferenceImage(refImage);
                
                // Show reference image controls
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
        image.dataset.refImageId = refImage.id;
        
        imageLayer.appendChild(image);
    }
    
    function showReferenceImageControls(refImage) {
        // Remove any existing controls
        document.querySelector('.ref-image-controls')?.remove();
        
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
        
        // Delete button
        document.getElementById('ref-delete-btn').addEventListener('click', () => {
            removeReferenceImage(refImage.id);
            controls.remove();
        });
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
            if (selectedElement) {
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
    
    function moveCorner(corner, newPos) {
        // Check for snap to other corners
        const snapTarget = findSnapTarget(newPos, corner);
        if (snapTarget) {
            // Merge corners
            mergeCorners(corner, snapTarget);
        } else {
            corner.x = newPos.x;
            corner.y = newPos.y;
            redrawAll();
        }
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
    
    function highlightSnapTarget(pos) {
        // Remove existing highlights
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        
        const target = findNearbyCorner(pos);
        if (target && (!drawingStartCorner || target.id !== drawingStartCorner.id)) {
            const node = cornersLayer.querySelector(`[data-corner-id="${target.id}"]`);
            if (node) {
                node.classList.add('snap-target');
            }
        }
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
        
        // Show dimension while drawing
        const length = Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2) / scale;
        const midX = (start.x + end.x) / 2;
        const midY = (start.y + end.y) / 2;
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', midX);
        text.setAttribute('y', midY - 10);
        text.setAttribute('text-anchor', 'middle');
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
        
        // Show dimensions
        const widthFt = width / scale;
        const heightFt = height / scale;
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x + width / 2);
        text.setAttribute('y', y + height / 2);
        text.setAttribute('text-anchor', 'middle');
        text.classList.add('dimension-text');
        text.id = 'preview-dimension';
        text.textContent = formatDimension(widthFt) + ' × ' + formatDimension(heightFt);
        svg.appendChild(text);
    }
    
    function removePreview() {
        document.getElementById('drawing-preview')?.remove();
        document.getElementById('preview-dimension')?.remove();
    }
    
    function cancelDrawing() {
        isDrawing = false;
        drawingStartCorner = null;
        removePreview();
        cornersLayer.querySelectorAll('.snap-target').forEach(el => el.classList.remove('snap-target'));
        
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
            if (dist < minDist && dist < 20) {
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
            const length = Math.sqrt((wall.end.x - wall.start.x) ** 2 + (wall.end.y - wall.start.y) ** 2) / scale;
            const midX = (wall.start.x + wall.end.x) / 2;
            const midY = (wall.start.y + wall.end.y) / 2;
            
            // Calculate perpendicular offset for text
            const dx = wall.end.x - wall.start.x;
            const dy = wall.end.y - wall.start.y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const offsetX = -dy / len * 15;
            const offsetY = dx / len * 15;
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', midX + offsetX);
            text.setAttribute('y', midY + offsetY);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.classList.add('dimension-text');
            text.textContent = formatDimension(length);
            dimensionsLayer.appendChild(text);
        }
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
        deselectAll();
        selectedElement = { element, type };
        
        if (type === 'furniture') {
            const el = furnitureLayer.querySelector(`[data-furniture-id="${element.id}"]`);
            if (el) el.classList.add('selected');
            showProperties(element);
        } else if (type === 'label') {
            const el = labelsLayer.querySelector(`[data-label-id="${element.id}"]`);
            if (el) el.style.fill = 'var(--primary-color)';
        } else if (type === 'imported') {
            // Highlight the imported element
            if (element.element) {
                element.element.classList.add('selected');
            }
        }
    }
    
    function deselectAll() {
        selectedElement = null;
        furnitureLayer.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
        labelsLayer.querySelectorAll('.room-label').forEach(el => el.style.fill = '');
        // Deselect imported elements
        wallsLayer.querySelectorAll('.imported-svg-element.selected, .imported-svg-group.selected').forEach(el => el.classList.remove('selected'));
        hideProperties();
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
        if (!selectedElement) return;
        
        addToHistory();
        
        const isImported = selectedElement.type === 'imported';
        
        if (selectedElement.type === 'furniture') {
            furniture = furniture.filter(f => f.id !== selectedElement.element.id);
        } else if (selectedElement.type === 'label') {
            labels = labels.filter(l => l.id !== selectedElement.element.id);
        } else if (isImported) {
            // Remove the imported element from the DOM and tracking array
            const imported = selectedElement.element;
            if (imported.element && imported.element.parentNode) {
                imported.element.parentNode.removeChild(imported.element);
            }
            importedElements = importedElements.filter(i => i.id !== imported.id);
        }
        
        deselectAll();
        
        // Don't redraw all for imported elements - we've already removed it from DOM
        if (!isImported) {
            redrawAll();
        }
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
        // Clear current state
        corners = [];
        walls = [];
        freeformOpenings = state.freeformOpenings ? state.freeformOpenings.map(o => ({ ...o })) : [];
        furniture = state.furniture.map(f => ({ ...f }));
        labels = state.labels.map(l => ({ ...l }));
        referenceImages = state.referenceImages.map(r => ({ ...r }));
        
        // Restore corners first
        state.corners.forEach(c => {
            corners.push({
                id: c.id,
                x: c.x,
                y: c.y,
                walls: [] // Will be linked after walls are created
            });
        });
        
        // Restore walls and link to corners
        state.walls.forEach(w => {
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
        
        state.importedElementsHTML.forEach(item => {
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
    
    // Zoom
    function setZoom(newZoom) {
        zoom = Math.max(0.25, Math.min(3, newZoom));
        document.getElementById('zoom-level').textContent = Math.round(zoom * 100) + '%';
        applyTransform();
    }
    
    function applyTransform() {
        const group = document.getElementById('floor-plan-group');
        if (group) {
            group.setAttribute('transform', `translate(${panOffset.x}, ${panOffset.y}) scale(${zoom})`);
        }
    }
    
    function resetPan() {
        panOffset = { x: 0, y: 0 };
        applyTransform();
    }
    
    function handleWheelZoom(e) {
        // Only zoom if cursor is over the canvas area
        e.preventDefault();
        
        // Calculate zoom delta (normalize for different browsers/trackpads)
        const delta = -e.deltaY * 0.001;
        
        // Apply zoom with sensitivity
        const zoomFactor = 1 + delta * 2;
        const newZoom = zoom * zoomFactor;
        
        setZoom(newZoom);
    }
    
    function fitToScreen() {
        panOffset = { x: 0, y: 0 };
        setZoom(1);
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
        
        if (format === 'svg') {
            exportSVG();
        } else if (format === 'png') {
            exportPNG();
        }
    }
    
    function exportSVG() {
        const svgClone = svg.cloneNode(true);
        
        // Remove grid for export
        svgClone.querySelector('#grid-background')?.remove();
        
        // Remove corner nodes for cleaner export
        svgClone.querySelector('#corners-layer').innerHTML = '';
        
        // Set dimensions
        const wrapper = document.getElementById('layout-canvas-wrapper');
        svgClone.setAttribute('width', wrapper.clientWidth);
        svgClone.setAttribute('height', wrapper.clientHeight);
        svgClone.setAttribute('viewBox', `0 0 ${wrapper.clientWidth} ${wrapper.clientHeight}`);
        
        const svgString = new XMLSerializer().serializeToString(svgClone);
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        downloadBlob(blob, 'floor-plan.svg');
    }
    
    function exportPNG() {
        const wrapper = document.getElementById('layout-canvas-wrapper');
        const width = wrapper.clientWidth;
        const height = wrapper.clientHeight;
        
        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = width * 2; // 2x for better quality
        canvas.height = height * 2;
        const ctx = canvas.getContext('2d');
        ctx.scale(2, 2);
        
        // White background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, width, height);
        
        // Clone and prepare SVG
        const svgClone = svg.cloneNode(true);
        svgClone.querySelector('#grid-background')?.remove();
        svgClone.querySelector('#corners-layer').innerHTML = '';
        svgClone.setAttribute('width', width);
        svgClone.setAttribute('height', height);
        
        const svgString = new XMLSerializer().serializeToString(svgClone);
        const img = new Image();
        
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(blob => {
                downloadBlob(blob, 'floor-plan.png');
            }, 'image/png');
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
    
    // Public API
    return {
        init,
        show,
        hide
    };
})();

// Initialize floor plan editor when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    FloorPlanEditor.init();
});

export default FloorPlanEditor;
