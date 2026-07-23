"use client";

import { useState } from "react";
import Image from "next/image";
import { Link as I18nLink } from "@/i18n/navigation";
import OptionsCenter from "@/presentation/molecules/layout/OptionsCenter";
import ButtonsRight from "@/presentation/molecules/layout/ButtonsRight";
import SwitchLanguage from "@/presentation/atoms/layout/switch/switch-language";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-white/10 bg-[#050A14]/90 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-8 xl:px-20">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-start gap-8 lg:gap-20">
          <I18nLink
            href="/"
            className="flex items-center shrink-0"
            aria-label="Stratium Legal - Inicio"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/logos/logo-icon.svg"
              alt="Stratium Legal"
              width={50}
              height={50}
              className="h-[50px] w-[50px] object-contain"
              priority
            />
          </I18nLink>

          <div className="hidden lg:flex justify-end">
            <OptionsCenter />
          </div>
        </div>

        <div className="hidden lg:flex items-center shrink-0">
          <ButtonsRight />
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <SwitchLanguage />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-header-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-header-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 rounded-xl border border-white/10 bg-[#050A14]/95 backdrop-blur-md p-4"
          >
            <OptionsCenter isMobile />
            <div className="mt-4 border-t border-white/10 pt-4">
              <ButtonsRight className="flex-col items-center gap-3" showLanguage={false} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
