import React from "react";
import { IconProps } from "./icons/Icons";
import FlechaDiagonal from "./icons/FlechaDiagonal";
import { Link } from "next-view-transitions";

const ModuleCard = ({
  numeroOrden,
  titulo,
  LogoTSX,
  texto,
  brokenBackgroundColor,
  backgroundButtonGradient,
}: {
  numeroOrden: number;
  titulo: string;
  LogoTSX: ({}: IconProps) => React.ReactNode;
  texto: string;
  brokenBackgroundColor: string;
  backgroundButtonGradient: string;
}) => {
  return (
    <div
      style={{ viewTransitionName: `modulo-splash-${numeroOrden}` }}
      className="overflow-hidden -p-4 flex flex-col items-center justify-center  min-w-[10rem] max-w-full min-h-[10rem] -border-2 border-black rounded-[1rem] h-full shadow-[0px_0px_8px_2px_#00000080]"
    >
      <div
        style={{ backgroundColor: brokenBackgroundColor }}
        className=" flex flex-1 items-center justify-center  -min-h-min w-full py-4 h-[12rem] min-h-[12rem]"
      >
        <LogoTSX className="w-[8rem]" />
      </div>
      <div className="p-4 w-full flex flex-col items-center justify-center gap-2 ">
        <span className="self-start text-[#4A5568] font-semibold text-[0.8rem]">
          Modulo 0{numeroOrden}
        </span>
        <h3
          className="font-bold self-start"
          style={{ viewTransitionName: `titulo-modulo-${numeroOrden}` }}
        >
          {titulo}
        </h3>
        <p className="text-[0.8rem]">{texto}</p>
        <Link href={`modulos/${numeroOrden}`} as={`modulos/${numeroOrden}`}>
          <button
            style={{ backgroundImage: backgroundButtonGradient }}
            className="flex items-center justify-center gap-2 bg-black text-white p-2 px-2 rounded-[0.5rem] font-semibold text-[0.8rem] mt-2"
          >
            Ver Contenido
            <FlechaDiagonal color="white" className="w-[0.8rem]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ModuleCard;
