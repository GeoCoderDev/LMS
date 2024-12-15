import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function createSubseccion() {
  try {
    // Crear subsección con los datos proporcionados
    const subseccion = await prisma.subseccion.create({
      data: {
        ruta: "/modulos/1/origen-evolucion-ingenieria-software/importancia",
        titulo: "Importancia de la Ingeniería de Software",
        numeroOrden: 4,
        paraLeer: `
              Importancia de la Ingeniería de Software
              
              La ingeniería de software desempeña un papel crucial en garantizar la calidad y eficiencia en el desarrollo de aplicaciones. Esta disciplina no solo minimiza los errores y reduce los costos de producción, sino que también asegura la satisfacción del cliente al proporcionar productos confiables y adaptables. Un enfoque bien estructurado en la ingeniería de software permite a las empresas obtener una ventaja competitiva significativa al ofrecer soluciones que se mantienen actualizadas frente a las cambiantes demandas del mercado.
              
              Impacto en la Calidad y Eficiencia de los Proyectos
              
              La implementación de prácticas sólidas en ingeniería de software mejora significativamente la calidad de los proyectos, reduciendo defectos y aumentando la eficiencia en cada etapa del desarrollo. Además, asegura que los productos sean escalables y fáciles de mantener, permitiendo que las organizaciones respondan rápidamente a las nuevas necesidades de los usuarios.
              
              Análisis de las Ventajas Competitivas
              
              Una buena ingeniería de software proporciona a las empresas una ventaja estratégica al reducir el tiempo de desarrollo, optimizar recursos y mejorar la experiencia del usuario. Empresas líderes como Amazon han utilizado la ingeniería de software para optimizar sus operaciones y superar a la competencia, mientras que otras organizaciones han enfrentado graves consecuencias por no aplicar principios adecuados.
              
              Casos de Éxito y Fracaso en Ingeniería de Software
              
              Ejemplos como el sistema de gestión de operaciones de Amazon destacan cómo una ingeniería de software bien aplicada puede mejorar la productividad y garantizar la excelencia operativa. Por otro lado, casos como el fracaso del Mars Climate Orbiter, donde errores en la gestión del software llevaron a la pérdida de la misión, subrayan la importancia de un enfoque meticuloso en esta disciplina. Estas lecciones refuerzan la necesidad de priorizar la calidad en todos los aspectos del ciclo de vida del software.
              `,
        contenidoHtml: `<h2 className=" -sticky top-0 bg-white text-[1.75rem] font-semibold mb-2">
                        Importancia de la Ingeniería de Software
                    </h2>

                    <section className="mb-6">
                        <p className="text-black mb-4 text-justify">
                        La <strong>ingeniería de software</strong> desempeña un papel crucial
                        en garantizar la calidad y eficiencia en el desarrollo de aplicaciones.
                        Esta disciplina no solo minimiza los errores y reduce los costos de
                        producción, sino que también asegura la satisfacción del cliente al
                        proporcionar productos confiables y adaptables. Un enfoque bien
                        estructurado en la ingeniería de software permite a las empresas obtener
                        una ventaja competitiva significativa al ofrecer soluciones que se
                        mantienen actualizadas frente a las cambiantes demandas del mercado.
                        <img 
                            src="/images/png/modulo1/seccion1/importancia_is.jpg"
                            alt="Figura oriimportancia_is"
                            className=" object-contain h-[20rem] w-full my-4"  />
                        </p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                        Impacto en la Calidad y Eficiencia de los Proyectos
                        </h3>
                        <p className="text-black mb-4 text-justify">
                        La implementación de prácticas sólidas en ingeniería de software mejora
                        significativamente la calidad de los proyectos, reduciendo defectos y
                        aumentando la eficiencia en cada etapa del desarrollo. Además, asegura
                        que los productos sean escalables y fáciles de mantener, permitiendo que
                        las organizaciones respondan rápidamente a las nuevas necesidades de los
                        usuarios.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">
                        Análisis de las Ventajas Competitivas
                        </h3>
                        <p className="text-black mb-4 text-justify">
                        Una buena ingeniería de software proporciona a las empresas una ventaja
                        estratégica al reducir el tiempo de desarrollo, optimizar recursos y
                        mejorar la experiencia del usuario. Empresas líderes como Amazon han
                        utilizado la ingeniería de software para optimizar sus operaciones y
                        superar a la competencia, mientras que otras organizaciones han
                        enfrentado graves consecuencias por no aplicar principios adecuados.
                        </p>
                    </section>

                    <section className="mb-6">
                        <blockquote className="border-l-4 border-gray-400 pl-4 text-gray-700 italic mb-4">

                            <h3 className="text-xl font-semibold mb-2">
                            Casos de Éxito y Fracaso en Ingeniería de Software
                            </h3>
                            <p className="text-black mb-4 text-justify">
                            Ejemplos como el sistema de gestión de operaciones de <strong>Amazon</strong>
                            destacan cómo una ingeniería de software bien aplicada puede mejorar la
                            productividad y garantizar la excelencia operativa. Por otro lado, casos
                            como el fracaso del <strong>Mars Climate Orbiter</strong>, donde errores
                            en la gestión del software llevaron a la pérdida de la misión, subrayan
                            la importancia de un enfoque meticuloso en esta disciplina. Estas
                            lecciones refuerzan la necesidad de priorizar la calidad en todos los
                            aspectos del ciclo de vida del software.
                            <img 
                            src="/images/png/modulo1/seccion1/amazon-logo.png"
                            alt="Figura oriamazon-logo"
                            className=" object-contain h-[10rem] w-full my-4"  />
                            </p>
                        </blockquote>
                    </section>`,
        recursosComplementarios: [
          {
            url: "https://www.youtube.com/watch?v=IFhEQkvCJ9g",
            tipo: "VideoYoutube",
          },
        ],
        seccionId: "675e5c3f9d1760487a490f88", // Cambiar por el ID de la sección existente
      },
    });

    console.log("Subsección creada exitosamente:", subseccion);
  } catch (error) {
    console.error("Error al crear la subsección:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function crearSeccion() {
  try {
    // Crear el primer módulo
    const modulo1 = await prisma.seccion.create({
      data: {
        indice: "/modulos/1/calidad-software-conceptos-modelos-criterios",
        titulo: "Calidad de Software: Conceptos, Modelos y Criterios",
        moduloId: "675e5c3f9d1760487a490f87",
        numeroOrden: 2,
      },
    });

    console.log("Contenido migrado exitosamente:", modulo1);
  } catch (error) {
    console.error("Error al migrar contenido:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function crearModulo() {
  try {
    // Crear el primer módulo
    const modulo1 = await prisma.modulo.create({
      data: {
        indice: "/modulos/2",
        titulo:
          "Verificación y Validación de la Documentación del Análisis de Requerimientos",
        descripcion:
          "Descubre cómo la Verificación y Validación de la Documentación del Análisis de Requerimientos te ayuda a construir un software a prueba de fallos.",
        numeroOrden: 2,
      },
    });

    console.log("Contenido migrado exitosamente:", modulo1);
  } catch (error) {
    console.error("Error al migrar contenido:", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: NextRequest) {
  try {
    // crearModulo();
    crearSeccion();

    // Obtener el parámetro `id` de la URL si existe
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      // Si se proporciona `id`, obtener el módulo específico
      const modulo = await prisma.modulo.findUnique({
        where: { id },
        include: { secciones: true },
      });

      if (!modulo) {
        return NextResponse.json(
          { error: "Modulo not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(modulo, { status: 200 });
    }

    // Si no hay `id`, devolver todos los módulos
    const modulos = await prisma.modulo.findMany({
      include: { secciones: true },
    });

    return NextResponse.json(modulos, { status: 200 });
  } catch (error) {
    console.error("Error fetching modulos:", error);
    return NextResponse.json(
      { error: "Error fetching modulos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { indice, titulo, descripcion, numeroOrden } = await req.json();

    const modulo = await prisma.modulo.create({
      data: { indice, titulo, descripcion, numeroOrden },
    });

    return NextResponse.json(modulo, { status: 201 });
  } catch (error) {
    console.error("Error creating modulo:", error);
    return NextResponse.json(
      { error: "Error creating modulo" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await req.json();

    const updatedModulo = await prisma.modulo.update({
      where: { id },
      data,
    });

    return NextResponse.json(updatedModulo, { status: 200 });
  } catch (error) {
    console.error("Error updating modulo:", error);
    return NextResponse.json(
      { error: "Error updating modulo" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    await prisma.modulo.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Modulo deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting modulo:", error);
    return NextResponse.json(
      { error: "Error deleting modulo" },
      { status: 500 }
    );
  }
}
