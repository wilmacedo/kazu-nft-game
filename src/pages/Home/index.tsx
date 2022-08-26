import { useEffect, useLayoutEffect, useState } from "react";
import { Kazu1, Kazu2, Kazu3, Kazu4 } from "../../assets";
import ConfirmBetModal from "../../components/ConfirmBetModal";
import BattleAccepted from "../../components/BattleAccepted";
import Divider from "../../components/Divider";
import Layout from "../Layout";
import { Card, Container, H1, KazuCard, KazuList, StartButton } from "./styles";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { useProviderData } from "../../contexts/ProviderData";

interface INft {
  id: number;
  img: string;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const provider = useProviderData();
  const cards: INft[] = [
    { id: 1234, img: Kazu1 },
    { id: 9853, img: Kazu2 },
    { id: 2487, img: Kazu3 },
    { id: 9866, img: Kazu4 },
    { id: 1534, img: Kazu1 },
    { id: 9843, img: Kazu2 },
    { id: 2499, img: Kazu3 },
    { id: 9877, img: Kazu4 },
    { id: 1934, img: Kazu1 },
    { id: 9822, img: Kazu2 },
    { id: 2411, img: Kazu3 },
    { id: 9816, img: Kazu4 },
    { id: 1134, img: Kazu1 },
    { id: 9800, img: Kazu2 },
    { id: 2422, img: Kazu3 },
    { id: 9862, img: Kazu4 },
    { id: 1124, img: Kazu1 },
    { id: 9888, img: Kazu2 },
    { id: 2497, img: Kazu3 },
    { id: 9865, img: Kazu4 },
  ];

  const [selected, setSelected] = useState(-1);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [modalBattleAcceptedOpen, setModalBattleAcceptedOpen] = useState(false);
  const [nfts, setNfts] = useState<INft[]>();

  const [txLoading, setTxLoading] = useState(false);

  const handleStart = () => {
    if (selected !== -1) setModalOpen(true);
  };

  const handleCard = (id: number) => {
    setSelected(id !== selected ? id : -1);
  };

  const handlerModalBattleAccept = async () => {
    const transfer = {
      amount: 20 * 10 ** 6,
      receiver:
        "klv1kam6acu6avm6jvaafasx88mu80na0tgeucevw3waxzauzxhnmkestu0dmk",
    };
    const contract = {
      type: 0,
      payload: transfer,
    };

    setTxLoading(true);
    const response = await window.kleverWeb.buildTransaction(contract);
    setTxLoading(false);

    if (response.code !== "successful") {
      setModalOpen(false);
      console.error("Error on trigger tx", response);
      return;
    }

    setModalOpen(false);
    setloading(true);
    provider.setTickets(provider.getTickets() - 1);

    setTimeout(() => {
      // setloading(false);
      setModalBattleAcceptedOpen(true);
    }, 1000);
    setTimeout(() => {
      setModalBattleAcceptedOpen(false);
      navigate("/battle/accept");
    }, 2000);
  };

  const nftSelected = (id: number) => {
    return cards.find((nft: INft) => id === nft.id);
  };

  useEffect(() => {
    if (!provider.isConnected()) return;

    (async () => {
      const request = await fetch(
        `https://api.testnet.klever.finance/v1.0/assets/holders/KZU-9LMA`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const response = await request.json();
      if (response?.code === "successful") {
        const userNfts = response.data.accounts.find(
          (nft: any) => nft.address === provider.getAddress()
        );
        const array = [];

        for (let index = 0; index < userNfts?.balance; index++) {
          array[index] = cards[index];
        }
        setNfts(array);
      }
    })();
  }, [provider.isConnected()]);

  return (
    <Layout>
      <Container>
        <Card>
          <H1>Select your Kazu</H1>
          <KazuList>
            {nfts?.map((nft: INft, index) => (
              <KazuCard
                key={index}
                onClick={() => handleCard(nft.id)}
                selected={selected === nft.id}
              >
                <img src={nft.img} alt="Kazu" />
                <Divider />
                <p>#{nft.id}</p>
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
            loading={txLoading}
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
