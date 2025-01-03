"use client";
import { ApexOptions } from "apexcharts";
import React from "react";
import dynamic from "next/dynamic";
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { useSearchParams } from "next/navigation";


const prisma = new PrismaClient();


const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});



let options: ApexOptions = {
  colors: ["#266713", "#266713"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: false,
    toolbar: {
      show: true,
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
            columnWidth: "35%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 2,
      columnWidth: "39%",
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
    fontWeight: 700,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface ChartTwoState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartTwo: React.FC = async () => {
  let series = [
    {
      name: "Sales",
      data: [44, 55, 41, 67, 22, 43, 65],
    },
    {
      name: "Revenue",
      data: [0, 23, 20, 8, 13, 27, 15],
    },
  ];

  try {



    // series = [];

    // series = [
    //   {
    //   name: "Alf",
    //   data: [4444444, 55, 41, 67, 22, 43, 65],
    //   }
    // ]


    // options.xaxis.categories = [];
    // options.xaxis.categories = ['A', 'B', 'C'];


    try {

      // const response1 = await fetch('/api/seccion');
      // const result1 = await response1.json();


      // const response2 = await fetch('/api/resultados-cuestionario-2');
      // const result2 = await response2.json();

      let seccionId = ['S1-M1', 'S2-M1', 'S3-M1', 'S4-M1',
        'S1-M2', 'S2-M2', 'S3-M2', 'S4-M2', 'S5-M2',
        'S1-M3', 'S2-M3', 'S3-M3', 'S4-M3', 'S5-M3',
        'S1-M4', 'S2-M4', 'S3-M4', 'S4-M4', 'S5-M5', 'S6-M6', 'S7-M4',
      ];
      // let sumSeccion = [];
      // let contSeccion: number = 0;
      // let cont: number = 0;
      // let sumPuntaje: number = 0;
      // let promedio: number = 0;

      // if (response1.ok && response2.ok) {
      //   // console.log(result1);

      //   result1.forEach(function (item) {
      //     // contSeccion += 1;
      //     // seccionId.push("Sección " + contSeccion);

      //     cont = 0;
      //     sumPuntaje = 0;
      //     result2.forEach(function (item2) {
      //       if (item2.seccionId == item.id) {
      //         cont += 1;
      //         sumPuntaje += item2.puntajeObtenido;
      //       }
      //       // promedio = sumPuntaje / cont;
      //     });
      //     sumSeccion.push(sumPuntaje);
      //   });
      // } else {
      //   alert(result1.error);
      // }


      // console.log("array: ", seccionId);
      // console.log("sumas: ", sumSeccion);


      //================================================================================================
      options.xaxis.categories = [];
      options.xaxis.categories = seccionId;

      // series = [
      //   {
      //     name: "Puntaje total",
      //     data: sumSeccion,
      //   }
      // ]
      //================================================================================================

      const searchParams = useSearchParams();
      const datos2 = searchParams.get('data2');



      console.log('=======================================================')
      console.log(datos2);
      console.log('=======================================================')



      let aArray2 = datos2.split(',');
      let aArrayEntero2 = aArray2.map(Number);
      console.log(aArray2);
      console.log(aArrayEntero2);


      
      series = [
        {
          name: "Puntaje total",
          data: aArrayEntero2,
        }
      ]


    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }


    return (

      <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <div className="mb-4 justify-between gap-4 sm:flex">
          <div>
            <h4 className="text-xl font-semibold text-black dark:text-white">
              PUNTAJE TOTAL OBTENIDO POR SECCIÓN
            </h4>
          </div>
          <div>
            <div className="relative z-20 inline-block">
              {/* <select
                name="#"
                id="#"
                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
              >
                <option value="" className="dark:bg-boxdark">
                  This Week
                </option>
                <option value="" className="dark:bg-boxdark">
                  Last Week
                </option>
              </select> */}
              <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                    fill="#637381"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                    fill="#637381"
                  />
                </svg>
              </span>
            </div>
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
  } catch (error) {

  }
};

export default ChartTwo;
