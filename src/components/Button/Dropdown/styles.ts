import { darken, transparentize } from "polished";
import styled, { css } from "styled-components";

import { Button as DefaultButton } from "../index";

interface ICointainer {
  loading?: boolean;
}

interface IOptionContainer {
  open: boolean;
}

export const Container = styled.div<ICointainer>`
  width: 100%;

  position: relative;
  display: flex;

  flex-direction: row;
  align-items: center;

  gap: 0.1rem;

  ${(props) =>
    props.loading !== undefined &&
    css`
      opacity: ${props.loading ? 0.5 : 1};
    `}
`;

export const Button = styled(DefaultButton)`
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

export const OptionButton = styled(DefaultButton)`
  padding: 0;

  height: 3.2rem;
  width: 4rem;

  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;

  img {
    height: 0.6rem;
    width: auto;
  }
`;

export const OptionsContainer = styled.div<IOptionContainer>`
  width: 100%;

  padding: 0.75rem;

  position: absolute;
  display: flex;

  top: 4rem;

  flex-direction: column;

  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  opacity: ${(props) => (props.open ? 1 : 0)};

  background-color: ${(props) =>
    transparentize(0.75, darken(0.05, props.theme.primary))};
  border-radius: 1rem;
`;

export const Option = styled.div`
  padding: 0.5rem 0;

  color: ${(props) => props.theme.primary};
  border-radius: 0.5rem;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      transparentize(0.9, darken(0.05, props.theme.primary))};
  }
`;
