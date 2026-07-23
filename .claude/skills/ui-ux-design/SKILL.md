---
name: ui-ux-design
description: Diseñar interfaces premium y pulidas en este proyecto (landing AGM/abogados) con Tailwind v4 + shadcn/ui. Cubre sistema de diseño, jerarquía visual, escala tipográfica, espaciado, color de marca, profundidad/sombras, glassmorphism, microinteracciones, estados (hover/focus/loading/empty/error), responsive y accesibilidad. Úsalo siempre que el usuario pida que algo "se vea bien/mejor/premium", crear o rediseñar secciones (hero, cards, features, CTA, footer), mejorar el look visual, o pulir UI en archivos .tsx.
---

# UX/UI Premium — sistema de diseño

Objetivo: que cada pantalla se vea profesional, limpia y de marca. Stack: Tailwind v4, shadcn/ui, lucide-react, `cn` de `@/lib/utils`, fuente `font-euclid`. Animación con GSAP (skill `gsap-animations`) y `motion`.

## Marca / tokens visuales
- **Gradiente primario:** `bg-linear-to-r from-[#0A0E27] to-[#4688D4]` (Tailwind v4: `bg-linear-*`, NO `bg-gradient-*`).
- **Azul marca:** `#4688D4`. **Azul oscuro/tinta:** `#0A0E27`. Úsalos para acentos, CTAs y focus rings.
- **Forma:** botones y chips `rounded-full`; cards `rounded-2xl`/`rounded-3xl`.
- **Tipografía:** `font-euclid`. Define tokens semánticos, no tamaños sueltos repetidos.
- Centraliza colores/espaciados como CSS vars en `src/styles/globals.css` (`@theme`) y úsalos vía clases; evita hex sueltos repetidos por todo el código.

## Reglas de oro (lo que más sube la calidad)
1. **Jerarquía clara:** un único foco por sección. Tamaño, peso y color guían el ojo; no compitas todo al mismo nivel.
2. **Escala tipográfica consistente** (no inventes tamaños). Sugerida:
   - Display/H1: `text-4xl md:text-6xl font-semibold tracking-tight`
   - H2: `text-3xl md:text-4xl font-semibold tracking-tight`
   - H3: `text-xl md:text-2xl font-medium`
   - Body: `text-base md:text-lg text-muted-foreground leading-relaxed`
   - Caption/label: `text-sm uppercase tracking-wide text-muted-foreground`
3. **Espaciado en escala de 4/8.** Secciones: `py-20 md:py-32`. Contenedor: `mx-auto max-w-7xl px-6 lg:px-8`. Gaps generosos; el aire = sensación premium.
4. **Contraste y legibilidad:** texto secundario con `text-muted-foreground`, nunca gris ilegible. Cumple AA (4.5:1 en texto).
5. **Profundidad sutil, no pesada:** sombras suaves y de marca: `shadow-[0_8px_30px_rgba(10,14,39,0.08)]`; en hover `hover:shadow-[0_0_24px_rgba(70,136,212,0.35)]`. Evita sombras negras duras.
6. **Bordes finos** `border border-black/5` + fondos `bg-white/70 backdrop-blur` para glass cards.
7. **Consistencia > creatividad:** reutiliza atoms existentes (`ButtonAction`, badges, cards de `src/presentation/atoms/`) y su lenguaje de clases.

## Microinteracciones (clave del "premium")
- Transiciones siempre: `transition-all duration-300 ease-out`.
- Hover de tarjetas: `hover:-translate-y-1 hover:shadow-…`.
- Botones: escala/brillo sutil (ver `ButtonAction` con la flecha que se desplaza en hover) — replica ese patrón.
- Entradas/scroll: usa la skill **gsap-animations** (reveal con stagger, ScrollTrigger). Respeta `prefers-reduced-motion`.
- 3D/decorativo de fondo: skill **threejs-r3f**, con `pointer-events-none`.

## Estados que NO se deben olvidar
Toda UI interactiva define: **default, hover, focus-visible, active, disabled, loading, empty, error**.
- Focus accesible: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4] focus-visible:ring-offset-2`.
- Loading: usa los loaders del proyecto (`PremiumLoader`, `space-loader`), no spinners genéricos.
- Empty/error: mensaje claro + acción; nunca una pantalla en blanco.

## Responsive (mobile-first)
- Empieza por móvil y escala con `sm: md: lg: xl:`. Prueba 360px, 768px, 1280px.
- Grids: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
- Tipografía y padding fluidos por breakpoint (ver escala arriba).
- Touch targets ≥ 44px.

## Accesibilidad (no negociable)
- HTML semántico (`<section>`, `<nav>`, `<button>`, headings en orden).
- `alt` en imágenes; `next/image` con `width/height` o `fill` + `sizes`.
- Contraste AA, focus visible, navegación por teclado, `aria-label` en botones de solo icono.
- Textos vía **next-intl** (4 locales), nunca hardcodeados.

## Checklist antes de dar por hecho un diseño
- [ ] Un foco visual claro por sección
- [ ] Escala tipográfica y espaciado consistentes (4/8)
- [ ] Estados hover/focus-visible/disabled/loading definidos
- [ ] Sombras y bordes sutiles, de marca
- [ ] Responsive verificado (móvil → desktop)
- [ ] Contraste AA + foco accesible + alt/aria
- [ ] Microinteracciones suaves (`duration-300`) y `prefers-reduced-motion`
- [ ] Reutiliza atoms/shadcn existentes; textos en i18n
