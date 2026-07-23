---
name: gsap-animations
description: Crear animaciones con GSAP 3.14 en este proyecto Next.js 16 (App Router) + React 19 + TypeScript. Cubre el hook oficial useGSAP, gsap.context/cleanup, ScrollTrigger, timelines, animaciones de entrada/scroll, y el patrón "use client". Úsalo cuando el usuario pida animar componentes, hacer efectos de scroll, transiciones, reveal on scroll, parallax, hovers animados, o cuando trabajes con archivos .tsx que importen "gsap" o usen useGSAP/ScrollTrigger.
---

# GSAP en este proyecto

Stack: GSAP `^3.14.2`, Next.js 16 App Router, React 19 (compiler activo), TypeScript. Arquitectura atómica en `src/presentation/{atoms,molecules,organisms,templates,pages}`.

## Reglas de oro

1. **Todo componente que use GSAP es Client Component.** La primera línea del archivo debe ser `"use client";`. GSAP toca el DOM y `window`, no puede correr en el servidor.
2. **Usa el hook oficial `@gsap/react` (`useGSAP`)** para el scope y el cleanup automático. Si no está instalado, instálalo: `npm i @gsap/react`. Es la forma recomendada por GreenSock para React 18/19 y reemplaza el `useEffect` + `gsap.context()` manual.
3. **Siempre scope + cleanup.** Nunca animes selectores globales sin scope; rompe con React Compiler (React 19) y con re-renders. `useGSAP` ya hace el `revert()` al desmontar.
4. **Registra los plugins una sola vez** tras `"use client"`: `gsap.registerPlugin(useGSAP, ScrollTrigger)`.
5. **Refs sobre selectores de string.** Prefiere `useRef` + `{ scope: container }` para que los selectores queden acotados al componente.

## Patrón base (entrada de un componente)

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroReveal() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // selectores acotados al container por el scope
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });
    },
    { scope: container } // cleanup automático al desmontar
  );

  return (
    <div ref={container}>
      <h1 className="reveal-item">Título</h1>
      <p className="reveal-item">Texto</p>
    </div>
  );
}
```

## ScrollTrigger (reveal on scroll / parallax)

```tsx
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".card", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",      // cuando el top del trigger llega al 80% del viewport
          toggleActions: "play none none reverse",
          // markers: true,      // útil para depurar, quítalo antes de commitear
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container}>
      <div className="card">…</div>
      <div className="card">…</div>
    </section>
  );
}
```

## Timeline reutilizable

```tsx
useGSAP(
  () => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.6 } });
    tl.from(".logo", { opacity: 0, scale: 0.8 })
      .from(".nav-item", { y: -20, opacity: 0, stagger: 0.08 }, "-=0.3")
      .from(".cta", { x: 30, opacity: 0 }, "<");
  },
  { scope: container }
);
```

## Interacciones (hover, dependencias dinámicas)

- Para eventos usa `contextSafe` que devuelve `useGSAP`, así el handler queda dentro del scope y se limpia solo:

```tsx
const { contextSafe } = useGSAP({ scope: container });

const onEnter = contextSafe(() => {
  gsap.to(".btn", { scale: 1.05, duration: 0.2 });
});
```

- Si la animación depende de props/estado, pásalos en `dependencies`: `useGSAP(() => {...}, { scope: container, dependencies: [isOpen] })`.

## Errores comunes a evitar

- ❌ Olvidar `"use client"` → error de hidratación / `window is not defined`.
- ❌ Animar sin `scope` → fugas y selectores que afectan a otros componentes.
- ❌ Registrar plugins dentro del render o repetidamente → hazlo a nivel de módulo.
- ❌ Manipular el DOM directamente o mezclar con `motion`/Framer en el mismo elemento.
- ❌ Dejar `markers: true` o `console.log` en el commit final.
- ❌ Usar `gsap.context()` manual nuevo cuando ya está `useGSAP` disponible.

## SSR / Next.js

- Componentes con GSAP siempre `"use client"` y, si pesan, impórtalos con `next/dynamic` (`{ ssr: false }`) desde un Server Component padre cuando no necesiten render en servidor.
- Respeta accesibilidad: envuelve animaciones grandes en `gsap.matchMedia()` con `(prefers-reduced-motion: no-preference)`.
