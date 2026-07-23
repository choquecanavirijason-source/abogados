"use client"

import dynamic from "next/dynamic"

// El <Canvas> (WebGL) no debe renderizarse en el servidor.
const LegalBookScene = dynamic(() => import("./LegalBookScene"), { ssr: false })

interface LegalBookViewerProps {
  className?: string
  label?: string
}

export default function LegalBookViewer({ className, label }: LegalBookViewerProps) {
  return (
    <div className={className} role="img" aria-label={label}>
      <LegalBookScene />
    </div>
  )
}
