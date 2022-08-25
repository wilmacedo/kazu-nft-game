import { darken, lighten, transparentize } from "polished";
import styled, { css, keyframes } from "styled-components";
import { Button as DefaultButton } from "../Button";

export const Container = styled.div``;

interface IKazuSides {
  anim?: number;
}

const spinFrontToFront = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(1440deg);
  }
`;

const spinFrontToBack = keyframes`
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(1260deg);
  }
`;

const spinBackToBack = keyframes`
  from {
    transform: rotateY(180);
  }
  to {
    transform: rotateY(1620deg);
  }
`;

const spinBackToFront = keyframes`
  from {
    transform: rotateY(180);
  }
  to {
    transform: rotateY(1440deg);
  }
`;

export const KazuSides = styled.div<IKazuSides>`
  height: 20rem;
  width: 20rem;

  --webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  img {
    height: 20rem;
    width: 20rem;
  }

  animation-duration: 1.5s;
  animation-iteration-count: 1;

  ${(props) =>
    props.anim === 0 &&
    css`
      animation-name: ${spinFrontToFront};
    `}

  ${(props) =>
    props.anim === 1 &&
    css`
      animation-name: ${spinFrontToBack};
      transform: rotateY(180deg);
    `}

    ${(props) =>
    props.anim === 2 &&
    css`
      animation-name: ${spinBackToBack};
      transform: rotateY(180deg);
    `}

    ${(props) =>
    props.anim === 3 &&
    css`
      animation-name: ${spinBackToFront};
    `}
`;

export const CoinSide = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  --webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const FrontSide = styled(CoinSide)``;

export const BackSide = styled(CoinSide)`
  transform: rotateY(180deg);
`;
