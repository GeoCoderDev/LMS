import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const ModuloRepository = {


  async findByIndice(indice: string) {
    return prisma.modulo.findUnique({
      where: { indice },
      include: {
        secciones: {
          include: {
            subsecciones: true, // Incluye subsecciones dentro de cada sección
          },
        },
      },
    });
  },

  async findAll() {
    return prisma.modulo.findMany({
      include: { secciones: true },
    });
  },

  
};
