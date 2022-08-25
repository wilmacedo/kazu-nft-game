import { lighten } from "polished";
import styled, { css } from "styled-components";

import { Container as DefaultCard } from "../../components/Card/styles";
import { Button as DefaultButton } from '../../components/Button';
interface IItem {
  selected: boolean;
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
  padding: 3rem;

  flex-wrap: wrap;

  color: ${(props) => props.theme.white};
  display: flex;
`;

export const StartCard = styled(DefaultCard)`
  padding: 3rem;

  flex-wrap: wrap;

  color: ${(props) => props.theme.white};
`;

export const CardList = styled.div`
display: flex;
flex-wrap: wrap;

`

export const ItemCard = styled.div<IItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.25rem;
  margin: 0.2rem;
  width: 100px;

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

export const H1 = styled.h1`
margin: 10px 0;
display: flex;
justify-content: center;
`

export const ContentButton = styled.div` 
width: 100%;
position: relative;
display: flex;

flex-direction: row;
align-items: center;
justify-content: center;

gap: 0.1rem !important;
`
export const StartButton = styled(DefaultButton)`
  margin: 1rem 0 !important;
  width: 10rem;

  border-radius: 0px;
  border-top-left-radius: 1rem !important;
  border-bottom-left-radius: 1rem !important;
`;

export const OptionButton = styled(DefaultButton)`
  padding: 0;
  
  height: 3.2rem;
  width: 4rem;
  border-radius: 0px;
  border-top-right-radius: 1rem ;
  border-bottom-right-radius: 1rem ;

  img {
    height: 0.6rem;
    width: auto;
  }
`;