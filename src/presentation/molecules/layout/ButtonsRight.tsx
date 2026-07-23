"use client"

import ButtonBorder from "@/presentation/atoms/common/buttons/ButtonBorder"
import SwitchLanguage from "@/presentation/atoms/layout/switch/switch-language"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface ButtonsRightProps {
  className?: string
  showLanguage?: boolean
}

export default function ButtonsRight({ className, showLanguage = true }: ButtonsRightProps) {
  const t = useTranslations("Header.buttons")

  const handleScrollToConsultation = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const consultationSection = document.getElementById("consultation")
    if (consultationSection) {
      event.preventDefault()
      consultationSection.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", "#consultation")
    }
  }

  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      {showLanguage && <SwitchLanguage />}
      <ButtonBorder text={t("freeConsultation")} href="/#consultation" onClick={handleScrollToConsultation} />
    </div>
  )
}
