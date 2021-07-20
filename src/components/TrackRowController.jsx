import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles";
import {
  getInstrument,
  getInstrumentsByType,
  InstrumentType,
} from "../helpers/instruments";
import useSong from "../helpers/useSong";
import TrackModal from "./TrackModal";
import useClickOutside from "../helpers/useClickOutside";

//#region - styling -

const TrackController = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0 0 0;
  margin-bottom: 0;
  min-width: 15rem;
  min-height: 2rem;
  position: relative;
  border-radius: 0 .9rem;
  border-bottom: 1px solid ${(props) => props.trackColor.primary};
  
  
  
  .synth-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > button {
      all: unset;
      background: ${colors.button.optional};
      width: 2rem;
      height: 1rem;
      margin: 0.2rem;
      font-size: 0.5em;
      border-radius: 0.2rem;
      text-align: center;
    }

    .change-instrument {
      margin-left: 0.5rem;
      cursor: pointer;
      padding: 0 0.2rem;
      & > select {
        all: unset;
        max-width: 2rem;
      }
      & img {
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    .mute {
      margin-left: auto;
    }

    .more {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
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
  setEditTrack
}) {
  const { updateTrack, removeTracks } = useSong();
  const [showTrackModal, setShowTrackModal] = useState(false);


  // Get what this track type is
  const currentInstrumentType = getInstrument(track.instrument).type;

  // Get all instruments of same InstrumentType
  const instruments = getInstrumentsByType(currentInstrumentType);
  // const instrumentKeys = instruments.map((e) => e.name);

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
          onClick={() => setEditTrack(track)}
          className="change-instrument"
        >
          <img
            src={
              getInstrument(track.instrument).type === "beat"
                ? "icons/drum-machine.svg"
                : "icons/sound.svg"
            }
          />

        </div>
        <span>{track.instrument}</span>
        <div
          className="more"
          onClick={() => setShowTrackModal(prev => !prev)}
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
            alt="arrow"
          />
        </div>
      )}
    </TrackController>
  );
}
