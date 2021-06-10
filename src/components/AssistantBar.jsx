import React from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";

const BarWrapper = styled.div`
  grid-area: helper;
  background: #ffa60079;
`;

export default function AssistantBar() {
  const { options, setOptions } = useSong();
  const stepOptions = [4, 8, 16, 24, 32, 64];

  return (
    <BarWrapper>
      <select
        // value={stepLength}
        value={options.stepLength}
        // onChange={(e) => setStepLength(e.target.value)}
        onChange={(e) => setOptions({ ...options, stepLength: e.target.value })}
        key="step-select"
      >
        {stepOptions.map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </BarWrapper>
  );
}
