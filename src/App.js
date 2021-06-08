// import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TrackPlayer from "./components/TrackPlayer";
import Effect from "./components/Effect";
import ControlBar from "./components/ControlBar"
import styled from "styled-components";
import colors from "./styles";
import {sizes} from "./styles";

console.log(sizes,"this");
const AppWrapper = styled.div`
  color: white;
  background: ${colors.background.primary};
  display: grid;
  width: 100vw;
  height: 100vh;
  
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows:  ${sizes.headerHeight} auto;
  grid-template-areas:
    "playBar playBar playBar playBar"
    "body body body body"
    "effect effect effect effect";

  /* padding: 3rem; */

  /* button {
    margin-left: 1rem;
    width: 5rem;
    height: 2rem;
  } */
`;

// const Header = styled.div`
//   grid-area: playBar;
//   width: 100wh;
//   height: 2rem;
// `;

function App() {
  const [stepLength, setStepLength] = useState(16);
  const [bps, setBps] = useState(0.5);
  const [tracks, setTracks] = useState([]);
  const [filterNum, setFilterNum] = useState(400);
  const [delayTime, setDelayTime] = useState(0.125);
  const [feedbackDelayNum, setFeedbackDelayNum] = useState(0.5);

  // General

  // const [octave, setOctave] = useState()
  // const stepOptions = [4, 8, 16, 24, 32, 64];

  // const [instruments, setInstruments] = useState();

  const reference = useRef();

  useEffect(() => {
    //attach a click listener to a play button
    document.querySelector("button")?.addEventListener("click", async () => {
      await Tone.start();
      console.log("audio is ready");
    });
  }, []);

  const addTrack = () => {
    const newTrack = {
      id: uuidv4(),
      instrument: "AM",
    };
    const notes = [];
    //*adding the maxLength instead stepLength
    const maxLength = 64;
    // const CMajorScale = ["C","D","E","F","G"]
    for (let i = 0; i < maxLength; i++) {
      const note = {
        pitch: "C",
        octave: "2",
        duration: "8n",
        order: i,
        active: false,
      };
      notes.push(note);
    }
    newTrack.notes = notes;
    setTracks((prev) => [...prev, newTrack]);
  };

  const updateTrack = (trackID, updatedTrack) => {
    const updateTrackIndex = tracks.findIndex((track) => track.id === trackID);
    const updatedTracks = [...tracks];
    updatedTracks[updateTrackIndex] = updatedTrack;
    setTracks([...updatedTracks]);
  };

  return (
    <AppWrapper>
      <ControlBar
        setBps={setBps}
        bps={bps}
        setStepLength={setStepLength}
        stepLength={setStepLength}
      />
      

      <TrackPlayer
        tracks={tracks}
        addTrack={addTrack}
        updateTrack={updateTrack}
        stepLength={stepLength}
        bps={bps}
      />

      <Effect />
      
    </AppWrapper>
  );
}

export default App;
