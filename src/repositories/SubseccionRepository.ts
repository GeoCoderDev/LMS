import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const SubseccionRepository = {
  async findBySeccionId(seccionId: string) {
    return prisma.subseccion.findMany({
      where: { seccionId },
    });
  },
};
