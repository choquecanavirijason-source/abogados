import PageDiarioOficialFederacion, {
  type DofEdition,
  type DofSection,
} from "@/presentation/pages/dof/PageDiarioOficialFederacion"

function normalizeText(value: string) {
  const normalizedEntities = value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&iacute;/gi, "i")
    .replace(/&eacute;/gi, "e")
    .replace(/&aacute;/gi, "a")
    .replace(/&oacute;/gi, "o")
    .replace(/&uacute;/gi, "u")
    .replace(/&Iacute;/g, "I")
    .replace(/&Eacute;/g, "E")
    .replace(/&Aacute;/g, "A")
    .replace(/&Oacute;/g, "O")
    .replace(/&Uacute;/g, "U")
    .replace(/&Ntilde;/g, "N")
    .replace(/&ntilde;/g, "n")

  return normalizedEntities
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

function getTabChunk(html: string, tabId: "resp-tab2" | "resp-tab3") {
  const tabStart = html.indexOf(`id="${tabId}"`)
  if (tabStart < 0) return ""

  if (tabId === "resp-tab2") {
    const tabEnd = html.indexOf('id="resp-tab3"', tabStart)
    return html.slice(tabStart, tabEnd > 0 ? tabEnd : undefined)
  }

  const tabEnd =
    html.indexOf("<!--FIN TAB 2-->", tabStart) > 0
      ? html.indexOf("<!--FIN TAB 2-->", tabStart)
      : html.indexOf("</form>", tabStart)

  return html.slice(tabStart, tabEnd > 0 ? tabEnd : undefined)
}

function parseEditionTab(
  html: string,
  tabId: "resp-tab2" | "resp-tab3",
  label: string,
  id: "vespertina" | "matutina"
): DofEdition {
  const tabChunk = getTabChunk(html, tabId)
  if (!tabChunk) {
    return { id, label, sections: [] }
  }

  const sections: DofSection[] = []
  const parsedNoteKeys = new Set<string>()

  const categoryMarkers = Array.from(
    tabChunk.matchAll(
      /<h4 class="panel-title ElipsisText"[\s\S]*?<span class="txt-traduct"\s*>\s*([\s\S]*?)\s*<\/span>[\s\S]*?<\/h4>/g
    )
  ).map((match) => ({
    index: match.index ?? 0,
    title: normalizeText(match[1] ?? ""),
  }))

  const sectionMatches = Array.from(
    tabChunk.matchAll(
      /<div id="panel-heading-(\d+)"[\s\S]*?<a class="accordion-toggle"[\s\S]*?<span class="txt-traduct">\s*([\s\S]*?)\s*<\/span>[\s\S]*?<\/a>/g
    )
  )
  const noteEntries = Array.from(
    tabChunk.matchAll(
      /class="collapse-(\d+)[^"]*panel-collapse[^"]*"[\s\S]*?<a class="sumario-nota"\s*href="([^"]+)">([\s\S]*?)<\/a>/g
    )
  ).map((match) => ({
    panelId: match[1],
    href: match[2],
    title: normalizeText(match[3] ?? ""),
  }))

  for (const sectionMatch of sectionMatches) {
    const panelId = sectionMatch[1]
    const sectionTitle = normalizeText(sectionMatch[2] ?? "")
    const sectionIndex = sectionMatch.index ?? 0
    const activeCategory =
      [...categoryMarkers].reverse().find((category) => category.index < sectionIndex)?.title || undefined

    const notes = noteEntries
      .filter((entry) => entry.panelId === panelId)
      .map((entry) => {
        const href = entry.href
        const title = entry.title
        const absoluteHref = href.startsWith("http") ? href : `https://sidofqa.segob.gob.mx${href}`

        parsedNoteKeys.add(`${absoluteHref}__${title}`)

        return { href: absoluteHref, title }
      })

    sections.push({
      title: sectionTitle || "General",
      category: activeCategory,
      notes,
    })
  }

  const allNoteMatches = Array.from(
    tabChunk.matchAll(/<a class="sumario-nota"\s*href="([^"]+)">([\s\S]*?)<\/a>/g)
  ).map((match) => {
    const href = match[1]
    const title = normalizeText(match[2] ?? "")
    const absoluteHref = href.startsWith("http") ? href : `https://sidofqa.segob.gob.mx${href}`

    return { href: absoluteHref, title }
  })

  const missingNotes = allNoteMatches.filter((note) => !parsedNoteKeys.has(`${note.href}__${note.title}`))
  if (missingNotes.length > 0) {
    sections.push({
      title: "Publicaciones adicionales",
      notes: missingNotes,
    })
  }

  if (sections.length === 0 && allNoteMatches.length > 0) {
    sections.push({
      title: "General",
      notes: allNoteMatches,
    })
  }

  const sectionNameMatch = tabChunk.match(
    /<div id="unica" class="panel-heading section-title">[\s\S]*?<span class="txt-traduct">\s*([\s\S]*?)\s*<\/span>/
  )
  const sectionCountMatch = tabChunk.match(/Esta edición consta de\s*([0-9]+)\s*secciones/i)

  return {
    id,
    label,
    sectionName: sectionNameMatch?.[1] ? normalizeText(sectionNameMatch[1]) : undefined,
    sectionCount: sectionCountMatch?.[1] ? Number(sectionCountMatch[1]) : undefined,
    totalNotes: allNoteMatches.length,
    sections,
  }
}

async function getDofData() {
  try {
    const response = await fetch("https://sidofqa.segob.gob.mx/", { cache: "no-store" })
    const html = await response.text()

    const dateMatch = html.match(/Edición del\s*([0-9]{1,2}\s+de\s+[a-zA-ZáéíóúÁÉÍÓÚ]+\s+de\s+[0-9]{4})/i)
    const editionDate = dateMatch?.[1] ? `Edicion del ${normalizeText(dateMatch[1])}` : "Edicion vigente"

    const vespertina = parseEditionTab(html, "resp-tab2", "Edicion Vespertina", "vespertina")
    const matutina = parseEditionTab(html, "resp-tab3", "Edicion Matutina", "matutina")

    return {
      editionDate,
      editions: [vespertina, matutina],
    }
  } catch {
    return {
      editionDate: "Edicion del 23 de abril de 2026",
      editions: [
        {
          id: "vespertina",
          label: "Edicion Vespertina",
          sections: [
            {
              title: "PRESIDENCIA DE LA REPUBLICA",
              notes: [
                {
                  href: "https://sidofqa.segob.gob.mx/notas/5785817",
                  title:
                    "Decreto por el que se reforman los artículos 115, fracción I y 116, fracción II, y se adiciona un párrafo al artículo 134 de la Constitución Política de los Estados Unidos Mexicanos.",
                },
                {
                  href: "https://sidofqa.segob.gob.mx/notas/5785818",
                  title:
                    "Decreto por el que se modifica la Tarifa de la Ley de los Impuestos Generales de Importación y de Exportación, y el Decreto de Programas de Promoción Sectorial.",
                },
              ],
            },
          ],
        },
        {
          id: "matutina",
          label: "Edicion Matutina",
          sections: [
            {
              title: "SECRETARIA DE GOBERNACION",
              notes: [
                {
                  href: "https://sidofqa.segob.gob.mx/notas/5785680",
                  title:
                    "Aviso de extracto de solicitud de registro constitutivo como asociación religiosa de Iglesia Cristiana Bethel Casa de Restauración.",
                },
                {
                  href: "https://sidofqa.segob.gob.mx/notas/5785681",
                  title:
                    "Aviso de extracto de solicitud de registro constitutivo como asociación religiosa de Iglesia Casa de Dios Evangélica Pentecostés.",
                },
              ],
            },
          ],
        },
      ] as DofEdition[],
    }
  }
}

export default async function DiarioOficialFederacionPage() {
  const data = await getDofData()
  return <PageDiarioOficialFederacion editionDate={data.editionDate} editions={data.editions} />
}
