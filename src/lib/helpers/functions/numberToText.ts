// Función para convertir número a texto
export function numberToText(num: number): string {
  const unidades = [
    "cero",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
  ];

  const decenas = ["", "", "veinti", "treinta"];

  if (num <= 15) {
    return unidades[num];
  } else if (num < 20) {
    return "dieci" + unidades[num - 10];
  } else if (num === 20) {
    return "veinte";
  } else if (num < 30) {
    return decenas[2] + unidades[num - 20].toLowerCase();
  } else if (num === 30) {
    return decenas[3];
  }

  return num.toString();
}
