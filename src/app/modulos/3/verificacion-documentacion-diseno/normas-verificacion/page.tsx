import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article>
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Normas para la Verificación del Diseño
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                La verificación del diseño de software es un proceso clave que garantiza la calidad, coherencia y adecuación del diseño a los objetivos establecidos. Existen estándares internacionales que sirven como referencia para especificar, documentar y verificar diseños, entre los cuales destacan el <strong>IEEE 1016</strong> y el <strong>ISO/IEC 42010</strong>. 
                            </p>
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                Un diseño bien documentado no solo optimiza el desarrollo, sino que también facilita la escalabilidad y el mantenimiento del software
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">
                                IEEE 1016: Estándar para la Descripción de Diseño de Software
                            </h3>
                            <p className="text-black mb-4">
                                Este estándar proporciona una guía para la creación de especificaciones y documentación de diseño. Establece un marco estructurado que incluye elementos como:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Propósito:</strong> Define los objetivos y alcance del diseño.
                                </li>
                                <li>
                                    <strong>Modelo del sistema:</strong> Representaciones visuales que muestran la estructura y comportamiento del sistema.
                                </li>
                                <li>
                                    <strong>Vistas del diseño:</strong> Distintas perspectivas del diseño para abordar aspectos específicos (como estructura, comportamiento o datos).
                                </li>
                                <li>
                                    <strong>Referencias:</strong> Fuentes adicionales o normativas relacionadas con el diseño.
                                </li>
                            </ul>
                            <p className="text-black mb-4">
                                Por ejemplo, al diseñar un sistema de gestión de inventarios, las especificaciones basadas en IEEE 1016 podrían incluir diagramas UML para representar las interacciones entre módulos y un listado de restricciones técnicas.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">
                                Estructura Recomendada para los Documentos de Diseño
                            </h3>
                            <p className="text-black mb-4">
                                Según el estándar IEEE 1016, un documento de diseño efectivo debe incluir los siguientes apartados principales:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li><strong>Introducción:</strong> Contexto y objetivos del diseño.</li>
                                <li><strong>Alcance:</strong> Definición de los límites del diseño.</li>
                                <li><strong>Especificaciones técnicas:</strong> Detalle de componentes y funcionalidades clave.</li>
                                <li><strong>Diagramas:</strong> Representaciones gráficas que ilustren la estructura y dinámica del sistema.</li>
                            </ul>
                            <p className="text-black mb-4">
                                Documentar de manera adecuada permite identificar inconsistencias en etapas tempranas y asegura que todos los involucrados comprendan el diseño.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">
                                ISO/IEC 42010: Directrices para la Descripción de Arquitectura de Sistemas
                            </h3>
                            <p className="text-black mb-4">
                                Este estándar está orientado a la descripción de la arquitectura de sistemas, permitiendo organizar y presentar elementos arquitectónicos de manera clara. Proporciona un enfoque estructurado que incluye:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Stakeholders:</strong> Identificación de las partes interesadas y sus preocupaciones.
                                </li>
                                <li>
                                    <strong>Vistas de la arquitectura:</strong> Modelos que reflejan aspectos específicos de la arquitectura (como componentes, interfaces y relaciones).
                                </li>
                                <li>
                                    <strong>Consistencia:</strong> Verificación de que las vistas sean coherentes entre sí.
                                </li>
                            </ul>
                            <p className="text-black mb-4">
                                Por ejemplo, al diseñar un sistema complejo como una red de transporte inteligente, las directrices de ISO/IEC 42010 facilitan el manejo de múltiples módulos, asegurando que interactúen de manera efectiva mientras cumplen con los objetivos generales.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">
                                Aplicación del Estándar en Sistemas Complejos
                            </h3>
                            <p className="text-black mb-4">
                                La aplicación de ISO/IEC 42010 es especialmente relevante en sistemas grandes y complejos, como los sistemas de gestión hospitalaria o plataformas financieras. Al definir claramente las relaciones entre módulos, se garantiza que el diseño sea comprensible y escalable.
                            </p>
                            <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                                Un enfoque estructurado permite mitigar riesgos en el diseño y facilita futuras ampliaciones.
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