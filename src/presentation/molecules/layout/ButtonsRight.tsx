import ButtonRedirect from "@/presentation/atoms/common/buttons/ButtonRedirect"
import ButtonBorder from "@/presentation/atoms/common/buttons/ButtonBorder"
import SwitchLanguage from "@/presentation/atoms/layout/switch/switch-language"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface ButtonsRightProps {
  className?: string
}

export default function ButtonsRight({ className }: ButtonsRightProps) {
  const t = useTranslations("Header.buttons")

  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      <SwitchLanguage />
      <ButtonBorder text={t("freeConsultation")} href="/register" />
      <ButtonRedirect text={t("whatsappConsult")} href="/login" />
    </div>
  )
}
