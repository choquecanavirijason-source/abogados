import type { ReactNode } from "react"

type AccentGlassCardProps = {
  children: ReactNode
  className?: string
  contentClassName?: string
  accentClassName?: string
}

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ")
}

export default function AccentGlassCard({
  children,
  className,
  contentClassName,
  accentClassName = "bg-[#2F7FFF]",
}: AccentGlassCardProps) {
  return (
    <div
      className={joinClasses(
        "relative h-full overflow-hidden rounded-2xl border border-[#9DB7E5]/30 bg-[#111E3C]/82 p-8 shadow-[0_0_40px_rgba(1,169,255,0.12)] backdrop-blur-md md:p-10",
        className
      )}
    >
      <div className={joinClasses("absolute inset-x-0 top-0 mx-auto h-[3px] w-[42%] rounded-b-full", accentClassName)} />
      <div className="pointer-events-none absolute left-2 top-2 h-1.5 w-1.5 rounded-full border border-[#BFD0ED]/75" />
      <div className="pointer-events-none absolute right-2 top-2 h-1.5 w-1.5 rounded-full border border-[#BFD0ED]/75" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full border border-[#BFD0ED]/75" />
      <div className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full border border-[#BFD0ED]/75" />

      <div className={joinClasses("relative z-10", contentClassName)}>{children}</div>

      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-24 w-[75%] -translate-x-1/2 rounded-full bg-[#01A9FF]/10 blur-2xl" />
    </div>
  )
}
