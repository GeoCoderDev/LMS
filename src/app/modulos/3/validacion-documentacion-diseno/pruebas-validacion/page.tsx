import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                    <article className="-py-8 -px-4 bg-white -text-gray-800">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                            Pruebas de Validación
                        </h2>

                        <section className="mb-6 text-justify">
                            <p className="text-black mb-4">
                            Las pruebas de validación son un pilar fundamental en el desarrollo de software, ya que permiten garantizar que el sistema cumpla con los requisitos funcionales y no funcionales definidos. Entre las pruebas más relevantes destacan las <strong>pruebas de integración</strong> y la <strong>validación de desempeño</strong>. Estas pruebas no solo verifican la calidad del diseño, sino también aseguran su correcto funcionamiento en diferentes escenarios.
                            </p>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Pruebas de Integración</h3>
                            <p className="text-black mb-4">
                            Las pruebas de integración tienen como objetivo asegurar que los componentes individuales del diseño interactúen correctamente cuando se combinan. Esto es esencial para garantizar la coherencia y funcionalidad del sistema completo.
                            </p>
                            <blockquote className="italic text-gray-600 mb-4 pl-4 border-l-4 border-gray-400">
                            Un ejemplo práctico sería la integración entre un módulo de autenticación y el sistema de base de datos, donde las pruebas deben validar que las credenciales de usuario se gestionen adecuadamente y de forma segura.
                            </blockquote>
                            <p className="text-black mb-4">
                            Para realizar estas pruebas, se emplean herramientas como <strong>JUnit</strong> y <strong>NUnit</strong>, que facilitan la gestión y ejecución de casos de prueba para diversos escenarios de integración.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>Validar la comunicación entre APIs y la base de datos.</li>
                            <li>Probar el flujo de datos entre el frontend y el backend.</li>
                            <li>Confirmar la correcta interacción entre módulos de diferentes servicios.</li>
                            </ul>
                        </section>

                        <section className="mb-6 text-justify">
                            <h3 className="text-xl font-semibold mb-2">Validación de Desempeño</h3>
                            <p className="text-black mb-4">
                            La validación de desempeño se enfoca en verificar que el sistema cumpla con los requisitos de rendimiento bajo diversas condiciones. Esto incluye pruebas de carga, estrés y escalabilidad para identificar posibles cuellos de botella o limitaciones.
                            </p>
                            <blockquote className="italic text-gray-600 mb-4 pl-4 border-l-4 border-gray-400">
                            Por ejemplo, una prueba de carga podría evaluar si un sitio de comercio electrónico puede manejar simultáneamente 10,000 usuarios activos durante un evento de ventas masivas.
                            </blockquote>
                            <p className="text-black mb-4">
                            Herramientas como <strong>JMeter</strong> y <strong>LoadRunner</strong> son ampliamente utilizadas para llevar a cabo estas pruebas, permitiendo simular múltiples usuarios y analizar el rendimiento del sistema en tiempo real.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-black mb-4">
                            <li>Pruebas de carga: verificar la respuesta del sistema bajo un alto volumen de usuarios.</li>
                            <li>Pruebas de estrés: identificar el punto de quiebre del sistema bajo condiciones extremas.</li>
                            <li>Pruebas de escalabilidad: analizar cómo el rendimiento se ve afectado al aumentar los recursos disponibles.</li>
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