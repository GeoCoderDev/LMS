import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Relación con Clientes y Stakeholders
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                Mantener una comunicación efectiva con los stakeholders durante el desarrollo de un proyecto es crucial para garantizar el éxito del mismo. Los stakeholders son todas las personas o grupos que tienen interés en el proyecto, desde los clientes hasta los usuarios finales y el equipo interno de desarrollo. Gestionar adecuadamente sus expectativas y mantenerlos informados puede marcar la diferencia entre el éxito y el fracaso de un proyecto de software.
                            </p>

                            <p className="text-black mb-4">
                                En este artículo, exploraremos la importancia de mantener una buena relación con los stakeholders, las técnicas para gestionar las expectativas de los clientes y ejemplos de proyectos que fracasaron por no tener en cuenta la opinión de los stakeholders.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Importancia de Mantener una Buena Comunicación con los Stakeholders</h3>
                            <p className="text-black mb-4">
                                La comunicación continua y efectiva con los stakeholders es fundamental para el éxito de cualquier proyecto. Estos son algunos puntos clave sobre por qué es tan importante:
                            </p>

                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Asegura que el proyecto cumpla con los requisitos:</strong> Los stakeholders, especialmente los clientes, proporcionan los requisitos esenciales del proyecto. Si no se comunican adecuadamente, es probable que los desarrolladores trabajen en funcionalidades incorrectas o innecesarias, lo que podría resultar en un producto final que no cumple con las expectativas.
                                </li>
                                <li>
                                    <strong>Reducción de riesgos:</strong> Mantener informados a los stakeholders sobre el progreso del proyecto y los posibles obstáculos ayuda a gestionar los riesgos de manera proactiva. Los stakeholders pueden ofrecer soluciones o recursos adicionales para mitigar problemas antes de que se conviertan en un desafío mayor.
                                </li>
                                <li>
                                    <strong>Mejor toma de decisiones:</strong> Conocer las expectativas de los stakeholders permite tomar decisiones basadas en sus intereses, asegurando que el proyecto se alinee con sus necesidades y prioridades.
                                </li>
                            </ul>

                            <p className="text-black mb-4">
                                Una comunicación abierta y transparente no solo mejora la confianza entre los desarrolladores y los stakeholders, sino que también ayuda a construir una relación más sólida, asegurando que el proyecto avance en la dirección correcta.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Técnicas de Gestión de Expectativas del Cliente</h3>
                            <p className="text-black mb-4">
                                Gestionar las expectativas del cliente es un aspecto crítico en la relación con los stakeholders. Aquí hay algunas técnicas clave para garantizar que las expectativas se gestionen de manera efectiva y que no se generen malentendidos:
                            </p>

                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Definir claramente los objetivos y expectativas desde el principio:</strong> Es importante que los objetivos del proyecto sean discutidos y acordados de manera clara al inicio. Establecer expectativas realistas desde el principio puede evitar malentendidos a lo largo del proyecto.
                                </li>
                                <li>
                                    <strong>Realizar reuniones periódicas de actualización:</strong> Las reuniones regulares con los stakeholders son esenciales para asegurar que todos estén alineados con el progreso del proyecto. Estas reuniones permiten compartir avances, abordar problemas y ajustar expectativas según sea necesario.
                                </li>
                                <li>
                                    <strong>Proveer retroalimentación continua:</strong> Involucrar a los stakeholders en el proceso de desarrollo mediante la retroalimentación constante ayuda a ajustar el rumbo del proyecto antes de que sea demasiado tarde. Las demostraciones periódicas del producto permiten obtener comentarios valiosos para asegurar que el proyecto siga en la dirección correcta.
                                </li>
                                <li>
                                    <strong>Establecer límites claros:</strong> Es importante comunicar las limitaciones y restricciones del proyecto (por ejemplo, plazos, presupuestos, recursos) para evitar expectativas poco realistas. Si hay cambios en el alcance o el presupuesto, deben ser discutidos y aprobados por los stakeholders para evitar sorpresas.
                                </li>
                            </ul>

                            <p className="text-black mb-4">
                                Estas técnicas aseguran que los stakeholders estén bien informados y puedan tomar decisiones basadas en hechos y no en suposiciones. Mantener la transparencia en la comunicación es clave para evitar conflictos y asegurar una relación positiva a lo largo del ciclo de vida del proyecto.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Ejemplos de Proyectos que Fracasaron por No Tener en Cuenta la Opinión de los Stakeholders</h3>
                            <p className="text-black mb-4">
                                Ignorar las opiniones y necesidades de los stakeholders puede tener consecuencias graves. A continuación, se presentan ejemplos de proyectos que fracasaron por no gestionar adecuadamente la relación con los stakeholders:
                            </p>

                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Proyecto de software de gestión para una empresa de logística:</strong> En este proyecto, el equipo de desarrollo no mantuvo una comunicación constante con los empleados de la empresa de logística, quienes eran los usuarios finales del sistema. Como resultado, el software entregado no cubría las necesidades diarias de los usuarios, lo que llevó a un rechazo generalizado del producto y a la necesidad de rehacer la mayoría de las funcionalidades.
                                </li>
                                <li>
                                    <strong>Aplicación móvil para una cadena de restaurantes:</strong> El equipo de desarrollo no consultó adecuadamente a los gerentes de las cadenas de restaurantes sobre sus necesidades específicas. El sistema final no era adecuado para el flujo de trabajo del personal, lo que causó retrasos en la implementación y una adopción limitada. La falta de integración de la retroalimentación de los stakeholders desde el principio resultó en un producto final que no satisfizo las expectativas de los clientes.
                                </li>
                                <li>
                                    <strong>Rediseño de un sistema de atención al cliente para una empresa de telecomunicaciones:</strong> En este caso, los stakeholders no fueron consultados sobre la arquitectura del nuevo sistema. Como resultado, el sistema no se alineaba con los procesos internos de la empresa, lo que causó retrasos y sobrecostos. El proyecto no fue entregado a tiempo y no cumplió con las expectativas de la empresa.
                                </li>
                            </ul>

                            <p className="text-black mb-4">
                                Estos ejemplos resaltan la importancia de involucrar a los stakeholders desde el principio y durante todo el proceso de desarrollo. La falta de comunicación y la gestión inadecuada de las expectativas pueden llevar a la frustración de los clientes y a proyectos fallidos.
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