import React from "react";
import ChartTwo from "../Charts/ChartTwo";
import ChartTwoCopy from "../Charts/ChartTwoCopy";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mx-4">
        <ChartTwoCopy />
        <br />
        <br />
        <ChartTwo />

        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
      </div>
      <div></div>
    </>
  );
};

export default ECommerce;
