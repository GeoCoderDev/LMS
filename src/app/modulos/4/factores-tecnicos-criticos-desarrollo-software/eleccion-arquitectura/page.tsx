import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Elección Correcta de la Arquitectura del Software
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                Seleccionar la arquitectura adecuada para un proyecto de software es fundamental para garantizar su éxito a largo plazo. Las arquitecturas más comunes incluyen las arquitecturas <strong>monolíticas</strong> y los <strong>microservicios</strong>, cada una con ventajas y desventajas que deben evaluarse según las necesidades del proyecto.
                            </p>

                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                                Una arquitectura bien diseñada puede marcar la diferencia entre un sistema que escala de manera eficiente y otro que enfrenta constantes problemas de rendimiento y mantenimiento.
                            </blockquote>

                            <p className="text-black mb-4">
                                Por ejemplo, una arquitectura monolítica es ideal para proyectos pequeños y medianos debido a su simplicidad, mientras que los microservicios destacan en sistemas más complejos que requieren escalabilidad y flexibilidad. La elección debe alinearse con los objetivos del negocio y los recursos disponibles.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Impacto de la Arquitectura en el Sistema</h3>
                            <p className="text-black mb-4">
                                La arquitectura de software tiene un impacto directo en aspectos clave como la escalabilidad, el rendimiento y la capacidad de mantenimiento. A continuación, se describen algunos ejemplos:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Escalabilidad:</strong> Una arquitectura basada en microservicios permite escalar componentes específicos de manera independiente, lo que resulta más eficiente para sistemas en crecimiento constante.
                                </li>
                                <li>
                                    <strong>Rendimiento:</strong> Los sistemas monolíticos pueden ser más rápidos de implementar inicialmente, pero podrían enfrentar problemas de rendimiento conforme crecen en tamaño.
                                </li>
                                <li>
                                    <strong>Capacidad de Mantenimiento:</strong> Las arquitecturas bien definidas facilitan la localización y resolución de errores, lo que reduce los costos de mantenimiento a largo plazo.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">
                                Ejemplos de Arquitecturas Exitosas en Empresas Tecnológicas
                            </h3>
                            <p className="text-black mb-4">
                                A continuación, se presentan algunos ejemplos destacados de arquitecturas utilizadas en empresas tecnológicas líderes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Netflix:</strong> Implementó una arquitectura de microservicios para manejar su alta demanda de usuarios y mejorar la disponibilidad del sistema.
                                </li>
                                <li>
                                    <strong>Amazon:</strong> La transición de una arquitectura monolítica a microservicios permitió manejar millones de transacciones por minuto en su plataforma.
                                </li>
                                <li>
                                    <strong>Spotify:</strong> Utiliza microservicios para ofrecer una experiencia de usuario personalizada y escalable a nivel global.
                                </li>
                            </ul>

                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                                Empresas como Netflix y Amazon han demostrado que la adopción de microservicios puede ser un factor clave para manejar la complejidad y el crecimiento exponencial.
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