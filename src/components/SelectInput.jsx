import React from "react";
import styled from "styled-components";
import colors from "../styles";

const SelectInputWrapper = styled.div`
  background: rgb(55, 52, 52);
  display: flex;
  align-items: center;
  height: 2.3rem;
  position: relative;
  border-radius: 0.3rem;
`;

const selectorWidth = "4ch";
const selectorHeight = "1.5rem";

const SelectInputOption = styled.div`
  color: ${colors.font.secondary};
  height: ${selectorHeight};
  width: ${selectorWidth};
  display: grid;
  place-items: center;
  z-index: 2;
  cursor: pointer;
`;

const Selector = styled.div`
  position: absolute;
  height: ${selectorHeight};
  width: ${selectorWidth};
  background: ${colors.button.optional3};
  z-index: 1;
  left: ${props => props.offset}%;
  transition: ease 0.2s;
  border-radius: 0.2rem;
`;

export default function SelectInput({
  options,
  selectedIndex,
  setSelectedIndex,
  className
}) {
  return (
    <SelectInputWrapper className={className}>
      {options.map((option, index) => (
        <SelectInputOption
          key={`option-${index}`}
          onClick={() => setSelectedIndex(index)}
        >
          {option}
        </SelectInputOption>
      ))}
      <Selector offset={100 * (selectedIndex / options.length)} />
    </SelectInputWrapper>
  );
}
