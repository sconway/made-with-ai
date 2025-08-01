import feather from 'feather-icons';

// DOM Elements
const uploadContainer = document.getElementById('upload-container');
const previewContainer = document.getElementById('preview-container');
const roomPreview = document.getElementById('room-preview');
const roomUpload = document.getElementById('room-upload');
const cameraBtn = document.getElementById('camera-btn');
const changeImageBtn = document.getElementById('change-image-btn');
const generateBtn = document.getElementById('generate-btn');
const resultsSection = document.getElementById('results-section');
const loadingIndicator = document.getElementById('loading-indicator');
const designCarousel = document.getElementById('design-carousel');
const backToOptionsBtn = document.getElementById('back-to-options-btn');
const regenerateBtn = document.getElementById('regenerate-btn');
const saveDesignBtn = document.getElementById('save-design-btn');

// Auth elements
const loginBtn = document.getElementById('login-btn');
const authModal = document.getElementById('auth-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const apiKeyInput = document.getElementById('api-key');
const toggleKeyVisibilityBtn = document.getElementById('toggle-key-visibility-btn');
const replicateApiKeyInput = document.getElementById('replicate-api-key');
const toggleReplicateKeyVisibilityBtn = document.getElementById('toggle-replicate-key-visibility-btn');
const authActionBtn = document.getElementById('auth-action-btn');

// State variables
let currentUploadedImage = null;
let currentRoomType = 'empty';
let generatedDesigns = [];
let selectedRoomItems = new Set(); // Track selected room items
let furnishedOption = 'keep-existing'; // Track furnished room option
let isRoomActuallyEmpty = true; // Track if the uploaded room is actually empty

// Auth state
let openaiApiKey = localStorage.getItem('openai_api_key') || '';
let replicateApiKey = localStorage.getItem('replicate_api_key') || '';

// Example design - in a real implementation, this would be an AI-generated version of the user's uploaded room
// NOTE: In an actual implementation, this would be the same room with a new furniture layout
// For this demo, we're using a sample image to simulate the concept
const sampleAIGeneratedImages = {
    empty: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070'
    ],
    furnished: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2087',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070'
    ]
};

// Design style names based on room type
const designStyles = {
    empty: [
        "Modern Minimalist",
        "Cozy Scandinavian",
        "Contemporary Industrial"
    ],
    furnished: [
        "Optimized Layout",
        "Added Accent Pieces",
        "Complete Makeover"
    ]
};

// Design descriptions based on room type
const designDescriptions = {
    empty: [
        "Clean lines with essential furniture pieces. Neutral color palette with subtle accent colors.",
        "Warm and inviting space with natural wood elements and soft textures.",
        "Bold contrast with metal accents, exposed elements, and functional furniture."
    ],
    furnished: [
        "Rearranged existing furniture for better flow and functionality. Optimized for your space.",
        "Kept your core furniture pieces and added strategic accent items to enhance the look.",
        "Comprehensive redesign with new furniture arrangement and style elements."
    ]
};

// Room items that can be added to empty rooms
const roomItems = [
    { id: 'sofa', name: 'Sofa', icon: 'square', category: 'furniture' },
    { id: 'coffee-table', name: 'Coffee Table', icon: 'table', category: 'furniture' },
    { id: 'dining-table', name: 'Dining Table', icon: 'table', category: 'furniture' },
    { id: 'chairs', name: 'Chairs', icon: 'square', category: 'furniture' },
    { id: 'bed', name: 'Bed', icon: 'square', category: 'furniture' },
    { id: 'desk', name: 'Desk', icon: 'monitor', category: 'furniture' },
    { id: 'bookshelf', name: 'Bookshelf', icon: 'book-open', category: 'furniture' },
    { id: 'tv', name: 'TV', icon: 'tv', category: 'electronics' },
    { id: 'lamp', name: 'Lamp', icon: 'zap', category: 'lighting' },
    { id: 'floor-lamp', name: 'Floor Lamp', icon: 'zap', category: 'lighting' },
    { id: 'rug', name: 'Rug', icon: 'square', category: 'decor' },
    { id: 'curtains', name: 'Curtains', icon: 'maximize-2', category: 'decor' },
    { id: 'art', name: 'Art', icon: 'image', category: 'decor' },
    { id: 'mirror', name: 'Mirror', icon: 'eye', category: 'decor' },
    { id: 'plants', name: 'Plants', icon: 'circle', category: 'decor' },
    { id: 'pillows', name: 'Pillows', icon: 'square', category: 'decor' },
    { id: 'throw-blanket', name: 'Throw Blanket', icon: 'square', category: 'decor' },
    { id: 'vase', name: 'Vase', icon: 'droplet', category: 'decor' },
    { id: 'candles', name: 'Candles', icon: 'zap', category: 'decor' },
    { id: 'clock', name: 'Clock', icon: 'clock', category: 'decor' }
];

// AI prompt templates for different room types - improved for better accuracy
const aiPrompts = {
    empty: "Transform this empty room into a beautifully furnished living space. Add appropriate furniture and decor that matches the room's size and architectural features. Include comfortable seating, functional surfaces, proper lighting, and decorative elements. Ensure the furniture placement creates good flow and conversation areas. Match the style: ",
    furnished: "Redesign this furnished room to improve its layout, aesthetics, and functionality. Rearrange existing furniture and items to create better flow, conversation areas, and visual balance. Ensure proper spacing and accessibility while maintaining the room's character. Match the style: "
};

// Fallback images for when API calls fail
const fallbackImages = {
    empty: [
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2070'
    ],
    furnished: [
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2087',
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070'
    ]
};

// Replicate API constants
const PROXY_SERVER_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3001'  // Local development
    : '';  // Production - use relative URL
const REPLICATE_API_URL = `${PROXY_SERVER_URL}/replicate/predictions`;
const REPLICATE_POLL_URL = `${PROXY_SERVER_URL}/replicate/poll`;
const REPLICATE_MODEL_VERSION = 'stability-ai/stable-diffusion-3.5-large'; // Example version, check replicate for latest/best

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {

    // Event Listeners (Add null checks for safety)
    if (roomUpload) roomUpload.addEventListener('change', handleImageUpload);
    if (cameraBtn) cameraBtn.addEventListener('click', openCamera);
    if (changeImageBtn) changeImageBtn.addEventListener('click', openFileSelector);
    if (generateBtn) generateBtn.addEventListener('click', generateDesigns);
    if (backToOptionsBtn) backToOptionsBtn.addEventListener('click', goBackToPreview);
    if (regenerateBtn) regenerateBtn.addEventListener('click', regenerateDesigns);
    if (saveDesignBtn) saveDesignBtn.addEventListener('click', saveCurrentDesign);

    // Auth event listeners
    if (loginBtn) loginBtn.addEventListener('click', showAuthModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', hideAuthModal);
    
    // The original error source:
    if (authModal) {
        authModal.addEventListener('click', event => {
            if (event.target === authModal) {
                hideAuthModal();
            }
        });
    }
    
    // Check existence of elements before adding listeners
    if (toggleKeyVisibilityBtn && apiKeyInput) {
        toggleKeyVisibilityBtn.addEventListener('click', toggleKeyVisibility);
    } 
    if (toggleReplicateKeyVisibilityBtn && replicateApiKeyInput) {
        toggleReplicateKeyVisibilityBtn.addEventListener('click', toggleKeyVisibility);
    }
    if (authActionBtn) {
        authActionBtn.addEventListener('click', saveApiKeys);
    }

    // Room type selection
    const roomTypeRadios = document.querySelectorAll('input[name="room-type"]');
    if (roomTypeRadios) {
        roomTypeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                currentRoomType = e.target.value;
                console.log(`Room type selected: ${currentRoomType}`);
                handleRoomTypeChange();
            });
        });
    }
    
    // Furnished room options selection
    const furnishedOptionRadios = document.querySelectorAll('input[name="furnished-option"]');
    if (furnishedOptionRadios) {
        furnishedOptionRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                furnishedOption = e.target.value;
                console.log(`Furnished option selected: ${furnishedOption}`);
                handleFurnishedOptionChange();
            });
        });
    }

    // Add support for drag-and-drop file upload
    if (uploadContainer) {
        uploadContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadContainer.classList.add('drag-over');
        });

        uploadContainer.addEventListener('dragleave', () => {
            uploadContainer.classList.remove('drag-over');
        });

        uploadContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadContainer.classList.remove('drag-over');

            if (e.dataTransfer.files.length) {
                const file = e.dataTransfer.files[0];
                if (isValidImage(file)) {
                    const reader = new FileReader();

                    reader.onload = async function(event) {
                        currentUploadedImage = event.target.result;
                        if (roomPreview) roomPreview.src = currentUploadedImage;
                        
                        // Detect if the room is empty
                        isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
                        console.log(`Uploaded room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);
                        
                        if (uploadContainer) uploadContainer.classList.add('hidden');
                        if (previewContainer) previewContainer.classList.remove('hidden');
                    };

                    reader.readAsDataURL(file);
                } else {
                    alert('Please upload a valid image file (JPEG, PNG, etc.)');
                }
            }
        });
    }



    // Initialize the app
    initializeApp();
});

// Functions
function initializeApp() {
    updateLoginButton();
    feather.replace();
    
    // Initialize room items if empty room is selected by default
    if (currentRoomType === 'empty') {
        handleRoomTypeChange();
    }
}

function updateLoginButton() {
    if (!loginBtn) return;
    
    if (replicateApiKey) {
        loginBtn.innerHTML = `<i data-feather="check-circle"></i><span>API Key Set</span>`;
        loginBtn.classList.add('authenticated');
        feather.replace();
    } else {
        loginBtn.innerHTML = `<i data-feather="key"></i><span>API Key</span>`;
        loginBtn.classList.remove('authenticated');
        feather.replace();
    }
}

function showAuthModal() {
    authModal.classList.add('show');
    if (apiKeyInput) apiKeyInput.value = openaiApiKey;
    if (replicateApiKeyInput) replicateApiKeyInput.value = replicateApiKey;
}

function hideAuthModal() {
    authModal.classList.remove('show');
}

function toggleKeyVisibility(event) {
    const button = event.currentTarget;
    let input;
    if (button === toggleKeyVisibilityBtn && apiKeyInput) {
        input = apiKeyInput;
    } else if (button === toggleReplicateKeyVisibilityBtn && replicateApiKeyInput) {
        input = replicateApiKeyInput;
    } else {
        return;
    }

    if (input.type === 'password') {
        input.type = 'text';
        button.innerHTML = '<i data-feather="eye-off"></i>';
    } else {
        input.type = 'password';
        button.innerHTML = '<i data-feather="eye"></i>';
    }
    feather.replace();
}

function toggleReplicateKeyVisibility() {
    // Implementation needed
}

function saveApiKeys() {
    if (apiKeyInput) {
        const oaiKey = apiKeyInput.value.trim();
        openaiApiKey = oaiKey;
        localStorage.setItem('openai_api_key', oaiKey);
    }

    if (replicateApiKeyInput) {
        const repKey = replicateApiKeyInput.value.trim();
        if (repKey) {
            replicateApiKey = repKey;
            localStorage.setItem('replicate_api_key', repKey);
        } else {
            replicateApiKey = '';
            localStorage.removeItem('replicate_api_key');
        }
    } else {
        replicateApiKey = '';
        localStorage.removeItem('replicate_api_key');
        console.warn('Replicate API Key input not found in the HTML.');
    }

    updateLoginButton();
    hideAuthModal();

    if (!replicateApiKey) {
        alert('Replicate API key is recommended for image generation.');
    }
}

async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file && isValidImage(file)) {
        const reader = new FileReader();
        
        reader.onload = async function(event) {
            currentUploadedImage = event.target.result;
            roomPreview.src = currentUploadedImage;
            
            // Detect if the room is empty
            isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
            console.log(`Uploaded room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);
            
            uploadContainer.classList.add('hidden');
            previewContainer.classList.remove('hidden');
        };
        
        reader.readAsDataURL(file);
    } else if (file) {
        alert('Please upload a valid image file (JPEG, PNG, etc.)');
    }
}

function isValidImage(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    return validTypes.includes(file.type);
}

function openCamera() {
    // Check if the device has a camera
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Create a new element for the camera view
        const cameraView = document.createElement('div');
        cameraView.classList.add('camera-view');
        
        const video = document.createElement('video');
        video.setAttribute('autoplay', '');
        video.setAttribute('playsinline', '');
        
        const captureBtn = document.createElement('button');
        captureBtn.classList.add('capture-btn');
        captureBtn.innerHTML = '<i data-feather="camera"></i>';
        
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.innerHTML = '<i data-feather="x"></i>';
        
        cameraView.appendChild(video);
        cameraView.appendChild(captureBtn);
        cameraView.appendChild(cancelBtn);
        
        document.body.appendChild(cameraView);
        feather.replace();
        
        // Get camera access
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
            .then(stream => {
                video.srcObject = stream;
                video.play();
                
                captureBtn.addEventListener('click', async () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    
                    currentUploadedImage = canvas.toDataURL('image/jpeg');
                    roomPreview.src = currentUploadedImage;
                    
                    // Detect if the room is empty
                    isRoomActuallyEmpty = await detectEmptyRoom(currentUploadedImage);
                    console.log(`Captured room is ${isRoomActuallyEmpty ? 'empty' : 'furnished'}`);
                    
                    uploadContainer.classList.add('hidden');
                    previewContainer.classList.remove('hidden');
                    
                    // Stop the camera stream
                    stream.getTracks().forEach(track => track.stop());
                    cameraView.remove();
                });
                
                cancelBtn.addEventListener('click', () => {
                    // Stop the camera stream
                    stream.getTracks().forEach(track => track.stop());
                    cameraView.remove();
                });
            })
            .catch(error => {
                console.error('Error accessing camera:', error);
                alert('Unable to access camera. Please check your device permissions.');
                cameraView.remove();
            });
    } else {
        alert('Your device does not support camera access');
    }
}

function openFileSelector() {
    // Directly trigger the file input dialog
    if (roomUpload) {
        roomUpload.click();
    }
}

function resetImageUpload() {
    currentUploadedImage = null;
    isRoomActuallyEmpty = true;
    if (roomPreview) roomPreview.src = '';
    if (roomUpload) roomUpload.value = '';
    if (previewContainer) previewContainer.classList.add('hidden');
    if (uploadContainer) uploadContainer.classList.remove('hidden');
}

// Detect if a room is empty by analyzing the image
async function detectEmptyRoom(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            // Simple heuristic: check for large areas of uniform color (walls, floors)
            // and lack of distinct objects (furniture)
            let uniformColorPixels = 0;
            let totalPixels = data.length / 4;
            
            // Sample pixels to check for uniformity
            const sampleSize = Math.min(1000, totalPixels);
            const step = Math.floor(totalPixels / sampleSize);
            
            for (let i = 0; i < sampleSize; i++) {
                const pixelIndex = i * step * 4;
                const r = data[pixelIndex];
                const g = data[pixelIndex + 1];
                const b = data[pixelIndex + 2];
                
                // Check if this pixel is part of a wall/floor (neutral colors)
                const isNeutral = Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(r - b) < 30;
                const isLight = (r + g + b) / 3 > 100;
                
                if (isNeutral && isLight) {
                    uniformColorPixels++;
                }
            }
            
            const uniformRatio = uniformColorPixels / sampleSize;
            
            // If more than 70% of sampled pixels are uniform neutral colors, likely empty
            const isEmpty = uniformRatio > 0.7;
            
            console.log(`Room analysis: ${Math.round(uniformRatio * 100)}% uniform neutral colors, likely empty: ${isEmpty}`);
            resolve(isEmpty);
        };
        
        img.onerror = function() {
            console.log('Could not analyze image, assuming room is furnished');
            resolve(false);
        };
        
        img.src = imageSrc;
    });
}

// Handle room type change and show/hide appropriate options
function handleRoomTypeChange() {
    const roomItemsSelection = document.getElementById('room-items-selection');
    const furnishedOptions = document.getElementById('furnished-options');
    
    if (currentRoomType === 'empty') {
        // Show room items selection for empty rooms
        if (roomItemsSelection) {
            roomItemsSelection.classList.remove('hidden');
            updateItemsSelectionUI('empty');
            populateRoomItems();
        }
        // Hide furnished options
        if (furnishedOptions) {
            furnishedOptions.classList.add('hidden');
        }
    } else {
        // Show furnished options for furnished rooms
        if (furnishedOptions) {
            furnishedOptions.classList.remove('hidden');
        }
        // Handle furnished option change
        handleFurnishedOptionChange();
    }
}

// Populate the room items grid
function populateRoomItems() {
    const itemsGrid = document.getElementById('items-grid');
    if (!itemsGrid) return;
    
    itemsGrid.innerHTML = '';
    
    roomItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item-option';
        itemElement.setAttribute('data-item-id', item.id);
        
        itemElement.innerHTML = `
            <input type="checkbox" id="item-${item.id}" class="item-checkbox">
            <label for="item-${item.id}" class="item-label">
                <div class="item-icon">
                    <i data-feather="${item.icon}"></i>
                </div>
                <span class="item-name">${item.name}</span>
            </label>
        `;
        
        // Add event listener for item selection
        const checkbox = itemElement.querySelector('.item-checkbox');
        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedRoomItems.add(item.id);
            } else {
                selectedRoomItems.delete(item.id);
            }
            console.log('Selected items:', Array.from(selectedRoomItems));
        });
        
        itemsGrid.appendChild(itemElement);
    });
    
    // Replace feather icons
    feather.replace();
}

// Handle furnished room option changes
function handleFurnishedOptionChange() {
    const roomItemsSelection = document.getElementById('room-items-selection');
    
    if (furnishedOption === 'keep-existing') {
        // Hide room items selection - keep existing items only
        if (roomItemsSelection) {
            roomItemsSelection.classList.add('hidden');
        }
        selectedRoomItems.clear();
    } else if (furnishedOption === 'add-new') {
        // Show room items selection for adding new items
        if (roomItemsSelection) {
            roomItemsSelection.classList.remove('hidden');
            updateItemsSelectionUI('add-new');
            populateRoomItems();
        }
    } else if (furnishedOption === 'start-fresh') {
        // Show room items selection for starting fresh
        if (roomItemsSelection) {
            roomItemsSelection.classList.remove('hidden');
            updateItemsSelectionUI('start-fresh');
            populateRoomItems();
        }
    }
}

// Update the UI text based on the context
function updateItemsSelectionUI(context) {
    const title = document.getElementById('items-selection-title');
    const hint = document.getElementById('items-selection-hint');
    
    if (context === 'empty') {
        title.textContent = 'What would you like to add?';
        hint.textContent = 'Select items you\'d like to include in your room design';
    } else if (context === 'add-new') {
        title.textContent = 'What additional items would you like?';
        hint.textContent = 'Select new items to add to your existing furniture';
    } else if (context === 'start-fresh') {
        title.textContent = 'What would you like in your new room?';
        hint.textContent = 'Select items to replace your existing furniture';
    }
}

// Generate positive and negative prompts based on selected room items and room type
function generatePromptsWithItems(basePrompt, style) {
    const result = {
        positivePrompt: '',
        negativePrompt: '',
        shouldGenerate: true // Flag to indicate if generation should proceed
    };
    
    // Base negative prompt for all generations - includes structural preservation
    const baseNegativePrompt = "blurry, distorted, out of frame, unrealistic shadows, text, watermark, signature, low quality, pixelated, artifacts, change walls, change windows, change floor, change ceiling, change doors, change architectural structure, modify room structure, change room layout, change room dimensions, change room shape, change room size, change room proportions, change room geometry, change room boundaries, change room walls, change room windows, change room floor, change room ceiling, change room doors, change room architecture, change room design structure, change room construction, change room building elements, change room structural elements, change room framework, change room skeleton, change room shell, change room envelope, change room perimeter, change room outline, change room footprint, change room floorplan, change room blueprint, change room layout structure, change room spatial arrangement, change room spatial organization, change room spatial configuration, change room spatial layout, change room spatial design, change room spatial structure, change room spatial framework, change room spatial skeleton, change room spatial shell, change room spatial envelope, change room spatial perimeter, change room spatial outline, change room spatial footprint, change room spatial floorplan, change room spatial blueprint";
    
    // Check if we have an empty room but user selected furnished room
    const shouldTreatAsEmpty = isRoomActuallyEmpty && currentRoomType === 'furnished';
    
    // Special case: "start fresh" should always generate, even with no items
    if (currentRoomType === 'furnished' && furnishedOption === 'start-fresh') {
        if (selectedRoomItems.size === 0) {
            result.positivePrompt = `EMPTY ROOM ONLY: Remove EVERYTHING except walls, floor, ceiling, windows, doors. NO furniture, NO decor, NO items, NO objects, NO couches, NO chairs, NO tables, NO TVs, NO lamps, NO rugs, NO curtains, NO art, NO plants, NO accessories. COMPLETELY BARE ROOM. Empty space only. Nothing in the room except architectural elements. Style: ${style}.`;
            result.negativePrompt = `${baseNegativePrompt}, furniture, decor, decorative items, accessories, any furniture, any decor, any items, all furniture, all decor, all items, existing furniture, existing decor, existing items, current furniture, current decor, current items, room contents, room items, room furniture, room decor, sofa, couch, chair, table, coffee table, dining table, bed, desk, bookshelf, lamp, floor lamp, rug, curtains, art, painting, mirror, plant, plants, pillow, pillows, throw blanket, vase, candle, candles, clock, any object, any item, any piece of furniture, any decoration, any accessory, any furnishing, any household item, any room item, any furniture piece, any decor item, any accessory item, any furnishing item, any household object, any room object, any furniture object, any decor object, any accessory object, any furnishing object, any household piece, any room piece, any furniture piece, any decor piece, any accessory piece, any furnishing piece, any household decoration, any room decoration, any furniture decoration, any decor decoration, any accessory decoration, any furnishing decoration`;
        } else {
            // Get selected and unselected items
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            const unselectedItems = roomItems.filter(item => !selectedRoomItems.has(item.id));
            
            // Build positive prompt with selected items
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.positivePrompt = `REMOVE ALL EXISTING FURNITURE: Completely clear the room of all current furniture and items, then add ONLY: ${selectedItemNames}. NO other furniture, NO other decor, NO other items. Clean minimal room with ONLY the specified items. Remove everything else. Style: ${style}.`;
            
            // Build negative prompt with unselected items
            const unselectedItemNames = unselectedItems.map(item => item.name.toLowerCase()).join(', ');
            result.negativePrompt = `${baseNegativePrompt}, ${unselectedItemNames}, existing furniture, existing decor, existing items, current furniture, current decor, current items, room contents, room items, room furniture, room decor, any furniture not specified, any decor not specified, any items not specified, any objects not specified, any pieces not specified, any furnishings not specified, any decorations not specified, any accessories not specified, any household items not specified, any room items not specified, any furniture pieces not specified, any decor items not specified, any accessory items not specified, any furnishing items not specified, any household objects not specified, any room objects not specified, any furniture objects not specified, any decor objects not specified, any accessory objects not specified, any furnishing objects not specified, any household pieces not specified, any room pieces not specified, any furniture pieces not specified, any decor pieces not specified, any accessory pieces not specified, any furnishing pieces not specified, any household decorations not specified, any room decorations not specified, any furniture decorations not specified, any decor decorations not specified, any accessory decorations not specified, any furnishing decorations not specified`;
        }
    } else if (currentRoomType === 'empty' || shouldTreatAsEmpty) {
        // Empty room logic (or empty room uploaded but user selected furnished)
        if (selectedRoomItems.size === 0) {
            // No items selected for empty room - don't generate
            result.shouldGenerate = false;
            result.positivePrompt = '';
            result.negativePrompt = '';
        } else {
            // Get selected items only - these are the ONLY things that should be in the room
            const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
            const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
            
            // Build extremely precise positive prompt with ONLY selected items
            result.positivePrompt = `Minimal room design. Add ONLY these items: ${selectedItemNames}. Empty room with nothing else. No additional furniture. No decorations. No extra items. Only the specified items. Clean, minimal space. Style: ${style}.`;
            
            // Build comprehensive negative prompt excluding ALL other furniture/decor items
            const allOtherItems = roomItems.filter(item => !selectedRoomItems.has(item.id));
            const allOtherItemNames = allOtherItems.map(item => item.name.toLowerCase()).join(', ');
            result.negativePrompt = `${baseNegativePrompt}, ${allOtherItemNames}, sofa, couch, chair, table, coffee table, dining table, bed, desk, bookshelf, lamp, floor lamp, rug, curtains, art, painting, mirror, plant, plants, pillow, pillows, throw blanket, vase, candle, candles, clock, furniture, decor, decoration, decorative items, accessories, any furniture not explicitly listed, any decor not explicitly listed, any items not explicitly mentioned, additional furniture, additional decor, extra items, unnecessary items, unwanted items, unspecified items, unrequested items, other furniture, other decor, other items, more furniture, more decor, more items, extra furniture, extra decor, extra items, additional furniture, additional decor, additional items, unwanted furniture, unwanted decor, unwanted items, unspecified furniture, unspecified decor, unspecified items, unrequested furniture, unrequested decor, unrequested items`;
        }
    } else {
        // Furnished room logic (and room is actually furnished)
        if (furnishedOption === 'keep-existing') {
            result.positivePrompt = `${basePrompt}${style}. Keep all existing furniture and items, only rearrange them for better layout and flow. Do not add or remove any items.`;
            result.negativePrompt = baseNegativePrompt;
        } else if (furnishedOption === 'add-new') {
            if (selectedRoomItems.size === 0) {
                result.positivePrompt = `${basePrompt}${style}. Keep all existing furniture and items, only rearrange them for better layout and flow.`;
                result.negativePrompt = baseNegativePrompt;
            } else {
                // Get selected items to add
                const selectedItems = roomItems.filter(item => selectedRoomItems.has(item.id));
                const selectedItemNames = selectedItems.map(item => item.name.toLowerCase()).join(', ');
                
                result.positivePrompt = `${basePrompt}${style}. Keep all existing furniture and items, rearrange them for better layout, and add: ${selectedItemNames}.`;
                result.negativePrompt = baseNegativePrompt;
            }
        }
    }
    
    return result;
}



// Helper: Generate a depth map using Replicate
async function getDepthMapWithReplicate(imageBase64, replicateApiKey) {
    const DEPTH_MODEL_VERSION = "lllyasviel/sd-controlnet-depth";
    if (!imageBase64 || !imageBase64.startsWith('data:image')) {
        console.error('Invalid image format for depth map:', imageBase64);
        throw new Error('Invalid image format for depth map.');
    }
    console.log('Sending to depth model:', imageBase64.slice(0, 100)); // Log first 100 chars
    const response = await fetch(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${replicateApiKey}`
        },
        body: JSON.stringify({
            version: DEPTH_MODEL_VERSION,
            input: {
                image: imageBase64
            }
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Depth map generation failed: ${errorData.detail || response.status}`);
    }
    const prediction = await response.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Replicate did not return a polling URL for depth map.');
    }
    // Poll for completion
    const result = await pollReplicatePrediction(prediction.urls.get, replicateApiKey);
    return result.imageUrl; // URL to depth map
}

// Helper: Check if we have a stable internet connection
async function checkConnectionHealth() {
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 5000);
        const response = await fetch('https://api.replicate.com/v1/models', {
            method: 'GET',
            signal: controller.signal
        });
        clearTimeout(timeout);
        return response.ok;
    } catch (error) {
        console.warn('Connection health check failed:', error.message);
        return false;
    }
}

// Helper: Fetch with retry for network errors and timeouts
async function fetchWithRetry(url, options = {}, maxRetries = 3, retryDelay = 2000) {
    let attempt = 0;
    while (attempt <= maxRetries) {
        try {
            // Check connection health before making request
            if (attempt > 0) {
                const isHealthy = await checkConnectionHealth();
                if (!isHealthy) {
                    console.warn('Connection health check failed, waiting longer before retry...');
                    await new Promise(resolve => setTimeout(resolve, retryDelay * 2));
                }
            }
            
            // Set a timeout for fetch (e.g., 30s)
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 30000);
            const response = await fetch(url, { ...options, signal: controller.signal });
            clearTimeout(timeout);
            return response;
        } catch (error) {
            attempt++;
            if (attempt > maxRetries) {
                throw new Error(`Request failed after ${maxRetries} retries: ${error.message}`);
            }
            // Only retry on network errors or aborts (timeout)
            if (error.name === 'AbortError' || error.message === 'Failed to fetch' || error.message === 'NetworkError when attempting to fetch resource.') {
                console.warn(`Fetch attempt ${attempt} failed (timeout/network). Retrying in ${retryDelay / 1000}s...`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            } else {
                throw error;
            }
        }
    }
}

// Helper function for polling Replicate API with improved error handling and adaptive timing
async function pollReplicatePrediction(predictionUrl, apiKey) {
    let prediction;
    let attempts = 0;
    const maxAttempts = 90; // Increased to 3 minutes (90 attempts * 2 seconds)
    let delay = 2000; // Start with 2 seconds, will adapt based on status
    let consecutiveErrors = 0;
    const maxConsecutiveErrors = 5;

    while (attempts < maxAttempts) {
        attempts++;
        try {
            const response = await fetchWithRetry(REPLICATE_POLL_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${apiKey}`
                },
                body: JSON.stringify({ predictionUrl })
            }, 2, 1000); // Reduced retries and delay for polling

            if (!response.ok) {
                consecutiveErrors++;
                const errorData = await response.json().catch(() => ({}));
                console.error(`Polling error: Status ${response.status}`, errorData);
                
                // Don't retry on 4xx errors immediately, could be auth issue
                if (response.status >= 400 && response.status < 500) {
                    throw new Error(`Polling failed with status ${response.status}: ${errorData.detail || 'Client error'}`);
                }
                
                // If too many consecutive errors, increase delay
                if (consecutiveErrors >= maxConsecutiveErrors) {
                    delay = Math.min(delay * 1.5, 10000); // Cap at 10 seconds
                    console.log(`Too many consecutive errors, increasing delay to ${delay}ms`);
                }
                
                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }

            // Reset consecutive errors on successful response
            consecutiveErrors = 0;
            prediction = await response.json();

            console.log(`Polling attempt ${attempts}: Status - ${prediction.status}`);

            if (prediction.status === 'succeeded') {
                if (!prediction.output || prediction.output.length === 0) {
                    throw new Error('Replicate prediction succeeded but returned no output.');
                }
                return { imageUrls: prediction.output };
            } else if (prediction.status === 'failed') {
                console.error('Replicate prediction failed:', prediction.error);
                throw new Error(`Replicate prediction failed: ${prediction.error}`);
            } else if (prediction.status === 'canceled') {
                console.warn('Replicate prediction canceled:', prediction);
                throw new Error('Replicate prediction was canceled.');
            }

            // Adaptive delay based on status
            if (prediction.status === 'starting') {
                delay = 3000; // Longer delay for starting phase
            } else if (prediction.status === 'processing') {
                delay = 2000; // Standard delay for processing
            }

            await new Promise(resolve => setTimeout(resolve, delay));

        } catch (error) {
            consecutiveErrors++;
            console.error(`Polling attempt ${attempts} failed: ${error.message}`);
            
            if (attempts >= maxAttempts) {
                throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts: ${error.message}`);
            }
            
            // Exponential backoff for consecutive errors
            if (consecutiveErrors >= maxConsecutiveErrors) {
                delay = Math.min(delay * 1.5, 10000);
                console.log(`Consecutive errors, increasing delay to ${delay}ms`);
            }
            
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts.`);
}

// Helper: Generate empty room using text-to-image (for start fresh scenarios)
async function generateEmptyRoomWithTextToImage(prompt, negativePrompt, replicateApiKey) {
    const modelOptions = [
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "txt2img"
        },
        {
            version: "stability-ai/stable-diffusion-xl-base-1.0",
            name: "SDXL Base",
            type: "txt2img"
        }
    ];
    
    let lastError = null;
    
    for (let i = 0; i < modelOptions.length; i++) {
        const model = modelOptions[i];
        console.log(`Attempting empty room generation with model: ${model.name}`);
        
        try {
            const inputData = {
                prompt: prompt,
                negative_prompt: negativePrompt,
                width: 1024,
                height: 1024,
                guidance_scale: 15.0,
                num_inference_steps: 40,
                scheduler: "K_EULER",
                seed: Math.floor(Math.random() * 1000000)
            };
            
            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${replicateApiKey}`
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000);
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = `Model ${model.name} failed: ${errorData.detail || response.status}`;
                console.warn(error);
                lastError = new Error(error);
                continue;
            }
            
            const prediction = await response.json();
            if (!prediction.urls || !prediction.urls.get) {
                const error = `Model ${model.name} did not return a polling URL.`;
                console.warn(error);
                lastError = new Error(error);
                continue;
            }
            
            console.log(`Polling for results from ${model.name}...`);
            const result = await pollReplicatePrediction(prediction.urls.get, replicateApiKey);
            console.log(`Successfully generated empty room with ${model.name}`);
            return result.imageUrls;
            
        } catch (error) {
            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;
            
            if (i === modelOptions.length - 1) {
                throw new Error(`All models failed. Last error: ${error.message}`);
            }
            continue;
        }
    }
    
    throw lastError || new Error('All model attempts failed');
}

// Helper: Generate image with SDXL+ControlNet using Replicate with fallback models
async function generateImageWithControlNet(imageBase64, prompt, negativePrompt, replicateApiKey) {
    // Check if this is a "start fresh" scenario (empty room generation)
    const isStartFresh = prompt.includes("completely empty space") || prompt.includes("Remove all furniture") || prompt.includes("empty room") || prompt.includes("COMPLETELY EMPTY ROOM") || prompt.includes("REMOVE ALL EXISTING FURNITURE") || prompt.includes("EMPTY ROOM ONLY");
    
    // Multiple model options with fallbacks
    // For "start fresh" scenarios, prioritize img2img models as they're better at dramatic changes
    const modelOptions = isStartFresh ? [
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "img2img"
        },
        {
            version: "stability-ai/stable-diffusion-xl-base-1.0",
            name: "SDXL Base",
            type: "img2img"
        },
        {
            version: "adirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",
            name: "SDXL Depth Midas",
            type: "controlnet"
        },
        {
            version: "lucataco/sdxl-controlnet-depth:465fb41789dc2203a9d7158be11d1d2570606a039c65e0e236fd329b5eecb10c",
            name: "SDXL ControlNet Depth",
            type: "controlnet"
        }
    ] : [
        {
            version: "adirik/t2i-adapter-sdxl-depth-midas:8a89b0ab59a050244a751b6475d91041a8582ba33692ae6fab65e0c51b700328",
            name: "SDXL Depth Midas",
            type: "controlnet"
        },
        {
            version: "lucataco/sdxl-controlnet-depth:465fb41789dc2203a9d7158be11d1d2570606a039c65e0e236fd329b5eecb10c",
            name: "SDXL ControlNet Depth",
            type: "controlnet"
        },
        {
            version: "stability-ai/stable-diffusion-3.5-large",
            name: "SD 3.5 Large",
            type: "img2img"
        },
        {
            version: "stability-ai/stable-diffusion-xl-base-1.0",
            name: "SDXL Base",
            type: "img2img"
        }
    ];
    
    let lastError = null;
    
    for (let i = 0; i < modelOptions.length; i++) {
        const model = modelOptions[i];
        console.log(`Attempting generation with model: ${model.name}`);
        
        try {
            const inputData = {
                image: imageBase64,
                prompt: prompt,
            };
            
            // Add negative prompt if provided
            if (negativePrompt && negativePrompt.trim()) {
                // inputData.negative_prompt = negativePrompt;
            }
            
            // Add model-specific parameters
            if (model.type === 'controlnet') {
                // ControlNet specific parameters - higher guidance for more precise adherence
                inputData.guidance_scale = 12.0; // Increased from 7.5 for better prompt adherence
                inputData.num_inference_steps = 30; // Increased for better quality
                
                // For start fresh scenarios, use very low ControlNet strength to preserve room structure but remove furniture
                if (isStartFresh) {
                    inputData.controlnet_conditioning_scale = 0.01; // Extremely low strength to allow maximum furniture removal while preserving structure
                } else {
                    inputData.controlnet_conditioning_scale = 0.8; // Normal ControlNet strength
                }
            } else if (model.type === 'img2img') {
                // Standard img2img parameters - for start fresh, use very high denoising strength to allow major changes
                if (isStartFresh) {
                    inputData.denoising_strength = 0.95; // Very high denoising strength to allow major changes
                    inputData.guidance_scale = 20.0; // Very high guidance for better prompt adherence
                    inputData.num_inference_steps = 50; // More steps for better quality
                } else {
                    inputData.denoising_strength = 0.7; // Normal denoising strength
                    inputData.guidance_scale = 12.0; // Normal guidance scale
                    inputData.num_inference_steps = 30; // Normal inference steps
                }
                inputData.scheduler = "K_EULER";
                inputData.seed = Math.floor(Math.random() * 1000000); // Random seed for variety
            }
            
            const response = await fetchWithRetry(REPLICATE_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${replicateApiKey}`
                },
                body: JSON.stringify({
                    version: model.version,
                    input: inputData
                })
            }, 3, 3000); // Increased retries and timeout for initial request
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                const error = `Model ${model.name} failed: ${errorData.detail || response.status}`;
                console.warn(error);
                lastError = new Error(error);
                continue; // Try next model
            }
            
            const prediction = await response.json();
            if (!prediction.urls || !prediction.urls.get) {
                const error = `Model ${model.name} did not return a polling URL.`;
                console.warn(error);
                lastError = new Error(error);
                continue; // Try next model
            }
            
            // Poll for completion
            console.log(`Polling for results from ${model.name}...`);
            const result = await pollReplicatePrediction(prediction.urls.get, replicateApiKey);
            console.log(`Successfully generated with ${model.name}`);
            return result.imageUrls; // Return the array of image URLs
            
        } catch (error) {
            console.warn(`Model ${model.name} failed:`, error.message);
            lastError = error;
            
            // If this is the last model, throw the error
            if (i === modelOptions.length - 1) {
                throw new Error(`All models failed. Last error: ${error.message}`);
            }
            
            // Continue to next model
            continue;
        }
    }
    
    // This should never be reached, but just in case
    throw lastError || new Error('All model attempts failed');
}

// Helper: Upscale image using Replicate (optional)
async function upscaleImageWithReplicate(imageUrl, replicateApiKey) {
    const UPSCALE_MODEL_VERSION = "nightmareai/real-esrgan";
    const response = await fetch(REPLICATE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${replicateApiKey}`
        },
        body: JSON.stringify({
            version: UPSCALE_MODEL_VERSION,
            input: {
                image: imageUrl
            }
        })
    });
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Upscale failed: ${errorData.detail || response.status}`);
    }
    const prediction = await response.json();
    if (!prediction.urls || !prediction.urls.get) {
        throw new Error('Replicate did not return a polling URL for upscaling.');
    }
    // Poll for completion
    const result = await pollReplicatePrediction(prediction.urls.get, replicateApiKey);
    return result.imageUrl; // URL to upscaled image
}

// New function using Replicate API
async function generateImageWithReplicate(imageBase64, prompt) {
    if (!replicateApiKey) {
        // This check remains important client-side to guide the user
        throw new Error('Replicate API key is not set client-side. Please use the auth modal.');
    }

    console.log(`Sending request to Replicate img2img via proxy`);
    console.log(`Prompt: ${prompt}`);
    // Ensure base64 string has the data URI prefix
    const imageInput = imageBase64.startsWith('data:image') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;

    try {
        // 1. Start the prediction by calling our proxy
        const startResponse = await fetchWithRetry(REPLICATE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${replicateApiKey}` // Add API key to headers
            },
            body: JSON.stringify({
                version: REPLICATE_MODEL_VERSION,
                input: {
                    prompt: prompt,
                    image: imageInput,
                }
            })
        });

        if (!startResponse.ok) {
            const errorData = await startResponse.json().catch(() => ({ detail: 'Unknown error starting prediction.' }));
            console.error("Replicate API error response (start):", errorData);
            throw new Error(`Replicate API error (${startResponse.status}): ${errorData.detail || 'Failed to start prediction'}`);
        }

        const prediction = await startResponse.json();
        console.log('Replicate prediction started:', prediction);

        if (!prediction.urls || !prediction.urls.get) {
             throw new Error('Replicate API did not return a URL to poll.');
        }

        // 2. Poll for the result using our proxy
        // The actual polling URL (prediction.urls.get) is now sent to our backend proxy
        // The apiKey is not needed for the call to pollReplicatePrediction if it only forwards to the proxy
        const result = await pollReplicatePrediction(prediction.urls.get, replicateApiKey); // replicateApiKey here is for potential other uses or can be removed if solely for proxy
        console.log('Replicate prediction finished via proxy:', result);
        return result; // Should be { imageUrl: '...' }

    } catch (error) {
        console.error('Error during Replicate generation:', error);
        // Re-throw the error to be caught by the calling function (generateDesigns)
        throw error;
    }
}

// Generate a single design image
async function generateDesigns() {
    if (!currentUploadedImage) {
        alert('Please upload an image first');
        return;
    }

    if (!replicateApiKey) {
        alert('Please set your Replicate API key first');
        showAuthModal();
        return;
    }

    previewContainer.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    designCarousel.innerHTML = '';
    
    // Ensure the room type is correctly set
    const emptyRadio = document.getElementById('empty-room');
    const furnishedRadio = document.getElementById('furnished-room');
    
    if (emptyRadio && emptyRadio.checked) {
        currentRoomType = 'empty';
    } else if (furnishedRadio && furnishedRadio.checked) {
        currentRoomType = 'furnished';
    }
    
    const basePrompt = aiPrompts[currentRoomType];
    const style = designStyles[currentRoomType][0]; // Use first style
    const description = designDescriptions[currentRoomType][0]; // Use first description
    const prompts = generatePromptsWithItems(basePrompt, style);
    
    // Check if we should generate an image
    if (!prompts.shouldGenerate) {
        // Only show this alert for empty room scenarios, not for "start fresh"
        if (currentRoomType === 'empty' || (currentRoomType === 'furnished' && furnishedOption !== 'start-fresh')) {
            alert('Please select at least one item to add to your empty room before generating a design.');
        } else {
            alert('Please select at least one item to add to your room before generating a design.');
        }
        return;
    }
    
    const fullPrompt = prompts.positivePrompt;
    const negativePrompt = prompts.negativePrompt;

    // Create initial design with loading state
    const initialDesign = {
        id: 'design-0',
        title: style,
        description: description,
        imageUrl: '',
        originalImageUrl: currentUploadedImage,
        prompt: fullPrompt,
        isFallback: false,
        loading: true,
        needsRetry: false,
        errorMessage: ''
    };
    
    generatedDesigns = [initialDesign];
    displayDesigns(generatedDesigns);

    // Generate the image
    try {
        console.log('Starting image generation with prompt:', fullPrompt);
        console.log('Negative prompt:', negativePrompt);
        
        let imageUrls = await generateImageWithControlNet(currentUploadedImage, fullPrompt, negativePrompt, replicateApiKey);
        let imageUrl;
        if (Array.isArray(imageUrls)) {
            imageUrl = imageUrls[0];
        } else if (typeof imageUrls === 'string') {
            imageUrl = imageUrls;
        } else {
            imageUrl = '';
        }
        
        initialDesign.imageUrl = imageUrl;
        initialDesign.loading = false;
        initialDesign.isFallback = false;
        
    } catch (error) {
        console.error(`Error in image generation for design (${style}):`, error);
        
        // Provide user-friendly error messages
        let userFriendlyMessage = 'Image generation failed. Please try again.';
        
        if (error.message.includes('timed out')) {
            userFriendlyMessage = 'Generation took too long and timed out. This can happen during peak usage. Please try again.';
        } else if (error.message.includes('All models failed')) {
            userFriendlyMessage = 'All available models are currently busy. Please try again in a few minutes.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            userFriendlyMessage = 'Network connection issue. Please check your internet connection and try again.';
        } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
            userFriendlyMessage = 'API key issue. Please check your Replicate API key.';
        }
        
        initialDesign.imageUrl = '';
        initialDesign.loading = false;
        initialDesign.isFallback = false;
        initialDesign.needsRetry = true;
        initialDesign.errorMessage = userFriendlyMessage;
    }
    
    // Update the card in the DOM
    updateDesignCard(initialDesign, 0);
}

function showRetryButton(card, cardData, index) {
    const revealContainer = card.querySelector('.image-reveal-container');
    if (revealContainer) {
        revealContainer.classList.remove('reveal-loading');
        
        // Create retry button container
        const retryContainer = document.createElement('div');
        retryContainer.className = 'retry-container';
        retryContainer.innerHTML = `
            <div class="retry-content">
                <div class="retry-icon">
                    <i data-feather="alert-triangle"></i>
                </div>
                <div class="retry-message">
                    <h4>Generation Failed</h4>
                    <p>${cardData.errorMessage || 'Image generation timed out or failed'}</p>
                </div>
                <button class="retry-btn">
                    <i data-feather="refresh-cw"></i>
                    <span>Retry Generation</span>
                </button>
            </div>
        `;
        
        // Clear the container and add retry UI
        revealContainer.innerHTML = '';
        revealContainer.appendChild(retryContainer);
        
        // Add click handler for retry button
        const retryBtn = retryContainer.querySelector('.retry-btn');
        retryBtn.addEventListener('click', () => {
            retryImageGeneration();
        });
    }
    
    // Update disclaimer
    const disclaimer = card.querySelector('.design-disclaimer');
    if (disclaimer) {
        disclaimer.innerHTML = `<p><strong>Generation Failed:</strong> ${cardData.errorMessage || 'Timed out or API error'}</p>`;
        disclaimer.classList.add('error');
        disclaimer.style.display = 'block';
    }
    
    // Update description
    const desc = card.querySelector('.design-description');
    if (desc) desc.textContent = cardData.description;
    
    // Replace feather icons
    feather.replace();
}

async function retryImageGeneration() {
    console.log('Retrying image generation');
    
    // Get the current design data
    const design = generatedDesigns[0];
    if (!design) {
        console.error('No design found');
        return;
    }
    
    // Reset the design to loading state
    design.loading = true;
    design.needsRetry = false;
    design.errorMessage = '';
    design.imageUrl = '';
    
    // Find the card and show loading state
    const card = designCarousel.querySelector('[data-design-id="design-0"]');
    if (card) {
        const revealContainer = card.querySelector('.image-reveal-container');
        if (revealContainer) {
            revealContainer.classList.add('reveal-loading');
            
            // Add whiteboard back for this card
            const whiteboardContainer = document.createElement('div');
            whiteboardContainer.className = 'whiteboard-container';
            whiteboardContainer.innerHTML = `
                <canvas class="whiteboard-canvas"></canvas>
                <div class="whiteboard-controls">
                    <button class="whiteboard-clear" title="Clear drawing">
                        <i data-feather="trash-2"></i>
                    </button>
                    <div class="whiteboard-colors">
                        <div class="color-option active" data-color="#6366f1"></div>
                        <div class="color-option" data-color="#ef4444"></div>
                        <div class="color-option" data-color="#10b981"></div>
                        <div class="color-option" data-color="#f59e0b"></div>
                        <div class="color-option" data-color="#8b5cf6"></div>
                        <div class="color-option" data-color="#000000"></div>
                    </div>
                    <div class="whiteboard-hint">Retrying... Draw while waiting!</div>
                </div>
            `;
            
            // Replace retry container with whiteboard
            revealContainer.innerHTML = `
                <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                <img class="design-image generated-image" src="" alt="${design.title}" style="opacity: 0; z-index: 3;">
                <div class="slider-backdrop"></div>
                <input type="range" class="reveal-slider" min="0" max="100" value="0" orient="vertical" aria-label="Reveal Original Image" title="Slide down to reveal original image">
                <div class="slider-indicators">
                    <div class="slider-indicator slider-indicator-top">
                        <span>Generated</span>
                    </div>
                    <div class="slider-indicator slider-indicator-bottom">
                        <span>Original</span>
                    </div>
                </div>
                <div class="slider-hint-arrows">
                    <div class="slider-hint-arrow"></div>
                    <div class="slider-hint-arrow"></div>
                    <div class="slider-hint-arrow"></div>
                </div>
            `;
            revealContainer.insertBefore(whiteboardContainer, revealContainer.firstChild);
            
            // Initialize whiteboard
            const whiteboardCanvas = whiteboardContainer.querySelector('.whiteboard-canvas');
            if (whiteboardCanvas) {
                initializeWhiteboard(whiteboardCanvas, card);
            }
            
            feather.replace();
        }
        
        // Hide disclaimer
        const disclaimer = card.querySelector('.design-disclaimer');
        if (disclaimer) {
            disclaimer.style.display = 'none';
        }
    }
    
    // Retry the generation
    try {
        // Generate new prompts for retry
        const basePrompt = aiPrompts[currentRoomType];
        const style = designStyles[currentRoomType][0];
        const prompts = generatePromptsWithItems(basePrompt, style);
        
        // Check if we should generate an image
        if (!prompts.shouldGenerate) {
            alert('Please select at least one item to add to your empty room before generating a design.');
            return;
        }
        
        let imageUrls = await generateImageWithControlNet(currentUploadedImage, prompts.positivePrompt, prompts.negativePrompt, replicateApiKey);
        let imageUrl;
        if (Array.isArray(imageUrls)) {
            imageUrl = imageUrls[0];
        } else if (typeof imageUrls === 'string') {
            imageUrl = imageUrls;
        } else {
            imageUrl = '';
        }
        
        design.imageUrl = imageUrl;
        design.loading = false;
        design.needsRetry = false;
        design.isFallback = false;
        
        console.log('Retry successful');
        
    } catch (error) {
        console.error('Retry failed:', error);
        design.imageUrl = '';
        design.loading = false;
        design.needsRetry = true;
        design.isFallback = false;
        design.errorMessage = error.message;
    }
    
    // Update the card
    updateDesignCard(design, 0);
}

function updateDesignCard(cardData, index) {
    // Find the card by data-design-id
    const card = designCarousel.querySelector(`[data-design-id="design-${index}"]`);
    console.log(`Updating card ${index}, found card: ${!!card}`);
    if (!card) return;
    // Fade out whiteboard, fade in image
    const whiteboard = card.querySelector('.whiteboard-container');
    const img = card.querySelector('.generated-image'); // Select the generated image specifically
    if (whiteboard) {
        whiteboard.classList.add('fade-out');
        setTimeout(() => {
            whiteboard.remove();
            
            // Check if we need to show retry button instead of image
            if (cardData.needsRetry) {
                showRetryButton(card, cardData, index);
                return;
            }
            
            if (img) {
                img.onload = () => {
                    console.log(`Image ${index} loaded successfully`);
                    img.style.opacity = 1;
                    img.style.display = 'block';
                    img.style.zIndex = 3;
                    
                    // Remove the reveal-loading class to show the image container
                    const revealContainer = card.querySelector('.image-reveal-container');
                    if (revealContainer) {
                        revealContainer.classList.remove('reveal-loading');
                    }
                    
                    // Re-setup the reveal slider after image loads
                    setupRevealSliderForCard(card, index);
                };
                img.onerror = () => {
                    console.error(`Image ${index} failed to load: ${cardData.imageUrl}`);
                    // Still remove the loading class even if image fails to load
                    const revealContainer = card.querySelector('.image-reveal-container');
                    if (revealContainer) {
                        revealContainer.classList.remove('reveal-loading');
                    }
                };
                img.src = cardData.imageUrl;
                img.classList.add('fade-in');
                img.style.opacity = 1;
                img.style.zIndex = 3; // Ensure it's on top
                
                // Add reveal slider if it doesn't exist
                const revealContainer = card.querySelector('.image-reveal-container');
                if (revealContainer && !revealContainer.querySelector('.reveal-slider')) {
                    console.log(`Adding reveal slider to card ${index}`);
                    const revealSlider = document.createElement('input');
                    revealSlider.type = 'range';
                    revealSlider.className = 'reveal-slider';
                    revealSlider.min = '0';
                    revealSlider.max = '100';
                    revealSlider.value = '0';
                    revealSlider.setAttribute('orient', 'vertical');
                    revealSlider.setAttribute('aria-label', 'Reveal Original Image');
                    revealSlider.setAttribute('title', 'Slide down to reveal original image');
                    
                    // Add backdrop for slider visibility
                    const sliderBackdrop = document.createElement('div');
                    sliderBackdrop.className = 'slider-backdrop';
                    revealContainer.appendChild(sliderBackdrop);
                    
                    revealContainer.appendChild(revealSlider);
                    
                    // Add slider indicators
                    const sliderIndicators = document.createElement('div');
                    sliderIndicators.className = 'slider-indicators';
                    sliderIndicators.innerHTML = `
                        <div class="slider-indicator slider-indicator-top">
                            <span>Generated</span>
                        </div>
                        <div class="slider-indicator slider-indicator-bottom">
                            <span>Original</span>
                        </div>
                    `;
                    revealContainer.appendChild(sliderIndicators);
                    
                    // Add hint arrows
                    const hintArrows = document.createElement('div');
                    hintArrows.className = 'slider-hint-arrows';
                    hintArrows.innerHTML = `
                        <div class="slider-hint-arrow"></div>
                        <div class="slider-hint-arrow"></div>
                        <div class="slider-hint-arrow"></div>
                    `;
                    revealContainer.appendChild(hintArrows);
                    
                    // Set up reveal slider functionality for this card
                    setupRevealSliderForCard(card, index);
                }
                
                // Ensure the generated image is fully visible after loading
                setTimeout(() => {
                    img.style.opacity = 1;
                    img.style.display = 'block';
                    img.style.zIndex = 3;
                    
                    // Remove the reveal-loading class to show the image container
                    const revealContainer = card.querySelector('.image-reveal-container');
                    if (revealContainer) {
                        revealContainer.classList.remove('reveal-loading');
                    }
                    
                    console.log(`Image ${index} should be visible now. Opacity: ${img.style.opacity}, Display: ${img.style.display}`);
                    // Re-setup the reveal slider to ensure it's working
                    setupRevealSliderForCard(card, index);
                }, 100);
            }
            // Update disclaimer and description if fallback
            const disclaimer = card.querySelector('.design-disclaimer');
            if (cardData.isFallback && disclaimer) {
                disclaimer.innerHTML = `<p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>`;
                disclaimer.classList.add('error');
            }
            const desc = card.querySelector('.design-description');
            if (desc) desc.textContent = cardData.description;
            // Update compare button state
            const btn = card.querySelector('.compare-btn');
            if (btn) {
                if (cardData.isFallback) {
                    btn.disabled = true;
                    btn.style.opacity = '0.5';
                    btn.style.cursor = 'not-allowed';
                    btn.querySelector('span').textContent = "Compare N/A";
                } else {
                    btn.disabled = false;
                    btn.style.opacity = '';
                    btn.style.cursor = '';
                    btn.querySelector('span').textContent = "Compare with Original";
                }
            }
        }, 400); // match fade-out duration
    }
}

function createFallbackDesigns() {
    // Create fallback design when API calls fail
    const imagesArray = fallbackImages[currentRoomType];
    const stylesArray = designStyles[currentRoomType];
    const descriptionsArray = designDescriptions[currentRoomType];
    
    return [{
        id: 'design-0',
        title: stylesArray[0],
        description: `${descriptionsArray[0]} (Fallback image - API unavailable/failed)`,
        imageUrl: imagesArray[0],
        originalImageUrl: currentUploadedImage,
        prompt: aiPrompts[currentRoomType],
        isFallback: true
    }];
}

function displayDesigns(designs) {
    designCarousel.innerHTML = '';
    
    designs.forEach((design, index) => {
        const designCard = document.createElement('div');
        designCard.classList.add('design-card');
        designCard.setAttribute('data-design-id', design.id);
        
        let disclaimer = '';
        if (design.isFallback) {
            disclaimer = `
                <div class="design-disclaimer error">
                    <p><strong>Note:</strong> API Error/Failed. Showing sample image. Please check API key or try again.</p>
                </div>
            `;
        } else {
            disclaimer = `<div class="design-disclaimer" style="display:none"></div>`;
        }
        
        // Only show reveal slider if not loading
        const showRevealSlider = !design.loading;
        
        designCard.innerHTML = `
            <div class="design-image-container">
                <div class="whiteboard-container${design.loading ? '' : ' fade-out'}">
                    <canvas class="whiteboard-canvas"></canvas>
                    <div class="whiteboard-controls">
                        <button class="whiteboard-clear" title="Clear drawing">
                            <i data-feather="trash-2"></i>
                        </button>
                        <div class="whiteboard-colors">
                            <div class="color-option active" data-color="#6366f1"></div>
                            <div class="color-option" data-color="#ef4444"></div>
                            <div class="color-option" data-color="#10b981"></div>
                            <div class="color-option" data-color="#f59e0b"></div>
                            <div class="color-option" data-color="#8b5cf6"></div>
                            <div class="color-option" data-color="#000000"></div>
                        </div>
                        <div class="whiteboard-hint">Draw while waiting...</div>
                    </div>
                </div>
                <div class="image-reveal-container${design.loading ? ' reveal-loading' : ''}">
                    <img class="design-image original-image" src="${design.originalImageUrl}" alt="Original Room">
                    <img class="design-image generated-image${design.loading ? '' : ' fade-in'}" src="${design.loading ? '' : design.imageUrl}" alt="${design.title}" style="opacity:${design.loading ? 0 : 1}; z-index: 3;">
                    ${showRevealSlider ? `<input type="range" class="reveal-slider" min="0" max="100" value="100" orient="vertical" aria-label="Reveal Original Image" title="Slide down to reveal original image">` : ''}
                </div>
                ${disclaimer}
            </div>
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-description">${design.description}</p>
            </div>
        `;
        
        designCarousel.appendChild(designCard);
    });
    
    feather.replace();
    
    // Initialize whiteboard for loading card
    const loadingCard = designCarousel.querySelector('.design-card[data-design-id]');
    if (loadingCard) {
        const whiteboardCanvas = loadingCard.querySelector('.whiteboard-canvas');
        if (whiteboardCanvas) {
            initializeWhiteboard(whiteboardCanvas, loadingCard);
        }
    }
    
    // Add reveal slider functionality to the card
    const card = designCarousel.querySelector('.design-card');
    if (card) {
        console.log('Setting up reveal slider for design card');
        setupRevealSliderForCard(card, 0);
    }
}

// ===== WHITEBOARD MODULE =====
// This module can be easily extracted to a separate file (e.g., whiteboard.js)
// and imported as needed to keep the main file clean and modular.
function initializeWhiteboard(canvas, card) {
    const ctx = canvas.getContext('2d');
    const controls = card.querySelector('.whiteboard-controls');
    const clearBtn = card.querySelector('.whiteboard-clear');
    const colorOptions = card.querySelectorAll('.color-option');
    
    // Whiteboard state
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentColor = '#6366f1';
    let lineWidth = 3;
    
    // Set up canvas with proper sizing
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.scale(dpr, dpr);
    
    // Configure drawing style
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = currentColor;
    
    // Clear canvas with white background
    function clearCanvas() {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Initialize with white background
    clearCanvas();
    
    // Get drawing coordinates
    function getDrawingCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }
    
    // Drawing functions
    function startDrawing(e) {
        isDrawing = true;
        const coords = getDrawingCoords(e);
        lastX = coords.x;
        lastY = coords.y;
        
        // Prevent scrolling on mobile
        e.preventDefault();
    }
    
    function draw(e) {
        if (!isDrawing) return;
        
        const coords = getDrawingCoords(e);
        
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();
        
        lastX = coords.x;
        lastY = coords.y;
        
        // Prevent scrolling on mobile
        e.preventDefault();
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);
    
    // Clear button
    clearBtn.addEventListener('click', clearCanvas);
    
    // Color selection
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to clicked option
            option.classList.add('active');
            // Update drawing color
            currentColor = option.dataset.color;
            ctx.strokeStyle = currentColor;
        });
    });
    
    // Add color styles
    colorOptions.forEach(option => {
        option.style.backgroundColor = option.dataset.color;
    });
}

function hideHintArrows(card) {
    const hintArrows = card.querySelector('.slider-hint-arrows');
    if (hintArrows) {
        hintArrows.classList.add('hidden');
        // Remove the arrows from DOM after animation
        setTimeout(() => {
            if (hintArrows.parentNode) {
                hintArrows.parentNode.removeChild(hintArrows);
            }
        }, 300);
    }
}

function setupRevealSliderForCard(card, index) {
    const revealContainer = card.querySelector('.image-reveal-container');
    const revealSlider = card.querySelector('.reveal-slider');
    const generatedImage = card.querySelector('.generated-image');
    
    console.log(`Card ${index}: revealContainer=${!!revealContainer}, revealSlider=${!!revealSlider}, generatedImage=${!!generatedImage}`);
    
    if (!revealContainer || !revealSlider || !generatedImage) {
        console.log(`Missing elements for card ${index}`);
        return;
    }

    // Remove any existing event listeners
    const newSlider = revealSlider.cloneNode(true);
    revealSlider.parentNode.replaceChild(newSlider, revealSlider);

    // Set up slider functionality
    const handleSliderChange = (e) => {
        const value = e.target.value;
        const opacity = (100 - value) / 100; // Invert: 0=full opacity, 100=transparent
        generatedImage.style.opacity = opacity;
        console.log(`Slider value: ${value}, opacity: ${opacity}`);
        console.log(`Generated image opacity after change: ${generatedImage.style.opacity}`);
    };
    
    newSlider.addEventListener('input', handleSliderChange);
    newSlider.addEventListener('change', handleSliderChange); // Fallback for some browsers
    
    // Add debugging for slider interaction
    newSlider.addEventListener('mousedown', () => {
        console.log(`Slider ${index} mouse down - starting interaction`);
        hideHintArrows(card);
    });
    
    newSlider.addEventListener('touchstart', () => {
        console.log(`Slider ${index} touch start - starting interaction`);
        hideHintArrows(card);
    });
    
    // Hide arrows on first input/change event
    let arrowsHidden = false;
    const hideArrowsOnFirstMove = () => {
        if (!arrowsHidden) {
            hideHintArrows(card);
            arrowsHidden = true;
        }
    };
    
    newSlider.addEventListener('input', hideArrowsOnFirstMove);
    newSlider.addEventListener('change', hideArrowsOnFirstMove);
    
    // Test slider immediately
    console.log(`Testing slider ${index} - Current value: ${newSlider.value}, Generated image opacity: ${generatedImage.style.opacity}`);

    // Also ensure original image is properly positioned
    const originalImage = card.querySelector('.original-image');
    if (originalImage) {
        originalImage.style.position = 'absolute';
        originalImage.style.top = '0';
        originalImage.style.left = '0';
        originalImage.style.width = '100%';
        originalImage.style.height = '100%';
        originalImage.style.zIndex = 2;
        originalImage.style.opacity = 1;
        originalImage.style.display = 'block';
        console.log(`Original image positioned for card ${index}`);
    }

    // Initialize with full opacity (generated image fully visible)
    generatedImage.classList.remove('fade-in'); // Remove fade-in class to prevent CSS conflicts
    generatedImage.style.opacity = 1;
    generatedImage.style.display = 'block';
    generatedImage.style.zIndex = 3;
    generatedImage.style.position = 'absolute';
    generatedImage.style.top = '0';
    generatedImage.style.left = '0';
    generatedImage.style.width = '100%';
    generatedImage.style.height = '100%';
    newSlider.value = 0;
    
    // Test layering by temporarily setting opacity to 0.5
    setTimeout(() => {
        console.log(`Testing layering for card ${index} - setting opacity to 0.5`);
        generatedImage.style.opacity = 0.5;
        setTimeout(() => {
            console.log(`Restoring opacity to 1 for card ${index}`);
            generatedImage.style.opacity = 1;
            newSlider.value = 0;
        }, 2000); // Show blended for 2 seconds, then restore
    }, 1000); // Wait 1 second before testing
    
    // Force a reflow to ensure styles are applied
    generatedImage.offsetHeight;
    
    console.log(`Initialized card ${index} with opacity: ${generatedImage.style.opacity}, display: ${generatedImage.style.display}`);
    console.log(`Generated image computed style:`, window.getComputedStyle(generatedImage).opacity);
    console.log(`Generated image src:`, generatedImage.src);
}

function goBackToPreview() {
    resultsSection.classList.add('hidden');
    previewContainer.classList.remove('hidden');
}

function regenerateDesigns() {
    // Simply call the generate designs function again
    generateDesigns();
}

function saveCurrentDesign() {
    // Find the currently visible design card (first one in mobile view)
    const selectedDesign = document.querySelector('.design-card');
    if (selectedDesign) {
        const designImage = selectedDesign.querySelector('.design-image');
        if (designImage) {
            const link = document.createElement('a');
            link.download = 'decorai-design.jpg';
            
            // Create a temporary canvas to convert the image to downloadable format
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.crossOrigin = 'anonymous'; // Enable cross-origin image downloading
            
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                
                try {
                    link.href = canvas.toDataURL('image/jpeg');
                    link.click();
                } catch (error) {
                    console.error('Error saving image:', error);
                    
                    // Fallback: open image in new tab
                    window.open(designImage.src, '_blank');
                }
            };
            
            img.onerror = function() {
                console.error('Error loading image for download');
                // Fallback: open in new tab
                window.open(designImage.src, '_blank');
            };
            
            img.src = designImage.src;
        }
    }
}

// Add CSS for camera view, comparison button, and disclaimer
const style = document.createElement('style');
style.textContent = `
    .camera-view {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .camera-view video {
        max-width: 100%;
        max-height: 80vh;
    }
    
    .capture-btn {
        position: absolute;
        bottom: 40px;
        background-color: white;
        border: none;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
    
    .cancel-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: white;
    }
    
    .drag-over {
        border-color: var(--primary-color);
        background-color: rgba(99, 102, 241, 0.05);
    }
    
    .design-card {
        min-height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: var(--border-radius);
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        background: #fff;
        margin-bottom: 24px;
        overflow: hidden;
    }
    .design-image-container {
        position: relative;
        overflow: hidden;
        min-height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f6f6f7;
    }
    
    .whiteboard-container {
        width: 100%;
        height: 240px;
        position: relative;
        border-radius: var(--border-radius);
        background: #ffffff;
        border: 2px dashed #d1d5db;
        opacity: 1;
        transition: opacity 0.4s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
    }
    .whiteboard-container.fade-out {
        opacity: 0;
        transition: opacity 0.4s;
    }
    .whiteboard-canvas {
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius);
        cursor: crosshair;
        background: #ffffff;
        touch-action: none;
        transition: cursor 0.2s;
    }
    .whiteboard-canvas:active {
        cursor: none;
    }
    .whiteboard-controls {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        padding: 6px 12px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.5);
    }
    .whiteboard-clear {
        background: none;
        border: none;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: #6b7280;
        transition: all 0.2s;
    }
    .whiteboard-clear:hover {
        background: #f3f4f6;
        color: #374151;
    }
    .whiteboard-colors {
        display: flex;
        gap: 4px;
        margin: 0 8px;
    }
    .color-option {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.2s;
        position: relative;
    }
    .color-option:hover {
        transform: scale(1.1);
    }
    .color-option.active {
        border-color: #374151;
        transform: scale(1.1);
    }
    .color-option.active::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
    }
    .whiteboard-hint {
        font-size: 10px;
        color: #9ca3af;
        white-space: nowrap;
        animation: pulse-hint 2s infinite;
    }
    @keyframes pulse-hint {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
    }
    .design-image {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: var(--border-radius);
        opacity: 0;
        transition: opacity 0.4s;
        position: relative;
        z-index: 2;
        background: #f6f6f7;
    }
    .design-image.fade-in {
        opacity: 1;
        transition: opacity 0.4s;
    }
    .compare-btn {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        padding: 8px 12px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: all 0.2s ease;
        z-index: 2;
    }
    
    .compare-btn:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }
    
    .design-disclaimer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(220, 38, 38, 0.8);
        color: white;
        padding: 8px;
        font-size: 11px;
        text-align: center;
        z-index: 2;
    }
    
    .design-disclaimer p {
        margin: 0;
        color: white;
    }
    
    .login-btn.authenticated {
        color: var(--success-color);
        border-color: var(--success-color);
    }
    
    .design-disclaimer.warning {
        background-color: rgba(245, 158, 11, 0.8); /* Amber color */
    }
    .design-disclaimer.error {
         background-color: rgba(220, 38, 38, 0.8); /* Red color */
    }
    
    .room-type-selection {
        margin: 20px 0;
        padding: 0 20px;
    }
    
    .room-type-selection h3 {
        margin-bottom: 16px;
        color: #1f2937;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    
    .room-options {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
    }
    
    .room-option {
        position: relative;
        flex: 1;
        min-width: 320px;
        display: flex;
    }
    
    .room-option input[type="radio"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    
    .room-option label {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #fff;
        height: 100px;
        width: 100%;
        box-sizing: border-box;
        flex: 1;
    }
    
    .room-option label:hover {
        border-color: #d1d5db;
        background: #f9fafb;
    }
    
    .room-option input[type="radio"]:checked + label {
        border-color: var(--primary-color);
        background: rgba(99, 102, 241, 0.05);
    }
    
    .room-option .option-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #f3f4f6;
        color: #6b7280;
        transition: all 0.2s ease;
    }
    
    .room-option input[type="radio"]:checked + label .option-icon {
        background: var(--primary-color);
        color: white;
    }
    
    .room-option .option-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
    
    .room-option .option-text h4 {
        margin: 0 0 4px 0;
        color: #1f2937;
        font-size: 1rem;
        font-weight: 600;
    }
    
    .room-option .option-text p {
        margin: 0;
        color: #6b7280;
        font-size: 0.875rem;
        line-height: 1.4;
    }
    
        @media (min-width: 700px) {
        .room-options {
            flex-direction: row;
            gap: 16px;
        }
        
        .room-option {
            flex: 1;
            min-width: 320px;
        }
    }
    
    @media (max-width: 699px) {
        .room-options {
            flex-direction: column;
            gap: 12px;
        }
        
        .room-option {
            min-width: auto;
            width: 100%;
        }
    }
    
    /* Room Items Selection Styles */
    .room-items-selection {
        margin: 20px 0;
        padding: 0 20px;
    }
    
    .room-items-selection h3 {
        margin-bottom: 8px;
        color: #1f2937;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    
    .selection-hint {
        text-align: center;
        color: #6b7280;
        font-size: 0.875rem;
        margin-bottom: 20px;
    }
    
    .items-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .item-option {
        position: relative;
    }
    
    .item-option input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    
    .item-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 16px 12px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #fff;
        height: 100px;
        box-sizing: border-box;
        justify-content: center;
    }
    
    .item-label:hover {
        border-color: #d1d5db;
        background: #f9fafb;
        transform: translateY(-2px);
    }
    
    .item-option input[type="checkbox"]:checked + .item-label {
        border-color: var(--primary-color);
        background: rgba(99, 102, 241, 0.05);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
    }
    
    .item-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #f3f4f6;
        color: #6b7280;
        transition: all 0.2s ease;
    }
    
    .item-option input[type="checkbox"]:checked + .item-label .item-icon {
        background: var(--primary-color);
        color: white;
    }
    
    .item-name {
        font-size: 0.875rem;
        font-weight: 500;
        color: #374151;
        text-align: center;
        line-height: 1.2;
    }
    
    .item-option input[type="checkbox"]:checked + .item-label .item-name {
        color: var(--primary-color);
        font-weight: 600;
    }
    
    @media (max-width: 480px) {
        .items-grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            gap: 8px;
        }
        
        .item-label {
            padding: 12px 8px;
            height: 80px;
        }
        
        .item-icon {
            width: 28px;
            height: 28px;
        }
        
        .item-name {
            font-size: 0.8rem;
        }
    }
    
    /* Furnished Options Styles */
    .furnished-options {
        margin: 20px 0;
        padding: 0 20px;
    }
    
    .furnished-options h3 {
        margin-bottom: 16px;
        color: #1f2937;
        font-size: 1.2rem;
        font-weight: 600;
        text-align: center;
    }
    
    .furnished-options-grid {
        display: flex;
        flex-direction: column;
        gap: 16px;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .furnished-option {
        position: relative;
    }
    
    .furnished-option input[type="radio"] {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
    
    .furnished-option label {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 20px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: #fff;
        min-height: 120px;
        width: 100%;
        box-sizing: border-box;
        flex: 1;
    }
    
    .furnished-option label:hover {
        border-color: #d1d5db;
        background: #f9fafb;
    }
    
    .furnished-option input[type="radio"]:checked + label {
        border-color: var(--primary-color);
        background: rgba(99, 102, 241, 0.05);
    }
    
    .furnished-option .option-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: #f3f4f6;
        color: #6b7280;
        transition: all 0.2s ease;
    }
    
    .furnished-option input[type="radio"]:checked + label .option-icon {
        background: var(--primary-color);
        color: white;
    }
    
    .furnished-option .option-text {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        min-height: 80px;
    }
    
    .furnished-option .option-text h4 {
        margin: 0 0 8px 0;
        color: #1f2937;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.3;
    }
    
    .furnished-option .option-text p {
        margin: 0;
        color: #6b7280;
        font-size: 0.875rem;
        line-height: 1.5;
        flex: 1;
    }
    
    @media (min-width: 700px) {
        .furnished-options-grid {
            flex-direction: column;
            gap: 16px;
        }
        
        .furnished-option {
            width: 100%;
        }
    }
    
    @media (max-width: 699px) {
        .furnished-options-grid {
            flex-direction: column;
            gap: 12px;
        }
        
        .furnished-option {
            width: 100%;
        }
    }
     
     .image-preview-wrapper {
         position: relative;
         display: block;
         width: 100%;
         max-width: 600px;
         min-width: 50%;
         margin: 0 auto;
         border-radius: var(--border-radius);
         overflow: hidden;
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         transition: transform 0.2s ease;
     }
     
     .image-preview-wrapper:hover {
         transform: scale(1.02);
     }
     
     .image-preview-wrapper img {
         display: block;
         width: 100%;
         height: auto;
         border-radius: var(--border-radius);
     }
     
     .image-overlay {
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         bottom: 0;
         background: rgba(0, 0, 0, 0.5);
         display: flex;
         align-items: center;
         justify-content: center;
         opacity: 0;
         transition: opacity 0.3s ease;
         border-radius: var(--border-radius);
         backdrop-filter: blur(4px);
     }
     
     .image-preview-wrapper:hover .image-overlay {
         opacity: 1;
     }
     
     .change-image-overlay-btn {
         background: rgba(255, 255, 255, 0.95);
         color: #1f2937;
         border: none;
         border-radius: 12px;
         padding: 16px 24px;
         font-size: 1rem;
         font-weight: 600;
         cursor: pointer;
         display: flex;
         align-items: center;
         gap: 8px;
         transition: all 0.2s ease;
         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
         backdrop-filter: blur(10px);
         border: 2px solid rgba(255, 255, 255, 0.5);
     }
     
     .change-image-overlay-btn:hover {
         background: white;
         transform: translateY(-2px);
         box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
     }
     
     .change-image-overlay-btn:active {
         transform: translateY(0);
         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
     }
     
     .change-image-overlay-btn i {
         font-size: 1.1rem;
     }
     
     .preview-container {
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 20px;
         text-align: center;
     }
     
     .preview-actions {
         display: flex;
         justify-content: center;
         margin-top: 24px;
     }
    .image-reveal-container {
        position: relative;
        width: 100%;
        height: 240px;
        overflow: hidden;
        border-radius: var(--border-radius);
        background: #f6f6f7;
    }
    .image-reveal-container.reveal-loading {
        display: none;
    }
    .image-reveal-container .original-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
        z-index: 2;
        background: #f6f6f7;
    }
    .image-reveal-container .generated-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--border-radius);
        z-index: 3;
        background: #f6f6f7;
        transition: opacity 0.2s ease;
        opacity: 1; /* Ensure it starts visible */
    }
    .image-reveal-container .generated-image.fade-in {
        opacity: 1; /* Initial opacity, can be overridden by slider */
    }
    .reveal-slider {
        position: absolute;
        right: -28px;
        top: 50%;
        transform: translateY(-50%) rotate(90deg);
        transform-origin: center;
        width: 140px;
        height: 12px;
        background: transparent;
        -webkit-appearance: none;
        appearance: none;
        cursor: grab;
        z-index: 4;
        outline: none;
        opacity: 1;
        transition: all 0.2s ease;
        pointer-events: all;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    }
    
    .slider-backdrop {
        position: absolute;
        right: -34px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 148px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 12px;
        z-index: 3;
        backdrop-filter: blur(2px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    .reveal-slider:hover {
        opacity: 1;
        transform: translateY(-50%) rotate(90deg) scale(1.05);
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    }
    .reveal-slider:active {
        cursor: grabbing;
        transform: translateY(-50%) rotate(90deg) scale(0.98);
    }
    .reveal-slider::-webkit-slider-track {
        width: 100%;
        height: 12px;
        background: linear-gradient(to bottom, #9ca3af 0%, #f9fafb 30%, #e5e7eb 70%, #9ca3af 100%);
        border-radius: 6px;
        border: 2px solid rgba(0, 0, 0, 0.4);
        box-shadow: 
            inset 0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 -2px 2px rgba(255, 255, 255, 1),
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 1px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.8);
    }
    .reveal-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.15),
            inset 0 -1px 1px rgba(255, 255, 255, 0.8),
            0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: grab;
        transition: all 0.2s ease;
        position: relative;
    }
    .reveal-slider::-webkit-slider-thumb:active {
        background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 50%, #9ca3af 100%);
        transform: scale(0.95);
        cursor: grabbing;
        box-shadow: 
            inset 0 3px 6px rgba(0, 0, 0, 0.25),
            inset 0 -1px 1px rgba(255, 255, 255, 0.6),
            0 1px 2px rgba(0, 0, 0, 0.1);
    }
    .reveal-slider::-webkit-slider-thumb:hover {
        background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #d1d5db 100%);
        transform: scale(1.05);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.12),
            inset 0 -1px 1px rgba(255, 255, 255, 0.9),
            0 1px 3px rgba(0, 0, 0, 0.15);
    }
    .reveal-slider::-moz-range-track {
        width: 100%;
        height: 12px;
        background: linear-gradient(to bottom, #9ca3af 0%, #f9fafb 30%, #e5e7eb 70%, #9ca3af 100%);
        border-radius: 6px;
        border: 2px solid rgba(0, 0, 0, 0.4);
        box-shadow: 
            inset 0 3px 6px rgba(0, 0, 0, 0.4),
            inset 0 -2px 2px rgba(255, 255, 255, 1),
            0 2px 4px rgba(0, 0, 0, 0.3),
            0 1px 1px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 255, 255, 0.8);
    }
    .reveal-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.15),
            inset 0 -1px 1px rgba(255, 255, 255, 0.8),
            0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: grab;
        transition: all 0.2s ease;
    }
    .reveal-slider::-moz-range-thumb:hover {
        background: linear-gradient(135deg, #f9fafb 0%, #e5e7eb 50%, #d1d5db 100%);
        transform: scale(1.05);
        box-shadow: 
            inset 0 2px 4px rgba(0, 0, 0, 0.12),
            inset 0 -1px 1px rgba(255, 255, 255, 0.9),
            0 1px 3px rgba(0, 0, 0, 0.15);
    }
    
    .retry-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        border-radius: var(--border-radius);
        padding: 20px;
        box-sizing: border-box;
    }
    
    .retry-content {
        text-align: center;
        max-width: 280px;
    }
    
    .retry-icon {
        color: #f59e0b;
        font-size: 28px;
        margin-bottom: 12px;
    }
    
    .retry-message {
        margin-bottom: 16px;
    }
    
    .retry-message h4 {
        color: #374151;
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 8px 0;
    }
    
    .retry-message p {
        color: #6b7280;
        font-size: 13px;
        line-height: 1.4;
        margin: 0;
    }
    
    .retry-btn {
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
        color: white;
        border: none;
        border-radius: 8px;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0 auto;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
    }
    
    .retry-btn:hover {
        background: linear-gradient(135deg, #5856f0 0%, #7c3aed 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
    }
    
    .retry-btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(99, 102, 241, 0.3);
    }
    
    .retry-btn i {
        font-size: 16px;
    }
    
    .slider-indicators {
        position: absolute;
        right: 35px;
        top: 0;
        bottom: 0;
        width: 12px;
        z-index: 5;
        pointer-events: none;
    }
    
    .slider-indicator {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        font-size: 10px;
        font-weight: 600;
        opacity: 0.8;
        transition: opacity 0.2s ease;
    }
    
    .slider-indicator span {
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
    }
    
    .image-reveal-container:hover .slider-indicator {
        opacity: 1;
    }
    
    .slider-indicator-top {
        position: absolute;
        top: calc(50% - 70px - 8px);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        align-items: center;
    }
    
    .slider-indicator-bottom {
        position: absolute;
        top: calc(50% + 70px + 8px);
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        align-items: center;
    }
    
    .slider-hint-arrows {
        position: absolute;
        right: -33px;
        top: 50%;
        transform: translateY(30px);
        display: flex;
        flex-direction: column;
        gap: 2px;
        z-index: 6;
        pointer-events: none;
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }
    
    .slider-hint-arrows.hidden {
        opacity: 0;
        pointer-events: none;
    }
    
    .slider-hint-arrow {
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 6px solid rgba(255, 255, 255, 0.9);
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
        animation: arrow-bounce 1.5s infinite;
    }
    
    .slider-hint-arrow:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .slider-hint-arrow:nth-child(3) {
        animation-delay: 0.4s;
    }
    
    @keyframes arrow-bounce {
        0%, 100% {
            transform: translateY(0);
            opacity: 0.8;
        }
        50% {
            transform: translateY(3px);
            opacity: 1;
        }
    }
`;

document.head.appendChild(style); 