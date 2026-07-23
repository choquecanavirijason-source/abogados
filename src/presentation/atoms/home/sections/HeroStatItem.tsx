interface HeroStatItemProps {
  value: string
  label: string
  className?: string
}

export default function HeroStatItem({ value, label, className }: HeroStatItemProps) {
  return (
    <article
      className={`relative cursor-pointer overflow-hidden rounded-2xl border border-[#4688D4]/20 bg-[#09152C]/60 px-4 py-4 backdrop-blur-xl shadow-[0_10px_30px_rgba(1,169,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4688D4]/45 hover:shadow-[0_16px_40px_rgba(1,169,255,0.2)] ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(1,169,255,0.22),transparent_45%)]" />
      <p className="relative text-2xl font-bold text-white md:text-3xl">{value}</p>
      <p className="relative text-[11px] uppercase tracking-[0.14em] text-[#B0BAC6]">
        {label}
      </p>
    </article>
  )
}
