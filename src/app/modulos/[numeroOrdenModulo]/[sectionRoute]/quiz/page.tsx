/* eslint-disable @typescript-eslint/no-explicit-any */
import Quiz from "@/components/shared/quiz/Quiz";
import { createQuizData } from "@/lib/quiz/createQuizData";
import { Pregunta, PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const SectionQuiz = async ({
  params: { numeroOrdenModulo, sectionRoute },
}: {
  params: {
    numeroOrdenModulo: number;
    sectionRoute: string;
  };
}) => {
  try {
    const pathname = `/modulos/${numeroOrdenModulo}/${sectionRoute}`;

    // Validar parámetros de entrada
    if (!numeroOrdenModulo || !sectionRoute) {
      throw new Error("Parámetros de ruta inválidos");
    }

    // Buscar módulo
    const modulo = await prisma.modulo.findUnique({
      where: { numeroOrden: Number(numeroOrdenModulo) },
    });

    if (!modulo) {
      notFound(); // Manejo de error de módulo no encontrado
    }

    // Buscar sección
    const seccion = await prisma.seccion.findUnique({
      where: { indice: pathname },
    });

    if (!seccion) {
      return (
        <div className="text-center text-red-600 p-4">
          <h2>Sección no encontrada</h2>
          <p>Lo sentimos, la sección que buscas no existe.</p>
        </div>
      );
    }

    // Obtener todas las preguntas de la sección
    const totalPreguntas = await prisma.pregunta.findMany({
      where: { seccionId: seccion.id },
    });

    // Verificar si hay preguntas
    if (totalPreguntas.length === 0) {
      return (
        <div className="text-center text-yellow-600 p-4">
          <h2>Sin preguntas disponibles</h2>
          <p>Aún no se han agregado preguntas para esta sección.</p>
        </div>
      );
    }

    // Barajar y seleccionar 10 preguntas
    const preguntasRandom: Pregunta[] = totalPreguntas
      .sort(() => 0.5 - Math.random()) // Mezclar aleatoriamente
      .slice(0, 10); // Tomar las primeras 10 preguntas

    // Crear datos del quiz
    const quizData = createQuizData(
      preguntasRandom,
      preguntasRandom.length,
      10
    );

    // Renderizar el quiz
    return <Quiz quiz={quizData} modulo={modulo} seccion={seccion} />;
  } catch (error) {
    console.error("Error general en SectionQuiz:", error);

    return (
      <div className="text-center text-red-600 p-4">
        <h2>Error Inesperado</h2>
        <p>
          Ocurrió un problema al cargar el cuestionario. Por favor, intente
          nuevamente.
        </p>
      </div>
    );
  }
};

export default SectionQuiz;
