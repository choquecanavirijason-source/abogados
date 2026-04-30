"use client"

import { CircleHelp, Minus, Plus } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"

const faqKeys = ["items.0", "items.1", "items.2", "items.3", "items.4", "items.5", "items.6"] as const

export default function FaqSection() {
  const t = useTranslations("Faq")
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <SectionLayout
      id="faq"
      withBorder={false}
      darkBackground="#040B21"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="min-h-screen py-16 md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-[1120px]">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <BadgeGeneral badge_text={t("badge")} />
          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="font-bold leading-[1.1] text-white"
            line2ClassName="font-semibold text-white/90"
          />
          <p className="mt-4 max-w-3xl text-sm text-[#AEBBD7] md:text-base">{t("description")}</p>
        </div>

        <div className="mx-auto mt-10 max-w-[980px] space-y-2.5">
          {faqKeys.map((key, index) => {
            const isOpen = openIndex === index
            return (
              <article
                key={key}
                className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                  isOpen ? "border-[#325E9A] bg-[#0A1630]/95" : "border-[#1A3054] bg-[#081328]/88 hover:border-[#2D5184]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left md:px-5"
                >
                  <div className="flex min-w-0 items-center gap-2.5">
                    <CircleHelp className="h-4 w-4 shrink-0 text-[#94B5E9]" />
                    <p className="text-sm font-semibold text-white md:text-[15px]">{t(`${key}.question`)}</p>
                  </div>
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[#BFD2F3]">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-white/8 px-4 pb-4 pt-3 md:px-5">
                    <p className="text-sm leading-relaxed text-[#AEBBD7]">{t(`${key}.answer`)}</p>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </SectionLayout>
  )
}
