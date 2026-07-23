/**
 * Tokens de animación compartidos por las secciones del home.
 * Mismo punto de disparo y mismo ritmo en todas las secciones = scroll consistente,
 * sin secciones que se sientan más rápidas o desfasadas que otras.
 */
export const SCROLL_START = "top 85%"
export const SCROLL_END = "bottom 35%"
export const TOGGLE_ACTIONS = "play none none reverse"

export const EASE_REVEAL = "power3.out"
export const EASE_POP = "back.out(1.15)"

// Reveal simple (badges, textos, ctas)
export const REVEAL_DURATION = 1
export const REVEAL_STAGGER = 0.14
export const REVEAL_Y = 44
export const REVEAL_BLUR = "6px"

// Reveal de tarjetas/cuadrículas (con leve rebote)
export const POP_DURATION = 1
export const POP_STAGGER = 0.16
export const POP_Y = 60

export const PARALLAX_SCRUB = 1.3
