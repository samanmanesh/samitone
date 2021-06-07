import React from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import colors from "../styles";

const Header = styled.div`
  grid-area: playBar;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const DisplayPanel = styled.div`
  /* background: #874c4c; */
  /* padding: 0.5rem; */
  display: flex;

  div {
    background-color: ${colors.background.panel};
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid white; */
    border-radius: 0.3rem;
    height: 3.5rem;
    width: 7rem;
    margin-left: 0.3rem;
    p {
      margin: 0;
    }
  }

  div:nth-child(1) {
    margin-left: 1rem;
  }

  div:nth-child(3) {
    width: 20rem;
    flex-direction: row;
    justify-content: space-around;
  }
  div:nth-child(4) {
    background: ${colors.background.panelDarker};
    color: white;
    width: auto;
    flex-direction: row;
    justify-content: space-around;
    p {
        margin-left: 1rem;
        font-size: 1ch;
        
    }

   
    div {
        background: inherit;
        
        border: none;
        width:inherit;
        display: flex;
        flex-direction: column;
        /* justify-content:space-around; */

      button {
        all: unset;
        cursor: pointer;
        margin: .2rem 1rem 0 1rem ;
        img{
            width: 1rem;
            height: 1rem;
        }
      }
    }
    div:nth-child(1){
        /* background: #381c1c; */
        color: white;
        //add font size then
        
    }
    div:nth-child(2){
        color:white;

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
            {" "}
            <p>1</p> <p>Beat</p>{" "}
          </div>
          <div>
            {" "}
            <span>
              {" "}
              <p>01</p> <p>HR</p>{" "}
            </span>
            <span>
              {" "}
              <p>00</p> <p>MIN</p>{" "}
            </span>
            <span>
              {" "}
              <p>001</p> <p>SEC</p>{" "}
            </span>
          </div>
          <div>
            {" "}
            <div>Tempo</div> <div>110 bps</div>
            <div>
              <button>
                {" "}
                <img src="icons/arrow-up-red.svg" alt="arrow up" />{" "}
              </button>
              <button>
                {" "}
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

      <section>
        <div>Add Drum</div>
        <div>Add Melody</div>
      </section>

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
