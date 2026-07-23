import { getDofData } from "@/lib/dof/getDofData"
import { NextResponse } from "next/server"

/** Permite incluir esta ruta en `output: 'export'` (respuesta fijada en build). */
export const dynamic = "force-static"

export type HeroDofTickerItem = {
  href: string
  title: string
  editionLabel: string
  editionId: "vespertina" | "matutina"
  sectionTitle: string
}

export async function GET() {
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

  return NextResponse.json({
    editionDate: data.editionDate,
    items,
  })
}
