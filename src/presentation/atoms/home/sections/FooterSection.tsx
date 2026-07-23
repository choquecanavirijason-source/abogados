"use client"

import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react"
import { useTranslations } from "next-intl"
import SectionLayout from "./SectionLayout"
import { EASE_REVEAL, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type TeamMember = {
  name: string
  role: string
  bio: string
}

export default function FooterSection() {
  const t = useTranslations("FooterShowcase")
  const tTeam = useTranslations("Team")
  const members = tTeam.raw("members") as TeamMember[]

  const sectionRef = useRef<HTMLElement>(null)
  const isNear = useNearViewport(sectionRef)

  useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".footer-reveal", {
          opacity: 0,
          y: 36,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            end: "bottom 55%",
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
      id="footer-showcase"
      withBorder={false}
      darkBackground="#000000"
      darkAccent="#4688D4"
      darkMutedText="#A0ABB1"
      className="py-16 md:py-20"
      ref={sectionRef}
    >
      <div className="relative mx-auto w-[90%] max-w-[920px] text-center">
        <div className="footer-reveal mb-7 flex items-center justify-center gap-3">
          <Image src="/images/logos/logo.svg" alt="Stratium Legal" width={44} height={44} className="h-11 w-11 object-contain" />
          <div className="text-left">
            <p className="text-base font-semibold text-[#FFFFFF]">STRATIUM</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#8D989E]">LEGAL</p>
          </div>
        </div>

        <h3 className="footer-reveal text-sm font-semibold text-white">{t("team.title")}</h3>
        <ul className="footer-reveal mt-3 space-y-1 text-xs text-[#D7DEE1]">
          {members.map((member) => (
            <li key={member.name}>{member.name}</li>
          ))}
        </ul>
        <div className="pointer-events-none absolute right-0 top-8 z-30 hidden lg:block">
              <Image
                src="/images/home/image-sello.webp"
                alt="Sello Stratium Legal"
                width={190}
                height={190}
                className="h-[180px] w-[180px] object-contain opacity-90 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>

        <div className="footer-reveal mt-7 flex items-center justify-center gap-3">
          <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="WhatsApp" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <p className="footer-reveal mt-5 text-xs text-[#98A4AB]">{t("copyright")}</p>
      </div>
    </SectionLayout>
  )
}
