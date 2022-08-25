import { lighten } from "polished";
import styled, { css } from "styled-components";

import { Container as DefaultCard } from "../../components/Card/styles";

interface IItem {
  selected: boolean;
}

export const Container = styled.div`
  margin-top: 2rem;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(DefaultCard)`
  padding: 3rem;

  flex-wrap: wrap;

  color: ${(props) => props.theme.white};
`;

export const ItemCard = styled.div<IItem>`
  padding: 0.5rem 1.25rem;

  width: fit-content;

  border: 1px solid ${(props) => lighten(0.5, props.theme.blur.black)};
  border-radius: 0.5rem;

  transition: 0.3s ease;

  cursor: pointer;

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
    width: 5.5rem;
    height: auto;
  }
`;
