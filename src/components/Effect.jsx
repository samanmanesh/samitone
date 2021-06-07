import React from 'react'
import styled from "styled-components";


const EffectContainer = styled.div`
  background: #1f3054;
  grid-area: effect;
`;

export default function Effect() {
    return (
        <EffectContainer>
        Effect      
        {/* <h1>Effect</h1>
        <div>
          Filter
          <input
            type="number"
            value={filterNum}
            onChange={(e) => setFilterNum(e.target.value)}
          />
        </div>
        <div>
          <span>
            Delay Time
            <input
              type="number"
              value={delayTime}
              onChange={(e) => setDelayTime(e.target.value)}
            />
          </span>
          <span>
            Feedback Delay number
            <input
              type="number"
              value={feedbackDelayNum}
              onChange={(e) => setFeedbackDelayNum(e.target.value)}
            />
          </span>
        </div>
      </div> */}     
        </EffectContainer>
    )
}
