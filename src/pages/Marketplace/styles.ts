import { lighten, transparentize, darken } from "polished";
import styled, { css } from "styled-components";

import { Container as DefaultCard } from "../../components/Card/styles";
import { Button as DefaultButton } from "../../components/Button";

interface IKazuCard {
  selected: boolean;
  available: boolean;
}

export const Button = styled(DefaultButton)`
  margin: 1rem 0;
  width: 10rem;
`;

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Card = styled(DefaultCard)`
  display: flex;
  flex-wrap: wrap;

  padding: 3rem;

  color: ${(props) => props.theme.white};
`;

export const StartCard = styled(DefaultCard)`
  padding: 3rem;

  flex-wrap: wrap;

  color: ${(props) => props.theme.white};
`;

export const KazuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const KazuMarketCard = styled.div<IKazuCard>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  user-select: none;

  margin: 0.2rem;
  width: 100px;

  border: 1px solid ${(props) => lighten(0.5, props.theme.blur.black)};
  border-radius: 0.5rem;

  transition: 0.3s ease;

  p {
    font-weight: 300;
    margin: 0.7rem 0;
  } 

  cursor: ${(props) => props.available ? 'pointer' : 'not-allowed'};

  ${(props) =>
    props.selected &&
    css`
      border-color: ${(props) => lighten(0.7, props.theme.blur.black)};
    `};

  ${(props) =>
    !props.selected &&
    css`
      opacity: 0.5;
    `};

  &:hover {
    border-color: ${(props) => lighten(0.7, props.theme.blur.black)};
  }

  img {
    margin: 0.5rem 1.25rem;
    width: 5.5rem;
    height: auto;
  }
`;

export const BuyKazuButton = styled(DefaultButton)`
  padding: 1rem 0;
  width: 90%;

  cursor: not-allowed;
  user-select: none;

  span {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  border-radius: 1rem;
`;

export const H1 = styled.h1`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`;