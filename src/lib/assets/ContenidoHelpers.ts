import { Contenido, Modulo, Seccion, Subseccion } from "./Contenido";

interface NavigationResult {
  path: string;
  title: string;
}

export function getNavigationPaths(
  currentPath: string,
  direction: "prev" | "next",
  contenido: Contenido
): NavigationResult | null {
  // Obtener número de módulo del path
  const pathParts = currentPath.split("/");
  const moduleNumber = pathParts[2];

  // Obtener el módulo (ignorando la propiedad 'index')
  const modulos = Object.entries(contenido.modulos).filter(
    ([key, value]) => key !== "index" && typeof value !== "string"
  );
  const currentModule = modulos.find(
    ([key]) => key === moduleNumber
  )?.[1] as Modulo;

  if (!currentModule) return null;

  // Convertir secciones a array ordenado
  const secciones = Object.entries(currentModule.secciones)
    .filter(([, value]) => typeof value !== "string")
    .map(([, value]) => value as Seccion);

  // Encontrar la sección actual
  const currentSeccion = secciones.find((seccion) =>
    currentPath.startsWith(seccion.index)
  );

  if (!currentSeccion) return null;

  // Encontrar índice de la sección actual
  const currentSeccionIndex = secciones.findIndex(
    (seccion) => seccion.index === currentSeccion.index
  );

  // Convertir subsecciones a array ordenado
  const currentSubsecciones = Object.entries(currentSeccion.subsecciones)
    .filter(([, value]) => typeof value !== "string")
    .map(([, value]) => value as Subseccion);

  // Encontrar la subsección actual por su path
  const currentSubseccionIndex = currentSubsecciones.findIndex(
    (subseccion) => currentPath === subseccion.path
  );

  if (direction === "prev") {
    // Si no es la primera subsección de la sección actual
    if (currentSubseccionIndex > 0) {
      const prevSubseccion = currentSubsecciones[currentSubseccionIndex - 1];
      return {
        path: prevSubseccion.path,
        title: prevSubseccion.title,
      };
    }

    // Si es la primera subsección pero no la primera sección
    if (currentSeccionIndex > 0) {
      const prevSeccion = secciones[currentSeccionIndex - 1];
      const prevSubsecciones = Object.entries(prevSeccion.subsecciones)
        .filter(([, value]) => typeof value !== "string")
        .map(([, value]) => value as Subseccion);

      const lastSubseccion = prevSubsecciones[prevSubsecciones.length - 1];
      return {
        path: lastSubseccion.path,
        title: lastSubseccion.title,
      };
    }
  } else if (direction === "next") {
    // Si no es la última subsección de la sección actual
    if (currentSubseccionIndex < currentSubsecciones.length - 1) {
      const nextSubseccion = currentSubsecciones[currentSubseccionIndex + 1];
      return {
        path: nextSubseccion.path,
        title: nextSubseccion.title,
      };
    }

    // Si es la última subsección pero no la última sección
    if (currentSeccionIndex < secciones.length - 1) {
      const nextSeccion = secciones[currentSeccionIndex + 1];
      const nextSubsecciones = Object.entries(nextSeccion.subsecciones)
        .filter(([, value]) => typeof value !== "string")
        .map(([, value]) => value as Subseccion);

      const firstSubseccion = nextSubsecciones[0];
      return {
        path: firstSubseccion.path,
        title: firstSubseccion.title,
      };
    }
  }

  return null;
}
