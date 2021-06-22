import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import {
  getInstrument,
  instruments,
  InstrumentType,
} from "../helpers/instruments";
import TrackRowController from "./TrackRowController";
import useSong from "../helpers/useSong";

// #region - Styling -

const TrackRowWrapper = styled.div`
  /* border: 1px solid white; */
  border-radius: 0.25rem;
  /* padding: 1rem; */
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;

  .controller-notes-container {
    display: flex;
    justify-content: space-between;
    /* background: #376b81; */
    & > div {
      /* margin: 1rem; */
    }
  }
  /* .effects-volume-container {
    display: flex;
    justify-content: space-between;
    background: #357e56;
    & > div {
      margin: 1rem;
    }
  } */
`;

const NotesWrapper = styled.div`
  width: 100%;
  /* background: #624848; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  /* justify-content:center; */
  /* height:100%; */
  /* flex-grow:10; */
`;


const Notes = styled.div`
  background: ${colors.background.row};
  position: relative;
  z-index: 0;
  display: flex;
  padding: 0 0 0 1rem;
  /* flex-direction: column; */
  /* justify-content: space-evenly; */
  /* align-content: space-between;  */
  /* height:100%; */
  /* min-height:.5rem; */
  /* padding: 1rem; */

  /* border-radius: 4rem; */
  /* margin-bottom: 0.5rem; */
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

// #endregion

export default function TrackRow({ track, currentStep }) {
  const { updateTrack, options } = useSong();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const changedNote = (note) => {
    // console.log("changed note", note);

    const updatedNotes = track.notes;
    updatedNotes[note.row][note.order].active =
      !updatedNotes[note.row][note.order].active;

    // console.log("calling update track", updatedNotes);
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };

  const colors = getInstrument(track.instrument).colors;

  // const filterHandler = (e) => {
  //   const newOptions = track.options;
  //   newOptions.filter = e.target.value;
  //   updateTrack(track.id, { ...track, options: newOptions });
  // };

  return (
    <TrackRowWrapper>
      <section className="controller-notes-container">
        <TrackRowController
          track={track}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />

        <NotesWrapper>
          {getInstrument(track.instrument).type === InstrumentType.Synth &&
            track.notes.map((row, i) => (
              <Notes barLength={4} key={`note-row__${i}`}>
                {(!isCollapsed || (isCollapsed && i === 0)) &&
                  row.map(
                    (note, j) =>
                      j < options.stepLength && (
                        <Note
                          note={note}
                          toggleNote={() => changedNote(note)}
                          currentStep={currentStep}
                          key={uuidv4()}
                          colors={colors}
                        />
                      )
                  )}
                  
                {/* {row
                .filter(
                  (note) =>
                    note.order < options.stepLength &&
                    note.row < track.rowDisplay
                  // note.order < options.stepLength
                  )
                  .map((note) => (
                    <Note
                      note={note}
                      toggleNote={() => changedNote(note)}
                      currentStep={currentStep}
                      key={uuidv4()}
                      colors={colors}
                    />
                  ))} */}
              </Notes>
            ))}

          {getInstrument(track.instrument).type === InstrumentType.Beat &&
            track.notes.map((row) => (
              <Notes barLength={4}>
                {row
                  .filter(
                    (note) => note.order < options.stepLength && note.row < 1
                  )
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
            ))}
        </NotesWrapper>
      </section>

      {/* <section className="effects-volume-container">
        <div>effect
          <input type="number" value={track.options.filter} onChange={filterHandler} />
        </div>
        <div>volume section</div>
      </section> */}
    </TrackRowWrapper>
  );
}
