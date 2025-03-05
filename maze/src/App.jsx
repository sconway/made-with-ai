import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './App.css'

function App() {
  const mountRef = useRef(null)
  const [hasWon, setHasWon] = useState(false)
  const [showRestart, setShowRestart] = useState(false)
  const [isThirdPerson, setIsThirdPerson] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showTransitionIndicator, setShowTransitionIndicator] = useState(false)
  
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

  useEffect(() => {
    console.log('Effect running')
    if (!mountRef.current) {
      console.error('No mount ref')
      return
    }

    try {
      // Scene setup
      const scene = new THREE.Scene()
      scene.background = new THREE.Color(0x000000)
      console.log('Scene created')

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75, // Increased FOV for better first-person view
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      // Start in top-down view with a closer position
      camera.position.set(0, 45, 0)  // Reduced height from 80 to 45
      camera.lookAt(0, 0, 0)
      console.log('Camera set up')

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        canvas: mountRef.current
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      console.log('Renderer set up')

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.enableDamping = true
      controls.dampingFactor = 0.05
      controls.enableRotate = true
      controls.enableZoom = true
      controls.minDistance = 20  // Reduced from 40 to allow closer zoom
      controls.maxDistance = 100  // Reduced from 200 to prevent extreme zoom out
      controls.enablePan = true
      controls.target.set(0, 0, 0)
      controls.update()
      console.log('Controls set up')

      // Maze parameters
      const MAZE_SIZE = 21
      const CELL_SIZE = 2
      const WALL_HEIGHT = 3
      const WALL_THICKNESS = 2

      // Initialize maze grid - use existing maze if game has been won
      const maze = hasWon && mazeRef.current ? 
        mazeRef.current : 
        Array(MAZE_SIZE).fill().map(() => Array(MAZE_SIZE).fill(1))
      
      // Store maze in ref for persistence across re-renders
      mazeRef.current = maze

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
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
      directionalLight.position.set(50, 100, 50)
      directionalLight.castShadow = true
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
        
        // Create arrow body (cone)
        const coneGeometry = new THREE.ConeGeometry(WALL_THICKNESS/2, WALL_THICKNESS, 8)
        const coneMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 })
        const cone = new THREE.Mesh(coneGeometry, coneMaterial)
        cone.rotation.x = -Math.PI / 2  // Point forward
        cone.position.z = WALL_THICKNESS/4  // Move forward slightly
        
        // Create arrow base (cylinder)
        const cylinderGeometry = new THREE.CylinderGeometry(WALL_THICKNESS/4, WALL_THICKNESS/4, WALL_THICKNESS/2, 8)
        const cylinder = new THREE.Mesh(cylinderGeometry, coneMaterial)
        cylinder.rotation.x = -Math.PI / 2  // Align with cone
        cylinder.position.z = -WALL_THICKNESS/4  // Move back slightly
        
        playerGeometry.add(cone)
        playerGeometry.add(cylinder)
        
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
          // The player is a group with two children (cone and cylinder)
          if (child.isGroup && child.children.length === 2) {
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
            const startTarget = controls.target.clone()
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
              new THREE.Vector3(0, 45, 0)  // Top-down view with a closer position
            
            const endTarget = newIsThirdPerson ?
              new THREE.Vector3(
                playerRef.current.worldPosition.x + playerRef.current.direction.x * WALL_THICKNESS,
                playerRef.current.worldPosition.y + 1.5,  // Eye level
                playerRef.current.worldPosition.z + playerRef.current.direction.z * WALL_THICKNESS
              ) :
              new THREE.Vector3(0, 0, 0)  // Look at center for top-down view
            
            // End states for other properties
            const endFOV = newIsThirdPerson ? 75 : 60  // Wider FOV for top-down to see more of the maze
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
            controls.enabled = false
            
            // Animation duration in milliseconds
            const duration = 1200  // 1.2 seconds for a smoother transition
            let animationFrameId = null
            
            // Animation function
            const animateCamera = (currentTime) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Custom easing function for smoother motion (cubic bezier approximation)
              const eased = progress < 0.5 ? 
                4 * progress * progress * progress : 
                1 - Math.pow(-2 * progress + 2, 3) / 2;
              
              // For arc movement, we'll use a different easing for height
              const heightEase = newIsThirdPerson ? 
                // When going to POV: quick descent with a slight bounce
                progress < 0.9 ? 
                  1 - Math.pow(1 - progress / 0.9, 2) : 
                  1 + Math.sin((progress - 0.9) * Math.PI * 5) * 0.05 : 
                // When going to top-down: slow initial ascent, then faster
                Math.pow(progress, 1.8)
              
              // Create a more interesting camera path with an arc
              const arcHeight = newIsThirdPerson ? 
                THREE.MathUtils.lerp(startPos.y, endPos.y, heightEase) :
                THREE.MathUtils.lerp(startPos.y, endPos.y + 25 * Math.sin(progress * Math.PI), heightEase)
              
              // Interpolate position with arc
              camera.position.x = THREE.MathUtils.lerp(startPos.x, endPos.x, eased)
              camera.position.y = arcHeight
              camera.position.z = THREE.MathUtils.lerp(startPos.z, endPos.z, eased)
              
              // Interpolate target with slight lead (target moves ahead of camera)
              const targetEase = Math.min(1, eased * 1.2)
              controls.target.lerpVectors(startTarget, endTarget, targetEase)
              
              // Interpolate FOV - use different easing for more dramatic effect
              const fovEase = newIsThirdPerson ? 
                // When going to POV: gradually widen with slight overshoot
                progress < 0.9 ? 
                  Math.pow(progress / 0.9, 1.5) : 
                  1 + Math.sin((progress - 0.9) * Math.PI * 5) * 0.03 : 
                // When going to top-down: quickly narrow
                1 - Math.pow(1 - progress, 1.7)
              camera.fov = THREE.MathUtils.lerp(startFOV, endFOV, fovEase)
              
              // Interpolate maze rotation with slight wobble for dynamic feel
              const rotationEase = eased
              const wobble = Math.sin(progress * Math.PI * 3) * 0.03 * (1 - progress)
              
              // Only apply rotation in POV mode, keep at 0 for top-down
              if (newIsThirdPerson) {
                mazeGroup.rotation.x = THREE.MathUtils.lerp(startMazeRotation.x, endMazeRotation.x, rotationEase) + wobble
                mazeGroup.rotation.y = THREE.MathUtils.lerp(startMazeRotation.y, endMazeRotation.y, rotationEase) + wobble
                mazeGroup.rotation.z = THREE.MathUtils.lerp(startMazeRotation.z, endMazeRotation.z, rotationEase)
              } else {
                // When going to top-down, always keep rotation at 0
                mazeGroup.rotation.set(0, 0, 0)
              }
              
              // Fade player in/out
              player.children.forEach(child => {
                if (child.material) {
                  child.material.opacity = THREE.MathUtils.lerp(startPlayerOpacity, endPlayerOpacity, eased)
                }
              })
              
              // Update camera matrices
              camera.updateProjectionMatrix()
              camera.lookAt(controls.target)
              controls.update()
              
              // Continue animation if not complete
              if (progress < 1) {
                animationFrameId = requestAnimationFrame(animateCamera)
              } else {
                // Final setup once animation is complete
                if (newIsThirdPerson) {
                  controls.enabled = false
                  controls.enableRotate = false
                  controls.enableZoom = false
                  controls.enablePan = false
                  
                  // Ensure final position and direction for POV mode
                  const playerPos = playerRef.current.worldPosition.clone()
                  console.log('Switching to POV mode - Player position:', playerPos)
                  
                  camera.position.set(
                    playerPos.x,
                    playerPos.y + 1.5,  // Eye level
                    playerPos.z
                  )
                  const lookTarget = camera.position.clone()
                  lookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS))
                  camera.lookAt(lookTarget)
                  controls.target.copy(lookTarget)
                  player.visible = false  // Hide arrow in POV mode
                } else {
                  // For top-down view, ensure consistent camera position and orientation
                  camera.position.set(0, 45, 0)
                  controls.target.set(0, 0, 0)
                  
                  controls.enabled = true
                  controls.enableRotate = true
                  controls.enableZoom = true
                  controls.enablePan = true
                  
                  // Update player mesh position and rotation when returning to top-down
                  console.log('Switching to top-down mode - Player world position:', playerRef.current.worldPosition)
                  console.log('Switching to top-down mode - Player grid position:', playerRef.current.position)
                  
                  // Ensure player mesh position matches the current world position
                  player.position.copy(playerRef.current.worldPosition)
                  const angle = Math.atan2(playerRef.current.direction.x, playerRef.current.direction.z)
                  player.rotation.y = angle
                  
                  console.log('Updated player mesh position to:', player.position)
                  
                  // Reset opacity
                  player.children.forEach(child => {
                    if (child.material) {
                      child.material.opacity = 1
                    }
                  })
                  player.visible = true  // Show arrow in top-down mode
                  
                  // Force maze rotation to exactly 0
                  mazeGroup.rotation.set(0, 0, 0)
                }
                
                // Always ensure maze rotation is reset to 0 at the end
                mazeGroup.rotation.set(0, 0, 0)
                
                // Allow new transitions
                window.isTransitioning = false
                setIsTransitioning(false)
              }
            }
            
            // Start animation
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
        animationFrameId = requestAnimationFrame(animate)
        
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

        // Use the ref instead of state for immediate access
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
              Math.abs(camera.position.y - 45) > 0.1 ||
              Math.abs(controls.target.x) > 0.1 || Math.abs(controls.target.y) > 0.1 || Math.abs(controls.target.z) > 0.1) {
            // If camera has drifted from the expected top-down position, reset it
            camera.position.set(0, 45, 0);
            controls.target.set(0, 0, 0);
          }
          controls.update()
        } else {
          // Ensure orbit controls are disabled in POV mode
          controls.enabled = false
          controls.enableRotate = false
          controls.enableZoom = false
          controls.enablePan = false
          
          // Force camera to stay at player position
          const playerPos = playerRef.current.worldPosition
          camera.position.set(
            playerPos.x,
            playerPos.y + 1.5,
            playerPos.z
          )
          const lookTarget = camera.position.clone()
          lookTarget.add(playerRef.current.direction.clone().multiplyScalar(WALL_THICKNESS))
          camera.lookAt(lookTarget)
          
          // Log camera state occasionally (every 60 frames to avoid spam)
          if (currentTime % 60 === 0) {
            console.log('Animation loop - Camera state:', {
              position: camera.position.clone(),
              direction: playerRef.current.direction.clone(),
              lookTarget: lookTarget
            })
          }
          
          // Force camera update
          camera.updateProjectionMatrix()
          camera.updateMatrixWorld()
        }
        
        renderer.render(scene, camera)
      }

      console.log('Starting animation')
      animate()

      // Handle window resize
      function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
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
        controls.dispose()
      }
    } catch (error) {
      console.error('Error in setup:', error)
    }
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <canvas 
        ref={mountRef} 
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block'
        }} 
      />
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 20,
        color: 'white',
        fontSize: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        Controls:<br/>
        Arrow Keys or WASD: Move<br/>
        V: Toggle View<br/>
        {!isThirdPerson && 'Mouse: Rotate/Zoom Camera'}
      </div>
      {showRestart && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '48px',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '10px'
        }}>
          <div>Victory!</div>
          <button
            onClick={restartGame}
            style={{
              fontSize: '24px',
              padding: '10px 20px',
              marginTop: '20px',
              cursor: 'pointer',
              backgroundColor: '#4CAF50',
              border: 'none',
              color: 'white',
              borderRadius: '5px'
            }}
          >
            Play Again
          </button>
        </div>
      )}
      {isTransitioning && (
        <div style={{
          position: 'absolute',
          bottom: 70,
          left: 20,
          color: '#ffcc00',
          fontSize: '16px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '10px',
          borderRadius: '5px',
          animation: 'pulse 1s infinite'
        }}>
          Changing view...
        </div>
      )}
      <style jsx="true">{`
        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}

export default App 