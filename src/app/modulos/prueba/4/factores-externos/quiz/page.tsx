import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Por qué es importante mantener una buena comunicación con los stakeholders durante el desarrollo de un proyecto de software?",
      respuestas: [
        {
          texto:
            "Para asegurarse de que el proyecto se mantenga dentro del presupuesto sin importar la calidad.",
          esCorrecta: false,
        },
        {
          texto:
            "Para asegurar que el proyecto cumpla con las expectativas del cliente y evitar malentendidos.",
          esCorrecta: true,
        },
        {
          texto:
            "Para evitar cambios en los requisitos durante el ciclo de vida del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Para realizar entregas más rápidas sin la necesidad de pruebas.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es una técnica efectiva para gestionar las expectativas del cliente durante el desarrollo del software?",
      respuestas: [
        {
          texto: "Evitar cualquier tipo de cambio en el proyecto.",
          esCorrecta: false,
        },
        {
          texto: "Realizar un seguimiento solo al final del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Comunicación constante con el cliente para revisar avances y ajustar expectativas según sea necesario.",
          esCorrecta: true,
        },
        {
          texto:
            "Aceptar todos los cambios de los clientes sin evaluación de impacto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué puede ocurrir si no se tiene en cuenta la opinión de los stakeholders en un proyecto de software?",
      respuestas: [
        { texto: "El proyecto será completado más rápido.", esCorrecta: false },
        {
          texto: "El presupuesto y los plazos aumentarán considerablemente.",
          esCorrecta: true,
        },
        {
          texto:
            "El proyecto puede fracasar debido a malentendidos o expectativas no alineadas.",
          esCorrecta: true,
        },
        {
          texto: "La calidad del software se mejora sin necesidad de ajustes.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cómo los cambios en el mercado o la competencia pueden afectar un proyecto de software?",
      respuestas: [
        {
          texto:
            "Pueden obligar a realizar ajustes en las funcionalidades, tecnologías o enfoque del proyecto para mantenerse competitivo.",
          esCorrecta: true,
        },
        {
          texto: "No tienen impacto en el desarrollo del proyecto.",
          esCorrecta: false,
        },
        {
          texto: "Mejoran la calidad del software sin necesidad de ajustes.",
          esCorrecta: false,
        },
        {
          texto:
            "Los cambios en el mercado siempre retrasan el proyecto sin posibilidad de adaptación.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué análisis es crucial para entender las oportunidades y amenazas en un proyecto de software frente a la competencia?",
      respuestas: [
        { texto: "Análisis de costos internos.", esCorrecta: false },
        {
          texto:
            "Análisis FODA (Fortalezas, Oportunidades, Debilidades, Amenazas).",
          esCorrecta: true,
        },
        {
          texto:
            "Análisis competitivo para identificar cómo las tendencias del mercado afectan el proyecto.",
          esCorrecta: true,
        },
        {
          texto: "Análisis de mercado sin considerar a la competencia.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes empresas ajustó su proyecto de software debido a la competencia y las tendencias del mercado?",
      respuestas: [
        {
          texto:
            "Una empresa que ignoró las tendencias del mercado y mantuvo su producto igual.",
          esCorrecta: false,
        },
        {
          texto:
            "Una empresa que nunca actualizó sus herramientas de desarrollo.",
          esCorrecta: false,
        },
        {
          texto:
            "Una empresa que ajustó sus características de producto y enfoque gracias a un análisis competitivo exhaustivo.",
          esCorrecta: true,
        },
        {
          texto:
            "Una empresa que sólo lanzó su producto después de ver el éxito de la competencia sin adaptación.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes acciones puede llevar al fracaso de un proyecto de software debido a la falta de comunicación con los stakeholders?",
      respuestas: [
        {
          texto: "La comunicación efectiva y continua con los stakeholders.",
          esCorrecta: false,
        },
        {
          texto:
            "La asignación de recursos suficientes desde el inicio del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Ignorar las preocupaciones y feedback de los stakeholders durante el desarrollo.",
          esCorrecta: true,
        },
        {
          texto:
            "Implementar metodologías ágiles para mejorar la adaptabilidad.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de impacto tiene la competencia en el desarrollo de un proyecto de software?",
      respuestas: [
        {
          texto:
            "La competencia siempre mejora la calidad del software sin ajustes.",
          esCorrecta: false,
        },
        {
          texto:
            "La competencia puede forzar a un proyecto a ajustar sus características, tecnologías y tiempos de lanzamiento para mantenerse relevante.",
          esCorrecta: true,
        },
        {
          texto:
            "La competencia no tiene influencia en el desarrollo de software.",
          esCorrecta: false,
        },
        {
          texto:
            "La competencia obliga a duplicar el presupuesto sin realizar mejoras.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una buena práctica para mantener a los stakeholders satisfechos durante el desarrollo de un proyecto de software?",
      respuestas: [
        {
          texto: "No mostrar el progreso hasta el final del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Mantener a los stakeholders informados sobre los avances y ajustar las expectativas de forma regular.",
          esCorrecta: true,
        },
        {
          texto:
            "Evitar cambiar los requisitos aunque surjan nuevas necesidades.",
          esCorrecta: false,
        },
        {
          texto:
            "Limitar la participación de los stakeholders en las decisiones del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué podría hacer un proyecto para evitar los errores de los competidores y asegurarse de que está alineado con las tendencias del mercado?",
      respuestas: [
        {
          texto:
            "No investigar la competencia y centrarse solo en las propias ideas.",
          esCorrecta: false,
        },
        {
          texto:
            "Mantener el mismo enfoque durante todo el proyecto sin adaptación.",
          esCorrecta: false,
        },
        {
          texto:
            "Realizar un análisis competitivo constante y ajustar el desarrollo según los cambios del mercado.",
          esCorrecta: true,
        },
        {
          texto:
            "Ignorar las tendencias del mercado para centrarse en la funcionalidad original.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
