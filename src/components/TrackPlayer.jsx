import React, { useEffect, useState} from "react";
import * as Tone from "tone";
import { v4 as uuidv4 } from "uuid";
import { getInstrument } from "../helpers/instruments";
import TrackRow from "./TrackRow";
import styled from "styled-components";
import useSong from "../helpers/useSong";
const TrackPlayerContainer = styled.div`
  background: #381c1c;
  grid-area: body;
`;

export default function TrackPlayer({
  // tracks,
  // addTrack,
  // updateTrack,
  // stepLength,
  bps,
}) {
  const { tracks, setTracks, addTrack, updateTrack, options, setOptions } = useSong();
  // Song Playing
  const [loop, setLoop] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  // useEffect(() => {
  //   //attach a click listener to a play button
  //   document.querySelector("button")?.addEventListener("click", async () => {
  //     await Tone.start();
  //     console.log("audio is ready");
  //   });
  // }, []);

  const play = async () => {
    await Tone.start();
    console.log('hit play')
    if (loop) loop.stop(0);
    // Loop
    //*play a note every quarter-note
    let i = 0;
   
    const callback = (time) => {
      // console.log('callback')
      // const step = i % stepLength;
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
            // const distortion = new Tone.Distortion(0.4).toDestination();

            // const feedbackDelay = new Tone.FeedbackDelay(
            //   delayTime,
            //   feedbackDelayNum
            // ).toDestination();
            //connect a player to the distortion
            // synth.connect(distortion);
            // synth.connect(feedbackDelay);
          }

          if (track.instrument === "Sample") {
            // synth.triggerAttackRelease(["C1", "E1", "G1", "B1"], note.duration);
            synth.triggerAttackRelease(
              `${note.pitch}${note.octave}`,
              note.duration
            );
          }
        }
      });
    };

    setLoop(new Tone.Loop(callback, bps).start(0));

    Tone.Transport.start();
  };

  const pause = () => {
    Tone.Transport.stop();
  };



  return (
    <TrackPlayerContainer>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      {/* <button onClick={() =>addTrack("AM")}>Add Track +</button> */}
      {tracks.map((track) => (
        <TrackRow
          track={track}
          key={uuidv4()}
          // updateTrack={updateTrack}
          currentStep={currentStep}
          // stepLength={stepLength}
        />
      ))}
    </TrackPlayerContainer>
  );
}
