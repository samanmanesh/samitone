import { MainProvider } from "./MainContext";
import { PlayProvider } from "./contexts/PlayContext";
import TrackPlayer from "./components/TrackPlayer";
import Effect from "./components/Effect";
import ControlBar from "./components/ControlBar";
import styled from "styled-components";
import colors from "./styles";
import { sizes } from "./styles";

const AppWrapper = styled.div`
  color: white;
  background: ${colors.background.primary};
  display: grid;
  width: 100vw;
  height: 100vh;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: ${sizes.headerHeight} auto;
  grid-template-areas:
    "playBar playBar playBar playBar"
    "body body body body"
    "effect effect effect effect";
`;
function App() {
  return (
    <AppWrapper>
      <MainProvider>
        <PlayProvider>
          <ControlBar />
          <TrackPlayer />
          <Effect />
        </PlayProvider>
      </MainProvider>
    </AppWrapper>
  );
}

export default App;
