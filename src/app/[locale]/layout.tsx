import type { Metadata } from "next";
import localFont from "next/font/local";
import { Dancing_Script } from "next/font/google";
import { setRequestLocale } from "next-intl/server";
import "@/styles/globals.css";
import AppLayout from "@/presentation/templates/app/AppLayout";
import MainLayout from "@/presentation/templates/main/MainLayout";
import Script from "next/script";
import { routing } from "@/i18n/routing";


const euclidSquare = localFont({
  src: [
    {
      path: "../../../public/fonts/euclid-square/EuclidSquare-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/euclid-square/EuclidSquare-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/euclid-square/EuclidSquare-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/euclid-square/EuclidSquare-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-euclid-square",
  display: "swap",
});

// Fuente manuscrita (estilo carta) para citas destacadas
const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

const SITE_URL = "https://stratiumlegal.com";
const SITE_NAME = "Stratium Legal";
const SITE_DESCRIPTION =
  "Cumplimiento legal corporativo remoto y rápido para empresas en México. Resolvemos tus obligaciones de la LGSM, el CFF y el Código de Comercio, y te ayudamos a evitar multas de hasta $208,000 MXN.";

export const metadata: Metadata = {
  title: {
    default: "Stratium Legal — Cumplimiento legal corporativo en México",
    template: "%s | Stratium Legal",
  },
  metadataBase: new URL(SITE_URL),
  description: SITE_DESCRIPTION,
  keywords: [
    "cumplimiento legal",
    "LGSM",
    "CFF",
    "Código de Comercio",
    "libros corporativos",
    "persona moral",
    "abogados México",
    "Stratium Legal",
  ],
  icons: {
    icon: "/icons/logo.ico",
    shortcut: "/favicon.ico",
  },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Legal",
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/es",
      en: "/en",
      "zh-CN": "/cn",
      "hi-IN": "/in",
      "x-default": "/es",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": 1000,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Stratium Legal — La ley no espera. Tu empresa tampoco.",
    locale: "es_MX",
    url: SITE_URL,
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/logos/stratium.png",
        width: 1200,
        height: 630,
        alt: "Stratium Legal — cumplimiento legal corporativo en México",
      },
      {
        url: "/images/logos/logo.png",
        alt: "Stratium Legal",
      },
    ],
    type: "website",
    alternateLocale: ["en_US", "zh_CN", "hi_IN"],
    countryName: "México",
  },
  applicationName: SITE_NAME,
  formatDetection: {
    telephone: false,
    address: false,
    date: false,
    email: false,
    url: false,
  },
  manifest: "/manifest.json",
  classification: "Legal",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function getMessagesForLocale(locale: string) {
  switch (locale) {
    case "en":
      return (await import("@/messages/en.json")).default;
    case "cn":
      return (await import("@/messages/cn.json")).default;
    case "in":
      return (await import("@/messages/in.json")).default;
    case "es":
    default:
      return (await import("@/messages/es.json")).default;
  }
}

export default async function RootLayout({ params, children }: Props) {
  const { locale } = await params;
  const messages = await getMessagesForLocale(locale);
  const timeZone = "America/Mexico_City";

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning className={`dark ${euclidSquare.variable} ${scriptFont.variable}`}>
      <head>
        <Script type="application/ld+json"  strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/images/logos/logo.png`,
            image: `${SITE_URL}/images/home/hero/stratium.png`,
            description: SITE_DESCRIPTION,
            serviceType: "Cumplimiento legal corporativo",
            areaServed: {
              "@type": "Country",
              name: "México",
            },
            availableLanguage: ["es", "en"],
            provider: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/images/logos/logo.png`,
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              areaServed: "MX",
              availableLanguage: ["Spanish", "English"],
            },
          })
        }}
         />
      </head>
      <body
        className={`${euclidSquare.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppLayout locale={locale} messages={messages} timeZone={timeZone}>
          <MainLayout>
            {children}
          </MainLayout>
        </AppLayout>
      </body>
    </html>
  );
}
