import { cn } from "@/lib/utils"
import type { CSSProperties, ReactNode } from "react"

interface SectionLayoutProps {
  id?: string
  children: ReactNode
  className?: string
  withBorder?: boolean
  darkBackground?: string
  darkAccent?: string
  darkMutedText?: string
  lightBackground?: string
  lightAccent?: string
  lightMutedText?: string
}

export default function SectionLayout({
  id,
  children,
  className,
  withBorder = true,
  darkBackground = "#0A0E27",
  darkAccent = "#4688D4",
  darkMutedText = "#B0BAC6",
  lightBackground = "#F4F7FC",
  lightAccent = "#2F62B8",
  lightMutedText = "#4D5C74",
}: SectionLayoutProps) {
  const sectionVars = {
    "--section-bg-dark": darkBackground,
    "--section-accent-dark": darkAccent,
    "--section-muted-dark": darkMutedText,
    "--section-bg-light": lightBackground,
    "--section-accent-light": lightAccent,
    "--section-muted-light": lightMutedText,
  } as CSSProperties

  return (
    <section
      id={id}
      style={sectionVars}
      className={cn(
        "relative overflow-hidden bg-[var(--section-bg-light)] text-[#0A0E27] dark:bg-[var(--section-bg-dark)] dark:text-white",
        withBorder && "border-b border-[color:var(--section-accent-light)]/20 dark:border-[color:var(--section-accent-dark)]/25",
        className
      )}
    >
      {children}
    </section>
  )
}
