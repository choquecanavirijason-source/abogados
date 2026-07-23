import { getDofData } from "@/lib/dof/getDofData"
import { NextResponse } from "next/server"

/** Permite incluir esta ruta en `output: 'export'` (respuesta fijada en build). */
export const dynamic = "force-static"

export async function GET() {
  try {
    const data = await getDofData()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[api/dof/editions]", error)
    return NextResponse.json({ error: "No se pudo obtener el DOF" }, { status: 502 })
  }
}
