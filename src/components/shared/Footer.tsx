import React from "react";
import Github from "../icons/Github";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Whatsapp from "../icons/Whatsapp";

const Footer = () => {
  return (
    <footer className="flex items-center -bg-black justify-between p-6 px-8 w-full h-min -bg-black">
      <div>Todos los Derechos Reservados @UNDC</div>
      <div className="flex justify-between items-center max-md:gap-4 gap-8 flex-wrap">
        <Github className="h-[2.2rem]" /> <Facebook className="h-[2.2rem]" />
        <Instagram className="h-[2.2rem]" />
        <Whatsapp className="h-[2.2rem]" />
      </div>
    </footer>
  );
};

export default Footer;
