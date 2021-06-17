import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import colors from "../styles";
import DisplayPanel from "./DisplayPanel";
import useSong from "../helpers/useSong";
import Modal from "./Modal";
import {
  getInstrumentsByType,
  instruments,
  InstrumentType,
} from "../helpers/instruments";
import usePlay from "../helpers/usePlay";

// #region - styling -
const Header = styled.div`
  grid-area: playBar;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  .menu {
    margin-right: 1rem;
    margin-left: 10rem ;
  }
  .speed-bar-container {
    color: rgb(101, 96, 255);
    /* padding-right: 10rem; */
    display: flex;
    align-items: center;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  margin-left:auto;
  /* margin-right: 30rem; */
  margin-right:auto;
  & > button {
    all: unset;
    /* margin: 0.1rem; */
    padding: 0.5rem;
   
  }
  & > span {
    /* background: #622424; */
    padding-top: 0.7rem;
    margin-left: 0.5rem;
  }
`;

const AddTrack = styled.div`
  /* display: flex; */
  padding: 0;
  margin: 0;
  & > div {
    display: flex;
    justify-content: center;
    background: ${colors.button.secondary};
    border-radius: 0.4rem;
    margin: 0.1rem 0 0.1rem 1rem;
    width: 4rem;
    height: 2rem;
    & > button {
      all: unset;
      cursor: pointer;
    }
  }
  & > h5 {
    /* background:pink; */
    margin: 0rem 0 0 1rem;
    padding: 0;
  }
`;
// #endregion

// export default function ControlBar({ stepLength, setStepLength })
export default function ControlBar() {
  const { options, setOptions, addTrack } = useSong();
  const { play, pause } = usePlay();

  const [showModal, setShowModal] = useState(false);
  // const stepOptions = [4, 8, 16, 24, 32, 64];
  const [isPlay, setIsPlay] = useState(false);
  
  
  // const handleAddTrack = (instrumentName) => {
  //   addTrack(instrumentName);
  //   setShowModal(false);
  // };

  useEffect(() => {
    if (isPlay) {
      play();
    } else{
      pause();
    }
  }, [isPlay])


  return (
    <Header>
      {/* <section>
        <DisplayPanel />
      </section> */}

      <AddTrack>
        <div>
          <button onClick={() => setShowModal(InstrumentType.Beat)}>
            <img src="icons/plus.svg" alt="plus" />
          </button>
        </div>
        <h5>New Track</h5>

        {/* <button onClick={() => setShowModal(InstrumentType.Beat)}>
            <img src="icons/plus.svg" alt="plus" />
            Instrument Drum
          </button>
        </div>
        <div>
          <button onClick={() => setShowModal(InstrumentType.Synth)}>
            <img src="icons/plus.svg" alt="plus" />
            Instrument Melody
          </button> */}
      </AddTrack>

      {showModal && (
        <Modal  showModal={showModal} setShowModal={setShowModal}>
          {/* <h3>Select Instrument</h3> */}
            

          {/* {getInstrumentsByType(showModal).map((instrument) => (
            <div
              onClick={() => handleAddTrack(instrument.name)}
              key={instrument.name}
            >
              {instrument.name}
            </div>
          ))} */}
        </Modal>
      )}

      <ControlPanel>
        <button onClick={() => setIsPlay( prev => !prev) }>
          <img src={isPlay === true ? "icons/stop.svg" : "icons/play.svg"} alt="play" />
        </button>
        <span>00:00</span>
      </ControlPanel>

      <div className="speed-bar-container">
        <img src="icons/metronome-on.svg" alt="" />
        <img src="icons/metronome-off.svg" alt="" />
        <span>120 BPM | 4 BARS</span>
      </div>

      <div className="menu">
        <img src="icons/menu.svg" alt="menu" />
      </div>

      {/* <input
        type="number"
        // value={bps}
        value={options.bps}
        // onChange={(e) => setBps(e.target.value)}
        onChange={(e) => setOptions({ ...options, bps: e.target.value })}
      /> */}
    </Header>
  );
}
