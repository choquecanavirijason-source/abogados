import ComparisonSection from "@/presentation/atoms/home/sections/ComparisonSection"
import TeamSection from "@/presentation/atoms/home/sections/TeamSection"
import ConsultationSection from "@/presentation/atoms/home/sections/ConsultationSection"
import FaqSection from "@/presentation/atoms/home/sections/FaqSection"
import HeroSection from "@/presentation/atoms/home/sections/HeroSection"
import NoisOption from "@/presentation/atoms/home/sections/NoisOption"
import PricingGridSection from "../../atoms/home/sections/PricingGridSection"
import PricingSection from "@/presentation/atoms/home/sections/PricingSection"
import ProcessSection from "@/presentation/atoms/home/sections/ProcessSection"
import ServicesSection from "@/presentation/atoms/home/sections/ServicesSection"
import SteepsSection from "@/presentation/atoms/home/sections/SteepsSection"
import FloatingWhatsApp from "@/presentation/molecules/layout/FloatingWhatsApp"

export default function PageHome() {
  return (
    <main className="w-full text-white">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      
      <PricingSection />
      <SteepsSection />
      <NoisOption />
      {/*	
      <ComparisonSection />
      */}
      <TeamSection />
      <PricingGridSection />
      <FaqSection />
      <ConsultationSection />
      <FloatingWhatsApp />
    </main>
  )
}
