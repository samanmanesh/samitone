import React from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import colors from "../styles";
const DisplayPanelWrapper = styled.div`
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
    width: 15rem;
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

export default function DisplayPanel() {
  const {options, setOptions} = useSong();

  const changeTempo = increment => {
    let newTempo = options.bps;
    newTempo += increment;
    setOptions({...options, bps: newTempo})
  }
  return (
    <DisplayPanelWrapper>
      
      <div className="tempo">
        <div>Tempo</div> <div>{options.bps} bps</div>
        <div>
          <button onClick={() => changeTempo(1)}>
            <img     src="icons/arrow-up-red.svg" alt="arrow up" />
          </button>
          <button onClick={() => changeTempo(-1)}>
            <img src="icons/arrow-down-red.svg" alt="arrow down" />
          </button>
        </div>
      </div>
    </DisplayPanelWrapper>
  );
}
