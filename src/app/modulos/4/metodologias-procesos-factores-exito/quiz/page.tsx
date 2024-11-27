import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Cuál de las siguientes metodologías ágiles se enfoca en dividir el trabajo en iteraciones cortas y mantener una comunicación constante con el cliente?",
      respuestas: [
        { texto: "Waterfall.", esCorrecta: false },
        { texto: "Lean.", esCorrecta: false },
        { texto: "Scrum.", esCorrecta: true },
        { texto: "V-Model.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta es comúnmente utilizada en proyectos ágiles para la gestión de tareas y seguimiento de avances?",
      respuestas: [
        { texto: "Trello.", esCorrecta: true },
        { texto: "Photoshop.", esCorrecta: false },
        { texto: "Jira.", esCorrecta: true },
        { texto: "Notepad.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué beneficio clave proporcionan las metodologías ágiles como Scrum y Kanban?",
      respuestas: [
        {
          texto: "Establecer fechas de entrega fijas sin flexibilidad.",
          esCorrecta: false,
        },
        {
          texto:
            "Mejorar la productividad y la adaptabilidad en los proyectos mediante iteraciones cortas y retroalimentación constante.",
          esCorrecta: true,
        },
        {
          texto: "Evitar cualquier tipo de comunicación con el cliente.",
          esCorrecta: false,
        },
        {
          texto:
            "Reducir la cantidad de cambios durante el ciclo de vida del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué es la metodología Extreme Programming (XP) y cómo beneficia al desarrollo de software?",
      respuestas: [
        {
          texto:
            "Una metodología que limita la comunicación entre los desarrolladores.",
          esCorrecta: false,
        },
        {
          texto:
            "Un enfoque que promueve el trabajo en cascada sin cambios durante el proceso.",
          esCorrecta: false,
        },
        {
          texto:
            "Un enfoque que enfatiza la programación en pareja, pruebas continuas y refactorización constante.",
          esCorrecta: true,
        },
        {
          texto:
            "Un modelo que permite retrasar las entregas sin consecuencias.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es la norma ISO que proporciona un marco para la gestión de la calidad en el software?",
      respuestas: [
        { texto: "ISO/IEC 9001.", esCorrecta: true },
        { texto: "ISO/IEC 25010.", esCorrecta: false },
        { texto: "ISO 14001.", esCorrecta: false },
        { texto: "ISO 27001.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué práctica es esencial para asegurar la calidad del software durante todo su ciclo de vida?",
      respuestas: [
        {
          texto: "Realizar pruebas solo al final del desarrollo.",
          esCorrecta: false,
        },
        {
          texto:
            "Implementar pruebas continuas y automatizadas a lo largo del ciclo de vida del software.",
          esCorrecta: true,
        },
        {
          texto: "Evitar las pruebas para ahorrar tiempo de desarrollo.",
          esCorrecta: false,
        },
        {
          texto: "No realizar revisiones de código para acelerar el proceso.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué es un pipeline de CI/CD y cómo contribuye al éxito del proyecto?",
      respuestas: [
        {
          texto: "Un conjunto de herramientas para almacenar el código fuente.",
          esCorrecta: false,
        },
        {
          texto: "Un proceso que solo se realiza al final del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Un conjunto de prácticas que automatiza la integración y entrega continua, reduciendo el tiempo de lanzamiento de nuevas versiones.",
          esCorrecta: true,
        },
        {
          texto:
            "Una forma de gestionar proyectos sin interacción con herramientas de integración continua.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas es comúnmente utilizada para implementar la integración continua (CI)?",
      respuestas: [
        { texto: "GitHub.", esCorrecta: true },
        { texto: "Docker.", esCorrecta: false },
        { texto: "Jenkins.", esCorrecta: true },
        { texto: "Slack.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué ventaja clave ofrece la entrega continua (CD) en proyectos de desarrollo de software?",
      respuestas: [
        {
          texto: "Se evita realizar actualizaciones constantes del software.",
          esCorrecta: false,
        },
        {
          texto:
            "Permite lanzar nuevas versiones de software de manera rápida y eficiente, asegurando la calidad.",
          esCorrecta: true,
        },
        {
          texto: "Limita las actualizaciones a una vez al año.",
          esCorrecta: false,
        },
        {
          texto: "Elimina la necesidad de pruebas en el software.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué caso ilustra un ejemplo exitoso de la implementación de un proceso de integración continua?",
      respuestas: [
        {
          texto:
            "Una empresa que solo hace pruebas al final del ciclo de vida del software.",
          esCorrecta: false,
        },
        {
          texto:
            "Un proyecto que no realizó pruebas debido a la falta de tiempo.",
          esCorrecta: false,
        },
        {
          texto:
            "Una empresa que implementó pipelines de CI/CD con herramientas como GitLab y Jenkins, logrando lanzamientos rápidos y sin errores.",
          esCorrecta: true,
        },
        {
          texto:
            "Un proyecto que no utilizó ninguna herramienta de automatización y enfrentó retrasos continuos.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
