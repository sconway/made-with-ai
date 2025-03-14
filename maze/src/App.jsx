import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import './App.css'

function App() {
  const mountRef = useRef(null)
  const [hasWon, setHasWon] = useState(false)
  const [showRestart, setShowRestart] = useState(false)
  const [isThirdPerson, setIsThirdPerson] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showTransitionIndicator, setShowTransitionIndicator] = useState(false)
  // Gyroscope states
  const [gyroscopeAvailable, setGyroscopeAvailable] = useState(false)
  const [gyroscopeActive, setGyroscopeActive] = useState(false)
  const [showGyroscopeIndicator, setShowGyroscopeIndicator] = useState(false)
  // Add state for permission button and touch controls
  const [showPermissionButton, setShowPermissionButton] = useState(false)
  const [showTouchControls, setShowTouchControls] = useState(false)
  
  // Add references for orientation data and timing
  const orientationRef = useRef({ beta: 0, gamma: 0 })
  const lastMoveTimeRef = useRef(0)
  const isMobileRef = useRef(false)
  
  // Refs for tracking state across renders
  const isThirdPersonRef = useRef(false)
  const playerRef = useRef({
    position: { x: 1, z: 1 },
    direction: new THREE.Vector3(0, 0, 1),
    worldPosition: new THREE.Vector3(0, 0, 0),
    mesh: null
  })
  const gameFunctionsRef = useRef({})
  
  // Add a ref to track the celebration particles
  const celebrationRef = useRef(null)
  
  // Add a ref to track the hasWon state for animation cleanup
  const hasWonRef = useRef(false)
  
  // Update the ref when the state changes
  useEffect(() => {
    isThirdPersonRef.current = isThirdPerson
  }, [isThirdPerson])
  
  // Update the hasWon ref when the state changes
  useEffect(() => {
    hasWonRef.current = hasWon
  }, [hasWon])
  
  // Add this before useEffect
  const [updateParticles, setUpdateParticles] = useState(null)
  
  // Add a ref to track the update particles function
  const updateParticlesRef = useRef(null)
  
  // Add a ref to track if the game has been initialized
  const gameInitializedRef = useRef(false)
  
  // Add a ref to store the maze state
  const mazeRef = useRef(null)
  
  // Add a ref to track if the player has reached the exit
  const exitReachedRef = useRef(false)

  // Move restartGame outside useEffect
  const restartGame = () => {
    console.log('Restarting game...')
    
    if (!gameFunctionsRef.current.generateMaze || !gameFunctionsRef.current.createWalls) {
      console.error('Game functions not initialized')
      return
    }
    
    // Clean up celebration particles if they exist
    if (celebrationRef.current && celebrationRef.current.parent) {
      console.log('Cleaning up celebration particles')
      celebrationRef.current.parent.remove(celebrationRef.current)
      if (celebrationRef.current.geometry) celebrationRef.current.geometry.dispose()
      if (celebrationRef.current.material) celebrationRef.current.material.dispose()
      celebrationRef.current = null
      setUpdateParticles(null)
    }
    
    // Reset game state
    console.log('Resetting game state')
    setHasWon(false)
    setShowRestart(false)
    setIsThirdPerson(false) // Reset to top-down view
    exitReachedRef.current = false // Reset exit reached flag
    
    // Reset player position and direction
    console.log('Resetting player position and direction')
    playerRef.current.position = { x: 1, z: 1 }
    playerRef.current.direction.set(0, 0, 1) // Default direction (down)
    
    // Reset the maze reference to force a new maze generation
    console.log('Resetting maze reference')
    mazeRef.current = null
    
    // Only generate new maze when explicitly restarting
    console.log('Generating new maze')
    gameFunctionsRef.current.generateMaze()
    console.log('Creating new walls')
    gameFunctionsRef.current.createWalls()
    
    // Update player world position to match the entrance position
    console.log('Updating player world position')
    playerRef.current.worldPosition.set(
      (1 - 21/2) * 2,
      1.5,
      (1 - 21/2) * 2
    )
    
    // Create a new player mesh and add it to the maze group
    if (gameFunctionsRef.current.createPlayer && gameFunctionsRef.current.mazeGroup) {
      console.log('Creating new player mesh')
      
      // Remove old player mesh if it exists
      if (playerRef.current.mesh && playerRef.current.mesh.parent) {
        console.log('Removing old player mesh')
        // Remove the player from its parent
        playerRef.current.mesh.parent.remove(playerRef.current.mesh);
        
        // Dispose of the player's children
        playerRef.current.mesh.children.forEach(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      }
      
      // Create a new player mesh
      console.log('Creating new player mesh')
      const newPlayer = gameFunctionsRef.current.createPlayer();
      
      // Position the new player at the entrance
      console.log('Positioning new player at entrance')
      newPlayer.position.copy(playerRef.current.worldPosition);
      
      // Add the new player to the maze group
      console.log('Adding new player to maze group')
      gameFunctionsRef.current.mazeGroup.add(newPlayer);
      console.log('Added new player to maze group');
      
      // Update the player ref
      console.log('Updating player ref')
      playerRef.current.mesh = newPlayer;
    }
    
    // Set initial direction based on available paths after maze is generated
    if (gameFunctionsRef.current.setInitialPlayerDirection) {
      gameFunctionsRef.current.setInitialPlayerDirection(playerRef.current.mesh)
    } else {
      // Fallback to default direction
      playerRef.current.direction.set(0, 0, 1)
    }
    
    // Update player mesh position and rotation
    if (playerRef.current.mesh) {
      playerRef.current.mesh.position.copy(playerRef.current.worldPosition)
      const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z)
      playerRef.current.mesh.rotation.y = angle
      
      // Ensure player is visible in top-down view
      playerRef.current.mesh.visible = true
      
      // Reset opacity for all player parts
      playerRef.current.mesh.children.forEach(child => {
        if (child.material) {
          child.material.opacity = 1;
          child.material.transparent = true;
        }
      });
    }
  }

  // Function to detect mobile devices
  const detectMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
    console.log("Device detection:", isMobile ? "Mobile" : "Desktop")
    isMobileRef.current = isMobile
    return isMobile
  }

  // Function to check if device needs permission
  const needsIOSPermission = () => {
    return window.DeviceOrientationEvent && 
           typeof window.DeviceOrientationEvent.requestPermission === 'function'
  }

  // Function to check if device has gyroscope
  const hasGyroscope = () => {
    // Basic check if DeviceOrientationEvent exists
    return window.DeviceOrientationEvent !== undefined;
  }

  // Function to request gyroscope permission on iOS
  const requestIOSPermission = async () => {
    if (!needsIOSPermission()) {
      console.log("No iOS permission needed, enabling gyroscope directly");
      window.addEventListener('deviceorientation', handleOrientation);
      setGyroscopeActive(true);
      setShowGyroscopeIndicator(true);
      return true;
    }
    
    console.log("Requesting iOS device orientation permission");
    
    try {
      // This must be called in response to a user gesture (like a button click)
      const response = await window.DeviceOrientationEvent.requestPermission();
      console.log("Permission response:", response);
      
      if (response === 'granted') {
        console.log("iOS permission granted!");
        
        // Add event listener and update state
        window.addEventListener('deviceorientation', handleOrientation);
        setGyroscopeActive(true);
        setShowGyroscopeIndicator(true);
        setShowPermissionButton(false);
        setShowTouchControls(false);
        
        // Log confirmation
        console.log("Device orientation listener added");
        return true;
      } else {
        console.log("iOS permission denied:", response);
        
        // Show touch controls instead
        setShowPermissionButton(false);
        setShowTouchControls(true);
        alert("Motion access was denied. Touch controls have been enabled instead.");
        return false;
      }
    } catch (error) {
      console.error("Error requesting iOS permission:", error);
      // Show touch controls as fallback
      setShowPermissionButton(false);
      setShowTouchControls(true);
      alert("Error accessing motion sensors. Touch controls have been enabled instead.");
      return false;
    }
  };

  // Handle direct player movement from touch controls
  const movePlayerDirectly = (direction) => {
    if (hasWonRef.current || !initialRotationDone || isTransitioning) {
      console.log('Movement ignored - Game won, initial rotation not done, or transition in progress');
      return false;
    }
    
    console.log('Direct player movement:', direction);
    
    // Get current player position and mesh
    const currentX = playerRef.current.position.x;
    const currentZ = playerRef.current.position.z;
    const player = playerRef.current.mesh;
    
    if (!player) {
      console.error('Player mesh not found');
      return false;
    }
    
    // Calculate new position based on direction
    let newX = currentX;
    let newZ = currentZ;
    
    if (isThirdPersonRef.current) {
      // First-person mode movement
      switch (direction) {
        case 'ArrowUp':
          // Move forward
          newX = currentX + Math.round(playerRef.current.direction.x);
          newZ = currentZ + Math.round(playerRef.current.direction.z);
          break;
        case 'ArrowDown':
          // Move backward
          newX = currentX - Math.round(playerRef.current.direction.x);
          newZ = currentZ - Math.round(playerRef.current.direction.z);
          break;
        case 'ArrowLeft':
          // Rotate left
          playerRef.current.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
          
          // Update player mesh rotation
          const leftAngle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
          player.rotation.y = leftAngle;
          
          // Update camera look direction
          const leftLookTarget = camera.position.clone();
          leftLookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS));
          camera.lookAt(leftLookTarget);
          
          // Force camera update
          camera.updateProjectionMatrix();
          camera.updateMatrixWorld();
          
          return true; // Rotation complete
          
        case 'ArrowRight':
          // Rotate right
          playerRef.current.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
          
          // Update player mesh rotation
          const rightAngle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
          player.rotation.y = rightAngle;
          
          // Update camera look direction
          const rightLookTarget = camera.position.clone();
          rightLookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS));
          camera.lookAt(rightLookTarget);
          
          // Force camera update
          camera.updateProjectionMatrix();
          camera.updateMatrixWorld();
          
          return true; // Rotation complete
      }
    } else {
      // Top-down mode movement
      switch (direction) {
        case 'ArrowUp':
          newZ = currentZ - 1;
          playerRef.current.direction.set(0, 0, -1);
          break;
        case 'ArrowDown':
          newZ = currentZ + 1;
          playerRef.current.direction.set(0, 0, 1);
          break;
        case 'ArrowLeft':
          newX = currentX - 1;
          playerRef.current.direction.set(-1, 0, 0);
          break;
        case 'ArrowRight':
          newX = currentX + 1;
          playerRef.current.direction.set(1, 0, 0);
          break;
      }
    }
    
    // Check if movement is valid
    if (isInBounds(newX, newZ) && maze[newX][newZ] === 0) {
      // Update player position
      playerRef.current.position.x = newX;
      playerRef.current.position.z = newZ;
      
      // Calculate new world position
      const newWorldPosition = new THREE.Vector3(
        (newX - MAZE_SIZE/2) * WALL_THICKNESS,
        WALL_THICKNESS/2,
        (newZ - MAZE_SIZE/2) * WALL_THICKNESS
      );
      
      // Update player world position
      playerRef.current.worldPosition.copy(newWorldPosition);
      
      // Update player mesh position
      player.position.copy(newWorldPosition);
      
      // Update player rotation
      const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
      player.rotation.y = angle;
      
      // In first-person mode, update camera position
      if (isThirdPersonRef.current) {
        camera.position.set(
          newWorldPosition.x,
          newWorldPosition.y + 1.5, // Eye level
          newWorldPosition.z
        );
        
        // Update camera look direction
        const lookTarget = camera.position.clone();
        lookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS));
        camera.lookAt(lookTarget);
        
        // Force camera update
        camera.updateProjectionMatrix();
        camera.updateMatrixWorld();
      }
      
      // Check for victory condition
      if (newX === MAZE_SIZE-1 && newZ === MAZE_SIZE-2) {
        // Store the fact that player has reached the exit
        exitReachedRef.current = true;
        
        setHasWon(true);
        setShowRestart(true);
        celebrate();
      }
      
      return true; // Movement successful
    } else {
      console.log('Movement blocked - Out of bounds or wall:', newX, newZ);
      return false; // Movement blocked
    }
  };

  // Handle touch control button press with direct player movement
  const handleDirectTouchControl = (e, direction) => {
    if (hasWonRef.current || isTransitioning) return;
    
    // Prevent default behaviors
    e.preventDefault();
    e.stopPropagation();
    
    console.log(`Direct touch control: ${direction}`);
    
    // Move player directly instead of using synthetic events
    movePlayerDirectly(direction);
    
    // Return false to prevent any default behavior
    return false;
  };

  // Simplified orientation handler
  const handleOrientation = (event) => {
    // Log the first few events to confirm we're receiving data
    const now = performance.now();
    const firstEvents = now < 3000;
    
    if (firstEvents) {
      console.log("Orientation event received:", {
        beta: event.beta,
        gamma: event.gamma,
        time: now
      });
    }
    
    // Store orientation data
    orientationRef.current = {
      beta: event.beta,   // Front/back tilt (-180 to 180)
      gamma: event.gamma  // Left/right tilt (-90 to 90)
    };
    
    // Log occasionally
    if (!firstEvents && now % 3000 < 20) {
      console.log("Orientation data:", orientationRef.current);
    }
  };
  
  // Effect to set up gyroscope on component mount
  useEffect(() => {
    // Detect if we're on mobile
    const isMobile = detectMobile()
    console.log("Is mobile:", isMobile)
    
    if (isMobile) {
      if (needsIOSPermission()) {
        // iOS - Show permission button
        console.log("iOS device detected - showing permission button")
        setShowPermissionButton(true)
        
        // Add logging for iOS event availability
        if (window.DeviceOrientationEvent) {
          console.log("DeviceOrientationEvent is available")
          console.log("requestPermission function:", 
                     typeof window.DeviceOrientationEvent.requestPermission)
        } else {
          console.log("DeviceOrientationEvent is NOT available")
        }
      } else if (hasGyroscope()) {
        // Android or other device with gyroscope - setup directly
        console.log("Android or other mobile device with gyroscope - setting up tilt controls")
        window.addEventListener('deviceorientation', handleOrientation)
        setGyroscopeActive(true)
        setShowGyroscopeIndicator(true)
      } else {
        // Mobile without gyroscope - show touch controls
        console.log("Mobile device without gyroscope - showing touch controls")
        setShowTouchControls(true)
      }
    }
    
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])
  
  useEffect(() => {
    console.log('Effect running')
    if (!mountRef.current) {
      console.error('No mount ref')
      return
    }

    try {
      console.log("Initializing 3D scene")
      
      // First detect if we're on mobile
      isMobileRef.current = detectMobile()
      console.log("Is mobile device:", isMobileRef.current)
      
      // Automatically show gyroscope indicator on mobile
      if (isMobileRef.current) {
        setShowGyroscopeIndicator(true)
      }
      
      // Scene setup
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x000000)
      
      // Add lighting - consolidated lighting setup
      const ambientLight = new THREE.AmbientLight(0x404040, 1.5)
      scene.add(ambientLight)
      
      const dirLight = new THREE.DirectionalLight(0xffffff, 1)
      dirLight.position.set(1, 1, 1)
      scene.add(dirLight)
      console.log('Lighting set up')

      // Ensure the mount ref is available
      if (!mountRef.current) {
        console.error("Mount ref is not available")
        return
      }
      
      // Renderer setup - use the canvas element directly
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: mountRef.current
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      console.log('Renderer set up')
      
      // Enable direct orientation handling for mobile
      if (isMobileRef.current) {
        console.log("Setting up orientation handling for mobile")
        const handleDeviceOrientation = (event) => {
          orientationRef.current = {
            beta: event.beta,   // Front/back tilt (-180 to 180)
            gamma: event.gamma  // Left/right tilt (-90 to 90)
          }
          
          // Log orientation data occasionally
          const now = performance.now()
          if (now % 2000 < 20) {
            console.log("Device orientation:", orientationRef.current)
          }
          
          // Auto-activate gyroscope based on receiving actual data
          if (!gyroscopeActive && (event.beta !== null || event.gamma !== null)) {
            console.log("Automatically activating gyroscope - received real data")
            setGyroscopeActive(true)
          }
        }
        
        // Try to set up device orientation events
        if (window.DeviceOrientationEvent) {
          if (typeof window.DeviceOrientationEvent.requestPermission === 'function') {
            // iOS 13+ - need to handle permissions
            console.log("iOS detected - will request permission on first interaction")
            
            // Set up a one-time touch handler to request permissions
            const requestIOSPermission = async () => {
              console.log("Requesting iOS device orientation permission")
              try {
                const permission = await window.DeviceOrientationEvent.requestPermission()
                if (permission === 'granted') {
                  console.log("Permission granted, adding orientation listener")
                  window.addEventListener('deviceorientation', handleDeviceOrientation)
                  setGyroscopeActive(true)
                } else {
                  console.log("Permission denied:", permission)
                }
              } catch (err) {
                console.error("Error requesting permission:", err)
              }
            }
            
            // Add listener for the first touch/interaction
            document.addEventListener('touchstart', () => {
              requestIOSPermission()
              // Only request once
              document.removeEventListener('touchstart', requestIOSPermission)
            }, { once: true })
            
          } else {
            // Android and other devices - no permission needed
            console.log("Adding device orientation listener directly")
            window.addEventListener('deviceorientation', handleDeviceOrientation)
            setGyroscopeActive(true)
          }
        }
      }

      // Maze parameters
      const MAZE_SIZE = 21
      const CELL_SIZE = 2
      const WALL_HEIGHT = 3
      const WALL_THICKNESS = 2
      
      // Camera setup
      // Calculate camera height based on maze size and screen orientation
      const calculateOptimalCameraHeight = (hasControls = false) => {
        const isMobile = window.innerWidth < 768;
        const isLandscape = window.innerWidth > window.innerHeight;
        
        // Base height calculation on maze size
        const mazeWorldSize = MAZE_SIZE * WALL_THICKNESS;
        
        // For mobile devices, we need a higher camera position to see the full maze
        // Adjust base height depending on whether touch controls are visible
        let baseHeight = mazeWorldSize * 1.5;
        
        // If touch controls are showing, adjust camera height to account for them
        if (isMobile && (hasControls || showTouchControls)) {
          // In portrait mode, we need more adjustment
          if (!isLandscape) {
            baseHeight = mazeWorldSize * 1.8; // More height for touch controls in portrait
          } else {
            baseHeight = mazeWorldSize * 1.6; // Less adjustment needed in landscape
          }
        }
        
        // Adjust for different device types and orientations
        if (isMobile) {
          return isLandscape ? baseHeight * 0.8 : baseHeight * 1.2;
        } else {
          return baseHeight;
        }
      };
      
      // Make the function available globally
      window.calculateOptimalCameraHeight = calculateOptimalCameraHeight;
      
      // Set initial camera position for top-down view
      const cameraHeight = calculateOptimalCameraHeight()
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.set(0, cameraHeight, 0)
      camera.lookAt(0, 0, 0)
      console.log('Camera set up')
      
      // Check if running on mobile device
      const isMobile = detectMobile()
      
      // Controls - use OrbitControls for desktop, simpler controls for mobile
      let controls;
      
      if (!isMobile) {
        // Desktop - use OrbitControls
        controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.1
        controls.target.set(0, 0, 0)
        controls.update()
        console.log('Desktop controls set up')
      } else {
        // Mobile - use simple camera handling without OrbitControls
        // Create a simple controls object with just the essential methods
        controls = {
          target: new THREE.Vector3(0, 0, 0),
          update: () => {},
          enabled: false,
          enableRotate: false,
          enableZoom: false,
          enablePan: false,
          dispose: () => {} // Add a dummy dispose method
        }
        console.log('Mobile simplified controls set up')
      }
      
      // Initialize maze grid - use existing maze if game has been won
      const maze = hasWon && mazeRef.current ? 
        mazeRef.current : 
        Array(MAZE_SIZE).fill().map(() => Array(MAZE_SIZE).fill(1))
      
      // Store maze in ref for persistence across re-renders
      mazeRef.current = maze

      // Store key variables in window for global access from touch controls
      window.MAZE_SIZE = MAZE_SIZE;
      window.WALL_THICKNESS = WALL_THICKNESS;
      window.playerRef = playerRef;
      window.mazeRef = mazeRef;
      window.isThirdPersonRef = isThirdPersonRef;
      window.gameCamera = camera;
      window.maze = maze;
      
      // Function to celebrate win - exposed globally for touch controls
      window.celebrateWin = () => {
        // Store the fact that player has reached the exit
        exitReachedRef.current = true;
        setHasWon(true);
        setShowRestart(true);
        celebrate();
      };
      
      // Create maze group
      const mazeGroup = new THREE.Group()
      scene.add(mazeGroup)
      console.log('Maze group created')
      
      // Store maze group reference
      gameFunctionsRef.current.mazeGroup = mazeGroup

      // Wall material with glow effect
      const wallMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          baseColor: { value: new THREE.Color(0x4466ff) }
        },
        vertexShader: `
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            vPosition = position;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 baseColor;
          varying vec3 vPosition;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          
          void main() {
            // Enhanced edge detection
            vec3 viewDir = normalize(vViewPosition);
            float fresnel = pow(1.0 - abs(dot(vNormal, viewDir)), 3.0);
            
            // Pulsing effect
            float pulse = sin(time * 2.0) * 0.15 + 0.85;
            
            // Enhanced edge glow with fresnel
            float edgeGlow = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 2.0) * 1.5;
            
            // Height-based gradient
            float heightFactor = (vPosition.y + 3.0) / 6.0;
            
            // Combine colors with enhanced edge effect
            vec3 color = mix(baseColor, vec3(0.7, 0.8, 1.0), heightFactor * 0.3);
            vec3 edgeColor = vec3(0.8, 0.9, 1.0);
            
            // Final color with stronger edges
            vec3 finalColor = mix(
              color * pulse,
              edgeColor,
              edgeGlow + fresnel * 0.5
            );
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `,
        side: THREE.DoubleSide
      })
      console.log('Wall material created')

      // Function to check if a position is within maze bounds
      const isInBounds = (x, z) => {
        return x >= 0 && x < MAZE_SIZE && z >= 0 && z < MAZE_SIZE
      }

      // Function to get valid neighbors for maze generation
      const getNeighbors = (x, z) => {
        const neighbors = []
        const directions = [
          [0, 2],   // North
          [2, 0],   // East
          [0, -2],  // South
          [-2, 0]   // West
        ]
        
        for (let i = directions.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [directions[i], directions[j]] = [directions[j], directions[i]]
        }
        
        for (const [dx, dz] of directions) {
          const newX = x + dx
          const newZ = z + dz
          
          if (isInBounds(newX, newZ) && maze[newX][newZ] === 1) {
            neighbors.push([newX, newZ, dx/2, dz/2])
          }
        }
        
        return neighbors
      }

      // Generate maze using DFS algorithm
      const generateMaze = () => {
        // Skip maze generation if the game has been won and we have an existing maze
        if (hasWon && mazeRef.current) {
          console.log('Game has been won, preserving existing maze')
          return
        }
        
        console.log('Generating new maze')
        
        // Fill the maze with walls
        for (let x = 0; x < MAZE_SIZE; x++) {
          for (let z = 0; z < MAZE_SIZE; z++) {
            maze[x][z] = 1
          }
        }

        const stack = []
        const startX = 1
        const startZ = 1
        
        maze[startX][startZ] = 0
        stack.push([startX, startZ])

        while (stack.length > 0) {
          const [currentX, currentZ] = stack[stack.length - 1]
          const neighbors = getNeighbors(currentX, currentZ)

          if (neighbors.length === 0) {
            stack.pop()
            continue
          }

          const [nextX, nextZ, pathX, pathZ] = neighbors[Math.floor(Math.random() * neighbors.length)]
          maze[nextX][nextZ] = 0
          maze[currentX + pathX][currentZ + pathZ] = 0
          stack.push([nextX, nextZ])
        }

        // Create entrance and exit
        maze[0][1] = 0
        maze[MAZE_SIZE-1][MAZE_SIZE-2] = 0
        
        console.log('Maze generated with entrance at (0,1) and exit at (' + (MAZE_SIZE-1) + ',' + (MAZE_SIZE-2) + ')')
        
        // Verify path exists
        const visited = new Set()
        const pathExists = (pos) => {
          const [x, z] = pos
          if (x === MAZE_SIZE-2 && z === MAZE_SIZE-2) return true
          visited.add(`${x},${z}`)
          
          const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
          for (const [dx, dz] of directions) {
            const newX = x + dx
            const newZ = z + dz
            if (isInBounds(newX, newZ) && maze[newX][newZ] === 0 && !visited.has(`${newX},${newZ}`)) {
              if (pathExists([newX, newZ])) return true
            }
          }
          return false
        }
        
        if (!pathExists([1, 1])) {
          console.log('No path found from start to exit, regenerating maze')
          generateMaze()
        } else {
          console.log('Valid path found from start to exit')
        }
        
        // Store the generated maze in the ref for future use
        mazeRef.current = maze
      }
      console.log('Maze generation function created')

      // Create walls for the maze
      const createWalls = () => {
        // Only clear the maze group if the game hasn't been won
        // This preserves the walls when the player has completed the maze
        if (!hasWon || !mazeRef.current) {
          console.log('Creating new walls for the maze')
          
          // Remove all existing objects from the maze group
          while(mazeGroup.children.length > 0) {
            const object = mazeGroup.children[0]
            
            // Check if the object is a Group (like the player)
            if (object.isGroup) {
              // For groups, dispose of each child's geometry and material
              object.children.forEach(child => {
                if (child.geometry) child.geometry.dispose()
                if (child.material) child.material.dispose()
              })
            } else {
              // For regular meshes, dispose of geometry and material directly
              if (object.geometry) object.geometry.dispose()
              if (object.material) object.material.dispose()
            }
            
            mazeGroup.remove(object)
          }

          // Create new walls based on the maze grid
          for (let x = 0; x < MAZE_SIZE; x++) {
            for (let z = 0; z < MAZE_SIZE; z++) {
              if (maze[x][z] === 1) {
                const wallGeometry = new THREE.BoxGeometry(
                  WALL_THICKNESS,
                  WALL_HEIGHT,
                  WALL_THICKNESS
                )
                const wall = new THREE.Mesh(wallGeometry, wallMaterial)
                wall.position.set(
                  (x - MAZE_SIZE/2) * WALL_THICKNESS,
                  WALL_HEIGHT/2,
                  (z - MAZE_SIZE/2) * WALL_THICKNESS
                )
                mazeGroup.add(wall)

                if (x === 0 || x === MAZE_SIZE-1 || z === 0 || z === MAZE_SIZE-1) {
                  if (x < MAZE_SIZE-1 && maze[x+1][z] === 1) {
                    const horizontalWall = new THREE.Mesh(
                      new THREE.BoxGeometry(WALL_THICKNESS, WALL_HEIGHT, WALL_THICKNESS),
                      wallMaterial
                    )
                    horizontalWall.position.set(
                      (x - MAZE_SIZE/2 + 0.5) * WALL_THICKNESS,
                      WALL_HEIGHT/2,
                      (z - MAZE_SIZE/2) * WALL_THICKNESS
                    )
                    mazeGroup.add(horizontalWall)
                  }
                  
                  if (z < MAZE_SIZE-1 && maze[x][z+1] === 1) {
                    const verticalWall = new THREE.Mesh(
                      new THREE.BoxGeometry(WALL_THICKNESS, WALL_HEIGHT, WALL_THICKNESS),
                      wallMaterial
                    )
                    verticalWall.position.set(
                      (x - MAZE_SIZE/2) * WALL_THICKNESS,
                      WALL_HEIGHT/2,
                      (z - MAZE_SIZE/2 + 0.5) * WALL_THICKNESS
                    )
                    mazeGroup.add(verticalWall)
                  }
                }
              }
            }
          }
        } else {
          console.log('Game has been won, preserving existing maze walls')
        }
      }
      console.log('Wall creation function created')

      // Store the functions in the ref
      gameFunctionsRef.current.generateMaze = generateMaze
      gameFunctionsRef.current.createWalls = createWalls
      
      // Function to set the initial player direction based on available paths
      const setInitialPlayerDirection = (playerMesh) => {
        console.log('Setting initial player direction')
        
        if (!playerMesh) {
          console.error('Player mesh not provided to setInitialPlayerDirection')
          return
        }
        
        // Get the starting position
        const startX = 1
        const startZ = 1
        
        // Check all four directions from the starting position
        const directions = [
          { dx: 0, dz: 1, name: 'down', vector: new THREE.Vector3(0, 0, 1) },
          { dx: 1, dz: 0, name: 'right', vector: new THREE.Vector3(1, 0, 0) },
          { dx: 0, dz: -1, name: 'up', vector: new THREE.Vector3(0, 0, -1) },
          { dx: -1, dz: 0, name: 'left', vector: new THREE.Vector3(-1, 0, 0) }
        ]
        
        console.log('Checking available directions from starting position:', startX, startZ)
        
        // Filter out directions that lead to walls or the entrance
        const validDirections = directions.filter(dir => {
          const newX = startX + dir.dx
          const newZ = startZ + dir.dz
          
          // Skip the entrance at (0, 1)
          if (newX === 0 && newZ === 1) {
            console.log(`Direction ${dir.name} leads to entrance, skipping`)
            return false
          }
          
          // Check if the direction is valid (in bounds and not a wall)
          const isValid = isInBounds(newX, newZ) && maze[newX][newZ] === 0
          console.log(`Direction ${dir.name} leads to (${newX}, ${newZ}): ${isValid ? 'valid' : 'invalid'}`)
          return isValid
        })
        
        console.log('Valid directions:', validDirections.map(d => d.name))
        
        // Set the player direction to the first valid direction, or default to down
        if (validDirections.length > 0) {
          const chosenDirection = validDirections[0]
          console.log('Chosen direction:', chosenDirection.name)
          
          // Update the player's direction vector
          playerRef.current.direction.copy(chosenDirection.vector)
          
          // Update the player's rotation
          const angle = Math.atan2(chosenDirection.vector.x, chosenDirection.vector.z)
          playerMesh.rotation.y = angle
          console.log('Set player rotation to:', angle)
        } else {
          console.log('No valid directions found, defaulting to down')
          playerRef.current.direction.set(0, 0, 1)
          playerMesh.rotation.y = 0
        }
      }
      
      // Add the function to the ref
      gameFunctionsRef.current.setInitialPlayerDirection = setInitialPlayerDirection
      
      // Generate initial maze only if the game hasn't been won
      if (!hasWon) {
        generateMaze()
        createWalls()
        console.log('Initial maze created')
      } else {
        console.log('Game has been won, preserving maze and player position')
      }

      // Add lights
      const mazeLighting = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(mazeLighting)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
      directionalLight.position.set(50, 100, 50)
      scene.add(directionalLight)

      const pointLight1 = new THREE.PointLight(0x4444ff, 2, 150)
      pointLight1.position.set(50, 50, 50)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(0x4444ff, 2, 150)
      pointLight2.position.set(-50, 50, -50)
      scene.add(pointLight2)
      console.log('Lights added')

      // Initial animation
      let initialRotationDone = false
      const startTime = performance.now()
      const ROTATION_DURATION = 1000

      // Celebration effect
      const celebrate = () => {
        console.log('Celebration function called - START');
        
        const particleCount = 2000;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        
        // Create particles at the player's position
        for (let i = 0; i < particleCount; i++) {
          // All particles start at player position
          positions[i * 3] = playerRef.current.worldPosition.x;
          positions[i * 3 + 1] = playerRef.current.worldPosition.y;
          positions[i * 3 + 2] = playerRef.current.worldPosition.z;
          
          // Vibrant colors
          colors[i * 3] = Math.random();
          colors[i * 3 + 1] = Math.random();
          colors[i * 3 + 2] = Math.random();
        }
        
        particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        particles.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const particleMaterial = new THREE.PointsMaterial({
          size: 0.5,
          vertexColors: true,
          transparent: true,
          opacity: 1.0,
          blending: THREE.AdditiveBlending
        });
        
        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);
        console.log('Particle system added to scene');
        
        // Store velocities for each particle
        const velocities = [];
        for (let i = 0; i < particleCount; i++) {
          // Random direction for each particle
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);
          
          // Speed between 0.05 and 0.15
          const speed = 0.05 + Math.random() * 0.1;
          
          velocities.push(
            Math.sin(phi) * Math.cos(theta) * speed,
            Math.sin(phi) * Math.sin(theta) * speed,
            Math.cos(phi) * speed
          );
        }
        
        // Store reference for cleanup
        celebrationRef.current = particleSystem;
        
        const updateFunc = () => {
          console.log('Update particles function called - frame');
          
          // If game is no longer in won state, clean up
          if (!hasWonRef.current) {
            console.log('Game no longer in won state, cleaning up particles');
            if (particleSystem.parent) {
              scene.remove(particleSystem);
              particleSystem.geometry.dispose();
              particleMaterial.dispose();
            }
            celebrationRef.current = null;
            updateParticlesRef.current = null;
            return false;
          }
          
          const positions = particleSystem.geometry.attributes.position.array;
          let anyParticleAlive = false;
          
          // Update particle positions
          for (let i = 0; i < particleCount; i++) {
            const idx = i * 3;
            
            // Update position based on velocity
            positions[idx] += velocities[idx];
            positions[idx + 1] += velocities[idx + 1];
            positions[idx + 2] += velocities[idx + 2];
            
            // Add gravity effect
            velocities[idx + 1] -= 0.001;
            
            // Calculate distance from origin
            const dx = positions[idx] - playerRef.current.worldPosition.x;
            const dy = positions[idx + 1] - playerRef.current.worldPosition.y;
            const dz = positions[idx + 2] - playerRef.current.worldPosition.z;
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
            
            // If particle is still within reasonable distance, it's alive
            if (distance < 20) {
              anyParticleAlive = true;
            }
          }
          
          // Update the geometry
          particleSystem.geometry.attributes.position.needsUpdate = true;
          
          // Fade out particles over time
          const elapsed = performance.now() - now;
          if (elapsed > 1000) {
            particleMaterial.opacity = Math.max(0, 1 - (elapsed - 1000) / 1000);
          }
          
          // If all particles are too far away or animation is done, clean up
          if (!anyParticleAlive || elapsed > 2000) {
            console.log('Animation complete, cleaning up particles');
            scene.remove(particleSystem);
            particleSystem.geometry.dispose();
            particleMaterial.dispose();
            celebrationRef.current = null;
            updateParticlesRef.current = null;
            return false;
          }
          
          return true;
        };
        
        const now = performance.now();
        console.log('Setting updateParticles function');
        // Use the ref instead of state for immediate update
        updateParticlesRef.current = updateFunc;
        
        return () => {
          console.log('Cleanup function called');
          if (particleSystem.parent) {
            scene.remove(particleSystem);
            particleSystem.geometry.dispose();
            particleMaterial.dispose();
          }
          celebrationRef.current = null;
          updateParticlesRef.current = null;
        };
      };

      // Create player
      const createPlayer = () => {
        const playerGeometry = new THREE.Group()
        
        // Create a sphere for the player
        const sphereGeometry = new THREE.SphereGeometry(WALL_THICKNESS/2, 16, 16)
        const sphereMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xffff00  // Yellow color
        })
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
        
        playerGeometry.add(sphere)
        
        return playerGeometry
      }
      
      // Create initial player
      const player = createPlayer()
      
      // Store the createPlayer function in the game functions ref for reuse
      gameFunctionsRef.current.createPlayer = createPlayer
      
      // Check if there's already a player in the maze group (when game has been won)
      let existingPlayer = null;
      if (hasWon) {
        // Find the existing player in the maze group
        for (let i = 0; i < mazeGroup.children.length; i++) {
          const child = mazeGroup.children[i];
          // The player is now a group with a sphere
          if (child.isGroup && child.children.length > 0 && 
              child.children[0].geometry instanceof THREE.SphereGeometry) {
            existingPlayer = child;
            break;
          }
        }
        
        // If we found the existing player, remove it so we can add the new one
        if (existingPlayer) {
          // Properly dispose of the existing player's children
          existingPlayer.children.forEach(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
          });
          mazeGroup.remove(existingPlayer);
          console.log('Removed existing player from maze group');
        }
      }
      
      // Set player position and direction
      if (!hasWon) {
        // New game - set initial position
        player.position.set(
          (1 - MAZE_SIZE/2) * WALL_THICKNESS,
          WALL_THICKNESS/2,
          (1 - MAZE_SIZE/2) * WALL_THICKNESS
        )
        playerRef.current.mesh = player
        playerRef.current.worldPosition.copy(player.position)
        
        // Now that player is created, set initial direction
        setInitialPlayerDirection(player)
      } else {
        // Game won - check if player has reached the exit
        if (exitReachedRef.current) {
          // If player has reached the exit, position them at the exit
          const exitX = MAZE_SIZE-1;
          const exitZ = MAZE_SIZE-2;
          
          // Calculate world position for the exit
          const exitWorldPosition = new THREE.Vector3(
            (exitX - MAZE_SIZE/2) * WALL_THICKNESS,
            WALL_THICKNESS/2,
            (exitZ - MAZE_SIZE/2) * WALL_THICKNESS
          );
          
          console.log('Positioning player at exit:', exitWorldPosition);
          player.position.copy(exitWorldPosition);
          playerRef.current.worldPosition.copy(exitWorldPosition);
          playerRef.current.position = { x: exitX, z: exitZ };
        } else {
          // Otherwise use the existing player position from the ref
          console.log('Using existing player position:', playerRef.current.worldPosition);
          player.position.copy(playerRef.current.worldPosition);
        }
        
        playerRef.current.mesh = player;
        
        // Set player rotation based on current direction
        const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
        player.rotation.y = angle;
      }
      
      // Add the player to the maze group
      mazeGroup.add(player)
      playerRef.current.mesh = player
      console.log('Player created and added to maze group')

      // Add key handler for view toggle
      const handleViewToggle = (event) => {
        if (event.key.toLowerCase() === 'v') {
          console.log('View toggle key pressed')
          event.preventDefault()
          event.stopPropagation()
          event.stopImmediatePropagation()
          
          // Prevent multiple transitions from happening at once
          if (isTransitioning) {
            console.log('Transition already in progress, ignoring key press')
            return false
          }
          
          setIsTransitioning(true)
          
          setIsThirdPerson(prev => {
            const newIsThirdPerson = !prev
            console.log('Switching to:', newIsThirdPerson ? 'POV mode' : 'Top-down mode')
            isThirdPersonRef.current = newIsThirdPerson
            
            // Store initial states
            const startPos = camera.position.clone()
            const startTarget = new THREE.Vector3().copy(controls.target)
            const startFOV = camera.fov
            const startMazeRotation = {
              x: mazeGroup.rotation.x,
              y: mazeGroup.rotation.y,
              z: mazeGroup.rotation.z
            }
            
            // End states for camera position
            const endPos = newIsThirdPerson ?
              new THREE.Vector3(
                playerRef.current.worldPosition.x,
                playerRef.current.worldPosition.y + 1.5,  // Eye level
                playerRef.current.worldPosition.z
              ) :
              new THREE.Vector3(0, calculateOptimalCameraHeight(), 0)  // Top-down view with optimal height
            
            const endTarget = newIsThirdPerson ?
              new THREE.Vector3(
                playerRef.current.worldPosition.x + playerRef.current.direction.x * WALL_THICKNESS,
                playerRef.current.worldPosition.y + 1.5,  // Eye level
                playerRef.current.worldPosition.z + playerRef.current.direction.z * WALL_THICKNESS
              ) :
              new THREE.Vector3(0, 0, 0)  // Look at center for top-down view
            
            // End states for other properties
            const isMobile = window.innerWidth < 768
            const isLandscape = window.innerWidth > window.innerHeight
            let endFOV = newIsThirdPerson ? 75 : 60  // Default FOV values
            
            // Adjust FOV for mobile devices
            if (isMobile) {
              endFOV = newIsThirdPerson ? 75 : (isLandscape ? 75 : 80)
            }
            
            const endMazeRotation = {
              x: newIsThirdPerson ? 0 : 0,
              y: newIsThirdPerson ? 0 : 0,
              z: newIsThirdPerson ? 0 : 0
            }
            
            // Store player visibility state
            const startPlayerOpacity = player.visible ? 1 : 0
            const endPlayerOpacity = newIsThirdPerson ? 0 : 1
            
            // Make player visible during transition but potentially transparent
            player.visible = true
            
            // Set material opacity if not already set
            player.children.forEach(child => {
              if (child.material) {
                if (!child.material.transparent) {
                  child.material.transparent = true
                }
                child.material.opacity = startPlayerOpacity;
              }
            });
            
            // Disable controls during transition
            if (!isMobileRef.current) {
              controls.enabled = false
            }
            
            // Animation duration in milliseconds
            const duration = 1200  // 1.2 seconds for a smoother transition
            let animationFrameId = null
            
            // Animation function
            const animateCamera = (currentTime) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Custom easing function for smoother motion (cubic bezier approximation)
              const easeInOutCubic = progress => progress < 0.5 
                ? 4 * progress * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 3) / 2
              
              const easedProgress = easeInOutCubic(progress)
              
              // Interpolate position
              camera.position.lerpVectors(startPos, endPos, easedProgress)
              
              // Interpolate target
              const interpolatedTarget = new THREE.Vector3().lerpVectors(startTarget, endTarget, easedProgress)
              if (!isMobileRef.current) {
                controls.target.copy(interpolatedTarget)
              }
              camera.lookAt(interpolatedTarget)
              
              // Interpolate FOV
              camera.fov = THREE.MathUtils.lerp(startFOV, endFOV, easedProgress)
              camera.updateProjectionMatrix()
              
              // Interpolate maze rotation
              mazeGroup.rotation.x = THREE.MathUtils.lerp(startMazeRotation.x, endMazeRotation.x, easedProgress)
              mazeGroup.rotation.y = THREE.MathUtils.lerp(startMazeRotation.y, endMazeRotation.y, easedProgress)
              mazeGroup.rotation.z = THREE.MathUtils.lerp(startMazeRotation.z, endMazeRotation.z, easedProgress)
              
              // Interpolate player opacity
              player.children.forEach(child => {
                if (child.material) {
                  child.material.opacity = THREE.MathUtils.lerp(startPlayerOpacity, endPlayerOpacity, easedProgress)
                }
              })
              
              // If animation is complete
              if (progress === 1) {
                // Clean up animation frame
                cancelAnimationFrame(animationFrameId)
                
                // Update player visibility based on view
                player.visible = !newIsThirdPerson
                
                // Reset player opacity
                player.children.forEach(child => {
                  if (child.material) {
                    child.material.opacity = endPlayerOpacity
                    if (endPlayerOpacity === 1) {
                      child.material.transparent = false
                    }
                  }
                })
                
                // Re-enable controls in desktop mode if in top-down view
                if (!isMobileRef.current && !newIsThirdPerson) {
                  controls.enabled = true
                  controls.enableRotate = true
                  controls.enableZoom = true
                  controls.enablePan = true
                } else {
                  // For POV view or mobile, ensure consistent camera position and orientation
                  camera.position.copy(endPos)
                  camera.lookAt(endTarget)
                }
                
                // End transition state
                setIsTransitioning(false)
                
                // Show transition indicator briefly
                setShowTransitionIndicator(true)
                setTimeout(() => setShowTransitionIndicator(false), 1500)
                
                return
              }
              
              // Continue animation
              animationFrameId = requestAnimationFrame(animateCamera)
            }
            
            // Start animation
            const startTime = performance.now()
            animationFrameId = requestAnimationFrame(animateCamera)
            
            return newIsThirdPerson
          })
          
          return false
        }
      }

      // Modify handleKeyDown for both views
      const handleKeyDown = (event) => {
        if (hasWonRef.current || !initialRotationDone || isTransitioning) {
          console.log('Key ignored - Game won, initial rotation not done, or transition in progress')
          return
        }
        
        const key = event.key.toLowerCase()
        console.log('Key pressed:', key, 'Current mode:', isThirdPersonRef.current ? 'POV' : 'Top-down')
        
        // Ignore 'v' key completely
        if (key === 'v') return
        
        event.preventDefault()
        const currentX = playerRef.current.position.x
        const currentZ = playerRef.current.position.z
        let newX = currentX
        let newZ = currentZ
        let moved = false
        
        // Get the current player mesh reference
        const player = playerRef.current.mesh
        
        if (!player) {
          console.error('Player mesh not found')
          return
        }
        
        if (isThirdPersonRef.current) {
          console.log('Handling POV mode controls')
          // POV mode controls
          switch(key) {
            case 'arrowup':
            case 'w':
              console.log('Moving forward - Current position:', currentX, currentZ)
              console.log('Current direction:', playerRef.current.direction)
              newX = currentX + Math.round(playerRef.current.direction.x)
              newZ = currentZ + Math.round(playerRef.current.direction.z)
              console.log('New position will be:', newX, newZ)
              moved = 'move'
              break
            case 'arrowdown':
            case 's':
              console.log('Moving backward - Current position:', currentX, currentZ)
              console.log('Current direction:', playerRef.current.direction)
              newX = currentX - Math.round(playerRef.current.direction.x)
              newZ = currentZ - Math.round(playerRef.current.direction.z)
              console.log('New position will be:', newX, newZ)
              moved = 'move'
              break
            case 'arrowleft':
            case 'a':
              console.log('Rotating left - Current direction:', playerRef.current.direction)
              playerRef.current.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2)
              console.log('New direction:', playerRef.current.direction)
              moved = 'rotate'
              break
            case 'arrowright':
            case 'd':
              console.log('Rotating right - Current direction:', playerRef.current.direction)
              playerRef.current.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2)
              console.log('New direction:', playerRef.current.direction)
              moved = 'rotate'
              break
          }

          // Handle movement in POV mode
          if (moved === 'move') {
            if (isInBounds(newX, newZ) && maze[newX][newZ] === 0) {
              console.log('Movement is valid, updating positions')
              // Update player position
              playerRef.current.position.x = newX
              playerRef.current.position.z = newZ
              
              // Calculate new world position
              const newWorldPosition = new THREE.Vector3(
                (newX - MAZE_SIZE/2) * WALL_THICKNESS,
                WALL_THICKNESS/2,
                (newZ - MAZE_SIZE/2) * WALL_THICKNESS
              )
              console.log('New world position:', newWorldPosition)
              
              // Update player world position
              playerRef.current.worldPosition.copy(newWorldPosition)
              
              // Update player mesh position even in first-person mode
              // This ensures the position is correct when switching back to top-down
              player.position.copy(newWorldPosition)
              console.log('Updated player mesh position to:', player.position)
              
              // Update camera position directly
              camera.position.set(
                newWorldPosition.x,
                newWorldPosition.y + 1.5,  // Eye level
                newWorldPosition.z
              )
              console.log('New camera position:', camera.position)
              
              // Update camera look direction
              const lookTarget = camera.position.clone()
              lookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS))
              camera.lookAt(lookTarget)
              console.log('Camera looking at:', lookTarget)
              
              // Force camera update
              camera.updateProjectionMatrix()
              camera.updateMatrixWorld()

              // Check for victory condition
              if (newX === MAZE_SIZE-1 && newZ === MAZE_SIZE-2) {
                // Store the fact that player has reached the exit
                exitReachedRef.current = true
                
                setHasWon(true)
                setShowRestart(true)
                const cleanupParticles = celebrate()
                return () => {
                  if (cleanupParticles) cleanupParticles()
                }
              }
            } else {
              console.log('Movement blocked - Out of bounds or wall:', newX, newZ)
            }
          } else if (moved === 'rotate') {
            console.log('Handling rotation')
            
            // Update player mesh rotation even in first-person mode
            // This ensures the rotation is correct when switching back to top-down
            const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z)
            player.rotation.y = angle
            console.log('Updated player mesh rotation to:', angle)
            
            // Update camera look direction after rotation
            const lookTarget = camera.position.clone()
            lookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS))
            camera.lookAt(lookTarget)
            console.log('Camera looking at new direction:', lookTarget)
            
            // Force camera update
            camera.updateProjectionMatrix()
            camera.updateMatrixWorld()
          }
        } else {
          // Top-down mode controls
          console.log('Handling top-down mode controls')
          switch(key) {
            case 'arrowup':
            case 'w':
              console.log('Moving up - Current position:', currentX, currentZ)
              newZ = currentZ - 1
              playerRef.current.direction.set(0, 0, -1)
              break
            case 'arrowdown':
            case 's':
              console.log('Moving down - Current position:', currentX, currentZ)
              newZ = currentZ + 1
              playerRef.current.direction.set(0, 0, 1)
              break
            case 'arrowleft':
            case 'a':
              console.log('Moving left - Current position:', currentX, currentZ)
              newX = currentX - 1
              playerRef.current.direction.set(-1, 0, 0)
              break
            case 'arrowright':
            case 'd':
              console.log('Moving right - Current position:', currentX, currentZ)
              newX = currentX + 1
              playerRef.current.direction.set(1, 0, 0)
              break
            default:
              return
          }
          
          console.log('Attempting to move to:', newX, newZ)
          console.log('Maze value at target position:', maze[newX][newZ])
          console.log('Is in bounds:', isInBounds(newX, newZ))

          if (isInBounds(newX, newZ) && maze[newX][newZ] === 0) {
            console.log('Movement is valid, updating positions')
            playerRef.current.position.x = newX
            playerRef.current.position.z = newZ
            const newPosition = new THREE.Vector3(
              (newX - MAZE_SIZE/2) * WALL_THICKNESS,
              WALL_THICKNESS/2,
              (newZ - MAZE_SIZE/2) * WALL_THICKNESS
            )
            playerRef.current.worldPosition.copy(newPosition)
            
            // Use the player reference from playerRef.current.mesh
            player.position.copy(newPosition)
            const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z)
            player.rotation.y = angle

            if (newX === MAZE_SIZE-1 && newZ === MAZE_SIZE-2) {
              // Store the fact that player has reached the exit
              exitReachedRef.current = true
              
              setHasWon(true)
              setShowRestart(true)
              const cleanupParticles = celebrate()
              return () => {
                if (cleanupParticles) cleanupParticles()
              }
            }
          }
        }
      }

      // Clean up any existing event listeners
      window.removeEventListener('keydown', handleViewToggle, true)
      window.removeEventListener('keydown', handleKeyDown)
      
      // Add event listeners in the correct order
      console.log('Attaching event listeners')
      window.addEventListener('keydown', handleViewToggle, true) // Use capture phase
      window.addEventListener('keydown', handleKeyDown)
      console.log('Event listeners attached')

      // Animation loop
      let animationFrameId
      function animate(currentTime) {
        animationFrameId = requestAnimationFrame(animate);
        
        // Handle gyroscope-based movement on mobile devices
        if (isMobileRef.current && gyroscopeActive && !hasWonRef.current && !isTransitioning) {
          const now = performance.now();
          const { beta, gamma } = orientationRef.current;
          
          // Debug logs for the first few seconds
          if (now < 5000 && now % 500 < 20) {
            console.log("Animation loop - orientation:", { beta, gamma });
          }
          
          // Only proceed if we have valid orientation data
          if (beta !== null && gamma !== null) {
            // Very sensitive tilt detection for mobile
            // Note: beta is front/back tilt, gamma is left/right tilt
            
            // Calculate tilt magnitude with very low threshold
            const betaMagnitude = Math.abs(beta);
            const gammaMagnitude = Math.abs(gamma);
            
            // Determine movement direction based on tilt
            // We want movement to feel intuitive based on phone tilt
            let direction = '';
            const tiltThreshold = 5; // Very low threshold for detection
            
            // Determine the primary direction based on larger tilt
            if (betaMagnitude > gammaMagnitude && betaMagnitude > tiltThreshold) {
              // Front/back tilt is dominant
              direction = beta > 0 ? 'ArrowDown' : 'ArrowUp';
            } else if (gammaMagnitude > tiltThreshold) {
              // Left/right tilt is dominant
              direction = gamma > 0 ? 'ArrowRight' : 'ArrowLeft';
            }
            
            // Only move if enough time has passed since last move
            // Faster movement for steeper tilts
            const maxTilt = Math.max(betaMagnitude, gammaMagnitude);
            const moveDelay = Math.max(100, 500 - maxTilt * 5); // 100-500ms delay
            
            if (direction && now - lastMoveTimeRef.current > moveDelay) {
              console.log(`Gyroscope movement: ${direction} (tilt: ${maxTilt.toFixed(1)}°)`);
              
              // Create a synthetic event
              const syntheticEvent = {
                key: direction,
                preventDefault: () => {},
                stopPropagation: () => {}
              };
              
              // Call the handle key function that moves the player
              handleKeyDown(syntheticEvent);
              
              // Update last move time
              lastMoveTimeRef.current = now;
            }
          }
        }
        
        // Skip initial animation if the game has been won
        if (!initialRotationDone && !hasWon) {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / ROTATION_DURATION, 1)
          
          if (progress === 1) {
            initialRotationDone = true
            mazeGroup.rotation.x = 0
            mazeGroup.rotation.y = 0
          } else {
            const xRotation = THREE.MathUtils.lerp(0, 0, progress)
            mazeGroup.rotation.x = xRotation
            mazeGroup.rotation.y = 0
          }
        } else {
          // Mark initial rotation as done if the game has been won
          if (!initialRotationDone && hasWon) {
            initialRotationDone = true
          }
          
          // Ensure maze rotation stays at 0 in top-down view
          if (!isThirdPersonRef.current) {
            mazeGroup.rotation.x = 0
            mazeGroup.rotation.y = 0
            mazeGroup.rotation.z = 0
          }
        }

        const time = currentTime * 0.001
        mazeGroup.children.forEach(child => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.time.value = time
          }
        })

        if (updateParticlesRef.current) {
          console.log('Calling updateParticles from animation loop');
          const shouldContinue = updateParticlesRef.current()
          if (!shouldContinue) {
            console.log('updateParticles returned false, setting to null');
            updateParticlesRef.current = null;
          }
        } else if (hasWonRef.current && !updateParticlesRef.current) {
          console.log('Game won but updateParticles is null');
        }

        // Handle camera updates based on mode
        if (!isThirdPersonRef.current) {
          // In top-down view, ensure consistent camera position and orientation
          if (Math.abs(camera.position.x) > 0.1 || Math.abs(camera.position.z) > 0.1 || 
              Math.abs(camera.position.y - calculateOptimalCameraHeight()) > 0.1 ||
              Math.abs(controls.target.x) > 0.1 || Math.abs(controls.target.y) > 0.1 || Math.abs(controls.target.z) > 0.1) {
            // If camera has drifted from the expected top-down position, reset it
            camera.position.set(0, calculateOptimalCameraHeight(), 0);
            controls.target.set(0, 0, 0);
          }
          
          // Only update OrbitControls if we're not on mobile
          if (!isMobileRef.current && controls.update) {
            controls.update()
          }
        } else {
          // Ensure orbit controls are disabled in POV mode
          if (!isMobileRef.current) {
            controls.enabled = false
            controls.enableRotate = false
            controls.enableZoom = false
            controls.enablePan = false
          }
          
          // POV camera updates are handled in the movement code
        }

        renderer.render(scene, camera)
      }

      console.log('Starting animation')
      animate()

      // Handle window resize to maintain proper camera settings
      function handleResize() {
        const width = window.innerWidth
        const height = window.innerHeight
        
        // Update renderer size
        renderer.setSize(width, height)
        
        // Update camera aspect ratio
        camera.aspect = width / height
        
        // Adjust field of view based on device type and orientation
        const isMobile = width < 768
        const isLandscape = width > height
        
        if (isMobile) {
          // Mobile devices need a wider FOV to see the full maze
          camera.fov = isLandscape ? 75 : 80
        } else {
          // Default FOV for desktop
          camera.fov = 60
        }
        
        // If in top-down view, adjust camera height to ensure full maze visibility
        if (!isThirdPersonRef.current) {
          camera.position.y = calculateOptimalCameraHeight()
          camera.lookAt(0, 0, 0)
        }
        
        camera.updateProjectionMatrix()
      }
      window.addEventListener('resize', handleResize)

      return () => {
        console.log('Cleanup running')
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('keydown', handleViewToggle, true)
        window.removeEventListener('keydown', handleKeyDown)
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
        }
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
        renderer.dispose()
        if (controls && typeof controls.dispose === 'function') {
          controls.dispose()
        }
      }
    } catch (error) {
      console.error('Error in setup:', error)
    }
  }, [])

  // Add state to track if we should show touch controls
  useEffect(() => {
    // Always show touch controls for mobile devices without gyroscope or when gyro is denied
    const checkMobileAndSetControls = () => {
      const isMobile = detectMobile();
      
      // For testing - uncomment to force touch controls
      // setShowTouchControls(true);
      
      if (isMobile) {
        // If device doesn't support gyro or permission was denied, show touch controls
        if (!hasGyroscope() || (needsIOSPermission() && !gyroscopeActive)) {
          console.log("Setting up touch controls for mobile");
          setShowTouchControls(true);
        }
      }
    };
    
    checkMobileAndSetControls();
  }, [gyroscopeActive]); // Re-run when gyroscope status changes

  // Add refs for the touch control buttons
  const upButtonRef = useRef(null);
  const downButtonRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  
  // Effect to set up touch control buttons
  useEffect(() => {
    // Only run this if touch controls are showing
    if (!showTouchControls) return;
    
    console.log("Setting up touch control listeners");
    
    // Function to handle touch/click on a direction button
    const handleButtonPress = (direction) => {
      console.log(`Button pressed: ${direction}`);
      
      // Get key constants from window global scope to ensure access to all variables
      const MAZE_SIZE = window.MAZE_SIZE || 21;
      const WALL_THICKNESS = window.WALL_THICKNESS || 2;
      
      // Access player and game state through refs
      const playerRef = window.playerRef;
      const isThirdPerson = window.isThirdPersonRef?.current;
      
      if (!playerRef || !playerRef.current || !playerRef.current.position) {
        console.error("Player reference not available");
        return;
      }
      
      // Get current player position
      const currentX = playerRef.current.position.x;
      const currentZ = playerRef.current.position.z;
      const player = playerRef.current.mesh;
      
      // Log attempt 
      console.log(`Attempting to move from (${currentX}, ${currentZ}) in direction ${direction}`);
      
      // Access the maze through the global window
      const maze = window.mazeRef?.current;
      if (!maze) {
        console.error("Maze not accessible");
        return;
      }
      
      // Get camera from window
      const camera = window.gameCamera;
      
      // Function to check if a position is in bounds
      const isInBounds = (x, z) => {
        return x >= 0 && x < MAZE_SIZE && z >= 0 && z < MAZE_SIZE;
      };
      
      // Calculate new position based on direction
      let newX = currentX;
      let newZ = currentZ;
      
      if (isThirdPerson) {
        // First-person mode
        switch (direction) {
          case 'up':
            // Move forward
            newX = currentX + Math.round(playerRef.current.direction.x);
            newZ = currentZ + Math.round(playerRef.current.direction.z);
            break;
          case 'down':
            // Move backward
            newX = currentX - Math.round(playerRef.current.direction.x);
            newZ = currentZ - Math.round(playerRef.current.direction.z);
            break;
          case 'left':
            // Rotate left
            playerRef.current.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
            // Update player rotation
            const leftAngle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
            player.rotation.y = leftAngle;
            return; // Just rotation, no movement check needed
          case 'right':
            // Rotate right
            playerRef.current.direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
            // Update player rotation
            const rightAngle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
            player.rotation.y = rightAngle;
            return; // Just rotation, no movement check needed
        }
      } else {
        // Top-down mode
        switch (direction) {
          case 'up':
            newZ = currentZ - 1;
            playerRef.current.direction.set(0, 0, -1);
            break;
          case 'down':
            newZ = currentZ + 1;
            playerRef.current.direction.set(0, 0, 1);
            break;
          case 'left':
            newX = currentX - 1;
            playerRef.current.direction.set(-1, 0, 0);
            break;
          case 'right':
            newX = currentX + 1;
            playerRef.current.direction.set(1, 0, 0);
            break;
        }
      }
      
      // Check if movement is valid
      console.log(`Checking movement to (${newX}, ${newZ})`);
      if (isInBounds(newX, newZ) && maze[newX][newZ] === 0) {
        console.log("Movement valid, updating position");
        
        // Update player position
        playerRef.current.position.x = newX;
        playerRef.current.position.z = newZ;
        
        // Calculate new world position
        const newWorldPosition = new THREE.Vector3(
          (newX - MAZE_SIZE/2) * WALL_THICKNESS,
          WALL_THICKNESS/2,
          (newZ - MAZE_SIZE/2) * WALL_THICKNESS
        );
        
        // Update player world position
        playerRef.current.worldPosition.copy(newWorldPosition);
        
        // Update player mesh position
        player.position.copy(newWorldPosition);
        
        // Update player rotation
        const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z);
        player.rotation.y = angle;
        
        // Check for victory
        if (newX === MAZE_SIZE-1 && newZ === MAZE_SIZE-2) {
          console.log("Victory triggered from touch control!");
          window.celebrateWin();
        }
      } else {
        console.log("Movement invalid - wall or out of bounds");
      }
    };
    
    // Better event handlers that prevent all default behaviors
    const handleTouchEvent = (e, direction) => {
      e.preventDefault();
      e.stopPropagation();
      handleButtonPress(direction);
      return false;
    };
    
    // Set up event listeners for both touch and click events
    const setupButton = (ref, direction) => {
      if (!ref.current) return;
      
      // Use all possible event types to ensure we catch the interaction
      const button = ref.current;
      
      // Store event handlers to remove them later
      const touchStartHandler = (e) => handleTouchEvent(e, direction);
      const touchEndHandler = (e) => e.preventDefault();
      const mouseDownHandler = (e) => handleTouchEvent(e, direction);
      const clickHandler = (e) => handleTouchEvent(e, direction);
      
      // Add all event listeners
      button.addEventListener('touchstart', touchStartHandler, { passive: false });
      button.addEventListener('touchend', touchEndHandler, { passive: false });
      button.addEventListener('mousedown', mouseDownHandler);
      button.addEventListener('click', clickHandler);
      
      // Return a cleanup function
      return () => {
        button.removeEventListener('touchstart', touchStartHandler);
        button.removeEventListener('touchend', touchEndHandler);
        button.removeEventListener('mousedown', mouseDownHandler);
        button.removeEventListener('click', clickHandler);
      };
    };
    
    // Set up all buttons
    const cleanupUp = setupButton(upButtonRef, 'up');
    const cleanupDown = setupButton(downButtonRef, 'down');
    const cleanupLeft = setupButton(leftButtonRef, 'left');
    const cleanupRight = setupButton(rightButtonRef, 'right');
    
    // Clean up all event listeners on unmount
    return () => {
      if (cleanupUp) cleanupUp();
      if (cleanupDown) cleanupDown();
      if (cleanupLeft) cleanupLeft();
      if (cleanupRight) cleanupRight();
    };
  }, [showTouchControls]);

  // Effect to disable zooming and scrolling on mobile
  useEffect(() => {
    // Add meta tags to prevent zooming
    const setViewportMeta = () => {
      // Find existing viewport meta tag
      let meta = document.querySelector('meta[name="viewport"]');
      
      // If it doesn't exist, create it
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'viewport';
        document.head.appendChild(meta);
      }
      
      // Set content to prevent zooming
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
    };
    
    // Add event handlers to prevent default touch actions
    const preventZoom = (event) => {
      // Prevent pinch zoom on mobile
      if (event.touches && event.touches.length > 1) {
        event.preventDefault();
      }
    };
    
    // Prevent double-tap zoom
    const preventDoubleTapZoom = (event) => {
      event.preventDefault();
    };
    
    // Apply viewport meta
    setViewportMeta();
    
    // Add touch event listeners to prevent zooming
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('touchstart', preventDoubleTapZoom, { passive: false });
    
    // Clean up
    return () => {
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('touchstart', preventDoubleTapZoom);
    };
  }, []);

  // Effect to adjust camera height when touch controls visibility changes
  useEffect(() => {
    // Only run this if we have camera and controls references and we're in top-down view
    if (!window.gameCamera || isThirdPersonRef.current) {
      return;
    }
    
    // Update camera height if we're in top-down view
    const updateCameraForTouchControls = () => {
      const camera = window.gameCamera;
      if (camera && !isThirdPersonRef.current) {
        // Use the window.calculateOptimalCameraHeight function if it exists
        if (typeof window.calculateOptimalCameraHeight === 'function') {
          const newHeight = window.calculateOptimalCameraHeight(showTouchControls);
          camera.position.y = newHeight;
          camera.updateProjectionMatrix();
          console.log(`Adjusted camera height to ${newHeight} for touch controls`);
        } else {
          console.warn('calculateOptimalCameraHeight function not available globally');
        }
      }
    };
    
    // Add a slight delay to ensure the DOM has updated
    const timeoutId = setTimeout(updateCameraForTouchControls, 100);
    
    return () => clearTimeout(timeoutId);
  }, [showTouchControls]);

  return (
    <>
      <canvas ref={mountRef} style={{ display: 'block', width: '100vw', height: '100vh' }} />
      
      {/* iOS Permission Button */}
      {showPermissionButton && (
        <div 
          className="permission-button-container"
          onClick={() => console.log("Container clicked")}
          onTouchStart={() => console.log("Container touch started")}
        >
          <button 
            className="permission-button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Permission button clicked");
              // Use a timeout to ensure the click event is fully processed
              setTimeout(() => {
                requestIOSPermission();
              }, 10);
            }}
            onTouchStart={(e) => {
              console.log("Button touch started");
              e.stopPropagation();
            }}
            onTouchEnd={(e) => {
              console.log("Button touch ended");
              e.preventDefault();
              e.stopPropagation();
              // Use a timeout to ensure the touch event is fully processed
              setTimeout(() => {
                requestIOSPermission();
              }, 10);
            }}
          >
            Enable Tilt Controls
          </button>
          <p className="permission-text">
            Tap to allow motion controls for moving the ball with your device
          </p>
        </div>
      )}
      
      {/* Touch Controls for Mobile */}
      {showTouchControls && (
        <div className="touch-controls">
          <div className="touch-controls-row">
            <button 
              ref={upButtonRef}
              className="touch-button up-button"
              data-direction="up"
            >
              ▲
            </button>
          </div>
          <div className="touch-controls-row">
            <button 
              ref={leftButtonRef}
              className="touch-button left-button"
              data-direction="left"
            >
              ◀
            </button>
            <div className="touch-button-spacer"></div>
            <button 
              ref={rightButtonRef}
              className="touch-button right-button"
              data-direction="right"
            >
              ▶
            </button>
          </div>
          <div className="touch-controls-row">
            <button 
              ref={downButtonRef}
              className="touch-button down-button"
              data-direction="down"
            >
              ▼
            </button>
          </div>
        </div>
      )}
      
      {/* UI elements */}
      {hasWon && (
        <div className="victory-message">
          <h1>You Won!</h1>
          {showRestart && (
            <button onClick={restartGame}>Play Again</button>
          )}
        </div>
      )}
      
      {showTransitionIndicator && (
        <div className="view-mode-indicator">
          {isThirdPerson ? 'First-Person View' : 'Top-Down View'}
        </div>
      )}
      
      {/* Gyroscope indicator for mobile users */}
      {showGyroscopeIndicator && gyroscopeActive && (
        <div className="gyroscope-indicator">
          <div className="gyroscope-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
            </svg>
          </div>
          <span>Tilt to Move</span>
        </div>
      )}
    </>
  )
}

export default App 