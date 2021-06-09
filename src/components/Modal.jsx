import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.2);
  display:grid;
  place-items: center;
`;
const ModalContainer = styled.div`
  width: 10rem;
  min-height: 15rem;
  background: rgb(0,0,0);
  color: white;
`;
export default function Modal({handleClose, children}) {
    return (
        <ModalWrapper onMouseDown={() => handleClose()}>
            <ModalContainer onMouseDown={e => e.stopPropagation()}>
                {children}
            </ModalContainer>
        </ModalWrapper>
    )
}
