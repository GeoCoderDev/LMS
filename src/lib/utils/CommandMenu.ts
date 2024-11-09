// import { CommandVoice } from "./CommandVoice";
// import { Speaker } from "./Speaker";
// import {
//   IWindow,
//   SpeechRecognitionErrorEvent,
//   SpeechRecognitionEvent,
// } from "./CommandVoices.interface";


// export class CommandMenu {
//   private speaker: Speaker = Speaker.getInstance();

//   constructor(
//     private presentationText: string,
//     private commandVoices: CommandVoice[]
//   ) {}

//   start() {
//     if (typeof window === "undefined") return;
//     const windowWithSpeech = window as unknown as IWindow;
//     const SpeechRecognition =
//       windowWithSpeech.SpeechRecognition ||
//       windowWithSpeech.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       this.speaker.start(
//         "Lo siento, tu navegador no es compatible con los comandos de voz."
//       );
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "es-ES";
//     recognition.continuous = false;
//     recognition.interimResults = false;

//     recognition.onresult = (event: SpeechRecognitionEvent) => {
//       const transcript = event.results[0][0].transcript
//         .toLowerCase()
//         .replace(/\.$/, ""); //Elimina el punto final si existe

//       console.log(transcript);
//       for (let i = 0; i < this.commandVoices.length; i++) {
//         if (this.commandVoices[i].testTranscrip(transcript)) {
//           this.commandVoices[i].action().then(() => {
//             if (this.commandVoices[i].finalPhrase) {
//               this.speaker.start(this.commandVoices[i].finalPhrase!);
//             }
//           });
//           return;
//         }
//       }

//       this.speaker.start("Comando no reconocido. Intenta nuevamente.");
//     };

//     recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
//       console.error("Error en el reconocimiento de voz:", event.error);
//       this.speaker.start(
//         "Ocurrió un error al reconocer tu voz. Intenta nuevamente."
//       );
//     };

//     const startVoiceRecognition = () => {
//       this.speaker.start(this.presentationText, () => {
//         recognition.start();
//         // dispatch(
//         //   setCommandVoicesState({ value: CommandVoicesStates.LISTENING })
//         // );
//       });
//     };

//     startVoiceRecognition();
//   }
// }






import { CommandVoice } from "./CommandVoice";
import { Speaker } from "./Speaker";
import { Listener } from "./Listener";

export class CommandMenu {
  private speaker: Speaker = Speaker.getInstance();
  private listener: Listener = Listener.getInstance(); // Usamos Listener

  constructor(
    private presentationText: string,
    private commandVoices: CommandVoice[]
  ) {}

  start() {
    if (typeof window === "undefined") return;

    if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      this.speaker.start(
        "Lo siento, tu navegador no es compatible con los comandos de voz."
      );
      return;
    }

    const handleResult = (transcript: string) => {
      console.log(transcript);
      for (let i = 0; i < this.commandVoices.length; i++) {
        if (this.commandVoices[i].testTranscrip(transcript)) {
          this.commandVoices[i].action().then(() => {
            if (this.commandVoices[i].finalPhrase) {
              this.speaker.start(this.commandVoices[i].finalPhrase!);
            }
          });
          return;
        }
      }

      this.speaker.start("Comando no reconocido. Intenta nuevamente.");
    };



    const startVoiceRecognition = () => {
      this.speaker.start(this.presentationText, () => {
        this.listener.start(handleResult); // Inicia Listener con el callback de resultado
      });
    };

    // Ejecuta el inicio del reconocimiento de voz
    startVoiceRecognition();


  }
}
