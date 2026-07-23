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
