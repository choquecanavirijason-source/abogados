"use client"

import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useTranslations } from "next-intl"
import { Scale, User, X } from "lucide-react"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import AccentGlassCard from "@/presentation/atoms/common/cards/AccentGlassCard"
import BadgeGeneral from "@/presentation/atoms/common/badge/BadgeGeneral"
import TitleSection from "@/presentation/atoms/common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { EASE_REVEAL, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type TeamMember = {
  name: string
  role: string
  bio: string
}

const TEAM_CARD_ACCENT = "bg-[#4688D4]"

const MEMBER_PHOTOS: Record<string, { src: string; position?: string }> = {
  "Lic. Esteban Santiago Viñas Caballero": {
    src: "/images/people/estaban.jpg",
    position: "40% center",
  },
  "Lic. Diego Solano García": { src: "/images/people/diegosolano.jpg" },
}

export default function TeamSection() {
  const t = useTranslations("Team")
  const rawMembers = t.raw("members")
  const members = (Array.isArray(rawMembers) ? rawMembers : []) as TeamMember[]

  const [mounted, setMounted] = useState(false)
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null)
  const dialogTitleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isNear = useNearViewport(sectionRef)

  useEffect(() => {
    setMounted(true)
  }, [])

  useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".team-head", {
          opacity: 0,
          y: 44,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            end: "bottom 40%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        gsap.from(".team-card", {
          opacity: 0,
          y: 60,
          scale: 0.96,
          duration: 1,
          ease: "back.out(1.15)",
          stagger: 0.16,
          scrollTrigger: {
            trigger: ".team-grid",
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

  useEffect(() => {
    if (!activeMember) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveMember(null)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeMember])

  useEffect(() => {
    if (!activeMember) return
    closeButtonRef.current?.focus()
  }, [activeMember])

  return (
    <SectionLayout
      id="team"
      darkBackground="#FFFFFF"
      darkAccent="#4688D4"
      darkMutedText="#4D5C74"
      lightBackground="#FFFFFF"
      lightAccent="#2F62B8"
      lightMutedText="#4D5C74"
      className="relative isolate overflow-hidden py-16 md:py-20"
      ref={sectionRef}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(152deg,transparent_0_32px,rgba(47,98,184,0.06)_32px,rgba(47,98,184,0.06)_33px)] dark:bg-[repeating-linear-gradient(152deg,transparent_0_32px,rgba(47,98,184,0.08)_32px,rgba(47,98,184,0.08)_33px)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-152deg,transparent_0_32px,rgba(10,14,39,0.04)_32px,rgba(10,14,39,0.04)_33px)] dark:bg-[repeating-linear-gradient(-152deg,transparent_0_32px,rgba(10,14,39,0.06)_32px,rgba(10,14,39,0.06)_33px)]" />
      </div>

      <div className="relative z-[1] mx-auto w-[90%] max-w-6xl px-4 md:px-6">
        <div className="team-head mx-auto max-w-3xl text-center">
          <BadgeGeneral badge_text={t("badge")} />
          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="mt-3 font-bold leading-[1.1] text-[#0A0E27] dark:text-[#0A0E27]"
            line2ClassName="font-bold text-[#2F62B8] dark:text-[#4688D4]"
          />
          <p className="mt-4 text-sm text-[#4D5C74] md:text-base">{t("description")}</p>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-xs text-[#5A6B82]">
            <Scale className="h-3.5 w-3.5 shrink-0 text-[#2F62B8] dark:text-[#4688D4]" />
            {t("disclaimer")}
          </p>
        </div>

        <div className="team-grid mx-auto mt-12 grid max-w-3xl grid-cols-1 justify-center gap-6 md:grid-cols-2 md:gap-7">
          {members.map((member) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setActiveMember(member)}
              aria-haspopup="dialog"
              className="team-card h-full w-full cursor-pointer rounded-2xl border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--section-accent-light)]/35 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--section-bg-light)] dark:focus-visible:ring-[color:var(--section-accent-dark)]/35 dark:focus-visible:ring-offset-[var(--section-bg-dark)]"
            >
              <AccentGlassCard
                flat
                className="h-full min-h-[320px]"
                accentClassName={TEAM_CARD_ACCENT}
                contentClassName="flex h-full flex-col items-center text-center"
              >
                <div
                  className="-mx-6 -mt-6 mb-5 self-stretch overflow-hidden md:-mx-8 md:-mt-8"
                  style={{ aspectRatio: "3/4" }}
                  aria-hidden
                >
                  {MEMBER_PHOTOS[member.name] ? (
                    <Image
                      src={MEMBER_PHOTOS[member.name].src}
                      alt={member.name}
                      width={400}
                      height={533}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: MEMBER_PHOTOS[member.name].position ?? "center" }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#2D3A4F]">
                      <User className="h-20 w-20 text-[#8FA4C4]" strokeWidth={1.25} />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">{member.name}</h3>
                <p className="mt-2 text-sm font-medium text-[#8AB2EA]">{member.role}</p>
                <p className="mt-4 flex-1 overflow-hidden text-sm leading-relaxed text-[#B4C3DE] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
                  {member.bio}
                </p>
              </AccentGlassCard>
            </button>
          ))}
        </div>
      </div>

      {mounted && activeMember
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-end justify-center px-4 pb-6 pt-10 sm:items-center"
              onClick={() => setActiveMember(null)}
              role="presentation"
            >
              <div aria-hidden className="absolute inset-0 bg-[#0A0E27]/60" />

              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={dialogTitleId}
                className="relative z-[1] w-full max-w-3xl max-h-[90vh] md:max-w-5xl lg:max-w-6xl"
                onClick={(event) => event.stopPropagation()}
              >
                <Button
                  ref={closeButtonRef}
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => setActiveMember(null)}
                  aria-label={t("modal.close")}
                  className="absolute right-3 top-3 z-[2] cursor-pointer bg-[#0A0E27]/40 text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white"
                >
                  <X aria-hidden className="h-4 w-4" />
                </Button>

                <AccentGlassCard
                  flat
                  className="w-full overflow-hidden"
                  accentClassName={TEAM_CARD_ACCENT}
                  contentClassName="flex flex-col text-center md:h-[65vh] md:flex-row md:gap-8 md:text-left"
                >
                  {/* Imagen — arriba en mobile, a la izquierda (fija, sin scroll) en desktop.
                      Alto fijo (md:h-[65vh] en el padre) para que mida SIEMPRE igual, sin
                      importar cuánto texto tenga cada integrante. */}
                  <div
                    className="relative -mx-6 -mt-6 mb-6 aspect-3/4 overflow-hidden md:mx-0 md:aspect-auto md:h-[calc(100%+4rem)] md:w-1/2 md:shrink-0 md:-ml-8 md:-mt-8 md:-mb-8"
                    aria-hidden
                  >
                    {MEMBER_PHOTOS[activeMember.name] ? (
                      <Image
                        src={MEMBER_PHOTOS[activeMember.name].src}
                        alt={activeMember.name}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                        style={{ objectPosition: MEMBER_PHOTOS[activeMember.name].position ?? "center" }}
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[#2D3A4F]">
                        <User className="h-24 w-24 text-[#8FA4C4]" strokeWidth={1.25} />
                      </div>
                    )}
                  </div>

                  {/* Información — a la derecha, mismo alto fijo que la imagen; si el
                      texto no cabe, scrollea dentro de su propio espacio (sin achicar la foto). */}
                  <div className="max-h-[40vh] overflow-y-auto pr-1 md:flex md:h-full md:max-h-none md:flex-1 md:flex-col md:justify-center md:overflow-y-auto md:pr-2 md:[scrollbar-width:thin]">
                    <div>
                      <h3 id={dialogTitleId} className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                        {activeMember.name}
                      </h3>
                      <p className="mt-2 text-base font-medium text-[#8AB2EA] md:text-lg">{activeMember.role}</p>
                      <p className="mt-5 text-base leading-relaxed text-[#B4C3DE] md:text-lg">{activeMember.bio}</p>
                    </div>
                  </div>
                </AccentGlassCard>
              </div>
            </div>,
            document.body
          )
        : null}
    </SectionLayout>
  )
}
