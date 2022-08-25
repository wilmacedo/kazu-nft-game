import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 2.5rem;

  display: flex;

  flex-direction: column;

  background: ${(props) => props.theme.blur.black};
  border-radius: 0.6875rem;
  border: 1px solid ${(props) => props.theme.blur.white};

  h1 {
    color: ${(props) => props.theme.white};
  }
`;
