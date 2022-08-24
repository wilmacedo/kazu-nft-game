import { darken, transparentize } from "polished";
import styled from "styled-components";

import { ConnectionStatus as ConnectionType } from "../../types";
import { Button } from "../Button";

interface IStatus {
  status: ConnectionType;
}

interface IRow {
  hasData: boolean;
}

export const Container = styled.div`
  width: 22rem;

  display: flex;

  flex-direction: column;

  background: ${(props) => props.theme.blur.black};
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

export const ConnectionStatus = styled.div<IStatus>`
  height: 1rem;
  width: 1rem;

  border-radius: 100%;

  background-color: ${(props) => props.theme.status[props.status]};
`;

export const Body = styled.div`
  padding: 1rem;

  display: flex;

  flex-direction: column;
  gap: 0.5rem;
`;

export const Row = styled.div<IRow>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  span {
    color: ${(props) => transparentize(0.15, props.theme.white)};
    font-size: 1rem;
  }

  p {
    color: ${(props) =>
      transparentize(props.hasData ? 0 : 0.7, props.theme.white)};
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
