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
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 2;

  .controller-notes-container {
    display: flex;
    justify-content: space-between;
    & > div {
    }
  }

`;

const NotesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const Notes = styled.div`
  background: ${colors.background.row};
  position: relative;
  z-index: 0;
  display: flex;
  padding: 0 0 0 1rem;

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

    const updatedNotes = track.notes;
    updatedNotes[note.row][note.order].active =
      !updatedNotes[note.row][note.order].active;

    updateTrack(track.id, { ...track, notes: updatedNotes });
  };

  const colors = getInstrument(track.instrument).colors;


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

      
    </TrackRowWrapper>
  );
}
