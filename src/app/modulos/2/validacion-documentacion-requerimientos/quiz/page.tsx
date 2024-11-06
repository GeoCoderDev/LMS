import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Qué objetivo tiene la validación de requisitos mediante prototipos?",
      respuestas: [
        { texto: "Aumentar la velocidad del desarrollo", esCorrecta: false },
        {
          texto:
            "Validar tempranamente que los requisitos cumplen con las expectativas del usuario",
          esCorrecta: true,
        },
        { texto: "Probar la escalabilidad del sistema", esCorrecta: false },
        { texto: "Reducir los costos del hardware", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un beneficio clave de usar prototipos en la validación?",
      respuestas: [
        { texto: "Aumenta la complejidad del diseño", esCorrecta: false },
        {
          texto: "Permite obtener retroalimentación temprana de los usuarios",
          esCorrecta: true,
        },
        {
          texto: "Reduce el número de errores en el código",
          esCorrecta: false,
        },
        { texto: "Asegura que el sistema sea más seguro", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas es comúnmente usada para la creación de prototipos?",
      respuestas: [
        { texto: "TestRail", esCorrecta: false },
        { texto: "Figma", esCorrecta: true },
        { texto: "JIRA", esCorrecta: false },
        { texto: "Selenium", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué técnica es comúnmente utilizada para validar los requisitos directamente con los usuarios finales?",
      respuestas: [
        { texto: "Entrevistas y talleres", esCorrecta: true },
        { texto: "Revisiones de código", esCorrecta: false },
        { texto: "Simulación de datos", esCorrecta: false },
        { texto: "Pruebas automatizadas", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una técnica efectiva durante las entrevistas con usuarios?",
      respuestas: [
        { texto: "Hacer preguntas cerradas y rápidas", esCorrecta: false },
        {
          texto:
            "Usar preguntas abiertas para obtener retroalimentación detallada",
          esCorrecta: true,
        },
        { texto: "Ignorar las sugerencias de los usuarios", esCorrecta: false },
        { texto: "Solo discutir problemas técnicos", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de documento se genera normalmente después de realizar una reunión con usuarios?",
      respuestas: [
        { texto: "Un reporte de errores", esCorrecta: false },
        { texto: "Un acta de reunión", esCorrecta: true },
        { texto: "Un manual de usuario", esCorrecta: false },
        { texto: "Un plan de pruebas", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué se asegura a través de las pruebas de aceptación?",
      respuestas: [
        {
          texto: "Que el sistema cumple con los requisitos del usuario",
          esCorrecta: true,
        },
        { texto: "Que el código es limpio y optimizado", esCorrecta: false },
        {
          texto: "Que no hay conflictos en el equipo de desarrollo",
          esCorrecta: false,
        },
        { texto: "Que se completó la fase de diseño", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes herramientas es utilizada para gestionar pruebas de validación?",
      respuestas: [
        { texto: "JIRA", esCorrecta: false },
        { texto: "GitHub", esCorrecta: false },
        { texto: "TestRail", esCorrecta: true },
        { texto: "Microsoft Word", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué se busca con la validación en ambientes de simulación?",
      respuestas: [
        {
          texto: "Simular el comportamiento del sistema en situaciones reales",
          esCorrecta: true,
        },
        {
          texto: "Probar solo los componentes de la interfaz gráfica",
          esCorrecta: false,
        },
        { texto: "Evitar el uso de pruebas funcionales", esCorrecta: false },
        { texto: "Acelerar la implementación del software", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de un fallo común en la validación de requerimientos?",
      respuestas: [
        {
          texto: "Documentar todas las pruebas de validación",
          esCorrecta: false,
        },
        {
          texto: "Hacer reuniones periódicas con los usuarios",
          esCorrecta: false,
        },
        {
          texto: "No validar correctamente los requisitos del usuario final",
          esCorrecta: true,
        },
        {
          texto: "Usar prototipos para validar las interfaces",
          esCorrecta: false,
        },
      ],
    },
  ];
  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
