// types.ts
export interface Respuesta {
  texto: string;
  esCorrecta: boolean;
}

export interface Pregunta {
  pregunta: string;
  respuestas: Respuesta[];
}

export interface QuizData {
  preguntas: Pregunta[];
  puntosPorPregunta: number;
  puntajeMaximo: number;
}
