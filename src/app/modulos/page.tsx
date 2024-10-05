import ModuleCard from "@/components/ModuleCard";
import React from "react";

const Modulos = () => {
  return (
    <div className="flex items-center justify-center flex-col p-4 h-[100dvh] w-screen gap-8">
      <span
        style={{ viewTransitionName: "titulo-modulos" }}
        className="text-[2rem] lg:text-[2.2rem] "
      >
        Modulos
      </span>
      <div
        className="min-w-min min-h-min gap-8"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <ModuleCard id={1} />
        <ModuleCard id={2} />
        <ModuleCard id={3} />
        <ModuleCard id={4} />
      </div>
    </div>
  );
};

export default Modulos;
