import { buscarSubseccionesPorTitulo } from "@/components/shared/CebeceraConBuscador";
import { CommandVoice } from "../../CommandVoice";
import { Listener } from "../../Listener";
import { Speaker } from "../../Speaker";

import { C_M_Modulo_2 } from "./CommandMenus";

const speaker = Speaker.getInstance();
//Comandos Modulo 1

export const C_V_Modulo_1 = new CommandVoice(
  ["módulo1", "modulo1", "módulo 1", "modulo 1", "módulo uno"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo al Módulo 1.", () => resolve(null));
      window.location.href = "/modulos/1";
    });
  }
);

export const C_VModulo_1_Seccion_1 = new CommandVoice(
  ["calidad software conceptos modelos criterios", "sección 1", "sección uno"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Calidad Software: Conceptos, Modelos y Criterios.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/1/calidad-software-conceptos-modelos-criterios";
    });
  }
);

export const C_VModulo_1_Seccion_2 = new CommandVoice(
  ["herramientas calidad software", "sección 2", "sección dos"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo a Herramientas de Calidad de Software.", () =>
        resolve(null)
      );
      window.location.href = "/modulos/1/herramientas-calidad-software";
    });
  }
);

export const C_VModulo_1_Seccion_3 = new CommandVoice(
  ["normas y estándares de calidad software", "sección 3", "sección tres"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Normas y Estándares de Calidad de Software.",
        () => resolve(null)
      );
      window.location.href = "/modulos/1/normas-estandares-calidad-software";
    });
  }
);

export const C_VModulo_1_Seccion_4 = new CommandVoice(
  [
    "origen y evolución de la ingeniería de software",
    "sección 4",
    "sección cuatro",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Origen y Evolución de la Ingeniería de Software.",
        () => resolve(null)
      );
      window.location.href = "/modulos/1/origen-evolucion-ingenieria-software";
    });
  }
);

//Comandos Modulo 2

export const C_V_Modulo_2 = new CommandVoice(
  ["módulo2", "modulo2", "módulo 2", "modulo 2", "módulo dos"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo al Módulo 2.", () => {
        resolve(null);

        C_M_Modulo_2.start();
      });
      window.location.href = "/modulos/2";
    });
  }
);

export const C_VModulo_2_Seccion_1 = new CommandVoice(
  ["conceptos fundamentales vyv", "sección 1", "sección uno"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Conceptos Fundamentales de Verificación y Validación.",
        () => resolve(null)
      );
      window.location.href = "/modulos/2/conceptos-fundamentales-vyv";
    });
  }
);

export const C_VModulo_2_Seccion_2 = new CommandVoice(
  [
    "verificación de la documentación de requerimientos",
    "sección 2",
    "sección dos",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Verificación de la Documentación de Requerimientos.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/2/verificacion-documentacion-requerimientos";
    });
  }
);

export const C_VModulo_2_Seccion_3 = new CommandVoice(
  [
    "validación de la documentación de requerimientos",
    "sección 3",
    "sección tres",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Validación de la Documentación de Requerimientos.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/2/validacion-documentacion-requerimientos";
    });
  }
);

export const C_VModulo_2_Seccion_4 = new CommandVoice(
  [
    "revisión formal del documento de requerimientos",
    "sección 4",
    "sección cuatro",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Revisión Formal del Documento de Requerimientos.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/2/revision-formal-documento-requerimientos";
    });
  }
);

export const C_VModulo_2_Seccion_5 = new CommandVoice(
  [
    "herramientas vyv para análisis de requerimientos",
    "sección 5",
    "sección cinco",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Herramientas VyV para Análisis de Requerimientos.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/2/herramientas-vyv-analisis-requerimientos";
    });
  }
);

//Comandos Modulo 3

export const C_V_Modulo_3 = new CommandVoice(
  ["módulo3", "modulo3", "módulo 3", "modulo 3", "módulo tres"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo al Módulo 3.", () => resolve(null));
      window.location.href = "/modulos/3";
    });
  }
);

export const C_VModulo_3_Seccion_1 = new CommandVoice(
  ["conceptos fundamentales de diseño de sistema", "sección 1", "sección uno"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Conceptos Fundamentales de Diseño de Sistema.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/3/conceptos-fundamentales-diseno-sistema";
    });
  }
);

export const C_VModulo_3_Seccion_2 = new CommandVoice(
  ["herramientas vyv para diseño de sistema", "sección 2", "sección dos"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Herramientas VyV para Diseño de Sistema.",
        () => resolve(null)
      );
      window.location.href = "/modulos/3/herramientas-vyv-diseno-sistema";
    });
  }
);

export const C_VModulo_3_Seccion_3 = new CommandVoice(
  ["revisión formal del diseño de sistema", "sección 3", "sección tres"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Revisión Formal del Diseño de Sistema.",
        () => resolve(null)
      );
      window.location.href = "/modulos/3/revision-formal-diseno-sistema";
    });
  }
);

export const C_VModulo_3_Seccion_4 = new CommandVoice(
  ["validación de la documentación de diseño", "sección 4", "sección cuatro"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Validación de la Documentación de Diseño.",
        () => resolve(null)
      );
      window.location.href = "/modulos/3/validacion-documentacion-diseno";
    });
  }
);

export const C_VModulo_3_Seccion_5 = new CommandVoice(
  ["verificación de la documentación de diseño", "sección 5", "sección cinco"],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Verificación de la Documentación de Diseño.",
        () => resolve(null)
      );
      window.location.href = "/modulos/3/verificacion-documentacion-diseno";
    });
  }
);

//Comandos Modulo 4

export const C_V_Modulo_4 = new CommandVoice(
  ["módulo4", "modulo4", "módulo 4", "modulo 4", "módulo cuatro"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo al Módulo 4.", () => resolve(null));
      window.location.href = "/modulos/4";
    });
  }
);

export const C_VModulo_4_Seccion_1 = new CommandVoice(
  [
    "definición de características y factores críticos de éxito",
    "sección 1",
    "sección uno",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Definición de Características y Factores Críticos de Éxito.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/4/definicion-caracteristicas-factores-criticos-exito";
    });
  }
);

export const C_VModulo_4_Seccion_2 = new CommandVoice(
  [
    "ejemplos de factores críticos de éxito en proyectos reales",
    "sección 2",
    "sección dos",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Ejemplos de Factores Críticos de Éxito en Proyectos Reales.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales";
    });
  }
);

export const C_VModulo_4_Seccion_3 = new CommandVoice(
  ["factores externos", "sección 3", "sección tres"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo a Factores Externos.", () => resolve(null));
      window.location.href = "/modulos/4/factores-externos";
    });
  }
);

export const C_VModulo_4_Seccion_4 = new CommandVoice(
  [
    "factores humanos en el desarrollo de software",
    "sección 4",
    "sección cuatro",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Factores Humanos en el Desarrollo de Software.",
        () => resolve(null)
      );
      window.location.href = "/modulos/4/factores-humanos-desarrollo-software";
    });
  }
);

export const C_VModulo_4_Seccion_5 = new CommandVoice(
  ["factores organizacionales críticos", "sección 5", "sección cinco"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Redirigiendo a Factores Organizacionales Críticos.", () =>
        resolve(null)
      );
      window.location.href = "/modulos/4/factores-organizacionales-criticos";
    });
  }
);

export const C_VModulo_4_Seccion_6 = new CommandVoice(
  [
    "factores técnicos críticos en el desarrollo de software",
    "sección 6",
    "sección seis",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Factores Técnicos Críticos en el Desarrollo de Software.",
        () => resolve(null)
      );
      window.location.href =
        "/modulos/4/factores-tecnicos-criticos-desarrollo-software";
    });
  }
);

export const C_VModulo_4_Seccion_7 = new CommandVoice(
  [
    "metodologías y procesos para factores de éxito",
    "sección 7",
    "sección siete",
  ],
  () => {
    return new Promise((resolve) => {
      speaker.start(
        "Redirigiendo a Metodologías y Procesos para Factores de Éxito.",
        () => resolve(null)
      );
      window.location.href = "/modulos/4/metodologias-procesos-factores-exito";
    });
  }
);

//Comandos Especiales

export const C_V_Buscar = new CommandVoice(
  ["buscar"],
  () => {
    return new Promise((resolve) => {
      speaker.start("Por favor, di el término que deseas buscar.", () => {
        const listener = Listener.getInstance();

        listener.start((transcript) => {
          const searchInput = document.getElementById(
            "buscador-global"
          ) as HTMLInputElement;

          if (searchInput) {
            searchInput.value = transcript;

            const searchForm = document.getElementById(
              "formulario-busqueda"
            ) as HTMLFormElement;

            if (searchForm) {
              searchForm.addEventListener("submit", (event) => {
                event.preventDefault();
                
                console.log(buscarSubseccionesPorTitulo(transcript));
              });

              searchForm.dispatchEvent(new Event("submit"));
            }
          }

          resolve(null);
        });
      });
    });
  },
  "Buscando..."
);
