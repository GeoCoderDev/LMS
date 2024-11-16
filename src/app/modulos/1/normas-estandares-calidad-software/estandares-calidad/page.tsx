import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Estándares de Calidad (IEEE, CMMI)
                        </h2>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">IEEE Estándares</h3>
                            <p className="text-black mb-4">
                            Los estándares de calidad propuestos por el IEEE y CMMI son esenciales en la industria del software. El IEEE establece estándares específicos, como el <strong>IEEE 730</strong>, que define la estructura para los planes de calidad de software, y el <strong>IEEE 829</strong>, que detalla los tipos de documentación de pruebas, como planes de prueba, casos de prueba e informes. Estos estándares permiten crear plantillas y guías claras para asegurar la calidad de los proyectos.
                            <img 
                            src="/images/png/modulo1/seccion4/IEEE_logo.png"
                            alt="Figura logo IEEE"
                            className=" object-contain h-[15rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">IEEE 730 (Estándar para planes de calidad de software)</h3>
                            <p className="text-black mb-4">
                            El <strong>IEEE 730</strong> es un estándar fundamental que proporciona la estructura para los planes de calidad del software. Este documento debe definir el enfoque general para las actividades de calidad, describir los roles y responsabilidades de los involucrados, y establecer los criterios de aceptación de los productos. Un plan de calidad bien estructurado asegura que todos los aspectos del proyecto se revisen y que se mantengan altos estándares durante el ciclo de vida del software.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Estructura del plan de calidad:</strong> incluye la planificación, ejecución, y evaluación de actividades de calidad.</li>
                            <li><strong>Ejemplos prácticos de planes de calidad:</strong> implementación de estos planes en proyectos reales muestra cómo los principios del IEEE 730 pueden ser aplicados de manera efectiva.</li>
                            <img 
                            src="/images/png/modulo1/seccion4/ieee_730.png"
                            alt="Figura logo IEEE"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">IEEE 829 (Estándar para documentación de pruebas)</h3>
                            <p className="text-black mb-4">
                            El <strong>IEEE 829</strong> establece los tipos de documentos necesarios para la documentación de las pruebas de software, tales como el plan de pruebas, los casos de prueba y los informes. Esto garantiza que las pruebas sean exhaustivas y estén bien documentadas, lo que facilita la trazabilidad y el seguimiento de la calidad del software a lo largo de su desarrollo.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Tipos de documentos de pruebas:</strong> incluye planes de pruebas, casos de prueba e informes detallados que ayudan a validar los resultados.</li>
                            <li><strong>Plantillas y ejemplos de implementación:</strong> las plantillas estándar proporcionadas por IEEE 829 permiten crear documentación coherente y alineada con las mejores prácticas.</li>
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">CMMI (Capability Maturity Model Integration)</h3>
                            <p className="text-black mb-4">
                            El <strong>CMMI</strong> (Capability Maturity Model Integration) es un modelo de madurez que evalúa el nivel de desarrollo de las organizaciones en cuanto a sus procesos de software. CMMI se enfoca en mejorar los procesos y establecer áreas de procesos clave que cubren desde la planificación hasta la gestión de riesgos, ayudando a las empresas a alcanzar mayores niveles de eficacia y consistencia en el desarrollo del software.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Niveles de madurez organizacional</h3>
                            <p className="text-black mb-4">
                            CMMI clasifica las organizaciones en cinco niveles de madurez, desde el Nivel 1 (Inicial) hasta el Nivel 5 (Optimización). Cada nivel se centra en el fortalecimiento de los procesos y la mejora continua de las prácticas de calidad en el desarrollo de software.
                            <img 
                            src="/images/png/modulo1/seccion4/CMMI.png"
                            alt="Figura logo IEEE"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Áreas de proceso que cubre CMMI</h3>
                            <p className="text-black mb-4">
                            CMMI cubre áreas de proceso esenciales, como la gestión de proyectos, el aseguramiento de la calidad, la gestión de requisitos y la mejora continua de los procesos. Estas áreas proporcionan una guía para las organizaciones en la optimización de sus capacidades y en la gestión de los riesgos asociados a sus proyectos de software.
                            </p>
                        </section>

                        <section className="mb-6">
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <h3 className="text-xl font-semibold mb-2">Ejemplos de implementación en empresas tecnológicas</h3>
                            <p className="text-black mb-4">
                            Empresas tecnológicas de renombre han implementado CMMI para mejorar sus procesos y lograr una mayor madurez organizacional. Ejemplos como la implementación de CMMI en empresas como IBM y HP han demostrado mejoras significativas en la calidad y eficiencia del software desarrollado.
                            </p>
                            </blockquote>
                        </section>
                    </article>

                </>
            }
            
            resources={
                <>

                </>
            }
        />
    );
};

export default page;