import dynamic from "next/dynamic";

const NoSSRToolsBar = dynamic(() => import("./ToolsBar"), {
  ssr: false,
});
export default NoSSRToolsBar;
