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
          href="/modulos/2/conceptos-fundamentales-vyv"
          id={1}
          moduleNumber={2}
        />
        <Bloque
          title="Verificación de la Documentación de Requerimientos"
          href="/modulos/2/verificacion-documentacion-requerimientos"
          id={2}
          moduleNumber={2}
        />
        <Bloque
          title="Validación de la Documentación de Requerimientos"
          href="/modulos/2/validacion-documentacion-requerimientos"
          id={3}
          moduleNumber={2}
        />
        <Bloque
          title="Revisión Formal del Documento de Requerimientos"
          href="/modulos/2/revision-formal-documento-requerimientos"
          id={4}
          moduleNumber={2}
        />
        <Bloque
          title="Herramientas para V&V en el Análisis de Requerimientos"
          href="/modulos/2/herramientas-vyv-analisis-requerimientos"
          id={5}
          moduleNumber={2}
        />
      </div>
    </>
  );
};

export default Modulo2;
