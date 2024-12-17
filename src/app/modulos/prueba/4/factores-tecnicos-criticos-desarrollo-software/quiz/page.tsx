import Quiz from "@/components/shared/quiz/Quiz";
import { Pregunta } from "@/lib/quiz/interfaces";
import React from "react";
import { createQuizData } from "@/lib/quiz/createQuizData";

const page = () => {
  const preguntas: Pregunta[] = [
    {
      pregunta:
        "¿Por qué es importante seleccionar la arquitectura adecuada para un proyecto de software?",
      respuestas: [
        {
          texto:
            "Solo afecta el rendimiento de la aplicación en un solo dispositivo.",
          esCorrecta: false,
        },
        {
          texto: "Determina únicamente la estética del sistema.",
          esCorrecta: false,
        },
        {
          texto:
            "Afecta la escalabilidad, el rendimiento y la capacidad de mantenimiento del software.",
          esCorrecta: true,
        },
        {
          texto: "No tiene impacto significativo en el éxito del proyecto.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál de las siguientes es una ventaja de usar microservicios en lugar de arquitecturas monolíticas?",
      respuestas: [
        {
          texto: "Mayor complejidad en la gestión de la base de datos.",
          esCorrecta: false,
        },
        {
          texto:
            "Mejor escalabilidad y facilidad para implementar nuevas funcionalidades.",
          esCorrecta: true,
        },
        {
          texto:
            "Mayor dificultad en la implementación de pruebas automatizadas.",
          esCorrecta: false,
        },
        {
          texto: "Menor uso de recursos en la infraestructura del sistema.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "Al seleccionar tecnologías para un proyecto de software, ¿qué factor es más relevante considerar?",
      respuestas: [
        {
          texto: "Solo el costo de adquisición de las herramientas.",
          esCorrecta: false,
        },
        {
          texto: "La compatibilidad, facilidad de uso y soporte.",
          esCorrecta: true,
        },
        {
          texto: "La popularidad de las tecnologías en el mercado.",
          esCorrecta: false,
        },
        {
          texto: "El nivel de complejidad que añaden al sistema.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta se utiliza comúnmente en proyectos de software para el control de versiones?",
      respuestas: [
        { texto: "Docker.", esCorrecta: false },
        { texto: "Jenkins.", esCorrecta: false },
        { texto: "SonarQube.", esCorrecta: false },
        { texto: "Git.", esCorrecta: true },
      ],
    },
    {
      pregunta:
        "¿Cuál es la principal ventaja de usar herramientas de integración continua como Jenkins?",
      respuestas: [
        {
          texto: "Mejorar la estética de la interfaz de usuario.",
          esCorrecta: false,
        },
        {
          texto:
            "Automatizar la construcción, pruebas y despliegue del software para mejorar la eficiencia.",
          esCorrecta: true,
        },
        {
          texto: "Facilitar la creación de la documentación del proyecto.",
          esCorrecta: false,
        },
        {
          texto:
            "Reducir el uso de recursos de la infraestructura del servidor.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué se entiende por código limpio y mantenible en el contexto del desarrollo de software?",
      respuestas: [
        {
          texto: "Código que solo funciona una vez y no se modifica.",
          esCorrecta: false,
        },
        {
          texto:
            "Código que es legible, bien estructurado y fácil de modificar o extender en el futuro.",
          esCorrecta: true,
        },
        {
          texto:
            "Código que se escribe sin seguir ningún patrón o regla de codificación.",
          esCorrecta: false,
        },
        {
          texto: "Código que es optimizado para reducir su tamaño.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué es la refactorización continua en el desarrollo de software?",
      respuestas: [
        {
          texto:
            "El proceso de añadir nuevas funcionalidades sin modificar el código existente.",
          esCorrecta: false,
        },
        {
          texto:
            "La mejora constante del código para mantenerlo limpio y optimizado.",
          esCorrecta: true,
        },
        {
          texto:
            "El proceso de eliminar funciones que no son necesarias en el código.",
          esCorrecta: false,
        },
        {
          texto: "La corrección de errores sin revisar el resto del código.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Qué herramienta se utiliza para analizar estáticamente el código y detectar posibles errores o malas prácticas?",
      respuestas: [
        { texto: "Docker.", esCorrecta: false },
        { texto: "Jenkins.", esCorrecta: false },
        { texto: "ESLint.", esCorrecta: true },
        { texto: "SonarQube.", esCorrecta: false },
      ],
    },
    {
      pregunta:
        "¿Por qué es importante mantener la calidad del código a lo largo del tiempo en un proyecto de software?",
      respuestas: [
        {
          texto: "Para reducir el número de líneas de código.",
          esCorrecta: false,
        },
        {
          texto:
            "Para asegurar que el software sea escalable, fácil de mantener y de modificar a medida que crece.",
          esCorrecta: true,
        },
        {
          texto: "Para que el software consuma menos recursos del sistema.",
          esCorrecta: false,
        },
        {
          texto:
            "Para mejorar la velocidad de ejecución de la aplicación sin importar la legibilidad del código.",
          esCorrecta: false,
        },
      ],
    },
    {
      pregunta:
        "¿Cuál es un ejemplo de una empresa que ha logrado mantener la calidad de su código a lo largo del tiempo?",
      respuestas: [
        {
          texto:
            "Una empresa que no utiliza herramientas de análisis de código.",
          esCorrecta: false,
        },
        {
          texto:
            "Una empresa que realiza cambios constantes sin revisar el código existente.",
          esCorrecta: false,
        },
        {
          texto:
            "Una empresa que aplica prácticas como refactorización continua y revisiones de código.",
          esCorrecta: true,
        },
        {
          texto:
            "Una empresa que no utiliza pruebas automatizadas en su desarrollo.",
          esCorrecta: false,
        },
      ],
    },
  ];

  const quizData = createQuizData(preguntas, 10, 10);

  return <Quiz quiz={quizData} />;
};

export default page;
