import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// POST: Crear un nuevo resultado
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const {
      seccionId,
      puntajeObtenido,
      puntajeTotal,
      cantidadTotalPreguntas,
      direccionIp,
      navegador,
      sistemaOperativo,
    } = data;

    // Validar campos obligatorios
    if (
      !seccionId ||
      !puntajeObtenido ||
      !puntajeTotal ||
      !cantidadTotalPreguntas
    ) {
      return NextResponse.json(
        { message: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    const resultado = await prisma.resultadoCuestionario.create({
      data: {
        seccionId,
        puntajeObtenido,
        puntajeTotal,
        cantidadTotalPreguntas,
        direccionIp,
        navegador,
        sistemaOperativo,
      },
    });

    return NextResponse.json(resultado, { status: 201 });
  } catch (error) {
    console.error("Error al crear resultado:", error);
    return NextResponse.json(
      { message: "Error al crear resultado" },
      { status: 500 }
    );
  }
}

// GET: Obtener todos los resultados
export async function GET() {
  try {
    const resultados = await prisma.resultadoCuestionario.findMany({
      include: { Seccion: true },
    });
    return NextResponse.json(resultados, { status: 200 });
  } catch (error) {
    console.error("Error al obtener resultados:", error);
    return NextResponse.json(
      { message: "Error al obtener resultados" },
      { status: 500 }
    );
  }
}

// PUT: Actualizar un resultado por ID
export async function PUT(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "El ID del resultado es obligatorio" },
        { status: 400 }
      );
    }

    const resultadoActualizado = await prisma.resultadoCuestionario.update({
      where: { id },
      data,
    });

    return NextResponse.json(resultadoActualizado, { status: 200 });
  } catch (error) {
    console.error("Error al actualizar resultado:", error);
    return NextResponse.json(
      { message: "Error al actualizar resultado" },
      { status: 500 }
    );
  }
}

// DELETE: Eliminar un resultado por ID
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "El ID del resultado es obligatorio" },
        { status: 400 }
      );
    }

    await prisma.resultadoCuestionario.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Resultado eliminado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al eliminar resultado:", error);
    return NextResponse.json(
      { message: "Error al eliminar resultado" },
      { status: 500 }
    );
  }
}
