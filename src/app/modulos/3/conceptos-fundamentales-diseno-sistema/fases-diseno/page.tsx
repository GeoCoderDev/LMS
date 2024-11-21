import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Fases del Diseño del Sistema
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                El diseño de sistemas se lleva a cabo en distintas fases que permiten construir una solución técnica adecuada a los requisitos planteados. Estas fases son fundamentales para garantizar que el sistema cumpla con sus objetivos, optimizando recursos y asegurando su funcionalidad. Entre las principales etapas se encuentran el diseño conceptual, el diseño lógico y el diseño físico.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Diseño Conceptual</h3>
                            <p className="text-black mb-4">
                                El diseño conceptual se enfoca en identificar los componentes clave del sistema y cómo interactúan entre sí. Es una etapa estratégica que define las bases del proyecto y responde a preguntas como: *¿Qué funciones debe cumplir el sistema?* y *¿Cómo se integrarán sus partes?*
                            </p>
                            <blockquote className="pl-4 italic text-gray-600 border-l-4 border-gray-300">
                                Un diseño conceptual sólido ayuda a evitar conflictos entre componentes y asegura que cada parte del sistema esté alineada con los objetivos generales del proyecto.
                            </blockquote>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Diseño Lógico</h3>
                            <p className="text-black mb-4">
                                Durante esta fase, el sistema es representado gráficamente y de forma lógica para comprender su estructura. Aquí se desarrollan diagramas, como los de flujo de datos y diagramas entidad-relación, que describen cómo las diferentes partes del sistema están conectadas y cómo fluye la información entre ellas.
                            </p>
                            <p className="text-black mb-4">
                                Esta etapa permite identificar posibles redundancias o inconsistencias en los procesos antes de pasar al diseño físico, lo que ahorra tiempo y recursos en fases posteriores.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Diseño Físico</h3>
                            <p className="text-black mb-4">
                                El diseño físico aborda las decisiones técnicas, como la selección de tecnologías, bases de datos, hardware y otros componentes físicos necesarios para implementar el sistema. Es en esta etapa donde se materializan las soluciones planteadas en las fases anteriores, considerando factores como costo, rendimiento y escalabilidad.
                            </p>
                            <blockquote className="pl-4 italic text-gray-600 border-l-4 border-gray-300">
                                Una correcta elección de componentes en el diseño físico puede determinar el éxito o fracaso del sistema, especialmente en términos de sostenibilidad y capacidad de adaptación futura.
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