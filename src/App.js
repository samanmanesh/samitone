import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TrackPlayer from "./components/TrackPlayer";

function App() {
  const [stepLength, setStepLength] = useState(16);
  const [bps, setBps] = useState(0.5);
  const [tracks, setTracks] = useState([]);
  const [filterNum, setFilterNum] = useState(400);
  const [delayTime, setDelayTime] = useState(0.125);
  const [feedbackDelayNum, setFeedbackDelayNum] = useState(0.5);

  // General

  // const [octave, setOctave] = useState()
  const stepOptions = [4, 8, 16, 24, 32, 64];
  
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
    <div className="App">
      <select
        value={stepLength}
        onChange={(e) => setStepLength(e.target.value)}
      >
        {stepOptions.map((e) => (
          <option value={e} key={uuidv4()}>
            {e}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={bps}
        onChange={(e) => setBps(e.target.value)}
      />
      <div>
        <TrackPlayer
          tracks={tracks}
          addTrack={addTrack}
          updateTrack={updateTrack}
          stepLength={stepLength}
          bps={bps}
        />
        <h1>Effect</h1>
        <div>
          Filter
          <input
            type="number"
            value={filterNum}
            onChange={(e) => setFilterNum(e.target.value)}
          />
        </div>
        <div>
          <span>
            Delay Time
            <input
              type="number"
              value={delayTime}
              onChange={(e) => setDelayTime(e.target.value)}
            />
          </span>
          <span>
            Feedback Delay number
            <input
              type="number"
              value={feedbackDelayNum}
              onChange={(e) => setFeedbackDelayNum(e.target.value)}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
