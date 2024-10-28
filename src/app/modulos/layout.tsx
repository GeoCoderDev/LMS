import CebeceraConBuscador from "@/components/shared/CebeceraConBuscador";
import Footer from "@/components/shared/Footer";

import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-min-[100dvh] flex flex-col">
      <CebeceraConBuscador />
      <div className="flex flex-1 flex-col items-center justify-center -border-2">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
