import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Definición de Diseño del Sistema
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                El diseño del sistema es una etapa fundamental en el desarrollo de software, en la que se definen y documentan las especificaciones técnicas y estructurales necesarias para construir un sistema funcional. Este proceso asegura que los requerimientos del cliente se traduzcan en soluciones técnicas concretas, proporcionando una visión general del sistema antes de su implementación. 
                            </p>

                            <p className="text-black mb-4">
                                Este diseño puede dividirse en dos niveles principales: el diseño de alto nivel, que se centra en la arquitectura del sistema, y el diseño de bajo nivel, que aborda los detalles específicos de los componentes y sus interacciones. Ambos niveles son complementarios y esenciales para garantizar que el sistema sea robusto, eficiente y mantenible.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Diseño de Alto Nivel (Arquitectura)</h3>
                            <p className="text-black mb-4">
                                El diseño de alto nivel, también conocido como arquitectura del sistema, describe las estructuras principales del software y cómo interactúan entre sí. Este nivel incluye decisiones clave como la elección de patrones arquitectónicos, la definición de módulos principales y la especificación de interfaces entre componentes. 
                            </p>

                            <p className="text-black mb-4">
                                Por ejemplo, en un sistema distribuido, la arquitectura podría estar basada en microservicios, donde cada servicio tiene una responsabilidad específica y se comunica a través de API. Estas decisiones determinan la escalabilidad, la seguridad y la capacidad de mantenimiento del sistema.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Diseño de Bajo Nivel (Detalles de los componentes)</h3>
                            <p className="text-black mb-4">
                                El diseño de bajo nivel se enfoca en los detalles específicos de cada componente individual del sistema. Aquí se define la lógica interna de los módulos, las estructuras de datos utilizadas, los algoritmos implementados y las interacciones precisas entre los diferentes componentes.
                            </p>

                            <p className="text-black mb-4">
                                Por ejemplo, un módulo de autenticación podría incluir detalles como el flujo de verificación de credenciales, la gestión de tokens de sesión y los métodos para el cifrado de datos. Este nivel asegura que cada componente funcione de manera efectiva y cumpla con su propósito dentro del sistema general.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Diferencias entre el Diseño de Software y la Implementación</h3>
                            <p className="text-black mb-4">
                                Aunque el diseño de software y la implementación están relacionados, representan etapas distintas del ciclo de vida del desarrollo. El diseño se centra en la planificación y la creación de un modelo conceptual del sistema, mientras que la implementación se refiere a la traducción de este diseño en código funcional.
                            </p>

                            <p className="text-black mb-4">
                                En el diseño, se definen las estructuras, los flujos y las interacciones, sin entrar en detalles específicos del lenguaje de programación o las herramientas. Por el contrario, en la implementación, los desarrolladores convierten estas especificaciones en código ejecutable, resolviendo problemas técnicos específicos y asegurando que el sistema cumpla con los estándares de calidad establecidos.
                            </p>

                            <p className="text-black mb-4">
                                Comprender esta distinción es esencial para garantizar una transición fluida entre la conceptualización y la construcción del software, maximizando la eficiencia y minimizando los errores durante el desarrollo.
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