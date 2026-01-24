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
const saveApiKeysBtn = document.getElementById('save-api-keys-btn');

// Results elements
const generatedLogo = document.getElementById('generated-logo');
const downloadLogoBtn = document.getElementById('download-logo-btn');
const regenerateLogoBtn = document.getElementById('regenerate-logo-btn');
const colorPaletteContainer = document.getElementById('color-palette-container');
const regenerateColorsBtn = document.getElementById('regenerate-colors-btn');
const moodBoardContainer = document.getElementById('mood-board-container');
const regenerateMoodBoardBtn = document.getElementById('regenerate-mood-board-btn');

// State
let openaiApiKey = localStorage.getItem('openai_api_key') || '';
let currentBrandName = '';
let currentBrandDescription = '';
let currentBrandUse = '';
let currentLogoUrl = '';
let currentColors = [];
let currentMoodBoardUrls = [];

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
    downloadLogoBtn.addEventListener('click', downloadLogo);
    regenerateLogoBtn.addEventListener('click', () => generateLogo(true));
    regenerateColorsBtn.addEventListener('click', async () => {
        await generateColorPalette(true);
        // After regenerating colors, regenerate logo and mood board with new colors
        await Promise.all([
            generateLogo(true),
            generateMoodBoard(true)
        ]);
    });
    regenerateMoodBoardBtn.addEventListener('click', () => generateMoodBoard(true));

    // Close modal on overlay click
    apiKeysModal.addEventListener('click', (e) => {
        if (e.target === apiKeysModal) {
            hideApiKeysModal();
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
        
        // Generate logo and mood board using the color palette
        await Promise.all([
            generateLogo(),
            generateMoodBoard()
        ]);

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

    // Show loading state
    if (regenerate) {
        regenerateLogoBtn.disabled = true;
        regenerateLogoBtn.innerHTML = '<i data-feather="loader"></i><span>Regenerating...</span>';
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
            The logo MUST be created using ONLY these exact colors: ${colorHexes}. 
            Every element of the logo must use colors from this list. 
            Do not use white, black, gray, or any other colors. 
            The logo should be 100% composed of these brand colors: ${colorHexes}.`;
            
            negativePrompt = ` STRICTLY AVOID: white, black, gray, off-white, cream, beige, or any colors not in this exact list: ${colorHexes}. 
            Do not use any colors outside this specific palette.`;
        }

        // Put color instructions at the very beginning for maximum weight
        const prompt = `${colorInstructions}
        Professional logo design for "${currentBrandName}": ${currentBrandDescription}. Use case: ${currentBrandUse}. 
        Create a clean, modern logo that represents this brand. The logo should include or be inspired by the brand name "${currentBrandName}". 
        The logo should be simple, memorable, and suitable for various applications. 
        Use a transparent or white background. Style: minimalist, professional, contemporary.
        ${negativePrompt}`;

        const logoUrl = await generateImage(prompt, 'logo');
        currentLogoUrl = logoUrl;
        generatedLogo.src = logoUrl;
        generatedLogo.onerror = () => {
            generatedLogo.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23161616" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-family="Arial" font-size="20"%3ELogo Generation Error%3C/text%3E%3C/svg%3E';
        };
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
        // Clean up prompt - remove negative prompt section as DALL-E 3 doesn't support it
        // Instead, incorporate negative instructions into the main prompt
        let mainPrompt = prompt;
        if (prompt.includes('Avoid any colors not in this list:')) {
            const parts = prompt.split('Avoid any colors not in this list:');
            mainPrompt = parts[0].trim();
            // DALL-E 3 doesn't support negative prompts, so we'll just use the main prompt
        }

        // DALL-E 3 has a 4000 character limit for prompts, so ensure we're within that
        if (mainPrompt.length > 4000) {
            mainPrompt = mainPrompt.substring(0, 4000);
        }

        const response = await fetch(`${OPENAI_API_BASE}/images/generations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`
            },
            body: JSON.stringify({
                prompt: mainPrompt,
                size: '1024x1024',
                quality: 'standard',
                n: 1
            })
        });

        if (!response.ok) {
            let errorMessage = 'Unknown error';
            const responseClone = response.clone(); // Clone to read body multiple times if needed
            try {
                const errorData = await response.json();
                errorMessage = errorData.error?.message || errorData.error || errorData.detail || 'Unknown error';
            } catch {
                // If JSON parsing fails, try to get text from clone
                try {
                    const errorText = await responseClone.text();
                    errorMessage = errorText || 'Unknown error';
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
        swatch.title = `Click to copy ${color.hex}`;
        swatch.addEventListener('click', () => {
            navigator.clipboard.writeText(color.hex);
            swatch.style.transform = 'scale(0.95)';
            setTimeout(() => {
                swatch.style.transform = '';
            }, 200);
        });

        const info = document.createElement('div');
        info.className = 'color-info';
        
        const hex = document.createElement('div');
        hex.className = 'color-hex';
        hex.textContent = color.hex.toUpperCase();
        
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

// Display mood board
function displayMoodBoard(urls) {
    moodBoardContainer.innerHTML = '';

    urls.forEach((url, index) => {
        const item = document.createElement('div');
        item.className = 'mood-board-item';
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Mood board image ${index + 1}`;
        img.onerror = () => {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23161616" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ffffff" font-family="Arial" font-size="12"%3EImage Error%3C/text%3E%3C/svg%3E';
        };
        
        item.appendChild(img);
        moodBoardContainer.appendChild(item);
    });
}

// Download logo
function downloadLogo() {
    if (!currentLogoUrl) return;

    const link = document.createElement('a');
    link.href = currentLogoUrl;
    const filename = currentBrandName 
        ? `${currentBrandName.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-logo.png`
        : 'brandwise-logo.png';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

function hideApiKeysModal() {
    apiKeysModal.classList.add('hidden');
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

// Re-initialize Feather Icons when needed
if (typeof feather !== 'undefined') {
    setInterval(() => {
        feather.replace();
    }, 1000);
}
