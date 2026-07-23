import type { MouseEvent } from "react"
import { ArrowRight } from "lucide-react"

interface ButtonRedirectProps {
  text?: string
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function ButtonRedirect({
  text = 'Iniciar sesión',
  href,
  onClick,
 }: ButtonRedirectProps) {
  const whatsappFallback = `https://wa.me/?text=${encodeURIComponent("Hola, quiero información sobre sus servicios.")}`
  const finalHref = typeof href === "string" && href.length > 0 ? href : whatsappFallback
  const isExternal = /^https?:\/\//i.test(finalHref)

  return (
    <div className="inline-flex rounded-full bg-linear-to-r from-[#0A0E27] to-[#4688D4] p-[1px] font-euclid text-white transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0">
      <a
        href={finalHref}
        onClick={onClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group flex items-center justify-between gap-3 rounded-full bg-[#0A0E27]/85 px-2 py-1 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-[#0A0E27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4688D4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
      >
        <span className="min-w-0 truncate">{text.toUpperCase()}</span>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0A0E27] transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-105">
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
        </div>
      </a>
    </div>
  )
}