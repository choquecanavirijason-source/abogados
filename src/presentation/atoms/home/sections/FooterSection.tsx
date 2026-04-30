import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react"
import { useTranslations } from "next-intl"
import SectionLayout from "./SectionLayout"

const teamKeys = ["team.members.0", "team.members.1", "team.members.2"] as const
const consultantKeys = ["consultants.members.0", "consultants.members.1"] as const

export default function FooterSection() {
  const t = useTranslations("FooterShowcase")

  return (
    <SectionLayout
      id="footer-showcase"
      withBorder={false}
      darkBackground="#000000"
      darkAccent="#4688D4"
      darkMutedText="#A0ABB1"
      className="py-16 md:py-20"
    >
      <div className="relative mx-auto w-[90%] max-w-[920px] text-center">
        <h3 className="text-sm font-semibold text-white">{t("team.title")}</h3>
        <ul className="mt-3 space-y-1 text-xs text-[#D7DEE1]">
          {teamKeys.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
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

        <div className="mt-7 flex items-center justify-center gap-3">
          <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="WhatsApp" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] text-white transition hover:border-[#4688D4]/60 hover:text-[#4688D4]">
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-5 text-xs text-[#98A4AB]">{t("copyright")}</p>

        <div className="mt-7 flex items-center justify-center gap-3">
          <Image src="/images/logos/logo.svg" alt="Stratium Legal" width={44} height={44} className="h-11 w-11 object-contain" />
          <div className="text-left">
            <p className="text-base font-semibold text-[#FFFFFF]">STRATIUM</p>
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#8D989E]">LEGAL</p>
          </div>
        </div>

        
      </div>
    </SectionLayout>
  )
}
