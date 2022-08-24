import HeaderMenu from "../../components/HeaderMenu";
import { useEffect } from "react";

import { BackgroundImage, Container } from "./styles";

const Home: React.FC = () => {

  useEffect(() => {
  }, []);

  return (
    <Container>
      <HeaderMenu />
      <BackgroundImage />
    </Container>
  );
};

export default Home;
