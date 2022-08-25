import { useState } from "react";
import { Kazu1 } from "../../assets";
import ConfirmBetModal from "../../components/ConfirmBetModal";
import Layout from "../Layout";
import {
  Card,
  Container,
  H1,
  KazuCard,
  KazuList,
  StartButton,
} from "./styles";

const Home: React.FC = () => {
  const cards = new Array(9).fill(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleCard = (index: number) => {
    setSelected(index);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <H1>Select your Tazo</H1>
          <KazuList>
            {cards.map((_, index) => (
              <KazuCard
                key={index}
                onClick={() => handleCard(index)}
                selected={selected === index}
              >
                <img src={Kazu1} alt="Whale" />
              </KazuCard>
            ))}
          </KazuList>
        </Card>
        <StartButton onClick={() => setModalOpen(true)}>
          <span>Start Battle</span>
        </StartButton>

        {modalOpen && (
          <ConfirmBetModal setOpen={setModalOpen} />
        )}
      </Container>
    </Layout>
  );
};

export default Home;
