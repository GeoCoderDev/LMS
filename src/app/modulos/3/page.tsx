

import LogoModuloBlanco3 from "@/components/icons/LogoModuloBlanco3";
import React from "react";

const page = () => {
  return (
    <>

      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #7B1FA2 0%, #CC73CB 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-3" }}
          className="justify-self-start font-bold"
        >
          Origen, Modelos, Normas y Herramientas para la Calidad del Software
        </h2>
        <LogoModuloBlanco3 className="w-[8rem] " color="white" />
      </section>
    </>
  );
};

export default page;
