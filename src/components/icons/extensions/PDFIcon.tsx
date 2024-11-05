import React from "react";
import { IconProps } from "../Icons";

const PDFIcon = ({ className, color, title }: IconProps) => {
  return (
    <div title={title ?? "PDF"}>
      <svg
        className={` ${className}`}
        viewBox="0 0 208 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.9 1.60005C25.7 3.50005 18.8 9.70005 15.9 16.2L13.5 21.5L13.2 74.6001L12.9 127.8L9 128.4C6.4 128.8 4.3 130 2.6 132.1L0 135.2V171.8C0 206.5 0.1 208.7 2 211.7C3.4 214.1 5.1 215.2 8.3 216.1L12.7 217.2L13.3 226C14 237.2 16.7 243.7 22.8 249.1C31 256.3 28.5 256.1 113.1 255.8L188.5 255.5L193.9 252.5C199.5 249.4 204.5 243.7 206.7 237.7C207.5 235.3 207.9 211.9 207.9 149.5L208 64.5001L175.7 32.2L143.5 4.50148e-05L90 0.100045C46.9 0.100045 35.6 0.400045 31.9 1.60005ZM137.2 37.2C137.5 60 137.9 61.4001 145.3 67.4001L149.2 70.5001L170.1 70.8001L191 71.1001V152.1V233.2L188.1 236.1L185.2 239H111.1H37L33.8 236.1C30.7 233.3 30.5 232.8 30.2 225.1L29.8 217.1L97.4 216.8L165 216.5L168.2 213.2L171.5 210L171.8 173.5C172 142.1 171.9 136.6 170.5 134C167.3 127.8 169.7 128 96.5 128H29.9L30.2 75.4001L30.5 22.8L33.8 19.9L37 17H86.9H136.9L137.2 37.2ZM54.4 152.5C57.2 153.9 58.8 155.5 60.2 158.7C65.1 169.9 57 180 43.1 180H39V188.5V197H34H29V174.1V151.1L31.3 150.7C36.4 149.5 50.5 150.6 54.4 152.5ZM96.5 152.4C104.7 155.9 108.9 162.6 109 172.1C109 182.9 104.6 190.4 96 194.3C91.3 196.4 75.6 197.9 70.6 196.6L68 196V173.5V151.1L70.8 150.7C76.6 149.6 92.5 150.7 96.5 152.4ZM144 154.5V159H135.5H127V164.5V170H135H143V174V178H135H127.1L126.8 187.2L126.5 196.5H121.5H116.5L116.2 173.2L116 150H130H144V154.5Z"
          fill={color ?? "black"}
        />
        <path
          d="M39 165V172H43C48.1 172 51 169.3 51 164.6C51 160.3 48.1 158 42.8 158H39V165Z"
          fill={color ?? "black"}
        />
        <path
          d="M79 173.6V189.3L84.1 188.8C92.7 187.9 98 182 98 173C98 163.8 92.3 158 83.3 158H79V173.6Z"
          fill={color ?? "black"}
        />
      </svg>
    </div>
  );
};

export default PDFIcon;
