// Interfaces base para la estructura de datos
export interface Subseccion {
  path: string;
  title: string;
  toRead: string;
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
          title:
            "Origen, Modelos, Normas y Herramientas para la Calidad del Software",
          subsecciones: {
            1: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/origen-ingenieria-software",
              title: "Origen de la Ingeniería de Software",
              toRead: `
              Origen de la Ingeniería de Software
              
              Historia y Contexto del Surgimiento  
              La ingeniería de software surgió en la década de 1960, impulsada por la creciente complejidad y escala de los sistemas informáticos, que dificultaba el desarrollo y mantenimiento de software de alta calidad. Antes de esto, el desarrollo de software era visto como una extensión de la programación y no se consideraba una disciplina en sí misma.  
              
              Con la conocida Crisis del Software en 1968, caracterizada por proyectos con:  
              - Sobrecostos significativos.  
              - Retrasos en las entregas.  
              - Fallos técnicos recurrentes.  
              
              Se hizo evidente la necesidad de un enfoque más estructurado y profesionalizado.  
              
              “La ingeniería de software nació para resolver problemas de escala, calidad y organización en el desarrollo de sistemas complejos.” — Alistair Cockburn  
              
              Principales Desafíos que Dieron Origen a la Ingeniería de Software  
              Entre los desafíos clave se encuentran:  
              - La dificultad para coordinar grandes equipos de desarrollo.  
              - La falta de herramientas y metodologías estandarizadas.  
              - El crecimiento exponencial en la demanda de software confiable y eficiente.  
              - Los problemas de escalabilidad en sistemas críticos.  
              
              Casos Históricos de Evolución Tecnológica en Software  
              Varios casos emblemáticos ayudaron a moldear la disciplina de la ingeniería de software:  
              - Proyecto Apollo: El software de control de vuelo del cohete Apollo estableció estándares de desarrollo para sistemas críticos en tiempo real.  
              - Sistema Operativo Multics: Un proyecto pionero en el diseño de sistemas operativos con características avanzadas como la seguridad y la gestión de memoria.  
              - Introducción del Modelo en Cascada: En respuesta a la necesidad de procesos más formales, este modelo trajo un enfoque secuencial para el desarrollo de software.  
              `,
            },
            2: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/objetivos-finalidad",
              title: "Objetivos y Finalidad",
              toRead: `
              Objetivos y Finalidad
              
              Definición de objetivos clave en ingeniería de software  
              Los objetivos principales de la ingeniería de software incluyen:  
              - Crear productos de alta calidad, escalables y mantenibles.  
              - Cumplir con las expectativas y necesidades de los usuarios finales.  
              
              Estos objetivos buscan garantizar:  
              - Funcionalidad.  
              - Fiabilidad.  
              - Eficiencia.  
              - Usabilidad.  
              
              Además, abordan tanto los requerimientos actuales como las posibles necesidades futuras.  
              
              Relación con la mejora continua en proyectos  
              La ingeniería de software fomenta un enfoque de mejora continua que se refleja en:  
              - Evaluar y optimizar cada etapa del ciclo de vida del software.  
              - Asegurar la sostenibilidad de los proyectos.  
              - Incorporar mejores prácticas, como:  
                - Metodologías ágiles.  
                - Herramientas avanzadas para control de calidad y gestión de proyectos.  
              
              Finalidad y principios de la ingeniería de software  
              El propósito de la ingeniería de software va más allá de simplemente escribir código. Sus objetivos incluyen:  
              - Gestionar eficazmente los proyectos en todas las etapas de su ciclo de vida:  
                - Planificación.  
                - Desarrollo.  
                - Pruebas.  
                - Implementación.  
                - Mantenimiento.  
              
              Los principios fundamentales están orientados a:  
              - Promover la sostenibilidad y la eficiencia.  
              - Alinear los proyectos con los objetivos estratégicos de las organizaciones.  
              - Crear sistemas robustos que soporten cambios tecnológicos y organizacionales a largo plazo.  
              
              Ejemplos de objetivos en proyectos de desarrollo  
              - Reducir la cantidad de defectos detectados durante la fase de pruebas en un 30% en comparación con proyectos previos.  
              - Mejorar el tiempo de respuesta del sistema en un 20% bajo condiciones de carga máxima.  
              - Asegurar que el 100% de los módulos críticos del sistema pasen pruebas de estrés y seguridad antes de su despliegue.  
              - Lograr que el mantenimiento correctivo del sistema tome un 40% menos de tiempo mediante la implementación de prácticas de diseño modular.  
              `,
            },
            3: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/caracteristicas-principios",
              title:
                "Características y Principios de la Ingeniería de Software",
              toRead: `
              Características y Principios de la Ingeniería de Software
              
              Características Fundamentales  
              Las características fundamentales de la ingeniería de software aseguran que los productos desarrollados cumplan con altos estándares de calidad. Entre las principales se encuentran:  
              - Fiabilidad: Garantiza que el software funcione correctamente bajo diversas condiciones.  
              - Mantenibilidad: Facilita la modificación y actualización del sistema a lo largo del tiempo.  
              - Eficiencia: Optimiza el uso de recursos como tiempo de ejecución y memoria.  
              
              Estas características son clave para satisfacer las expectativas tanto de los usuarios finales como de los equipos de desarrollo.  
              
              Principios de Calidad en Software  
              Los principios de calidad en el desarrollo de software son esenciales para crear sistemas sostenibles y flexibles. Algunos de estos principios son:  
              - Reusabilidad: Permite aprovechar componentes existentes, reduciendo costos y tiempo de desarrollo.  
              - Modularidad: Organiza el software en partes manejables, facilitando su comprensión y mantenimiento.  
              - Bajo Acoplamiento: Asegura que los módulos interactúen mínimamente, lo que simplifica el mantenimiento y las futuras mejoras.  
              
              Aplicaciones Prácticas en la Industria  
              En la industria, estos principios se implementan ampliamente mediante prácticas como:  
              - Uso de Patrones de Diseño: Proveen soluciones probadas para problemas comunes en el desarrollo de software.  
              - Desarrollo de Componentes Modulares: Facilita la integración de partes reutilizables en diferentes proyectos.  
              - Código Reutilizable: Mejora la productividad de los equipos y asegura la consistencia en los proyectos.  
              
              Estas prácticas son esenciales para manejar la complejidad de los sistemas y garantizar que puedan adaptarse a cambios tecnológicos y de mercado.  
              `,
            },
            4: {
              path: "/modulos/1/origen-evolucion-ingenieria-software/importancia",
              title: "Importancia de la Ingeniería de Software",
              toRead: `
              Importancia de la Ingeniería de Software
              
              La ingeniería de software desempeña un papel crucial en garantizar la calidad y eficiencia en el desarrollo de aplicaciones. Esta disciplina no solo minimiza los errores y reduce los costos de producción, sino que también asegura la satisfacción del cliente al proporcionar productos confiables y adaptables. Un enfoque bien estructurado en la ingeniería de software permite a las empresas obtener una ventaja competitiva significativa al ofrecer soluciones que se mantienen actualizadas frente a las cambiantes demandas del mercado.
              
              Impacto en la Calidad y Eficiencia de los Proyectos
              
              La implementación de prácticas sólidas en ingeniería de software mejora significativamente la calidad de los proyectos, reduciendo defectos y aumentando la eficiencia en cada etapa del desarrollo. Además, asegura que los productos sean escalables y fáciles de mantener, permitiendo que las organizaciones respondan rápidamente a las nuevas necesidades de los usuarios.
              
              Análisis de las Ventajas Competitivas
              
              Una buena ingeniería de software proporciona a las empresas una ventaja estratégica al reducir el tiempo de desarrollo, optimizar recursos y mejorar la experiencia del usuario. Empresas líderes como Amazon han utilizado la ingeniería de software para optimizar sus operaciones y superar a la competencia, mientras que otras organizaciones han enfrentado graves consecuencias por no aplicar principios adecuados.
              
              Casos de Éxito y Fracaso en Ingeniería de Software
              
              Ejemplos como el sistema de gestión de operaciones de Amazon destacan cómo una ingeniería de software bien aplicada puede mejorar la productividad y garantizar la excelencia operativa. Por otro lado, casos como el fracaso del Mars Climate Orbiter, donde errores en la gestión del software llevaron a la pérdida de la misión, subrayan la importancia de un enfoque meticuloso en esta disciplina. Estas lecciones refuerzan la necesidad de priorizar la calidad en todos los aspectos del ciclo de vida del software.
              `,
            },
          },
        },
        2: {
          index: "/modulos/1/calidad-software-conceptos-modelos-criterios",
          title: "Calidad de Software: Conceptos, Modelos y Criterios",
          subsecciones: {
            1: {
              path: "/modulos/1/calidad-software-conceptos-modelos-criterios/concepto-calidad",
              title: "Concepto de Calidad en el Software",
              toRead: `
              Concepto de Calidad en el Software
              
              La calidad en software se define como la capacidad de un producto de cumplir con las expectativas y necesidades del usuario final, además de los requisitos técnicos y de negocio. Factores como la funcionalidad, confiabilidad y facilidad de uso influyen en la percepción de calidad de un software. Asimismo, atributos esenciales como la eficiencia, seguridad y mantenibilidad son cruciales para garantizar que el software no solo sea operativo, sino también fiable y adaptable a lo largo del tiempo.
              
              Definición de Calidad en Software
              
              En términos generales, la calidad en el software se refiere a la capacidad del producto para satisfacer los objetivos para los cuales fue diseñado. Esto implica no solo el cumplimiento de los requerimientos funcionales, sino también de los no funcionales, como la usabilidad, la eficiencia y la seguridad.
              
              Factores que Influyen en la Calidad del Software
              
              La calidad en el software es afectada por múltiples factores, entre los cuales se encuentran:
              - La metodología de desarrollo empleada.
              - El nivel de experiencia del equipo de desarrollo.
              - Las herramientas utilizadas.
              - La claridad en los requerimientos iniciales.
              
              Cada uno de estos elementos contribuye de manera significativa a garantizar que el producto final cumpla con las expectativas de los usuarios.
              
              Criterios y Atributos Esenciales de Calidad
              
              Entre los criterios esenciales de calidad en software destacan:
              - Fiabilidad: Mide la capacidad del sistema para operar de manera consistente bajo diversas condiciones.
              - Eficiencia: Evalúa el desempeño del sistema en términos de tiempo y recursos.
              - Mantenibilidad: Asegura la facilidad de actualizar o modificar el software para cumplir nuevas necesidades o corregir defectos.
              - Usabilidad: Garantiza una experiencia de usuario positiva.
              - Seguridad: Protege los datos y la integridad del sistema.
              `,
            },
            2: {
              path: "/modulos/1/calidad-software-conceptos-modelos-criterios/evolucion-modelos",
              title: "Evolución de los Modelos de Calidad",
              toRead: `
              Evolución de los Modelos de Calidad
              
              Introducción
              
              Los modelos de calidad en software han evolucionado significativamente a lo largo del tiempo, adaptándose a las necesidades cambiantes del mercado y los avances tecnológicos. Desde los enfoques pioneros como el modelo de McCall y el modelo de Boehm, se ha recorrido un largo camino hacia modelos más detallados y específicos que consideran factores como la seguridad, la experiencia del usuario y la adaptabilidad.
              
              Modelos Históricos
              
              - Los primeros modelos de calidad, como el modelo de McCall, se centraron en factores fundamentales como:
                - Corrección: Garantizar que el software cumpla sus especificaciones.
                - Eficiencia: Optimizar el uso de recursos.
                - Usabilidad: Facilitar la interacción del usuario con el sistema.
              
              - Por otro lado, el modelo de Boehm amplió estas perspectivas, añadiendo criterios relacionados con:
                - Mantenibilidad: Facilidad de realizar cambios y actualizaciones.
                - Portabilidad: Capacidad de ser usado en diferentes entornos.
              
              Estos modelos proporcionaron una base sólida para evaluar la calidad del software en sus primeras etapas de desarrollo.
              
              Evolución hacia Modelos Más Actuales
              
              - A medida que el software y las expectativas de los usuarios se han vuelto más complejos, los modelos de calidad han evolucionado para incorporar criterios más detallados y específicos. 
              - Los modelos modernos consideran aspectos como:
                - Seguridad: Protección frente a amenazas y vulnerabilidades.
                - Escalabilidad: Capacidad de adaptarse a un aumento en la carga de trabajo.
                - Experiencia del Usuario (UX): Garantizar la satisfacción y eficiencia en la interacción del usuario.
              
              Esta evolución ha sido clave para enfrentar los desafíos asociados con nuevas tecnologías, como la inteligencia artificial y los sistemas distribuidos.
              
              Comparación entre Modelos Clásicos y Modernos
              
              - Modelos Clásicos:
                - Se enfocaban en un conjunto limitado de factores.
                - Proporcionaban una visión general de la calidad.
              
              - Modelos Modernos:
                - Incluyen métricas específicas para evaluar criterios como:
                  - Fiabilidad en entornos dinámicos.
                  - Interoperabilidad.
                  - Adaptabilidad.
                - Permiten una evaluación más integral y detallada.
              
              Esto permite a las organizaciones tomar decisiones más informadas y desarrollar software que no solo sea funcional, sino también competitivo en el mercado actual.
              `,
            },
            3: {
              path: "/modulos/1/calidad-software-conceptos-modelos-criterios/criterios-calidad",
              title: "Criterios de Calidad del Software",
              toRead: `
              Criterios de Calidad del Software
              
              La norma ISO/IEC 25010 establece un conjunto de atributos esenciales que definen la calidad del software. Estos atributos nos permiten evaluar su desempeño y adecuación en diferentes contextos de uso. Los principales atributos incluyen la funcionalidad, la usabilidad y la seguridad. Estos son fundamentales para garantizar que el software responda adecuadamente a las necesidades del usuario, manteniendo altos estándares de eficiencia y seguridad.
              
              Por ejemplo, un sistema bancario en línea necesita tener niveles estrictos de seguridad para proteger los datos de los usuarios. Además, debe tener una interfaz intuitiva que facilite realizar transacciones de forma rápida y sencilla. Por otro lado, una aplicación educativa prioriza la usabilidad y la accesibilidad, asegurando que sea fácil de usar para personas con diferentes niveles de experiencia técnica o con discapacidades.
              
              Atributos de Calidad según ISO/IEC 25010
              
              Los atributos de calidad según ISO/IEC 25010 son los siguientes:
              
              1. Funcionalidad: La capacidad del software para ofrecer las funciones requeridas bajo condiciones específicas.
              2. Usabilidad: La facilidad con la que los usuarios pueden aprender a usar el sistema y completar tareas.
              3. Seguridad: El nivel de protección contra accesos no autorizados y vulnerabilidades.
              4. Fiabilidad: La capacidad del software para funcionar sin fallos durante un período determinado.
              5. Eficiencia: La relación entre el rendimiento del software y los recursos utilizados.
              6. Mantenibilidad: La facilidad con la que el software puede ser modificado o actualizado.
              7. Portabilidad: La capacidad del software para ser utilizado en diferentes entornos.
              8. Compatibilidad: La capacidad del software para interactuar con otros sistemas o aplicaciones.
              
              Factores Críticos y Casos Prácticos
              
              Por otro lado, los factores críticos que definen la calidad del software dependen del contexto de uso. Por ejemplo, en el desarrollo de un sistema de comercio electrónico, la usabilidad y la eficiencia son claves para asegurar una experiencia de usuario fluida. En cambio, en una aplicación de gestión hospitalaria, la fiabilidad y la seguridad son prioritarias para proteger datos sensibles y garantizar operaciones críticas.
              
              Evaluar la calidad del software utilizando estos criterios nos permite identificar fortalezas y áreas de mejora. De esta forma, podemos asegurarnos de que el producto final cumpla con las expectativas del cliente y los estándares de la industria. Por ejemplo, se pueden aplicar pruebas de usabilidad para garantizar que los usuarios completen tareas clave sin dificultades. También, se pueden realizar auditorías de seguridad para detectar y mitigar posibles vulnerabilidades.
              `,
            },
          },
        },
        3: {
          index: "/modulos/1/herramientas-calidad-software",
          title: "Herramientas de Calidad de Software",
          subsecciones: {
            1: {
              path: "/modulos/1/herramientas-calidad-software/planificacion-desarrollo",
              title: "Herramientas de Planificación y Desarrollo",
              toRead: `
              Herramientas de Planificación y Desarrollo
              
              En la gestión de la calidad del software, las herramientas como Trello y JIRA son fundamentales para la planificación y el seguimiento de proyectos. Estas herramientas nos permiten gestionar tareas, incidentes y el backlog de manera organizada, proporcionando una visualización clara del flujo de trabajo. Esto facilita la priorización de tareas y optimiza la colaboración entre los miembros del equipo, garantizando un progreso constante hacia los objetivos establecidos.
              
              Herramientas de Planificación:
              
              1. Trello: Ideal para gestionar tareas mediante tableros, listas y tarjetas. Permite organizar el trabajo de forma visual, facilitando su seguimiento.
              2. JIRA: Especialmente útil para la gestión ágil de proyectos. Incluye funcionalidades como la planificación de sprints, el seguimiento de incidencias y la administración del backlog.
              
              Ambas herramientas cuentan con funcionalidades avanzadas, como gráficos de progreso, informes y la integración con otros sistemas de gestión. Esto permite tener un control detallado de las actividades del equipo. Por ejemplo, en JIRA, se pueden gestionar incidencias desde su identificación hasta su resolución, facilitando la trazabilidad del trabajo.
              
              Herramientas de Desarrollo:
              
              En el ámbito del desarrollo de software, plataformas como GitHub y GitLab juegan un rol crucial en el control de versiones y la colaboración en equipo. Estas herramientas nos permiten realizar un seguimiento detallado de los cambios realizados en el código, gestionar ramas y colaborar de manera eficiente mediante pull requests o merge requests.
              
              1. GitHub: Es una plataforma ampliamente utilizada para alojar repositorios, gestionar proyectos y colaborar en el desarrollo de software.
              2. GitLab: Integra funciones avanzadas como pipelines de CI/CD, herramientas de calidad y administración de proyectos, convirtiéndose en una solución integral para equipos de desarrollo.
              
              Estas plataformas no solo permiten un control eficaz del código, sino que también se integran con sistemas de calidad y herramientas de integración continua (CI/CD). Esto asegura que el código sea probado y cumpla con los estándares de calidad durante el desarrollo. Por ejemplo, los pipelines de GitLab permiten automatizar pruebas y despliegues, mejorando la eficiencia del equipo y reduciendo errores en producción.
              `,
            },
            2: {
              path: "/modulos/1/herramientas-calidad-software/modelamiento-seguimiento",
              title: "Herramientas de Modelamiento y Seguimiento",
              toRead: `
              Herramientas de Modelamiento y Seguimiento
              
              Herramientas de Modelamiento:
              
              Las herramientas de modelamiento, como UML, implementadas en software como Enterprise Architect, son fundamentales para representar gráficamente la estructura y el comportamiento del sistema. Estas herramientas permiten crear diagramas de clases, casos de uso y secuencia, lo que ayuda a los equipos de desarrollo a comprender y planificar el diseño del software de forma clara y estructurada.
              
              Algunos de los diagramas más utilizados son:
              
              1. Diagramas de Clases: Detallan las relaciones entre objetos y las estructuras de datos del sistema.
              2. Diagramas de Casos de Uso: Identifican las interacciones entre los usuarios y el sistema.
              3. Diagramas de Secuencia: Describen el flujo de mensajes entre los componentes del sistema.
              
              Estas representaciones son esenciales para el desarrollo de software bien diseñado, alineado con los requerimientos y las necesidades del usuario.
              
              Por ejemplo, al modelar un sistema de gestión de inventarios, se podría utilizar un diagrama de clases para mostrar las relaciones entre productos, categorías y órdenes. Esto asegura una estructura coherente para la base de datos y la lógica de negocio.
              
              Herramientas de Seguimiento:
              
              En el ámbito del seguimiento de calidad, herramientas como SonarQube y Selenium juegan un papel crucial. SonarQube realiza un análisis estático del código, detectando posibles errores, vulnerabilidades y puntos de mejora en la estructura del código, lo que ayuda a mantener estándares de calidad elevados durante el desarrollo.
              
              Por otro lado, Selenium permite la automatización de pruebas de software, verificando que el sistema funcione correctamente en diferentes escenarios y plataformas. Esto es especialmente útil para aplicaciones web, ya que asegura que el software sea compatible con diversos navegadores y dispositivos.
              
              Estas herramientas no solo optimizan la detección de errores y vulnerabilidades, sino que también mejoran la eficiencia del equipo de desarrollo al integrar procesos de control de calidad y pruebas automatizadas. Esto garantiza que el software sea robusto, funcional y de alta calidad.
              `,
            },
          },
        },
        4: {
          index: "/modulos/1/normas-estandares-calidad-software",
          title: "Normas y Estándares de Calidad de Software",
          subsecciones: {
            "1": {
              path: "/modulos/1/normas-estandares-calidad-software/normas-internacionales",
              title: "Normas Internacionales (ISO/IEC)",
              toRead: `
              Normas Internacionales (ISO/IEC)
              
              ISO 9001:
              
              Las normas ISO/IEC establecen estándares de calidad internacionales para proyectos de software, permitiendo a las organizaciones asegurar que sus procesos y productos cumplan con criterios reconocidos globalmente. La ISO 9001 se centra en la gestión de la calidad, promoviendo prácticas para mejorar continuamente los procesos y satisfacer a los clientes en proyectos de software. Esta norma enfatiza la importancia de documentar los procedimientos y asegurar que cada fase del desarrollo sea controlada para asegurar la calidad total.
              
              ISO/IEC 12207:
              
              La ISO/IEC 12207 define los procesos específicos para el ciclo de vida del software, desde la planificación hasta el mantenimiento. Esta norma asegura que cada fase del ciclo de vida del software esté cubierta por procesos estandarizados que garantizan un desarrollo eficiente y de alta calidad. El objetivo de esta norma es proporcionar un marco claro para gestionar los procesos de desarrollo, asegurando que el software se entregue con las especificaciones y la calidad necesarias.
              
              ISO/IEC 25010 (SQuaRE):
              
              La ISO/IEC 25010 (SQuaRE) establece un modelo detallado de calidad para el software, categorizando las características y subcaracterísticas que son esenciales para evaluar la calidad del software. Algunas de las características clave incluyen la funcionalidad, eficiencia y usabilidad, que se desglosan en subcaracterísticas como la seguridad, la interoperabilidad, la mantenibilidad y la fiabilidad. La norma también proporciona guías prácticas sobre cómo evaluar la calidad del software a través de estos atributos.
              
              Objetivos de la Norma ISO 9001:
              
              Los principales objetivos de la norma ISO 9001 son asegurar que los procesos de software se gestionen de forma eficiente y que los productos entregados cumplan con los requisitos establecidos por los clientes. La norma también promueve una mejora continua en todos los procesos, garantizando así una calidad constante en los proyectos de software.
              
              ISO/IEC 12207: Procesos del Ciclo de Vida del Software:
              
              La ISO/IEC 12207 establece procesos detallados para cada fase del ciclo de vida del software, que incluyen desde la planificación, la implementación, las pruebas, hasta la operación y el mantenimiento. La aplicación práctica de esta norma en proyectos reales ayuda a optimizar la gestión del ciclo de vida del software y asegura la calidad en cada etapa, garantizando la eficiencia y el cumplimiento de los objetivos.
              
              ISO/IEC 25010 (SQuaRE): Modelo de Calidad del Software:
              
              La norma ISO/IEC 25010 proporciona un marco detallado para evaluar la calidad del software a través de sus características y subcaracterísticas. La norma incluye aspectos clave como la funcionalidad, fiabilidad, usabilidad y seguridad. Esta estructura permite evaluar de manera objetiva y sistemática la calidad de un sistema de software, guiando a los equipos de desarrollo y asegurando que el software cumpla con los requisitos de calidad esperados por los usuarios.
              `,
            },
            "2": {
              path: "/modulos/1/normas-estandares-calidad-software/estandares-calidad",
              title: "Estándares de Calidad (IEEE, CMMI)",
              toRead: `
              Estándares de Calidad (IEEE, CMMI)
              
              IEEE Estándares:
              
              Los estándares de calidad propuestos por el IEEE y CMMI son esenciales en la industria del software. El IEEE establece estándares específicos, como el IEEE 730, que define la estructura para los planes de calidad de software, y el IEEE 829, que detalla los tipos de documentación de pruebas, como planes de prueba, casos de prueba e informes. Estos estándares permiten crear plantillas y guías claras para asegurar la calidad de los proyectos.
              
              IEEE 730 (Estándar para planes de calidad de software):
              
              El IEEE 730 es un estándar fundamental que proporciona la estructura para los planes de calidad del software. Este documento debe definir el enfoque general para las actividades de calidad, describir los roles y responsabilidades de los involucrados, y establecer los criterios de aceptación de los productos. Un plan de calidad bien estructurado asegura que todos los aspectos del proyecto se revisen y que se mantengan altos estándares durante el ciclo de vida del software.
              
              - Estructura del plan de calidad: incluye la planificación, ejecución y evaluación de actividades de calidad.
              - Ejemplos prácticos de planes de calidad: implementación de estos planes en proyectos reales muestra cómo los principios del IEEE 730 pueden ser aplicados de manera efectiva.
              
              IEEE 829 (Estándar para documentación de pruebas):
              
              El IEEE 829 establece los tipos de documentos necesarios para la documentación de las pruebas de software, tales como el plan de pruebas, los casos de prueba y los informes. Esto garantiza que las pruebas sean exhaustivas y estén bien documentadas, lo que facilita la trazabilidad y el seguimiento de la calidad del software a lo largo de su desarrollo.
              
              - Tipos de documentos de pruebas: incluye planes de pruebas, casos de prueba e informes detallados que ayudan a validar los resultados.
              - Plantillas y ejemplos de implementación: las plantillas estándar proporcionadas por IEEE 829 permiten crear documentación coherente y alineada con las mejores prácticas.
              
              CMMI (Capability Maturity Model Integration):
              
              El CMMI (Capability Maturity Model Integration) es un modelo de madurez que evalúa el nivel de desarrollo de las organizaciones en cuanto a sus procesos de software. CMMI se enfoca en mejorar los procesos y establecer áreas de procesos clave que cubren desde la planificación hasta la gestión de riesgos, ayudando a las empresas a alcanzar mayores niveles de eficacia y consistencia en el desarrollo del software.
              
              - Niveles de madurez organizacional: CMMI clasifica las organizaciones en cinco niveles de madurez, desde el Nivel 1 (Inicial) hasta el Nivel 5 (Optimización). Cada nivel se centra en el fortalecimiento de los procesos y la mejora continua de las prácticas de calidad en el desarrollo de software.
              
              - Áreas de proceso que cubre CMMI: CMMI cubre áreas de proceso esenciales, como la gestión de proyectos, el aseguramiento de la calidad, la gestión de requisitos y la mejora continua de los procesos. Estas áreas proporcionan una guía para las organizaciones en la optimización de sus capacidades y en la gestión de los riesgos asociados a sus proyectos de software.
              
              - Ejemplos de implementación en empresas tecnológicas: Empresas tecnológicas de renombre han implementado CMMI para mejorar sus procesos y lograr una mayor madurez organizacional. Ejemplos como la implementación de CMMI en empresas como IBM y HP han demostrado mejoras significativas en la calidad y eficiencia del software desarrollado.
              `,
            },
          },
        },
      },
    },
    2: {
      index: "/modulos/2",
      title:
        "Verificación y Validación de la Documentación del Análisis de Requerimientos",
      secciones: {
        1: {
          index: "/modulos/2/conceptos-fundamentales-vyv",
          title: "Conceptos Fundamentales de V&V",
          subsecciones: {
            1: {
              path: "/modulos/2/conceptos-fundamentales-vyv/definicion-verificacion-validacion",
              title: "Definición de Verificación y Validación",
              toRead: `
              Definición de Verificación y Validación. Primero, la verificación: Es el proceso mediante el cual se asegura que el sistema o producto cumple con los requisitos especificados en la documentación de diseño. En la verificación, se verifica que el producto esté siendo construido correctamente y de acuerdo con las especificaciones técnicas.

              Ahora, la validación: Este proceso se centra en asegurar que el sistema satisface las necesidades y expectativas del usuario final. La validación busca responder si el producto cumple su propósito en el contexto de uso real y si resuelve adecuadamente el problema planteado.
              
              Diferencias clave entre verificación y validación: La verificación se pregunta: '¿Estamos construyendo el producto correctamente?'. Se enfoca en el cumplimiento de los requisitos técnicos y especificaciones.
              
              La validación se pregunta: '¿Estamos construyendo el producto correcto?'. Se centra en la satisfacción y necesidades del usuario final.
              
              Ambas prácticas son fundamentales en el desarrollo de software. Garantizan que el producto final no solo sea técnicamente correcto, sino también útil y adecuado para el usuario.
              `,
            },
            2: {
              path: "/modulos/2/conceptos-fundamentales-vyv/importancia-vv-ciclo-vida-software",
              title: "Importancia de V&V en el Ciclo de Vida del Software",
              toRead: `
              Importancia de la Verificación y Validación en el Ciclo de Vida del Software.
            
              La Verificación y Validación, o V y V, son prácticas cruciales en el desarrollo de software que aseguran la calidad del producto final. 
              Gracias a V y V, no solo se verifican los aspectos técnicos del software, sino que también se confirma que cumple con las necesidades reales de los usuarios.
            
              ¿Cómo contribuyen V y V a la calidad del software?
            
              Aplicar V y V a lo largo del desarrollo del software mejora su calidad de varias maneras:
              Primero, detecta y corrige errores en las primeras etapas, lo que evita arreglos costosos más adelante.
              Segundo, garantiza que todos los requisitos estén cubiertos y bien implementados.
              Tercero, evita fallos en producción, protegiendo la confianza de los usuarios y la reputación del software.
            
              Impacto en la prevención de errores y reducción de costos.
            
              La prevención de errores mediante verificación y validación evita retrabajos costosos y pérdidas económicas. 
              Estudios demuestran que encontrar y corregir defectos durante la fase de requisitos o diseño es mucho menos costoso que hacerlo más adelante.
              Cuanto más tardío es el descubrimiento de un defecto, más aumenta su costo de corrección.
            
              Ejemplos de proyectos exitosos gracias a V y V.
            
              Escuche algunos ejemplos de cómo V y V ha sido clave en proyectos exitosos:
              Primero, en el Proyecto A: Una empresa tecnológica redujo en un 40 por ciento los errores en producción al implementar revisiones de código automáticas y pruebas exhaustivas de validación.
              Segundo, en el Proyecto B: Una organización financiera evitó un fallo crítico que habría comprometido datos sensibles aplicando V y V desde las primeras fases de diseño.
              Tercero, en el Proyecto C: Un equipo de desarrollo de aplicaciones móviles incrementó la satisfacción del usuario en un 30 por ciento al validar cuidadosamente las necesidades y expectativas del cliente antes de la implementación.`,
            },
            3: {
              path: "/modulos/2/conceptos-fundamentales-vyv/fases-ciclo-vida-vv",
              title: "Fases del Ciclo de Vida de V&V",
              toRead: `
              Fases del Ciclo de Vida donde se Aplica Verificación y Validación.
            
              La Verificación y Validación, o V y V, son procesos clave aplicados en distintas fases del ciclo de vida del desarrollo de software, para asegurar la calidad y el cumplimiento de los requisitos especificados.
            
              Análisis de Requerimientos.
              En esta fase, la Validación es crucial para confirmar que los requisitos capturados reflejan las expectativas reales del cliente.
              Esto significa verificar que los requisitos sean claros, completos y verificables, lo cual reduce posibles malentendidos y errores en las fases posteriores.
              Aunque el enfoque principal en esta fase es la Validación, la Verificación también juega un rol importante al asegurar que los documentos de requerimientos estén bien estructurados y sin ambigüedades, facilitando un diseño más fluido.
            
              Diseño del Sistema.
              En esta fase, la Verificación es fundamental para garantizar que el diseño del sistema sea consistente con los requerimientos especificados.
              Se revisan modelos, diagramas y especificaciones para asegurar que la arquitectura y los componentes estén alineados con los objetivos definidos.
              La Validación del diseño asegura que las soluciones propuestas realmente aborden las necesidades identificadas en los requisitos, sin introducir enfoques que puedan resultar en problemas de implementación.
            
              Implementación y Pruebas.
              Durante la implementación, la Verificación implica revisar el código y los artefactos generados para confirmar que cumplen con las especificaciones del diseño.
              Para esto, se utilizan revisiones de código y pruebas automatizadas que mantienen la calidad del desarrollo.
              La Validación, por otro lado, se realiza mediante pruebas funcionales y no funcionales. Las pruebas funcionales validan que el software cumpla con todos los requisitos del cliente, mientras que las pruebas no funcionales aseguran que el software sea robusto, seguro y eficiente en su funcionamiento.
            `,
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
              toRead: `
              Técnicas de Verificación.
            
              Revisión de Requerimientos.
              La Revisión de Requerimientos es una inspección formal diseñada para detectar inconsistencias, ambigüedades y errores en la documentación de requisitos.
              Este proceso es esencial para asegurar que los requerimientos estén bien definidos y no presenten dudas interpretativas.
            
              Proceso de Inspección Formal.
              La inspección involucra un equipo multidisciplinario que analiza cada requerimiento utilizando listas de verificación y métodos estructurados para identificar posibles problemas.
              Durante la inspección, se deben documentar todos los hallazgos y emitir recomendaciones.
            
              Herramientas Utilizadas.
              IBM RequisitePro es un software para la gestión de requisitos que permite realizar revisiones colaborativas.
              JIRA es una herramienta ágil que ayuda a planificar y revisar requerimientos de manera eficiente.
            
              Ejemplos de Reportes Generados.
              Los reportes de revisión pueden incluir detalles como el número de inconsistencias detectadas, descripciones de errores específicos y propuestas de mejora.
              Estos documentos son clave para la trazabilidad y seguimiento de correcciones.
            
              Trazabilidad de Requerimientos.
              La Trazabilidad de Requerimientos garantiza que todos los requisitos estén cubiertos a lo largo del ciclo de vida del proyecto.
              Este método permite relacionar cada requerimiento con sus elementos correspondientes, como diseños, código y pruebas.
            
              Importancia de la Trazabilidad.
              Mantener una trazabilidad efectiva asegura que ningún requisito crítico sea pasado por alto, minimizando riesgos y ayudando a cumplir con los objetivos del proyecto de manera más estructurada.
            
              Herramientas de Trazabilidad.
              JIRA permite crear relaciones entre requerimientos y tareas del proyecto, asegurando la trazabilidad a lo largo del desarrollo.
              RequisitePro facilita la creación de matrices de trazabilidad y el seguimiento de requisitos en proyectos complejos.
            
              Ejemplos de Matrices de Trazabilidad.
              Una matriz de trazabilidad es una tabla que relaciona cada requerimiento con sus elementos de diseño, código y pruebas correspondientes.
              Estas matrices permiten asegurar que cada necesidad del cliente esté representada en la solución final.
              Por ejemplo, un requerimiento funcional puede estar vinculado a múltiples casos de prueba que aseguren su correcta implementación y validación.
            `,
            },
            2: {
              path: "/modulos/2/verificacion-documentacion-requerimientos/criterios-calidad",
              title: "Criterios de Calidad de los Requerimientos",
              toRead: `
              Criterios de Calidad de los Requerimientos.
            
              Claridad.
              La claridad es esencial para evitar cualquier ambigüedad en los requerimientos. Un requerimiento debe ser comprensible y no debe dejar espacio para interpretaciones variadas. 
              El lenguaje debe ser preciso y fácil de entender para todas las partes involucradas.
            
              “Si un requerimiento puede ser interpretado de varias maneras, ninguna es la correcta.” — Alistair Cockburn.
            
              Consistencia.
              La consistencia implica que no haya conflictos ni contradicciones entre los diferentes requerimientos. 
              Se debe verificar que cada requerimiento esté alineado con el resto del sistema, sin generar confusión o resultados inesperados.
            
              Completitud.
              La completitud asegura que todos los aspectos necesarios del sistema estén descritos en los requerimientos. 
              Esto incluye tanto los requerimientos funcionales como los no funcionales, como el rendimiento, seguridad y usabilidad.
            
              Verificabilidad.
              La verificabilidad significa que un requerimiento debe poder ser probado. 
              Si no se puede definir un método de prueba para un requerimiento, entonces el requerimiento no es verificable y debe ser reescrito o eliminado.
            
              Ejemplos de Requerimientos Mal Escritos y Cómo Mejorarlos.
            
              Mal escrito: “El sistema debe ser rápido.”
              Mejorado: “El sistema debe responder a las solicitudes de los usuarios en menos de 2 segundos en condiciones de carga estándar.”
            
              Mal escrito: “El sistema debe ser seguro.”
              Mejorado: “El sistema debe usar encriptación AES-256 para almacenar datos sensibles y autenticar usuarios mediante un sistema de autenticación multifactor.”
            
              Mal escrito: “El sistema debe ser fácil de usar.”
              Mejorado: “El sistema debe permitir a los usuarios completar las tareas más comunes en 3 clics o menos.”
            `,
            },
            3: {
              path: "/modulos/2/verificacion-documentacion-requerimientos/normas-verificacion",
              title: "Normas Relacionadas a la Verificación de Requerimientos",
              toRead: `
              Normas Relacionadas a la Verificación de Requerimientos.
            
              IEEE 830: Especificación de Requisitos de Software.
              La norma IEEE 830 proporciona un marco para documentar y verificar los requisitos de software. 
              Su objetivo es asegurar que los requerimientos sean claros, completos y comprensibles. 
              Esta norma es fundamental en la ingeniería de requisitos y establece las pautas que los documentos de requisitos deben seguir.
            
              Un aspecto importante de IEEE 830 es la estructura recomendada para un documento de requisitos. 
              Esta estructura incluye: Introducción, Descripción general, Requisitos específicos, Apendices y referencias.
            
              A continuación se presentan ejemplos prácticos de documentos basados en IEEE 830, donde se aplican estas pautas:
              Ejemplo: Documento de requisitos para un sistema de gestión de biblioteca que sigue las directrices de IEEE 830.
            
              ISO/IEC 25010: Modelo de Calidad.
              La norma ISO/IEC 25010 establece un modelo de calidad que se aplica a la verificación de requisitos de calidad. 
              Este modelo incluye varias características de calidad que son esenciales para evaluar la idoneidad del software, incluyendo: 
              Funcionalidad, Confiabilidad, Usabilidad, Eficiencia, Mantenibilidad y Portabilidad.
            
              Este modelo es crucial para la verificación de requerimientos no funcionales, que a menudo son más difíciles de especificar y verificar. 
              La aplicación del modelo de calidad ayuda a identificar y abordar posibles deficiencias en los requisitos antes de que se inicie el desarrollo del software.
            
              Ejemplo: Análisis de requisitos no funcionales para un sistema de gestión de ventas utilizando el modelo ISO/IEC 25010.
            `,
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
              toRead: `
              Métodos de Validación.
            
              La validación es un proceso crucial en el ciclo de vida del desarrollo de software, ya que garantiza que el sistema no solo cumple con los requisitos especificados, sino que también satisface las necesidades reales de los usuarios finales. Entre los métodos de validación más efectivos se encuentran la creación de prototipos y la realización de entrevistas y talleres con usuarios.
            
              Prototipos.
              Los prototipos son versiones preliminares del sistema que permiten a los desarrolladores y usuarios visualizar y experimentar con las funcionalidades antes de la implementación final. Este método de validación temprana tiene varios beneficios:
            
              - Validación Temprana de Requisitos: Permite identificar y corregir requisitos confusos o incorrectos en las etapas iniciales del desarrollo, lo que reduce el riesgo de realizar cambios costosos en fases posteriores.
              - Mejora de la Comunicación: Facilita la comunicación entre los stakeholders, ya que los usuarios pueden interactuar con un modelo visual, lo que ayuda a clarificar expectativas y obtener un feedback más preciso.
              - Aumento de la Satisfacción del Usuario: Al involucrar a los usuarios en la creación del prototipo, se incrementa la probabilidad de que el producto final cumpla con sus necesidades y preferencias.
            
              Ejemplos de herramientas para crear prototipos:
              - Figma: Una herramienta basada en la web que permite la creación de prototipos interactivos y colaborativos. Ideal para diseñadores que buscan recibir feedback en tiempo real.
              - Axure: Proporciona un enfoque más robusto para el diseño de prototipos, permitiendo la creación de interacciones complejas y documentando requisitos de manera eficiente.
            
              Entrevistas y Talleres con Usuarios.
              Realizar entrevistas y talleres directamente con los usuarios finales es otro método efectivo de validación. Este enfoque permite recoger información valiosa sobre sus necesidades y expectativas, asegurando que el desarrollo esté alineado con sus requerimientos.
            
              - Validación Directa: A través de la interacción directa, los usuarios pueden expresar sus necesidades, deseos y preocupaciones sobre el sistema.
              - Obtención de Feedback Valioso: Las entrevistas y talleres ofrecen una plataforma para que los usuarios compartan sus experiencias, lo que ayuda a los desarrolladores a ajustar los requisitos y las funcionalidades del sistema.
            
              Técnicas de entrevistas efectivas:
              - Preguntas Abiertas: Fomentan respuestas más detalladas y enriquecen la conversación.
              - Técnica de la Pirámide Invertida: Comienza con preguntas generales y luego se profundiza en aspectos específicos, facilitando una conversación más natural y menos estructurada.
            
              Ejemplos de actas de reuniones con usuarios: Incluir un resumen de la discusión, las decisiones tomadas, y las acciones pendientes. Las actas deben ser claras y concisas, y enviadas a todos los participantes para asegurar un seguimiento adecuado.
            `,
            },
            2: {
              path: "/modulos/2/validacion-documentacion-requerimientos/pruebas-validacion",
              title: "Pruebas de Validación",
              toRead: `
              Pruebas de Validación.
            
              Las pruebas de validación son una parte esencial del proceso de desarrollo de software, ya que garantizan que el sistema cumple con los requisitos del usuario y que se comporta como se espera en condiciones reales. Entre los métodos más comunes de validación se encuentran las pruebas de aceptación y la validación en ambientes de simulación.
            
              Pruebas de Aceptación.
              Las pruebas de aceptación son un tipo específico de pruebas diseñadas para asegurar que el sistema cumple con los requisitos del usuario final. Se realizan en etapas avanzadas del desarrollo y se enfocan en verificar que el producto final sea satisfactorio para el cliente.
            
              - Diseño y Ejecución: Las pruebas de aceptación implican el diseño de casos de prueba basados en los requisitos del usuario. Estos casos deben incluir tanto pruebas funcionales como no funcionales para abarcar todos los aspectos del sistema.
            
              Ejemplos de Scripts de Pruebas de Aceptación:
              - Funcionalidad: Verificar que el sistema permite a los usuarios realizar acciones específicas, como iniciar sesión o generar reportes.
              - Usabilidad: Evaluar si el sistema es fácil de usar, a través de tareas específicas que los usuarios deben completar.
              - Rendimiento: Medir el tiempo que tarda el sistema en responder a las acciones del usuario.
            
              Herramientas para gestionar pruebas de validación:
              - TestRail: Una herramienta integral de gestión de pruebas que permite planificar, realizar y seguir el progreso de las pruebas de aceptación. Proporciona informes detallados sobre el estado de las pruebas.
              - Zephyr: Ofrece un enfoque flexible para la gestión de pruebas, integrándose con herramientas de gestión de proyectos y permitiendo la colaboración en tiempo real entre los equipos de desarrollo y pruebas.
            
              Validación en Ambientes de Simulación.
              La validación en ambientes de simulación consiste en utilizar entornos controlados para recrear condiciones del mundo real y observar cómo se comporta el sistema. Este método es especialmente útil para evaluar el rendimiento del software en situaciones que podrían ser difíciles de replicar en un entorno de producción.
            
              - Uso de Simuladores: Los simuladores permiten a los equipos de desarrollo probar el sistema en condiciones que imitan el entorno real sin los riesgos asociados. Esto incluye situaciones como cargas de trabajo altas, interacciones con sistemas externos, o fallos en componentes del sistema.
            
              Ejemplos de pruebas en simuladores:
              - Simulación de Cargas de Trabajo: Probar el sistema bajo diferentes niveles de carga para evaluar su rendimiento y capacidad de respuesta.
              - Pruebas de Interoperabilidad: Validar que el sistema puede interactuar correctamente con otros sistemas y servicios en un entorno simulado.
              - Pruebas de Fallos: Introducir fallos controlados en el sistema para evaluar cómo maneja los errores y si se recupera adecuadamente.
            `,
            },
            3: {
              path: "/modulos/2/validacion-documentacion-requerimientos/fallos-comunes",
              title: "Ejemplos de Fallos Comunes en la Validación",
              toRead: `
              Ejemplos de Fallos Comunes en la Validación.
              La validación de requisitos es una etapa crítica en el desarrollo de software. Cuando se lleva a cabo de manera insuficiente, puede dar lugar a proyectos fallidos. A continuación, se presentan ejemplos de fallos comunes en la validación, casos de proyectos que no lograron satisfacer las expectativas y algunas mejores prácticas para evitar estos errores.
            
              Casos de Proyectos Fallidos.
              - Proyecto de Sistema de Gestión de Clientes (CRM):
                Descripción: Un equipo desarrolló un sistema CRM para una empresa sin realizar entrevistas adecuadas con los usuarios finales.
                Fallos: El sistema no incluía funcionalidades esenciales que los empleados necesitaban, como la gestión de contactos y la automatización de correos electrónicos.
                Resultado: La falta de validación resultó en un producto que fue rechazado por los usuarios, lo que llevó a un alto costo de re-desarrollo y pérdida de tiempo.
            
              - Aplicación de Comercio Electrónico:
                Descripción: Una empresa lanzó una nueva plataforma de comercio electrónico sin realizar pruebas de aceptación adecuadas.
                Fallos: No se validaron correctamente los requisitos de seguridad y experiencia del usuario, lo que llevó a vulnerabilidades que permitieron el acceso no autorizado a datos sensibles.
                Resultado: La plataforma sufrió una violación de seguridad significativa, afectando la reputación de la empresa y provocando pérdidas financieras.
            
              - Sistema de Control de Inventarios:
                Descripción: Un sistema de gestión de inventarios fue desarrollado sin la participación activa de los empleados del almacén.
                Fallos: Los requisitos no fueron validados con los usuarios, lo que llevó a una interfaz de usuario confusa y funcionalidades ineficientes.
                Resultado: Los empleados encontraron el sistema difícil de usar, lo que resultó en errores de inventario y una baja adopción del sistema.
            
              Mejores Prácticas para Evitar Fallos en la Validación.
              - Involucrar a los Usuarios Finales desde el Inicio: Asegúrate de incluir a los usuarios finales en el proceso de validación desde las primeras etapas del desarrollo. Realiza entrevistas, encuestas y talleres para comprender sus necesidades y expectativas.
              - Realizar Pruebas de Aceptación de Manera Exhaustiva: Diseña y ejecuta pruebas de aceptación que cubran todos los aspectos del sistema. Incluye pruebas funcionales, de rendimiento y de seguridad para garantizar que el producto cumpla con los requisitos.
              - Utilizar Prototipos y Simulaciones: Crea prototipos y utiliza simuladores para validar los requisitos en un entorno controlado. Esto permite identificar y corregir problemas antes de la implementación final.
              - Documentar y Revisar los Requisitos: Mantén una documentación clara y detallada de todos los requisitos. Realiza revisiones formales del documento de requisitos con todas las partes interesadas para asegurar que no se omita información clave.
              - Implementar un Proceso de Retroalimentación Continua: Establece un mecanismo de retroalimentación continuo donde los usuarios puedan reportar problemas y sugerencias incluso después de la entrega del producto. Esto ayuda a realizar ajustes y mejoras posteriores.
            `,
            },
          },
        },
        4: {
          index: "/modulos/2/revision-formal-documento-requerimientos",
          title: "Revisión Formal de Documento de Requerimientos",
          subsecciones: {
            1: {
              path: "/modulos/2/revision-formal-documento-requerimientos/proceso-revision",
              title: "Proceso de Revisión Formal",
              toRead: `
              Proceso de Revisión Formal.
              El proceso de revisión formal de los documentos de requisitos es una actividad esencial en la verificación de un proyecto de software. Este proceso permite detectar errores, inconsistencias o requisitos incompletos antes de que se continúe con el desarrollo. A continuación, se describen los pasos clave para organizar una revisión formal, ejemplos de cómo estructurar las agendas y actas de las reuniones, y los roles importantes dentro de este proceso.
            
              Planificación de la Revisión.
              La planificación es el primer paso crucial para llevar a cabo una revisión formal exitosa. Durante esta fase, se organizan las reuniones y se establece una agenda que cubra los objetivos principales de la revisión, los documentos a revisar y los tiempos necesarios.
            
              - Cómo organizar una revisión formal con stakeholders:
                - Identificación de los stakeholders clave: Invita a las personas que tienen un interés directo en los requisitos, como los desarrolladores, testers, analistas de negocio, y representantes del cliente.
                - Establecimiento de objetivos claros: Define los aspectos específicos del documento que se revisarán (por ejemplo, claridad, consistencia, completitud).
                - Preparación previa: Proporciona a todos los participantes los documentos a revisar con suficiente antelación para que puedan prepararse adecuadamente.
            
              Ejemplos de Agendas para una Revisión de Requisitos.
              - Introducción (10 min): Breve resumen del documento de requisitos a revisar y los objetivos de la reunión.
              - Discusión de los puntos críticos (30 min): Revisión de las secciones del documento que requieren más atención, como requisitos ambiguos o posibles conflictos.
              - Feedback y Recomendaciones (20 min): Los participantes ofrecen sus observaciones y sugerencias de mejora.
              - Cierre y próximos pasos (10 min): Resumen de las acciones a seguir y establecimiento de una fecha para la próxima reunión, si es necesario.
            
              Roles en una Revisión Formal.
              Asignar los roles adecuados a los participantes es fundamental para garantizar el éxito de la revisión. Cada rol tiene una función específica que contribuye al proceso.
            
              - Revisor: Se encarga de analizar el documento en detalle y detectar posibles errores o áreas de mejora.
              - Moderador: Facilita la reunión, asegurándose de que se sigan los tiempos establecidos en la agenda y de que todos los participantes puedan aportar.
              - Redactor: Documenta los resultados de la revisión, incluyendo los puntos discutidos, las observaciones, y los acuerdos alcanzados.
              - Líder del Proyecto: Asegura que los cambios solicitados sean implementados correctamente en las próximas iteraciones del proyecto.
            
              Ejemplos de Actas de Revisión.
              Un acta de revisión formal generalmente incluye:
                - Fecha y hora de la revisión.
                - Participantes (con sus roles asignados).
                - Resumen del documento revisado.
                - Puntos críticos discutidos (inconsistencias, áreas de mejora, requerimientos ambiguos).
                - Acciones a seguir (quién es responsable de hacer los cambios, fechas límites).
            `,
            },
            2: {
              path: "/modulos/2/revision-formal-documento-requerimientos/checklists",
              title: "Checklists para la Revisión",
              toRead: `
              Checklists para la Revisión. Los checklists son herramientas fundamentales en el proceso de revisión de la documentación de requisitos, ya que aseguran que todos los aspectos importantes sean considerados y evaluados de manera sistemática. A continuación, se exploran los tipos de checklists predefinidos, ejemplos específicos para la revisión de requisitos, y herramientas que facilitan la creación de checklists automatizadas.
              
              Checklists Predefinidos. Los checklists predefinidos son listas de control que ayudan a los revisores a garantizar que se cumplan los estándares de calidad y se eviten omisiones durante la revisión de los documentos de requisitos. Al proporcionar un marco estructurado, estos checklists aseguran que no se pase por alto ninguna área crítica.
              
              Ejemplos de Checklists para la Revisión de Requisitos.
              - Checklist de Claridad:
                - ¿Los requisitos están redactados en un lenguaje claro y comprensible?
                - ¿Se han definido todos los términos técnicos utilizados?
                - ¿Los requisitos son específicos y medibles?
              - Checklist de Consistencia:
                - ¿Los requisitos no entran en conflicto entre sí?
                - ¿Se han identificado y resuelto todas las ambigüedades?
              - Checklist de Completitud:
                - ¿Todos los aspectos del sistema están cubiertos por los requisitos?
                - ¿Se han documentado todas las restricciones y supuestos?
              - Checklist de Verificabilidad:
                - ¿Cada requisito puede ser probado o verificado?
                - ¿Se han especificado criterios de aceptación claros para cada requisito?
              - Checklist de Trazabilidad:
                - ¿Se ha establecido la trazabilidad de cada requisito desde su origen hasta su implementación?
                - ¿Existen referencias a requisitos relacionados o dependientes?
              
              Herramientas para Crear Checklists Automatizadas.
              La automatización de los checklists puede aumentar la eficiencia del proceso de revisión y facilitar la colaboración entre los miembros del equipo. Algunas herramientas populares para crear checklists automatizadas son:
              - Confluence: Una herramienta de colaboración que permite crear y gestionar documentos, incluidas listas de verificación. Los equipos pueden trabajar juntos en tiempo real y hacer ajustes fácilmente.
              - Notion: Una plataforma que permite crear bases de datos personalizables, incluidas listas de control para la revisión de requisitos. Su flexibilidad permite a los equipos adaptar los checklists a sus necesidades específicas.
              - Trello: Aunque es más conocido como una herramienta de gestión de proyectos, Trello permite la creación de checklists dentro de las tarjetas, lo que facilita el seguimiento de los elementos pendientes de revisión.
              - JIRA: Se puede utilizar para crear checklists dentro de las tareas y tickets, asegurando que todos los aspectos relevantes sean considerados antes de cerrar un ticket o dar por concluido un requisito.
              `,
            },
            3: {
              path: "/modulos/2/revision-formal-documento-requerimientos/correccion-seguimiento",
              title: "Corrección y Seguimiento de Errores",
              toRead: `
              Corrección y Seguimiento de Errores:
              La gestión efectiva de errores durante la verificación y validación es fundamental para la calidad de la documentación de requisitos y del software final. Este proceso implica registrar y dar seguimiento a los errores. A continuación, se detallan las mejores prácticas para documentar errores, ejemplos de plantillas, y herramientas útiles.
              
              Registro de Errores:
              El registro de errores permite identificar y documentar problemas encontrados en la revisión de los requisitos, facilitando su resolución.
              
              Cómo documentar errores:
              - Identificación clara: Cada error debe tener un número o identificador único para facilitar su seguimiento.
              - Descripción detallada: Incluye una explicación clara del error, dónde se encuentra en el documento de requisitos y cómo afecta al proyecto.
              - Clasificación: Clasifica los errores según su gravedad, como crítico, alto, medio o bajo, para priorizar su corrección.
              
              Ejemplo de Plantilla para Registrar Errores:
              Una plantilla básica para el registro de errores debe incluir los siguientes campos:
              1. ID del Error: Identificación única del error.
              2. Descripción: Explicación detallada del error.
              3. Ubicación: Dónde se encuentra el error en el documento de requisitos.
              4. Severidad: Gravedad del error (por ejemplo, crítico, alto, medio, bajo).
              5. Estado: Estado actual del error, como abierto, en progreso, o cerrado.
              6. Responsable: Persona encargada de resolver el error.
              7. Fecha de Registro: Fecha en que se detectó el error.
              8. Fecha de Corrección: Fecha en que se corrigió el error.
              
              Ejemplo de Registro de Errores:
              Error 001.
              - Descripción: Requisito ambiguo en la sección dos punto tres.
              - Ubicación: Sección dos punto tres, línea quince.
              - Severidad: Alta.
              - Estado: Abierto.
              - Responsable: Juan Pérez.
              - Fecha de Registro: Diez de agosto de dos mil veinticuatro.
              - Fecha de Corrección: Doce de noviembre de dos mil veinticuatro.
              
              Seguimiento de Correcciones:
              El seguimiento de las correcciones asegura que los errores se resuelvan de manera efectiva. Para esto:
              - Establece revisiones periódicas, como reuniones regulares para revisar el estado de los errores abiertos y las correcciones pendientes.
              - Mantén actualizado el registro de errores, indicando si están abiertos, en progreso o cerrados.
              - Asegúrate de que los errores corregidos se revisen nuevamente para verificar que se resolvieron correctamente.
              
              Herramientas para la Gestión de Correcciones:
              Las herramientas de gestión de proyectos organizan y facilitan el seguimiento de las correcciones. Algunas herramientas recomendadas son:
              - JIRA: Permite crear tickets para cada error, asignar responsables y hacer seguimiento del estado de las correcciones. Facilita la colaboración y la trazabilidad a lo largo del proyecto.
              - Trello: Utiliza tableros y tarjetas para gestionar el flujo de trabajo. Cada error puede ser una tarjeta que se mueve entre columnas como pendiente, en progreso y resuelto, proporcionando una vista clara del estado de las correcciones.
              - Confluence: Integrada con JIRA, permite enlazar documentos y tickets de errores para un seguimiento centralizado de la documentación y corrección de errores.
              `,
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
              toRead: `
              Herramientas de Gestión de Requisitos:
              La gestión de requisitos es crucial en el desarrollo de software. Contar con herramientas adecuadas facilita este proceso. A continuación, se describen algunas de las herramientas más populares, incluyendo JIRA, Confluence e IBM DOORS, junto con ejemplos de su uso en proyectos reales.
              
              JIRA y Confluence:
              JIRA es una herramienta de gestión de proyectos ampliamente utilizada en el desarrollo de software. Ofrece funcionalidades para seguimiento de tareas, gestión de incidencias y, en particular, gestión de requisitos.
              
              Funcionalidades en JIRA:
              - Seguimiento de Requisitos: Permite crear tickets para cada requisito, facilitando el seguimiento a lo largo del ciclo de vida del desarrollo.
              - Trazabilidad: JIRA permite establecer relaciones entre requisitos, tareas y pruebas, asegurando que cada aspecto esté cubierto.
              
              Confluence es una herramienta de colaboración y documentación que se integra fácilmente con JIRA. La combinación de JIRA y Confluence permite a los equipos gestionar requisitos de manera eficiente.
              
              Integración JIRA-Confluence:
              - Documentación: Confluence se utiliza para documentar requisitos y relacionarlos directamente con los tickets de JIRA.
              - Tutorial para Integrar JIRA con Confluence:
                1. En JIRA, ve a la Configuración del Proyecto.
                2. Selecciona Integraciones y elige Confluence.
                3. Autentica tu cuenta de Confluence.
                4. En Confluence, crea una página de requisitos y utiliza el macro de JIRA para enlazar tickets relacionados.
              Esta integración permite que los equipos visualicen y gestionen requisitos y tareas en un solo lugar.
              
              IBM DOORS:
              IBM DOORS es una herramienta avanzada de gestión de requisitos, especialmente útil para gestionar requisitos complejos y de gran escala.
              
              Funcionalidades en IBM DOORS:
              - Gestión Avanzada de Requisitos: Proporciona capacidades para modelado, seguimiento y trazabilidad de requisitos.
              - Colaboración: Permite que múltiples usuarios colaboren en el desarrollo y revisión de requisitos en un entorno centralizado.
              
              Ejemplos de Proyectos Gestionados con DOORS:
              - Desarrollo de Software en el Sector Aeroespacial: Utilizado en proyectos complejos donde la trazabilidad y gestión de requisitos son esenciales para cumplir con regulaciones.
              - Sistemas de Salud: Implementaciones donde es necesario rastrear y validar requisitos para garantizar la calidad y cumplimiento de normativa.
              `,
            },
            2: {
              path: "/modulos/2/herramientas-vyv-analisis-requerimientos/colaboracion-documentacion",
              title: "Herramientas de Colaboración y Documentación",
              toRead: `
              Herramientas de Colaboración y Documentación:
              La colaboración efectiva es esencial en el desarrollo y documentación de requisitos en proyectos de software. A continuación, se describen herramientas populares que facilitan la creación, revisión y gestión de documentos de requisitos.
              
              Google Docs:
              Google Docs es una plataforma de procesamiento de textos en línea que permite la creación y edición colaborativa de documentos en tiempo real, ideal para redactar requisitos.
              
              Funcionalidades de Google Docs:
              - Colaboración en Tiempo Real: Los usuarios pueden ver los cambios de otros en tiempo real, lo que facilita la discusión y toma de decisiones.
              - Historial de Cambios: Permite rastrear versiones anteriores del documento y restaurar cambios si es necesario.
              
              Ejemplo de Flujo de Trabajo con Google Docs:
              1. Un miembro del equipo redacta un documento inicial de requisitos en Google Docs.
              2. Otros miembros revisan el documento, agregando comentarios o sugerencias.
              3. Se realiza una reunión para discutir las sugerencias y se actualiza el documento según sea necesario.
              
              Microsoft SharePoint:
              Microsoft SharePoint es una plataforma de colaboración que permite crear sitios web para compartir y gestionar contenido, especialmente útil para almacenar y organizar documentos de requisitos.
              
              Funcionalidades de SharePoint:
              - Almacenamiento Centralizado: Permite gestionar y acceder a documentos importantes en un solo lugar.
              - Controles de Acceso: Ofrece la opción de establecer permisos para diferentes usuarios, asegurando que solo el personal autorizado acceda a información sensible.
              
              Ejemplo de Flujo de Trabajo con SharePoint:
              1. El equipo crea un sitio de SharePoint para el proyecto y carga los documentos de requisitos.
              2. Los miembros del equipo acceden a los documentos y agregan comentarios o modificaciones.
              3. Las actualizaciones notifican automáticamente a los usuarios relevantes, manteniendo a todos informados.
              
              Herramientas de Revisión:
              Las herramientas de revisión colaborativa son fundamentales para garantizar la calidad de la documentación de requisitos. A continuación se presentan dos herramientas populares.
              
              Grammarly:
              Esta herramienta ayuda a mejorar la gramática y el estilo de escritura en documentos, proporcionando sugerencias en tiempo real, lo cual contribuye a la claridad de los requisitos.
              
              Review Assistant:
              Es una herramienta que facilita la revisión de código y documentos en equipo. Permite realizar comentarios y sugerencias directamente en los documentos, centralizando el feedback.
              
              Ejemplos de Uso en Revisiones Documentales:
              - Revisión de Documentos de Requisitos: Utilizar Grammarly para asegurar que los requisitos estén redactados sin errores gramaticales.
              - Colaboración en Revisión de Código: Emplear Review Assistant para recibir comentarios del equipo sobre los requisitos funcionales durante el desarrollo.
              `,
            },
          },
        },
      },
    },
    3: {
      index: "/modulos/3",
      title:
        "Verificación y Validación de la Documentación del Diseño del Sistema",
      secciones: {
        1: {
          index: "/modulos/3/conceptos-fundamentales-diseno-sistema",
          title: "Conceptos Fundamentales del Diseño de Sistema",
          subsecciones: {
            1: {
              path: "/modulos/3/conceptos-fundamentales-diseno-sistema/definicion-diseno",
              title: "Definición de Diseño",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/3/conceptos-fundamentales-diseno-sistema/importancia-vyv",
              title: "Importancia de V&V",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/3/conceptos-fundamentales-diseno-sistema/fases-diseno",
              title: "Fases de Diseño",
              toRead: "Prueba",
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
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/3/verificacion-documentacion-diseno/criterios-calidad",
              title: "Criterios de Calidad",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/3/verificacion-documentacion-diseno/normas-verificacion",
              title: "Normas de Verificación",
              toRead: "Prueba",
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
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/3/validacion-documentacion-diseno/pruebas-validacion",
              title: "Pruebas de Validación",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/3/validacion-documentacion-diseno/fallos-comunes",
              title: "Fallos Comunes",
              toRead: "Prueba",
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
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/3/revision-formal-diseno-sistema/checklists",
              title: "Checklists",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/3/revision-formal-diseno-sistema/gestion-errores",
              title: "Gestión de Errores",
              toRead: "Prueba",
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
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/3/herramientas-vyv-diseno-sistema/gestion-trazabilidad",
              title: "Gestión de Trazabilidad",
              toRead: "Prueba",
            },
          },
        },
      },
    },
    4: {
      index: "/modulos/4",
      title: "Factores Críticos de Éxito para el Desarrollo del Software",
      secciones: {
        1: {
          index:
            "/modulos/4/definicion-caracteristicas-factores-criticos-exito",
          title:
            "Definición y Características de los Factores Críticos de Éxito",
          subsecciones: {
            1: {
              path: "/modulos/4/definicion-caracteristicas-factores-criticos-exito/concepto-fce",
              title: "Concepto de Factores Críticos de Éxito (FCE)",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/definicion-caracteristicas-factores-criticos-exito/tipos-fce",
              title: "Tipos de Factores Críticos de Éxito",
              toRead: "Prueba",
            },
          },
        },
        2: {
          index: "/modulos/4/factores-tecnicos-criticos-desarrollo-software",
          title: "Factores Técnicos Críticos para el Desarrollo del Software",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-tecnicos-criticos-desarrollo-software/eleccion-arquitectura",
              title: "Elección Correcta de la Arquitectura del Software",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/factores-tecnicos-criticos-desarrollo-software/seleccion-tecnologias",
              title: "Selección de Tecnologías y Herramientas Adecuadas",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/4/factores-tecnicos-criticos-desarrollo-software/calidad-codigo",
              title: "Calidad del Código y Mantenibilidad",
              toRead: "Prueba",
            },
          },
        },
        3: {
          index: "/modulos/4/factores-humanos-desarrollo-software",
          title: "Factores Humanos en el Desarrollo de Software",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-humanos-desarrollo-software/capacitacion-habilidades",
              title: "Capacitación y Habilidades del Equipo de Desarrollo",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/factores-humanos-desarrollo-software/comunicacion-efectiva",
              title: "Comunicación Efectiva en el Equipo",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/4/factores-humanos-desarrollo-software/liderazgo-gestion",
              title: "Liderazgo y Gestión de Proyectos",
              toRead: "Prueba",
            },
          },
        },
        4: {
          index: "/modulos/4/factores-organizacionales-criticos",
          title: "Factores Organizacionales Críticos",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-organizacionales-criticos/planificacion-gestion",
              title: "Planificación y Gestión de Proyectos",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/factores-organizacionales-criticos/gestion-riesgos",
              title: "Gestión de Riesgos en el Desarrollo de Software",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/4/factores-organizacionales-criticos/presupuesto-control",
              title: "Presupuesto y Control Financiero",
              toRead: "Prueba",
            },
          },
        },
        5: {
          index: "/modulos/4/metodologias-procesos-factores-exito",
          title: "Metodologías y Procesos como Factores de Éxito",
          subsecciones: {
            1: {
              path: "/modulos/4/metodologias-procesos-factores-exito/metodologias-agiles",
              title: "Aplicación de Metodologías Ágiles",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/metodologias-procesos-factores-exito/gestion-calidad",
              title: "Gestión de la Calidad del Software",
              toRead: "Prueba",
            },
            3: {
              path: "/modulos/4/metodologias-procesos-factores-exito/entregas-continuas",
              title: "Entregas Continuas e Integración Continua (CI/CD)",
              toRead: "Prueba",
            },
          },
        },
        6: {
          index: "/modulos/4/factores-externos",
          title: "Factores Externos",
          subsecciones: {
            1: {
              path: "/modulos/4/factores-externos/relacion-clientes",
              title: "Relación con Clientes y Stakeholders",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/factores-externos/impacto-competencia",
              title: "Impacto de la Competencia y el Mercado",
              toRead: "Prueba",
            },
          },
        },
        7: {
          index: "/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales",
          title: "Ejemplos de Factores Críticos de Éxito en Proyectos Reales",
          subsecciones: {
            1: {
              path: "/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales/caso-empresa-global",
              title:
                "Caso de Estudio: Desarrollo de Software en una Empresa Global",
              toRead: "Prueba",
            },
            2: {
              path: "/modulos/4/ejemplos-factores-criticos-exito-proyectos-reales/caso-proyecto-fallido",
              title:
                "Caso de Estudio: Proyecto Fallido por No Identificar los FCE",
              toRead: "Prueba",
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

export function getRouteTitles(currentPath: string) {
  // Obtener número de módulo del path
  const moduleNumber = currentPath.split("/")[2];

  // Obtener el módulo
  const modulo = contenido.modulos[moduleNumber];
  if (!modulo) return { moduleTitle: "", sectionTitle: "" };

  // Buscar la sección que contiene este path
  const seccion = Object.values((modulo as Modulo).secciones).find((seccion) =>
    currentPath.startsWith(seccion.index)
  );

  if (!seccion)
    return { moduleTitle: (modulo as Modulo).title, sectionTitle: "" };

  return {
    moduleTitle: `Módulo ${moduleNumber}: ${(modulo as Modulo).title}`,
    sectionTitle: `Sección ${Object.keys((modulo as Modulo).secciones).find(
      (key) => (modulo as Modulo).secciones[key].index === seccion.index
    )}: ${seccion.title}`,
  };
}

export function getCurrentToRead(currentPath: string): string | null {
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

  // Retornar el toRead si existe la subsección
  return subseccion?.toRead || null;
}
