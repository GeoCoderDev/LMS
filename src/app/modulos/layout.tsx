"use client";
import CebeceraConBuscador from "@/components/shared/CebeceraConBuscador";
import Footer from "@/components/shared/Footer";
import { usePathname } from "next/navigation";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const route = usePathname();
  const moduleRegex = /^\/modulos?(?:\/\d)?$/;
  return (
    <div
      className={`min-h-[100dvh] relative max-h-[100dvh] w-full grid grid-cols-1 grid-rows-[max-content_1fr_max-content] ${
        moduleRegex.test(route) ? "" : "overflow-hidden"
      }`}
    >
      <CebeceraConBuscador />
      <div
        className={`flex flex-1 flex-col items-center justify-center ${
          moduleRegex.test(route) ? "" : "overflow-hidden"
        } `}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
