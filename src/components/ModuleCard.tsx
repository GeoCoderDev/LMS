import React from "react";

const ModuleCard = ({ id }: { id: number }) => {
  return (
    <div className="flex items-center justify-center w-[10rem] h-[10rem] border-2 border-black rounded-[1rem]">
      Modulo {id}
    </div>
  );
};

export default ModuleCard;
