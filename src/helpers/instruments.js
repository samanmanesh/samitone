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
        C2: "Clap_1.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },
  {
    name: "Clap",
    sound: new Tone.Sampler({
      urls: {
        C2: "Clap_1.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },
  {
    name: "Rim",
    sound: new Tone.Sampler({
      urls: {
        C2: "Rim_1.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },
  {
    name: "Snap",
    sound: new Tone.Sampler({
      urls: {
        C2: "Snap_1.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },
  {
    name: "Snare 1",
    sound: new Tone.Sampler({
      urls: {
        C2: "Snare1_1.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },{
    name: "Snare 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Snare2_1.mp3",
      },
      baseUrl: "/Media/"
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.teal,
  },
  {
    name: "Guitar 1",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-1_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },{
    name: "Guitar 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-2_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },{
    name: "Guitar 3",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-3_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },{
    name: "Guitar 4",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-4_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Synth,
    colors: colors.teal,
  },{
    name: "Guitar 5",
    sound: new Tone.Sampler({
      urls: {
        C2: "Guitar-5_1.mp3",
        
      },
      baseUrl: "/Media/",
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
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
    {
    name: "EWEYEAH",
    sound: new Tone.Sampler({
      urls: {
        C2: "EWEYEAH_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
  {
    name: "HA",
    sound: new Tone.Sampler({
      urls: {
        C2: "HA_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },{
    name: "HEY",
    sound: new Tone.Sampler({
      urls: {
        C2: "HEY_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
  {
    name: "HOLDUP",
    sound: new Tone.Sampler({
      urls: {
        C2: "HOLDUP_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 0,
    type: InstrumentType.Beat,
    colors: colors.orange,
  },
  {
    name: "HUH",
    sound: new Tone.Sampler({
      urls: {
        C2: "HUH_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
  {
    name: "JYEA",
    sound: new Tone.Sampler({
      urls: {
        C2: "JYEA_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
  {
    name: "UGH",
    sound: new Tone.Sampler({
      urls: {
        C2: "UGH.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },{
    name: "UGH 2",
    sound: new Tone.Sampler({
      urls: {
        C2: "UGH_2.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 5,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
  {
    name: "YEAUH ",
    sound: new Tone.Sampler({
      urls: {
        C2: "YEAUH_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 0,
    type: InstrumentType.Beat,
    colors: colors.green,
  },
  {
    name: "GUN ",
    sound: new Tone.Sampler({
      urls: {
        C2: "GUN_1.mp3",
        
      },
      baseUrl: "/Media/",
    }),
    octave: 0,
    type: InstrumentType.Beat,
    colors: colors.green,
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