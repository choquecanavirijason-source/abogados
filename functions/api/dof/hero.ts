// Cloudflare Pages Function — scraping EN VIVO del DOF para el ticker del hero.
// Se sirve automáticamente en /api/dof/hero (toma precedencia sobre el export estático).
// Corre en el edge: el servidor pide el DOF sin problema de CORS y devuelve JSON fresco.
import { getDofData } from "../../../src/lib/dof/getDofData"

type HeroDofTickerItem = {
  href: string
  title: string
  editionLabel: string
  editionId: "vespertina" | "matutina"
  sectionTitle: string
}

export async function onRequestGet(): Promise<Response> {
  const data = await getDofData()
  const items: HeroDofTickerItem[] = []

  for (const edition of data.editions) {
    for (const section of edition.sections) {
      for (const note of section.notes) {
        if (items.length >= 28) break
        const title = note.title.length > 220 ? `${note.title.slice(0, 217)}…` : note.title
        items.push({
          href: note.href,
          title,
          editionLabel: edition.label,
          editionId: edition.id,
          sectionTitle: section.title,
        })
      }
      if (items.length >= 28) break
    }
    if (items.length >= 28) break
  }

  return new Response(JSON.stringify({ editionDate: data.editionDate, items }), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      // Caché en el edge 30 min: datos frescos sin scrapear en cada visita.
      "cache-control": "public, max-age=0, s-maxage=1800",
    },
  })
}
