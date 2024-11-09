import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
  return (
    <PageInformation
      sectionTitle=" Herramientas de Colaboración y Documentación"
      contentToRead={
        <>
          <article className="py-8 px-4 bg-white text-gray-800">
            <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
              Origen de la Ingeniería de Software
            </h2>

            <section>
              <h3 className="text-xl font-semibold mb-2">
                Historia y Contexto del Surgimiento
              </h3>
              <p className="mb-4">
                La Ingeniería de Software surgió como una disciplina en
                respuesta a la creciente complejidad de los sistemas
                informáticos y a la necesidad de gestionar adecuadamente el
                desarrollo de software. Desde sus inicios en las décadas de 1960
                y 1970, cuando el &quot;Crisis del Software&quot; reveló la
                falta de metodologías estandarizadas, la ingeniería de software
                se ha transformado en un campo crucial para garantizar la
                calidad, eficiencia y escalabilidad en proyectos de desarrollo.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">
                Principales Desafíos que Dieron Origen a la Ingeniería de
                Software
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Escalabilidad de sistemas complejos que requieren altos
                  niveles de organización y planificación.
                </li>
                <li>
                  Mantenimiento de la calidad y fiabilidad en el desarrollo de
                  software, dada la creciente demanda.
                </li>
                <li>
                  Gestión de los recursos y equipos en proyectos de gran
                  envergadura.
                </li>
              </ul>
              <p className="mb-4">
                Estos desafíos evidenciaron la necesidad de técnicas y
                metodologías estructuradas, lo que dio pie al desarrollo de
                normas y estándares en la industria, como el modelo en cascada,
                la metodología ágil, y más tarde, DevOps.
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">
                Casos Históricos de Evolución Tecnológica en Software
              </h3>
              <p className="mb-4">
                La evolución de la ingeniería de software ha sido influenciada
                por hitos tecnológicos significativos. Entre ellos:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  El desarrollo del sistema operativo UNIX, que impulsó la
                  creación de estándares y prácticas reutilizables.
                </li>
                <li>
                  El auge de la programación orientada a objetos, liderado por
                  lenguajes como Smalltalk y, posteriormente, Java.
                </li>
                <li>
                  La transición hacia el desarrollo de software en la nube, que
                  facilitó el acceso a recursos escalables y la colaboración
                  global en proyectos.
                </li>
              </ul>
              <p className="mb-4">
                Estos casos muestran cómo la ingeniería de software ha
                evolucionado en paralelo con los avances tecnológicos,
                adaptándose a las nuevas necesidades del mercado y promoviendo
                prácticas eficientes y organizadas.
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
