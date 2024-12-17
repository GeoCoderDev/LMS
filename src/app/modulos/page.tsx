import ModuleCard from "@/components/ModuleCard";
import { ModuleFeatures } from "@/lib/assets/ModuleFeatures";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();

const Modulos = async () => {
  try {
    // Obtener todos los módulos desde la base de datos
    const modulos = await prisma.modulo.findMany({
      include: { secciones: false },
    });

    // Verificar si no hay módulos disponibles
    if (modulos.length === 0) {
      return (
        <span className="text-gray-500 font-semibold text-xl">
          Aún no hay módulos disponibles. Vuelve más tarde.
        </span>
      );
    }

    return (
      <div className="flex items-center justify-center flex-col min-h-[100dvh] h-min -border-2 max-w-[100vw] -overflow-hidden gap-4">
        <span
          style={{ viewTransitionName: "titulo-modulos" }}
          className="text-[2rem] lg:text-[2.2rem] mt-4 mb-3"
        >
          Modulos
        </span>
        <div className="-border-2 w-[70vw] min-h-min gap-8 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] grid-rows-[1fr] auto-rows-[1fr] content-stretch items-center justify-center justify-items-center mb-12">
          {modulos.map(({ descripcion, id, numeroOrden, titulo }) => (
            <ModuleCard
              key={id}
              numeroOrden={numeroOrden}
              backgroundButtonGradient={
                ModuleFeatures[numeroOrden - 1].backgroundButtonGradient
              }
              LogoTSX={ModuleFeatures[numeroOrden - 1].LogoTSX}
              brokenBackgroundColor={
                ModuleFeatures[numeroOrden - 1].brokenBackgroundColor
              }
              texto={descripcion}
              titulo={titulo}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al cargar los módulos:", error);

    // Mostrar mensaje de error si ocurre un problema
    return (
      <span className="text-red-500 font-bold text-xl">
        Ocurrió un error al cargar los módulos. Por favor, intenta más tarde.
      </span>
    );
  }
};

export default Modulos;
