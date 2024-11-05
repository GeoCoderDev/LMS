import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSubsecciones } from "./lib/assets/Contenido";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Usa getSubsecciones para obtener las subsecciones de la ruta actual
  const subsecciones = getSubsecciones(pathname);

  // Si hay subsecciones y la ruta actual no apunta a una subsección específica
  if (subsecciones.length > 0 && !pathname.endsWith(subsecciones[0].path)) {
    // Redirige a la primera subsección
    const newUrl = `${subsecciones[0].path}`;
    return NextResponse.redirect(new URL(newUrl, request.url));
  }

  return NextResponse.next();
}
