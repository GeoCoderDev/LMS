import { Subseccion } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  // Divide el pathname en segmentos para verificar su estructura
  const pathSegments = pathname.split("/").filter(Boolean); // Filtra segmentos vacíos

  // Verificar que sea una ruta de módulo de nivel sección (exactamente 3 segmentos: modulos/:numeroOrdenModulo/:sectionRoute)
  if (pathname.startsWith("/modulos") && pathSegments.length === 3) {
    try {
      // Construye la URL de la API y pasa el pathname como parámetro de consulta
      const apiUrl = `${origin}/api/subsecciones`;

      // Realiza el fetch a la API
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pathname }),
      });

      if (response.ok) {
        const subsecciones: Subseccion[] = await response.json();

        // Si el resultado contiene una subsección con numeroOrden = 1
        if (subsecciones && Array.isArray(subsecciones)) {
          const subseccionOrdenUno = subsecciones.find(
            (subseccion) => subseccion.numeroOrden === 1
          );

          // Redirigir solo si existe una subsección con numeroOrden = 1
          if (subseccionOrdenUno && pathname !== subseccionOrdenUno.ruta) {
            const newUrl = `${subseccionOrdenUno.ruta}`;
            console.log("Redirigiendo a:", newUrl);
            return NextResponse.redirect(new URL(newUrl, request.url));
          }
        }
      }
    } catch (error) {
      console.error("Error al hacer el fetch para subsecciones:", error);
    }
  }

  // Si no se cumple la condición, sigue con el flujo normal
  return NextResponse.next();
}

// Configuración de rutas en las que se ejecutará el middleware
export const config = {
  matcher: "/modulos/:path*", // Ajusta esta ruta según las rutas donde quieras que se ejecute el middleware
};
