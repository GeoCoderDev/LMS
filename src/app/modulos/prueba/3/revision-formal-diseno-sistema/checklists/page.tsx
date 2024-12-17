import PageInformation from "@/components/shared/PageInformation";

const page = () => {
  return (
    <PageInformation
      contentToRead={
        <>
          <article>
            <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
              Checklists para la Revisión
            </h2>

            <section className="mb-6 text-justify">
              <p className="text-black mb-4">
                Las checklists o listas de verificación son herramientas
                esenciales para garantizar una revisión estructurada y
                exhaustiva en proyectos de desarrollo de software. Estas listas
                permiten evaluar aspectos específicos del diseño, identificando
                potenciales áreas de mejora y asegurando la calidad del sistema.
              </p>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
                Una checklist bien diseñada es el primer paso hacia un diseño
                robusto y libre de errores.
              </blockquote>
              <p className="text-black mb-4">
                Las listas de verificación son especialmente útiles en proyectos
                complejos, donde cada aspecto del diseño requiere atención
                detallada. Desde la modularidad hasta la seguridad, su correcta
                aplicación contribuye a prevenir problemas que podrían surgir en
                etapas posteriores.
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Listas de Verificación Específicas
              </h3>
              <p className="text-black mb-4">
                Existen listas de verificación diseñadas específicamente para
                evaluar distintos aspectos de un sistema. Algunos ejemplos
                incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>Modularidad:</strong> Verificar que los componentes
                  del sistema estén bien definidos, independientes y puedan ser
                  reutilizados en diferentes contextos.
                </li>
                <li>
                  <strong>Rendimiento:</strong> Asegurarse de que el diseño
                  permite tiempos de respuesta óptimos bajo diferentes cargas.
                </li>
                <li>
                  <strong>Seguridad:</strong> Confirmar que el sistema incluye
                  mecanismos de protección para prevenir accesos no autorizados
                  y vulnerabilidades.
                </li>
              </ul>
              <p className="text-black mb-4">
                Por ejemplo, en el diseño de un sistema de comercio electrónico,
                se puede incluir en la checklist preguntas como: ¿Los módulos de
                pago están aislados del resto del sistema? o ¿Se han definido
                medidas para mitigar ataques DDoS?
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Ejemplos de Checklists para Sistemas Grandes
              </h3>
              <p className="text-black mb-4">
                Los sistemas grandes requieren listas de verificación más
                detalladas y específicas. Algunos ejemplos incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>Diseño de bases de datos:</strong> Confirmar la
                  normalización de tablas, índices adecuados y relaciones bien
                  definidas.
                </li>
                <li>
                  <strong>Interfaces de usuario:</strong> Evaluar la coherencia
                  en el diseño, accesibilidad y facilidad de uso.
                </li>
                <li>
                  <strong>Integración de sistemas:</strong> Verificar que las
                  API cumplan con los estándares definidos y se hayan realizado
                  pruebas de compatibilidad.
                </li>
              </ul>
              <p className="text-black mb-4">
                Un ejemplo práctico sería una checklist para un sistema
                hospitalario que incluya preguntas como: ¿Se garantiza la
                encriptación de datos sensibles? y ¿Existen medidas de respaldo
                y recuperación ante fallos?
              </p>
            </section>

            <section className="mb-6 text-justify">
              <h3 className="text-xl font-semibold mb-2">
                Herramientas para la Creación de Checklists
              </h3>
              <p className="text-black mb-4">
                Diversas herramientas digitales pueden facilitar la creación,
                organización y seguimiento de checklists. Algunas de las más
                utilizadas incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                <li>
                  <strong>Trello:</strong> Ideal para gestionar listas
                  colaborativas con tableros personalizados que permiten asignar
                  tareas y realizar seguimientos.
                </li>
                <li>
                  <strong>Google Sheets:</strong> Una herramienta versátil para
                  crear listas dinámicas, con la opción de compartir y colaborar
                  en tiempo real.
                </li>
              </ul>
              <p className="text-black mb-4">
                Por ejemplo, se puede usar Trello para dividir las listas en
                tableros como Revisión de diseño, Pruebas de rendimiento y
                Validación de seguridad, asignando responsables para cada tarea.
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
