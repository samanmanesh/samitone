import React from "react";
import styled from "styled-components";

const NoteWrapper = styled.div`
  background: ${(props) => (props.active ? props.colors.primary : props.colors.secondary)};
  border: 1px solid ${(props) => (props.onStep ? "yellow" : "transparent")};
  /* width: 100%; */
  border-radius:.4rem;
  min-height: 3.5rem;
  min-width: 4rem;
  margin: .4rem .3rem .2rem 0 ;
  cursor: pointer;
  
  /* color: #6d5050; */

  /* width: 40rem; */

  /* background: black; */
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
