import React from "react";
import { IconProps } from "./Icons";

const FlechaDiagonal = ({ className, color }: IconProps) => {
  return (
    <div>
      <svg
        className={`${className}`}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 18.625L18.25 2.375M18.25 2.375H2M18.25 2.375V18.625"
          stroke={color}
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default FlechaDiagonal;
