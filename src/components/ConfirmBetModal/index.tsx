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
  XButton,
} from "./styles";

interface IConfirmBetModal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: Function;
}

const ConfirmBetModal: React.FC<IConfirmBetModal> = ({
  setOpen,
  onConfirm,
}) => {
  return (
    <Container>
      <Card>
        <Title>
          <span>Confirm Battle</span>
          <XButton onClick={() => setOpen(false)}>ⓧ</XButton>
        </Title>
        <Divider />
        <Body>
          <Row>
            <p>Reward amount</p>
            <span>20 KLV</span>
          </Row>
          <Row>
            <p>Tickets used</p>
            <span>1 🎫</span>
          </Row>
        </Body>
        <Divider />
        <Footer>
          <Button onClick={() => onConfirm()}>
            <span>Confirm</span>
          </Button>
        </Footer>
      </Card>
    </Container>
  );
};

export default ConfirmBetModal;
