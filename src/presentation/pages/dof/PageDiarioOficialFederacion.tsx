"use client"

import { useMemo, useState } from "react"
import {
  BookText,
  Building2,
  CalendarDays,
  ChevronDown,
  ExternalLink,
  FileText,
  Layers3,
  Newspaper,
} from "lucide-react"

export type DofNote = {
  title: string
  href: string
}

export type DofSection = {
  title: string
  category?: string
  notes: DofNote[]
}

export type DofEdition = {
  id: "vespertina" | "matutina"
  label: string
  sectionName?: string
  sectionCount?: number
  totalNotes?: number
  sections: DofSection[]
}

type Props = {
  editionDate: string
  editions: DofEdition[]
}

export default function PageDiarioOficialFederacion({ editionDate, editions }: Props) {
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
    <main className="min-h-screen bg-[#040B1F] px-4 py-20 text-white sm:px-6 md:px-10 md:py-24 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#7EA7E8]">Diario Oficial de la Federacion</p>
        <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">Diario Oficial de la Federacion</h1>
        <p className="mt-3 text-sm text-[#B4C3DE] md:mt-4 md:text-base">{editionDate}</p>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-[#467BC6]/35 bg-[#0C1A39]/85 p-4">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <Layers3 className="h-4 w-4" />
              Seccion
            </p>
            <p className="mt-2 text-sm font-semibold text-[#E5EEFF]">{activeEdition?.sectionName ?? "UNICA SECCION"}</p>
          </div>
          <div className="rounded-xl border border-[#467BC6]/35 bg-[#0C1A39]/85 p-4">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <Building2 className="h-4 w-4" />
              Organismos
            </p>
            <p className="mt-2 text-lg font-semibold text-[#E5EEFF]">{activeEdition?.sections.length ?? 0}</p>
          </div>
          <div className="rounded-xl border border-[#467BC6]/35 bg-[#0C1A39]/85 p-4">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <Newspaper className="h-4 w-4" />
              Publicaciones
            </p>
            <p className="mt-2 text-lg font-semibold text-[#E5EEFF]">{activeEdition?.totalNotes ?? 0}</p>
          </div>
          <div className="rounded-xl border border-[#467BC6]/35 bg-[#0C1A39]/85 p-4">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.08em] text-[#7EA7E8]">
              <CalendarDays className="h-4 w-4" />
              Fecha actual
            </p>
            <p className="mt-2 text-sm font-semibold capitalize text-[#E5EEFF]">{currentDate}</p>
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
                  ? "border-[#4688D4] bg-[#1B3560] text-white shadow-[0_0_25px_rgba(70,136,212,0.2)]"
                  : "border-white/15 bg-white/[0.04] text-white/75 hover:border-[#3D6FB0] hover:text-white"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <BookText className="h-4 w-4" />
                {edition.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-white/15 bg-[#0A1630]/85 p-4 shadow-[0_0_45px_rgba(10,22,48,0.75)] backdrop-blur-md sm:p-5 md:mt-8 md:p-7">
          <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
                <FileText className="h-5 w-5 text-[#8AB2EA]" />
                {activeEdition?.label}
              </h2>
              {activeEdition ? (
                <p className="mt-1 text-xs text-[#9AB5DE]">
                  {activeEdition.sectionName ?? "UNICA SECCION"}
                  {typeof activeEdition.sectionCount === "number" ? ` · ${activeEdition.sectionCount} secciones` : ""}
                  {typeof activeEdition.totalNotes === "number" ? ` · ${activeEdition.totalNotes} publicaciones` : ""}
                </p>
              ) : null}
            </div>
            <a
              href="https://www.dof.gob.mx/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center "
            >
              Portal oficial
              <ExternalLink className="" />
            </a>
          </div>

          <div className="space-y-4">
            {activeEdition?.sections.map((section, sectionIndex) => {
              const sectionKey = `${section.category ?? "general"}-${section.title}-${sectionIndex}`
              const isOpen = openSections[sectionKey] ?? sectionIndex === 0

              return (
                <section
                  key={sectionKey}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#081327]/90 transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(sectionKey)}
                    className="flex w-full cursor-pointer items-start justify-between gap-3 p-4 text-left hover:bg-white/[0.03] sm:items-center"
                  >
                    <div className="min-w-0">
                      {section.category ? (
                        <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6F8FC0]">
                          <Building2 className="h-3.5 w-3.5" />
                          {section.category}
                        </p>
                      ) : null}
                      <h3 className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[#9AB5DE] break-words">
                        {section.title}
                      </h3>
                      <p className="mt-1 text-xs text-[#88A6D3]">{section.notes.length} publicaciones</p>
                    </div>
                    <ChevronDown
                      className={`mt-0.5 h-5 w-5 shrink-0 text-[#9AB5DE] transition-transform duration-200 sm:mt-0 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen ? (
                    <ul className="space-y-3 border-t border-white/10 p-3 sm:p-4">
                      {section.notes.map((note, index) => (
                        <li
                          key={`${section.title}-${index}`}
                          className="rounded-lg border border-white/10 bg-[#0B1833]/75 p-3 text-sm leading-relaxed text-[#D5E2F8]"
                        >
                          <a
                            href={note.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-start gap-2 hover:text-white"
                          >
                            <Newspaper className="mt-0.5 h-4 w-4 shrink-0 text-[#8AB2EA] group-hover:text-white" />
                            <span className="min-w-0 break-words group-hover:underline">{note.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
