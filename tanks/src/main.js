import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './style.css';

// Global variables
let scene, camera, renderer, controls;
let terrain, skybox;
let player, playerTank;
let obstacles = [];
let projectiles = [];
let enemies = [];
let clouds = [];
let isGameActive = true;
let clock = new THREE.Clock();
let deltaTime;
let isMobile = window.innerWidth < 768;
let respawnQueue = [];
let chunks = new Map(); // Store active terrain chunks
const chunkSize = 200; // Size of each terrain chunk
const viewDistance = 2; // How many chunks to load in each direction
const loadedChunks = new Set(); // Track currently loaded chunk coordinates

// Game state
const gameState = {
  score: 0,
  health: 100,
  isGameOver: false
};

// Settings
const settings = {
  tankSpeed: 18,
  tankRotationSpeed: 1.5,
  projectileSpeed: 60,
  reloadTime: 0.5,
  respawnTime: 12, // seconds
  obstacleCount: isMobile ? 15 : 25,
  treeCount: isMobile ? 15 : 30,
  cloudCount: isMobile ? 5 : 10,
  tankCollisionRadius: 5,
  obstacleCollisionRadius: 4,
  minRespawnTime: 10,  // Minimum seconds before respawn
  maxRespawnTime: 15   // Maximum seconds before respawn
};

// Game controls state
const controls_state = {
  moveForward: false,
  moveBackward: false,
  rotateLeft: false,
  rotateRight: false,
  shoot: false,
  canShoot: true,
  lastShot: 0
};

// Initialize the game
function init() {
  // Create loading manager
  const loadingManager = setupLoading();
  
  // For development, use placeholder textures
  createPlaceholderTextures();
  
  // Create scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xDFE9F3, 0.0025);
  
  // Create center cube
  const cubeGeometry = new THREE.BoxGeometry(5, 5, 5);
  const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const centerCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  centerCube.position.set(0, 2.5, 0);
  scene.add(centerCube);
  
  // Create camera
  camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
  );
  // Set initial position behind and above where the tank will spawn
  camera.position.set(0, 10, -25);
  // Look forward along positive Z-axis
  camera.lookAt(0, 3, 100);
  
  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  document.getElementById('app').appendChild(renderer.domElement);
  
  // Add orbit controls for development
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2 - 0.1;
  
  // Setup lights
  setupLights();
  
  // Create game environment
  createSkybox();
  createClouds();
  createMountains();
  createRoads();
  
  // Create initial chunks around origin
  for (let x = -viewDistance; x <= viewDistance; x++) {
    for (let z = -viewDistance; z <= viewDistance; z++) {
      createTerrainChunk(x, z);
    }
  }
  
  // Create obstacles
  createObstacles();
  createTrees();
  
  // Create player tank
  createPlayerTank();
  
  // Setup event listeners
  setupEventListeners();
  
  // Simulate loading complete for development
  setTimeout(() => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBarFill = document.getElementById('loading-bar-fill');
    
    loadingBarFill.style.width = '100%';
    
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
      
      startGame();
    }, 500);
  }, 1500);
  
  // Start the game loop
  animate();
}

// Create lighting for the scene
function setupLights() {
  // Ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  
  // Directional light (sun)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(50, 200, 100);
  directionalLight.castShadow = true;
  
  // Optimize shadow settings
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 10;
  directionalLight.shadow.camera.far = 500;
  directionalLight.shadow.camera.left = -200;
  directionalLight.shadow.camera.right = 200;
  directionalLight.shadow.camera.top = 200;
  directionalLight.shadow.camera.bottom = -200;
  
  scene.add(directionalLight);
  
  // Add hemisphere light for better ambient colors
  const hemisphereLight = new THREE.HemisphereLight(0x87CEEB, 0x3D9970, 0.6);
  scene.add(hemisphereLight);
}

// Setup event listeners for controls
function setupEventListeners() {
  // Keyboard controls for desktop
  window.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
      case 'w': controls_state.moveForward = true; break;
      case 's': controls_state.moveBackward = true; break;
      case 'a': controls_state.rotateLeft = true; break;
      case 'd': controls_state.rotateRight = true; break;
      case ' ': controls_state.shoot = true; break;
    }
  });
  
  window.addEventListener('keyup', (e) => {
    switch (e.key.toLowerCase()) {
      case 'w': controls_state.moveForward = false; break;
      case 's': controls_state.moveBackward = false; break;
      case 'a': controls_state.rotateLeft = false; break;
      case 'd': controls_state.rotateRight = false; break;
      case ' ': controls_state.shoot = false; break;
    }
  });
  
  // Touch controls for mobile
  if (isMobile) {
    createMobileControls();
  }
  
  // Handle window resizing
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Update mobile status
    isMobile = window.innerWidth < 768;
    
    // Update mobile controls
    if (isMobile) {
      createMobileControls();
    }
  });
  
  // Ensure orbit controls are disabled during gameplay
  controls.enabled = false;
}

// Create skybox for the scene
function createSkybox() {
  // Just set the background color, no walls or geometry
  scene.background = new THREE.Color('#87CEEB');
}

// Create terrain
function createTerrain() {
  // Create a large flat plane for the ground
  const textureLoader = new THREE.TextureLoader();
  
  // Load textures
  const grassTexture = textureLoader.load('/textures/grass.jpg');
  const grassRoughness = textureLoader.load('/textures/grass_roughness.jpg');
  const grassNormal = textureLoader.load('/textures/grass_normal.jpg');
  
  // Repeat textures
  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassRoughness.wrapS = grassRoughness.wrapT = THREE.RepeatWrapping;
  grassNormal.wrapS = grassNormal.wrapT = THREE.RepeatWrapping;
  
  const repeatFactor = 30;
  grassTexture.repeat.set(repeatFactor, repeatFactor);
  grassRoughness.repeat.set(repeatFactor, repeatFactor);
  grassNormal.repeat.set(repeatFactor, repeatFactor);
  
  // Create material
  const groundMaterial = new THREE.MeshStandardMaterial({
    map: grassTexture,
    roughnessMap: grassRoughness,
    normalMap: grassNormal,
    normalScale: new THREE.Vector2(1, 1),
    roughness: 0.8,
    metalness: 0.1
  });
  
  // Create geometry
  const groundGeometry = new THREE.PlaneGeometry(
    settings.terrainSize, 
    settings.terrainSize, 
    64, 
    64
  );
  
  // Create mesh
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  
  // Add to scene
  scene.add(ground);
  terrain = ground;
}

// Create clouds
function createClouds() {
  for (let i = 0; i < settings.cloudCount; i++) {
    createCloud();
  }
}

function createCloud() {
  // Create a group for cloud particles
  const cloudGroup = new THREE.Group();
  
  // Cloud material
  const cloudMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    roughness: 1.0,
    metalness: 0.0
  });
  
  // Create multiple spheres for a fluffy look
  const particleCount = 5 + Math.floor(Math.random() * 5);
  
  for (let i = 0; i < particleCount; i++) {
    const size = 5 + Math.random() * 10;
    const geometry = new THREE.SphereGeometry(size, 7, 7);
    const mesh = new THREE.Mesh(geometry, cloudMaterial);
    
    // Position the sphere randomly within the cloud
    mesh.position.set(
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 15
    );
    
    cloudGroup.add(mesh);
  }
  
  // Position the cloud randomly in the sky
  cloudGroup.position.set(
    (Math.random() - 0.5) * settings.terrainSize,
    80 + Math.random() * 40,
    (Math.random() - 0.5) * settings.terrainSize
  );
  
  // Random scale for variety
  const scale = 1 + Math.random();
  cloudGroup.scale.set(scale, scale, scale);
  
  // Add velocity for movement
  cloudGroup.userData.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 5,
    0,
    (Math.random() - 0.5) * 5
  );
  
  // Add to scene and clouds array
  scene.add(cloudGroup);
  clouds.push(cloudGroup);
}

// Create mountains
function createMountains() {
  const mountainCount = isMobile ? 5 : 8;
  
  for (let i = 0; i < mountainCount; i++) {
    // Create a mountain using a cone geometry
    const height = 80 + Math.random() * 120;
    const radius = 60 + Math.random() * 80;
    
    const mountainGeometry = new THREE.ConeGeometry(
      radius, 
      height, 
      16, 
      4
    );
    
    // Create mountain material
    const mountainMaterial = new THREE.MeshStandardMaterial({
      color: 0x4B4B4B,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true
    });
    
    // Create mesh
    const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
    
    // Position mountain around the starting area
    const angle = (i / mountainCount) * Math.PI * 2;
    const distance = 400; // Fixed distance from origin
    
    mountain.position.x = Math.cos(angle) * distance;
    mountain.position.z = Math.sin(angle) * distance;
    mountain.position.y = height / 2;
    
    // Rotate slightly for variation
    mountain.rotation.y = Math.random() * Math.PI * 2;
    
    // Add mountain data for collision detection
    mountain.userData.type = 'mountain';
    mountain.userData.health = Infinity;
    mountain.userData.collisionRadius = radius * 0.9;
    mountain.userData.halfHeight = height / 2;
    mountain.userData.isDestroyed = false;
    
    // Add mountain to scene and obstacles array
    scene.add(mountain);
    obstacles.push(mountain);
  }
}

// Create roads
function createRoads() {
  const textureLoader = new THREE.TextureLoader();
  const roadTexture = textureLoader.load('/textures/road.jpg');
  roadTexture.wrapS = roadTexture.wrapT = THREE.RepeatWrapping;
  roadTexture.repeat.set(1, 30);
  
  const roadMaterial = new THREE.MeshStandardMaterial({
    map: roadTexture,
    roughness: 0.7,
    metalness: 0.1
  });
  
  // Create main roads
  createSingleRoad(roadMaterial, new THREE.Vector3(-200, 0.1, 0), new THREE.Vector3(200, 0.1, 0));
  createSingleRoad(roadMaterial, new THREE.Vector3(0, 0.1, -200), new THREE.Vector3(0, 0.1, 200));
}

function createSingleRoad(material, start, end) {
  // Calculate road length and direction
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  
  // Create road geometry
  const roadGeometry = new THREE.PlaneGeometry(15, length);
  const road = new THREE.Mesh(roadGeometry, material);
  
  // Position and rotate road
  road.position.copy(start.clone().add(direction.clone().multiplyScalar(0.5)));
  road.rotation.x = -Math.PI / 2;
  
  // Calculate the angle to rotate around Y axis
  const angle = Math.atan2(direction.x, direction.z);
  road.rotation.y = angle;
  
  // Add road to scene
  road.receiveShadow = true;
  scene.add(road);
}

// Create obstacles
function createObstacles() {
  // Create different kinds of obstacles
  for (let i = 0; i < settings.obstacleCount; i++) {
    // Select a random type of obstacle
    const obstacleType = Math.floor(Math.random() * 3);
    
    let obstacle;
    
    switch (obstacleType) {
      case 0: obstacle = createCrate(); break;
      case 1: obstacle = createBarrel(); break;
      case 2: obstacle = createBarrier(); break;
      default: obstacle = createCrate();
    }
    
    // Position randomly around the starting area
    let validPosition = false;
    let position = new THREE.Vector3();
    
    while (!validPosition) {
      position = new THREE.Vector3(
        (Math.random() - 0.5) * 400,  // Initial spawn area
        0,
        (Math.random() - 0.5) * 400
      );
      
      // Avoid center area for player spawn
      const distanceFromCenter = position.length();
      
      // Avoid roads
      const onRoad = (
        (Math.abs(position.x) < 15 && Math.abs(position.z) > 15) || 
        (Math.abs(position.z) < 15 && Math.abs(position.x) > 15)
      );
      
      if (distanceFromCenter > 40 && !onRoad) {
        validPosition = true;
      }
    }
    
    // Set position
    obstacle.position.copy(position);
    obstacle.position.y = obstacle.userData.halfHeight;
    
    // Add to scene and obstacles array
    scene.add(obstacle);
    obstacles.push(obstacle);
  }
}

function createCrate() {
  const size = 5 + Math.random() * 3;
  const geometry = new THREE.BoxGeometry(size, size, size);
  
  const textureLoader = new THREE.TextureLoader();
  const crateTexture = textureLoader.load('/textures/crate.jpg');
  
  const material = new THREE.MeshStandardMaterial({ 
    map: crateTexture,
    roughness: 0.7,
    metalness: 0.2
  });
  
  const crate = new THREE.Mesh(geometry, material);
  crate.castShadow = true;
  crate.receiveShadow = true;
  
  // Store original properties for respawning
  crate.userData.originalScale = new THREE.Vector3().copy(crate.scale);
  crate.userData.type = 'crate';
  crate.userData.health = 30;
  crate.userData.halfHeight = size / 2;
  crate.userData.collisionRadius = size / 2;
  crate.userData.isDestroyed = false;
  
  return crate;
}

function createBarrel() {
  const radiusTop = 2.5;
  const radiusBottom = 2.5;
  const height = 7;
  const geometry = new THREE.CylinderGeometry(
    radiusTop, 
    radiusBottom, 
    height, 
    16
  );
  
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xF04040,
    roughness: 0.6,
    metalness: 0.4
  });
  
  const barrel = new THREE.Mesh(geometry, material);
  barrel.castShadow = true;
  barrel.receiveShadow = true;
  
  // Rotate randomly
  barrel.rotation.y = Math.random() * Math.PI * 2;
  
  // Store original properties for respawning
  barrel.userData.originalScale = new THREE.Vector3().copy(barrel.scale);
  barrel.userData.type = 'barrel';
  barrel.userData.health = 20;
  barrel.userData.halfHeight = height / 2;
  barrel.userData.collisionRadius = radiusTop;
  barrel.userData.isDestroyed = false;
  barrel.userData.isExplosive = true;
  
  return barrel;
}

function createBarrier() {
  const width = 8;
  const height = 5;
  const depth = 3;
  const geometry = new THREE.BoxGeometry(width, height, depth);
  
  const material = new THREE.MeshStandardMaterial({ 
    color: 0xCCCCCC,
    roughness: 0.9,
    metalness: 0.1
  });
  
  const barrier = new THREE.Mesh(geometry, material);
  barrier.castShadow = true;
  barrier.receiveShadow = true;
  
  // Rotate randomly
  barrier.rotation.y = Math.random() * Math.PI * 2;
  
  // Store original properties for respawning
  barrier.userData.originalScale = new THREE.Vector3().copy(barrier.scale);
  barrier.userData.type = 'barrier';
  barrier.userData.health = 50;
  barrier.userData.halfHeight = height / 2;
  barrier.userData.collisionRadius = Math.sqrt(width * width + depth * depth) / 2;
  barrier.userData.isDestroyed = false;
  
  return barrier;
}

// Create trees
function createTrees() {
  for (let i = 0; i < settings.treeCount; i++) {
    createTree();
  }
}

function createTree() {
  // Create tree group
  const treeGroup = new THREE.Group();
  
  // Create trunk
  const trunkGeometry = new THREE.CylinderGeometry(1, 1.5, 10, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({
    color: 0x8B4513,
    roughness: 0.9,
    metalness: 0.0
  });
  
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  trunk.position.y = 5;
  
  // Create foliage (4 cones for a stylized look)
  const foliageMaterial = new THREE.MeshStandardMaterial({
    color: 0x2E8B57,
    roughness: 1.0,
    metalness: 0.0
  });
  
  // Bottom foliage
  const foliage1 = createFoliageCone(6, 8, foliageMaterial);
  foliage1.position.y = 8;
  
  // Middle foliage
  const foliage2 = createFoliageCone(5, 7, foliageMaterial);
  foliage2.position.y = 12;
  
  // Top foliage
  const foliage3 = createFoliageCone(3, 6, foliageMaterial);
  foliage3.position.y = 15;
  
  // Add all parts to the tree group
  treeGroup.add(trunk);
  treeGroup.add(foliage1);
  treeGroup.add(foliage2);
  treeGroup.add(foliage3);
  
  // Store tree data
  treeGroup.userData.type = 'tree';
  treeGroup.userData.health = 40;
  treeGroup.userData.originalScale = new THREE.Vector3().copy(treeGroup.scale);
  treeGroup.userData.collisionRadius = 6;
  treeGroup.userData.halfHeight = 10;
  treeGroup.userData.isDestroyed = false;
  
  // Add some random rotation
  treeGroup.rotation.y = Math.random() * Math.PI * 2;
  
  return treeGroup; // Make sure to return the tree group
}

function createFoliageCone(radius, height, material) {
  const geometry = new THREE.ConeGeometry(radius, height, 8);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.castShadow = true;
  return mesh;
}

// Create player tank
function createPlayerTank() {
  // Create tank group
  player = new THREE.Group();
  
  // Create tank body
  const bodyGeometry = new THREE.BoxGeometry(10, 4, 15);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x4B5320,
    roughness: 0.7,
    metalness: 0.3
  });
  
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.castShadow = true;
  body.receiveShadow = true;
  body.position.y = 4;
  
  // Create tank turret
  const turretGeometry = new THREE.CylinderGeometry(4, 4, 3, 8);
  const turretMaterial = new THREE.MeshStandardMaterial({
    color: 0x4B5320,
    roughness: 0.7,
    metalness: 0.3
  });
  
  const turret = new THREE.Mesh(turretGeometry, turretMaterial);
  turret.castShadow = true;
  turret.receiveShadow = true;
  turret.position.y = 7.5;
  turret.rotation.x = Math.PI / 2;
  
  // Create tank barrel
  const barrelGeometry = new THREE.CylinderGeometry(0.8, 0.8, 12, 8);
  const barrelMaterial = new THREE.MeshStandardMaterial({
    color: 0x333333,
    roughness: 0.6,
    metalness: 0.4
  });
  
  const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);
  barrel.castShadow = true;
  barrel.receiveShadow = true;
  barrel.position.z = 6;
  barrel.rotation.x = Math.PI / 2;
  
  // Add barrel to turret
  turret.add(barrel);
  
  // Create tank treads
  const leftTread = createTankTread();
  leftTread.position.set(-5.5, 2, 0);
  
  const rightTread = createTankTread();
  rightTread.position.set(5.5, 2, 0);
  
  // Add all parts to the tank group
  player.add(body);
  player.add(turret);
  player.add(leftTread);
  player.add(rightTread);
  
  // Position tank
  player.position.set(0, 0, 0);
  
  // Store turret for rotation
  player.userData.turret = turret;
  player.userData.collisionRadius = 7.5;
  
  // Add to scene
  scene.add(player);
  playerTank = player;
  
  // Initialize orbital controls
  controls.enabled = false;
  
  // Create and set up the camera
  setupThirdPersonCamera();
}

// Helper function to update camera position and orientation
function setupThirdPersonCamera() {
  // Force camera to be a direct child of the scene
  if (camera.parent !== scene) {
    scene.attach(camera);
  }
  
  // Set initial camera position
  camera.position.set(0, 20, -35);
  
  // Initially look at the tank's position
  if (playerTank) {
    camera.lookAt(playerTank.position);
  }
  
  // Disable orbit controls during gameplay
  if (controls) {
    controls.enabled = false;
  }
}

// This function is called in the animation loop to update the camera
function updateCameraPosition() {
  if (!playerTank || !scene) return;
  
  // Ensure camera is still attached to scene
  if (camera.parent !== scene) {
    scene.attach(camera);
  }
  
  // Calculate relative offset from tank
  const distanceBehind = 35; // Distance behind tank
  const heightAbove = 20;    // Height above tank
  
  // Calculate camera position relative to tank's rotation
  const tankDirection = new THREE.Vector3(
    Math.sin(playerTank.rotation.y),
    0,
    Math.cos(playerTank.rotation.y)
  );
  
  // Position camera behind tank based on tank's rotation
  const cameraOffset = tankDirection.clone().multiplyScalar(-distanceBehind);
  camera.position.copy(playerTank.position).add(cameraOffset);
  camera.position.y = playerTank.position.y + heightAbove;
  
  // Calculate look target point (above the tank's turret)
  const lookTarget = playerTank.position.clone();
  lookTarget.y = playerTank.position.y + 7.5; // Height of tank (4) + turret height (3.5)
  
  // Make camera look at the point above tank
  camera.lookAt(lookTarget);
  
  // Ensure orbit controls are disabled during gameplay
  if (controls) {
    controls.enabled = false;
  }
}

function createTankTread() {
  const treadGeometry = new THREE.BoxGeometry(2, 4, 16);
  const treadMaterial = new THREE.MeshStandardMaterial({
    color: 0x222222,
    roughness: 0.8,
    metalness: 0.2
  });
  
  const tread = new THREE.Mesh(treadGeometry, treadMaterial);
  tread.castShadow = true;
  tread.receiveShadow = true;
  
  return tread;
  
}

// Create mobile controls interface
function createMobileControls() {
  // Clear any existing mobile controls
  const existingControls = document.getElementById('mobile-controls');
  if (existingControls) {
    existingControls.remove();
  }
  
  // Create container for mobile controls
  const controlsContainer = document.createElement('div');
  controlsContainer.id = 'mobile-controls';
  controlsContainer.style.position = 'absolute';
  controlsContainer.style.bottom = '20px';
  controlsContainer.style.left = '0';
  controlsContainer.style.width = '100%';
  controlsContainer.style.display = 'flex';
  controlsContainer.style.justifyContent = 'space-between';
  controlsContainer.style.padding = '0 20px';
  controlsContainer.style.boxSizing = 'border-box';
  controlsContainer.style.zIndex = '100';
  controlsContainer.style.pointerEvents = 'none'; // Container itself doesn't catch events
  
  // Create movement joystick div
  const movementJoystick = document.createElement('div');
  movementJoystick.id = 'movement-joystick';
  movementJoystick.style.width = '120px';
  movementJoystick.style.height = '120px';
  movementJoystick.style.borderRadius = '60px';
  movementJoystick.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  movementJoystick.style.border = '2px solid rgba(255, 255, 255, 0.5)';
  movementJoystick.style.position = 'relative';
  movementJoystick.style.pointerEvents = 'auto';
  
  // Create joystick knob
  const joystickKnob = document.createElement('div');
  joystickKnob.id = 'joystick-knob';
  joystickKnob.style.width = '50px';
  joystickKnob.style.height = '50px';
  joystickKnob.style.borderRadius = '25px';
  joystickKnob.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  joystickKnob.style.position = 'absolute';
  joystickKnob.style.top = '35px';
  joystickKnob.style.left = '35px';
  joystickKnob.style.pointerEvents = 'none';
  
  movementJoystick.appendChild(joystickKnob);
  
  // Create shoot button
  const shootButton = document.createElement('div');
  shootButton.id = 'shoot-button';
  shootButton.style.width = '80px';
  shootButton.style.height = '80px';
  shootButton.style.borderRadius = '40px';
  shootButton.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
  shootButton.style.border = '2px solid rgba(255, 255, 255, 0.5)';
  shootButton.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
  shootButton.style.textAlign = 'center';
  shootButton.style.lineHeight = '80px';
  shootButton.style.color = 'white';
  shootButton.style.fontSize = '16px';
  shootButton.style.fontWeight = 'bold';
  shootButton.style.userSelect = 'none';
  shootButton.style.pointerEvents = 'auto';
  shootButton.innerText = 'FIRE';
  
  // Add elements to container
  controlsContainer.appendChild(movementJoystick);
  controlsContainer.appendChild(shootButton);
  
  // Add container to document
  document.body.appendChild(controlsContainer);
  
  // Set up joystick event handlers
  setupMobileJoystick(movementJoystick, joystickKnob);
  
  // Set up shoot button event handlers
  setupShootButton(shootButton);
}

function setupMobileJoystick(joystickElement, knobElement) {
  let isDragging = false;
  let centerX, centerY;
  const maxDistance = 35;
  
  // Set initial center position
  const updateCenter = () => {
    const rect = joystickElement.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;
  };
  
  // Initialize center on load
  updateCenter();
  window.addEventListener('resize', updateCenter);
  
  // Touch start event
  joystickElement.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateJoystickPosition(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
  });
  
  // Touch move event
  window.addEventListener('touchmove', (e) => {
    if (isDragging) {
      updateJoystickPosition(e.touches[0].clientX, e.touches[0].clientY);
      e.preventDefault();
    }
  });
  
  // Touch end event
  window.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      resetJoystick();
    }
  });
  
  // Update joystick position
  function updateJoystickPosition(x, y) {
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    
    // Calculate distance and angle
    const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), maxDistance);
    const angle = Math.atan2(deltaY, deltaX);
    
    // Calculate new position
    const knobX = distance * Math.cos(angle);
    const knobY = distance * Math.sin(angle);
    
    // Update knob position
    knobElement.style.transform = `translate(${knobX}px, ${knobY}px)`;
    
    // Update control states
    if (distance > 10) {
      // Forward/backward based on Y position
      controls_state.moveForward = deltaY < -10;
      controls_state.moveBackward = deltaY > 10;
      
      // Left/right based on X position
      controls_state.rotateLeft = deltaX < -10;
      controls_state.rotateRight = deltaX > 10;
    } else {
      resetControlStates();
    }
  }
  
  // Reset joystick position
  function resetJoystick() {
    knobElement.style.transform = 'translate(0px, 0px)';
    resetControlStates();
  }
  
  function resetControlStates() {
    controls_state.moveForward = false;
    controls_state.moveBackward = false;
    controls_state.rotateLeft = false;
    controls_state.rotateRight = false;
  }
}

function setupShootButton(buttonElement) {
  // Touch start event
  buttonElement.addEventListener('touchstart', (e) => {
    controls_state.shoot = true;
    buttonElement.style.transform = 'scale(0.9)';
    e.preventDefault();
  });
  
  // Touch end event
  buttonElement.addEventListener('touchend', (e) => {
    controls_state.shoot = false;
    buttonElement.style.transform = 'scale(1)';
    e.preventDefault();
  });
}

// Game animation loop
function animate() {
  requestAnimationFrame(animate);
  
  // Calculate delta time
  deltaTime = clock.getDelta();
  
  // Clear console logs after 5 seconds to avoid flooding
  if (clock.elapsedTime > 5 && !window.clearedLogs) {
    console.clear();
    console.log("Cleared initial logs. Continuing with critical debug output only.");
    window.clearedLogs = true;
  }
  
  // Verify camera is correctly attached to scene - run once after 1 second
  if (clock.elapsedTime > 1 && !window.checkedCamera) {
    if (camera.parent !== scene) {
      console.error("CRITICAL ERROR: Camera is not attached to scene!", camera.parent);
      scene.attach(camera);
      console.log("Fixed: Re-attached camera to scene");
    } else {
      console.log("Camera correctly attached to scene");
    }
    window.checkedCamera = true;
  }
  
  // Update game entities
  if (isGameActive) {
    updatePlayerTank();
    updateProjectiles();
    updateClouds();
    updateRespawnQueue();
    checkCollisions();
    updateUI();
    updateTerrainChunks();
    updateCameraPosition();
  }
  
  // Render scene
  renderer.render(scene, camera);
}

// Update player tank position and rotation
function updatePlayerTank() {
  if (!playerTank) return;
  
  // Track if rotation changed
  let rotationChanged = false;
  let positionChanged = false;
  
  // Store original rotation for comparison
  const originalRotationY = playerTank.rotation.y;
  
  // Rotate tank
  if (controls_state.rotateLeft) {
    playerTank.rotation.y += settings.tankRotationSpeed * deltaTime;
    rotationChanged = true;
  }
  if (controls_state.rotateRight) {
    playerTank.rotation.y -= settings.tankRotationSpeed * deltaTime;
    rotationChanged = true;
  }
  
  // If tank rotated, just update its rotation
  if (rotationChanged) {
    // Force rotation to stay within 0 to 2π range for consistency
    playerTank.rotation.y = playerTank.rotation.y % (Math.PI * 2);
    if (playerTank.rotation.y < 0) playerTank.rotation.y += Math.PI * 2;
  }
  
  // Move tank forward/backward
  let moveDistance = 0;
  if (controls_state.moveForward) {
    moveDistance = settings.tankSpeed * deltaTime;
    positionChanged = true;
  }
  if (controls_state.moveBackward) {
    moveDistance = -settings.tankSpeed * deltaTime;
    positionChanged = true;
  }
  
  if (moveDistance !== 0) {
    // Calculate new position
    const moveVector = new THREE.Vector3(
      Math.sin(playerTank.rotation.y) * moveDistance,
      0,
      Math.cos(playerTank.rotation.y) * moveDistance
    );
    
    // Store current position
    const oldPosition = playerTank.position.clone();
    
    // Update position (no boundary checks)
    playerTank.position.add(moveVector);
    
    // Check obstacle collisions
    if (checkTankObstacleCollisions()) {
      // Collision detected, revert to old position
      playerTank.position.copy(oldPosition);
      positionChanged = false;
    }
  }
  
  // Shoot projectiles
  if (controls_state.shoot && controls_state.canShoot) {
    fireProjectile();
    controls_state.canShoot = false;
    controls_state.lastShot = clock.elapsedTime;
  }
  
  // Check if can shoot again
  if (!controls_state.canShoot && clock.elapsedTime - controls_state.lastShot >= settings.reloadTime) {
    controls_state.canShoot = true;
  }
}

// Check collisions between tank and obstacles
function checkTankObstacleCollisions() {
  if (!playerTank) return false;
  
  // Get tank position
  const tankPosition = new THREE.Vector3(
    playerTank.position.x,
    0,
    playerTank.position.z
  );
  
  // Check distance to all obstacles
  for (const obstacle of obstacles) {
    if (obstacle.userData.isDestroyed) continue;
    
    // Get obstacle position
    const obstaclePosition = new THREE.Vector3(
      obstacle.position.x,
      0,
      obstacle.position.z
    );
    
    // Calculate distance
    const distance = tankPosition.distanceTo(obstaclePosition);
    
    // Check if collision
    const collisionDistance = settings.tankCollisionRadius + obstacle.userData.collisionRadius;
    
    if (distance < collisionDistance) {
      return true;
    }
  }
  
  return false;
}

// Fire a projectile from the tank
function fireProjectile() {
  if (!playerTank) return;
  
  // Get turret position and rotation
  const turret = playerTank.userData.turret;
  
  // Create projectile with larger size and more segments for better visibility
  const projectileGeometry = new THREE.SphereGeometry(2, 16, 16); // Increased size further
  const projectileMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xFFFF00,
    emissive: 0xFFFF00,
    emissiveIntensity: 2,
    metalness: 0.3,
    roughness: 0.2
  });
  const projectile = new THREE.Mesh(projectileGeometry, projectileMaterial);
  
  // Get the tank's forward direction
  const tankDirection = new THREE.Vector3(
    Math.sin(playerTank.rotation.y),
    0,
    Math.cos(playerTank.rotation.y)
  );
  
  // Position projectile at the end of the barrel
  const barrelLength = 12;
  const barrelOffset = tankDirection.clone().multiplyScalar(barrelLength);
  const turretPosition = turret.getWorldPosition(new THREE.Vector3());
  
  projectile.position.copy(turretPosition);
  projectile.position.y = turretPosition.y; // Keep the same height as turret
  projectile.position.add(barrelOffset); // Move it to the end of the barrel
  
  // Store direction and speed
  projectile.userData.direction = tankDirection;
  projectile.userData.speed = settings.projectileSpeed;
  projectile.userData.lifetime = 0;
  
  // Add to scene and projectiles array
  scene.add(projectile);
  projectiles.push(projectile);
  
  // Add point light to projectile for better visibility
  const projectileLight = new THREE.PointLight(0xFFFF00, 8, 20); // Increased intensity and distance
  projectile.add(projectileLight);
  
  // Add muzzle flash effect
  createMuzzleFlash(projectile.position.clone(), tankDirection);
}

// Create muzzle flash effect
function createMuzzleFlash(position, direction) {
  // Create light
  const flashLight = new THREE.PointLight(0xFFAA00, 5, 15);
  flashLight.position.copy(position);
  scene.add(flashLight);
  
  // Remove after short time
  setTimeout(() => {
    scene.remove(flashLight);
  }, 100);
}

// Update all projectiles
function updateProjectiles() {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const projectile = projectiles[i];
    
    // Update position
    const movement = projectile.userData.direction.clone();
    movement.multiplyScalar(projectile.userData.speed * deltaTime);
    projectile.position.add(movement);
    
    // Update lifetime
    projectile.userData.lifetime += deltaTime;
    
    // Check for collisions
    if (checkProjectileCollisions(projectile)) {
      // Remove projectile
      scene.remove(projectile);
      projectiles.splice(i, 1);
      continue;
    }
    
    // Remove if too old (based on distance traveled)
    const distanceFromTank = projectile.position.distanceTo(playerTank.position);
    if (projectile.userData.lifetime > 3) {  // Only use lifetime, not distance
      scene.remove(projectile);
      projectiles.splice(i, 1);
    }
  }
}

// Check if projectile collides with obstacles
function checkProjectileCollisions(projectile) {
  // Check distance to all obstacles
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    
    // Skip destroyed obstacles
    if (obstacle.userData.isDestroyed) continue;
    
    // Calculate distance
    const distance = projectile.position.distanceTo(obstacle.position);
    
    // Check collision with increased collision radius for better hit detection
    if (distance < obstacle.userData.collisionRadius + 2) {
      // Create explosion at impact point
      createExplosion(projectile.position.clone(), false);
      
      // Apply massive damage to ensure destruction
      damageObstacle(obstacle, 1000);
      
      // If obstacle is destroyed, create a larger explosion
      if (obstacle.userData.health <= 0) {
        createExplosion(obstacle.position.clone(), true);
        
        // If obstacle was explosive, damage nearby obstacles
        if (obstacle.userData.isExplosive) {
          applyExplosionDamage(obstacle.position, 25, 1000);
        }
      }
      
      return true;
    }
  }
  
  return false;
}

// Apply damage to an obstacle
function damageObstacle(obstacle, damageAmount) {
  // Apply damage
  obstacle.userData.health -= damageAmount;
  
  // Check if destroyed
  if (obstacle.userData.health <= 0 && !obstacle.userData.isDestroyed) {
    // Ensure the obstacle is marked as destroyed
    obstacle.userData.isDestroyed = true;
    
    // Scale down to show destruction
    obstacle.scale.set(0.1, 0.1, 0.1);
    
    // Add to respawn queue with random delay
    const respawnDelay = settings.minRespawnTime + 
      Math.random() * (settings.maxRespawnTime - settings.minRespawnTime);
    addToRespawnQueue(obstacle);
  }
}

// Add obstacle to respawn queue
function addToRespawnQueue(obstacle) {
  const respawnTime = settings.minRespawnTime + 
    Math.random() * (settings.maxRespawnTime - settings.minRespawnTime);
  respawnQueue.push({
    obstacle: obstacle,
    respawnTime: clock.elapsedTime + respawnTime
  });
}

// Update respawn queue and respawn obstacles
function updateRespawnQueue() {
  for (let i = respawnQueue.length - 1; i >= 0; i--) {
    const item = respawnQueue[i];
    
    // Check if time to respawn
    if (clock.elapsedTime >= item.respawnTime) {
      respawnObstacle(item.obstacle);
      respawnQueue.splice(i, 1);
    }
  }
}

// Respawn an obstacle
function respawnObstacle(obstacle) {
  // Reset properties
  obstacle.userData.isDestroyed = false;
  obstacle.userData.health = obstacle.userData.type === 'barrel' ? 20 : 
                             obstacle.userData.type === 'crate' ? 30 : 
                             obstacle.userData.type === 'tree' ? 40 : 50;
  
  // Reset scale
  obstacle.scale.copy(obstacle.userData.originalScale);
}

// Apply explosion damage to nearby obstacles
function applyExplosionDamage(position, radius, damage) {
  for (const obstacle of obstacles) {
    if (obstacle.userData.isDestroyed) continue;
    
    // Calculate distance
    const distance = position.distanceTo(obstacle.position);
    
    // Check if in explosion radius
    if (distance < radius) {
      // Calculate damage based on distance (more damage closer to explosion)
      const actualDamage = damage * (1 - distance / radius);
      damageObstacle(obstacle, actualDamage);
      
      // Create explosion if destroyed
      if (obstacle.userData.health <= 0) {
        createExplosion(obstacle.position.clone(), obstacle.userData.isExplosive);
      }
    }
  }
}

// Create explosion effect
function createExplosion(position, isLarge = false) {
  // Create explosion particles
  const particleCount = isLarge ? 30 : 15;
  const explosionRadius = isLarge ? 10 : 5;
  
  for (let i = 0; i < particleCount; i++) {
    // Create particle
    const particleGeometry = new THREE.SphereGeometry(
      0.3 + Math.random() * 0.5,
      4,
      4
    );
    
    // Create glowing particle material
    const particleMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(
        0.8 + Math.random() * 0.2,
        0.3 + Math.random() * 0.3,
        0.1
      ),
      emissive: new THREE.Color(0xFF5500),
      emissiveIntensity: 2
    });
    
    const particle = new THREE.Mesh(particleGeometry, particleMaterial);
    
    // Set position
    particle.position.copy(position);
    particle.position.y += 1 + Math.random() * 2;
    
    // Set random velocity with more upward momentum
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      0.5 + Math.random() * 2, // More upward velocity
      (Math.random() - 0.5) * 2
    );
    
    velocity.normalize().multiplyScalar(8 + Math.random() * 8); // Increased velocity
    particle.userData.velocity = velocity;
    particle.userData.lifetime = 0;
    particle.userData.maxLifetime = 0.5 + Math.random() * 0.5;
    
    // Add point light to some particles
    if (Math.random() < 0.3) {
      const particleLight = new THREE.PointLight(0xFF5500, 2, 5);
      particle.add(particleLight);
    }
    
    // Add to scene
    scene.add(particle);
    
    // Create animation to move particle and then remove it
    const animateParticle = () => {
      particle.userData.lifetime += deltaTime;
      
      // Move particle
      const movement = particle.userData.velocity.clone();
      movement.multiplyScalar(deltaTime);
      particle.position.add(movement);
      
      // Apply gravity
      particle.userData.velocity.y -= 15 * deltaTime; // Increased gravity
      
      // Scale down over time
      const lifeRatio = 1 - particle.userData.lifetime / particle.userData.maxLifetime;
      particle.scale.set(lifeRatio, lifeRatio, lifeRatio);
      
      // Check if particle should be removed
      if (particle.userData.lifetime >= particle.userData.maxLifetime) {
        scene.remove(particle);
      } else {
        requestAnimationFrame(animateParticle);
      }
    };
    
    // Start animation
    animateParticle();
  }
  
  // Add explosion light
  const explosionLight = new THREE.PointLight(
    0xFF5500,
    isLarge ? 5 : 2,
    isLarge ? 30 : 15
  );
  explosionLight.position.copy(position);
  explosionLight.position.y += 2;
  scene.add(explosionLight);
  
  // Remove light after animation
  setTimeout(() => {
    scene.remove(explosionLight);
  }, 500);
}

// Update cloud positions
function updateClouds() {
  for (const cloud of clouds) {
    // Move cloud based on its velocity
    const movement = cloud.userData.velocity.clone();
    movement.multiplyScalar(deltaTime * 0.2);
    cloud.position.add(movement);
    
    // Wrap clouds around when they get too far (relative to player position)
    if (playerTank) {
      const maxDistance = 1000; // Maximum distance from player before wrapping
      const dx = cloud.position.x - playerTank.position.x;
      const dz = cloud.position.z - playerTank.position.z;
      
      if (dx > maxDistance) cloud.position.x -= maxDistance * 2;
      if (dx < -maxDistance) cloud.position.x += maxDistance * 2;
      if (dz > maxDistance) cloud.position.z -= maxDistance * 2;
      if (dz < -maxDistance) cloud.position.z += maxDistance * 2;
    }
  }
}

// Check all collisions in the game
function checkCollisions() {
  // Tank-obstacle collisions handled in updatePlayerTank
  
  // Projectile-obstacle collisions handled in updateProjectiles
}

// Helper function to check if textures are loaded
function checkTexturesLoaded() {
  // This function can be expanded to wait for all assets to be loaded
  return true;
}

// Update game UI
function updateUI() {
  // Update score display
  const scoreDisplay = document.getElementById('score-display');
  scoreDisplay.textContent = `Score: ${gameState.score}`;
  
  // Update health bar
  const healthBarFill = document.getElementById('health-bar-fill');
  healthBarFill.style.width = `${gameState.health}%`;
  
  // Change color based on health
  if (gameState.health > 60) {
    healthBarFill.style.backgroundColor = '#4CAF50'; // Green
  } else if (gameState.health > 30) {
    healthBarFill.style.backgroundColor = '#FFC107'; // Amber
  } else {
    healthBarFill.style.backgroundColor = '#F44336'; // Red
  }
  
  // Check for game over
  if (gameState.health <= 0 && !gameState.isGameOver) {
    gameOver();
  }
}

// Game over function
function gameOver() {
  gameState.isGameOver = true;
  
  // Show game over screen
  const gameOverScreen = document.getElementById('game-over');
  gameOverScreen.style.display = 'flex';
  
  // Update final score
  const finalScoreElement = document.getElementById('final-score');
  finalScoreElement.textContent = gameState.score;
  
  // Disable controls
  isGameActive = false;
}

// Restart game
function restartGame() {
  // Reset game state
  gameState.score = 0;
  gameState.health = 100;
  gameState.isGameOver = false;
  
  // Reset player position
  if (playerTank) {
    playerTank.position.set(0, 0, 0);
    playerTank.rotation.y = 0;
  }
  
  // Reset obstacles
  for (const obstacle of obstacles) {
    if (obstacle.userData.isDestroyed) {
      respawnObstacle(obstacle);
    }
  }
  
  // Clear projectiles
  for (const projectile of projectiles) {
    scene.remove(projectile);
  }
  projectiles = [];
  
  // Clear respawn queue
  respawnQueue = [];
  
  // Hide game over screen
  const gameOverScreen = document.getElementById('game-over');
  gameOverScreen.style.display = 'none';
  
  // Enable controls
  isGameActive = true;
  
  // Update UI
  updateUI();
}

// Set up asset loading
function setupLoading() {
  // Get loading elements
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBarFill = document.getElementById('loading-bar-fill');
  
  // Create texture loader with loading manager
  const manager = new THREE.LoadingManager();
  
  // Track loading progress
  manager.onProgress = function(url, itemsLoaded, itemsTotal) {
    const progress = itemsLoaded / itemsTotal * 100;
    loadingBarFill.style.width = `${progress}%`;
  };
  
  // Handle loading complete
  manager.onLoad = function() {
    // Hide loading screen
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
    
    // Start game
    startGame();
  };
  
  return manager;
}

// Start game after assets are loaded
function startGame() {
  // Set up restart button
  const restartButton = document.getElementById('restart-button');
  restartButton.addEventListener('click', restartGame);
  
  // Start game loop
  isGameActive = true;
  
  // First UI update
  updateUI();
}

// Add placeholder textures for development
function createPlaceholderTextures() {
  // Create a blank canvas for each texture
  const createCanvasTexture = (color) => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 256, 256);
    
    // Add some pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if ((i + j) % 2 === 0) {
          ctx.fillRect(i * 25.6, j * 25.6, 25.6, 25.6);
        }
      }
    }
    
    return new THREE.CanvasTexture(canvas);
  };
  
  // Create textures for different elements
  const textures = {
    grass: createCanvasTexture('#4CAF50'),
    road: createCanvasTexture('#555555'),
    crate: createCanvasTexture('#8B4513')
  };
  
  // Override the original createSkybox function
  window.originalCreateSkybox = createSkybox;
  createSkybox = function() {
    // Just set the background color, no walls or geometry
    scene.background = new THREE.Color('#87CEEB');
  };
  
  // Override createTerrain function
  createTerrain = function() {
    // Create a large flat plane for the ground
    const groundMaterial = new THREE.MeshStandardMaterial({
      map: textures.grass,
      roughness: 0.8,
      metalness: 0.1
    });
    
    // Create geometry for initial chunk
    const groundGeometry = new THREE.PlaneGeometry(chunkSize, chunkSize, 32, 32);
    
    // Create mesh
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    
    // Add to scene
    scene.add(ground);
    terrain = ground;
  };
  
  // Override createRoads function
  createRoads = function() {
    const roadMaterial = new THREE.MeshStandardMaterial({
      map: textures.road,
      roughness: 0.7,
      metalness: 0.1
    });
    
    // Create main roads
    createSingleRoad(roadMaterial, new THREE.Vector3(-200, 0.1, 0), new THREE.Vector3(200, 0.1, 0));
    createSingleRoad(roadMaterial, new THREE.Vector3(0, 0.1, -200), new THREE.Vector3(0, 0.1, 200));
  };
  
  // Override createCrate function
  createCrate = function() {
    const size = 5 + Math.random() * 3;
    const geometry = new THREE.BoxGeometry(size, size, size);
    
    const material = new THREE.MeshStandardMaterial({ 
      map: textures.crate,
      roughness: 0.7,
      metalness: 0.2
    });
    
    const crate = new THREE.Mesh(geometry, material);
    crate.castShadow = true;
    crate.receiveShadow = true;
    
    // Store original properties for respawning
    crate.userData.originalScale = new THREE.Vector3().copy(crate.scale);
    crate.userData.type = 'crate';
    crate.userData.health = 30;
    crate.userData.halfHeight = size / 2;
    crate.userData.collisionRadius = size / 2;
    crate.userData.isDestroyed = false;
    
    return crate;
  };
}

// Add new function for chunk management
function updateTerrainChunks() {
  if (!playerTank) return;
  
  // Get current chunk coordinates based on tank position
  const currentChunkX = Math.floor(playerTank.position.x / chunkSize);
  const currentChunkZ = Math.floor(playerTank.position.z / chunkSize);
  
  // Calculate which chunks should be loaded
  const chunksToLoad = new Set();
  for (let x = -viewDistance; x <= viewDistance; x++) {
    for (let z = -viewDistance; z <= viewDistance; z++) {
      const chunkX = currentChunkX + x;
      const chunkZ = currentChunkZ + z;
      const chunkKey = `${chunkX},${chunkZ}`;
      chunksToLoad.add(chunkKey);
      
      // Create chunk if it doesn't exist
      if (!chunks.has(chunkKey)) {
        createTerrainChunk(chunkX, chunkZ);
      }
    }
  }
  
  // Remove chunks that are too far away
  for (const [chunkKey, chunk] of chunks) {
    if (!chunksToLoad.has(chunkKey)) {
      // Remove all objects in the chunk
      chunk.obstacles.forEach(obstacle => {
        scene.remove(obstacle);
        const index = obstacles.indexOf(obstacle);
        if (index > -1) {
          obstacles.splice(index, 1);
        }
      });
      scene.remove(chunk.terrain);
      chunks.delete(chunkKey);
    }
  }
}

function createTerrainChunk(chunkX, chunkZ) {
  // Calculate chunk position
  const posX = chunkX * chunkSize;
  const posZ = chunkZ * chunkSize;
  
  // Create terrain for this chunk
  const groundGeometry = new THREE.PlaneGeometry(chunkSize, chunkSize, 32, 32);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x4CAF50,
    roughness: 0.8,
    metalness: 0.1
  });
  
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(posX + chunkSize/2, 0, posZ + chunkSize/2);
  ground.receiveShadow = true;
  scene.add(ground);
  
  // Create obstacles for this chunk
  const chunkObstacles = [];
  const obstacleCount = 5 + Math.floor(Math.random() * 5);
  
  for (let i = 0; i < obstacleCount; i++) {
    const obstacleType = Math.floor(Math.random() * 3);
    let obstacle;
    
    switch (obstacleType) {
      case 0: obstacle = createCrate(); break;
      case 1: obstacle = createBarrel(); break;
      case 2: obstacle = createBarrier(); break;
    }
    
    // Position randomly within chunk
    obstacle.position.x = posX + Math.random() * chunkSize;
    obstacle.position.z = posZ + Math.random() * chunkSize;
    obstacle.position.y = obstacle.userData.halfHeight;
    
    scene.add(obstacle);
    obstacles.push(obstacle);
    chunkObstacles.push(obstacle);
  }
  
  // Create trees for this chunk
  const treeCount = 3 + Math.floor(Math.random() * 4);
  for (let i = 0; i < treeCount; i++) {
    const tree = createTree();
    
    // Find a valid position for the tree
    let validPosition = false;
    let attempts = 0;
    const maxAttempts = 10;
    
    while (!validPosition && attempts < maxAttempts) {
      const testX = posX + Math.random() * chunkSize;
      const testZ = posZ + Math.random() * chunkSize;
      
      // Check distance from other obstacles
      let tooClose = false;
      for (const obstacle of chunkObstacles) {
        const dx = testX - obstacle.position.x;
        const dz = testZ - obstacle.position.z;
        const distance = Math.sqrt(dx * dx + dz * dz);
        if (distance < 15) { // Minimum distance between trees and obstacles
          tooClose = true;
          break;
        }
      }
      
      if (!tooClose) {
        tree.position.x = testX;
        tree.position.z = testZ;
        validPosition = true;
      }
      
      attempts++;
    }
    
    if (validPosition) {
      scene.add(tree);
      obstacles.push(tree);
      chunkObstacles.push(tree);
    }
  }
  
  // Store chunk data
  chunks.set(`${chunkX},${chunkZ}`, {
    terrain: ground,
    obstacles: chunkObstacles
  });
}

// Initialize the game when the page loads
window.addEventListener('load', init);
