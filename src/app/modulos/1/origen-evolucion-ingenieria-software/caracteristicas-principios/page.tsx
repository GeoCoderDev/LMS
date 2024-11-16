import PageInformation from "@/components/shared/PageInformation";

const page = () => {


    return (
        <PageInformation
            contentToRead={
                <>
                <article className="-py-8 -px-4 bg-white -text-gray-800">
                    <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                        Características y Principios de la Ingeniería de Software
                    </h2>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                        Características Fundamentales
                        </h3>
                        <p className="text-justify text-black mb-4">
                        Las características fundamentales de la ingeniería de software son 
                        esenciales para asegurar que los productos desarrollados cumplan con 
                        altos estándares de calidad. Entre ellas se encuentran la{" "}
                        <strong>fiabilidad</strong>, que garantiza que el software funcione 
                        correctamente bajo diversas condiciones; la{" "}
                        <strong>mantenibilidad</strong>, que facilita la modificación y 
                        actualización del sistema a lo largo del tiempo; y la{" "}
                        <strong>eficiencia</strong>, que optimiza el uso de recursos como el 
                        tiempo de ejecución y la memoria. Estas características son clave para 
                        satisfacer las expectativas tanto de usuarios finales como de los 
                        equipos de desarrollo.
                        <img 
                            src="/images/png/modulo1/seccion1/caracteristicas_is.jpg"
                            alt="Figura oricaracteristicas_is"
                            className=" object-contain h-[20rem] w-full my-4"  />
                        </p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                        Principios de Calidad en Software
                        </h3>
                        <p className="text-justify text-black mb-4">
                        Los principios de calidad en el desarrollo de software, como la{" "}
                        <strong>reusabilidad</strong>, la <strong>modularidad</strong> y el{" "}
                        <strong>bajo acoplamiento</strong>, son fundamentales para construir 
                        sistemas sostenibles y flexibles. La{" "}
                        <strong>reusabilidad</strong> permite aprovechar componentes existentes 
                        para reducir costos y tiempo de desarrollo. La{" "}
                        <strong>modularidad</strong> organiza el software en partes manejables, 
                        mientras que el <strong>bajo acoplamiento</strong> asegura que los 
                        módulos interactúen mínimamente, facilitando el mantenimiento y las 
                        mejoras futuras.
                        </p>
                    </section>

                    <section className="mb-6">
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <h3 className="text-xl font-semibold mb-2">
                            Aplicaciones Prácticas en la Industria
                            </h3>
                            <p className="text-justify text-black mb-4">
                            En la industria, estos principios se aplican ampliamente mediante el 
                            uso de <strong>patrones de diseño</strong>, que ofrecen soluciones 
                            probadas para problemas comunes, y el desarrollo de{" "}
                            <strong>componentes modulares</strong>, que pueden integrarse en 
                            diferentes proyectos. Además, el código reutilizable se convierte en 
                            un recurso valioso para los equipos de desarrollo, ya que mejora la 
                            productividad y asegura la consistencia en los proyectos. Estas 
                            prácticas son esenciales para manejar la complejidad y garantizar que 
                            los sistemas puedan adaptarse a los cambios tecnológicos y de mercado.
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