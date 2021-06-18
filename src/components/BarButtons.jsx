import React, { useState } from "react";
import styled from "styled-components";

const BarWrapper = styled.div`
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
`;

export default function BarButtons() {
  const [bt1IsClick, setBt1IsClick] = useState(true);
  const [bt2IsClick, setBt2IsClick] = useState(false);

  const barsButtonsHandler = (e) => {
    if (e === bt1IsClick) {
      setBt1IsClick((prev) => !prev);
      setBt2IsClick((prev) => !prev);
    }
    if (e === bt2IsClick) {
      setBt2IsClick((prev) => !prev);
      setBt1IsClick((prev) => !prev);
    }
  };

  
  return (
    <BarWrapper className="bar">
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
    </BarWrapper>
  );
}
