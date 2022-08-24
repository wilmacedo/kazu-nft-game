import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 24px;
`;

export const TabChooser = styled.div`
  display: flex;
  align-items: center;

  border-radius: 2rem;
  overflow: hidden;
  
  height: 40px;
  width: 400px;

  color: white;
`;

export const Tab = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.primary};

  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      transparentize(0.65, darken(0.05, props.theme.primary))};
  }
`;