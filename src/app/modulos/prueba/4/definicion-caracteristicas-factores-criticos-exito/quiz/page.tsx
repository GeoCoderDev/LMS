import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Qué son los Factores Críticos de Éxito (FCE)?",
      respuestas: [
        {
          texto:
            "Elementos secundarios que facilitan la gestión de un proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Condiciones esenciales para garantizar el éxito de un proyecto de software.",
          esCorrecta: true,
        },
        {
          texto: "Herramientas de desarrollo utilizadas en el proyecto.",
          esCorrecta: false,
        },
        {
          texto: "Requisitos opcionales que no afectan el éxito del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Por qué es importante identificar y gestionar los FCE en cada fase del proyecto?",
      respuestas: [
        {
          texto: "Para hacer más eficiente la fase de pruebas.",
          esCorrecta: false,
        },
        {
          texto:
            "Para asegurar que se cumplan los requisitos del cliente y se eviten riesgos.",
          esCorrecta: true,
        },
        {
          texto: "Para seleccionar la herramienta de desarrollo adecuada.",
          esCorrecta: false,
        },
        {
          texto: "Para reducir los costos del proyecto en la fase inicial.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de un factor técnico crítico de éxito en el desarrollo de software?",
      respuestas: [
        {
          texto: "Formación continua del equipo de trabajo.",
          esCorrecta: false,
        },
        {
          texto: "Herramientas de desarrollo utilizadas en el proyecto.",
          esCorrecta: true,
        },
        { texto: "Cultura organizacional en la empresa.", esCorrecta: false },
        { texto: "Satisfacción de los stakeholders.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de factor crítico de éxito está relacionado con la gestión del equipo y la capacitación?",
      respuestas: [
        { texto: "Factores Técnicos.", esCorrecta: false },
        { texto: "Factores Humanos.", esCorrecta: true },
        { texto: "Factores Organizacionales.", esCorrecta: false },
        { texto: "Factores Externos.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes factores organizacionales es esencial para el éxito de un proyecto de software?",
      respuestas: [
        { texto: "La metodología de desarrollo elegida.", esCorrecta: false },
        { texto: "La capacitación técnica del equipo.", esCorrecta: false },
        { texto: "La planificación y gestión de riesgos.", esCorrecta: true },
        {
          texto: "Las herramientas de software utilizadas.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de un factor crítico de éxito en un proyecto que involucra metodologías ágiles?",
      respuestas: [
        {
          texto:
            "El cumplimiento del presupuesto estrictamente definido desde el inicio.",
          esCorrecta: false,
        },
        {
          texto:
            "La flexibilidad para adaptarse a cambios y necesidades emergentes.",
          esCorrecta: true,
        },
        {
          texto:
            "La adopción de una tecnología específica sin considerar alternativas.",
          esCorrecta: false,
        },
        { texto: "El uso exclusivo de pruebas manuales.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cómo contribuye la cultura organizacional a los factores críticos de éxito en un proyecto de software?",
      respuestas: [
        { texto: "Solo ayuda a la reducción de costos.", esCorrecta: false },
        {
          texto:
            "Mejora la colaboración y el compromiso del equipo de desarrollo.",
          esCorrecta: true,
        },
        {
          texto: "Aumenta el uso de herramientas tecnológicas.",
          esCorrecta: false,
        },
        {
          texto: "Facilita la definición de los requisitos del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de factor crítico de éxito se relaciona con el cumplimiento de plazos y presupuestos en un proyecto de software?",
      respuestas: [
        { texto: "Factores Técnicos.", esCorrecta: false },
        { texto: "Factores Humanos.", esCorrecta: false },
        { texto: "Factores Organizacionales.", esCorrecta: true },
        { texto: "Factores Externos.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué ejemplo de un proyecto exitoso puede demostrar la importancia de identificar los FCE desde las primeras fases?",
      respuestas: [
        {
          texto:
            "Un proyecto que no planifica adecuadamente sus recursos y fracasa.",
          esCorrecta: false,
        },
        {
          texto:
            "Un proyecto que implementa cambios sin consultar a los stakeholders.",
          esCorrecta: false,
        },
        {
          texto:
            "Un proyecto que gestiona los riesgos y mantiene la comunicación fluida entre los equipos.",
          esCorrecta: true,
        },
        {
          texto: "Un proyecto que no realiza pruebas durante el desarrollo.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es el impacto de no identificar adecuadamente los FCE en las primeras fases de un proyecto de software?",
      respuestas: [
        {
          texto: "No afecta el proyecto si se identifican después.",
          esCorrecta: false,
        },
        {
          texto:
            "Puede llevar a sobrecostos, retrasos y una baja calidad del producto final.",
          esCorrecta: true,
        },
        {
          texto: "Solo afecta al equipo de desarrollo, no al cliente.",
          esCorrecta: false,
        },
        {
          texto:
            "Los FCE no son importantes si el equipo tiene experiencia en proyectos similares.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
