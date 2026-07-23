'use client';

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroBackgroundCrossfade from "./HeroBackgroundCrossfade";
import SectionLayout from "./SectionLayout";
import BadgeGeneral from "@/presentation/atoms/common/badge/BadgeGeneral";
import ButtonBorder from "../../common/buttons/ButtonBorder";
import ButtonRedirect from "../../common/buttons/ButtonRedirect";
import HeroDofTicker from "./HeroDofTicker";
import HeroStatItem from "./HeroStatItem";
import TitleSection from "@/presentation/atoms/common/title/TitleSection";
import SectionDescription from "@/presentation/atoms/common/text/SectionDescription";
import { useTranslations } from "next-intl";
import { EASE_REVEAL, PARALLAX_SCRUB, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const heroStats = [
  { value: "70%", labelKey: "withoutBooks" },
  { value: "$208k", labelKey: "maxFine" },
  { value: "24h", labelKey: "proposal" },
  { value: "100%", labelKey: "remote" },
];

const heroBackgroundSlides = [
  { src: "/images/home/hero/mexi.png", alt: "México" },
  { src: "/images/home/hero/mexico2.png", alt: "México" },
  { src: "/images/home/hero/mexico.png", alt: "México" },
  { src: "/images/home/hero/indi.png", alt: "India" },
] as const;

export default function HeroSection() {
  const t = useTranslations("Hero");

  const handleScrollToPricing = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const pricingSection = document.getElementById("services");
    if (pricingSection) {
      event.preventDefault();
      pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#services");
    }
  };

  const sectionRef = useRef<HTMLElement>(null);
  const sealRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Toda la animación de movimiento solo si el usuario NO pidió reducir movimiento.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Parallax del fondo — bidireccional por scrub (sube al bajar, baja al subir)
        gsap.to(".hero-background", {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: PARALLAX_SCRUB,
            invalidateOnRefresh: true,
          },
        });

        // 2. Glow ambiental pulsante (vida en el fondo de la tarjeta)
        gsap.to(".hero-glow", {
          opacity: 0.9,
          scale: 1.18,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // 3. Halo respirando detrás del sello
        gsap.to(".hero-seal-halo", {
          opacity: 0.85,
          scale: 1.14,
          duration: 3.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // 4. Reveal del contenido en cascada — entra al BAJAR, se revierte al SUBIR
        const reveal = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            end: "bottom 25%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        });
        reveal.from(".hero-reveal", {
          opacity: 0,
          y: 56,
          filter: "blur(8px)",
          duration: 1.1,
          ease: EASE_REVEAL,
          stagger: 0.16,
        });

        // 5. Sello flotante — movimiento dinámico ligado al scroll en ambos sentidos
        gsap.to(sealRef.current, {
          y: -130,
          rotation: 10,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: PARALLAX_SCRUB,
            invalidateOnRefresh: true,
          },
        });

        // 6. Estadísticas secuenciales — aparecen al bajar, se ocultan al subir
        gsap.fromTo(
          ".hero-stat",
          { opacity: 0, y: 56, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            stagger: 0.14,
            ease: "back.out(1.15)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: SCROLL_START,
              end: "bottom 60%",
              toggleActions: TOGGLE_ACTIONS,
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <SectionLayout
      id="hero"
      darkBackground="#0A0E27"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      lightBackground="#F4F7FC"
      lightAccent="#2F62B8"
      lightMutedText="#4D5C74"
      className="isolate flex min-h-[100dvh] flex-col"
      ref={sectionRef}
    >
      <div className="relative flex min-h-0 w-full flex-1 flex-col overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hero-background">
          <HeroBackgroundCrossfade slides={heroBackgroundSlides} />
          {/* Scrim principal: vertical en móvil (texto centrado sobre la imagen), diagonal en desktop */}
          <div
            className="absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(10,14,39,0.8)_0%,rgba(10,14,39,0.45)_30%,rgba(10,14,39,0.4)_55%,rgba(10,14,39,0.85)_100%)] lg:bg-[linear-gradient(105deg,#0A0E27_0%,#0A0E27_8%,rgba(10,14,39,0.82)_26%,rgba(10,14,39,0.35)_48%,rgba(10,14,39,0.08)_52%,rgba(10,14,39,0.25)_78%,rgba(10,14,39,0.45)_100%)]"
            aria-hidden
          />
          {/* Viñeta superior/inferior para profundidad y legibilidad */}
          <div
            className="absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgba(10,14,39,0.4)_0%,transparent_28%,transparent_72%,rgba(10,14,39,0.5)_100%)]"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-none flex-1 flex-col px-4 pb-4 pt-16 md:px-10 md:pt-16 lg:mx-0 lg:w-full lg:px-0 lg:pb-8 lg:pt-20">
          <div className="flex min-h-0 w-full flex-1 flex-col gap-8 overflow-hidden lg:min-h-0 lg:flex-row lg:items-stretch lg:gap-0 lg:overflow-visible">

            {/* LADO IZQUIERDO */}
            <div className="relative z-10 flex min-h-0 w-full flex-col justify-center overflow-hidden rounded-2xl lg:ring-1 lg:ring-white/10 lg:backdrop-blur-[2px]">
              {/* Glow ambiental animado */}
              <div
                className="hero-glow pointer-events-none absolute -left-10 top-1/3 z-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(70,136,212,0.45),transparent_70%)] opacity-60 blur-2xl"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4688D4]/14 via-transparent to-transparent" />

              <div className="relative z-10 flex min-h-0 w-full flex-col justify-center space-y-0 p-6 text-center sm:p-8 lg:h-full lg:items-start lg:justify-center lg:text-left lg:p-8 lg:pl-6 lg:pr-8 xl:pl-10 xl:pr-10 xl:py-12 2xl:pl-14 2xl:pr-12">
                <div className="mx-auto flex w-full max-w-xl flex-col space-y-5 lg:mx-0 lg:max-w-[min(36rem,calc(50vw-4rem))]">
                  <div className="hero-reveal flex justify-center lg:justify-start">
                    <BadgeGeneral badge_text={t("badge")} />
                  </div>

                  <div className="space-y-2">
                    <TitleSection
                      as="h1"
                      line1={t("title.line1")}
                      line2={t("title.line2")}
                      className="font-bold leading-[1.1] text-[#0A0E27] dark:text-white"
                      line2ClassName="text-[color:var(--section-accent-light)] dark:text-[color:var(--section-accent-dark)]"
                    />
                    {/* Acento bajo el título */}
                    <span
                      className="mx-auto block h-1 w-20 rounded-full bg-gradient-to-r from-[#4688D4] to-transparent lg:mx-0"
                      aria-hidden
                    />
                  </div>

                  <div className="hero-reveal">
                    <SectionDescription
                      text={t("description.before")}
                      highlightText={t("description.highlight")}
                      suffixText={t("description.after")}
                      className="mx-auto max-w-xl text-base leading-relaxed text-[color:var(--section-muted-light)] dark:text-white/80 md:text-lg lg:mx-0"
                      highlightClassName="font-bold text-[color:var(--section-accent-light)] dark:text-[color:var(--section-accent-dark)]"
                    />
                  </div>

                  <div className="hero-reveal flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                    <ButtonBorder text={t("buttons.protect")} href="#services" onClick={handleScrollToPricing} />
                    <ButtonRedirect
                      text={t("buttons.services")}
                      href={`https://wa.me/5215638315255?text=${encodeURIComponent("Hola, quiero información sobre sus servicios.")}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* LADO DERECHO - SELLO */}
            <div className="relative flex h-[260px] w-full min-w-0 items-center justify-center sm:h-[320px] md:h-[380px] lg:h-full lg:w-[50vw] lg:max-w-[50vw] lg:shrink-0 lg:min-h-0">
              <div
                className="pointer-events-none relative z-30 lg:absolute lg:right-16 lg:top-28"
                ref={sealRef}
              >
                {/* Halo respirando detrás del sello */}
                <div
                  className="hero-seal-halo pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(70,136,212,0.5),transparent_65%)] opacity-50 blur-2xl"
                  aria-hidden
                />
                <Image
                  src="/images/home/image-sello.png"
                  alt="Sello Stratium Legal"
                  width={190}
                  height={190}
                  className="h-44 w-44 object-contain opacity-90 drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] sm:h-52 sm:w-52 lg:h-[290px] lg:w-[290px] xl:h-[330px] xl:w-[330px] lg:drop-shadow-[0_26px_56px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ESTADÍSTICAS */}
          <div
            className="mt-3 grid grid-cols-1 gap-4 px-4 py-3 sm:grid-cols-2 sm:px-6 lg:mt-auto lg:grid-cols-4 lg:gap-5 lg:px-8 lg:py-4 xl:px-12"
            ref={statsRef}
          >
            {heroStats.map((stat) => (
              <HeroStatItem
                key={stat.value}
                value={stat.value}
                label={t(`stats.${stat.labelKey}`)}
                className="hero-stat"
              />
            ))}
          </div>

          <HeroDofTicker />
        </div>
      </div>
    </SectionLayout>
  );
}
