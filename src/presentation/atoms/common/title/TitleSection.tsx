import { cn } from "@/lib/utils"

interface TitleSectionProps {
  as?: "h1" | "h2" | "h3"
  line1: string
  line2?: string
  className?: string
  line2ClassName?: string
  inlineLine2?: boolean
}

export default function TitleSection({
  as = "h1",
  line1,
  line2,
  className,
  line2ClassName,
  inlineLine2 = false,
}: TitleSectionProps) {
  const Heading = as

  return (
    <Heading className={cn("mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold", className)}>
      {line1}
      {line2 ? (
        inlineLine2 ? (
          <>
            {" "}
            <span className={cn(line2ClassName)}>{line2}</span>
          </>
        ) : (
          <>
            <br />
            <span className={cn(line2ClassName)}>{line2}</span>
          </>
        )
      ) : null}
    </Heading>
  )
}
