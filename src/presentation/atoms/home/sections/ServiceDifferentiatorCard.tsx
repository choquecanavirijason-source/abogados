import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const shellClassName =
  "relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-t-2 border-white/15 bg-[#0A1630]/85 p-4 text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-[#0A1630]/92 md:p-6"

const surfaceOverlayClassName = "pointer-events-none absolute inset-0"

type BaseProps = {
  featured?: boolean
  accentClass?: string
  className?: string
}

type DefaultCardProps = BaseProps & {
  subtitle?: string
  title: string
  description: string
  icon: LucideIcon
  children?: undefined
  contentClassName?: undefined
}

type SlottedCardProps = BaseProps & {
  children: ReactNode
  contentClassName?: string
}

type ServiceDifferentiatorCardProps = DefaultCardProps | SlottedCardProps

export default function ServiceDifferentiatorCard(props: ServiceDifferentiatorCardProps) {
  const accent = props.accentClass ?? ""

  if ("children" in props && props.children != null) {
    return (
      <article
        className={cn(shellClassName, accent, props.className, props.featured && "ring-1 ring-[#4688D4]/35")}
      >
        <div className={surfaceOverlayClassName} />
        <div className={cn("relative z-10", props.contentClassName)}>{props.children}</div>
      </article>
    )
  }

  const { subtitle, title, description, icon: Icon, featured, className } = props as DefaultCardProps

  return (
    <article className={cn(shellClassName, accent, className, featured && "ring-1 ring-[#4688D4]/35")}>
      <div className={surfaceOverlayClassName} />
      <div className="relative z-10 flex items-start gap-3 md:gap-4">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center md:h-14 md:w-14">
          <Icon className="h-6 w-6 text-[#FFFFFF] md:h-7 md:w-7" />
        </div>
        <div className="min-w-0 space-y-1 pt-0.5 md:space-y-1.5 md:pt-1">
          {subtitle ? (
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 md:text-[11px] md:tracking-[0.25em]">
              {subtitle}
            </p>
          ) : null}
          <p className="text-lg leading-snug text-white md:text-xl">{title}</p>
        </div>
      </div>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/90 md:mt-4 md:pl-[72px]">
        {description}
      </p>
    </article>
  )
}
