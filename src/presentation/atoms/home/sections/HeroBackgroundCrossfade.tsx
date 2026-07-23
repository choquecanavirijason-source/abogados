"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

export type HeroBgSlide = {
  readonly src: string
  readonly alt: string
}

/** Tiempo que cada imagen se mantiene protagonista antes del siguiente crossfade */
const SLIDE_HOLD_MS = 3600
/** Duración del fundido entre imágenes (solapado = sensación continua) */
const CROSSFADE_S = 1.15

export default function HeroBackgroundCrossfade({
  slides,
}: {
  slides: readonly HeroBgSlide[]
}) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, SLIDE_HOLD_MS)
    return () => clearInterval(id)
  }, [slides.length])

  const duration = reduceMotion ? 0 : CROSSFADE_S
  const ease = [0.22, 1, 0.36, 1] as const

  return (
    <div className="absolute inset-0">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.src}
          className="absolute inset-0 scale-105"
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 1 : 0,
          }}
          transition={{ duration, ease }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-[0%_38%] lg:object-center"
            sizes="100vw"
            priority={i === 0}
            loading="eager"
          />
        </motion.div>
      ))}
    </div>
  )
}
