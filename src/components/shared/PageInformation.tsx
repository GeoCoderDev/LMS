"use client";
import React, { useState } from "react";
import SubHeader from "./SubHeader";
import MiniSidebar from "./MiniSidebar";

import ToolsBar from "./ToolsBar";
import { usePathname } from "next/navigation";

const PageInformation = ({
  sectionTitle,
  contentToRead,
  resources,
}: {
  contentToRead: React.ReactNode;
  sectionTitle: string;
  resources: React.ReactNode;
}) => {
  const [viewResources, setViewResources] = useState(true);
  const path = usePathname();
  return (
    <main className="w-full h-full grid grid-cols-1 grid-rows-[max-content_1fr_max-content] max-h-full overflow-hidden">
      <SubHeader sectionTitle={sectionTitle} currentPath={path} />
      <div
        className={` w-full h-full overflow-hidden grid max-md:grid-cols-1 max-md:grid-rows-[1fr_1fr] grid-cols-[1fr_1fr] grid-rows-1 transition-all ${
          !viewResources &&
          "grid-rows-[1fr_0] grid-cols-[1fr_0]  justify-items-center"
        }`}
      >
        <div
          className={`max-w-[min(1440px,90vw)] max-md:max-w-full content-to-read overflow-y-auto p-8 min-h-0 relative grid h-full grid-cols-1 grid-rows-[0_1fr] pt-6 pb-8  ${
            !viewResources && "col-span-full row-span-full"
          }`}
        >
          <MiniSidebar />
          {contentToRead}
        </div>
        <div
          className={`resources-visualizer border-l-2 border-[#7d7d7d30] max-md:border-l-0 max-md:border-b-2 max-md:row-start-1 p-8 overflow-y-auto  min-h-0 grid grid-cols-1  items-center justify-center justify-items-center relative grid-rows-[1fr_0]  z-[10] ${
            !viewResources && "hidden"
          }`}
        >
          <div className="flex h-max w-full max-w-full items-center justify-center flex-wrap gap-6">
            {resources}
          </div>
          <span
            style={{
              borderTopRightRadius: "0.6rem",
              borderTopLeftRadius: "0.6rem",
              animation: "shine 0.4s infinite",
              background: "linear-gradient(90deg, #000000, #1a1a1a, #000000)",
            }}
            className=" italic sticky bottom-0 text-[0.8rem] p-2 py-1 translate-y-[2rem] -bg-black overflow-hidden  text-white"
          >
            Recursos Complementarios
            <div
              className="-glow-effect absolute top-0 left-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)",
                animation: "glow 4s infinite",
              }}
            ></div>
          </span>
        </div>
      </div>
      <ToolsBar
        currentPath={path}
        viewResources={viewResources}
        setViewResources={setViewResources}
      />
    </main>
  );
};

export default PageInformation;
