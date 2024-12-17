import { Bloque } from "@/components/Seccion";
import LogoModuloBlanco4 from "@/components/icons/LogoModuloBlanco4";

import React from "react";

const page = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #D35400 0%, #F39C12 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap w-full text-white p-8 text-[1.5rem] gap-6"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-4" }}
          className="justify-self-start font-bold"
        >
          Factores críticos de éxito para el desarrollo del software
        </h2>
        <LogoModuloBlanco4 className="w-[8rem] " color="white" />
      </section>
      <div className="mt-8 -border-2 flex max-w-screen w-[90vw] items-stretch justify-center gap-4 flex-wrap mb-10">
        <Bloque
          title="Definición y Características de los Factores Críticos de Éxito"
          href="/modulos/4/definicion-caracteristicas-factores-criticos-exito"
          id={1}
          moduleNumber={4}
        />
        <Bloque
          title="Factores Técnicos Críticos para el Desarrollo del Software"
          href="/modulos/4/factores-tecnicos-criticos-desarrollo-software"
          id={2}
          moduleNumber={4}
        />
        <Bloque
          title="Factores Humanos en el Desarrollo de Software"
          href="/modulos/4/factores-humanos-desarrollo-software"
          id={3}
          moduleNumber={4}
        />
        <Bloque
          title="Factores Organizacionales Críticos"
          href="/modulos/4/factores-organizacionales-criticos"
          id={4}
          moduleNumber={4}
        />
        <Bloque
          title="Metodologías y Procesos como Factores de Éxito"
          href="/modulos/4/metodologias-procesos-factores-exito"
          id={5}
          moduleNumber={4}
        />
        <Bloque
          title="Factores Externos"
          href="/modulos/4/factores-externos"
          id={6}
          moduleNumber={4}
        />
        <Bloque
          title="Ejemplos de Factores Críticos de Éxito en Proyectos Reales"
          href="/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales"
          id={7}
          moduleNumber={4}
        />
      </div>
    </>
  );
};

export default page;
