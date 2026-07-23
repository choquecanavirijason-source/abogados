---
name: threejs-r3f
description: Construir escenas 3D con Three.js 0.183 vía React Three Fiber (@react-three/fiber 9) y @react-three/drei 10 en este proyecto Next.js 16 (App Router) + React 19 + TypeScript. Cubre Canvas, "use client", carga con next/dynamic ssr:false, useFrame, helpers de drei, luces, cámaras, carga de modelos GLTF, performance y cleanup. Úsalo cuando el usuario pida escenas 3D, modelos, materiales, partículas, fondos animados, o cuando trabajes con archivos .tsx que importen "three", "@react-three/fiber" o "@react-three/drei".
---

# Three.js + React Three Fiber en este proyecto

Stack: `three ^0.183`, `@react-three/fiber ^9.5`, `@react-three/drei ^10.7`, `@types/three ^0.183`, Next.js 16 App Router, React 19, TypeScript. Arquitectura atómica en `src/presentation/`.

## Reglas de oro

1. **El `<Canvas>` vive en un Client Component** (`"use client";` en la primera línea). WebGL necesita `window`/DOM.
2. **Carga la escena con `next/dynamic` y `{ ssr: false }`** desde el componente que la monta, para que Next no intente renderizarla en el servidor.
3. **Nada de hooks de React fuera del `<Canvas>` para estado de la escena.** `useFrame`, `useThree`, `useLoader` solo funcionan dentro del árbol de `<Canvas>`.
4. **Usa drei** para lo común (`OrbitControls`, `Environment`, `useGLTF`, `Float`, `Html`, `PerspectiveCamera`). No reinventes.
5. **Performance primero:** `dpr={[1, 2]}`, `frameloop="demand"` cuando la escena es estática, y `<Suspense>` alrededor de assets.
6. **Cleanup:** R3F dispone (`dispose`) automáticamente al desmontar. No retengas geometrías/materiales en variables globales.

## Estructura recomendada

```
src/presentation/atoms/three/        # piezas: Mesh, luces, materiales
src/presentation/molecules/three/    # grupos / modelos
src/presentation/organisms/three/    # Scene.tsx (el <Canvas>)
```

## Montaje seguro en Next.js (carga diferida)

```tsx
// organisms/three/ThreeScene.tsx
"use client";

import dynamic from "next/dynamic";

// El Canvas no se renderiza en servidor
const Scene = dynamic(() => import("./Scene"), { ssr: false });

export function ThreeScene() {
  return (
    <div className="h-[500px] w-full">
      <Scene />
    </div>
  );
}
```

```tsx
// organisms/three/Scene.tsx
"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <SpinningBox />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} />
    </Canvas>
  );
}
```

## Mesh animado con useFrame

```tsx
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

function SpinningBox() {
  const ref = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#6366f1" />
    </mesh>
  );
}
```

## Cargar un modelo GLTF/GLB (drei)

```tsx
"use client";

import { useGLTF } from "@react-three/drei";

// El .glb va en /public/models/
function Model() {
  const { scene } = useGLTF("/models/logo.glb");
  return <primitive object={scene} />;
}
useGLTF.preload("/models/logo.glb");
```

Envuélvelo siempre en `<Suspense fallback={null}>` dentro del `<Canvas>`.

## Tipado TypeScript

- Refs de objetos three se tipan con los tipos de `three`: `useRef<Mesh>(null)`, `useRef<Group>(null)`.
- `@types/three` ya está instalado; importa tipos con `import type { Mesh, Group } from "three"`.
- Los elementos JSX (`<mesh>`, `<boxGeometry>`) están tipados por `@react-three/fiber`; no necesitas declararlos.

## Performance / buenas prácticas

- `frameloop="demand"` + `invalidate()` si la escena solo cambia por interacción (ahorra batería/CPU).
- Reutiliza geometrías y materiales; evita crearlos dentro de `useFrame`.
- Limita `dpr` a `[1, 2]`; en móviles full-dpr mata el rendimiento.
- Usa `<Float>`, `<Instances>`/`<Instance>` (drei) para muchos objetos repetidos.
- Para fondos decorativos no interactivos, `pointer-events: none` en el contenedor y `frameloop` controlado.
- Respeta `prefers-reduced-motion`: pausa `useFrame` cuando el usuario lo pida.

## Errores comunes a evitar

- ❌ Falta `"use client"` o renderizar `<Canvas>` en SSR → `ReferenceError: window is not defined` / crash de hidratación.
- ❌ Usar `useFrame`/`useThree` fuera del árbol de `<Canvas>`.
- ❌ Olvidar `<Suspense>` alrededor de `useGLTF`/texturas → la escena revienta mientras carga.
- ❌ Mutar `state` de React en `useFrame` (causa renders); muta el objeto three directo por ref.
- ❌ Crear `new THREE.*` en cada frame.
- ❌ Modelos pesados sin comprimir (usa Draco/meshopt y `useGLTF.preload`).
