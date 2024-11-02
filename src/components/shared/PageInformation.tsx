"use client";
import React, { useState } from "react";
import SubHeader from "./SubHeader";
import MiniSidebar from "./MiniSidebar";

import ToolsBar from "./ToolsBar";

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

  return (
    <main className="w-full h-full grid grid-cols-1 grid-rows-[max-content_1fr_max-content] max-h-full overflow-hidden">
      <SubHeader sectionTitle={sectionTitle} />
      <div
        className={`-border-2 border-blue-600 w-full h-full overflow-hidden grid max-md:grid-cols-1 max-md:grid-rows-[1fr_1fr] grid-cols-[1fr_1fr] grid-rows-1 transition-all ${
          !viewResources &&
          "md:grid-cols-[1fr_0] max-md:grid-rows-[1fr_0] justify-items-center"
        }`}
      >
        <div
          className={`max-w-screen-xl content-to-read overflow-y-auto p-6 min-h-0 relative grid grid-cols-1 grid-rows-[0_1fr] pt-6 pb-8`}
        >
          <MiniSidebar />
          {contentToRead}
        </div>
        <div
          className={`resources-visualizer border-l-2 border-[#7d7d7d30] max-md:border-l-0 max-md:border-b-2 max-md:row-start-1 p-8 overflow-y-auto min-h-0 flex items-center justify-center relative z-[10] ${
            !viewResources && "hidden"
          }`}
        >
          {resources}
        </div>
      </div>
      <ToolsBar
        viewResources={viewResources}
        setViewResources={setViewResources}
      />
    </main>
  );
};

export default PageInformation;
