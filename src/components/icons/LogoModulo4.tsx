import React from "react";
import { IconProps } from "./Icons";

const LogoModulo4 = ({
  className,
  title = "Factores Críticos de Éxito para el Desarrollo del Software",
}: IconProps) => {
  return (
    <div title={title}>
      <svg
        className={className}
        viewBox="0 0 308 308"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4164 308C10.4958 308 4.69388 298.612 8.68328 290.633L143.267 21.4662C147.689 12.6217 160.311 12.6217 164.733 21.4663L299.317 290.633C303.306 298.612 297.504 308 288.584 308H19.4164Z"
          fill="url(#paint0_linear_240_863)"
        />
        <path
          d="M153.79 166.202C176.912 166.202 195.656 147.458 195.656 124.336C195.656 101.214 176.912 82.4697 153.79 82.4697C130.668 82.4697 111.924 101.214 111.924 124.336C111.924 147.458 130.668 166.202 153.79 166.202Z"
          fill="white"
        />
        <path
          d="M132.962 124.336L146.917 138.291L174.828 110.38"
          stroke="#E65100"
          stroke-width="8.37322"
        />
        <path
          d="M231.421 256.667H77.4208V282.333H231.421V256.667Z"
          fill="white"
        />
        <path
          d="M205.333 218.167H102.667V243.833H205.333V218.167Z"
          fill="white"
        />
        <path
          d="M180.087 179.667H128.754V205.333H180.087V179.667Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_240_863"
            x1="0"
            y1="154"
            x2="308"
            y2="154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E75301" />
            <stop offset="1" stop-color="#EE9946" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LogoModulo4;
