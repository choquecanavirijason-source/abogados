"use client"

import { useRef, type MouseEvent } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import SectionLayout from "./SectionLayout"
import { FileText, Archive, AlertTriangle, Scale } from "lucide-react"
import TitleSection from "../../common/title/TitleSection"
import { useTranslations } from "next-intl"
import { EASE_REVEAL, PARALLAX_SCRUB, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const differentiators = [
  {
    titleKey: "cards.0.title",
    descriptionKey: "cards.0.description",
    icon: FileText,
  },
  {
    titleKey: "cards.1.title",
    descriptionKey: "cards.1.description",
    icon: Archive,
  },
  {
    titleKey: "cards.2.title",
    descriptionKey: "cards.2.description",
    icon: AlertTriangle,
  },
]

export default function ServicesSection() {
  const t = useTranslations("Services")

  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const quoteRef = useRef<HTMLQuoteElement>(null)
  const isNear = useNearViewport(sectionRef)

  const { contextSafe } = useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Encabezado en cascada — entra al BAJAR, se revierte al SUBIR
        gsap.from(".svc-reveal", {
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

        // 2. Tarjetas con stagger — aparecen al bajar, se ocultan al subir
        gsap.from(".svc-card", {
          opacity: 0,
          y: 60,
          scale: 0.96,
          duration: 1,
          ease: "back.out(1.15)",
          stagger: 0.16,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: SCROLL_START,
            end: "bottom 55%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        // 3. Cita final — reveal bidireccional
        gsap.from(quoteRef.current, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: EASE_REVEAL,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
          },
        })

        // 4. Card destacada — float continuo del icono + pulso del glow (loop infinito)
        gsap.to(".svc-featured .svc-ficon", {
          y: -8,
          duration: 2.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })

        gsap.to(".svc-glow", {
          opacity: 0.45,
          scale: 1.08,
          duration: 2.6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          transformOrigin: "50% 30%",
        })

        // 5. Parallax del fondo legal — profundidad ligada al scroll (ambos sentidos)
        gsap.to(bgRef.current, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: PARALLAX_SCRUB,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: sectionRef, dependencies: [isNear] }
  )

  // Hover premium en las cards: elevación + tilt 3D que sigue el cursor
  const onCardMove = contextSafe((e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(card, {
      rotationY: px * 8,
      rotationX: -py * 8,
      y: -10,
      scale: 1.03,
      transformPerspective: 800,
      transformOrigin: "center",
      duration: 0.5,
      ease: "power3.out",
    })
  })

  const onCardLeave = contextSafe((e: MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    })
  })

  return (
    <SectionLayout
      id="services-section"
      darkBackground="#050D24"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="flex min-h-screen flex-col"
      ref={sectionRef}
    >
      <div className="relative flex flex-1 flex-col overflow-hidden lg:h-full">

        {/* ===== FONDO LEGAL ESTÉTICO ===== */}
        <div ref={bgRef} className="pointer-events-none absolute -inset-x-0 -top-[12%] -bottom-[12%] z-0">
          {/* Foto del bufete, sutil */}
          <Image
            src="/images/home/hero/lawyer-background.webp"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="scale-110 object-cover object-center opacity-[0.16]"
          />
          {/* Degradado de marca para legibilidad de las tarjetas */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#050D24_0%,rgba(5,13,36,0.82)_38%,rgba(7,18,46,0.92)_100%)]" />
          {/* Toque direccional + viñeta */}
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_0%,rgba(5,13,36,0.55)_100%)]" />
          {/* Glows azules de marca */}
          <div className="absolute -left-24 -top-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(70,136,212,0.22),transparent_70%)] blur-2xl" />
          <div className="absolute -bottom-24 -right-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(70,136,212,0.15),transparent_70%)] blur-2xl" />
          {/* Mazo como marca de agua tenue */}
          <Image
            src="/images/home/hero/image-maso.webp"
            alt=""
            aria-hidden
            width={560}
            height={560}
            className="absolute -right-10 bottom-0 w-[44vw] max-w-[520px] object-contain opacity-[0.06] mix-blend-luminosity"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-[90%] max-w-none flex-1 flex-col px-4 py-14 md:px-10 md:py-20 lg:h-full lg:px-16">
          <div className="flex flex-col lg:h-full lg:justify-center">
            <div className="mx-auto max-w-4xl text-center">
              <div className="space-y-2">
                <TitleSection
                  as="h2"
                  line1={t("title.line1")}
                  line2={t("title.line2")}
                  inlineLine2
                  className="mt-3 font-bold leading-[1.1] text-[#0A0E27] dark:text-white"
                  line2ClassName="font-bold text-[#2F62B8] dark:text-[#4688D4]"
                />
              </div>

              <p className="svc-reveal mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#4D5C74] dark:text-[color:var(--section-muted-dark)] md:text-base">
                {t("description")}
              </p>
              <p className="svc-reveal mt-2 flex items-center justify-center gap-1.5 text-xs text-[#5A6B82] dark:text-[color:var(--section-muted-dark)]">
                <Scale className="h-3.5 w-3.5 shrink-0 text-[#2F62B8] dark:text-[#4688D4]" />
                {t("disclaimer")}
              </p>
            </div>

             <blockquote
              ref={quoteRef}
              className="relative mt-5 w-full overflow-hidden rounded-2xl border border-t-2 border-white/15 p-4 text-white/90 backdrop-blur-md md:mt-6 md:p-6"
            >
              <div className="pointer-events-none absolute inset-0 " />

              <p className="font-euclid text-xl font-light italic leading-relaxed text-white/95 md:text-3xl">
                {`"${t("quote.text")}"`}
              </p>
              <footer className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/55">
                {t("quote.footer")}
              </footer>
            </blockquote>

            <div className="relative mt-7 w-full md:mt-10">
              {/* Fondo blanco full-bleed que arranca desde la mitad de las cards hacia abajo */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[200vh] w-screen -translate-x-1/2 bg-white"
              />

              <div
                ref={cardsRef}
                className="relative z-10 grid w-full grid-cols-1 gap-5 md:grid-cols-3 lg:items-center lg:gap-6"
              >
                {differentiators.map((item, index) => {
                  const Icon = item.icon
                  const featured = index === 1
                  return (
                    <article
                      key={item.titleKey}
                      onMouseMove={onCardMove}
                      onMouseLeave={onCardLeave}
                      className={
                        featured
                          ? "svc-card svc-featured relative z-10 flex h-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-[linear-gradient(155deg,#0E2150_0%,#081634_55%,#050D24_100%)] p-7 text-center shadow-[0_30px_65px_-15px_rgba(5,13,36,0.55)] [transform-style:preserve-3d] will-change-transform md:p-9"
                          : "svc-card flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200/70 bg-[#EEF1F6] p-6 text-center shadow-[0_18px_45px_-18px_rgba(5,13,36,0.25)] [transform-style:preserve-3d] will-change-transform md:p-8"
                      }
                    >
                      {featured && (
                        <div
                          aria-hidden
                          className="svc-glow pointer-events-none absolute inset-0 -z-0 rounded-3xl bg-[radial-gradient(60%_60%_at_50%_30%,rgba(70,136,212,0.28),transparent_70%)]"
                        />
                      )}
                      <div
                        className={`relative mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                          featured ? "svc-ficon bg-white/10" : "bg-[#4688D4]/12"
                        }`}
                      >
                        <Icon
                          className={`h-7 w-7 ${featured ? "text-[#7FB0EC]" : "text-[#4688D4]"}`}
                          strokeWidth={2.2}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold leading-snug md:text-xl ${
                          featured ? "text-white" : "text-[#0A0E27]"
                        }`}
                      >
                        {t(item.titleKey)}
                      </h3>
                      <p
                        className={`mt-3 max-w-xs text-sm leading-relaxed ${
                          featured ? "text-white/75" : "text-[#4D5C74]"
                        }`}
                      >
                        {t(item.descriptionKey)}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
