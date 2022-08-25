import React, { Fragment, useState } from "react";
import {
  Container,
  ContentContainer,
  KazuCircle,
  ValueContainer,
  ValueContentContainer,
} from "./styles";

interface Inft {
  img: string;
  value: number;
  hash: number;
}
interface Iplayer {
  address: string;
  nft: Inft;
}
const BattleAccepted: React.FC = () => {
  const [battleAccepted, setBattleAccepted] = useState<boolean>(true);
  const [value] = useState<number>(400);
  const players = [
    {
      address: "player 1",
      nft: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0ffgr7QHB0aruZO-0030OwlMSsVTFFBeXQ&usqp=CAU",
        value: 200,
        hash: 2867,
      },
    },
    {
      address: "player 2",
      nft: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0ffgr7QHB0aruZO-0030OwlMSsVTFFBeXQ&usqp=CAU",
        value: 150,
        hash: 7655,
      },
    },
  ];
  return (
    <Container>
      <ContentContainer>
        {players.map((player: Iplayer, index) => (
          <div key={index}>
            <KazuCircle>
              <img src={player.nft.img} alt="" />
            </KazuCircle>
            <p>{player?.address}</p>
          </div>
        ))}
      </ContentContainer>
      <ValueContentContainer>
        <ValueContainer>{value} KLV</ValueContainer>
      </ValueContentContainer>
    </Container>
  );
};

export default BattleAccepted;
