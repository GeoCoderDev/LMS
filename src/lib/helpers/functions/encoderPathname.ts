// Función para codificar el pathname (reemplaza los slashes con '@')
export function encodePathname(pathname: string): string {
  return pathname.replace(/\//g, "#"); // Reemplaza todos los '#' por '.'
}

// Función para decodificar el pathname (reemplaza '@' con '/')
export function decodePathname(encodedPathname: string): string {
  return encodedPathname.replace(/#/g, "/"); // Reemplaza todos los '#' por '/'
}
