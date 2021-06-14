import React, { useEffect, useState, useContext } from "react";
import TrackRow from "./TrackRow";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import usePlay from "../helpers/usePlay"
import colors from "../styles";

const TrackPlayerContainer = styled.div`
  background: ${colors.background.secondary};
  grid-area: body;
`;

export default function TrackPlayer() {
  const { tracks } = useSong();
  const { currentStep } = usePlay();

  return (
    <TrackPlayerContainer>
      {tracks.map((track) => (
        <TrackRow track={track} key={track.id} currentStep={currentStep} />
      ))}
    </TrackPlayerContainer>
  );
}
