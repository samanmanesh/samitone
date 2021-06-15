import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import {
  getInstrument,
  getInstrumentsByType,
  instruments,
} from "../helpers/instruments";
import useSong from "../helpers/useSong";

const TrackController = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  padding: 1.5rem 0 0 0;
  margin-bottom: 0;
  /* background: #b16b10; */
  min-width: 15rem;
  min-height: 2rem;

  .synth-container {
    display: flex;
    /* background: #610707; */
    align-items: center;
    & > button {
      all: unset;
      background: ${colors.button.optional};
      width: 2rem;
      height: 1rem;
      margin: 0.2rem;
      font-size: 0.5em;
      border-radius: 0.1rem;
      text-align: center;
    }
    .mute {
      margin-left: auto;
    }

    .more {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }

    & > span {
      margin: 0.2rem;
      font-size: 0.8em;
    }
  }
  .collapse-button {
    /* background: ${colors.button.optional}; */
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 1rem;
    margin-right: .3rem;
    width: 2rem;
    height: 1rem;
    border-radius: 0.1rem;
    
    & > img{
      width:1rem;
      height:1rem;
      margin-left:.5rem;
    }

  }

  .minibar-control {
    /* background: #74961d; */

    .add-row-selector {
      height: 5%;
      /* background: #273070; */
      font-size: 1.5ch;
      & > select {
        /* height:1rem;
          width:2rem; */
      }

      /* margin-right: 1rem; */
      /* position: relative; */
      /* align-self: top; */
    }
  }

  .main-control {
    background: #63127e;
    display: flex;
    align-items: chanter;

    .change-instrument {
      /* position: absolute; */
      /* background: #000; */
      padding: 0 0.2rem;
      /* max-width: 1rem; */
      & > select {
        max-width: 3rem;
      }
    }
  }
`;

export default function TrackRowController({ track }) {
  const { updateTrack, options, setOptions } = useSong();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const changedInstrument = (instrument) => {
    updateTrack(track.id, { ...track, instrument: instrument });
  };

  // Get what this track type is
  const currentInstrumentType = getInstrument(track.instrument).type;

  // Get all instruments of same InstrumentType
  const instruments = getInstrumentsByType(currentInstrumentType);
  const instrumentKeys = instruments.map((e) => e.name);

  // const rowList = [1, 2, 3, 4, 5, 6, 7];

  // const addRowHandler = (rowToDisplay) => {
  //   updateTrack(track.id, { ...track, rowDisplay: rowToDisplay });
  //   console.log(track.rowDisplay, "rowDisplay");
  // };

  const collapseHandler = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed === true) {
      updateTrack(track.id, { ...track, rowDisplay: 1 });
    } else if(isCollapsed === false) {
      updateTrack(track.id, { ...track, rowDisplay: 7 });
    }
  };

  return (
    <TrackController>
      {/* {track.instrument !== "Kick" && (
        <section className=" minibar-control">
          <div className="add-row-selector">
            +
            <select
              name=""
              id=""
              onChange={(e) => addRowHandler(e.target.value)}
            >
              {rowList.map((e, i) => (
                <option value={e} key={`instrument-selector__${i}`}>
                  {e}
                </option>
              ))}
            </select>
          </div>
        </section>
      )} */}
      <div className="synth-container">
        <div className="change-instrument">
          {/* <img src="" alt="icons" /> */}
          <select
            value={track.instrument}
            onChange={(e) => changedInstrument(e.target.value)}
            key="instrument-selector"
          >
            {instrumentKeys.map((e, i) => (
              <option value={e} key={`instrument-selector__${i}`}>
                {e}
              </option>
            ))}
          </select>
        </div>

        <span>{track.instrument}</span>

        <button className="mute">Mute</button>
        <button className="solo">Solo</button>
        <div className="more">
          <img src="icons/more.svg" alt="" />
        </div>
      </div>

      {track.instrument !== "Kick" && (
        <div className="collapse-button" onClick={() => collapseHandler()}>
          {isCollapsed=== true &&
          <img src="icons/arrow-up.svg" alt=""  />
          }
          {isCollapsed=== false &&
          <img src="icons/arrow-down.svg" alt=""  />
          }
          
        </div>
      )}
    </TrackController>
  );
}
