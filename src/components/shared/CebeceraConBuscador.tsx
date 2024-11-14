import { Link } from "next-view-transitions";
import React from "react";
import Buscador from "../Buscador";
import Casa from "../icons/Casa";
import { contenido } from "@/lib/assets/Contenido";

const CebeceraConBuscador = () => {
  return (
    <header
      style={{ boxShadow: "0 0 5px 2px #00000030" }}
      className="sticky top-0 w-full flex  items-center justify-between px-[3vw] bg-[#ffffff80] border-black -border-b-[1px] -shadow-[0px_0px_10px_2px_#00000025] h-max py-4 z-[2] [backdrop-filter:blur(10px)] gap-4 "
    >
      <Link href={"/"} as={"/"}>
        <span
          className="text-white bg-black"
          style={{ viewTransitionName: "titulo-inicio" }}
        >
          <Casa className="w-[2rem] " color="black" />
        </span>
      </Link>
      <Buscador />
    </header>
  );
};

export default CebeceraConBuscador;

interface SubseccionResult {
  title: string;
  path: string;
}

export function buscarSubseccionesPorTitulo(
  searchTerm: string
): SubseccionResult[] {
  if (!contenido || !contenido.modulos) return []; // Verificar que contenido y modulos existen

  const palabrasBusqueda = searchTerm.toLowerCase().trim().split(/\s+/);
  const subseccionesEncontradas: SubseccionResult[] = [];

  // Iterar sobre cada módulo en el objeto contenido
  Object.values(contenido.modulos).forEach((modulo) => {
    // Verificar que el módulo es un objeto de tipo Modulo y no el índice
    if (modulo && typeof modulo !== "string" && modulo.secciones) {
      // Iterar sobre cada sección dentro del módulo
      Object.values(modulo.secciones).forEach((seccion) => {
        if (seccion && seccion.subsecciones) {
          // Iterar sobre cada subsección dentro de la sección
          Object.entries(seccion.subsecciones).forEach(([, subseccion]) => {
            // Verificar que la subsección es un objeto de tipo Subseccion
            if (subseccion && typeof subseccion !== "string") {
              // Convertir el título de la subsección a minúsculas y verificar coincidencias
              const tituloLower = subseccion.title.toLowerCase();
              const contieneTodasLasPalabras = palabrasBusqueda.every(
                (palabra) => tituloLower.includes(palabra)
              );

              // Si todas las palabras están en el título, añadir a la lista de resultados
              if (contieneTodasLasPalabras) {
                subseccionesEncontradas.push({
                  title: subseccion.title,
                  path: subseccion.path,
                });
              }
            }
          });
        }
      });
    }
  });

  return subseccionesEncontradas;
}
