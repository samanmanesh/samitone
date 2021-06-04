import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Note from "./components/Note";
import { instruments } from "./helpers/instruments";

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
    console.log(track.notes, "toggled note", note.order);

    const updatedNotes = track.notes;
    updatedNotes[note.order].active = !updatedNotes[note.order].active;
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };
  console.log(stepLength);

  const changedInstrument = (instrument) => {
    updateTrack(track.id, { ...track, instrument: instrument });
  };
  //   const allNotes = track.notes.filter((note) => note.order < stepLength);
  //   const wantedNotes = allNotes.filter((desiredNote)=> desiredNote.order < stepLength);

  //   console.log(allNotes, "is this");
  console.log();
  const instrumentKeys = Object.keys(instruments);
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
      <Notes>
        {track.notes
          .filter((note) => note.order < stepLength)
          .map((note) => (
            <Note
              note={note}
              toggleNote={() => changedNote(note)}
              currentStep={currentStep}
              key={uuidv4()}
            />
          ))}
      </Notes>

      {/* //*before changing the size of steps  */}
      {/* {track.notes.map((note) => (
        <Note note={note} key={uuidv4()} toggleNote={() => changedNote(note)} currentStep={currentStep}/>
      ))} */}
    </TrackRowWrapper>
  );
}
