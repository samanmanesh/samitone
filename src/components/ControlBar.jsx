import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import colors from "../styles";

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

const DisplayPanel = styled.div`
  /* background: #874c4c; */
  /* padding: 0.5rem; */
  display: flex;

  & > div {
    background-color: ${colors.background.panel};
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    height: 3.5rem;
    min-width: 7rem;
    margin-right: 0.5rem;
    p {
      margin: 0;
    }
  }

  .duration {
    width:15rem;
    flex-direction: row;
    justify-content: space-around;
  }

  .tempo {
    background: ${colors.background.panelDarker};
    color: white;
    flex-direction: row;
    justify-content: space-around;
    & > div:first-child {
      align-self: flex-end;
    }
    div {
      background: inherit;
      border: none;
      width: inherit;
      display: flex;
      flex-direction: column;
      button {
        all: unset;
        cursor: pointer;
        margin: 0.2rem 1rem 0 1rem;
        img {
          width: 1rem;
          height: 1rem;
        }
      }
    }
    color: white;
  }
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

export default function ControlBar({ setBps, bps, stepLength, setStepLength }) {
  const stepOptions = [4, 8, 16, 24, 32, 64];
  return (
    <Header>
      <section>
        <DisplayPanel>
          <div>
            <p>001</p> <p>Bar</p>
          </div>
          <div>
            <p>1</p> <p>Beat</p>
          </div>
          <div className="duration">
            <span>
              <p>01</p> <p>HR</p>
            </span>
            <span>
              <p>00</p> <p>MIN</p>
            </span>
            <span>
              <p>001</p> <p>SEC</p>
            </span>
          </div>
          <div className="tempo">
            <div>Tempo</div> <div>110 bps</div>
            <div>
              <button>
                <img src="icons/arrow-up-red.svg" alt="arrow up" />
              </button>
              <button>
                <img src="icons/arrow-down-red.svg" alt="arrow down" />
              </button>
            </div>
          </div>
        </DisplayPanel>
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
          <button>
            <img src="icons/plus.svg" alt="plus" />
            Instrument Drum
          </button>
        </div>
        <div>
          <button>
            <img src="icons/plus.svg" alt="plus" />
            Instrument Melody
          </button>
        </div>
      </AddTrack>

      {/* <input
        type="number"
        value={bps}
        onChange={(e) => setBps(e.target.value)}
      /> */}
      {/* <select
        value={stepLength}
        onChange={(e) => setStepLength(e.target.value)}
      >
        {stepOptions.map((e) => (
          <option value={e} key={uuidv4()} >
            {e}
          </option>
        ))}
      </select> */}
    </Header>
  );
}
