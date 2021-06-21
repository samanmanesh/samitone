import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import colors from "../styles";
import useSong from "../helpers/useSong";
import Modal from "./Modal";
import {
  getInstrumentsByType,
  instruments,
  InstrumentType,
} from "../helpers/instruments";
import usePlay from "../helpers/usePlay";
import BpmModal from "./BpmModal";
import useClickOutside from "../helpers/useClickOutside";

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
    margin-left: 10rem;
    cursor: pointer;
  }
  .speed-bar-container {
    /* color:#C8C7EA; */
    color: #c4c2f0;
    /* padding-right: 10rem; */
    display: flex;
    align-items: center;
    cursor: pointer;

    & > div {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
      border: 2px solid ${colors.button.metronomeBorder};
      :nth-child(2) {
        margin-right: 1rem;
        margin-left: 0.2rem;
      }
    }
  }
`;
const On = styled.div`
  background: ${(props) =>
    props.check === 0
      ? colors.button.metronome
      : colors.background.primaryDark};
`;

const Off = styled.div`
  background: ${(props) =>
    props.check === 1
      ? colors.button.metronome
      : colors.background.primaryDark};
`;

const ControlPanel = styled.div`
  display: flex;
  margin-left: auto;

  /* margin-right: 30rem; */
  margin-right: auto;
  & > button {
    all: unset;
    cursor: pointer;
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
    cursor: pointer;
    & > button {
      all: unset;
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
  const { play, pause, on } = usePlay();
  const [showModal, setShowModal] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [showBpmModal, setShowBpmModal] = useState(false);

  useEffect(() => {
    if (isPlay) {
      play();
    } else {
      pause();
    }
  }, [isPlay]);

  let domNode = useClickOutside(() => {
    setShowBpmModal(false);
    setShowModal(false);
  });

  return (
    <Header>
      {/* <section>
        <DisplayPanel />
      </section> */}

      <AddTrack ref={domNode}>
        <div>
          <button onClick={() => setShowModal(InstrumentType.Beat)}>
            <img src="icons/plus.svg" alt="plus" />
          </button>
        </div>
        <h5>New Track</h5>
      </AddTrack>

      {showModal && (
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      )}

      <ControlPanel>
        <button onClick={() => setIsPlay((prev) => !prev)}>
          <img
            src={isPlay === true ? "icons/stop.svg" : "icons/play.svg"}
            alt="play"
          />
        </button>
      </ControlPanel>

      <div
        className="speed-bar-container"
        onClick={() => setShowBpmModal((prev) => !prev)}
        ref={domNode}
      >
        <On check={on}></On>
        <Off check={on}></Off>

        <span>
          {Math.round(options.bps * 60)} BPM | {options.stepLength} BARS
        </span>
      </div>
      {showBpmModal && <BpmModal />}

      <div className="menu">
        <img src="icons/menu.svg" alt="menu" />
      </div>
    </Header>
  );
}
