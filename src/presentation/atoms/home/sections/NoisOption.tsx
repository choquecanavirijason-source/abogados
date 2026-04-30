import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { Scale } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image";

const legalNoteKeys = ["notes.0", "notes.1", "notes.2", "notes.3", "notes.4", "notes.5"] as const

export default function NoisOption() {
  const t = useTranslations("NoisOption")

  return (
    <SectionLayout
      id="nois-option"
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="overflow-visible py-0"
    >
      <div className="flex flex-col">
        <div className="relative overflow-hidden bg-[linear-gradient(180deg,#0A0E27_0%,#101A3F_52%,#162A57_100%)] pb-28 pt-12 text-white md:pt-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(70,136,212,0.26),transparent_45%)]" />
          <div className="mx-auto flex w-[94%] max-w-[1120px] flex-col items-center text-center">
            <BadgeGeneral badge_text={t("badge")} />
            <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="mx-auto max-w-[900px] font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#4688D4]"
          />
        
          
          </div>
        </div>
        <div className="pointer-events-none absolute right-0 top-8 z-30 hidden lg:block">
              <Image
                src="/images/home/image-sello.png"
                alt="Sello Stratium Legal"
                width={190}
                height={190}
                className="h-[180px] w-[180px] object-contain opacity-90 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>

        <div className="relative bg-[#0A0E27] pb-14 pt-24 md:pb-16">
          <div className="mx-auto -mt-40 w-[92%] max-w-[920px] rounded-2xl border border-white/10 bg-[#06090C] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] transition-all duration-300 hover:border-[#4688D4]/35 hover:shadow-[0_24px_65px_rgba(1,169,255,0.18)] md:p-6">
            <div className="grid gap-y-2">
              {legalNoteKeys.map((item) => (
                <div
                  key={item}
                  className="group flex w-full items-start gap-3.5 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3 text-[15px] text-[#D6E0DD] transition-all duration-300 hover:border-[#4688D4]/35 hover:bg-[#0E1C3E]/70 hover:shadow-[0_10px_24px_rgba(70,136,212,0.16)] md:px-5 md:py-3.5 md:text-base"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-[#4688D4] text-[#0A0E27] transition-transform duration-300 group-hover:scale-110">
                    <Scale className="h-4 w-4" strokeWidth={2.4} />
                  </span>
                  <span>{t(item)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 grid w-[92%] max-w-[920px] gap-6 text-[#D1E0D9] md:grid-cols-[1fr_1.4fr] md:items-start">
            <p className="text-4xl font-medium text-white">{t("footer.title")}</p>
           
            <p className="text-sm leading-relaxed text-[#FFFFFF] md:text-base">
              {t("footer.description")}
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
