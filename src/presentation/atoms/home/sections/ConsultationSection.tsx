"use client"

import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { CircleCheck, Loader2, Send } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import BadgeGeneral from "../../common/badge/BadgeGeneral"
import TitleSection from "../../common/title/TitleSection"
import SectionLayout from "./SectionLayout"
import { EASE_REVEAL, SCROLL_START, TOGGLE_ACTIONS } from "./scrollAnimation"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const benefitKeys = ["benefits.0", "benefits.1", "benefits.2", "benefits.3"] as const

type SubmitStatus = "idle" | "loading" | "success" | "error"

const initialForm = { name: "", email: "", phone: "", need: "", message: "" }

export default function ConsultationSection() {
  const t = useTranslations("Consultation")

  const sectionRef = useRef<HTMLElement>(null)
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status === "success" || status === "error") setStatus("idle")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === "loading") return

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      console.error("Falta NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY en el entorno")
      setStatus("error")
      return
    }

    setStatus("loading")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nueva consulta — ${form.name}`,
          from_name: "Stratium Legal — Web",
          name: form.name,
          email: form.email,
          phone: form.phone,
          need: form.need,
          message: form.message,
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
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".consult-head", {
          opacity: 0,
          y: 44,
          filter: "blur(6px)",
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.14,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: SCROLL_START,
            end: "bottom 40%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })

        gsap.from(".consult-reveal", {
          opacity: 0,
          y: 52,
          scale: 0.98,
          duration: 1,
          ease: EASE_REVEAL,
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".consult-grid",
            start: SCROLL_START,
            end: "bottom 40%",
            toggleActions: TOGGLE_ACTIONS,
            invalidateOnRefresh: true,
          },
        })
      })
    },
    { scope: sectionRef }
  )

  return (
    <SectionLayout
      id="consultation"
      darkBackground="#050D24"
      darkAccent="#4688D4"
      darkMutedText="#B0BAC6"
      className="min-h-screen py-16 md:py-20"
      ref={sectionRef}
    >
      <div className="mx-auto w-[90%] max-w-[1200px]">
        <div className="consult-head mt-10 w-full space-y-4 py-4">
          <BadgeGeneral badge_text={t("badge")} />
          <TitleSection
            as="h2"
            line1={t("title.line1")}
            line2={t("title.line2")}
            inlineLine2
            className="w-full font-bold leading-[1.1] text-white"
            line2ClassName="font-semibold text-[#4688D4]"
          />
        </div>

        <div className="consult-grid mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-10">
          <div className="consult-reveal order-2 rounded-2xl border border-white/12 bg-[#0A1630]/70 p-5 backdrop-blur-md md:p-6 lg:order-1 lg:sticky lg:top-28">
            <div className="relative mb-5 flex items-center justify-center">
              <div
                aria-hidden
                className="pointer-events-none absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(70,136,212,0.35),transparent_70%)] blur-2xl"
              />
              <Image
                src="/images/logos/logo3d.png"
                alt="Stratium Legal"
                width={220}
                height={220}
                className="relative h-36 w-36 object-contain drop-shadow-[0_18px_40px_rgba(1,169,255,0.25)] md:h-44 md:w-44"
              />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:gap-3.5">
              {benefitKeys.map((key) => (
                <li key={key} className="flex items-start gap-2.5 text-sm text-[#D6E3F7]">
                  <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#57D3AD]" />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          <article className="consult-reveal order-1 h-fit rounded-2xl border border-[#9DB7E5]/30 bg-[#0A1630]/88 p-5 shadow-[0_0_35px_rgba(1,169,255,0.12)] backdrop-blur-md md:p-6 lg:order-2">
            <p className="text-sm font-semibold text-white">{t("form.title")}</p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder={t("form.fields.name")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder={t("form.fields.email")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t("form.fields.phone")} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />
              <select name="need" value={form.need} onChange={handleChange} className="w-full rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white/80 outline-none transition focus:border-[#4688D4]/70">
                <option value="" disabled>
                  {t("form.fields.need")}
                </option>
                <option value="constitution">{t("form.options.constitution")}</option>
                <option value="books">{t("form.options.books")}</option>
                <option value="regularization">{t("form.options.regularization")}</option>
                <option value="advisory">{t("form.options.advisory")}</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder={t("form.fields.message")} rows={4} className="w-full resize-none rounded-lg border border-white/10 bg-[#081327] px-3 py-2.5 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-[#4688D4]/70" />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#DDE9FF] bg-[#DDE9FF] px-4 py-2.5 text-sm font-semibold text-[#061125] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {status === "loading" ? t("form.sending") : t("form.button")}
              </button>

              {status === "success" && (
                <p className="text-center text-xs font-medium text-[#57D3AD]">{t("form.success")}</p>
              )}
              {status === "error" && (
                <p className="text-center text-xs font-medium text-[#F08C8C]">{t("form.error")}</p>
              )}
              {status !== "success" && status !== "error" && (
                <p className="text-center text-xs text-[#7E95BB]">{t("form.helper")}</p>
              )}
            </form>
          </article>
        </div>
      </div>
    </SectionLayout>
  )
}
