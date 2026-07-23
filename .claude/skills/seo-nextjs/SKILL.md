---
name: seo-nextjs
description: Optimizar SEO de páginas web en este proyecto Next.js 16 (App Router) + next-intl (landing legal/abogados AGM). Cubre la Metadata API, generateMetadata, títulos/descriptions, Open Graph y Twitter cards, hreflang multilenguaje, sitemap.ts, robots.ts, manifest, datos estructurados JSON-LD (LegalService/Organization/FAQ/Breadcrumb), canonical, HTML semántico, imágenes y Core Web Vitals. Úsalo cuando el usuario pida mejorar el SEO, posicionamiento, metadatos, que Google indexe bien, compartir en redes (OG), schema/rich results, o trabajes con metadata, generateMetadata, sitemap, robots o manifest.
---

# SEO en Next.js 16 (App Router) — proyecto legal/abogados

Stack: Next.js 16 App Router, **next-intl** (locales `en, es, cn, in`; default `es`; `localePrefix: 'always'`). Ya existen `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/manifest.ts`. Nicho: bufete/servicios legales → usa schema `LegalService`/`Attorney`.

## 1. Metadata API (nunca <head> manual)
Cada página/layout exporta `metadata` o `generateMetadata`. Con i18n, **siempre** `generateMetadata` para localizar textos:

```tsx
// src/app/[locale]/layout.tsx  o  cualquier page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const BASE_URL = "https://stratiumlegal.com"; // mover a env: NEXT_PUBLIC_SITE_URL

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    metadataBase: new URL(BASE_URL),
    title: { default: t("title"), template: `%s | AGM Abogados` },
    description: t("description"),
    keywords: t("keywords").split(","),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es", en: "/en", "zh-CN": "/cn", hi: "/in",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      url: `${BASE_URL}/${locale}`,
      siteName: "AGM Abogados",
      title: t("title"),
      description: t("description"),
      locale,
      images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: t("title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og/home.jpg"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
```

Reglas de copy:
- **Title** único por página, 50–60 caracteres, con keyword + marca.
- **Description** 140–160 caracteres, persuasiva, con la keyword y un CTA.
- Cada idioma con su propio texto en `src/messages/{locale}.json` (namespace `seo.*`). No traduzcas a mano en el TSX.

## 2. hreflang multilenguaje (crítico con next-intl)
- En `alternates.languages` mapea cada locale a su URL y añade `x-default`.
- Usa códigos correctos: `cn` (proyecto) → `zh-CN` en hreflang; `in` → `hi` (o `en-IN` según el idioma real del contenido). Confírmalo con el usuario.
- El canonical apunta a la versión del propio locale, no a la default.

## 3. sitemap.ts (multilenguaje)
`src/app/sitemap.ts` debe emitir cada ruta en sus 4 locales con `alternates.languages`:

```ts
import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE = "https://stratiumlegal.com";
const paths = ["", "/diario-oficial-federacion", "/company/terms"]; // rutas reales

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE}/${l}${path}`])
        ),
      },
    }))
  );
}
```

## 4. robots.ts
Permitir indexación, bloquear `/api/` y privados, y declarar el sitemap:

```ts
import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] }],
    sitemap: "https://stratiumlegal.com/sitemap.xml",
    host: "https://stratiumlegal.com",
  };
}
```

## 5. Datos estructurados JSON-LD (rich results)
Inyecta con `<script type="application/ld+json">` vía `dangerouslySetInnerHTML` (Next recomienda esto para JSON-LD). Para un bufete:

```tsx
function LegalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "AGM Abogados",
    url: "https://stratiumlegal.com",
    image: "https://stratiumlegal.com/og/home.jpg",
    areaServed: "MX",
    address: { "@type": "PostalAddress", addressCountry: "MX" },
    telephone: "+52-...",
    sameAs: [/* perfiles sociales */],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```
Tipos útiles según la sección: `Organization`, `LegalService`/`Attorney`, `BreadcrumbList`, `FAQPage` (para preguntas frecuentes), `Article` (para contenido del Diario Oficial). Valida en el Rich Results Test de Google.

## 6. HTML semántico (base del SEO on-page)
- **Un solo `<h1>` por página**; jerarquía `h1 → h2 → h3` sin saltos.
- `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, `<section>` con sentido.
- Enlaces internos descriptivos (anchor text con keyword, no "click aquí"). Usa el `Link` localizado de next-intl.
- `lang` correcto en `<html lang={locale}>` (en `[locale]/layout.tsx`).

## 7. Imágenes y rendimiento (Core Web Vitals)
- Usa `next/image` siempre: `alt` descriptivo, `priority` solo en la imagen LCP (hero), `sizes` correcto.
- Formatos modernos (AVIF/WebP), dimensiones explícitas para evitar CLS.
- Fuentes: `next/font` (o `font-euclid` con `font-display: swap`).
- 3D/animaciones pesadas con carga diferida (`next/dynamic ssr:false`) para no penalizar LCP/INP.
- OG image 1200×630.

## 8. PWA / manifest
`src/app/manifest.ts` con `name`, `short_name`, `theme_color` (#0A0E27 o #4688D4), iconos (192/512 + maskable), `start_url` y `display: "standalone"`.

## Checklist SEO por página
- [ ] `generateMetadata` con title (50–60) y description (140–160) localizados
- [ ] canonical correcto + `alternates.languages` con `x-default`
- [ ] Open Graph + Twitter card con imagen 1200×630
- [ ] JSON-LD adecuado (LegalService/FAQ/Breadcrumb) y validado
- [ ] Un `<h1>`, jerarquía semántica, enlaces internos descriptivos
- [ ] `next/image` con alt y LCP `priority`; sin CLS
- [ ] Ruta incluida en `sitemap.ts` (4 locales) y no bloqueada en `robots.ts`
- [ ] Textos SEO en los 4 archivos de `messages/`
