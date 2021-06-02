import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState } from "react";

function App() {
  const [loop, setLoop] = useState(null);
  const [tracks, setTracks] = useState([
    {
      notes: [
        {
          pitch: "C3",
          duration: "8n",
          order: 0,
          active: true
        },
        {
          pitch: "D3",
          duration: "8n",
          order: 2,
        },
      ],
    },
    {
      notes: [
        {
          pitch: "A3",
          duration: "8n",
          order: 3,
        },
      ],
    }
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
    // create two monophonic synths
    // const synthA = new Tone.FMSynth().toDestination();
    // const synthB = new Tone.AMSynth().toDestination();
    // //todo its not stop at the exact time figure that out
    //play another note every off quarter-note, by starting it "8n"
    // const loopB = new Tone.Loop((time) => {
    //   synthB.triggerAttackRelease("C4", "8n", time);
    // }, "4n").start("8n");
    // the loops start when the Transport is started
    // // ramp up to 800 bpm over 10 seconds
    // Tone.Transport.bpm.rampTo(800, 10);
    //==================================/
    // const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    // const now = Tone.now();
    // synth.triggerAttack("A4", now);
    // synth.triggerAttack("F4", now + 0.5);
    // synth.triggerAttack("A4", now + 1);
    // synth.triggerAttack("C5", now + 3 );
    // synth.triggerAttack("E5", now + 2);
    // synth.triggerRelease(["A4", "F4", "A4", "C5", "E5"], now + 4);
    //=================================/
    // const player = new Tone.Player(
    //   "https://tonejs.github.io/audio/berklee/gong_1.mp3"
    // ).toDestination();
    // Tone.loaded().then(() => {
    //   player.start();
    // });
    //=================================/

    // create several monophonic synths
    const synthA = new Tone.FMSynth().toDestination();
    const synthB = new Tone.AMSynth().toDestination();

    // const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    // const now = Tone.now();
    // const loop = new Tone.Loop((time) => {

    //   const loop1= new Tone.Loop((time)=> {
    //     synthA.triggerAttackRelease("E2", "8n", time);
    //   }, "2".start(1));
    //   Tone.Transport.start()
    // synthB.triggerAttackRelease("D2", "2n", time);
    // synthC.triggerAttackRelease("C2", "8n", time);

    // }, "4").start(0);
    // Tone.Transport.start(0);
    // // Tone.Transport.bpm();
    // // Tone.Transport.loop = true;

    // Tone.Transport.stop(40);
    const synthLoop = { synthA, synthB };
    // const synth = new Tone.Synth().toDestination();
    // synth.triggerAttackRelease("C4", "8n");

    // Loop
    //*play a note every quarter-note
    // setLoop(
    let i = 0;
    const barLength = 4
    const callback = (time) => {
      const currOrder = i % barLength;
      i++;
      setOrder(currOrder);
      tracks.forEach((track) => {
        console.log(track.notes);
        //* Find the note for this track that is supposed 
        //* to play at the current order
        const note = track.notes.find((note) => note.order === currOrder && note.active);
        //* If we succesfully found the note
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
      </div>
    </div>
  );
}

export default App;
