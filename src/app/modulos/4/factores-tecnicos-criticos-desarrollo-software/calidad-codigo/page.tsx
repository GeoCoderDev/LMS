import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Calidad del Código y Mantenibilidad
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                                Mantener un código limpio y fácilmente mantenible es crucial para garantizar la escalabilidad, funcionalidad y sostenibilidad de los proyectos de software. Esto no solo reduce el riesgo de errores, sino que también mejora la colaboración entre equipos de desarrollo y facilita la incorporación de nuevas funcionalidades en el futuro.
                            </p>

                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                                Escribir código limpio es una inversión a largo plazo que ahorra tiempo y recursos en el mantenimiento del software.
                            </blockquote>

                            <p className="text-black mb-4">
                                La refactorización continua, el uso de patrones de diseño y las revisiones de código son prácticas fundamentales que ayudan a mantener la calidad del código. Estas prácticas permiten mejorar la estructura del código sin alterar su funcionalidad, optimizando su rendimiento y comprensión.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Prácticas para Mejorar la Calidad del Código</h3>
                            <p className="text-black mb-4">
                                A continuación, se destacan algunas prácticas esenciales que promueven la calidad y mantenibilidad del código:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Refactorización Continua:</strong> Mejora la legibilidad y la eficiencia del código al eliminar redundancias y simplificar estructuras complejas.
                                </li>
                                <li>
                                    <strong>Patrones de Diseño:</strong> Proveen soluciones reutilizables a problemas comunes en el desarrollo, como la creación de objetos o la separación de responsabilidades.
                                </li>
                                <li>
                                    <strong>Revisión de Código:</strong> Permite identificar y corregir problemas antes de que lleguen a producción, fomentando el aprendizaje colaborativo.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">
                                Herramientas de Análisis Estático y Dinámico
                            </h3>
                            <p className="text-black mb-4">
                                Para asegurar un código de alta calidad, es fundamental emplear herramientas de análisis estático y dinámico. Estas herramientas permiten detectar problemas en el código antes de que se ejecute, así como evaluar su comportamiento en tiempo de ejecución.
                            </p>

                            <blockquote className="italic text-gray-600 border-l-4 border-gray-400 pl-4 mb-4">
                                SonarQube y ESLint son herramientas ampliamente utilizadas para identificar problemas de estilo, seguridad y optimización del código.
                            </blockquote>

                            <p className="text-black mb-4">
                                Por ejemplo, SonarQube proporciona métricas detalladas sobre la calidad del código, mientras que ESLint es ideal para detectar y corregir problemas de estilo en proyectos basados en JavaScript o TypeScript.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Casos de Éxito en Mantenimiento de Código</h3>
                            <p className="text-black mb-4">
                                Empresas líderes han demostrado que mantener un código limpio y bien estructurado es clave para el éxito a largo plazo. Algunos ejemplos incluyen:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                                <li>
                                    <strong>Google:</strong> Implementa estrictas políticas de revisión de código y herramientas internas para garantizar estándares de calidad en todos sus proyectos.
                                </li>
                                <li>
                                    <strong>Netflix:</strong> Utiliza análisis estáticos avanzados y prácticas de refactorización constante para optimizar el rendimiento de sus sistemas.
                                </li>
                                <li>
                                    <strong>Microsoft:</strong> Invierte en herramientas como Visual Studio para facilitar la detección de errores y mantener la consistencia del código.
                                </li>
                            </ul>
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