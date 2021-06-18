import React, { useState } from "react";
import styled from "styled-components";

const TimeSigWrapper = styled.div`
  width: 50%;
  .sig-buttons-container {
    background: rgb(55, 52, 52);
    width: 9rem;
    height: 2.3rem;
    margin: 0.2rem 0 0 2rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;

    & > button {
      all: unset;
      text-align: center;
      width: 50%;
      height: 70%;
      cursor: pointer;
      margin-right: 0.1rem;
      border-radius: 0.2rem;
      transition: ease 0.2s;
    }

    .btn-1 {
      margin-left: 0.1rem;
    }
    .btn-2 {
    }
    .btn-3 {
    }
    .btn-4 {
    }
  }
  & > p {
    width: 5rem;
    margin: 0.4rem 0 0 4.5rem;
  }
`;

export default function TimeSigButtons() {
  const [bt1IsClick, setBt1IsClick] = useState(true);
  const [bt2IsClick, setBt2IsClick] = useState(false);
  const [bt3IsClick, setBt3IsClick] = useState(false);
  const [bt4IsClick, setBt4IsClick] = useState(false);

  const barsButtonsHandler = (e) => {
    if (e === bt1IsClick) {
      setBt1IsClick(true);
      setBt2IsClick(false);
      setBt3IsClick(false);
      setBt4IsClick(false);
    } else if (e === bt2IsClick) {
      setBt2IsClick(true);
      setBt1IsClick(false);
      setBt3IsClick(false);
      setBt4IsClick(false);
    } else if (e === bt3IsClick) {
      setBt3IsClick(true);
      setBt1IsClick(false);
      setBt2IsClick(false);
      setBt4IsClick(false);
    } else if (e === bt4IsClick) {
      setBt4IsClick(true);
      setBt3IsClick(false);
      setBt2IsClick(false);
      setBt1IsClick(false);
    }
  };
  console.log(bt1IsClick, "bt1IsClick");
  console.log(bt2IsClick, "bt2IsClick");
  console.log(bt3IsClick, "bt3IsClick");
  console.log(bt4IsClick, "bt4IsClick");

  return (
    <TimeSigWrapper>
      <div className="sig-buttons-container">
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
          4
        </button>
        <button
          style={
            bt2IsClick
              ? { background: "rgb(101, 96, 255)" }
              : { background: "rgb(55, 52, 52)" }
          }
          onClick={() => barsButtonsHandler(bt2IsClick)}
          value={bt2IsClick}
          className="btn-2"
        >
          8
        </button>
        <button
          style={
            bt3IsClick
              ? { background: "rgb(101, 96, 255)" }
              : { background: "rgb(55, 52, 52)" }
          }
          onClick={() => barsButtonsHandler(bt3IsClick)}
          value={bt3IsClick}
          className="btn-3"
        >
          16
        </button>
        <button
          style={
            bt4IsClick
              ? { background: "rgb(101, 96, 255)" }
              : { background: "rgb(55, 52, 52)" }
          }
          onClick={() => barsButtonsHandler(bt4IsClick)}
          value={bt4IsClick}
          className="btn-4"
        >
          24
        </button>
      </div>
      <p>TIME SIG</p>
    </TimeSigWrapper>
  );
}
