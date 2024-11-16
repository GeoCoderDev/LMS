import { SubseccionSearchResult } from "@/lib/assets/ContenidoHelpers";

export function generateSearchResultsSpeech(
  results: SubseccionSearchResult[]
): string {
  if (!results || results.length === 0) {
    return "No se encontraron resultados en la búsqueda. Puedes intentar con otros términos diciendo 'nueva búsqueda'";
  }

  const totalResults = results.length;
  let speechText = `Se encontraron ${totalResults} ${
    totalResults === 1 ? "resultado" : "resultados"
  }. `;

  // Añadimos instrucciones generales al principio
  speechText += `Para navegar por los resultados, puedes decir en cualquier momento 'ir a resultado' seguido del número del resultado que desees consultar. A continuación se presentan los resultados. `;

  // if (totalResults > 1) {
  //   speechText += `También puedes decir 'siguiente' para avanzar al siguiente resultado o 'anterior' para retroceder. `;
  // }

  results.forEach((result, index) => {
    // Número de resultado actual
    speechText += `Resultado ${index + 1} de ${totalResults}. `;

    // Primero mencionamos el título para dar contexto inmediato
    speechText += `${result.title}. `;

    // Añadimos la ubicación jerárquica
    speechText += `Ubicado en: ${result.breadcrumbText}. `;

    // Instrucciones específicas para este resultado
    speechText += `Para acceder a este contenido, di, 'resultado ${index + 1}'. `;

    // Si no es el último resultado, añadimos una pausa más larga
    if (index < results.length - 1) {
      speechText += "Pasando al siguiente resultado. ";
    }
  });

  // Añadimos un resumen final con instrucciones
  speechText += `Fin de los ${totalResults} resultados encontrados. `;
  speechText += `Recuerda que puedes navegar diciendo el número de cualquier resultado del 1 al ${totalResults}. `;
  speechText += `También puedes decir 'nueva búsqueda' para realizar otra consulta, o 'repetir resultados' para escuchar esta lista nuevamente.`;

  return speechText;
}
