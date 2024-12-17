import PageInformation from "@/components/shared/PageInformation";

const page = () => {
  return (
    <PageInformation
      contentToRead={
        <>
          <article>
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Herramientas de Gestión de Requisitos y Trazabilidad
            </h2>

            <section className="mb-6 text-justify">
              <p className="text-black mb-4">
                La gestión de requisitos y su trazabilidad son aspectos críticos
                en el desarrollo de software, ya que garantizan que las
                necesidades del cliente estén claramente definidas, documentadas
                y validadas a lo largo del ciclo de vida del proyecto.
                Herramientas como <strong>IBM Rational DOORS</strong>,{" "}
                <strong>Jira</strong> y <strong>Confluence</strong> ofrecen
                funcionalidades avanzadas para gestionar requisitos y asegurar
                la coherencia en los diseños.
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                IBM Rational DOORS: Gestión Avanzada de Requisitos
              </h3>
              <p className="text-black mb-4">
                IBM Rational DOORS es una herramienta líder en la gestión de
                requisitos que facilita la trazabilidad y validación del diseño.
                Su capacidad de integrar requisitos con el diseño del sistema
                permite mantener consistencia y control sobre el proyecto.
              </p>
              <blockquote className="text-gray-700 italic border-l-4 pl-4 border-gray-300 mb-4">
                Con DOORS, los equipos pueden realizar análisis de impacto y
                garantizar que los requisitos estén alineados con los objetivos
                del proyecto.
              </blockquote>
              <p className="text-black mb-4">
                Por ejemplo, en proyectos de sistemas críticos como la industria
                aeroespacial, DOORS ha sido utilizado para gestionar requisitos
                complejos y garantizar trazabilidad desde la concepción hasta la
                validación final del producto.
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Jira y Confluence: Trazabilidad y Seguimiento del Diseño
              </h3>
              <p className="text-black mb-4">
                Jira y Confluence son herramientas ampliamente utilizadas para
                gestionar proyectos ágiles. Jira se centra en el seguimiento de
                tareas y la trazabilidad de los requisitos, mientras que
                Confluence permite documentar procesos y crear wikis
                colaborativos para el equipo.
              </p>
              <p className="text-black mb-4">
                Una integración típica de Jira y Confluence incluye la
                vinculación de historias de usuario en Jira con documentos
                detallados en Confluence. Esta conexión mejora la trazabilidad y
                permite a los equipos mantener un historial centralizado de
                decisiones, cambios y validaciones.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>Jira:</strong> Gestión de historias de usuario, tareas
                  y defectos.
                </li>
                <li>
                  <strong>Confluence:</strong> Documentación centralizada de
                  requisitos y decisiones.
                </li>
              </ul>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Tutoriales y Casos Prácticos
              </h3>
              <p className="text-black mb-4">
                Existen múltiples tutoriales para aprender a utilizar estas
                herramientas de manera integrada. Por ejemplo, los equipos
                pueden crear un flujo de trabajo en Jira que capture los
                requisitos iniciales y los enlace directamente a páginas en
                Confluence que contengan la documentación de respaldo.
              </p>
              <blockquote className="text-gray-700 italic border-l-4 pl-4 border-gray-300 mb-4">
                La combinación de Jira y Confluence proporciona una solución
                integral para gestionar requisitos, planificación y
                documentación.
              </blockquote>
              <p className="text-black mb-4">
                En proyectos educativos, esta integración se ha utilizado para
                planificar currículos, mapear objetivos de aprendizaje y
                realizar seguimientos de revisiones por parte de los equipos
                docentes.
              </p>
            </section>
          </article>
        </>
      }
      resources={<></>}
    />
  );
};

export default page;
