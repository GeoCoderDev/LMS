import { ModuloRepository } from "@/repositories/ModuloRepository";

export default async function getSubsecciones(currentPath: string) {
  // Extraer el número de módulo desde la ruta
  const moduleNumber = currentPath.split("/")[2];

  // Obtener el módulo usando el repositorio
  const modulo = await ModuloRepository.findByIndice(moduleNumber);

  if (!modulo) return [];

  // Buscar la sección que coincide con el path
  const seccion = modulo.secciones.find((seccion) =>
    currentPath.startsWith(seccion.indice)
  );

  // Si encuentra la sección, retornar sus subsecciones
  return seccion ? seccion.subsecciones : [];
}
