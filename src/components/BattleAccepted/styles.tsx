import { Button as DefaultButton } from "../Button";
import { darken, lighten, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.blur.black};
`;

export const Card = styled.div`
  width: 40rem;

  display: flex;

  flex-direction: column;

  background: ${(props) => props.theme.black};
  border-radius: 0.6875rem;
  border: 1px solid ${(props) => props.theme.blur.white};
`;

export const Title = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 1.5rem;

  span {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;

export const XButton = styled.span`
  cursor: pointer;
  user-select: none;
  transition: 0.3s ease;

  &:hover {
    color: ${(props) => lighten(0.5, props.theme.blur.white)};
  }
`;

export const Body = styled.div`
  padding: 1rem;

  display: flex;
  flex-direction: row;

  gap: 0.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.5rem;
  font-weight: 400;

  span {
    color: ${(props) => transparentize(0.15, props.theme.white)};
    font-size: 1rem;
  }

  p {
    color: ${(props) => transparentize(0.7, props.theme.white)};
  }
`;

export const Footer = styled.div`
  margin: 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 0.1rem;

  img {
    color: red;
  }
`;

export const Button = styled(DefaultButton)`
  margin: unset;
  &:hover {
    background-color: ${(props) =>
      transparentize(0.75, darken(0.05, props.theme.primary))};
  }
`;
