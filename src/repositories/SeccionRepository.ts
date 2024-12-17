import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const SeccionRepository = {
  async findByModuloId(moduloId: string) {
    return prisma.seccion.findMany({
      where: { moduloId },
      include: { subsecciones: true },
    });
  },

  async findByIndice(indice: string) {
    return prisma.seccion.findFirst({
      where: { indice },
      include: { subsecciones: true },
    });
  },
};
