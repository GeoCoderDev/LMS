import { Seccion } from "@/components/Seccion";
import { ModuleFeatures } from "@/lib/assets/ModuleFeatures";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Modulo = async ({
  params: { numeroOrdenModulo },
}: {
  params: { numeroOrdenModulo: number };
}) => {
  try {
    // Buscar información del módulo en la base de datos
    const moduleInfo = await prisma.modulo.findUnique({
      where: { numeroOrden: Number(numeroOrdenModulo) },
      include: { secciones: true },
    });

    // Si no se encuentra el módulo, mostrar mensaje adecuado
    if (!moduleInfo) {
      return (
        <span className="text-red-500 font-bold text-xl">
          No se encontró el módulo que buscas.
        </span>
      );
    }

    return (
      <>
        {/* Sección de encabezado del módulo */}
        <section
          style={{
            backgroundImage:
              ModuleFeatures[moduleInfo.numeroOrden - 1]
                .backgroundButtonGradient,
          }}
          className="bg-[#1E40AF] max-w-screen w-full h-min flex items-center justify-items-center justify-center flex-wrap text-white p-8 text-[1.5rem] gap-6"
        >
          <h2
            style={{
              viewTransitionName: `titulo-modulo-${moduleInfo.numeroOrden}`,
            }}
            className="justify-self-start font-bold"
          >
            {moduleInfo.titulo}
          </h2>
          {ModuleFeatures[moduleInfo.numeroOrden - 1].LogoModuloBlanco({
            className: "w-[8rem]",
            color: "white",
          })}
        </section>

        {/* Listado de secciones del módulo */}
        <div className="mt-8 flex max-w-screen w-[90vw] items-center justify-center gap-4 flex-wrap mb-10">
          {moduleInfo.secciones.length > 0 ? (
            moduleInfo.secciones.map(({ id, numeroOrden, titulo, indice }) => (
              <Seccion
                key={id}
                title={titulo}
                href={indice}
                numeroOrden={numeroOrden}
                moduleNumber={moduleInfo.numeroOrden}
              />
            ))
          ) : (
            <div className="flex flex-col items-center text-gray-500">
              <span className="text-lg font-semibold">
                Este módulo aún no cuenta con secciones.
              </span>
              <p className="text-sm">
                Estamos trabajando en ello. ¡Vuelve pronto!
              </p>
            </div>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error al cargar el módulo:", error);

    // Mostrar mensaje de error genérico
    return (
      <span className="text-red-500 font-bold text-xl">
        Ocurrió un error al cargar el módulo. Por favor, intenta nuevamente.
      </span>
    );
  }
};

export default Modulo;
