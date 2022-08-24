import HeaderMenu from "../../components/HeaderMenu";
import { useEffect } from "react";

import { BackgroundImage, Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderMenu />
      <BackgroundImage />
    </Container>
  );
};

export default Home;
