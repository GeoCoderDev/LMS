import React from "react";
import { IconProps } from "./icons/Icons";

const AccesibilityBackground = ({ className, color, title }: IconProps) => {
  return (
    <div title={title}>
      <svg
        className={` ${className}`}
        width="20"
        height="163"
        viewBox="0 0 20 163"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 163V0L0 20.375V142.625L20 163Z" fill={color} />
      </svg>
    </div>
  );
};

export default AccesibilityBackground;
