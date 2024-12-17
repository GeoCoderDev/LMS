import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Cuál de las siguientes es una técnica efectiva para la planificación de proyectos de software?",
      respuestas: [
        {
          texto: "Uso exclusivo de correos electrónicos para comunicar tareas.",
          esCorrecta: false,
        },
        { texto: "Diagramas de Gantt, PERT y CPM.", esCorrecta: true },
        {
          texto: "Dejar que cada miembro del equipo elija sus propias tareas.",
          esCorrecta: false,
        },
        {
          texto: "Fijar plazos sin consultar al equipo de desarrollo.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cómo puede la planificación efectiva prevenir retrasos y sobrecostos en un proyecto de software?",
      respuestas: [
        {
          texto:
            "Permitiendo que el equipo trabaje sin restricciones de tiempo.",
          esCorrecta: false,
        },
        {
          texto:
            "Estableciendo plazos realistas, identificando tareas críticas y asignando recursos de manera eficiente.",
          esCorrecta: true,
        },
        {
          texto: "Aumentando el número de recursos humanos sin un plan claro.",
          esCorrecta: false,
        },
        {
          texto:
            "Dejando que el equipo defina sus propios plazos sin intervención del líder del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta de planificación de proyectos utiliza un enfoque visual para organizar tareas y plazos?",
      respuestas: [
        { texto: "Microsoft Excel.", esCorrecta: false },
        { texto: "Diagramas de dispersión.", esCorrecta: false },
        { texto: "Diagramas de Gantt.", esCorrecta: true },
        { texto: "Documentos de texto sin formato.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué es el análisis FODA y cómo se relaciona con la gestión de riesgos?",
      respuestas: [
        {
          texto:
            "Es una herramienta utilizada para analizar las oportunidades de marketing.",
          esCorrecta: false,
        },
        {
          texto:
            "Es un análisis de los factores que afectan la calidad del código.",
          esCorrecta: false,
        },
        {
          texto:
            "Es una herramienta utilizada para identificar fortalezas, oportunidades, debilidades y amenazas en un proyecto.",
          esCorrecta: true,
        },
        {
          texto:
            "Es un proceso para identificar nuevas tecnologías en el mercado.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué es un Risk Register en la gestión de riesgos de un proyecto de software?",
      respuestas: [
        { texto: "Un registro de tareas de desarrollo.", esCorrecta: false },
        {
          texto:
            "Un documento donde se identifican, evalúan y gestionan los riesgos potenciales del proyecto.",
          esCorrecta: true,
        },
        {
          texto:
            "Una herramienta para el control de versiones del código fuente.",
          esCorrecta: false,
        },
        {
          texto:
            "Un sistema para registrar el tiempo de desarrollo de cada tarea.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cómo pueden los proyectos de software evitar el fracaso relacionado con la gestión de riesgos?",
      respuestas: [
        {
          texto: "Ignorando los riesgos hasta que se presenten.",
          esCorrecta: false,
        },
        {
          texto:
            "Solucionando todos los problemas después de la entrega final.",
          esCorrecta: false,
        },
        {
          texto:
            "Identificando los riesgos desde el inicio y creando planes de mitigación adecuados.",
          esCorrecta: true,
        },
        {
          texto:
            "Asumiendo que no habrá problemas durante el desarrollo del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué es lo más importante en el control financiero de un proyecto de software?",
      respuestas: [
        {
          texto: "No hacer un seguimiento de los costos durante el proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Ajustar el presupuesto de manera constante y realizar un control efectivo de los gastos.",
          esCorrecta: true,
        },
        {
          texto: "Establecer un presupuesto único y no realizar ajustes.",
          esCorrecta: false,
        },
        {
          texto:
            "Gastar los fondos disponibles sin necesidad de justificar los gastos.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué herramientas de control financiero son comúnmente utilizadas en proyectos de desarrollo de software?",
      respuestas: [
        { texto: "Google Analytics y Microsoft Word.", esCorrecta: false },
        { texto: "MS Project y Oracle Primavera.", esCorrecta: true },
        { texto: "Notepad y Excel.", esCorrecta: false },
        { texto: "GitHub y Jira.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es la consecuencia de no gestionar adecuadamente el presupuesto de un proyecto de software?",
      respuestas: [
        {
          texto: "El proyecto se completará más rápido de lo esperado.",
          esCorrecta: false,
        },
        {
          texto:
            "El proyecto puede sobrepasar el presupuesto, lo que afectará la viabilidad y la rentabilidad del mismo.",
          esCorrecta: true,
        },
        {
          texto: "El equipo no necesitará reportar sus avances.",
          esCorrecta: false,
        },
        {
          texto:
            "El proyecto no necesitará revisión o ajustes durante su ejecución.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué ejemplo ilustra un caso de fracaso debido a una mala planificación y control del presupuesto?",
      respuestas: [
        {
          texto:
            "Un proyecto que aumenta sus funcionalidades sin incrementar el presupuesto.",
          esCorrecta: true,
        },
        {
          texto:
            "Un proyecto que sobrepasó su presupuesto y no pudo completar todas sus fases debido a la falta de control financiero.",
          esCorrecta: false,
        },
        {
          texto:
            "Un proyecto que finaliza antes de la fecha prevista gracias a una excelente planificación.",
          esCorrecta: false,
        },
        {
          texto: "Un proyecto que no tuvo retrasos ni sobrecostos.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
