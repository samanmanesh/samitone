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
  /* display: flex; */
  /* align-items: center; */
  background: #b16b10;
  /* width: 25rem; */
  .minibar-control {
    /* background: #74961d; */

    .add-row-selector {
      /* background: #273070; */
      /* margin-right: 1rem; */
      /* position: relative; */
      /* align-self: top; */
    }
  }

  .main-control {
    /* background: #63127e; */
    display:flex;
    align-items: center;
    .change-instrument {
      /* position: absolute; */
      /* background: #000; */
      padding:0 .1rem;
    }

    & > button {
        all: unset;
        background: #893535;
        width:2rem;
        height:2rem;
        margin:.2rem;
        font-size:.5em;
        border-radius: .4rem;

    }

    & > span{
        margin:.2rem;
        font-size: .8em;
    }



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
      {track.instrument !== "Kick" && (
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
      )}

      <section className="main-control">
        <div className="change-instrument">
          <img src="" alt="icons" />
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

        <button>Mute</button>
        <button>Solo</button>

        <span>{track.instrument}</span>

        
          <span>Velocity</span>
          
          <button>0</button>
      </section>
    </TrackController>
  );
}
