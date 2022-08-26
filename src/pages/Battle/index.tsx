import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import {
  CardConteiner,
  Container,
  ListConteiner,
  ScoreboardContainer,
} from "./styles";
import hand from "../../assets/hand.png";
import SmallTazuList from "./SmallTazuList";
import Message from "./Message";
import KazusFlipper from "./KazusFlipper";
import { Kazu1, Kazu2 } from "../../assets";

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
  userKazu?: Kazu;
  botKazu?: Kazu;
}

const Index: React.FC<IEngine> = ({
  userKazu = { img: Kazu1 },
  botKazu = { img: Kazu2 },
}) => {
  const [battle, setBattle] = useState<IBattle>({ status: 1 });
  const [round, setRound] = useState<IRound>({
    userTurn: Boolean(Math.random() < 0.5),
    kazus: [userKazu, botKazu],
    bucketUser: [],
    bucketBot: [],
    status: 1,
  });
  const [message, setMessage] = useState<string>("Have fun!");

  const [rounds, setRounds] = useState<IRound[]>([]);
  const [losg, setLogs] = useState<IRound[]>([]);

  useEffect(() => {
    if (round.status === 1) {
      setMessage(round.userTurn ? "You Turn" : "Player 1 turn");
      if (!round.userTurn) {
        tapKazus();
      }
    }
  }, []);

  useEffect(() => {
    if (round.status === 2) {
      console.log("use effect next round", { ...round });
      nextRound();
    }
    if (round.status === 1) {
      if (!round.userTurn) {
        tapKazus();
      }
    }
  }, [round]);

  const nextRound = () => {
    setRounds((prevState) => [...prevState, round]);
    if (round.bucketBot.length === 2 || round.bucketUser.length === 2) {
      setBattle((prevState) => ({ ...prevState, status: 2 }));
      setMessage("Battle Finished!!!");
    } else {
      setRound((prevState) => {
        let kazus = [...prevState.kazus];
        let bucketBot = [...prevState.bucketBot];
        let bucketUser = [...prevState.bucketUser];

        if (kazus.length === 0) {
          kazus = [...round.bucketBot, ...round.bucketUser];
          bucketBot = [];
          bucketUser = [];
        }
        return {
          kazus: [...kazus],
          bucketBot: [...bucketBot],
          bucketUser: [...bucketUser],
          status: 1,
          userTurn: !prevState.userTurn,
        };
      });
    }
  };

  const tapKazus = () => {
    const bucketUser: Kazu[] = [...round.bucketUser];
    const bucketBot: Kazu[] = [...round.bucketBot];
    let kazus: Kazu[] = [...round.kazus];

    round.kazus.map((kazu: Kazu, index) => {
      const win = Boolean(Math.random() < 0.5);
      if (win) {
        kazus = kazus.filter((item) => item.img !== kazu.img);
        if (round.userTurn) {
          bucketUser.push(kazu);
        } else if (!round.userTurn) {
          bucketBot.push(kazu);
        }
      }
    });

    setTimeout(() => {
      setRound((prevState) => {
        return {
          ...prevState,
          kazus: kazus,
          bucketBot: [...bucketBot],
          bucketUser: [...bucketUser],
          status: 2,
        };
      });
    }, 2500);
  };

  const handleUserClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (battle.status === 1 && round.status === 1) {
      tapKazus();
    }
  };

  return (
    console.log({ rounds }),
    (
      <React.Fragment>
        <Layout>
          <Container>
            <Message message={message} />
            <p style={{ color: "white", marginTop: 10, marginBottom: 10 }}>
              Round #{rounds.length}
            </p>

            <CardConteiner>
              <ScoreboardContainer>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>Player 1</h1>
                    <SmallTazuList images={round.bucketBot} />
                  </div>

                  <div>
                    <h1>User</h1>
                    <SmallTazuList images={round.bucketUser} />
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <KazusFlipper kazus={round.kazus} />
                </div>
                {round.userTurn && battle.status === 1 && (
                  <img src={hand} onClick={handleUserClick} />
                )}
              </ScoreboardContainer>
            </CardConteiner>
            <div>
              <ul>
                {rounds?.map((log: IRound, index) => (
                  <li style={{ color: "#FFF" }}>
                    {` Round: ${index + 1} ${
                      log.userTurn ? "User" : "Player"
                    } | 
                    ${
                      log.userTurn && battle.status === 1
                        ? log.bucketUser?.length
                        : log.bucketBot?.length
                    }
                    `}
                    {/* {log.userTurn ? "User" : "Player"} |{" "}
                    {log.userTurn && battle.status === 1
                      ? log.bucketUser?.length
                      : log.bucketBot?.length} */}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Layout>
      </React.Fragment>
    )
  );
};

export default Index;
