import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Criterios de Calidad para el Diseño
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                La calidad en el diseño de sistemas es fundamental para garantizar que estos sean eficientes, mantenibles y escalables. Los criterios de calidad en el diseño son herramientas esenciales que permiten identificar áreas de mejora y asegurar que las soluciones desarrolladas cumplan con los estándares requeridos. Entre los principales criterios destacan la <strong>modularidad</strong>, el <strong>acoplamiento</strong>, la <strong>reutilización</strong> y la <strong>escalabilidad</strong>.
                            </p>
                            <p className="text-black mb-4">
                                La modularidad, por ejemplo, asegura que el sistema esté organizado en módulos cohesivos, facilitando la comprensión y el mantenimiento. Por otro lado, reducir el acoplamiento entre módulos mejora la flexibilidad y la capacidad de realizar cambios sin afectar significativamente otras partes del sistema.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Modularidad</h3>
                            <p className="text-black mb-4">
                                La <strong>modularidad</strong> se refiere a la división del sistema en partes o módulos más pequeños que cumplen con un propósito específico. Esto permite que cada módulo sea desarrollado y probado de forma independiente. Además, facilita la comprensión del sistema y su mantenimiento, ya que cada módulo tiene responsabilidades bien definidas.
                            </p>
                            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-black mb-4">
                                Un diseño modular bien estructurado no solo reduce la complejidad del sistema, sino que también permite identificar y solucionar problemas de manera más eficiente.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Acoplamiento</h3>
                            <p className="text-black mb-4">
                                El <strong>acoplamiento</strong> mide el grado de interdependencia entre los módulos de un sistema. Un diseño de calidad busca minimizar el acoplamiento para que los módulos puedan modificarse o reemplazarse con un impacto mínimo en el sistema global. Esto contribuye a una mayor flexibilidad y adaptabilidad del sistema.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Reutilización</h3>
                            <p className="text-black mb-4">
                                La <strong>reutilización</strong> consiste en aprovechar componentes existentes para su uso en nuevos contextos o módulos del sistema. Esto no solo ahorra tiempo y costos de desarrollo, sino que también asegura la consistencia y calidad en las partes reutilizadas. Revisar los componentes reutilizables durante el diseño es una práctica clave para optimizar recursos.
                            </p>
                            <blockquote className="border-l-4 border-gray-500 pl-4 italic text-black mb-4">
                                La reutilización de componentes probados reduce los riesgos asociados al desarrollo de nuevos sistemas.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Escalabilidad</h3>
                            <p className="text-black mb-4">
                                La <strong>escalabilidad</strong> garantiza que el diseño soporte futuras ampliaciones del sistema sin necesidad de realizar modificaciones extensas. Esto incluye prever incrementos en el volumen de usuarios, datos o funcionalidades. Un sistema escalable es esencial para proyectos que buscan crecer con el tiempo.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Ejemplos de Criterios de Calidad en Proyectos</h3>
                            <p className="text-black mb-4">
                                Un proyecto exitoso que aplicó estos criterios fue el diseño de un sistema de gestión educativa. Se dividió en módulos como gestión de usuarios, calificaciones y reportes. El bajo acoplamiento entre módulos permitió integrar nuevas funcionalidades, mientras que la reutilización de componentes redujo significativamente el tiempo de desarrollo.
                            </p>
                            <p className="text-black mb-4">
                                En otro caso, un sistema de comercio electrónico priorizó la escalabilidad y modularidad para soportar picos de tráfico durante eventos promocionales, logrando adaptarse rápidamente sin interrupciones.
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