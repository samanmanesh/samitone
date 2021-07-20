import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../styles";
import useSong from "../helpers/useSong";
import Modal from "./Modal";
import { InstrumentType } from "../helpers/instruments";
import usePlay from "../helpers/usePlay";
import BpmModal from "./BpmModal";
import useClickOutside from "../helpers/useClickOutside";
import InfoModal from "./InfoModal";

// #region - styling -
const Header = styled.div`
  grid-area: playBar;
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  .info {
    margin-right: 1rem;
    margin-left: 10rem;
    cursor: pointer;
    position: relative;
  }
  .speed-bar-container {
    color: #c4c2f0;
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
  & > p {
    margin-left: 1.2rem;
    font-size: 1.5ch;
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

  margin-right: auto;
  & > button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
  }
  & > span {
    padding-top: 0.7rem;
    margin-left: 0.5rem;
  }
`;

const AddTrack = styled.div`
  padding: 0;
  margin: 0;
  cursor: pointer;
  & > div {
    display: flex;
    justify-content: center;
    background: ${colors.button.secondary};
    border-radius: 0.4rem;
    margin: 0.1rem 0 0.1rem 1rem;
    width: 3rem;
    height: 2rem;

    & > button {
      all: unset;
    }
  }
`;
// #endregion

export default function ControlBar() {
  const { options, setOptions, addTrack } = useSong();
  const { play, pause, on } = usePlay();
  const [showModal, setShowModal] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [showBpmModal, setShowBpmModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

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
    setShowInfoModal(false);
  });

  return (
    <Header>
      <AddTrack ref={domNode}>
        <div onClick={() => setShowModal(InstrumentType.Beat)}>
          <button>
            <img src="icons/plus.svg" alt="plus" />
          </button>
        </div>
      </AddTrack>
      <p>New Track</p>
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
        onClick={() => (
          setShowBpmModal((prev) => !prev), setShowInfoModal(false)
        )}
        ref={domNode}
      >
        <On check={on}></On>
        <Off check={on}></Off>

        <span>
          {Math.round(options.bps * 60)} BPM | {options.stepLength} BARS
        </span>
      </div>
      {showBpmModal && <BpmModal />}

      <div className="info" onClick={() => setShowInfoModal((prev) => !prev)}>
        <img src="icons/info.svg" alt="info" />
        {showInfoModal && <InfoModal />}
      </div>
    </Header>
  );
}
