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
  .bpm{
      background: #4b4b9b;
      height:50%;
  } 
  .bar-sig-container{
    background: #632d2d;
    height:50%;
    display: flex;
    .bar{
        background: #1d2852;
        width:50%;
    }

    .sig{
        background: #511d52;
        width:50%;
    }

  }

`;

export default function BpmModal() {
    const { options, setOptions} = useSong();

  return (
    <ModalWrapper>
      
      <section className="bpm">
          <input
        type="number"
        // value={bps}
        value={options.bps}
        // onChange={(e) => setBps(e.target.value)}
        onChange={(e) => setOptions({ ...options, bps: e.target.value })}
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
