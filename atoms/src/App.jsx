import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import './App.css'

function App() {
  const mountRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentView, setCurrentView] = useState('atom') // atom, nucleus, quark
  const [showParticleInfo, setShowParticleInfo] = useState(null)
  
  useEffect(() => {
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
    camera.position.z = 20

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

    // Particle creation functions
    const createQuark = (color, position) => {
      const geometry = new THREE.SphereGeometry(0.3, 16, 16)
      const material = new THREE.MeshPhongMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5,
        specular: 0xffffff,
        shininess: 100
      })
      const quark = new THREE.Mesh(geometry, material)
      quark.position.copy(position)
      return quark
    }

    const createGluon = (start, end) => {
      const curve = new THREE.CatmullRomCurve3([
        start,
        new THREE.Vector3(
          (start.x + end.x) / 2 + (Math.random() - 0.5),
          (start.y + end.y) / 2 + (Math.random() - 0.5),
          (start.z + end.z) / 2 + (Math.random() - 0.5)
        ),
        end
      ])
      
      const geometry = new THREE.TubeGeometry(curve, 20, 0.05, 8, false)
      const material = new THREE.MeshPhongMaterial({
        color: 0xffff00,
        emissive: 0x666600,
        transparent: true,
        opacity: 0.6
      })
      return new THREE.Mesh(geometry, material)
    }

    const createPhoton = () => {
      const geometry = new THREE.SphereGeometry(0.2, 16, 16)
      const material = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.8
      })
      const photon = new THREE.Mesh(geometry, material)
      
      // Random starting position on a sphere
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      const radius = 15
      photon.position.set(
        radius * Math.sin(theta) * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(theta)
      )
      
      photon.velocity = new THREE.Vector3(
        -photon.position.x / 50,
        -photon.position.y / 50,
        -photon.position.z / 50
      )
      
      return photon
    }

    // Create different view groups
    const atomGroup = new THREE.Group()
    const nucleusGroup = new THREE.Group()
    const quarkGroup = new THREE.Group()
    
    scene.add(atomGroup)
    scene.add(nucleusGroup)
    scene.add(quarkGroup)

    // Atom View Setup
    if (currentView === 'atom') {
      // Create nucleus
      const nucleusGeometry = new THREE.SphereGeometry(2, 32, 32)
      const nucleusShaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color: { value: new THREE.Color(0xff0000) },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float time;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            
            // Add pulsing effect to the nucleus
            vec3 pos = position;
            float displacement = sin(time * 2.0) * 0.1;
            pos += normal * displacement;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float time;
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            // Create energy core effect
            vec3 viewDirection = normalize(-vPosition);
            float rimLight = 1.0 - max(dot(viewDirection, vNormal), 0.0);
            rimLight = pow(rimLight, 2.0);
            
            // Add pulsing glow
            float pulse = (sin(time * 3.0) + 1.0) * 0.5;
            
            // Create plasma-like effect
            float plasma = sin(vPosition.x * 10.0 + time) * cos(vPosition.y * 10.0 + time) * sin(vPosition.z * 10.0 + time);
            plasma = (plasma + 1.0) * 0.5;
            
            // Combine effects
            vec3 glowColor = mix(color, vec3(1.0, 0.3, 0.1), pulse * 0.5);
            vec3 finalColor = mix(glowColor, vec3(1.0, 0.8, 0.4), rimLight) + plasma * 0.3;
            
            gl_FragColor = vec4(finalColor, 1.0);
          }
        `
      });
      const nucleus = new THREE.Mesh(nucleusGeometry, nucleusShaderMaterial)
      atomGroup.add(nucleus)

      // Create electron shells with particle effects
      const shellRadii = [5, 8, 11]
      shellRadii.forEach((radius, shellIndex) => {
        const shellGeometry = new THREE.TorusGeometry(radius, 0.02, 16, 100)
        const shellShaderMaterial = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            baseColor: { value: new THREE.Color(0x00ff00) },
          },
          vertexShader: `
            varying vec3 vPosition;
            uniform float time;
            
            void main() {
              vPosition = position;
              
              // Add wave motion to the shell
              vec3 pos = position;
              float wave = sin(pos.x * 5.0 + time * 2.0) * 0.1;
              pos.y += wave;
              
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 baseColor;
            uniform float time;
            varying vec3 vPosition;
            
            void main() {
              // Create flowing energy effect
              float energy = sin(vPosition.x * 20.0 + time * 3.0) * 0.5 + 0.5;
              
              // Add pulsing glow
              float pulse = (sin(time * 2.0) + 1.0) * 0.5;
              
              vec3 finalColor = baseColor * (0.5 + energy * 0.5 + pulse * 0.3);
              float alpha = 0.3 + energy * 0.4;
              
              gl_FragColor = vec4(finalColor, alpha);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
        });
        const shell = new THREE.Mesh(shellGeometry, shellShaderMaterial)
        shell.rotation.x = Math.PI / 4 * shellIndex
        shell.rotation.y = Math.PI / 6 * shellIndex
        atomGroup.add(shell)

        // Add electrons with particle effects
        const electronsCount = (shellIndex + 1) * 2
        const electronGroup = new THREE.Group()
        for(let i = 0; i < electronsCount; i++) {
          const electronGeometry = new THREE.SphereGeometry(0.3, 16, 16)
          const electronShaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
              time: { value: 0 },
            },
            vertexShader: `
              varying vec3 vNormal;
              varying vec3 vPosition;
              
              void main() {
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              uniform float time;
              varying vec3 vNormal;
              varying vec3 vPosition;
              
              void main() {
                // Create electron glow
                vec3 viewDirection = normalize(-vPosition);
                float rimLight = 1.0 - max(dot(viewDirection, vNormal), 0.0);
                rimLight = pow(rimLight, 1.5);
                
                // Add energy pulse
                float pulse = (sin(time * 5.0) + 1.0) * 0.5;
                
                vec3 baseColor = vec3(0.0, 1.0, 1.0);  // Cyan color
                vec3 glowColor = mix(baseColor, vec3(1.0), rimLight);
                vec3 finalColor = glowColor * (1.0 + pulse * 0.5);
                
                gl_FragColor = vec4(finalColor, 1.0);
              }
            `
          });
          const electron = new THREE.Mesh(electronGeometry, electronShaderMaterial)
          const angle = (i / electronsCount) * Math.PI * 2
          electron.position.x = Math.cos(angle) * radius
          electron.position.y = Math.sin(angle) * radius
          electronGroup.add(electron)
        }
        atomGroup.add(electronGroup)
      })
    }

    // Nucleus View Setup
    if (currentView === 'nucleus') {
      const protonCount = 3
      const neutronCount = 4
      
      // Create protons and neutrons
      for(let i = 0; i < protonCount + neutronCount; i++) {
        const isProton = i < protonCount
        const geometry = new THREE.SphereGeometry(1, 32, 32)
        const material = new THREE.MeshPhongMaterial({
          color: isProton ? 0xff0000 : 0x0000ff,
          emissive: isProton ? 0x440000 : 0x000044,
          specular: 0xffffff,
          shininess: 100
        })
        const particle = new THREE.Mesh(geometry, material)
        
        // Arrange in a cluster formation
        const angle = (i / (protonCount + neutronCount)) * Math.PI * 2
        const radius = 2
        particle.position.x = Math.cos(angle) * radius
        particle.position.y = Math.sin(angle) * radius
        particle.position.z = (Math.random() - 0.5) * 2
        
        nucleusGroup.add(particle)
      }
    }

    // Quark View Setup
    if (currentView === 'quark') {
      // Create up and down quarks
      const quarkPositions = [
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0, 1, 0)
      ]
      
      const quarks = quarkPositions.map((pos, i) => 
        createQuark(i < 2 ? 0xff0000 : 0x0000ff, pos)
      )
      quarks.forEach(quark => quarkGroup.add(quark))

      // Create gluons connecting quarks
      for(let i = 0; i < quarks.length; i++) {
        for(let j = i + 1; j < quarks.length; j++) {
          const gluon = createGluon(quarks[i].position, quarks[j].position)
          quarkGroup.add(gluon)
        }
      }
    }

    // Add photons
    const photons = []
    for(let i = 0; i < 10; i++) {
      const photon = createPhoton()
      scene.add(photon)
      photons.push(photon)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xffffff, 1)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Animation
    let animationFrameId = null
    const animate = () => {
      if (isAnimating) {
        const time = Date.now() * 0.001

        // Update all shader materials
        atomGroup.traverse((child) => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.time.value = time
          }
        })

        if (currentView === 'atom') {
          // Rotate electron groups
          atomGroup.children.forEach((child, index) => {
            if (child instanceof THREE.Group) {
              child.rotation.x += 0.01 * (index + 1)
              child.rotation.y += 0.02 / (index + 1)
            }
          })
        }

        if (currentView === 'nucleus') {
          // Make nucleons vibrate
          nucleusGroup.children.forEach((nucleon, i) => {
            nucleon.position.x += Math.sin(time * 2 + i) * 0.02
            nucleon.position.y += Math.cos(time * 2 + i) * 0.02
            nucleon.position.z += Math.sin(time * 3 + i) * 0.02
          })
        }

        if (currentView === 'quark') {
          // Rotate quark group
          quarkGroup.rotation.y += 0.01
          // Make gluons pulse
          quarkGroup.children.forEach(child => {
            if (child.material) {
              child.material.opacity = 0.6 + Math.sin(time * 5) * 0.2
            }
          })
        }

        // Update photons
        photons.forEach(photon => {
          photon.position.add(photon.velocity)
          if (photon.position.length() < 0.1) {
            const phi = Math.random() * Math.PI * 2
            const theta = Math.random() * Math.PI
            const radius = 15
            photon.position.set(
              radius * Math.sin(theta) * Math.cos(phi),
              radius * Math.sin(theta) * Math.sin(phi),
              radius * Math.cos(theta)
            )
            photon.velocity.set(
              -photon.position.x / 50,
              -photon.position.y / 50,
              -photon.position.z / 50
            )
          }
        })

        controls.update()
        renderer.render(scene, camera)
        animationFrameId = requestAnimationFrame(animate)
      }
    }
    animate()

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
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          object.material.dispose()
        }
      })
      renderer.dispose()
      controls.dispose()
    }
  }, [isAnimating, currentView])

  const particleInfo = {
    atom: {
      title: "Atomic Structure",
      description: "An atom consists of a nucleus surrounded by electrons in shells. The electrons have a negative charge and orbit the nucleus in quantum shells."
    },
    nucleus: {
      title: "Nuclear Structure",
      description: "The nucleus contains protons (positive charge) and neutrons (neutral charge). These nucleons are held together by the strong nuclear force."
    },
    quark: {
      title: "Quark Structure",
      description: "Protons and neutrons are made of quarks bound together by gluons. Up quarks have +2/3 charge, down quarks have -1/3 charge."
    }
  }

  return (
    <div className="scene-container">
      <canvas ref={mountRef} />
      <div className="controls">
        <div className="buttons-container">
          <button onClick={() => setIsAnimating(!isAnimating)}>
            {isAnimating ? 'Pause' : 'Play'}
          </button>
          <button 
            onClick={() => setCurrentView('atom')}
            className={currentView === 'atom' ? 'active' : ''}
          >
            Atomic View
          </button>
          <button 
            onClick={() => setCurrentView('nucleus')}
            className={currentView === 'nucleus' ? 'active' : ''}
          >
            Nuclear View
          </button>
          <button 
            onClick={() => setCurrentView('quark')}
            className={currentView === 'quark' ? 'active' : ''}
          >
            Quark View
          </button>
        </div>
        <div className="info">
          <h2>{particleInfo[currentView].title}</h2>
          <p>{particleInfo[currentView].description}</p>
          <p className="controls-hint">Use mouse to rotate and zoom</p>
        </div>
      </div>
    </div>
  )
}

export default App 