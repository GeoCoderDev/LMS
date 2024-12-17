"use client";
import React from "react";
import { Link } from "next-view-transitions";

const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={`sticky h-[10dvh] max-h-[100px] -border-b-[1px] border-black max-w-screen z-[4] flex justify-center gap-10 items-center ${className}`}
    >
      <Link href={"/"}>
        <span
          style={{ viewTransitionName: "titulo-inicio" }}
          className="text-[1rem] lg:text-[1.1rem] cursor-pointer"
        >
          Inicio
        </span>
      </Link>
      <Link href={"/modulos"}>
        <span
          style={{ viewTransitionName: "titulo-modulos" }}
          className="text-[1rem] lg:text-[1.1rem] cursor-pointer"
        >
          Modulos
        </span>
      </Link>
      <Link href={"/acerca_de"}>
        <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
          Acerca de
        </span>
      </Link>
      <Link href={"/contacto"}>
        <span className="text-[1rem] lg:text-[1.1rem] cursor-pointer">
          Contacto
        </span>
      </Link>
    </header>
  );
};

export default Header;
