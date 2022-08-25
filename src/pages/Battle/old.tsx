import { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  CardConteiner,
  Container,
  ScoreboardContainer,
  FlipContainer,
  Flipper,
  Front,
  Back,
} from "./styles";
import hand from "../../assets/hand.png";
import SmallTazu from "./SmallTazu";
import SmallTazuList from "./SmallTazuList";

interface Infts {
  img: string;
  hash: number;
}

const Home: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [loss, setLoss] = useState<[Infts]>();
  const [winer, setWiner] = useState<[Infts]>();

  useEffect(() => {
    setTimeout(() => {
      setIsActive((old) => !old);
    }, 3000);
  }, [isActive]);

  return (
    <Layout>
      <Container>
        <CardConteiner>
          <ScoreboardContainer>
            <div>
              <h1>Loss</h1>
              <img
                width={50}
                src="https://i.pinimg.com/originals/54/f6/46/54f646b74be4ad7f047dd03f11a0a995.png"
                alt=""
              />
            </div>

            <div>
              <h1>Winer</h1>
              <img
                width={50}
                src="https://i.pinimg.com/originals/54/f6/46/54f646b74be4ad7f047dd03f11a0a995.png"
                alt=""
              />
            </div>
          </ScoreboardContainer>

        </CardConteiner>
      </Container>
    </Layout>
  );
};

export default Home;
