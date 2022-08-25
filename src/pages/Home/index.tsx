import { Container, ContentContainer, KazuCircle, KazuList, KazuListContainer, KLVWager, StartBattleButton, StartBattleContainer, Tab, TabChooser, TicketCounter } from "./styles";
import { useState, useEffect } from "react";

const Home: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0); // 0: Battle, 1: Store

  const [KLVbet, setKLVbet] = useState('');
  const [userKazus, setUserKazus] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [selectedKazu, setSelectedKazu] = useState(-1);
  const [startEnabled, setStartEnabled] = useState(false);

  const tabs = ['Battle', 'How it works', 'Store']

  useEffect(() => {
    // TODO! load user Kazus then setUserKazus...
  }, []);

  useEffect(() => {
    setStartEnabled(selectedKazu !== -1 && KLVbet !== '' && parseInt(KLVbet) > 0);
  }, [selectedKazu, KLVbet]);

  const handleKazuClick = (index: number) => {
    setSelectedKazu(index !== selectedKazu ? index : -1);
  };

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    setSelectedKazu(-1);
    setKLVbet('');
  };

  const handleKLVChange = (event: any) => {
    const value = event.target.value;

    if (0 <= value && value <= 9999) {
      setKLVbet(value);
    } else if (value < 0) {
      setKLVbet('0');
    } else if (value > 9999) {
      setKLVbet('9999');
    }
  };

  return (
    <Container>
      <ContentContainer>
        <TabChooser>
          {tabs.map((item, index) => (
            <Tab isSelected={currentTab === index} onClick={() => handleTabChange(index)}>{item}</Tab>
          ))}
        </TabChooser>

        {currentTab === 0 && (
          <>
            <KazuListContainer>
              <KazuList>
                {userKazus.map((item, index) => (
                  /* TODO! key = hash do kazu? */
                  <KazuCircle
                    key={String(index)}
                    onClick={() => handleKazuClick(index)}
                    isSelected={index === selectedKazu}
                  />
                ))}
              </KazuList>
            </KazuListContainer>

            <StartBattleContainer>
              <TicketCounter>
                <p>Spending</p>
                <p>1 🎫</p>
              </TicketCounter>

              <StartBattleButton isEnabled={startEnabled}>
                <p>Start Battle!</p>
              </StartBattleButton>

              <KLVWager>
                <div><p>Wagering</p></div>

                <div>
                  <input
                    type={'number'}
                    value={KLVbet}
                    onChange={handleKLVChange}
                  />
                  <p>KLV</p>
                </div>
              </KLVWager>
            </StartBattleContainer>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};

export default Home;
