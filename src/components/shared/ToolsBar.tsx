"use client";
import React from "react";
import ShowResources from "../icons/ShowResources";
import HideResources from "../icons/HideResources";
import Sonido from "../icons/Sonido";
import Detener from "../icons/Detener";
import Compartir from "../icons/Compartir";
import { Link } from "next-view-transitions";
import { getUpperPath } from "@/lib/helpers/functions/getUpperPath";
import useCommandVoices from "@/lib/hooks/useCommandVoices";
import { CommandVoicesStates } from "@/lib/interfaces/CommandVoicesState";

import { getCurrentToRead } from "@/lib/assets/Contenido";

const ToolsBar = ({
  viewResources,
  setViewResources,
  currentPath,
}: {
  viewResources: boolean;
  setViewResources: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath: string;
}) => {
  const contentToRead = getCurrentToRead(currentPath);
  const { commandVoicesState, stopListeningOrSpeaking, readMessage } =
    useCommandVoices(currentPath);

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
      <button className=" -bg-black flex items-center justify-center sticky w-[2rem] h-[2rem] -border-2">
        {(commandVoicesState === CommandVoicesStates.SPEAKING && (
          <Detener
            onClick={() => {
              stopListeningOrSpeaking();
            }}
            className="w-[2rem]"
            color="#c62525"
            title="Dejar de leer"
          />
        )) ||
          (commandVoicesState === CommandVoicesStates.IDLE && (
            <Sonido
              onClick={() => {
                if (!contentToRead) return;
                readMessage(contentToRead);
              }}
              className="w-[2.1rem] "
              color="#6720C2"
              title="Leer"
            />
          ))}
      </button>
      <Compartir className="w-[1.8rem]" color="#6720C2" title="Compartir" />
    </div>
  );
};

export default ToolsBar;
