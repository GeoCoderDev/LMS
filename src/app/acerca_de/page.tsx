import Mando from "@/components/icons/Mando";
import React from "react";

const AcercaDe = () => {
  return (
    <div className="bg-gray-50 text-gray-800 px-6 py-10 sm:px-12 lg:px-20">
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Acerca de este Mapa de Conocimiento
        </h1>

        <p className="text-lg leading-relaxed">
          Este mapa de conocimiento está diseñado para ser una guía estructurada
          e interactiva que facilite el aprendizaje de los conceptos esenciales
          de Ingeniería de Software. Ayuda a los usuarios a navegar por los
          módulos de manera lógica, comprendiendo las conexiones entre temas y
          su aplicación en el ciclo de vida del desarrollo de software.
        </p>
        <div className="w-full flex items-center justify-center">
          <Mando className="m-8 aspect-auto w-[11rem] md:w-[13rem]  lg:w-[15vw] animate__animated animate__rubberBand animate__infinite animate__delay-5s" color="rgb(26, 85, 212)"/>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Estructura del Mapa
        </h2>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Módulo 1:</strong> Calidad de Software
          </li>
          <li>
            <strong>Módulo 2:</strong> Verificación y Validación
          </li>
          <li>
            <strong>Módulo 3:</strong> Diseño de Sistemas
          </li>
          <li>
            <strong>Módulo 4:</strong> Factores Críticos de Éxito
          </li>
        </ul>
        <p className="mt-4 text-lg leading-relaxed">
          Cada módulo está dividido en secciones que abordan temas específicos,
          y cada tema está diseñado para ser accesible tanto en formato visual
          como por comandos de voz.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Interactividad y Accesibilidad
        </h2>
        <p className="text-lg leading-relaxed">
          Para garantizar una experiencia inclusiva, este sistema incorpora:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            <strong>Comandos de voz:</strong> Permiten navegar por los módulos y
            secciones sin necesidad de usar el teclado o mouse.
          </li>
          <li>
            <strong>MiniSidebar dinámico:</strong> Facilita el acceso a
            subsecciones relacionadas dentro de cada módulo.
          </li>
          <li>
            <strong>Contenido accesible:</strong> Diseñado para usuarios con
            discapacidades visuales, siguiendo buenas prácticas de accesibilidad
            web.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Beneficios del Mapa de Conocimiento
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Ayuda a visualizar la relación entre conceptos fundamentales de
            Ingeniería de Software.
          </li>
          <li>
            Sirve como una herramienta de referencia rápida para estudiantes y
            profesionales.
          </li>
          <li>
            Promueve una comprensión profunda y estructurada de los temas
            abordados.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500 mb-3">
          Objetivo Final
        </h2>
        <p className="text-lg leading-relaxed">
          El mapa busca empoderar a los usuarios para que puedan aplicar los
          conceptos de Ingeniería de Software en proyectos reales, desde la
          planificación hasta la ejecución, alineándose con las mejores
          prácticas de la industria.
        </p>
      </section>
    </div>
  );
};

export default AcercaDe;
