import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import TrackRow from "./TrackRow";
import { instruments } from "./helpers/instruments";

function App() {
  const [stepLength, setStepLength] = useState(16);
  const [bps, setBps] = useState(0.5);
  const [tracks, setTracks] = useState([]);
  const [filterNum, setFilterNum] = useState(400);
  const [delayTime, setDelayTime] = useState(0.125);
  const [feedbackDelayNum, setFeedbackDelayNum] = useState(0.5);

  // General
  // Song Playing
  const [loop, setLoop] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);

  // const [octave, setOctave] = useState()
  const stepOptions = [4, 8, 16, 24, 32, 64];
  // const chords = {
  //   A:["A","C#","E"],
  //   Am:["A", "C", "E"]
  // }

  // const [instruments, setInstruments] = useState();

  const reference = useRef();

  useEffect(() => {
    //attach a click listener to a play button
    document.querySelector("button")?.addEventListener("click", async () => {
      await Tone.start();
      console.log("audio is ready");
    });
  }, []);

  const getInstrument = (instrumentName) => instruments[instrumentName];

  // const getChord = (chordName) =>{
  //   const desiredChord = chords.find(chord => chord === chordName);
  //   console.log(desiredChord, "is read");
  //   // return desiredChord;
  // }

  
  const play = () => {
    // create several monophonic synths
    if (loop) loop.stop(0);
    // Loop
    //*play a note every quarter-note
    let i = 0;
    tracks.forEach((track) => {
      const instrument = getInstrument(track.instrument)
      const synth = instrument.sound.toDestination();
      const filter = new Tone.Filter(
        filterNum,
        "lowpass"
      ).toDestination();
      synth.connect(filter);  
    })
    const callback = (time) => {
      const step = i % stepLength;
      setCurrentStep(step);
      i++;
      tracks.forEach((track) => {
        const instrument = getInstrument(track.instrument)
        const synth = instrument.sound.toDestination();
        //* Find the note for this track that is supposed
        //* to play at the current order
        const note = track.notes.find(
          (note) => note.order === step && note.active === true
        );
        //* If we successfully found the note
        if (note) {
          if (
            track.instrument === "Kick" ||
            track.instrument === "AM" ||
            track.instrument === "FM" ||
            track.instrument === "Duo"
          ) {
            synth.triggerAttackRelease(
              `${note.pitch}${note.octave}`,
              note.duration
            );
            const distortion = new Tone.Distortion(0.4).toDestination();
            
            // const feedbackDelay = new Tone.FeedbackDelay(
            //   delayTime,
            //   feedbackDelayNum
            // ).toDestination();
            //connect a player to the distortion
            // synth.connect(distortion);
            // synth.connect(feedbackDelay);
          }

          if (track.instrument === "Sample") {
            // synth.triggerAttackRelease(["C1", "E1", "G1", "B1"], note.duration);
            synth.triggerAttackRelease(
              `${note.pitch}${note.octave}`,
              note.duration
            );
          }
        }
      });
    };

    setLoop(new Tone.Loop(callback, bps).start(0));

    Tone.Transport.start();
  };

  const pause = () => {
    Tone.Transport.stop();
  };

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


  console.log("COMPONENT REFRESHED")
  const updateTrack = (trackID, updatedTrack) => {
    console.log("going to update", trackID, updatedTrack);
    const updateTrackIndex = tracks.findIndex((track) => track.id === trackID);
    console.log("updating track at index", updateTrackIndex);
    const updatedTracks = [...tracks];
    updatedTracks[updateTrackIndex] = updatedTrack;
    setTracks([...updatedTracks]);
  };

  console.log(stepLength, "check");
  return (
    <div className="App">
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={addTrack}>Add Track +</button>
      {tracks.map((track) => (
        <TrackRow
          track={track}
          key={uuidv4()}
          updateTrack={updateTrack}
          currentStep={currentStep}
          stepLength={stepLength}
        />
      ))}
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
