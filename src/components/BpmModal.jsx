import React from 'react'
import styled from 'styled-components'
import colors from '../styles';

const ModalWrapper  = styled.div`
  position:fixed;
  top:3rem;
  right:4rem;
  width:20rem;
  height:10rem;
  border-radius: .4rem;
  background:${colors.button.secondary};

`;

export default function BpmModal() {
    return (
        <ModalWrapper>
            hi

            <div>bpm</div>
            <div>sig</div>
            <div>bar</div>








            {/* <input
        type="number"
        // value={bps}
        value={options.bps}
        // onChange={(e) => setBps(e.target.value)}
        onChange={(e) => setOptions({ ...options, bps: e.target.value })}
      /> */}
        </ModalWrapper>
    )
}
