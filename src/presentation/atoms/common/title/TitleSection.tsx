"use client"

import { cn } from "@/lib/utils"
import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

interface TitleSectionProps {
  as?: "h1" | "h2" | "h3"
  line1: string
  line2?: string
  className?: string
  line2ClassName?: string
  inlineLine2?: boolean
  /** Desactiva el efecto de tecleo si se necesita un título estático. */
  typewriter?: boolean
}

export default function TitleSection({
  as = "h1",
  line1,
  line2,
  className,
  line2ClassName,
  inlineLine2 = false,
  typewriter = true,
}: TitleSectionProps) {
  const Heading = as
  const ref = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || !typewriter) return

      const mm = gsap.matchMedia()
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Divide en caracteres SIN perder el texto real del DOM (SEO/accesibilidad).
        const targets = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".tw-text"))
        const split = new SplitText(targets, { type: "chars", aria: "auto" })

        gsap.set(split.chars, { opacity: 0 })

        // Aparición instantánea por letra = sensación de tecleo rápido.
        gsap.to(split.chars, {
          opacity: 1,
          duration: 0.02,
          ease: "none",
          stagger: 0.04,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            // Teclea al bajar; se reinicia al volver a entrar desde arriba.
            toggleActions: "restart none none reset",
          },
        })

        return () => split.revert()
      })
    },
    { scope: ref, dependencies: [line1, line2] }
  )

  return (
    <Heading
      ref={ref}
      className={cn("mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold", className)}
    >
      <span className="tw-text">{line1}</span>
      {line2 ? (
        inlineLine2 ? (
          <>
            {" "}
            {/* En móvil salta de línea; en desktop (sm+) queda en la misma línea. */}
            <br className="sm:hidden" aria-hidden />
            <span className={cn("tw-text", line2ClassName)}>{line2}</span>
          </>
        ) : (
          <>
            <br />
            <span className={cn("tw-text", line2ClassName)}>{line2}</span>
          </>
        )
      ) : null}
      {typewriter ? <span aria-hidden className="tw-caret" /> : null}
    </Heading>
  )
}
