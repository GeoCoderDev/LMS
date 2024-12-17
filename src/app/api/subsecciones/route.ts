import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const sectionId = url.searchParams.get("sectionId");

  try {
    // 1. Si no se envía ningún parámetro, devolver 10 registros aleatorios
    if (!sectionId) {
      const subsecciones = await prisma.subseccion.findMany({
        take: 10, // Limitar a 10 registros
        orderBy: { numeroOrden: "asc" },
      });
      return NextResponse.json(subsecciones, { status: 200 });
    }

    // 2. Si se envía el parámetro sectionId, devolver todas las subsecciones con esa sectionId
    if (sectionId) {
      const subsecciones = await prisma.subseccion.findMany({
        where: { seccionId: sectionId },
      });
      return NextResponse.json(subsecciones, { status: 200 });
    }

    // En caso de que no se pase ninguno de los parámetros
    return NextResponse.json(
      { message: "Parámetros inválidos" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Error al obtener subsecciones:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { pathname } = await request.json();  // Obtenemos el pathname desde el cuerpo de la solicitud

    if (!pathname) {
      return NextResponse.json(
        { message: "El parámetro 'pathname' es obligatorio" },
        { status: 400 }
      );
    }

    // Buscar subsecciones que comiencen con la ruta proporcionada
    const subsecciones = await prisma.subseccion.findMany({
      where: { ruta: { startsWith: pathname } },
      orderBy: { numeroOrden: "asc" },
    });

    // Devolver todas las subsecciones que coinciden con el 'pathname'
    return NextResponse.json(subsecciones, { status: 200 });
  } catch (error) {
    console.error("Error al obtener subsecciones por pathname:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
