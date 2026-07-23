// Cloudflare Pages Function — scraping EN VIVO del DOF para la página completa.
// Se sirve automáticamente en /api/dof/editions (toma precedencia sobre el export estático).
import { getDofData } from "../../../src/lib/dof/getDofData"

export async function onRequestGet(): Promise<Response> {
  try {
    const data = await getDofData()
    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "public, max-age=0, s-maxage=1800",
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: "No se pudo obtener el DOF" }), {
      status: 502,
      headers: { "content-type": "application/json; charset=utf-8" },
    })
  }
}
