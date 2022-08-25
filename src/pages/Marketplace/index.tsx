import { Kazu1 } from "../../assets";
import { useState } from "react";
import Layout from "../Layout";

import {
  Card,
  Container,
  H1,
  KazuMarketCard,
  KazuList,
  BuyKazuButton,
} from "./styles";

import Divider from "../../components/Divider";

const Marketplace: React.FC = () => {
  const cards = new Array(3).fill(0);

  const [selected, setSelected] = useState(-1);

  const handleCard = (index: number) => {
    setSelected(index !== selected ? index : -1);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <H1>Kazu Marketplace</H1>
          <KazuList>
            {cards.map((_, index) => (
              <KazuMarketCard
                key={index}
                // OnClick removed -> not available!
                selected={selected === index}
                available={false}
              >
                <img src={Kazu1} alt="Kazu" />
                <Divider />
                <p>#{(index + 1)}{(index + 1)}{(index + 1)}{(index + 1)}</p>
                <BuyKazuButton>
                  <span>SOLD OUT</span>
                </BuyKazuButton>
              </KazuMarketCard>
            ))}
          </KazuList>
        </Card>
      </Container>
    </Layout>
  );
};

export default Marketplace;
