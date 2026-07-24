"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { Scale } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image";
import { EASE_REVEAL, PARALLAX_SCRUB, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const legalNoteKeys = ["notes.0", "notes.1", "notes.2", "notes.3", "notes.4", "notes.5"] as const

export default function NoisOption() {
  const t = useTranslations("NoisOption")

  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const isNear = useNearViewport(sectionRef)

  useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Cabecera (badge + título) — reveal suave reversible
        gsap.from(".nois-header", {
          opacity: 0,
          y: 36,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
          },
        })

        // 2. Sello — fade + flotación ligada al scroll
        gsap.from(".nois-sello", {
          opacity: 0,
          scale: 0.85,
          rotate: -8,
          duration: 1.1,
          ease: EASE_REVEAL,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
          },
        })

        gsap.to(".nois-sello", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: PARALLAX_SCRUB,
            invalidateOnRefresh: true,
          },
        })

        // 3. Notas legales en cascada
        gsap.from(".nois-note", {
          opacity: 0,
          y: 24,
          filter: "blur(2px)",
          duration: 0.6,
          ease: EASE_REVEAL,
          stagger: 0.08,
          scrollTrigger: {
            trigger: cardRef.current,
            start: SCROLL_START,
            end: "bottom 45%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        // 4. Footer — reveal final
        gsap.from(".nois-footer", {
          opacity: 0,
          y: 32,
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".nois-footer",
            start: SCROLL_START,
            toggleActions: TOGGLE_ACTIONS,
          },
        })
      })
    },
    { scope: sectionRef, dependencies: [isNear] }
  )

  return (
    <SectionLayout
      id="nois-option"
      darkBackground="#494E57"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="overflow-visible py-0"
      ref={sectionRef}
    >
      <div className="relative isolate min-h-0 w-full overflow-visible">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 [mask-image:linear-gradient(180deg,black_42%,rgba(0,0,0,0.55)_72%,transparent_100%)]"
        >
          <div className="absolute inset-0 bg-[repeating-linear-gradient(152deg,transparent_0_32px,rgba(47,98,184,0.05)_32px,rgba(47,98,184,0.05)_33px)] dark:bg-[repeating-linear-gradient(152deg,transparent_0_32px,rgba(70,136,212,0.07)_32px,rgba(70,136,212,0.07)_33px)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-152deg,transparent_0_32px,rgba(10,14,39,0.035)_32px,rgba(10,14,39,0.035)_33px)] dark:bg-[repeating-linear-gradient(-152deg,transparent_0_32px,rgba(255,255,255,0.05)_32px,rgba(255,255,255,0.05)_33px)]" />
        </div>

        <div className="relative z-[1] flex flex-col items-center py-16 md:py-20">
          {/* Sello flotante (decorativo) */}
          <div className="nois-sello pointer-events-none absolute right-0 top-6 z-30 hidden lg:block">
            <Image
              src="/images/home/image-sello.webp"
              alt="Sello Stratium Legal"
              width={190}
              height={190}
              className="h-[180px] w-[180px] object-contain opacity-90 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              priority
            />
          </div>

          {/* Cabecera */}
          <div className="mx-auto flex w-[94%] max-w-[1120px] flex-col items-center text-center">
            <div className="nois-header">
              <BadgeGeneral badge_text={t("badge")} />
            </div>
            <TitleSection
              as="h2"
              line1={t("title.line1")}
              line2={t("title.line2")}
              inlineLine2
              className="nois-header mx-auto mt-4 max-w-[900px] font-bold leading-[1.1] text-white"
              line2ClassName="font-bold text-[#4688D4]"
            />
          </div>

          {/* Tarjeta de notas legales */}
          <div
            ref={cardRef}
            className="mx-auto mt-12 w-[92%] max-w-[920px] cursor-pointer rounded-2xl border border-white/10 bg-[#06090C] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#4688D4]/35 hover:shadow-[0_20px_30px_rgba(1,169,255,0.1)] md:p-6"
          >
            <div className="grid gap-y-2">
              {legalNoteKeys.map((item) => (
                <div
                  key={item}
                  className="nois-note group flex w-full cursor-pointer items-start gap-3.5 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-[15px] text-[#D6E0DD] transition-all duration-300 hover:border-[#4688D4]/35 hover:bg-[#0E1C3E]/70 hover:shadow-[0_10px_24px_rgba(70,136,212,0.16)] md:px-5 md:py-3.5 md:text-base"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[#4688D4] text-[#0A0E27] transition-transform duration-300 group-hover:scale-110">
                    <Scale className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <span>{t(item)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mx-auto mt-10 flex w-[92%] max-w-[920px] flex-col gap-4 text-[#D1E0D9]">
            <p className="nois-footer text-4xl font-medium text-[#4688D4]">{t("footer.title")}</p>

            <p className="nois-footer text-sm leading-relaxed text-[#FFFFFF] md:text-base">
              {t("footer.description")}
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
