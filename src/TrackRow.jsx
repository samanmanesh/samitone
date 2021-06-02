import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Note from "./components/Note";

const TrackRowWrapper = styled.div`
  background: rgb(50,50,50);
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  width:100%;
`;

export default function TrackRow({ track, updateTrack, currentStep }) {
  const changedNote = (note) => {
    console.log(track.notes, "toggled note", note.order);
    const updatedNotes = track.notes;
    updatedNotes[note.order].active = !updatedNotes[note.order].active;
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };
  return (
    <TrackRowWrapper>
      {track.notes.map((note) => (
        <Note note={note} key={uuidv4()} toggleNote={() => changedNote(note)} currentStep={currentStep}/>
      ))}
    </TrackRowWrapper>
  );
}
