import styled from "styled-components";

import { Container as DefaultCard } from "../../components/Card/styles";

export const Container = styled.div`
  margin-top: 10rem;

  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  align-items: center;
  justify-content: center;
`;

export const Card = styled(DefaultCard)`
  padding: 1rem;

  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme.white};
`;
