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
  loading?: boolean;
}

const ConfirmBetModal: React.FC<IConfirmBetModal> = ({
  setOpen,
  onConfirm,
  loading,
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
          <Button disabled={loading} onClick={() => onConfirm()}>
            <span>{loading ? "Waiting confirm tx..." : "Confirm"}</span>
          </Button>
        </Footer>
      </Card>
    </Container>
  );
};

export default ConfirmBetModal;
