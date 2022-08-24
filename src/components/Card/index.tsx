import React, { useState } from "react";
import { capitalize } from "../../utils";
import Divider from "../Divider";
import {
  Body,
  ConnectionStatus,
  Container,
  Footer,
  Row,
  Title,
} from "./styles";
import { ConnectionStatus as ConnectionType, ProviderData } from "../../types";
import DropdownButton from "../Button/Dropdown";
import { Ethereum } from "../../services";
import { ICall } from "../../services/eth/types";
import { useProviderData } from "../../contexts/ProviderData";

interface ICard {
  title: string;
  status: ConnectionType;
  providerData: ProviderData;
  call: ICall;
  changeCall: (call: ICall) => void;
}

const Card: React.FC<ICard> = ({
  title,
  status,
  providerData,
  call,
  changeCall,
}) => {
  const [loading, setLoading] = useState(false);
  const { updateData } = useProviderData();
  const disabled = status === ConnectionType.UNAVAILABLE;

  const handleButton = async () => {
    if (disabled) return;

    setLoading(true);
    const data = await call.exec();
    updateData((prevData) => {
      const copy = {
        ...prevData,
        [title]: {
          ...prevData[title],
          ...data,
        },
      };

      console.log(prevData);

      return copy;
    });
    setLoading(false);
  };

  return (
    <Container>
      <Title>
        <span>{capitalize(title)}</span>
        <ConnectionStatus status={status} />
      </Title>
      <Divider />
      <Body>
        {Object.keys(providerData).map((key, index) => (
          <Row key={index} hasData={!!providerData[key]}>
            <span>{key}:</span>
            <p>{providerData[key] || "N/A"}</p>
          </Row>
        ))}
      </Body>
      <Divider />
      <Footer>
        <DropdownButton
          label={call.name}
          onClickButton={handleButton}
          disabled={disabled}
          optionDisabled={status !== ConnectionType.CONNECTED}
          calls={Object.values(Ethereum)}
          changeCall={changeCall}
          loading={loading}
        />
      </Footer>
    </Container>
  );
};

export default Card;
