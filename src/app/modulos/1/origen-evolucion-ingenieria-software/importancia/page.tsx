import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                <article className="-py-8 -px-4 bg-white -text-gray-800">
                    <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                        Importancia de la Ingeniería de Software
                    </h2>

                    <section className="mb-6">
                        <p className="text-black mb-4 text-justify">
                        La <strong>ingeniería de software</strong> desempeña un papel crucial
                        en garantizar la calidad y eficiencia en el desarrollo de aplicaciones.
                        Esta disciplina no solo minimiza los errores y reduce los costos de
                        producción, sino que también asegura la satisfacción del cliente al
                        proporcionar productos confiables y adaptables. Un enfoque bien
                        estructurado en la ingeniería de software permite a las empresas obtener
                        una ventaja competitiva significativa al ofrecer soluciones que se
                        mantienen actualizadas frente a las cambiantes demandas del mercado.
                        <img 
                            src="/images/png/modulo1/seccion1/importancia_is.jpg"
                            alt="Figura oriimportancia_is"
                            className=" object-contain h-[20rem] w-full my-4"  />
                        </p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                        Impacto en la Calidad y Eficiencia de los Proyectos
                        </h3>
                        <p className="text-black mb-4 text-justify">
                        La implementación de prácticas sólidas en ingeniería de software mejora
                        significativamente la calidad de los proyectos, reduciendo defectos y
                        aumentando la eficiencia en cada etapa del desarrollo. Además, asegura
                        que los productos sean escalables y fáciles de mantener, permitiendo que
                        las organizaciones respondan rápidamente a las nuevas necesidades de los
                        usuarios.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                        Análisis de las Ventajas Competitivas
                        </h3>
                        <p className="text-black mb-4 text-justify">
                        Una buena ingeniería de software proporciona a las empresas una ventaja
                        estratégica al reducir el tiempo de desarrollo, optimizar recursos y
                        mejorar la experiencia del usuario. Empresas líderes como Amazon han
                        utilizado la ingeniería de software para optimizar sus operaciones y
                        superar a la competencia, mientras que otras organizaciones han
                        enfrentado graves consecuencias por no aplicar principios adecuados.
                        </p>
                    </section>

                    <section className="mb-6">
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">

                            <h3 className="text-xl font-semibold mb-2">
                            Casos de Éxito y Fracaso en Ingeniería de Software
                            </h3>
                            <p className="text-black mb-4 text-justify">
                            Ejemplos como el sistema de gestión de operaciones de <strong>Amazon</strong>
                            destacan cómo una ingeniería de software bien aplicada puede mejorar la
                            productividad y garantizar la excelencia operativa. Por otro lado, casos
                            como el fracaso del <strong>Mars Climate Orbiter</strong>, donde errores
                            en la gestión del software llevaron a la pérdida de la misión, subrayan
                            la importancia de un enfoque meticuloso en esta disciplina. Estas
                            lecciones refuerzan la necesidad de priorizar la calidad en todos los
                            aspectos del ciclo de vida del software.
                            <img 
                            src="/images/png/modulo1/seccion1/amazon-logo.png"
                            alt="Figura oriamazon-logo"
                            className=" object-contain h-[10rem] w-full my-4"  />
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