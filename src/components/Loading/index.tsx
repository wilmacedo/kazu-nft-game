import React from "react";
import { Container, Card, Title } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>
          <span>Seaching for opponent ...</span>
        </Title>
      </Card>
    </Container>
  );
};

export default Loading;
