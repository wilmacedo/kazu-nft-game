import { Container, ContentContainer, KazuCircle, KazuList, KazuListContainer, Tab, TabChooser } from "./styles";
import { useState, useEffect } from "react";

const Home: React.FC = () => {

  const [currentTab, setCurrentTab] = useState(0); // 0: Battle, 1: Store

  const [userKazus, setUserKazus] = useState([1,2,3,4,5,6,7,8,9,10])
  const [selectedKazu, setSelectedKazu] = useState(-1);

  const handleKazuClick = (index: number) => {
    setSelectedKazu(index !== selectedKazu ? index : -1);
  };

  useEffect(() => {
  }, []);

  return (
    <Container>
      <ContentContainer>
        <TabChooser>
          <Tab isSelected={currentTab === 0}>Battle</Tab>
          <Tab isSelected={currentTab === 1}>Store</Tab>
        </TabChooser>

        <KazuListContainer>
          <KazuList>
          {userKazus.map((item, index) => (
            <KazuCircle 
              key={String(index)} 
              onClick={() => handleKazuClick(index)}
              isSelected={index === selectedKazu}
            />
          ))}
          </KazuList>
        </KazuListContainer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
