import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            sectionTitle="Normas y Estándares de Calidad en el Software"
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Normas Internacionales (ISO/IEC)
                        </h2>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">ISO 9001</h3>
                            <p className="text-black mb-4">
                            Las <strong>normas ISO/IEC</strong> establecen estándares de calidad
                            internacionales para proyectos de software, permitiendo a las
                            organizaciones asegurar que sus procesos y productos cumplan con
                            criterios reconocidos globalmente. La <strong>ISO 9001</strong> se
                            centra en la gestión de la calidad, promoviendo prácticas para mejorar
                            continuamente los procesos y satisfacer a los clientes en proyectos de
                            software. Esta norma enfatiza la importancia de documentar los
                            procedimientos y asegurar que cada fase del desarrollo sea controlada
                            para asegurar la calidad total.
                            <img 
                            src="/images/png/modulo1/seccion4/ISO_9001.png"
                            alt="Figura iso_9001"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">ISO/IEC 12207</h3>
                            <p className="text-black mb-4">
                            La <strong>ISO/IEC 12207</strong> define los procesos específicos para el
                            ciclo de vida del software, desde la planificación hasta el
                            mantenimiento. Esta norma asegura que cada fase del ciclo de vida del
                            software esté cubierta por procesos estandarizados que garantizan un
                            desarrollo eficiente y de alta calidad. El objetivo de esta norma es
                            proporcionar un marco claro para gestionar los procesos de desarrollo,
                            asegurando que el software se entregue con las especificaciones y la
                            calidad necesarias.
                            <img 
                            src="/images/png/modulo1/seccion4/ISO_12207.png"
                            alt="Figura iso_12207"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">ISO/IEC 25010 (SQuaRE)</h3>
                            <p className="text-black mb-4">
                            La <strong>ISO/IEC 25010</strong> (SQuaRE) establece un modelo detallado
                            de calidad para el software, categorizando las características y
                            subcaracterísticas que son esenciales para evaluar la calidad del
                            software. Algunas de las características clave incluyen la
                            <strong>funcionalidad</strong>, <strong>eficiencia</strong>, y
                            <strong>usabilidad</strong>, que se desglosan en subcaracterísticas como
                            la seguridad, la interoperabilidad, la mantenibilidad y la fiabilidad.
                            La norma también proporciona guías prácticas sobre cómo evaluar la
                            calidad del software a través de estos atributos.
                            <img 
                            src="/images/png/modulo1/seccion4/ISO-25010.png"
                            alt="Figura iso_25010"
                            className=" object-contain h-[30rem] w-full my-4"  />
                            </p>
                        </section>

                        <section className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Objetivos de la Norma ISO 9001</h3>
                            <p className="text-black mb-4">
                            Los principales objetivos de la norma ISO 9001 son asegurar que los
                            procesos de software se gestionen de forma eficiente y que los productos
                            entregados cumplan con los requisitos establecidos por los clientes. La
                            norma también promueve una mejora continua en todos los procesos,
                            garantizando así una calidad constante en los proyectos de software.
                            </p>
                        </section>

                        <section className="mb-6">
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">

                            <h3 className="text-xl font-semibold mb-2">ISO/IEC 12207: Procesos del Ciclo de Vida del Software</h3>
                            <p className="text-black mb-4">
                            La ISO/IEC 12207 establece procesos detallados para cada fase del ciclo
                            de vida del software, que incluyen desde la planificación, la
                            implementación, las pruebas, hasta la operación y el mantenimiento. La
                            aplicación práctica de esta norma en proyectos reales ayuda a optimizar
                            la gestión del ciclo de vida del software y asegura la calidad en cada
                            etapa, garantizando la eficiencia y el cumplimiento de los objetivos.
                            </p>
                            </blockquote>

                        </section>

                        <section className="mb-6">
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">

                            <h3 className="text-xl font-semibold mb-2">
                            ISO/IEC 25010 (SQuaRE): Modelo de Calidad del Software
                            </h3>
                            <p className="text-black mb-4">
                            La norma ISO/IEC 25010 proporciona un marco detallado para evaluar la
                            calidad del software a través de sus características y subcaracterísticas.
                            La norma incluye aspectos clave como la <strong>funcionalidad</strong>,
                            <strong>fiabilidad</strong>, <strong>usabilidad</strong>, y
                            <strong>seguridad</strong>. Esta estructura permite evaluar de manera
                            objetiva y sistemática la calidad de un sistema de software, guiando a
                            los equipos de desarrollo y asegurando que el software cumpla con los
                            requisitos de calidad esperados por los usuarios.
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