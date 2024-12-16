import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, apellidos, correo, numero, mensaje } = req.body;

        try {
            const nuevaConsulta = await prisma.consultas.create({
                data: {
                    nombre,
                    apellidos,
                    correo,
                    numero,
                    mensaje,
                },
            });

            return res.status(200).json({ message: 'Consulta creada correctamente', nuevaConsulta });
        } catch (error) {
            console.error('Error al guardar la consulta:', error);
            return res.status(500).json({ error: 'Error al guardar la consulta' });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
}
