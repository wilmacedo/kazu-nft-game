import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "../Home/styles";
import Layout from "../Layout";
import { Card, Container } from "./styles";

interface IHistory {
  round: number;
  changes: number[];
}

const Battle: React.FC = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState(0);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [done, setDone] = useState(-1);

  const handleFlip = () => {
    if (done !== -1) {
      navigate("/battle");
      return;
    }

    const changes = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
    ];

    setHistory((prevData) => [...prevData, { round, changes }]);

    const playerFlip = changes[0] > 50;
    const computerFlip = changes[1] > 50;

    if (round % 2 === 0) {
      // Player round
      if (playerFlip && computerFlip) {
        setDone(0);
        return;
      }
    } else {
      // Computer round

      if (playerFlip && computerFlip) {
        setDone(1);
        return;
      }
    }

    setRound((prevRound) => prevRound + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      if (round % 2 !== 0) {
        handleFlip();
      }
    }, 1000);
  }, [round]);

  const getFlipLabel = (value: number) => (value > 50 ? "Flip" : "Stay");

  return (
    <Layout>
      <Container>
        <Card>
          <h1>Battle - Round {round + 1}</h1>
          {history.map((item, index) => (
            <span key={index}>
              Round {item.round + 1} - {getFlipLabel(item.changes[0])} /{" "}
              {getFlipLabel(item.changes[1])}
            </span>
          ))}
          <br />
          {done !== -1 && <span>{done === 0 ? "You win" : "Game Over"}</span>}
          <Button onClick={handleFlip}>
            {done !== -1 ? "Back to Home" : "Flip"}
          </Button>
        </Card>
      </Container>
    </Layout>
  );
};

export default Battle;
