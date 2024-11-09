import { IWindow, SpeechRecognitionEvent } from "./CommandVoices.interface";
import { Speaker } from "./Speaker";

export class Listener {
  private static instance: Listener | null = null;
  private interrumpible: boolean = true;
  public currentCallbackOnResult?: (transcript: string) => void;
  private callbackStop?: () => void;
  private callbackStart?: () => void;
  private speaker: Speaker = Speaker.getInstance();

  private constructor() {}

  // Método para obtener la instancia única de Listener
  public static getInstance(): Listener {
    if (!Listener.instance) {
      Listener.instance = new Listener();
    }
    return Listener.instance;
  }

  /**
   * Inicia el reconocimiento de voz.
   * @param callback Función opcional a ejecutar con el resultado de la síntesis.
   */
  public start(
    callback?: (transcript: string) => void,
    interrumpible: boolean = true
  ) {
    if (!this.interrumpible) return;

    this.interrumpible = interrumpible;
    this.currentCallbackOnResult = callback;

    const windowWithSpeech = window as unknown as IWindow;
    const SpeechRecognition =
      windowWithSpeech.SpeechRecognition ||
      windowWithSpeech.webkitSpeechRecognition;

    // Crear una nueva instancia de SpeechRecognition cada vez que se llama a start
    const recognition = new SpeechRecognition();
    recognition.lang = "es-ES";
    recognition.interimResults = false; // Solo resultados finales
    recognition.continuous = false; // Detenerse tras un solo resultado

    // Manejo del evento cuando se produce un resultado
    recognition.onresult = (event: SpeechRecognitionEvent) => {
      let transcript = event.results[0][0].transcript;
      transcript = transcript.replace(/\.$/, ""); // Eliminar el punto final si existe
      this.currentCallbackOnResult?.(transcript);
    };

    // Cambia el estado de 'listening' a false cuando termina de escuchar
    recognition.onend = () => {
      this.callbackStop?.();
    };

    recognition.onerror = () => {
      try {
        this.speaker.start(
          "Ocurrió un error al reconocer tu voz. Intenta nuevamente."
        );
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        alert("Ocurrió un error al reconocer tu voz. Intenta nuevamente.");
      }

      this.callbackStop?.();
    };

    this.callbackStart?.();
    recognition.start();
  }

  set onStop(callback: () => void) {
    this.callbackStop = callback;
  }
  set onStart(callback: () => void) {
    this.callbackStart = callback;
  }

  /**
   * Método para interrumpir el reconocimiento de voz en curso
   */
  public stop() {
    this.callbackStop?.();
    // No es necesario llamar a `recognition.stop()` porque se crea una nueva instancia en cada `start`
  }
}
