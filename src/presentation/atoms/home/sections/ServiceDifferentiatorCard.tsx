import type { LucideIcon } from "lucide-react"

interface ServiceDifferentiatorCardProps {
  subtitle?: string
  title: string
  description: string
  featured?: boolean
  accentClass?: string
  icon: LucideIcon
}

export default function ServiceDifferentiatorCard({
  subtitle,
  title,
  description,
  featured,
  accentClass,
  icon: Icon,
}: ServiceDifferentiatorCardProps) {
  return (
    <article
      className={`relative h-full w-full overflow-hidden rounded-2xl border border-t-2 p-4 backdrop-blur-md transition-all duration-300 cursor-pointer md:p-6 ${
        featured
          ? "border-white/15 bg-[#0B1A35]/60 border-t-white/25"
          : "border-white/15 bg-[#0B1A35]/60 border-t-white/25"
      } hover:border-[#74B4FF]/70 hover:bg-[#0E2345]/85 hover:shadow-[0_0_35px_rgba(70,136,212,0.2)] hover:border-t-[#74B4FF] ${accentClass ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(1,169,255,0.14),transparent_40%),radial-gradient(circle_at_12%_88%,rgba(1,169,255,0.10),transparent_44%)]" />
      <div className="relative z-10 flex items-start gap-3 md:gap-4">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center md:h-14 md:w-14">
          <Icon className="h-6 w-6 text-[#FFFFFF] md:h-7 md:w-7" />
        </div>
        <div className="min-w-0 space-y-1 pt-0.5 md:space-y-1.5 md:pt-1">
          {subtitle ? (
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 md:text-[11px] md:tracking-[0.25em]">{subtitle}</p>
          ) : null}
          <p className="text-lg leading-snug text-white md:text-xl">{title}</p>
        </div>
      </div>
      <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/65 md:mt-4 md:pl-[72px]">{description}</p>
    </article>
  )
}
