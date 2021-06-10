import React from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import { getInstrument, instruments } from "../helpers/instruments";
import TrackRowController from "./TrackRowController";
import useSong from "../helpers/useSong";

const NotesWrapper = styled.div`
  width: 100%;
  background:brown;
`;
const TrackRowWrapper = styled.div`
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 0.5rem;

  .controller-notes-container {
    display: flex;
    justify-content: space-between;
    /* background: #753781; */
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
  margin-bottom: 0.5rem;
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

export default function TrackRow({ track, currentStep }) {
  const { updateTrack, options } = useSong();

  const changedNote = (note) => {
    console.log("changed note", note);
    const updatedNotes = track.notes;
    updatedNotes[note.row][note.order].active =
      !updatedNotes[note.row][note.order].active;
    console.log("calling update track", updatedNotes);
    updateTrack(track.id, { ...track, notes: updatedNotes });
  };

  // console.log(getInstrument(track.instrument));

  // const notesRows = [];

  // const notesFilter = () => {
  //   for (let i = 0; i < track.notes.length; i++) {
  //     // console.log(track.notes.length, " track notes length");
  //     // console.log(track.notes[i], "loop check");
  //     console.log(
  //       track.notes[i].filter((note) => note.order < options.stepLength),
  //       "loop check2"
  //     );
  //     console.log(track.notes[i], " check if it is increased");

  //     //*way 1
  //     return track.notes[i]
  //       .filter((note) => note.order < options.stepLength)
  //       .map((note) => (
  //         <Note
  //           note={note}
  //           toggleNote={() => changedNote(note)}
  //           currentStep={currentStep}
  //           key={uuidv4()}
  //           colors={colors}
  //         />
  //       ));
  //     // //*way2
  //     // notesRows.push(track.notes[i].filter((note) => note.order < options.stepLength))
  //   }
  // };
  // // console.log(track, "check2");
  // // console.log(notesRows,"notesRows")

  const colors = getInstrument(track.instrument).colors;
  // console.log(track.notes, "check it out");

  return (
    <TrackRowWrapper>
      <section className="controller-notes-container">
        <TrackRowController track={track} />
        <NotesWrapper>
        {track.notes.map((row) => (
          <Notes barLength={4}>
            {row
              .filter((note) => note.order < options.stepLength)
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

        {/* {notesFilter()}
            {notesRows.map((note) => (note).map((note)=> 
              <Note
                note={note}
                toggleNote={() => changedNote(note)}
                currentStep={currentStep}
                key={uuidv4()}
                colors={colors}
              />
            ))} */}

        {/* {track.notes
            .filter((note) => note.order < options.stepLength)
            .map((note) => (
              <Note
                note={note}
                toggleNote={() => changedNote(note)}
                currentStep={currentStep}
                key={uuidv4()}
                colors={colors}
              />
            ))} */}
        {/* </Notes> */}
      </section>

      <section className="effects-volume-container">
        <div>effect</div>
        <div>volume section</div>
      </section>
    </TrackRowWrapper>
  );
}
