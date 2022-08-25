import { useState } from "react";
import { Kazu1 } from "../../assets";
import ConfirmBetModal from "../../components/ConfirmBetModal";
import BattleAccepted from "../../components/BattleAccepted";
import Divider from "../../components/Divider";
import Layout from "../Layout";
import { Card, Container, H1, KazuCard, KazuList, StartButton } from "./styles";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const cards = new Array(9).fill(0);

  const [selected, setSelected] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [modalBattleAcceptedOpen, setModalBattleAcceptedOpen] = useState(false);

  const handleStart = () => {
    if (selected !== -1) setModalOpen(true);
  };

  const handleCard = (index: number) => {
    setSelected(index !== selected ? index : -1);
  };

  const handlerModalBattleAccept = () => {
    setModalOpen(false);
    setloading(true);
    setTimeout(() => {
      // setloading(false);
      setModalBattleAcceptedOpen(true);
    }, 3000);

    setTimeout(() => {
      setModalBattleAcceptedOpen(false);
      navigate("/battle/accept");
    }, 7000);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <H1>Select your Kazu</H1>
          <KazuList>
            {cards.map((_, index) => (
              <KazuCard
                key={index}
                onClick={() => handleCard(index)}
                selected={selected === index}
              >
                <img src={Kazu1} alt="Kazu" />
                <Divider />
                <p>
                  #{index + 1}
                  {index + 1}
                  {index + 1}
                  {index + 1}
                </p>
              </KazuCard>
            ))}
          </KazuList>
        </Card>
        <StartButton onClick={handleStart} disabled={selected === -1}>
          <span>Start Battle</span>
        </StartButton>
        {modalOpen && (
          <ConfirmBetModal
            onConfirm={handlerModalBattleAccept}
            setOpen={setModalOpen}
          />
        )}
        {loading && <Loading />}
        {modalBattleAcceptedOpen && <BattleAccepted setOpen={setModalOpen} />}
      </Container>
    </Layout>
  );
};

export default Home;
