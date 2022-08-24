import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

export const BackgroundImage = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;

  background-image: url("https://klever.finance/wp-content/uploads/2021/09/Blockchain_Testnet.jpg");
  background-repeat: no-repeat;
  background-position: 90% 10%;

  filter: blur(5px);
  opacity: 0.35;
`;

export const CardContainer = styled.div`
  padding: 8.5rem 0;

  display: flex;
  position: inherit;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2.5rem;
`;

export const HeaderMenu = styled.div`
  display: flex;
  flex: 1

`
