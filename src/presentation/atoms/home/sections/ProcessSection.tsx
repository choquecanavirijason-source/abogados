"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import ButtonBorder from "../../common/buttons/ButtonBorder"
import ButtonRedirect from "../../common/buttons/ButtonRedirect"
import SectionDescription from "../../common/text/SectionDescription"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import ServiceDifferentiatorCard from "./ServiceDifferentiatorCard"
import { EASE_REVEAL, PARALLAX_SCRUB, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function ProcessSection() {
  const t = useTranslations("Process")

  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isNear = useNearViewport(sectionRef)

  const handleScrollToConsultation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const consultation = document.getElementById("consultation")
    if (consultation) {
      event.preventDefault()
      consultation.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", "#consultation")
    }
  }

  useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Imagen del mazo — reveal al entrar + flotación bidireccional ligada al scroll
        gsap.from(imageRef.current, {
          opacity: 0,
          y: 70,
          scale: 0.92,
          filter: "blur(8px)",
          duration: 1.2,
          ease: EASE_REVEAL,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            end: "bottom 35%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        gsap.to(imageRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: PARALLAX_SCRUB,
            invalidateOnRefresh: true,
          },
        })

        // 2. Badge — reveal suave
        gsap.from(".process-badge", {
          opacity: 0,
          y: 32,
          duration: 1,
          ease: EASE_REVEAL,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
          },
        })

        // 3. Contenido de la tarjeta en cascada — entra al bajar, se revierte al subir
        gsap.from(".process-reveal", {
          opacity: 0,
          y: 44,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.16,
          scrollTrigger: {
            trigger: cardRef.current,
            start: SCROLL_START,
            end: "bottom 45%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: sectionRef, dependencies: [isNear] }
  )

  return (
    <SectionLayout
    id="process-section"
    darkBackground="#FFFFFF"
    darkAccent="#4688D4"
    darkMutedText="#B0BAC6"
    lightBackground="#F4F7FC"
    lightAccent="#2F62B8"
    lightMutedText="#4D5C74"
    className="isolate min-h-screen lg:h-[90dvh] lg:min-h-[90dvh] lg:max-h-[90dvh]"
    ref={sectionRef}
  >
    <div className="relative h-full min-h-screen overflow-hidden lg:min-h-[90dvh]">
      {/* Video de fondo — cubre la sección y se desvanece hacia la derecha */}
      <div
        ref={imageRef}
        aria-hidden
        className="pointer-events-none absolute -inset-y-[15%] inset-x-0 z-0 [mask-image:linear-gradient(to_right,black_0%,black_65%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_right,black_0%,black_65%,transparent_98%)]"
      >
        <video
          src="/videos/gabinete.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
      </div>

     

      <div className="relative z-[1] h-full min-h-screen lg:min-h-0">
      <div className="relative mx-auto flex h-full min-h-screen w-[90%] max-w-none flex-col justify-center px-4 pb-4 pt-14 md:px-10 md:pt-16 lg:min-h-0 lg:justify-start lg:px-16 lg:pb-8 lg:pt-20">

      {/* Contenedor Principal: móvil = centrado en columna; desktop = rejilla 2 columnas (como estaba) */}
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-8 lg:grid lg:grid-cols-2 lg:items-stretch lg:justify-normal lg:gap-8 lg:overflow-visible">

        {/* Lado Izquierdo: Textos (solo desktop) */}
        <div className="z-10 hidden min-h-0 w-full items-center justify-center overflow-visible lg:flex lg:min-h-0">

        </div>

        {/* Lado Derecho: Visual del Mazo (Ocupa el alto disponible) */}
        <div ref={cardRef} className="relative flex min-h-0 w-full flex-1 items-center justify-center py-4 lg:py-6">
          <ServiceDifferentiatorCard
            className="mx-auto h-auto max-h-[min(80dvh,760px)] w-full max-w-[36rem] shrink-0 text-center"
            contentClassName="flex w-full flex-col items-center justify-center gap-5 py-5 text-center sm:gap-6 sm:py-6"
          >
            <div className="process-reveal mx-auto w-full max-w-xl space-y-2 text-center">
              <TitleSection
                as="h1"
                line1={t("title.line1")}
                line2={t("title.line2")}
                className="font-bold leading-[1.1] text-[#FFFFFF] dark:text-[#FFFFFF]"
                line2ClassName="font-semibold text-[#FFFFFF] dark:text-[#FFFFFF]"
              />
            </div>

            <SectionDescription
              text={t("description")}
              className="process-reveal mx-auto max-w-xl text-center text-base font-semibold leading-relaxed text-[#D8E1F3]/90"
            />
            <p className="process-reveal max-w-xl text-center text-sm text-[#B9C8E6]/85">{t("source")}</p>

            <div className="process-reveal flex flex-wrap items-center justify-center gap-3">
              <ButtonBorder text={t("buttons.protect")} href="#consultation" onClick={handleScrollToConsultation} />
              <ButtonRedirect text={t("buttons.services")} href="#consultation" onClick={handleScrollToConsultation} />
            </div>
          </ServiceDifferentiatorCard>
        </div>
        <div className="process-badge absolute bottom-6 left-1/2 -translate-x-1/2 lg:static lg:bottom-auto lg:left-auto lg:translate-x-0">
          <BadgeGeneral
                badge_text={t("badge")}
              />
        </div>
      </div>

      </div>
      </div>
    </div>
  </SectionLayout>
  )
}
