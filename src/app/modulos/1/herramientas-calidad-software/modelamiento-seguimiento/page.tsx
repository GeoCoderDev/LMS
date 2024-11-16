import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            sectionTitle="Herramientas para la Calidad del Software"
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800 text-justify">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Herramientas de Modelamiento y Seguimiento
                        </h2>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Herramientas de Modelamiento</h3>
                            <p className="text-black mb-4">
                            Las herramientas de modelamiento, como UML, implementadas en software como{" "}
                            <strong>Enterprise Architect</strong>, son fundamentales para representar de manera
                            gráfica la estructura y el comportamiento del sistema. Estas herramientas permiten crear
                            diagramas de clases, casos de uso y secuencia, ayudando a los equipos de desarrollo a
                            comprender y planificar el diseño del software de forma clara y estructurada.
                            </p>
                            <p className="text-black mb-4">
                            Entre los diagramas más utilizados se encuentran los <strong>diagramas de clases</strong>, 
                            que detallan las relaciones entre objetos, los <strong>diagramas de casos de uso</strong>, 
                            que identifican las interacciones entre usuarios y el sistema, y los <strong>diagramas de secuencia</strong>, 
                            que describen el flujo de mensajes entre los componentes del sistema. Estas representaciones son esenciales 
                            para el desarrollo de software bien diseñado y alineado con los requerimientos.
                            </p>
                            <p className="text-black mb-4">
                            Por ejemplo, al modelar un sistema de gestión de inventarios, se podría utilizar un
                            diagrama de clases para mostrar las relaciones entre productos, categorías y órdenes,
                            asegurando una estructura coherente para la base de datos y la lógica de negocio.
                            </p>
                            <img 
                            src="/images/png/modulo1/seccion3/enterprise-architect.png"
                            alt="Figura enterprise_architect"
                            className=" object-contain h-[20rem] w-full my-4"  />
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Herramientas de Seguimiento</h3>
                            <p className="text-black mb-4">
                            En el ámbito del seguimiento de calidad, herramientas como <strong>SonarQube</strong> y
                            <strong> Selenium</strong> juegan un papel crucial. SonarQube realiza un{" "}
                            <strong>análisis estático del código</strong>, detectando posibles errores, vulnerabilidades
                            y puntos de mejora en la estructura del código, lo que ayuda a mantener estándares de
                            calidad elevados durante el desarrollo.
                            </p>
                            <p className="text-black mb-4">
                            Por otro lado, <strong>Selenium</strong> permite la <strong>automatización de pruebas de
                            software</strong>, verificando que el sistema funcione correctamente en diferentes escenarios
                            y plataformas. Esto es particularmente útil para aplicaciones web, ya que asegura que el
                            software sea compatible con navegadores y dispositivos variados.
                            </p>
                            <p className="text-black mb-4">
                            Estas herramientas no solo optimizan la detección de errores y vulnerabilidades, sino que
                            también mejoran la eficiencia del equipo de desarrollo al integrar procesos de control de
                            calidad y pruebas automatizadas, garantizando un software robusto y funcional.
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