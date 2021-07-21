import * as Tone from "tone";
import colors from "../styles";
import { BASE_MEDIA_URL } from "./constants";

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
    name: "Kick",
    sound: new Tone.Sampler({
      urls: {
        C2: "Kick.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.blue,
  },
  {
    name: "Kick 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Kick2.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.blue,
  },
  {
    name: "808",
    sound: new Tone.Sampler({
      urls: {
        C2: "808-1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.purple,
  },
  {
    name: "808 1",
    sound: new Tone.Sampler({
      urls: {
        C2: "808-2.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.purple,
  },
  {
    name: "808 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "808-3.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.purple,
  },
  {
    name: "808 3",
    sound: new Tone.Sampler({
      urls: {
        C2: "808-4.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.purple,
  },
  {
    name: "808 4",
    sound: new Tone.Sampler({
      urls: {
        C2: "808-5.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.purple,
  },
  {
    name: "Clap",
    sound: new Tone.Sampler({
      urls: {
        C2: "Clap_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Claves",
    sound: new Tone.Sampler({
      urls: {
        C2: "Claves_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Conga",
    sound: new Tone.Sampler({
      urls: {
        C2: "Conga_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Conga 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Conga 2_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Crash",
    sound: new Tone.Sampler({
      urls: {
        C2: "Crash_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Hat",
    sound: new Tone.Sampler({
      urls: {
        C2: "Hat_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Hat 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Hat 2_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Shaker",
    sound: new Tone.Sampler({
      urls: {
        C2: "Shaker_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Stick",
    sound: new Tone.Sampler({
      urls: {
        C2: "Stick_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Tom",
    sound: new Tone.Sampler({
      urls: {
        C2: "Tom_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Tom 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Tom 2_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Triangle",
    sound: new Tone.Sampler({
      urls: {
        C2: "Triangle_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Rim",
    sound: new Tone.Sampler({
      urls: {
        C2: "Rim_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "Snap",
    sound: new Tone.Sampler({
      urls: {
        C2: "Snap_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Snare 1",
    sound: new Tone.Sampler({
      urls: {
        C2: "Snare1_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Snare 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Snare2_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.red,
  },
  {
    name: "Guitar 1",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-1_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },
  {
    name: "Guitar 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-2_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },
  {
    name: "Guitar 3",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-3_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },
  {
    name: "Guitar 4",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-4_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },
  {
    name: "Guitar 5",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-5_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },
  {
    name: "Key",
    sound: new Tone.Sampler({
      urls: {
        C2: "Key 1_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.green,
  },
  {
    name: "Key 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Key 2_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.green,
  },
  {
    name: "Key 3",
    sound: new Tone.Sampler({
      urls: {
        C2: "Key 3_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.green,
  },
  {
    name: "Key 4",
    sound: new Tone.Sampler({
      urls: {
        C2: "Key 4_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.green,
  },
  {
    name: "Key 5",
    sound: new Tone.Sampler({
      urls: {
        C2: "Key 5_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.green,
  },
  {
    name: "Key 6",
    sound: new Tone.Sampler({
      urls: {
        C2: "Key 6_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.green,
  },
  {
    name: "Another One",
    sound: new Tone.Sampler({
      urls: {
        C2: "ANOTHERONE_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "EWEYEAH",
    sound: new Tone.Sampler({
      urls: {
        C2: "EWEYEAH_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "HA",
    sound: new Tone.Sampler({
      urls: {
        C2: "HA_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "HEY",
    sound: new Tone.Sampler({
      urls: {
        C2: "HEY_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "HOLDUP",
    sound: new Tone.Sampler({
      urls: {
        C2: "HOLDUP_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 0,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "HUH",
    sound: new Tone.Sampler({
      urls: {
        C2: "HUH_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "JYEA",
    sound: new Tone.Sampler({
      urls: {
        C2: "JYEA_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "UGH",
    sound: new Tone.Sampler({
      urls: {
        C2: "UGH.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "UGH 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "UGH_2.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "YEAUH ",
    sound: new Tone.Sampler({
      urls: {
        C2: "YEAUH_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 0,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
  {
    name: "GUN ",
    sound: new Tone.Sampler({
      urls: {
        C2: "GUN_1.mp3",
      },
      baseUrl: BASE_MEDIA_URL,
    }),
    octave: 0,
    type: InstrumentType.Beat,
    colors: colors.pink,
  },
];
