import { CommandMenu } from "../../CommandMenu";
import {
  C_V_Buscar,
  C_V_Modulo_1,
  C_V_Modulo_2,
  C_V_Modulo_3,
  C_V_Modulo_4,
  C_VModulo_1_Seccion_1,
  C_VModulo_1_Seccion_2,
  C_VModulo_1_Seccion_3,
  C_VModulo_1_Seccion_4,
  C_VModulo_2_Seccion_1,
  C_VModulo_2_Seccion_2,
  C_VModulo_2_Seccion_3,
  C_VModulo_2_Seccion_4,
  C_VModulo_2_Seccion_5,
} from "./AllCommands";

export const C_M_Home = new CommandMenu(
  "Bienvenido. Puedes usar los comandos de voz: Buscar, Módulo 1, Módulo 2, Módulo 3, Módulo 4.",
  [C_V_Buscar, C_V_Modulo_1, C_V_Modulo_2, C_V_Modulo_3, C_V_Modulo_4]
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
    C_VModulo_2_Seccion_1,
    C_VModulo_2_Seccion_2,
    C_VModulo_2_Seccion_3,
    C_VModulo_2_Seccion_4,
    C_VModulo_2_Seccion_5,
  ]
);
