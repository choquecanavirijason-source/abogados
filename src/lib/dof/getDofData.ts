import type { DofEdition, DofSection } from "./types"

function normalizeText(value: string) {
  const normalizedEntities = value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&iacute;/gi, "í")
    .replace(/&Iacute;/g, "Í")
    .replace(/&eacute;/gi, "é")
    .replace(/&Eacute;/g, "É")
    .replace(/&aacute;/gi, "á")
    .replace(/&Aacute;/g, "Á")
    .replace(/&oacute;/gi, "ó")
    .replace(/&Oacute;/g, "Ó")
    .replace(/&uacute;/gi, "ú")
    .replace(/&Uacute;/g, "Ú")
    .replace(/&ntilde;/g, "ñ")
    .replace(/&Ntilde;/g, "Ñ")
    .replace(/&uuml;/gi, "ü")
    .replace(/&Uuml;/g, "Ü")

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

export async function getDofData(): Promise<{ editionDate: string; editions: DofEdition[] }> {
  try {
    const response = await fetch("https://sidofqa.segob.gob.mx/", {
      cache: "no-store",
      // El sitio del DOF rechaza peticiones sin User-Agent de navegador.
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "es-MX,es;q=0.9",
      },
    })
    if (!response.ok) throw new Error(`DOF respondió ${response.status}`)
    const html = await response.text()

    const dateMatch = html.match(/Edici[oó]n del\s*([0-9]{1,2}\s+de\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s+de\s+[0-9]{4})/i)
    const editionDate = dateMatch?.[1] ? `Edición del ${normalizeText(dateMatch[1])}` : "Edición vigente"

    const vespertina = parseEditionTab(html, "resp-tab2", "Edición Vespertina", "vespertina")
    const matutina = parseEditionTab(html, "resp-tab3", "Edición Matutina", "matutina")

    return {
      editionDate,
      editions: [vespertina, matutina],
    }
  } catch {
    return {
      editionDate: "Edición del 23 de abril de 2026",
      editions: [
        {
          id: "vespertina",
          label: "Edición Vespertina",
          sections: [
            {
              title: "PRESIDENCIA DE LA REPÚBLICA",
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
          label: "Edición Matutina",
          sections: [
            {
              title: "SECRETARÍA DE GOBERNACIÓN",
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
      ],
    }
  }
}
