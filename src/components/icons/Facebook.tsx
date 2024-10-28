import React from "react";
import { IconProps } from "./Icons";

const Facebook = ({ className, color, title }: IconProps) => {
  return (
    <div title={title ?? "Facebook"}>
      <svg
        className={` ${className}`}
        viewBox="0 0 25 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.3617 27L24.6581 18.3131H16.5524V12.6759C16.5524 10.2994 17.6847 7.98281 21.315 7.98281H25V0.586875C25 0.586875 21.656 0 18.4587 0C11.7834 0 7.42014 4.16063 7.42014 11.6925V18.3131H0V27H7.42014V48H16.5524V27H23.3617Z"
          fill={color ?? "black"}
        />
      </svg>
    </div>
  );
};

export default Facebook;
