export class Speaker {
  private static instance: Speaker | null = null;
  private synth: SpeechSynthesis;
  public speaking: boolean = false; // Variable para indicar si el navegador está hablando
  private interrumpible: boolean = true;
  public currentCallback?: () => void;

  // Constructor privado para evitar instanciación directa
  private constructor() {
    if (!window?.speechSynthesis) {
      throw new Error("SpeechSynthesis no está disponible en este navegador.");
    }
    this.synth = window.speechSynthesis;
  }

  // Método para obtener la instancia única
  public static getInstance(): Speaker {
    if (!Speaker.instance) {
      Speaker.instance = new Speaker();
    }
    return Speaker.instance;
  }

  /**
   * Este método reproduce el mensaje de voz.
   * @param message Texto a sintetizar.
   * @param callback Función opcional a ejecutar al finalizar la síntesis.
   * @param interrumpible Indica si la síntesis se puede interrumpir.
   * @returns El objeto SpeechSynthesis si es interrumpible, o undefined si no lo es.
   */
  public start(
    message: string,
    callback?: () => void,
    interrumpible: boolean = true
  ) {
    if (!this.interrumpible) return;

    this.stop();

    this.interrumpible = interrumpible;

    this.speaking = true; // Cambia a true cuando se inicia la síntesis de voz
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "es-ES";
    this.currentCallback = callback;
    // Al finalizar la síntesis, se cambia speaking a false y se ejecuta el callback
    utterance.onend = () => {
      this.speaking = false;
      callback?.();
    };
    this.synth.speak(utterance);
  }

  /**
   * Método para interrumpir la síntesis de voz en curso.
   */
  public stop(omit: boolean = false) {
    if (this.speaking && this.interrumpible) {
      this.synth.cancel();
      this.speaking = false; // Cambia a false cuando se cancela la síntesis
      if (omit) this.currentCallback?.();
    }
  }

  public silenceOmit() {}
}
