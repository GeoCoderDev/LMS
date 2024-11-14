import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
    return (
        <PageInformation
            
            contentToRead={
                <>
                    <article className="-border-2 border-green-500">
                        <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
                        Proceso de Revisión Formal
                        </h2>
                
                        <p className="text-justify">
                        El proceso de revisión formal de los documentos de requisitos es una
                        actividad esencial en la verificación de un proyecto de software. Este
                        proceso permite detectar errores, inconsistencias o requisitos
                        incompletos antes de que se continúe con el desarrollo. A continuación,
                        se describen los pasos clave para organizar una revisión formal,
                        ejemplos de cómo estructurar las agendas y actas de las reuniones, y los
                        roles importantes dentro de este proceso.
                        </p>
                
                        <br />
                
                        <section className="text-justify">
                        <h3 className="font-bold">Planificación de la Revisión</h3>
                        <p>
                            La planificación es el primer paso crucial para llevar a cabo una
                            revisión formal exitosa. Durante esta fase, se organizan las reuniones
                            y se establece una agenda que cubra los objetivos principales de la
                            revisión, los documentos a revisar y los tiempos necesarios.
                        </p>
                        
                        <p>
                            <strong>Cómo organizar una revisión formal con stakeholders:</strong>
                        </p>
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                            <li>
                            <strong>Identificación de los stakeholders clave:</strong> Invita a
                            las personas que tienen un interés directo en los requisitos, como
                            los desarrolladores, testers, analistas de negocio, y representantes
                            del cliente.
                            </li>
                            <li>
                            <strong>Establecimiento de objetivos claros:</strong> Define los
                            aspectos específicos del documento que se revisarán (por ejemplo,
                            claridad, consistencia, completitud).
                            </li>
                            <li>
                            <strong>Preparación previa:</strong> Proporciona a todos los
                            participantes los documentos a revisar con suficiente antelación
                            para que puedan prepararse adecuadamente.
                            </li>
                        </ul>
                        </section>
                
                        <br />
                
                        <section className="text-justify">
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <h3 className="font-bold">Ejemplos de Agendas para una Revisión de Requisitos</h3>
                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                                <li>
                                <strong>Introducción (10 min):</strong> Breve resumen del documento
                                de requisitos a revisar y los objetivos de la reunión.
                                </li>
                                <li>
                                <strong>Discusión de los puntos críticos (30 min):</strong> Revisión
                                de las secciones del documento que requieren más atención, como
                                requisitos ambiguos o posibles conflictos.
                                </li>
                                <li>
                                <strong>Feedback y Recomendaciones (20 min):</strong> Los
                                participantes ofrecen sus observaciones y sugerencias de mejora.
                                </li>
                                <li>
                                <strong>Cierre y próximos pasos (10 min):</strong> Resumen de las
                                acciones a seguir y establecimiento de una fecha para la próxima
                                reunión, si es necesario.
                                </li>
                            </ul>
                        </blockquote>
                        </section>
                
                        <br />
                
                        <section className="text-justify">
                        <h3 className="font-bold">Roles en una Revisión Formal</h3>
                        <p>
                            Asignar los roles adecuados a los participantes es fundamental para
                            garantizar el éxito de la revisión. Cada rol tiene una función
                            específica que contribuye al proceso.
                        </p>
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                            <li>
                            <strong>Revisor:</strong> Se encarga de analizar el documento en
                            detalle y detectar posibles errores o áreas de mejora.
                            </li>
                            <li>
                            <strong>Moderador:</strong> Facilita la reunión, asegurándose de que
                            se sigan los tiempos establecidos en la agenda y de que todos los
                            participantes puedan aportar.
                            </li>
                            <li>
                            <strong>Redactor:</strong> Documenta los resultados de la revisión,
                            incluyendo los puntos discutidos, las observaciones, y los acuerdos
                            alcanzados.
                            </li>
                            <li>
                            <strong>Líder del Proyecto:</strong> Asegura que los cambios
                            solicitados sean implementados correctamente en las próximas
                            iteraciones del proyecto.
                            </li>
                        </ul>
                        </section>
                
                        <br />
                
                        <section className="text-justify">
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <h3 className="font-bold">Ejemplos de Actas de Revisión</h3>
                            <p>
                                Un acta de revisión formal generalmente incluye:
                            </p>
                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                                <li>Fecha y hora de la revisión.</li>
                                <li>Participantes (con sus roles asignados).</li>
                                <li>Resumen del documento revisado.</li>
                                <li>
                                Puntos críticos discutidos (inconsistencias, áreas de mejora,
                                requerimientos ambiguos).
                                </li>
                                <li>
                                Acciones a seguir (quién es responsable de hacer los cambios, fechas
                                límites).
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