import { Bloque } from "@/components/Bloque";
import LogoModuloBlanco2 from "@/components/icons/LogoModuloBlanco2";

import React from "react";

const Modulo2 = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #2DAF33 0%, #A9D445 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen w-full h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6 max-w-screen"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-2" }}
          className="justify-self-start font-bold"
        >
          Verificación y Validación de la Documentación del Análisis de
          Requerimientos
        </h2>
        <LogoModuloBlanco2 className="w-[8rem] " color="white" />
      </section>
      <div className="mt-8 -border-2 flex max-w-screen w-[90vw] items-center justify-center gap-4 flex-wrap mb-10">
        <Bloque
          title="Conceptos Fundamentales de la Verificación y Validación (V&V)"
          href="/modulos/1/origen-evolucion-ingenieria-software"
        />
        <Bloque
          title="Verificación de la Documentación de Requerimientos"
          href="/modulos/1/calidad-software-conceptos-modelos-criterios"
        />
        <Bloque
          title="Validación de la Documentación de Requerimientos"
          href="/modulos/1/herramientas-calidad-software"
        />
        <Bloque
          title="Revisión Formal del Documento de Requerimientos"
          href="/modulos/1/normas-estandares-calidad-software"
        />
        <Bloque
          title="Herramientas para V&V en el Análisis de Requerimientos"
          href="/modulos/1/normas-estandares-calidad-software"
        />
      </div>
    </>
  );
};

export default Modulo2;
