import "./App.scss";
import * as Tone from "tone";
import { useEffect, useState } from "react";

function App() {
  const [loop, setLoop] = useState(null);
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
    const synthA = new Tone.FMSynth().toDestination();
    const synthB = new Tone.AMSynth().toDestination();
    //play a note every quarter-note
    // setLoop(new Tone.Loop((time) => {
    //   synthA.triggerAttackRelease("C2", "8n", time);
    //   synthB.triggerAttackRelease("D2", "8n", time);

    // }, "4n").start(0));
    // //todo its not stop at the exact time figure that out
    //play another note every off quarter-note, by starting it "8n"
    // const loopB = new Tone.Loop((time) => {
    //   synthB.triggerAttackRelease("C4", "8n", time);
    // }, "4n").start("8n");
    // the loops start when the Transport is started
    // Tone.Transport.start();
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
    const player = new Tone.Player(
      "https://tonejs.github.io/audio/berklee/gong_1.mp3"
    ).toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  };

  const pause = () => {
    loop.stop(0);
  };

  return (
    <div className="App">
      Hi
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}

export default App;
