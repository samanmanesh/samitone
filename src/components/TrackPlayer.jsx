import React, { useEffect, useState} from "react";
import TrackRow from "./TrackRow";
import styled from "styled-components";
import useSong from "../helpers/useSong";
import usePlay from "../helpers/usePlay";
import colors from "../styles";
import ChangeInstrumentModal from "./ChangeInstrumentModal";

const TrackPlayerContainer = styled.div`
  background: ${colors.background.row};
  grid-area: body;
  overflow: auto;
`;

export default function TrackPlayer() {
  const { tracks, addTrack } = useSong();
  const { currentStep } = usePlay();
  const [editTrack, setEditTrack] = useState(null);
  // as a default add these
  useEffect(() => {
    addTrack("Kick");
    addTrack("Key");
  }, []);

  return (
    <TrackPlayerContainer>
      {tracks &&
        tracks.map((track) => (
          <TrackRow
            track={track}
            key={track.id}
            currentStep={currentStep}
            setEditTrack={setEditTrack}
          />
        ))}
      <ChangeInstrumentModal
        show={!!editTrack}
        handleClose={() => setEditTrack(null)}
        handleChange={() => alert('Not implemented yet')}
        track={editTrack}
      />
    </TrackPlayerContainer>
  );
}
