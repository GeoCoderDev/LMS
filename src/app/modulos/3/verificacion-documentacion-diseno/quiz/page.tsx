import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Qué técnica de verificación implica una revisión detallada de los diagramas y especificaciones del diseño?",
      respuestas: [
        { texto: "Pruebas Unitarias", esCorrecta: false },
        { texto: "Inspecciones Formales", esCorrecta: true },
        { texto: "Modelado UML", esCorrecta: false },
        { texto: "Simulación de Sistema", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Cuál de las siguientes herramientas es comúnmente utilizada en inspecciones formales de diseño?",
      respuestas: [
        { texto: "Photoshop", esCorrecta: false },
        { texto: "Enterprise Architect", esCorrecta: true },
        { texto: "Excel", esCorrecta: false },
        { texto: "Canva", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué es una matriz de trazabilidad en el contexto del diseño de sistemas?",
      respuestas: [
        { texto: "Un diagrama de flujo de trabajo", esCorrecta: false },
        {
          texto: "Un documento que muestra la relación entre los requisitos y los componentes de diseño",
          esCorrecta: true,
        },
        { texto: "Un esquema de estructura de datos", esCorrecta: false },
        { texto: "Una lista de pruebas unitarias", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué criterio de calidad asegura que el sistema esté dividido en módulos cohesivos?",
      respuestas: [
        { texto: "Acoplamiento", esCorrecta: false },
        { texto: "Modularidad", esCorrecta: true },
        { texto: "Escalabilidad", esCorrecta: false },
        { texto: "Trazabilidad", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Cuál es el objetivo principal de la revisión de trazabilidad en el diseño?",
      respuestas: [
        { texto: "Mejorar la estética del diseño", esCorrecta: false },
        {
          texto: "Asegurar que el diseño cubra todos los requisitos identificados previamente",
          esCorrecta: true,
        },
        { texto: "Seleccionar las herramientas de desarrollo", esCorrecta: false },
        { texto: "Crear un prototipo funcional", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué criterio de calidad busca minimizar la dependencia entre módulos?",
      respuestas: [
        { texto: "Acoplamiento", esCorrecta: true },
        { texto: "Reutilización", esCorrecta: false },
        { texto: "Escalabilidad", esCorrecta: false },
        { texto: "Modularidad", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Cuál de los siguientes estándares es utilizado para la especificación y documentación del diseño de software?",
      respuestas: [
        { texto: "ISO 9001", esCorrecta: false },
        { texto: "IEEE 1016", esCorrecta: true },
        { texto: "UML", esCorrecta: false },
        { texto: "SCRUM", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué norma proporciona directrices para la descripción de la arquitectura de sistemas?",
      respuestas: [
        { texto: "IEEE 830", esCorrecta: false },
        { texto: "ISO/IEC 42010", esCorrecta: true },
        { texto: "ISO/IEC 25010", esCorrecta: false },
        { texto: "CMMI", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué criterio de calidad se enfoca en que los componentes del sistema puedan ser utilizados en otras áreas del mismo?",
      respuestas: [
        { texto: "Escalabilidad", esCorrecta: false },
        { texto: "Modularidad", esCorrecta: false },
        { texto: "Reutilización", esCorrecta: true },
        { texto: "Trazabilidad", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué aspecto se revisa para asegurarse de que el diseño soporte futuras ampliaciones del sistema?",
      respuestas: [
        { texto: "Modularidad", esCorrecta: false },
        { texto: "Acoplamiento", esCorrecta: false },
        { texto: "Escalabilidad", esCorrecta: true },
        { texto: "Reutilización", esCorrecta: false },
      ],
    },
  ];
  
  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
