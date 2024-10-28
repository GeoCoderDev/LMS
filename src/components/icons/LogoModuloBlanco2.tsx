import React from "react";
import { IconProps } from "./Icons";

const LogoModuloBlanco2 = ({ className, color }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 227 276"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.0769 0H187.846C197.277 0 204.923 7.64551 204.923 17.0771V182.554C217.96 191.842 226.462 207.082 226.462 224.308C226.462 252.602 203.525 275.539 175.231 275.539C158.973 275.539 144.483 267.965 135.098 256.154H17.0769C7.6456 256.154 0 248.508 0 239.077V17.0771C0 7.64551 7.6456 0 17.0769 0ZM172.308 34.1538H32.6154C28.7494 34.1538 25.6154 37.2876 25.6154 41.1538V52.769C25.6154 56.6353 28.7494 59.769 32.6154 59.769H172.308C176.174 59.769 179.308 56.6353 179.308 52.769V41.1538C179.308 37.2876 176.174 34.1538 172.308 34.1538ZM172.308 76.8462H32.6154C28.7494 76.8462 25.6154 79.98 25.6154 83.8462V95.4614C25.6154 99.3276 28.7494 102.461 32.6154 102.461H172.308C176.174 102.461 179.308 99.3276 179.308 95.4614V83.8462C179.308 79.98 176.174 76.8462 172.308 76.8462ZM32.6154 119.539H172.308C176.174 119.539 179.308 122.672 179.308 126.539V138.154C179.308 142.02 176.174 145.154 172.308 145.154H32.6154C28.7494 145.154 25.6154 142.02 25.6154 138.154V126.539C25.6154 122.672 28.7494 119.539 32.6154 119.539ZM172.229 238.383L194.429 216.183L190.186 211.94L170.108 232.019L160.275 222.186L156.033 226.429L167.986 238.383L170.108 240.504L172.229 238.383Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoModuloBlanco2;