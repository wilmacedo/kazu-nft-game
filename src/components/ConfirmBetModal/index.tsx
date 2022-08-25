import Divider from "../Divider";
import React from "react";
import {
  Container,
  Card,
  Body,
  Footer,
  Row,
  Title,
  Button,
} from "./styles";

const ConfirmBetModal: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>
          <span>Confirm Battle</span>
        </Title>
        <Divider />
        <Body>
          <Row>
            <p>Bet amount</p>
            <span>20 KLV</span>
          </Row>
          <Row>
            <p>Tickets used</p>
            <span>1 🎫</span>
          </Row>
        </Body>
        <Divider />
        <Footer>
          <Button>
            <span>Confirm</span>
          </Button>
        </Footer>
      </Card>
    </Container>
  );
};

export default ConfirmBetModal;
