import React, { useState } from "react";
import styled from "styled-components";

const SelectorWrapper = styled.div`
  background: lightblue;
  position: relative;
`;

const SelectorOptions = styled.div`
  ${(props) => !props.show && "display: none;"}
  background: lightgreen;
  position: absolute;
  bottom: -100%;
  width: 100%;
`;
export default function Selector({ value, onChange, options }) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <SelectorWrapper onClick={() => setShowOptions((prev) => !prev)}>
      {value}
      <SelectorOptions show={showOptions}>Apple</SelectorOptions>
    </SelectorWrapper>
  );
}
