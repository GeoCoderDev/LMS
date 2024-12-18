import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // Verificar si la ruta comienza con /dashboard
  if (pathname.startsWith("/dashboard")) {
    // Verificar la existencia de las cookies
    const token = request.cookies.get("myToken");
    const role = request.cookies.get("myRole");

    // Si no existen las cookies, redirigir al login
    if (!token || !role || role.value !== "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Middleware de redirección de módulos (manteniendo la lógica anterior)
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathname.startsWith("/modulos") && pathSegments.length === 3) {
    try {
      const apiUrl = `${origin}/api/subsecciones`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pathname }),
      });

      if (response.ok) {
        const subsecciones = await response.json();

        if (subsecciones && Array.isArray(subsecciones)) {
          const subseccionOrdenUno = subsecciones.find(
            (subseccion) => subseccion.numeroOrden === 1
          );

          if (subseccionOrdenUno && pathname !== subseccionOrdenUno.ruta) {
            const newUrl = `${subseccionOrdenUno.ruta}`;
            return NextResponse.redirect(new URL(newUrl, request.url));
          }
        }
      }
    } catch (error) {
      console.error("Error al hacer el fetch para subsecciones:", error);
    }
  }

  // Si no se cumple ninguna condición, continúa con el flujo normal
  return NextResponse.next();
}

// Configuración de rutas para el middleware
export const config = {
  matcher: ["/dashboard/:path*", "/modulos/:path*"],
};
