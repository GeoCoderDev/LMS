import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Gestión de Errores y Seguimiento
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                La gestión eficaz de errores y su seguimiento son pilares fundamentales en los procesos de desarrollo de software. Este enfoque asegura que los defectos detectados durante la verificación y validación del diseño sean documentados, analizados y corregidos adecuadamente, minimizando riesgos y garantizando la calidad del producto final.
                            </p>

                            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-black mb-4">
                                Un error no identificado o no corregido a tiempo puede escalar costos y afectar gravemente la experiencia del usuario final.
                            </blockquote>

                            <p className="text-black mb-4">
                                Para lograr una gestión adecuada, se requiere no solo identificar los defectos sino también implementar mecanismos que permitan rastrear y validar las correcciones realizadas. Las herramientas y procesos utilizados desempeñan un rol crucial en este ámbito.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Documentación de Defectos</h3>
                            <p className="text-black mb-4">
                                Registrar los errores detectados es el primer paso en la gestión de defectos. La documentación debe ser clara y precisa, incluyendo detalles como la descripción del problema, su impacto, pasos para reproducirlo y posibles causas. Este registro permite a los desarrolladores priorizar y abordar los problemas de manera eficiente.
                            </p>

                            <p className="text-black mb-4">
                                Una plantilla estándar para documentar defectos puede incluir los siguientes campos:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li><strong>ID del defecto:</strong> Identificador único del problema.</li>
                                <li><strong>Descripción:</strong> Resumen detallado del defecto.</li>
                                <li><strong>Severidad:</strong> Clasificación del impacto (alta, media, baja).</li>
                                <li><strong>Pasos para reproducir:</strong> Instrucciones claras para replicar el error.</li>
                                <li><strong>Estado:</strong> Estado actual del defecto (abierto, en progreso, cerrado).</li>
                                <li><strong>Responsable:</strong> Persona o equipo asignado para resolverlo.</li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Seguimiento de las Correcciones</h3>
                            <p className="text-black mb-4">
                                Garantizar que los errores identificados sean corregidos de manera efectiva requiere un seguimiento sistemático. Este seguimiento puede ser manual o automatizado, pero debe incluir actualizaciones regulares sobre el progreso de la resolución, pruebas de validación y la documentación final del estado del defecto.
                            </p>

                            <p className="text-black mb-4">
                                Herramientas como <strong>JIRA</strong> y <strong>Bugzilla</strong> facilitan este proceso al ofrecer plataformas centralizadas para registrar, rastrear y gestionar errores. Estas herramientas permiten asignar tareas, definir plazos, y mantener un historial detallado de todas las acciones tomadas.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Herramientas y Ejemplos</h3>
                            <p className="text-black mb-4">
                                Entre las herramientas más utilizadas para la gestión de errores se encuentran:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li><strong>JIRA:</strong> Plataforma versátil para el seguimiento de errores, gestión de proyectos y colaboración de equipos.</li>
                                <li><strong>Bugzilla:</strong> Herramienta de código abierto especializada en la gestión de defectos y problemas.</li>
                                <li><strong>Trello:</strong> Útil para equipos pequeños, permite organizar tareas y visualizar el flujo de trabajo.</li>
                            </ul>

                            <p className="text-black mb-4">
                                Por ejemplo, en proyectos grandes, JIRA es una opción ideal debido a su capacidad para integrarse con herramientas de desarrollo como GitHub y su funcionalidad de generación de informes personalizados. Por otro lado, Bugzilla es perfecto para proyectos más pequeños que requieren una solución sencilla y eficiente.
                            </p>

                            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-black mb-4">
                                El uso adecuado de herramientas de gestión de errores no solo mejora la calidad del software, sino que también optimiza el tiempo y los recursos del equipo de desarrollo.
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