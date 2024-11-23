import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Proceso de Revisión Formal
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                            El <strong>proceso de revisión formal</strong> es una técnica estructurada para evaluar documentos, diseños o códigos en proyectos de software, con el objetivo de identificar errores y asegurar la calidad del producto final. Este proceso implica la participación de múltiples roles y el uso de herramientas y metodologías específicas que garantizan su efectividad.
                            </p>
                            <blockquote className="italic text-gray-600 pl-4 border-l-4 border-gray-400 mb-4">
                            La revisión formal no solo mejora la calidad del producto, sino que también fomenta la colaboración y la transferencia de conocimientos entre los miembros del equipo.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Planificación de la Revisión</h3>
                            <p className="text-black mb-4">
                            La planificación de la revisión es un paso crucial en este proceso, ya que garantiza que todos los participantes estén alineados con los objetivos de la sesión. Esto incluye la organización de sesiones de revisión con equipos técnicos y de gestión, la definición de agendas claras y la preparación previa del material a revisar.
                            </p>
                            <p className="text-black mb-4">
                            Un ejemplo de agenda podría incluir:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>Introducción al propósito de la revisión.</li>
                            <li>Presentación del diseño por parte del autor.</li>
                            <li>Discusión de observaciones y comentarios.</li>
                            <li>Conclusiones y asignación de acciones de seguimiento.</li>
                            </ul>
                            <p className="text-black mb-4">
                            Los reportes generados al final de estas sesiones deben incluir una lista de hallazgos, el estado de las revisiones realizadas y un resumen de las próximas acciones.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Roles en la Revisión Formal</h3>
                            <p className="text-black mb-4">
                            La asignación de roles es fundamental para el éxito de una revisión formal. Cada participante tiene responsabilidades específicas que aseguran una evaluación estructurada y objetiva. Entre los roles principales se incluyen:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li><strong>Moderador:</strong> Facilita la reunión y asegura que se cumpla la agenda.</li>
                            <li><strong>Revisores:</strong> Identifican errores y aportan comentarios sobre el diseño.</li>
                            <li><strong>Autor del diseño:</strong> Presenta el trabajo y responde a preguntas.</li>
                            <li><strong>Escribano:</strong> Documenta las observaciones y conclusiones de la sesión.</li>
                            </ul>
                            <p className="text-black mb-4">
                            Por ejemplo, en un equipo de desarrollo ágil, el moderador puede ser el líder técnico, mientras que los revisores son los desarrolladores y el autor del diseño puede ser el arquitecto del sistema. Una distribución clara de estos roles mejora la productividad y asegura que se cubran todos los aspectos críticos durante la revisión.
                            </p>
                            <blockquote className="italic text-gray-600 pl-4 border-l-4 border-gray-400 mb-4">
                            Asignar roles definidos fomenta la responsabilidad individual y asegura un enfoque metódico durante las sesiones de revisión.
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