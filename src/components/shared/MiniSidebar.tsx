/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Link } from "next-view-transitions";
import React, { useState, useEffect } from "react";
import ChevronDerecha from "../icons/ChevronDerecha";
import { useDelegacionEventos } from "@/lib/utils/delegacionDeEventos";
import { contenido, getSubsecciones } from "../../lib/assets/Contenido";
import { usePathname } from "next/navigation";

const MAX_LENGTH = 7;

const MiniSidebar = () => {
  const [viewMiniSidebar, setViewMiniSidebar] = useState(false);

  const { delegarEvento, eliminarEvento } = useDelegacionEventos();
  const path = usePathname();

  const currentSubsections = getSubsecciones(path);

  useEffect(() => {
    if (!(delegarEvento && eliminarEvento)) return;
    const idDelegacion = delegarEvento!(
      "click",
      "#mini-sidebar, #mini-sidebar *, #button-mini-sidebar, #button-mini-sidebar *",
      () => {
        setViewMiniSidebar(false);
      },
      true
    );

    return () => {
      eliminarEvento!("click", idDelegacion);
    };
  }, [delegarEvento, eliminarEvento]);

  return delegarEvento && eliminarEvento ? (
    <div
      style={{ transitionDuration: "150ms" }}
      className={`sticky w-min left-0 ${
        viewMiniSidebar
          ? "-translate-x-[2.2rem]"
          : "-translate-x-[calc(100%+0.5rem)]"
      } top-[calc(50%+0.2rem)] translate-y-[50%] items-center flex h-[100%] border-blue-500 border-2 -border-blue-500 w-full`}
    >
      <div
        id="mini-sidebar"
        style={{
          borderTopRightRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
        className="flex flex-col items-start justify-center flex-wrap bg-black text-white p-4 z-[1] w-max h-min overflow-auto max-w-[40vw] max-md:max-w-[80vw] gap-2"
      >
        {currentSubsections &&
          currentSubsections.map((subseccion, index) => {
            return (
              <Link
                className="text-[0.9rem]"
                key={subseccion.path}
                href={subseccion.path}
              >
                {index + 1}. {subseccion.title}
              </Link>
            );
          })}
      </div>
      <button
        id="button-mini-sidebar"
        className="w-[3rem] bg-black h-[3rem] rounded-[50%] grid grid-cols-2 grid-rows-1 justify-center items-center justify-items-end pr-[0.45rem] ml-[-1.5rem] cursor-pointer"
        onClick={() => {
          setViewMiniSidebar(!viewMiniSidebar);
        }}
      >
        <ChevronDerecha
          className={`w-[0.7rem] ${viewMiniSidebar && "rotate-180"}`}
        />
      </button>
    </div>
  ) : (
    <></>
  );
};

export default MiniSidebar;
