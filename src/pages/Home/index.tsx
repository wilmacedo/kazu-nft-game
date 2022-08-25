import { useState } from "react";
import { Kazu1, Kazu2, Kazu3, Kazu4 } from "../../assets";
import ConfirmBetModal from "../../components/ConfirmBetModal";
import BattleAccepted from "../../components/BattleAccepted";
import Divider from "../../components/Divider";
import Layout from "../Layout";
import { Card, Container, H1, KazuCard, KazuList, StartButton } from "./styles";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

interface INft {
  id: number;
  img: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const cards: INft[] = [
    { id: 1234, img: Kazu1 },
    { id: 9843, img: Kazu2 },
    { id: 2487, img: Kazu3 },
    { id: 9866, img: Kazu4 },
  ];

  const [selected, setSelected] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [modalBattleAcceptedOpen, setModalBattleAcceptedOpen] = useState(false);

  const handleStart = () => {
    if (selected !== -1) setModalOpen(true);
  };

  const handleCard = (id: number) => {
    setSelected(id !== selected ? id : -1);
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

  const nftSelected = (id: number) => {
    return cards.find((nft: INft) => id === nft.id);
  };

  return (
    <Layout>
      <Container>
        <Card>
          <H1>Select your Kazu</H1>
          <KazuList>
            {cards.map((nft: INft, index) => (
              <KazuCard
                key={index}
                onClick={() => handleCard(nft.id)}
                selected={selected === nft.id}
              >
                <img src={nft.img} alt="Kazu" />
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
        {modalBattleAcceptedOpen && (
          <BattleAccepted
            nftSelected={nftSelected}
            selected={selected}
            setOpen={setModalOpen}
          />
        )}
      </Container>
    </Layout>
  );
};

export default Home;
