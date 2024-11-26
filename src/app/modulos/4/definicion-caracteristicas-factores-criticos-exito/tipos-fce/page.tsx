import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Tipos de Factores Críticos de Éxito
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                            Los Factores Críticos de Éxito (FCE) son elementos esenciales que determinan el logro de los objetivos en el desarrollo de software. Su correcta identificación y gestión permite garantizar el éxito en cada fase del proyecto. Estos factores pueden clasificarse en tres grandes categorías: técnicos, humanos y organizacionales.
                            </p>

                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                            Comprender los FCE ayuda a priorizar los recursos y esfuerzos en las áreas que tienen el mayor impacto en los resultados del proyecto.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Factores Técnicos</h3>
                            <p className="text-black mb-4">
                            Los factores técnicos están relacionados con las tecnologías, metodologías de desarrollo y herramientas de software utilizadas. Algunos ejemplos incluyen:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>
                                <strong>Tecnologías:</strong> Selección de plataformas y lenguajes de programación adecuados para el proyecto.
                            </li>
                            <li>
                                <strong>Metodologías de desarrollo:</strong> Uso de enfoques ágiles como Scrum o metodologías tradicionales como el modelo en cascada.
                            </li>
                            <li>
                                <strong>Herramientas de software:</strong> Utilización de sistemas de gestión de versiones, pruebas automatizadas y herramientas de integración continua.
                            </li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Factores Humanos</h3>
                            <p className="text-black mb-4">
                            Los factores humanos están centrados en la gestión del equipo, la capacitación y la cultura organizacional. Estos son cruciales para mantener la productividad y la colaboración efectiva:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>
                                <strong>Gestión del equipo:</strong> Asignación de roles claros y promoción del trabajo en equipo.
                            </li>
                            <li>
                                <strong>Capacitación:</strong> Formación continua para mantener al equipo actualizado con las últimas tecnologías y prácticas.
                            </li>
                            <li>
                                <strong>Cultura organizacional:</strong> Creación de un ambiente de trabajo positivo y motivador.
                            </li>
                            </ul>
                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                            Un equipo capacitado y motivado puede superar desafíos técnicos y adaptarse rápidamente a cambios en los requisitos.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Factores Organizacionales</h3>
                            <p className="text-black mb-4">
                            Los factores organizacionales abordan la planificación, gestión de riesgos, cumplimiento de plazos y presupuestos. Algunos ejemplos incluyen:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>
                                <strong>Planificación:</strong> Definición de cronogramas realistas y metas alcanzables.
                            </li>
                            <li>
                                <strong>Gestión de riesgos:</strong> Identificación y mitigación de posibles problemas antes de que afecten al proyecto.
                            </li>
                            <li>
                                <strong>Cumplimiento de plazos y presupuestos:</strong> Monitoreo constante para evitar retrasos y sobrecostos.
                            </li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Ejemplos Prácticos de FCE</h3>
                            <p className="text-black mb-4">
                            A continuación, se presentan ejemplos prácticos de proyectos exitosos que aplicaron correctamente los FCE:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>
                                <strong>Proyecto de E-commerce:</strong> Uso de herramientas como Jenkins para integración continua y gestión de riesgos efectivos.
                            </li>
                            <li>
                                <strong>Sistema de Gestión Hospitalaria:</strong> Capacitación intensiva al equipo para manejar sistemas complejos y asegurar una transición fluida.
                            </li>
                            <li>
                                <strong>Aplicación Móvil:</strong> Implementación de Scrum para adaptarse rápidamente a los cambios en las necesidades del cliente.
                            </li>
                            </ul>
                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                            Los proyectos exitosos tienen en común la identificación temprana de sus FCE y su gestión proactiva durante todo el ciclo de vida del proyecto.
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