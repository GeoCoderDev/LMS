export function getUpperPath(currentPath: string, levels: number = 1): string {
  // Asegurarte de que el valor de niveles sea al menos 1
  const normalizedLevels = Math.max(levels, 1);

  // Eliminar cualquier slash final si existe
  const normalizedPath = currentPath.endsWith('/') 
    ? currentPath.slice(0, -1) 
    : currentPath;
  
  // Separar la ruta en segmentos y eliminar los últimos 'normalizedLevels' segmentos
  const segments = normalizedPath.split('/');
  return segments.slice(0, -normalizedLevels).join('/');
}
