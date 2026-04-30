import Image from "next/image"
import { CircleCheck, Send } from "lucide-react"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"

const benefitKeys = ["benefits.0", "benefits.1", "benefits.2", "benefits.3"] as const

export default function ConsultationSection() {
  const t = useTranslations("Consultation")

  return (
    <SectionLayout
      id="consultation"
      darkBackground="#050D24"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="min-h-screen py-16 md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
      <div className="mt-10 w-full space-y-4 py-4">
          <BadgeGeneral badge_text={t("badge")} />
          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="w-full font-bold leading-[1.1] text-white"
            line2ClassName="font-semibold text-[#4688D4]"
          />
        </div>
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="h-full">
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/12 bg-[#0A1630]/85 p-2 backdrop-blur-md md:min-h-[460px]">
              <Image
                src="/images/home/hero/stratium.png"
                alt="Stratium legal team"
                width={900}
                height={900}
                className="h-full w-full rounded-xl object-cover"
                priority
              />
            </div>
          </div>

          <article className="h-full rounded-2xl border border-[#9DB7E5]/30 bg-[#0A1630]/88 p-5 shadow-[0_0_35px_rgba(1,169,255,0.12)] backdrop-blur-md md:p-6">
            <p className="text-sm font-semibold text-white">{t("form.title")}</p>
            <div className="mt-4 space-y-3">
              <input type="text" placeholder={t("form.fields.name")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <input type="email" placeholder={t("form.fields.email")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <input type="tel" placeholder={t("form.fields.phone")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <select defaultValue="" className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white/80 outline-none transition focus:border-[#4688D4]/70">
                <option value="" disabled>
                  {t("form.fields.need")}
                </option>
                <option value="constitution">{t("form.options.constitution")}</option>
                <option value="books">{t("form.options.books")}</option>
                <option value="regularization">{t("form.options.regularization")}</option>
                <option value="advisory">{t("form.options.advisory")}</option>
              </select>
              <textarea placeholder={t("form.fields.message")} rows={4} className="w-full resize-none rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />

              <button type="button" className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#DDE9FF] bg-[#DDE9FF] px-4 py-2.5 text-sm font-semibold text-[#061125] transition hover:bg-white">
                <Send className="h-4 w-4" />
                {t("form.button")}
              </button>
              <p className="text-center text-xs text-[#7E95BB]">{t("form.helper")}</p>
            </div>
          </article>
        </div>

        <div className="mt-10 w-full space-y-4">

          <ul className="grid gap-2.5 md:grid-cols-2">
            {benefitKeys.map((key) => (
              <li key={key} className="flex items-start gap-2.5 text-sm text-[#D6E3F7]">
                <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#57D3AD]" />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionLayout>
  )
}
