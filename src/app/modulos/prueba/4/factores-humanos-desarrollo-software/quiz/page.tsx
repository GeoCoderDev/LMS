import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Por qué es importante que los desarrolladores estén capacitados y actualizados en tecnologías emergentes?",
      respuestas: [
        {
          texto: "Para mantenerlos ocupados y evitar que se aburran.",
          esCorrecta: false,
        },
        {
          texto: "Para reducir los costos operativos en el proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Para asegurar que el equipo pueda trabajar con las tecnologías más eficientes y mantenerse competitivo.",
          esCorrecta: true,
        },
        {
          texto:
            "Para cumplir con las normativas de la industria sin considerar el impacto en el proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué beneficios tiene implementar programas de capacitación continua y certificaciones en un equipo de desarrollo?",
      respuestas: [
        {
          texto: "Permiten que los desarrolladores trabajen menos horas.",
          esCorrecta: false,
        },
        {
          texto:
            "Aseguran que los desarrolladores se mantengan al día con las últimas tecnologías y mejores prácticas.",
          esCorrecta: true,
        },
        {
          texto: "Reducen la comunicación interna en el equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "Garantizan que los desarrolladores nunca cambien de equipo o empresa.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas de colaboración se utiliza comúnmente para mejorar la comunicación en equipos de desarrollo de software?",
      respuestas: [
        { texto: "Photoshop.", esCorrecta: false },
        { texto: "Slack.", esCorrecta: true },
        { texto: "Google Analytics.", esCorrecta: false },
        { texto: "Adobe Illustrator.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué es lo más importante para mejorar la colaboración entre desarrolladores, testers y gerentes de proyecto?",
      respuestas: [
        { texto: "Reducir el número de reuniones.", esCorrecta: false },
        {
          texto:
            "Dejar que cada uno trabaje de forma independiente sin interferencia.",
          esCorrecta: false,
        },
        {
          texto:
            "Establecer una comunicación clara y fluida a través de herramientas y técnicas adecuadas.",
          esCorrecta: true,
        },
        { texto: "Ignorar los comentarios de los testers.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de cómo la falta de comunicación afecta negativamente un proyecto de software?",
      respuestas: [
        {
          texto:
            "La implementación de nuevas funcionalidades de forma eficiente.",
          esCorrecta: false,
        },
        {
          texto:
            "El retraso en los plazos de entrega debido a malentendidos o falta de coordinación entre equipos.",
          esCorrecta: true,
        },
        {
          texto:
            "La creación de documentación detallada para cada etapa del proyecto.",
          esCorrecta: false,
        },
        {
          texto: "El aumento de la calidad en el software final.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Por qué es crucial contar con líderes de proyecto capacitados en metodologías ágiles?",
      respuestas: [
        {
          texto:
            "Para asegurarse de que los desarrolladores no tengan que aprender nuevas tecnologías.",
          esCorrecta: false,
        },
        {
          texto:
            "Para evitar la comunicación entre el equipo de desarrollo y el cliente.",
          esCorrecta: false,
        },
        {
          texto:
            "Para permitir que el equipo de desarrollo se adapte rápidamente a los cambios y mejore la eficiencia en la entrega del software.",
          esCorrecta: true,
        },
        {
          texto:
            "Para que el proyecto siga los procedimientos tradicionales de gestión de proyectos.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué técnicas son útiles para motivar a un equipo de desarrollo y gestionar conflictos?",
      respuestas: [
        { texto: "Ignorar las diferencias de opiniones.", esCorrecta: false },
        {
          texto: "Tomar decisiones unilaterales sin consultar al equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "Fomentar un ambiente de trabajo colaborativo, proporcionar retroalimentación positiva y gestionar los conflictos de manera constructiva.",
          esCorrecta: true,
        },
        {
          texto: "Dejar que el equipo trabaje sin ninguna estructura.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de un líder exitoso en proyectos de software?",
      respuestas: [
        {
          texto:
            "Un líder que toma todas las decisiones sin consultar al equipo.",
          esCorrecta: false,
        },
        {
          texto: "Un líder que nunca escucha las preocupaciones del equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "Un líder que aplica metodologías ágiles, motiva al equipo y resuelve conflictos de manera efectiva.",
          esCorrecta: true,
        },
        {
          texto:
            "Un líder que no realiza seguimiento a los avances del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cómo pueden las metodologías ágiles como Scrum y Kanban mejorar el trabajo del equipo de desarrollo?",
      respuestas: [
        {
          texto:
            "Ofrecen más tiempo para trabajar en tareas no relacionadas con el proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Mejoran la colaboración, flexibilidad y la capacidad de adaptación a cambios durante el desarrollo del proyecto.",
          esCorrecta: true,
        },
        {
          texto:
            "Reducen la necesidad de reuniones y coordinación dentro del equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "Se enfocan únicamente en las tareas individuales de los desarrolladores.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué es lo más importante en la gestión de proyectos de software en cuanto al liderazgo?",
      respuestas: [
        {
          texto: "Desarrollar el código lo más rápido posible.",
          esCorrecta: false,
        },
        {
          texto:
            "Dejar que el equipo trabaje sin directrices ni objetivos claros.",
          esCorrecta: false,
        },
        {
          texto:
            "Tener líderes capacitados que guíen al equipo, gestionen los recursos y mantengan la calidad del proyecto.",
          esCorrecta: true,
        },
        {
          texto:
            "Evitar cualquier tipo de comunicación entre los miembros del equipo para que trabajen de forma independiente.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
