import React from "react";
import { IconProps } from "./Icons";

const Detener = ({ className, color, title, onClick }: IconProps) => {
  return (
    <div title={title ?? "Detener"} onClick={onClick}>
      <svg
        className={`${className}`}
        viewBox="0 0 193 193"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.3 1.1C22.1 4.6 5.5 19.9 1.1 39.1C0.4 41.8 2.74631e-07 64.6 2.74631e-07 97.1C2.74631e-07 155.9 -0.0999996 155.4 6.3 167.3C9.9 174.1 20 183.9 27 187.5C37.6 192.9 39.2 193 96 193C139.4 193 149.6 192.7 154.3 191.5C171.4 187 185.3 173.4 190.4 156.1C192.7 148.4 192.8 46.5 190.5 38.1C186.1 21.4 173.7 8.3 157.1 2.8C150.6 0.599997 149.3 0.599997 99 0.399997C70.7 0.299997 45.2 0.599997 42.3 1.1Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Detener;
