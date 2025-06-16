import feather from 'feather-icons';

// DOM Elements
const uploadContainer = document.getElementById('upload-container');
const previewContainer = document.getElementById('preview-container');
const roomPreview = document.getElementById('room-preview');
const roomUpload = document.getElementById('room-upload');
const cameraBtn = document.getElementById('camera-btn');
const changeImageBtn = document.getElementById('change-image-btn');
const continueBtn = document.getElementById('continue-btn');
const roomOptionsSection = document.getElementById('room-options-section');
const backToUploadBtn = document.getElementById('back-to-upload-btn');
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

// Auth state
let openaiApiKey = localStorage.getItem('openai_api_key') || '';
let replicateApiKey = localStorage.getItem('replicate_api_key') || '';

// Example designs - in a real implementation, these would be AI-generated versions of the user's uploaded room
// NOTE: In an actual implementation, these would be the same room with different furniture layouts
// For this demo, we're using sample images to simulate the concept
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

// AI prompt templates for different room types - adjusted slightly for img2img
const aiPrompts = {
    empty: "Furnish this empty room with aesthetic, common furniture (couches, tables, lamps, art). Ensure a balanced color scheme and space for movement, matching the style: ",
    furnished: "Rearrange the furniture and items in this furnished room to improve aesthetics and flow, using only existing items. Ensure space for movement, matching the style: "
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
const PROXY_SERVER_URL = 'http://localhost:3001'; // URL of our new Node.js proxy
const REPLICATE_API_URL = `${PROXY_SERVER_URL}/replicate/predictions`;
const REPLICATE_POLL_URL = `${PROXY_SERVER_URL}/replicate/poll`;
const REPLICATE_MODEL_VERSION = 'stability-ai/stable-diffusion-3.5-large'; // Example version, check replicate for latest/best

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {

    // Event Listeners (Add null checks for safety)
    if (roomUpload) roomUpload.addEventListener('change', handleImageUpload);
    if (cameraBtn) cameraBtn.addEventListener('click', openCamera);
    if (changeImageBtn) changeImageBtn.addEventListener('click', resetImageUpload);
    if (continueBtn) continueBtn.addEventListener('click', showRoomOptions);
    if (backToUploadBtn) backToUploadBtn.addEventListener('click', goBackToUpload);
    if (generateBtn) generateBtn.addEventListener('click', generateDesigns);
    if (backToOptionsBtn) backToOptionsBtn.addEventListener('click', goBackToOptions);
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

                    reader.onload = function(event) {
                        currentUploadedImage = event.target.result;
                        if (roomPreview) roomPreview.src = currentUploadedImage;
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

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file && isValidImage(file)) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
            currentUploadedImage = event.target.result;
            roomPreview.src = currentUploadedImage;
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
                
                captureBtn.addEventListener('click', () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    
                    currentUploadedImage = canvas.toDataURL('image/jpeg');
                    roomPreview.src = currentUploadedImage;
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

function resetImageUpload() {
    currentUploadedImage = null;
    roomPreview.src = '';
    roomUpload.value = '';
    previewContainer.classList.add('hidden');
    uploadContainer.classList.remove('hidden');
}

function showRoomOptions() {
    if (currentUploadedImage) {
        previewContainer.classList.add('hidden');
        roomOptionsSection.classList.remove('hidden');
    }
}

function goBackToUpload() {
    roomOptionsSection.classList.add('hidden');
    previewContainer.classList.remove('hidden');
}

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

    roomOptionsSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    loadingIndicator.classList.remove('hidden');
    designCarousel.innerHTML = '';
    
    // Ensure the room type is correctly set
    const emptyRadio = document.getElementById('empty-room');
    const furnishedRadio = document.getElementById('furnished-room');
    
    // Double-check the currentRoomType matches the selected radio
    if (emptyRadio.checked) {
        currentRoomType = 'empty';
    } else if (furnishedRadio.checked) {
        currentRoomType = 'furnished';
    }
    
    // Prepare base prompt based on room type
    const basePrompt = aiPrompts[currentRoomType];

    console.log(`Generating designs for ${currentRoomType} room using Replicate`);

    try {
        // Create 3 design variations
        const designs = [];
        const generationPromises = [];

        for (let i = 0; i < 3; i++) {
            const style = designStyles[currentRoomType][i];
            // Construct the full prompt including the style
            const fullPrompt = `${basePrompt}${style}.`;

            console.log(`Starting generation for style: ${style}`);
            // Add the promise to the array
             generationPromises.push(
                generateImageWithReplicate(currentUploadedImage, fullPrompt)
                    .then(result => ({ // Wrap result with metadata
                        id: `design-${i}`,
                        title: style,
                        description: designDescriptions[currentRoomType][i],
                        imageUrl: result.imageUrl, // Assuming result is { imageUrl: '...' }
                        originalImageUrl: currentUploadedImage,
                        prompt: fullPrompt,
                        isFallback: false
                    }))
                    .catch(error => { // Handle individual generation errors
                        console.error(`Error generating design ${i} (${style}):`, error);
                        return {
                            id: `design-${i}`,
                            title: style,
                            description: `${designDescriptions[currentRoomType][i]} (Generation failed - showing fallback)`,
                            imageUrl: fallbackImages[currentRoomType][i],
                            originalImageUrl: currentUploadedImage,
                            prompt: fullPrompt,
                            isFallback: true
                        };
                    })
            );
        }

         // Wait for all generation promises to settle (either resolve or reject)
        const results = await Promise.all(generationPromises);

        generatedDesigns = results;
        displayDesigns(generatedDesigns);

    } catch (error) { // Catch errors during the setup phase (before Promise.all)
        console.error('Error setting up design generation:', error);
        alert('Failed to start design generation. Please try again.');

        // Use fallback designs if setup fails
        generatedDesigns = createFallbackDesigns();
        displayDesigns(generatedDesigns);
    } finally {
        loadingIndicator.classList.add('hidden');
    }
}

// Helper function for polling Replicate API
async function pollReplicatePrediction(predictionUrl, apiKey) {
    let prediction;
    let attempts = 0;
    const maxAttempts = 60; // Poll for ~2 minutes max (60 attempts * 2 seconds)
    const delay = 2000; // 2 seconds

    while (attempts < maxAttempts) {
        attempts++;
        try {
            const response = await fetch(REPLICATE_POLL_URL, { // Use the new proxy poll URL
                method: 'POST', // Method is POST for our proxy
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ predictionUrl }) // Send only predictionUrl to proxy
            });

            if (!response.ok) {
                 // Handle non-2xx responses during polling
                 const errorData = await response.json().catch(() => ({})); // Try to parse error, default to empty obj
                 console.error(`Polling error: Status ${response.status}`, errorData);
                 // Don't retry on 4xx errors immediately, could be auth issue
                 if (response.status >= 400 && response.status < 500) {
                      throw new Error(`Polling failed with status ${response.status}: ${errorData.detail || 'Client error'}`);
                 }
                 // Retry on 5xx or network issues after delay
                 await new Promise(resolve => setTimeout(resolve, delay));
                 continue; // Continue to next attempt
            }

            prediction = await response.json();

            console.log(`Polling attempt ${attempts}: Status - ${prediction.status}`);

            if (prediction.status === 'succeeded') {
                if (!prediction.output || prediction.output.length === 0) {
                    throw new Error('Replicate prediction succeeded but returned no output.');
                }
                return { imageUrl: prediction.output[0] }; // Assuming the first output is the image URL
            } else if (prediction.status === 'failed') {
                console.error('Replicate prediction failed:', prediction.error);
                throw new Error(`Replicate prediction failed: ${prediction.error}`);
            } else if (prediction.status === 'canceled') {
                 console.warn('Replicate prediction canceled:', prediction);
                 throw new Error('Replicate prediction was canceled.');
            }

            // Wait before the next poll for 'starting' or 'processing'
            await new Promise(resolve => setTimeout(resolve, delay));

        } catch (error) {
             // Handle fetch errors during polling (e.g., network issues)
             console.error(`Polling attempt ${attempts} failed: ${error.message}`);
             if (attempts >= maxAttempts) {
                  throw new Error(`Polling failed after ${maxAttempts} attempts: ${error.message}`);
             }
             // Wait before retrying fetch
             await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    throw new Error(`Replicate prediction timed out after ${maxAttempts} attempts.`);
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
        const startResponse = await fetch(REPLICATE_API_URL, { // Use the new proxy predictions URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                version: REPLICATE_MODEL_VERSION,
                input: {
                    prompt: prompt,
                    image: imageInput,
                }
                // apiKey is NO LONGER sent to the proxy from here
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

function createFallbackDesigns() {
    // Create fallback designs when API calls fail
    const designs = [];
    const imagesArray = fallbackImages[currentRoomType];
    const stylesArray = designStyles[currentRoomType];
    const descriptionsArray = designDescriptions[currentRoomType];
    
    for (let i = 0; i < 3; i++) {
        designs.push({
            id: `design-${i}`,
            title: stylesArray[i],
            description: `${descriptionsArray[i]} (Fallback image - API unavailable/failed)`,
            imageUrl: imagesArray[i],
            originalImageUrl: currentUploadedImage,
            prompt: aiPrompts[currentRoomType],
            isFallback: true
        });
    }
    
    return designs;
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
        }
        
        designCard.innerHTML = `
            <div class="design-image-container">
                <img class="design-image" src="${design.imageUrl}" alt="${design.title}">
                ${disclaimer}
                <button class="compare-btn" data-index="${index}">
                    <i data-feather="eye"></i>
                    <span>Compare with Original</span>
                </button>
            </div>
            <div class="design-info">
                <h3 class="design-title">${design.title}</h3>
                <p class="design-description">${design.description}</p>
            </div>
        `;
        
        designCarousel.appendChild(designCard);
    });
    
    // Initialize feather icons for the new buttons
    feather.replace();
    
    // Add compare functionality
    const compareButtons = document.querySelectorAll('.compare-btn');
    compareButtons.forEach(btn => {
        btn.addEventListener('mousedown', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const designImage = this.closest('.design-image-container').querySelector('.design-image');
            // Only allow comparison if it's not a fallback image
            if (!designs[index].isFallback) {
                 designImage.src = designs[index].originalImageUrl;
                 this.querySelector('span').textContent = "Viewing Original";
            } else {
                this.disabled = true; // Disable compare for fallback
            }
        });
        
        btn.addEventListener('mouseup', function() {
             if (!this.disabled) {
                const index = parseInt(this.getAttribute('data-index'));
                const designImage = this.closest('.design-image-container').querySelector('.design-image');
                if (!designs[index].isFallback) {
                     designImage.src = designs[index].imageUrl;
                     this.querySelector('span').textContent = "Compare with Original";
                }
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                const index = parseInt(this.getAttribute('data-index'));
                const designImage = this.closest('.design-image-container').querySelector('.design-image');
                 if (!designs[index].isFallback) {
                    designImage.src = designs[index].imageUrl;
                    this.querySelector('span').textContent = "Compare with Original";
                 }
            }
        });
        
        // Touch support for mobile
        btn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            const index = parseInt(this.getAttribute('data-index'));
            const designImage = this.closest('.design-image-container').querySelector('.design-image');
            if (!designs[index].isFallback) {
                designImage.src = designs[index].originalImageUrl;
                this.querySelector('span').textContent = "Viewing Original";
            } else {
                 this.disabled = true;
            }
        });
        
        btn.addEventListener('touchend', function() {
            if (!this.disabled) {
                const index = parseInt(this.getAttribute('data-index'));
                const designImage = this.closest('.design-image-container').querySelector('.design-image');
                 if (!designs[index].isFallback) {
                     designImage.src = designs[index].imageUrl;
                     this.querySelector('span').textContent = "Compare with Original";
                 }
            }
        });

        // Initial state check for compare button
        const index = parseInt(btn.getAttribute('data-index'));
        if (designs[index].isFallback) {
             btn.disabled = true;
             btn.style.opacity = '0.5';
             btn.style.cursor = 'not-allowed';
             btn.querySelector('span').textContent = "Compare N/A";
        }
    });
}

function goBackToOptions() {
    resultsSection.classList.add('hidden');
    roomOptionsSection.classList.remove('hidden');
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
    
    .design-image-container {
        position: relative;
        overflow: hidden;
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
`;

document.head.appendChild(style); 