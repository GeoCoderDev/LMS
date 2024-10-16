

import LogoModuloBlanco2 from "@/components/icons/LogoModuloBlanco2";

import React from "react";

const page = () => {
  return (
    <>

      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #2DAF33 0%, #A9D445 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6"
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
    </>
  );
};

export default page;
