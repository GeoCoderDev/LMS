import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Cuál es el objetivo principal de la revisión de requerimientos?",
      respuestas: [
        { texto: "Realizar pruebas de usuario", esCorrecta: false },
        {
          texto: "Detectar inconsistencias, ambigüedades y errores",
          esCorrecta: true,
        },
        { texto: "Documentar el código fuente", esCorrecta: false },
        { texto: "Definir el diseño del sistema", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una herramienta utilizada para revisiones de documentación?",
      respuestas: [
        { texto: "Microsoft Excel", esCorrecta: false },
        { texto: "Trello", esCorrecta: false },
        { texto: "Google Docs", esCorrecta: true },
        { texto: "Notepad", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de reporte se genera típicamente durante una revisión de requerimientos?",
      respuestas: [
        { texto: "Reporte de progreso", esCorrecta: false },
        { texto: "Reporte de hallazgos", esCorrecta: true },
        { texto: "Reporte de ventas", esCorrecta: false },
        { texto: "Reporte de satisfacción del cliente", esCorrecta: false },
      ],
    },
    {
      pregunta: "La trazabilidad de requerimientos asegura que:",
      respuestas: [
        {
          texto: "Todos los requisitos estén escritos en un solo documento",
          esCorrecta: false,
        },
        { texto: "No se realicen cambios en el proyecto", esCorrecta: false },
        { texto: "El software se desarrolle sin errores", esCorrecta: false },
        {
          texto:
            "Todos los requerimientos estén cubiertos a lo largo del ciclo de vida del proyecto",
          esCorrecta: true,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas es conocida por su capacidad de trazabilidad de requerimientos?",
      respuestas: [
        { texto: "JIRA", esCorrecta: true },
        { texto: "Photoshop", esCorrecta: false },
        { texto: "Slack", esCorrecta: false },
        { texto: "Visual Studio", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué criterio de calidad de los requerimientos se refiere a la ausencia de ambigüedades?",
      respuestas: [
        { texto: "Consistencia", esCorrecta: false },
        { texto: "Claridad", esCorrecta: true },
        { texto: "Completitud", esCorrecta: false },
        { texto: "Verificabilidad", esCorrecta: false },
      ],
    },
    {
      pregunta: "Un requerimiento es considerado completo si:",
      respuestas: [
        { texto: "Puede ser escrito en una sola frase", esCorrecta: false },
        {
          texto: "Todos los aspectos del sistema están cubiertos",
          esCorrecta: true,
        },
        {
          texto: "Se pueden realizar pruebas para verificarlo",
          esCorrecta: false,
        },
        { texto: "Se revisa por un solo analista", esCorrecta: false },
      ],
    },
    {
      pregunta: "La norma IEEE 830 se relaciona con:",
      respuestas: [
        { texto: "Pruebas de software", esCorrecta: false },
        { texto: "Especificación de requisitos de software", esCorrecta: true },
        { texto: "Gestión de proyectos", esCorrecta: false },
        { texto: "Diseño de interfaces de usuario", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué aspecto del modelo ISO/IEC 25010 se centra en la calidad de los requisitos no funcionales?",
      respuestas: [
        { texto: "Modelo de Calidad", esCorrecta: true },
        { texto: "Control de versiones", esCorrecta: false },
        { texto: "Gestión de cambios", esCorrecta: false },
        { texto: "Documentación de usuario", esCorrecta: false },
      ],
    },
    {
      pregunta: "Un ejemplo de un requerimiento mal escrito podría ser:",
      respuestas: [
        {
          texto:
            "El sistema debe permitir al usuario restablecer la contraseña en menos de 2 minutos.",
          esCorrecta: false,
        },
        { texto: "El sistema debería ser rápido.", esCorrecta: true },
        { texto: "La aplicación necesita ser mejor.", esCorrecta: true },
        { texto: "Los usuarios deben poder acceder.", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
