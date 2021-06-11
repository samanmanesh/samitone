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
    //*play a note every quarter-note
    let i = 0;

    const callback = (time) => {
      const step = i % options.stepLength;
      setCurrentStep(step);
      i++;
      tracks.forEach((track) => {
        // track.notes
        const instrument = getInstrument(track.instrument);
        // console.log(instrument.type,"instruments type")
        // console.log('callback:', instrument)
        const synth = instrument.sound.toDestination();
        //* Find the note for this track that is supposed
        //* to play at the current order

        console.log(track, "track is this");
        // const playNotes = [];
        // let duration = 0;
        track.notes.forEach(row => {
          const currentNote = row[step];
          if (currentNote.active) {
            synth.triggerAttackRelease(
              `${currentNote.pitch}${currentNote.octave}`,
              currentNote.duration
            );
            // playNotes.push(currentNote);
            // playNotes.push();
            // duration = currentNote.duration;
          }
        })
        // console.log('going to play', playNotes)
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
