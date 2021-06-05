import * as Tone from "tone";
export const InstrumentType = {
  Synth: "synth",
  Beat: "beat",
};
export const instruments = {
  FM: { sound: new Tone.FMSynth(), octave: 5, type: InstrumentType.Synth },
  // AM: new Tone.AMSynth(),
  AM: { sound: new Tone.AMSynth(), octave: 3, type: InstrumentType.Synth },
  Kick: {
    sound: new Tone.MembraneSynth(),
    octave: 2,
    type: InstrumentType.Beat,
  },
  // Kick: new Tone.MembraneSynth(),
  // Duo: new Tone.DuoSynth(),
  Duo: { sound: new Tone.DuoSynth(), octave: 4, type: InstrumentType.Synth },
  Sample: {
    sound: new Tone.Sampler({
      urls: {
        A1: "A1.mp3",
        A2: "A2.mp3",
      },
      baseUrl: "https://tonejs.github.io/audio/casio/",
    }),
    octave: 5,
    type: InstrumentType.Synth,
  },
  // Sample: new Tone.Sampler({
  //   urls: {
  //     A1: "A1.mp3",
  //     A2: "A2.mp3",
  //   },
  //   baseUrl: "https://tonejs.github.io/audio/casio/",
  // })
};
// FM: { sound: new Tone.FMSynth(), color: "rgb(255,0,0)" },
