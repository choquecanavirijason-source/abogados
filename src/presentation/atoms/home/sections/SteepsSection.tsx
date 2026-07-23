"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { ClipboardList, FileCheck, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { EASE_REVEAL, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function SteepsSection() {
  const t = useTranslations("Steeps")

  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Badge — reveal suave al entrar
        gsap.from(".steeps-badge", {
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

        // 2. Cabecera (título + descripción) en cascada
        gsap.from(".steeps-head", {
          opacity: 0,
          y: 40,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.16,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
          },
        })

        // 3. Línea conectora — se dibuja de izquierda a derecha
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".steeps-grid",
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        // 4. Pasos en cascada — entran al bajar, se revierten al subir
        gsap.from(".steeps-card", {
          opacity: 0,
          y: 56,
          scale: 0.92,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".steeps-grid",
            start: SCROLL_START,
            end: "bottom 45%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        // 5. Sello — reveal con giro y rebote sutil (llega después que la cabecera)
        gsap.from(".steeps-seal", {
          opacity: 0,
          scale: 0.6,
          rotate: -25,
          duration: 1.1,
          ease: "back.out(1.15)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 55%",
            toggleActions: TOGGLE_ACTIONS,
          },
        })
      })
    },
    { scope: sectionRef }
  )

  const steps = [
    {
      titleKey: "steps.quote.title",
      descriptionKey: "steps.quote.description",
      icon: ClipboardList,
    },
    {
      titleKey: "steps.proposal.title",
      descriptionKey: "steps.proposal.description",
      icon: FileText,
    },
    {
      titleKey: "steps.delivery.title",
      descriptionKey: "steps.delivery.description",
      icon: FileCheck,
    },
  ] as const

  return (
    <SectionLayout
      id="process"
      darkBackground="#FFFFFF"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      lightBackground="#F4F7FC"
      lightAccent="#2F62B8"
      lightMutedText="#4D5C74"
      className="isolate py-20 md:py-24"
      ref={sectionRef}
    >
      <div className="relative h-full min-h-0 overflow-visible">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(180deg,black_42%,rgba(0,0,0,0.55)_72%,transparent_100%)]"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(152deg,transparent_0_32px,rgba(47,98,184,0.05)_32px,rgba(47,98,184,0.05)_33px)] dark:bg-[repeating-linear-gradient(152deg,transparent_0_32px,rgba(70,136,212,0.07)_32px,rgba(70,136,212,0.07)_33px)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-152deg,transparent_0_32px,rgba(10,14,39,0.035)_32px,rgba(10,14,39,0.035)_33px)] dark:bg-[repeating-linear-gradient(-152deg,transparent_0_32px,rgba(255,255,255,0.05)_32px,rgba(255,255,255,0.05)_33px)]" />
        </div>

        <div className="relative z-[1] overflow-hidden">
          <div className="mx-auto flex h-full w-[90%] max-w-none flex-col px-4 pb-4 pt-10 md:px-10 md:pt-16 lg:px-16 lg:pb-8 lg:pt-20">
            <div className="steeps-badge">
              <BadgeGeneral badge_text={t("badge")} />
            </div>
            <div className="w-full text-center">
              <div className="steeps-head">
                <TitleSection
                  as="h2"
                  line1={t("title.line1")}
                  line2={t("title.line2")}
                  inlineLine2
                  className="font-bold leading-[1.1] text-[#0A0E27] dark:text-[#0A0E27]"
                  line2ClassName="font-bold text-[#2F62B8] dark:text-[#4688D4]"
                />
              </div>

              <p className="steeps-head mx-auto mt-5 max-w-[980px] text-sm text-[color:var(--section-muted-light)] md:text-base dark:text-[#4D5C74]">
                {t("description")}
              </p>
            </div>

            <div className="steeps-grid relative mt-14">
              <div
                ref={lineRef}
                className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-8 hidden h-[8px] rounded-full border border-slate-200/90 bg-[repeating-linear-gradient(115deg,rgba(47,98,184,0.12)_0_3px,rgba(226,232,240,0.9)_3px_8px)] md:block"
              />
              <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                {steps.map((step) => {
                  const Icon = step.icon
                  return (
                    <article key={step.titleKey} className="steeps-card text-center">
                      <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#2F62B8] bg-[#2F62B8] text-white dark:border-[#4688D4] dark:bg-[#4688D4]">
                        <Icon className="h-7 w-7" strokeWidth={2.5} />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-[#0A0E27] dark:text-[#0A0E27]">
                        {t(step.titleKey)}
                      </h3>
                      <p className="mx-auto mt-3 max-w-[30ch] text-sm leading-relaxed text-[color:var(--section-muted-light)] dark:text-[#4D5C74]">
                        {t(step.descriptionKey)}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
            <div className="pointer-events-none absolute right-16 top-28 z-30 hidden lg:block">
              <Image
                src="/images/home/image-sello.png"
                alt="Sello Stratium Legal"
                width={140}
                height={140}
                className="steeps-seal h-[180px] w-[180px] object-contain opacity-90 drop-shadow-[0_18px_40px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
