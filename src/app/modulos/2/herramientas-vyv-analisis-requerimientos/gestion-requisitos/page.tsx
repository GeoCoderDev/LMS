import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
    return (
        <PageInformation
            sectionTitle=" Herramientas de Gestión de Requisitos"
            contentToRead={
                <>
                <article className="-border-2 border-green-500">
                    <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
                        Herramientas de Gestión de Requisitos
                    </h2>

                    <p className="text-justify">
                        La gestión de requisitos es un aspecto crucial en el desarrollo de
                        software, y contar con herramientas adecuadas puede facilitar
                        enormemente este proceso. A continuación, se describen algunas de las
                        herramientas más populares, incluyendo JIRA, Confluence e IBM DOORS,
                        junto con ejemplos de su uso en proyectos reales.
                    </p>

                    <br />
                    <section className="text-justify">
                        <h3 className="font-bold mb-5 ">JIRA y Confluence</h3>
                        <p>
                        <strong>JIRA</strong> es una herramienta de gestión de proyectos
                        ampliamente utilizada en el ámbito del desarrollo de software. Ofrece
                        funcionalidades para el seguimiento de tareas, gestión de incidencias
                        y, en particular, gestión de requisitos.
                        </p>

                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li className="mb-2">
                            <strong>Seguimiento de Requisitos:</strong> Permite crear tickets
                            para cada requisito, facilitando su seguimiento a lo largo del ciclo
                            de vida del desarrollo.
                        </li>
                        <li className="mb-2">
                            <strong>Trazabilidad:</strong> JIRA permite establecer relaciones
                            entre requisitos, tareas y pruebas, asegurando que cada aspecto esté
                            cubierto.
                        </li>
                        </ul>

                        <p>
                        <strong>Confluence</strong> es una herramienta de colaboración y
                        documentación que se integra fácilmente con JIRA. Juntos, JIRA y
                        Confluence permiten a los equipos gestionar requisitos de manera más
                        eficiente.

                        <img 
                            src="/images/png/modulo2/seccion5/jira-confluence.png"
                            alt="Figura de jira-concluence"
                            className=" object-contain h-[7rem] w-full my-4"  />

                        </p>

                        <h4 className="font-bold mb-3 mt-3">Integración JIRA-Confluence:</h4>
                        <p>
                        <strong>Documentación:</strong> Utiliza Confluence para documentar
                        requisitos y relacionarlos directamente con los tickets de JIRA.
                        </p>

                        <h4 className="font-bold">Tutorial para Integrar JIRA con Confluence:</h4>
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li>En JIRA, ve a Configuración del Proyecto.</li>
                        <li>Selecciona Integraciones y elige Confluence.</li>
                        <li>Autentica tu cuenta de Confluence.</li>
                        <li>
                            En Confluence, crea una página de requisitos y utiliza el macro de
                            JIRA para enlazar tickets relacionados.
                        </li>
                        </ul>
                        <p>
                        Esto permitirá que los equipos visualicen y gestionen requisitos y
                        tareas en un solo lugar.
                        </p>
                    </section>

                    <br />
                    <section className="text-justify">
                        <h3 className="font-bold mb-5">IBM DOORS</h3>
                        <p>
                        <strong>IBM DOORS</strong> es una herramienta avanzada de gestión de
                        requisitos que permite a los equipos de desarrollo gestionar de manera
                        efectiva requisitos complejos y de gran escala.
                        <img 
                            src="/images/png/modulo2/seccion5/ibm-doors.png"
                            alt="Figura de ibm-doors"
                            className=" object-contain h-[7rem] w-full my-4"  />
                        </p>

                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                        <li className="mb-2">
                            <strong>Gestión Avanzada de Requisitos:</strong> Proporciona
                            capacidades para el modelado, seguimiento y trazabilidad de
                            requisitos.
                        </li>
                        <li className="mb-2">
                            <strong>Colaboración:</strong> Permite que múltiples usuarios
                            colaboren en el desarrollo y revisión de requisitos en un entorno
                            centralizado.
                        </li>
                        </ul>

                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                            <h4 className="font-bold">Ejemplos de Proyectos Gestionados con DOORS:</h4>
                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                            <li>
                                <strong>Desarrollo de Software en el Sector Aeroespacial:</strong>{" "}
                                Proyectos complejos donde la trazabilidad y gestión de requisitos
                                son críticas para cumplir con regulaciones.
                            </li>
                            <li>
                                <strong>Sistemas de Salud:</strong> Implementaciones donde es
                                necesario rastrear y validar requisitos para garantizar la calidad y
                                cumplimiento de normativa.
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