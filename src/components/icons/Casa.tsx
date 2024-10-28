import React from "react";
import { IconProps } from "./Icons";

const Casa = ({ className, color, title }: IconProps) => {
  return (
    <div title={title ?? "Inicio"}>
      <svg
        className={className}
        viewBox="0 0 52 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.5219 0.360279C22.8922 0.563404 22.0797 0.949342 21.6937 1.19309C20.5156 2.00559 0.792187 21.7697 0.385937 22.5618C0.182812 22.9884 0 23.5978 0 23.9431C0 25.2025 1.05625 26.5025 2.33594 26.7868C3.98125 27.1525 3.81875 27.2947 14.9297 16.204C24.5984 6.57591 25.35 5.86497 26 5.86497C26.65 5.86497 27.4016 6.57591 37.0703 16.204C48.1812 27.2947 48.0187 27.1525 49.6641 26.7868C50.9437 26.5025 52 25.2025 52 23.9431C52 22.8056 51.2484 21.8509 47.2469 17.8493L43.2656 13.8884V9.13528C43.2656 4.72747 43.225 4.3009 42.8391 3.50872C42.0672 1.88372 39.8734 1.35559 38.4922 2.45247C37.5984 3.1634 37.375 3.85403 37.375 5.98684V7.97747L34.0844 4.72747C32.2562 2.93997 30.4484 1.27434 30.0625 1.0509C28.275 -0.0256582 25.6141 -0.310033 23.5219 0.360279Z"
          fill={color}
        />
        <path
          d="M16.3516 20.6931L7.21094 29.8337V37.004C7.21094 43.8696 7.23125 44.1946 7.6375 45.0884C8.16562 46.2056 9.20156 47.2821 10.2781 47.8306C10.9891 48.1759 11.5984 48.2165 16.1078 48.2774L21.125 48.3384V41.7165V35.1149H26H30.875V41.7165V48.3384L35.9125 48.2774C40.4016 48.2165 41.0109 48.1759 41.7219 47.8306C42.7984 47.2821 43.8344 46.2056 44.3625 45.0884C44.7687 44.1946 44.7891 43.8696 44.7891 37.004V29.8337L35.6484 20.6931C28.4578 13.5024 26.4062 11.5524 26 11.5524C25.5937 11.5524 23.5422 13.5024 16.3516 20.6931Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default Casa;