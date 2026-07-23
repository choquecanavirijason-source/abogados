"use client"

import { useRef, useState } from "react"
import { createPortal } from "react-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { ArrowRight, Check, Loader2, Send, X } from "lucide-react"
import { useTranslations } from "next-intl"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { EASE_REVEAL, SCROLL_START } from "./scrollAnimation"
import { useNearViewport } from "@/presentation/hooks/useNearViewport"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const planIds = ["starter", "regularization", "maintenance"] as const

type SubmitStatus = "idle" | "loading" | "success" | "error"

const initialForm = { name: "", email: "", phone: "", message: "" }

export default function PricingGridSection() {
  const t = useTranslations("PricingGrid")
  const tc = useTranslations("Consultation")

  const sectionRef = useRef<HTMLElement>(null)
  const isNear = useNearViewport(sectionRef)

  const [selectedPlan, setSelectedPlan] = useState<(typeof planIds)[number] | null>(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const openModal = (id: (typeof planIds)[number]) => {
    setSelectedPlan(id)
    setStatus("idle")
    setForm(initialForm)
  }

  const closeModal = () => setSelectedPlan(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === "success" || status === "error") setStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "loading" || !selectedPlan) return

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      console.error("Falta NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en el entorno")
      setStatus("error")
      return
    }

    const planTitle = t(`plans.${selectedPlan}.title`)
    const planPrice = `${t(`plans.${selectedPlan}.price`)} ${t(`plans.${selectedPlan}.priceSuffix`)}`

    setStatus("loading")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Cotización — ${planTitle} · ${form.name}`,
          from_name: "Stratium Legal — Web",
          replyto: form.email,
          Plan: planTitle,
          Precio: planPrice,
          Nombre: form.name,
          Correo: form.email,
          Teléfono: form.phone || "—",
          Mensaje: form.message || "—",
        }),
      })

      const data = await res.json()
      if (!res.ok || !data.success) throw new Error("request_failed")

      setStatus("success")
      setForm(initialForm)
    } catch {
      setStatus("error")
    }
  }

  useGSAP(
    () => {
      if (!isNear) return
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // fromTo + immediateRender:false => las cards quedan VISIBLES por defecto.
        // Si el ScrollTrigger no llega a dispararse (posiciones obsoletas por el
        // contenido 3D/video que carga arriba), las cards igual se muestran bien.
        gsap.fromTo(
          ".pgrid-head",
          { opacity: 0, y: 44, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: EASE_REVEAL,
            stagger: 0.14,
            immediateRender: false,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: SCROLL_START,
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          }
        )

        gsap.fromTo(
          ".pgrid-card",
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.15)",
            stagger: 0.16,
            immediateRender: false,
            scrollTrigger: {
              trigger: ".pgrid-grid",
              start: SCROLL_START,
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          }
        )
      })

      // El 3D/video de las secciones de arriba cambia el alto de la página al
      // cargar. Recalculamos posiciones para que el trigger dispare donde toca.
      ScrollTrigger.refresh()
      const onLoad = () => ScrollTrigger.refresh()
      if (document.readyState !== "complete") {
        window.addEventListener("load", onLoad, { once: true })
      }
      return () => window.removeEventListener("load", onLoad)
    },
    { scope: sectionRef, dependencies: [isNear] }
  )

  return (
    <SectionLayout
      id="pricing"
      darkBackground="#494E57"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="min-h-screen py-16 md:py-20"
      ref={sectionRef}
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="pgrid-head mx-auto flex max-w-4xl flex-col items-center text-center">
          <BadgeGeneral badge_text={t("badge")} />
          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="font-bold leading-[1.1] text-white"
            line2ClassName="font-bold text-[#DDE6F7]"
          />
          <p className="mt-4 max-w-3xl text-sm text-[#B8C3D8] md:text-base">{t("description")}</p>
        </div>

        <div className="pgrid-grid mt-10 grid gap-5 md:grid-cols-3">
          {planIds.map((id) => {
            const isPopular = id === "regularization"
            const features = (t.raw(`plans.${id}.features`) as string[]) ?? []

            return (
              <article
                key={id}
                onClick={() => openModal(id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    openModal(id)
                  }
                }}
                className={`pgrid-card group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-t-2 border-white/15 border-t-white/25 bg-[#0B1A35]/60 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#74B4FF]/70 hover:border-t-[#74B4FF] hover:bg-[#0E2345]/85 hover:shadow-[0_0_35px_rgba(70,136,212,0.2)] ${
                  isPopular ? "shadow-[0_0_35px_rgba(135,176,255,0.2)]" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(1,169,255,0.14),transparent_40%),radial-gradient(circle_at_12%_88%,rgba(1,169,255,0.10),transparent_44%)]" />

                <div className="relative z-10 flex h-full flex-col">
                  <span
                    className={`inline-flex w-fit rounded-md border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                      isPopular
                        ? "border-[#7AA8EA]/50 bg-[#1D3763] text-[#DDE9FF]"
                        : "border-white/15 bg-white/[0.04] text-[#9EB1CF]"
                    }`}
                  >
                    {t(`plans.${id}.badge`)}
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold text-white">{t(`plans.${id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A9B9D4]">{t(`plans.${id}.description`)}</p>

                  <div className="mt-5 h-px w-full bg-white/10" />

                  <ul className="mt-4 flex-1 space-y-2.5">
                    {features.map((feature, idx) => (
                      <li key={`${id}-feature-${idx}`} className="flex items-start gap-2.5 text-sm text-[#D2DEF5]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#80AFFF]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => openModal(id)}
                    className={`mt-6 w-full cursor-pointer inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                      isPopular
                        ? "border-[#DDE9FF] bg-[#DDE9FF] text-[#07142C] hover:bg-white"
                        : "border-white/15 bg-white/[0.03] text-[#DCE8FF] hover:border-[#7BA8EB]/60 hover:bg-[#102246]"
                    }`}
                  >
                    {t("button")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selectedPlan && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div className="absolute inset-0 bg-[#03060F]/70 backdrop-blur-sm" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#9DB7E5]/30 bg-[#0A1630]/95 p-5 shadow-[0_0_45px_rgba(1,169,255,0.18)] backdrop-blur-md md:p-6"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label={t("modal.close")}
              className="absolute right-4 top-4 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-sm font-semibold text-white">{t("modal.title")}</p>

            <div className="mt-3 rounded-xl border border-[#7AA8EA]/30 bg-[#102246]/70 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.14em] text-[#8EA3C9]">{t("modal.selectedPlan")}</p>
              <p className="truncate text-sm font-semibold text-white">{t(`plans.${selectedPlan}.title`)}</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={tc("form.fields.name")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={tc("form.fields.email")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={tc("form.fields.phone")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder={tc("form.fields.message")} rows={3} className="w-full resize-none rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#DDE9FF] bg-[#DDE9FF] px-4 py-2.5 text-sm font-semibold text-[#061125] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {status === "loading" ? tc("form.sending") : tc("form.button")}
              </button>

              {status === "success" && (
                <p className="text-center text-xs font-medium text-[#57D3AD]">{tc("form.success")}</p>
              )}
              {status === "error" && (
                <p className="text-center text-xs font-medium text-[#F08C8C]">{tc("form.error")}</p>
              )}
              {status !== "success" && status !== "error" && (
                <p className="text-center text-xs text-[#7E95BB]">{tc("form.helper")}</p>
              )}
            </form>
          </div>
        </div>,
        document.body
      )}
    </SectionLayout>
  )
}
