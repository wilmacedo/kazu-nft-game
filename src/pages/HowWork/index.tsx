import { Card, Container, StepsContainer } from "./styles";
import Layout from "../Layout";
import React from "react";

const HowWork: React.FC = () => {
  return (
    <Layout>
      <Container>
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
