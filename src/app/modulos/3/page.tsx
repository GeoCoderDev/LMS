import { Bloque } from "@/components/Bloque";
import LogoModuloBlanco3 from "@/components/icons/LogoModuloBlanco3";
import React from "react";

const page = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #7B1FA2 0%, #CC73CB 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen h-min flex items-center justify-items-center content-center justify-center -md:justify-between flex-wrap text-white p-8 text-[1.5rem] gap-6 w-full"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-3" }}
          className="justify-self-start font-bold"
        >
          Verificación y Validación de la Documentación del Diseño del Sistema
        </h2>
        <LogoModuloBlanco3 className="w-[8rem] " color="white" />
      </section>
      <div className="mt-8 -border-2 flex max-w-screen w-[90vw] items-center justify-center gap-4 flex-wrap mb-10">
        <Bloque
          title="Conceptos Fundamentales del Diseño del Sistema"
          href="/modulos/1/origen-evolucion-ingenieria-software"
          id={1}
          moduleNumber={3}
        />
        <Bloque
          title="Verificación de la Documentación del Diseño"
          href="/modulos/1/calidad-software-conceptos-modelos-criterios"
          id={2}
          moduleNumber={3}
        />
        <Bloque
          title="Validación de la Documentación del Diseño"
          href="/modulos/1/herramientas-calidad-software"
          id={3}
          moduleNumber={3}
        />
        <Bloque
          title="Revisión Formal del Diseño del Sistema"
          href="/modulos/1/normas-estandares-calidad-software"
          id={4}
          moduleNumber={3}
        />
        <Bloque
          title="Herramientas para la Verificación y Validación del Diseño"
          href="/modulos/1/normas-estandares-calidad-software"
          id={5}
          moduleNumber={3}
        />
      </div>
    </>
  );
};

export default page;
