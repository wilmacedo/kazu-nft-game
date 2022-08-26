import React, { useEffect, useState } from "react";
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
import SmallTazuList from "./SmallTazuList";

export interface IBattle {
  status: number;
}

export interface IRound {
  userTurn: boolean;
  kazus: Kazu[];
  bucketUser: Kazu[];
  bucketBot: Kazu[];
  status: number;
}

interface Kazu {
  img: string;
}
export interface IEngine {
  userKazu: Kazu,
  botKazu: Kazu,
}

const Index: React.FC<IEngine> = ({
  userKazu = { img: 'https://i.pinimg.com/originals/54/f6/46/54f646b74be4ad7f047dd03f11a0a995.png' },
  botKazu = { img: 'https://i.pinimg.com/originals/54/f6/46/54f646b74be4ad7f047dd03f11a0a995.png' } }) => {
  const [battle, setBattle] = useState<IBattle>({
    status: 1
  })

  const [round, setRound] = useState<IRound>({
    userTurn: Boolean(Math.random() < 0.5),
    kazus: [userKazu, botKazu],
    bucketUser: [],
    bucketBot: [],
    status: 1
  })

  const [rounds, setRounds] = useState<IRound[]>([])

  useEffect(() => {
    if (round.status === 2) {
      setRounds((all) => [...all, round])
    }
  }, [round])

  const tapKazus = () => {
    const bucketUser: Kazu[] = []
    const bucketBot: Kazu[] = []

    round.kazus.map((kazu: Kazu) => {
      const win = Boolean(Math.random() < 0.5)
      if (win) {
        bucketUser.push(kazu)
      } else {
        bucketBot.push(kazu)
      }
    })
    // setRound((round) => { ...round, bucketBot, bucketUser, status: 2 })
}

const handleUserClick = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault()

  // setRound({})
}

return (
  <React.Fragment>
    <Layout>
      <Container>
        <CardConteiner>
          <ScoreboardContainer>
            <div>
              <h1>Loss</h1>
              <SmallTazuList images={round.bucketBot} />
            </div>

            <div>
              <h1>Winer</h1>
              <SmallTazuList images={round.bucketUser} />
            </div>

            {round.userTurn && <img src={hand} onClick={handleUserClick} />}
          </ScoreboardContainer>
        </CardConteiner>
      </Container>
    </Layout>
  </React.Fragment>
);
};

export default Index;
