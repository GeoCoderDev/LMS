import LogoModulo1 from "@/components/icons/LogoModulo1";
import LogoModulo2 from "@/components/icons/LogoModulo2";
import LogoModulo3 from "@/components/icons/LogoModulo3";
import LogoModulo4 from "@/components/icons/LogoModulo4";
import ModuleCard from "@/components/ModuleCard";
import React from "react";

const Modulos = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-[100dvh] h-min max-w-[100vw] -overflow-hidden gap-4">
      <header className="sticky top-0 w-full flex flex-col items-center justify-center bg-[#ffffff75] border-black border-b-[1px] -shadow-[0px_0px_10px_2px_#00000025] h-min z-[2] py-2 [backdrop-filter:blur(10px)]">
        <button>Inicio</button>
        <span
          style={{ viewTransitionName: "titulo-modulos" }}
          className="text-[2rem] lg:text-[2.2rem]"
        >
          Modulos
        </span>
      </header>

      <div className="-border-2 w-[70vw] min-h-min gap-8 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] grid-rows-[1fr] auto-rows-[1fr] content-stretch items-center justify-center justify-items-center mb-12">
        <ModuleCard
          id={1}
          titulo="Origen, Modelos, Normas y Herramientas para la Calidad del Software"
          LogoTSX={({ className, color, title }) => (
            <LogoModulo1 className={className} color={color} title={title} />
          )}
          texto="Descubre el origen de la ingeniería de software y cómo los modelos, normas y herramientas aseguran la calidad en cada etapa del desarrollo."
          brokenBackgroundColor="#E6F3FF"
          backgroundButtonGradient="linear-gradient(90deg, #1E40AF 0%, #03ACCD 100%)"
        />

        <ModuleCard
          id={2}
          titulo="Verificación y Validación de la Documentación del Análisis de Requerimientos"
          LogoTSX={({ className, color, title }) => (
            <LogoModulo2 className={className} color={color} title={title} />
          )}
          texto="Descubre cómo la Verificación y Validación de la Documentación del Análisis de Requerimientos te ayuda a construir un software a prueba de fallos."
          brokenBackgroundColor="#EAFFE8"
          backgroundButtonGradient="linear-gradient(90deg, #2DAF33 0%, #A9D445 100%)"
        />
        <ModuleCard
          id={3}
          titulo="Verificación y Validación de la Documentación del Diseño del Sistema"
          LogoTSX={({ className, color, title }) => (
            <LogoModulo3 className={className} color={color} title={title} />
          )}
          texto={
            "¡Descubre la importancia de un diseño sólido! Asegúrate de que cada elemento de tu sistema funcione como debe."
          }
          brokenBackgroundColor="#E9D1F3"
          backgroundButtonGradient="linear-gradient(90deg, #7B1FA2 0%, #CC73CB 100%)"
        />
        <ModuleCard
          id={4}
          titulo="Factores Críticos de Éxito para el Desarrollo del Software"
          LogoTSX={({ className, color, title }) => (
            <LogoModulo4 className={className} color={color} title={title} />
          )}
          texto={
            "Descubre los factores esenciales que aseguran el éxito en el desarrollo de software. Conoce las claves para evitar errores y maximizar resultados."
          }
          brokenBackgroundColor="#FFE5BE"
          backgroundButtonGradient="linear-gradient(90deg, #D35400 0%, #F39C12 100%)"
        />
      </div>
    </div>
  );
};

export default Modulos;
