import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Obtener todos los resultados
export async function GET() {
  try {
    const resultados = await prisma.seccion.findMany({});
    return NextResponse.json(resultados, { status: 200 });
  } catch (error) {
    console.error("Error al obtener resultados:", error);
    return NextResponse.json(
      { message: "Error al obtener resultados" },
      { status: 500 }
    );
  }
}
