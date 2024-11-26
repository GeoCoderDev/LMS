import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Qué es una revisión formal del diseño?",
      respuestas: [
        {
          texto: "Un análisis informal realizado por un solo desarrollador.",
          esCorrecta: false,
        },
        {
          texto:
            "Una sesión organizada para revisar el diseño con equipos técnicos y de gestión.",
          esCorrecta: true,
        },
        {
          texto: "Un proceso de codificación directa del diseño.",
          esCorrecta: false,
        },
        {
          texto: "Un informe automatizado generado por herramientas de diseño.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un rol en una revisión formal de diseño?",
      respuestas: [
        { texto: "Tester automatizado", esCorrecta: false },
        { texto: "Moderador", esCorrecta: true },
        { texto: "Cliente final", esCorrecta: false },
        { texto: "Auditor externo", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es un ejemplo de herramienta para crear checklists de revisión?",
      respuestas: [
        { texto: "Photoshop", esCorrecta: false },
        { texto: "Trello", esCorrecta: true },
        { texto: "IntelliJ IDEA", esCorrecta: false },
        { texto: "Blender", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué se evalúa típicamente con un checklist en la revisión formal?",
      respuestas: [
        {
          texto: "Modularidad, rendimiento y seguridad del diseño.",
          esCorrecta: true,
        },
        { texto: "Estilo gráfico de los diagramas.", esCorrecta: false },
        { texto: "Uso de software libre en el diseño.", esCorrecta: false },
        { texto: "Velocidad de implementación.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué documento se genera para registrar los errores detectados en la revisión formal?",
      respuestas: [
        { texto: "Informe de ventas", esCorrecta: false },
        { texto: "Plantilla de defectos", esCorrecta: true },
        { texto: "Plan de implementación", esCorrecta: false },
        { texto: "Esquema de distribución", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de estas herramientas se utiliza para gestionar errores y su seguimiento?",
      respuestas: [
        { texto: "JIRA", esCorrecta: true },
        { texto: "Excel", esCorrecta: false },
        { texto: "Visual Studio Code", esCorrecta: false },
        { texto: "Tableau", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es el propósito de una lista de verificación (checklist) en una revisión formal?",
      respuestas: [
        { texto: "Ignorar los errores menores.", esCorrecta: false },
        {
          texto:
            "Asegurar que todos los aspectos críticos del diseño sean evaluados.",
          esCorrecta: true,
        },
        { texto: "Automatizar la corrección de defectos.", esCorrecta: false },
        { texto: "Generar gráficos de ventas.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta puede usarse para crear listas de verificación compartidas entre equipos?",
      respuestas: [
        { texto: "Google Sheets", esCorrecta: true },
        { texto: "AutoCAD", esCorrecta: false },
        { texto: "JIRA", esCorrecta: false },
        { texto: "Microsoft Paint", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué incluye típicamente un proceso de seguimiento de errores?",
      respuestas: [
        { texto: "Redacción de correos masivos.", esCorrecta: false },
        {
          texto: "Garantizar que los errores detectados sean corregidos.",
          esCorrecta: true,
        },
        { texto: "Publicar un informe de ventas.", esCorrecta: false },
        { texto: "Eliminar errores sin revisión.", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué es una plantilla de defectos en la revisión formal?",
      respuestas: [
        {
          texto: "Un formato para documentar errores encontrados en el diseño.",
          esCorrecta: true,
        },
        {
          texto: "Un diagrama para representar la arquitectura del sistema.",
          esCorrecta: false,
        },
        {
          texto: "Una lista de tareas asignadas al cliente.",
          esCorrecta: false,
        },
        {
          texto: "Una hoja para calcular costos del proyecto.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
