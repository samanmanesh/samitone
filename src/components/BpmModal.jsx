import React, { useState } from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import colors from "../styles";
import BarButtons from "./BarButtons";

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

  display: flex;
  flex-direction: column;

  .bpm {
    /* background: #4b4b9b; */
    height: 50%;
    & > div {
      width: 2rem;
      /* margin-left: auto;
        margin-right:9.5rem; */
      margin: 0.5rem 9.5rem 0 auto;
      font-size: 1.5ch;
    }
    & > span {
      margin-left: 1rem;
    }

    .slider {
      /* padding-bottom: .2rem; */
      margin: 1.3rem 0 0 2.5rem;
      -webkit-appearance: none; //Override default CSS styles
      appearance: none;
      width: 70%; /* Full-width */
      height: 0.3rem; /* Specified height */
      background: rgba(153, 199, 255, 0.79);
      outline: none; /* Remove outline */
      opacity: 1; /* Set transparency (for mouse-over effects on hover) */
      -webkit-transition: 50s; /* 0.2 seconds transition on hover */
      transition: opacity 0.2s;
      border-radius: 0.1rem;
    }

    /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 1.5rem; /* Set a specific slider handle width */
      height: 1.5rem; /* Slider handle height */
      background: rgba(69, 56, 214, 0.99);
      cursor: pointer; /* Cursor on hover */
      border-radius: 0.2rem;
    }

    .slider::-moz-range-thumb {
      width: 2rem; /* Set a specific slider handle width */
      height: 2rem; /* Slider handle height */
      background: rgba(69, 56, 214, 0.99);
      cursor: pointer; /* Cursor on hover */
    }
  }
  .bar-sig-container {
    /* background: #632d2d; */
    height: 50%;
    display: flex;
    .bar {
      /* background: #1d2852; */
      width: 50%;
      .bar-buttons-container {
        background: rgb(55, 52, 52);
        width: 7rem;
        height: 2.3rem;
        margin: 0.2rem 0 0 auto;
        border-radius: 0.3rem;
        display: flex;

        & > button {
          all: unset;
          text-align: center;
          width: 50%;
          height: 70%;
          margin: 0.3rem 0rem 0rem 0rem;
          cursor: pointer;
        }
        .btn-1 {
          margin-left: 0.1rem;
          border-radius: 0.2rem;
          transition: ease 0.2s;
        }
        .btn-2 {
          margin-right: 0.1rem;
          border-radius: 0.2rem;
        }
      }
      & > p {
        /* background: #805353; */
        width: 2.5rem;
        margin: 0.4rem 2rem 0 auto;
      }
    }

    .sig {
      /* background: #511d52; */
      width: 50%;
    }
  }
`;

// #endregion

export default function BpmModal() {
  const { options, setOptions } = useSong();
//   const [bt1IsClick, setBt1IsClick] = useState(true);
//   const [bt2IsClick, setBt2IsClick] = useState(false);

  const bpmConverter = (e) => {
    const bpm = e.target.value;
    const hz = bpm / 60;
    console.log(hz, "hz is ");

    setOptions({ ...options, bps: hz });
  };

//   const barsButtonsHandler = (e) => {
//     if (e === bt1IsClick) {
//       setBt1IsClick((prev) => !prev);
//       setBt2IsClick((prev) => !prev);
//     }
//     if (e === bt2IsClick) {
//       setBt2IsClick((prev) => !prev);
//       setBt1IsClick((prev) => !prev);
//     }
//   };

//   console.log(options.bps * 60);
//   console.log(bt1IsClick, "bt1IsClick");
//   console.log(bt2IsClick, "bt2IsClick");
  return (
    <ModalWrapper>
      <section className="bpm">
        <div>{Math.round(options.bps * 60)}</div>

        <span>BPM</span>

        <input
          type="range"
          min="70"
          max="150"
          className="slider"
          // value={bps}
          value={options.bps * 60}
          // onChange={(e) => setBps(e.target.value)}
          onChange={(e) => bpmConverter(e)}
        />
      </section>
     
      <section className="bar-sig-container">
        <BarButtons />

        {/* <div className="bar">
          <div className="bar-buttons-container">
            <button
              className="btn-1"
              style={
                bt1IsClick
                  ? { background: "rgb(101, 96, 255)" }
                  : { background: "rgb(55, 52, 52)" }
              }
              onClick={() => barsButtonsHandler(bt1IsClick)}
              value={bt1IsClick}
            >
              4/4
            </button>
            <button
              className="btn-2"
              style={
                bt2IsClick
                  ? { background: "rgb(101, 96, 255)" }
                  : { background: "rgb(55, 52, 52)" }
              }
              onClick={() => barsButtonsHandler(bt2IsClick)}
            >
              8/8
            </button>
          </div>
          <p>BARS</p>
        </div> */}
        <div className="sig">
          <div className="sig-buttons-container">

              <button className="btn-3"></button>
              <button className="btn-4"></button>
              <button className="btn-5"></button>
              <button className ="btn-6"></button>
          </div>
        </div>
      </section>

      {/* <input
        type="number"
        // value={bps}
        value={options.bps}
        // onChange={(e) => setBps(e.target.value)}
        onChange={(e) => setOptions({ ...options, bps: e.target.value })}
      /> */}
    </ModalWrapper>
  );
}
