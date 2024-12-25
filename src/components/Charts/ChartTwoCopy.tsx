"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ChartTwo: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/modulo-seccion-cuestionario");
        const result = await response.json();

        const sumaModulo = [0, 0, 0, 0];
        if (response.ok) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          result.forEach((item: any) => {
            const idx = item.Seccion.Modulo.numeroOrden;
            sumaModulo[idx - 1] += item.puntajeObtenido;
          });
        }

        setOptions({
          colors: ["#3C50E0", "#80CAEE"],
          chart: {
            fontFamily: "Satoshi, sans-serif",
            type: "bar",
            height: 335,
            stacked: true,
            toolbar: { show: false },
            zoom: { enabled: false },
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
          dataLabels: { enabled: false },
          xaxis: {
            categories: ["Módulo 1", "Módulo 2", "Módulo 3", "Módulo 4"],
          },
          legend: {
            position: "top",
            horizontalAlign: "left",
            fontFamily: "Satoshi",
            fontWeight: 500,
            fontSize: "14px",
          },
          fill: { opacity: 1 },
        });

        setSeries([
          {
            name: "Puntaje total",
            data: sumaModulo,
          },
        ]);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData();
  }, []);

  if (!options || series.length === 0) return null; // Renderiza nada mientras se carga

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            PUNTAJE TOTAL OBTENIDO POR MÓDULO
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
