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
  width: 600px;

  margin: 16px 0 60px 0;

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

  margin-bottom: 60px;
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

  border: 8px solid
    ${(props) => (props.isSelected ? props.theme.primary : "transparent")};

  cursor: pointer;
  transition: 0.3s ease;

  margin-right: 40px;

  background-color: beige;
`;

export const StartBattleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 24px;
  overflow: hidden;

  height: 80px;
  width: 640px;

  background-color: yellow;

  color: white;
`;

export const TicketCounter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  font-size: 20px;

  user-select: none;
  color: black;
`;

interface IStartBattleButton {
  isEnabled?: boolean;
}

export const StartBattleButton = styled.div<IStartBattleButton>`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;

  border-radius: 24px 0 0 24px;

  font-size: 28px;
  user-select: none;
  cursor: ${(props) => (props.isEnabled ? "pointer" : "not-allowed")};

  background-color: blue;

  p {
    padding-left: 24px;
  }

  ::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    position: relative;
    left: 46px;
    border-top: 40px solid yellow;
    border-bottom: 40px solid yellow;
    border-left: 40px solid blue;
  }

  &:hover {
    background-color: ${(props) => (props.isEnabled ? "mediumblue" : "blue")};

    ::after {
      border-left: 40px solid ${(props) => (props.isEnabled ? "mediumblue" : "blue")};
    }
  }
`;

export const KLVWager = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  user-select: none;
  font-size: 20px;
  color: black;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4px;
  }

  input {
    height: 24px;
    font-size: 20px;
    width: 40%;

    margin-right: 8px;

    text-align: center;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
