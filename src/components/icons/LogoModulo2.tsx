import React from "react";
import { IconProps } from "./Icons";

const LogoModulo2 = ({
  className,
  title = "Verificación y Validación de la Documentación del Análisis de Requerimientos",
}: IconProps) => {
  return (
    <div title={title}>
      <svg
      className={`${className} w-[6.5rem]`}
        viewBox="0 0 228 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M188.615 0.230469H17.8461C8.41482 0.230469 0.769226 7.87607 0.769226 17.3074V239.307C0.769226 248.739 8.41482 256.384 17.8461 256.384H188.615C198.047 256.384 205.692 248.739 205.692 239.307V17.3074C205.692 7.87607 198.047 0.230469 188.615 0.230469Z"
          fill="url(#paint0_linear_240_770)"
        />
        <path
          d="M173.077 34.3843H33.3846C29.5186 34.3843 26.3846 37.5183 26.3846 41.3843V52.9997C26.3846 56.8657 29.5186 59.9997 33.3846 59.9997H173.077C176.943 59.9997 180.077 56.8656 180.077 52.9997V41.3843C180.077 37.5183 176.943 34.3843 173.077 34.3843Z"
          fill="white"
        />
        <path
          d="M173.077 77.0767H33.3846C29.5186 77.0767 26.3846 80.2107 26.3846 84.0767V95.692C26.3846 99.558 29.5186 102.692 33.3846 102.692H173.077C176.943 102.692 180.077 99.558 180.077 95.692V84.0767C180.077 80.2107 176.943 77.0767 173.077 77.0767Z"
          fill="white"
        />
        <path
          d="M173.077 119.769H33.3846C29.5186 119.769 26.3846 122.903 26.3846 126.769V138.384C26.3846 142.25 29.5186 145.384 33.3846 145.384H173.077C176.943 145.384 180.077 142.25 180.077 138.384V126.769C180.077 122.903 176.943 119.769 173.077 119.769Z"
          fill="white"
        />
        <path
          d="M176 275.769C204.294 275.769 227.231 252.832 227.231 224.538C227.231 196.244 204.294 173.308 176 173.308C147.706 173.308 124.769 196.244 124.769 224.538C124.769 252.832 147.706 275.769 176 275.769Z"
          fill="url(#paint1_radial_240_770)"
        />
        <path
          d="M158.923 224.538L170.877 236.492L193.077 214.292"
          stroke="#EAFFE8"
          stroke-width="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_240_770"
            x1="0.769226"
            y1="128.307"
            x2="205.692"
            y2="128.307"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#32B134" />
            <stop offset="1" stop-color="#A7D444" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_240_770"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(176 224.538) rotate(-90) scale(51.2308)"
          >
            <stop offset="0.315" stop-color="#A2D243" />
            <stop offset="1" stop-color="#32B134" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LogoModulo2;
