import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import {
  getInstrument,
  getInstrumentsByType,
  instruments,
  InstrumentType,
} from "../helpers/instruments";
import useSong from "../helpers/useSong";
import TrackModal from "./TrackModal";

//#region - styling -

const TrackController = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  padding: 1.5rem 0 0 0;
  margin-bottom: 0;
  /* background: #b16b10; */
  min-width: 15rem;
  min-height: 2rem;
  position: relative;
  
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
      /* position: relative; */
      cursor: pointer;
    }

    & > span {
      margin: 0.2rem;
      font-size: 0.8em;
    }
  }
  .collapse-button {
    margin-top: auto;
    margin-left: auto;
    margin-bottom: 1rem;
    margin-right: 0.3rem;
    width: 2rem;
    height: 1rem;
    border-radius: 0.1rem;
    cursor: pointer;
    & > img {
      width: 1rem;
      height: 1rem;
      margin-left: 0.5rem;
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

// #endregion

export default function TrackRowController({
  track,
  isCollapsed,
  setIsCollapsed,
}) {
  const { updateTrack, removeTracks } = useSong();
  const changedInstrument = (instrument) => {
    updateTrack(track.id, { ...track, instrument: instrument });
  };
  const [showTrackModal, setShowTrackModal] = useState(false);
  // Get what this track type is
  const currentInstrumentType = getInstrument(track.instrument).type;

  // Get all instruments of same InstrumentType
  const instruments = getInstrumentsByType(currentInstrumentType);
  const instrumentKeys = instruments.map((e) => e.name);

  const removeTracksHandler = (trackId) => {
    removeTracks(trackId);
  };

  return (
    <TrackController>
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
        <div
          className="more"
          onClick={() => setShowTrackModal((prev) => !prev)}
        >
          <img src="icons/more.svg" alt="" />
          
        </div>
        {showTrackModal && (
            <TrackModal removeTracksHandler={removeTracksHandler} track={track}  />
          )}
        
      </div>

      {getInstrument(track.instrument).type === InstrumentType.Synth && (
        <div
          className="collapse-button"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          <img
            src={isCollapsed ? "icons/arrow-down.svg" : "icons/arrow-up.svg"}
            alt=""
          />
        </div>
      )}
    </TrackController>
  );
}
