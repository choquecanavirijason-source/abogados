import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alpha Global Market",
    short_name: "AGM",
    description: "Alpha Global Market landing site",
    start_url: "/",
    display: "standalone",
    background_color: "#050A14",
    theme_color: "#050A14",
    icons: [
      {
        src: "/icons/logo.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
