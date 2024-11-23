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
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { getNavigationPaths } from "@/lib/assets/ContenidoHelpers";

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

  const [prev, next] = [
    getNavigationPaths(currentPath, "prev"),
    getNavigationPaths(currentPath, "next"),
  ];

  return (
    <div className="flex items-center justify-start flex-wrap w-full px-6  py-4 border-[#7d7d7d30] border-t-2 gap-[max(1.5rem,2vw)] max-md:gap-[1rem]">
      <Link
        href={getUpperPath(currentPath) + "/quiz"}
        as={getUpperPath(currentPath) + "/quiz"}
        className="bg-[#6720C2] text-white px-4 py-2 rounded-[1rem] font-semibold"
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
            className="w-[2.25rem]"
            title="Ocultar Recursos"
          />
        ) : (
          <ShowResources
            color="#6720C2"
            className="w-[1.6rem] "
            title="Mostrar Recursos"
          />
        )}
      </button>
      {commandVoicesState !== CommandVoicesStates.LISTENING && (
        <button className=" -bg-black flex items-center justify-center sticky w-[2rem] h-[2rem] -border-2">
          {(commandVoicesState === CommandVoicesStates.SPEAKING && (
            <Detener
              onClick={() => {
                stopListeningOrSpeaking();
              }}
              className="w-[1.7rem]"
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
                className="w-[1.8rem] "
                color="#6720C2"
                title="Leer"
              />
            ))}
        </button>
      )}
      <Compartir className="w-[1.8rem]" color="#6720C2" title="Compartir" />

      {prev.path && (
        <Link
          href={prev.path}
          as={prev.path}
          title={prev.title!}
          className="p-0"
        >
          <ArrowBigLeft color="#6720C2" size={"1.8rem"} />
        </Link>
      )}
      {next.path && (
        <Link href={next.path} title={next.title!} className="p-0">
          <ArrowBigRight color="#6720C2" size={"1.8rem"} />{" "}
        </Link>
      )}
    </div>
  );
};

export default ToolsBar;
