import { useEffect } from "react";
import { Button } from "../components/Button";
import { useProviderData } from "../contexts/ProviderData";
import { Provider } from "../types";

import { BackgroundImage, Container, HeaderMenu } from "./styles";

const Home: React.FC = () => {
  const { setupData } = useProviderData();

  useEffect(() => {
    setupData(Provider.ETHEREUM);
    setupData(Provider.TRON);
  }, []);

  return (
    <Container>
      <HeaderMenu>
        <Button onClick={() => console.log("func")}>Home</Button>
        <Button onClick={() => console.log("func")}>My kazus</Button>
        <Button onClick={() => console.log("func")}>connect wallet</Button>
      </HeaderMenu>
      <BackgroundImage />
    </Container>
  );
};

export default Home;
