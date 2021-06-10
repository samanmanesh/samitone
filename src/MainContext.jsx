import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
export const MainContext = createContext();

export const MainProvider = (props) => {
  const [tracks, setTracks] = useState([]);
  const [options, setOptions] = useState({
      bps: 0.5,
      stepLength: 16,
  })

  const addTrack = (instrumentName) => {
    const newTrack = {
      id: uuidv4(),
      instrument: instrumentName,
    };
    // const notes = [[]];
    const rows =[];
    
    //*adding the maxLength instead stepLength
    const maxLength = 64;
    // const CMajorScale = ["C","D","E","F","G"]
    // if(instrumentName === "AM")
    for(let j = 0; j < 2 ; j++){
        const notes = [];    
        for (let i = 0; i < maxLength; i++) {
            const note = {
              pitch: "C",
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
