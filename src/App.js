import { MainProvider } from "./MainContext";
import { PlayProvider } from "./contexts/PlayContext";
import TrackPlayer from "./components/TrackPlayer";
import Effect from "./components/Effect";
import ControlBar from "./components/ControlBar";
import AssistantBar from "./components/AssistantBar";
import styled from "styled-components";
import colors from "./styles";
import { sizes } from "./styles";
import * as Tone from "tone";

const AppWrapper = styled.div`
  color: white;
  background: ${colors.background.primaryDark};
  display: grid;
  width: 100vw;
  height: 100vh;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: ${sizes.headerHeight} auto;
  grid-template-areas:
    "playBar playBar playBar playBar"
    /* "helper helper helper helper" */
    "body body body body";
  /* "effect effect effect effect"; */
`;

const FakeSidebar = styled.div`
  width: 15rem;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  background: ${colors.background.primaryDark};
`;
function App() {
  const buffer = new Tone.ToneAudioBuffer("/Media/Clap.mp3", () => {
    console.log("loaded");
  });

  // const buffer = new Tone.ToneAudioBuffer("../public/Media/Clap.mp3", () => {
  //   console.log("loaded");
  // });
  // console.log(buffer);

  // const buffer = new Tone.ToneAudioBuffer("https://github.com/samanmanesh/samitone/blob/main/public/Media/Clap.mp3?raw=true", () => {
  // console.log("loaded");
  // });
  // const testPlayer = () => {
  //   const sampler = new Tone.Sampler({
  //     urls: {
  //       A1: "Clap.mp3",
  //     },
  //     baseUrl: "/Media/",
  //     onload: () => {
  //       console.log("!");
  //       sampler.triggerAttackRelease("A1", 0.5);
  //     },
  //   }).toDestination();
  // };

  return (
    <AppWrapper>
      <MainProvider>
        <PlayProvider>
          <ControlBar />
          {/* <AssistantBar /> */}
          <TrackPlayer />
          {/* <Effect /> */}
          <FakeSidebar />
        </PlayProvider>
      </MainProvider>
    </AppWrapper>
  );
}

export default App;
