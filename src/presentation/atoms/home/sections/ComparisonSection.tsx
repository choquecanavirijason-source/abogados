 "use client"

import Image from "next/image"
import { Check, X } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import AccentGlassCard from "../../common/cards/AccentGlassCard"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"

const compliantKeys = [
  "with.items.0",
  "with.items.1",
  "with.items.2",
  "with.items.3",
  "with.items.4",
  "with.items.5",
] as const

const nonCompliantKeys = [
  "without.items.0",
  "without.items.1",
  "without.items.2",
  "without.items.3",
  "without.items.4",
  "without.items.5",
] as const

export default function ComparisonSection() {
  const t = useTranslations("Comparison")
  const [mode, setMode] = useState<"with" | "without">("with")
  const isCompliant = mode === "with"
  const activeKeys = isCompliant ? compliantKeys : nonCompliantKeys

  return (
    <SectionLayout
      id="comparison"
      darkBackground="#050D24"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="isolate min-h-screen lg:h-[90dvh] lg:min-h-[90dvh] lg:max-h-[90dvh]"
    >
      <div className="relative h-full overflow-visible lg:overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(1,169,255,0.2),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#0A0E27] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#0A0E27] to-transparent" />

        <div className="mx-auto flex w-[90%] max-w-none flex-col px-4 pb-4 pt-14 md:px-10 md:pt-16 lg:h-full lg:px-16 lg:pb-8 lg:pt-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <BadgeGeneral badge_text={t("badge")} />
            <TitleSection
              as="h2"
              line1={t("title.line1")}
              line2={t("title.line2")}
              inlineLine2
              className="font-bold leading-[1.1] text-white"
              line2ClassName="font-bold text-[#4688D4]"
            />
            <p className="mt-4 max-w-3xl text-sm text-[#B8C3D8] md:text-base">{t("description")}</p>
          </div>

          <div className="mt-8 grid min-h-0 flex-1 items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-8">
            <div className="z-10 flex min-h-[320px] w-full items-center justify-center lg:min-h-0">
              <article className="w-full max-w-[42rem]">
                <AccentGlassCard
                  className="h-full"
                  accentClassName={isCompliant ? "bg-[#57D3AD]" : "bg-[#F08AA3]"}
                  contentClassName="flex h-full flex-col"
                >
                  <div className="relative mb-5 flex w-full rounded-xl border border-white/10 bg-white/5 p-1">
                    <span
                      className={`pointer-events-none absolute bottom-1 left-1 top-1 w-[calc(50%-0.25rem)] rounded-lg transition-all duration-300 ease-out ${
                        isCompliant ? "bg-[#0B3A33]/80" : "bg-[#3A153C]/80"
                      }`}
                      style={{ transform: isCompliant ? "translateX(0%)" : "translateX(100%)" }}
                    />
                    <button
                      type="button"
                      onClick={() => setMode("with")}
                      className={`relative z-10 flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isCompliant ? "text-[#6BE8C3]" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {t("with.title")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode("without")}
                      className={`relative z-10 flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        !isCompliant ? "text-[#F08AA3]" : "text-white/70 hover:text-white"
                      }`}
                    >
                      {t("without.title")}
                    </button>
                  </div>

                  <div
                    className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 ${
                      isCompliant
                        ? "border-[#18456B] bg-[#0B3A33]/70 text-[#6BE8C3]"
                        : "border-[#5E2B56] bg-[#3A153C]/70 text-[#F08AA3]"
                    }`}
                  >
                    {isCompliant ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                    <p className="text-sm font-semibold">{isCompliant ? t("with.title") : t("without.title")}</p>
                  </div>

                  <div className="mt-4 divide-y divide-white/8">
                    {activeKeys.map((item) => (
                      <div key={item} className="flex items-start gap-3 py-3 text-sm text-[#D4E0F6]">
                        {isCompliant ? (
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#57D3AD]" />
                        ) : (
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-[#F08AA3]" />
                        )}
                        <p>{t(item)}</p>
                      </div>
                    ))}
                  </div>
                </AccentGlassCard>
              </article>
            </div>

            <div className="relative flex min-h-[340px] w-full items-center justify-center lg:min-h-0">
              <div className="relative h-[320px] w-full sm:h-[360px] md:h-[420px] lg:h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[84%] w-[84%] max-h-[560px] max-w-[760px] transition-transform duration-700 hover:scale-[1.03] md:h-[90%] md:w-[90%] lg:h-[94%] lg:w-[94%]">
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(1,169,255,0.3),transparent_70%)]" />
                    <Image
                      src="/images/home/hero/image-document.png"
                      alt={isCompliant ? t("with.title") : t("without.title")}
                      fill
                      className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
