import React from "react";
import styled from "styled-components";

const NoteWrapper = styled.span`
  background: ${props => props.active ? 'limegreen':'lightgrey'};
  border: 1px solid ${props => props.onStep ? 'yellow' : 'transparent'};
  padding: 0.4rem;
  cursor: pointer;
  color: black;
`;

export default function Note({ note, toggleNote, currentStep }) {
  return <NoteWrapper active={note.active} onClick={toggleNote} onStep={currentStep === note.order}>
      {note.order}
  </NoteWrapper>;
}
