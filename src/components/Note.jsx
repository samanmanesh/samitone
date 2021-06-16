import React from "react";
import styled, { css } from "styled-components";
import colors from "../styles";

const NoteWrapper = styled.div`
  /* transition: all 0.5s ease; */
  background: ${(props) =>
    props.active ? props.colors.primary : props.colors.secondary};
  border: 1px solid
    ${(props) => (props.onStep ? "rgb(153, 153, 153)" : "transparent")};
  box-shadow: ${(props) =>
    props.onStep && props.active
      ? `0px 0px 12px ${props.colors.primary} , -2px -2px 5px ${props.colors.secondary}`
      : "transparent"};

  /* 1px 4px 20px ${(props) => props.colors.primary} , 2px 2px 0px ${(props) =>
    props.colors.secondary}; */
  /* width: 100%; */
  border-radius: 0.4rem;
  min-height: 3.5rem;
  min-width: 4rem;
  width: 100%;
  margin: 0.4rem 0.3rem 0.2rem 0;
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
      className={note.active && "active"}
    >
      {note.order}
    </NoteWrapper>
  );
}
