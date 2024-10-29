import { Link } from "next-view-transitions";
import React from "react";
import Buscador from "../Buscador";
import Casa from "../icons/Casa";

const CebeceraConBuscador = () => {
  return (
    <header style={{boxShadow:"0 0 5px 2px #00000030"}} className="sticky top-0 w-full flex  items-center justify-between px-[3vw] bg-[#ffffff80] border-black -border-b-[1px] -shadow-[0px_0px_10px_2px_#00000025] h-max py-4 z-[2] [backdrop-filter:blur(10px)] gap-4 ">
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
  );
};

export default CebeceraConBuscador;
