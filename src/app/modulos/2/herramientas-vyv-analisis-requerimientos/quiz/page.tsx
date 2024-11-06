import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Cuál es la principal función de JIRA en la gestión de requisitos?",
      respuestas: [
        { texto: "Crear reportes financieros", esCorrecta: false },
        {
          texto: "Seguimiento y trazabilidad de los requisitos",
          esCorrecta: true,
        },
        { texto: "Desarrollo de código", esCorrecta: false },
        { texto: "Gestión de personal", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué beneficio tiene la integración de JIRA con Confluence?",
      respuestas: [
        { texto: "Mejorar el diseño gráfico del sistema", esCorrecta: false },
        {
          texto:
            "Facilitar la gestión de la verificación y validación de requisitos",
          esCorrecta: true,
        },
        { texto: "Aumentar la seguridad del sistema", esCorrecta: false },
        { texto: "Crear automáticamente planes de pruebas", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta se usa para la gestión avanzada de requisitos y trazabilidad?",
      respuestas: [
        { texto: "Trello", esCorrecta: false },
        { texto: "Google Docs", esCorrecta: false },
        { texto: "IBM DOORS", esCorrecta: true },
        { texto: "Slack", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de un proyecto que se puede gestionar con IBM DOORS?",
      respuestas: [
        { texto: "Proyecto de marketing", esCorrecta: false },
        {
          texto: "Proyecto de desarrollo de software crítico",
          esCorrecta: true,
        },
        { texto: "Proyecto de diseño web", esCorrecta: false },
        { texto: "Proyecto de entrenamiento físico", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes plataformas es comúnmente utilizada para la creación colaborativa de documentos de requerimientos?",
      respuestas: [
        { texto: "Photoshop", esCorrecta: false },
        { texto: "Google Docs", esCorrecta: true },
        { texto: "AutoCAD", esCorrecta: false },
        { texto: "TestRail", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta de colaboración es adecuada para gestionar documentos y flujos de trabajo en equipo?",
      respuestas: [
        { texto: "Microsoft SharePoint", esCorrecta: true },
        { texto: "WordPress", esCorrecta: false },
        { texto: "Notepad", esCorrecta: false },
        { texto: "Skype", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una herramienta diseñada específicamente para la revisión colaborativa de documentos?",
      respuestas: [
        { texto: "Excel", esCorrecta: false },
        { texto: "Asana", esCorrecta: false },
        { texto: "Grammarly", esCorrecta: false },
        { texto: "Figma", esCorrecta: true },
      ],
    },
    {
      pregunta:
        "¿Qué permite hacer Review Assistant durante la revisión de documentación?",
      respuestas: [
        { texto: "Diseñar interfaces de usuario", esCorrecta: false },
        {
          texto: "Facilitar la revisión colaborativa de documentos",
          esCorrecta: true,
        },
        { texto: "Crear gráficos avanzados", esCorrecta: false },
        { texto: "Analizar bases de datos", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es un ejemplo de flujo de trabajo en colaboración utilizando Google Docs?",
      respuestas: [
        { texto: "Crear documentos de código fuente", esCorrecta: false },
        {
          texto: "Redactar y comentar en tiempo real sobre los requisitos",
          esCorrecta: true,
        },
        { texto: "Administrar servidores", esCorrecta: false },
        { texto: "Diseñar bases de datos", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es un ejemplo de uso de herramientas de revisión en el contexto de verificación y validación documental?",
      respuestas: [
        { texto: "Crear planes de negocios", esCorrecta: false },
        {
          texto:
            "Revisar y corregir documentos de requisitos antes de su aprobación final",
          esCorrecta: true,
        },
        { texto: "Diseñar sistemas de seguridad", esCorrecta: false },
        { texto: "Realizar simulaciones de sistema", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
