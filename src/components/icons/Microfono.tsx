import React from "react";
import { IconProps } from "./Icons";

const Microfono = ({ title, color, className, onClick }: IconProps) => {
  return (
    <div title={title} onClick={onClick}>
      <svg
        className={`aspect-auto ${className}`}
        viewBox="0 0 224 224"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M102.596 35.4855C95.8633 37.75 91.3344 41.7281 87.7846 48.3991L86.0098 51.7653V86.3445V120.924L87.6622 124.412C91.212 132.063 98.3114 137.204 107.063 138.489C121.385 140.57 133.38 133.287 136.746 120.312C137.542 117.252 137.726 111.866 137.726 86.8341C137.726 67.3718 137.481 55.927 137.052 53.7849C135.461 46.1959 130.504 40.0144 123.16 36.5871C119.61 34.9347 118.386 34.6899 112.694 34.5062C107.492 34.3838 105.472 34.5675 102.596 35.4855Z"
          fill={color}
        />
        <path
          d="M149.048 107.887C147.09 108.928 146.294 110.274 146.294 112.6C146.233 119.883 142.622 128.88 137.542 134.449C130.565 142.161 123.466 145.098 112.082 145.098C104.065 145.098 100.392 144.303 94.6394 141.243C85.2143 136.285 77.8088 123.922 77.7476 113.212C77.7476 108.561 72.3006 106.419 69.3017 109.907C67.9552 111.498 67.8328 112.049 68.1388 115.721C69.4241 130.838 77.6252 143.446 90.7225 150.301C95.0678 152.626 102.84 154.891 106.329 154.891H108.349V168.049V181.208H96.1694C84.847 181.208 83.929 181.269 82.3989 182.493C80.1345 184.268 80.1345 187.94 82.3989 189.715C83.9902 191 84.6022 191 113.367 191H142.683L144.152 189.47C146.172 187.511 146.172 184.696 144.152 182.738C142.683 181.208 142.622 181.208 130.381 181.208H118.141V168.172V155.136L122.792 154.095C140.663 150.239 154.312 134.082 155.903 115.048C156.27 111.009 156.209 110.825 154.373 109.05C152.414 107.031 151.068 106.786 149.048 107.887Z"
          fill={color}
        />
        <circle cx="112" cy="112" r="108.5" stroke={color} stroke-width="7" />
      </svg>
    </div>
  );
};

export default Microfono;
