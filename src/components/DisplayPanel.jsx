import React from 'react'
import styled from "styled-components";
import colors from "../styles";
const DisplayPanelWrapper = styled.div`
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


export default function DisplayPanel() {
    return (
             <DisplayPanelWrapper>
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
        </DisplayPanelWrapper>
    )
}
