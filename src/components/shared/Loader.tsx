import React from "react";
import { IconProps } from "../icons/Icons";

const Loader = ({ className, color, title }: IconProps) => {
  return (
    <div
      title={title ?? "Cargando..."}
      style={{
        background: `no-repeat linear-gradient(${color} 0 0) 50% / 100% 50%, no-repeat linear-gradient(${color} 0 0) 50% / 50% 100%`,
      }}
      className={`loader w-[2rem] ${className}`}
    ></div>
  );
};

export default Loader;
