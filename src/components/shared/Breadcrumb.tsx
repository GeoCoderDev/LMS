import React from "react";
import { Link } from "next-view-transitions";
import { generateBreadcrumb } from "@/lib/assets/ContenidoHelpers";

const Breadcrumb = ({ currentPath }: { currentPath: string }) => {
  const breadcrumbData = generateBreadcrumb(currentPath);

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
      {breadcrumbData.map((item, index) => (
        <React.Fragment key={index}>
          <Link
            title={item.label}
            href={item.href}
            as={item.href}
            className="hover:text-gray-700 transition-colors text-nowrap overflow-hidden overflow-ellipsis max-w-[min(80vw,12rem)] md:max-w-[min(80vw,20rem)] lg:max-w-[80vw]"
          >
            {index === 0 ? "Módulos" : item.label}
          </Link>
          {index < breadcrumbData.length - 1 && (
            <span className="text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
