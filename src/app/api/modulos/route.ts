import {
  crearSeccion,
  createSubseccion,
} from "@/lib/helpers/functions/temporalCreators";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    crearSeccion();
    // createSubseccion();

    // Obtener el parámetro `id` de la URL si existe
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Si se proporciona `id`, obtener el módulo específico
      const modulo = await prisma.modulo.findUnique({
        where: { id },
        include: { secciones: true },
      });

      if (!modulo) {
        return NextResponse.json(
          { error: "Modulo not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(modulo, { status: 200 });
    }

    // Si no hay `id`, devolver todos los módulos
    const modulos = await prisma.modulo.findMany({
      include: { secciones: true },
    });

    return NextResponse.json(modulos, { status: 200 });
  } catch (error) {
    console.error("Error fetching modulos:", error);
    return NextResponse.json(
      { error: "Error fetching modulos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { indice, titulo, descripcion, numeroOrden } = await req.json();

    const modulo = await prisma.modulo.create({
      data: { descripcion, indice, numeroOrden, titulo },
    });

    return NextResponse.json(modulo, { status: 201 });
  } catch (error) {
    console.error("Error creating modulo:", error);
    return NextResponse.json(
      { error: "Error creating modulo" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await req.json();

    const updatedModulo = await prisma.modulo.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedModulo, { status: 200 });
  } catch (error) {
    console.error("Error updating modulo:", error);
    return NextResponse.json(
      { error: "Error updating modulo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.modulo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Modulo deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting modulo:", error);
    return NextResponse.json(
      { error: "Error deleting modulo" },
      { status: 500 }
    );
  }
}
