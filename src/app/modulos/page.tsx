import ModuleCard from "@/components/ModuleCard";
import React from "react";

const Modulos = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 h-[100dvh] w-screen gap-8">
      <span
        style={{ viewTransitionName: "titulo-modulos" }}
        className="text-[2rem] lg:text-[2.2rem] "
      >
        Modulos
      </span>

      <div className="min-w-min min-h-min gap-8 grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] content-stretch">
        <ModuleCard
          id={1}
          titulo="Origen, Modelos, Normas y Herramientas para la Calidad del Software"
        />
        <ModuleCard
          id={2}
          titulo="Verificación y Validación de la Documentación del Análisis de Requerimientos"
        />
        <ModuleCard
          id={3}
          titulo="Verificación y Validación de la Documentación del Diseño del Sistema"
        />
        <ModuleCard
          id={4}
          titulo="Factores Críticos de Éxito para el Desarrollo del Software"
        />
      </div>
    </div>
  );
};

export default Modulos;
