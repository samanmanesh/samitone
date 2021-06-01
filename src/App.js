import "./App.scss";
import * as Tone from "tone";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    //attach a click listener to a play button
    document.querySelector("button")?.addEventListener("click", async () => {
      await Tone.start();
      console.log("audio is ready");
    });
  }, []);
  const play = () => {
    // Tone.start();
    //create a synth and connect it to the main output (your speakers)
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    // synth.triggerAttackRelease("C4", "8n", now);
    // synth.triggerAttackRelease("E4", "8n", now + 0.5);
    // synth.triggerAttackRelease("G4", "8n", now + 1);

    const notes = ["C4", "G4", "E4", "A4", "E4", "A4", "E4", "A4"]
    let i = 0;
    const loop = new Tone.Loop((time) => {
      // triggered every eighth note.
      console.log(time);
      synth.triggerAttackRelease(notes[i], "8n");
      i++;
      if (i > notes.length - 1) i = 0;
    }, "8n").start(0);
    Tone.Transport.start();

    //play a middle 'C' for the duration of an 8th note
    // synth.triggerAttackRelease("C4", "8n");

    // setInterval(() => console.log(Tone.now()), 100);
  };

  return (
    <div className="App">
      Hi
      <button onClick={() => play()}>Play</button>
    </div>
  );
}

export default App;
