import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Cuál de las siguientes opciones es un ejemplo de herramienta utilizada para simulaciones en diseño?",
      respuestas: [
        { texto: "Visual Studio", esCorrecta: false },
        { texto: "MATLAB", esCorrecta: true },
        { texto: "Word", esCorrecta: false },
        { texto: "Git", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué significa ATAM en el contexto de revisión de arquitectura?",
      respuestas: [
        {
          texto: "Análisis de Arquitectura para el Manejo de Sistemas",
          esCorrecta: false,
        },
        {
          texto: "Método de Análisis de Atributos de Arquitectura",
          esCorrecta: true,
        },
        {
          texto: "Aplicación de Técnicas Avanzadas de Modelado",
          esCorrecta: false,
        },
        {
          texto: "Ajuste Técnico para Arquitecturas Modulares",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de prueba asegura que los componentes del diseño interactúan correctamente?",
      respuestas: [
        { texto: "Pruebas Unitarias", esCorrecta: false },
        { texto: "Pruebas de Integración", esCorrecta: true },
        { texto: "Pruebas de Carga", esCorrecta: false },
        { texto: "Pruebas de Desempeño", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es una herramienta popular para realizar pruebas de integración?",
      respuestas: [
        { texto: "JMeter", esCorrecta: false },
        { texto: "NUnit", esCorrecta: false },
        { texto: "Figma", esCorrecta: false },
        { texto: "Jenkins", esCorrecta: true },
      ],
    },
    {
      pregunta:
        "¿Qué técnica se utiliza para analizar si una arquitectura cumple con los requisitos funcionales y no funcionales?",
      respuestas: [
        { texto: "Simulación", esCorrecta: false },
        { texto: "Pruebas de Carga", esCorrecta: false },
        { texto: "Revisión de Arquitectura", esCorrecta: true },
        { texto: "Diseño Ágil", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta es comúnmente utilizada para realizar pruebas de desempeño?",
      respuestas: [
        { texto: "MATLAB", esCorrecta: false },
        { texto: "JMeter", esCorrecta: true },
        { texto: "Simulink", esCorrecta: false },
        { texto: "GitHub", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué representan las pruebas de carga y estrés en el diseño?",
      respuestas: [
        {
          texto: "Verificación del funcionamiento básico del software.",
          esCorrecta: false,
        },
        {
          texto: "Evaluación de la documentación técnica del proyecto.",
          esCorrecta: false,
        },
        {
          texto: "Validación del comportamiento del sistema bajo alta demanda.",
          esCorrecta: true,
        },
        {
          texto: "Integración de los componentes del sistema.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta: "¿Cuál es una falla común en la validación de diseños?",
      respuestas: [
        { texto: "Uso de herramientas de simulación.", esCorrecta: false },
        {
          texto: "No revisar adecuadamente la arquitectura.",
          esCorrecta: true,
        },
        { texto: "Realizar pruebas de integración.", esCorrecta: false },
        { texto: "Documentar los requisitos del sistema.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es una mejor práctica para evitar fallos en la validación del diseño?",
      respuestas: [
        {
          texto: "Saltarse las revisiones de arquitectura.",
          esCorrecta: false,
        },
        {
          texto: "Realizar prototipos y simulaciones antes de implementar.",
          esCorrecta: true,
        },
        {
          texto: "Reducir la cantidad de pruebas de integración.",
          esCorrecta: false,
        },
        {
          texto: "Implementar directamente sin pruebas previas.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué significa validar el desempeño en el diseño de un sistema?",
      respuestas: [
        {
          texto: "Verificar que los componentes interactúan correctamente.",
          esCorrecta: false,
        },
        {
          texto:
            "Asegurarse de que el sistema cumple con los requisitos de rendimiento.",
          esCorrecta: true,
        },
        { texto: "Revisar el diseño gráfico del sistema.", esCorrecta: false },
        {
          texto: "Comparar la arquitectura con estándares de la industria.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué norma proporciona directrices para la descripción de la arquitectura de sistemas?",
      respuestas: [
        { texto: "IEEE 830", esCorrecta: false },
        { texto: "ISO/IEC 42010", esCorrecta: true },
        { texto: "ISO/IEC 25010", esCorrecta: false },
        { texto: "CMMI", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué criterio de calidad asegura que el sistema esté dividido en módulos cohesivos?",
      respuestas: [
        { texto: "Acoplamiento", esCorrecta: false },
        { texto: "Modularidad", esCorrecta: true },
        { texto: "Escalabilidad", esCorrecta: false },
        { texto: "Trazabilidad", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
