import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// export const MainContext = createContext();
export const MainContext = React.createContext();

export const PlayProvider = (props) => {
  const [tracks, setTracks] = useState([]);
  const [options, setOptions] = useState({
      bps: 0.5,
      stepLength: 16
  })

  const addTrack = () => {
    const newTrack = {
      id: uuidv4(),
      instrument: "AM",
    };
    const notes = [];
    //*adding the maxLength instead stepLength
    const maxLength = 64;
    // const CMajorScale = ["C","D","E","F","G"]
    for (let i = 0; i < maxLength; i++) {
      const note = {
        pitch: "C",
        octave: "2",
        duration: "8n",
        order: i,
        active: false,
      };
      notes.push(note);
    }
    newTrack.notes = notes;
    setTracks((prev) => [...prev, newTrack]);
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
