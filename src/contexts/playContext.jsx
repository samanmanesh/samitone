import React, { createContext, useState, useRef, useEffect } from "react";
import * as Tone from "tone";
import { getInstrument } from "../helpers/instruments";
import useSong from "../helpers/useSong";

export const PlayContext = createContext();
let i = 0;
export const PlayProvider = (props) => {
  const { tracks, options, currentFilter } = useSong();
  const [loop, setLoop] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  // const [playCounter, setPlayCounter] = useState(0);
  const [filter, setFilter] = useState(null);

  function usePrevious(value) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef();
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }

  const prevFilter = usePrevious(currentFilter);

  const getCurrentFilter = () => currentFilter;

  const playCallback = (time) => {
    const step = i % options.stepLength;
    setCurrentStep(step);
    i++;
    // console.log('playcounter', playCounter)

    tracks.forEach((track) => {
      // track.notes
      const instrument = getInstrument(track.instrument);
      const synth = instrument.sound.toDestination();
      // let filter = new Tone.Filter(
      //   currentFilter,
      //   "lowpass"
      // ).toDestination();

      if (currentFilter !== prevFilter) {
        console.log("Filter is run........");

        //  const filter = new Tone.Filter(
        //   currentFilter,
        //   "lowpass"
        // ).toDestination();
        // console.log(filter,"filter")
      }

      // const feedbackDelay = new Tone.FeedbackDelay(
      //   0.125,
      //   0.5
      // ).toDestination();
      // synth.connect(feedbackDelay);
      if (synth && filter) {
        filter.frequency.rampTo(currentFilter, 0);
        synth.connect(filter);
      }
      console.log("current filter", filter, currentFilter);
      // console.log(synth.connect(filter),"synth.connect.filter")

      // if ( currentFilter !== prevFilter){

      //   console.log("Filter is run........");
      //   const filter = new Tone.Filter(
      //     currentFilter,
      //     "lowpass"
      //   ).toDestination();
      //   console.log(filter,"filter")

      // }

      //* Find the note for this track that is supposed
      //* to play at the current order

      // console.log(track, "track is this");
      // const playNotes = [];
      // let duration = 0;
      track.notes.forEach((row) => {
        const currentNote = row[step];
        // console.log(step,"look step")
        // console.log(currentNote,"currentNote")
        if (currentNote.active) {
          synth.triggerAttackRelease(
            `${currentNote.pitch}${currentNote.octave}`,
            currentNote.duration
          );
        }
      });

      /// the way it must be works form tune.js
      // const player = new Tone.Player({
      //   url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
      //   autostart: true,
      // });
      // const filter = new Tone.Filter(400, 'lowpass').toDestination();
      // const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

      // connect the player to the feedback delay and filter in parallel
      // player.connect(filter);
      // player.connect(feedbackDelay);
    });
  };

  useEffect(() => {
    // current filter changed!
    if (loop) {
      console.log('loop<>', loop.callback)
      loop.callback = playCallback;
    }
  }, [currentFilter])

  const play = async () => {
    await Tone.start();
    if (loop) loop.stop(0);
    // Loop
    // setPlayCounter(0);
    i = 0;
    //I had to put here to prevent from looping and reassigning
    const temp = new Tone.Filter(400, "lowpass"); 
    setFilter(temp);
    temp.toDestination();
    console.log(temp, "filter");

    // const feedbackDelay = new Tone.FeedbackDelay(0.4, 0.5).toDestination();
    
    setLoop(new Tone.Loop(playCallback, options.bps).start(0));

    Tone.Transport.start();
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
  };

  return (
    <PlayContext.Provider value={contextValues}>
      {props.children}
    </PlayContext.Provider>
  );
};
