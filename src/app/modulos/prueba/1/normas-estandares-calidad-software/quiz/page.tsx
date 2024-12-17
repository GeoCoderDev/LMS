import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Cuál de las siguientes normas se centra en la gestión de la calidad en proyectos de software?",
      respuestas: [
        { texto: "ISO 9001", esCorrecta: false },
        { texto: "ISO/IEC 12207", esCorrecta: false },
        { texto: "IEEE 730", esCorrecta: false },
        { texto: "CMMI", esCorrecta: true },
      ],
    },
    {
      pregunta: "La norma ISO/IEC 12207 define procesos para:",
      respuestas: [
        { texto: "Evaluar la satisfacción del cliente", esCorrecta: false },
        { texto: "La gestión de riesgos", esCorrecta: false },
        { texto: "El ciclo de vida del software", esCorrecta: true },
        { texto: "La documentación de pruebas", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué aspecto no cubre la norma ISO/IEC 25010?",
      respuestas: [
        { texto: "Funcionalidad", esCorrecta: false },
        { texto: "Eficiencia", esCorrecta: false },
        { texto: "Seguridad", esCorrecta: false },
        { texto: "Documentación", esCorrecta: true },
      ],
    },
    {
      pregunta: "El estándar IEEE 730 se utiliza para:",
      respuestas: [
        {
          texto: "Definir la estructura de los planes de calidad de software",
          esCorrecta: true,
        },
        {
          texto: "Establecer prácticas de gestión de riesgos",
          esCorrecta: false,
        },
        { texto: "Documentar los casos de prueba", esCorrecta: false },
        { texto: "Evaluar la satisfacción del cliente", esCorrecta: false },
      ],
    },
    {
      pregunta: "¿Qué tipo de documentación especifica el IEEE 829?",
      respuestas: [
        { texto: "Planes de calidad", esCorrecta: false },
        { texto: "Planes de prueba", esCorrecta: true },
        { texto: "Requisitos de software", esCorrecta: false },
        { texto: "Informes de auditoría", esCorrecta: false },
      ],
    },
    {
      pregunta: "CMMI se utiliza principalmente para:",
      respuestas: [
        { texto: "Crear software ágil", esCorrecta: false },
        { texto: "Evaluar y mejorar la madurez de procesos", esCorrecta: true },
        { texto: "Planificar proyectos financieros", esCorrecta: false },
        { texto: "Documentar requisitos de usuario", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes características no se considera en la evaluación de calidad según ISO/IEC 25010?",
      respuestas: [
        { texto: "Usabilidad", esCorrecta: false },
        { texto: "Mantenibilidad", esCorrecta: false },
        { texto: "Costo", esCorrecta: true },
        { texto: "Portabilidad", esCorrecta: false },
      ],
    },
    {
      pregunta: "La norma ISO 9001 fomenta:",
      respuestas: [
        { texto: "La estandarización de procesos", esCorrecta: true },
        { texto: "La innovación en diseño", esCorrecta: false },
        { texto: "El aumento de costos en el desarrollo", esCorrecta: false },
        { texto: "La reducción de la documentación", esCorrecta: false },
      ],
    },
    {
      pregunta: "CMMI ayuda a las organizaciones a:",
      respuestas: [
        { texto: "Mejorar sus estándares financieros", esCorrecta: false },
        {
          texto: "Alcanzar niveles de eficacia y consistencia en sus procesos",
          esCorrecta: true,
        },
        { texto: "Minimizar la documentación necesaria", esCorrecta: false },
        { texto: "Eliminar las pruebas de software", esCorrecta: false },
      ],
    },
    {
      pregunta: "La norma ISO/IEC 25010 proporciona guías para:",
      respuestas: [
        { texto: "Crear manuales de usuario", esCorrecta: false },
        { texto: "Evaluar la calidad del software", esCorrecta: true },
        { texto: "Realizar auditorías internas", esCorrecta: false },
        { texto: "Gestionar recursos humanos", esCorrecta: false },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
