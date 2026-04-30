import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: {
    default: "Nois - Legal Framework",
    template: "%s |",
  },
  metadataBase: new URL("https://alphaglobalmarket.io"),

  icons: {
    icon: "/icons/logo.ico",
  },
  authors: [{ name: "Alpha Global Market", url: "https://alphaglobalmarket.io" }],
  creator: "Alpha Global Market",
  publisher: "Alpha Global Market",
  category: "Finance",
  alternates: {
    canonical: "https://alphaglobalmarket.io",
    languages: {
      "en-US": "https://alphaglobalmarket.io/en",
      "es-ES": "https://alphaglobalmarket.io/es",
      "zh-CN": "https://alphaglobalmarket.io/cn",
      "hi-IN": "https://alphaglobalmarket.io/in",
    }
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
    title: "Alpha Global Market - Live Trading",
    locale: "en_US",
    url: "https://alphaglobalmarket.io",
    siteName: "Alpha Global Market",
    description: "We connect investors, identify talented traders, and fund the most profitable ones. We boost your success with capital, support, and strategic opportunities.",
    images: [
      {
        url: "https://alphaglobalmarket.io/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo AGM",
      },
      {
        url: "https://alphaglobalmarket.io/logos/logo-icon.png",
        width: 1800,
        height: 1600,
        alt: "Logo AGM Icon",
      },
      {
        url: "https://alphaglobalmarket.io/wallpapers/image_fondo.jpg",
        width: 1800,
        height: 1600,
        alt: "Image Found",
      }
    ],
    type: "website",
    alternateLocale: ["es", "zh_CN", "hi_IN"],
    emails: ["support@alphaglobalmarket.io", "technology@alphaglobalmarket.io", "isaac@alphaglobalmarket.io"],
    countryName: "Emiratos Arabes Unidos",
  },
  abstract: "We connect investors, identify talented traders, and fund the most profitable ones. We boost your success with capital, support, and strategic opportunities.",
  applicationName: "Alpha Global Market",
  formatDetection: {
    telephone: false,
    address: false,
    date: false,
    email: false,
    url: false,
  },
  manifest: "https://alphaglobalmarket.io/manifest.json",
  classification: "Finance"
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
    <html lang={locale} suppressHydrationWarning className={`dark ${euclidSquare.variable}`}>
      <head>
        <Script type="application/ld+json"  strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Alpha Global Market",
            url: "https://alphaglobalmarket.io",
            logo: "https://alphaglobalmarket.io/logos/logo.png",
            description: "We connect investors, identify talented traders, and fund the most profitable ones. We boost your success with capital, support, and strategic opportunities.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dubai, United Arab Emirates",
              addressLocality: "Anytown",
            },
            email: "support@alphaglobalmarket.io",
            sameAs: [

            ],
            serviceType: "FinancialService",
            areaServed: {
              "@type": "Country",
              name: "Worldwide",
            },
            provider: {
              "@type": "Organization",
              name: "Alpha Global Market",
              url: "https://alphaglobalmarket.io",
              logo: "https://alphaglobalmarket.io/logos/logo.png",
              sameAs: [
                "https://alphaglobalmarket.io",
              ]
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              email: "support@alphaglobalmarket.io",
              areaServed: {
                "@type": "Country",
                name: "Worldwide",
              },  
              availableLanguage: "English",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "100",
            },
            review: {
              "@type": "Review",
              reviewBody: "I love this product! It is so easy to use and it works great.",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                ratingCount: "100",
              },
            }
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
