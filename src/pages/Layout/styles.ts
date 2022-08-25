import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100vw;

  position: absolute;

  background-image: url("https://klever.finance/wp-content/uploads/2021/09/Blockchain_Testnet.jpg");
  background-repeat: no-repeat;
  background-position: 90% 10%;

  filter: blur(5px);
  opacity: 0.35;

  z-index: -1;
`;
