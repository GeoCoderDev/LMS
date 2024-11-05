import PageInformation from "@/components/shared/PageInformation";
import URLMetadataViewer from "@/components/shared/URLMetadataViewer";

const page = () => {
  const externalResource1 =
    "https://www.sqs.es/verificacion-y-validacion-de-software/";
  const externalResource2 =
    "https://www.mat.uson.mx/~mireles/gestionCalidad/GCcosto.html";

  return (
    <PageInformation
      sectionTitle="Conceptos Fundamentales de la Verificación y Validación (V&V)"
      contentToRead={
        <>
          <article>
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Importancia de Verificación y Validación (V&V) en el Ciclo de Vida
              del Software
            </h2>
            <p className="mb-4">
              La Verificación y Validación (V&V) juegan un papel crucial en el
              ciclo de vida del desarrollo de software, contribuyendo
              significativamente a la calidad del producto final. Estas
              prácticas aseguran que el software no solo cumpla con las
              especificaciones técnicas, sino que también satisfaga las
              necesidades reales de los usuarios finales.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Cómo contribuyen V&V a la calidad del software
            </h3>
            <p className="mb-4">
              Implementar técnicas adecuadas de V&V durante todo el proceso de
              desarrollo mejora la calidad del software al:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 pl-8">
              <li>
                Detectar y corregir errores en las primeras etapas, antes de que
                se vuelvan costosos de solucionar.
              </li>
              <li>
                Garantizar que todos los requisitos especificados se cumplan de
                manera correcta y precisa.
              </li>
              <li>
                Evitar fallos graves en producción, que pueden afectar la
                confianza de los usuarios y dañar la reputación del software.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-2">
              Impacto en la prevención de errores y reducción de costos de
              desarrollo
            </h3>
            <p className="mb-4">
              La prevención de errores mediante una correcta verificación y
              validación ayuda a evitar retrabajos costosos y posibles pérdidas
              económicas. Estudios han demostrado que encontrar y corregir
              defectos durante la fase de requisitos o diseño es mucho menos
              costoso que hacerlo durante o después de la implementación. Esto
              se debe a que los cambios en las etapas iniciales afectan menos
              partes del sistema y requieren menos esfuerzo.
            </p>

            <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4">
              <p>
                “El costo de corregir un defecto aumenta exponencialmente cuanto
                más tarde se descubre en el ciclo de vida del software.”
              </p>
              <footer className="text-sm text-gray-600 mt-2">
                - Referencia de un estudio sobre calidad de software
              </footer>
            </blockquote>

            <h3 className="text-lg font-semibold mb-2">
              Ejemplos de proyectos exitosos gracias a una correcta V&V
            </h3>
            <p className="mb-4">
              Aquí algunos ejemplos de cómo la correcta implementación de V&V ha
              sido clave en proyectos exitosos:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-8">
              <li>
                <strong>Proyecto A:</strong> Una empresa tecnológica logró
                reducir en un 40% los errores en producción mediante la
                incorporación de revisiones de código automatizadas y pruebas
                exhaustivas de validación.
              </li>
              <li>
                <strong>Proyecto B:</strong> Una organización financiera evitó
                un fallo crítico que habría comprometido datos sensibles al
                aplicar técnicas de V&V desde las primeras fases de diseño.
              </li>
              <li>
                <strong>Proyecto C:</strong> Un equipo de desarrollo de
                aplicaciones móviles aumentó la satisfacción del usuario en un
                30% tras validar exhaustivamente las necesidades y expectativas
                del cliente antes de la implementación.
              </li>
            </ul>
          </article>
        </>
      }
      resources={
        <div className="w-full flex items-center justify-center relative gap-4 mt-4 flex-wrap">
          <URLMetadataViewer url={externalResource1} />
          <URLMetadataViewer url={externalResource2} />
        </div>
      }
    />
  );
};

export default page;
