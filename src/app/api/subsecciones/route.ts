import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { decodePathname } from "@/lib/helpers/functions/encoderPathname";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const sectionId = url.searchParams.get("sectionId");
  const pathname =
    url.searchParams.get("pathname") &&
    decodePathname(url.searchParams.get("pathname")!);

 

  try {
    // 1. Si no se envía ningún parámetro, devolver 10 registros aleatorios
    if (!sectionId && !pathname) {
      const subsecciones = await prisma.subseccion.findMany({
        take: 10, // Limitar a 10 registros
        orderBy: { numeroOrden: "asc" }, // Puedes ordenar aleatoriamente si lo prefieres
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

    // 3. Si se envía el parámetro pathname, comportarse como antes
    if (pathname) {
      const subsecciones = await prisma.subseccion.findMany({
        where: { ruta: { startsWith: pathname } },
        orderBy: { numeroOrden: "asc" },
      });

      // Buscar la subsección con numeroOrden = 1
      const subseccionOrdenUno = subsecciones.find((s) => s.numeroOrden === 1);

      if (subseccionOrdenUno) {
        return NextResponse.json(subseccionOrdenUno, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "Subsección no encontrada" },
          { status: 404 }
        );
      }
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
