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
    console.log('battle initialized')
    if (round.status === 1) {
      console.log('round', 0)
      if (!round.userTurn) {
        console.log('bot turn')
        tapKazus()
      }
    }
  }, [])

  useEffect(() => {
    console.log('round changed')
    if (round.status === 1) {
      if (!round.userTurn) {
        console.log("round bot")
        tapKazus()
      }
    }
  }, [round])

  const nextRound = () => {
    setRounds((prevState) => [...prevState, round])
    setRound((prevState) => {
      const bucketKazos: Kazu[] = [...prevState.bucketUser, ...prevState.bucketBot]
      return {
        ...prevState,
        kazus: prevState.kazus.filter((item) => !bucketKazos.includes(item)),
        userTurn: !round.userTurn
      }
    })
  }

  const tapKazus = () => {
    console.log('tap kazus')
    const bucketUser: Kazu[] = []
    const bucketBot: Kazu[] = []

    round.kazus.map((kazu: Kazu) => {
      const win = Boolean(Math.random() < 0.5)
      if (win && round.userTurn) {
        bucketUser.push(kazu)
      } else if (win && !round.userTurn) {
        bucketBot.push(kazu)
      }
    })

    console.log("bucketUser", [...bucketUser])
    console.log("bucketBot", [...bucketBot])
    const bucketKazos: Kazu[] = [...bucketUser, ...bucketBot]
    setRound((prevState) => {
      return {
        ...prevState,
        kazus: prevState.kazus.filter((item) => !bucketKazos.includes(item)),
        bucketBot: [...bucketBot],
        bucketUser: [...bucketUser],
        status: 2
      }
    })
    nextRound()
  }

  const handleUserClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    tapKazus()
  }

  return (
    <React.Fragment>
      <Layout>
        <Container>
          <CardConteiner>
            <ScoreboardContainer>
              <div>
                <h1>Bot</h1>
                <SmallTazuList images={round.bucketBot} />
              </div>

              <div>
                <h1>User</h1>
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
