import React from "react";
import styled from "styled-components";
import usePlay from "../helpers/usePlay";
import colors from "../styles";

// #region -styling-
const TrackModalWrapper = styled.div`
  position: absolute;
  background: ${colors.background.secondary};
  right: 0.1rem;
  width: 15rem;
  height: 2.5rem;
  top: 3.3rem;
  border-radius: 0.2rem;
  display: flex;
  z-index: 10;

  .remove-container {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 100%;
    border-radius: 0.5rem;
    border-right: 1px solid ${colors.blue.primary};
    cursor: pointer;
    & > img{
        width:1rem;
        height:1rem;
    }
  }

  .volume-container {
    display: flex;
    align-items: center;
    & > img {
      margin: 0 0.5rem 0 1rem;

      width: 1rem;
      height: 1rem;
    }

    .slider {
      grid-area: main;
      justify-self: start;
      align-self: center;
      /* margin-left: 0.5rem; */
      -webkit-appearance: none; //Override default CSS styles
      appearance: none;
      width: 90%; /* Full-width */
      height: 0.1rem; /* Specified height */
      background: ${colors.button.bar};
      outline: none; /* Remove outline */
      opacity: 1; /* Set transparency (for mouse-over effects on hover) */
      -webkit-transition: 50s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
      border-radius: 0.1rem;
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
      grid-area: main;
      justify-self: start;
      align-self: center;
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 1.5rem; /* Set a specific slider handle width */
      height: 1rem; /* Slider handle height */
      background: ${colors.button.optional2};
      cursor: pointer; /* Cursor on hover */
      border-radius: 0.2rem;
    }

    .slider::-moz-range-thumb {
      grid-area: main;
      justify-self: start;
      align-self: center;
      width: 1.5rem; /* Set a specific slider handle width */
      height: 1.5rem; /* Slider handle height */
      background: ${colors.button.optional2};
      cursor: pointer; /* Cursor on hover */
    }
  }
`;

// #endregion

export default function TrackModal({ removeTracksHandler, track }) {

  return (
    <TrackModalWrapper onMouseDown={(e) => e.stopPropagation()}>
      <div
        className="remove-container"
        onClick={() => removeTracksHandler(track.id)}
      >
        <img src="icons/remove.svg" alt="remove" />
      </div>
      {/* <div className="volume-container">
        <img src="icons/volume-max.svg" alt="volume" />
        <input
          type="range"
          min="0"
          max="100"
          className="slider"
          // value={bps}
          // value={options.bps * 60}
          // onChange={(e) => setBps(e.target.value)}
          // onChange={(e) => bpmConverter(e)}
        />
        


      </div> */}
    </TrackModalWrapper>
  );
}
