"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import SectionLayout from "./SectionLayout"
import TitleSection from "../../common/title/TitleSection"
import SectionDescription from "../../common/text/SectionDescription"
import AccentGlassCard from "../../common/cards/AccentGlassCard"

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
  const total = pricingPlans.length

  useEffect(() => {
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

  const pageCount = useMemo(() => total, [total])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + total) % total)
  }

  const getRelativeOffset = (index: number) => {
    let diff = index - current
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
  }

  return (
    <SectionLayout
      id="services"
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="min-h-screen py-16 md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
       
        <div className="mx-auto mt-2 flex max-w-3xl flex-col items-center text-center">
         
  <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#4688D4]"
          />


          <SectionDescription
            text={t("description")}
            className="mx-auto text-[color:var(--section-muted-dark)]"
          />
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-end gap-2">
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

          <div className="mt-4 overflow-hidden">
            <div className="relative mx-auto h-[510px] w-full max-w-[1360px] md:h-[620px]">
              {pricingPlans.map((plan, index) => {
                const offset = getRelativeOffset(index)
                const isCenter = offset === 0
                const isVisible = visibleCards === 1 ? isCenter : Math.abs(offset) <= 1

                const xPercent = visibleCards === 1 ? 0 : offset * 62
                const scale = isCenter ? 1 : 0.88
                const opacity = isVisible ? (isCenter ? 1 : 0.35) : 0
                const zIndex = isCenter ? 30 : isVisible ? 20 : 0

                return (
                  <article
                    key={plan.id}
                    className="absolute left-1/2 top-0 w-full max-w-[36rem] px-3 transition-all duration-500 ease-out md:px-4"
                    style={{
                      transform: `translateX(calc(-50% + ${xPercent}%)) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                    aria-hidden={!isVisible}
                  >
                    <AccentGlassCard className="min-h-[475px] md:min-h-[535px]" accentClassName={plan.accent}>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#A9BBDD]/70">{t(plan.stepKey)}</p>
                      <h3 className="mt-5 text-[38px] font-semibold leading-tight text-white md:text-[42px]">{t(plan.titleKey)}</h3>
                      <div className="mt-5 h-px w-full bg-white/14" />
                      <p className="mt-6 text-lg leading-relaxed text-[#D8E1F3]/90 md:text-[19px]">{t(plan.descriptionKey)}</p>

                      <div className="mt-10 flex items-center justify-between gap-3">
                        <p className="text-[32px] font-semibold text-white">{t(plan.priceKey)}</p>
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

          <div className="mt-5 flex items-center justify-center gap-2">
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
