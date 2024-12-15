import PageInformation from "@/components/shared/PageInformation";

const page = () => {


  return (
    <PageInformation
        contentToRead={
            <>
                <article >
                    <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                    Objetivos y Finalidad
                    </h2>
            
                    <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Definición de objetivos clave en ingeniería de software</h3>
                    <p className="text-black mb-4">
                        Los <strong>objetivos</strong> principales de la ingeniería de software incluyen la creación de productos que sean 
                        de alta calidad, escalables, mantenibles y que cumplan con las expectativas y necesidades de los usuarios finales. 
                        Estos objetivos se centran en garantizar la funcionalidad, confiabilidad, eficiencia y usabilidad de los sistemas 
                        desarrollados, abordando tanto los requerimientos actuales como las posibles necesidades futuras.
                        <img 
                            src="/images/png/modulo1/seccion1/objetivos_is.jpg"
                            alt="Figura origbjetivos_is"
                            className=" object-contain h-[20rem] w-full my-4"  />
                    </p>
                    </section>
            
                    <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Relación con la mejora continua en proyectos</h3>
                    <p className="text-black mb-4">
                        La ingeniería de software fomenta un enfoque de <strong>mejora continua</strong>, donde cada etapa del ciclo de vida 
                        del software se evalúa y optimiza constantemente para maximizar su calidad y minimizar riesgos. Este enfoque no solo 
                        asegura la sostenibilidad de los proyectos, sino que también promueve la incorporación de mejores prácticas, como el 
                        uso de metodologías ágiles y herramientas avanzadas para el control de calidad y la gestión de proyectos.
                    </p>
                    </section>
            
                    <section className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Finalidad y principios de la ingeniería de software</h3>
                    <p className="text-black mb-4">
                        La <strong>finalidad</strong> de la ingeniería de software va mucho más allá de simplemente escribir código. Su 
                        propósito principal es garantizar que los proyectos sean gestionados de manera eficaz en todas las etapas de su ciclo 
                        de vida. Esto incluye planificación, desarrollo, pruebas, implementación y mantenimiento. Los principios fundamentales 
                        están orientados a promover la sostenibilidad, la eficiencia y la alineación con los objetivos estratégicos de las 
                        organizaciones. Estas bases permiten crear sistemas robustos que soporten cambios tecnológicos y organizacionales a 
                        largo plazo.
                    </p>
                    </section>
            
                    <section className="mb-6">
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                        <h3 className="text-xl font-semibold mb-2">Ejemplos de objetivos en proyectos de desarrollo</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                            Reducir la cantidad de defectos detectados durante la fase de pruebas en un 30% en comparación con proyectos previos.
                            </li>
                            <li>
                            Mejorar el tiempo de respuesta del sistema en un 20% bajo condiciones de carga máxima.
                            </li>
                            <li>
                            Asegurar que el 100% de los módulos críticos del sistema pasen pruebas de estrés y seguridad antes de su despliegue.
                            </li>
                            <li>
                            Lograr que el mantenimiento correctivo del sistema tome un 40% menos de tiempo mediante la implementación de 
                            prácticas de diseño modular.
                            </li>
                        </ul>
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
