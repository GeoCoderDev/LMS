import React from "react";
import FlechaDiagonal from "./icons/FlechaDiagonal";
import { Link } from "next-view-transitions";

export const Bloque = ({ title, href }: { title: string; href: string }) => {
  return (
    <div className="max-w-[min(20rem,80%)] p-8 border-black border-2 rounded-[1rem] gap-4 flex flex-col min-w-[min(20rem,80%)] justify-center">
      <h4 className="text-[1rem] font-semibold">{title}</h4>
      <Link
        href={href}
        as={href}
        className="text-[0.8rem] bg-black text-white flex gap-2 p-2 rounded-[0.5rem] items-center justify-center"
      >
        Ver Contenido
        <FlechaDiagonal className="w-[0.8rem]" color="white" />
      </Link>
    </div>
  );
};
