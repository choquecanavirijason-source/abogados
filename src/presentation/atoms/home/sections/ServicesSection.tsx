import SectionLayout from "./SectionLayout"
import { FileText, Archive, AlertTriangle } from "lucide-react"
import ServiceDifferentiatorCard from "./ServiceDifferentiatorCard"
import TitleSection from "../../common/title/TitleSection"
import SectionDescription from "../../common/text/SectionDescription"
import { useTranslations } from "next-intl"

const differentiators = [
  {
    subtitleKey: "cards.0.subtitle",
    titleKey: "cards.0.title",
    descriptionKey: "cards.0.description",
    icon: FileText,
    accentClass: "border-t-[#4688D4]",
  },
  {
    subtitleKey: "cards.1.subtitle",
    titleKey: "cards.1.title",
    descriptionKey: "cards.1.description",
    featured: true,
    icon: Archive,
    accentClass: "border-t-[#4688D4]",
  },
  {
    subtitleKey: "cards.2.subtitle",
    titleKey: "cards.2.title",
    descriptionKey: "cards.2.description",
    icon: AlertTriangle,
    accentClass: "border-t-[#4688D4]",
  },
]

export default function ServicesSection() {
  const t = useTranslations("Services")

  return (
    <SectionLayout
      id="services-section"
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="py-14 md:py-16 lg:h-[100dvh] lg:min-h-[100dvh] lg:py-10"
    >
      <div className="relative overflow-hidden lg:h-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#0A0E27] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#0A0E27] to-transparent" />

        <div className="mx-auto flex w-[90%] max-w-none flex-col px-4 py-2 md:px-10 md:py-4 lg:h-full lg:px-16 lg:py-2">
          <div className="flex flex-col lg:h-full lg:justify-center">
            <div className="mx-auto max-w-4xl text-center">
              <div className="space-y-2">
                <TitleSection
                  as="h2"
                  line1={t("title")}
                  className="text-3xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl"
                  line2ClassName="font-medium italic text-white/95"
                />
              </div>
              <SectionDescription
                text={t("description")}
                className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[color:var(--section-muted-dark)] md:mt-5 md:text-lg"
              />
            </div>

            <div className="mt-7 w-full md:mt-10">
              <div className="grid w-full gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
                {differentiators.map((item) => (
                  <ServiceDifferentiatorCard
                    key={item.titleKey}
                    subtitle={t(item.subtitleKey)}
                    title={t(item.titleKey)}
                    description={t(item.descriptionKey)}
                    icon={item.icon}
                    featured={item.featured}
                    accentClass={item.accentClass}
                  />
                ))}
              </div>
            </div>

            <blockquote className="relative mt-5 w-full overflow-hidden rounded-2xl border border-t-2 border-white/15 p-4 text-white/90 backdrop-blur-md md:mt-6 md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(1,169,255,0.14),transparent_40%),radial-gradient(circle_at_12%_88%,rgba(1,169,255,0.10),transparent_44%)]" />

              <p className="text-sm italic leading-relaxed text-white/95 md:text-xl">
                {`"${t("quote.text")}"`}
              </p>
              <footer className="mt-3 text-[11px] uppercase tracking-[0.2em] text-white/55">
                {t("quote.footer")}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
