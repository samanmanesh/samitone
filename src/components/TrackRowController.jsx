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
  align-items: center;
  /* background: #b16b10; */
  width: 17.2rem;
  min-height: 3.5rem;
 
  .minibar-control {
    /* background: #74961d; */

    .add-row-selector {
        height:5%;
      /* background: #273070; */
      font-size: 1.5ch;
      & > select{
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
    display:flex;
    align-items: center;

    .change-instrument {
      /* position: absolute; */
      /* background: #000; */
      padding:0 .2rem;
      /* max-width: 1rem; */
      & > select{
          max-width: 3rem;
      }

    }
  }


  & > button {
        all: unset;
        background:${colors.button.optional};
        width:2rem;
        height:1rem;
        margin:.2rem;
        font-size:.5em;
        border-radius: .1rem;
        text-align:center;
    }
    .mute{
      margin-left:auto;
    }
        
    .more{
      margin-right: .5rem;
      margin-left:.5rem;
    }

    & > span{
        margin:.2rem;
        font-size: .8em;
    }




`;

const TrackDetails = styled.div`
  /* display: flex; */
`;

export default function TrackRowController({ track }) {
  const { updateTrack, options, setOptions } = useSong();

  const changedInstrument = (instrument) => {
    updateTrack(track.id, { ...track, instrument: instrument });
  };

  // Get what this track type is
  const currentInstrumentType = getInstrument(track.instrument).type;

  // Get all instruments of same InstrumentType
  const instruments = getInstrumentsByType(currentInstrumentType);
  const instrumentKeys = instruments.map((e) => e.name);

  const rowList = [1, 2, 3, 4, 5, 6, 7];

  const addRowHandler = (rowToDisplay) => {
    updateTrack(track.id, { ...track, rowDisplay: rowToDisplay });
    console.log(track.rowDisplay, "rowDisplay");
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
        <div className="more"><img src="icons/more.svg" alt="" /></div>
        {/* <div>^</div>   */}
      
    </TrackController>
  );
}
