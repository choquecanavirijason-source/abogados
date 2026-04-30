import { Check } from "lucide-react"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"

const planIds = ["starter", "regularization", "maintenance"] as const

export default function PricingGridSection() {
  const t = useTranslations("PricingGrid")

  return (
    <SectionLayout
      id="pricing"
      darkBackground="#050D24"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="min-h-screen py-16 md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <BadgeGeneral badge_text={t("badge")} />
          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#DDE6F7]"
          />
          <p className="mt-4 max-w-3xl text-sm text-[#B8C3D8] md:text-base">{t("description")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {planIds.map((id) => {
            const isPopular = id === "regularization"

            return (
              <article
                key={id}
                className={`relative h-full cursor-pointer overflow-hidden rounded-2xl border border-t-2 border-white/15 border-t-white/25 bg-[#0B1A35]/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-[#74B4FF]/70 hover:border-t-[#74B4FF] hover:bg-[#0E2345]/85 hover:shadow-[0_0_35px_rgba(70,136,212,0.2)] ${
                  isPopular ? "shadow-[0_0_35px_rgba(135,176,255,0.2)]" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(1,169,255,0.14),transparent_40%),radial-gradient(circle_at_12%_88%,rgba(1,169,255,0.10),transparent_44%)]" />

                <div className="relative z-10">
                  <span
                    className={`inline-flex rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      isPopular
                        ? "border-[#7AA8EA]/50 bg-[#1D3763] text-[#DDE9FF]"
                        : "border-white/15 bg-white/[0.04] text-[#9EB1CF]"
                    }`}
                  >
                    {t(`plans.${id}.badge`)}
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold text-white">{t(`plans.${id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A9B9D4]">{t(`plans.${id}.description`)}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <p className="text-5xl font-semibold text-white">{t(`plans.${id}.price`)}</p>
                    <span className="pb-2 text-sm text-[#8EA3C9]">{t(`plans.${id}.priceSuffix`)}</span>
                  </div>
                  <p className="mt-1 text-xs text-[#6E86AF]">{t(`plans.${id}.priceNote`)}</p>

                  <div className="mt-4 h-px w-full bg-white/10" />

                  <ul className="mt-4 space-y-2.5">
                    {[0, 1, 2, 3, 4].map((idx) => (
                      <li key={`${id}-feature-${idx}`} className="flex items-start gap-2.5 text-sm text-[#D2DEF5]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#80AFFF]" />
                        <span>{t(`plans.${id}.features.${idx}`)}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={`mt-6 w-full cursor-pointer rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      isPopular
                        ? "border-[#DDE9FF] bg-[#DDE9FF] text-[#07142C] hover:bg-white"
                        : "border-white/15 bg-white/[0.03] text-[#DCE8FF] hover:border-[#7BA8EB]/60 hover:bg-[#102246]"
                    }`}
                  >
                    {t("button")}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </SectionLayout>
  )
}
