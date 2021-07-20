import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import colors from "../styles";
import SelectInput from "./SelectInput";

// #region - styling -

const ModalWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 4rem;
  width: 25rem;
  height: 10rem;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 0.4rem;
  z-index: 10;
  background: ${colors.background.primaryDark};

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1rem 4rem auto;
  grid-template-areas:
    "header header header header"
    "Left  main main  main "
    "nameBar bar bar bar";

  .bpm-display {
    grid-area: header;
    justify-self: center;
    align-self: center;
    margin-top: 1rem;
  }

  & > span {
    grid-area: Left;
    justify-self: center;
    align-self: center;
  }

  .slider {
    grid-area: main;
    justify-self: start;
    align-self: center;
    -webkit-appearance: none; //Override default CSS styles
    appearance: none;
    width: 85%; /* Full-width */
    height: 0.3rem; /* Specified height */
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
    height: 1.5rem; /* Slider handle height */
    background: ${colors.button.optional2};
    cursor: pointer; /* Cursor on hover */
    border-radius: 0.2rem;
  }

  .slider::-moz-range-thumb {
    grid-area: main;
    justify-self: start;
    align-self: center;
    width: 2rem; /* Set a specific slider handle width */
    height: 2rem; /* Slider handle height */
    background: ${colors.button.optional2};
    cursor: pointer; /* Cursor on hover */
  }

  .bpm-select {
    grid-area: bar;
    align-self: center;
  }

  .name-bars {
    grid-area: nameBar;
    /* background: blue; */
    justify-self: center;
    margin-right: 0.2rem;
    margin-left: 0.4rem;
  }
`;

// #endregion

export default function BpmModal() {
  const { options, setOptions } = useSong();
  const lengthOptions = ["4", "8", "16", "24"];
  const [selectedBarsIndex, setSelectedBarsIndex] = useState(
    lengthOptions.indexOf(`${options.stepLength}`)
  );

  const bpmConverter = (e) => {
    const bpm = e.target.value;
    const hz = bpm / 60;
    console.log(hz, "hz is ");

    setOptions({ ...options, bps: hz });
  };

  useEffect(() => {
    setOptions({ ...options, stepLength: lengthOptions[selectedBarsIndex] });
  }, [selectedBarsIndex]);

  return (
    <ModalWrapper onMouseDown={(e) => e.stopPropagation()}>
      <div className="bpm-display">{Math.round(options.bps * 60)}</div>

      <span>BPM</span>

      <input
        type="range"
        min="70"
        max="150"
        className="slider"
        value={options.bps * 60}
        onChange={(e) => bpmConverter(e)}
      />

      <SelectInput
        options={lengthOptions}
        selectedIndex={selectedBarsIndex}
        setSelectedIndex={setSelectedBarsIndex}
        className="bpm-select"
      />
      <span className="name-bars">BARS</span>
    </ModalWrapper>
  );
}
