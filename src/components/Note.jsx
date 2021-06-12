import React from "react";
import styled from "styled-components";

const NoteWrapper = styled.span`
  background: ${(props) => (props.active ? props.colors.primary : props.colors.secondary)};
  border: 1px solid ${(props) => (props.onStep ? "yellow" : "transparent")};
  width: 100%;
  border-radius:.7rem;
  height: 100%;
  cursor: pointer;
  /* color: #6d5050; */
`;

export default function Note({ note, toggleNote, currentStep, colors }) {
  return (
    <NoteWrapper
      active={note.active}
      onClick={toggleNote}
      onStep={currentStep === note.order}
      colors={colors}
    >
      {note.order}
    </NoteWrapper>
  );
}
