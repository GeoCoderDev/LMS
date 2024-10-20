import CebeceraConBuscador from "@/components/CebeceraConBuscador";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-min-[100dvh] flex flex-col">
      <CebeceraConBuscador />
      <div className="flex flex-1 flex-col items-center justify-center -border-2">
        {children}
      </div>
    </div>
  );
};

export default layout;
