import { darken, transparentize } from "polished";
import styled from "styled-components";

interface IButton {
  disabled?: boolean;
}

export const Button = styled.div<IButton>`
  width: 100%;

  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    transparentize(0.75, darken(0.05, props.theme.primary))};
  border: 1rem;

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: 0.3s ease;

  span {
    color: ${(props) => props.theme.primary};
    font-size: 1rem;
  }

  &:hover {
    background-color: ${(props) =>
      transparentize(0.65, darken(0.05, props.theme.primary))};
  }
`;
