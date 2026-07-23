"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

const PHONE = "5215638315255"
const DISPLAY_PHONE = "+52 1 56 3831 5255"

export default function FloatingWhatsApp() {
  const t = useTranslations("FloatingChat")
  const [open, setOpen] = useState(false)

  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t("message"))}`

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {/* Tarjeta de chat */}
      <div
        className={cn(
          "w-[min(270px,calc(100vw-2.5rem))] origin-bottom-right overflow-hidden rounded-2xl border border-white/12 bg-[#0A1630]/95 shadow-[0_20px_50px_rgba(1,12,40,0.55)] backdrop-blur-md transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        )}
      >
        <div className="flex items-center gap-3 bg-linear-to-r from-[#0A0E27] to-[#128C3E] px-4 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <FaWhatsapp className="h-5 w-5 text-white" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{t("title")}</p>
            <p className="truncate text-[11px] text-[#9FE3B8]">{t("status")}</p>
          </div>
        </div>

        <div className="space-y-3 px-4 py-4">
          <p className="rounded-xl rounded-tl-sm bg-[#081327] px-3 py-2.5 text-sm text-[#D6E3F7]">
            {t("greeting")}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#061125] transition-colors hover:bg-[#1ebe5a]"
          >
            <FaWhatsapp className="h-4 w-4" />
            {t("cta")}
          </a>
          <p className="text-center text-[11px] text-[#7E95BB]">{DISPLAY_PHONE}</p>
        </div>
      </div>

      {/* Botón flotante */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("ariaLabel")}
        aria-expanded={open}
        className="group pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E27]"
      >
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/60" />
        )}
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <FaWhatsapp className="h-7 w-7 transition-transform duration-300 group-hover:rotate-6" />
        )}
      </button>
    </div>
  )
}
