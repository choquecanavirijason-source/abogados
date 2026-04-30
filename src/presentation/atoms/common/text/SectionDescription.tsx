import { cn } from "@/lib/utils"

interface SectionDescriptionProps {
  text: string
  highlightText?: string
  suffixText?: string
  className?: string
  highlightClassName?: string
}

export default function SectionDescription({
  text,
  highlightText,
  suffixText,
  className,
  highlightClassName,
}: SectionDescriptionProps) {
  return (
    <p className={cn(className)}>
      {text}
      {highlightText ? (
        <>
          {" "}
          <span className={cn(highlightClassName)}>{highlightText}</span>
        </>
      ) : null}
      {suffixText ? <> {suffixText}</> : null}
    </p>
  )
}
