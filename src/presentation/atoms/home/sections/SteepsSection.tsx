import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { ClipboardList, FileCheck, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export default function SteepsSection() {
  const t = useTranslations("Steeps")
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
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      lightBackground="#F4F7FC"
      lightAccent="#2F62B8"
      lightMutedText="#4D5C74"
      className="py-20 md:py-24"
    >
         <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(1,169,255,0.2),transparent_50%)]" />
      <div className="relative overflow-hidden">
    
        <div className="pointer-events-none absolute inset-0" />
        <div className="mx-auto flex h-full w-[90%] max-w-none flex-col px-4 pb-4 pt-10 md:px-10 md:pt-16 lg:px-16 lg:pb-8 lg:pt-20">
        <BadgeGeneral badge_text={t("badge")} />
          <div className="w-full text-center">
         

          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#4688D4]"
          />

            
            <p className="mx-auto mt-5 max-w-[980px] text-sm text-[#B9C6DD] md:text-base">
            {t("description")}
            </p>

           
          </div>

          <div className="relative mt-14">
            
            <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-8 hidden h-[8px] rounded-full border border-[#6FA8FF]/25 bg-[repeating-linear-gradient(115deg,rgba(143,193,255,0.36)_0_3px,rgba(28,50,93,0.08)_3px_8px)] md:block" />
            <div className="relative z-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <article key={step.titleKey} className="text-center">
                    <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#2F7FFF] bg-[#2F7FFF] text-white">
                      <Icon className="h-7 w-7" strokeWidth={2.5} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{t(step.titleKey)}</h3>
                    <p className="mx-auto mt-3 max-w-[30ch] text-sm leading-relaxed text-[#B5C2DA]">
                      {t(step.descriptionKey)}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
          <div className="pointer-events-none  right-16 top-28 z-30 hidden lg:block">
              <Image
                src="/images/home/image-sello.png"
                alt="Sello Stratium Legal"
                width={140}
                height={140}
                className="h-[180px] w-[180px] object-contain opacity-90 drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
                priority
              />
            </div>
        </div>
      </div>
    </SectionLayout>
  )
}
