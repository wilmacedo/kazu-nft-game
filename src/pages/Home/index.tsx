import { useState } from "react";
import { Kazoo1 } from "../../assets";
import Layout from "../Layout";
import {
  Card,
  Container,
  H1,
  ItemCard,
  StartCard,
  CardList,
  Button,
  StartButton,
  OptionButton,
  ContentButton,
} from "./styles";

const Home: React.FC = () => {
  const cards = new Array(9).fill(0);
  const [selected, setSelected] = useState(0);

  const handleCard = (index: number) => {
    setSelected(index);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <H1>Select your Tazo</H1>
          <CardList>
            {cards.map((_, index) => (
              <ItemCard
                key={index}
                onClick={() => handleCard(index)}
                selected={selected === index}
              >
                <img src={Kazoo1} alt="Whale" />
              </ItemCard>
            ))}
          </CardList>
        </Card>
        <ContentButton>
          <StartButton>
            <span>Start</span>
          </StartButton>
          <OptionButton>
            {/* <img src={ArrowDown} alt="Arrow down" /> */}
            1TK
          </OptionButton>
        </ContentButton>
      </Container>
    </Layout>
  );
};

export default Home;
