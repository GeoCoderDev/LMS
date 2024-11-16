import dynamic from "next/dynamic";


const NoSSRAccesibilityMenu = dynamic(() => import("./AccesibilityMenu"), {
    ssr: false,
  });
export default NoSSRAccesibilityMenu