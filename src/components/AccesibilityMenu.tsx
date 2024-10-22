"use client";
import React from "react";
import Accesibility from "./icons/Accesibility";
import Microfono from "./icons/Microfono";

const AccesibilityMenu = () => {
  const iniciarComandosDeVoz = () => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      const synth = window.speechSynthesis;

      // Función para dar una bienvenida por voz
      const speak = (message: string, callback?: () => void) => {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = "es-ES"; // Español

        // Ejecutar el callback cuando la voz termine de hablar
        utterance.onend = () => {
          if (callback) callback();
        };

        synth.speak(utterance);
      };

      // Si la API de reconocimiento de voz no está disponible, notificar al usuario
      if (!SpeechRecognition) {
        speak(
          "Lo siento, tu navegador no es compatible con los comandos de voz."
        );
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = "es-ES";
      recognition.continuous = false;
      recognition.interimResults = false;

      // Función para manejar los comandos de voz reconocidos
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log("Comando de voz reconocido:", transcript);
        console.log(transcript);
        if (transcript.includes("buscar")) {
          // Indicar al usuario que diga el término de búsqueda
          speak("Por favor, di el término que deseas buscar.", () => {
            // Iniciar nueva sesión de reconocimiento para captar el término de búsqueda
            recognition.start();

            recognition.onresult = (event: any) => {
              const searchQuery = event.results[0][0].transcript.toLowerCase();
              console.log("Término de búsqueda:", searchQuery);

              // Poner el término de búsqueda en el input de tipo search
              const searchInput = document.getElementById(
                "buscador-global"
              ) as HTMLInputElement;
              if (searchInput) {
                searchInput.value = searchQuery;

                // Enviar el formulario de búsqueda
                const searchForm = document.getElementById(
                  "formulario-busqueda"
                ) as HTMLFormElement;
                if (searchForm) {
                  searchForm.addEventListener("submit", (event) => {
                    event.preventDefault(); // Evita que se recargue la página
                    console.log(
                      "Formulario enviado con la búsqueda:",
                      searchQuery
                    );
                  });

                  // Forzar el envío del formulario (sin recargar)
                  searchForm.dispatchEvent(new Event("submit"));
                }
              }
            };
          });
        } else if (
          transcript.includes("modulo 1") ||
          transcript.includes("módulo 1") ||
          transcript.includes("módulo1") ||
          transcript.includes("modulo1")
        ) {
          speak("Redirigiendo al Módulo 1.");
          window.location.href = "/modulos/1";
        } else if (
          transcript.includes("modulo 2") ||
          transcript.includes("módulo 2") ||
          transcript.includes("módulo2") ||
          transcript.includes("modulo2")
        ) {
          speak("Redirigiendo al Módulo 2.");
          window.location.href = "/modulos/2";
        } else if (
          transcript.includes("modulo 3") ||
          transcript.includes("módulo 3") ||
          transcript.includes("módulo3") ||
          transcript.includes("modulo3")
        ) {
          speak("Redirigiendo al Módulo 3.");
          window.location.href = "/modulos/3";
        } else if (
          transcript.includes("modulo 4") ||
          transcript.includes("módulo 4") ||
          transcript.includes("módulo4") ||
          transcript.includes("modulo4")
        ) {
          speak("Redirigiendo al Módulo 4.");
          window.location.href = "/modulos/4";
        } else {
          speak("Comando no reconocido. Intenta nuevamente.");
        }
      };

      // Manejar errores en el reconocimiento de voz
      recognition.onerror = (event: any) => {
        console.error("Error en el reconocimiento de voz:", event.error);
        speak("Ocurrió un error al reconocer tu voz. Intenta nuevamente.");
      };

      // Función para iniciar el reconocimiento de voz después de que el navegador termine de hablar
      const startVoiceRecognition = () => {
        speak(
          "Bienvenido. Puedes usar los comandos de voz: Buscar, Módulo 1, Módulo 2, Módulo 3, Módulo 4.",
          () => {
            recognition.start(); // Inicia la escucha de voz cuando el mensaje termina
          }
        );
      };

      startVoiceRecognition();
    }
  };

  return (
    <div className="z-[10] grid max-sm:w-screen min-h-min items-center fixed max-sm:bottom-0 max-sm:left-0 max-sm:h-[4dvh] max-sm:grid-rows-[4dvh_minmax(min-content,200px)] grid-cols-[1fr] max-sm:translate-y-[calc(100%-4dvh)] max-sm:hover:translate-y-0 sm:min-w-min sm:top-0 sm:right-0 sm:h-[100dvh] sm:translate-x-[calc(100%-3vw)] sm:hover:translate-x-[0] sm:grid-cols-[3vw_minmax(min-content,200px)] sm:grid-rows-[1fr]">
      <div className="relative -border-2 h-full flex flex-col min-w-min -min-h-min items-center justify-center translate-y-[1px] sm:translate-x-[1px] ">
        <div className="absolute border-black h-0 w-[50vw] max-sm:border-b-[4dvh] max-sm:[border-left:4vw_transparent_solid] max-sm:[border-right:4vw_transparent_solid] sm:[border-top:4vh_transparent_solid] sm:[border-bottom:4vh_transparent_solid] sm:h-[50vh] sm:w-0 sm:right-0 sm:top-0 sm:border-r-[3vw] sm:translate-y-[50%]"></div>
        <Accesibility
          className="h-[45%] sm:w-[45%] aspect-auto z-[10]"
          color="white"
          title=""
        />
      </div>
      <div className=" bg-black w-full h-full flex items-center justify-center flex-col p-4 hover text-white gap-4 cursor-pointer">
        <h2 className="text-[1.2rem] font-semibold">Comandos de Voz</h2>
        <Microfono
          onClick={iniciarComandosDeVoz}
          className="w-[8rem] "
          color="white"
          title=""
        />
      </div>
    </div>
  );
};

export default AccesibilityMenu;
