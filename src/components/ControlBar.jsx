import React, { useState, useContext } from "react";
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

const Header = styled.div`
  grid-area: playBar;
  display: flex;
   justify-content:space-between ;
  align-items: center;
  padding: 0.5rem;

  .menu{

  }
  .speed-bar-container{
    margin-left: 25rem;
    color:rgb(101, 96, 255);
  }




`;

const ControlPanel = styled.div`

  display: flex;
  margin-left: 35rem;
  & > button {
    all: unset;
    /* margin: 0.1rem; */
    padding: 0.5rem;
    & > img {
      /* width: 1.7rem;
      height: 1.7rem; */
    }
    
  }
  & > span{
    /* background: #622424; */
    padding-top:.7rem ;
    margin-left: .5rem;
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
    margin: .1rem 0 0.1rem 1rem;
    width: 4rem;
    height: 2rem;
    & > button {
      all: unset;
      cursor: pointer;
    }
   
  }
  & > h5{
      /* background:pink; */
      margin: 0rem 0 0 1rem;
      padding: 0;
    }
`;
// export default function ControlBar({ stepLength, setStepLength })
export default function ControlBar() {
  const { options, setOptions, addTrack } = useSong();
  const { play, pause } = usePlay();

  const [showModal, setShowModal] = useState(false);
  const stepOptions = [4, 8, 16, 24, 32, 64];
  const [isPlay, setIsPlay] = useState(false);
  const handleAddTrack = (instrumentName) => {
    addTrack(instrumentName);
    setShowModal(false);
  };

  const playHandler = () => {
    setIsPlay(!isPlay);

    if (isPlay === true) {
      play();
    } else if (isPlay === false) {
      pause();
    }
  };

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
        <Modal handleClose={() => setShowModal(false)}>
          <h3>Select Instrument</h3>
          {getInstrumentsByType(showModal).map((instrument) => (
            <div
              onClick={() => handleAddTrack(instrument.name)}
              key={instrument.name}
            >
              {instrument.name}
            </div>
          ))}
        </Modal>
      )}

      <section>
        <ControlPanel>
          <button onClick={() => playHandler()}>
            <img src="icons/play.svg" alt="play" /> 
          </button>
          <span>00:00</span>
        </ControlPanel>
      </section>
       
      <div className="speed-bar-container">
        
        <img src="icons/metronome-on.svg" alt="" />
        <img src="icons/metronome-off.svg" alt="" />
        <span>120 BMP | 4 BARS</span> 
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
