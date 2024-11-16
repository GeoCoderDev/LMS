import { useEffect } from "react";
import { Speaker } from "../utils/Speaker";

import { CommandVoicesStates } from "../interfaces/CommandVoicesState";

import {
  C_M_Home,
  C_M_Modulo_1,
  C_M_Modulo_2,
  C_M_Modulo_3,
  C_M_Modulo_4,
  C_M_Subsecciones,
} from "../utils/voice/commands/CommandMenus";
import { useDispatch, useSelector } from "react-redux";
import { setCommandVoicesState } from "@/state/others/commandVoicesState";
import { RootState } from "../../store/index";
import { Listener } from "../utils/Listener";
import { CommandVoice } from "../utils/CommandVoice";
import { setSearcherResults } from "@/state/others/searcherResults";
import { SubseccionSearchResult } from "../assets/ContenidoHelpers";

const useCommandVoices = (route: string) => {
  const commandVoicesState = useSelector(
    (state: RootState) => state.others.commandVoicesState
  );

  const dispatch = useDispatch();

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
    // CommandVoice.iterateNext = false;
    if (commandVoicesState !== CommandVoicesStates.SPEAKING)
      dispatch(setCommandVoicesState({ value: CommandVoicesStates.IDLE }));
  };

  CommandVoice.callback1 = (searcherResults: SubseccionSearchResult[]) => {
    dispatch(setSearcherResults({ value: searcherResults }));
  };

  const stopListeningOrSpeaking = () => {
    if (!window) return;
    if (commandVoicesState === CommandVoicesStates.SPEAKING) {
      speaker.stop(true);
    } else if (commandVoicesState === CommandVoicesStates.LISTENING) {
      listener.stop();
    }
  };

  const readMessage = (contentToRead: string) => {
    if (!window) return;
    speaker.start(contentToRead);
  };

  const iniciarComandosDeVoz = () => {
    if (!window) return;

    if (route === "/" || route === "/modulos") {
      C_M_Home.start();
    } else if (route === "/modulos/1") {
      C_M_Modulo_1.start();
    } else if (route === "/modulos/2") {
      C_M_Modulo_2.start();
    } else if (route === "/modulos/3") {
      C_M_Modulo_3.start();
    } else if (route === "/modulos/4") {
      C_M_Modulo_4.start();
    } else if (route.split("/").length === 5 && route.startsWith("/modulos/")) {
      C_M_Subsecciones.start(route);
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

  return {
    iniciarComandosDeVoz,
    commandVoicesState,
    stopListeningOrSpeaking,
    readMessage,
  };
};

export default useCommandVoices;
