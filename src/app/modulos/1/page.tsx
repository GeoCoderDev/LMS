
import LogoModuloBlanco1 from "@/components/icons/LogoModuloBlanco1";

import React from "react";

const Modulo1 = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #1E40AF 0%, #03ACCD 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen w-screen h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-1" }}
          className="justify-self-start font-bold"
        >
          Origen, Modelos, Normas y Herramientas para la Calidad del Software
        </h2>
        <LogoModuloBlanco1 className="w-[8rem] " color="white" />
      </section>
    </>
  );
};

export default Modulo1;
