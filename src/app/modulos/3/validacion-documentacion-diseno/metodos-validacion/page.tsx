import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article>
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Métodos de Validación
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                Los <strong>métodos de validación</strong> son fundamentales para asegurar que un diseño cumpla con los requisitos funcionales y no funcionales antes de su implementación. Entre los métodos más utilizados destacan los <strong>prototipos</strong>, las <strong>simulaciones</strong> y la <strong>revisión de arquitectura</strong>, los cuales permiten evaluar aspectos clave del sistema en etapas tempranas del desarrollo.
                            </p>

                            <blockquote className="pl-4 border-l-4 border-gray-500 text-gray-600 italic mb-4">
                                Validar el diseño antes de su implementación reduce significativamente los costos asociados a errores en etapas avanzadas.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Prototipos y Simulaciones</h3>
                            <p className="text-black mb-4">
                                Los <strong>prototipos</strong> y las <strong>simulaciones</strong> son herramientas clave para explorar y validar el diseño en un entorno controlado. Estas técnicas permiten a los equipos visualizar cómo se comportará el sistema antes de invertir recursos en su desarrollo completo.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Creación de maquetas:</strong> Representaciones visuales del sistema que ayudan a evaluar la interfaz y la interacción del usuario.
                                </li>
                                <li>
                                    <strong>Herramientas de simulación:</strong> Programas como <strong>MATLAB</strong> y <strong>Simulink</strong> permiten modelar y analizar sistemas complejos de manera precisa.
                                </li>
                            </ul>
                            <p className="text-black mb-4">
                                Por ejemplo, en un proyecto de diseño de sistemas de control para drones, las simulaciones en Simulink permitieron probar algoritmos de navegación en un entorno virtual, reduciendo riesgos durante las pruebas reales.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Revisión de Arquitectura</h3>
                            <p className="text-black mb-4">
                                La <strong>revisión de arquitectura</strong> es un análisis exhaustivo para verificar que la estructura del sistema cumpla con los requisitos establecidos y sea lo suficientemente robusta para soportar cambios futuros. Esta técnica identifica riesgos y asegura la coherencia en la implementación del diseño.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Técnicas de revisión:</strong> Métodos como <strong>ATAM</strong> (Método de Análisis de Atributos de Arquitectura) y <strong>SAAM</strong> (Método de Análisis de Escenarios) son ampliamente utilizados para evaluar atributos de calidad como rendimiento, seguridad y mantenibilidad.
                                </li>
                                <li>
                                    <strong>Documentación exhaustiva:</strong> Se revisan los diagramas, especificaciones y relaciones entre componentes para garantizar la consistencia.
                                </li>
                            </ul>
                            <p className="text-black mb-4">
                                Un ejemplo destacado es la revisión de la arquitectura del sistema de control de tráfico aéreo mediante ATAM, que identificó áreas críticas de rendimiento y permitió optimizar la comunicación entre subsistemas antes de su implementación.
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