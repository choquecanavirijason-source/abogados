import Image from "next/image"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import ButtonBorder from "../../common/buttons/ButtonBorder"
import ButtonRedirect from "../../common/buttons/ButtonRedirect"
import AccentGlassCard from "../../common/cards/AccentGlassCard"
import SectionDescription from "../../common/text/SectionDescription"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"

export default function ProcessSection() {
  const t = useTranslations("Process")

  return (
    <SectionLayout
    id="process-section"
    darkBackground="#01040E"
    darkAccent="#4688D4"
    darkMutedText="#B0BAC6"
    lightBackground="#F4F7FC"
    lightAccent="#2F62B8"
    lightMutedText="#4D5C74"
    className="isolate min-h-screen lg:h-[90dvh] lg:min-h-[90dvh] lg:max-h-[90dvh]"
  >
    <div className="relative h-full overflow-visible lg:overflow-hidden">


      <div className="mx-auto flex w-[90%] max-w-none flex-col px-4 pb-4 pt-14 md:px-10 md:pt-16 lg:h-full lg:px-16 lg:pb-8 lg:pt-20">
      
      {/* Contenedor Principal: Crece para ocupar el espacio central */}
      <div className="grid min-h-0 flex-1 items-start gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-8 lg:overflow-hidden">
        
        {/* Lado Izquierdo: Textos */}
        <div className="z-10 flex min-h-[320px] w-full items-center justify-center lg:min-h-0">
        <BadgeGeneral
                badge_text={t("badge")}
              />
        <div className="relative h-[300px] w-full max-w-none sm:h-[360px] md:h-[420px] lg:h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[78%] w-[78%] max-h-[560px] max-w-[760px] transition-transform duration-700 hover:scale-[1.03] md:h-[86%] md:w-[86%] lg:h-[94%] lg:w-[94%]">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(1,169,255,0.3),transparent_70%)]" />
                <Image
                  src="/images/home/hero/lawyer-background.png"
                  alt={t("imageAlt")}
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Visual del Mazo (Ocupa el alto disponible) */}
        <div className="relative ml-auto flex h-full w-full items-center justify-center lg:justify-end">
          <article className="h-full w-full max-w-[36rem]">
            <AccentGlassCard
              className="text-center lg:text-right"
              contentClassName="flex h-full flex-col items-center justify-center gap-5 text-center sm:gap-6"
            >
              <div className="space-y-2">
                <TitleSection
                  as="h1"
                  line1={t("title.line1")}
                  line2={t("title.line2")}
                  className="font-bold leading-[1.1] text-[#E35377] dark:text-[#E35377]"
                  line2ClassName="font-semibold text-[#C04066] dark:text-[#D05A79]"
                />
              </div>

              <SectionDescription
                text={t("description")}
                className="text-base font-semibold leading-relaxed text-[#D8E1F3]/90"
              />
              <p className="max-w-xl text-sm text-[#B9C8E6]/85">
                {t("source")}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <ButtonBorder
                  text={t("buttons.protect")}
                  href="/register"
                />

               <ButtonRedirect
                text={t("buttons.services")}
                href="/register"
               />
              </div>
            </AccentGlassCard>
          </article>
        </div>
      </div>

 

      </div>
    </div>
  </SectionLayout>
  )
}
