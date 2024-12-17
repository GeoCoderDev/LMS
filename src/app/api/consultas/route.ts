import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    try {

        //comentado temporalmente
        const { nombre, apellidos, correo, numero, mensaje } = await request.json();
        // const { usuario, contrasenia } = await request.json();

        // Validar que todos los campos están presentes
        // if (!usuario || !contrasenia) {
        //     return NextResponse.json(
        //         { error: 'Todos los campos son obligatorios y deben completarse.' },
        //         { status: 400 }
        //     );
        // }
        if (!nombre || !apellidos || !correo || !numero || !mensaje) {
            return NextResponse.json(
                { error: 'Todos los campos son obligatorios y deben completarse.' },
                { status: 400 }
            );
        }


        // Crear una nueva consulta
        // Comentado temporalmente
        const nuevaConsulta = await prisma.consultas.create({
            data: {
                nombre,
                apellidos,
                correo,
                numero,
                mensaje,
            },
        });

        //Obtener el usaurio ingresado en el formulario de login
        // const usuarioCorrecto = await prisma.consultas.findMany({
        //     where: { correo: usuario, numero: contrasenia },
        // });

        // console.log(usuarioCorrecto);

        // if (usuarioCorrecto.length === 0) {
        //     return NextResponse.json(
        //         { error: "Usuario no encontrado" },
        //         { status: 404 }
        //     );
        // }
        // return NextResponse.json(
        //     { message: 'Datos encontrados correctamente' },
        //     { status: 201 },
        // );

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
            orderBy: { creadoEn: 'desc' }, // Ordenar por fecha de creación
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
