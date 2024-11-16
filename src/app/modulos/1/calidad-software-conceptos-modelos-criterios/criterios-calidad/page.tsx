import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            sectionTitle="Calidad del Software: Conceptos, Modelos y Criterios"
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Criterios de Calidad del Software
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                            La norma <strong>ISO/IEC 25010</strong> establece un conjunto de atributos esenciales que definen la calidad del software, permitiendo evaluar su desempeño y adecuación en contextos de uso específicos. Entre los principales atributos destacan la <strong>funcionalidad</strong>, la <strong>usabilidad</strong> y la <strong>seguridad</strong>. Estos criterios son fundamentales para garantizar que el software responda a las necesidades del usuario mientras mantiene altos estándares de eficiencia y seguridad.
                            </p>

                            <p className="text-black mb-4">
                            Por ejemplo, un sistema bancario en línea requiere estrictos niveles de seguridad para proteger los datos de los usuarios, además de una interfaz intuitiva que facilite la realización de transacciones. Por otro lado, una aplicación educativa prioriza la <strong>usabilidad</strong> y la <strong>accesibilidad</strong>, asegurando que sea fácil de usar para personas con diferentes niveles de experiencia técnica o con discapacidades.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Atributos de Calidad según ISO/IEC 25010</h3>
                            <p className="text-black mb-4">
                            La norma identifica ocho características principales que definen la calidad del software:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li><strong>Funcionalidad:</strong> La capacidad del software para proporcionar las funciones requeridas bajo condiciones específicas.</li>
                            <li><strong>Usabilidad:</strong> La facilidad con la que los usuarios pueden aprender y utilizar el sistema.</li>
                            <li><strong>Seguridad:</strong> El nivel de protección contra accesos no autorizados y vulnerabilidades.</li>
                            <li><strong>Fiabilidad:</strong> La capacidad del software para funcionar sin fallos durante un período determinado.</li>
                            <li><strong>Eficiencia:</strong> La relación entre el rendimiento del software y los recursos utilizados.</li>
                            <li><strong>Mantenibilidad:</strong> La facilidad con la que el software puede ser modificado o actualizado.</li>
                            <li><strong>Portabilidad:</strong> La capacidad del software para ser utilizado en diferentes entornos.</li>
                            <li><strong>Compatibilidad:</strong> La capacidad del software para interactuar con otros sistemas o aplicaciones.</li>
                            <img 
                            src="/images/png/modulo1/seccion2/atributos_De_calidad_iso.png"
                            alt="Figura atributos_De_calidad_iso"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Factores Críticos y Casos Prácticos</h3>
                            <p className="text-black mb-4">
                            Los factores críticos que definen la calidad del software están determinados por el contexto de uso. Por ejemplo, en el desarrollo de un sistema de comercio electrónico, la <strong>usabilidad</strong> y la <strong>eficiencia</strong> son clave para asegurar una experiencia de usuario fluida, mientras que en una aplicación de gestión hospitalaria, la <strong>fiabilidad</strong> y la <strong>seguridad</strong> son prioridades para proteger datos sensibles y garantizar operaciones críticas.
                            </p>

                            <p className="text-black mb-4">
                            Evaluar la calidad del software utilizando estos criterios permite identificar fortalezas y áreas de mejora, asegurando que el producto final cumpla con las expectativas del cliente y los estándares de la industria. Por ejemplo, aplicar pruebas de usabilidad para garantizar que los usuarios completen tareas clave sin dificultades, o realizar auditorías de seguridad para detectar y mitigar posibles vulnerabilidades.
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