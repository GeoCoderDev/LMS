"use client";
import React from "react";
import Accesibility from "./icons/Accesibility";
import Microfono from "./icons/Microfono";

// Definición del constructor de SpeechRecognition
interface SpeechRecognitionConstructor {
  new (): SpeechRecognition;
}

// Interfaz para la API de reconocimiento de voz
interface SpeechRecognition extends EventTarget {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
}

// Interfaz para el evento de resultado
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

// Interfaz para el evento de error
interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

// Interfaz extendida de Window
interface IWindow extends Window {
  SpeechRecognition: SpeechRecognitionConstructor;
  webkitSpeechRecognition: SpeechRecognitionConstructor;
}

const AccesibilityMenu = () => {
  const iniciarComandosDeVoz = () => {
    if (typeof window !== "undefined") {
      const windowWithSpeech = window as unknown as IWindow;
      const SpeechRecognition =
        windowWithSpeech.SpeechRecognition ||
        windowWithSpeech.webkitSpeechRecognition;
      const synth = window.speechSynthesis;

      const speak = (message: string, callback?: () => void) => {
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = "es-ES";

        utterance.onend = () => {
          if (callback) callback();
        };

        synth.speak(utterance);
      };

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

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log("Comando de voz reconocido:", transcript);

        if (transcript.includes("buscar")) {
          speak("Por favor, di el término que deseas buscar.", () => {
            recognition.start();

            recognition.onresult = (event: SpeechRecognitionEvent) => {
              const searchQuery = event.results[0][0].transcript.toLowerCase();
              console.log("Término de búsqueda:", searchQuery);

              const searchInput = document.getElementById(
                "buscador-global"
              ) as HTMLInputElement;
              
              if (searchInput) {
                searchInput.value = searchQuery;

                const searchForm = document.getElementById(
                  "formulario-busqueda"
                ) as HTMLFormElement;

                if (searchForm) {
                  searchForm.addEventListener("submit", (event) => {
                    event.preventDefault();
                    console.log(
                      "Formulario enviado con la búsqueda:",
                      searchQuery
                    );
                  });

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

      recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Error en el reconocimiento de voz:", event.error);
        speak("Ocurrió un error al reconocer tu voz. Intenta nuevamente.");
      };

      const startVoiceRecognition = () => {
        speak(
          "Bienvenido. Puedes usar los comandos de voz: Buscar, Módulo 1, Módulo 2, Módulo 3, Módulo 4.",
          () => {
            recognition.start();
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