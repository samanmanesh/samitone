import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import { getInstrument, instruments } from "../helpers/instruments";

const TrackRowWrapper = styled.div`
  background: rgb(50, 50, 50);
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const Notes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > * {
    margin-right: 0.5rem;
    
    &:nth-child(${props => props.barLength}n) {
      margin-right: 1rem;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
`;
const TrackDetails = styled.div`
  display: flex;
`;
export default function TrackRow({
  track,
  updateTrack,
  currentStep,
  stepLength,
}) {
  const changedNote = (note) => {
    const updatedNotes = track.notes;
    updatedNotes[note.order].active = !updatedNotes[note.order].active;
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };

  const changedInstrument = (instrument) => {
    updateTrack(track.id, { ...track, instrument: instrument });
  };

  console.log(getInstrument(track.instrument));
  const instrumentKeys = Object.keys(instruments);
  const colors = getInstrument(track.instrument).colors;
  return (
    <TrackRowWrapper>

       

      <TrackDetails>
        
        
        <span>{track.instrument}</span>
        <select
          value={track.instrument}
          onChange={(e) => changedInstrument(e.target.value)}
        >
          {instrumentKeys.map((e) => (
            <option value={e} key={uuidv4()}>
              {e}
            </option>
          ))}
        </select>
        
      </TrackDetails>
      <Notes barLength={4}>
        {track.notes
          .filter((note) => note.order < stepLength)
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
    </TrackRowWrapper>
  );
}
