import React from "react";
import { IconProps } from "./Icons";

const Sonido = ({ className, color, title, onClick }: IconProps) => {
  return (
    <div title={title ?? "Sonido"} onClick={onClick}>
      <svg
        className={` ${className}`}
        viewBox="0 0 231 190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M176.4 4.30003C173.4 7.10003 172.7 8.50003 172.3 12.6C171.8 18 171.7 17.8 183.3 31.6C190.2 39.7 198.9 56.8 202 68.1C206.4 84.4 206.4 105.7 201.9 121.9C197.7 137.3 190.8 149.4 175.9 167.5C172 172.1 171.8 172.8 172.3 177.4C173.2 186.8 182.6 191.9 190.9 187.5C194.3 185.8 205 173.2 210.9 164C237.7 122.7 237.7 67.3 210.9 26C205 16.8 194.3 4.20003 190.9 2.50003C185.9 -0.0999662 180.5 0.600034 176.4 4.30003Z"
          fill={color ?? "black"}
        />
        <path
          d="M99.5 6.10006C97.5 6.60006 87.9 15.6001 71.5 32.0001L46.5 57.0001H28C7.90005 57.1001 6.30005 57.4001 2.90005 62.6001C1.10005 65.3001 1.00005 67.5001 1.00005 95.0001C1.00005 134.9 -0.399954 132.9 28 133H46.5L71.5 158C99.5 186 100.4 186.7 108.3 183.2C116.4 179.6 116 184.7 116 95.0001C116 5.70006 116.4 10.4001 108.6 6.90006C104 4.80006 103.8 4.80006 99.5 6.10006Z"
          fill={color ?? "black"}
        />
        <path
          d="M143.4 37.9C139.5 39.6 136 44.9 136 49.1C136 53.8 137.1 56.1 141.9 61.6C158.1 80.2 158.1 109.8 141.9 128.4C137 134 136 136.2 136 140.9C136 144.2 136.7 145.8 139.4 148.8C142.6 152.2 143.2 152.5 148.5 152.5C154.2 152.5 154.2 152.5 159.9 146.4C177.1 127.8 184 100.3 177.6 75.5C175 65.5 167.4 51.7 160.6 44.4C155.1 38.4 154.1 37.8 150 37.4C147.5 37.2 144.6 37.4 143.4 37.9Z"
          fill={color ?? "black"}
        />
      </svg>
    </div>
  );
};

export default Sonido;
