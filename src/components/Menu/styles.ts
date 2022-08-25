import { darken } from "polished";
import styled, { css } from "styled-components";

interface IContainer {
  disabled?: boolean;
}

interface IOption extends IContainer {
  selected: boolean;
}

export const Container = styled.div<IContainer>`
  padding: 0.15rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.15rem;

  background-color: ${(props) => darken(0.25, props.theme.gray)};

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `};

  border-radius: 1.25rem;
`;

export const Option = styled.div<IOption>`
  padding: 0.65rem 1.25rem;

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => darken(0.05, props.theme.gray)};
    `}

  border-radius: 1.25rem;

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    span {
      opacity: ${(props) => (props.selected ? 0.75 : 1)};
    }
  }

  span {
    font-weight: 500;
    color: ${(props) => props.theme.white};

    opacity: ${(props) => (props.selected ? 1 : 0.75)};

    transition: 0.3s ease;
  }
`;
