"use client";
import { getUpperPath } from "@/lib/helpers/functions/getUpperPath";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";
import React from "react";
import Breadcrumb from "./Breadcrumb";

const SubHeader = ({ currentPath }: { currentPath: string }) => {
  return (
    <nav className="-border-[1px] border-[#7d7d7d30] w-full p-4 py-3 border-b-2 flex items-center justify-start gap-4">
      <Link
        href={getUpperPath(currentPath, 2)}
        as={getUpperPath(currentPath, 2)}
      >
        <ArrowLeft
          className="text-black font-semibold text-[1.2rem]"
          size={"1.7rem"}
        />
      </Link>
      
        <Breadcrumb currentPath={currentPath} />
      
    </nav>
  );
};

export default SubHeader;
