import PDFIcon from "@/components/icons/extensions/PDFIcon";
import DownloadFileButton from "@/components/shared/DownloadFileButton";
import PageInformation from "@/components/shared/PageInformation";

const page = () => {


  return (
    <PageInformation
      
      contentToRead={
        <>
          <article className="-py-8 -px-4 bg-white -text-gray-800">
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Criterios de Calidad de los Requerimientos
            </h2>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Claridad</h3>
              <p className="text-black mb-4">
                La <strong>claridad</strong> es esencial para evitar cualquier
                ambigüedad en los requerimientos. Un requerimiento debe ser
                comprensible y no debe dejar espacio para interpretaciones
                variadas. El lenguaje debe ser preciso y fácil de entender para
                todas las partes involucradas.
              </p>
              <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                “Si un requerimiento puede ser interpretado de varias maneras,
                ninguna es la correcta.” — Alistair Cockburn
              </blockquote>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Consistencia</h3>
              <p className="text-black mb-4">
                La <strong>consistencia</strong> implica que no haya conflictos
                ni contradicciones entre los diferentes requerimientos. Se debe
                verificar que cada requerimiento esté alineado con el resto del
                sistema, sin generar confusión o resultados inesperados.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Completitud</h3>
              <p className="text-black mb-4">
                La <strong>completitud</strong> asegura que todos los aspectos
                necesarios del sistema estén descritos en los requerimientos.
                Esto incluye tanto los requerimientos funcionales como los no
                funcionales, como el rendimiento, seguridad y usabilidad.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Verificabilidad</h3>
              <p className="text-black mb-4">
                La <strong>verificabilidad</strong> significa que un
                requerimiento debe poder ser probado. Si no se puede definir un
                método de prueba para un requerimiento, entonces el
                requerimiento no es verificable y debe ser reescrito o
                eliminado.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                Ejemplos de Requerimientos Mal Escritos y Cómo Mejorarlos
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Mal escrito:</span> “El
                  sistema debe ser rápido.”
                  <br />
                  <span className="font-semibold">Mejorado:</span> “El sistema
                  debe responder a las solicitudes de los usuarios en menos de 2
                  segundos en condiciones de carga estándar.”
                </li>
                <li>
                  <span className="font-semibold">Mal escrito:</span> “El
                  sistema debe ser seguro.”
                  <br />
                  <span className="font-semibold">Mejorado:</span> “El sistema
                  debe usar encriptación AES-256 para almacenar datos sensibles
                  y autenticar usuarios mediante un sistema de autenticación
                  multifactor.”
                </li>
                <li>
                  <span className="font-semibold">Mal escrito:</span> “El
                  sistema debe ser fácil de usar.”
                  <br />
                  <span className="font-semibold">Mejorado:</span> “El sistema
                  debe permitir a los usuarios completar las tareas más comunes
                  en 3 clics o menos.”
                </li>
              </ul>
            </section>
          </article>
        </>
      }
      resources={
        <>
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
          <iframe
            className="aspect-[560/315] w-[min(24rem,80%)] rounded-[1rem]"
            src="https://www.youtube.com/embed/YwYzwKe0TS0?si=prgzC8Agj54ecpyi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </>
      }
    />
  );
};

export default page;
