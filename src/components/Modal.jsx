import React, { useEffect } from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import colors from "../styles";
import {
  getInstrumentsByType,
  instruments,
  InstrumentType,
} from "../helpers/instruments";
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /*  */
  display: grid;
  place-items: center;
  /* position: relative; */
  z-index: 15;
`;
const ModalContainer = styled.div`
  width: 60rem;
  min-height: 35rem;
  background: ${colors.background.primaryDark};
  color: white;
  border-radius: 0.5rem;


  .beat-container{
    background: #673535;
  }

  .synth-container{
    background: #19575b;
  }


`;

export default function Modal({ showModal, setShowModal }) {
  const { options, setOptions, addTrack } = useSong();

  const handleAddTrack = (instrumentName) => {
    addTrack(instrumentName);
    // setShowModal(false);
  };

  // function handleKeyDown(e) {
  //   document.removeEventListener("keydown", this);
  //   // if (e.key === "Escape") handleClose();
  //   if (e.key === "Escape") setShowModal(false);
  // }
  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);
  // }, []);
  return (
    // handleClose={() => setShowModal(false)}
    // <ModalWrapper onMouseDown={() => handleClose()}>
    <ModalWrapper onMouseDown={() => setShowModal(false)}>
      <ModalContainer onMouseDown={(e) => e.stopPropagation()}>
        <h3>Select Instrument</h3>
        {/* <div>
          <button onClick={() => setShowModal(InstrumentType.Beat)}>
            Beat
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(InstrumentType.Synth)}>
            Synth
          </button>
        </div> */}
        <div className="beat-container">

        {getInstrumentsByType(InstrumentType.Beat).map((instrument) => (
          <div
          
            onClick={() => handleAddTrack(instrument.name)}
            key={instrument.name}
          >
            {instrument.name}
          </div>
        ))}
        </div>
        {getInstrumentsByType(InstrumentType.Synth).map((instrument) => (
          <div
            className="synth-container"
            onClick={() => handleAddTrack(instrument.name)}
            key={instrument.name}
          >
            {instrument.name}
          </div>
        ))}


        {/* {getInstrumentsByType(showModal).map((instrument) => (
          <div
            onClick={() => handleAddTrack(instrument.name)}
            key={instrument.name}
          >
            {instrument.name}
          </div>
        ))} */}
        {/* {children} */}
      </ModalContainer>
    </ModalWrapper>
  );
}
