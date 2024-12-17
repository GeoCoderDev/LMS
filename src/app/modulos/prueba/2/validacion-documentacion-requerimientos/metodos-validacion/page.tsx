import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
    return (
        <PageInformation
            
            contentToRead={
            <>
                <article>
                    <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
                    Métodos de Validación
                    </h2>
            
                    <p className="text-justify">
                    La validación es un proceso crucial en el ciclo de vida del desarrollo
                    de software, ya que garantiza que el sistema no solo cumple con los
                    requisitos especificados, sino que también satisface las necesidades
                    reales de los usuarios finales. Entre los métodos de validación más
                    efectivos se encuentran la creación de prototipos y la realización de
                    entrevistas y talleres con usuarios.
                    </p>
            
                    <br />
                    <section className="text-justify">
                    <h3 className="font-bold">Prototipos</h3>
                    <p>
                        Los prototipos son versiones preliminares del sistema que permiten a
                        los desarrolladores y usuarios visualizar y experimentar con las
                        funcionalidades antes de la implementación final. Este método de
                        validación temprana tiene varios beneficios:
                    </p>
                    <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li className="mb-2">
                        <strong>Validación Temprana de Requisitos:</strong> Permite
                        identificar y corregir requisitos confusos o incorrectos en las
                        etapas iniciales del desarrollo, lo que reduce el riesgo de realizar
                        cambios costosos en fases posteriores.
                        </li>
                        <li className="mb-2">
                        <strong>Mejora de la Comunicación:</strong> Facilita la comunicación
                        entre los stakeholders, ya que los usuarios pueden interactuar con
                        un modelo visual, lo que ayuda a clarificar expectativas y obtener
                        un feedback más preciso.
                        </li>
                        <li className="mb-2">
                        <strong>Aumento de la Satisfacción del Usuario:</strong> Al
                        involucrar a los usuarios en la creación del prototipo, se incrementa
                        la probabilidad de que el producto final cumpla con sus necesidades
                        y preferencias.
                        <img 
                            src="/images/png/modulo2/seccion4/prototipe.png"
                            alt="Figura de prototipo"
                            className=" object-contain h-[20rem] w-full my-4"  />
                        
                        </li>
                    </ul>
                    <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                        <p>
                            Ejemplos de herramientas para crear prototipos:
                        </p>
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-2">
                            <li className="mb-2">
                            <strong>Figma:</strong> Una herramienta basada en la web que permite
                            la creación de prototipos interactivos y colaborativos. Ideal para
                            diseñadores que buscan recibir feedback en tiempo real.
                            </li>
                            <li className="mb-2">
                            <strong>Axure:</strong> Proporciona un enfoque más robusto para el
                            diseño de prototipos, permitiendo la creación de interacciones
                            complejas y documentando requisitos de manera eficiente.
                            </li>
                        </ul>
                    </blockquote>
                    </section>
            
                    <br />
                    <section className="text-justify">
                    <h3 className="font-bold">Entrevistas y Talleres con Usuarios</h3>
                    <p>
                        Realizar entrevistas y talleres directamente con los usuarios finales
                        es otro método efectivo de validación. Este enfoque permite recoger
                        información valiosa sobre sus necesidades y expectativas, asegurando
                        que el desarrollo esté alineado con sus requerimientos.
                    </p>
                    <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li className="mb-2">
                        <strong>Validación Directa:</strong> A través de la interacción
                        directa, los usuarios pueden expresar sus necesidades, deseos y
                        preocupaciones sobre el sistema.
                        </li>
                        <li className="mb-2">
                        <strong>Obtención de Feedback Valioso:</strong> Las entrevistas y
                        talleres ofrecen una plataforma para que los usuarios compartan sus
                        experiencias, lo que ayuda a los desarrolladores a ajustar los
                        requisitos y las funcionalidades del sistema.
                        </li>
                    </ul>
                    <p>
                        Técnicas de entrevistas efectivas:
                    </p>
                    <ul style={{ listStyleType: "disc" }} className="pl-8 pt-2">
                        <li className="mb-2">
                        <strong>Preguntas Abiertas:</strong> Fomentan respuestas más
                        detalladas y enriquecen la conversación.
                        </li>
                        <li className="mb-2">
                        <strong>Técnica de la Pirámide Invertida:</strong> Comienza con
                        preguntas generales y luego se profundiza en aspectos específicos,
                        facilitando una conversación más natural y menos estructurada.
                        </li>
                    </ul>
                    <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                        <p>
                            Ejemplos de actas de reuniones con usuarios: Incluir un resumen de la
                            discusión, las decisiones tomadas, y las acciones pendientes. Las actas
                            deben ser claras y concisas, y enviadas a todos los participantes para
                            asegurar un seguimiento adecuado.
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
