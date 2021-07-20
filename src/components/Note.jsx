import React from "react";
import styled, { css } from "styled-components";

const NoteWrapper = styled.div`
  background: ${(props) =>
    props.active ? props.colors.primary : props.colors.secondary};
  border: 1px solid
    ${(props) => (props.onStep ? "rgb(153, 153, 153)" : "transparent")};
  box-shadow: ${(props) =>
    props.onStep && props.active
      ? `0px 0px 30px ${props.colors.secondary} , -2px -2px 25px ${props.colors.primary}`
      : "transparent"};


  border-radius: 0.7rem;
  min-height: 3.5rem;
  width: 100%;
  margin: 0.4rem 0.3rem 0.2rem 0;
  cursor: pointer;


`;

export default function Note({ note, toggleNote, currentStep, colors }) {
  return (
    <NoteWrapper
      active={note.active}
      onClick={toggleNote}
      onStep={currentStep === note.order}
      colors={colors}
      className={note.active && "active"}
    >
    </NoteWrapper>
  );
}
