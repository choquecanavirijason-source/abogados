"use client"

import React, { useEffect, useRef } from "react";
import { SWRConfig } from "swr";
import { errorHandler } from "@/application/errors/ErrorHandler";
import { ToastProvider } from "@/presentation/hooks/toast/use-toast";
import ToastContainer from "@/components/toast/toast-container";
import { NextIntlClientProvider } from "next-intl";
import { swrConfig } from "@/config/swr.config";
import NextTopLoader from "nextjs-toploader";

type IntlMessageValue = string | IntlMessages | IntlMessageValue[];
type IntlMessages = { [key: string]: IntlMessageValue };

interface AppProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: IntlMessages;
  timeZone: string;
}

export default function AppLayout({ children, locale, messages, timeZone }: AppProvidersProps) {

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      
      errorHandler.clear();
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");


    }
  }, []);

  // agregamos el color base de toda la app #050A14

  return (
    <div className="bg-[#050A14]">
      <NextIntlClientProvider messages={messages as any} locale={locale} timeZone={timeZone}>
        <SWRConfig value={swrConfig}>
          <NextTopLoader />
          <ToastProvider>
            {children}
            <ToastContainer />
          </ToastProvider>
        </SWRConfig>
      </NextIntlClientProvider>
    </div>
  )
}
