import React from "react";
import ShowResources from "../icons/ShowResources";
import HideResources from "../icons/HideResources";
import Sonido from "../icons/Sonido";
import Detener from "../icons/Detener";
import Compartir from "../icons/Compartir";
import { Link } from "next-view-transitions";
import { getUpperPath } from "@/lib/helpers/functions/getUpperPath";

const ToolsBar = ({
  viewResources,
  setViewResources,
  currentPath,
}: {
  viewResources: boolean;
  setViewResources: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath: string;
}) => {
  return (
    <div className="flex items-center justify-start flex-wrap w-full px-6  py-4 border-[#7d7d7d30] border-t-2 gap-[max(1.5rem,2vw)]">
      <Link
        href={getUpperPath(currentPath) + "/quiz"}
        as={getUpperPath(currentPath) + "/quiz"}
        className="bg-[#6720C2] text-white px-5 py-2 rounded-[1rem] font-semibold"
      >
        Ir al Quiz
      </Link>

      <button
        onClick={() => {
          setViewResources(!viewResources);
        }}
        className=" -bg-black flex items-center justify-center sticky w-[2rem] h-[2rem] -border-2"
      >
        {viewResources ? (
          <HideResources
            color="#6720C2"
            className="w-[2.65rem]"
            title="Ocultar Recursos"
          />
        ) : (
          <ShowResources
            color="#6720C2"
            className="w-[2rem] "
            title="Mostrar Recursos"
          />
        )}
      </button>
      <button
        onClick={() => {
          setViewResources(!viewResources);
        }}
        className=" -bg-black flex items-center justify-center sticky w-[2rem] h-[2rem] -border-2"
      >
        {viewResources ? (
          <Sonido className="w-[2.1rem] " color="#6720C2" title="Leer" />
        ) : (
          <Detener className="w-[2rem]" color="#c62525" title="Dejar de leer" />
        )}
      </button>
      <Compartir className="w-[1.8rem]" color="#6720C2" title="Compartir" />
    </div>
  );
};

export default ToolsBar;
