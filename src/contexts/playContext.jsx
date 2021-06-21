import React, { createContext, useState, useRef, useEffect } from "react";
import * as Tone from "tone";
import { getInstrument } from "../helpers/instruments";
import useSong from "../helpers/useSong";

export const PlayContext = createContext();
let i = 0;
let on = 0;
let off = 0;
export const PlayProvider = (props) => {
  const { tracks, options } = useSong();
  const [loop, setLoop] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [songEffects, setSongEffects] = useState([]);

  const playCallback = (time) => {
    const step = i % options.stepLength;
    setCurrentStep(step);
    i++;
    tracks.forEach((track, i) => {
      const instrument = getInstrument(track.instrument);
      const synth = instrument.sound.toDestination();

      if (synth && songEffects[i]) {
        // filter.frequency.rampTo(track.options.filter, 0);
        if (track.options.filter) {
          songEffects[i].filter.frequency.rampTo(track.options.filter, 0);
          synth.connect(songEffects[i].filter);
        }
      }
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
    //condition for metronome display
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
    console.log("option changed");
    if (loop) {
      console.log("currently playing", loop);
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
    // generateSongEffects();
  };

  const generateSongEffects = () => {
    const newSongEffects = [];
    tracks.forEach((track) => {
      const filter = new Tone.Filter(track.options.filter, "lowpass");
      filter.toDestination();
      const trackEffects = {
        filter,
      };
      newSongEffects.push(trackEffects);
    });
    setSongEffects(newSongEffects);
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
  };

  return (
    <PlayContext.Provider value={contextValues}>
      {props.children}
    </PlayContext.Provider>
  );
};
