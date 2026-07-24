"use client"

import { useLayoutEffect, useMemo, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"
import SectionLayout from "./SectionLayout"
import TitleSection from "../../common/title/TitleSection"
import SectionDescription from "../../common/text/SectionDescription"
import AccentGlassCard from "../../common/cards/AccentGlassCard"
import { EASE_REVEAL, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type PricingPlan = {
  id: string
  stepKey: string
  titleKey: string
  descriptionKey: string
  priceKey: string
  badgeKey: string
  accent: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: "fundacion",
    stepKey: "plans.fundacion.step",
    titleKey: "plans.fundacion.title",
    descriptionKey: "plans.fundacion.description",
    priceKey: "plans.fundacion.price",
    badgeKey: "plans.fundacion.badge",
    accent: "bg-[#4688D4]",
  },
  {
    id: "cumplimiento",
    stepKey: "plans.cumplimiento.step",
    titleKey: "plans.cumplimiento.title",
    descriptionKey: "plans.cumplimiento.description",
    priceKey: "plans.cumplimiento.price",
    badgeKey: "plans.cumplimiento.badge",
    accent: "bg-[#4688D4]",
  },
  {
    id: "gobernanza",
    stepKey: "plans.gobernanza.step",
    titleKey: "plans.gobernanza.title",
    descriptionKey: "plans.gobernanza.description",
    priceKey: "plans.gobernanza.price",
    badgeKey: "plans.gobernanza.badge",
    accent: "bg-[#4688D4]",
  },
  {
    id: "urgente",
    stepKey: "plans.urgente.step",
    titleKey: "plans.urgente.title",
    descriptionKey: "plans.urgente.description",
    priceKey: "plans.urgente.price",
    badgeKey: "plans.urgente.badge",
    accent: "bg-[#4688D4]",
  },
  {
    id: "estructura",
    stepKey: "plans.estructura.step",
    titleKey: "plans.estructura.title",
    descriptionKey: "plans.estructura.description",
    priceKey: "plans.estructura.price",
    badgeKey: "plans.estructura.badge",
    accent: "bg-[#4688D4]",
  },
  {
    id: "suscripcion",
    stepKey: "plans.suscripcion.step",
    titleKey: "plans.suscripcion.title",
    descriptionKey: "plans.suscripcion.description",
    priceKey: "plans.suscripcion.price",
    badgeKey: "plans.suscripcion.badge",
    accent: "bg-[#4688D4]",
  },
]

export default function PricingSection() {
  const t = useTranslations("Pricing")
  const [current, setCurrent] = useState(0)
  const [visibleCards, setVisibleCards] = useState(1)
  const [trackHeight, setTrackHeight] = useState<number | null>(null)
  const total = pricingPlans.length

  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])
  const firstRun = useRef(true)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)
  const isSwiping = useRef(false)
  const isNear = useNearViewport(sectionRef)

  // useLayoutEffect (no useEffect): resuelve el número de tarjetas visibles ANTES
  // de que el navegador pinte, para no arrancar en el layout de 1 tarjeta y saltar
  // al de 3 después del primer paint (eso causaba layout shift en desktop).
  useLayoutEffect(() => {
    const mdMediaQuery = window.matchMedia("(min-width: 768px)")

    const updateVisibleCards = () => {
      if (mdMediaQuery.matches) {
        setVisibleCards(3)
        return
      }
      setVisibleCards(1)
    }

    updateVisibleCards()
    mdMediaQuery.addEventListener("change", updateVisibleCards)

    return () => {
      mdMediaQuery.removeEventListener("change", updateVisibleCards)
    }
  }, [])

  // Ajusta la altura del carrusel a la tarjeta activa para que el texto nunca se recorte.
  // useLayoutEffect para medir y aplicar la altura ANTES del paint del navegador —
  // si se mide en useEffect (post-paint), el contenedor cambia de tamaño después de
  // pintado y empuja todo el contenido de abajo (layout shift).
  useLayoutEffect(() => {
    const measure = () => {
      const el = cardRefs.current[current]
      if (el) setTrackHeight(el.offsetHeight)
    }

    measure()

    const el = cardRefs.current[current]
    const observer = new ResizeObserver(measure)
    if (el) observer.observe(el)
    window.addEventListener("resize", measure)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [current, visibleCards])

  const pageCount = useMemo(() => total, [total])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  // Gestos táctiles para mover el carrusel con el dedo en móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
    isSwiping.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const touch = e.touches[0]
    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current
    // Solo consideramos swipe horizontal si predomina sobre el desplazamiento vertical
    if (!isSwiping.current && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 8) {
      isSwiping.current = true
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50 // px mínimos para cambiar de tarjeta
    if (isSwiping.current && Math.abs(deltaX) > threshold) {
      if (deltaX < 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }
    touchStartX.current = null
    touchStartY.current = null
    isSwiping.current = false
  }

  const getRelativeOffset = (index: number) => {
    let diff = index - current
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  // Reveal del encabezado y los controles ligado al scroll (bidireccional, como las demás secciones)
  useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".pricing-reveal", {
          opacity: 0,
          y: 44,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            end: "bottom 30%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        // Glow ambiental pulsante para dar vida al fondo plano
        gsap.to(".pricing-glow", {
          opacity: 0.5,
          scale: 1.15,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      })
    },
    { scope: sectionRef, dependencies: [isNear] }
  )

  // Carrusel movido por GSAP: cada tarjeta se anima a su posición al cambiar el slide
  useGSAP(
    () => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      cardRefs.current.forEach((el, index) => {
        if (!el) return

        const offset = getRelativeOffset(index)
        const isCenter = offset === 0
        const isVisible = visibleCards === 1 ? isCenter : Math.abs(offset) <= 1

        // xPercent en GSAP es relativo al ancho de la propia tarjeta: -50 centra, offset*62 la desplaza
        const xPercent = -50 + (visibleCards === 1 ? 0 : offset * 62)
        const scale = isCenter ? 1 : 0.88
        const opacity = isVisible ? (isCenter ? 1 : 0.35) : 0
        const zIndex = isCenter ? 30 : isVisible ? 20 : 0

        gsap.set(el, { zIndex })

        if (firstRun.current || prefersReduced) {
          gsap.set(el, { xPercent, scale, opacity })
        } else {
          gsap.to(el, {
            xPercent,
            scale,
            opacity,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          })
        }
      })

      firstRun.current = false
    },
    { scope: sectionRef, dependencies: [current, visibleCards] }
  )

  return (
    <SectionLayout
      id="services"
      darkBackground="#494E57"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="relative min-h-screen py-16 md:py-20"
      ref={sectionRef}
    >
      {/* Glow ambiental animado */}
      <div
        aria-hidden
        className="pricing-glow pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(70,136,212,0.22),transparent_70%)] opacity-30 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-[90%] max-w-[1200px]">

        <div className="mx-auto mt-2 flex max-w-3xl flex-col items-center text-center">

  <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="pricing-reveal font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#4688D4]"
          />


          <SectionDescription
            text={t("description")}
            className="pricing-reveal mx-auto text-[color:var(--section-muted-dark)]"
          />
        </div>

        <div className="mt-10">
          <div className="pricing-reveal flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[#4688D4]/70 hover:bg-[#4688D4]/20"
              aria-label={t("carousel.prevAria")}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-[#4688D4]/70 hover:bg-[#4688D4]/20"
              aria-label={t("carousel.nextAria")}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="pricing-reveal mt-4 overflow-hidden">
            <div
              className="relative mx-auto w-full max-w-[1360px] touch-pan-y select-none transition-[height] duration-500 ease-out min-h-[510px] md:min-h-[620px]"
              style={trackHeight ? { height: trackHeight } : undefined}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {pricingPlans.map((plan, index) => {
                const offset = getRelativeOffset(index)
                const isCenter = offset === 0
                const isVisible = visibleCards === 1 ? isCenter : Math.abs(offset) <= 1

                return (
                  <article
                    key={plan.id}
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    className="absolute left-1/2 top-0 w-full max-w-[36rem] px-3 will-change-transform md:px-4"
                    aria-hidden={!isVisible}
                  >
                    <AccentGlassCard className="min-h-[475px] md:min-h-[535px]" accentClassName={plan.accent}>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[#A9BBDD]/70 sm:text-xs">{t(plan.stepKey)}</p>
                      <h3 className="mt-4 text-balance break-words text-[28px] font-semibold leading-[1.12] text-white sm:mt-5 sm:text-[34px] md:text-[42px]">{t(plan.titleKey)}</h3>
                      <div className="mt-5 h-px w-full bg-white/14" />
                      <p className="mt-6 text-lg leading-relaxed text-[#D8E1F3]/90 md:text-[19px]">{t(plan.descriptionKey)}</p>

                      <div className="mt-10 flex items-center gap-3">
                        <span className="inline-flex rounded-md border border-[#4E79B9]/45 bg-[#12284C] px-2.5 py-1 text-[11px] uppercase tracking-wider text-[#8FC1FF]">
                          {t(plan.badgeKey)}
                        </span>
                      </div>
                    </AccentGlassCard>
                    {!isCenter ? (
                      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#040915]/48" />
                    ) : null}
                  </article>
                )
              })}
            </div>
          </div>

          <div className="pricing-reveal mt-5 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={`dot-${index}`}
                type="button"
                onClick={() => setCurrent(index)}
                className={`h-2.5 cursor-pointer rounded-full transition-all ${
                  current === index ? "w-8 bg-[#4688D4]" : "w-2.5 bg-white/30 hover:bg-white/45"
                }`}
                aria-label={t("carousel.goToPage", { page: index + 1 })}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
