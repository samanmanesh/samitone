import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TrackRow from "./TrackRow";
function App() {
  const [loop, setLoop] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [stepLength, setStepLength] = useState(24);
  const [bps, setBps] = useState(0.5);
  const [tracks, setTracks] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    //attach a click listener to a play button
    document.querySelector("button")?.addEventListener("click", async () => {
      await Tone.start();
      console.log("audio is ready");
    });
  }, []);

  const play = () => {
    // create several monophonic synths
    // const synthB = new Tone.AMSynth().toDestination();
    if (loop) loop.stop(0)
    // Loop
    //*play a note every quarter-note
    // setLoop(
      let i = 0;
      const callback = (time) => {
        const step = i % stepLength;
        setCurrentStep(step);
        i++;
        tracks.forEach((track) => {
        const synthA = track.instrument.toDestination();
        console.log(track.notes);
        //* Find the note for this track that is supposed
        //* to play at the current order
        const note = track.notes.find(
          (note) => note.order === step && note.active === true
        );
        //* If we successfully found the note
        if (note) {
          synthA.triggerAttackRelease(note.pitch, note.duration);
        }
      });
    };
    setLoop(new Tone.Loop(callback, bps).start(0))
    
    Tone.Transport.start();
  };

  const pause = () => {
    Tone.Transport.stop();
  };

  const addTrack = () => {
    const newTrack = {
      id: uuidv4(),
      instrument: new Tone.AMSynth()
    };
    const notes = [];
    for (let i = 0; i < stepLength; i++) {
      const note = {
        pitch: "C3",
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
    console.log("going to update", trackID, updatedTrack);
    const updateTrackIndex = tracks.findIndex((track) => track.id === trackID);
    console.log("updating track at index", updateTrackIndex);
    const updatedTracks = [...tracks];
    updatedTracks[updateTrackIndex] = updatedTrack;
    setTracks([...updatedTracks]);
  };
  return (
    <div className="App">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={addTrack}>Add Track +</button>
      {tracks.map((track) => (
        <TrackRow track={track} key={uuidv4()} updateTrack={updateTrack} currentStep={currentStep}/>
      ))}
    </div>
  );
}

export default App;
