import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import './App.css'

function App() {
  const mountRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(true)
  const [currentView, setCurrentViewState] = useState('atom')
  const [targetView, setTargetView] = useState(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showParticleInfo, setShowParticleInfo] = useState(null)
  
  const setCurrentView = (view) => {
    if (view !== currentView) {
      setTargetView(view)
      setIsTransitioning(true)
    }
  }

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

    // Bloom setup
    const bloomComposer = new EffectComposer(renderer)
    bloomComposer.renderToScreen = false
    const bloomRenderPass = new RenderPass(scene, camera)
    bloomComposer.addPass(bloomRenderPass)
    const afterimagePass = new AfterimagePass()
    afterimagePass.uniforms['damp'].value = 0.85
    bloomComposer.addPass(afterimagePass)

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.75, 1.0, 0.1
    )
    bloomComposer.addPass(bloomPass)

    // Final composer
    const finalComposer = new EffectComposer(renderer)
    const finalRenderPass = new RenderPass(scene, camera)
    finalComposer.addPass(finalRenderPass)

    const additiveBloomShader = {
      uniforms: {
        tDiffuse: { value: null },
        bloomTexture: { value: null }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D bloomTexture;
        varying vec2 vUv;
        void main() {
          vec4 baseColor = texture2D(tDiffuse, vUv);
          vec4 bloomColor = texture2D(bloomTexture, vUv);
          gl_FragColor = baseColor + bloomColor;
        }
      `
    }

    const additiveBloomPass = new ShaderPass(additiveBloomShader)
    additiveBloomPass.uniforms.bloomTexture.value = bloomComposer.renderTarget2.texture
    additiveBloomPass.needsSwap = true
    finalComposer.addPass(additiveBloomPass)

    // Particle creation functions
    const createParticleSphere = (radius, particleCount, color, useShader = false) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI
        const r = radius * (0.8 + Math.random() * 0.2) // slight variation
        positions[i*3] = r * Math.sin(phi) * Math.cos(theta)
        positions[i*3 + 1] = r * Math.sin(phi) * Math.sin(theta)
        positions[i*3 + 2] = r * Math.cos(phi)
        colors[i*3] = color.r
        colors[i*3 + 1] = color.g
        colors[i*3 + 2] = color.b
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      let material
      if (useShader) {
        material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
          },
          vertexShader: `
            varying vec3 vColor;
            uniform float time;
            void main() {
              vColor = color;
              vec3 pos = position;
              pos += normal * sin(time + position.x) * 0.1;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = 2.0;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              gl_FragColor = vec4(vColor, 1.0);
            }
          `,
          vertexColors: true,
        })
      } else {
        material = new THREE.PointsMaterial({
          size: 0.1,
          vertexColors: true,
          transparent: true,
          opacity: 0.8
        })
      }
      return new THREE.Points(geometry, material)
    }

    const createParticleTorus = (radius, tubeRadius, particleCount) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const color = new THREE.Color(0x00ff00)

      for (let i = 0; i < particleCount; i++) {
        const u = Math.random() * Math.PI * 2
        const v = Math.random() * Math.PI * 2
        positions[i*3] = (radius + tubeRadius * Math.cos(v)) * Math.cos(u)
        positions[i*3 + 1] = (radius + tubeRadius * Math.cos(v)) * Math.sin(u)
        positions[i*3 + 2] = tubeRadius * Math.sin(v)
        colors[i*3] = color.r
        colors[i*3 + 1] = color.g
        colors[i*3 + 2] = color.b
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
      })
      return new THREE.Points(geometry, material)
    }

    const createParticleTube = (curve, particleCount, color) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)

      for (let i = 0; i < particleCount; i++) {
        const t = i / (particleCount - 1)
        const point = curve.getPointAt(t)
        positions[i*3] = point.x
        positions[i*3 + 1] = point.y
        positions[i*3 + 2] = point.z
        colors[i*3] = color.r
        colors[i*3 + 1] = color.g
        colors[i*3 + 2] = color.b
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      const material = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.7
      })
      return new THREE.Points(geometry, material)
    }

    const createQuark = (color, position) => {
      const quark = createParticleSphere(0.3, 200, new THREE.Color(color))
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
      
      return createParticleTube(curve, 100, new THREE.Color(0xffff00))
    }

    const createPhoton = () => {
      const photonColor = new THREE.Color(0xffffff)
      const photon = createParticleSphere(0.2, 100, photonColor)
      photon.material.size = 0.05
      photon.material.opacity = 0.5
      photon.material.emissive = photonColor
      photon.material.emissiveIntensity = 0.5

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
        -photon.position.x / 30,
        -photon.position.y / 30,
        -photon.position.z / 30
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

    // Set initial visibility
    atomGroup.visible = currentView === 'atom'
    nucleusGroup.visible = currentView === 'nucleus'
    quarkGroup.visible = currentView === 'quark'

    // Atom View Setup
    if (currentView === 'atom') {
      // Create nucleus as particle sphere
      const nucleusColor = new THREE.Color(0xff0000)
      const nucleus = createParticleSphere(2, 5000, nucleusColor, true)
      atomGroup.add(nucleus)

      // Create electron shells as particle tori
      const shellRadii = [5, 8, 11]
      shellRadii.forEach((radius, shellIndex) => {
        const shell = createParticleTorus(radius, 0.2, 2000)
        shell.rotation.x = Math.PI / 4 * shellIndex
        shell.rotation.y = Math.PI / 6 * shellIndex
        atomGroup.add(shell)

        // Add electrons as small particle spheres
        const electronsCount = (shellIndex + 1) * 2
        const electronGroup = new THREE.Group()
        for(let i = 0; i < electronsCount; i++) {
          const electronColor = new THREE.Color(0x00ffff)
          const electron = createParticleSphere(0.3, 200, electronColor)
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
      const protonColor = new THREE.Color(0xff0000)
      const neutronColor = new THREE.Color(0x0000ff)
      
      // Create protons and neutrons as particle spheres
      for(let i = 0; i < protonCount + neutronCount; i++) {
        const isProton = i < protonCount
        const color = isProton ? protonColor : neutronColor
        const particle = createParticleSphere(1, 1000, color)
        
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

      // Create gluons as particle tubes
      for(let i = 0; i < quarks.length; i++) {
        for(let j = i + 1; j < quarks.length; j++) {
          const gluon = createGluon(quarks[i].position, quarks[j].position)
          quarkGroup.add(gluon)
        }
      }
    }

    // Add photons
    const photons = []
    for(let i = 0; i < 50; i++) {
      const photon = createPhoton()
      scene.add(photon)
      photons.push(photon)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0xffffff, 0.7)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xffffff, 0.3)
    pointLight2.position.set(-10, -10, -10)
    scene.add(pointLight2)

    // Animation
    let animationFrameId = null
    let transitionStartTime = null
    const transitionDuration = 1.0 // seconds

    const animate = () => {
      if (isAnimating) {
        const time = Date.now() * 0.001

        // Update all shader materials
        scene.traverse((child) => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.time.value = time
          }
        })

        atomGroup.traverse((child) => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.time.value = time
          }
        })

        nucleusGroup.traverse((child) => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.time.value = time
          }
        })

        quarkGroup.traverse((child) => {
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
            if (child.material && child.material.opacity) {
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
              -photon.position.x / 30,
              -photon.position.y / 30,
              -photon.position.z / 30
            )
          }
        })

        // Handle transition
        if (isTransitioning) {
          if (transitionStartTime === null) {
            transitionStartTime = Date.now()
          }

          const elapsed = (Date.now() - transitionStartTime) / 1000
          let progress = Math.min(elapsed / transitionDuration, 1)

          // Cubic ease-in-out
          progress = progress < 0.5 
            ? 4 * progress * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2

          const fromGroup = currentView === 'atom' ? atomGroup :
                           currentView === 'nucleus' ? nucleusGroup : quarkGroup
          const toGroup = targetView === 'atom' ? atomGroup :
                         targetView === 'nucleus' ? nucleusGroup : quarkGroup

          // Fade out fromGroup
          fromGroup.traverse(child => {
            if (child.material && child.material.opacity !== undefined) {
              child.material.opacity = 1 - progress
            }
          })

          // Fade in toGroup
          toGroup.visible = true
          toGroup.traverse(child => {
            if (child.material && child.material.opacity !== undefined) {
              child.material.opacity = progress
            }
          })

          // Animate camera zoom
          const targetZ = (targetView === 'nucleus' || targetView === 'quark') ? 5 : 20
          const startZ = (currentView === 'nucleus' || currentView === 'quark') ? 5 : 20
          camera.position.z = THREE.MathUtils.lerp(startZ, targetZ, progress)

          // Scale effect with slight overshoot
          const fromScale = 1 - progress * 0.5 - Math.sin(progress * Math.PI) * 0.1
          const toScale = 0.5 + progress * 0.5 + Math.sin(progress * Math.PI) * 0.1
          fromGroup.scale.setScalar(Math.max(fromScale, 0.1))
          toGroup.scale.setScalar(toScale)

          if (progress >= 1) {
            setIsTransitioning(false)
            setCurrentViewState(targetView)
            setTargetView(null)
            transitionStartTime = null
            fromGroup.visible = false
            atomGroup.visible = targetView === 'atom'
            nucleusGroup.visible = targetView === 'nucleus'
            quarkGroup.visible = targetView === 'quark'
            camera.position.z = targetZ
            // Reset scales and opacities
            atomGroup.scale.setScalar(1)
            nucleusGroup.scale.setScalar(1)
            quarkGroup.scale.setScalar(1)
            scene.traverse(child => {
              if (child.material && child.material.opacity !== undefined) {
                child.material.opacity = 1
              }
            })
          }
        }

        controls.update()

        // Render bloom without photons
        photons.forEach(photon => { photon.visible = false })
        bloomComposer.render()

        // Render final with photons
        photons.forEach(photon => { photon.visible = true })
        finalComposer.render()

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
      bloomComposer.setSize(window.innerWidth, window.innerHeight)
      finalComposer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      scene.traverse(object => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(mat => mat.dispose())
          } else {
            object.material.dispose()
          }
        }
      })
      renderer.dispose()
      controls.dispose()
      bloomComposer.dispose()
      finalComposer.dispose()
    }
  }, [isAnimating, currentView, targetView, isTransitioning])

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