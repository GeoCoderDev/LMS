import { useEffect, useState } from "react";
import { Speaker } from "../utils/commands/voice/Speaker";

import { CommandVoicesStates } from "../interfaces/CommandVoicesState";
import { CommandVoice } from "../utils/commands/voice/CommandVoice";
import { VoiceConverterActuator } from "../utils/commands/voice/VoiceConverter";
import { CommandMenu } from "../utils/commands/voice/CommandMenu";

const useCommandVoices = (route: string) => {
  const speaker = Speaker.getInstance();
  const [commandVoicesState, setCommandVoicesState] = useState(
    CommandVoicesStates.IDLE
  );

  const iniciarComandosDeVoz = () => {
    console.log("Ruta actual:", route);

    const C_V_Buscar = new CommandVoice(
      ["buscar"],
      () => {
        return new Promise((resolve) => {
          speaker.start("Por favor, di el término que deseas buscar.", () => {
            const voiceConverterActuator = new VoiceConverterActuator();

            voiceConverterActuator.start((transcript) => {
              const searchInput = document.getElementById(
                "buscador-global"
              ) as HTMLInputElement;

              if (searchInput) {
                searchInput.value = transcript;

                const searchForm = document.getElementById(
                  "formulario-busqueda"
                ) as HTMLFormElement;

                if (searchForm) {
                  searchForm.addEventListener("submit", (event) => {
                    event.preventDefault();
                    console.log(
                      "Formulario enviado con la búsqueda:",
                      transcript
                    );
                  });

                  searchForm.dispatchEvent(new Event("submit"));
                }
              }

              resolve(null);
            });
          });
        });
      },
      "Buscando..."
    );

    const C_V_Modulo_1 = new CommandVoice(
      ["módulo1", "modulo1", "módulo 1", "modulo 1", "módulo uno"],
      () => {
        return new Promise((resolve) => {
          speaker.start("Redirigiendo al Módulo 1.", () => resolve(null));
          window.location.href = "/modulos/1";
        });
      }
    );

    const C_V_Modulo_2 = new CommandVoice(
      ["módulo2", "modulo2", "módulo 2", "modulo 2", "módulo dos"],
      () => {
        return new Promise((resolve) => {
          speaker.start("Redirigiendo al Módulo 2.", () => resolve(null));
          window.location.href = "/modulos/2";
        });
      }
    );

    const C_V_Modulo_3 = new CommandVoice(
      ["módulo3", "modulo3", "módulo 3", "modulo 3", "módulo tres"],
      () => {
        return new Promise((resolve) => {
          speaker.start("Redirigiendo al Módulo 3.", () => resolve(null));
          window.location.href = "/modulos/3";
        });
      }
    );

    const C_V_Modulo_4 = new CommandVoice(
      ["módulo4", "modulo4", "módulo 4", "modulo 4", "módulo cuatro"],
      () => {
        return new Promise((resolve) => {
          speaker.start("Redirigiendo al Módulo 4.", () => resolve(null));
          window.location.href = "/modulos/4";
        });
      }
    );

    const C_M_Home = new CommandMenu(
      "Bienvenido. Puedes usar los comandos de voz: Buscar, Módulo 1, Módulo 2, Módulo 3, Módulo 4.",
      [C_V_Buscar, C_V_Modulo_1, C_V_Modulo_2, C_V_Modulo_3, C_V_Modulo_4]
    );

    C_M_Home.start();
  };

  useEffect(() => {
    if (!window) return;

    window.document.addEventListener("keydown", (event) => {
      // Detectar Ctrl + Alt + C (Anunciar comandos disponibles)
      if (event.ctrlKey && event.altKey && event.key === "c") {
        event.preventDefault();
        iniciarComandosDeVoz();
      }

      // Detectar Ctrl + Alt + X (Interrumpir el habla del navegador)
      if (event.ctrlKey && event.altKey && event.key === "x") {
        event.preventDefault();
        speaker.stop(true);
      }

      // Detectar Ctrl + Alt + S (Silenciar todo y volver a estado "idle")
      if (event.ctrlKey && event.altKey && event.key === "i") {
        event.preventDefault();
        speaker.stop();
      }

      // Detectar Ctrl + Alt + R (Repetir último mensaje de síntesis)
      if (event.ctrlKey && event.altKey && event.key === "r") {
        event.preventDefault();
      }
    });
  }, []);

  useEffect(() => {
    if (speaker.speaking) {
      setCommandVoicesState(CommandVoicesStates.SPEAKING);
    } else {
      setCommandVoicesState(CommandVoicesStates.IDLE);
    }
    console.log(speaker.speaking);
  }, [speaker.speaking]);

  return { iniciarComandosDeVoz, commandVoicesState };
};

export default useCommandVoices;
