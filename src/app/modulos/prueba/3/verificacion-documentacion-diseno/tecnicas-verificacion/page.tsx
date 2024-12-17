import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article >
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Técnicas de Verificación
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                La verificación es un paso fundamental en el desarrollo de sistemas para garantizar que el diseño y la implementación cumplan con los requisitos establecidos. Existen diversas técnicas que permiten evaluar la precisión y completitud del diseño, entre las cuales destacan las inspecciones formales y la revisión de trazabilidad.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Inspecciones Formales</h3>
                            <p className="text-black mb-4">
                                Las inspecciones formales son procesos estructurados que implican una revisión detallada de los diagramas, especificaciones y artefactos generados durante la fase de diseño. Este método ayuda a identificar errores y asegurar la consistencia antes de proceder a la implementación.
                            </p>
                            <blockquote className="mb-4 pl-4 italic text-gray-600 border-l-4 border-gray-300">
                                La revisión sistemática de los artefactos de diseño reduce significativamente el riesgo de errores en etapas posteriores del desarrollo.
                            </blockquote>
                            <p className="text-black mb-4">
                                Para realizar inspecciones formales, se emplean herramientas como:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li><strong>Enterprise Architect:</strong> Una herramienta avanzada para modelado de sistemas y análisis UML.</li>
                                <li><strong>Lucidchart:</strong> Una plataforma de diagramación colaborativa ampliamente utilizada para visualizar flujos de procesos y arquitecturas de software.</li>
                            </ul>
                            <p className="text-black mb-4">
                                Además, se utilizan listas de verificación específicas que aseguran que todos los aspectos del diseño hayan sido evaluados. Por ejemplo:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>¿Se han definido correctamente las interacciones entre componentes?</li>
                                <li>¿Los diagramas cumplen con los estándares de modelado establecidos?</li>
                                <li>¿Los supuestos y limitaciones están documentados?</li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Revisión de Trazabilidad</h3>
                            <p className="text-black mb-4 mt-4">
                                La revisión de trazabilidad asegura que el diseño cubra todos los requisitos identificados durante las fases de análisis y especificación. Esta técnica se basa en la comparación sistemática de los requerimientos con los componentes del diseño.
                            </p>
                            <blockquote className="mt-4 mb-4 pl-4 italic text-gray-600 border-l-4 border-gray-300">
                                La trazabilidad garantiza que cada requisito del cliente tenga una representación directa en el diseño del sistema.
                            </blockquote>
                            <p className="text-black mb-4">
                                Una herramienta comúnmente empleada en esta técnica es la matriz de trazabilidad, que facilita la visualización de las relaciones entre los requerimientos y los componentes del sistema. A continuación, se presenta un ejemplo simplificado:
                            </p>
                            <table className="table-auto border-collapse border border-gray-300 w-full text-black mb-4">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border border-gray-300 px-4 py-2">Requisito</th>
                                        <th className="border border-gray-300 px-4 py-2">Componente de Diseño</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">REQ-001: Autenticación de usuarios</td>
                                        <td className="border border-gray-300 px-4 py-2">Módulo de Login</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-300 px-4 py-2">REQ-002: Generación de reportes</td>
                                        <td className="border border-gray-300 px-4 py-2">Componente de Reportes</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-black mb-4">
                                Este enfoque permite identificar fácilmente lagunas en el diseño y garantizar que no se omita ningún requisito crítico.
                            </p>
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