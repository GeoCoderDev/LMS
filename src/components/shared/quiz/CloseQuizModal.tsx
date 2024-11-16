"use client";
import { getUpperPath } from "@/lib/helpers/functions/getUpperPath";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React from "react";

const CloseQuizModal = ({
  setViewCloseModal,
}: {
  setViewCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const path = usePathname();

  return (
    <div className="bg-[#0000007d] w-screen h-[100dvh] z-[102] flex items-center justify-center fixed ">
      <div className="bg-white  animate__bounceIn max-w-[min(80vw,30rem)] p-6 rounded-[1rem] flex flex-col gap-4">
        <span className="max-w-full text-center">
          ¿Estás seguro de que deseas cerrar el quiz? Si sales ahora, tus
          respuestas no se guardarán y perderás tu progreso actual.
        </span>
        <div className="w-full flex items-center justify-evenly">
          <Link
            href={getUpperPath(path)}
            as={getUpperPath(path)}
            className="font-bold rounded-[0.5rem] text-white min-w-[3rem] p-3 bg-[#d34040] text-center"
          >Si
          </Link>
          <button
            onClick={() => setViewCloseModal(false)}
            className="text-center font-bold rounded-[0.5rem] min-w-[3rem]  p-3 bg-[#40d371]"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default CloseQuizModal;
