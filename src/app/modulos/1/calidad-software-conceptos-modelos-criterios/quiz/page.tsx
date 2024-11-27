import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Cómo se define la calidad en el software?",
      respuestas: [
        {
          texto: "Como la capacidad de generar informes detallados",
          esCorrecta: false,
        },
        {
          texto:
            "Como la capacidad de cumplir con las expectativas y necesidades del usuario",
          esCorrecta: true,
        },
        {
          texto: "Como la rapidez en la entrega de proyectos",
          esCorrecta: false,
        },
        {
          texto: "Como la capacidad de ajustarse a cualquier presupuesto",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué factores influyen en la percepción de calidad de un software?",
      respuestas: [
        {
          texto: "Funcionalidad, confiabilidad y facilidad de uso",
          esCorrecta: true,
        },
        {
          texto: "Rapidez, diseño gráfico y tamaño del software",
          esCorrecta: false,
        },
        { texto: "Costo de desarrollo y tiempo de entrega", esCorrecta: false },
        { texto: "Solo la confiabilidad", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un atributo esencial de calidad en el software?",
      respuestas: [
        { texto: "Publicidad y promoción", esCorrecta: false },
        { texto: "Costo bajo", esCorrecta: false },
        { texto: "Seguridad", esCorrecta: true },
        { texto: "Compatibilidad con hardware", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué modelo pionero se enfocaba en factores como la corrección, eficiencia y usabilidad?",
      respuestas: [
        { texto: "Modelo ISO 9001", esCorrecta: false },
        { texto: "Modelo de McCall", esCorrecta: true },
        { texto: "Modelo CMMI", esCorrecta: false },
        { texto: "Modelo de calidad de Apple", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es una diferencia entre los modelos clásicos y los modernos de calidad de software?",
      respuestas: [
        {
          texto:
            "Los modelos modernos se centran en la seguridad y experiencia del usuario",
          esCorrecta: true,
        },
        {
          texto:
            "Los modelos clásicos integraban principios de inteligencia artificial",
          esCorrecta: false,
        },
        {
          texto:
            "Los modelos clásicos incluían seguridad como el factor principal",
          esCorrecta: false,
        },
        { texto: "No hay diferencias significativas", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué norma establece un conjunto de atributos de calidad esenciales en el software?",
      respuestas: [
        { texto: "ISO/IEC 12207", esCorrecta: false },
        { texto: "ISO/IEC 25010", esCorrecta: true },
        { texto: "IEEE 830", esCorrecta: false },
        { texto: "CMMI", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuáles son algunos de los atributos de calidad incluidos en la norma ISO/IEC 25010?",
      respuestas: [
        { texto: "Funcionalidad, usabilidad y seguridad", esCorrecta: true },
        { texto: "Estética, durabilidad y portabilidad", esCorrecta: false },
        {
          texto: "Compatibilidad de hardware y rapidez de implementación",
          esCorrecta: false,
        },
        { texto: "Usabilidad, diseño gráfico y bajo costo", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Cómo ayudan los criterios de calidad a evaluar el software?",
      respuestas: [
        { texto: "Reduciendo el costo total del proyecto", esCorrecta: false },
        {
          texto:
            "Evaluando el rendimiento y adecuación en contextos de uso específicos",
          esCorrecta: true,
        },
        {
          texto: "Determinando la apariencia visual del software",
          esCorrecta: false,
        },
        {
          texto: "Mejorando únicamente la velocidad del software",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de sistema requiere altos niveles de seguridad y usabilidad según el texto?",
      respuestas: [
        { texto: "Aplicación de entretenimiento", esCorrecta: false },
        { texto: "Software de diseño gráfico", esCorrecta: false },
        { texto: "Sistema bancario en línea", esCorrecta: true },
        { texto: "Herramienta de creación de contenido", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿En qué se enfoca principalmente una aplicación educativa según los criterios de calidad?",
      respuestas: [
        { texto: "Seguridad de datos", esCorrecta: false },
        { texto: "Usabilidad y accesibilidad", esCorrecta: true },
        { texto: "Eficiencia energética", esCorrecta: false },
        { texto: "Soporte multilingüe", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
