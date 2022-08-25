import { Card, Container, StepsContainer } from "./styles";
import Layout from "../Layout";
import React from "react";

const HowWork: React.FC = () => {
  const imageUrl = 'https://64.media.tumblr.com/6cca6ea31f57f3d1211dc2fc4da574fb/b9ee7c6fc226c9f5-00/s500x750/13c91c89ab8a816aa27911b563a2d08f67408fdc.gifv';

  return (
    <Layout>
      <Container>
        <img src={imageUrl} />
        <Card>
          <h1>How it Works</h1>
          <StepsContainer>
            <span>1. Connect your Klever wallet to login to Kazu</span>
            <span>2. After connecting, you'll get 3 free tickets to play with</span>
            <span>3. Head to the Store tab to buy Kazu packs or Marketplace tab to buy Kazus from other players</span>
            <span>4. Go to the Battle tab. You are now ready to battle Kazus!</span>
          </StepsContainer>
        </Card>
      </Container>
    </Layout>
  );
};

export default HowWork;
