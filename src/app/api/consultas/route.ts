import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {

    try {
        const { nombre, apellidos, correo, numero, mensaje } = await request.json();
        if (!nombre || !apellidos || !correo || !numero || !mensaje) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios y deben completarse.' },
                { status: 400 }
            );
        }

        const nuevaConsulta = await prisma.consultas.create({
            data: {
                nombre,
                apellidos,
                correo,
                numero,
                mensaje,
            },
        });

        return NextResponse.json(
            { message: 'Consulta creada correctamente.', consulta: nuevaConsulta },
            { status: 201 }
        );


    } catch (error) {
        console.error('Error al crear la consulta:', error);

        return NextResponse.json(
            { error: 'Ocurrió un error al procesar la consulta.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const consultas = await prisma.consultas.findMany({
            orderBy: { creadoEn: 'desc' },
        });

        return NextResponse.json(consultas, { status: 200 });
    } catch (error) {
        console.error('Error al obtener las consultas:', error);
        return NextResponse.json(
            { error: 'Ocurrió un error al obtener las consultas.' },
            { status: 500 }
        );
    }
}
