import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  CardConteiner,
  Container,
  ScoreboardContainer,
} from "./styles";
import hand from "../../assets/hand.png";
import SmallTazuList from "./SmallTazuList";
import Message from "./Message";
import KazusFlipper from "./KazusFlipper";

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
  const [battle, setBattle] = useState<IBattle>({ status: 1 })
  const [round, setRound] = useState<IRound>({
    userTurn: Boolean(Math.random() < 0.5),
    kazus: [userKazu, botKazu],
    bucketUser: [],
    bucketBot: [],
    status: 1
  })
  const [message, setMessage] = useState<string>("Have fun!")

  const [rounds, setRounds] = useState<IRound[]>([])

  useEffect(() => {
    if (round.status === 1) {
      setMessage(round.userTurn ? "You Turn" : "Player 1 turn")
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
      setBattle(prevState => ({ ...prevState, status: 2 }))
      setMessage("Battle Finished!!!")
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

    setTimeout(() => {
      setRound((prevState) => {
        return {
          ...prevState,
          kazus: kazus,
          bucketBot: [...bucketBot],
          bucketUser: [...bucketUser],
          status: 2
        }
      })
    }, 2500)
  }

  const handleUserClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (battle.status === 1 && round.status === 1) {
      tapKazus()
    }
  }

  return (
    <React.Fragment>
      <Layout>
        <Container>
          <Message message={message} />
          <p style={{ color: 'white', marginTop: 10, marginBottom: 10 }}>Round #{rounds.length}</p>
          <CardConteiner>
            <ScoreboardContainer>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <h1>Player 1</h1>
                  <SmallTazuList images={round.bucketBot} />
                </div>

                <div>
                  <h1>User</h1>
                  <SmallTazuList images={round.bucketUser} />
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <KazusFlipper kazus={round.kazus} />
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
