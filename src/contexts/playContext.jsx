import React,{createContext, useState} from 'react'
import * as Tone from "tone";
import { getInstrument } from "../helpers/instruments";


export const PlayContext = createContext();

export const PlayPauseHandler = (props) => {
    
    const [loop, setLoop] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);

    const play = async () => {
        await Tone.start();
        console.log('hit play')
        if (loop) loop.stop(0);
        // Loop
        //*play a note every quarter-note
        let i = 0;
       
        const callback = (time) => {
          
          const step = i % options.stepLength;
          setCurrentStep(step);
          i++;
          tracks.forEach((track) => {
            const instrument = getInstrument(track.instrument);
            // console.log('callback:', instrument)
            const synth = instrument.sound.toDestination();
            //* Find the note for this track that is supposed
            //* to play at the current order
            const note = track.notes.find(
              (note) => note.order === step && note.active === true
            );
            //* If we successfully found the note
            if (note) {
              if (
                track.instrument === "Kick" ||
                track.instrument === "AM" ||
                track.instrument === "FM" ||
                track.instrument === "Duo"
              ) {
                synth.triggerAttackRelease(
                  `${note.pitch}${note.octave}`,
                  note.duration
                );
              
              }
    
              if (track.instrument === "Sample") {
                synth.triggerAttackRelease(
                  `${note.pitch}${note.octave}`,
                  note.duration
                );
              }
            }
          });
        };
    
        setLoop(new Tone.Loop(callback, options.bps).start(0));
    
        Tone.Transport.start();
      };
    
      const pause = () => {
        Tone.Transport.stop();
      };

 const contextValues = {

 }



    return (
        <PlayContext.Provider value={contextValues}>
            {props.children}
        </PlayContext.Provider>
    );
};
