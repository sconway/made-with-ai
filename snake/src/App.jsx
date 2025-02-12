import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './App.css'

function App() {
  const mountRef = useRef(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  
  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.set(65, 65, 94)  // Offset X and Y to rotate view
    camera.lookAt(0, 0, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      canvas: mountRef.current
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enableRotate = true
    controls.minDistance = 50
    controls.maxDistance = 200
    controls.target.set(0, 0, 0)
    controls.update()

    // Create bounding box walls with grid pattern
    const wallSize = 100;
    const gridDivisions = 20;
    const wallMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x0099ff) },  // Changed to blue
        proximity: { value: 1.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float proximity;
        varying vec2 vUv;
        void main() {
          // Create grid pattern
          float gridSize = 0.1;
          float lineWidth = 0.01;
          
          float gridX = step(mod(vUv.x, gridSize), lineWidth);
          float gridY = step(mod(vUv.y, gridSize), lineWidth);
          
          // Calculate glow intensity based on proximity
          float glowIntensity = 1.0 - proximity;
          glowIntensity = pow(glowIntensity, 2.0);
          
          vec3 baseColor = glowColor * (0.3 + glowIntensity * 2.5);
          float grid = max(gridX, gridY);
          
          // Add ambient glow
          float ambientGlow = 0.15 * (1.0 - proximity);
          
          // Combine grid and ambient glow
          gl_FragColor = vec4(baseColor, (grid * 0.9 + ambientGlow));
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Create walls
    const walls = [];
    // Front wall (positive Z)
    const frontWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallSize, wallSize),
      wallMaterial.clone()
    );
    frontWall.position.z = wallSize/2;
    scene.add(frontWall);
    walls.push(frontWall);

    // Back wall (negative Z)
    const backWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallSize, wallSize),
      wallMaterial.clone()
    );
    backWall.position.z = -wallSize/2;
    backWall.rotation.y = Math.PI;
    scene.add(backWall);
    walls.push(backWall);

    // Right wall (positive X)
    const rightWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallSize, wallSize),
      wallMaterial.clone()
    );
    rightWall.position.x = wallSize / 2;
    rightWall.rotation.y = -Math.PI/2;
    scene.add(rightWall);
    walls.push(rightWall);

    // Left wall (negative X)
    const leftWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallSize, wallSize),
      wallMaterial.clone()
    );
    leftWall.position.x = -wallSize/2;
    leftWall.rotation.y = Math.PI/2;
    scene.add(leftWall);
    walls.push(leftWall);

    // Top wall (positive Y)
    const topWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallSize, wallSize),
      wallMaterial.clone()
    );
    topWall.position.y = wallSize/2;
    topWall.rotation.x = Math.PI/2;
    scene.add(topWall);
    walls.push(topWall);

    // Bottom wall (negative Y)
    const bottomWall = new THREE.Mesh(
      new THREE.PlaneGeometry(wallSize, wallSize),
      wallMaterial.clone()
    );
    bottomWall.position.y = -wallSize/2;
    bottomWall.rotation.x = -Math.PI/2;
    scene.add(bottomWall);
    walls.push(bottomWall);

    // Game state
    const gameState = {
      snakePosition: { x: 0, y: 0, z: 0 },
      direction: 'f',  // Start moving forward ('f')
      lastDirection: 'f',
      lastUpdateTime: performance.now(),
      moveInterval: 200,
      segments: [],
      positions: [],
      isKeyboardReady: true
    }

    // Create snake head
    const snakeGeometry = new THREE.BoxGeometry(5, 5, 5)
    const snakeMaterial = new THREE.MeshLambertMaterial({ 
      color: 0xffffff,  // White base color
      emissive: 0x00ff00,  // Green emissive
      emissiveIntensity: 1.0
    })
    const snakeHead = new THREE.Mesh(snakeGeometry, snakeMaterial)
    scene.add(snakeHead)
    gameState.segments.push(snakeHead)

    // Create food
    const foodGeometry = new THREE.SphereGeometry(2.5, 16, 16)
    const foodMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0xff0000) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float time;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // Create multiple layered pulsing effects
          float fastPulse = (sin(time * 5.0) + 1.0) * 0.5;
          float slowPulse = (sin(time * 2.0) + 1.0) * 0.5;
          float combinedPulse = fastPulse * 0.7 + slowPulse * 0.3;
          
          // Enhanced rim lighting
          vec3 viewDirection = normalize(-vPosition);
          float rimLight = 1.0 - max(dot(viewDirection, vNormal), 0.0);
          rimLight = pow(rimLight, 1.5); // Softer falloff for wider glow
          
          // Radial glow from center
          vec2 centeredUv = vUv * 2.0 - 1.0;
          float distanceFromCenter = 1.0 - length(centeredUv);
          float radialGlow = pow(distanceFromCenter, 2.0);
          
          // Combine all glow effects
          vec3 baseGlow = color * (3.0 + combinedPulse * 4.0);
          vec3 rimGlow = vec3(1.0, 0.3, 0.3) * rimLight * 2.0;
          vec3 centerGlow = color * radialGlow * (2.0 + fastPulse);
          
          // Final color combination
          vec3 finalColor = baseGlow + rimGlow + centerGlow;
          
          // Add sparkle effect
          float sparkle = pow(sin(time * 10.0 + vPosition.x * 10.0) * 0.5 + 0.5, 8.0);
          finalColor += vec3(sparkle);
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
      transparent: true,
    })
    const food = new THREE.Mesh(foodGeometry, foodMaterial)
    food.position.set(20, 0, 20)
    scene.add(food)

    // Add multiple lights to food for extra glow
    const foodLight = new THREE.PointLight(0xff0000, 8.0, 20)  // Increased intensity and range
    foodLight.position.copy(food.position)
    scene.add(foodLight)

    // Add a second, larger radius light for ambient glow
    const foodAmbientLight = new THREE.PointLight(0xff0000, 4.0, 40)
    foodAmbientLight.position.copy(food.position)
    scene.add(foodAmbientLight)

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(50, 50, 50)
    scene.add(directionalLight)

    // Function to get new position based on direction
    const getNewPosition = () => {
      const moveAmount = 5;
      let deltaX = 0, deltaY = 0, deltaZ = 0;
      
      switch(gameState.direction) {
        case 'f': // Forward
          deltaZ = moveAmount;
          break;
        case 'b': // Back
          deltaZ = -moveAmount;
          break;
        case 'l': // Left
          deltaX = -moveAmount;
          break;
        case 'r': // Right
          deltaX = moveAmount;
          break;
        case 'u': // Up
          deltaY = moveAmount;
          break;
        case 'd': // Down
          deltaY = -moveAmount;
          break;
      }
      
      return {
        x: gameState.snakePosition.x + deltaX,
        y: gameState.snakePosition.y + deltaY,
        z: gameState.snakePosition.z + deltaZ
      };
    }

    // Function to add new segment
    const addSegment = () => {
      const segmentGeometry = new THREE.BoxGeometry(5, 5, 5)
      const segmentMaterial = new THREE.MeshLambertMaterial({ 
        color: 0xffffff,  // White base color
        emissive: 0x00ff00,  // Green emissive
        emissiveIntensity: 1.0
      })
      const segment = new THREE.Mesh(segmentGeometry, segmentMaterial)
      
      // Position the new segment behind the last segment
      const lastSegment = gameState.segments[gameState.segments.length - 1]
      const offset = 6  // Slightly more than segment size (5)
      
      // Get the last position from positions array
      const lastPosition = gameState.positions[gameState.positions.length - 1] || lastSegment.position
      segment.position.set(lastPosition.x, lastPosition.y, lastPosition.z)
      
      scene.add(segment)
      gameState.segments.push(segment)
    }

    // Game loop
    let animationFrameId = null
    function animate(currentTime) {
      animationFrameId = requestAnimationFrame(animate)
      controls.update()

      // Update food shader time uniform for pulsing effect
      food.material.uniforms.time.value = currentTime * 0.001

      const deltaTime = currentTime - gameState.lastUpdateTime

      if (deltaTime > gameState.moveInterval && !gameOver) {
        gameState.lastUpdateTime = currentTime
        gameState.isKeyboardReady = true;

        // Store current head position for segments to follow
        gameState.positions.unshift({...gameState.snakePosition})
        gameState.positions = gameState.positions.slice(0, gameState.segments.length)

        // Update snake head position
        const newPosition = getNewPosition();
        gameState.snakePosition = newPosition;

        // Update snake segments positions
        gameState.segments.forEach((segment, index) => {
          if (index === 0) {
            segment.position.set(
              gameState.snakePosition.x,
              gameState.snakePosition.y,
              gameState.snakePosition.z
            )
          } else {
            const pos = gameState.positions[index - 1]
            segment.position.set(pos.x, pos.y, pos.z)
          }
        })

        // Check for food collision
        if (Math.abs(gameState.snakePosition.x - food.position.x) < 3 && 
            Math.abs(gameState.snakePosition.y - food.position.y) < 3 && 
            Math.abs(gameState.snakePosition.z - food.position.z) < 3) {
          setScore(prev => prev + 1)
          addSegment()
          food.position.set(
            (Math.random() * 80 - 40),
            (Math.random() * 80 - 40),
            (Math.random() * 80 - 40)
          )
          // Update both food lights' positions
          foodLight.position.copy(food.position)
          foodAmbientLight.position.copy(food.position)
        }

        // Check for boundary collision
        if (Math.abs(gameState.snakePosition.x) > 45 || 
            Math.abs(gameState.snakePosition.y) > 45 || 
            Math.abs(gameState.snakePosition.z) > 45) {
          setGameOver(true)
        }

        // Check for self collision
        for (let i = 1; i < gameState.segments.length; i++) {
          const segment = gameState.segments[i]
          if (Math.abs(gameState.snakePosition.x - segment.position.x) < 3 &&
              Math.abs(gameState.snakePosition.y - segment.position.y) < 3 &&
              Math.abs(gameState.snakePosition.z - segment.position.z) < 3) {
            setGameOver(true)
            break
          }
        }

        // Check proximity to walls and update glow effect
        const proximityThreshold = 30;
        walls.forEach(wall => {
          // Calculate perpendicular distance based on wall orientation
          let distance;
          if (wall.position.x !== 0) {
            // Left/Right walls (X-axis)
            distance = Math.abs(gameState.segments[0].position.x - wall.position.x);
          } else if (wall.position.y !== 0) {
            // Top/Bottom walls (Y-axis)
            distance = Math.abs(gameState.segments[0].position.y - wall.position.y);
          } else {
            // Front/Back walls (Z-axis)
            distance = Math.abs(gameState.segments[0].position.z - wall.position.z);
          }
          const proximity = Math.min(Math.max(distance / proximityThreshold, 0), 1);
          wall.material.uniforms.proximity.value = proximity;
        });
      }

      renderer.render(scene, camera)
    }

    // Start animation
    animate(performance.now())

    // Handle keyboard input
    const handleKeyDown = (event) => {
      if (gameOver || !gameState.isKeyboardReady) return;

      event.preventDefault();
      const key = event.key.toLowerCase();

      if (key === 'arrowleft' || key === 'a') {
        if (gameState.direction === 'f') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'r';
        } else if (gameState.direction === 'l') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'f';
        } else if (gameState.direction === 'r') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'b';
        } else if (gameState.direction === 'b') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'l';
        } else if (gameState.direction === 'u' || gameState.direction === 'd') {
          if (gameState.lastDirection === 'l') {
            gameState.direction = 'f';
          } else if (gameState.lastDirection === 'r') {
            gameState.direction = 'b';
          } else if (gameState.lastDirection === 'b') {
            gameState.direction = 'l';
          } else {
            gameState.direction = 'r';
          }
          gameState.lastDirection = gameState.direction;
        }
        gameState.isKeyboardReady = false;
      }
      else if (key === 'arrowright' || key === 'd') {
        if (gameState.direction === 'f') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'l';
        } else if (gameState.direction === 'l') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'b';
        } else if (gameState.direction === 'r') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'f';
        } else if (gameState.direction === 'b') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'r';
        } else if (gameState.direction === 'u' || gameState.direction === 'd') {
          if (gameState.lastDirection === 'b') {
            gameState.direction = 'r';
          } else if (gameState.lastDirection === 'r') {
            gameState.direction = 'f';
          } else if (gameState.lastDirection === 'l') {
            gameState.direction = 'b';
          } else {
            gameState.direction = 'l';
          }
          gameState.lastDirection = gameState.direction;
        }
        gameState.isKeyboardReady = false;
      }
      else if (key === 'arrowup' || key === 'w') {
        if (gameState.direction === 'f' || gameState.direction === 'l' ||
            gameState.direction === 'r' || gameState.direction === 'b') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'u';
        } else if (gameState.direction === 'u' || gameState.direction === 'd') {
          if (gameState.lastDirection === 'l') {
            gameState.direction = 'l';
          } else if (gameState.lastDirection === 'r') {
            gameState.direction = 'r';
          } else if (gameState.lastDirection === 'b') {
            gameState.direction = 'b';
          } else {
            gameState.direction = 'f';
          }
          gameState.lastDirection = gameState.direction;
        }
        gameState.isKeyboardReady = false;
      }
      else if (key === 'arrowdown' || key === 's') {
        if (gameState.direction === 'f' || gameState.direction === 'l' ||
            gameState.direction === 'r' || gameState.direction === 'b') {
          gameState.lastDirection = gameState.direction;
          gameState.direction = 'd';
        } else if (gameState.direction === 'u' || gameState.direction === 'd') {
          if (gameState.lastDirection === 'l') {
            gameState.direction = 'r';
          } else if (gameState.lastDirection === 'r') {
            gameState.direction = 'l';
          } else if (gameState.lastDirection === 'b') {
            gameState.direction = 'f';
          } else {
            gameState.direction = 'b';
          }
          gameState.lastDirection = gameState.direction;
        }
        gameState.isKeyboardReady = false;
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      // Remove all snake segments
      gameState.segments.forEach(segment => {
        scene.remove(segment)
        segment.geometry.dispose()
        segment.material.dispose()
      })
      renderer.dispose()
      controls.dispose()
    }
  }, [gameOver])

  const restartGame = () => {
    setScore(0)
    setGameOver(false)
  }

  return (
    <div className="scene-container">
      <canvas ref={mountRef} />
      <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        color: 'white',
        fontSize: '24px'
      }}>
        Score: {score}
      </div>
      {gameOver && (
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
          <div>Game Over!</div>
          <div style={{ fontSize: '24px' }}>Final Score: {score}</div>
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
        Arrow Keys: Move in X-Y plane<br/>
        WASD: Move in X-Z plane<br/>
        Mouse: Rotate camera<br/>
        Scroll: Zoom camera
      </div>
    </div>
  )
}

export default App
