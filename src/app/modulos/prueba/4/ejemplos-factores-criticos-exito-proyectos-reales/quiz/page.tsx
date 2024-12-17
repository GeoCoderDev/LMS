import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Qué factor fue clave para el éxito en el desarrollo de software en una empresa global?",
      respuestas: [
        {
          texto:
            "La correcta gestión de la calidad, el equipo y la planificación para cumplir con los plazos y el presupuesto.",
          esCorrecta: true,
        },
        {
          texto:
            "El uso de herramientas de control financiero sin importar el equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "La asignación de recursos ilimitados para evitar cualquier retraso.",
          esCorrecta: false,
        },
        {
          texto:
            "La exclusión de stakeholders durante el desarrollo del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cómo gestionaron la calidad, el equipo y la planificación en el caso de la empresa global para cumplir con los plazos y el presupuesto?",
      respuestas: [
        {
          texto:
            "No realizaron ninguna planificación formal, dejando todo a la improvisación.",
          esCorrecta: false,
        },
        {
          texto:
            "Implementaron una planificación detallada y un enfoque de gestión de calidad continuo.",
          esCorrecta: true,
        },
        {
          texto:
            "Se centraron únicamente en el desarrollo sin considerar la calidad.",
          esCorrecta: false,
        },
        {
          texto:
            "Utilizaron una metodología tradicional sin comunicación con el equipo.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué puede causar el fracaso de un proyecto debido a no identificar los factores críticos de éxito (FCE)?",
      respuestas: [
        {
          texto:
            "Uso de las mejores herramientas sin tener en cuenta el contexto del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "La falta de atención a los factores clave como la planificación, la comunicación y la gestión de riesgos.",
          esCorrecta: true,
        },
        {
          texto:
            "El enfoque exclusivo en la tecnología, ignorando el presupuesto y los plazos.",
          esCorrecta: false,
        },
        {
          texto:
            "Un enfoque excesivo en la gestión de riesgos sin evaluar la calidad del producto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes lecciones se pueden aprender de un proyecto que fracasó por no gestionar adecuadamente los FCE?",
      respuestas: [
        {
          texto:
            "La importancia de identificar y gestionar los factores críticos de éxito desde el inicio del proyecto.",
          esCorrecta: true,
        },
        {
          texto:
            "El uso exclusivo de metodologías ágiles sin considerar el equipo de trabajo.",
          esCorrecta: false,
        },
        {
          texto:
            "El hecho de que los plazos no son importantes siempre que se tenga un buen equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "La necesidad de centrarse únicamente en la calidad técnica, sin involucrar a los stakeholders.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué recomendación se hace para evitar los errores de un proyecto fallido por no identificar los FCE?",
      respuestas: [
        {
          texto:
            "No realizar ninguna revisión del proyecto durante su desarrollo.",
          esCorrecta: false,
        },
        {
          texto: "Ignorar las necesidades cambiantes del mercado.",
          esCorrecta: false,
        },
        {
          texto:
            "Identificar y priorizar los factores críticos de éxito antes de comenzar el proyecto.",
          esCorrecta: true,
        },
        {
          texto:
            "Contratar más personal para aumentar la velocidad del proyecto sin una planificación adecuada.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "En un proyecto que fracasó por no identificar los FCE, ¿qué aspecto de la gestión fue ignorado?",
      respuestas: [
        {
          texto: "La documentación técnica, pero se mantuvo la calidad.",
          esCorrecta: false,
        },
        {
          texto:
            "La utilización de tecnologías de punta sin considerar las habilidades del equipo.",
          esCorrecta: false,
        },
        {
          texto:
            "La gestión de riesgos y la comunicación con los stakeholders.",
          esCorrecta: true,
        },
        {
          texto: "El presupuesto, sin importar la calidad de los resultados.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué factor contribuyó al éxito de la empresa global en su proyecto de software?",
      respuestas: [
        {
          texto: "Uso exclusivo de una metodología tradicional.",
          esCorrecta: false,
        },
        {
          texto:
            "Un enfoque integrado de gestión de calidad, equipo y planificación.",
          esCorrecta: true,
        },
        {
          texto: "Solo un enfoque técnico, sin tener en cuenta otros factores.",
          esCorrecta: false,
        },
        {
          texto:
            "Excluir a los stakeholders del proceso de toma de decisiones.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué importancia tuvo la planificación en el caso de éxito de la empresa global en el desarrollo de software?",
      respuestas: [
        {
          texto:
            "Fue irrelevante, ya que el equipo manejó todos los problemas de forma reactiva.",
          esCorrecta: false,
        },
        {
          texto: "La planificación solo fue importante en la fase inicial.",
          esCorrecta: false,
        },
        {
          texto:
            "La planificación continua fue crucial para el cumplimiento de plazos y presupuesto.",
          esCorrecta: true,
        },
        {
          texto:
            "No se utilizó ninguna planificación formal durante el proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué ocurrió en el proyecto fallido al no identificar los FCE?",
      respuestas: [
        {
          texto:
            "El proyecto se completó antes de lo esperado, pero con baja calidad.",
          esCorrecta: false,
        },
        {
          texto:
            "El proyecto se completó dentro del presupuesto, pero con altos costos operativos.",
          esCorrecta: false,
        },
        {
          texto:
            "El proyecto sufrió retrasos significativos y sobrecostos debido a la falta de una gestión adecuada de los factores clave.",
          esCorrecta: true,
        },
        {
          texto:
            "El proyecto se completó con éxito, pero no se cumplió con las expectativas del cliente.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es la clave para evitar los fracasos como en el caso del proyecto fallido?",
      respuestas: [
        {
          texto: "Ignorar los plazos y centrarse solo en la calidad.",
          esCorrecta: false,
        },
        {
          texto:
            "Trabajar sin tener en cuenta el presupuesto, solo centrarse en la innovación.",
          esCorrecta: false,
        },
        {
          texto:
            "Identificar y gestionar los factores críticos de éxito de manera continua y adaptativa.",
          esCorrecta: true,
        },
        {
          texto:
            "Usar un enfoque exclusivamente ágil sin tener en cuenta otros factores.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
