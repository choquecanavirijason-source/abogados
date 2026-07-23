"use client"

import type { DofEdition } from "@/lib/dof/types"
import { useCallback, useEffect, useMemo, useState } from "react"
import {
  BookText,
  Building2,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  FileText,
  Layers3,
  Loader2,
  Newspaper,
} from "lucide-react"
import FloatingWhatsApp from "@/presentation/molecules/layout/FloatingWhatsApp"

export type { DofEdition, DofNote, DofSection } from "@/lib/dof/types"

async function fetchEditions(): Promise<{ editionDate: string; editions: DofEdition[] }> {
  const res = await fetch("/api/dof/editions", { cache: "no-store" })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    const msg = typeof body?.error === "string" ? body.error : `Error ${res.status}`
    throw new Error(msg)
  }
  return res.json() as Promise<{ editionDate: string; editions: DofEdition[] }>
}

function PageSkeleton() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 text-[#0A0E27] sm:px-6 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="h-3 w-48 animate-pulse rounded bg-slate-200" />
        <div className="mt-4 h-10 w-[min(100%,28rem)] animate-pulse rounded bg-slate-200 sm:h-12" />
        <div className="mt-3 h-4 w-64 animate-pulse rounded bg-slate-200" />
        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-xl bg-slate-100" />
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <div className="h-10 w-40 animate-pulse rounded-xl bg-slate-100" />
          <div className="h-10 w-40 animate-pulse rounded-xl bg-slate-100" />
        </div>
        <div className="mt-7 h-[min(420px,60vh)] animate-pulse rounded-2xl bg-slate-100" />
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[#4D5C74]">
          <Loader2 className="h-4 w-4 animate-spin" />
          Cargando datos del Diario Oficial…
        </p>
      </div>
    </main>
  )
}

export default function PageDiarioOficialFederacion() {
  const [editionDate, setEditionDate] = useState("")
  const [editions, setEditions] = useState<DofEdition[]>([])
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">("loading")

  const load = useCallback(async () => {
    setLoadState("loading")
    try {
      const data = await fetchEditions()
      setEditionDate(data.editionDate)
      setEditions(data.editions)
      setLoadState("ready")
    } catch {
      // El error (p. ej. API aún no desplegada) se maneja con un aviso neutro, sin mostrar detalles técnicos.
      setLoadState("error")
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  if (loadState === "loading") {
    return <PageSkeleton />
  }

  if (loadState === "error") {
    return (
      <main className="min-h-screen bg-white px-4 py-20 text-[#0A0E27] sm:px-6 md:px-10 md:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-[#F4F7FC] p-8 text-center shadow-[0_18px_45px_-18px_rgba(5,13,36,0.18)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2F62B8]/10 text-[#2F62B8]">
            <Newspaper className="h-6 w-6" />
          </div>
          <p className="mt-5 text-lg font-semibold text-[#0A0E27]">Servicio no disponible temporalmente</p>
          <p className="mt-2 text-sm text-[#4D5C74]">
            La consulta del Diario Oficial de la Federación estará disponible muy pronto. Mientras tanto, puedes
            visitar el portal oficial.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.dof.gob.mx/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#2F62B8] bg-[#2F62B8] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#274f95] sm:w-auto"
            >
              Portal oficial
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => void load()}
              className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-[#4D5C74] transition hover:border-[#2F62B8]/50 hover:text-[#2F62B8] sm:w-auto"
            >
              <Loader2 className="h-4 w-4" />
              Reintentar
            </button>
          </div>
        </div>
      </main>
    )
  }

  return <PageDiarioOficialFederacionContent editionDate={editionDate} editions={editions} />
}

function PageDiarioOficialFederacionContent({
  editionDate,
  editions,
}: {
  editionDate: string
  editions: DofEdition[]
}) {
  const [active, setActive] = useState<"vespertina" | "matutina">("matutina")
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const activeEdition = useMemo(
    () => editions.find((edition) => edition.id === active) ?? editions[0],
    [editions, active]
  )
  const currentDate = useMemo(
    () =>
      new Intl.DateTimeFormat("es-MX", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    []
  )

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
    <main className="relative min-h-screen overflow-hidden bg-white px-4 py-20 text-[#0A0E27] sm:px-6 md:px-10 md:py-24 lg:px-16 xl:px-20">
      {/* Lados plomos ambientales — gris suave sobre blanco (acento del home) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[32%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18),rgba(148,163,184,0.05)_55%,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-[32%] bg-[linear-gradient(to_left,rgba(148,163,184,0.18),rgba(148,163,184,0.05)_55%,transparent)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#2F62B8]">Diario Oficial de la Federación</p>
        <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">Diario Oficial de la Federación</h1>
        <p className="mt-3 text-sm text-[#4D5C74] md:mt-4 md:text-base">{editionDate}</p>

        <div className="mt-7 grid grid-cols-2 gap-3 xl:grid-cols-4">
          <div className="rounded-xl border border-[#5B6472]/40 bg-[linear-gradient(150deg,#0C1A39_0%,#1B2330_70%,#2A313E_100%)] p-4 shadow-[0_10px_30px_-18px_rgba(5,13,36,0.45)]">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <Layers3 className="h-4 w-4" />
              Sección
            </p>
            <p className="mt-2 text-sm font-semibold text-[#E5EEFF]">{activeEdition?.sectionName ?? "ÚNICA SECCIÓN"}</p>
          </div>
          <div className="rounded-xl border border-[#5B6472]/40 bg-[linear-gradient(150deg,#0C1A39_0%,#1B2330_70%,#2A313E_100%)] p-4 shadow-[0_10px_30px_-18px_rgba(5,13,36,0.45)]">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <Building2 className="h-4 w-4" />
              Organismos
            </p>
            <p className="mt-2 text-lg font-semibold text-[#E5EEFF]">{activeEdition?.sections.length ?? 0}</p>
          </div>
          <div className="rounded-xl border border-[#5B6472]/40 bg-[linear-gradient(150deg,#0C1A39_0%,#1B2330_70%,#2A313E_100%)] p-4 shadow-[0_10px_30px_-18px_rgba(5,13,36,0.45)]">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <Newspaper className="h-4 w-4" />
              Publicaciones
            </p>
            <p className="mt-2 text-lg font-semibold text-[#E5EEFF]">{activeEdition?.totalNotes ?? 0}</p>
          </div>
          <div className="rounded-xl border border-[#5B6472]/40 bg-[linear-gradient(150deg,#0C1A39_0%,#1B2330_70%,#2A313E_100%)] p-4 shadow-[0_10px_30px_-18px_rgba(5,13,36,0.45)]">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <CalendarDays className="h-4 w-4" />
              Fecha actual
            </p>
            <p className="mt-2 text-sm font-semibold text-[#E5EEFF]">{currentDate}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:mt-6 sm:flex sm:flex-wrap">
          {editions.map((edition) => (
            <button
              key={edition.id}
              type="button"
              onClick={() => setActive(edition.id)}
              className={`cursor-pointer rounded-xl border px-4 py-2 text-sm font-medium transition sm:w-auto ${
                active === edition.id
                  ? "border-[#2F62B8] bg-[#2F62B8] text-white shadow-[0_10px_25px_-12px_rgba(47,98,184,0.6)]"
                  : "border-slate-200 bg-white text-[#4D5C74] hover:border-[#2F62B8] hover:text-[#2F62B8]"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <BookText className="h-4 w-4" />
                {edition.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-[#F4F7FC] p-4 shadow-[0_24px_60px_-30px_rgba(5,13,36,0.35)] sm:p-5 md:mt-8 md:p-7">
          <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-[#0A0E27] sm:text-xl md:text-2xl">
                <FileText className="h-5 w-5 text-[#2F62B8]" />
                {activeEdition?.label}
              </h2>
              {activeEdition ? (
                <p className="mt-1 text-xs text-[#5A6B82]">
                  {activeEdition.sectionName ?? "ÚNICA SECCIÓN"}
                  {typeof activeEdition.sectionCount === "number" ? ` · ${activeEdition.sectionCount} secciones` : ""}
                  {typeof activeEdition.totalNotes === "number" ? ` · ${activeEdition.totalNotes} publicaciones` : ""}
                </p>
              ) : null}
            </div>
            <a
              href="https://www.dof.gob.mx/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-[#2F62B8] transition hover:border-[#2F62B8]/50 hover:bg-slate-50 sm:w-auto"
            >
              Portal oficial
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="space-y-4">
            {activeEdition?.sections.length ? (
              activeEdition.sections.map((section, sectionIndex) => {
                const sectionKey = `${section.category ?? "general"}-${section.title}-${sectionIndex}`
                const isOpen = openSections[sectionKey] ?? sectionIndex === 0

                return (
                  <section
                    key={sectionKey}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition"
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(sectionKey)}
                      className="flex w-full cursor-pointer items-start justify-between gap-3 p-4 text-left hover:bg-slate-50 sm:items-center"
                    >
                      <div className="min-w-0">
                        {section.category ? (
                          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#5A6B82]">
                            <Building2 className="h-3.5 w-3.5" />
                            {section.category}
                          </p>
                        ) : null}
                        <h3 className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[#334155] break-words">
                          {section.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#64748B]">{section.notes.length} publicaciones</p>
                      </div>
                      <ChevronDown
                        className={`mt-0.5 h-5 w-5 shrink-0 text-[#94A3B8] transition-transform duration-200 sm:mt-0 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen ? (
                      <ul className="space-y-3 border-t border-slate-200 bg-[#F8FAFC] p-3 sm:p-4">
                        {section.notes.map((note, index) => (
                          <li
                            key={`${section.title}-${index}`}
                            className="rounded-lg border border-slate-200 bg-white p-3 text-sm leading-relaxed text-[#334155] shadow-[0_6px_18px_-14px_rgba(5,13,36,0.3)]"
                          >
                            <a
                              href={note.href}
                              target="_blank"
                              rel="noreferrer"
                              className="group flex items-start gap-2 hover:text-[#0A0E27]"
                            >
                              <Newspaper className="mt-0.5 h-4 w-4 shrink-0 text-[#2F62B8]" />
                              <span className="min-w-0 break-words group-hover:underline">{note.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                )
              })
            ) : (
              <p className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-[#64748B]">
                No hay secciones para esta edición.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
    <FloatingWhatsApp />
    </>
  )
}
