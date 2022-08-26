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
  userKazu = { img: '/src/assets/kazu2.png' },
  botKazu = { img: '/src/assets/kazu3.png' }
}) => {
  const [round, setRound] = useState<IRound>({
    userTurn: Boolean(Math.random() < 0.5),
    kazus: [userKazu, botKazu],
    bucketUser: [],
    bucketBot: [],
    status: 1
  })

  const [rounds, setRounds] = useState<IRound[]>([])

  useEffect(() => {
    if (round.status === 1) {
      if (!round.userTurn) {
        tapKazus()
      }
    }
  }, [])

  useEffect(() => {
    if (round.status === 2) {
      console.log('use effect next round', { ...round })
      nextRound()
    }
    if (round.status === 1) {
      if (!round.userTurn) {
        tapKazus()
      }
    }
  }, [round])

  const nextRound = () => {
    setRounds((prevState) => [...prevState, round])
    if (round.bucketBot.length === 2 || round.bucketUser.length === 2) {
      console.log("Battle Finished!!!")
    } else {
      setRound((prevState) => {
        let kazus = [...prevState.kazus]
        let bucketBot = [...prevState.bucketBot]
        let bucketUser = [...prevState.bucketUser]

        if (kazus.length === 0) {
          kazus = [...round.bucketBot, ...round.bucketUser]
          bucketBot = []
          bucketUser = []
        }
        return {
          kazus: [...kazus],
          bucketBot: [...bucketBot],
          bucketUser: [...bucketUser],
          status: 1,
          userTurn: !prevState.userTurn
        }
      })
    }
  }

  const tapKazus = () => {
    const bucketUser: Kazu[] = [...round.bucketUser]
    const bucketBot: Kazu[] = [...round.bucketBot]
    let kazus: Kazu[] = [...round.kazus]

    round.kazus.map((kazu: Kazu, index) => {
      const win = Boolean(Math.random() < 0.5)
      if (win) {
        kazus = kazus.filter(item => item.img !== kazu.img)
        if (round.userTurn) {
          bucketUser.push(kazu)
        } else if (!round.userTurn) {
          bucketBot.push(kazu)
        }
      }
    })

    setRound((prevState) => {
      return {
        ...prevState,
        kazus: kazus,
        bucketBot: [...bucketBot],
        bucketUser: [...bucketUser],
        status: 2
      }
    })
  }

  const handleUserClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('hadnle click')
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
