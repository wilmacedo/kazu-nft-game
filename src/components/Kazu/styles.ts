import { darken, lighten, transparentize } from "polished";
import styled, { css, keyframes } from "styled-components";
import { Button as DefaultButton } from "../Button";

export const Container = styled.div``;

interface IKazuSides {
  animation?: string;
  side?: boolean;
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

const infiniteSpin = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const KazuSides = styled.div<IKazuSides>`
  height: 20rem;
  width: 20rem;

  --webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  img {
    height: 100px;
    width: 100px;
  }

  transform: ${(props) => (props.side === false ? "rotateY(180deg)" : "0")};
  animation-duration: ${(props) =>
    props.animation === "infinite" ? "5s" : "1.5s"};
  animation-iteration-count: ${(props) =>
    props.animation === "infinite" ? "infinite" : "1"};

  ${(props) =>
    props.animation === "ff" &&
    css`
      animation-name: ${spinFrontToFront};
    `}

  ${(props) =>
    props.animation === "fb" &&
    css`
      animation-name: ${spinFrontToBack};
    `}

    ${(props) =>
    props.animation === "bb" &&
    css`
      animation-name: ${spinBackToBack};
    `}

    ${(props) =>
    props.animation === "bf" &&
    css`
      animation-name: ${spinBackToFront};
    `}

    ${(props) =>
    props.animation === "infinite" &&
    css`
      animation-timing-function: linear;
      animation-name: ${infiniteSpin};
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
