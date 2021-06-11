import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const MainContext = createContext();

export const MainProvider = (props) => {
  const [tracks, setTracks] = useState([]);
  const [options, setOptions] = useState({
      bps: 0.5,
      stepLength: 16,
      addRow: 1,
  })

  const addTrack = (instrumentName) => {
    const newTrack = {
      id: uuidv4(),
      instrument: instrumentName,
      rowDisplay: 1,
    };
    const rows =[];
    
    //*adding the maxLength instead stepLength
    const maxLength = 64;
    const CMajorScale = ["C","D","E","F","G","A","B"]
    // if(instrumentName === "AM")
    for(let j = 0; j < 7 ; j++){
        const notes = [];    
        for (let i = 0; i < maxLength; i++) {
            const note = {
              pitch: CMajorScale[j],
              octave: "2",
              duration: "8n",
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

  const contextValue = {
      tracks,
      setTracks,
      addTrack,
      updateTrack,
      options,
      setOptions
  }
  return (
    <MainContext.Provider value={contextValue}>
      {props.children}
    </MainContext.Provider>
  );
};
