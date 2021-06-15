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
  // const testPlayer = () => {
    
  //   var sampler = new Tone.Sampler({
  //     "Clap" : "../public/Media/Clap.mp3",
      
  //   }, function(){
  //     //sampler will repitch the closest sample
  //     sampler.triggerAttack("Clap")
  //   })
    


  // };

  return (
    <AppWrapper>
      <MainProvider>
        <PlayProvider>
          <ControlBar />
          {/* <AssistantBar /> */}
          <TrackPlayer />
          {/* <Effect /> */}

          {/* <div>
            {" "}
            <button onClick={() => testPlayer()}>play test</button>
          </div> */}

          <FakeSidebar />
        </PlayProvider>
      </MainProvider>
    </AppWrapper>
  );
}

export default App;
