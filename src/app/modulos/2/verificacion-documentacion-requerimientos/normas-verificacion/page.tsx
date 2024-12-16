import PDFIcon from "@/components/icons/extensions/PDFIcon";
import DownloadFileButton from "@/components/shared/DownloadFileButton";

import PageInformation from "@/components/shared/PageInformation";
import URLMetadataViewer from "@/components/shared/URLMetadataViewer";

const page = () => {
  const externalResource1 =
    "https://iso25000.com/index.php/normas-iso-25000/iso-25010";

  return (
    <PageInformation      
      contentToRead={
        <>
          <article>
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Normas Relacionadas a la Verificación de Requerimientos
            </h2>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                IEEE 830: Especificación de Requisitos de Software
              </h3>
              <p>
                La norma <strong>IEEE 830</strong> proporciona un marco para
                documentar y verificar los requisitos de software. Su objetivo
                es asegurar que los requerimientos sean claros, completos y
                comprensibles. Esta norma es fundamental en la ingeniería de
                requisitos y establece las pautas que los documentos de
                requisitos deben seguir.
              </p>
              <p>
                Un aspecto importante de IEEE 830 es la{" "}
                <strong>estructura recomendada</strong> para un documento de
                requisitos. Esta estructura incluye:
              </p>
              <ul className="list-disc pl-8">
                <li className="mb-2">Introducción</li>
                <li className="mb-2">Descripción general</li>
                <li className="mb-2">Requisitos específicos</li>
                <li className="mb-2">Apendices y referencias</li>
              </ul>
              <p>
                A continuación se presentan <strong>ejemplos prácticos</strong>{" "}
                de documentos basados en IEEE 830, donde se aplican estas
                pautas:
              </p>
              <blockquote className="border-l-4 border-blue-300 italic pl-4 my-4">
                <p>
                  Ejemplo: Documento de requisitos para un sistema de gestión de
                  biblioteca que sigue las directrices de IEEE 830.
                </p>
              </blockquote>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                ISO/IEC 25010: Modelo de Calidad
              </h3>
              <p>
                La norma <strong>ISO/IEC 25010</strong> establece un modelo de
                calidad que se aplica a la verificación de requisitos de
                calidad. Este modelo incluye varias características de calidad
                que son esenciales para evaluar la idoneidad del software,
                incluyendo:
              </p>
              <ul className="list-disc pl-8">
                <li className="mb-2">Funcionalidad</li>
                <li className="mb-2">Confiabilidad</li>
                <li className="mb-2">Usabilidad</li>
                <li className="mb-2">Eficiencia</li>
                <li className="mb-2">Mantenibilidad</li>
                <li className="mb-2">Portabilidad</li>
              </ul>
              <p>
                Este modelo es crucial para la verificación de{" "}
                <strong>requerimientos no funcionales</strong>, que a menudo son
                más difíciles de especificar y verificar. La aplicación del
                modelo de calidad ayuda a identificar y abordar posibles
                deficiencias en los requisitos antes de que se inicie el
                desarrollo del software.
              </p>
              <blockquote className="border-l-4 border-blue-300 italic pl-4 my-4">
                <p>
                  Ejemplo: Análisis de requisitos no funcionales para un sistema
                  de gestión de ventas utilizando el modelo ISO/IEC 25010.
                </p>
              </blockquote>
            </section>
          </article>
        </>
      }
      resources={
        <>
          <URLMetadataViewer url={externalResource1} />

          <DownloadFileButton
            fileURL={
              "https://drive.google.com/file/d/1HbmnIBGRCEl3JLRKFARpFm2T6420krGs/view?usp=sharing"
            }
            Icon={<PDFIcon className="w-[2rem]" color="white" />}
            buttonText={"IEEE-STD-830-1998 (Original)"}
          />
          <DownloadFileButton
            fileURL={
              "https://drive.google.com/file/d/1fJh9AV8xkFZc5edDjVU-nORfB2UlHx3K/view?usp=sharing"
            }
            Icon={<PDFIcon className="w-[2rem]" color="white" />}
            buttonText={
              "IEEE-STD-830-1998 : Especificacioness de los Requisitos del Software en español"
            }
          />
        </>
      }
    />
  );
};

export default page;
