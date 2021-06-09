import React, { useEffect, useState, useContext } from "react";
import TrackRow from "./TrackRow";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import { PlayContext } from "../contexts/PlayContext";

const TrackPlayerContainer = styled.div`
  background: #381c1c;
  grid-area: body;
`;

export default function TrackPlayer({ bps }) {
  const { tracks } = useSong();
  const { currentStep } = useContext(PlayContext);

  return (
    <TrackPlayerContainer>
      {tracks.map((track) => (
        <TrackRow track={track} key={track.id} currentStep={currentStep} />
      ))}
    </TrackPlayerContainer>
  );
}
