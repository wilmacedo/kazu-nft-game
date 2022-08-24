import { useEffect } from "react";
import HeaderMenu from "../components/HeaderMenu";
import { useProviderData } from "../contexts/ProviderData";
import { Provider } from "../types";

import { BackgroundImage, Container } from "./styles";

const Home: React.FC = () => {
  const { setupData } = useProviderData();

  useEffect(() => {
    setupData(Provider.ETHEREUM);
    setupData(Provider.TRON);
  }, []);

  return (
    <Container>
      <HeaderMenu />
      <BackgroundImage />
    </Container>
  );
};

export default Home;
