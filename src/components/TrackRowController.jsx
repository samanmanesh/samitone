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
import useClickOutside from "../helpers/useClickOutside";
import InstrumentChangeModal from "./InstrumentChangeModal";

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
  z-index: 0;
  border-radius: 0.5rem;
  border-bottom: 1px solid ${(props) => props.trackColor.primary};

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

    .change-instrument {
      margin-left: 0.5rem;
      background: #7b1a1a;
      padding: 0 0.2rem;
      & > select {
        all: unset;
        /* display: none; */
        max-width: 2rem;
      }
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
`;

// #endregion

export default function TrackRowController({
  track,
  isCollapsed,
  setIsCollapsed,
}) {
  
  const { updateTrack, removeTracks } = useSong();
  const [showTrackModal, setShowTrackModal] = useState(false);
  const [showInstrumentsModal, setShowInstrumentsModal] = useState(false);

  // const changedInstrument = (instrument) => {
  //   console.log(instrument,"read the changeInst")
  //   updateTrack(track.id, { ...track, instrument: instrument });
  // };

  // Get what this track type is
  const currentInstrumentType = getInstrument(track.instrument).type;

  // Get all instruments of same InstrumentType
  const instruments = getInstrumentsByType(currentInstrumentType);
  const instrumentKeys = instruments.map((e) => e.name);

  const removeTracksHandler = (trackId) => {
    removeTracks(trackId);
  };

  let domNode = useClickOutside(() => {
    setShowTrackModal(false);
  });

  return (
    <TrackController trackColor={getInstrument(track.instrument).colors}>
      <div className="synth-container">
        <div
          onClick={() => setShowInstrumentsModal((prev) => !prev)}
          className="change-instrument"
        >
          change
          {/* <select
            // value={track.instrument}

            onChange={(e) => changedInstrument(e.target.value)}
            key="instrument-selector"
          >
            {instrumentKeys.map((e, i) => (
              <option value={e} key={`instrument-selector__${i}`}>
                {e}
              </option>
            ))}
          </select> */}
        </div>

        {showInstrumentsModal && (
          <InstrumentChangeModal
          // changedInstrument={changedInstrument}
            setShowInstrumentsModal={setShowInstrumentsModal}
            track={track}
          />
        )}

        <span>{track.instrument}</span>

        <button className="mute">Mute</button>
        <button className="solo">Solo</button>
        <div
          className="more"
          onClick={() => setShowTrackModal((prev) => !prev)}
          ref={domNode}
        >
          <img src="icons/more.svg" alt="" />
        </div>
        {showTrackModal && (
          <TrackModal removeTracksHandler={removeTracksHandler} track={track} />
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
