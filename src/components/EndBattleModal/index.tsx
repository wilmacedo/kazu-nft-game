import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
  Container,
  Card,
  Title,
} from "./styles";

interface IConfirmBetModal {
  message: string;
}

const EndBattleModal: React.FC<IConfirmBetModal> = ({
  message
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/battle');
    }, 5000);
  }, []);

  return (
    <Container>
      <Card>
        <Title>
          <span>{message}</span>
        </Title>
      </Card>
    </Container>
  );
};

export default EndBattleModal;
