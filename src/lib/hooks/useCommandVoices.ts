import { useEffect, useState } from "react";
import { Speaker } from "../utils/Speaker";

import { CommandVoicesStates } from "../interfaces/CommandVoicesState";

import {
  C_M_Home,
  C_M_Modulo_1,
  C_M_Modulo_2,
} from "../utils/voice/commands/CommandMenus";

const useCommandVoices = (route: string) => {
  const speaker = Speaker.getInstance();
  const [commandVoicesState, setCommandVoicesState] = useState(
    CommandVoicesStates.IDLE
  );

  const iniciarComandosDeVoz = () => {
    if (!window) return;
    console.log(route);

    if (route === "/" || route === "/modulos") {
      C_M_Home.start();
    } else if (route === "/modulos/1") {
      C_M_Modulo_1.start();
    } else if (route === "/modulos/2") {
      C_M_Modulo_2.start();
    } else if (route === "/modulos/3") {
      C_M_Modulo_1.start();
    } else if (route === "/modulos/4") {
      C_M_Modulo_1.start();
    }
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
