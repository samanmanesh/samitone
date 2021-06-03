import * as Tone from "tone";

export const instruments = {
  FM: new Tone.FMSynth(),
  AM: new Tone.AMSynth(),
  Kick: new Tone.MembraneSynth()
};
