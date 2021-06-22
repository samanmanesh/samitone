import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const MainContext = createContext();

export const MainProvider = (props) => {
  const [tracks, setTracks] = useState([]);
  const [options, setOptions] = useState({
    bps: 2,
    stepLength: 16,
    addRow: 1,
    
  });
  //for testing filter if works move to options
  const [currentFilter, setCurrentFilter] = useState(400);

  const addTrack = (instrumentName) => {
    const newTrack = {
      id: uuidv4(),
      instrument: instrumentName,
      rowDisplay: 7,
      options: {
        filter: 400,
        delay: 0.5
      }
    };
    const rows = [];

    //*adding the maxLength instead stepLength
    const maxLength = 64;
    const CMajorScale = ["C", "D", "E", "F", "G", "A", "B"];
    // if(instrumentName === "AM")
    for (let j = 0; j < 7; j++) {
      const notes = [];
      for (let i = 0; i < maxLength; i++) {
        const note = {
          pitch: CMajorScale[j],
          octave: "2",
          duration: "5",
          row: j,
          order: i,
          active: false,
        };
        notes.push(note);
      }
      rows.push(notes);
    }

    newTrack.notes = rows;
    setTracks((prev) => [...prev, newTrack]);
    console.log(tracks);
  };

  const updateTrack = (trackID, updatedTrack) => {
    const updateTrackIndex = tracks.findIndex((track) => track.id === trackID);
    const updatedTracks = [...tracks];
    updatedTracks[updateTrackIndex] = updatedTrack;
    setTracks([...updatedTracks]);
  };


  const removeTracks = ( trackId ) => {
    const removeTrack= tracks.filter((track)=> track.id != trackId )
    setTracks(removeTrack);
    
  }

  const contextValue = {
    tracks,
    setTracks,
    addTrack,
    updateTrack,
    options,
    setOptions,
    currentFilter,
    setCurrentFilter,
    removeTracks
  };
  return (
    <MainContext.Provider value={contextValue}>
      {props.children}
    </MainContext.Provider>
  );
};
