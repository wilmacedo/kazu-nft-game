import { darken } from "polished";
import styled from "styled-components";

import { Button as DefaultButton } from "../Button";

export const Container = styled.div`
  padding: 2rem;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Button = styled(DefaultButton)`
  margin: unset;
  width: unset;

  position: absolute;
  right: 2rem;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 2rem;
`;

export const AccountContainer = styled.div`
  position: absolute;
  right: 2rem;

  padding: 0.1rem 0 0 1.15rem;

  display: flex;

  flex-direction: row;
  align-items: center;

  gap: 0.75rem;

  background-color: ${(props) => darken(0.25, props.theme.gray)};

  border-radius: 1.15rem;

  span {
    font-weight: 400;
  }
`;

export const AddressContainer = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;

  padding: 0.65rem 1.15rem;

  background-color: ${(props) => darken(0.05, props.theme.gray)};

  border-radius: 1.15rem;
`;

export const KlvIcon = styled.img`
  margin-left: 0.5rem;

  width: 1.15rem;
  height: auto;
`;
