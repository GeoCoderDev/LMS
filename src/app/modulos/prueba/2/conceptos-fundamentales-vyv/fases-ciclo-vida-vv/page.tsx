import PDFIcon from "@/components/icons/extensions/PDFIcon";
import DownloadFileButton from "@/components/shared/DownloadFileButton";
import PageInformation from "@/components/shared/PageInformation";

const page = () => {
  return (
    <PageInformation
      contentToRead={
        <>
          <article>
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Fases del Ciclo de Vida donde se Aplica V&V
            </h2>

            <p className="mb-4">
              La Verificación y Validación (V&V) son procesos esenciales que se
              aplican en distintas fases del ciclo de vida del desarrollo de
              software para asegurar la calidad y cumplimiento de los requisitos
              especificados.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Análisis de Requerimientos
            </h3>
            <p className="mb-4">
              <strong>Importancia de la Validación:</strong> Durante el análisis
              de requerimientos, la validación es crucial para asegurarse de que
              los requisitos capturados reflejen las expectativas reales del
              cliente. Esto implica verificar que los requerimientos sean
              claros, completos y verificables, reduciendo así las posibilidades
              de malentendidos y errores que puedan surgir en fases posteriores.
            </p>
            <p className="mb-4">
              <strong>Importancia de la Verificación:</strong> Aunque en esta
              fase el enfoque principal es la validación, la verificación se
              asegura de que los documentos de requerimientos estén
              correctamente estructurados y sin ambigüedades, facilitando un
              proceso de diseño más fluido.
            </p>

            <h3 className="text-xl font-semibold mb-2">Diseño del Sistema</h3>
            <p className="mb-4">
              <strong>Importancia de la Verificación:</strong> En esta fase, la
              verificación es esencial para garantizar que el diseño del sistema
              sea consistente con los requerimientos especificados. Se revisan
              modelos, diagramas y especificaciones para asegurar que la
              arquitectura y los componentes estén alineados con los objetivos
              definidos.
            </p>
            <p className="mb-4">
              <strong>Importancia de la Validación:</strong> Validar el diseño
              asegura que las soluciones propuestas realmente aborden las
              necesidades identificadas en los requisitos y que no se estén
              introduciendo enfoques que puedan resultar en problemas de
              implementación.
            </p>

            <h3 className="text-xl font-semibold mb-2">
              Implementación y Pruebas
            </h3>
            <p className="mb-4">
              <strong>Importancia de la Verificación:</strong> Durante la
              implementación, la verificación implica revisar el código y los
              artefactos generados para garantizar que cumplan con las
              especificaciones del diseño. Se utilizan revisiones de código y
              pruebas automatizadas para mantener la calidad del desarrollo.
            </p>
            <p className="mb-4">
              <strong>Importancia de la Validación:</strong> Las pruebas
              funcionales y no funcionales juegan un papel vital aquí. Las
              pruebas funcionales validan que el software cumpla con todos los
              requisitos del cliente, mientras que las pruebas no funcionales
              aseguran que el software sea robusto, seguro y eficiente en su
              funcionamiento.
            </p>
          </article>
        </>
      }
      resources={
        <>
          <iframe
            className="aspect-[560/315] w-[min(24rem,80%)] rounded-[1rem]"
            src="https://www.youtube.com/embed/QHOu7CEJR88?si=ll4hAzlKFRA5dKZy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          
          <DownloadFileButton
            fileURL={
              "https://drive.google.com/file/d/10-pN_uVhtIlmnL6rl0Zry8uZHkxDlLSW/view?usp=sharing"
            }
            Icon={<PDFIcon className="w-[2rem] " color="white" />}
            buttonText={
              "(Articulo) Verificación y Validación de Software | Revista Killkana Técnica. Vol. 1, No. 3, Septiembre-Diciembre, 2017"
            }
          />
        </>
      }
    />
  );
};

export default page;
