"use client"

import { cn } from "@/lib/utils"
import { ExternalLink, FileText } from "lucide-react"
import { useTranslations } from "next-intl"
import { useEffect, useMemo, useState } from "react"

type HeroDofTickerItem = {
  href: string
  title: string
  editionLabel: string
  editionId: "vespertina" | "matutina"
  sectionTitle: string
}

type ApiResponse = {
  editionDate: string
  items: HeroDofTickerItem[]
}

function SkeletonRow() {
  return (
    <div className="flex w-max items-center gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-[#4688D4]/20 bg-[#0A0E27]/70 px-2.5 py-0 animate-pulse"
        >
          <div className="h-5 w-5 rounded bg-white/10" />
          <div className="h-2.5 w-32 rounded bg-white/10" />
          <div className="h-3 w-3 rounded bg-white/10" />
        </div>
      ))}
    </div>
  )
}

function TickerCard({ item }: { item: HeroDofTickerItem }) {
  const isVespertina = item.editionId === "vespertina"
  const tip = `${item.editionLabel} · ${item.sectionTitle}`
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      title={tip}
      className={cn(
        "group flex h-8 max-w-[min(85vw,380px)] shrink-0 items-center gap-2 rounded-lg border bg-[#0A0E27]/90 px-2 py-0.5 shadow-sm transition hover:border-[#74B4FF] hover:bg-[#0D1530]",
        isVespertina ? "border-[#4688D4]/40" : "border-sky-500/35"
      )}
    >
      <span
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded border text-[9px] font-bold text-white",
          isVespertina ? "border-[#4688D4]/45 bg-[#4688D4]/25" : "border-sky-400/35 bg-sky-500/20"
        )}
      >
        {isVespertina ? "V" : "M"}
      </span>
      <span className="min-w-0 truncate text-left text-[11px] font-medium leading-none text-white">
        {item.title}
      </span>
      <ExternalLink className="h-3 w-3 shrink-0 text-white/40 transition group-hover:text-[#8AB2EA]" />
    </a>
  )
}

export default function HeroDofTicker() {
  const t = useTranslations("Hero.dofTicker")
  const [payload, setPayload] = useState<ApiResponse | null>(null)
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    let cancelled = false
    fetch("/api/dof/hero")
      .then((res) => {
        if (!res.ok) throw new Error("bad status")
        return res.json() as Promise<ApiResponse>
      })
      .then((data) => {
        if (cancelled) return
        setPayload({ editionDate: data.editionDate, items: data.items ?? [] })
        setPhase("ready")
      })
      .catch(() => {
        if (cancelled) return
        setPhase("error")
        setPayload({ editionDate: "", items: [] })
      })
    return () => {
      cancelled = true
    }
  }, [])

  const loopItems = useMemo(() => {
    const items = payload?.items ?? []
    if (items.length === 0) return []
    const min = 12
    const out: HeroDofTickerItem[] = []
    while (out.length < min) {
      for (const it of items) {
        out.push(it)
        if (out.length >= min) break
      }
    }
    return [...out, ...out]
  }, [payload?.items])

  const durationSec = useMemo(() => {
    const n = payload?.items.length ?? 0
    return Math.min(75, Math.max(28, 10 + n * 4))
  }, [payload?.items.length])

  return (
    <section
      className="mt-3 w-full border-t border-white/10 bg-[#040B1F]/35 py-2 backdrop-blur-sm dark:bg-black/20"
      aria-label={t("title")}
    >
      <div className="flex items-center gap-2 px-2 sm:px-3 md:gap-3 md:px-4">
        <div className="flex shrink-0 items-center gap-1 border-white/10 pr-2 sm:border-r sm:pr-3">
          <FileText className="h-3.5 w-3.5 shrink-0 text-[#4688D4]" aria-hidden />
          <span className="max-w-[2.5rem] truncate text-[9px] font-bold uppercase tracking-wide text-[#8AB2EA] sm:hidden">
            DOF
          </span>
          <span className="hidden max-w-[8rem] truncate text-[9px] font-bold uppercase tracking-wide text-[#8AB2EA] sm:inline sm:max-w-[11rem] md:max-w-none">
            {t("title")}
          </span>
          {phase === "ready" && payload?.editionDate ? (
            <span
              className="hidden max-w-[7rem] truncate text-[8px] text-white/45 lg:inline lg:max-w-[10rem]"
              title={payload.editionDate}
            >
              {payload.editionDate}
            </span>
          ) : null}
        </div>

        <div className="relative min-h-[32px] min-w-0 flex-1 overflow-hidden">
          {phase === "loading" ? (
            <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <SkeletonRow />
            </div>
          ) : phase === "error" ? (
            <p className="truncate py-1 text-center text-[10px] text-white/55">{t("error")}</p>
          ) : loopItems.length === 0 ? (
            <p className="truncate py-1 text-center text-[10px] text-white/55">{t("empty")}</p>
          ) : (
            <div className="hero-dof-marquee-mask flex items-center">
              <div
                className="hero-dof-marquee-track flex w-max items-center gap-2"
                style={{ animationDuration: `${durationSec}s` }}
              >
                {loopItems.map((item, index) => (
                  <TickerCard key={`${item.href}-${index}`} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
