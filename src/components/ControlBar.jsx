import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import colors from '../styles';

const Header = styled.div`
  grid-area: playBar;
  /* background: pink; */
  /* width: 100wh; */

  /* height: 2rem; */
`;
const ControlPanel = styled.div`
  display: flex;

  button {
      
    all: unset;
    width: 1rem;
    height: 1rem;
    margin: 0.1rem;
    padding: 0.5rem;
    background: ${colors.background.secondary};

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export default function ControlBar({setBps, bps, stepLength, setStepLength}) {
  const stepOptions = [4, 8, 16, 24, 32, 64];
  return (
    <Header>
      <section>
        <ControlPanel>
          <button>
            <img src="icons/back.svg" alt="back" />
          </button>
          <button>
            <img src="icons/next.svg" alt="next" />
          </button>
          <button>
            <img src="icons/restart.svg" alt="restart" />
          </button>
          <button>
            <img src="icons/play.svg" alt="play" />
          </button>
          <button>
            <img src="icons/record.svg" alt="record" />
          </button>
          <button>
            <img src="icons/repeat.svg" alt="repeat" />
          </button>
        </ControlPanel>
      </section>

      <section>display section</section>

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
          <option value={e} key={uuidv4()} >
            {e}
          </option>
        ))}
      </select>
    </Header>
  );
}
