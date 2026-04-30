'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Text, Float } from '@react-three/drei'
import * as THREE from 'three'

interface AgmLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'fullscreen'
  text?: string
  colorTheme?: 'blue' | 'cyan' | 'purple'
}

const COLOR_MAP = {
  blue: { primary: '#00d9ff', secondary: '#0099ff' },
  cyan: { primary: '#00ffff', secondary: '#00ccff' },
  purple: { primary: '#b344ff', secondary: '#9933ff' },
} as const

function SpinnerRing({ color, radius, speed, tilt }: {
  color: string
  radius: number
  speed: number
  tilt: [number, number, number]
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.z += delta * speed
  })

  return (
    <group ref={groupRef} rotation={tilt}>
      <mesh>
        <torusGeometry args={[radius, 0.015, 16, 80]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.25}
        />
      </mesh>

      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
        />
      </mesh>
    </group>
  )
}

function BrandText({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  useFrame((_, delta) => {
    time.current += delta
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(time.current * 2) * 0.08)
      ;(glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        0.06 + Math.sin(time.current * 2) * 0.03
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.3} floatingRange={[-0.03, 0.03]}>
      <group ref={groupRef}>
        <Text
          fontSize={0.38}
          letterSpacing={0.15}
          anchorX="center"
          anchorY="middle"
          fontWeight={700}
        >
          AGM
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.8}
            metalness={0.9}
            roughness={0.1}
          />
        </Text>

        <mesh ref={glowRef} position={[0, 0, -0.1]}>
          <planeGeometry args={[1.2, 0.6]} />
          <meshBasicMaterial color={color} transparent opacity={0.06} />
        </mesh>
      </group>
    </Float>
  )
}

function AgmLoaderScene({ colorTheme = 'blue' }: { colorTheme?: keyof typeof COLOR_MAP }) {
  const { primary, secondary } = COLOR_MAP[colorTheme]

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={45} />

      <ambientLight intensity={0.2} />
      <pointLight position={[3, 3, 3]} intensity={0.8} color={primary} />

      <color attach="background" args={['#0a0e27']} />

      <BrandText color={primary} />

      <SpinnerRing color={primary} radius={0.8} speed={1.8} tilt={[Math.PI / 2.2, 0, 0]} />
      <SpinnerRing color={secondary} radius={0.8} speed={-1.3} tilt={[-Math.PI / 2.8, Math.PI / 6, 0]} />
    </>
  )
}

export function AgmLoader({
  size = 'md',
  variant = 'default',
  text,
  colorTheme = 'blue',
}: AgmLoaderProps) {
  const sizeMap = {
    sm: 'w-28 h-28',
    md: 'w-40 h-40',
    lg: 'w-60 h-60',
  }

  const { primary } = COLOR_MAP[colorTheme]

  if (variant === 'fullscreen') {
    return (
      <div className="fixed inset-0 bg-[#0a0e27] flex flex-col items-center justify-center z-50">
        <div className="relative w-44 h-44">
          <Canvas>
            <AgmLoaderScene colorTheme={colorTheme} />
          </Canvas>
        </div>

        {text && (
          <p
            className="mt-4 text-sm font-medium tracking-wide animate-pulse"
            style={{ color: primary }}
          >
            {text}
          </p>
        )}

        <div className="flex gap-1.5 mt-3">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1.5 h-1.5 rounded-full animate-bounce"
              style={{
                backgroundColor: primary,
                animationDelay: `${i * 0.15}s`,
                animationDuration: '0.8s',
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`${sizeMap[size]} mx-auto flex flex-col items-center justify-center`}>
      <Canvas>
        <AgmLoaderScene colorTheme={colorTheme} />
      </Canvas>
      {text && (
        <p
          className="mt-2 text-xs font-medium tracking-wide animate-pulse"
          style={{ color: primary }}
        >
          {text}
        </p>
      )}
    </div>
  )
}

export default AgmLoader
