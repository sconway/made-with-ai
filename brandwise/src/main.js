// Initialize Feather Icons
if (typeof feather !== 'undefined') {
    feather.replace();
}

// DOM Elements
const brandForm = document.getElementById('brand-form');
const brandNameInput = document.getElementById('brand-name');
const brandDescriptionInput = document.getElementById('brand-description');
const brandUseInput = document.getElementById('brand-use');
const generateBtn = document.getElementById('generate-btn');
const inputSection = document.getElementById('input-section');
const resultsSection = document.getElementById('results-section');
const loadingState = document.getElementById('loading-state');
const resultsDisplay = document.getElementById('results-display');
const backBtn = document.getElementById('back-btn');
const resultsBrandName = document.getElementById('results-brand-name');
const brandNameSubtitle = document.getElementById('brand-name-subtitle');

// API Keys Modal
const apiKeysBtn = document.getElementById('api-keys-btn');
const apiKeysModal = document.getElementById('api-keys-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const openaiApiKeyInput = document.getElementById('openai-api-key');
const toggleApiKeyVisibilityBtn = document.getElementById('toggle-api-key-visibility');
const saveApiKeysBtn = document.getElementById('save-api-keys-btn');

// Results elements
let generatedLogo = document.getElementById('generated-logo');
const downloadLogoBtn = document.getElementById('download-logo-btn');
const regenerateLogoBtn = document.getElementById('regenerate-logo-btn');
const colorPaletteContainer = document.getElementById('color-palette-container');
const regenerateColorsBtn = document.getElementById('regenerate-colors-btn');
const moodBoardContainer = document.getElementById('mood-board-container');
const regenerateMoodBoardBtn = document.getElementById('regenerate-mood-board-btn');

// Color Picker Modal elements
const colorPickerModal = document.getElementById('color-picker-modal');
const closeColorPickerBtn = document.getElementById('close-color-picker-btn');
const colorPicker = document.getElementById('color-picker');
const colorHexInput = document.getElementById('color-hex-input');
const colorRInput = document.getElementById('color-r-input');
const colorGInput = document.getElementById('color-g-input');
const colorBInput = document.getElementById('color-b-input');
const colorPreviewSwatch = document.getElementById('color-preview-swatch');
const cancelColorBtn = document.getElementById('cancel-color-btn');
const saveColorBtn = document.getElementById('save-color-btn');

// Image Lightbox Modal elements
const imageLightboxModal = document.getElementById('image-lightbox-modal');
const closeLightboxBtn = document.getElementById('close-lightbox-btn');
const lightboxImage = document.getElementById('lightbox-image');

// State
let openaiApiKey = localStorage.getItem('openai_api_key') || '';
let currentBrandName = '';
let currentBrandDescription = '';
let currentBrandUse = '';
let currentLogoUrl = '';
let currentColors = [];
let currentMoodBoardUrls = [];
let editingColorIndex = -1; // Track which color is being edited

// OpenAI API configuration
const PROXY_SERVER_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3002'  // Local development
    : '';  // Production - use relative URL (same origin)
const OPENAI_API_BASE = `${PROXY_SERVER_URL}/openai`;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Load saved API key
    if (openaiApiKey) {
        openaiApiKeyInput.value = openaiApiKey;
    }

    // Event listeners
    brandForm.addEventListener('submit', handleFormSubmit);
    backBtn.addEventListener('click', goBackToInput);
    apiKeysBtn.addEventListener('click', showApiKeysModal);
    closeModalBtn.addEventListener('click', hideApiKeysModal);
    saveApiKeysBtn.addEventListener('click', saveApiKeys);
    toggleApiKeyVisibilityBtn.addEventListener('click', toggleApiKeyVisibility);
    downloadLogoBtn.addEventListener('click', downloadLogo);
    regenerateLogoBtn.addEventListener('click', () => generateLogo(true));
    regenerateColorsBtn.addEventListener('click', async () => {
        // Show loading state (same as initial generation)
        resultsDisplay.classList.add('hidden');
        loadingState.classList.remove('hidden');
        
        try {
            await generateColorPalette(true);
            // After regenerating colors, regenerate logo and mood board with new colors
            // Logo must be generated after colors are ready
            await generateLogo(true);
            await generateMoodBoard(true);
            
            // Hide loading and show results
            loadingState.classList.add('hidden');
            resultsDisplay.classList.remove('hidden');
        } catch (error) {
            console.error('Error regenerating brand identity:', error);
            alert('Error regenerating brand identity. Please try again.');
            loadingState.classList.add('hidden');
            resultsDisplay.classList.remove('hidden');
        }
    });
    regenerateMoodBoardBtn.addEventListener('click', () => generateMoodBoard(true));

    // Color picker modal event listeners
    closeColorPickerBtn.addEventListener('click', hideColorPickerModal);
    cancelColorBtn.addEventListener('click', hideColorPickerModal);
    saveColorBtn.addEventListener('click', saveColorChange);
    colorPicker.addEventListener('input', updateColorFromPicker);
    colorHexInput.addEventListener('input', updateColorFromHex);
    colorRInput.addEventListener('input', updateColorFromRGB);
    colorGInput.addEventListener('input', updateColorFromRGB);
    colorBInput.addEventListener('input', updateColorFromRGB);

    // Close modal on overlay click
    apiKeysModal.addEventListener('click', (e) => {
        if (e.target === apiKeysModal) {
            hideApiKeysModal();
        }
    });

    colorPickerModal.addEventListener('click', (e) => {
        if (e.target === colorPickerModal) {
            hideColorPickerModal();
        }
    });

    // Image lightbox event listeners
    closeLightboxBtn.addEventListener('click', hideImageLightbox);
    imageLightboxModal.addEventListener('click', (e) => {
        if (e.target === imageLightboxModal) {
            hideImageLightbox();
        }
    });

    // Check if API key exists
    if (!openaiApiKey) {
        showApiKeysModal();
    }
});

// Form submission
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const brandName = brandNameInput.value.trim();
    const description = brandDescriptionInput.value.trim();
    const useCase = brandUseInput.value.trim();

    if (!brandName || !description || !useCase) {
        alert('Please fill in all fields');
        return;
    }

    if (!openaiApiKey) {
        alert('Please enter your OpenAI API key first');
        showApiKeysModal();
        return;
    }

    currentBrandName = brandName;
    currentBrandDescription = description;
    currentBrandUse = useCase;

    // Update results header with brand name
    resultsBrandName.textContent = `${brandName} - Brand Identity`;
    brandNameSubtitle.textContent = brandName;

    // Show results section and loading state
    inputSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    loadingState.classList.remove('hidden');
    resultsDisplay.classList.add('hidden');

    try {
        // Generate color palette first, then use those colors for logo and mood board
        await generateColorPalette();
        
        // Generate logo using the color palette (must happen after colors are generated)
        await generateLogo();
        
        // Generate mood board using the color palette
        await generateMoodBoard();

        // Show results
        loadingState.classList.add('hidden');
        resultsDisplay.classList.remove('hidden');
    } catch (error) {
        console.error('Error generating brand identity:', error);
        alert('Error generating brand identity. Please try again.');
        loadingState.classList.add('hidden');
    }
}

// Generate Logo
async function generateLogo(regenerate = false) {
    if (!currentBrandName || !currentBrandDescription || !currentBrandUse) {
        alert('Please fill in all brand information first');
        return;
    }

    // Ensure we have colors before generating logo
    if (!currentColors || currentColors.length === 0) {
        alert('Color palette must be generated first. Please wait for color palette generation to complete.');
        return;
    }

    // Show loading state
    if (regenerate) {
        regenerateLogoBtn.disabled = true;
        regenerateLogoBtn.innerHTML = '<i data-feather="loader"></i><span>Regenerating...</span>';
        if (typeof feather !== 'undefined') feather.replace();
    }

    try {
        // Build explicit color instructions - ALWAYS use current colors from palette
        const colorHexes = currentColors.map(c => c.hex).join(', ');
        
        // Simplified and clearer prompt - focus on the logo only, not on displaying colors
        // Keep it concise to stay under DALL-E 3's 4000 character limit
        const prompt = `Professional logo for "${currentBrandName}": ${currentBrandDescription}. Use case: ${currentBrandUse}. 

Use ONLY these colors: ${colorHexes}. Show ONLY the logo design - no color palettes, swatches, hex codes, or text. Just the logo on transparent or white background. Clean, modern, minimalist style.`;

        const logoUrl = await generateImage(prompt, 'logo');
        currentLogoUrl = logoUrl;
        generatedLogo.src = logoUrl;
        generatedLogo.style.cursor = 'pointer';
        generatedLogo.title = 'Click to view larger';
        generatedLogo.onerror = () => {
            generatedLogo.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23161616" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-family="Arial" font-size="20"%3ELogo Generation Error%3C/text%3E%3C/svg%3E';
        };
        // Add click listener to show in lightbox
        generatedLogo.addEventListener('click', () => showImageLightbox(logoUrl));
    } catch (error) {
        console.error('Error generating logo:', error);
        alert('Error generating logo. Please try again.');
    } finally {
        // Reset button state
        if (regenerate) {
            regenerateLogoBtn.disabled = false;
            regenerateLogoBtn.innerHTML = '<i data-feather="refresh-cw"></i><span>Regenerate</span>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// Generate Color Palette
async function generateColorPalette(regenerate = false) {
    if (!currentBrandName || !currentBrandDescription || !currentBrandUse) {
        alert('Please fill in all brand information first');
        return;
    }

    // Show loading state only if regenerating (initial generation shows main loading state)
    // Note: The main loading state is now handled by the caller for regenerate
    if (regenerate) {
        regenerateColorsBtn.disabled = true;
        regenerateColorsBtn.innerHTML = '<i data-feather="loader"></i><span>Regenerating...</span>';
        if (typeof feather !== 'undefined') feather.replace();
    }

    try {
        // Generate a color palette image based on brand description
        // Make the prompt more specific to ensure colors match the brand
        const prompt = `Color palette for brand "${currentBrandName}": ${currentBrandDescription}. Use case: ${currentBrandUse}. 
        Based on this brand description, create a visual color palette showing exactly 5-6 complementary colors that perfectly represent this brand's identity and personality. 
        The colors should reflect the brand's values, industry, and target audience. 
        Display the colors as large, distinct swatches in a horizontal row. Each color should be clearly separated. 
        Include hex codes below each color. Colors should be modern, professional, and suitable for the brand identity of "${currentBrandName}". 
        Avoid white, off-white, or very light gray colors. Focus on vibrant, meaningful colors that represent the brand.`;

        const paletteImageUrl = await generateImage(prompt, 'palette');
        
        // Extract colors from the palette image using canvas
        const colors = await extractColorsFromImage(paletteImageUrl);
        currentColors = colors;
        
        // Display colors
        displayColorPalette(colors);
    } catch (error) {
        console.error('Error generating color palette:', error);
        // Fallback to generated colors
        const fallbackColors = generateFallbackColors();
        currentColors = fallbackColors;
        displayColorPalette(fallbackColors);
        alert('Error generating color palette. Using fallback colors.');
    } finally {
        // Reset button state only if regenerating
        if (regenerate) {
            regenerateColorsBtn.disabled = false;
            regenerateColorsBtn.innerHTML = '<i data-feather="refresh-cw"></i><span>Regenerate Colors</span>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// Generate Mood Board
async function generateMoodBoard(regenerate = false) {
    if (!currentBrandName || !currentBrandDescription || !currentBrandUse) {
        alert('Please fill in all brand information first');
        return;
    }

    // Show loading state only if regenerating
    if (regenerate) {
        regenerateMoodBoardBtn.disabled = true;
        regenerateMoodBoardBtn.innerHTML = '<i data-feather="loader"></i><span>Regenerating...</span>';
        if (typeof feather !== 'undefined') feather.replace();
    }

    try {
        // Build explicit color instructions
        let colorInstructions = '';
        let negativePrompt = '';
        if (currentColors && currentColors.length > 0) {
            const colorList = currentColors.map(c => `${c.hex} (${c.name})`).join(', ');
            const colorHexes = currentColors.map(c => c.hex).join(', ');
            
            // Make color instructions extremely explicit and repeated
            colorInstructions = `MANDATORY COLOR REQUIREMENT - USE ONLY THESE COLORS: ${colorList}. 
            This image MUST be created using ONLY these exact brand colors: ${colorHexes}. 
            The entire image should be 100% dominated by these colors. 
            Every single element, object, texture, and surface must use colors from this list: ${colorHexes}. 
            Use these colors as the exclusive color palette. No other colors allowed.`;
            
            negativePrompt = ` STRICTLY AVOID: white, black, gray, off-white, cream, beige, or any colors not in this exact list: ${colorHexes}. 
            Do not use any colors outside this specific palette. The image must only contain these colors.`;
        }

        const moodBoardPrompts = [
            `${colorInstructions}
            Visual mood board image representing "${currentBrandName}": ${currentBrandDescription}. Use case: ${currentBrandUse}. 
            Style: professional, modern, inspiring. Show elements that capture the brand's essence.
            ${negativePrompt}`,
            `${colorInstructions}
            Brand aesthetic visualization for "${currentBrandName}": ${currentBrandDescription}. 
            Create an inspiring image that represents the brand's visual identity and mood.
            ${negativePrompt}`,
            `${colorInstructions}
            Brand inspiration image for "${currentBrandName}": ${currentBrandDescription}. 
            Show visual elements, textures, and styles that align with this brand identity.
            ${negativePrompt}`,
            `${colorInstructions}
            Brand style guide visualization for "${currentBrandName}": ${currentBrandDescription}. 
            Create a cohesive visual representation of the brand's style and personality.
            ${negativePrompt}`
        ];

        const moodBoardUrls = await Promise.all(
            moodBoardPrompts.map((prompt, index) => 
                generateImage(prompt, `moodboard-${index}`)
            )
        );

        currentMoodBoardUrls = moodBoardUrls;
        displayMoodBoard(moodBoardUrls);
    } catch (error) {
        console.error('Error generating mood board:', error);
        alert('Error generating mood board. Please try again.');
    } finally {
        // Reset button state only if regenerating
        if (regenerate) {
            regenerateMoodBoardBtn.disabled = false;
            regenerateMoodBoardBtn.innerHTML = '<i data-feather="refresh-cw"></i><span>Regenerate Mood Board</span>';
            if (typeof feather !== 'undefined') feather.replace();
        }
    }
}

// Generate image using OpenAI DALL-E 3 API
async function generateImage(prompt, type = 'image') {
    try {
        // Clean up prompt - DALL-E 3 doesn't support negative prompts
        let mainPrompt = prompt.trim();

        // DALL-E 3 has a 4000 character limit for prompts, so ensure we're within that
        if (mainPrompt.length > 4000) {
            console.warn(`Prompt is ${mainPrompt.length} characters, truncating to 4000`);
            mainPrompt = mainPrompt.substring(0, 4000);
        }
        
        console.log(`Generating ${type} with prompt (${mainPrompt.length} chars):`, mainPrompt.substring(0, 200) + '...');

        // Note: Server adds the model parameter, we just send prompt and options
        const requestBody = {
            prompt: mainPrompt,
            size: '1024x1024',
            quality: 'standard',
            n: 1
        };
        
        const response = await fetch(`${OPENAI_API_BASE}/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            let errorMessage = 'Unknown error';
            let errorData = null;
            try {
                errorData = await response.json();
                errorMessage = errorData.error?.message || errorData.error || errorData.detail || 'Unknown error';
                console.error('OpenAI API error response:', errorData);
            } catch {
                try {
                    const errorText = await response.text();
                    errorMessage = errorText || 'Unknown error';
                    console.error('OpenAI API error text:', errorText);
                } catch {
                    errorMessage = `HTTP ${response.status}: ${response.statusText}`;
                }
            }
            throw new Error(`API error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        
        if (!data.data || !data.data[0] || !data.data[0].url) {
            throw new Error('No image URL returned from OpenAI');
        }

        return data.data[0].url;
    } catch (error) {
        console.error(`Error generating ${type}:`, error);
        throw error;
    }
}

// Helper function to calculate color brightness
function getBrightness(r, g, b) {
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Helper function to calculate color saturation
function getSaturation(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    if (max === 0) return 0;
    return (max - min) / max;
}

// Helper function to check if colors are similar (within threshold)
function areColorsSimilar(hex1, hex2, threshold = 30) {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    if (!rgb1 || !rgb2) return false;
    
    const diff = Math.abs(rgb1.r - rgb2.r) + 
                 Math.abs(rgb1.g - rgb2.g) + 
                 Math.abs(rgb1.b - rgb2.b);
    return diff < threshold;
}

// Extract colors from image using canvas
async function extractColorsFromImage(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;
                
                // Sample colors from the image, prioritizing center region
                const colorMap = new Map();
                const sampleRate = 50; // Sample more frequently
                const centerX = canvas.width / 2;
                const centerY = canvas.height / 2;
                const centerRadius = Math.min(canvas.width, canvas.height) * 0.4; // Focus on center 40%

                for (let y = 0; y < canvas.height; y += 10) {
                    for (let x = 0; x < canvas.width; x += 10) {
                        const i = (y * canvas.width + x) * 4;
                        const r = pixels[i];
                        const g = pixels[i + 1];
                        const b = pixels[i + 2];
                        const a = pixels[i + 3];

                        if (a < 200) continue; // Skip semi-transparent pixels

                        const brightness = getBrightness(r, g, b);
                        const saturation = getSaturation(r, g, b);

                        // Filter out very light colors (near white) - brightness > 240
                        if (brightness > 240) continue;
                        
                        // Filter out very dark colors (near black) - brightness < 20
                        if (brightness < 20) continue;
                        
                        // Filter out very low saturation colors (grays) - saturation < 0.1
                        if (saturation < 0.1) continue;

                        // Weight center region more heavily
                        const distanceFromCenter = Math.sqrt(
                            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
                        );
                        const weight = distanceFromCenter < centerRadius ? 3 : 1;

                        const hex = rgbToHex(r, g, b);
                        const currentCount = colorMap.get(hex) || 0;
                        colorMap.set(hex, currentCount + weight);
                    }
                }

                // Group similar colors together
                const colorGroups = [];
                const processed = new Set();
                
                for (const [hex, count] of colorMap.entries()) {
                    if (processed.has(hex)) continue;
                    
                    const group = { hex, count, colors: [hex] };
                    processed.add(hex);
                    
                    // Find similar colors
                    for (const [otherHex, otherCount] of colorMap.entries()) {
                        if (processed.has(otherHex)) continue;
                        if (areColorsSimilar(hex, otherHex, 40)) {
                            group.colors.push(otherHex);
                            group.count += otherCount;
                            processed.add(otherHex);
                        }
                    }
                    
                    colorGroups.push(group);
                }

                // Sort by count and get top 6, then pick the most representative color from each group
                const sortedGroups = colorGroups
                    .sort((a, b) => b.count - a.count)
                    .slice(0, 6);

                // For each group, pick the color with highest saturation (most vibrant)
                const selectedColors = sortedGroups.map(group => {
                    let bestColor = group.hex;
                    let bestSaturation = 0;
                    
                    for (const hex of group.colors) {
                        const rgb = hexToRgb(hex);
                        if (rgb) {
                            const sat = getSaturation(rgb.r, rgb.g, rgb.b);
                            if (sat > bestSaturation) {
                                bestSaturation = sat;
                                bestColor = hex;
                            }
                        }
                    }
                    return bestColor;
                });

                // Generate color names
                const colors = selectedColors.map(hex => ({
                    hex: hex,
                    name: getColorName(hex)
                }));

                resolve(colors.length > 0 ? colors : generateFallbackColors());
            } catch (error) {
                reject(error);
            }
        };

        img.onerror = () => {
            resolve(generateFallbackColors());
        };

        img.src = imageUrl;
    });
}

// Generate fallback colors
function generateFallbackColors() {
    const colorSchemes = [
        ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'],
        ['#1e293b', '#475569', '#64748b', '#94a3b8', '#cbd5e1', '#f1f5f9'],
        ['#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d', '#059669'],
        ['#7c3aed', '#a855f7', '#d946ef', '#ec4899', '#f43f5e', '#fb7185']
    ];

    const scheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    return scheme.map(hex => ({
        hex: hex,
        name: getColorName(hex)
    }));
}

// Convert RGB to hex
function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}

// Get color name (simplified)
function getColorName(hex) {
    const color = hexToRgb(hex);
    if (!color) return 'Unknown';

    const { r, g, b } = color;
    const brightness = (r + g + b) / 3;

    if (brightness < 50) return 'Dark';
    if (brightness > 200) return 'Light';
    
    // Simple color name detection
    if (r > g && r > b) return 'Red';
    if (g > r && g > b) return 'Green';
    if (b > r && b > g) return 'Blue';
    if (r === g && g === b) return 'Gray';
    
    return 'Color';
}

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Display color palette
function displayColorPalette(colors) {
    colorPaletteContainer.innerHTML = '';

    colors.forEach((color, index) => {
        const colorItem = document.createElement('div');
        colorItem.className = 'color-item';
        
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color.hex;
        swatch.title = `Click to edit ${color.hex}`;
        swatch.style.cursor = 'pointer';
        swatch.addEventListener('click', () => {
            openColorPicker(index, color.hex);
        });

        const info = document.createElement('div');
        info.className = 'color-info';
        
        const hex = document.createElement('div');
        hex.className = 'color-hex';
        hex.textContent = color.hex.toUpperCase();
        hex.style.cursor = 'pointer';
        hex.title = 'Click to edit';
        hex.addEventListener('click', () => {
            openColorPicker(index, color.hex);
        });
        
        const name = document.createElement('div');
        name.className = 'color-name';
        name.textContent = color.name;

        info.appendChild(hex);
        info.appendChild(name);
        colorItem.appendChild(swatch);
        colorItem.appendChild(info);
        colorPaletteContainer.appendChild(colorItem);
    });
}

// Open color picker modal
function openColorPicker(index, currentHex) {
    editingColorIndex = index;
    const rgb = hexToRgb(currentHex);
    
    // Set initial values
    colorPicker.value = currentHex;
    colorHexInput.value = currentHex.toUpperCase();
    if (rgb) {
        colorRInput.value = rgb.r;
        colorGInput.value = rgb.g;
        colorBInput.value = rgb.b;
    }
    updateColorPreview(currentHex);
    
    colorPickerModal.classList.remove('hidden');
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Hide color picker modal
function hideColorPickerModal() {
    colorPickerModal.classList.add('hidden');
    editingColorIndex = -1;
}

// Update color preview
function updateColorPreview(hex) {
    colorPreviewSwatch.style.backgroundColor = hex;
}

// Update color from picker
function updateColorFromPicker() {
    const hex = colorPicker.value;
    colorHexInput.value = hex.toUpperCase();
    const rgb = hexToRgb(hex);
    if (rgb) {
        colorRInput.value = rgb.r;
        colorGInput.value = rgb.g;
        colorBInput.value = rgb.b;
    }
    updateColorPreview(hex);
}

// Update color from hex input
function updateColorFromHex() {
    let hex = colorHexInput.value.trim();
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        colorPicker.value = hex;
        const rgb = hexToRgb(hex);
        if (rgb) {
            colorRInput.value = rgb.r;
            colorGInput.value = rgb.g;
            colorBInput.value = rgb.b;
        }
        updateColorPreview(hex);
    }
}

// Update color from RGB inputs
function updateColorFromRGB() {
    const r = parseInt(colorRInput.value) || 0;
    const g = parseInt(colorGInput.value) || 0;
    const b = parseInt(colorBInput.value) || 0;
    
    // Clamp values
    const clampedR = Math.max(0, Math.min(255, r));
    const clampedG = Math.max(0, Math.min(255, g));
    const clampedB = Math.max(0, Math.min(255, b));
    
    if (r !== clampedR) colorRInput.value = clampedR;
    if (g !== clampedG) colorGInput.value = clampedG;
    if (b !== clampedB) colorBInput.value = clampedB;
    
    const hex = rgbToHex(clampedR, clampedG, clampedB);
    colorPicker.value = hex;
    colorHexInput.value = hex.toUpperCase();
    updateColorPreview(hex);
}

// Save color change
function saveColorChange() {
    if (editingColorIndex === -1) return;
    
    const newHex = colorHexInput.value.trim();
    if (!/^#[0-9A-Fa-f]{6}$/i.test(newHex)) {
        alert('Please enter a valid hex color (e.g., #FF0000)');
        return;
    }
    
    // Update the color in currentColors array
    currentColors[editingColorIndex].hex = newHex.toLowerCase();
    currentColors[editingColorIndex].name = getColorName(newHex);
    
    // Redisplay the palette
    displayColorPalette(currentColors);
    
    // Hide modal
    hideColorPickerModal();
    
    // Note: Logo and mood board will use updated colors when regenerated
    // The user can manually regenerate them using the regenerate buttons
}

// Display mood board
function displayMoodBoard(urls) {
    moodBoardContainer.innerHTML = '';

    urls.forEach((url, index) => {
        const item = document.createElement('div');
        item.className = 'mood-board-item';
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Mood board image ${index + 1}`;
        img.style.cursor = 'pointer';
        img.onerror = () => {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23161616" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-family="Arial" font-size="12"%3EImage Error%3C/text%3E%3C/svg%3E';
        };
        // Make mood board images clickable to show in lightbox
        img.addEventListener('click', () => showImageLightbox(url));
        
        item.appendChild(img);
        moodBoardContainer.appendChild(item);
    });
}

// Download logo
async function downloadLogo() {
    if (!currentLogoUrl) return;

    try {
        // Fetch the image as a blob to avoid CORS issues
        const response = await fetch(currentLogoUrl);
        const blob = await response.blob();
        
        // Create an object URL from the blob
        const blobUrl = URL.createObjectURL(blob);
        
        // Create download link
        const link = document.createElement('a');
        link.href = blobUrl;
        const filename = currentBrandName 
            ? `${currentBrandName.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-logo.png`
            : 'brandwise-logo.png';
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up the object URL after a short delay
        setTimeout(() => {
            URL.revokeObjectURL(blobUrl);
        }, 100);
    } catch (error) {
        console.error('Error downloading logo:', error);
        alert('Error downloading logo. Please try again.');
    }
}

// Go back to input
function goBackToInput() {
    resultsSection.classList.add('hidden');
    inputSection.classList.remove('hidden');
    loadingState.classList.add('hidden');
    resultsDisplay.classList.add('hidden');
}

// API Keys Modal
function showApiKeysModal() {
    apiKeysModal.classList.remove('hidden');
    // Reset visibility to password (hidden) when modal opens
    openaiApiKeyInput.type = 'password';
    const icon = toggleApiKeyVisibilityBtn.querySelector('i');
    if (icon) {
        icon.setAttribute('data-feather', 'eye');
    }
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function hideApiKeysModal() {
    apiKeysModal.classList.add('hidden');
}

function toggleApiKeyVisibility() {
    const input = openaiApiKeyInput;
    const icon = toggleApiKeyVisibilityBtn.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('data-feather', 'eye-off');
    } else {
        input.type = 'password';
        icon.setAttribute('data-feather', 'eye');
    }
    
    // Re-initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function saveApiKeys() {
    const key = openaiApiKeyInput.value.trim();
    
    if (!key) {
        alert('Please enter your OpenAI API key');
        return;
    }

    openaiApiKey = key;
    localStorage.setItem('openai_api_key', key);
    hideApiKeysModal();
}

// Image Lightbox functions
function showImageLightbox(imageUrl) {
    lightboxImage.src = imageUrl;
    imageLightboxModal.classList.remove('hidden');
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function hideImageLightbox() {
    imageLightboxModal.classList.add('hidden');
    // Restore body scroll
    document.body.style.overflow = '';
}

// Re-initialize Feather Icons when needed
if (typeof feather !== 'undefined') {
    setInterval(() => {
        feather.replace();
    }, 1000);
}
