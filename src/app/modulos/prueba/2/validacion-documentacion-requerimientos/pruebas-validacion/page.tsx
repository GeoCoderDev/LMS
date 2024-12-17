import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
    return (
        <PageInformation
            
            contentToRead={
            <>
                <article>
                    <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
                        Pruebas de Validación
                    </h2>

                    <p className="text-justify">
                        Las pruebas de validación son una parte esencial del proceso de desarrollo de software, ya que garantizan que el sistema cumple con los requisitos del usuario y que se comporta como se espera en condiciones reales. Entre los métodos más comunes de validación se encuentran las pruebas de aceptación y la validación en ambientes de simulación.
                    </p>

                    <br />
                    <section className="text-justify">
                        <h3 className="font-bold">Pruebas de Aceptación</h3>
                        <p>
                        Las pruebas de aceptación son un tipo específico de pruebas diseñadas para asegurar que el sistema cumple con los requisitos del usuario final. Se realizan en etapas avanzadas del desarrollo y se enfocan en verificar que el producto final sea satisfactorio para el cliente.
                        <img 
                            src="/images/png/modulo2/seccion4/pruebas-aceptacion.png"
                            alt="Figura de pruebas-aceptacion"
                            className=" object-contain h-[20rem] w-full my-4"  />
                        </p>
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li className="mb-2">
                            <strong>Diseño y Ejecución:</strong> Las pruebas de aceptación implican el diseño de casos de prueba basados en los requisitos del usuario. Estos casos deben incluir tanto pruebas funcionales como no funcionales para abarcar todos los aspectos del sistema.
                        </li>
                        </ul>

                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <p>Ejemplos de Scripts de Pruebas de Aceptación:</p>
                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-2">
                            <li className="mb-2">
                                <strong>Funcionalidad:</strong> Verificar que el sistema permite a los usuarios realizar acciones específicas, como iniciar sesión o generar reportes.
                            </li>
                            <li className="mb-2">
                                <strong>Usabilidad:</strong> Evaluar si el sistema es fácil de usar, a través de tareas específicas que los usuarios deben completar.
                            </li>
                            <li className="mb-2">
                                <strong>Rendimiento:</strong> Medir el tiempo que tarda el sistema en responder a las acciones del usuario.
                            </li>
                            </ul>
                        </blockquote>

                            <p>Herramientas para gestionar pruebas de validación:</p>
                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-2">
                            <li className="mb-2">
                                <strong>TestRail:</strong> Una herramienta integral de gestión de pruebas que permite planificar, realizar y seguir el progreso de las pruebas de aceptación. Proporciona informes detallados sobre el estado de las pruebas.
                            </li>
                            <li className="mb-2">
                                <strong>Zephyr:</strong> Ofrece un enfoque flexible para la gestión de pruebas, integrándose con herramientas de gestión de proyectos y permitiendo la colaboración en tiempo real entre los equipos de desarrollo y pruebas.
                            </li>
                            </ul>
                        
                    </section>

                    <br />
                    <section className="text-justify">
                        <h3 className="font-bold">Validación en Ambientes de Simulación</h3>
                        <p>
                        La validación en ambientes de simulación consiste en utilizar entornos controlados para recrear condiciones del mundo real y observar cómo se comporta el sistema. Este método es especialmente útil para evaluar el rendimiento del software en situaciones que podrían ser difíciles de replicar en un entorno de producción.
                        </p>
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li className="mb-2">
                            <strong>Uso de Simuladores:</strong> Los simuladores permiten a los equipos de desarrollo probar el sistema en condiciones que imitan el entorno real sin los riesgos asociados. Esto incluye situaciones como cargas de trabajo altas, interacciones con sistemas externos, o fallos en componentes del sistema.
                        </li>
                        </ul>
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <p>Ejemplos de pruebas en simuladores:</p>
                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-2">
                            <li className="mb-2">
                                <strong>Simulación de Cargas de Trabajo:</strong> Probar el sistema bajo diferentes niveles de carga para evaluar su rendimiento y capacidad de respuesta.
                            </li>
                            <li className="mb-2">
                                <strong>Pruebas de Interoperabilidad:</strong> Validar que el sistema puede interactuar correctamente con otros sistemas y servicios en un entorno simulado.
                            </li>
                            <li className="mb-2">
                                <strong>Pruebas de Fallos:</strong> Introducir fallos controlados en el sistema para evaluar cómo maneja los errores y si se recupera adecuadamente.
                            </li>
                            </ul>
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