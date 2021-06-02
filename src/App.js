import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState } from "react";

function App() {
  const [loop, setLoop] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [tracks, setTracks] = useState([
    {
      notes: [
        {
          pitch: "C3",
          duration: "8n",
          order: 0,
          active: false,
        },
        {
          pitch: "D3",
          duration: "8n",
          order: 1,
          active: false,
        },
        {
          pitch: "D3",
          duration: "8n",
          order: 2,
          active: false,
        },
        {
          pitch: "D3",
          duration: "8n",
          order: 3,
          active: false,
        },
      ],
    },
  ]);

  const [order, setOrder] = useState(0);
  useEffect(() => {
    //attach a click listener to a play button
    document.querySelector("button")?.addEventListener("click", async () => {
      await Tone.start();
      console.log("audio is ready");
      // setInterval(() => console.log(Tone.now()), 100);
    });
  }, []);

  const play = () => {
    // create several monophonic synths
    const synthA = new Tone.FMSynth().toDestination();
    // const synthB = new Tone.AMSynth().toDestination();

    // Loop
    //*play a note every quarter-note
    // setLoop(
    let i = 0;
    const barLength = 4;
    const callback = (time) => {
      const currOrder = i % barLength;
      i++;
      setOrder(currOrder);
      tracks.forEach((track) => {
        console.log(track.notes);
        //* Find the note for this track that is supposed
        //* to play at the current order
        const note = track.notes.find(
          (note) => note.order === currOrder && note.active === true
        );
        //* If we successfully found the note
        if (note) {
          synthA.triggerAttackRelease(note.pitch, note.duration);
        }
      });
    };
    new Tone.Loop(callback, "4n").start(0);
    Tone.Transport.start();
  };

  const pause = () => {
    Tone.Transport.stop();
  };

  return (
    <div className="App">
      {order}
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <div
        onClick={() => {
          tracks[0].notes[0].active = !tracks[0].notes[0].active;
        }}
      >
        box1
      </div>
      <div
        onClick={() => {
          tracks[0].notes[1].active = !tracks[0].notes[1].active;
        }}
      >
        box2
      </div>
      <div
        onClick={() => {
          tracks[0].notes[2].active = !tracks[0].notes[2].active;
        }}
      >
        box3
      </div>
      <div
        onClick={() => {
          tracks[0].notes[3].active = !tracks[0].notes[3].active;
        }}
      >
        {" "}
        box4
      </div>

      {/* <div
        onClick={() => {
          const currentNotes = tracks[0].notes;
          currentNotes.push({
            pitch: "C3",
            duration: "8n",
            order: 0,
          });
          const updatedTrack = tracks[0];
          updatedTrack.notes = currentNotes;
          setTracks([updatedTrack]);
        }}
      >
        add note 0
      </div>
      <div
        onClick={() => {
          const currentNotes = tracks[0].notes;
          currentNotes.push({
            pitch: "C3",
            duration: "8n",
            order: 1,
          });
          const updatedTrack = tracks[0];
          updatedTrack.notes = currentNotes;
          setTracks([updatedTrack]);
        }}
      >
        add note 1
      </div>
      <div
        onClick={() => {
          const currentNotes = tracks[0].notes;
          currentNotes.push({
            pitch: "C3",
            duration: "8n",
            order: 2,
          });
          const updatedTrack = tracks[0];
          updatedTrack.notes = currentNotes;
          setTracks([updatedTrack]);
        }}
      >
        add note 2
      </div>
      <div
        onClick={() => {
          const currentNotes = tracks[0].notes;
          currentNotes.push({
            pitch: "C3",
            duration: "8n",
            order: 3,
          });
          const updatedTrack = tracks[0];
          updatedTrack.notes = currentNotes;
          setTracks([updatedTrack]);
        }}
      >
        add note 3
      </div> */}
    </div>
  );
}

export default App;
