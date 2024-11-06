"use client";

import { usePathname } from "next/navigation";
import Accesibility from "../icons/Accesibility";
import Microfono from "../icons/Microfono";
import {
  ColorCommandVoices,
} from "@/lib/interfaces/CommandVoicesState";

import useCommandVoices from "@/lib/hooks/useCommandVoices";


const AccesibilityMenu = () => {
  const route = usePathname();

  const { iniciarComandosDeVoz, commandVoicesState } = useCommandVoices(
    route
  );

  return (
    <div className="z-[101] grid max-sm:w-screen min-h-min items-center fixed max-sm:bottom-0 max-sm:left-0 max-sm:h-[4dvh] max-sm:grid-rows-[4dvh_minmax(min-content,200px)] grid-cols-[1fr] max-sm:translate-y-[calc(100%-4dvh)] max-sm:hover:translate-y-0 sm:min-w-min sm:top-0 sm:right-0 sm:h-[100dvh] sm:translate-x-[calc(100%-3vw)] sm:hover:translate-x-[0] sm:grid-cols-[3vw_minmax(min-content,200px)] sm:grid-rows-[1fr]">
      <div className="relative -border-2 h-full flex flex-col min-w-min -min-h-min items-center justify-center translate-y-[1px] sm:translate-x-[1px] ">
        <div className="absolute border-black h-0 w-[50vw] max-sm:border-b-[4dvh] max-sm:[border-left:4vw_transparent_solid] max-sm:[border-right:4vw_transparent_solid] sm:[border-top:4vh_transparent_solid] sm:[border-bottom:4vh_transparent_solid] sm:h-[50dvh] sm:w-0 sm:right-0 sm:top-0 sm:border-r-[3vw] sm:translate-y-[50%]"></div>
        <Accesibility
          className="h-[45%] sm:w-[45%] aspect-auto z-[10]"
          color={ColorCommandVoices[commandVoicesState]}
          title=""
        />
      </div>
      <div
        style={{ color: ColorCommandVoices[commandVoicesState] }}
        className=" bg-black w-full h-full flex items-center justify-center flex-col p-4 hover gap-4 cursor-pointer"
      >
        <h2 className="text-[1.2rem] font-semibold">Comandos de Voz</h2>
        <Microfono
          onClick={iniciarComandosDeVoz}
          className="w-[8rem] "
          color={ColorCommandVoices[commandVoicesState]}
          title=""
        />
      </div>
    </div>
  );
};

export default AccesibilityMenu;
