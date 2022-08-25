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
}

const BattleAccepted: React.FC<IConfirmBetModal> = ({ setOpen }) => {
  return (
    <Container>
      <Card>
        <Title>
          <span>Battle Accepted</span>
        </Title>
        <Divider />
        <Body>
          <Row>
            <p>Player 1</p>
            <img
              width="200"
              src="https://static1.milkcapmania.co.uk/Img/Tazo/Brazil/Yu-Gi-Oh%21/Magic/300DPI/21-30-Back-Yellow-Joey-Wheeler-2.png"
              alt=""
            />
          </Row>
          <Row>
            <img
              width="200"
              src="https://static1.milkcapmania.co.uk/Img/Tazo/Brazil/Yu-Gi-Oh%21/Magic/300DPI/21-30-Back-Yellow-Joey-Wheeler-2.png"
              alt=""
            />
            <p>Player 2</p>
          </Row>
        </Body>
        <Divider />
        <Footer>
          <Button>
            <span>200 KLV</span>
          </Button>
        </Footer>
      </Card>
    </Container>
  );
};

export default BattleAccepted;
