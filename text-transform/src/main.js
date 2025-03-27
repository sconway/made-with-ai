import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

// Scene setup
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x050505) // Very dark background for better contrast

// Camera setup
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = 6
camera.position.y = 0.5

// Renderer setup
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

// Controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05

// Particle system settings
const PARTICLE_COUNT = 80000 // High number for better coverage
const PARTICLE_SIZE = 0.015 // Small size for detailed rendering
const SURFACE_PRECISION = 0.02 // How precisely particles follow the surface
const USE_WORKER = true // Use web worker for heavy calculations

// Global variables to store scene objects
let particleSystem = null;
let wireframe = null;
let font = null;
let currentText = "Hello";
let targetText = "World"; // New variable for second text
let isGenerating = false;
let isAnimating = false; // Track if animation is in progress
let particleData = null; // Store source and target particle data
let animationProgress = 0; // Animation progress (0-1)
const ANIMATION_DURATION = 2000; // Animation duration in ms
let geometryCache = {}; // Cache for generated geometries

// Font settings and available fonts
let currentFontUrl = 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json';
let currentFontName = 'Helvetiker Bold';
let isChangingFont = false;

// Available fonts - a mix of standard Three.js fonts and Google Fonts
// Each font needs a display name and URL to the typeface file
const availableFonts = [
  {
    name: 'Helvetiker Bold',
    url: 'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json'
  },
  {
    name: 'Helvetiker Regular',
    url: 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json'
  },
  {
    name: 'Optimer Bold',
    url: 'https://threejs.org/examples/fonts/optimer_bold.typeface.json'
  },
  {
    name: 'Optimer Regular',
    url: 'https://threejs.org/examples/fonts/optimer_regular.typeface.json'
  },
  {
    name: 'Gentilis Bold',
    url: 'https://threejs.org/examples/fonts/gentilis_bold.typeface.json'
  },
  {
    name: 'Gentilis Regular',
    url: 'https://threejs.org/examples/fonts/gentilis_regular.typeface.json'
  },
  {
    name: 'Droid Sans',
    url: 'https://threejs.org/examples/fonts/droid/droid_sans_regular.typeface.json'
  },
  {
    name: 'Droid Sans Bold',
    url: 'https://threejs.org/examples/fonts/droid/droid_sans_bold.typeface.json'
  },
  {
    name: 'Droid Serif',
    url: 'https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json'
  }
];

// Color settings
let sourceColorConfig = {
  baseHue: 0.0, // Red
  hueRange: 0.1,
  saturation: 1.0,
  brightness: 0.5
};

let targetColorConfig = {
  baseHue: 0.33, // Green
  hueRange: 0.1,
  saturation: 1.0,
  brightness: 0.5
};

// Initialize endColorConfig properties to ensure gradients from the start
// This ensures that even at first render, we have gradient information
sourceColorConfig.endColorConfig = {
  baseHue: targetColorConfig.baseHue,
  hueRange: targetColorConfig.hueRange,
  saturation: targetColorConfig.saturation,
  brightness: targetColorConfig.brightness
};

targetColorConfig.endColorConfig = {
  baseHue: sourceColorConfig.baseHue,
  hueRange: sourceColorConfig.hueRange,
  saturation: sourceColorConfig.saturation,
  brightness: sourceColorConfig.brightness
};

// Flag to track if colors were updated and need to be refreshed
let colorsNeedRefresh = false;

// Variable to track first load
let isFirstLoad = true;
// Track the initial animation state
let initialAnimationComplete = false;

// First, let's add a flag to track if we're changing colors
let isChangingColors = false;

// Global variables for status section
let statusSection = null;

// Function to update the status section with current state - moved to global scope
function updateStatusSection() {
  if (!statusSection) {
    console.log("Status section not created yet");
    return;
  }

  const sourceColor = new THREE.Color();
  sourceColor.setHSL(sourceColorConfig.baseHue, sourceColorConfig.saturation, sourceColorConfig.brightness);

  const targetColor = new THREE.Color();
  targetColor.setHSL(targetColorConfig.baseHue, targetColorConfig.saturation, targetColorConfig.brightness);

  statusSection.innerHTML = `
    <div style="margin-bottom: 5px;">Status:</div>
    <div style="margin: 3px 0; display: flex; justify-content: space-between;">
      <span>Particles:</span>
      <span>${PARTICLE_COUNT.toLocaleString()}</span>
    </div>
    <div style="margin: 3px 0; display: flex; justify-content: space-between;">
      <span>Current Text:</span>
      <span style="color: #${sourceColor.getHexString()}">${currentText}</span>
  </div>
    <div style="margin: 3px 0; display: flex; justify-content: space-between;">
      <span>Target Text:</span>
      <span style="color: #${targetColor.getHexString()}">${targetText}</span>
    </div>
    <div style="margin: 3px 0; display: flex; justify-content: space-between;">
      <span>Font:</span>
      <span>${currentFontName}</span>
    </div>
  `;
}

// Function to update Apply button state - moved before use
function updateApplyButtonState() {
  const fromTextInput = document.getElementById('from-text-input');
  const toTextInput = document.getElementById('to-text-input');
  const fontSelect = document.getElementById('font-select');
  const applyButton = document.getElementById('apply-button');

  if (!fromTextInput || !toTextInput || !applyButton) return;

  const fromText = fromTextInput.value.trim();
  const toText = toTextInput.value.trim();
  const textsChanged = fromText !== currentText || toText !== targetText;
  const colorChanged = document.getElementById('from-color')?.value !== sourceColorConfig.lastAppliedColor ||
    document.getElementById('to-color')?.value !== targetColorConfig.lastAppliedColor;
  const fontChanged = fontSelect ? fontSelect.value !== currentFontUrl : false;

  // Track if any changes need to be applied
  const hasChanges = textsChanged || colorChanged || fontChanged;

  applyButton.disabled = !(fromText && toText) || isGenerating || isAnimating || isChangingColors || isChangingFont;

  if (applyButton.disabled) {
    applyButton.style.opacity = '0.5';
    applyButton.style.cursor = 'not-allowed';
  } else {
    applyButton.style.opacity = '1';
    applyButton.style.cursor = 'pointer';

    // Add a visual indication if there are changes to apply
    if (hasChanges) {
      applyButton.style.boxShadow = '0 0 15px rgba(124, 179, 66, 0.8)';
      applyButton.textContent = 'Apply Changes';
    } else {
      applyButton.style.boxShadow = '0 0 15px rgba(79, 195, 247, 0.5)';
      applyButton.textContent = 'Apply';
    }
  }
}

// Setup color picker with delayed apply behavior - moved before use
const setupColorPickerDelayedApply = (colorPicker) => {
  // Remove all existing event listeners
  const newColorPicker = colorPicker.cloneNode(true);
  colorPicker.parentNode.replaceChild(newColorPicker, colorPicker);

  // Add new event listener that only updates UI indication
  newColorPicker.addEventListener('change', () => {
    updateApplyButtonState();
  });

  return newColorPicker;
};

// Create input fields for text entry
createTextInputUI();

// Create status section at top right
createTopRightStatusSection();

// Function to create and position the status section at top right
function createTopRightStatusSection() {
  // Remove any existing status section with the same ID
  const existingStatus = document.getElementById('status-section');
  if (existingStatus) {
    existingStatus.remove();
  }

  // Create the status section
  statusSection = document.createElement('div');
  statusSection.id = 'status-section';
  statusSection.style.position = 'absolute';
  statusSection.style.top = '20px';
  statusSection.style.right = '20px';
  statusSection.style.width = '250px';
  statusSection.style.padding = '10px';
  statusSection.style.backgroundColor = 'rgba(10, 20, 30, 0.8)';
  statusSection.style.borderRadius = '10px';
  statusSection.style.color = 'white';
  statusSection.style.fontSize = '12px';
  statusSection.style.fontFamily = 'Arial, sans-serif';
  statusSection.style.zIndex = '100';
  statusSection.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';

  // Add header for the status box
  const statusHeader = document.createElement('div');
  statusHeader.textContent = 'Status Information';
  statusHeader.style.fontSize = '14px';
  statusHeader.style.fontWeight = 'bold';
  statusHeader.style.marginBottom = '8px';
  statusHeader.style.textAlign = 'center';
  statusHeader.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
  statusHeader.style.paddingBottom = '5px';

  statusSection.appendChild(statusHeader);

  // Add to document
  document.body.appendChild(statusSection);

  // Initial update of status section
  updateStatusSection();

  // Create a container for the Transform button in the top right
  const topRightButtonContainer = document.createElement('div');
  topRightButtonContainer.id = 'top-right-button-container';
  topRightButtonContainer.style.position = 'absolute';
  topRightButtonContainer.style.top = `${20 + statusSection.offsetHeight + 10}px`; // Position below status box
  topRightButtonContainer.style.right = '20px';
  topRightButtonContainer.style.width = '250px';
  topRightButtonContainer.style.padding = '10px';
  topRightButtonContainer.style.backgroundColor = 'rgba(10, 20, 30, 0.8)';
  topRightButtonContainer.style.borderRadius = '10px';
  topRightButtonContainer.style.display = 'flex';
  topRightButtonContainer.style.flexDirection = 'column';
  topRightButtonContainer.style.gap = '10px';
  topRightButtonContainer.style.justifyContent = 'center';
  topRightButtonContainer.style.zIndex = '100';
  topRightButtonContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';

  // Create a Transform button for the top right
  const topRightTransformButton = document.createElement('button');
  topRightTransformButton.id = 'top-right-transform-button';
  topRightTransformButton.textContent = 'Transform';
  topRightTransformButton.disabled = true; // Initially disabled until texts are applied
  styleButton(topRightTransformButton);
  topRightTransformButton.style.backgroundColor = '#4fc3f7'; // Blue for Transform
  topRightTransformButton.style.width = '100%';

  // Add event listener to match the original transform button's functionality
  topRightTransformButton.addEventListener('click', () => {
    if (isGenerating || isAnimating || isChangingColors || isChangingFont || !particleSystem) return;

    console.log("Transform button clicked - animating between existing texts");

    // Reset color refresh flags - we don't need to refresh colors during animation
    colorsNeedRefresh = false;

    // Get current positions from the particle system's geometry
    if (particleSystem) {
      const currentPositions = particleSystem.geometry.attributes.position.array;
      const currentColors = particleSystem.geometry.attributes.color.array;

      // Update source arrays with the EXACT current values from the geometry
      for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
        particleData.sourcePositions[i] = currentPositions[i];
        particleData.sourceColors[i] = currentColors[i];
      }

      console.log("Updated source positions/colors with current geometry state");
    }

    // Start animation with a custom callback to update text after animation completes
    startMorphAnimationWithCallback(() => {
      // After animation completes, swap the text variables
      const temp = currentText;
      currentText = targetText;
      targetText = temp;

      // Update UI to reflect the change
      updateTextInputValues();
      updateStatusSection();
      console.log("Animation complete, updated text to:", currentText);
    });
  });

  // Create a Generate button for downloading the HTML file
  const generateButton = document.createElement('button');
  generateButton.id = 'generate-button';
  generateButton.textContent = 'Download HTML';
  styleButton(generateButton);
  generateButton.style.backgroundColor = '#66bb6a'; // Green for Generate
  generateButton.style.width = '100%';

  // Add event listener for the Generate button
  generateButton.addEventListener('click', () => {
    console.log("Generate button clicked - creating downloadable HTML file");
    downloadHtmlFile();
  });

  // Add buttons to container
  topRightButtonContainer.appendChild(topRightTransformButton);
  topRightButtonContainer.appendChild(generateButton);

  // Add container to document
  document.body.appendChild(topRightButtonContainer);

  // Update the top-right transform button state at regular intervals
  setInterval(() => {
    const transformButton = document.getElementById('transform-button');
    const topRightButton = document.getElementById('top-right-transform-button');
    const generateButton = document.getElementById('generate-button');

    if (topRightButton) {
      // Match the state with the original button
      topRightButton.disabled = !particleSystem || isGenerating || isAnimating || isChangingColors || isChangingFont;

      if (topRightButton.disabled) {
        topRightButton.style.opacity = '0.5';
        topRightButton.style.cursor = 'not-allowed';

        // Update text to show "Animating..." when animation is in progress
        if (isAnimating) {
          topRightButton.textContent = 'Animating...';
        } else {
          topRightButton.textContent = 'Transform';
        }
      } else {
        topRightButton.style.opacity = '1';
        topRightButton.style.cursor = 'pointer';
        topRightButton.textContent = 'Transform';
      }

      // Also update the position in case the window is resized
      const topRightContainer = document.getElementById('top-right-button-container');
      if (topRightContainer && statusSection) {
        topRightContainer.style.top = `${statusSection.offsetHeight + 40}px`;
      }
    }

    // Update the generate button state
    if (generateButton) {
      generateButton.disabled = !particleSystem || isGenerating;

      if (generateButton.disabled) {
        generateButton.style.opacity = '0.5';
        generateButton.style.cursor = 'not-allowed';
      } else {
        generateButton.style.opacity = '1';
        generateButton.style.cursor = 'pointer';
      }
    }
  }, 100);

  // Add media query for smaller screens
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @media (max-width: 768px) {
      #status-section, #top-right-button-container {
        top: 10px;
        right: 10px;
        width: 200px;
        font-size: 11px;
      }
      #top-right-button-container {
        top: auto;
        top: ${statusSection.offsetHeight + 20}px;
      }
    }
  `;
  document.head.appendChild(styleElement);
}

// Loading message
const loadingElement = document.createElement('div')
loadingElement.style.position = 'absolute'
loadingElement.style.top = '50%'
loadingElement.style.left = '50%'
loadingElement.style.transform = 'translate(-50%, -50%)'
loadingElement.style.padding = '20px'
loadingElement.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
loadingElement.style.color = 'white'
loadingElement.style.fontFamily = 'Arial, sans-serif'
loadingElement.style.fontSize = '18px'
loadingElement.style.borderRadius = '8px'
loadingElement.style.zIndex = '1000'
loadingElement.style.display = 'flex'
loadingElement.style.flexDirection = 'column'
loadingElement.style.alignItems = 'center'
loadingElement.style.gap = '15px'

// Create the spinner element
const spinnerElement = document.createElement('div')
spinnerElement.style.width = '40px'
spinnerElement.style.height = '40px'
spinnerElement.style.border = '4px solid rgba(255, 255, 255, 0.1)'
spinnerElement.style.borderTopColor = '#4fc3f7'
spinnerElement.style.borderLeftColor = '#4fc3f7'
spinnerElement.style.borderRadius = '50%'
spinnerElement.style.animation = 'spin 0.8s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite'
spinnerElement.style.boxShadow = '0 0 10px rgba(79, 195, 247, 0.5)'

// Create a glow effect element inside the spinner
const spinnerGlow = document.createElement('div')
spinnerGlow.style.position = 'absolute'
spinnerGlow.style.width = '40px'
spinnerGlow.style.height = '40px'
spinnerGlow.style.borderRadius = '50%'
spinnerGlow.style.animation = 'pulse 1.5s ease-in-out infinite alternate'
spinnerGlow.style.zIndex = '-1'

// Add the spinner glow before the actual spinner
spinnerElement.appendChild(spinnerGlow)

// Create the text element
const loadingTextElement = document.createElement('div')
loadingTextElement.innerText = 'Generating Hello text particles...'
loadingTextElement.style.textAlign = 'center'
loadingTextElement.style.marginTop = '5px'
loadingTextElement.style.animation = 'fadeInOut 1.2s ease-in-out infinite alternate'

// Add keyframes for spinner animation
const styleElement = document.createElement('style')
styleElement.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 5px rgba(79, 195, 247, 0.2); }
    100% { box-shadow: 0 0 20px rgba(79, 195, 247, 0.8); }
  }
  @keyframes fadeInOut {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }
`
document.head.appendChild(styleElement)

// Add elements to loading container
loadingElement.appendChild(spinnerElement)
loadingElement.appendChild(loadingTextElement)

// Create an additional element for progress bar
const progressBarContainer = document.createElement('div')
progressBarContainer.style.width = '200px'
progressBarContainer.style.height = '6px'
progressBarContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
progressBarContainer.style.borderRadius = '3px'
progressBarContainer.style.overflow = 'hidden'
progressBarContainer.style.marginTop = '5px'
progressBarContainer.style.display = 'none'

const progressBar = document.createElement('div')
progressBar.style.height = '100%'
progressBar.style.width = '0%'
progressBar.style.backgroundColor = '#4fc3f7'
progressBar.style.transition = 'width 0.3s ease'

progressBarContainer.appendChild(progressBar)
loadingElement.appendChild(progressBarContainer)
document.body.appendChild(loadingElement)

// Enhanced function to update loading message with optional progress
function updateLoadingMessage(message, progress = null) {
  loadingTextElement.innerText = message
  loadingElement.style.display = 'flex'

  // Show/hide and update progress bar if progress is provided
  if (progress !== null && progress >= 0 && progress <= 100) {
    progressBarContainer.style.display = 'block'
    progressBar.style.width = `${progress}%`

    // Add percentage to message if not already included
    if (!message.includes('%')) {
      loadingTextElement.innerText = `${message} (${Math.round(progress)}%)`
    }
  } else {
    progressBarContainer.style.display = 'none'
  }
}

// Function to hide loading message
function hideLoadingMessage() {
  loadingElement.style.display = 'none';
}

// Preload font for reuse
function preloadFont(callback) {
  if (font) {
    console.log("Font already loaded");
    if (callback && typeof callback === 'function') {
      callback();
    }
    return;
  }

  console.log(`Preloading font: ${currentFontName} from ${currentFontUrl}`);
  updateLoadingMessage(`Loading font: ${currentFontName}...`);

  const fontLoader = new FontLoader();
  fontLoader.load(
    currentFontUrl,
    // Success callback
    (loadedFont) => {
      font = loadedFont;
      console.log(`Font ${currentFontName} loaded successfully`);
      hideLoadingMessage();

      // Call the callback if provided
      if (callback && typeof callback === 'function') {
        callback();
      }
    },
    // Progress callback
    (xhr) => {
      const progressPercent = Math.round((xhr.loaded / xhr.total) * 100);
      console.log(`Font loading progress: ${progressPercent}%`);
      updateLoadingMessage(`Loading font: ${currentFontName}...`, progressPercent);
    },
    // Error callback
    (error) => {
      console.error(`Error loading font ${currentFontName}:`, error);
      hideLoadingMessage();
      alert(`Failed to load font: ${currentFontName}. Using default font.`);
    }
  );
}

// Generate geometries for both source and target text
function generateTextGeometries(sourceText, targetText, callback) {
  isGenerating = true;

  // Show loading message
  updateLoadingMessage(`Generating text transformation from "${sourceText}" to "${targetText}"...`);

  // Clear previous objects
  if (particleSystem) {
    scene.remove(particleSystem);
    particleSystem.geometry.dispose();
    particleSystem.material.dispose();
    particleSystem = null;
  }

  if (wireframe) {
    scene.remove(wireframe);
    wireframe.geometry.dispose();
    wireframe.material.dispose();
    wireframe = null;
  }

  // If font is not loaded yet, wait for it
  if (!font) {
    preloadFont(() => {
      // Once font is loaded, retry generating geometries
      if (font) {
        generateTextGeometries(sourceText, targetText, callback);
      }
    });
    return;
  }

  // Use cached geometries if available
  const sourceKey = `${sourceText}_geom`;
  const targetKey = `${targetText}_geom`;

  // Log what we're creating
  console.log(`Generating geometries for "${sourceText}" and "${targetText}" with font: ${currentFontName}`);

  const sourcePromise = geometryCache[sourceKey]
    ? Promise.resolve(geometryCache[sourceKey])
    : createGeometryAsync(sourceText);

  const targetPromise = geometryCache[targetKey]
    ? Promise.resolve(geometryCache[targetKey])
    : createGeometryAsync(targetText);

  // Process both geometries in parallel
  Promise.all([sourcePromise, targetPromise])
    .then(([sourceGeometry, targetGeometry]) => {
      // Cache geometries
      geometryCache[sourceKey] = sourceGeometry;
      geometryCache[targetKey] = targetGeometry;

      // Process geometry data and create particle system
      processGeometries(sourceGeometry, targetGeometry);

      // Only start automatic animation for non-initial loads and when not triggered from button
      // This prevents automatic animation when changing texts from the input fields
      if (!isFirstLoad && initialAnimationComplete && !callback) {
        console.log("Starting subsequent animation automatically");
        setTimeout(() => {
          startMorphAnimationWithCallback();
        }, 300);
      }

      // Clear initial load flag if this is the first time
      if (isFirstLoad) {
        isFirstLoad = false;
      }

      // Update UI after generation
      updateTextInputValues();
      updateStatusSection();

      // Call callback if provided
      if (callback && typeof callback === 'function') {
        callback();
      }
    });
}

// Process geometries and create particle system
function processGeometries(sourceGeometry, targetGeometry) {
  // Log the current state of color configurations for debugging
  console.log("Processing geometries with color configs:", {
    source: {
      baseHue: sourceColorConfig.baseHue,
      saturation: sourceColorConfig.saturation,
      brightness: sourceColorConfig.brightness,
      needsRefresh: colorsNeedRefresh
    },
    target: {
      baseHue: targetColorConfig.baseHue,
      saturation: targetColorConfig.saturation,
      brightness: targetColorConfig.brightness
    }
  });

  if (USE_WORKER && window.Worker) {
    // Create a worker for heavy computations
    const worker = new Worker(createGeometryWorkerBlob());

    // Extract positions and normals from geometries
    const sourceNonIndexed = sourceGeometry.toNonIndexed();
    const targetNonIndexed = targetGeometry.toNonIndexed();

    // Prepare color configs with end colors for gradients
    // These configs ensure each text has a gradient from its color to the other text's color
    const sourceColorWithGradient = {
      baseHue: sourceColorConfig.baseHue,
      hueRange: sourceColorConfig.hueRange,
      saturation: sourceColorConfig.saturation,
      brightness: sourceColorConfig.brightness,
      endColorConfig: {
        baseHue: targetColorConfig.baseHue,
        hueRange: targetColorConfig.hueRange,
        saturation: targetColorConfig.saturation,
        brightness: targetColorConfig.brightness
      }
    };

    const targetColorWithGradient = {
      baseHue: targetColorConfig.baseHue,
      hueRange: targetColorConfig.hueRange,
      saturation: targetColorConfig.saturation,
      brightness: targetColorConfig.brightness,
      endColorConfig: {
        baseHue: sourceColorConfig.baseHue,
        hueRange: sourceColorConfig.hueRange,
        saturation: sourceColorConfig.saturation,
        brightness: sourceColorConfig.brightness
      }
    };

    // Enable debug for the first few particles if colors need refresh
    if (colorsNeedRefresh) {
      console.log("Colors need refresh - enabling debug for geometry creation");
      sourceColorWithGradient._debug = true;
      targetColorWithGradient._debug = true;
    }

    // Log gradient configuration to help with debugging
    console.log("Source gradient:", {
      start: { h: sourceColorWithGradient.baseHue, s: sourceColorWithGradient.saturation, l: sourceColorWithGradient.brightness },
      end: { h: sourceColorWithGradient.endColorConfig.baseHue, s: sourceColorWithGradient.endColorConfig.saturation, l: sourceColorWithGradient.endColorConfig.brightness }
    });
    console.log("Target gradient:", {
      start: { h: targetColorWithGradient.baseHue, s: targetColorWithGradient.saturation, l: targetColorWithGradient.brightness },
      end: { h: targetColorWithGradient.endColorConfig.baseHue, s: targetColorWithGradient.endColorConfig.saturation, l: targetColorWithGradient.endColorConfig.brightness }
    });

    // Send data to worker
    worker.postMessage({
      sourcePositions: Array.from(sourceNonIndexed.attributes.position.array),
      sourceNormals: Array.from(sourceNonIndexed.attributes.normal.array),
      targetPositions: Array.from(targetNonIndexed.attributes.position.array),
      targetNormals: Array.from(targetNonIndexed.attributes.normal.array),
      particleCount: PARTICLE_COUNT,
      particleSize: PARTICLE_SIZE,
      surfacePrecision: SURFACE_PRECISION,
      sourceColorConfig: sourceColorWithGradient,
      targetColorConfig: targetColorWithGradient,
      colorsNeedRefresh: colorsNeedRefresh || isChangingColors
    });

    // Handle worker response
    worker.onmessage = function (e) {
      console.log("Geometry worker completed, processing response");

      // Check if data exists
      if (!e.data) {
        console.error("Error: Missing data in worker response");
        hideLoadingMessage();
        resetOperationFlags();
        return;
      }

      // Initialize particleData with the worker response
      particleData = e.data;

      try {
        // Convert back to typed arrays for better performance
        particleData.sourcePositions = new Float32Array(particleData.sourcePositions);
        particleData.sourceColors = new Float32Array(particleData.sourceColors);
        particleData.sourceSizes = new Float32Array(particleData.sourceSizes);
        particleData.targetPositions = new Float32Array(particleData.targetPositions);
        particleData.targetColors = new Float32Array(particleData.targetColors);

        // Create particle system and wireframe
        console.log("Creating particle system from worker data");
        updateLoadingMessage("Creating particle system...");
        const particleSystemCreated = createParticleSystem();
        createWireframe(sourceGeometry);

        // If we're changing colors, double-check colors are correct
        if (colorsNeedRefresh || isChangingColors) {
          console.log("Forcing final color updates after particle system creation");

          // Force a direct update of the colors
          updateParticleColors();

          // Render to make sure changes are visible
          renderer.render(scene, camera);
        }

        // Clean up
        sourceNonIndexed.dispose();
        targetNonIndexed.dispose();
        worker.terminate();

        // Only show complete if the particle system was created successfully
        if (particleSystemCreated) {
          console.log("Particle system created successfully, cleaning up");

          // Set a small timeout to ensure the final render happens before hiding the loading message
          setTimeout(() => {
            // Reset all operation flags
            resetOperationFlags();

            // Now hide the loading message
            hideLoadingMessage();

            // Update UI elements
            updateStatusSection();

            // Final render to ensure everything is visible
            renderer.render(scene, camera);

            const completionMessage = `Created text morphing from "${currentText}" to "${targetText}" with ${PARTICLE_COUNT} particles`;
            console.log(completionMessage);
          }, 100); // Small delay to ensure rendering is complete
        } else {
          console.error("Failed to create particle system");
          hideLoadingMessage();
          resetOperationFlags();
        }
      } catch (error) {
        console.error("Error creating particle system:", error);
        hideLoadingMessage();
        resetOperationFlags();
      }
    };
  } else {
    // Fallback to synchronous processing
    setTimeout(() => {
      // Extract geometry data for sampling
      const sourceData = extractGeometryData(sourceGeometry);
      const targetData = extractGeometryData(targetGeometry);

      // Generate particle data
      particleData = {
        sourcePositions: new Float32Array(PARTICLE_COUNT * 3),
        sourceColors: new Float32Array(PARTICLE_COUNT * 3),
        sourceSizes: new Float32Array(PARTICLE_COUNT),
        targetPositions: new Float32Array(PARTICLE_COUNT * 3),
        targetColors: new Float32Array(PARTICLE_COUNT * 3)
      };

      // Process particles in batches for better UI responsiveness
      const batchSize = 5000;
      let processedCount = 0;

      function processBatch() {
        const endIdx = Math.min(processedCount + batchSize, PARTICLE_COUNT);

        for (let i = processedCount; i < endIdx; i++) {
          // Sample from source geometry
          const sourcePoint = samplePointFromGeometry(sourceData);
          const sourceColor = calculateParticleColor(sourcePoint, sourceColorConfig);

          // Sample from target geometry
          const targetPoint = samplePointFromGeometry(targetData);
          const targetColor = calculateParticleColor(targetPoint, targetColorConfig);

          // Store source position and color
          particleData.sourcePositions[i * 3] = sourcePoint.position.x;
          particleData.sourcePositions[i * 3 + 1] = sourcePoint.position.y;
          particleData.sourcePositions[i * 3 + 2] = sourcePoint.position.z;

          particleData.sourceColors[i * 3] = sourceColor.r;
          particleData.sourceColors[i * 3 + 1] = sourceColor.g;
          particleData.sourceColors[i * 3 + 2] = sourceColor.b;

          // Store target position and color
          particleData.targetPositions[i * 3] = targetPoint.position.x;
          particleData.targetPositions[i * 3 + 1] = targetPoint.position.y;
          particleData.targetPositions[i * 3 + 2] = targetPoint.position.z;

          particleData.targetColors[i * 3] = targetColor.r;
          particleData.targetColors[i * 3 + 1] = targetColor.g;
          particleData.targetColors[i * 3 + 2] = targetColor.b;

          // Set particle size with edge enhancement
          const edgeFactor = (sourcePoint.isEdge || targetPoint.isEdge) ? 1.4 : 1.0;
          particleData.sourceSizes[i] = PARTICLE_SIZE * (0.8 + 0.4 * Math.random()) * edgeFactor;
        }

        processedCount = endIdx;

        updateLoadingMessage(`Processing particles: ${Math.floor((processedCount / PARTICLE_COUNT) * 100)}%`);

        if (processedCount < PARTICLE_COUNT) {
          setTimeout(processBatch, 0);
        } else {
          // All particles processed, create the system
          createParticleSystem();
          createWireframe(sourceGeometry);
          hideLoadingMessage();
          resetOperationFlags();

          const completionMessage = `Created text morphing from "${currentText}" to "${targetText}" with ${PARTICLE_COUNT} particles`;
          console.log(completionMessage);
        }
      }

      // Start processing
      processBatch();
    }, 100);
  }
}

// Create text geometry with standard settings asynchronously
function createGeometryAsync(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const geometry = createTextGeometry(text);
      resolve(geometry);
    }, 0);
  });
}

// Create a wireframe from the source geometry
function createWireframe(sourceGeometry) {
  wireframe = new THREE.LineSegments(
    new THREE.WireframeGeometry(sourceGeometry),
    new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.2 })
  );
  wireframe.visible = false;
  scene.add(wireframe);

  // Update UI info
  updateInfoPanel();
}

// Create a Blob URL for the worker script
function createGeometryWorkerBlob() {
  const workerScript = `
    // Worker to process geometry data
    self.onmessage = function(e) {
      const {
        sourcePositions, sourceNormals,
        targetPositions, targetNormals,
        particleCount, particleSize, surfacePrecision,
        sourceColorConfig, targetColorConfig,
        colorsNeedRefresh
      } = e.data;
      
      console.log("Worker received data:", {
        particleCount,
        colorsNeedRefresh,
        sourceColor: {
          baseHue: sourceColorConfig.baseHue,
          saturation: sourceColorConfig.saturation,
          brightness: sourceColorConfig.brightness,
          endHue: sourceColorConfig.endColorConfig ? sourceColorConfig.endColorConfig.baseHue : "none"
        },
        targetColor: {
          baseHue: targetColorConfig.baseHue,
          saturation: targetColorConfig.saturation,
          brightness: targetColorConfig.brightness,
          endHue: targetColorConfig.endColorConfig ? targetColorConfig.endColorConfig.baseHue : "none"
        }
      });
      
      // Process geometries without modifying the color config objects
      const sourceData = extractGeometryData(sourcePositions, sourceNormals);
      const targetData = extractGeometryData(targetPositions, targetNormals);
      
      // Generate particle data
      const particleData = {
        sourcePositions: new Array(particleCount * 3),
        sourceColors: new Array(particleCount * 3),
        sourceSizes: new Array(particleCount),
        targetPositions: new Array(particleCount * 3),
        targetColors: new Array(particleCount * 3)
      };
      
      // If this is just a color refresh, we still need to sample positions
      // but we will pay special attention to calculating the colors correctly
      if (colorsNeedRefresh) {
        console.log("Worker: Colors need refresh - special attention to color calculations");
      }
      
      // Normal processing - sample particles
      for (let i = 0; i < particleCount; i++) {
        // Sample from source geometry
        const sourcePoint = samplePointFromGeometry(sourceData, surfacePrecision);
        
        // Debug the first few particles if debug flag is set
        const isDebugParticle = i < 5 && (sourceColorConfig._debug || targetColorConfig._debug);
        
        // Create a debug copy of color config if needed
        let sourceColorConfigForCalc = sourceColorConfig;
        if (isDebugParticle) {
          sourceColorConfigForCalc = Object.assign({}, sourceColorConfig, { _debug: true });
          console.log(\`Particle \${i} source position: \${sourcePoint.position.x}, \${sourcePoint.position.y}, \${sourcePoint.position.z}\`);
        }
        
        // Calculate source color with latest color config
        const sourceColor = calculateParticleColor(sourcePoint, sourceColorConfigForCalc);
        
        // Sample from target geometry
        const targetPoint = samplePointFromGeometry(targetData, surfacePrecision);
        
        // Create a debug copy of color config if needed
        let targetColorConfigForCalc = targetColorConfig;
        if (isDebugParticle) {
          targetColorConfigForCalc = Object.assign({}, targetColorConfig, { _debug: true });
          console.log(\`Particle \${i} target position: \${targetPoint.position.x}, \${targetPoint.position.y}, \${targetPoint.position.z}\`);
        }
        
        // Calculate target color with latest color config
        const targetColor = calculateParticleColor(targetPoint, targetColorConfigForCalc);
        
        // Store source position and color
        particleData.sourcePositions[i * 3] = sourcePoint.position.x;
        particleData.sourcePositions[i * 3 + 1] = sourcePoint.position.y;
        particleData.sourcePositions[i * 3 + 2] = sourcePoint.position.z;
        
        particleData.sourceColors[i * 3] = sourceColor.r;
        particleData.sourceColors[i * 3 + 1] = sourceColor.g;
        particleData.sourceColors[i * 3 + 2] = sourceColor.b;
        
        // Store target position and color
        particleData.targetPositions[i * 3] = targetPoint.position.x;
        particleData.targetPositions[i * 3 + 1] = targetPoint.position.y;
        particleData.targetPositions[i * 3 + 2] = targetPoint.position.z;
        
        particleData.targetColors[i * 3] = targetColor.r;
        particleData.targetColors[i * 3 + 1] = targetColor.g;
        particleData.targetColors[i * 3 + 2] = targetColor.b;
        
        // Set particle size with edge enhancement
        const edgeFactor = (sourcePoint.isEdge || targetPoint.isEdge) ? 1.4 : 1.0;
        particleData.sourceSizes[i] = particleSize * (0.8 + 0.4 * Math.random()) * edgeFactor;
      }
      
      // Send back to main thread
      self.postMessage(particleData);
      
      // Helper functions
      function extractGeometryData(positions, normals) {
        // Lists to store faces and their areas for weighted sampling
        const faces = [];
        const faceAreas = [];
        let totalArea = 0;
        
        // Process all faces to calculate areas for weighted sampling
        for (let i = 0; i < positions.length; i += 9) {
          // Extract vertices
          const v1 = {x: positions[i], y: positions[i+1], z: positions[i+2]};
          const v2 = {x: positions[i+3], y: positions[i+4], z: positions[i+5]};
          const v3 = {x: positions[i+6], y: positions[i+7], z: positions[i+8]};
          
          // Calculate face normal
          const nx = (normals[i] + normals[i+3] + normals[i+6]) / 3;
          const ny = (normals[i+1] + normals[i+4] + normals[i+7]) / 3;
          const nz = (normals[i+2] + normals[i+5] + normals[i+8]) / 3;
          
          // Normalize normal
          const len = Math.sqrt(nx*nx + ny*ny + nz*nz);
          const normal = {
            x: nx / len,
            y: ny / len,
            z: nz / len
          };
          
          // Calculate face area (cross product method)
          const edge1 = {
            x: v2.x - v1.x,
            y: v2.y - v1.y,
            z: v2.z - v1.z
          };
          
          const edge2 = {
            x: v3.x - v1.x,
            y: v3.y - v1.y,
            z: v3.z - v1.z
          };
          
          // Cross product
          const cx = edge1.y * edge2.z - edge1.z * edge2.y;
          const cy = edge1.z * edge2.x - edge1.x * edge2.z;
          const cz = edge1.x * edge2.y - edge1.y * edge2.x;
          
          const area = Math.sqrt(cx*cx + cy*cy + cz*cz) / 2;
          
          // Store face data
          faces.push({ v1, v2, v3, normal, area });
          faceAreas.push(area);
          totalArea += area;
        }
        
        // Create cumulative distribution
        let cumulativeArea = 0;
        const cumulativeAreas = faceAreas.map(area => {
          cumulativeArea += area / totalArea;
          return cumulativeArea;
        });
        
        return {
          positions,
          faces,
          faceAreas,
          totalArea,
          cumulativeAreas
        };
      }
      
      function samplePointFromGeometry(geometryData, surfacePrecision) {
        // Pick a face based on its area (more area = more particles)
        const randomValue = Math.random();
        let selectedFaceIndex = 0;
        
        for (let j = 0; j < geometryData.cumulativeAreas.length; j++) {
          if (randomValue <= geometryData.cumulativeAreas[j]) {
            selectedFaceIndex = j;
            break;
          }
        }
        
        const face = geometryData.faces[selectedFaceIndex];
        
        // Generate a random point on the triangle face
        const u = Math.random();
        const v = Math.random() * (1 - u);
        
        const point = {
          x: face.v1.x * (1 - u - v) + face.v2.x * u + face.v3.x * v,
          y: face.v1.y * (1 - u - v) + face.v2.y * u + face.v3.y * v,
          z: face.v1.z * (1 - u - v) + face.v2.z * u + face.v3.z * v
        };
        
        // Add very small random offset perpendicular to surface
        const offset = {
          x: face.normal.x * (Math.random() - 0.5) * surfacePrecision,
          y: face.normal.y * (Math.random() - 0.5) * surfacePrecision,
          z: face.normal.z * (Math.random() - 0.5) * surfacePrecision
        };
        
        point.x += offset.x;
        point.y += offset.y;
        point.z += offset.z;
        
        // Check if point is near an edge
        const isEdge = isNearEdge(point, geometryData.positions);
        
        return {
          position: point,
          normal: face.normal,
          isEdge: isEdge
        };
      }
      
      function isNearEdge(point, positions, threshold = 0.08) {
        // Check against a subset of vertices for efficiency
        const stride = 9; // Check every third vertex for performance
        
        for (let i = 0; i < positions.length; i += stride) {
          const vertex = {
            x: positions[i],
            y: positions[i+1],
            z: positions[i+2]
          };
          
          // Calculate distance
          const dx = point.x - vertex.x;
          const dy = point.y - vertex.y;
          const dz = point.z - vertex.z;
          const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
          
          if (distance < threshold) {
            return true;
          }
        }
        
        return false;
      }
      
      // Helper function to convert HSL to RGB
      function hslToRgb(h, s, l) {
        let r, g, b;
        
        if (s === 0) {
          r = g = b = l; // achromatic
        } else {
          const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
          };
          
          const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          const p = 2 * l - q;
          
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
        }
        
        return {r, g, b};
      }
      
      function calculateParticleColor(pointData, colorConfig) {
        // Create a more even left-to-right gradient that spans the actual text
        // Use only the X position for a consistent horizontal gradient
        // Map X position to 0-1 range for even gradient distribution
        // Text in the geometry is centered at origin and approximately spans +/- 2 units in x direction
        const minX = -2.0; // Left edge of typical text
        const maxX = 2.0;  // Right edge of typical text
        const normalizedX = (pointData.position.x - minX) / (maxX - minX);
        const clampedGradient = Math.max(0, Math.min(1, normalizedX)); // Ensure value is 0-1
        
        // Get start color
        const startHue = colorConfig.baseHue;
        const startSaturation = colorConfig.saturation;
        const startBrightness = colorConfig.brightness;
        
        // Get end color - either from endColorConfig or generate a complementary color
        let endHue, endSaturation, endBrightness;
        
        if (colorConfig.endColorConfig) {
          endHue = colorConfig.endColorConfig.baseHue;
          endSaturation = colorConfig.endColorConfig.saturation;
          endBrightness = colorConfig.endColorConfig.brightness;
        } else {
          // Use opposite hue if no end color specified
          endHue = (startHue + 0.5) % 1.0;
          endSaturation = startSaturation;
          endBrightness = startBrightness;
        }
        
        
        // When interpolating hue, handle the case where the hues are on opposite sides of the color wheel
        let hueDiff = endHue - startHue;
        if (Math.abs(hueDiff) > 0.5) {
          // Take the shorter path around the color wheel
          if (hueDiff > 0) {
            hueDiff = hueDiff - 1;
          } else {
            hueDiff = hueDiff + 1;
          }
        }
        
        // Use a non-linear interpolation for more dramatic color transitions
        // Apply a power curve to create a more dramatic gradient effect
        const powerCurve = Math.pow(clampedGradient, 0.7); // Adjust power for gradient effect
        
        // Interpolate HSL values with special handling for hue
        const interpolatedHue = (startHue + hueDiff * powerCurve + 1) % 1; // Keep in 0-1 range
        const interpolatedSaturation = Math.min(1.0, startSaturation + (endSaturation - startSaturation) * powerCurve + 0.1);
        const interpolatedBrightness = Math.min(0.7, startBrightness + (endBrightness - startBrightness) * powerCurve + 0.1);
        
        // Use hslToRgb function to convert HSL to RGB
        return hslToRgb(interpolatedHue, interpolatedSaturation, interpolatedBrightness);
      }
    };
  `;

  const blob = new Blob([workerScript], { type: 'application/javascript' });
  return URL.createObjectURL(blob);
}

// Create text geometry with standard settings
function createTextGeometry(text) {
  const textGeometry = new TextGeometry(text, {
    font: font,
    size: 1,
    depth: 1,
    curveSegments: 32,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.03,
    bevelSegments: 8
  });

  // Center the text geometry
  textGeometry.computeBoundingBox();
  const textWidth = textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x;
  textGeometry.translate(-textWidth / 2, -0.5, 0);

  return textGeometry;
}

// Extract data from a geometry for sampling
function extractGeometryData(geometry) {
  const nonIndexedGeometry = geometry.toNonIndexed();
  const positions = nonIndexedGeometry.attributes.position.array;
  const normals = nonIndexedGeometry.attributes.normal.array;

  // Lists to store faces and their areas for weighted sampling
  const faces = [];
  const faceAreas = [];
  let totalArea = 0;

  // Process all faces to calculate areas for weighted sampling
  for (let i = 0; i < positions.length; i += 9) {
    // Extract vertices
    const v1 = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
    const v2 = new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5]);
    const v3 = new THREE.Vector3(positions[i + 6], positions[i + 7], positions[i + 8]);

    // Calculate face normal
    const normal = new THREE.Vector3(
      (normals[i] + normals[i + 3] + normals[i + 6]) / 3,
      (normals[i + 1] + normals[i + 4] + normals[i + 7]) / 3,
      (normals[i + 2] + normals[i + 5] + normals[i + 8]) / 3
    ).normalize();

    // Calculate face area
    const edge1 = new THREE.Vector3().subVectors(v2, v1);
    const edge2 = new THREE.Vector3().subVectors(v3, v1);
    const crossProduct = new THREE.Vector3().crossVectors(edge1, edge2);
    const area = crossProduct.length() / 2;

    // Store face data
    faces.push({ v1, v2, v3, normal, area });
    faceAreas.push(area);
    totalArea += area;
  }

  // Create cumulative distribution
  let cumulativeArea = 0;
  const cumulativeAreas = faceAreas.map(area => {
    cumulativeArea += area / totalArea;
    return cumulativeArea;
  });

  return {
    positions,
    normals,
    faces,
    faceAreas,
    totalArea,
    cumulativeAreas
  };
}

// Sample a point from a geometry
function samplePointFromGeometry(geometryData) {
  // Pick a face based on its area (more area = more particles)
  const randomValue = Math.random();
  let selectedFaceIndex = 0;

  for (let j = 0; j < geometryData.cumulativeAreas.length; j++) {
    if (randomValue <= geometryData.cumulativeAreas[j]) {
      selectedFaceIndex = j;
      break;
    }
  }

  const face = geometryData.faces[selectedFaceIndex];

  // Generate a random point on the triangle face
  const u = Math.random();
  const v = Math.random() * (1 - u);

  const point = new THREE.Vector3()
    .addScaledVector(face.v1, 1 - u - v)
    .addScaledVector(face.v2, u)
    .addScaledVector(face.v3, v);

  // Add very small random offset perpendicular to surface
  const offset = new THREE.Vector3()
    .copy(face.normal)
    .multiplyScalar((Math.random() - 0.5) * SURFACE_PRECISION);
  point.add(offset);

  // Check if point is near an edge
  const isEdge = isNearEdge(point, geometryData.positions);

  return {
    position: point,
    normal: face.normal,
    isEdge: isEdge
  };
}

// Add this function before calculateParticleColor
// Convert HSL color values to RGB
function hslToRgb(h, s, l) {
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return { r, g, b };
}

// Calculate color for a particle based on position and normal
function calculateParticleColor(pointData, colorConfig) {
  // Create a more even left-to-right gradient that spans the actual text
  // Use only the X position for a consistent horizontal gradient
  // Map X position to 0-1 range for even gradient distribution
  // Text in the geometry is centered at origin and approximately spans +/- 2 units in x direction
  const minX = -2.0; // Left edge of typical text
  const maxX = 2.0;  // Right edge of typical text
  const normalizedX = (pointData.position.x - minX) / (maxX - minX);
  const clampedGradient = Math.max(0, Math.min(1, normalizedX)); // Ensure value is 0-1

  // Get start color
  const startHue = colorConfig.baseHue;
  const startSaturation = colorConfig.saturation;
  const startBrightness = colorConfig.brightness;

  // Get end color - either from endColorConfig or generate a complementary color
  let endHue, endSaturation, endBrightness;

  if (colorConfig.endColorConfig) {
    endHue = colorConfig.endColorConfig.baseHue;
    endSaturation = colorConfig.endColorConfig.saturation;
    endBrightness = colorConfig.endColorConfig.brightness;
  } else {
    // Use opposite hue if no end color specified
    endHue = (startHue + 0.5) % 1.0;
    endSaturation = startSaturation;
    endBrightness = startBrightness;
  }


  // When interpolating hue, handle the case where the hues are on opposite sides of the color wheel
  let hueDiff = endHue - startHue;
  if (Math.abs(hueDiff) > 0.5) {
    // Take the shorter path around the color wheel
    if (hueDiff > 0) {
      hueDiff = hueDiff - 1;
    } else {
      hueDiff = hueDiff + 1;
    }
  }

  // Use a non-linear interpolation for more dramatic color transitions
  // Apply a power curve to create a more dramatic gradient effect
  const powerCurve = Math.pow(clampedGradient, 0.7); // Adjust power for gradient effect

  // Interpolate HSL values with special handling for hue
  const interpolatedHue = (startHue + hueDiff * powerCurve + 1) % 1; // Keep in 0-1 range
  const interpolatedSaturation = Math.min(1.0, startSaturation + (endSaturation - startSaturation) * powerCurve + 0.1);
  const interpolatedBrightness = Math.min(0.7, startBrightness + (endBrightness - startBrightness) * powerCurve + 0.1);

  // Use hslToRgb function to convert HSL to RGB
  return hslToRgb(interpolatedHue, interpolatedSaturation, interpolatedBrightness);
}


// Create the particle system
function createParticleSystem() {
  console.log("Creating particle system...");

  // Create particle geometry
  const particleGeometry = new THREE.BufferGeometry();

  // Create deep copies of source positions and colors to avoid reference issues
  // This ensures we're not modifying the original arrays when animating
  const initialPositions = new Float32Array(particleData.sourcePositions);
  const initialColors = new Float32Array(particleData.sourceColors);

  // Set initial particle positions and colors
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(initialPositions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(initialColors, 3));
  particleGeometry.setAttribute('size', new THREE.BufferAttribute(new Float32Array(particleData.sourceSizes), 1));

  // Create particle texture
  const particleTexture = createParticleTexture();

  // Create particle material
  const particleMaterial = new THREE.PointsMaterial({
    size: PARTICLE_SIZE,
    map: particleTexture,
    transparent: true,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true
  });

  // Create the particle system
  particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  // IMPORTANT FIX: Store a copy of the current state in the particleData.sourcePositions and sourceColors
  // to ensure we always have an accurate starting point for animations
  const positions = particleSystem.geometry.attributes.position.array;
  const colors = particleSystem.geometry.attributes.color.array;

  // Deep copies to ensure we're not sharing references
  particleData.currentDisplayPositions = new Float32Array(positions.length);
  particleData.currentDisplayColors = new Float32Array(colors.length);

  for (let i = 0; i < positions.length; i++) {
    particleData.currentDisplayPositions[i] = positions[i];
    particleData.currentDisplayColors[i] = colors[i];
  }

  console.log("Particle system created with initial text:", currentText);

  // Signal particle system creation is complete
  return true;
}

// Variable to track if automatic animation is running
let autoAnimating = false;

// Add flag to track when we've just applied changes
let justAppliedChanges = false;

// Start animation between source and target shapes with optional callback
function startMorphAnimationWithCallback(callback = null) {
  if (isAnimating || !particleData || isChangingFont) {
    console.log("Cannot start animation: isAnimating=", isAnimating, "particleData=", particleData ? "exists" : "null", "isChangingFont=", isChangingFont);
    return;
  }

  console.log("Starting morph animation with callback, from:", currentText, "to:", targetText);

  // If colors have been changed, make sure they're reflected before animation
  // BUT SKIP if we just applied changes (the colors are already correct)
  if (colorsNeedRefresh && !justAppliedChanges) {
    console.log("Colors have changed - refreshing before animation");
    refreshParticleColors();

    // We need to delay starting the animation to let the refresh complete
    setTimeout(() => {
      startMorphAnimationWithCallback(callback);
    }, 500);
    return;
  } else if (justAppliedChanges) {
    console.log("Skipping color refresh since we just applied changes");
    // Reset the flag after using it
    justAppliedChanges = false;
  }

  // IMPORTANT FIX: Always ensure we're starting from the actual current state of the particle system
  const currentPositions = particleSystem.geometry.attributes.position.array;
  const currentColors = particleSystem.geometry.attributes.color.array;

  // Create a snapshot of the current displayed state
  const displayedPositions = new Float32Array(currentPositions.length);
  const displayedColors = new Float32Array(currentColors.length);

  for (let i = 0; i < currentPositions.length; i++) {
    displayedPositions[i] = currentPositions[i];
    displayedColors[i] = currentColors[i];
  }

  // CRITICAL FIX: We need to swap the target positions to prepare for animation
  // If we're only using sourcePositions for animation starting point but never
  // changing targetPositions, the animation won't go anywhere new after first time

  // Store a temporary copy of the target data - will become the new source positions after animation
  const tempTargetPositions = new Float32Array(particleData.targetPositions);
  const tempTargetColors = new Float32Array(particleData.targetColors);

  // Ensure source positions are exactly what's being displayed
  particleData.sourcePositions = displayedPositions;
  particleData.sourceColors = displayedColors;

  console.log("Updated source/target data for animation");

  // Start the animation using the accurate current state
  startActualAnimation();

  function startActualAnimation() {
    console.log("Starting actual animation from", currentText, "to", targetText);
    isAnimating = true;
    animationProgress = 0;
    const startTime = Date.now();

    // Update the button text and state while animating
    const transformButton = document.getElementById('transform-button');
    const applyButton = document.getElementById('apply-button');
    const fontSelect = document.getElementById('font-select');

    if (transformButton) {
      transformButton.textContent = 'Animating...';
      transformButton.disabled = true;
      transformButton.style.opacity = '0.5';
      transformButton.style.cursor = 'not-allowed';
    }

    if (applyButton) {
      applyButton.disabled = true;
      applyButton.style.opacity = '0.5';
      applyButton.style.cursor = 'not-allowed';
    }

    if (fontSelect) {
      fontSelect.disabled = true;
      fontSelect.style.opacity = '0.5';
      fontSelect.style.cursor = 'not-allowed';
    }

    function updateAnimation() {
      const elapsed = Date.now() - startTime;
      animationProgress = Math.min(elapsed / ANIMATION_DURATION, 1);

      // Use easing function for smoother transition
      const easedProgress = easeInOutCubic(animationProgress);

      // Update positions and colors
      const positions = particleSystem.geometry.attributes.position.array;
      const colors = particleSystem.geometry.attributes.color.array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        // Interpolate position
        positions[i * 3] = lerp(
          particleData.sourcePositions[i * 3],
          particleData.targetPositions[i * 3],
          easedProgress
        );
        positions[i * 3 + 1] = lerp(
          particleData.sourcePositions[i * 3 + 1],
          particleData.targetPositions[i * 3 + 1],
          easedProgress
        );
        positions[i * 3 + 2] = lerp(
          particleData.sourcePositions[i * 3 + 2],
          particleData.targetPositions[i * 3 + 2],
          easedProgress
        );

        // Interpolate color
        colors[i * 3] = lerp(
          particleData.sourceColors[i * 3],
          particleData.targetColors[i * 3],
          easedProgress
        );
        colors[i * 3 + 1] = lerp(
          particleData.sourceColors[i * 3 + 1],
          particleData.targetColors[i * 3 + 1],
          easedProgress
        );
        colors[i * 3 + 2] = lerp(
          particleData.sourceColors[i * 3 + 2],
          particleData.targetColors[i * 3 + 2],
          easedProgress
        );
      }

      // Mark attributes as needing update
      particleSystem.geometry.attributes.position.needsUpdate = true;
      particleSystem.geometry.attributes.color.needsUpdate = true;

      // Continue animation if not complete
      if (animationProgress < 1) {
        requestAnimationFrame(updateAnimation);
      } else {
        // Animation complete
        isAnimating = false;
        console.log("Animation complete, final particle positions updated");

        // CRITICAL FIX: Now we swap the particleData positions so the next animation 
        // will go back in the opposite direction
        // Store the newly displayed target positions as source for next animation
        particleData.sourcePositions = new Float32Array(tempTargetPositions);
        particleData.sourceColors = new Float32Array(tempTargetColors);

        // And the previous source positions become the target for next animation
        particleData.targetPositions = displayedPositions;
        particleData.targetColors = displayedColors;

        console.log("Swapped source/target data for next animation");

        // Update the snapshot of current positions
        const positions = particleSystem.geometry.attributes.position.array;
        const colors = particleSystem.geometry.attributes.color.array;

        // Store the final state for reference in future animations
        particleData.currentDisplayPositions = new Float32Array(positions.length);
        particleData.currentDisplayColors = new Float32Array(colors.length);

        for (let i = 0; i < positions.length; i++) {
          particleData.currentDisplayPositions[i] = positions[i];
          particleData.currentDisplayColors[i] = colors[i];
        }

        // Reset button states
        if (transformButton) {
          transformButton.textContent = 'Transform';
          transformButton.disabled = false;
          transformButton.style.opacity = '1';
          transformButton.style.cursor = 'pointer';
        }

        if (applyButton) {
          applyButton.disabled = false;
          applyButton.style.opacity = '1';
          applyButton.style.cursor = 'pointer';
        }

        if (fontSelect) {
          fontSelect.disabled = false;
          fontSelect.style.opacity = '1';
          fontSelect.style.cursor = 'pointer';
        }

        // Execute callback if provided
        if (callback && typeof callback === 'function') {
          console.log("Executing animation completion callback");
          callback();
        }
      }
    }

    // Start the animation loop
    updateAnimation();
  }
}

// Modify the original startMorphAnimation to use the new function
function startMorphAnimation(isInitialAnimation = false) {
  startMorphAnimationWithCallback();
}

// Helper function to update input values
function updateTextInputValues() {
  const fromTextInput = document.getElementById('from-text-input');
  const toTextInput = document.getElementById('to-text-input');

  if (fromTextInput && toTextInput) {
    fromTextInput.value = currentText;
    toTextInput.value = targetText;
  }
}

// Helper functions for animation
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Create stylish input field for entering custom text
function createTextInputUI() {
  // Create the main container
  const inputContainer = document.createElement('div')
  inputContainer.id = 'sidebar-container'
  inputContainer.style.position = 'absolute'
  inputContainer.style.top = '20px'
  inputContainer.style.left = '20px'
  inputContainer.style.display = 'flex'
  inputContainer.style.flexDirection = 'column'
  inputContainer.style.alignItems = 'flex-start'
  inputContainer.style.gap = '22px'
  inputContainer.style.zIndex = '100'
  inputContainer.style.backgroundColor = 'rgba(8, 15, 25, 0.85)'
  inputContainer.style.padding = '24px'
  inputContainer.style.borderRadius = '12px'
  inputContainer.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)'
  inputContainer.style.backdropFilter = 'blur(10px)'
  inputContainer.style.webkitBackdropFilter = 'blur(10px)'
  inputContainer.style.maxWidth = '320px'
  inputContainer.style.width = '320px'
  inputContainer.style.transition = 'all 0.3s ease'
  inputContainer.style.border = '1px solid rgba(255, 255, 255, 0.1)'
  inputContainer.style.boxSizing = 'border-box'
  inputContainer.style.overflow = 'visible'  // Allow toggle button to be visible outside the container

  // Create toggle button for collapsing sidebar
  const toggleButton = document.createElement('div')
  toggleButton.id = 'sidebar-toggle'
  toggleButton.style.position = 'absolute'
  toggleButton.style.top = '24px'
  toggleButton.style.right = '-15px'
  toggleButton.style.width = '26px'
  toggleButton.style.height = '26px'
  toggleButton.style.backgroundColor = 'rgba(8, 15, 25, 0.9)'
  toggleButton.style.borderRadius = '50%'
  toggleButton.style.display = 'flex'
  toggleButton.style.justifyContent = 'center'
  toggleButton.style.alignItems = 'center'
  toggleButton.style.cursor = 'pointer'
  toggleButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)'
  toggleButton.style.zIndex = '102'  // Increase z-index to ensure it's above the sidebar
  toggleButton.style.border = '1px solid rgba(255, 255, 255, 0.2)'
  toggleButton.style.transition = 'all 0.3s ease'
  
  // Create arrow icon for toggle button
  const toggleIcon = document.createElement('div')
  toggleIcon.id = 'sidebar-toggle-icon'
  toggleIcon.style.width = '0'
  toggleIcon.style.height = '0'
  toggleIcon.style.borderTop = '6px solid transparent'
  toggleIcon.style.borderBottom = '6px solid transparent'
  toggleIcon.style.borderRight = '6px solid rgba(255, 255, 255, 0.8)'
  toggleIcon.style.transform = 'translateX(-2px)'
  toggleIcon.style.transition = 'all 0.3s ease'
  
  toggleButton.appendChild(toggleIcon)
  
  // Add hover effect to toggle button
  toggleButton.addEventListener('mouseover', () => {
    toggleButton.style.backgroundColor = 'rgba(8, 15, 25, 1)'
    toggleIcon.style.borderRight = '6px solid rgba(255, 255, 255, 1)'
  })
  
  toggleButton.addEventListener('mouseout', () => {
    toggleButton.style.backgroundColor = 'rgba(8, 15, 25, 0.9)'
    toggleIcon.style.borderRight = '6px solid rgba(255, 255, 255, 0.8)'
  })
  
  // Add collapse/expand functionality
  let isCollapsed = false
  toggleButton.addEventListener('click', () => {
    isCollapsed = !isCollapsed
    
    if (isCollapsed) {
      // Collapse sidebar
      inputContainer.style.transform = 'translateX(-100%)'
      inputContainer.style.opacity = '0.7'
      // Flip the icon to point left
      toggleIcon.style.borderRight = 'none'
      toggleIcon.style.borderLeft = '6px solid rgba(255, 255, 255, 0.8)'
      toggleIcon.style.transform = 'translateX(2px)'
      toggleButton.title = 'Expand controls'
    } else {
      // Expand sidebar
      inputContainer.style.transform = 'translateX(0)'
      inputContainer.style.opacity = '1'
      // Flip the icon to point right
      toggleIcon.style.borderLeft = 'none'
      toggleIcon.style.borderRight = '6px solid rgba(255, 255, 255, 0.8)'
      toggleIcon.style.transform = 'translateX(-2px)'
      toggleButton.title = 'Collapse controls'
    }
  })
  
  toggleButton.title = 'Collapse controls'
  
  // Panel title
  const panelTitle = document.createElement('div')
  panelTitle.textContent = '3D Particle Text'
  panelTitle.style.color = 'white'
  panelTitle.style.fontFamily = 'Arial, sans-serif'
  panelTitle.style.fontSize = '20px'
  panelTitle.style.fontWeight = '600'
  panelTitle.style.marginBottom = '5px'
  panelTitle.style.width = '100%'
  panelTitle.style.textAlign = 'center'
  panelTitle.style.letterSpacing = '1px'
  panelTitle.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)'
  panelTitle.style.paddingBottom = '10px'

  // Create a wrapper for the content to help with the collapsible feature
  const contentWrapper = document.createElement('div')
  contentWrapper.id = 'sidebar-content'
  contentWrapper.style.width = '100%'
  contentWrapper.style.display = 'flex'
  contentWrapper.style.flexDirection = 'column'
  contentWrapper.style.gap = '22px'
  contentWrapper.style.overflowX = 'hidden'
  contentWrapper.style.transition = 'all 0.3s ease'

  // Attach the toggle button to the container instead of the body
  document.body.appendChild(inputContainer)
  inputContainer.appendChild(toggleButton)
  
  // Add the panel title to the main container
  inputContainer.appendChild(panelTitle)

  // Add the content wrapper to the main container
  inputContainer.appendChild(contentWrapper)

  // Continue with the rest of the UI components, but add them to contentWrapper instead of inputContainer
  // Text inputs section
  const textInputsSection = document.createElement('div')
  textInputsSection.style.display = 'flex'
  textInputsSection.style.flexDirection = 'column'
  textInputsSection.style.width = '100%'
  textInputsSection.style.gap = '16px'
  textInputsSection.style.boxSizing = 'border-box'

  // Create the section title
  const textSectionTitle = document.createElement('div')
  textSectionTitle.textContent = 'Text Settings'
  textSectionTitle.style.color = '#4fc3f7'
  textSectionTitle.style.fontFamily = 'Arial, sans-serif'
  textSectionTitle.style.fontSize = '14px'
  textSectionTitle.style.fontWeight = '600'
  textSectionTitle.style.textTransform = 'uppercase'
  textSectionTitle.style.letterSpacing = '1.5px'
  textSectionTitle.style.width = '100%'

  // From text group
  const fromTextGroup = document.createElement('div')
  fromTextGroup.style.display = 'flex'
  fromTextGroup.style.flexDirection = 'column'
  fromTextGroup.style.width = '100%'
  fromTextGroup.style.gap = '6px'
  fromTextGroup.style.boxSizing = 'border-box'

  // From text label
  const fromTextLabel = document.createElement('label')
  fromTextLabel.textContent = 'From Text:'
  fromTextLabel.style.color = 'rgba(255, 255, 255, 0.8)'
  fromTextLabel.style.fontFamily = 'Arial, sans-serif'
  fromTextLabel.style.fontSize = '13px'
  fromTextLabel.style.fontWeight = '500'

  // Create the first text input (From text)
  const fromTextInput = document.createElement('input')
  fromTextInput.id = 'from-text-input'
  fromTextInput.type = 'text'
  fromTextInput.value = currentText
  fromTextInput.placeholder = 'From text...'
  fromTextInput.maxLength = 15 // Limit text length
  styleTextInput(fromTextInput)
  fromTextInput.style.width = '100%'

  // To text group
  const toTextGroup = document.createElement('div')
  toTextGroup.style.display = 'flex'
  toTextGroup.style.flexDirection = 'column'
  toTextGroup.style.width = '100%'
  toTextGroup.style.gap = '6px'
  toTextGroup.style.boxSizing = 'border-box'

  // To text label
  const toTextLabel = document.createElement('label')
  toTextLabel.textContent = 'To Text:'
  toTextLabel.style.color = 'rgba(255, 255, 255, 0.8)'
  toTextLabel.style.fontFamily = 'Arial, sans-serif'
  toTextLabel.style.fontSize = '13px'
  toTextLabel.style.fontWeight = '500'

  // Create the second text input (To text)
  const toTextInput = document.createElement('input')
  toTextInput.id = 'to-text-input'
  toTextInput.type = 'text'
  toTextInput.value = targetText
  toTextInput.placeholder = 'To text...'
  toTextInput.maxLength = 15 // Limit text length
  styleTextInput(toTextInput)
  toTextInput.style.width = '100%'

  // Action buttons group
  const actionButtonsGroup = document.createElement('div')
  actionButtonsGroup.style.display = 'flex'
  actionButtonsGroup.style.width = '100%'
  actionButtonsGroup.style.marginTop = '5px'
  actionButtonsGroup.style.justifyContent = 'space-between'
  actionButtonsGroup.style.boxSizing = 'border-box'

  // Create the Apply button for generating new texts
  const applyButton = document.createElement('button')
  applyButton.id = 'apply-button'
  applyButton.textContent = 'Apply'
  applyButton.disabled = !(fromTextInput.value.trim() && toTextInput.value.trim())
  styleButton(applyButton)
  applyButton.style.backgroundColor = '#7cb342'
  applyButton.style.flex = '1'

  // Create the transform button (for animation only)
  const transformButton = document.createElement('button')
  transformButton.id = 'transform-button'
  transformButton.textContent = 'Transform'
  transformButton.disabled = true // Initially disabled until texts are applied
  styleButton(transformButton)
  transformButton.style.flex = '1'
  // Hide the original transform button since we added it to the top right
  transformButton.style.display = 'none'

  // Color controls section
  const colorControlsSection = document.createElement('div')
  colorControlsSection.style.display = 'flex'
  colorControlsSection.style.flexDirection = 'column'
  colorControlsSection.style.width = '100%'
  colorControlsSection.style.gap = '16px'
  colorControlsSection.style.boxSizing = 'border-box'

  // Create the section title
  const colorSectionTitle = document.createElement('div')
  colorSectionTitle.textContent = 'Color Settings'
  colorSectionTitle.style.color = '#4fc3f7'
  colorSectionTitle.style.fontFamily = 'Arial, sans-serif'
  colorSectionTitle.style.fontSize = '14px'
  colorSectionTitle.style.fontWeight = '600'
  colorSectionTitle.style.textTransform = 'uppercase'
  colorSectionTitle.style.letterSpacing = '1.5px'

  // Color pickers row
  const colorPickersRow = document.createElement('div')
  colorPickersRow.style.display = 'flex'
  colorPickersRow.style.width = '100%'
  colorPickersRow.style.justifyContent = 'space-between'
  colorPickersRow.style.gap = '10px'
  colorPickersRow.style.boxSizing = 'border-box'

  // Create color pickers
  const fromColorContainer = createColorPickerContainer('from-color', 'Start Color', sourceColorConfig, () => { });

  const toColorContainer = createColorPickerContainer('to-color', 'End Color', targetColorConfig, () => { });

  // Font selection section
  const fontSection = document.createElement('div')
  fontSection.style.display = 'flex'
  fontSection.style.flexDirection = 'column'
  fontSection.style.width = '100%'
  fontSection.style.gap = '16px'
  fontSection.style.boxSizing = 'border-box'

  // Create the section title
  const fontSectionTitle = document.createElement('div')
  fontSectionTitle.textContent = 'Font Settings'
  fontSectionTitle.style.color = '#4fc3f7'
  fontSectionTitle.style.fontFamily = 'Arial, sans-serif'
  fontSectionTitle.style.fontSize = '14px'
  fontSectionTitle.style.fontWeight = '600'
  fontSectionTitle.style.textTransform = 'uppercase'
  fontSectionTitle.style.letterSpacing = '1.5px'

  // Create font selection dropdown
  const fontSelectionGroup = document.createElement('div')
  fontSelectionGroup.style.display = 'flex'
  fontSelectionGroup.style.flexDirection = 'column'
  fontSelectionGroup.style.width = '100%'
  fontSelectionGroup.style.gap = '6px'
  fontSelectionGroup.style.boxSizing = 'border-box'

  // Font selection label
  const fontSelectLabel = document.createElement('label')
  fontSelectLabel.textContent = 'Select Font:'
  fontSelectLabel.style.color = 'rgba(255, 255, 255, 0.8)'
  fontSelectLabel.style.fontFamily = 'Arial, sans-serif'
  fontSelectLabel.style.fontSize = '13px'
  fontSelectLabel.style.fontWeight = '500'

  // Create font dropdown
  const fontSelect = document.createElement('select')
  fontSelect.id = 'font-select'
  styleFontSelect(fontSelect)

  // Add options from available fonts
  availableFonts.forEach(fontOption => {
    const option = document.createElement('option')
    option.value = fontOption.url
    option.textContent = fontOption.name
    option.selected = fontOption.name === currentFontName
    fontSelect.appendChild(option)
  })

  // Handle font selection change
  fontSelect.addEventListener('change', (e) => {
    if (isGenerating || isAnimating || isChangingFont) return;

    const selectedUrl = e.target.value;
    const selectedFont = availableFonts.find(font => font.url === selectedUrl);

    if (selectedFont && selectedFont.url !== currentFontUrl) {
      // Only update the font preview, don't change the actual font yet
      updateFontPreview(selectedFont.name);

      // Update apply button to show changes are pending
      updateApplyButtonState();
    }
  })

  // Add font preview example
  const fontPreview = document.createElement('div')
  fontPreview.id = 'font-preview'
  fontPreview.textContent = `Preview: ${currentFontName}`
  fontPreview.style.padding = '8px'
  fontPreview.style.marginTop = '8px'
  fontPreview.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
  fontPreview.style.color = 'white'
  fontPreview.style.borderRadius = '4px'
  fontPreview.style.textAlign = 'center'
  fontPreview.style.fontFamily = 'Arial, sans-serif'
  fontPreview.style.fontSize = '14px'
  fontPreview.title = `The actual 3D text will use ${currentFontName} font`

  // Construct the font selection section
  fontSelectionGroup.appendChild(fontSelectLabel)
  fontSelectionGroup.appendChild(fontSelect)
  fontSelectionGroup.appendChild(fontPreview)

  fontSection.appendChild(fontSectionTitle)
  fontSection.appendChild(fontSelectionGroup)

  // Status section (replaces the info panel)
  statusSection = document.createElement('div');
  statusSection.id = 'status-section';
  statusSection.style.width = '100%';
  statusSection.style.marginTop = '15px';
  statusSection.style.padding = '10px';
  statusSection.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
  statusSection.style.borderRadius = '8px';
  statusSection.style.color = 'white';
  statusSection.style.fontSize = '12px';
  statusSection.style.fontFamily = 'Arial, sans-serif';

  // Initial update of status section
  updateStatusSection();

  // Construct the text inputs section
  fromTextGroup.appendChild(fromTextLabel);
  fromTextGroup.appendChild(fromTextInput);
  toTextGroup.appendChild(toTextLabel);
  toTextGroup.appendChild(toTextInput);

  actionButtonsGroup.appendChild(applyButton);
  actionButtonsGroup.appendChild(transformButton);

  // Since transform button is hidden, make Apply button take full width
  applyButton.style.width = '100%';

  textInputsSection.appendChild(textSectionTitle);
  textInputsSection.appendChild(fromTextGroup);
  textInputsSection.appendChild(toTextGroup);
  textInputsSection.appendChild(actionButtonsGroup);

  // Construct the color controls section
  colorPickersRow.appendChild(fromColorContainer);
  colorPickersRow.appendChild(toColorContainer);

  colorControlsSection.appendChild(colorSectionTitle);
  colorControlsSection.appendChild(colorPickersRow);

  // Add all sections to the main container
  contentWrapper.appendChild(textInputsSection);
  contentWrapper.appendChild(colorControlsSection);
  contentWrapper.appendChild(fontSection);
  contentWrapper.appendChild(statusSection);

  // Remove Apply button from actionButtonsGroup 
  // Since transform button is already hidden, just remove Apply button too
  actionButtonsGroup.removeChild(applyButton);

  // Create a footer section for the Apply button at the bottom
  const footerSection = document.createElement('div');
  footerSection.style.width = '100%';
  footerSection.style.marginTop = 'auto';
  footerSection.style.paddingTop = '15px';
  footerSection.style.borderTop = '1px solid rgba(255, 255, 255, 0.2)';
  footerSection.style.display = 'flex';
  footerSection.style.flexDirection = 'column';
  footerSection.style.alignItems = 'center';

  // Make Apply button take full width in the footer
  applyButton.style.width = '100%';
  footerSection.appendChild(applyButton);

  // Add a note about using Apply button
  const applyNote = document.createElement('div');
  applyNote.textContent = 'Click Apply to confirm changes';
  applyNote.style.color = 'rgba(255, 255, 255, 0.7)';
  applyNote.style.fontSize = '12px';
  applyNote.style.textAlign = 'center';
  applyNote.style.marginTop = '8px';
  applyNote.style.fontStyle = 'italic';
  footerSection.appendChild(applyNote);

  // Make the input container use flexbox to push footer to bottom
  inputContainer.style.display = 'flex';
  inputContainer.style.flexDirection = 'column';
  inputContainer.style.height = '100%';

  // Add footer to container
  contentWrapper.appendChild(footerSection);

  // Set up input event listeners - only update the visual state, don't apply changes
  fromTextInput.addEventListener('input', updateApplyButtonState);
  toTextInput.addEventListener('input', updateApplyButtonState);

  // Store original font select event listener to modify it
  const originalFontSelectEvent = fontSelect.onchange;
  fontSelect.onchange = null;

  // New font select listener that only updates preview but doesn't apply changes
  fontSelect.addEventListener('change', (e) => {
    if (isGenerating || isAnimating || isChangingFont) return;

    const selectedUrl = e.target.value;
    const selectedFont = availableFonts.find(font => font.url === selectedUrl);

    if (selectedFont) {
      // Only update the font preview, don't change the actual font yet
      updateFontPreview(selectedFont.name);
      updateApplyButtonState();
    }
  });

  // Regular interval to update button states and status section
  setInterval(() => {
    updateApplyButtonState();

    // Only call this if the transform button exists
    if (document.querySelector('#transform-button')) {
      updateTransformButtonState();
    }

    updateStatusSection();

    // Update font select state
    if (fontSelect) {
      if (isGenerating || isAnimating || isChangingFont || isChangingColors) {
        fontSelect.disabled = true;
        fontSelect.style.opacity = '0.5';
        fontSelect.style.cursor = 'not-allowed';
      } else {
        fontSelect.disabled = false;
        fontSelect.style.opacity = '1';
        fontSelect.style.cursor = 'pointer';
      }
    }
  }, 100);

  // Handle Apply button click - apply all changes (text, color, font)
  applyButton.addEventListener('click', () => {
    if (isGenerating || isAnimating || isChangingColors || isChangingFont) {
      console.log("Cannot apply changes while another operation is in progress");
      return;
    }

    const fromText = fromTextInput.value.trim();
    const toText = toTextInput.value.trim();

    if (fromText && toText) {
      console.log("Apply button clicked - creating clean reload experience");

      // Set flag to indicate we just applied changes
      justAppliedChanges = true;

      // Reset colorsNeedRefresh flag since we're applying colors directly
      colorsNeedRefresh = false;

      // Rest of the function remains the same

      // Get current font selection
      const selectedUrl = fontSelect.value;
      const selectedFont = availableFonts.find(font => font.url === selectedUrl);
      const fontNeedsChange = selectedFont && selectedFont.url !== currentFontUrl;

      // Get current color selection
      const fromColorPicker = document.getElementById('from-color');
      const toColorPicker = document.getElementById('to-color');
      let colorsNeedUpdate = false;

      // Check if colors have changed
      if (fromColorPicker && toColorPicker) {
        // Always update colors - get the current picker values
        const fromHex = fromColorPicker.value;
        const toHex = toColorPicker.value;

        // Store the new colors immediately
        sourceColorConfig.lastAppliedColor = fromHex;
        targetColorConfig.lastAppliedColor = toHex;

        // Update color configurations
        const fromColor = new THREE.Color(fromHex);
        const fromHSL = {};
        fromColor.getHSL(fromHSL);
        sourceColorConfig.baseHue = fromHSL.h;
        sourceColorConfig.saturation = fromHSL.s;
        sourceColorConfig.brightness = fromHSL.l;

        const toColor = new THREE.Color(toHex);
        const toHSL = {};
        toColor.getHSL(toHSL);
        targetColorConfig.baseHue = toHSL.h;
        targetColorConfig.saturation = toHSL.s;
        targetColorConfig.brightness = toHSL.l;

        // Set up gradient ends
        sourceColorConfig.endColorConfig = {
          baseHue: targetColorConfig.baseHue,
          hueRange: targetColorConfig.hueRange,
          saturation: targetColorConfig.saturation,
          brightness: targetColorConfig.brightness
        };

        targetColorConfig.endColorConfig = {
          baseHue: sourceColorConfig.baseHue,
          hueRange: sourceColorConfig.hueRange,
          saturation: sourceColorConfig.saturation,
          brightness: sourceColorConfig.brightness
        };

        colorsNeedRefresh = true;
      }

      // Always update text - treat it as a new beginning
      console.log(`Setting texts: "${fromText}" and "${toText}"`);
      currentText = fromText;
      targetText = toText;

      // Show loading message
      updateLoadingMessage("Creating new particle system...");

      // Set flags
      isGenerating = true;
      isChangingColors = colorsNeedUpdate;

      // Disable UI during processing
      const transformButton = document.getElementById('transform-button');
      if (transformButton) transformButton.disabled = true;
      if (fontSelect) fontSelect.disabled = true;
      applyButton.disabled = true;

      // Clean state - simulate a page reload
      // Remove all existing objects
      if (particleSystem) {
        scene.remove(particleSystem);
        particleSystem.geometry.dispose();
        particleSystem.material.dispose();
        particleSystem = null;
      }

      if (wireframe) {
        scene.remove(wireframe);
        wireframe.geometry.dispose();
        wireframe.material.dispose();
        wireframe = null;
      }

      // Clear geometry cache to force recreation
      geometryCache = {};
      particleData = null;

      // If font needs to change, load it first, then create geometries
      if (fontNeedsChange) {
        isChangingFont = true;
        updateLoadingMessage(`Loading font: ${selectedFont.name}...`);

        const fontLoader = new FontLoader();
        fontLoader.load(
          selectedUrl,
          // Success callback
          (loadedFont) => {
            console.log(`Font ${selectedFont.name} loaded successfully`);
            font = loadedFont;
            currentFontName = selectedFont.name;
            currentFontUrl = selectedUrl;
            updateFontPreview(selectedFont.name);

            // Now recreate everything with the new font
            createParticlesFromScratch();
          },
          // Progress callback
          (xhr) => {
            const progressPercent = Math.round((xhr.loaded / xhr.total) * 100);
            updateLoadingMessage(`Loading font: ${selectedFont.name}...`, progressPercent);
          },
          // Error callback
          (error) => {
            console.error(`Error loading font ${selectedFont.name}:`, error);
            isChangingFont = false;
            isGenerating = false;
            hideLoadingMessage();
            alert(`Failed to load font: ${selectedFont.name}`);
            updateApplyButtonState();
            updateTransformButtonState();
          }
        );
      } else {
        // No font change, create particles directly
        createParticlesFromScratch();
      }

      // Function to clean the slate and create particles from scratch - just like initial page load
      function createParticlesFromScratch() {
        updateLoadingMessage("Generating particle system...");

        // Reset any animation state
        animationProgress = 0;

        // Set flags to avoid unnecessary color refreshes
        justAppliedChanges = true;
        colorsNeedRefresh = false;

        // Generate geometries like a fresh page load
        generateTextGeometries(currentText, targetText);

        // No callback needed - the worker response handler will take care of 
        // hiding the loading message and updating the UI
      }
    } else {
      // Empty text fields
      alert("Please enter both 'From' and 'To' text values.");
    }
  });

  // Update color pickers to not apply changes immediately
  const fromColorPicker = document.getElementById('from-color');
  const toColorPicker = document.getElementById('to-color');

  if (fromColorPicker) setupColorPickerDelayedApply(fromColorPicker);
  if (toColorPicker) setupColorPickerDelayedApply(toColorPicker);

  // Handle Enter key on either input - trigger the Apply button
  fromTextInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !applyButton.disabled) {
      applyButton.click();
    }
  });

  toTextInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !applyButton.disabled) {
      applyButton.click();
    }
  });

  // Handle Transform button click - ONLY for animation between existing texts
  const transformBtnElement = document.querySelector('#transform-button');
  if (transformBtnElement) {
    transformBtnElement.addEventListener('click', () => {
      if (isGenerating || isAnimating || isChangingColors || isChangingFont || !particleSystem) return;

      console.log("Transform button clicked - animating between existing texts");

      // Reset color refresh flags - we don't need to refresh colors during animation
      colorsNeedRefresh = false;

      // Get current positions from the particle system's geometry
      if (particleSystem) {
        const currentPositions = particleSystem.geometry.attributes.position.array;
        const currentColors = particleSystem.geometry.attributes.color.array;

        // Update source arrays with the EXACT current values from the geometry
        for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
          particleData.sourcePositions[i] = currentPositions[i];
          particleData.sourceColors[i] = currentColors[i];
        }

        console.log("Updated source positions/colors with current geometry state");
      }

      // Start animation with a custom callback to update text after animation completes
      startMorphAnimationWithCallback(() => {
        // After animation completes, swap the text variables
        const temp = currentText;
        currentText = targetText;
        targetText = temp;

        // Update UI to reflect the change
        updateTextInputValues();
        updateStatusSection(); // Update status section instead of info panel
        console.log("Animation complete, updated text to:", currentText);
      });
    });
  }

  // Add container to document
  document.body.appendChild(inputContainer);
}

// Style a button element
function styleButton(button) {
  button.style.padding = '10px 16px';
  button.style.borderRadius = '6px';
  button.style.border = 'none';
  button.style.backgroundColor = '#4fc3f7';
  button.style.color = '#0a1014';
  button.style.fontSize = '14px';
  button.style.fontWeight = '600';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 12px rgba(79, 195, 247, 0.3)';
  button.style.transition = 'all 0.2s ease';
  button.style.margin = '0 4px';
  button.style.letterSpacing = '0.5px';
  button.style.textTransform = 'uppercase';

  // Add hover effect
  button.addEventListener('mouseover', () => {
    if (!button.disabled) {
      if (button.id === 'apply-button') {
        button.style.backgroundColor = '#97d063';
        button.style.transform = 'translateY(-2px)';
      } else {
        button.style.backgroundColor = '#81d4fa';
        button.style.transform = 'translateY(-2px)';
      }
      button.style.boxShadow = '0 6px 15px rgba(79, 195, 247, 0.5)';
    }
  });

  button.addEventListener('mouseout', () => {
    if (!button.disabled) {
      if (button.id === 'apply-button') {
        button.style.backgroundColor = '#7cb342';
      } else {
        button.style.backgroundColor = '#4fc3f7';
      }
      button.style.transform = 'translateY(0)';
      button.style.boxShadow = '0 4px 12px rgba(79, 195, 247, 0.3)';
    }
  });

  // Add active/pressed effect
  button.addEventListener('mousedown', () => {
    if (!button.disabled) {
      button.style.transform = 'translateY(1px)';
      button.style.boxShadow = '0 2px 8px rgba(79, 195, 247, 0.2)';
    }
  });

  button.addEventListener('mouseup', () => {
    if (!button.disabled) {
      button.style.transform = 'translateY(-2px)';
      button.style.boxShadow = '0 6px 15px rgba(79, 195, 247, 0.5)';
    }
  });
}

// Style a text input element
function styleTextInput(input) {
  input.style.padding = '10px 16px';
  input.style.fontSize = '14px';
  input.style.borderRadius = '6px';
  input.style.border = '1px solid rgba(79, 195, 247, 0.3)';
  input.style.backgroundColor = 'rgba(8, 15, 25, 0.6)';
  input.style.color = 'white';
  input.style.outline = 'none';
  input.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
  input.style.width = '100%';
  input.style.transition = 'all 0.2s ease';
  input.style.boxSizing = 'border-box';
  input.style.maxWidth = '100%';

  // Add glowing effect on focus
  input.addEventListener('focus', () => {
    input.style.border = '1px solid rgba(79, 195, 247, 0.8)';
    input.style.boxShadow = '0 4px 12px rgba(79, 195, 247, 0.4)';
    input.style.backgroundColor = 'rgba(8, 15, 25, 0.8)';
  });

  input.addEventListener('blur', () => {
    input.style.border = '1px solid rgba(79, 195, 247, 0.3)';
    input.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
    input.style.backgroundColor = 'rgba(8, 15, 25, 0.6)';
  });
}

// Create a color picker container with label
function createColorPickerContainer(id, label, colorConfig, onChangeCallback) {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.alignItems = 'center';
  container.style.gap = '8px';
  container.style.flex = '1';
  container.style.maxWidth = '120px';
  container.style.padding = '5px';
  container.style.transition = 'all 0.2s ease';

  // Create label
  const labelElement = document.createElement('label');
  labelElement.htmlFor = id;
  labelElement.textContent = label;
  labelElement.style.color = 'rgba(255, 255, 255, 0.8)';
  labelElement.style.fontSize = '13px';
  labelElement.style.fontFamily = 'Arial, sans-serif';
  labelElement.style.textAlign = 'center';
  labelElement.style.fontWeight = '500';

  // Create color picker
  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.id = id;

  // Function to update color picker from config
  const updateColorPickerFromConfig = () => {
    const initialColor = new THREE.Color();
    initialColor.setHSL(colorConfig.baseHue, colorConfig.saturation, colorConfig.brightness);
    colorPicker.value = '#' + initialColor.getHexString();
    console.log(`Updated ${id} picker to color: ${colorPicker.value}`);
  };

  // Set initial color from colorConfig
  updateColorPickerFromConfig();

  // Style the color picker
  colorPicker.style.width = '50px';
  colorPicker.style.height = '50px';
  colorPicker.style.border = '2px solid rgba(255, 255, 255, 0.1)';
  colorPicker.style.borderRadius = '50%';
  colorPicker.style.overflow = 'hidden';
  colorPicker.style.cursor = 'pointer';
  colorPicker.style.padding = '0';
  colorPicker.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
  colorPicker.style.transition = 'all 0.2s ease';

  // Function to toggle color picker enabled state
  const updatePickerState = () => {
    if (isGenerating || isAnimating || isChangingColors) {
      colorPicker.disabled = true;
      colorPicker.style.opacity = '0.5';
      colorPicker.style.cursor = 'not-allowed';
    } else {
      colorPicker.disabled = false;
      colorPicker.style.opacity = '1';
      colorPicker.style.cursor = 'pointer';
    }
  };

  // Add to animation loop to keep checking state
  const updateInterval = setInterval(updatePickerState, 100);

  // Add event listener for color change
  colorPicker.addEventListener('change', (e) => {
    if (!isGenerating && !isAnimating && !isChangingColors) {
      console.log(`Color picker ${id} changed to: ${e.target.value}`);

      // Don't immediately apply the color change - just update the Apply button state
      updateApplyButtonState();
    }
  });

  // Add hover effect
  colorPicker.addEventListener('mouseover', () => {
    if (!colorPicker.disabled) {
      colorPicker.style.transform = 'scale(1.05)';
      colorPicker.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
    }
  });

  colorPicker.addEventListener('mouseout', () => {
    if (!colorPicker.disabled) {
      colorPicker.style.transform = 'scale(1)';
      colorPicker.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    }
  });

  // Store the update function on the colorConfig for easy updating
  colorConfig.updateColorPicker = updateColorPickerFromConfig;

  container.appendChild(labelElement);
  container.appendChild(colorPicker);

  return container;
}

// Update the info panel with current text information
function updateInfoPanel() {
  // Remove existing info panel if it exists
  const existingPanel = document.getElementById('info-panel');
  if (existingPanel) {
    existingPanel.remove();
  }

  // No longer creating the info panel to remove text from upper right
  // Just maintain the function to avoid breaking any calls to it
  return;
}

// Helper function to check if a point is near an edge of the geometry
function isNearEdge(point, positions, threshold = 0.08) {
  const edgeDistance = 1.0

  // Check against all vertices
  for (let i = 0; i < positions.length; i += 3) {
    const vertex = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
    const distance = point.distanceTo(vertex)

    if (distance < threshold) {
      return true
    }
  }

  return false
}

// Create a UI for toggling wireframe visibility
function createControlUI(wireframeObj) {
  // Remove existing control if it exists
  const existingControl = document.getElementById('wireframe-control');
  if (existingControl) {
    existingControl.remove();
  }

  // Create control container
  const controlContainer = document.createElement('div');
  controlContainer.id = 'wireframe-control';
  controlContainer.style.position = 'absolute';
  controlContainer.style.bottom = '20px';
  controlContainer.style.right = '20px';
  controlContainer.style.zIndex = '100';
  controlContainer.style.display = 'flex';
  controlContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  controlContainer.style.padding = '10px';
  controlContainer.style.borderRadius = '10px';
  controlContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';

  // Create toggle button
  const toggleButton = document.createElement('button');
  toggleButton.textContent = wireframeObj.visible ? 'Hide Wireframe' : 'Show Wireframe';
  styleButton(toggleButton);

  // Add toggle functionality
  toggleButton.addEventListener('click', () => {
    wireframeObj.visible = !wireframeObj.visible;
    toggleButton.textContent = wireframeObj.visible ? 'Hide Wireframe' : 'Show Wireframe';
  });

  controlContainer.appendChild(toggleButton);
  document.body.appendChild(controlContainer);
}

// Create a custom particle texture
function createParticleTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64

  const context = canvas.getContext('2d')

  // Create a radial gradient for a soft glow effect
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)')
  gradient.addColorStop(0.2, 'rgba(240, 255, 255, 0.9)')
  gradient.addColorStop(0.4, 'rgba(200, 220, 255, 0.6)')
  gradient.addColorStop(0.8, 'rgba(100, 150, 200, 0.2)')
  gradient.addColorStop(1, 'rgba(50, 100, 150, 0)')

  context.fillStyle = gradient
  context.fillRect(0, 0, 64, 64)

  return new THREE.CanvasTexture(canvas)
}

// Start preloading the font, which will initiate the first text creation
preloadFont();

// Window resize handler
window.addEventListener('resize', () => {
  // Update camera
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Animation loop
function animate() {
  requestAnimationFrame(animate)

  // Update controls
  controls.update()

  // Render scene
  renderer.render(scene, camera)
}

// Start animation loop
animate()

// Add this new function after the createParticleSystem function
// Function to update particle colors without regenerating geometries
function updateParticleColors() {
  if (!particleSystem || !particleData) return;

  console.log("Updating particle colors in real-time");

  // If colors were changed significantly, force a complete refresh
  if (colorsNeedRefresh) {
    console.log("Colors changed significantly - doing a complete refresh");

    // Force regeneration of the geometry with new colors
    refreshParticleColors();
    return;
  }

  // Log current color configurations
  console.log("Current color configurations in updateParticleColors:", {
    source: {
      hue: sourceColorConfig.baseHue,
      saturation: sourceColorConfig.saturation,
      brightness: sourceColorConfig.brightness
    },
    target: {
      hue: targetColorConfig.baseHue,
      saturation: targetColorConfig.saturation,
      brightness: targetColorConfig.brightness
    }
  });

  // Create temporary buffers to work with
  const positions = particleSystem.geometry.attributes.position.array;
  const colors = particleSystem.geometry.attributes.color.array;

  // Extract position data for color calculation
  const positionData = new Array(PARTICLE_COUNT);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positionData[i] = {
      position: new THREE.Vector3(
        positions[i * 3],
        positions[i * 3 + 1],
        positions[i * 3 + 2]
      ),
      // Estimate a normal based on position (simplified)
      normal: new THREE.Vector3(0, 0, 1)
    };
  }

  // For source and target colors
  if (particleData.sourcePositions && particleData.targetPositions) {
    console.log("Updating both source and target colors");

    // Make sure endColorConfig relationship is set up correctly
    if (!sourceColorConfig.endColorConfig ||
      sourceColorConfig.endColorConfig.baseHue !== targetColorConfig.baseHue) {
      sourceColorConfig.endColorConfig = {
        baseHue: targetColorConfig.baseHue,
        hueRange: targetColorConfig.hueRange,
        saturation: targetColorConfig.saturation,
        brightness: targetColorConfig.brightness
      };
    }

    if (!targetColorConfig.endColorConfig ||
      targetColorConfig.endColorConfig.baseHue !== sourceColorConfig.baseHue) {
      targetColorConfig.endColorConfig = {
        baseHue: sourceColorConfig.baseHue,
        hueRange: sourceColorConfig.hueRange,
        saturation: sourceColorConfig.saturation,
        brightness: sourceColorConfig.brightness
      };
    }

    // Debug logs to verify gradient configurations
    console.log("Source gradient:", {
      start: { h: sourceColorConfig.baseHue, s: sourceColorConfig.saturation, l: sourceColorConfig.brightness },
      end: { h: sourceColorConfig.endColorConfig.baseHue, s: sourceColorConfig.endColorConfig.saturation, l: sourceColorConfig.endColorConfig.brightness }
    });

    // Update the particleData.targetColors array first
    // This ensures that the colors are properly updated even if not currently visible
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Calculate source color (for current text)
      const sourceColor = calculateParticleColor({
        position: new THREE.Vector3(
          particleData.sourcePositions[i * 3],
          particleData.sourcePositions[i * 3 + 1],
          particleData.sourcePositions[i * 3 + 2]
        ),
        normal: new THREE.Vector3(0, 0, 1)
      }, sourceColorConfig);

      // Calculate target color (for target text)
      const targetColor = calculateParticleColor({
        position: new THREE.Vector3(
          particleData.targetPositions[i * 3],
          particleData.targetPositions[i * 3 + 1],
          particleData.targetPositions[i * 3 + 2]
        ),
        normal: new THREE.Vector3(0, 0, 1)
      }, targetColorConfig);

      // Update the source colors array
      particleData.sourceColors[i * 3] = sourceColor.r;
      particleData.sourceColors[i * 3 + 1] = sourceColor.g;
      particleData.sourceColors[i * 3 + 2] = sourceColor.b;

      // Update the target colors array
      particleData.targetColors[i * 3] = targetColor.r;
      particleData.targetColors[i * 3 + 1] = targetColor.g;
      particleData.targetColors[i * 3 + 2] = targetColor.b;
    }

    // Now update the currently displayed colors in the particle system
    // Determine whether we're showing source or target text
    let totalDistanceToSource = 0;
    let totalDistanceToTarget = 0;

    // Sample a subset of particles to determine which text is being displayed
    for (let i = 0; i < Math.min(1000, PARTICLE_COUNT); i++) {
      const distanceToSource = Math.abs(
        positions[i * 3] - particleData.sourcePositions[i * 3]) +
        Math.abs(positions[i * 3 + 1] - particleData.sourcePositions[i * 3 + 1]) +
        Math.abs(positions[i * 3 + 2] - particleData.sourcePositions[i * 3 + 2]);

      const distanceToTarget = Math.abs(
        positions[i * 3] - particleData.targetPositions[i * 3]) +
        Math.abs(positions[i * 3 + 1] - particleData.targetPositions[i * 3 + 1]) +
        Math.abs(positions[i * 3 + 2] - particleData.targetPositions[i * 3 + 2]);

      totalDistanceToSource += distanceToSource;
      totalDistanceToTarget += distanceToTarget;
    }

    // Determine which text is currently being displayed
    const currentlyDisplayingSourceText = totalDistanceToSource <= totalDistanceToTarget;
    console.log("Currently displaying:", currentlyDisplayingSourceText ? "source text" : "target text");

    // Update the colors in the particle system
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (currentlyDisplayingSourceText) {
        // Use the source colors
        colors[i * 3] = particleData.sourceColors[i * 3];
        colors[i * 3 + 1] = particleData.sourceColors[i * 3 + 1];
        colors[i * 3 + 2] = particleData.sourceColors[i * 3 + 2];
      } else {
        // Use the target colors
        colors[i * 3] = particleData.targetColors[i * 3];
        colors[i * 3 + 1] = particleData.targetColors[i * 3 + 1];
        colors[i * 3 + 2] = particleData.targetColors[i * 3 + 2];
      }
    }
  } else {
    // Fallback for first load - regenerate both geometries
    console.log("Particle data not ready, regenerating geometries");
    generateTextGeometries(currentText, targetText);
    return;
  }

  // Mark colors as needing update
  particleSystem.geometry.attributes.color.needsUpdate = true;

  // Update info panel to show new colors
  updateInfoPanel();

  console.log("Color update complete");
}

// New function to refresh particle colors by regenerating the geometry
function refreshParticleColors() {
  if (!particleSystem || !particleData || isGenerating || isAnimating) return;

  console.log("Performing a complete color refresh for both texts");

  // Remember the current text positions for both source and target
  const savedSourcePositions = new Float32Array(particleData.sourcePositions);
  const savedTargetPositions = new Float32Array(particleData.targetPositions);

  // Get the current display state (which text is currently showing)
  const positions = particleSystem.geometry.attributes.position.array;
  let currentlyDisplayingSourceText = true;

  // Determine which text is currently being displayed by comparing positions
  let totalDistanceToSource = 0;
  let totalDistanceToTarget = 0;

  for (let i = 0; i < Math.min(1000, PARTICLE_COUNT); i++) {
    const distanceToSource = Math.abs(
      positions[i * 3] - particleData.sourcePositions[i * 3]) +
      Math.abs(positions[i * 3 + 1] - particleData.sourcePositions[i * 3 + 1]) +
      Math.abs(positions[i * 3 + 2] - particleData.sourcePositions[i * 3 + 2]);

    const distanceToTarget = Math.abs(
      positions[i * 3] - particleData.targetPositions[i * 3]) +
      Math.abs(positions[i * 3 + 1] - particleData.targetPositions[i * 3 + 1]) +
      Math.abs(positions[i * 3 + 2] - particleData.targetPositions[i * 3 + 2]);

    totalDistanceToSource += distanceToSource;
    totalDistanceToTarget += distanceToTarget;
  }

  currentlyDisplayingSourceText = totalDistanceToSource <= totalDistanceToTarget;
  console.log("Currently displaying:", currentlyDisplayingSourceText ? "source text" : "target text");

  // Show loading message
  updateLoadingMessage(`Refreshing colors...`);
  isGenerating = true;

  // Use worker to recalculate the colors but maintain positions
  if (USE_WORKER && window.Worker) {
    // Create a worker for heavy computations
    const worker = new Worker(createGeometryWorkerBlob());

    // Extract any cached geometries we can use
    const sourceKey = `${currentText}_geom`;
    const targetKey = `${targetText}_geom`;

    // If we have cached geometries, extract the positions and normals
    let sourcePositions, sourceNormals, targetPositions, targetNormals;

    if (geometryCache[sourceKey] && geometryCache[targetKey]) {
      console.log("Using cached geometries for color refresh");
      const sourceNonIndexed = geometryCache[sourceKey].toNonIndexed();
      const targetNonIndexed = geometryCache[targetKey].toNonIndexed();

      sourcePositions = Array.from(sourceNonIndexed.attributes.position.array);
      sourceNormals = Array.from(sourceNonIndexed.attributes.normal.array);
      targetPositions = Array.from(targetNonIndexed.attributes.position.array);
      targetNormals = Array.from(targetNonIndexed.attributes.normal.array);

      // Cleanup
      sourceNonIndexed.dispose();
      targetNonIndexed.dispose();
    } else {
      console.log("No cached geometries found - using existing positional data");

      // Fallback to just recalculating colors using existing position data
      sourcePositions = Array.from(savedSourcePositions);
      targetPositions = Array.from(savedTargetPositions);

      // Create simple normals (pointing in z direction)
      sourceNormals = new Array(sourcePositions.length);
      targetNormals = new Array(targetPositions.length);

      for (let i = 0; i < sourcePositions.length; i += 3) {
        sourceNormals[i] = 0;
        sourceNormals[i + 1] = 0;
        sourceNormals[i + 2] = 1;

        targetNormals[i] = 0;
        targetNormals[i + 1] = 0;
        targetNormals[i + 2] = 1;
      }
    }

    // Show loading message
    updateLoadingMessage(`Refreshing colors...`);
    isGenerating = true;

    // CRITICAL: Make sure the source and target colorConfigs have their endColorConfig properties set correctly
    // This ensures each color knows about the other color for gradient calculation

    // First, make sure sourceColorConfig has endColorConfig pointing to targetColorConfig
    if (!sourceColorConfig.endColorConfig ||
      sourceColorConfig.endColorConfig.baseHue !== targetColorConfig.baseHue ||
      sourceColorConfig.endColorConfig.saturation !== targetColorConfig.saturation ||
      sourceColorConfig.endColorConfig.brightness !== targetColorConfig.brightness) {

      console.log("Fixing source color's endColorConfig to point to target color");
      sourceColorConfig.endColorConfig = {
        baseHue: targetColorConfig.baseHue,
        hueRange: targetColorConfig.hueRange,
        saturation: targetColorConfig.saturation,
        brightness: targetColorConfig.brightness
      };
    }

    // Then, make sure targetColorConfig has endColorConfig pointing to sourceColorConfig
    if (!targetColorConfig.endColorConfig ||
      targetColorConfig.endColorConfig.baseHue !== sourceColorConfig.baseHue ||
      targetColorConfig.endColorConfig.saturation !== sourceColorConfig.saturation ||
      targetColorConfig.endColorConfig.brightness !== sourceColorConfig.brightness) {

      console.log("Fixing target color's endColorConfig to point to source color");
      targetColorConfig.endColorConfig = {
        baseHue: sourceColorConfig.baseHue,
        hueRange: sourceColorConfig.hueRange,
        saturation: sourceColorConfig.saturation,
        brightness: sourceColorConfig.brightness
      };
    }

    // Create deep clones of the color configurations to avoid issues with the worker
    const sourceColorWithGradient = {
      baseHue: sourceColorConfig.baseHue,
      hueRange: sourceColorConfig.hueRange,
      saturation: sourceColorConfig.saturation,
      brightness: sourceColorConfig.brightness,
      endColorConfig: {
        baseHue: targetColorConfig.baseHue,
        hueRange: targetColorConfig.hueRange,
        saturation: targetColorConfig.saturation,
        brightness: targetColorConfig.brightness
      },
      _debug: true // Add flag for debugging
    };

    const targetColorWithGradient = {
      baseHue: targetColorConfig.baseHue,
      hueRange: targetColorConfig.hueRange,
      saturation: targetColorConfig.saturation,
      brightness: targetColorConfig.brightness,
      endColorConfig: {
        baseHue: sourceColorConfig.baseHue,
        hueRange: sourceColorConfig.hueRange,
        saturation: sourceColorConfig.saturation,
        brightness: sourceColorConfig.brightness
      },
      _debug: true // Add flag for debugging
    };

    // Debug logs to verify gradient configurations
    console.log("Source gradient:", {
      start: { h: sourceColorWithGradient.baseHue, s: sourceColorWithGradient.saturation, l: sourceColorWithGradient.brightness },
      end: { h: sourceColorWithGradient.endColorConfig.baseHue, s: sourceColorWithGradient.endColorConfig.saturation, l: sourceColorWithGradient.endColorConfig.brightness }
    });
    console.log("Target gradient:", {
      start: { h: targetColorWithGradient.baseHue, s: targetColorWithGradient.saturation, l: targetColorWithGradient.brightness },
      end: { h: targetColorWithGradient.endColorConfig.baseHue, s: targetColorWithGradient.endColorConfig.saturation, l: targetColorWithGradient.endColorConfig.brightness }
    });

    // Send data to worker
    worker.postMessage({
      sourcePositions: sourcePositions,
      sourceNormals: sourceNormals,
      targetPositions: targetPositions,
      targetNormals: targetNormals,
      particleCount: PARTICLE_COUNT,
      particleSize: PARTICLE_SIZE,
      surfacePrecision: SURFACE_PRECISION,
      sourceColorConfig: sourceColorWithGradient,
      targetColorConfig: targetColorWithGradient,
      colorRefresh: true
    });

    // Handle worker response
    worker.onmessage = function (e) {
      console.log("Color refresh worker completed");

      try {
        // Check if data exists and particleData exists
        if (!e.data) {
          console.error("Error: Missing data in worker response");
          hideLoadingMessage();
          resetOperationFlags();
          return;
        }

        if (!particleData) {
          console.error("Error: particleData is null");
          hideLoadingMessage();
          resetOperationFlags();
          return;
        }

        const newData = e.data;

        // Update only colors - keep the positions
        particleData.sourceColors = new Float32Array(newData.sourceColors);
        particleData.targetColors = new Float32Array(newData.targetColors);

        // Check if particle system exists and has geometry
        if (!particleSystem || !particleSystem.geometry || !particleSystem.geometry.attributes || !particleSystem.geometry.attributes.color) {
          console.error("Error: Particle system not properly initialized");
          hideLoadingMessage();
          resetOperationFlags();
          return;
        }

        // Update the particle system with the correct colors based on what's currently displaying
        const colors = particleSystem.geometry.attributes.color.array;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          if (currentlyDisplayingSourceText) {
            colors[i * 3] = particleData.sourceColors[i * 3];
            colors[i * 3 + 1] = particleData.sourceColors[i * 3 + 1];
            colors[i * 3 + 2] = particleData.sourceColors[i * 3 + 2];
          } else {
            colors[i * 3] = particleData.targetColors[i * 3];
            colors[i * 3 + 1] = particleData.targetColors[i * 3 + 1];
            colors[i * 3 + 2] = particleData.targetColors[i * 3 + 2];
          }
        }

        // Mark colors as needing update
        particleSystem.geometry.attributes.color.needsUpdate = true;

        // Render to see the changes
        renderer.render(scene, camera);

        console.log("Color refresh complete");
      } catch (error) {
        console.error("Error updating colors in worker response:", error);
      } finally {
        // Always perform these cleanup tasks

        // Hide loading message
        hideLoadingMessage();

        // Reset all operation flags
        resetOperationFlags();

        // Update color flag
        colorsNeedRefresh = false;

        // Update UI
        updateInfoPanel();

        // Cleanup
        worker.terminate();
      }
    };
  } else {
    // Fallback for when workers aren't available
    console.log("Using direct color calculation (no worker)");

    // Recalculate source colors
    const newSourceColors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const pointData = {
        position: new THREE.Vector3(
          particleData.sourcePositions[i * 3],
          particleData.sourcePositions[i * 3 + 1],
          particleData.sourcePositions[i * 3 + 2]
        ),
        normal: new THREE.Vector3(0, 0, 1) // Default normal
      };

      const color = calculateParticleColor(pointData, sourceColorConfig);
      newSourceColors[i * 3] = color.r;
      newSourceColors[i * 3 + 1] = color.g;
      newSourceColors[i * 3 + 2] = color.b;
    }

    // Recalculate target colors
    const newTargetColors = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const pointData = {
        position: new THREE.Vector3(
          particleData.targetPositions[i * 3],
          particleData.targetPositions[i * 3 + 1],
          particleData.targetPositions[i * 3 + 2]
        ),
        normal: new THREE.Vector3(0, 0, 1) // Default normal
      };

      const color = calculateParticleColor(pointData, targetColorConfig);
      newTargetColors[i * 3] = color.r;
      newTargetColors[i * 3 + 1] = color.g;
      newTargetColors[i * 3 + 2] = color.b;
    }

    // Update particle data
    particleData.sourceColors = newSourceColors;
    particleData.targetColors = newTargetColors;

    // Update the particle system with the correct colors based on what's currently displaying
    const colors = particleSystem.geometry.attributes.color.array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      if (currentlyDisplayingSourceText) {
        colors[i * 3] = particleData.sourceColors[i * 3];
        colors[i * 3 + 1] = particleData.sourceColors[i * 3 + 1];
        colors[i * 3 + 2] = particleData.sourceColors[i * 3 + 2];
      } else {
        colors[i * 3] = particleData.targetColors[i * 3];
        colors[i * 3 + 1] = particleData.targetColors[i * 3 + 1];
        colors[i * 3 + 2] = particleData.targetColors[i * 3 + 2];
      }
    }

    // Mark colors as needing update
    particleSystem.geometry.attributes.color.needsUpdate = true;

    // Hide loading message and reset flags
    isGenerating = false;
    colorsNeedRefresh = false;
    hideLoadingMessage();
  }
}

// Function to simulate a reload with new colors
function simulateReloadWithNewColors() {
  console.log("Simulating reload with new colors");

  // Prevent multiple operations
  if (isGenerating || isAnimating) {
    console.log("Cannot reload colors while generating or animating");
    return;
  }

  // Set flags to indicate we're in the middle of a color change
  isChangingColors = true;
  isGenerating = true;

  // Debug the current state
  console.log("Current text values:", {
    currentText: currentText,
    targetText: targetText
  });

  console.log("Current color configs:", {
    source: {
      baseHue: sourceColorConfig.baseHue,
      saturation: sourceColorConfig.saturation,
      brightness: sourceColorConfig.brightness
    },
    target: {
      baseHue: targetColorConfig.baseHue,
      saturation: targetColorConfig.saturation,
      brightness: targetColorConfig.brightness
    }
  });

  // Show loading message
  updateLoadingMessage(`Applying new colors...`);

  // Disable buttons during processing
  const applyButton = document.getElementById('apply-button');
  const transformButton = document.getElementById('transform-button');
  const fontSelect = document.getElementById('font-select');

  if (applyButton) {
    applyButton.disabled = true;
    applyButton.style.opacity = '0.5';
    applyButton.style.cursor = 'not-allowed';
  }
  if (transformButton) {
    transformButton.disabled = true;
    transformButton.style.opacity = '0.5';
    transformButton.style.cursor = 'not-allowed';
  }
  if (fontSelect) {
    fontSelect.disabled = true;
    fontSelect.style.opacity = '0.5';
    fontSelect.style.cursor = 'not-allowed';
  }

  // Force colors to be refreshed
  colorsNeedRefresh = true;

  // Clean up existing objects
  if (particleSystem) {
    scene.remove(particleSystem);
    particleSystem.geometry.dispose();
    particleSystem.material.dispose();
    particleSystem = null;
  }

  if (wireframe) {
    scene.remove(wireframe);
    wireframe.geometry.dispose();
    wireframe.material.dispose();
    wireframe = null;
  }

  // Clear geometry cache to force recreation with new colors
  geometryCache = {};
  particleData = null;

  // Generate geometries with current text values but new colors
  // Note: We don't handle cleanup here anymore as it's managed by the worker response handler
  generateTextGeometries(currentText, targetText, () => {
    console.log("Color change geometry generation callback triggered");
  });
}

// Function to change font and regenerate text
function changeFont(fontName, fontUrl) {
  if (isGenerating || isAnimating || isChangingFont) {
    console.log("Cannot change font while generating or animating");
    return;
  }

  console.log(`Changing font to ${fontName} from URL: ${fontUrl}`);
  isChangingFont = true;

  // Show loading message
  updateLoadingMessage(`Loading font: ${fontName}...`);

  // Update font variables
  currentFontName = fontName;
  currentFontUrl = fontUrl;

  // Update the font preview
  updateFontPreview(fontName);

  // Clear existing geometry cache
  geometryCache = {};

  // Load the new font
  const fontLoader = new FontLoader();
  fontLoader.load(
    fontUrl,
    // Success callback
    (loadedFont) => {
      font = loadedFont;
      console.log(`Font ${fontName} loaded successfully`);

      // Update loading message to indicate we're now creating the particle system
      updateLoadingMessage(`Creating particle system with ${fontName}...`);

      // Regenerate text geometries with the new font
      generateTextGeometries(currentText, targetText, () => {
        console.log(`Font changed to ${fontName}, geometries regenerated`);

        // If colors also needed to be refreshed, force a direct update
        if (colorsNeedRefresh) {
          console.log("Colors need refresh after font change - applying directly");
          // Force an update to the particle colors
          updateParticleColors();
          // Render again to make sure changes are visible
          renderer.render(scene, camera);
          // Reset the flag
          colorsNeedRefresh = false;
        }

        // Note: We don't hide the loading message here anymore
        // The loading message will be hidden in the worker callback 
        // after the particle system is fully created

        // Just mark font change as complete
        isChangingFont = false;

        // Update status section
        if (typeof updateStatusSection === 'function') {
          updateStatusSection();
        } else {
          console.error("updateStatusSection is not defined or not a function");
        }

        // Make sure the font preview is up to date
        updateFontPreview(fontName);
      });
    },
    // Progress callback
    (xhr) => {
      const progressPercent = Math.round((xhr.loaded / xhr.total) * 100);
      console.log(`Font loading progress: ${progressPercent}%`);
      updateLoadingMessage(`Loading font: ${fontName}...`, progressPercent);
    },
    // Error callback
    (error) => {
      console.error(`Error loading font ${fontName}:`, error);
      isChangingFont = false;
      updateLoadingMessage(`Error loading font: ${fontName}. Using previous font.`);

      // Revert to previous font
      setTimeout(() => {
        hideLoadingMessage();
      }, 2000);
    }
  );
}

// Style the font selection dropdown
function styleFontSelect(select) {
  if (!select) {
    console.error("No select element provided to styleFontSelect");
    return;
  }

  select.style.width = '100%'
  select.style.padding = '10px 16px'
  select.style.backgroundColor = 'rgba(8, 15, 25, 0.6)'
  select.style.color = 'white'
  select.style.border = '1px solid rgba(79, 195, 247, 0.3)'
  select.style.borderRadius = '6px'
  select.style.outline = 'none'
  select.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)'
  select.style.cursor = 'pointer'
  select.style.fontFamily = 'Arial, sans-serif'
  select.style.fontSize = '14px'
  select.style.appearance = 'none'
  select.style.transition = 'all 0.2s ease'

  // Create custom dropdown arrow
  const selectContainer = document.createElement('div')
  selectContainer.style.position = 'relative'
  selectContainer.style.width = '100%'

  // Add a custom arrow
  const arrow = document.createElement('div')
  arrow.style.position = 'absolute'
  arrow.style.right = '12px'
  arrow.style.top = '50%'
  arrow.style.transform = 'translateY(-50%)'
  arrow.style.pointerEvents = 'none'
  arrow.style.borderLeft = '6px solid transparent'
  arrow.style.borderRight = '6px solid transparent'
  arrow.style.borderTop = '6px solid rgba(79, 195, 247, 0.8)'
  arrow.style.transition = 'all 0.2s ease'

  // Add focus effect
  select.addEventListener('focus', () => {
    select.style.border = '1px solid rgba(79, 195, 247, 0.8)'
    select.style.boxShadow = '0 4px 12px rgba(79, 195, 247, 0.4)'
    select.style.backgroundColor = 'rgba(8, 15, 25, 0.8)'
    arrow.style.borderTop = '6px solid rgba(79, 195, 247, 1)'
  })

  select.addEventListener('blur', () => {
    select.style.border = '1px solid rgba(79, 195, 247, 0.3)'
    select.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)'
    select.style.backgroundColor = 'rgba(8, 15, 25, 0.6)'
    arrow.style.borderTop = '6px solid rgba(79, 195, 247, 0.8)'
  })

  // Disable when needed
  if (isGenerating || isAnimating || isChangingFont || isChangingColors) {
    select.disabled = true
    select.style.opacity = '0.5'
    select.style.cursor = 'not-allowed'
    arrow.style.opacity = '0.5'
  } else {
    select.disabled = false
    select.style.opacity = '1'
    select.style.cursor = 'pointer'
    arrow.style.opacity = '1'
  }

  // Add hover effect
  select.addEventListener('mouseover', () => {
    if (!select.disabled) {
      select.style.border = '1px solid rgba(79, 195, 247, 0.5)'
      select.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)'
      arrow.style.borderTop = '6px solid rgba(79, 195, 247, 1)'
    }
  })

  select.addEventListener('mouseout', () => {
    if (!select.disabled && document.activeElement !== select) {
      select.style.border = '1px solid rgba(79, 195, 247, 0.3)'
      select.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)'
      arrow.style.borderTop = '6px solid rgba(79, 195, 247, 0.8)'
    }
  })

  // Replace select with container and add arrow
  const parent = select.parentNode
  if (parent) {
    // Clear existing select wrapper if it exists
    if (select.parentNode.className === 'select-wrapper') {
      parent.parentNode.replaceChild(select, parent)
    }

    selectContainer.className = 'select-wrapper'
    parent.replaceChild(selectContainer, select)
    selectContainer.appendChild(select)
    selectContainer.appendChild(arrow)
  }
}

// Load Google Fonts in the HEAD section
function loadGoogleFonts() {
  // Here's where we'd normally add Google Fonts, but since we're using the Three.js fonts
  // we don't need to load external fonts now
  // If future implementation wants actual Google Fonts, this is where they would be loaded

  // Example of how Google Fonts could be loaded:
  // const link = document.createElement('link');
  // link.rel = 'stylesheet';
  // link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Open+Sans&display=swap';
  // document.head.appendChild(link);
}

// Load fonts when the page loads
loadGoogleFonts();

// Create font preview example
const fontPreview = document.createElement('div')
fontPreview.id = 'font-preview'
fontPreview.textContent = 'Aa Bb Cc 123'
fontPreview.style.padding = '10px'
fontPreview.style.marginTop = '8px'
fontPreview.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
fontPreview.style.color = 'white'
fontPreview.style.borderRadius = '6px'
fontPreview.style.textAlign = 'center'
fontPreview.style.fontSize = '14px'
fontPreview.style.border = '1px solid rgba(255, 255, 255, 0.05)'

// Set initial font display
updateFontPreview(currentFontName);

// Function to update font preview with appropriate display name
function updateFontPreview(fontName) {
  const fontPreview = document.getElementById('font-preview');
  if (!fontPreview) return;

  // For our Three.js fonts, we just show the name since we can't
  // actually preview the font in HTML (they're 3D fonts only)
  fontPreview.textContent = `Preview: ${fontName}`;
  fontPreview.title = `The actual 3D text will use ${fontName} font`;
}

// Update Transform button state based on particle system readiness
function updateTransformButtonState() {
  // Check if the button exists first
  const transformButton = document.querySelector('#transform-button');
  const generateButton = document.querySelector('#generate-button');

  if (transformButton) {
    transformButton.disabled = !particleSystem || isGenerating || isAnimating || isChangingColors || isChangingFont;

    if (transformButton.disabled) {
      transformButton.style.opacity = '0.5';
      transformButton.style.cursor = 'not-allowed';
    } else {
      transformButton.style.opacity = '1';
      transformButton.style.cursor = 'pointer';
    }
  }

  // Also update the generate button state
  if (generateButton) {
    generateButton.disabled = !particleSystem || isGenerating;

    if (generateButton.disabled) {
      generateButton.style.opacity = '0.5';
      generateButton.style.cursor = 'not-allowed';
    } else {
      generateButton.style.opacity = '1';
      generateButton.style.cursor = 'pointer';
    }
  }
}

// Initial startup sequence
function initialStartup() {
  // Always start with Hello and World for a consistent experience
  console.log("Initial startup - preloading font");

  // Set initial texts
  currentText = "Hello";
  targetText = "World";

  // Apply initial colors to ensure they're properly set
  console.log("Setting initial colors:",
    {
      source: { h: sourceColorConfig.baseHue, s: sourceColorConfig.saturation, l: sourceColorConfig.brightness },
      target: { h: targetColorConfig.baseHue, s: targetColorConfig.saturation, l: targetColorConfig.brightness }
    });

  // Preload the font first
  preloadFont(() => {
    console.log("Font loaded, creating initial particles");

    // Create both geometries right away
    generateTextGeometries(currentText, targetText, () => {
      // After both geometries are created, start animation
      console.log("Initial geometries created, starting initial animation");

      // Make sure color configurations are initialized in the particle data
      if (particleData) {
        console.log("Ensuring color data is initialized before initial animation");
        updateParticleColors();
      }

      // Important: For the initial animation, currentText is Hello and it should animate to World
      // But the currentText should be changed to World after the animation
      setTimeout(() => {
        // Update the input field values to match the current text state
        updateTextInputValues();

        // Enable the transform button since we now have particle system
        const transformButton = document.getElementById('transform-button');
        if (transformButton) {
          transformButton.disabled = false;
          transformButton.style.opacity = '1';
          transformButton.style.cursor = 'pointer';
        }

        // Use the callback approach to ensure consistent behavior
        startMorphAnimationWithCallback(() => {
          console.log("Initial animation complete, now showing World");

          // After animation completes, swap the text variables
          // Now World is current (displayed) and Hello is target (for next animation)
          const temp = currentText;
          currentText = targetText;
          targetText = temp;

          initialAnimationComplete = true;

          // Update the UI to show the final state
          updateTextInputValues();
          updateStatusSection();
          console.log("Text state after initial animation: current =", currentText, "target =", targetText);
        });
      }, 500);
    });
  });
}

// Call initial startup to begin the application
initialStartup();

// Function to reset all operation flags and update UI state
function resetOperationFlags() {
  console.log("Resetting all operation flags");
  isGenerating = false;
  isChangingColors = false;
  isChangingFont = false;

  // Update UI elements
  updateApplyButtonState();
  updateTransformButtonState();

  // Update the top-right transform button if it exists
  const topRightButton = document.getElementById('top-right-transform-button');
  if (topRightButton) {
    topRightButton.disabled = !particleSystem || isAnimating;
    topRightButton.style.opacity = topRightButton.disabled ? '0.5' : '1';
    topRightButton.style.cursor = topRightButton.disabled ? 'not-allowed' : 'pointer';
    topRightButton.textContent = isAnimating ? 'Animating...' : 'Transform';
  }

  // Update the generate button if it exists
  const generateButton = document.getElementById('generate-button');
  if (generateButton) {
    generateButton.disabled = !particleSystem || isGenerating;
    generateButton.style.opacity = generateButton.disabled ? '0.5' : '1';
    generateButton.style.cursor = generateButton.disabled ? 'not-allowed' : 'pointer';
  }
}

// Note: Worker response handlers are defined in their respective function contexts
// and should not be defined globally to avoid conflicts

// Function to download the HTML file
function downloadHtmlFile() {
  if (!particleSystem) {
    console.error("Particle system not initialized");
    alert("Please create a text animation first");
    return;
  }

  console.log("Creating downloadable HTML file");

  // Export positions and colors for both source and target states
  const currentPositions = [];
  const currentColors = [];
  const currentSizes = [];
  const targetPositions = [];
  const targetColors = [];

  // Get data from particleData for both states
  if (particleData) {
    // Use the exact current positions and colors as shown in the particle system
    const positions = particleSystem.geometry.attributes.position.array;
    const colors = particleSystem.geometry.attributes.color.array;
    const sizes = particleSystem.geometry.attributes.size ?
      particleSystem.geometry.attributes.size.array :
      new Float32Array(PARTICLE_COUNT).fill(PARTICLE_SIZE);

    // Copy current state
    for (let i = 0; i < positions.length; i++) {
      currentPositions.push(positions[i]);
      currentColors.push(colors[i]);
      if (i % 3 === 0) {
        currentSizes.push(sizes[i / 3] || PARTICLE_SIZE);
      }
    }

    // Get the target state from particleData (where animation would go to)
    for (let i = 0; i < particleData.targetPositions.length; i++) {
      targetPositions.push(particleData.targetPositions[i]);
      targetColors.push(particleData.targetColors[i]);
    }

    console.log(`Exported ${currentPositions.length / 3} particles for HTML file with both source and target states`);
  } else {
    console.error("No particle data available");
    alert("Error: Cannot generate HTML file. Try refreshing the page.");
    return;
  }

  // Start building the HTML content
  let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Text Animation - ${currentText} to ${targetText}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #000c14;
      font-family: Arial, sans-serif;
    }
    canvas {
      display: block;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.min.js"></script>
</head>
<body>
  <script>
    // Main configuration
    const PARTICLE_COUNT = ${PARTICLE_COUNT};
    const PARTICLE_SIZE = ${PARTICLE_SIZE};
    const ANIMATION_DURATION = ${ANIMATION_DURATION};
    const AUTO_ANIMATION_INTERVAL = 3000; // 3 seconds between animations
    
    // Animation state
    let isAnimating = false;
    let showingSourceText = true;
    
    // ThreeJS setup
    let scene, camera, renderer, controls;
    let particleSystem;
    
    // This export contains the exact positions of both the source and target states
    // for a true morphing animation between the two text shapes
    const particleData = {
      // Current state (the text currently showing)
      sourcePositions: new Float32Array(${JSON.stringify(Array.from(currentPositions))}),
      sourceColors: new Float32Array(${JSON.stringify(Array.from(currentColors))}),
      sourceSizes: new Float32Array(${JSON.stringify(Array.from(currentSizes))}),
      
      // Target state (what to morph to)
      targetPositions: new Float32Array(${JSON.stringify(Array.from(targetPositions))}),
      targetColors: new Float32Array(${JSON.stringify(Array.from(targetColors))})
    };
    
    // Main initialization
    function init() {
      // Create scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x000c14);
      
      // Create camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);
      
      // Create renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      document.body.appendChild(renderer.domElement);
      
      // Create controls
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      
      // Create particle system
      createParticleSystem();
      
      // Set up window resize
      window.addEventListener('resize', onWindowResize);
      
      // Start animation loop
      animate();
      
      // Schedule first auto animation
      scheduleNextAnimation();
    }
    
    // Window resize handler
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    // Create particle system
    function createParticleSystem() {
      // Create particle geometry
      const particleGeometry = new THREE.BufferGeometry();
      
      // Set initial attributes
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particleData.sourcePositions), 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(particleData.sourceColors), 3));
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(new Float32Array(particleData.sourceSizes), 1));
      
      // Create particle texture
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext('2d');
      const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      gradient.addColorStop(0.2, 'rgba(240, 255, 255, 0.9)');
      gradient.addColorStop(0.4, 'rgba(200, 220, 255, 0.6)');
      gradient.addColorStop(0.8, 'rgba(100, 150, 200, 0.2)');
      gradient.addColorStop(1, 'rgba(50, 100, 150, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 64, 64);
      const particleTexture = new THREE.CanvasTexture(canvas);
      
      // Create particle material
      const particleMaterial = new THREE.PointsMaterial({
        size: PARTICLE_SIZE,
        map: particleTexture,
        transparent: true,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });
      
      // Create the particle system and add to scene
      particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);
    }
    
    // Schedule next automatic animation
    function scheduleNextAnimation() {
      setTimeout(() => {
        if (!isAnimating) {
          startMorphAnimation();
        }
      }, AUTO_ANIMATION_INTERVAL);
    }
    
    // Start animation between shapes
    function startMorphAnimation() {
      if (isAnimating || !particleSystem) return;
      isAnimating = true;
      
      const startTime = performance.now();
      const positions = particleSystem.geometry.attributes.position.array;
      const colors = particleSystem.geometry.attributes.color.array;
      
      // Determine source and target based on current state
      const sourcePositions = showingSourceText ? particleData.sourcePositions : particleData.targetPositions;
      const targetPositions = showingSourceText ? particleData.targetPositions : particleData.sourcePositions;
      const sourceColors = showingSourceText ? particleData.sourceColors : particleData.targetColors;
      const targetColors = showingSourceText ? particleData.targetColors : particleData.sourceColors;
      
      // Animation function
      function updateAnimation() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / ANIMATION_DURATION, 1.0);
        
        // Use easing for smoother animation
        const easedProgress = easeInOutCubic(progress);
        
        // Update positions and colors
        for (let i = 0; i < positions.length; i++) {
          // Lerp positions
          positions[i] = lerp(sourcePositions[i], targetPositions[i], easedProgress);
          
          // Lerp colors
          colors[i] = lerp(sourceColors[i], targetColors[i], easedProgress);
        }
        
        // Update attributes
        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.geometry.attributes.color.needsUpdate = true;
        
        // Continue animation until complete
        if (progress < 1.0) {
          requestAnimationFrame(updateAnimation);
        } else {
          // Animation complete
          isAnimating = false;
          
          // Toggle which text we're showing
          showingSourceText = !showingSourceText;
          
          // Schedule the next animation
          scheduleNextAnimation();
        }
      }
      
      // Start the animation
      requestAnimationFrame(updateAnimation);
    }
    
    // Helper functions
    function lerp(a, b, t) {
      return a + (b - a) * t;
    }
    
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    
    // Start everything
    init();
  </script>
</body>
</html>`;

  // Create a blob from the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });

  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `text-animation-${currentText}-${targetText}.html`;

  // Trigger the download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  console.log("Clean animation HTML file created and download initiated");
}





