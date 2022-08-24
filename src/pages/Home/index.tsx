import { Container, ContentContainer, Tab, TabChooser } from "./styles";
import HeaderMenu from "../../components/HeaderMenu";
import { useState, useEffect } from "react";

const Home: React.FC = () => {

  const [currentTab, setCurrentTab] = useState(0); // 0: Battle, 1: Store

  useEffect(() => {
  }, []);

  return (
    <Container>
      <ContentContainer>
        <TabChooser>
          <Tab>Battle</Tab>
          <Tab>Store</Tab>
        </TabChooser>
      </ContentContainer>
    </Container>
  );
};

export default Home;
