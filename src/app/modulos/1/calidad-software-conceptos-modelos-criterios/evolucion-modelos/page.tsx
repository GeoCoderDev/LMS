import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article >
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Evolución de los Modelos de Calidad
                        </h2>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Introducción</h3>
                            <p className="text-black mb-4 text-justify">
                            Los modelos de calidad en software han evolucionado significativamente a lo largo del tiempo, adaptándose a las necesidades cambiantes del mercado y los avances tecnológicos. Desde los enfoques pioneros como el modelo de <strong>McCall</strong> y el modelo de <strong>Boehm</strong>, se ha recorrido un largo camino hacia modelos más detallados y específicos que consideran factores como la <em>seguridad</em>, la <em>experiencia del usuario</em> y la <em>adaptabilidad</em>.
                            <img 
                            src="/images/png/modulo1/seccion2/modelo_de_calidad_mcall.png"
                            alt="Figura modelo_de_calidad_mcall"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Modelos Históricos</h3>
                            <p className="text-black mb-4 text-justify">
                            Los primeros modelos de calidad, como el modelo de <strong>McCall</strong>, se centraron en factores fundamentales como la <em>corrección</em>, la <em>eficiencia</em> y la <em>usabilidad</em>. Por otro lado, el modelo de <strong>Boehm</strong> amplió estas perspectivas, añadiendo criterios relacionados con la <em>mantenibilidad</em> y la <em>portabilidad</em>. Estos modelos proporcionaron una base sólida para evaluar la calidad del software en sus primeras etapas de desarrollo.
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Evolución hacia Modelos Más Actuales</h3>
                            <p className="text-black mb-4 text-justify">
                            A medida que el software y las expectativas de los usuarios se han vuelto más complejos, los modelos de calidad han evolucionado para incorporar criterios más detallados y específicos. Los modelos modernos consideran aspectos como la <em>seguridad</em>, la <em>escalabilidad</em> y la <em>experiencia del usuario</em>, permitiendo una evaluación más integral de la calidad del software. Esto ha sido clave para enfrentar los desafíos asociados con nuevas tecnologías, como la inteligencia artificial y los sistemas distribuidos.
                            </p>
                        </section>

                        <section className="mb-6">
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                                <h3 className="text-xl font-semibold mb-2">Comparación entre Modelos Clásicos y Modernos</h3>
                                <p className="text-black mb-4 text-justify">
                                A diferencia de los modelos clásicos, que se enfocaban en un conjunto limitado de factores, los modelos modernos son mucho más amplios y detallados. Mientras que los enfoques históricos proporcionaban una visión general y sólida de la calidad, los modelos actuales incluyen métricas específicas para evaluar criterios como la <em>fiabilidad en entornos dinámicos</em>, la <em>interoperabilidad</em> y la <em>adaptabilidad</em>. Esto permite a las organizaciones tomar decisiones más informadas y desarrollar software que no solo sea funcional, sino también competitivo en el mercado actual.
                                </p>
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