import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createSubseccion() {
  try {
    // Crear subsección con los datos proporcionados
    const subseccion = await prisma.subseccion.create({
      data: {
        ruta: "/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales/caso-proyecto-fallido",
        titulo: "Caso de Estudio: Proyecto Fallido por No Identificar los FCE",
        numeroOrden: 2,
        paraLeer: `
              Caso de Estudio: Proyecto Fallido por No Identificar los FCE:
              Este caso de estudio analiza un proyecto de desarrollo de software que no logró cumplir sus objetivos debido a la falta de identificación y gestión adecuada de los factores críticos de éxito (FCE). A través de este análisis, se identifican las lecciones aprendidas y se ofrecen recomendaciones para evitar que estos mismos errores se repitan en futuros proyectos.
              
              Descripción del Proyecto y Factores Críticos de Éxito No Gestionados:
              El proyecto en cuestión se trataba de una plataforma de gestión de clientes para una empresa mediana en el sector de servicios. El objetivo era crear una solución que permitiera a la empresa gestionar relaciones con clientes de manera eficiente, realizar seguimiento de interacciones y optimizar la comunicación interna.
              
              Sin embargo, a pesar de contar con un equipo de desarrollo talentoso y una planificación inicial sólida, el proyecto fracasó. Uno de los principales motivos fue que no se identificaron adecuadamente los factores críticos de éxito (FCE), lo que llevó a una serie de errores que afectaron el rendimiento y los resultados del proyecto:
              
              Desconocimiento de los Requisitos del Cliente: No se llevó a cabo una adecuada recolección y validación de los requisitos del cliente desde el inicio, lo que resultó en un software que no cumplía con las expectativas del cliente.
              Falta de Gestión de Riesgos: No se realizaron análisis de riesgos ni se establecieron planes de contingencia. Los riesgos fueron identificados demasiado tarde, lo que generó retrasos y costos adicionales.
              Deficiente Comunicación Interna: El equipo de desarrollo y los stakeholders internos no mantuvieron una comunicación efectiva. La falta de actualización continua sobre el progreso del proyecto llevó a malentendidos y a la falta de coordinación entre los departamentos involucrados.
              Estos factores críticos de éxito no gestionados adecuadamente desencadenaron una serie de problemas que impidieron el éxito del proyecto.
              
              Lecciones Aprendidas y Recomendaciones:
              A partir del análisis de este caso, se pueden extraer valiosas lecciones que pueden aplicarse en futuros proyectos de desarrollo de software:
              
              Identificación Temprana de los FCE: Es crucial identificar los factores críticos de éxito desde las primeras fases del proyecto. Esto implica un entendimiento claro de las necesidades del cliente, los objetivos del negocio y las expectativas de los stakeholders. La falta de este enfoque puede llevar a desalineaciones y frustración durante el desarrollo.
              Gestión Activa de Riesgos: Los riesgos deben ser gestionados de manera proactiva. Es recomendable utilizar herramientas como el análisis FODA o un Risk Register para identificar, evaluar y mitigar los riesgos desde el inicio. Tener un plan de contingencia bien definido es fundamental para evitar sorpresas desagradables a mitad del proyecto.
              Comunicación Fluida y Transparente: Mantener una comunicación continua entre el equipo de desarrollo, los stakeholders y los clientes es vital para el éxito del proyecto. Las reuniones de seguimiento, las actualizaciones regulares y las plataformas de colaboración (como Slack o Microsoft Teams) pueden ayudar a asegurar que todos los involucrados estén alineados.
              Planificación Flexible y Realista: La planificación debe ser realista y flexible, con margen para adaptarse a cambios en los requisitos o en el entorno. Utilizar metodologías ágiles como Scrum o Kanban puede ser una buena forma de garantizar que el proyecto se adapte rápidamente a nuevas circunstancias.
              Implementar estas prácticas no solo mejora las posibilidades de éxito, sino que también ayuda a mantener el proyecto dentro del presupuesto y los plazos establecidos, asegurando la satisfacción del cliente y los stakeholders.
              
              Recomendaciones para Evitar Errores en Futuros Proyectos:
              A continuación, se presentan recomendaciones prácticas basadas en el análisis de este caso que pueden ayudar a evitar errores similares en futuros proyectos de software:
              
              Realizar un Análisis Exhaustivo de los Requisitos: Antes de comenzar cualquier desarrollo, asegúrate de tener una comprensión clara y completa de los requisitos del cliente. Realiza sesiones de trabajo con los stakeholders para validar las expectativas y necesidades.
              Implementar un Enfoque Ágil: Utiliza metodologías ágiles para permitir la adaptación continua a medida que los requisitos cambian. Esto no solo mejora la flexibilidad, sino que también permite la entrega continua de valor al cliente.
              Establecer Canales de Comunicación Efectivos: Facilita la comunicación entre todos los involucrados utilizando herramientas adecuadas, como plataformas de colaboración, y fomenta la transparencia en todo el proceso.
              Adoptar una Cultura de Gestión de Riesgos: Realiza evaluaciones periódicas de los riesgos y ajusta los planes de mitigación a medida que el proyecto avanza. La gestión proactiva de riesgos puede evitar muchos problemas antes de que se conviertan en amenazas mayores.
              En resumen, la gestión adecuada de los factores críticos de éxito desde el inicio del proyecto es fundamental para asegurar el cumplimiento de los objetivos y la satisfacción del cliente. Al aplicar estas lecciones aprendidas, los futuros proyectos tienen muchas más probabilidades de tener éxito.
              `,
        contenidoHtml: `<h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Caso de Estudio: Proyecto Fallido por No Identificar los FCE
            </h2>

            <section className="mb-6 text-justify">
              <p className="text-black mb-4">
                Este caso de estudio analiza un proyecto de desarrollo de
                software que no logró cumplir sus objetivos debido a la falta de
                identificación y gestión adecuada de los factores críticos de
                éxito (FCE). A través de este análisis, se identifican las
                lecciones aprendidas y se ofrecen recomendaciones para evitar
                que estos mismos errores se repitan en futuros proyectos.
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Descripción del Proyecto y Factores Críticos de Éxito No
                Gestionados
              </h3>
              <p className="text-black mb-4">
                El proyecto en cuestión se trataba de una plataforma de gestión
                de clientes para una empresa mediana en el sector de servicios.
                El objetivo era crear una solución que permitiera a la empresa
                gestionar relaciones con clientes de manera eficiente, realizar
                seguimiento de interacciones y optimizar la comunicación
                interna.
              </p>

              <p className="text-black mb-4">
                Sin embargo, a pesar de contar con un equipo de desarrollo
                talentoso y una planificación inicial sólida, el proyecto
                fracasó. Uno de los principales motivos fue que no se
                identificaron adecuadamente los factores críticos de éxito
                (FCE), lo que llevó a una serie de errores que afectaron el
                rendimiento y los resultados del proyecto:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>
                    Desconocimiento de los Requisitos del Cliente:
                  </strong>{" "}
                  No se llevó a cabo una adecuada recolección y validación de
                  los requisitos del cliente desde el inicio, lo que resultó en
                  un software que no cumplía con las expectativas del cliente.
                </li>
                <li>
                  <strong>Falta de Gestión de Riesgos:</strong> No se realizaron
                  análisis de riesgos ni se establecieron planes de
                  contingencia. Los riesgos fueron identificados demasiado
                  tarde, lo que generó retrasos y costos adicionales.
                </li>
                <li>
                  <strong>Deficiente Comunicación Interna:</strong> El equipo de
                  desarrollo y los stakeholders internos no mantuvieron una
                  comunicación efectiva. La falta de actualización continua
                  sobre el progreso del proyecto llevó a malentendidos y a la
                  falta de coordinación entre los departamentos involucrados.
                </li>
              </ul>

              <p className="text-black mb-4">
                Estos factores críticos de éxito no gestionados adecuadamente
                desencadenaron una serie de problemas que impidieron el éxito
                del proyecto.
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Lecciones Aprendidas y Recomendaciones
              </h3>
              <p className="text-black mb-4">
                A partir del análisis de este caso, se pueden extraer valiosas
                lecciones que pueden aplicarse en futuros proyectos de
                desarrollo de software:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>Identificación Temprana de los FCE:</strong> Es
                  crucial identificar los factores críticos de éxito desde las
                  primeras fases del proyecto. Esto implica un entendimiento
                  claro de las necesidades del cliente, los objetivos del
                  negocio y las expectativas de los stakeholders. La falta de
                  este enfoque puede llevar a desalineaciones y frustración
                  durante el desarrollo.
                </li>
                <li>
                  <strong>Gestión Activa de Riesgos:</strong> Los riesgos deben
                  ser gestionados de manera proactiva. Es recomendable utilizar
                  herramientas como el análisis FODA o un Risk Register para
                  identificar, evaluar y mitigar los riesgos desde el inicio.
                  Tener un plan de contingencia bien definido es fundamental
                  para evitar sorpresas desagradables a mitad del proyecto.
                </li>
                <li>
                  <strong>Comunicación Fluida y Transparente:</strong> Mantener
                  una comunicación continua entre el equipo de desarrollo, los
                  stakeholders y los clientes es vital para el éxito del
                  proyecto. Las reuniones de seguimiento, las actualizaciones
                  regulares y las plataformas de colaboración (como Slack o
                  Microsoft Teams) pueden ayudar a asegurar que todos los
                  involucrados estén alineados.
                </li>
                <li>
                  <strong>Planificación Flexible y Realista:</strong> La
                  planificación debe ser realista y flexible, con margen para
                  adaptarse a cambios en los requisitos o en el entorno.
                  Utilizar metodologías ágiles como Scrum o Kanban puede ser una
                  buena forma de garantizar que el proyecto se adapte
                  rápidamente a nuevas circunstancias.
                </li>
              </ul>

              <p className="text-black mb-4">
                Implementar estas prácticas no solo mejora las posibilidades de
                éxito, sino que también ayuda a mantener el proyecto dentro del
                presupuesto y los plazos establecidos, asegurando la
                satisfacción del cliente y los stakeholders.
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Recomendaciones para Evitar Errores en Futuros Proyectos
              </h3>
              <p className="text-black mb-4">
                A continuación, se presentan recomendaciones prácticas basadas
                en el análisis de este caso que pueden ayudar a evitar errores
                similares en futuros proyectos de software:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>
                    Realizar un Análisis Exhaustivo de los Requisitos:
                  </strong>{" "}
                  Antes de comenzar cualquier desarrollo, asegúrate de tener una
                  comprensión clara y completa de los requisitos del cliente.
                  Realiza sesiones de trabajo con los stakeholders para validar
                  las expectativas y necesidades.
                </li>
                <li>
                  <strong>Implementar un Enfoque Ágil:</strong> Utiliza
                  metodologías ágiles para permitir la adaptación continua a
                  medida que los requisitos cambian. Esto no solo mejora la
                  flexibilidad, sino que también permite la entrega continua de
                  valor al cliente.
                </li>
                <li>
                  <strong>Establecer Canales de Comunicación Efectivos:</strong>{" "}
                  Facilita la comunicación entre todos los involucrados
                  utilizando herramientas adecuadas, como plataformas de
                  colaboración, y fomenta la transparencia en todo el proceso.
                </li>
                <li>
                  <strong>Adoptar una Cultura de Gestión de Riesgos:</strong>{" "}
                  Realiza evaluaciones periódicas de los riesgos y ajusta los
                  planes de mitigación a medida que el proyecto avanza. La
                  gestión proactiva de riesgos puede evitar muchos problemas
                  antes de que se conviertan en amenazas mayores.
                </li>
              </ul>

              <p className="text-black mb-4">
                En resumen, la gestión adecuada de los factores críticos de
                éxito desde el inicio del proyecto es fundamental para asegurar
                el cumplimiento de los objetivos y la satisfacción del cliente.
                Al aplicar estas lecciones aprendidas, los futuros proyectos
                tienen muchas más probabilidades de tener éxito.
              </p>
            </section>`,
        recursosComplementarios: [
          {
            url: "https://www.itmplatform.com/es/blog/tres-desastrosos-fracasos-de-gestion-de-proyectos/",
            tipo: "PaginaExterna",            
          },
          {
            url: "https://www.studocu.com/es-mx/document/universidad-del-valle-de-mexico/auditoria-de-sistemas-de-gestion-de-riesgos/caso-de-estudio-de-un-proyecto-que-resulto-en-fracaso-por-no-considerar-riesgos-adecuadamente/77654466",
            tipo: "PaginaExterna",
          },
        ],
        seccionId: "6760a24571e017357468422e", // Cambiar por el ID de la sección existente
      },
    });

    console.log("Subsección creada exitosamente:", subseccion);
  } catch (error) {
    console.error("Error al crear la subsección:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function crearSeccion() {
  try {
    // Crear el primer módulo
    const seccion1 = await prisma.seccion.create({
      data: {
        indice: "/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales",
        titulo: "Ejemplos de Factores Críticos de Éxito en Proyectos Reales",
        moduloId: "675e678f9d1760487a490fcf",
        numeroOrden: 7,
      },
    });

    console.log("Contenido migrado exitosamente:", seccion1);
  } catch (error) {
    console.error("Error al migrar contenido:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function crearModulo() {
  try {
    // Crear el primer módulo
    const modulo1 = await prisma.modulo.create({
      data: {
        indice: "/modulos/2",
        titulo:
          "Verificación y Validación de la Documentación del Análisis de Requerimientos",
        descripcion:
          "Descubre cómo la Verificación y Validación de la Documentación del Análisis de Requerimientos te ayuda a construir un software a prueba de fallos.",
        numeroOrden: 2,
      },
    });

    console.log("Contenido migrado exitosamente:", modulo1);
  } catch (error) {
    console.error("Error al migrar contenido:", error);
  } finally {
    await prisma.$disconnect();
  }
}
