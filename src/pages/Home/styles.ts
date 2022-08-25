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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;

  opacity: 1;
`;

export const TabChooser = styled.div`
  display: flex;
  align-items: center;

  border-radius: 24px;
  overflow: hidden;

  height: 40px;
  width: 400px;

  margin: 16px 0 40px 0;

  user-select: none;

  color: white;
`;

interface ITab {
  isSelected?: boolean;
}

export const Tab = styled.div<ITab>`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.isSelected
      ? transparentize(0.65, darken(0.05, props.theme.primary))
      : props.theme.primary};

  cursor: ${(props) => (props.isSelected ? "default" : "pointer")};
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      transparentize(0.65, darken(0.05, props.theme.primary))};
  }
`;

export const KazuListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;

  overflow-x: auto;

  padding-left: 40px;

  background-color: transparent;

  ::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888888;
    border-radius: 8px;
  }
`;

export const KazuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

interface IKazuCircle {
  isSelected?: boolean;
}

export const KazuCircle = styled.div<IKazuCircle>`
  display: flex;

  width: 160px;
  height: 160px;
  border-radius: 80px;

  cursor: pointer;

  margin-right: 40px;

  /* background-color: beige; */
  background-color: ${(props) => (props.isSelected ? "green" : "beige")};
`;
