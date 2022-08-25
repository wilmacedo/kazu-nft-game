import { useState } from "react";
import { Whale } from "../../assets";
import Layout from "../Layout";
import { Card, Container, ItemCard } from "./styles";

const Home: React.FC = () => {
  const cards = new Array(3).fill(0);
  const [selected, setSelected] = useState(0);

  const handleCard = (index: number) => {
    setSelected(index);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <h1>Select your Tazo</h1>
          {cards.map((_, index) => (
            <ItemCard
              key={index}
              onClick={() => handleCard(index)}
              selected={selected === index}
            >
              <img src={Whale} alt="Whale" />
            </ItemCard>
          ))}
        </Card>
      </Container>
    </Layout>
  );
};

export default Home;
