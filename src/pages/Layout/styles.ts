import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100vw;

  position: absolute;

  background-image: url("https://klever.finance/wp-content/uploads/2021/09/Blockchain_Testnet.jpg");
  /* background-image: url("https://64.media.tumblr.com/f30efbba2ff16e035ddcf50e0ed34c1b/tumblr_inline_nre1s7Y3fJ1ro7qra_640.jpg"); */
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
