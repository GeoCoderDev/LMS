import React from "react";

const SubHeader = ({ sectionTitle }: { sectionTitle: string }) => {
  return (
    <nav className="-border-[1px] border-[#7d7d7d30] w-full p-4 py-3 border-b-2">
      <h1 className="text-[0.8rem]">{sectionTitle}</h1>
    </nav>
  );
};

export default SubHeader;
