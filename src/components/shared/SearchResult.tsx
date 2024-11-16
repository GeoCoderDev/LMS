import { SubseccionSearchResult } from "@/lib/assets/ContenidoHelpers";
import React from "react";

const SearchResult = ({
  subSectionResult: { breadcrumbText, path, title },
}: {
  subSectionResult: SubseccionSearchResult;
}) => {
  return (
    <a className="flex items-center w-full px-3 py-2" href={path} title={title}>
      <div className="flex-1 max-w-[calc(100%-1rem)] h-min text-[0.8rem] flex items-start  justify-center flex-wrap gap-1 flex-col">
        <span className="max-w-[90%] text-nowrap overflow-hidden overflow-ellipsis">
          {title}
        </span>
        <span className="italic to-blue-700 font-semibold max-w-[90%]">
          {breadcrumbText}
        </span>
      </div>
      <svg
        className="max-w-[0.8rem] flex-1 "
        viewBox="0 0 257 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.4994 1.59958C40.3994 9.79958 38.9994 29.6996 52.7994 39.4996L57.1994 42.4996L119.799 42.7996L182.399 42.9996L92.7994 132.8C3.89944 221.8 3.09944 222.5 1.49944 228.2C-3.50056 245.6 11.3994 260.5 28.7994 255.5C34.4994 253.9 35.1994 253.1 124.199 164.2L213.999 74.5996L214.199 137.2L214.499 199.8L217.499 204.2C227.099 217.8 247.599 216.5 254.999 201.9C256.999 198.1 256.999 196.1 256.799 106.1L256.499 14.1996L253.499 9.89958C251.699 7.29958 248.499 4.59958 245.499 3.09958L240.599 0.499581L149.499 0.199581C66.9994 -0.000418861 58.1994 0.0995811 55.4994 1.59958Z"
          fill="#0f57fd"
        />
      </svg>
    </a>
  );
};

export default SearchResult;
