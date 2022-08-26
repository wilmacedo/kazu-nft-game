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

  background-color: rgba(17, 25, 40, 0.75);
`;

export const Card = styled.div`
  width: 22rem;

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
  justify-content: center;

  padding: 1rem 1.5rem;

  span {
    font-weight: 500;
    font-size: 1.25rem;
  }
`;