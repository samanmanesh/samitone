import React from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import { getInstrument, instruments } from "../helpers/instruments";
import TrackRowController from "./TrackRowController";
import useSong from "../helpers/useSong";


const TrackRowWrapper = styled.div`
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.5rem;

  .controller-notes-container {
    display: flex;
    justify-content: space-between;
    background: #753781;
    & > div {
      margin: 1rem;
    }
  }
  .effects-volume-container {
    display: flex;
    justify-content: space-between;
    background: #357e56;
    & > div {
      margin: 1rem;
    }
  }
`;

const Notes = styled.div`
  /* display: flex; */
  justify-content: space-between;
  /* width: 100%; */
  & > * {
    margin-right: 0.5rem;

    &:nth-child(${(props) => props.barLength}n) {
      margin-right: 1rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default function TrackRow({ track, currentStep }) {
  
  const { updateTrack, options } = useSong();

  const changedNote = (note) => {
    const updatedNotes = track.notes;
    updatedNotes[note.order].active = !updatedNotes[note.order].active;
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };
  

  console.log(getInstrument(track.instrument))

  const colors = getInstrument(track.instrument).colors;
  
  return (
    <TrackRowWrapper>
      <section className="controller-notes-container">
        <TrackRowController  track={track} />

        <Notes barLength={4}>
          {track.notes
            .filter((note) => note.order < options.stepLength)
            .map((note) => (
              <Note
                note={note}
                toggleNote={() => changedNote(note)}
                currentStep={currentStep}
                key={uuidv4()}
                colors={colors}
              />
            ))}
        </Notes>
      </section>

      <section className="effects-volume-container">
        <div>effect</div>
        <div>volume section</div>
      </section>
    </TrackRowWrapper>
  );
}
