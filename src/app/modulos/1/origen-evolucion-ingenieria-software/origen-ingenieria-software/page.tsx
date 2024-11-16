import PageInformation from "@/components/shared/PageInformation";

const page = () => {


  return (
    <PageInformation
        sectionTitle="Origen y Evolución de la Ingeniería de Software"
        contentToRead = {
            <>
            <article className="-py-8 -px-4 bg-white -text-gray-800">
                <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                Origen de la Ingeniería de Software
                </h2>
        
                <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                    Historia y Contexto del Surgimiento
                </h3>
                <p className="text-black mb-4">
                    La ingeniería de software surgió en la década de 1960, impulsada por la creciente 
                    complejidad y escala de los sistemas informáticos, que dificultaba el desarrollo y 
                    mantenimiento de software de alta calidad. Antes de esto, el desarrollo de software 
                    era visto como una extensión de la programación y no se consideraba una disciplina 
                    en sí misma. Con la conocida Crisis del Software en 1968, caracterizada por 
                    proyectos con sobrecostos, retrasos y fallos técnicos, se hizo evidente la necesidad 
                    de un enfoque más estructurado y profesionalizado.

                    <img 
                            src="/images/png/modulo1/seccion1/origen_ingenieria_software.jpg"
                            alt="Figura origen_ingenieria_de_software"
                            className=" object-contain h-[25rem] w-full my-4"  />
                </p>
                <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                    “La ingeniería de software nació para resolver problemas de escala, calidad y 
                    organización en el desarrollo de sistemas complejos.” — Alistair Cockburn
                </blockquote>
                </section>
        
                <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                    Principales Desafíos que Dieron Origen a la Ingeniería de Software
                </h3>
                <p className="text-black mb-4">
                    Los desafíos clave incluyeron:
                    <ul className="list-disc pl-6 space-y-2">
                    <li>La dificultad de coordinar grandes equipos de desarrollo.</li>
                    <li>La falta de herramientas y metodologías estandarizadas.</li>
                    <li>El crecimiento exponencial en la demanda de software confiable y eficiente.</li>
                    <li>Los problemas de escalabilidad en sistemas críticos.</li>
                    </ul>
                </p>
                </section>
        
                <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                    Casos Históricos de Evolución Tecnológica en Software
                </h3>
                <p className="text-black mb-4">
                    Casos emblemáticos ayudaron a moldear la disciplina:
                    <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Proyecto Apollo:</span> El software de control 
                        de vuelo del cohete Apollo estableció estándares de desarrollo para sistemas 
                        críticos en tiempo real.
                    </li>
                    <li>
                        <span className="font-semibold">Sistema Operativo Multics:</span> Un proyecto 
                        pionero en el diseño de sistemas operativos con características avanzadas como 
                        la seguridad y la gestión de memoria.
                    </li>
                    <li>
                        <span className="font-semibold">Introducción del Modelo en Cascada:</span> En 
                        respuesta a la necesidad de procesos más formales, este modelo trajo un enfoque 
                        secuencial para el desarrollo de software.
                    </li>
                    </ul>
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
