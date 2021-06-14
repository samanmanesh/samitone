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
`;
const ModalContainer = styled.div`
  width: 40rem;
  min-height: 35rem;
  background: ${colors.background.primaryDark};
  color: white;
  border-radius: 0.5rem;
`;

export default function Modal({ showModal, setShowModal }) {
  const { options, setOptions, addTrack } = useSong();

  const handleAddTrack = (instrumentName) => {
    addTrack(instrumentName);
    setShowModal(false);
  };

  function handleKeyDown(e) {
    document.removeEventListener("keydown", this);
    // if (e.key === "Escape") handleClose();
    if (e.key === "Escape") setShowModal(false);
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);
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
        
        {instruments.map((instrument) => (
          <div
            onClick={() => handleAddTrack(instrument.name)}
            key={instrument.name}
          >
            {instrument.name}
          </div>
        ))}


        {getInstrumentsByType(showModal).map((instrument) => (
          <div
            onClick={() => handleAddTrack(instrument.name)}
            key={instrument.name}
          >
            {instrument.name}
          </div>
        ))}
        {/* {children} */}
      </ModalContainer>
    </ModalWrapper>
  );
}
