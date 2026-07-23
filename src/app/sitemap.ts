import type { MetadataRoute } from "next"
import { routing } from "@/i18n/routing"

export const dynamic = "force-static"

const SITE_URL = "https://stratiumlegal.com"

/** Rutas públicas (sin el prefijo de idioma). */
const paths = ["", "/diario-oficial-federacion"]

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "daily",
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
        ),
      },
    }))
  )
}
