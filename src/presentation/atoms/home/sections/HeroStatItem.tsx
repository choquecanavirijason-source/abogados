interface HeroStatItemProps {
  value: string
  label: string
  className?: string
}

export default function HeroStatItem({ value, label, className }: HeroStatItemProps) {
  return (
    <article
      className={`relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-t-2 border-white/15 border-t-white/25 bg-[#0B1A35]/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#74B4FF]/70 hover:border-t-[#74B4FF] hover:bg-[#0E2345]/85 hover:shadow-[0_0_35px_rgba(70,136,212,0.2)] ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(1,169,255,0.14),transparent_40%),radial-gradient(circle_at_12%_88%,rgba(1,169,255,0.10),transparent_44%)]" />
      <p className="relative z-10 text-3xl font-bold text-white md:text-[34px]">{value}</p>
      <p className="relative z-10 mt-1 text-[11px] uppercase tracking-[0.22em] text-white/65">
        {label}
      </p>
    </article>
  )
}
