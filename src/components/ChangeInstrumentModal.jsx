import React from "react";
import styled from "styled-components";
import colors from "../styles";
import { getInstrumentsByType, InstrumentType } from "../helpers/instruments";
import useSong from "../helpers/useSong";

//#region - styling -
const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  z-index: 99;
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
  background: ${(props) => props.instrumentColor.secondary};
  :hover {
    background: ${(props) => props.instrumentColor.primary};
    transition: all 0.5s ease;
  }
`;
// #endregion
export default function ChangeInstrumentModal({ show, track, handleClose }) {
  const { updateTrack } = useSong();
  if (!show) return null;

  const changedInstrument = (instrument) => {
    const newVersion = { ...track, instrument: instrument };
    updateTrack(track.id, newVersion);
  };

  const handleChange = (instrument) => {
    changedInstrument(instrument.name);
    handleClose();
  };

  return (
    <ModalWrapper onMouseDown={handleClose}>
      <ModalContainer onMouseDown={(e) => e.stopPropagation()}>
        <p> Change Instrument</p>

        <div className="beat-container">
          {getInstrumentsByType(InstrumentType.Beat).map((instrument) => (
            <InstrumentWrapper
              onClick={() => handleChange(instrument)}
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
              onClick={() => handleChange(instrument)}
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
