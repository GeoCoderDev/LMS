import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
    return (
        <PageInformation
           
            contentToRead={
                <>
                    <article>
                        <h2 className="-sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
                            Herramientas de Colaboración y Documentación
                        </h2>

                        <p className="text-justify">
                            La colaboración efectiva es esencial para el desarrollo de requisitos
                            y la documentación en proyectos de software. A continuación, se
                            describen algunas herramientas populares que facilitan la creación,
                            revisión y gestión de documentos de requisitos.
                        </p>

                        <br />
                        <section>
                            <h3 className="font-bold">Google Docs</h3>
                            <p className="ml-2 mt-2 text-justify">
                            Google Docs es una plataforma de procesamiento de textos en línea que
                            permite la creación y edición colaborativa de documentos en tiempo
                            real. Es ideal para la redacción de requisitos, ya que múltiples
                            usuarios pueden trabajar en el mismo documento simultáneamente.
                            <img 
                                src="/images/png/modulo2/seccion5/Google-Docs.png"
                                alt="Figura de Gogle Docs"
                                className=" object-contain h-[7rem] w-full my-4"  />


                            </p>

                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4 text-justify">
                            <li className="mb-2">
                                <strong>Colaboración en Tiempo Real:</strong> Los usuarios pueden ver
                                los cambios de otros en tiempo real, lo que facilita la discusión y
                                la toma de decisiones.
                            </li>
                            <li className="mb-2">
                                <strong>Historial de Cambios:</strong> Permite a los equipos rastrear
                                las versiones anteriores del documento y restaurar cambios si es
                                necesario.
                            </li>
                            </ul>

                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">

                                <h4 className="font-bold ml-2">Ejemplo de Flujo de Trabajo:</h4>
                                <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4 text-justify">
                                <li>
                                    Un miembro del equipo redacta un documento inicial de requisitos en
                                    Google Docs.
                                </li>
                                <li>
                                    Otros miembros del equipo revisan el documento y agregan comentarios
                                    o sugerencias.
                                </li>
                                <li>
                                    Se lleva a cabo una reunión para discutir las sugerencias y se
                                    actualiza el documento según sea necesario.
                                </li>
                                </ul>
                            </blockquote>
                            
                        </section>

                        <br />
                        <section>
                            <h3 className="font-bold">Microsoft SharePoint</h3>
                            <p className="ml-2 mt-2 text-justify">
                            Microsoft SharePoint es una plataforma de colaboración que permite a
                            los equipos crear sitios web para compartir información y gestionar
                            contenido. Es especialmente útil para almacenar y organizar documentos
                            de requisitos.
                            <img 
                                src="/images/png/modulo2/seccion5/share-point.png"
                                alt="Figura de Share-point"
                                className=" object-contain h-[7rem] w-full my-4"  />

                            </p>

                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4 text-justify">
                            <li className="mb-2">
                                <strong>Almacenamiento Centralizado:</strong> Facilita el acceso a
                                documentos importantes y su gestión en un solo lugar.
                            </li>
                            <li className="mb-2 ">
                                <strong>Controles de Acceso:</strong> Permite establecer permisos
                                para diferentes usuarios, asegurando que solo las personas adecuadas
                                tengan acceso a información sensible.
                            </li>
                            </ul>
                            
                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                                <h4 className="font-bold ml-2">Ejemplo de Flujo de Trabajo:</h4>
                                <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4 text-justify">
                                <li>
                                    El equipo crea un sitio de SharePoint para el proyecto y carga
                                    todos los documentos de requisitos.
                                </li>
                                <li>
                                    Los miembros del equipo utilizan el sitio para acceder a los
                                    documentos y agregar comentarios o cambios.
                                </li>
                                <li>
                                    Las actualizaciones se notifican automáticamente a los usuarios
                                    relevantes, manteniendo a todos informados.
                                </li>
                                </ul>
                            </blockquote>
                        </section>

                        <br />
                        <section>
                            <h3 className="font-bold">Herramientas de Revisión</h3>
                            <p className="ml-2 mt-2 text-justify">
                            Las herramientas de revisión colaborativa son fundamentales para
                            garantizar la calidad de la documentación de requisitos. A
                            continuación se presentan dos herramientas populares:
                            </p>

                            <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4 text-justify">
                            <li className="mb-2">
                                <strong>Grammarly:</strong> Esta herramienta ayuda a mejorar la
                                gramática y el estilo de escritura en documentos. Permite a los
                                usuarios recibir sugerencias en tiempo real mientras escriben,
                                lo que contribuye a mejorar la claridad de los requisitos.
                                <img
                                src="/images/png/modulo2/seccion5/grammarly.png"
                                alt="Figura de grammarly"
                                className=" object-contain h-[7rem] w-full my-4"  />
                                
                            </li>
                            <li className="mb-2">
                                <strong>Review Assistant:</strong> Es una herramienta que facilita la
                                revisión de código y documentos en equipos. Permite a los usuarios
                                realizar comentarios y sugerencias directamente en los documentos,
                                centralizando el feedback.
                                <img 
                                src="/images/png/modulo2/seccion5/review-assistant.png"
                                alt="Figura de review-assistant"
                                className=" object-contain h-[18rem] w-full my-4"  />
                            </li>
                            </ul>

                            <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">
                                <h4 className="font-bold ml-3">Ejemplos de Uso en Revisiones Documentales:</h4>
                                <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4 text-justify">
                                <li>
                                    Revisión de Documentos de Requisitos: Usar Grammarly para asegurar
                                    que la redacción de los requisitos sea clara y sin errores
                                    gramaticales.
                                </li>
                                <li>
                                    Colaboración en Revisión de Código: Utilizar Review Assistant para
                                    obtener comentarios de los miembros del equipo sobre los requisitos
                                    funcionales durante el desarrollo.
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