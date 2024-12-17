import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Para qué se utilizan Trello y JIRA en la gestión de la calidad del software?",
      respuestas: [
        { texto: "Para la automatización de pruebas", esCorrecta: false },
        {
          texto: "Para la planificación y seguimiento de proyectos",
          esCorrecta: true,
        },
        { texto: "Para el control de versiones", esCorrecta: false },
        { texto: "Para la edición de código fuente", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué permiten gestionar Trello y JIRA de manera organizada?",
      respuestas: [
        { texto: "Documentación del software", esCorrecta: false },
        { texto: "Diseño visual del software", esCorrecta: false },
        { texto: "Tareas, incidentes y el backlog", esCorrecta: true },
        { texto: "Análisis de mercado", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué rol tienen GitHub y GitLab en el desarrollo de software?",
      respuestas: [
        {
          texto: "Control de versiones y colaboración en equipo",
          esCorrecta: true,
        },
        { texto: "Realización de pruebas automáticas", esCorrecta: false },
        { texto: "Creación de diagramas UML", esCorrecta: false },
        { texto: "Generación de documentación", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de sistemas integran GitHub y GitLab para asegurar la calidad del código?",
      respuestas: [
        { texto: "Sistemas de gestión de tareas", esCorrecta: false },
        { texto: "Sistemas de diseño visual", esCorrecta: false },
        { texto: "Sistemas de calidad y CI/CD", esCorrecta: true },
        { texto: "Sistemas de modelado gráfico", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una herramienta de modelamiento mencionada en el texto?",
      respuestas: [
        { texto: "SonarQube", esCorrecta: false },
        { texto: "UML", esCorrecta: true },
        { texto: "Selenium", esCorrecta: false },
        { texto: "GitHub", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué permite representar UML en el desarrollo de software?",
      respuestas: [
        {
          texto: "La estructura y comportamiento del sistema",
          esCorrecta: true,
        },
        { texto: "Los datos de los usuarios", esCorrecta: false },
        { texto: "Las tendencias de mercado", esCorrecta: false },
        { texto: "El flujo de trabajo", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué tipo de análisis realiza SonarQube?",
      respuestas: [
        { texto: "Análisis de requisitos", esCorrecta: false },
        { texto: "Análisis estático de código", esCorrecta: true },
        { texto: "Análisis de pruebas automatizadas", esCorrecta: false },
        { texto: "Análisis de mercado", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Para qué se utiliza Selenium en el desarrollo de software?",
      respuestas: [
        { texto: "Creación de diagramas UML", esCorrecta: false },
        { texto: "Automatización de pruebas de software", esCorrecta: true },
        { texto: "Gestión de versiones", esCorrecta: false },
        { texto: "Planificación de tareas", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué tipo de diagramas permite crear UML según el texto?",
      respuestas: [
        { texto: "Diagramas de flujo de mercado", esCorrecta: false },
        {
          texto: "Diagramas de clases, casos de uso y secuencia",
          esCorrecta: true,
        },
        { texto: "Diagramas de gestión de tareas", esCorrecta: false },
        { texto: "Diagramas de ventas", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué permite asegurar el uso de SonarQube y Selenium en el desarrollo de software?",
      respuestas: [
        { texto: "Solo la estética del software", esCorrecta: false },
        {
          texto:
            "Que el software funcione correctamente en diferentes escenarios y plataformas",
          esCorrecta: true,
        },
        {
          texto: "Que el software esté alineado con las tendencias de mercado",
          esCorrecta: false,
        },
        {
          texto: "Que el software cumpla con requisitos de hardware",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
