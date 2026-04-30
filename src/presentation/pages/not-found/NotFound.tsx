'use client'

import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import NotFoundContent from '@/presentation/molecules/not-found/NotFoundContent'

interface NotFoundProps {
  message?: string
  className?: string
}

export default function NotFound({ message, className }: NotFoundProps) {
  return (
    <div
      className={`min-h-screen bg-[#050A14] flex items-center justify-center p-4 ${className ?? ''}`}
      role="main"
      aria-label="Página no encontrada"
    >
      <div className="max-w-md w-full flex flex-col items-center">
        <NotFoundContent
          description={
            message ??
            'Lo sentimos, la página que buscas no existe o ha sido movida. Por favor, vuelve al inicio.'
          }
        />

        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
          <Button
            asChild
            size="lg"
            className="bg-[#00d9ff] hover:bg-[#00b8e6] text-[#050A14] font-semibold px-8 transition-colors"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>

        <p className="text-slate-500 text-sm mt-12">
          Si el problema persiste, contacta con soporte
        </p>
      </div>
    </div>
  )
}
