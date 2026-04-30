import { ArrowRight } from "lucide-react"

interface ButtonRedirectProps {
  text?: string
  href?: string
}

export default function ButtonRedirect({ 
  text = 'Iniciar sesión',
  href,
 }: ButtonRedirectProps) {
  const whatsappFallback = `https://wa.me/?text=${encodeURIComponent("Hola, quiero informacion sobre sus servicios.")}`
  const hrefLooksLikeWhatsapp = typeof href === "string" && /wa\.me|whatsapp\.com/i.test(href)
  const finalHref = hrefLooksLikeWhatsapp ? href : whatsappFallback

  return (
    <div className="font-euclid font-regular bg-linear-to-r from-[#0A0E27] to-[#4688D4] text-white transition-all duration-300 rounded-xl hover:-translate-y-0.5">
      <a
        href={finalHref}
        target="_blank"
        rel="noreferrer"
        className="group flex justify-between items-center gap-2 p-1.5 cursor-pointer"
      >
        <span className="font-regular">{text.toUpperCase()}</span>

        <div className="bg-white h-8 w-8 flex items-center justify-center text-black rounded-lg transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:scale-105">
          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:rotate-90" />
        </div>
      </a>
    </div>
  )
}