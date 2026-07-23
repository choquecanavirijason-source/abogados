import type { MouseEvent } from "react"
import Link from "next/link"

interface ButtonBorderProps {
  text?: string
  href?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function ButtonBorder({
  text = 'Registrate',
  href = '/register',
  onClick,
 }: ButtonBorderProps) {
  return (
    <div className="inline-flex rounded-full p-[1px] bg-linear-to-r from-[#01A9FF] to-[#FFFFFF]">
      <Link
        href={href}
        onClick={onClick}
        className="group flex items-center justify-between gap-2 rounded-full bg-[#0B1220]/90 px-5 py-2 text-white font-euclid font-semibold text-xs uppercase tracking-wide transition-colors hover:bg-[#111C2F] cursor-pointer"
      >
        <span>{text}</span>
      </Link>
    </div>
  )
}