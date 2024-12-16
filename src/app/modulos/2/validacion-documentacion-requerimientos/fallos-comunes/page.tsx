import PageInformation from "@/components/shared/PageInformation";
import React from "react";

const page = () => {
    return (
        <PageInformation
           
            contentToRead={
            <>
                <article>
                    <h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2 pt-2">
                    Ejemplos de Fallos Comunes en la Validación
                    </h2>
                
                    <p className="text-justify">
                    La validación de requisitos es una etapa crítica en el desarrollo de software. Cuando se lleva a cabo de manera insuficiente, puede dar lugar a proyectos fallidos. A continuación, se presentan ejemplos de fallos comunes en la validación, casos de proyectos que no lograron satisfacer las expectativas y algunas mejores prácticas para evitar estos errores.
                    </p>
                
                    <br />
                    <section className="text-justify">
                        <h3 className="font-bold">Casos de Proyectos Fallidos</h3>
                        
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                            <li className="mb-4">
                            <strong>Proyecto de Sistema de Gestión de Clientes (CRM):</strong>
                            <ul className="pl-8">
                                <li><strong>Descripción:</strong> Un equipo desarrolló un sistema CRM para una empresa sin realizar entrevistas adecuadas con los usuarios finales.</li>
                                <li><strong>Fallos:</strong> El sistema no incluía funcionalidades esenciales que los empleados necesitaban, como la gestión de contactos y la automatización de correos electrónicos.</li>
                                <li><strong>Resultado:</strong> La falta de validación resultó en un producto que fue rechazado por los usuarios, lo que llevó a un alto costo de re-desarrollo y pérdida de tiempo.</li>
                            </ul>
                            </li>
                
                            <li className="mb-4">
                            <strong>Aplicación de Comercio Electrónico:</strong>
                            <ul className="pl-8">
                                <li><strong>Descripción:</strong> Una empresa lanzó una nueva plataforma de comercio electrónico sin realizar pruebas de aceptación adecuadas.</li>
                                <li><strong>Fallos:</strong> No se validaron correctamente los requisitos de seguridad y experiencia del usuario, lo que llevó a vulnerabilidades que permitieron el acceso no autorizado a datos sensibles.</li>
                                <li><strong>Resultado:</strong> La plataforma sufrió una violación de seguridad significativa, afectando la reputación de la empresa y provocando pérdidas financieras.</li>
                            </ul>
                            </li>
                
                            <li className="mb-4">
                            <strong>Sistema de Control de Inventarios:</strong>
                            <ul className="pl-8">
                                <li><strong>Descripción:</strong> Un sistema de gestión de inventarios fue desarrollado sin la participación activa de los empleados del almacén.</li>
                                <li><strong>Fallos:</strong> Los requisitos no fueron validados con los usuarios, lo que llevó a una interfaz de usuario confusa y funcionalidades ineficientes.</li>
                                <li><strong>Resultado:</strong> Los empleados encontraron el sistema difícil de usar, lo que resultó en errores de inventario y una baja adopción del sistema.</li>
                            </ul>
                            </li>
                        </ul>
                    </section>
                
                    <br />
                    <section className="text-justify">
                        <h3 className="font-bold">Mejores Prácticas para Evitar Fallos en la Validación</h3>
                
                        <ul style={{ listStyleType: "disc" }} className="pl-8 pt-4">
                            <li className="mb-2">
                                <strong>Involucrar a los Usuarios Finales desde el Inicio:</strong> Asegúrate de incluir a los usuarios finales en el proceso de validación desde las primeras etapas del desarrollo. Realiza entrevistas, encuestas y talleres para comprender sus necesidades y expectativas.
                            </li>
                            <li className="mb-2">
                                <strong>Realizar Pruebas de Aceptación de Manera Exhaustiva:</strong> Diseña y ejecuta pruebas de aceptación que cubran todos los aspectos del sistema. Incluye pruebas funcionales, de rendimiento y de seguridad para garantizar que el producto cumpla con los requisitos.
                            </li>
                            <li className="mb-2">
                                <strong>Utilizar Prototipos y Simulaciones:</strong> Crea prototipos y utiliza simuladores para validar los requisitos en un entorno controlado. Esto permite identificar y corregir problemas antes de la implementación final.
                            </li>
                            <li className="mb-2">
                                <strong>Documentar y Revisar los Requisitos:</strong> Mantén una documentación clara y detallada de todos los requisitos. Realiza revisiones formales del documento de requisitos con todas las partes interesadas para asegurar que no se omita información clave.
                            </li>
                            <li className="mb-2">
                                <strong>Implementar un Proceso de Retroalimentación Continua:</strong> Establece un mecanismo de retroalimentación continuo donde los usuarios puedan reportar problemas y sugerencias incluso después de la entrega del producto. Esto ayuda a realizar ajustes y mejoras posteriores.
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