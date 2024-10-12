import React from "react";

const ModuleCard = ({ id, titulo }: { id: number; titulo: string }) => {
  return (
    <div
      style={{ viewTransitionName: `modulo-splash-${id}` }}
      className="book flex items-center justify-center w-[10rem] h-[10rem] border-2 border-black rounded-[1rem]"
    >
      <p className="mx-10">{titulo}</p>
      <div className="book-cover flex items-center justify-center w-[10rem] h-min min-h-[10rem] border-2 border-black rounded-[1rem]">
        <p>{titulo}</p>
      </div>
    </div>
  );
};

export default ModuleCard;
