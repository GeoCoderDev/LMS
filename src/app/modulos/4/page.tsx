import Buscador from "@/components/Buscador";
import Casa from "@/components/icons/Casa";
import LogoModuloBlanco1 from "@/components/icons/LogoModuloBlanco1";
import { Link } from "next-view-transitions";
import React from "react";

const page = () => {
  return (
    <>
      <header className="sticky top-0 w-full flex  items-center justify-between px-[3vw] bg-[#ffffff] border-black -border-b-[1px] -shadow-[0px_0px_10px_2px_#00000025] h-max py-4 z-[2] -[backdrop-filter:blur(10px)] gap-4">
        <Link href={"/"} as={"/"}>
          <span
            className="text-white bg-black"
            style={{ viewTransitionName: "titulo-inicio" }}
          >
            <Casa className="w-[2rem] " color="black" />
          </span>
        </Link>
        <Buscador />
      </header>
      <section
        style={{
          backgroundImage: "linear-gradient(90deg, #1E40AF 0%, #03ACCD 100%)",
        }}
        className="bg-[#1E40AF] max-w-screen h-min flex items-center justify-items-center content-center  justify-center -md:justify-between flex-wrap  text-white p-8 text-[1.5rem] gap-6"
      >
        <h2
          style={{ viewTransitionName: "titulo-modulo-4 self" }}
          className="justify-self-start font-bold"
        >
          Origen, Modelos, Normas y Herramientas para la Calidad del Software
        </h2>
        <LogoModuloBlanco1 className="w-[8rem] " color="white" />
      </section>
    </>
  );
};

export default page;
