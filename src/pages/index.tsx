import { useEffect } from "react";
import Card from "../components/Card";
import { useProviderData } from "../contexts/ProviderData";
import { ICall } from "../services/eth/types";
import { Provider } from "../types";
import { BackgroundImage, CardContainer, Container } from "./styles";

const Home: React.FC = () => {
  const { providerData, updateData, setupData } = useProviderData();

  useEffect(() => {
    setupData(Provider.ETHEREUM);
    setupData(Provider.TRON);
  }, []);

  const changeCall = (provider: string, call: ICall) => {
    updateData((prevData) => ({
      ...prevData,
      [provider]: { ...prevData[provider], call },
    }));
  };

  return (
    <Container>
      <BackgroundImage />

      <CardContainer>
        {Object.keys(providerData).map((provider, index) => (
          <Card
            key={index}
            title={providerData[provider].name}
            status={providerData[provider].status}
            providerData={providerData[provider].data}
            call={providerData[provider].call}
            changeCall={(call) => changeCall(provider, call)}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Home;
