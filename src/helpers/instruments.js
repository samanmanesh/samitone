import * as Tone from "tone";
import colors from "../styles";

export const InstrumentType = {
  Synth: "synth",
  Beat: "beat",
};

export const getInstrument = (instrumentName) => instruments[instrumentName];

export const instruments = {
  FM: {
    sound: new Tone.FMSynth(),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.pink,
  },
  AM: {
    sound: new Tone.AMSynth(),
    octave: 3,
    type: InstrumentType.Synth,
    colors: colors.orange,
  },
  Kick: {
    sound: new Tone.MembraneSynth(),
    octave: 2,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  Duo: {
    sound: new Tone.DuoSynth(),
    octave: 4,
    type: InstrumentType.Synth,
    colors: colors.orange,
  },
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
    colors: colors.orange,
  },
};
