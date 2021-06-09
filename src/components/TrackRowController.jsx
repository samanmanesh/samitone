import React from "react";
import styled from "styled-components";
import colors from "../styles";
import { v4 as uuidv4 } from "uuid";
import {
  getInstrument,
  getInstrumentsByType,
  instruments,
} from "../helpers/instruments";
import useSong from "../helpers/useSong";

const TrackController = styled.div`
  display: flex;

  & > img {
    margin: 1rem;
  }
  & > button {
    margin: 1rem;
  }
  & > div {
    margin: 1rem;
  }
`;

const TrackDetails = styled.div`
  /* display: flex; */
`;

export default function TrackRowController({ track }) {
  const { updateTrack } = useSong();

  const changedInstrument = (instrument) => {
    updateTrack(track.id, { ...track, instrument: instrument });
  };

  // Get what this track type is
  const currentInstrumentType = getInstrument(track.instrument).type;

  // Get all instruments of same InstrumentType
  const instruments = getInstrumentsByType(currentInstrumentType);
  const instrumentKeys = instruments.map(e => e.name)
  return (
    <TrackController>
      <img src="" alt="instruments icons" />
      <button>Mute</button>
      <button>Solo</button>
      <div>
        instruments name
        <TrackDetails>
          <span>{track.instrument}</span>
          <select
            value={track.instrument}
            onChange={(e) => changedInstrument(e.target.value)}
          >
            {instrumentKeys.map((e) => (
              <option value={e} key={uuidv4()}>
                {e}
              </option>
            ))}
          </select>
        </TrackDetails>
      </div>
      <div>
        Velocity
        <button>0</button>
      </div>
    </TrackController>
  );
}
