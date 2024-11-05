import Figure from "@/components/shared/Figure";
import PageInformation from "@/components/shared/PageInformation";
import URLMetadataViewer from "@/components/shared/URLMetadataViewer";

const page = () => {
  const externalResource1 =
    "https://visuresolutions.com/es/blog/requirements-verification/";
  const externalResource2 =
    "https://pmcollege.edu.ni/la-matriz-de-trazabilidad-de-requisitos/";

  return (
    <PageInformation
      sectionTitle="Verificación de la Documentación de Requerimientos"
      contentToRead={
        <>
          <article className="-py-8 -px-4 bg-white -text-gray-800">
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Técnicas de Verificación
            </h2>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Revisión de Requerimientos
              </h3>

              <p className="text-black mb-4">
                La <strong>Revisión de Requerimientos</strong> es una inspección
                formal diseñada para detectar inconsistencias, ambigüedades y
                errores en la documentación de requisitos. Este proceso es
                esencial para asegurar que los requerimientos estén bien
                definidos y no presenten dudas interpretativas.
              </p>

              <h4 className="font-bold text-lg mb-2">
                Proceso de Inspección Formal:
              </h4>
              <p className="text-black mb-4">
                La inspección involucra un equipo multidisciplinario que analiza
                cada requerimiento utilizando listas de verificación y métodos
                estructurados para identificar posibles problemas. Durante la
                inspección, se deben documentar todos los hallazgos y emitir
                recomendaciones.
              </p>

              <h4 className="font-semibold mb-2 ml-4">
                Herramientas Utilizadas:
              </h4>
              <ul className="list-disc pl-8 mb-4 ml-4">
                <li className="mb-2 text-black">
                  <strong>IBM RequisitePro:</strong> Software para la gestión de
                  requisitos que permite realizar revisiones colaborativas.
                  <Figure
                    className="h-[5rem]"
                    href={
                      "/images/png/modulo2/seccion1/IBMRequisiteProLogo.jpeg"
                    }
                    caption={"Logo de IBM RequisitePro"}
                  />
                </li>
                <li className="mb-2 text-black">
                  <strong>JIRA:</strong> Herramienta ágil que ayuda a planificar
                  y revisar requerimientos de manera eficiente.
                  <Figure
                    className="h-[5rem]"
                    href={"/images/png/modulo2/seccion1/JiraLogo.png"}
                    caption={"Logo de Jira"}
                  />
                </li>
              </ul>

              <h4 className="font-semibold mb-2 ml-4">
                Ejemplos de Reportes Generados:
              </h4>
              <p className="text-black mb-4 ml-4">
                Los reportes de revisión pueden incluir detalles como el número
                de inconsistencias detectadas, descripciones de errores
                específicos y propuestas de mejora. Estos documentos son clave
                para la trazabilidad y seguimiento de correcciones.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-3">
                Trazabilidad de Requerimientos
              </h3>

              <p className="text-black mb-4">
                La <strong>Trazabilidad de Requerimientos</strong> garantiza que
                todos los requisitos estén cubiertos a lo largo del ciclo de
                vida del proyecto. Este método permite relacionar cada
                requerimiento con sus elementos correspondientes, como diseños,
                código y pruebas.
              </p>

              <h4 className="font-bold text-lg mb-2">
                Importancia de la Trazabilidad:
              </h4>
              <p className="text-black mb-4">
                Mantener una trazabilidad efectiva asegura que ningún requisito
                crítico sea pasado por alto, lo que ayuda a minimizar riesgos y
                a cumplir con los objetivos del proyecto de manera más
                estructurada.
              </p>

              <h4 className="font-semibold mb-2 ml-4">
                Herramientas de Trazabilidad:
              </h4>
              <ul className="list-disc pl-8 mb-4 ml-4">
                <li className="mb-2 text-black">
                  <strong>JIRA:</strong> Permite crear relaciones entre
                  requerimientos y tareas del proyecto, asegurando la
                  trazabilidad a lo largo del desarrollo.
                </li>
                <li className="mb-2 text-black">
                  <strong>RequisitePro:</strong> Facilita la creación de
                  matrices de trazabilidad y el seguimiento de requisitos en
                  proyectos complejos.
                </li>
              </ul>

              <h4 className="font-semibold mb-2 ml-4">
                Ejemplos de Matrices de Trazabilidad:
              </h4>
              <p className="text-black mb-4 ml-4">
                Una <em>matriz de trazabilidad</em> es una tabla que relaciona
                cada requerimiento con sus elementos de diseño, código y pruebas
                correspondientes. Estas matrices permiten asegurar que cada
                necesidad del cliente esté representada en la solución final.
              </p>
              <p className="text-black mb-4 ml-4">
                <strong>Ejemplo:</strong> Un requerimiento funcional puede estar
                vinculado a múltiples casos de prueba que aseguren su correcta
                implementación y validación.
              </p>
            </section>
          </article>
        </>
      }
      resources={
        <>
          <URLMetadataViewer url={externalResource1} />

          <iframe
            className="aspect-[560/315] w-[min(24rem,80%)] rounded-[1rem]"
            src="https://www.youtube.com/embed/rHKFSkZ2fkc?si=RQZ-wY91_dmVhIEM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <URLMetadataViewer url={externalResource2} />
        </>
      }
    />
  );
};

export default page;
