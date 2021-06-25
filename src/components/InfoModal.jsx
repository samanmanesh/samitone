import React from "react";
import styled from "styled-components";
import colors from "../styles";

const ModalWrapper = styled.div`
  /* background: ${colors.background.primaryDark}; */
  background: rgba(0, 0, 0, 0.674);
  width: 14rem;
  height: 93%;
  position: fixed;
  top: 4rem;
  /* left: 1.5rem; */
  right: 0.1rem;
  border: 1px solid rgb(37, 37, 37);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0;
  & > div {
    background: ${colors.button.secondary};
    width: 4rem;
    height: 3rem;
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
    :hover {
      background: ${colors.button.optional3};
      transition: all 0.5s ease-in-out;
    }
  }
  & > p {
    padding: 1rem;
    font-size: 1.8ch;

    :last-child{
      padding:0;
      font-size: 1.3ch;
    }
    & > h3 {
      margin: 0;
    }
  }
`;

export default function InfoModal() {
  return (
    <ModalWrapper onMouseDown={(e) => e.stopPropagation()}>
      <p>
        Hi there, <br />{" "}
        <h3>
          I’m <strong>Samitone,</strong>
        </h3>{" "}
        <br />
        an uncomplicated music sequencer web app.
        <br /> <br />
         I offer various samples and beats that you can choose and set in
        desirable sequences to play for you. <br /> <br />
        By clicking on each square you make it ‘on’ and ‘off ’ to make sound and
        vice versa. I hope you find it easy and have a lot of fun. In case that
        you like to have a conversation you can <br /> <br />{" "}
          <strong> &nbsp; &nbsp; Connect with me </strong>
      </p>
      {/* <p>Connect With Me</p> */}
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
        <a href="mailto:samanmanesh7@gmail.com" target="_blank">
          <img src="icons/social-mail.svg" alt="mail" />
        </a>
      </div>
      <div>
        <a href="https://instagram.com/samansmanesh" target="_blank">
          <img src="icons/social-instagram.svg" alt="instagram" />
        </a>
      </div>
      <p>Made by <strong>Saman Manesh</strong> </p>
    </ModalWrapper>
  );
}
