import React, { useEffect, useState, useContext } from "react";
import TrackRow from "./TrackRow";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import usePlay from "../helpers/usePlay"
import colors from "../styles";

const TrackPlayerContainer = styled.div`
  background: ${colors.background.secondary};
  grid-area: body;
  overflow: auto;
`;

export default function TrackPlayer() {
  const { tracks ,removeTracks } = useSong();
  const { currentStep } = usePlay();
  
  const removeTracksHandler = (trackId) =>{
    removeTracks(trackId);
  }

  return (
    <TrackPlayerContainer>
      {tracks && tracks.map((track) => (
        <TrackRow track={track} key={track.id} currentStep={currentStep} removeTracksHandler={removeTracksHandler} />
      ))}
    </TrackPlayerContainer>
  );
}
