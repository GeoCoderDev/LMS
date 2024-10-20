import { Bloque } from "@/components/Bloque";
import LogoModuloBlanco1 from "@/components/icons/LogoModuloBlanco1";

import React from "react";

const Modulo1 = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #1E40AF 0%, #03ACCD 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen w-full h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-1" }}
          className="justify-self-start font-bold"
        >
          Origen, Modelos, Normas y Herramientas para la Calidad del Software
        </h2>
        <LogoModuloBlanco1 className="w-[8rem] " color="white" />
      </section>
      <div className="mt-8 -border-2 flex max-w-screen w-[90vw] items-center justify-center gap-4 flex-wrap mb-10">
        <Bloque
          title="Origen y Evolución de la Ingeniería de Software"
          href="/modulos/1/origen-evolucion-ingenieria-software"
        />
        <Bloque
          title="Calidad del Software: Conceptos, Modelos y Criterios"
          href="/modulos/1/calidad-software-conceptos-modelos-criterios"
        />
        <Bloque
          title="Herramientas para la Calidad del Software"
          href="/modulos/1/herramientas-calidad-software"
        />
        <Bloque
          title="Normas y Estándares de Calidad en el Software"
          href="/modulos/1/normas-estandares-calidad-software"
        />
      </div>
    </>
  );
};

export default Modulo1;
