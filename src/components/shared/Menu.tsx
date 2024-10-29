import dynamic from "next/dynamic";


const Menu = dynamic(() => import("./AccesibilityMenu"), {
    ssr: false,
  });
export default Menu