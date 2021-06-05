import * as Tone from "tone";

export const instruments = {
  FM: { sound:new Tone.FMSynth(), octave:5},
  // AM: new Tone.AMSynth(),
  AM: { sound: new Tone.AMSynth(), octave: 3},
  Kick: { sound: new Tone.MembraneSynth(), octave: 2},
  // Kick: new Tone.MembraneSynth(),
  // Duo: new Tone.DuoSynth(),
  Duo:{ sound: new Tone.DuoSynth(), octave:4}, 
  Sample: { sound: new Tone.Sampler({
    urls: {
      A1: "A1.mp3",
      A2: "A2.mp3",
    },
    baseUrl: "https://tonejs.github.io/audio/casio/",
  }), octave: 5}
  // Sample: new Tone.Sampler({
  //   urls: {
  //     A1: "A1.mp3",
  //     A2: "A2.mp3",
  //   },
  //   baseUrl: "https://tonejs.github.io/audio/casio/",
  // })
};
// FM: { sound: new Tone.FMSynth(), color: "rgb(255,0,0)" },