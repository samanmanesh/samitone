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
    "body body body body";
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

  
  return (
    <AppWrapper>
      <MainProvider>
        <PlayProvider>
          <ControlBar />
          <TrackPlayer />
          <FakeSidebar />
        </PlayProvider>
      </MainProvider>
    </AppWrapper>
  );
}

export default App;
