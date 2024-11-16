import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Qué se debe hacer en la fase de planificación de una revisión formal?",
      respuestas: [
        {
          texto: "Reasignar los desarrolladores del proyecto",
          esCorrecta: false,
        },
        {
          texto: "Organizar una revisión formal con todos los stakeholders",
          esCorrecta: true,
        },
        { texto: "Probar la funcionalidad del sistema", esCorrecta: false },
        {
          texto: "Actualizar el diseño de la base de datos",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es uno de los ejemplos de documentos generados durante una revisión formal de requisitos?",
      respuestas: [
        { texto: "Informe de ventas", esCorrecta: false },
        { texto: "Acta de revisión de documentos", esCorrecta: true },
        { texto: "Reporte financiero", esCorrecta: false },
        { texto: "Manual del usuario", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un rol clave en una revisión formal de requisitos?",
      respuestas: [
        { texto: "Cliente", esCorrecta: false },
        { texto: "Moderador", esCorrecta: true },
        { texto: "Usuario final", esCorrecta: false },
        { texto: "Tester", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué rol en una revisión formal es responsable de documentar las discusiones y decisiones?",
      respuestas: [
        { texto: "Revisor", esCorrecta: false },
        { texto: "Moderador", esCorrecta: false },
        { texto: "Redactor", esCorrecta: true },
        { texto: "Cliente", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué debe contener un checklist para la revisión de la documentación de requisitos?",
      respuestas: [
        { texto: "Una lista de usuarios finales", esCorrecta: false },
        {
          texto:
            "Verificación de que todos los aspectos del sistema han sido cubiertos",
          esCorrecta: true,
        },
        { texto: "Nombres de los desarrolladores", esCorrecta: false },
        { texto: "Informes de gastos del proyecto", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas puede usarse para crear checklists automatizadas?",
      respuestas: [
        { texto: "Confluence", esCorrecta: true },
        { texto: "Slack", esCorrecta: false },
        { texto: "Excel", esCorrecta: false },
        { texto: "Figma", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué es importante registrar durante una revisión de la documentación de requisitos?",
      respuestas: [
        {
          texto: "El número de participantes en la reunión",
          esCorrecta: false,
        },
        { texto: "Los cambios en el código fuente", esCorrecta: false },
        {
          texto: "Los errores encontrados en la verificación y validación",
          esCorrecta: true,
        },
        { texto: "Las ventas mensuales", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de herramienta utilizada para gestionar correcciones de errores?",
      respuestas: [
        { texto: "Microsoft Word", esCorrecta: false },
        { texto: "JIRA", esCorrecta: true },
        { texto: "Google Drive", esCorrecta: false },
        { texto: "Zoom", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué acción es necesaria para asegurar que los errores detectados en una revisión formal sean corregidos adecuadamente?",
      respuestas: [
        { texto: "Enviar los errores al cliente", esCorrecta: false },
        {
          texto: "Hacer un seguimiento efectivo de las correcciones",
          esCorrecta: true,
        },
        { texto: "Cambiar el equipo de desarrollo", esCorrecta: false },
        { texto: "Reescribir toda la documentación", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de una plantilla útil para registrar errores en la documentación?",
      respuestas: [
        { texto: "Plantilla de diseño gráfico", esCorrecta: false },
        { texto: "Plantilla de registro de errores", esCorrecta: true },
        { texto: "Plantilla de plan de marketing", esCorrecta: false },
        { texto: "Plantilla de hoja de horas de trabajo", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
