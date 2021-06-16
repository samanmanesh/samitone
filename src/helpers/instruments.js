import * as Tone from "tone";
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
    colors: colors.blue,
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
    colors: colors.teal,
  },
  {
    name: "Test",
    sound: new Tone.Sampler({
      urls: {
        A1: "Audio 2_1.wav",
        
      },
      baseUrl: "../../public/Media/Audio 2_1.wav",
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },
  {
    name: "Clap",
    sound: new Tone.Sampler({
      urls: {
        A1: "Clap.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },
];


// var sampler = new Tone.Sampler({
// 	"C3" : "path/to/C3.mp3",
// 	"D#3" : "path/to/Dsharp3.mp3",
// 	"F#3" : "path/to/Fsharp3.mp3",
// 	"A3" : "path/to/A3.mp3",
// }, function(){
// 	//sampler will repitch the closest sample
// 	sampler.triggerAttack("D3")
// })

// const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
// // play as soon as the buffer is loaded
// player.autostart = true;