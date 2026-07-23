import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stratium Legal",
    short_name: "Stratium",
    description: "Cumplimiento legal corporativo remoto para empresas en México.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0E27",
    theme_color: "#0A0E27",
    icons: [
      {
        src: "/icons/logo.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
