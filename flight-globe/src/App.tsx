import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './components/Scene'
import { HUD } from './components/HUD'
import { DataLayer } from './components/DataLayer'
import { RouteResolver } from './components/RouteResolver'

export default function App() {
  return (
    <>
      <Canvas
        camera={{ position: [0, 0.6, 2.6], fov: 45, near: 0.1, far: 100 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#05070d']} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      <DataLayer />
      <RouteResolver />
      <HUD />
    </>
  )
}
