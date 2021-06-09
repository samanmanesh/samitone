import * as Tone from "tone";
import { Instrument } from "tone/build/esm/instrument/Instrument";
import colors from "../styles";

export const InstrumentType = {
  Synth: "synth",
  Beat: "beat",
};

/**
 * Gets instrument object from instrument name
 * @param {string} instrumentName: Name of instrument
 * @returns Instrument object
 */
export const getInstrument = (instrumentName) =>
  instruments.find((instrument) => instrument.name === instrumentName);

export const getInstrumentsByType = (instrumentType) => 
  instruments.filter((instrument) => instrument.type === instrumentType);


export const instruments = [
  {
    name: "FM",
    sound: new Tone.FMSynth(),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.pink,
  },
  {
    name: "AM",
    sound: new Tone.AMSynth(),
    octave: 3,
    type: InstrumentType.Synth,
    colors: colors.orange,
  },
  {
    name: "Kick",
    sound: new Tone.MembraneSynth(),
    octave: 2,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Duo",
    sound: new Tone.DuoSynth(),
    octave: 4,
    type: InstrumentType.Synth,
    colors: colors.orange,
  },
  {
    name: "Sample",
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
];
