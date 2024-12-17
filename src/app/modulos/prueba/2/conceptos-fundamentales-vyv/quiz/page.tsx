import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData} from "@/lib/quiz/createQuizData";


const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta: "¿Qué es la verificación en el ciclo de vida del software?",
      respuestas: [
        {
          texto: "Probar que el sistema es estéticamente agradable",
          esCorrecta: false,
        },
        {
          texto:
            "Asegurarse de que el sistema cumple con los requisitos especificados",
          esCorrecta: true,
        },
        {
          texto: "Confirmar que los usuarios finales están contentos",
          esCorrecta: false,
        },
        {
          texto: "Aumentar el rendimiento del software",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es el propósito de la validación en el desarrollo de software?",
      respuestas: [
        {
          texto: "Asegurar que el código sea eficiente",
          esCorrecta: false,
        },
        {
          texto: "Comprobar que el sistema es rápido",
          esCorrecta: false,
        },
        {
          texto:
            "Confirmar que el sistema satisface las necesidades del usuario final",
          esCorrecta: true,
        },
        {
          texto: "Verificar la cantidad de líneas de código",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una diferencia clave entre verificación y validación?",
      respuestas: [
        {
          texto:
            "La verificación es realizada por el equipo de marketing, y la validación por el equipo de diseño",
          esCorrecta: false,
        },
        {
          texto:
            "La verificación asegura que el sistema cumple con los requisitos, mientras que la validación confirma que satisface las necesidades del usuario final",
          esCorrecta: true,
        },
        {
          texto:
            "La verificación se hace después del desarrollo y la validación antes",
          esCorrecta: false,
        },
        {
          texto:
            "La verificación siempre incluye pruebas funcionales, y la validación no",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Por qué es importante realizar V&V a lo largo del ciclo de vida del software?",
      respuestas: [
        {
          texto: "Para asegurar que el sistema sea más atractivo visualmente",
          esCorrecta: false,
        },
        {
          texto:
            "Para mejorar la calidad del software, prevenir errores y reducir los costos de desarrollo",
          esCorrecta: true,
        },
        {
          texto: "Para aumentar el número de desarrolladores en el equipo",
          esCorrecta: false,
        },
        {
          texto: "Para agilizar el proceso de implementación",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un impacto clave de la verificación y validación en los proyectos de software?",
      respuestas: [
        {
          texto: "Aumento de la complejidad del sistema",
          esCorrecta: false,
        },
        {
          texto: "Incremento del tiempo de desarrollo",
          esCorrecta: false,
        },
        {
          texto:
            "Reducción de errores y disminución de los costos de corrección",
          esCorrecta: true,
        },
        {
          texto: "Disminución de la productividad del equipo",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de los siguientes es un ejemplo de proyecto exitoso gracias a la correcta aplicación de V&V?",
      respuestas: [
        {
          texto: "Un proyecto con constantes errores en producción",
          esCorrecta: false,
        },
        {
          texto:
            "Un proyecto que redujo defectos antes del lanzamiento mediante revisiones y pruebas exhaustivas",
          esCorrecta: true,
        },
        {
          texto: "Un proyecto sin revisiones ni pruebas",
          esCorrecta: false,
        },
        {
          texto: "Un proyecto donde no se validaron los requisitos del cliente",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "En la fase de análisis de requerimientos, ¿por qué es importante validar los requisitos del cliente?",
      respuestas: [
        {
          texto: "Para mejorar el diseño de la interfaz",
          esCorrecta: false,
        },
        {
          texto:
            "Para asegurar que el sistema satisfaga las expectativas del cliente desde el principio",
          esCorrecta: true,
        },
        {
          texto: "Para optimizar el código desde el inicio",
          esCorrecta: false,
        },
        {
          texto: "Para acelerar la implementación",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué se busca asegurar durante la fase de diseño del sistema mediante la verificación?",
      respuestas: [
        {
          texto: "Que los diseñadores gráficos estén satisfechos",
          esCorrecta: false,
        },
        {
          texto: "Que los usuarios finales entiendan el sistema",
          esCorrecta: false,
        },
        {
          texto:
            "Que el diseño sea consistente con los requisitos establecidos",
          esCorrecta: true,
        },
        {
          texto: "Que el sistema sea fácil de usar",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué tipo de pruebas se realizan durante la fase de implementación y pruebas?",
      respuestas: [
        {
          texto: "Pruebas de marketing",
          esCorrecta: false,
        },
        {
          texto: "Solo pruebas no funcionales",
          esCorrecta: false,
        },
        {
          texto: "Pruebas funcionales y no funcionales",
          esCorrecta: true,
        },
        {
          texto: "Solo pruebas visuales",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es un beneficio clave de aplicar V&V durante la fase de pruebas?",
      respuestas: [
        {
          texto: "Aumentar el número de requisitos",
          esCorrecta: false,
        },
        {
          texto:
            "Identificar y corregir defectos antes de que el sistema sea lanzado al usuario final",
          esCorrecta: true,
        },
        {
          texto: "Reducir el número de pruebas requeridas",
          esCorrecta: false,
        },
        {
          texto: "Evitar la validación de los requisitos no funcionales",
          esCorrecta: false,
        },
      ],
    },
  ];


  const quizData = createQuizData(preguntas, 10, 10); 


  return (
    <Quiz
      quiz={quizData}
      
    />
  );
};

export default page;
