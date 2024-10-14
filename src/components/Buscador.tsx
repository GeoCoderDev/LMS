"use client";
import React, { FormEventHandler } from "react";
import Lupa from "./icons/Lupa";

const Buscador = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-3 "
    >
      <Lupa className="w-[1.4rem]" color="black" />
      <input
        className="border-2 outline-1 border-black text-[0.8rem] rounded-[1rem] w-[min(40rem,70vw)] p-2"
        type="search"
        name=""
        id=""
      />
    </form>
  );
};

export default Buscador;
