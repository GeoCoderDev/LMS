

import LogoModuloBlanco4 from "@/components/icons/LogoModuloBlanco4";

import React from "react";

const page = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #D35400 0%, #F39C12 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-4" }}
          className="justify-self-start font-bold"
        >
          Origen, Modelos, Normas y Herramientas para la Calidad del Software
        </h2>
        <LogoModuloBlanco4 className="w-[8rem] " color="white" />
      </section>
    </>
  );
};

export default page;
