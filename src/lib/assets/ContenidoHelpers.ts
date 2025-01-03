import { contenido, Modulo, Seccion, Subseccion } from "./Contenido";

interface NavigationResult {
  path: string | null;
  title: string | null;
  moduleNumber: string;
  sectionNumber: string;
  subsectionNumber: string | null;
  breadcrumbText: string;
}

export function getNavigationPaths(
  currentPath: string,
  direction: "prev" | "next",
): NavigationResult {
  // Obtener número de módulo del path
  const pathParts = currentPath.split("/");
  const moduleNumber = pathParts[2];

  // Obtener el módulo (ignorando la propiedad 'index')
  const modulos = Object.entries(contenido.modulos).filter(
    ([key, value]) => key !== "index" && typeof value !== "string"
  );
  const currentModuleEntry = modulos.find(
    ([key]) => key === moduleNumber
  );
  const currentModule = currentModuleEntry?.[1] as Modulo;

  if (!currentModule) {
    return {
      path: null,
      title: null,
      moduleNumber: moduleNumber,
      sectionNumber: "",
      subsectionNumber: null,
      breadcrumbText: `Módulo ${moduleNumber}`
    };
  }

  // Convertir secciones a array ordenado con sus keys
  const secciones = Object.entries(currentModule.secciones)
    .filter(([, value]) => typeof value !== "string")
    .map(([key, value]) => ({ key, value: value as Seccion }));

  // Encontrar la sección actual
  const currentSeccionEntry = secciones.find((seccion) =>
    currentPath.startsWith(seccion.value.index)
  );

  if (!currentSeccionEntry) {
    return {
      path: null,
      title: null,
      moduleNumber: moduleNumber,
      sectionNumber: "",
      subsectionNumber: null,
      breadcrumbText: `Módulo ${moduleNumber}`
    };
  }

  // Encontrar índice de la sección actual
  const currentSeccionIndex = secciones.findIndex(
    (seccion) => seccion.value.index === currentSeccionEntry.value.index
  );

  // Convertir subsecciones a array ordenado con sus keys
  const currentSubsecciones = Object.entries(currentSeccionEntry.value.subsecciones)
    .filter(([, value]) => typeof value !== "string")
    .map(([key, value]) => ({ key, value: value as Subseccion }));

  // Encontrar la subsección actual por su path
  const currentSubseccionIndex = currentSubsecciones.findIndex(
    (subseccion) => currentPath === subseccion.value.path
  );

  // Valores por defecto si no se encuentra navegación
  let navigationResult: NavigationResult = {
    path: null,
    title: null,
    moduleNumber: moduleNumber,
    sectionNumber: currentSeccionEntry.key,
    subsectionNumber: null,
    breadcrumbText: `Módulo ${moduleNumber} | Sección ${currentSeccionEntry.key}`
  };

  if (direction === "prev") {
    // Si no es la primera subsección de la sección actual
    if (currentSubseccionIndex > 0) {
      const prevSubseccion = currentSubsecciones[currentSubseccionIndex - 1];
      navigationResult = {
        path: prevSubseccion.value.path,
        title: prevSubseccion.value.title,
        moduleNumber: moduleNumber,
        sectionNumber: currentSeccionEntry.key,
        subsectionNumber: prevSubseccion.key,
        breadcrumbText: `Módulo ${moduleNumber} | Sección ${currentSeccionEntry.key} | Subsección ${prevSubseccion.key}`
      };
    }
    // Si es la primera subsección pero no la primera sección
    else if (currentSeccionIndex > 0) {
      const prevSeccion = secciones[currentSeccionIndex - 1];
      const prevSubsecciones = Object.entries(prevSeccion.value.subsecciones)
        .filter(([, value]) => typeof value !== "string")
        .map(([key, value]) => ({ key, value: value as Subseccion }));

      const lastSubseccion = prevSubsecciones[prevSubsecciones.length - 1];
      navigationResult = {
        path: lastSubseccion.value.path,
        title: lastSubseccion.value.title,
        moduleNumber: moduleNumber,
        sectionNumber: prevSeccion.key,
        subsectionNumber: lastSubseccion.key,
        breadcrumbText: `Módulo ${moduleNumber} | Sección ${prevSeccion.key} | Subsección ${lastSubseccion.key}`
      };
    }
  } else if (direction === "next") {
    // Si no es la última subsección de la sección actual
    if (currentSubseccionIndex < currentSubsecciones.length - 1) {
      const nextSubseccion = currentSubsecciones[currentSubseccionIndex + 1];
      navigationResult = {
        path: nextSubseccion.value.path,
        title: nextSubseccion.value.title,
        moduleNumber: moduleNumber,
        sectionNumber: currentSeccionEntry.key,
        subsectionNumber: nextSubseccion.key,
        breadcrumbText: `Módulo ${moduleNumber} | Sección ${currentSeccionEntry.key} | Subsección ${nextSubseccion.key}`
      };
    }
    // Si es la última subsección pero no la última sección
    else if (currentSeccionIndex < secciones.length - 1) {
      const nextSeccion = secciones[currentSeccionIndex + 1];
      const nextSubsecciones = Object.entries(nextSeccion.value.subsecciones)
        .filter(([, value]) => typeof value !== "string")
        .map(([key, value]) => ({ key, value: value as Subseccion }));

      const firstSubseccion = nextSubsecciones[0];
      navigationResult = {
        path: firstSubseccion.value.path,
        title: firstSubseccion.value.title,
        moduleNumber: moduleNumber,
        sectionNumber: nextSeccion.key,
        subsectionNumber: firstSubseccion.key,
        breadcrumbText: `Módulo ${moduleNumber} | Sección ${nextSeccion.key} | Subsección ${firstSubseccion.key}`
      };
    }
  }

  return navigationResult;
}

export function generateBreadcrumb(
  currentPath: string
): { label: string; href: string }[] {
  const breadcrumb: { label: string; href: string }[] = [
    { label: "Módulos", href: "/modulos" },
  ];

  // Obtener número de módulo del path
  const moduleNumber = currentPath.split("/")[2];
  const modulo = contenido.modulos[moduleNumber];
  if (!modulo) return breadcrumb;

  // Agregar módulo al breadcrumb
  breadcrumb.push({
    label: `(Módulo ${moduleNumber}) ${(modulo as Modulo).title}`,
    href: (modulo as Modulo).index,
  });

  // Buscar la sección y subsección correspondientes al path actual
  let seccionActualKey: string | null = null;
  let subseccionActualKey: string | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let seccionActual: any = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let subseccionActual: any = null;

  for (const seccionKey in (modulo as Modulo).secciones) {
    const seccion = (modulo as Modulo).secciones[seccionKey];
    const subseccion = Object.entries(seccion.subsecciones).find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ([, subsec]: any) => currentPath.startsWith(subsec.path)
    );
    if (subseccion) {
      seccionActualKey = seccionKey;
      seccionActual = seccion;
      subseccionActualKey = subseccion[0];
      subseccionActual = subseccion[1];
      break;
    }
  }

  if (!seccionActual || !subseccionActual) return breadcrumb;

  // Agregar sección con su key al breadcrumb
  breadcrumb.push({
    label: `(Sección ${seccionActualKey}) ${seccionActual.title}`,
    href: "./",
  });

  // Agregar subsección con su key al breadcrumb
  breadcrumb.push({
    label: `(Subsección ${subseccionActualKey}) ${subseccionActual.title}`,
    href: subseccionActual.path,
  });

  return breadcrumb;
}

export function getSubsectionTitle(currentPath: string): string | null {
  // Obtener número de módulo del path
  const moduleNumber = currentPath.split("/")[2];

  // Obtener el módulo
  const modulo = contenido.modulos[moduleNumber];
  if (!modulo || typeof modulo === "string") return null;

  // Buscar la sección que contiene este path
  const seccion = Object.values(modulo.secciones).find((seccion) =>
    currentPath.startsWith(seccion.index)
  );

  if (!seccion) return null;

  // Buscar la subsección que coincide exactamente con el path
  const subseccion = Object.values(seccion.subsecciones).find(
    (subseccion) => (subseccion as Subseccion).path === currentPath
  ) as Subseccion | undefined;

  // Retornar el título si existe la subsección
  return subseccion?.title || null;
}

export interface SubseccionSearchResult {
  title: string; // Título de la subsección
  path: string; // Ruta de la subsección
  breadcrumbText: string; // Texto formateado: "Módulo X | Sección Y | Subsección Z"
}

export function buscarSubseccionesPorTitulo(
  searchTerm: string
): SubseccionSearchResult[] {
  const palabrasBusqueda = searchTerm.toLowerCase().trim().split(/\s+/);
  const resultados: SubseccionSearchResult[] = [];

  // Iteramos sobre cada módulo
  Object.entries(contenido.modulos).forEach(([moduloKey, modulo]) => {
    // Verificamos que sea un módulo válido y no el índice
    if (modulo && typeof modulo !== "string" && "secciones" in modulo) {
      // Iteramos sobre cada sección
      Object.entries(modulo.secciones).forEach(([seccionKey, seccion]) => {
        if (seccion && seccion.subsecciones) {
          // Iteramos sobre cada subsección
          Object.entries(seccion.subsecciones).forEach(
            ([subseccionKey, subseccion]) => {
              if (subseccion && typeof subseccion !== "string") {
                const tituloLower = subseccion.title.toLowerCase();
                const contieneTodasLasPalabras = palabrasBusqueda.every(
                  (palabra) => tituloLower.includes(palabra)
                );

                if (contieneTodasLasPalabras) {
                  // Construimos el texto del breadcrumb
                  const breadcrumbText = `Módulo ${moduloKey} | Sección ${seccionKey} | Subsección ${subseccionKey}`;

                  resultados.push({
                    title: subseccion.title,
                    path: subseccion.path,
                    breadcrumbText: breadcrumbText,
                  });
                }
              }
            }
          );
        }
      });
    }
  });

  return resultados;
}

// Función auxiliar para obtener información más detallada si se necesita
export function obtenerDetallesSubseccion(
  path: string
): SubseccionSearchResult | null {
  for (const [moduloKey, modulo] of Object.entries(contenido.modulos)) {
    if (modulo && typeof modulo !== "string" && "secciones" in modulo) {
      for (const [seccionKey, seccion] of Object.entries(modulo.secciones)) {
        for (const [subseccionKey, subseccion] of Object.entries(
          seccion.subsecciones
        )) {
          if (typeof subseccion !== "string" && subseccion.path === path) {
            return {
              title: subseccion.title,
              path: subseccion.path,
              breadcrumbText: `Módulo ${moduloKey} | Sección ${seccionKey} | Subsección ${subseccionKey}`,
            };
          }
        }
      }
    }
  }
  return null;
}
