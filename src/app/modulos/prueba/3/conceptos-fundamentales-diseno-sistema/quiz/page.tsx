import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Qué es el Diseño de Alto Nivel en un sistema?",
      respuestas: [
        { texto: "La programación de cada módulo", esCorrecta: false },
        {
          texto: "La estructura de los componentes principales del sistema",
          esCorrecta: true,
        },
        {
          texto: "La elección de herramientas de desarrollo",
          esCorrecta: false,
        },
        {
          texto: "La planificación del equipo de desarrollo",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta: "¿Qué describe el Diseño de Bajo Nivel?",
      respuestas: [
        { texto: "La interfaz de usuario", esCorrecta: false },
        { texto: "El flujo de trabajo del proyecto", esCorrecta: false },
        {
          texto: "Las interacciones detalladas entre los módulos del sistema",
          esCorrecta: true,
        },
        {
          texto: "La estructura de almacenamiento en bases de datos",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un beneficio de la verificación y validación del diseño?",
      respuestas: [
        { texto: "Evitar errores y sobrecostos", esCorrecta: true },
        { texto: "Reducir el tiempo de programación", esCorrecta: false },
        { texto: "Mejorar la estética del diseño", esCorrecta: false },
        { texto: "Ampliar el alcance del proyecto", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Cuál es el propósito de la validación del diseño?",
      respuestas: [
        {
          texto:
            "Asegurar que el diseño cumple con los requerimientos especificados",
          esCorrecta: true,
        },
        { texto: "Mejorar la calidad visual del software", esCorrecta: false },
        { texto: "Desarrollar un prototipo", esCorrecta: false },
        { texto: "Seleccionar el equipo de trabajo", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes fases implica la identificación de los componentes clave del sistema?",
      respuestas: [
        { texto: "Diseño Físico", esCorrecta: false },
        { texto: "Pruebas Unitarias", esCorrecta: false },
        { texto: "Diseño Lógico", esCorrecta: false },
        { texto: "Diseño Conceptual", esCorrecta: true },
      ],
    },
    {
      pregunta:
        "¿Qué describe el Diseño Lógico en el proceso de diseño de sistemas?",
      respuestas: [
        {
          texto: "La elección de herramientas de desarrollo",
          esCorrecta: false,
        },
        { texto: "La estructura física del sistema", esCorrecta: false },
        {
          texto: "La representación gráfica y lógica del sistema",
          esCorrecta: true,
        },
        { texto: "La documentación del usuario final", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿En cuál de las fases se define la elección de tecnologías y bases de datos?",
      respuestas: [
        { texto: "Diseño Lógico", esCorrecta: false },
        { texto: "Diseño Físico", esCorrecta: true },
        { texto: "Diseño de Bajo Nivel", esCorrecta: false },
        { texto: "Implementación", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es una diferencia clave entre el diseño de software y la implementación?",
      respuestas: [
        { texto: "La implementación es anterior al diseño", esCorrecta: false },
        {
          texto: "El diseño solo se enfoca en la parte visual",
          esCorrecta: false,
        },
        {
          texto:
            "El diseño se enfoca en la planificación, mientras que la implementación se enfoca en la construcción",
          esCorrecta: true,
        },
        {
          texto: "La implementación no es necesaria en sistemas complejos",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una actividad en el Diseño Conceptual?",
      respuestas: [
        { texto: "Desarrollar el código del sistema", esCorrecta: false },
        {
          texto: "Identificar los componentes clave y su interacción",
          esCorrecta: true,
        },
        { texto: "Redactar el manual del usuario", esCorrecta: false },
        { texto: "Realizar pruebas de usabilidad", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál es la mejor práctica para evitar problemas en etapas avanzadas del proyecto?",
      respuestas: [
        { texto: "Omitir la fase de diseño", esCorrecta: false },
        { texto: "Contratar más programadores", esCorrecta: false },
        {
          texto: "Realizar una adecuada validación del diseño",
          esCorrecta: true,
        },
        {
          texto: "Cambiar frecuentemente el enfoque del proyecto",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
