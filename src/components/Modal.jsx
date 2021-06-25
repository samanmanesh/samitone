import React, { useEffect } from "react";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import colors from "../styles";
import {
  getInstrumentsByType,
  instruments,
  InstrumentType,
} from "../helpers/instruments";


// #region - styling -
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
  & > p {
    color: ${colors.font.secondary};
    font-size: 2ch;
    font-weight: bolder;
    margin-left: 42%;
    
  }

  .beat-container {
    display: flex;
    align-content: center;
    /* justify-content: space-between; */
    align-items: stretch;
    flex-wrap: wrap;
    border-bottom: 4px solid ${colors.background.secondary};
    border-top: 4px solid ${colors.background.secondary};
    & > div {
      width: 4.5rem;
      height: 3rem;
      font-size: 1.4ch;
      margin: 1rem 2rem;
      cursor: pointer;
      display: grid;
      place-items: center;
      border-radius: 0.3rem;
      

    }
  }

  .synth-container {
    display: flex;
    align-content: center;
    /* justify-content: space-between; */
    align-items: stretch;
    flex-wrap: wrap;

    & > div {
      width: 4.5rem;
      height: 3rem;
      font-size: 1.4ch;
      margin: 1rem 2rem;
      cursor: pointer;
      display: grid;
      place-items: center;
      border-radius: 0.3rem;
    }
  }
`;
const InstrumentWrapper = styled.div`
  /* background: blue; */
  background: ${(props) => props.instrumentColor.secondary};
  :hover{
        background: ${(props) => props.instrumentColor.primary};
        transition: all 0.5s ease;
      }
`;

// #endregion
export default function Modal({ showModal, setShowModal }) {
  const { options, setOptions, addTrack } = useSong();

  const handleAddTrack = (instrumentName) => {
    addTrack(instrumentName);
    // setShowModal(false);
  };

  return (
    <ModalWrapper onMouseDown={() => setShowModal(false)}>
      <ModalContainer onMouseDown={(e) => e.stopPropagation()}>
        <p>Select Instrument</p>

        <div className="beat-container">
          {getInstrumentsByType(InstrumentType.Beat).map((instrument) => (
            <InstrumentWrapper
              onClick={() => handleAddTrack(instrument.name)}
              key={instrument.name}
              instrumentColor={instrument.colors}
            >
              {instrument.name}
            </InstrumentWrapper>
          ))}
        </div>
        <div className="synth-container">
          {getInstrumentsByType(InstrumentType.Synth).map((instrument) => (
            <InstrumentWrapper
              onClick={() => handleAddTrack(instrument.name)}
              key={instrument.name}
              instrumentColor={instrument.colors}
            >
              {instrument.name}
            </InstrumentWrapper>
          ))}
        </div>
      </ModalContainer>
    </ModalWrapper>
  );
}
