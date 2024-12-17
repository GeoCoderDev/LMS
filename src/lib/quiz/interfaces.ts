import { Pregunta } from "@prisma/client";

export interface QuizData {
  preguntas: Pregunta[];
  puntosPorPregunta: number;
  puntajeMaximo: number;
}
