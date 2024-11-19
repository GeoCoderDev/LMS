"use client";
import React from "react";
import Github from "../icons/Github";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Whatsapp from "../icons/Whatsapp";
import Equis from "../icons/Equis";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setShowFooter } from "@/state/Flags/showFooter";
import FooterIcon from "../icons/FooterIcon";

const Footer = () => {
  const dispatch = useDispatch();
  const showFooter = useSelector((state: RootState) => state.flags.showFooter);

  return showFooter ? (
    <footer
      style={{ boxShadow: "0 0 5px 2px #00000030" }}
      className="flex items-center -bg-black justify-between p-4 px-8 w-full h-min -bg-black"
    >
      <div className="flex flex-col items-start justify-start gap-2">
        <button
          onClick={() => {
            dispatch(setShowFooter({ value: false }));
          }}
          title="Cerrar Footer"
          className="bg-black rounded-[50%] aspect-square w-[2rem] flex items-center justify-center"
        >
          <Equis title="Cerra Footer" className="w-[1rem]" color="white" />{" "}
        </button>
        <span>Todos los Derechos Reservados @UNDC</span>
      </div>
      <div className="flex justify-between items-center max-md:gap-4 gap-8 flex-wrap">
        <Github className="h-[2.2rem]" /> <Facebook className="h-[2.2rem]" />
        <Instagram className="h-[2.2rem]" />
        <Whatsapp className="h-[2.2rem]" />
      </div>
    </footer>
  ) : (
    <button
      title="Mostrar Footer"
      onClick={() => {
        dispatch(setShowFooter({ value: true }));
      }}
      className="opacity-50 hover:opacity-100 p-2 z-[10] rounded-[0.75rem] left-1/2 fixed bottom-[4.5rem] bg-black  -translate-x-1/2 -animate-pulse [animation-duration:2s]"
    >
      <FooterIcon title="Mostrar Footer" className="w-[2rem] " color="white" />{" "}
    </button>
  );
};

export default Footer;
