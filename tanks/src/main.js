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
  tankSpeed: 36,
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
  maxRespawnTime: 15,   // Maximum seconds before respawn
  tankMaxHealth: 500,  // Tank health (5 hits to destroy)
  projectileDamage: 100,  // Damage per hit
  tankRespawnTime: 3,  // Seconds until respawn
  projectileLifetime: 3000,
  maxProjectiles: 5,
  projectileCooldown: 500
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

// WebSocket connection
let ws;
let clientId;
let reconnecting = false;
const otherPlayers = new Map();

// Light pool for managing dynamic lights
const lightPool = {
  lights: [],
  maxLights: 20, // Maximum number of dynamic lights allowed
  inUse: new Set(),

  initialize() {
    // Create pool of reusable lights
    for (let i = 0; i < this.maxLights; i++) {
      const light = new THREE.PointLight(0xFFFF00, 0, 20);
      light.visible = false;
      scene.add(light);
      this.lights.push(light);
    }
  },

  acquire(color, intensity, distance) {
    // Find first available light
    const light = this.lights.find(l => !this.inUse.has(l));
    if (light) {
      light.color.setHex(color);
      light.intensity = intensity;
      light.distance = distance;
      light.visible = true;
      this.inUse.add(light);
      return light;
    }
    return null;
  },

  release(light) {
    if (light && this.inUse.has(light)) {
      light.visible = false;
      this.inUse.delete(light);
    }
  }
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

  // Create UI elements
  createGameUI();

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

  // Add renderer to page with full viewport styling
  const container = document.getElementById('app');
  container.style.margin = '0';
  container.style.padding = '0';
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.overflow = 'hidden';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.appendChild(renderer.domElement);

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

  lightPool.initialize();
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
    // Update camera
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

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

      // Avoid center area for player spawn - increased safe zone
      const distanceFromCenter = position.length();

      // Avoid roads
      const onRoad = (
        (Math.abs(position.x) < 15 && Math.abs(position.z) > 15) ||
        (Math.abs(position.z) < 15 && Math.abs(position.x) > 15)
      );

      // Increased minimum distance from center to 60 units
      if (distanceFromCenter > 60 && !onRoad) {
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
  player.userData.health = settings.tankMaxHealth;
  player.userData.isDestroyed = false;
  player.userData.type = 'tank';

  // Add to scene
  scene.add(player);
  playerTank = player;

  // Initialize orbital controls
  controls.enabled = false;

  // Create and set up the camera
  setupThirdPersonCamera();

  // Initialize health
  player.userData.health = settings.tankMaxHealth;
  player.userData.isDestroyed = false;
  player.userData.type = 'tank';

  console.log('Player tank created with health:', settings.tankMaxHealth);
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

  // Update explosion particles in the main loop
  const explosionGroups = scene.children.filter(child => child.userData.isExplosion);
  for (const group of explosionGroups) {
    group.userData.lifetime += deltaTime;

    if (group.userData.lifetime >= group.userData.maxLifetime) {
      if (group.userData.light) {
        lightPool.release(group.userData.light);
      }
      scene.remove(group);
      continue;
    }

    // Update light position if it exists
    if (group.userData.light) {
      group.userData.light.position.copy(group.position);
      group.userData.light.position.y += 2;
    }

    const lifeRatio = 1 - group.userData.lifetime / group.userData.maxLifetime;
    group.scale.setScalar(lifeRatio);

    group.children.forEach(particle => {
      if (!particle.userData.isExplosionParticle) return;
      particle.position.add(particle.userData.velocity.clone().multiplyScalar(deltaTime));
      particle.userData.velocity.y -= 20 * deltaTime;
    });
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

// Performance-optimized object pools
const objectPools = {
  projectiles: [],
  particles: [],
  maxProjectiles: 20,
  maxParticles: 50
};

// Shared geometries for better performance
const sharedGeometries = {
  projectile: new THREE.SphereGeometry(2, 12, 8),  // Balanced detail
  particle: new THREE.SphereGeometry(0.3, 6, 4)    // Simple but effective particles
};

// Optimized materials with good visual quality
const sharedMaterials = {
  projectile: new THREE.MeshStandardMaterial({
    color: 0xFFFF00,
    emissive: 0xFFFF00,
    emissiveIntensity: 2,
    metalness: 0.3,
    roughness: 0.2
  }),
  particle: new THREE.MeshBasicMaterial({
    color: 0xFF5500,
    emissive: 0xFF5500,
    emissiveIntensity: 1.5,
    transparent: true,
    opacity: 0.8
  })
};

// Get or create pooled object
function getPooledObject(type) {
  const pool = objectPools[type];
  if (!pool) return null;
  
  for (let i = 0; i < pool.length; i++) {
    if (!pool[i].visible) {
      pool[i].visible = true;
      return pool[i];
    }
  }
  
  // Create new object if pool isn't full
  if (type === 'projectiles' && pool.length < objectPools.maxProjectiles) {
    const obj = new THREE.Mesh(sharedGeometries.projectile, sharedMaterials.projectile);
    obj.visible = true;
    pool.push(obj);
    return obj;
  } else if (type === 'particles' && pool.length < objectPools.maxParticles) {
    const obj = new THREE.Mesh(sharedGeometries.particle, sharedMaterials.particle.clone());
    obj.visible = true;
    pool.push(obj);
    return obj;
  }
  
  return null;
}

// Optimized projectile firing
function fireProjectile() {
  if (!playerTank) return;

  const projectile = getPooledObject('projectiles');
  if (!projectile) return;

  const turret = playerTank.userData.turret;
  const tankDirection = new THREE.Vector3(
    Math.sin(playerTank.rotation.y),
    0,
    Math.cos(playerTank.rotation.y)
  );

  // Position projectile at turret
  const turretPosition = turret.getWorldPosition(new THREE.Vector3());
  projectile.position.copy(turretPosition);
  projectile.position.y = turretPosition.y;
  projectile.position.add(tankDirection.multiplyScalar(12)); // Barrel length

  // Set projectile properties
  projectile.userData.direction = tankDirection.clone();
  projectile.userData.speed = settings.projectileSpeed;
  projectile.userData.lifetime = 0;

  // Add light only if we have capacity
  const light = lightPool.acquire(0xFFFF00, 3, 15);
  if (light) {
    projectile.userData.light = light;
    light.position.copy(projectile.position);
  }

  scene.add(projectile);
  projectiles.push(projectile);

  // Quick muzzle flash
  createMuzzleFlash(projectile.position.clone());
}

// Optimized muzzle flash
function createMuzzleFlash(position) {
  const light = lightPool.acquire(0xFFAA00, 3, 8);
  if (light) {
    light.position.copy(position);
    setTimeout(() => lightPool.release(light), 50); // Very quick flash
  }
}

// Efficient projectile update
function updateProjectiles() {
  const removeList = [];
  const currentTime = performance.now();
  
  for (const projectile of projectiles) {
    if (!projectile.visible) continue;

    // Update position
    projectile.position.addScaledVector(projectile.userData.direction, projectile.userData.speed * deltaTime);
    
    // Update light if present
    if (projectile.userData.light) {
      projectile.userData.light.position.copy(projectile.position);
    }

    projectile.userData.lifetime += deltaTime;

    // Force cleanup of old projectiles (over 3 seconds)
    if (projectile.userData.lifetime > 3) {
      removeList.push(projectile);
      continue;
    }

    // Check for collisions
    if (checkProjectileCollisions(projectile)) {
      removeList.push(projectile);
    }
  }

  // Batch remove projectiles
  for (const projectile of removeList) {
    cleanupProjectile(projectile);
  }
}

// Clean up a projectile and its associated resources
function cleanupProjectile(projectile) {
  if (projectile.userData.light) {
    lightPool.release(projectile.userData.light);
    projectile.userData.light = null;
  }
  
  scene.remove(projectile);
  projectile.visible = false;
  
  const index = projectiles.indexOf(projectile);
  if (index > -1) {
    projectiles.splice(index, 1);
  }
}

// Create explosion effect
function createExplosion(position, isLarge = false) {
  const particleCount = isLarge ? 8 : 5;
  const explosionForce = isLarge ? 10 : 6;
  const totalDuration = 500; // Reduced to 0.5 seconds
  const startTime = performance.now();
  const particles = [];

  // Create and track explosion group
  const explosionGroup = new THREE.Group();
  explosionGroup.position.copy(position);
  scene.add(explosionGroup);

  // Quick bright flash
  const light = lightPool.acquire(0xFF5500, isLarge ? 4 : 2, isLarge ? 15 : 10);
  if (light) {
    light.position.copy(position).add(new THREE.Vector3(0, 2, 0));
    setTimeout(() => lightPool.release(light), 100); // Shorter light duration
  }

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    const particle = getPooledObject('particles');
    if (!particle) continue;

    // Random position within explosion radius
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 2;
    particle.position.set(
      Math.cos(angle) * radius,
      Math.random() * 2,
      Math.sin(angle) * radius
    );

    // Set velocity
    const upwardForce = 6 + Math.random() * 4;
    particle.userData.velocity = new THREE.Vector3(
      Math.cos(angle) * explosionForce * Math.random(),
      upwardForce,
      Math.sin(angle) * explosionForce * Math.random()
    );

    particle.userData.lifetime = 0;
    particle.userData.maxLifetime = 0.3; // Shorter particle lifetime

    explosionGroup.add(particle);
    particles.push(particle);
  }

  // Animation cleanup function
  const cleanupExplosion = () => {
    // Remove all particles
    particles.forEach(particle => {
      if (particle.parent) {
        particle.parent.remove(particle);
      }
      particle.visible = false;
    });
    
    // Remove explosion group
    if (explosionGroup.parent) {
      explosionGroup.parent.remove(explosionGroup);
    }
    
    // Release light if still active
    if (light && light.parent) {
      lightPool.release(light);
    }
  };

  // Update function
  const updateExplosion = () => {
    const elapsed = performance.now() - startTime;
    
    // Force cleanup after total duration
    if (elapsed >= totalDuration) {
      cleanupExplosion();
      return;
    }

    // Update particles
    particles.forEach(particle => {
      if (!particle.visible) return;

      particle.userData.lifetime += deltaTime;
      
      // Remove particle if it exceeded its lifetime
      if (particle.userData.lifetime >= particle.userData.maxLifetime) {
        particle.visible = false;
        return;
      }

      // Update position
      particle.position.addScaledVector(particle.userData.velocity, deltaTime);
      particle.userData.velocity.y -= 15 * deltaTime; // Gravity

      // Fade out
      const fadeProgress = particle.userData.lifetime / particle.userData.maxLifetime;
      particle.material.opacity = Math.max(0, 1 - fadeProgress);
    });

    // Continue animation if any particles are still visible
    if (particles.some(p => p.visible)) {
      requestAnimationFrame(updateExplosion);
    } else {
      cleanupExplosion();
    }
  };

  // Start animation
  requestAnimationFrame(updateExplosion);

  // Force cleanup after total duration
  setTimeout(cleanupExplosion, totalDuration);
}

// Check if projectile collides with obstacles or tanks
function checkProjectileCollisions(projectile) {
  // Increased projectile collision radius for more generous hit detection
  const projectileRadius = 3;

  // Check collision with other tanks
  for (const [id, tank] of otherPlayers) {
    if (tank.userData.isDestroyed) continue;

    // Calculate distance from projectile center to tank center
    const distance = projectile.position.distanceTo(tank.position);

    // More generous collision check using combined radii
    const combinedRadius = projectileRadius + tank.userData.collisionRadius;
    if (distance < combinedRadius) {
      // Create impact explosion
      createExplosion(projectile.position.clone(), false);
      
      // Notify server about hit
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'tankHit',
          targetId: id,
          shooterId: clientId,
          damage: settings.projectileDamage,
          position: projectile.position.clone()
        }));
      }

      return true;
    }
  }

  // Check collision with player tank
  if (playerTank && !playerTank.userData.isDestroyed) {
    // Calculate distance from projectile center to player tank center
    const distance = projectile.position.distanceTo(playerTank.position);

    // More generous collision check using combined radii
    const combinedRadius = projectileRadius + playerTank.userData.collisionRadius;
    if (distance < combinedRadius) {
      // Create impact explosion
      createExplosion(projectile.position.clone(), false);
      
      // Notify server about hit
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'tankHit',
          targetId: clientId,
          shooterId: clientId,
          damage: settings.projectileDamage,
          position: projectile.position.clone()
        }));
      }

      return true;
    }
  }

  // Check distance to all obstacles
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];

    // Skip destroyed obstacles
    if (obstacle.userData.isDestroyed) continue;

    // Calculate distance from projectile center to obstacle center
    const distance = projectile.position.distanceTo(obstacle.position);

    // More generous collision check using combined radii
    const combinedRadius = projectileRadius + obstacle.userData.collisionRadius;
    if (distance < combinedRadius) {
      // Apply damage to obstacle
      damageObstacle(obstacle, 1000);

      // If obstacle was explosive, damage nearby obstacles
      if (obstacle.userData.isExplosive) {
        applyExplosionDamage(obstacle.position, 25, 1000);
      }

      return true;
    }
  }

  return false;
}

// Apply damage to an obstacle
function damageObstacle(obstacle, damageAmount) {
  if (!obstacle || obstacle.userData.isDestroyed) return;
  
  obstacle.userData.health -= damageAmount;

  if (obstacle.userData.health <= 0) {
    // Immediately destroy obstacle without any effects
    obstacle.userData.isDestroyed = true;
    obstacle.scale.set(0.1, 0.1, 0.1);

    // Award 1 point for destroying an obstacle
    gameState.score += 1;
    updateUI();

    // If obstacle was explosive, damage nearby obstacles without effects
    if (obstacle.userData.isExplosive) {
      applyExplosionDamage(obstacle.position, 25, 1000);
    }

    // Add to respawn queue
    addToRespawnQueue(obstacle);

    // Notify server about score update
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'update',
        score: gameState.score
      }));
    }
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
  // Check if tank is too close to the obstacle's position
  if (playerTank) {
    const distance = obstacle.position.distanceTo(playerTank.position);
    if (distance < settings.tankCollisionRadius + obstacle.userData.collisionRadius + 5) {
      const respawnTime = clock.elapsedTime + 2;
      respawnQueue.push({ obstacle, respawnTime });
      return;
    }
  }

  // Reset properties immediately
  obstacle.userData.isDestroyed = false;
  obstacle.userData.health = obstacle.userData.type === 'barrel' ? 20 :
    obstacle.userData.type === 'crate' ? 30 :
    obstacle.userData.type === 'tree' ? 40 : 50;

  // Reset scale immediately
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
    }
  }
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
  // Update health bar
  const healthBar = document.getElementById('health-bar');
  if (healthBar) {
    const healthPercent = Math.max(0, Math.min(100, gameState.health));
    healthBar.style.width = `${healthPercent}%`;
    
    // Update health bar color based on health level
    healthBar.className = '';
    if (healthPercent <= 25) {
      healthBar.classList.add('danger');
    } else if (healthPercent <= 50) {
      healthBar.classList.add('warning');
    }
  }

  // Update score display
  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score: ${gameState.score}`;
  }

  // Check for game over
  if (gameState.health <= 0 && !gameState.isGameOver) {
    gameOver();
  }
}

// Game over function
function gameOver(destroyedBy) {
  gameState.isGameOver = true;
  isGameActive = false;

  // Disconnect from server
  if (ws) {
    console.log('Disconnecting from server due to tank destruction');
    ws.close();
    ws = null;
  }

  // Show game over screen
  const gameOverScreen = document.createElement('div');
  gameOverScreen.id = 'game-over';
  gameOverScreen.style.position = 'fixed';
  gameOverScreen.style.top = '0';
  gameOverScreen.style.left = '0';
  gameOverScreen.style.width = '100%';
  gameOverScreen.style.height = '100%';
  gameOverScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  gameOverScreen.style.display = 'flex';
  gameOverScreen.style.flexDirection = 'column';
  gameOverScreen.style.justifyContent = 'center';
  gameOverScreen.style.alignItems = 'center';
  gameOverScreen.style.color = 'white';
  gameOverScreen.style.fontSize = '24px';
  gameOverScreen.style.zIndex = '1000';

  const gameOverText = document.createElement('h1');
  gameOverText.textContent = destroyedBy === clientId ? 'SELF DESTRUCTION!' : 'YOUR TANK WAS DESTROYED!';
  gameOverText.style.marginBottom = '20px';
  gameOverText.style.fontSize = '36px';
  gameOverText.style.color = '#FF4444';
  gameOverText.style.textAlign = 'center'; // Center text

  const scoreText = document.createElement('p');
  scoreText.textContent = `Final Score: ${gameState.score}`;
  scoreText.style.marginBottom = '40px';
  scoreText.style.fontSize = '24px';
  scoreText.style.textAlign = 'center'; // Center text

  const restartButton = document.createElement('button');
  restartButton.textContent = 'Play Again';
  restartButton.style.padding = '15px 30px';
  restartButton.style.fontSize = '20px';
  restartButton.style.backgroundColor = '#4CAF50';
  restartButton.style.border = 'none';
  restartButton.style.borderRadius = '5px';
  restartButton.style.color = 'white';
  restartButton.style.cursor = 'pointer';
  restartButton.style.transition = 'background-color 0.2s';
  
  restartButton.addEventListener('mouseover', () => {
    restartButton.style.backgroundColor = '#45a049';
  });
  
  restartButton.addEventListener('mouseout', () => {
    restartButton.style.backgroundColor = '#4CAF50';
  });
  
  restartButton.addEventListener('click', restartGame);

  gameOverScreen.appendChild(gameOverText);
  gameOverScreen.appendChild(scoreText);
  gameOverScreen.appendChild(restartButton);
  document.body.appendChild(gameOverScreen);

  // Stop heartbeat
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }
}

// Restart game
function restartGame() {
  // Reload the page to restart
  window.location.reload();
}

// Set up asset loading
function setupLoading() {
  // Get loading elements
  const loadingScreen = document.getElementById('loading-screen');
  const loadingBarFill = document.getElementById('loading-bar-fill');

  // Create texture loader with loading manager
  const manager = new THREE.LoadingManager();

  // Track loading progress
  manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    const progress = itemsLoaded / itemsTotal * 100;
    loadingBarFill.style.width = `${progress}%`;
  };

  // Handle loading complete
  manager.onLoad = function () {
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

  connectToServer();
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
  createSkybox = function () {
    // Just set the background color, no walls or geometry
    scene.background = new THREE.Color('#87CEEB');
  };

  // Override createTerrain function
  createTerrain = function () {
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
  createRoads = function () {
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
  createCrate = function () {
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
  ground.position.set(posX + chunkSize / 2, 0, posZ + chunkSize / 2);
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
    let validPosition = false;
    let attempts = 0;
    const maxAttempts = 10;

    while (!validPosition && attempts < maxAttempts) {
      const testX = posX + Math.random() * chunkSize;
      const testZ = posZ + Math.random() * chunkSize;

      // Calculate distance from origin (tank spawn point)
      const distanceFromOrigin = Math.sqrt(testX * testX + testZ * testZ);

      // Check if position is too close to tank spawn point (increased safe zone)
      if (distanceFromOrigin < 60) {
        attempts++;
        continue;
      }

      // Check distance from other obstacles
      let tooClose = false;
      for (const existingObstacle of chunkObstacles) {
        const dx = testX - existingObstacle.position.x;
        const dz = testZ - existingObstacle.position.z;
        const distance = Math.sqrt(dx * dx + dz * dz);
        if (distance < 15) { // Minimum distance between obstacles
          tooClose = true;
          break;
        }
      }

      if (!tooClose) {
        obstacle.position.x = testX;
        obstacle.position.z = testZ;
        obstacle.position.y = obstacle.userData.halfHeight;
        validPosition = true;
      }

      attempts++;
    }

    if (validPosition) {
      scene.add(obstacle);
      obstacles.push(obstacle);
      chunkObstacles.push(obstacle);
    }
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

      // Calculate distance from origin (tank spawn point)
      const distanceFromOrigin = Math.sqrt(testX * testX + testZ * testZ);

      // Check if position is too close to tank spawn point (increased safe zone)
      if (distanceFromOrigin < 60) {
        attempts++;
        continue;
      }

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

// Connect to WebSocket server
function connectToServer() {
  // Don't create a new connection if we already have one
  if (ws && ws.readyState === WebSocket.OPEN) {
    console.log('Already connected to server');
    return;
  }

  // Close existing connection if any
  if (ws) {
    ws.close();
    ws = null;
  }

  // Determine WebSocket URL based on environment
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const wsUrl = `${protocol}//${window.location.host}/socket`;
  
  console.log('Attempting to connect to WebSocket server at:', wsUrl);
  ws = new WebSocket(wsUrl);

  // Add connection timeout
  const connectionTimeout = setTimeout(() => {
    if (ws && ws.readyState !== WebSocket.OPEN) {
      console.log('Connection timeout, retrying...');
      ws.close();
      setTimeout(connectToServer, 3000);
    }
  }, 5000);

  ws.onopen = () => {
    console.log('Successfully connected to WebSocket server');
    clearTimeout(connectionTimeout);
    reconnecting = false;
    startHeartbeat();

    // Clear all other players
    otherPlayers.forEach((player, id) => {
      scene.remove(player);
    });
    otherPlayers.clear();
  };

  ws.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      handleServerMessage(message);
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  };

  ws.onclose = (event) => {
    console.log('Disconnected from server', event.code, event.reason);

    // Only attempt reconnection if:
    // 1. The tab is visible
    // 2. The connection wasn't closed intentionally
    // 3. We're not already trying to reconnect
    if (!document.hidden && !reconnecting) {
      console.log('Tab is visible, attempting reconnection');
      reconnecting = true;
      setTimeout(connectToServer, 3000);
    }

    // Clear all other players
    otherPlayers.forEach((player, id) => {
      scene.remove(player);
    });
    otherPlayers.clear();
  };

  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
}

// Add heartbeat to keep connection alive
let heartbeatInterval;
function startHeartbeat() {
  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
  }

  heartbeatInterval = setInterval(() => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: 'ping' }));
    }
  }, 30000); // Send heartbeat every 30 seconds
}

// Modify the visibility change handler
function handleVisibilityChange() {
  if (document.hidden) {
    // Tab is hidden, stop heartbeat but keep connection
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
    }
  } else {
    // Tab is visible again, restart heartbeat
    startHeartbeat();
    
    // If we're disconnected, reconnect
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      console.log('Tab visible, reconnecting');
      connectToServer();
    }
  }
}

// Handle messages from server
function handleServerMessage(message) {
  if (!message || !message.type) {
    console.error('Invalid message received:', message);
    return;
  }

  switch (message.type) {
    case 'init':
      if (!message.id) {
        console.error('Invalid init message, no client ID:', message);
        return;
      }

      clientId = message.id;
      console.log('Initialized with client ID:', clientId);

      // Clear all existing other players
      otherPlayers.forEach((player, id) => {
        scene.remove(player);
      });
      otherPlayers.clear();

      // Add other players from the server's client list
      if (Array.isArray(message.clients)) {
        console.log('Adding other players:', message.clients);
        message.clients.forEach(client => {
          if (client && client.id && client.id !== clientId) {
            console.log('Adding player:', client.id);
            addOtherPlayer(client);
          }
        });
      }
      break;

    case 'playerJoined':
      if (message.client && message.client.id && message.client.id !== clientId) {
        console.log('New player joined:', message.client.id); // Log player ID on join
        addOtherPlayer(message.client);
      }
      break;

    case 'playerLeft':
      if (message.id && message.id !== clientId) {
        console.log('Player left:', message.id); // Log player ID on leave
        removeOtherPlayer(message.id);
      }
      break;

    case 'playerUpdate':
      if (message.id && message.id !== clientId) {
        updateOtherPlayer(message);
      }
      break;

    case 'projectile':
      if (message.id !== clientId) {
        handleOtherPlayerProjectile(message);
      }
      break;

    case 'explosion':
      createExplosion(
        new THREE.Vector3(
          message.position.x,
          message.position.y,
          message.position.z
        ),
        message.isLarge
      );
      break;

    case 'obstacleDestroyed':
      handleObstacleDestroyed(message);
      break;

    case 'tankDamaged':
      if (message.id === clientId) {
        // Update our tank's health
        if (playerTank) {
          playerTank.userData.health = message.health;
          gameState.health = (message.health / settings.tankMaxHealth) * 100;
          updateUI();
        }
      } else {
        // Update other tank's health
        const otherTank = otherPlayers.get(message.id);
        if (otherTank) {
          otherTank.userData.health = message.health;
        }
      }
      break;

    case 'tankDestroyed':
      if (message.id === clientId) {
        // Our tank was destroyed - show game over and disconnect
        if (playerTank && !playerTank.userData.isDestroyed) {
          playerTank.userData.health = 0;
          playerTank.userData.isDestroyed = true;
          createExplosion(
            new THREE.Vector3(
              message.position.x,
              message.position.y,
              message.position.z
            ), 
            true
          );
          scene.remove(playerTank);
          
          // Disconnect and show game over
          gameOver(message.destroyedBy);
        }
      } else {
        // Another player's tank was destroyed
        const otherTank = otherPlayers.get(message.id);
        if (otherTank && !otherTank.userData.isDestroyed) {
          otherTank.userData.health = 0;
          otherTank.userData.isDestroyed = true;
          createExplosion(
            new THREE.Vector3(
              message.position.x,
              message.position.y,
              message.position.z
            ), 
            true
          );
          scene.remove(otherTank);
          otherPlayers.delete(message.id);

          // Award points if we destroyed this tank
          if (message.destroyedBy === clientId) {
            gameState.score += 100;
            updateUI();
          }
        }
      }
      break;

    case 'tankHit':
      // Handle tank being hit
      if (message.targetId === clientId) {
        // Our tank was hit
        if (playerTank && !playerTank.userData.isDestroyed) {
          // Create impact explosion
          createExplosion(
            new THREE.Vector3(
              message.position.x,
              message.position.y,
              message.position.z
            ), 
            false
          );
          
          // Get current health and reduce it
          const currentHealth = playerTank.userData.health || settings.tankMaxHealth;
          const newHealth = Math.max(0, currentHealth - message.damage);
          
          console.log(`My tank hit by player ${message.shooterId} for ${message.damage} damage.`); // Log when my tank is hit
          
          console.log(`Tank hit! Current Health: ${currentHealth}, Damage: ${message.damage}, New Health: ${newHealth}`);
          
          // Update tank health
          playerTank.userData.health = newHealth;
          gameState.health = (newHealth / settings.tankMaxHealth) * 100;
          updateUI();

          // Check if destroyed
          if (newHealth <= 0 && !playerTank.userData.isDestroyed) {
            console.log('Tank destroyed! Final health:', newHealth);
            playerTank.userData.isDestroyed = true;

            // Notify server about destruction
            if (ws && ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({
                type: 'tankDestroyed',
                id: clientId,
                destroyedBy: message.shooterId,
                position: playerTank.position.clone()
              }));
            }
          }
        }
      } else {
        // Another tank was hit
        const otherTank = otherPlayers.get(message.targetId);
        if (otherTank && !otherTank.userData.isDestroyed) {
          // Create impact explosion
          createExplosion(
            new THREE.Vector3(
              message.position.x,
              message.position.y,
              message.position.z
            ), 
            false
          );
          
          // Get current health and reduce it
          const currentHealth = otherTank.userData.health || settings.tankMaxHealth;
          const newHealth = Math.max(0, currentHealth - message.damage);
          
          console.log(`Player ${message.targetId}'s tank hit by player ${message.shooterId} for ${message.damage} damage.`); // Log when another tank is hit
          console.log(`  -> Other tank (${message.targetId}) health after hit (client-side): ${newHealth}`);
          
          console.log(`Other tank hit! Current Health: ${currentHealth}, Damage: ${message.damage}, New Health: ${newHealth}`);
          
          // Update tank health
          otherTank.userData.health = newHealth;

          // Do NOT remove the tank here - wait for server confirmation of destruction
        }
      }
      break;

    case 'tankRespawned':
      if (message.id !== clientId) {
        console.log('Tank respawned:', message);
        // Create new tank for respawned player
        const playerData = {
          id: message.id,
          position: message.position,
          rotation: message.rotation,
          health: settings.tankMaxHealth
        };
        addOtherPlayer(playerData);
      }
      break;
  }
}

// Create tank for other players
function createOtherPlayerTank() {
  // Create tank group
  const otherTank = new THREE.Group();

  // Create tank body
  const bodyGeometry = new THREE.BoxGeometry(10, 4, 15);
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0x8B0000, // Different color to distinguish from main player
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
    color: 0x8B0000,
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
  otherTank.add(body);
  otherTank.add(turret);
  otherTank.add(leftTread);
  otherTank.add(rightTread);

  // Store turret for rotation
  otherTank.userData.turret = turret;
  otherTank.userData.collisionRadius = 7.5;
  otherTank.userData.health = settings.tankMaxHealth; // Set same health as player tank
  otherTank.userData.isDestroyed = false;
  otherTank.userData.type = 'tank';

  // Add to scene
  scene.add(otherTank);

  // Initialize health
  otherTank.userData.health = settings.tankMaxHealth;
  otherTank.userData.isDestroyed = false;
  otherTank.userData.type = 'tank';

  console.log('Other tank created:', otherTank); // Log created tank object
  console.log('Other tank visibility:', otherTank.visible);

  return otherTank;
}

// Add other player to the scene
function addOtherPlayer(playerData) {
  console.log('Attempting to add player:', playerData.id, 'with data:', playerData); // Log entry

  // Remove any existing tank for this player
  removeOtherPlayer(playerData.id);

  // Create new tank for other player
  const otherTank = createOtherPlayerTank();
  if (!otherTank) {
    console.error('Failed to create tank mesh for player:', playerData.id);
    return;
  }
  otherTank.userData.id = playerData.id;

  // Set initial position and rotation
  if (playerData.position) {
    otherTank.position.set(
      playerData.position.x || 0,
      playerData.position.y || 0,
      playerData.position.z || 0
    );
  }

  if (playerData.rotation) {
    otherTank.rotation.y = playerData.rotation.y || 0;
  }

  // Store tank's health
  otherTank.userData.health = playerData.health || settings.tankMaxHealth;

  // Add to scene and check parent
  scene.add(otherTank);
  if (otherTank.parent === scene) {
    console.log(`Successfully added tank ${playerData.id} to the scene.`);
  } else {
    console.error(`Failed to add tank ${playerData.id} to the scene. Current parent:`, otherTank.parent);
  }

  // Add to scene and store in otherPlayers map
  otherPlayers.set(playerData.id, otherTank);
  console.log('Other players map after add:', Array.from(otherPlayers.keys()));
}

// Remove other player from the scene
function removeOtherPlayer(playerId) {
  const player = otherPlayers.get(playerId);
  if (player) {
    console.log(`Attempting to remove player ${playerId}. Current parent:`, player.parent); // Log removal attempt
    scene.remove(player);
    if (player.parent !== scene) {
      console.log(`Successfully removed player ${playerId} from scene.`);
    } else {
      console.error(`Failed to remove player ${playerId} from scene.`);
    }
    otherPlayers.delete(playerId);
    console.log('Current other players map after removal:', Array.from(otherPlayers.keys()));
  }
}

// Add timestamp and rate limiting for updates
let lastUpdateTime = 0;
const UPDATE_INTERVAL = 1000 / 30; // 30 updates per second

// Update other player's position and rotation
function updateOtherPlayer(playerData) {
  const otherTank = otherPlayers.get(playerData.id);
  
  if (!otherTank) {
    console.log('Creating missing tank for player:', playerData.id);
    addOtherPlayer(playerData);
    return;
  }

  // Store the target state
  otherTank.userData.targetPosition = new THREE.Vector3(
    playerData.position.x,
    playerData.position.y,
    playerData.position.z
  );
  
  otherTank.userData.targetRotation = playerData.rotation.y;
  
  // Initialize start position and time if not set
  if (!otherTank.userData.startPosition) {
    otherTank.userData.startPosition = otherTank.position.clone();
    otherTank.userData.startRotation = otherTank.rotation.y;
    otherTank.userData.interpolationStart = performance.now();
  } else {
    // Update start state
    otherTank.userData.startPosition.copy(otherTank.position);
    otherTank.userData.startRotation = otherTank.rotation.y;
    otherTank.userData.interpolationStart = performance.now();
  }

  // Update health immediately
  if (playerData.health !== undefined) {
    otherTank.userData.health = playerData.health;
  }
}

// Add smooth interpolation in the animation loop
function updateOtherPlayers() {
  const now = performance.now();
  
  otherPlayers.forEach((tank) => {
    if (tank.userData.targetPosition && tank.userData.interpolationStart) {
      const progress = Math.min(
        (now - tank.userData.interpolationStart) / UPDATE_INTERVAL,
        1
      );
      
      // Smooth position interpolation
      tank.position.lerpVectors(
        tank.userData.startPosition,
        tank.userData.targetPosition,
        progress
      );
      
      // Smooth rotation interpolation
      let startRot = tank.userData.startRotation;
      let targetRot = tank.userData.targetRotation;
      
      // Ensure we rotate the shortest direction
      while (targetRot - startRot > Math.PI) targetRot -= Math.PI * 2;
      while (targetRot - startRot < -Math.PI) targetRot += Math.PI * 2;
      
      tank.rotation.y = startRot + (targetRot - startRot) * progress;
    }
  });
}

// Modify updatePlayerTank to include rate limiting
const originalUpdatePlayerTank = updatePlayerTank;
updatePlayerTank = function () {
  originalUpdatePlayerTank();

  const now = performance.now();
  if (ws && ws.readyState === WebSocket.OPEN && playerTank && 
      now - lastUpdateTime >= UPDATE_INTERVAL) {
    lastUpdateTime = now;
    ws.send(JSON.stringify({
      type: 'update',
      position: {
        x: playerTank.position.x,
        y: playerTank.position.y,
        z: playerTank.position.z
      },
      rotation: { y: playerTank.rotation.y },
      health: gameState.health,
      score: gameState.score,
      timestamp: now
    }));
  }
};

// Add updateOtherPlayers to the animation loop
const originalAnimate = animate;
animate = function () {
  updateOtherPlayers();
  originalAnimate();
};

// Handle projectile fired by other player
function handleOtherPlayerProjectile(projectileData) {
  // Use the object pool to get a projectile
  const projectile = getPooledObject('projectiles');
  if (!projectile) return; // No available projectiles in the pool

  const position = new THREE.Vector3(
    projectileData.position.x,
    projectileData.position.y,
    projectileData.position.z
  );
  const direction = new THREE.Vector3(
    projectileData.direction.x,
    projectileData.direction.y,
    projectileData.direction.z
  );

  // Set projectile properties from received data
  projectile.position.copy(position);
  projectile.userData.direction = direction.clone();
  projectile.userData.speed = projectileData.speed || settings.projectileSpeed; // Use default if speed is missing
  projectile.userData.lifetime = 0; // Reset lifetime

  // Add a temporary light if available (similar to local fire)
  const light = lightPool.acquire(0xFFFF00, 3, 15);
  if (light) {
    projectile.userData.light = light;
    light.position.copy(projectile.position);
  }

  // Add to scene and projectiles array for updates/collisions
  scene.add(projectile);
  projectiles.push(projectile);
}

// Handle destroyed obstacle
function handleObstacleDestroyed(data) {
  const obstacle = obstacles.find(obs =>
    obs.position.distanceTo(new THREE.Vector3(
      data.position.x,
      data.position.y,
      data.position.z
    )) < 1
  );

  if (obstacle) {
    // Apply damage without effects
    damageObstacle(obstacle, 1000);
  }
}

// Modify fireProjectile to broadcast to other players
const originalFireProjectile = fireProjectile;
fireProjectile = function () {
  originalFireProjectile();

  if (ws && ws.readyState === WebSocket.OPEN && playerTank) {
    const projectile = projectiles[projectiles.length - 1];
    ws.send(JSON.stringify({
      type: 'projectile',
      position: projectile.position,
      direction: projectile.userData.direction,
      speed: projectile.userData.speed
    }));
  }
};

// Modify createExplosion to broadcast to other players
const originalCreateExplosion = createExplosion;
createExplosion = function (position, isLarge) {
  originalCreateExplosion(position, isLarge);

  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      type: 'explosion',
      position: position,
      isLarge: isLarge
    }));
  }
};

// Modify damageObstacle to broadcast destroyed obstacles
const originalDamageObstacle = damageObstacle;
damageObstacle = function (obstacle, damageAmount) {
  const wasAlive = !obstacle.userData.isDestroyed;
  originalDamageObstacle(obstacle, damageAmount);

  if (wasAlive && obstacle.userData.isDestroyed && ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      type: 'obstacleDestroyed',
      obstacleId: obstacles.indexOf(obstacle),
      position: obstacle.position
    }));
  }
};

// Connect to server when game starts
const originalStartGame = startGame;
startGame = function () {
  originalStartGame();
  connectToServer();
};

// Initialize the game when the page loads
window.addEventListener('load', init);

// Add visibility change handler at the top level with other event listeners
window.addEventListener('visibilitychange', handleVisibilityChange);

// Create game UI elements
function createGameUI() {
  // Remove any existing UI
  const existingUI = document.getElementById('game-ui');
  if (existingUI) {
    existingUI.remove();
  }

  // Create game UI container
  const gameUI = document.createElement('div');
  gameUI.id = 'game-ui';
  
  // Create health bar container
  const healthBarContainer = document.createElement('div');
  healthBarContainer.id = 'health-bar-container';
  
  // Create health bar
  const healthBar = document.createElement('div');
  healthBar.id = 'health-bar';
  healthBar.style.width = '100%';
  healthBarContainer.appendChild(healthBar);
  
  // Create score display
  const scoreDisplay = document.createElement('div');
  scoreDisplay.id = 'score-display';
  scoreDisplay.textContent = 'Score: 0';
  
  // Add elements to UI container
  gameUI.appendChild(healthBarContainer);
  gameUI.appendChild(scoreDisplay);
  
  // Add UI container to document
  document.body.appendChild(gameUI);

  // Initial UI update
  updateUI();
}

// Apply damage to a tank
function damageTank(tank, damageAmount) {
  if (!tank || tank.userData.isDestroyed) return;

  tank.userData.health -= damageAmount;

  // Update UI if it's the player's tank
  if (tank === playerTank) {
    gameState.health = (tank.userData.health / settings.tankMaxHealth) * 100;
    updateUI();

    // Notify server about damage taken
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({
        type: 'tankDamaged',
        id: clientId,
        health: tank.userData.health,
        position: tank.position
      }));
    }
  }

  // Check if tank is destroyed (health <= 0)
  if (tank.userData.health <= 0 && !tank.userData.isDestroyed) {
    tank.userData.isDestroyed = true;

    // Create destruction effect
    createExplosion(tank.position.clone(), true);

    // Handle local tank destruction
    if (tank === playerTank) {
      // Notify server about our tank being destroyed
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'tankDestroyed',
          id: clientId,
          position: tank.position,
          destroyedBy: clientId
        }));
      }
      
      // Remove tank and show game over
      scene.remove(tank);
      gameOver();
    } else {
      // This is another player's tank
      scene.remove(tank);
      setTimeout(() => respawnTank(tank), settings.tankRespawnTime * 1000);
      
      // Award points and notify server
      gameState.score += 100;
      updateUI();
      
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({
          type: 'tankDestroyed',
          id: tank.userData.id,
          position: tank.position,
          destroyedBy: clientId
        }));
      }
    }
  }
}

// Respawn a tank
function respawnTank(tank) {
  if (!tank || !tank.userData.id) return;

  // Reset tank properties
  tank.userData.health = settings.tankMaxHealth;
  tank.userData.isDestroyed = false;

  // Find a valid spawn position
  let validPosition = false;
  let spawnPosition = new THREE.Vector3();
  let attempts = 0;
  const maxAttempts = 10;

  while (!validPosition && attempts < maxAttempts) {
    // Generate random position within a reasonable range
    spawnPosition.set(
      (Math.random() - 0.5) * 400,
      0,
      (Math.random() - 0.5) * 400
    );

    // Check distance from other tanks
    let tooClose = false;
    
    // Check distance from player tank
    if (playerTank && !playerTank.userData.isDestroyed) {
      const distanceToPlayer = spawnPosition.distanceTo(playerTank.position);
      if (distanceToPlayer < 60) {
        tooClose = true;
      }
    }

    // Check distance from other tanks
    if (!tooClose) {
      for (const [id, otherTank] of otherPlayers) {
        if (otherTank !== tank && !otherTank.userData.isDestroyed) {
          const distanceToOther = spawnPosition.distanceTo(otherTank.position);
          if (distanceToOther < 60) {
            tooClose = true;
            break;
          }
        }
      }
    }

    if (!tooClose) {
      validPosition = true;
    }

    attempts++;
  }

  // Set position and rotation
  tank.position.copy(spawnPosition);
  tank.rotation.set(0, Math.random() * Math.PI * 2, 0);

  // Create respawn effect
  createRespawnEffect(tank.position.clone());

  // Notify other players about the respawn
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({
      type: 'tankRespawned',
      id: tank.userData.id,
      position: tank.position.clone(),
      rotation: { y: tank.rotation.y }
    }));
  }
}

// Create a visual effect for tank respawning
function createRespawnEffect(position) {
  // Create a light flash
  const light = lightPool.acquire(0x00FF00, 4, 20);
  if (light) {
    light.position.copy(position).add(new THREE.Vector3(0, 5, 0));
    setTimeout(() => lightPool.release(light), 1000);
  }

  // Create particles rising from the ground
  const particleCount = 20;
  const particles = new THREE.Group();
  particles.position.copy(position);

  for (let i = 0; i < particleCount; i++) {
    const particle = new THREE.Mesh(
      new THREE.SphereGeometry(0.3),
      new THREE.MeshBasicMaterial({
        color: 0x00FF00,
        transparent: true,
        opacity: 0.8
      })
    );

    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 5;
    particle.position.set(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    );

    particles.add(particle);
  }

  scene.add(particles);

  // Animate particles
  let time = 0;
  function animateParticles() {
    time += 0.05;
    particles.children.forEach((particle, i) => {
      const angle = (i / particleCount) * Math.PI * 2;
      particle.position.y = time * 10;
      particle.position.x = Math.cos(angle + time) * (5 - time/2);
      particle.position.z = Math.sin(angle + time) * (5 - time/2);
      particle.material.opacity = Math.max(0, 1 - time/2);
    });

    if (time < 2) {
      requestAnimationFrame(animateParticles);
    } else {
      scene.remove(particles);
      particles.children.forEach(particle => {
        particle.geometry.dispose();
        particle.material.dispose();
      });
    }
  }

  animateParticles();
}

// Track active animations
const activeAnimations = new Map();

// Clean up function for animations
function cleanupAnimation(objectId) {
  const animationData = activeAnimations.get(objectId);
  if (animationData) {
    if (animationData.frameId) {
      cancelAnimationFrame(animationData.frameId);
    }
    if (animationData.timeoutId) {
      clearTimeout(animationData.timeoutId);
    }
    activeAnimations.delete(objectId);
  }
}
