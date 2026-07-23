"use client"

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Center, ContactShadows, Float, Html, useGLTF } from "@react-three/drei"
import * as THREE from "three"

const MODEL_URL = "/models/legalbook.glb"

function LegalBookModel() {
  const { scene } = useGLTF(MODEL_URL)

  // Centramos y normalizamos el tamaño del modelo sin conocer sus dimensiones reales.
  const { object, scale } = useMemo(() => {
    const cloned = scene.clone(true)
    const box = new THREE.Box3().setFromObject(cloned)
    const size = new THREE.Vector3()
    box.getSize(size)
    const maxDim = Math.max(size.x, size.y, size.z) || 1
    cloned.traverse((obj) => {
      const mesh = obj as THREE.Mesh
      if (mesh.isMesh) {
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })
    return { object: cloned, scale: 2.6 / maxDim }
  }, [scene])

  return (
    <Center>
      <primitive object={object} scale={scale} />
    </Center>
  )
}

function RotatingBook({ animate }: { animate: boolean }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!animate || !ref.current) return
    // Pequeño vaivén suave (±~9°), nunca un giro completo.
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.16
  })

  return (
    <group ref={ref}>
      <LegalBookModel />
    </group>
  )
}

function LoaderFallback() {
  return (
    <Html center>
      <span className="block h-7 w-7 animate-spin rounded-full border-2 border-[#2F62B8] border-t-transparent" />
    </Html>
  )
}

export default function LegalBookScene() {
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  )

  return (
    <Canvas
      camera={{ position: [0, 0.4, 6], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      shadows
    >
      {/* Iluminación autocontenida (sin HDR externo) para que se vea bien y no dependa de red */}
      <hemisphereLight intensity={0.55} color="#ffffff" groundColor="#9fb4d8" />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 5]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight position={[-5, 2, -3]} intensity={0.5} color="#bcd1f5" />

      <Suspense fallback={<LoaderFallback />}>
        <Float
          speed={reducedMotion ? 0 : 1.1}
          rotationIntensity={reducedMotion ? 0 : 0.12}
          floatIntensity={reducedMotion ? 0 : 0.4}
          floatingRange={[-0.06, 0.06]}
        >
          <RotatingBook animate={!reducedMotion} />
        </Float>
      </Suspense>

      <ContactShadows
        position={[0, -1.7, 0]}
        opacity={0.32}
        scale={9}
        blur={2.6}
        far={4}
        color="#0A0E27"
      />
    </Canvas>
  )
}

useGLTF.preload(MODEL_URL)
