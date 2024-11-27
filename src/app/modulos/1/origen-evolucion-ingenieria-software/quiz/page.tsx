import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿En qué década surgió la ingeniería de software?",
      respuestas: [
        { texto: "1950", esCorrecta: false },
        { texto: "1960", esCorrecta: true },
        { texto: "1970", esCorrecta: false },
        { texto: "1980", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué evento histórico resaltó la necesidad de la ingeniería de software?",
      respuestas: [
        { texto: "Creación de Internet", esCorrecta: false },
        { texto: "Crisis del Software en 1968", esCorrecta: true },
        { texto: "Proyecto Manhattan", esCorrecta: false },
        { texto: "Desarrollo de Microsoft", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "Antes de la ingeniería de software, ¿cómo se consideraba el desarrollo de software?",
      respuestas: [
        { texto: "Como una ciencia separada", esCorrecta: false },
        { texto: "Como parte de la ingeniería de hardware", esCorrecta: false },
        { texto: "Como una extensión de la programación", esCorrecta: true },
        { texto: "Como un proceso de manufactura", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué objetivos principales tiene la ingeniería de software?",
      respuestas: [
        { texto: "Desarrollar aplicaciones comerciales", esCorrecta: false },
        {
          texto: "Crear productos de calidad, escalables y mantenibles",
          esCorrecta: true,
        },
        { texto: "Reducir costos en hardware", esCorrecta: false },
        {
          texto: "Mejorar únicamente la estética del software",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál fue uno de los casos históricos que mostró la necesidad de mejorar el software?",
      respuestas: [
        { texto: "Desarrollo de Google", esCorrecta: false },
        { texto: "Proyecto Manhattan", esCorrecta: false },
        { texto: "Control de vuelo del cohete Apollo", esCorrecta: true },
        { texto: "Creación de Windows", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué principio es fundamental en los proyectos de ingeniería de software?",
      respuestas: [
        { texto: "Mantenimiento visual", esCorrecta: false },
        { texto: "Mejora continua", esCorrecta: true },
        { texto: "Externalización de servicios", esCorrecta: false },
        { texto: "Reducción de personal", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuáles son algunas características fundamentales en ingeniería de software?",
      respuestas: [
        {
          texto: "Escalabilidad, diseño visual y seguridad",
          esCorrecta: false,
        },
        { texto: "Estética, funcionalidad y velocidad", esCorrecta: false },
        { texto: "Fiabilidad, mantenibilidad y eficiencia", esCorrecta: true },
        { texto: "Sustentabilidad, adaptabilidad y costo", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué principios ayudan a crear software adaptable?",
      respuestas: [
        { texto: "Interoperabilidad y conectividad", esCorrecta: false },
        {
          texto: "Reusabilidad, modularidad y bajo acoplamiento",
          esCorrecta: true,
        },
        { texto: "Optimización y análisis de datos", esCorrecta: false },
        { texto: "Visibilidad y accesibilidad", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Por qué es importante la ingeniería de software en el desarrollo de aplicaciones?",
      respuestas: [
        {
          texto: "Porque mejora únicamente el diseño visual",
          esCorrecta: false,
        },
        {
          texto: "Porque reduce la dependencia de hardware",
          esCorrecta: false,
        },
        {
          texto:
            "Porque permite minimizar errores, reducir costos y asegurar satisfacción del cliente",
          esCorrecta: true,
        },
        {
          texto: "Porque solo mejora la velocidad de las aplicaciones",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué ejemplo de fracaso muestra las consecuencias de una mala gestión en ingeniería de software?",
      respuestas: [
        { texto: "Control de vuelo del cohete Apollo", esCorrecta: false },
        {
          texto: "Sistema de control de la sonda Mars Climate Orbiter",
          esCorrecta: true,
        },
        { texto: "Proyecto Manhattan", esCorrecta: false },
        { texto: "Desarrollo de Amazon", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
