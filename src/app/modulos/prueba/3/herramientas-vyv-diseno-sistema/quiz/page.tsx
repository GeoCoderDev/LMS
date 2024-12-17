import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Qué significa UML?",
      respuestas: [
        { texto: "Unified Model Language", esCorrecta: false },
        { texto: "Unify Management Layout", esCorrecta: false },
        { texto: "Universal Modeling Language", esCorrecta: false },
        { texto: "Unified Modeling Language", esCorrecta: true },
      ],
    },
    {
      pregunta: "¿Cuál de estos diagramas es parte de UML?",
      respuestas: [
        { texto: "Diagrama de Gantt", esCorrecta: false },
        { texto: "Diagrama de Casos de Uso", esCorrecta: true },
        { texto: "Diagrama de Flujo", esCorrecta: false },
        { texto: "Diagrama de Red", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas se utiliza para crear y validar diagramas UML?",
      respuestas: [
        { texto: "Visual Paradigm", esCorrecta: true },
        { texto: "AutoCAD", esCorrecta: false },
        { texto: "Tableau", esCorrecta: false },
        { texto: "Postman", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta permite gestionar requisitos y trazabilidad avanzada?",
      respuestas: [
        { texto: "IBM Rational DOORS", esCorrecta: true },
        { texto: "Blender", esCorrecta: false },
        { texto: "Slack", esCorrecta: false },
        { texto: "Photoshop", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta es útil para la trazabilidad de diseño en combinación con Jira?",
      respuestas: [
        { texto: "Confluence", esCorrecta: true },
        { texto: "Trello", esCorrecta: false },
        { texto: "Notepad++", esCorrecta: false },
        { texto: "MATLAB", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué se puede modelar utilizando UML?",
      respuestas: [
        {
          texto: "Diagramas de flujo de datos, componentes, y despliegue.",
          esCorrecta: true,
        },
        {
          texto: "Imágenes gráficas y visualizaciones de datos.",
          esCorrecta: false,
        },
        { texto: "Planes de marketing y ventas.", esCorrecta: false },
        { texto: "Modelos de precios dinámicos.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de estas herramientas combina gestión de requisitos y validación del diseño?",
      respuestas: [
        { texto: "JIRA", esCorrecta: false },
        { texto: "Enterprise Architect", esCorrecta: true },
        { texto: "IBM Rational DOORS", esCorrecta: false },
        { texto: "Visual Studio Code", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es un uso común de Confluence en la gestión de proyectos?",
      respuestas: [
        { texto: "Crear diagramas UML.", esCorrecta: false },
        {
          texto:
            "Documentar y compartir información relacionada con el diseño.",
          esCorrecta: true,
        },
        { texto: "Diseñar interfaces gráficas.", esCorrecta: false },
        { texto: "Automatizar pruebas de rendimiento.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué ventaja tiene usar Visual Paradigm en el diseño del sistema?",
      respuestas: [
        {
          texto: "Integración de modelado UML con validación de diseño.",
          esCorrecta: true,
        },
        { texto: "Generación de informes financieros.", esCorrecta: false },
        { texto: "Automatización de código sin modelado.", esCorrecta: false },
        { texto: "Gestión de ventas.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué se valida principalmente al usar diagramas UML en un proyecto?",
      respuestas: [
        {
          texto: "La arquitectura del sistema, interacciones y flujo de datos.",
          esCorrecta: true,
        },
        { texto: "El costo estimado del sistema.", esCorrecta: false },
        {
          texto: "Las ventas estimadas del producto final.",
          esCorrecta: false,
        },
        { texto: "El diseño gráfico de las interfaces.", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
