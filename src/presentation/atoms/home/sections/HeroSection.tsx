import Image from "next/image"
import SectionLayout from "./SectionLayout"
import BadgeGeneral from "@/presentation/atoms/common/badge/BadgeGeneral"
import ButtonBorder from "../../common/buttons/ButtonBorder"
import ButtonRedirect from "../../common/buttons/ButtonRedirect"
import HeroStatItem from "./HeroStatItem"
import TitleSection from "@/presentation/atoms/common/title/TitleSection"
import SectionDescription from "@/presentation/atoms/common/text/SectionDescription"
import { useTranslations } from "next-intl"

const heroStats = [
  { value: "70%", labelKey: "withoutBooks" },
  { value: "$208k", labelKey: "maxFine" },
  { value: "24h", labelKey: "proposal" },
  { value: "100%", labelKey: "remote" },
]

export default function HeroSection() {
  const t = useTranslations("Hero")

  return (
    <SectionLayout
      id="hero"
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      lightBackground="#F4F7FC"
      lightAccent="#2F62B8"
      lightMutedText="#4D5C74"
      className="isolate min-h-screen lg:h-[90dvh] lg:min-h-[90dvh] lg:max-h-[90dvh]"
    >
      <div className="relative h-full overflow-hidden">
        {/* Glow de fondo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(1,169,255,0.2),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-44 bg-gradient-to-r from-[#0A0E27] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#0A0E27] to-transparent" />

        <div className="mx-auto flex h-full w-[90%] max-w-none flex-col px-4 pb-4 pt-16 md:px-10 md:pt-16 lg:px-16 lg:pb-8 lg:pt-20">
        
        {/* Contenedor Principal: Crece para ocupar el espacio central */}
        <div className="grid min-h-0 flex-1 items-center gap-8 overflow-hidden lg:grid-cols-[1fr_1fr] lg:gap-12">
          
          {/* Lado Izquierdo: Textos */}
          <div className="z-10 flex h-full flex-col justify-center space-y-5 text-center lg:items-start lg:text-left">
            <BadgeGeneral badge_text={t("badge")} />
            <div className="space-y-2">
              <TitleSection
                as="h1"
                line1={t("title.line1")}
                line2={t("title.line2")}
                className="font-bold leading-[1.1] text-[#0A0E27] dark:text-white"
                line2ClassName="text-[color:var(--section-accent-light)] dark:text-[color:var(--section-accent-dark)]"
              />
            </div>

            <SectionDescription
              text={t("description.before")}
              highlightText={t("description.highlight")}
              suffixText={t("description.after")}
              className="mx-auto max-w-xl text-base leading-relaxed text-[color:var(--section-muted-light)] dark:text-white/80 md:text-lg lg:mx-0"
              highlightClassName="font-bold text-[color:var(--section-accent-light)] dark:text-white"
            />

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
             
              <ButtonBorder
                text={t("buttons.protect")}
                href="/register"
              >
              </ButtonBorder>
             
             <ButtonRedirect
              text={t("buttons.services")}
              href="/register"
             />
            </div>
          </div>

          {/* Lado Derecho: Visual del Mazo (Ocupa el alto disponible) */}
          <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[320px] md:h-[380px] lg:h-full lg:min-h-0">
            <div className="pointer-events-none absolute right-2 top-2 z-30 sm:right-4 sm:top-4 lg:right-16 lg:top-28">
              <Image
                src="/images/home/image-sello.png"
                alt="Sello Stratium Legal"
                width={190}
                height={190}
                className="h-16 w-16 object-contain opacity-90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] sm:h-20 sm:w-20 lg:h-[290px] lg:w-[290px] xl:h-[330px] xl:w-[330px] lg:drop-shadow-[0_26px_56px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
            
            {/* Tarjetas Flotantes - Ajustadas para no salirse */}
            <div className="absolute left-0 top-[10%] z-20 rounded-xl border border-white/10 bg-[#0A1327]/60 px-3 py-2.5 backdrop-blur-xl md:left-3 md:px-4 md:py-4">
              <p className="text-2xl font-bold text-white md:text-3xl">24h</p>
              <p className="text-[9px] uppercase tracking-tighter text-white/60 md:text-[10px]">{t("floatingCards.proposalReady")}</p>
            </div>

            <div className="absolute bottom-[8%] right-0 z-20 rounded-xl border border-white/10 bg-[#0A1327]/60 px-3 py-2.5 text-right backdrop-blur-xl md:right-3 md:px-4 md:py-4">
              <p className="text-2xl font-bold text-white md:text-3xl">100%</p>
              <p className="text-[9px] uppercase tracking-tighter text-white/60 md:text-[10px]">{t("floatingCards.digitalRemote")}</p>
            </div>

            {/* Contenedor de Imagen responsivo al alto (vh) */}
            <div className="relative h-full w-full max-w-[760px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[102%] w-[102%] max-h-[860px] max-w-[860px] transition-transform duration-700 hover:scale-[1.03] md:h-[118%] md:w-[118%] lg:h-[132%] lg:w-[132%]">
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(1,169,255,0.3),transparent_50%)]" />
                  <Image
                    src="/images/home/hero/image-maso.png"
                    alt="Mazo Legal"
                    fill
                    className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer de la sección: Estadísticas (Siempre abajo) */}
        <div className="mt-3 grid grid-cols-1 gap-4 py-3 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:gap-5 lg:py-4">
          {heroStats.map((stat, index) => (
            <HeroStatItem
              key={stat.value}
              value={stat.value}
              label={t(`stats.${stat.labelKey}`)}
              className={
                index === 0
                  ? "lg:translate-y-0"
                  : index === 1
                    ? "lg:-translate-y-3"
                    : index === 2
                      ? "lg:translate-y-2"
                      : "lg:-translate-y-1"
              }
            />
          ))}
        </div>

        </div>
      </div>
    </SectionLayout>
  )
}