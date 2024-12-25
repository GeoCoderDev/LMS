"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Importación dinámica para desactivar SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false, // Desactiva la renderización en el servidor
});

const ChartTwo = () => {
  const [isClient, setIsClient] = useState(false); // Estado para verificar el entorno
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [options, setOptions] = useState<ApexOptions>({
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",
    },
    fill: {
      opacity: 1,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [series, setSeries] = useState([
    {
      name: "Sales",
      data: [44, 55, 41, 67, 22, 43, 65],
    },
    {
      name: "Revenue",
      data: [0, 23, 20, 8, 13, 27, 15],
    },
  ]);

  useEffect(() => {
    setIsClient(true); // Marca como cliente al montarse el componente
  }, []);

  if (!isClient) {
    return null; // Evita la renderización del componente en el servidor
  }

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            PUNTAJE TOTAL OBTENIDO POR SECCIÓN
          </h4>
        </div>
      </div>
      <div>
        <div id="chartTwo" className="-mb-9 -ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;
