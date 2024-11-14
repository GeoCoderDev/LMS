"use client";
import React, { FormEventHandler, MutableRefObject, useRef } from "react";
import Lupa from "./icons/Lupa";
import { buscarSubseccionesPorTitulo } from "./shared/CebeceraConBuscador";

const Buscador = () => {
  const inputSearchRef = useRef<HTMLInputElement>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");

    if (!inputSearchRef.current) return;

    console.log(buscarSubseccionesPorTitulo(inputSearchRef.current.value));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 "
      id="formulario-busqueda"
    >
      <Lupa className="w-[1.4rem]" color="black" />
      <input
        ref={inputSearchRef as MutableRefObject<HTMLInputElement>}
        className="bg-[#00000000] border-2 outline-1 border-black text-[0.8rem] rounded-[1rem] w-[min(40rem,70vw)] p-2"
        type="search"
        name=""
        id="buscador-global"
      />
    </form>
  );
};

export default Buscador;
