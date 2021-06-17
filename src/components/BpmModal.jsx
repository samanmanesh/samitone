import React from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import colors from "../styles";


const ModalWrapper = styled.div`
  position: fixed;
  top: 3rem;
  right: 4rem;
  width: 20rem;
  height: 10rem;
  border-radius: 0.4rem;
  z-index: 10;
  background: ${colors.background.primaryDark};

  display: flex;
  flex-direction: column;
  .bpm {
    background: #4b4b9b;
    height: 50%;
  }
  .bar-sig-container {
    background: #632d2d;
    height: 50%;
    display: flex;
    .bar {
      background: #1d2852;
      width: 50%;
    }

    .sig {
      background: #511d52;
      width: 50%;
    }
  }
`;


export default function BpmModal() {
  const { options, setOptions } = useSong();


  const bpmConverter = (e) =>{

    const bpm = e.target.value;
    const hz = bpm / 60;
    console.log(hz, "hz is ")

  setOptions({ ...options, bps: hz })
}

console.log(options.bps * 60);
  return (
    <ModalWrapper>
      <section className="bpm">
        
        //* write a function to convert the e.target.value from 0.1 to 0.9 
        <input
        type="range"
        min="70"
        max="150"
        className="slider"
        // value={bps}
        value={options.bps * 60 }
        // onChange={(e) => setBps(e.target.value)}
        onChange={(e) => bpmConverter(e) }
      />
        bpm
      </section>
      <section className="bar-sig-container">
        <div className="bar">bar</div>
        <div className="sig">sig</div>
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
