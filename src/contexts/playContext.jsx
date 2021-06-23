import React, { createContext, useState, useRef, useEffect } from "react";
import * as Tone from "tone";
import { getInstrument } from "../helpers/instruments";
import useSong from "../helpers/useSong";

export const PlayContext = createContext();
let i = 0;
let on = 0;
let off = 0;
let vNode;
export const PlayProvider = (props) => {
  const { tracks, options } = useSong();
  const [loop, setLoop] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [songEffects, setSongEffects] = useState([]);
  const [volume, setVolume] = useState(-12);
  const [volumeNode, setVolumeNode] = useState();

  ///testing the volume
  // const vol = new Tone.Volume(volume).toDestination();

  // //* if volume changed updates the callback
  useEffect(() => {
    if (loop) {
      console.log("works useEffect");
      // generateSongEffects();
      loop.callback = playCallback;
    }
  }, [volume]);

  const playCallback = (time) => {
    const step = i % options.stepLength;
    setCurrentStep(step);
    i++;
    tracks.forEach((track, i) => {
      const instrument = getInstrument(track.instrument);
      console.log(vNode.volume.value);
      vNode.volume.value *= 2;
      const synth = instrument.sound.connect(vNode).toDestination();
      // vNode.set({
      //   volume: -50
      // });
      // console.log(vol,"vol is");
      // const synth = instrument.sound.connect(vol);

      // if (synth && songEffects[i]) {
      //   // filter.frequency.rampTo(track.options.filter, 0);
      //   if (track.options.filter) {
      //     songEffects[i].filter.frequency.rampTo(track.options.filter, 0);
      //     synth.connect(songEffects[i].filter);
      //   }
      // }
      //* Find the note for this track that is supposed
      //* to play at the current order

      track.notes.forEach((row) => {
        const currentNote = row[step];
        if (currentNote && currentNote.active) {
          synth.triggerAttackRelease(
            `${currentNote.pitch}${currentNote.octave}`,
            currentNote.duration
          );
        }
      });
    });

    // condition for metronome display
    if (i % 2) {
      on = 0;
    } else {
      on = 1;
    }
  };

  //* Updates the callback when values change
  useEffect(() => {
    if (loop) {
      // generateSongEffects();
      loop.callback = playCallback;
    }
  }, [tracks]);

  useEffect(() => {
    if (loop) {
      loop.interval = `${options.bps}Hz`;
    }
  }, [options]);

  const play = async () => {
    await Tone.start();
    if (loop) loop.stop(0);
    // Loop
    setupSong();
    setLoop(new Tone.Loop(playCallback, `${options.bps}Hz`).start(0));
    Tone.Transport.start();
  };

  const setupSong = () => {
    i = 0;
    const vol = new Tone.Volume(-15).toDestination();
    vol.name = "haha"
    console.log(vol)
    // setVolumeNode(vol);
    vNode = vol;
    
    // Go through each instrument
    tracks.forEach((track) => {
      const { sound } = getInstrument(track.instrument);
      sound.connect(vol);
    });
    // bind the volume to it
  };

  const pause = () => {
    Tone.Transport.stop();
  };

  const contextValues = {
    loop,
    setLoop,
    currentStep,
    setCurrentStep,
    play,
    pause,
    on,
    setVolume,
    volume,
  };

  return (
    <PlayContext.Provider value={contextValues}>
      {props.children}
    </PlayContext.Provider>
  );
};
