import styled, { css, keyframes } from "styled-components";

interface IHandContainer {
  animation?: string;
}

const slamHand = keyframes`
  22.5% {
    transform: scale(0.3, 0.3) translate(0, 30rem);
  }

  66% {
    transform: scale(1, 1) translate(0, 0);
  }
}
`;

export const HandContainer = styled.div<IHandContainer>`
  height: 24rem;
  width: 24rem;

  img {
    height: 100%;
    width: 100%;
  }

  animation-duration: 1.5s;
  animation-iteration-count: 1;

  ${(props) =>
    props.animation !== '' &&
    css`
      animation-name: ${slamHand};
    `}
`;

export const HandImage = styled.img`
  
`;
