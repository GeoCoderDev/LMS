export class CommandVoice {
  constructor(
    private variantCommands: string[],
    public action: () => Promise<unknown>,
    public finalPhrase?: string
  ) {}

  testTranscrip(transcript: string) {
    return this.variantCommands.includes(transcript);
  }
}
