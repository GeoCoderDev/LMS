import { getSubsectionTitle } from "@/lib/assets/ContenidoHelpers";
import { CommandMenu } from "../../CommandMenu";
import {
  C_V_Anterior,
  C_V_Buscar,
  C_V_Leer,
  C_V_Modulo_1,
  C_V_Modulo_2,
  C_V_Modulo_2_Seccion_1,
  C_V_Modulo_2_Seccion_2,
  C_V_Modulo_2_Seccion_3,
  C_V_Modulo_2_Seccion_4,
  C_V_Modulo_2_Seccion_5,
  C_V_Modulo_3,
  C_V_Modulo_3_Seccion_1,
  C_V_Modulo_3_Seccion_2,
  C_V_Modulo_3_Seccion_3,
  C_V_Modulo_3_Seccion_4,
  C_V_Modulo_3_Seccion_5,
  C_V_Modulo_4,
  C_V_Modulo_4_Seccion_1,
  C_V_Modulo_4_Seccion_2,
  C_V_Modulo_4_Seccion_3,
  C_V_Modulo_4_Seccion_4,
  C_V_Modulo_4_Seccion_5,
  C_V_Modulo_4_Seccion_6,
  C_V_Modulo_4_Seccion_7,
  C_V_Siguiente,
  C_VModulo_1_Seccion_1,
  C_VModulo_1_Seccion_2,
  C_VModulo_1_Seccion_3,
  C_VModulo_1_Seccion_4,
} from "./AllCommands";

export const C_M_Home = new CommandMenu(
  "Bienvenido. En esta página principal, puedes navegar rápidamente utilizando comandos de voz. Para acceder directamente a los módulos disponibles, di: 'Módulo uno', 'Módulo dos', 'Módulo tres' o 'Módulo cuatro'.",
  [C_V_Modulo_1, C_V_Modulo_2, C_V_Modulo_3, C_V_Modulo_4]
);

export const C_M_Menu_Modulos = new CommandMenu(
  "Puede decir: 'Buscar' para realizar una búsqueda, o puede decir 'Modulo 1', 'Modulo 2', 'Modulo 3' o 'Modulo 4' para acceder a los diferentes módulos. " +
  "El Módulo 1 trata sobre 'Origen, Modelos, Normas y Herramientas para la Calidad del Software'. " +
  "El Módulo 2 cubre 'Verificación y Validación de la Documentación del Análisis de Requerimientos'. " +
  "El Módulo 3 se enfoca en 'Verificación y Validación de la Documentación del Diseño del Sistema'. " +
  "Y el Módulo 4 aborda 'Factores Críticos de Éxito para el Desarrollo del Software'.",
  [
    C_V_Buscar,
    C_V_Modulo_1,
    C_V_Modulo_2,
    C_V_Modulo_3,
    C_V_Modulo_4
  ]
);


export const C_M_Modulo_1 = new CommandMenu(
  `El Módulo 1 de Calidad de Software consta de cuatro secciones. Para dirigirte a ellas, puedes usar comandos de voz cortos y sencillos: di 'sección 1' o 'calidad software conceptos modelos criterios' para acceder a la Sección 1; para la Sección 2, utiliza 'sección 2' o 'herramientas calidad software'; si deseas ir a la Sección 3, puedes decir 'sección 3' o 'normas y estándares de calidad software'; y para la Sección 4, simplemente di 'sección 4' o 'origen y evolución de la ingeniería de software'. Recuerda que puedes elegir entre el número de la sección o una frase clave relacionada, y asegúrate de hablar claro para que te escuche. ¡Elige una sección y comienza a explorar`,
  [
    C_VModulo_1_Seccion_1,
    C_VModulo_1_Seccion_2,
    C_VModulo_1_Seccion_3,
    C_VModulo_1_Seccion_4,
  ]
);

export const C_M_Modulo_2 = new CommandMenu(
  `El Módulo 2 consta de cinco secciones. Para dirigirte a ellas, puedes usar los siguientes comandos de voz: di 'sección 1' o 'conceptos fundamentales de la verificación y validación' para acceder a la Sección 1; para la Sección 2, utiliza 'sección 2' o 'verificación de la documentación de requerimientos'; si deseas ir a la Sección 3, puedes decir 'sección 3' o 'validación de la documentación de requerimientos'; para la Sección 4, di 'sección 4' o 'revisión formal del documento de requerimientos'; y para la Sección 5, simplemente di 'sección 5' o 'herramientas para V&V en el análisis de requerimientos'. Recuerda que puedes elegir entre el número de la sección o una frase clave relacionada.`,
  [
    C_V_Modulo_2_Seccion_1,
    C_V_Modulo_2_Seccion_2,
    C_V_Modulo_2_Seccion_3,
    C_V_Modulo_2_Seccion_4,
    C_V_Modulo_2_Seccion_5,
  ]
);
export const C_M_Modulo_3 = new CommandMenu(
  `El Módulo 3, enfocado en la Verificación y Validación de la Documentación del Diseño del Sistema, está organizado en cinco secciones principales. Para navegar por ellas, puedes utilizar los siguientes comandos de voz:
  
  Para la Sección 1, puedes decir 'sección 1' o 'conceptos fundamentales del diseño'
  Para la Sección 2, utiliza 'sección 2' o 'verificación de documentación'
  Para la Sección 3, menciona 'sección 3' o 'validación de documentación'
  Para la Sección 4, di 'sección 4' o 'revisión formal del diseño'
  Para la Sección 5, usa 'sección 5' o 'herramientas de V y V'`,
  [
    C_V_Modulo_3_Seccion_1,
    C_V_Modulo_3_Seccion_2,
    C_V_Modulo_3_Seccion_3,
    C_V_Modulo_3_Seccion_4,
    C_V_Modulo_3_Seccion_5,
  ]
);
export const C_M_Modulo_4 = new CommandMenu(
  `El Módulo 4, que trata sobre los Factores Críticos de Éxito para el Desarrollo del Software, está estructurado en siete secciones completas. Para navegar por este módulo, puedes utilizar los siguientes comandos de voz:
  
  Para la Sección 1, di 'sección 1' o 'definición y características de factores críticos'
  Para la Sección 2, usa 'sección 2' o 'factores técnicos críticos'
  Para la Sección 3, menciona 'sección 3' o 'factores humanos'
  Para la Sección 4, utiliza 'sección 4' o 'factores organizacionales'
  Para la Sección 5, di 'sección 5' o 'metodologías y procesos'
  Para la Sección 6, usa 'sección 6' o 'factores externos'
  Para la Sección 7, menciona 'sección 7' o 'ejemplos de factores críticos'`,
  [
    C_V_Modulo_4_Seccion_1,
    C_V_Modulo_4_Seccion_2,
    C_V_Modulo_4_Seccion_3,
    C_V_Modulo_4_Seccion_4,
    C_V_Modulo_4_Seccion_5,
    C_V_Modulo_4_Seccion_6,
    C_V_Modulo_4_Seccion_7,
  ]
);

export const C_M_Subsecciones = new CommandMenu(
  ``,
  [
    C_V_Leer,
    C_V_Siguiente,
    C_V_Anterior,
    C_V_Buscar,
    C_V_Modulo_1,
    C_V_Modulo_2,
    C_V_Modulo_3,
    C_V_Modulo_4,
  ],
  (currentPath: string) => {
    const subsectionTitle = getSubsectionTitle(currentPath);
    return `Te encuentras en la subsección: ${subsectionTitle}.
    Comandos de voz disponibles:
    - Di "leer" para escuchar el contenido.
    - Di "siguiente" para avanzar a la siguiente subsección.
    - Di "anterior" para regresar a la subsección previa.
    - Para detener la lectura en cualquier momento, presiona Control más Alt más X.

    También puedes dirigirte directamente a cualquiera de los módulos diciendo: 
    "módulo uno", "módulo dos", "módulo tres" o "módulo cuatro".

    ¿Qué deseas hacer?`;
  }
);
