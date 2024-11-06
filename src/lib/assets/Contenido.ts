// Interfaces base para la estructura de datos
export interface Subseccion {
  path: string;
  title: string;
}

export interface SubseccionesMap {
  [key: string]: string | Subseccion;
}

export interface Seccion {
  index: string;
  title: string;
  subsecciones: SubseccionesMap;
}

export interface SeccionesMap {
  [key: string | number]: Seccion;
}

export interface Modulo {
  index: string;
  title: string;
  secciones: SeccionesMap;
}

export interface Contenido {
  modulos: {
    index: string; // Movemos index aquí como parte de un objeto anidado
    [key: string | number]: Modulo | string; // Permite tanto módulos como el string del index
  };
}

export const contenido: Contenido = {
  modulos: {
    index: "/modulos",
    1: {
      index: "/modulos/1",
      title: "Ingeniería de Software y Calidad",
      secciones: {
        1: {
          index: "/modulos/1/origen-evolucion-ingenieria-software",
          title: "Origen y Evolución de la Ingeniería de Software",
          subsecciones: {
            1: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/origen-ingenieria-software",
              title: "Origen de la Ingeniería de Software",
            },
            2: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/objetivos-finalidad",
              title: "Objetivos y Finalidad",
            },
            3: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/caracteristicas-principios",
              title: "Características y Principios",
            },
            4: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/importancia",
              title: "Importancia",
            },
          },
        },
        2: {
          index: "/modulos/1/calidad-software-conceptos-modelos-criterios",
          title: "Calidad de Software: Conceptos, Modelos y Criterios",
          subsecciones: {
            1: {
              path: "/modulos/1/calidad-software-conceptos-modelos-criterios/concepto-calidad",
              title: "Concepto de Calidad",
            },
            2: {
              path: "/modulos/1/calidad-software-conceptos-modelos-criterios/evolucion-modelos",
              title: "Evolución de Modelos",
            },
            3: {
              path: "/modulos/1/calidad-software-conceptos-modelos-criterios/criterios-calidad",
              title: "Criterios de Calidad",
            },
          },
        },
        3: {
          index: "/modulos/1/herramientas-calidad-software",
          title: "Herramientas de Calidad de Software",
          subsecciones: {
            1: {
              path: "/modulos/1/herramientas-calidad-software/planificacion-desarrollo",
              title: "Planificación y Desarrollo",
            },
            2: {
              path: "/modulos/1/herramientas-calidad-software/modelamiento-seguimiento",
              title: "Modelamiento y Seguimiento",
            },
          },
        },
        4: {
          index: "/modulos/1/normas-estandares-calidad-software",
          title: "Normas y Estándares de Calidad de Software",
          subsecciones: {
            "1": {
              path: "/modulos/1/normas-estandares-calidad-software/normas-internacionales",
              title: "Normas Internacionales",
            },
            "1.1": {
              path: "/modulos/1/normas-estandares-calidad-software/normas-internacionales/iso-9001",
              title: "ISO 9001",
            },
            "2": {
              path: "/modulos/1/normas-estandares-calidad-software/estandares-calidad",
              title: "Estándares de Calidad",
            },
            "2.1": {
              path: "/modulos/1/normas-estandares-calidad-software/estandares-calidad/ieee-estandares",
              title: "IEEE Estándares",
            },
          },
        },
      },
    },
    2: {
      index: "/modulos/2",
      title: "Verificación y Validación",
      secciones: {
        1: {
          index: "/modulos/2/conceptos-fundamentales-vyv",
          title: "Conceptos Fundamentales de V&V",
          subsecciones: {
            1: {
              path: "/modulos/2/conceptos-fundamentales-vyv/definicion-verificacion-validacion",
              title: "Definición de Verificación y Validación",
            },
            2: {
              path: "/modulos/2/conceptos-fundamentales-vyv/importancia-vv-ciclo-vida-software",
              title: "Importancia de V&V en el Ciclo de Vida del Software",
            },
            3: {
              path: "/modulos/2/conceptos-fundamentales-vyv/fases-ciclo-vida-vv",
              title: "Fases del Ciclo de Vida de V&V",
            },
          },
        },
        2: {
          index: "/modulos/2/verificacion-documentacion-requerimientos",
          title: "Verificación de Documentación de Requerimientos",
          subsecciones: {
            1: {
              path: "/modulos/2/verificacion-documentacion-requerimientos/tecnicas-verificacion",
              title: "Técnicas de Verificación",
            },
            2: {
              path: "/modulos/2/verificacion-documentacion-requerimientos/criterios-calidad",
              title: "Criterios de Calidad de los Requerimientos",
            },
            3: {
              path: "/modulos/2/verificacion-documentacion-requerimientos/normas-verificacion",
              title: "Normas Relacionadas a la Verificación de Requerimientos",
            },
          },
        },
        3: {
          index: "/modulos/2/validacion-documentacion-requerimientos",
          title: "Validación de Documentación de Requerimientos",
          subsecciones: {
            1: {
              path: "/modulos/2/validacion-documentacion-requerimientos/metodos-validacion",
              title: "Métodos de Validación",
            },
            2: {
              path: "/modulos/2/validacion-documentacion-requerimientos/pruebas-validacion",
              title: "Pruebas de Validación",
            },
            3: {
              path: "/modulos/2/validacion-documentacion-requerimientos/fallos-comunes",
              title: "Fallos Comunes",
            },
          },
        },
        4: {
          index: "/modulos/2/revision-formal-documento-requerimientos",
          title: "Revisión Formal de Documento de Requerimientos",
          subsecciones: {
            1: {
              path: "/modulos/2/revision-formal-documento-requerimientos/proceso-revision",
              title: "Proceso de Revisión",
            },
            2: {
              path: "/modulos/2/revision-formal-documento-requerimientos/checklists",
              title: "Checklists",
            },
            3: {
              path: "/modulos/2/revision-formal-documento-requerimientos/correccion-seguimiento",
              title: "Corrección y Seguimiento",
            },
          },
        },
        5: {
          index: "/modulos/2/herramientas-vyv-analisis-requerimientos",
          title: "Herramientas de V&V para Análisis de Requerimientos",
          subsecciones: {
            1: {
              path: "/modulos/2/herramientas-vyv-analisis-requerimientos/gestion-requisitos",
              title: "Herramientas de Gestión de Requisitos",
            },
            2: {
              path: "/modulos/2/herramientas-vyv-analisis-requerimientos/colaboracion-documentacion",
              title: "Herramientas de Colaboración y Documentación",
            },
          },
        },
      },
    },
    3: {
      index: "/modulos/3",
      title: "Diseño de Sistema",
      secciones: {
        1: {
          index: "/modulos/3/conceptos-fundamentales-diseno-sistema",
          title: "Conceptos Fundamentales del Diseño de Sistema",
          subsecciones: {
            1: {
              path: "/modulos/3/conceptos-fundamentales-diseno-sistema/definicion-diseno",
              title: "Definición de Diseño",
            },
            2: {
              path: "/modulos/3/conceptos-fundamentales-diseno-sistema/importancia-vyv",
              title: "Importancia de V&V",
            },
            3: {
              path: "/modulos/3/conceptos-fundamentales-diseno-sistema/fases-diseno",
              title: "Fases de Diseño",
            },
          },
        },
        2: {
          index: "/modulos/3/verificacion-documentacion-diseno",
          title: "Verificación de Documentación de Diseño",
          subsecciones: {
            1: {
              path: "/modulos/3/verificacion-documentacion-diseno/tecnicas-verificacion",
              title: "Técnicas de Verificación",
            },
            2: {
              path: "/modulos/3/verificacion-documentacion-diseno/criterios-calidad",
              title: "Criterios de Calidad",
            },
            3: {
              path: "/modulos/3/verificacion-documentacion-diseno/normas-verificacion",
              title: "Normas de Verificación",
            },
          },
        },
        3: {
          index: "/modulos/3/validacion-documentacion-diseno",
          title: "Validación de Documentación de Diseño",
          subsecciones: {
            1: {
              path: "/modulos/3/validacion-documentacion-diseno/metodos-validacion",
              title: "Métodos de Validación",
            },
            2: {
              path: "/modulos/3/validacion-documentacion-diseno/pruebas-validacion",
              title: "Pruebas de Validación",
            },
            3: {
              path: "/modulos/3/validacion-documentacion-diseno/fallos-comunes",
              title: "Fallos Comunes",
            },
          },
        },
        4: {
          index: "/modulos/3/revision-formal-diseno-sistema",
          title: "Revisión Formal del Diseño del Sistema",
          subsecciones: {
            1: {
              path: "/modulos/3/revision-formal-diseno-sistema/proceso-revision",
              title: "Proceso de Revisión",
            },
            2: {
              path: "/modulos/3/revision-formal-diseno-sistema/checklists",
              title: "Checklists",
            },
            3: {
              path: "/modulos/3/revision-formal-diseno-sistema/gestion-errores",
              title: "Gestión de Errores",
            },
          },
        },
        5: {
          index: "/modulos/3/herramientas-vyv-diseno-sistema",
          title: "Herramientas de V&V para Diseño de Sistema",
          subsecciones: {
            1: {
              path: "/modulos/3/herramientas-vyv-diseno-sistema/diseno-modelado",
              title: "Diseño y Modelado",
            },
            2: {
              path: "/modulos/3/herramientas-vyv-diseno-sistema/gestion-trazabilidad",
              title: "Gestión de Trazabilidad",
            },
          },
        },
      },
    },
    4: {
      index: "/modulos/4",
      title: "Factores Críticos de Éxito",
      secciones: {
        1: {
          index:
            "/modulos/4/definicion-caracteristicas-factores-criticos-exito",
          title: "Definición y Características de Factores Críticos de Éxito",
          subsecciones: {
            1: {
              path: "/modulos/4/definicion-caracteristicas-factores-criticos-exito/concepto",
              title: "Concepto",
            },
            2: {
              path: "/modulos/4/definicion-caracteristicas-factores-criticos-exito/tipos",
              title: "Tipos",
            },
          },
        },
        2: {
          index: "/modulos/4/factores-tecnicos-criticos-desarrollo-software",
          title: "Factores Técnicos Críticos en el Desarrollo de Software",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-tecnicos-criticos-desarrollo-software/eleccion-arquitectura",
              title: "Elección de Arquitectura",
            },
            2: {
              path: "/modulos/4/factores-tecnicos-criticos-desarrollo-software/seleccion-tecnologias",
              title: "Selección de Tecnologías",
            },
            3: {
              path: "/modulos/4/factores-tecnicos-criticos-desarrollo-software/calidad-codigo",
              title: "Calidad de Código",
            },
          },
        },
        3: {
          index: "/modulos/4/factores-humanos-desarrollo-software",
          title: "Factores Humanos en el Desarrollo de Software",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-humanos-desarrollo-software/capacitacion-habilidades",
              title: "Capacitación y Habilidades",
            },
            2: {
              path: "/modulos/4/factores-humanos-desarrollo-software/comunicacion-efectiva",
              title: "Comunicación Efectiva",
            },
            3: {
              path: "/modulos/4/factores-humanos-desarrollo-software/liderazgo-gestion",
              title: "Liderazgo y Gestión",
            },
          },
        },
        4: {
          index: "/modulos/4/factores-organizacionales-criticos",
          title: "Factores Organizacionales Críticos",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-organizacionales-criticos/planificacion-gestion",
              title: "Planificación y Gestión",
            },
            2: {
              path: "/modulos/4/factores-organizacionales-criticos/gestion-riesgos",
              title: "Gestión de Riesgos",
            },
            3: {
              path: "/modulos/4/factores-organizacionales-criticos/control-financiero",
              title: "Control Financiero",
            },
          },
        },
        5: {
          index: "/modulos/4/metodologias-procesos-factores-exito",
          title: "Metodologías y Procesos como Factores de Éxito",
          subsecciones: {
            1: {
              path: "/modulos/4/metodologias-procesos-factores-exito/metodologias-agiles",
              title: "Metodologías Ágiles",
            },
            2: {
              path: "/modulos/4/metodologias-procesos-factores-exito/gestion-procesos",
              title: "Gestión de Procesos",
            },
            3: {
              path: "/modulos/4/metodologias-procesos-factores-exito/mejora-continua",
              title: "Mejora Continua",
            },
          },
        },
      },
    },
  },
};

export function getSubsecciones(currentPath: string) {
  // Obtener número de módulo del path
  const moduleNumber = currentPath.split("/")[2];

  // Obtener el módulo
  const modulo = contenido.modulos[moduleNumber];
  if (!modulo) return [];

  // Buscar la sección que contiene este path en su index
  const seccion = Object.values((modulo as Modulo).secciones).find((seccion) =>
    currentPath.startsWith(seccion.index)
  );

  // Si encuentra la sección, retorna sus subsecciones
  if (seccion) {
    return Object.values(seccion.subsecciones) as Subseccion[];
  }

  return [];
}
