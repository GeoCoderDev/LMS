import React from "react";
import SubHeader from "./SubHeader";

const PageInformation = ({
  sectionTitle,
  contentToRead,
}: {
  contentToRead: React.ReactNode;
  sectionTitle: string;
}) => {
  return (
    <main className="w-full h-full grid grid-cols-1 grid-rows-[max-content_1fr] max-h-full overflow-hidden">
      <SubHeader sectionTitle={sectionTitle} />
      <div className="w-full h-full overflow-hidden grid max-md:grid-cols-1 max-md:grid-rows-[1fr_1fr] grid-cols-[1fr_1fr] grid-rows-1">
        <div className="max-w-screen-xl content-to-read overflow-y-auto p-6 pt-0 pb-4 min-h-0">
          {contentToRead}
        </div>
        <div className="resources-visualizer border-l-2 border-[#7d7d7d30] max-md:border-l-0 max-md:border-b-2 max-md:row-start-1 p-8 overflow-y-auto min-h-0 flex flex-col items-center justify-center">
          <iframe
            className="aspect-[560/315] w-[min(24rem,80%)] rounded-[1rem]"
            src="https://www.youtube.com/embed/Tpb3v5QYwI4?si=4JH-P9fkaPYrloh4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen={true}
            frameBorder={"0"}
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default PageInformation;
