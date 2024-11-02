import React from "react";
import { IconProps } from "./Icons";

const ChevronDerecha = ({ className, color, title, onClick }: IconProps) => {
  return (
    <div
      onClick={onClick}
      className="col-start-2 cursor-pointer"
      title={title ?? "derecha"}
    >
      <svg
        className={` ${className}`}
        viewBox="0 0 162 258"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.625 0.183594C33.5029 0.123008 34.3807 0.0624219 35.2852 0C45.3111 1.90003 52.6529 10.1335 59.5483 17.0894C60.6065 18.1421 61.6656 19.194 62.7254 20.2451C65.5773 23.079 68.4166 25.9251 71.2531 28.7743C74.2347 31.7662 77.2261 34.7481 80.216 37.7317C85.2311 42.7396 90.2378 47.7558 95.2397 52.7769C101.012 58.5705 106.798 64.3495 112.591 70.1212C117.581 75.0924 122.562 80.0713 127.537 85.0568C130.502 88.0279 133.47 90.9962 136.444 93.9575C139.239 96.7409 142.024 99.534 144.802 102.335C145.819 103.357 146.839 104.376 147.864 105.392C159.616 117.051 159.616 117.051 161.094 125.746C161.083 126.695 161.073 127.644 161.062 128.621C161.078 130.044 161.078 130.044 161.094 131.496C159.461 141.1 152.782 146.981 146.154 153.563C145.083 154.641 144.013 155.72 142.944 156.799C140.053 159.713 137.149 162.614 134.241 165.513C131.809 167.939 129.384 170.372 126.959 172.805C121.234 178.546 115.499 184.277 109.758 190.002C103.847 195.896 97.9526 201.806 92.0663 207.725C87 212.818 81.9241 217.901 76.8402 222.976C73.8091 226.003 70.7817 229.032 67.7634 232.071C64.9239 234.929 62.0724 237.774 59.2115 240.611C58.1676 241.65 57.1278 242.693 56.0928 243.741C49.661 250.245 43.9166 255.424 34.7422 257.152C22.9959 256.993 16.0387 249.243 8.21484 241.211C2.64964 235.161 0.278815 231.094 0.1875 222.684C0.159141 221.499 0.130781 220.314 0.101562 219.094C1.09704 211.594 7.21333 206.693 12.3604 201.596C13.1412 200.815 13.9221 200.034 14.7266 199.229C17.2974 196.66 19.8752 194.097 22.4531 191.535C24.2415 189.751 26.0294 187.965 27.8168 186.18C32.0346 181.969 36.2568 177.763 40.4812 173.558C45.2929 168.769 50.0989 163.974 54.9044 159.179C64.7841 149.32 74.6709 139.468 84.5625 129.621C83.2075 126.593 81.6955 124.51 79.343 122.181C78.6799 121.52 78.0168 120.858 77.3335 120.177C76.6067 119.462 75.8799 118.747 75.1311 118.01C73.9821 116.868 73.9821 116.868 72.8099 115.703C71.1462 114.05 69.4802 112.4 67.8123 110.751C65.1724 108.141 62.5393 105.525 59.9079 102.907C53.3705 96.4042 46.8245 89.9101 40.2733 83.4213C34.7393 77.94 29.2111 72.4529 23.6916 66.957C21.947 65.2229 20.1995 63.4918 18.449 61.7637C16.0003 59.3461 13.5609 56.9195 11.1233 54.4907C10.3985 53.7799 9.67373 53.069 8.92699 52.3366C3.28115 46.6803 0.13869 42.0468 0 33.8086C0.223138 25.3115 2.98111 21.1368 8.90625 15.3203C11.4087 13.0226 13.9709 10.8174 16.5625 8.62109C18.0423 7.2885 19.5216 5.95523 21 4.62109C24.6859 1.29687 27.6864 0.41809 32.625 0.183594Z"
          fill={color ?? "white"}
        />
      </svg>
    </div>
  );
};

export default ChevronDerecha;