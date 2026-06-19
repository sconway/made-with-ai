import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';

// Global variables
let scene, camera, renderer, controls;
let isTabVisible = !document.hidden;
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

const perf = {
  pixelRatio: Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2),
  antialias: !isMobile,
  shadowMapSize: isMobile ? 512 : 1024,
  castShadows: !isMobile,
  cloudSpheres: isMobile ? 4 : 7,
  cloudSegments: isMobile ? 6 : 10,
  terrainSegments: isMobile ? 20 : 32,
  mountainSegments: isMobile ? 10 : 16,
  treeSegments: isMobile ? 6 : 10,
  tankSegments: isMobile ? 8 : 12
};

// Shared GPU resources to reduce draw-call overhead
const sharedAssets = {
  terrainMaterial: null,
  terrainGeometry: null,
  cloudMaterial: null,
  cloudGeometry: null,
  treeTrunkGeometry: null,
  treeTrunkMaterial: null,
  treeFoliageGeometry: null,
  treeFoliageMaterial: null,
  treeFoliageDarkMaterial: null,
  crateMaterial: null,
  crateTrimMaterial: null,
  barrelMaterial: null,
  barrelRingMaterial: null,
  barrierMaterial: null,
  barrierStripeMaterial: null,
  mountainMaterial: null,
  mountainRockMaterial: null,
  snowMaterial: null,
  rockMaterial: null,
  bushMaterial: null,
  tankLowerHullGeometry: null,
  tankUpperHullGeometry: null,
  tankGlacisGeometry: null,
  tankTurretGeometry: null,
  tankCupolaGeometry: null,
  tankMantletGeometry: null,
  tankBarrelGeometry: null,
  tankMuzzleGeometry: null,
  tankTrackPlateGeometry: null,
  tankWheelGeometry: null,
  tankExhaustGeometry: null,
  tankAntennaGeometry: null,
  tankHeadlightGeometry: null,
  barrelRingGeometry: null,
  rockGeometry: null,
  bushGeometry: null
};

const _cloudMovement = new THREE.Vector3();
const _interpPos = new THREE.Vector3();
let lastHealthPercent = 100;
let respawnQueue = [];
let chunks = new Map(); // Store active terrain chunks
const chunkSize = 200; // Size of each terrain chunk
const viewDistance = 2; // How many chunks to load in each direction
const loadedChunks = new Set(); // Track currently loaded chunk coordinates
let clientMessageCounter = 0; // Counter for unique message IDs

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
  projectileSpeed: 360,
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

function initSharedAssets(textures = {}) {
  sharedAssets.terrainMaterial = new THREE.MeshStandardMaterial({
    map: textures.grass || null,
    normalMap: textures.grassNormal || null,
    normalScale: new THREE.Vector2(0.6, 0.6),
    color: textures.grass ? 0xffffff : 0x4a7c3f,
    roughness: 0.92,
    metalness: 0.02
  });

  sharedAssets.terrainGeometry = new THREE.PlaneGeometry(
    chunkSize,
    chunkSize,
    perf.terrainSegments,
    perf.terrainSegments
  );

  sharedAssets.cloudMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.88,
    depthWrite: false
  });
  sharedAssets.cloudGeometry = new THREE.SphereGeometry(1, perf.cloudSegments, perf.cloudSegments);

  sharedAssets.treeTrunkGeometry = new THREE.CylinderGeometry(0.9, 1.4, 10, perf.treeSegments);
  sharedAssets.treeTrunkMaterial = new THREE.MeshStandardMaterial({ color: 0x5c3d2e, roughness: 0.95, metalness: 0 });
  sharedAssets.treeFoliageGeometry = new THREE.ConeGeometry(1, 1, perf.treeSegments);
  sharedAssets.treeFoliageMaterial = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.95, metalness: 0 });
  sharedAssets.treeFoliageDarkMaterial = new THREE.MeshStandardMaterial({ color: 0x1b4332, roughness: 0.95, metalness: 0 });

  sharedAssets.crateMaterial = new THREE.MeshStandardMaterial({
    map: textures.crate || null,
    color: textures.crate ? 0xffffff : 0x8b5a2b,
    roughness: 0.82,
    metalness: 0.08
  });
  sharedAssets.crateTrimMaterial = new THREE.MeshStandardMaterial({ color: 0x4e342e, roughness: 0.9, metalness: 0.05 });

  sharedAssets.barrelMaterial = new THREE.MeshStandardMaterial({ color: 0xb71c1c, roughness: 0.45, metalness: 0.55 });
  sharedAssets.barrelRingMaterial = new THREE.MeshStandardMaterial({ color: 0x424242, roughness: 0.35, metalness: 0.7 });

  sharedAssets.barrierMaterial = new THREE.MeshStandardMaterial({ color: 0x757575, roughness: 0.88, metalness: 0.12 });
  sharedAssets.barrierStripeMaterial = new THREE.MeshStandardMaterial({ color: 0xf9a825, roughness: 0.7, metalness: 0.1 });

  sharedAssets.mountainMaterial = new THREE.MeshStandardMaterial({ color: 0x4a4f52, roughness: 0.95, metalness: 0.05, flatShading: true });
  sharedAssets.mountainRockMaterial = new THREE.MeshStandardMaterial({ color: 0x3d4346, roughness: 0.98, metalness: 0.03, flatShading: true });
  sharedAssets.snowMaterial = new THREE.MeshStandardMaterial({ color: 0xeceff1, roughness: 0.98, metalness: 0, flatShading: true });

  sharedAssets.rockMaterial = new THREE.MeshStandardMaterial({ color: 0x616161, roughness: 0.95, metalness: 0.08, flatShading: true });
  sharedAssets.bushMaterial = new THREE.MeshStandardMaterial({ color: 0x40916c, roughness: 0.95, metalness: 0 });
  sharedAssets.rockGeometry = new THREE.DodecahedronGeometry(1, 0);
  sharedAssets.bushGeometry = new THREE.IcosahedronGeometry(1, 0);

  const ts = perf.tankSegments;
  sharedAssets.tankLowerHullGeometry = new THREE.BoxGeometry(10.5, 3.2, 16);
  sharedAssets.tankUpperHullGeometry = new THREE.BoxGeometry(8.5, 2.4, 11);
  sharedAssets.tankGlacisGeometry = new THREE.BoxGeometry(9.5, 0.7, 4.5);
  sharedAssets.tankTurretGeometry = new THREE.CylinderGeometry(3.8, 4.3, 3, ts);
  sharedAssets.tankCupolaGeometry = new THREE.CylinderGeometry(1.3, 1.5, 1, Math.max(6, ts - 2));
  sharedAssets.tankMantletGeometry = new THREE.CylinderGeometry(1.5, 1.5, 1.4, ts);
  sharedAssets.tankBarrelGeometry = new THREE.CylinderGeometry(0.55, 0.6, 10, ts);
  sharedAssets.tankMuzzleGeometry = new THREE.CylinderGeometry(0.75, 0.55, 2, ts);
  sharedAssets.tankTrackPlateGeometry = new THREE.BoxGeometry(2.5, 4.2, 17);
  sharedAssets.tankWheelGeometry = new THREE.CylinderGeometry(1.05, 1.05, 0.95, ts);
  sharedAssets.tankExhaustGeometry = new THREE.BoxGeometry(0.9, 1.8, 0.9);
  sharedAssets.tankAntennaGeometry = new THREE.CylinderGeometry(0.07, 0.07, 3.5, 4);
  sharedAssets.tankHeadlightGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.4);
  sharedAssets.barrelRingGeometry = new THREE.TorusGeometry(2.55, 0.12, 6, perf.treeSegments);
}

function applyMeshShadows(mesh) {
  mesh.castShadow = perf.castShadows;
  mesh.receiveShadow = perf.castShadows;
  return mesh;
}

function createDetailedTread(rubberMat, metalMat) {
  const tread = new THREE.Group();
  tread.add(applyMeshShadows(new THREE.Mesh(sharedAssets.tankTrackPlateGeometry, rubberMat)));

  const wheelCount = isMobile ? 5 : 7;
  for (let i = 0; i < wheelCount; i++) {
    const wheel = applyMeshShadows(new THREE.Mesh(sharedAssets.tankWheelGeometry, metalMat));
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(0, -0.35, -7 + i * (14 / (wheelCount - 1)));
    tread.add(wheel);
  }

  return tread;
}

function buildTankModel(colors) {
  const tank = new THREE.Group();
  const hullMat = new THREE.MeshStandardMaterial({ color: colors.hull, roughness: 0.52, metalness: 0.52 });
  const hullDarkMat = new THREE.MeshStandardMaterial({ color: colors.hullDark, roughness: 0.58, metalness: 0.48 });
  const metalMat = new THREE.MeshStandardMaterial({ color: colors.metal, roughness: 0.32, metalness: 0.82 });
  const rubberMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.94, metalness: 0.04 });

  const lowerHull = applyMeshShadows(new THREE.Mesh(sharedAssets.tankLowerHullGeometry, hullMat));
  lowerHull.position.y = 2.6;
  tank.add(lowerHull);

  const upperHull = applyMeshShadows(new THREE.Mesh(sharedAssets.tankUpperHullGeometry, hullMat));
  upperHull.position.set(0, 4.3, -0.8);
  tank.add(upperHull);

  const glacis = applyMeshShadows(new THREE.Mesh(sharedAssets.tankGlacisGeometry, hullDarkMat));
  glacis.position.set(0, 3.9, 6.2);
  glacis.rotation.x = -0.52;
  tank.add(glacis);

  const rearDeck = applyMeshShadows(new THREE.Mesh(sharedAssets.tankGlacisGeometry, hullDarkMat));
  rearDeck.scale.set(0.85, 1, 0.7);
  rearDeck.position.set(0, 4.8, -6.5);
  rearDeck.rotation.x = 0.15;
  tank.add(rearDeck);

  const turret = applyMeshShadows(new THREE.Mesh(sharedAssets.tankTurretGeometry, hullMat));
  turret.position.y = 7.6;
  turret.rotation.x = Math.PI / 2;
  tank.add(turret);

  const cupola = applyMeshShadows(new THREE.Mesh(sharedAssets.tankCupolaGeometry, hullDarkMat));
  cupola.position.set(0, 1.35, -0.6);
  turret.add(cupola);

  const mantlet = applyMeshShadows(new THREE.Mesh(sharedAssets.tankMantletGeometry, metalMat));
  mantlet.position.set(0, 0, 1.6);
  mantlet.rotation.x = Math.PI / 2;
  turret.add(mantlet);

  const barrel = applyMeshShadows(new THREE.Mesh(sharedAssets.tankBarrelGeometry, metalMat));
  barrel.position.set(0, 0, 7.2);
  barrel.rotation.x = Math.PI / 2;
  turret.add(barrel);

  const muzzle = applyMeshShadows(new THREE.Mesh(sharedAssets.tankMuzzleGeometry, metalMat));
  muzzle.position.set(0, 0, 12.8);
  muzzle.rotation.x = Math.PI / 2;
  turret.add(muzzle);

  const leftTread = createDetailedTread(rubberMat, metalMat);
  leftTread.position.set(-5.9, 2, 0);
  tank.add(leftTread);

  const rightTread = createDetailedTread(rubberMat, metalMat);
  rightTread.position.set(5.9, 2, 0);
  tank.add(rightTread);

  const exhaustLeft = applyMeshShadows(new THREE.Mesh(sharedAssets.tankExhaustGeometry, metalMat));
  exhaustLeft.position.set(-2.2, 5.2, -7);
  tank.add(exhaustLeft);

  const exhaustRight = applyMeshShadows(new THREE.Mesh(sharedAssets.tankExhaustGeometry, metalMat));
  exhaustRight.position.set(2.2, 5.2, -7);
  tank.add(exhaustRight);

  const antenna = applyMeshShadows(new THREE.Mesh(sharedAssets.tankAntennaGeometry, metalMat));
  antenna.position.set(-1.8, 9.8, -0.8);
  tank.add(antenna);

  const headlightLeft = applyMeshShadows(new THREE.Mesh(sharedAssets.tankHeadlightGeometry, metalMat));
  headlightLeft.position.set(-3.8, 3.6, 7.8);
  tank.add(headlightLeft);

  const headlightRight = applyMeshShadows(new THREE.Mesh(sharedAssets.tankHeadlightGeometry, metalMat));
  headlightRight.position.set(3.8, 3.6, 7.8);
  tank.add(headlightRight);

  tank.userData.turret = turret;
  return tank;
}

function createDisplacedTerrainGeometry(chunkX, chunkZ) {
  const geometry = sharedAssets.terrainGeometry.clone();
  const positions = geometry.attributes.position;
  const originX = chunkX * chunkSize + chunkSize / 2;
  const originZ = chunkZ * chunkSize + chunkSize / 2;

  for (let i = 0; i < positions.count; i++) {
    const localX = positions.getX(i);
    const localY = positions.getY(i);
    const worldX = originX + localX;
    const worldZ = originZ - localY;
    const height =
      Math.sin(worldX * 0.025) * Math.cos(worldZ * 0.022) * 1.8 +
      Math.sin(worldX * 0.08 + worldZ * 0.06) * 0.7 +
      Math.cos(worldX * 0.015 - worldZ * 0.03) * 0.5;
    positions.setZ(i, height);
  }

  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function createRock() {
  const scale = 1.2 + Math.random() * 2.2;
  const rock = applyMeshShadows(new THREE.Mesh(sharedAssets.rockGeometry, sharedAssets.rockMaterial));
  rock.scale.setScalar(scale);
  rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
  rock.userData.type = 'rock';
  rock.userData.health = Infinity;
  rock.userData.collisionRadius = scale * 0.9;
  rock.userData.halfHeight = scale * 0.7;
  rock.userData.isDestroyed = false;
  rock.userData.originalScale = rock.scale.clone();
  return rock;
}

function createBush() {
  const bush = new THREE.Group();
  const clusterCount = 2 + Math.floor(Math.random() * 2);

  for (let i = 0; i < clusterCount; i++) {
    const puff = applyMeshShadows(new THREE.Mesh(
      sharedAssets.bushGeometry,
      i % 2 === 0 ? sharedAssets.bushMaterial : sharedAssets.treeFoliageDarkMaterial
    ));
    const size = 0.8 + Math.random() * 0.8;
    puff.scale.set(size * 1.2, size * 0.8, size);
    puff.position.set((Math.random() - 0.5) * 2.5, size * 0.45, (Math.random() - 0.5) * 2.5);
    bush.add(puff);
  }

  bush.userData.type = 'bush';
  bush.userData.health = Infinity;
  bush.userData.collisionRadius = 1.8;
  bush.userData.halfHeight = 0.8;
  bush.userData.isDestroyed = false;
  bush.userData.originalScale = bush.scale.clone();
  return bush;
}

// Initialize the game
function init() {
  // Create loading manager
  const loadingManager = setupLoading();

  // For development, use placeholder textures
  const textures = createPlaceholderTextures();
  initSharedAssets(textures);

  // Create scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xa8c4d4, 0.0022);
  scene.background = new THREE.Color(0x7eb6d8);

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
  renderer = new THREE.WebGLRenderer({
    antialias: perf.antialias,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(perf.pixelRatio);
  renderer.shadowMap.enabled = perf.castShadows;
  renderer.shadowMap.type = isMobile ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

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
  // createRoads(); // Comment out to remove the gray roads

  // Create initial chunks around origin
  for (let x = -viewDistance; x <= viewDistance; x++) {
    for (let z = -viewDistance; z <= viewDistance; z++) {
      createTerrainChunk(x, z);
    }
  }

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
      loadingScreen.classList.add('is-hidden');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 600);

      startGame();
    }, 500);
  }, 1500);

  // Start the game loop
  animate();

  lightPool.initialize();
}

// Create lighting for the scene
function setupLights() {
  const ambientLight = new THREE.AmbientLight(0xdce8f0, 0.35);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xfff4e0, 0.85);
  directionalLight.position.set(80, 180, 60);
  directionalLight.castShadow = perf.castShadows;

  if (perf.castShadows) {
    directionalLight.shadow.mapSize.set(perf.shadowMapSize, perf.shadowMapSize);
    directionalLight.shadow.camera.near = 10;
    directionalLight.shadow.camera.far = 450;
    directionalLight.shadow.camera.left = -160;
    directionalLight.shadow.camera.right = 160;
    directionalLight.shadow.camera.top = 160;
    directionalLight.shadow.camera.bottom = -160;
    directionalLight.shadow.bias = -0.0005;
  }

  scene.add(directionalLight);

  const hemisphereLight = new THREE.HemisphereLight(0x8ecae6, 0x3d5a3e, 0.55);
  scene.add(hemisphereLight);
}

// Setup event listeners for controls
function setControlFromKey(key, pressed) {
  switch (key) {
    case 'w':
    case 'arrowup':
      controls_state.moveForward = pressed;
      break;
    case 's':
    case 'arrowdown':
      controls_state.moveBackward = pressed;
      break;
    case 'a':
    case 'arrowleft':
      controls_state.rotateLeft = pressed;
      break;
    case 'd':
    case 'arrowright':
      controls_state.rotateRight = pressed;
      break;
    case ' ':
      controls_state.shoot = pressed;
      break;
  }
}

function setupEventListeners() {
  window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key.startsWith('arrow') || key === ' ') {
      e.preventDefault();
    }
    setControlFromKey(key, true);
  });

  window.addEventListener('keyup', (e) => {
    setControlFromKey(e.key.toLowerCase(), false);
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

    isMobile = window.innerWidth < 768;
    perf.pixelRatio = Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2);
    renderer.setPixelRatio(perf.pixelRatio);

    if (isMobile) {
      createMobileControls();
    }
  });

  // Ensure orbit controls are disabled during gameplay
  controls.enabled = false;
}

// Create skybox for the scene
function createSkybox() {
  scene.background = new THREE.Color(0x7eb6d8);
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
  const cloudGroup = new THREE.Group();
  const particleCount = perf.cloudSpheres + Math.floor(Math.random() * 4);

  for (let i = 0; i < particleCount; i++) {
    const size = 4 + Math.random() * 12;
    const mesh = new THREE.Mesh(sharedAssets.cloudGeometry, sharedAssets.cloudMaterial);
    mesh.scale.set(size * 1.1, size * 0.65, size);
    mesh.position.set(
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 15
    );
    cloudGroup.add(mesh);
  }

  cloudGroup.position.set(
    (Math.random() - 0.5) * 800,
    80 + Math.random() * 40,
    (Math.random() - 0.5) * 800
  );

  const scale = 0.85 + Math.random() * 0.5;
  cloudGroup.scale.setScalar(scale);

  cloudGroup.userData.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 5,
    0,
    (Math.random() - 0.5) * 5
  );

  scene.add(cloudGroup);
  clouds.push(cloudGroup);
}

// Create mountains
function createMountains() {
  const mountainCount = isMobile ? 6 : 10;

  for (let i = 0; i < mountainCount; i++) {
    const mountainGroup = new THREE.Group();
    const height = 90 + Math.random() * 130;
    const radius = 65 + Math.random() * 85;

    const base = applyMeshShadows(new THREE.Mesh(
      new THREE.ConeGeometry(radius, height, perf.mountainSegments, 3),
      sharedAssets.mountainMaterial
    ));
    base.position.y = height / 2;
    mountainGroup.add(base);

    const ridge = applyMeshShadows(new THREE.Mesh(
      new THREE.ConeGeometry(radius * 0.55, height * 0.55, perf.mountainSegments, 2),
      sharedAssets.mountainRockMaterial
    ));
    ridge.position.set(radius * 0.15, height * 0.72, radius * 0.1);
    mountainGroup.add(ridge);

    if (height > 140) {
      const snowCap = applyMeshShadows(new THREE.Mesh(
        new THREE.ConeGeometry(radius * 0.28, height * 0.18, perf.mountainSegments, 1),
        sharedAssets.snowMaterial
      ));
      snowCap.position.y = height * 0.92;
      mountainGroup.add(snowCap);
    }

    const angle = (i / mountainCount) * Math.PI * 2 + Math.random() * 0.4;
    const distance = 380 + Math.random() * 80;
    mountainGroup.position.set(
      Math.cos(angle) * distance,
      0,
      Math.sin(angle) * distance
    );
    mountainGroup.rotation.y = Math.random() * Math.PI * 2;

    mountainGroup.userData.type = 'mountain';
    mountainGroup.userData.health = Infinity;
    mountainGroup.userData.collisionRadius = radius * 0.9;
    mountainGroup.userData.halfHeight = height / 2;
    mountainGroup.userData.isDestroyed = false;

    scene.add(mountainGroup);
    obstacles.push(mountainGroup);
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
  const crate = new THREE.Group();
  const body = applyMeshShadows(new THREE.Mesh(new THREE.BoxGeometry(size, size, size), sharedAssets.crateMaterial));
  crate.add(body);

  const trimSize = size * 1.02;
  const trimThickness = 0.18;
  const trimGeo = new THREE.BoxGeometry(trimSize, trimThickness, trimThickness);

  const trimFront = applyMeshShadows(new THREE.Mesh(trimGeo, sharedAssets.crateTrimMaterial));
  trimFront.position.set(0, size * 0.25, size / 2);
  crate.add(trimFront);

  const trimBack = trimFront.clone();
  trimBack.position.z = -size / 2;
  crate.add(trimBack);

  const trimSideGeo = new THREE.BoxGeometry(trimThickness, trimThickness, trimSize);
  const trimLeft = applyMeshShadows(new THREE.Mesh(trimSideGeo, sharedAssets.crateTrimMaterial));
  trimLeft.position.set(-size / 2, -size * 0.1, 0);
  crate.add(trimLeft);

  const trimRight = trimLeft.clone();
  trimRight.position.x = size / 2;
  crate.add(trimRight);

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
  const height = 7;
  const barrelGroup = new THREE.Group();

  const body = applyMeshShadows(new THREE.Mesh(
    new THREE.CylinderGeometry(radiusTop, radiusTop, height, perf.treeSegments),
    sharedAssets.barrelMaterial
  ));
  body.position.y = height / 2;
  barrelGroup.add(body);

  for (const y of [1.8, 3.6, 5.4]) {
    const ring = applyMeshShadows(new THREE.Mesh(sharedAssets.barrelRingGeometry, sharedAssets.barrelRingMaterial));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = y;
    barrelGroup.add(ring);
  }

  barrelGroup.rotation.y = Math.random() * Math.PI * 2;
  barrelGroup.userData.originalScale = new THREE.Vector3().copy(barrelGroup.scale);
  barrelGroup.userData.type = 'barrel';
  barrelGroup.userData.health = 20;
  barrelGroup.userData.halfHeight = height / 2;
  barrelGroup.userData.collisionRadius = radiusTop;
  barrelGroup.userData.isDestroyed = false;
  barrelGroup.userData.isExplosive = true;

  return barrelGroup;
}

function createBarrier() {
  const width = 8;
  const height = 5;
  const depth = 3;
  const barrier = new THREE.Group();

  const block = applyMeshShadows(new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    sharedAssets.barrierMaterial
  ));
  block.position.y = height / 2;
  barrier.add(block);

  for (let i = -1; i <= 1; i += 2) {
    const stripe = applyMeshShadows(new THREE.Mesh(
      new THREE.BoxGeometry(width * 0.85, height * 0.18, depth * 1.02),
      sharedAssets.barrierStripeMaterial
    ));
    stripe.position.set(0, height * (0.35 + i * 0.22), 0);
    barrier.add(stripe);
  }

  const legGeo = new THREE.BoxGeometry(0.6, height * 0.55, 0.6);
  for (const x of [-width * 0.35, width * 0.35]) {
    const leg = applyMeshShadows(new THREE.Mesh(legGeo, sharedAssets.barrierMaterial));
    leg.position.set(x, height * 0.28, 0);
    barrier.add(leg);
  }

  barrier.rotation.y = Math.random() * Math.PI * 2;
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

function createFoliageCone(radius, height, material = sharedAssets.treeFoliageMaterial) {
  const mesh = new THREE.Mesh(sharedAssets.treeFoliageGeometry, material);
  mesh.scale.set(radius, height, radius);
  mesh.castShadow = perf.castShadows;
  return mesh;
}

function createTree() {
  const treeGroup = new THREE.Group();
  const scale = 0.85 + Math.random() * 0.45;
  treeGroup.scale.setScalar(scale);

  const trunk = applyMeshShadows(new THREE.Mesh(sharedAssets.treeTrunkGeometry, sharedAssets.treeTrunkMaterial));
  trunk.position.y = 5;
  treeGroup.add(trunk);

  const foliageLayers = [
    { r: 6.5, h: 8.5, y: 8, mat: sharedAssets.treeFoliageMaterial },
    { r: 5.2, h: 7.2, y: 12, mat: sharedAssets.treeFoliageMaterial },
    { r: 3.8, h: 6.2, y: 15.5, mat: sharedAssets.treeFoliageDarkMaterial },
    { r: 2.4, h: 4.8, y: 18.5, mat: sharedAssets.treeFoliageDarkMaterial }
  ];

  for (const layer of foliageLayers) {
    const foliage = createFoliageCone(layer.r, layer.h, layer.mat);
    foliage.position.y = layer.y;
    foliage.rotation.y = Math.random() * Math.PI;
    treeGroup.add(foliage);
  }

  treeGroup.userData.type = 'tree';
  treeGroup.userData.health = 40;
  treeGroup.userData.originalScale = new THREE.Vector3().copy(treeGroup.scale);
  treeGroup.userData.collisionRadius = 6 * scale;
  treeGroup.userData.halfHeight = 10 * scale;
  treeGroup.userData.isDestroyed = false;
  treeGroup.rotation.y = Math.random() * Math.PI * 2;

  return treeGroup;
}

// Create player tank
function createPlayerTank() {
  player = buildTankModel({
    hull: 0x556b2f,
    hullDark: 0x3d4a26,
    metal: 0x8d8d8d
  });

  player.userData.collisionRadius = 7.5;
  player.userData.health = settings.tankMaxHealth;
  player.userData.isDestroyed = false;
  player.userData.type = 'tank';

  scene.add(player);
  playerTank = player;

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
  lookTarget.y = playerTank.position.y + TURRET_HEIGHT;

  // Make camera look at the point above tank
  camera.lookAt(lookTarget);

  // Ensure orbit controls are disabled during gameplay
  if (controls) {
    controls.enabled = false;
  }
}

// Create mobile controls interface
function createMobileControls() {
  const existingControls = document.getElementById('mobile-controls');
  if (existingControls) {
    existingControls.remove();
  }

  const controlsContainer = document.createElement('div');
  controlsContainer.id = 'mobile-controls';

  const movementJoystick = document.createElement('div');
  movementJoystick.id = 'movement-joystick';

  const joystickKnob = document.createElement('div');
  joystickKnob.id = 'joystick-knob';
  movementJoystick.appendChild(joystickKnob);

  const shootButton = document.createElement('div');
  shootButton.id = 'shoot-button';
  shootButton.innerText = 'FIRE';

  controlsContainer.appendChild(movementJoystick);
  controlsContainer.appendChild(shootButton);
  document.body.appendChild(controlsContainer);

  setupMobileJoystick(movementJoystick, joystickKnob);
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
    knobElement.style.transform = `translate(calc(-50% + ${knobX}px), calc(-50% + ${knobY}px))`;

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
    knobElement.style.transform = 'translate(-50%, -50%)';
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

  if (!isTabVisible) {
    return;
  }

  deltaTime = clock.getDelta();

  // Clear console logs after 5 seconds to avoid flooding
  if (clock.elapsedTime > 5 && !window.clearedLogs) {

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
    updateMuzzleFlash();
    updateExplosions(deltaTime);
    updateRespawnEffects(deltaTime); // Update respawn effects in main loop
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
    _moveVector.set(
      Math.sin(playerTank.rotation.y) * moveDistance,
      0,
      Math.cos(playerTank.rotation.y) * moveDistance
    );

    _oldPosition.copy(playerTank.position);
    playerTank.position.add(_moveVector);

    if (checkTankObstacleCollisions()) {
      playerTank.position.copy(_oldPosition);
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

  const now = performance.now();
  if (ws && ws.readyState === WebSocket.OPEN && playerTank &&
    now - lastUpdateTime >= UPDATE_INTERVAL) {
    lastUpdateTime = now;
    // Use the helper function to create the message
    const message = createClientMessage('update', {
      position: { x: playerTank.position.x, y: playerTank.position.y, z: playerTank.position.z },
      rotation: { y: playerTank.rotation.y },
      // score: gameState.score, // Score is server-authoritative
      timestamp: now
    });
    ws.send(JSON.stringify(message));
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
  maxParticles: 80,
  maxActiveExplosions: 12
};

// Active explosions tracked for main loop update
const activeExplosions = [];
const explosionFlashes = [];
const MAX_EXPLOSION_FLASHES = 10;

// Shared geometries for projectiles and effects
const sharedGeometries = {
  shellBody: new THREE.CylinderGeometry(0.42, 0.52, 1.5, 6),
  shellNose: new THREE.CylinderGeometry(0.1, 0.42, 0.75, 6),
  shellBand: new THREE.CylinderGeometry(0.53, 0.53, 0.12, 6),
  particle: new THREE.SphereGeometry(0.35, 5, 4),
  smokeParticle: new THREE.SphereGeometry(0.55, 5, 4),
  muzzleFlash: new THREE.SphereGeometry(1.5, 6, 4),
  explosionFlash: new THREE.SphereGeometry(1, 6, 4)
};

const sharedMaterials = {
  shellBody: new THREE.MeshBasicMaterial({ color: 0xb8954a }),
  shellNose: new THREE.MeshBasicMaterial({ color: 0x3d3d3d }),
  shellBand: new THREE.MeshBasicMaterial({ color: 0x2a2a2a }),
  muzzleFlash: new THREE.MeshBasicMaterial({
    color: 0xffaa44,
    transparent: true,
    opacity: 0.85
  }),
  particle: new THREE.MeshBasicMaterial({
    color: 0xff6622,
    transparent: true,
    opacity: 0.9
  }),
  smokeParticle: new THREE.MeshBasicMaterial({
    color: 0x555555,
    transparent: true,
    opacity: 0.55
  }),
  explosionFlash: new THREE.MeshBasicMaterial({
    color: 0xffaa33,
    transparent: true,
    opacity: 0.85
  })
};

const TURRET_HEIGHT = 7.6;
const BARREL_OFFSET = 12.8;
const PROJECTILE_RADIUS = 1.8;
const muzzleFlash = { mesh: null, until: 0 };
const _shellUp = new THREE.Vector3(0, 1, 0);
const _shellQuat = new THREE.Quaternion();
const _explosionPos = new THREE.Vector3();

function createShellProjectile() {
  const shell = new THREE.Group();

  const body = new THREE.Mesh(sharedGeometries.shellBody, sharedMaterials.shellBody);
  body.position.y = -0.12;
  shell.add(body);

  const nose = new THREE.Mesh(sharedGeometries.shellNose, sharedMaterials.shellNose);
  nose.position.y = 0.82;
  shell.add(nose);

  const band = new THREE.Mesh(sharedGeometries.shellBand, sharedMaterials.shellBand);
  band.position.y = -0.52;
  shell.add(band);

  return shell;
}

function orientShell(projectile) {
  if (!projectile.userData.direction) return;
  _shellQuat.setFromUnitVectors(_shellUp, projectile.userData.direction);
  projectile.quaternion.copy(_shellQuat);
}

function getExplosionFlash() {
  for (const flash of explosionFlashes) {
    if (!flash.userData.active) {
      return flash;
    }
  }

  if (explosionFlashes.length < MAX_EXPLOSION_FLASHES) {
    const flash = new THREE.Mesh(
      sharedGeometries.explosionFlash,
      sharedMaterials.explosionFlash.clone()
    );
    flash.userData.active = false;
    scene.add(flash);
    explosionFlashes.push(flash);
    return flash;
  }

  return null;
}

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
    const obj = createShellProjectile();
    obj.visible = true;
    scene.add(obj);
    pool.push(obj);
    return obj;
  } else if (type === 'particles' && pool.length < objectPools.maxParticles) {
    const useSmoke = pool.length % 3 === 0;
    const obj = new THREE.Mesh(
      useSmoke ? sharedGeometries.smokeParticle : sharedGeometries.particle,
      useSmoke ? sharedMaterials.smokeParticle : sharedMaterials.particle
    );
    obj.visible = true;
    scene.add(obj);
    pool.push(obj);
    return obj;
  }

  return null;
}

// Return pooled object to pool
function releasePooledObject(obj) {
  if (obj) {
    obj.visible = false;
    obj.scale.setScalar(1);
  }
}

// Reusable vectors for movement and firing
const _fireDirection = new THREE.Vector3();
const _moveVector = new THREE.Vector3();
const _oldPosition = new THREE.Vector3();

function setProjectileMuzzlePosition(projectile, rotY, tankPosition) {
  _fireDirection.set(Math.sin(rotY), 0, Math.cos(rotY));
  projectile.position.set(
    tankPosition.x + _fireDirection.x * BARREL_OFFSET,
    tankPosition.y + TURRET_HEIGHT,
    tankPosition.z + _fireDirection.z * BARREL_OFFSET
  );
}

function attachProjectileToScene(projectile) {
  if (!projectile.parent) {
    scene.add(projectile);
  }
}

function hideProjectile(projectile) {
  projectile.visible = false;
  projectile.quaternion.identity();
  projectile.userData.light = null;
}

// Optimized projectile firing
function fireProjectile() {
  if (!playerTank) return;

  const projectile = getPooledObject('projectiles');
  if (!projectile) return;

  const rotY = playerTank.rotation.y;
  setProjectileMuzzlePosition(projectile, rotY, playerTank.position);

  projectile.userData.direction = projectile.userData.direction || new THREE.Vector3();
  projectile.userData.direction.copy(_fireDirection);
  projectile.userData.speed = settings.projectileSpeed;
  projectile.userData.lifetime = 0;
  projectile.userData.ownerId = clientId;
  projectile.userData.light = null;
  orientShell(projectile);

  attachProjectileToScene(projectile);
  projectiles.push(projectile);

  createMuzzleFlash(projectile.position);

  if (ws && ws.readyState === WebSocket.OPEN) {
    const payload = createClientMessage('projectile', {
      position: { x: projectile.position.x, y: projectile.position.y, z: projectile.position.z },
      direction: { x: _fireDirection.x, y: _fireDirection.y, z: _fireDirection.z },
      speed: projectile.userData.speed
    });
    queueMicrotask(() => {
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(payload));
      }
    });
  }
}

function createMuzzleFlash(position) {
  if (!muzzleFlash.mesh) {
    muzzleFlash.mesh = new THREE.Mesh(sharedGeometries.muzzleFlash, sharedMaterials.muzzleFlash);
    scene.add(muzzleFlash.mesh);
  }

  muzzleFlash.mesh.position.copy(position);
  muzzleFlash.mesh.visible = true;
  muzzleFlash.until = clock.elapsedTime + 0.06;
}

function updateMuzzleFlash() {
  if (muzzleFlash.mesh?.visible && clock.elapsedTime >= muzzleFlash.until) {
    muzzleFlash.mesh.visible = false;
  }
}

// Efficient projectile update
function updateProjectiles() {
  const removeList = [];

  for (const projectile of projectiles) {
    if (!projectile.visible) continue;

    projectile.position.addScaledVector(projectile.userData.direction, projectile.userData.speed * deltaTime);
    orientShell(projectile);
    projectile.userData.lifetime += deltaTime;

    if (projectile.userData.lifetime > 3) {
      hideProjectile(projectile);
      removeList.push(projectile);
      continue;
    }

    if (checkProjectileCollisions(projectile)) {
      hideProjectile(projectile);
      removeList.push(projectile);
      continue;
    }
  }

  for (const projectile of removeList) {
    const index = projectiles.indexOf(projectile);
    if (index > -1) {
      projectiles.splice(index, 1);
    }
  }
}

// Clean up a projectile and its associated resources - NOW MOSTLY JUST ARRAY CLEANUP
function cleanupProjectile(projectile) {
  // Most cleanup is done immediately in updateProjectiles now
  // This function primarily ensures it's removed from the array
  const index = projectiles.indexOf(projectile);
  if (index > -1) {
    projectiles.splice(index, 1);
    console.log(`[Cleanup Projectile Final Check] Projectile array splice successful. New count: ${projectiles.length}`);
  } else {
    console.log("[Cleanup Projectile Final Check] Projectile already removed from array?");
  }
}

// Lightweight mesh-based explosion (no dynamic lights)
function createExplosion(position, isLarge = false) {
  if (activeExplosions.length >= objectPools.maxActiveExplosions) {
    return;
  }

  const particleCount = isLarge ? 8 : 5;
  const explosionForce = isLarge ? 9 : 6;
  const maxLifetime = isLarge ? 0.45 : 0.32;
  const flashScale = isLarge ? 2.4 : 1.5;

  _explosionPos.copy(position);

  const flash = getExplosionFlash();
  if (flash) {
    flash.position.copy(_explosionPos);
    flash.scale.setScalar(flashScale);
    flash.material.opacity = 0.9;
    flash.visible = true;
    flash.userData.active = true;
  }

  const explosionData = {
    position: _explosionPos.clone(),
    particles: [],
    lifetime: 0,
    maxLifetime,
    flash,
    flashScale
  };

  for (let i = 0; i < particleCount; i++) {
    const particle = getPooledObject('particles');
    if (!particle) continue;

    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 1.5;
    const upwardForce = 5 + Math.random() * 4;

    particle.position.set(
      _explosionPos.x + Math.cos(angle) * radius,
      _explosionPos.y + Math.random() * 1.5,
      _explosionPos.z + Math.sin(angle) * radius
    );

    particle.userData.velocity = particle.userData.velocity || new THREE.Vector3();
    particle.userData.velocity.set(
      Math.cos(angle) * explosionForce * (0.4 + Math.random() * 0.6),
      upwardForce,
      Math.sin(angle) * explosionForce * (0.4 + Math.random() * 0.6)
    );

    particle.userData.baseScale = 0.8 + Math.random() * 0.6;
    particle.scale.setScalar(particle.userData.baseScale);
    particle.visible = true;
    explosionData.particles.push(particle);
  }

  activeExplosions.push(explosionData);
}

function updateExplosions(dt) {
  for (let i = activeExplosions.length - 1; i >= 0; i--) {
    const explosion = activeExplosions[i];
    explosion.lifetime += dt;
    const progress = explosion.lifetime / explosion.maxLifetime;

    if (explosion.flash?.userData.active) {
      explosion.flash.scale.setScalar(explosion.flashScale * (1 + progress * 1.8));
      explosion.flash.material.opacity = Math.max(0, 0.9 * (1 - progress * 1.4));
      if (progress >= 1) {
        explosion.flash.visible = false;
        explosion.flash.userData.active = false;
      }
    }

    if (explosion.lifetime >= explosion.maxLifetime) {
      for (const particle of explosion.particles) {
        releasePooledObject(particle);
      }
      activeExplosions.splice(i, 1);
      continue;
    }

    for (const particle of explosion.particles) {
      if (!particle.visible) continue;

      particle.position.addScaledVector(particle.userData.velocity, dt);
      particle.userData.velocity.y -= 14 * dt;

      const baseScale = particle.userData.baseScale || 1;
      particle.scale.setScalar(Math.max(0.05, (1 - progress) * baseScale));
    }
  }
}

// Reusable vector for distance calculations to avoid allocations
const _collisionVec = new THREE.Vector3();

// Check if projectile collides with obstacles or tanks
function checkProjectileCollisions(projectile) {
  // **** EXIT EARLY IF PROJECTILE IS NOT OWNED BY THIS CLIENT ****
  if (projectile.userData.ownerId !== clientId) {
    return false; // Only process collisions for our own projectiles
  }

  const projectileRadius = PROJECTILE_RADIUS;
  const px = projectile.position.x;
  const py = projectile.position.y;
  const pz = projectile.position.z;

  // Check OTHER tanks FIRST
  for (const [id, tank] of otherPlayers) {
    if (tank.userData.isDestroyed) continue;

    // Calculate distance squared to avoid sqrt when possible
    const dx = px - tank.position.x;
    const dy = py - tank.position.y;
    const dz = pz - tank.position.z;
    const distSq = dx * dx + dy * dy + dz * dz;
    const combinedRadius = projectileRadius + tank.userData.collisionRadius;

    if (distSq < combinedRadius * combinedRadius) {
      _collisionVec.set(px, py, pz);
      createExplosion(_collisionVec, false);
      if (ws && ws.readyState === WebSocket.OPEN) {
        const hitData = createClientMessage('tankHit', {
          targetId: id,
          shooterId: clientId,
          damage: settings.projectileDamage,
          position: { x: px, y: py, z: pz }
        });
        ws.send(JSON.stringify(hitData));
      }
      return true;
    }
  }

  // Check SELF tank (ONLY if no other tank was hit)
  if (playerTank && !playerTank.userData.isDestroyed) {
    const dx = px - playerTank.position.x;
    const dy = py - playerTank.position.y;
    const dz = pz - playerTank.position.z;
    const distSq = dx * dx + dy * dy + dz * dz;
    const combinedRadius = projectileRadius + playerTank.userData.collisionRadius;

    if (distSq < combinedRadius * combinedRadius) {
      _collisionVec.set(px, py, pz);
      createExplosion(_collisionVec, false);
      if (ws && ws.readyState === WebSocket.OPEN) {
        const hitData = createClientMessage('tankHit', {
          targetId: clientId,
          shooterId: clientId,
          damage: settings.projectileDamage,
          position: { x: px, y: py, z: pz }
        });
        ws.send(JSON.stringify(hitData));
      }
      return true;
    }
  }

  // Check obstacles (ONLY if no tank was hit)
  for (let i = 0; i < obstacles.length; i++) {
    const obstacle = obstacles[i];
    if (obstacle.userData.isDestroyed) continue;

    const dx = px - obstacle.position.x;
    const dy = py - obstacle.position.y;
    const dz = pz - obstacle.position.z;
    const distSq = dx * dx + dy * dy + dz * dz;
    const combinedRadius = projectileRadius + obstacle.userData.collisionRadius;

    if (distSq < combinedRadius * combinedRadius) {
      _collisionVec.set(px, py, pz);
      createExplosion(_collisionVec, obstacle.userData.isExplosive);
      damageObstacle(obstacle, 1000);
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
    obstacle.userData.isDestroyed = true;
    obstacle.scale.set(0.1, 0.1, 0.1);

    if (obstacle.userData.isExplosive) {
      applyExplosionDamage(obstacle.position, 25, 1000);
    }

    addToRespawnQueue(obstacle);

    // Send message to server indicating obstacle destruction
    if (ws && ws.readyState === WebSocket.OPEN) {
      const message = createClientMessage('obstacleDestroyed', {
        position: { x: obstacle.position.x, y: obstacle.position.y, z: obstacle.position.z }
      });
      // Remove log
      // console.log(`[Client Sending obstacleDestroyed] MsgID: ${message.msgId}`);
      ws.send(JSON.stringify(message));
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
    _cloudMovement.copy(cloud.userData.velocity).multiplyScalar(deltaTime * 0.2);
    cloud.position.add(_cloudMovement);

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
  const healthPercent = Math.max(0, Math.min(100, gameState.health));
  const healthFill = document.getElementById('health-bar-fill');
  const healthValue = document.getElementById('health-value');

  if (healthFill) {
    healthFill.style.width = `${healthPercent}%`;
    healthFill.className = '';
    if (healthPercent <= 25) {
      healthFill.classList.add('danger');
    } else if (healthPercent <= 50) {
      healthFill.classList.add('warning');
    }
  }

  if (healthValue) {
    healthValue.textContent = `${Math.round(healthPercent)}%`;
  }

  if (healthPercent < lastHealthPercent) {
    const overlay = document.getElementById('damage-overlay');
    if (overlay) {
      overlay.classList.add('visible');
      clearTimeout(updateUI.damageTimeout);
      updateUI.damageTimeout = setTimeout(() => overlay.classList.remove('visible'), 180);
    }
  }
  lastHealthPercent = healthPercent;

  const scoreDisplay = document.getElementById('score-display');
  if (scoreDisplay) {
    scoreDisplay.textContent = String(gameState.score);
  }

  if (gameState.health <= 0 && !gameState.isGameOver) {
    gameOver();
  }
}

// Game over function
function gameOver(destroyedBy) {
  if (gameState.isGameOver) return;

  gameState.isGameOver = true;
  isGameActive = false;

  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.close();
    ws = null;
  }

  if (heartbeatInterval) {
    clearInterval(heartbeatInterval);
    heartbeatInterval = null;
  }

  const gameOverScreen = document.getElementById('game-over');
  const title = document.getElementById('game-over-title');
  const finalScore = document.getElementById('final-score');
  const restartButton = document.getElementById('restart-button');

  if (title) {
    title.textContent = destroyedBy === clientId
      ? 'Self Destruction'
      : 'Tank Destroyed';
  }

  if (finalScore) {
    finalScore.textContent = String(gameState.score);
  }

  if (gameOverScreen) {
    gameOverScreen.hidden = false;
  }

  if (restartButton && !restartButton.dataset.bound) {
    restartButton.dataset.bound = 'true';
    restartButton.addEventListener('click', restartGame);
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
    loadingScreen.classList.add('is-hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 600);
    startGame();
  };

  return manager;
}

// Start game after assets are loaded
function startGame() {
  const restartButton = document.getElementById('restart-button');
  if (restartButton && !restartButton.dataset.bound) {
    restartButton.dataset.bound = 'true';
    restartButton.addEventListener('click', restartGame);
  }

  isGameActive = true;
  updateUI();
  connectToServer();
}

// Add placeholder textures for development
function createPlaceholderTextures() {
  const createCanvasTexture = (color, accent = 'rgba(255, 255, 255, 0.15)') => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 256, 256);

    ctx.fillStyle = accent;
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        if ((i + j) % 2 === 0) {
          ctx.fillRect(i * 16, j * 16, 16, 16);
        }
      }
    }

    for (let i = 0; i < 40; i++) {
      ctx.fillStyle = `rgba(${40 + Math.random() * 30}, ${90 + Math.random() * 40}, ${40 + Math.random() * 20}, 0.15)`;
      ctx.fillRect(Math.random() * 256, Math.random() * 256, 8 + Math.random() * 20, 4 + Math.random() * 10);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);
    return texture;
  };

  const createGrassNormalMap = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(256, 256);

    for (let i = 0; i < imageData.data.length; i += 4) {
      const x = (i / 4) % 256;
      const y = Math.floor(i / 4 / 256);
      const noise = Math.sin(x * 0.2) * Math.cos(y * 0.17) * 0.5 + 0.5;
      const strength = 120 + noise * 80;
      imageData.data[i] = 128 + noise * 20;
      imageData.data[i + 1] = 128 + noise * 15;
      imageData.data[i + 2] = strength;
      imageData.data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);
    return texture;
  };

  return {
    grass: createCanvasTexture('#4a7c3f', 'rgba(255, 255, 255, 0.1)'),
    grassNormal: createGrassNormalMap(),
    road: createCanvasTexture('#4a4a4a'),
    crate: createCanvasTexture('#7a4f2a', 'rgba(0, 0, 0, 0.12)')
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
      chunk.terrain.geometry.dispose();
      chunks.delete(chunkKey);
    }
  }
}

function createTerrainChunk(chunkX, chunkZ) {
  // Calculate chunk position
  const posX = chunkX * chunkSize;
  const posZ = chunkZ * chunkSize;

  const ground = new THREE.Mesh(
    createDisplacedTerrainGeometry(chunkX, chunkZ),
    sharedAssets.terrainMaterial
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.set(posX + chunkSize / 2, 0, posZ + chunkSize / 2);
  ground.receiveShadow = perf.castShadows;
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

  // Scatter rocks and bushes for ground detail
  const scatterCount = 2 + Math.floor(Math.random() * 4);
  for (let i = 0; i < scatterCount; i++) {
    const prop = Math.random() > 0.45 ? createRock() : createBush();
    let validPosition = false;
    let attempts = 0;

    while (!validPosition && attempts < 8) {
      const testX = posX + Math.random() * chunkSize;
      const testZ = posZ + Math.random() * chunkSize;
      const distanceFromOrigin = Math.sqrt(testX * testX + testZ * testZ);

      if (distanceFromOrigin < 50) {
        attempts++;
        continue;
      }

      let tooClose = false;
      for (const obstacle of chunkObstacles) {
        const dx = testX - obstacle.position.x;
        const dz = testZ - obstacle.position.z;
        if (Math.sqrt(dx * dx + dz * dz) < 10) {
          tooClose = true;
          break;
        }
      }

      if (!tooClose) {
        prop.position.set(testX, prop.userData.halfHeight, testZ);
        prop.rotation.y = Math.random() * Math.PI * 2;
        validPosition = true;
      }

      attempts++;
    }

    if (validPosition) {
      scene.add(prop);
      obstacles.push(prop);
      chunkObstacles.push(prop);
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
    // 2. We are not already trying to reconnect
    // 3. The game is not over (i.e., we weren't kicked due to destruction)
    if (!document.hidden && !reconnecting && !gameState.isGameOver) {
      console.log('Tab is visible and game not over, attempting reconnection...');
      reconnecting = true;
      setTimeout(connectToServer, 3000);
    } else if (gameState.isGameOver) {
      console.log('WebSocket closed during game over state, no reconnection attempt.');
    } else if (document.hidden) {
      console.log('WebSocket closed while tab hidden, no reconnection attempt.');
    } else if (reconnecting) {
      console.log('WebSocket closed while already attempting reconnection.');
    }

    // Clear all other players when disconnected for any reason
    otherPlayers.forEach((player, id) => {
      scene.remove(player);
    });
    otherPlayers.clear();

    // Also stop heartbeat if connection closes unexpectedly
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    }
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
  isTabVisible = !document.hidden;

  if (document.hidden) {
    // Tab is hidden, stop heartbeat but keep connection
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null; // Ensure it's nullified
      console.log('[Visibility Change] Tab hidden, heartbeat stopped.');
    }
  } else {
    console.log('[Visibility Change] Tab became visible.');
    // Tab is visible again, restart heartbeat if connected
    if (ws && ws.readyState === WebSocket.OPEN) {
      startHeartbeat();
    }

    // If we're disconnected AND the game isn't over, reconnect
    if ((!ws || ws.readyState !== WebSocket.OPEN) && !gameState.isGameOver) {
      console.log('[Visibility Change] Tab visible, ws disconnected, game not over. Reconnecting...');
      // Ensure not already reconnecting from onclose
      if (!reconnecting) {
        reconnecting = true; // Set flag here too
        connectToServer();
      } else {
        console.log('[Visibility Change] Already attempting reconnection, skipping.');
      }
    } else if (gameState.isGameOver) {
      console.log('[Visibility Change] Tab visible, but game is over. No reconnection.');
    } else {
      console.log('[Visibility Change] Tab visible and ws connection is OPEN. No reconnection needed.');
    }
  }
}

// Handle messages from server
function handleServerMessage(message) {
  // Remove PRE-SWITCH log
  // console.log(`[Client Message Handler - PRE-SWITCH] Received type: ${message.type}, Message ID: ${message.id || 'N/A'}. Current Client ID: ${clientId}`);

  if (!message || !message.type) {
    // Keep error log
    console.error('Invalid message received:', message);
    return;
  }

  switch (message.type) {
    case 'init':
      if (!message.id) {
        console.error('CRITICAL: Invalid init message, no client ID provided by server:', message);
        return;
      }
      clientId = message.id;
      console.log(`[Init] Assigned clientId = ${clientId}`);

      console.log('Initialized with client ID:', clientId);
      // console.log('Received initial client list:', message.clients);

      // Set player tank's initial position received from server
      if (playerTank && message.startPosition) {
        let spawnPosition = new THREE.Vector3(
          message.startPosition.x,
          message.startPosition.y || 0,
          message.startPosition.z
        );
        
        console.log(`[Init] Server suggested position: x=${spawnPosition.x.toFixed(1)}, z=${spawnPosition.z.toFixed(1)}`);
        
        // Validate spawn position doesn't collide with obstacles
        if (checkSpawnObstacleCollision(spawnPosition)) {
          console.log('[Init] Server position collides with obstacle, finding valid position nearby...');
          spawnPosition = findValidSpawnPosition(spawnPosition, 200, playerTank);
          console.log(`[Init] Adjusted to valid position: x=${spawnPosition.x.toFixed(1)}, z=${spawnPosition.z.toFixed(1)}`);
        }
        
        playerTank.position.copy(spawnPosition);
        
        // Optionally set initial rotation if sent (server sends it in clientList now)
        const selfData = message.clients.find(c => c.id === clientId);
        if (selfData && selfData.rotation) {
          playerTank.rotation.y = selfData.rotation.y;
        }
        // Initial camera update after setting position
        updateCameraPosition();
      } else if (!playerTank) {
        console.error("[Init] playerTank object doesn't exist when init message received!");
      } else if (!message.startPosition) {
        console.error("[Init] Server did not send startPosition in init message!");
      }

      // Clear existing players
      // ... (clearing logic) ...

      // Add other players from list
      if (Array.isArray(message.clients)) {
        message.clients.forEach(client => {
          if (client && client.id && client.id !== clientId) {
            addOtherPlayer(client);
          }
        });
      }
      break;

    case 'playerJoined':
      if (message.client && message.client.id && message.client.id !== clientId) {
        // Keep basic join log
        console.log('New player joined:', message.client.id);
        // Remove detailed logs
        // console.log(`Received playerJoined for ${message.client.id}`);
        // console.log('  [playerJoined] otherPlayers keys BEFORE add:', Array.from(otherPlayers.keys()));
        addOtherPlayer(message.client);
        // console.log('  [playerJoined] otherPlayers keys AFTER add:', Array.from(otherPlayers.keys()));
      }
      break;

    case 'playerLeft':
      if (message.id && message.id !== clientId) {
        // Keep basic left log
        console.log('Player left:', message.id);
        // Remove detailed logs
        // console.log(`Received playerLeft for ${message.id}`);
        // console.log('  [playerLeft] otherPlayers keys BEFORE remove:', Array.from(otherPlayers.keys()));
        removeOtherPlayer(message.id, "from playerLeft handler");
        // console.log('  [playerLeft] otherPlayers keys AFTER remove:', Array.from(otherPlayers.keys()));
      }
      break;

    case 'playerUpdate':
      if (message.id && message.id === clientId) {
        // This update is for our own client (likely score update after kill)
        // console.log(`[PlayerUpdate for Self] Received Score: ${message.score}`);
        if (message.score !== undefined && message.score !== gameState.score) {
          gameState.score = message.score;
          updateUI();
        }
        // We generally trust the server for position/rotation but ignore updates for self
        // to avoid jitter. Health updates come via tankDamaged.
      } else if (message.id && message.id !== clientId) {
        // Update for another player
        updateOtherPlayer(message);
      }
      break;

    case 'tankDamaged':
      if (message.id === clientId) {
        if (playerTank) {
          playerTank.userData.health = message.health;
          gameState.health = (message.health / settings.tankMaxHealth) * 100;
          // Remove log
          // console.log(`Received damage update: My health is now ${playerTank.userData.health} (${gameState.health.toFixed(1)}%)`);
          updateUI();
        }
      } else {
        const otherTank = otherPlayers.get(message.id);
        if (otherTank) {
          otherTank.userData.health = message.health;
          // Remove log
          // console.log(`Received damage update: Player ${message.id} health is now ${otherTank.userData.health}`);
        }
      }
      break;

    case 'tankDestroyed':
      if (message.id === clientId) {
        if (playerTank && !playerTank.userData.isDestroyed) {
          playerTank.userData.health = 0;
          playerTank.userData.isDestroyed = true;
          gameState.health = 0;
          createExplosion(playerTank.position, true);
          updateUI();
          gameOver(message.destroyedBy);
        }
      } else {
        const otherTank = otherPlayers.get(message.id);
        if (otherTank && !otherTank.userData.isDestroyed) {
          // Create explosion at tank position before removing
          createExplosion(otherTank.position, true);
          scene.remove(otherTank);
          otherPlayers.delete(message.id);
          if (message.destroyedBy === clientId) {
            gameState.score += 100;
            updateUI();
          }
        }
      }
      break;

    case 'projectile':
      if (message.id !== clientId) {
        handleOtherPlayerProjectile(message);
      }
      break;

    case 'explosion':
      // This case should do nothing as explosions are handled locally
      // based on tankDestroyed or tankHit events.
      // console.error("!!! SERVER DEBUG: Ignoring received 'explosion' message."); // Keep this commented unless debugging source
      break; // Make sure it just breaks

    case 'obstacleDestroyed':
      handleObstacleDestroyed(message);
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
  // Log after switch, showing ID potentially after init assignment
  // console.log(`[Client Message Handler - POST-SWITCH] Processed type: ${message.type}, Message ID: ${message.id || 'N/A'}. Current Client ID: ${clientId}`);

}

// Create tank for other players
function createOtherPlayerTank() {
  const otherTank = buildTankModel({
    hull: 0x8b1a1a,
    hullDark: 0x5c1010,
    metal: 0x9e9e9e
  });

  otherTank.userData.collisionRadius = 7.5;
  otherTank.userData.health = settings.tankMaxHealth;
  otherTank.userData.isDestroyed = false;
  otherTank.userData.type = 'tank';

  return otherTank;
}

// Add other player to the scene
function addOtherPlayer(playerData) {
  // Remove detailed logs
  // console.log('Attempting to add player:', playerData.id, 'with data:', playerData);
  // console.log(`Executing addOtherPlayer for ${playerData.id}`);
  removeOtherPlayer(playerData.id, "from addOtherPlayer pre-add");
  const otherTank = createOtherPlayerTank();
  if (!otherTank) return;
  otherTank.userData.id = playerData.id;
  // Remove ID assignment log
  // console.log(`[addOtherPlayer] Assigned ID: Input=${playerData.id}, Assigned=${otherTank.userData.id}`);

  // ... (position/rotation/health setting code) ...

  scene.add(otherTank);
  // Remove detailed logs
  // if (otherTank.parent === scene) { console.log(...) } else { console.error(...) }
  // console.log(`[addOtherPlayer] Tank ${playerData.id} parent:`, otherTank.parent?.type);
  // console.log(`[addOtherPlayer] Tank ${playerData.id} visible: ${otherTank.visible}`);
  // console.log(`[addOtherPlayer] Tank ${playerData.id} position: ...`);

  otherPlayers.set(playerData.id, otherTank);
  // Remove map logs
  // console.log('Other players map after add:', Array.from(otherPlayers.keys()));
  // console.log(`[addOtherPlayer] otherPlayers map size: ${otherPlayers.size}`);
}

// Remove other player from the scene
function removeOtherPlayer(playerId, context = "unknown context") {
  // Remove context log
  // console.log(`Executing removeOtherPlayer for ${playerId} (Context: ${context})`);
  const player = otherPlayers.get(playerId);
  if (player) {
    // Remove parent check logs
    // const parentBeforeRemove = player.parent;
    scene.remove(player);
    // if (player.parent !== scene) { console.log(...) } else { console.error(...) }
    // console.log(`[removeOtherPlayer] Tank ${playerId} parent before remove: ...`);
    otherPlayers.delete(playerId);
    // Remove map logs
    // console.log('Current other players map after removal:', Array.from(otherPlayers.keys()));
    // console.log(`[removeOtherPlayer] otherPlayers map size: ${otherPlayers.size}`);
  } // Remove else log
  // else { console.log(...) }
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

  otherPlayers.forEach((tank, id) => { // Added id for logging
    if (tank.userData.targetPosition && tank.userData.interpolationStart) {
      const interpolationDuration = now - tank.userData.interpolationStart;
      const progress = Math.min(
        interpolationDuration / UPDATE_INTERVAL, // Use interpolationDuration
        1
      );

      // Smooth position interpolation
      _interpPos.lerpVectors(
        tank.userData.startPosition,
        tank.userData.targetPosition,
        progress
      );
      tank.position.copy(_interpPos);

      // Smooth rotation interpolation
      let startRot = tank.userData.startRotation;
      let targetRot = tank.userData.targetRotation;

      // Ensure we rotate the shortest direction
      while (targetRot - startRot > Math.PI) targetRot -= Math.PI * 2;
      while (targetRot - startRot < -Math.PI) targetRot += Math.PI * 2;

      const interpolatedRotationY = startRot + (targetRot - startRot) * progress;
      tank.rotation.y = interpolatedRotationY;

      // Log interpolation details
      if (progress < 1) { // Log only while interpolating
        // console.log(`[Interpolation] Tank ${id}: Progress=${progress.toFixed(2)}, Pos=${interpolatedPosition.x.toFixed(1)},${interpolatedPosition.z.toFixed(1)}, RotY=${interpolatedRotationY.toFixed(2)}`);
      }

      // Reset interpolation start data when finished to prevent re-interpolation
      if (progress >= 1) {
        tank.userData.interpolationStart = null; // Clear start time
        tank.userData.startPosition = null; // Clear start position
        tank.userData.startRotation = null; // Clear start rotation
      }
    }
  });
}

// Note: updatePlayerTank already includes rate-limited WebSocket updates internally

// Add updateOtherPlayers to the animation loop
const originalAnimate = animate;
animate = function () {
  updateOtherPlayers();
  originalAnimate();
};

// Handle projectile fired by other player
function handleOtherPlayerProjectile(projectileData) {
  const projectile = getPooledObject('projectiles');
  if (!projectile) return;

  projectile.position.set(
    projectileData.position.x,
    projectileData.position.y,
    projectileData.position.z
  );

  projectile.userData.direction = projectile.userData.direction || new THREE.Vector3();
  projectile.userData.direction.set(
    projectileData.direction.x,
    projectileData.direction.y,
    projectileData.direction.z
  );

  projectile.userData.speed = projectileData.speed || settings.projectileSpeed;
  projectile.userData.lifetime = 0;
  projectile.userData.ownerId = projectileData.id;
  projectile.userData.light = null;
  orientShell(projectile);

  attachProjectileToScene(projectile);
  projectiles.push(projectile);
}

// Reusable vector for obstacle destruction checks
const _obstacleDestroyVec = new THREE.Vector3();

// Handle destroyed obstacle
function handleObstacleDestroyed(data) {
  _obstacleDestroyVec.set(data.position.x, data.position.y, data.position.z);

  const obstacle = obstacles.find(obs =>
    obs.position.distanceTo(_obstacleDestroyVec) < 1
  );

  if (obstacle) {
    damageObstacle(obstacle, 1000);
  }
}

// Note: fireProjectile already sends WebSocket message internally
// Note: createExplosion no longer broadcasts - explosions are local only

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
};

// Initialize the game when the page loads
window.addEventListener('load', init);

// Add visibility change handler at the top level with other event listeners
window.addEventListener('visibilitychange', handleVisibilityChange);

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
    createExplosion(tank.position, true);

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

// Check if a spawn position collides with any obstacles
function checkSpawnObstacleCollision(position, excludeTank = null) {
  const tankRadius = settings.tankCollisionRadius;
  const safetyMargin = 3; // Extra margin to prevent spawning too close
  
  for (const obstacle of obstacles) {
    if (!obstacle || obstacle.userData.isDestroyed) continue;
    
    const obstacleRadius = obstacle.userData.collisionRadius || 5;
    const dx = position.x - obstacle.position.x;
    const dz = position.z - obstacle.position.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    // Check if tank would collide with obstacle
    if (distance < tankRadius + obstacleRadius + safetyMargin) {
      return true; // Collision detected
    }
  }
  
  return false; // No collision
}

// Find a valid spawn position that doesn't collide with obstacles or tanks
function findValidSpawnPosition(basePosition = null, spawnRange = 400, excludeTank = null) {
  let validPosition = false;
  let spawnPosition = new THREE.Vector3();
  let attempts = 0;
  const maxAttempts = 50; // Increased attempts to find valid position
  
  while (!validPosition && attempts < maxAttempts) {
    // Generate random position
    if (basePosition && attempts < 10) {
      // First try positions near the base position
      const angle = Math.random() * Math.PI * 2;
      const distance = 20 + Math.random() * 30; // 20-50 units away from base
      spawnPosition.set(
        basePosition.x + Math.cos(angle) * distance,
        0,
        basePosition.z + Math.sin(angle) * distance
      );
    } else {
      // Fall back to random position in range
      spawnPosition.set(
        (Math.random() - 0.5) * spawnRange,
        0,
        (Math.random() - 0.5) * spawnRange
      );
    }
    
    let isValid = true;
    
    // Check collision with obstacles
    if (checkSpawnObstacleCollision(spawnPosition, excludeTank)) {
      isValid = false;
    }
    
    // Check distance from player tank
    if (isValid && playerTank && playerTank !== excludeTank && !playerTank.userData.isDestroyed) {
      const distanceToPlayer = spawnPosition.distanceTo(playerTank.position);
      if (distanceToPlayer < 60) {
        isValid = false;
      }
    }
    
    // Check distance from other tanks
    if (isValid) {
      for (const [id, otherTank] of otherPlayers) {
        if (otherTank !== excludeTank && !otherTank.userData.isDestroyed) {
          const distanceToOther = spawnPosition.distanceTo(otherTank.position);
          if (distanceToOther < 60) {
            isValid = false;
            break;
          }
        }
      }
    }
    
    if (isValid) {
      validPosition = true;
    }
    
    attempts++;
  }
  
  if (!validPosition) {
    console.warn('Could not find valid spawn position after', maxAttempts, 'attempts, using last generated position');
  }
  
  return spawnPosition;
}

// Respawn a tank
function respawnTank(tank) {
  if (!tank || !tank.userData.id) return;

  // Reset tank properties
  tank.userData.health = settings.tankMaxHealth;
  tank.userData.isDestroyed = false;

  // Find a valid spawn position (not colliding with obstacles or other tanks)
  const spawnPosition = findValidSpawnPosition(null, 400, tank);

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

// Active respawn effects for main loop processing
const activeRespawnEffects = [];

// Shared geometry for respawn particles
const respawnParticleGeometry = new THREE.SphereGeometry(0.3, 6, 4);
const respawnParticleMaterial = new THREE.MeshBasicMaterial({
  color: 0x00FF00,
  transparent: true,
  opacity: 0.8
});

// Create a visual effect for tank respawning - integrated with main loop
function createRespawnEffect(position) {
  // Create a light flash
  const light = lightPool.acquire(0x00FF00, 4, 20);
  if (light) {
    light.position.set(position.x, position.y + 5, position.z);
  }

  // Create respawn effect data for tracking
  const respawnData = {
    position: position.clone(),
    particles: [],
    lifetime: 0,
    maxLifetime: 1.0,
    light: light,
    particleCount: 12
  };

  // Create particles in a ring
  for (let i = 0; i < respawnData.particleCount; i++) {
    const particle = new THREE.Mesh(respawnParticleGeometry, respawnParticleMaterial);
    const angle = (i / respawnData.particleCount) * Math.PI * 2;
    particle.position.set(
      position.x + Math.cos(angle) * 5,
      position.y,
      position.z + Math.sin(angle) * 5
    );
    particle.userData.baseAngle = angle;
    scene.add(particle);
    respawnData.particles.push(particle);
  }

  activeRespawnEffects.push(respawnData);
}

// Update respawn effects - called from main animation loop
function updateRespawnEffects(dt) {
  for (let i = activeRespawnEffects.length - 1; i >= 0; i--) {
    const effect = activeRespawnEffects[i];
    effect.lifetime += dt;

    // Check if effect is finished
    if (effect.lifetime >= effect.maxLifetime) {
      // Cleanup particles
      for (const particle of effect.particles) {
        scene.remove(particle);
      }
      // Release light
      if (effect.light) {
        lightPool.release(effect.light);
      }
      activeRespawnEffects.splice(i, 1);
      continue;
    }

    // Update particles
    const progress = effect.lifetime / effect.maxLifetime;
    const time = effect.lifetime;

    for (let j = 0; j < effect.particles.length; j++) {
      const particle = effect.particles[j];
      const baseAngle = particle.userData.baseAngle;

      // Spiral upward animation
      particle.position.y = effect.position.y + time * 10;
      particle.position.x = effect.position.x + Math.cos(baseAngle + time * 2) * (5 - time * 2);
      particle.position.z = effect.position.z + Math.sin(baseAngle + time * 2) * (5 - time * 2);

      // Scale down over time
      const scale = Math.max(0.1, 1 - progress);
      particle.scale.setScalar(scale);
    }
  }
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

// Function to create a message with a unique ID
function createClientMessage(type, payload = {}) {
  clientMessageCounter++;
  return {
    msgId: `${clientId}-${clientMessageCounter}`,
    type: type,
    ...payload
  };
}
