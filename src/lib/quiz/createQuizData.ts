import { Pregunta } from "@prisma/client";
import { QuizData } from "./interfaces";

export const createQuizData = (
  preguntas: Pregunta[],
  limite: number,
  puntosPorPregunta: number = 10
): QuizData => {
  const preguntasAleatorias: Pregunta[] = [...preguntas]
    .sort(() => Math.random() - 0.5)
    .slice(0, limite);

  return {
    preguntas: preguntasAleatorias,
    puntosPorPregunta,
    puntajeMaximo: limite * puntosPorPregunta,
  };
};
