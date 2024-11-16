import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Herramientas de Planificación y Desarrollo
                        </h2>

                        <section className="mb-6">
                            <p className="text-black text-justify mb-4">
                            En la gestión de la calidad del software, herramientas como <strong>Trello</strong> y <strong>JIRA</strong> son fundamentales para la planificación y el seguimiento de proyectos. Estas herramientas permiten gestionar tareas, incidentes y el backlog de manera organizada, proporcionando una visualización clara del flujo de trabajo y facilitando la priorización de tareas. Esto optimiza la colaboración entre los miembros del equipo y garantiza un progreso constante hacia los objetivos establecidos.
                            </p>
                            <h3 className="text-xl font-semibold mb-2">Herramientas de Planificación</h3>
                            
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                                <ul className="list-disc pl-6 text-black space-y-2">
                                <li>
                                    <strong>Trello:</strong> Ideal para gestionar tareas mediante tableros, listas y tarjetas que permiten organizar el trabajo de forma visual.
                                </li>
                                <li>
                                    <strong>JIRA:</strong> Especialmente útil para la gestión ágil de proyectos, incluyendo la planificación de sprints, seguimiento de incidencias y administración del backlog.
                                </li>
                                </ul>
                            </blockquote>
                            <p className="text-black text-justify mt-4">
                            Ambas herramientas cuentan con funcionalidades avanzadas como gráficos de progreso, informes y la integración con otros sistemas de gestión, permitiendo un control detallado de las actividades del equipo. Por ejemplo, en JIRA, se pueden gestionar incidencias desde su identificación hasta su resolución, facilitando la trazabilidad del trabajo.
                            <img 
                            src="/images/png/modulo1/seccion3/jira_vs_trello.png"
                            alt="Figura jira vs trello"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Herramientas de Desarrollo</h3>
                            <p className="text-black text-justify mb-4">
                            En el ámbito del desarrollo de software, plataformas como <strong>GitHub</strong> y <strong>GitLab</strong> juegan un rol crucial en el control de versiones y la colaboración en equipo. Estas herramientas permiten realizar un seguimiento detallado de los cambios realizados en el código, gestionar ramas y colaborar de manera eficiente mediante pull requests o merge requests.
                            </p>
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                                <ul className="list-disc pl-6 text-black space-y-2">
                                <li>
                                    <strong>GitHub:</strong> Plataforma ampliamente utilizada para alojar repositorios, gestionar proyectos y colaborar en el desarrollo de software.
                                </li>
                                <li>
                                    <strong>GitLab:</strong> Integra funciones avanzadas como pipelines de CI/CD, herramientas de calidad y administración de proyectos, siendo una solución integral para equipos de desarrollo.
                                </li>
                                </ul>
                            </blockquote>
                            <p className="text-black text-justify mt-4">
                            Estas plataformas no solo permiten un control eficaz del código, sino que también se integran con sistemas de calidad y herramientas de integración continua (CI/CD), asegurando que el código sea probado y cumpla con los estándares de calidad durante el desarrollo. Por ejemplo, los pipelines de GitLab permiten automatizar pruebas y despliegues, mejorando la eficiencia del equipo y reduciendo errores en producción.
                            <img 
                            src="/images/png/modulo1/seccion3/github.jpg"
                            alt="Figura github"
                            className=" object-contain h-[40rem] w-full my-4"  />
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