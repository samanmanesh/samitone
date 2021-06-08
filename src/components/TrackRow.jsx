import React from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import { getInstrument, instruments } from "../helpers/instruments";
import TrackRowController from "./TrackRowController";
import useSong from "../helpers/useSong";

const TrackRowWrapper = styled.div`
  /* background: ${colors.background.panelDarker}; */
  /* display: flex; */
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.5rem;

  .controller-notes-container {
    display: flex;
    justify-content: space-between;
    background: #753781;
    & > div {
      margin: 1rem;
    }
  }
  .effects-volume-container {
    display: flex;
    justify-content: space-between;
    background: #357e56;
    & > div {
      margin: 1rem;
    }
  }
`;

const Notes = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 100%; */
  & > * {
    margin-right: 0.5rem;

    &:nth-child(${(props) => props.barLength}n) {
      margin-right: 1rem;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;
// const TrackDetails = styled.div`
//   display: flex;
// `;

export default function TrackRow({ track }) {
  
  const { updateTrack, currentStep, stepLength } = useSong();

  const changedNote = (note) => {
    const updatedNotes = track.notes;
    updatedNotes[note.order].active = !updatedNotes[note.order].active;
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };

  // const changedInstrument = (instrument) => {
  //   updateTrack(track.id, { ...track, instrument: instrument });
  // };

  // console.log(getInstrument(track.instrument));

  // const instrumentKeys = Object.keys(instruments);

  const colors = getInstrument(track.instrument).colors;
  
  return (
    <TrackRowWrapper>
      <section className="controller-notes-container">
        {/* <TrackRowController updateTrack={updateTrack} track={track} /> */}
        <TrackRowController  track={track} />

        {/* <TrackDetails>
        <span>{track.instrument}</span>
        <select
          value={track.instrument}
          onChange={(e) => changedInstrument(e.target.value)}
        >
          {instrumentKeys.map((e) => (
            <option value={e} key={uuidv4()}>
              {e}
            </option>
          ))}
        </select>
      </TrackDetails> */}

        <Notes barLength={4}>
          {track.notes
            .filter((note) => note.order < stepLength)
            .map((note) => (
              <Note
                note={note}
                toggleNote={() => changedNote(note)}
                currentStep={currentStep}
                key={uuidv4()}
                colors={colors}
              />
            ))}
        </Notes>
      </section>

      <section className="effects-volume-container">
        <div>effect</div>
        <div>volume section</div>
      </section>
    </TrackRowWrapper>
  );
}
