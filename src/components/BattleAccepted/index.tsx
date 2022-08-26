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
import { Kazu1, Kazu2, Kazu3, Kazu4 } from "../../assets";

interface IConfirmBetModal {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selected: number;
  nftSelected: Function;
}
interface INft {
  id: number;
  img: string;
}

const BattleAccepted: React.FC<IConfirmBetModal> = ({
  setOpen,
  nftSelected,
  selected,
}) => {
  const cards: INft[] = [
    { id: 1234, img: Kazu1 },
    { id: 9843, img: Kazu2 },
    { id: 2487, img: Kazu3 },
    { id: 9866, img: Kazu4 },
  ];
  const nft = nftSelected(selected);
  const randomNFt = () => {
    const r = Math.random() * (5 - 1) + 1;

    return cards[Number(Number(r).toFixed(0))];
  };
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
            <img width="200" src={nft.img} alt="" />
          </Row>
          <Row>
            <img width="200" src={randomNFt()?.img} alt="" />
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
