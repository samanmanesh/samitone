import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import colors from "../styles";
import DisplayPanel from "./DisplayPanel";
import useSong from "../helpers/useSong";
const Header = styled.div`
  grid-area: playBar;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  /* background: pink; */
  /* width: 100wh; */

  /* height: 2rem; */
`;


const ControlPanel = styled.div`
  button {
    all: unset;
    /* width: 1rem;
  height: 1rem; */
    margin: 0.1rem;
    padding: 0.5rem;
    /* background: ${colors.background.secondary}; */

    img {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
`;

const AddTrack = styled.div`
  display: flex;

  div {
    background: ${colors.background.secondary};
    border-radius: 0.4rem;
    margin-right: 2rem;
    border-radius: 0.4rem;
    width: 7rem;
    height: 4rem;
    button {
      all: unset;
      cursor: pointer;
    }
  }
`;
// export default function ControlBar({ stepLength, setStepLength })
export default function ControlBar() {

  const {options, setOptions, addTrack} = useSong();

  const stepOptions = [4, 8, 16, 24, 32, 64];
  return (
    <Header>
      <section>
       <DisplayPanel />
      </section>

      <section>
        <ControlPanel>
          <button>
            <img src="icons/play.svg" alt="play" />
          </button>
          <button>
            <img src="icons/stop.svg" alt="stop" />
          </button>
          <button>
            <img src="icons/record-black.svg" alt="record-black" />
          </button>
        </ControlPanel>
      </section>

      <AddTrack>
        <div>
          <button  onClick={addTrack}
          onClick={() => setOptions({...options, selectedInstrument: "Kick" })} >
            <img src="icons/plus.svg" alt="plus" />
            Instrument Drum
          </button>
        </div>
        <div>
          <button onClick={addTrack} >
            <img src="icons/plus.svg" alt="plus" />
            Instrument Melody
          </button>
        </div>
      </AddTrack>

      <input
        type="number"
        // value={bps}
        value={options.bps}
        // onChange={(e) => setBps(e.target.value)}
        onChange={(e) => setOptions({...options, bps : e.target.value})}
      />
      <select
        // value={stepLength}
        value={options.stepLength}
        // onChange={(e) => setStepLength(e.target.value)}
        onChange={(e) => setOptions({...options, stepLength: e.target.value})}
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
