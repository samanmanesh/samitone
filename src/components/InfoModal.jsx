import React from "react";
import styled from "styled-components";
import colors from "../styles";

const ModalWrapper = styled.div`
  background: ${colors.background.primaryDark};
  width: 8rem;
  height: 20rem;
  position: fixed;
  left: 92%;
  top: 4rem;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & > div {
    background: ${colors.button.secondary};
    width: 4rem;
    height: 3rem;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
    :hover{
        background: ${colors.button.optional3};
        transition: all 0.5s ease-in-out;
    }
  }
  & > p {
    font-size: 1.5ch;
  }
`;

export default function InfoModal() {
  return (
    <ModalWrapper onMouseDown={(e) => e.stopPropagation()} >
      <p>Connect With Me</p>
      <div>
        <a href="https://github.com/samanmanesh" target="_blank">
          <img src="icons/social-github.svg" alt="github" />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/saman-manesh-96b257213/"
          target="_blank"
        >
          <img src="icons/social-linkedin.svg" alt="linked in" />
        </a>
      </div>
      <div>
      <a
          href="mailto:samanmanesh7@gmail.com" 
          target="_blank"
        >
              <img src="icons/social-mail.svg" alt="mail" />
        </a>
      
      </div>
      <div>
        <a href="https://instagram.com/samansmanesh" target="_blank">
          <img src="icons/social-instagram.svg" alt="instagram" />
        </a>
      </div>
    </ModalWrapper>
  );
}
