import React, { createContext, useState } from "react";
import * as Tone from "tone";
import { getInstrument } from "../helpers/instruments";
import useSong from "../helpers/useSong";

export const PlayContext = createContext();

export const PlayProvider = (props) => {
  const { tracks, options } = useSong();
  const [loop, setLoop] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  const play = async () => {
    await Tone.start();
    console.log("hit play");

    if (loop) loop.stop(0);
    // Loop
    
    let i = 0;
    const callback = (time) => {
      const step = i % options.stepLength;
      setCurrentStep(step);
      i++;
      tracks.forEach((track) => {
        // track.notes
        const instrument = getInstrument(track.instrument);
        const synth = instrument.sound.toDestination();
       
        //* Find the note for this track that is supposed
        //* to play at the current order

        console.log(track, "track is this");
        // const playNotes = [];
        // let duration = 0;
        track.notes.forEach(row => {
          const currentNote = row[step];
          // console.log(step,"look step")
          // console.log(currentNote,"currentNote")
          if (currentNote.active) {
            synth.triggerAttackRelease(
              `${currentNote.pitch}${currentNote.octave}`,
              currentNote.duration
            );
          }
        })

        /// the way it must be works form tune.js
        const player = new Tone.Player({
          url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
          autostart: true,
        });
        const filter = new Tone.Filter(400, 'lowpass').toDestination();
        const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
        
        // connect the player to the feedback delay and filter in parallel
        player.connect(filter);
        player.connect(feedbackDelay);
        
        //*the previous one
        // if (playNotes.length > 0) {
          // play the chord/note
        // }

        // const note = track.notes.find(
        //   (note) => note.order === step && note.active === true
        // );

        // const note = track.notes.map((row) => (row.find((note) => note.order === step && note.active === true
        // )));
        // const note = track.notes.map((row) => (row.map((note) => (note.find((note) => note===step)))));

        // console.log(note," note check")

        //* If we successfully found the note
        // if (note) {
        //   if (
        //     track.instrument === "Kick" ||
        //     track.instrument === "AM" ||
        //     track.instrument === "FM" ||
        //     track.instrument === "Duo"
        //   ) {
        //     synth.triggerAttackRelease(
        //       `${note.pitch}${note.octave}`,
        //       note.duration
        //     );

        //   }

        //   if (track.instrument === "Sample") {
            // synth.triggerAttackRelease(
            //   `${note.pitch}${note.octave}`,
            //   note.duration
            // );
        //   }
        // }
      });
    };

    setLoop(new Tone.Loop(callback, options.bps).start(0));

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
