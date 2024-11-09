import { useEffect } from "react";
import { Speaker } from "../utils/Speaker";

import { CommandVoicesStates } from "../interfaces/CommandVoicesState";

import {
  C_M_Home,
  C_M_Modulo_1,
  C_M_Modulo_2,
} from "../utils/voice/commands/CommandMenus";
import { useDispatch, useSelector } from "react-redux";
import { setCommandVoicesState } from "@/state/others/commandVoicesState";
import { RootState } from "../../store/index";
import { Listener } from "../utils/Listener";

const useCommandVoices = (route: string) => {
  const commandVoicesState = useSelector(
    (state: RootState) => state.others.commandVoicesState
  );

  const dispatch = useDispatch();
  console.log(commandVoicesState);

  const speaker = Speaker.getInstance();
  speaker.onStart = () => {
    dispatch(setCommandVoicesState({ value: CommandVoicesStates.SPEAKING }));
  };
  speaker.onStop = () => {
    dispatch(setCommandVoicesState({ value: CommandVoicesStates.IDLE }));
  };

  const listener = Listener.getInstance();

  listener.onStart = () => {
    dispatch(setCommandVoicesState({ value: CommandVoicesStates.LISTENING }));
  };
  listener.onStop = () => {
    if (commandVoicesState !== CommandVoicesStates.SPEAKING)
      dispatch(setCommandVoicesState({ value: CommandVoicesStates.IDLE }));
  };

  const stopListeningOrSpeaking = () => {
    if (commandVoicesState === CommandVoicesStates.SPEAKING) {
      speaker.stop(true);
    } else if (commandVoicesState === CommandVoicesStates.LISTENING) {
      listener.stop();
    }
  };

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

    const combinationKeys = (event: KeyboardEvent) => {
      // Detectar Ctrl + Alt + C (Anunciar comandos disponibles)
      if (event.ctrlKey && event.altKey && event.key === "c") {
        event.preventDefault();
        iniciarComandosDeVoz();
      }

      // Detectar Ctrl + Alt + X (Interrumpir el habla o reconocimiento del navegador)
      if (event.ctrlKey && event.altKey && event.key === "x") {
        event.preventDefault();

        stopListeningOrSpeaking();
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
    };

    window.document.addEventListener("keydown", combinationKeys);

    const stopSpeakerAndListener = () => {
      stopListeningOrSpeaking();
      stopListeningOrSpeaking();
    };

    window.addEventListener("beforeunload", stopSpeakerAndListener);

    return () => {
      window.document.removeEventListener("keydown", combinationKeys);
      window.removeEventListener("beforeunload", stopSpeakerAndListener);
    };
  }, [commandVoicesState]);

  // useEffect(() => {
  //   if (speaker.speaking) {
  //     dispatch(setCommandVoicesState({ value: CommandVoicesStates.SPEAKING }));
  //   } else {
  //     dispatch(setCommandVoicesState({ value: CommandVoicesStates.IDLE }));
  //   }
  //   console.log(speaker.speaking);
  // }, [speaker.speaking]);

  return { iniciarComandosDeVoz, commandVoicesState, stopListeningOrSpeaking };
};

export default useCommandVoices;
