import React from "react";
import FlechaDiagonal from "./icons/FlechaDiagonal";
import { Link } from "next-view-transitions";

export const Seccion = ({
  title,
  href,
  numeroOrden,
  moduleNumber,
}: {
  title: string;
  href: string;
  numeroOrden: number;
  moduleNumber: number;
}) => {
  const randomDelay = Math.random() * 1.5;
  const initialBorderImage =
    moduleNumber === 1
      ? "linear-gradient(0deg, #1e40af 0%, #03accd 100%) 1"
      : moduleNumber === 2
      ? "linear-gradient(0deg, #2daf33 0%, #a9d445 100%) 1"
      : moduleNumber === 3
      ? "linear-gradient(0deg, #7B1FA2 0%, #CC73CB 100%) 1"
      : moduleNumber === 4
      ? "linear-gradient(0deg, #D35400 0%, #F39C12 100%) 1"
      : "linear-gradient(0deg, #000000 0%, #ffffff 100%) 1";

  return (
    <div
      style={{
        borderImage: initialBorderImage,
        animation: `rotateBorderGradient${moduleNumber} 3s linear infinite;`,
        animationDelay: randomDelay + "s",
      }}
      className="max-w-[min(20rem,80%)] p-8 border-black border-[0.2rem]    gap-4 flex flex-col min-w-[min(20rem,80%)] justify-center rounded-lg  overflow-hidden"
    >
      <h5 className="text-[0.8rem]">Sección {numeroOrden}</h5>
      <h4 className="mt-[-0.5rem] text-[1rem] font-semibold">{title}</h4>
      <Link
        href={href}
        as={href}
        className="text-[0.8rem] bg-black text-white flex gap-2 p-2 rounded-[0.5rem] items-center justify-center"
      >
        Ver Contenido
        <FlechaDiagonal className="w-[0.8rem]" color="white" />
      </Link>
    </div>
  );
};
