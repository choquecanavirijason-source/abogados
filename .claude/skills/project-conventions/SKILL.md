---
name: project-conventions
description: Convenciones de este proyecto (landing AGM/abogados) — Next.js 16 App Router, React 19, TypeScript, Tailwind v4, shadcn/ui, next-intl, arquitectura atómica y alias de imports. Úsalo siempre que crees o edites componentes, páginas, rutas o estilos en este repo para respetar la estructura existente.
---

# Convenciones del proyecto

App landing (abogados / AGM) en **Next.js 16 (App Router) + React 19 (React Compiler activo) + TypeScript + Tailwind v4**.

## Stack y librerías
- UI: **shadcn/ui** (`@/components/ui/*`) + **radix-ui** + **lucide-react** / `react-icons`.
- Estilos: **Tailwind v4** (sintaxis nueva: `bg-linear-to-r`, no `bg-gradient-to-r`). Globals en `src/styles/globals.css`. Fuente custom `font-euclid`.
- Utilidad de clases: `cn` desde `@/lib/utils` (clsx + tailwind-merge). Úsala siempre para combinar `className`.
- i18n: **next-intl** con locales `['en','es','cn','in']`, default `es`, `localePrefix: 'always'`. Mensajes en `src/messages/{en,es,cn,in}.json`. Routing en `src/i18n/routing.ts`.
- Estado: **zustand**. Datos remotos: **swr** + **axios**. Validación: **zod**.
- Animación: **gsap** (ver skill `gsap-animations`) y **motion**. 3D: **three / @react-three/fiber / drei** (ver skill `threejs-r3f`).

## Arquitectura (Atomic Design)
Código de UI en `src/presentation/`:
- `atoms/` — piezas mínimas (botones, badges, texto, títulos, cards).
- `molecules/` — composición de atoms.
- `organisms/` — secciones completas (Header, etc.).
- `templates/` — layouts de página (p. ej. `AppLayout`).
- `pages/` — páginas concretas por feature (`home/PageHome`, `company/terms/PageTerms`, `dof/`).

Las rutas reales (App Router) viven en `src/app/[locale]/…` e importan los `Page*` desde `src/presentation/pages/`. API routes en `src/app/api/`. Lógica de dominio/integración en `src/lib/` (p. ej. `src/lib/dof/`).

## Convenciones de código
- **Imports con alias `@/`** → raíz `src/`. Nunca rutas relativas largas (`../../../`).
- Componentes en **PascalCase**, un componente por archivo; `export default` para `Page*`/componentes principales, named export para utilitarios.
- Props tipadas con `interface NombreProps`.
- Marca `"use client";` solo cuando se usen hooks, eventos, GSAP, Three.js o estado del navegador. Por defecto, Server Components.
- Textos visibles **siempre vía next-intl** (`useTranslations` / `getTranslations`), nunca hardcodeados; añade la clave a los 4 archivos de `messages/`.
- Reutiliza atoms/shadcn existentes antes de crear nuevos. Sigue el patrón de los componentes vecinos (clases Tailwind, gradientes de marca `from-[#0A0E27] to-[#4688D4]`, bordes `rounded-full`, transiciones).

## Scripts
- `npm run dev` → dev en puerto **3002** (`next dev --webpack`).
- `npm run build` → build. `npm run build:static` → export estático.
- `npm run start` → producción puerto 3002.
