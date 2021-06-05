import React from 'react'
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Header = styled.div`
  grid-area: playBar;
  width: 100wh;
  /* height: 2rem; */
`;

export default function ControlBar(setBps, bps, stepLength, setStepLength) {

    const stepOptions = [4, 8, 16, 24, 32, 64];

    return (
        <Header>
            <section>display section</section>
        <div>controlPanel</div>
        <div>Hello this a test</div>

        <input
          type="number"
          value={bps}
          onChange={(e) => setBps(e.target.value)}
        />
        <select
          value={stepLength}
          onChange={(e) => setStepLength(e.target.value)}
        >
          {stepOptions.map((e) => (
            <option value={e} key={uuidv4()}>
              {e}
            </option>
          ))}
        </select>
        </Header>
    )
}
