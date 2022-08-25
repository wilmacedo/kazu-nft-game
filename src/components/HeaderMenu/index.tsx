import React, { Fragment, useEffect } from "react";
import { useProviderData } from "../../contexts/ProviderData";
import { getAddress } from "../../utils";
import { Button } from "../Button";
import {
  Container,
  ContainerButton,
  ContainerHeader,
  ConteinerTickets,
  DivLink,
  LogoutButton,
  SLink,
} from "./styles";

interface IHeaderMenu {
  isAuthenticated?: boolean;
}

const HeaderMenu: React.FC<IHeaderMenu> = () => {
  const {
    isAuthenticated,
    setIsAutheticated,
    tickets,
    setTickets,
    balance,
    setBalence,
    address,
    setAddress,
  } = useProviderData();

  const handleAuth = () => {
    const provider = window.kleverWeb;
    if (!provider) {
      console.info("Klever Web is not available");
      return;
    }

    (async () => {
      try {
        const address = await provider.enable();
        if (!address) {
          console.error("Cannot retrive address");
          return;
        }

        const balance = await provider.getBalance();

        setAddress(address);
        setBalence(balance || 0);
        setTickets(3);

        setIsAutheticated(true);
      } catch (e) {
        console.error(e);
      }
    })();
  };

  return (
    <Container>
      {!isAuthenticated ? (
        <ContainerButton>
          <Button onClick={handleAuth}>Connect wallet</Button>
        </ContainerButton>
      ) : (
        <ContainerHeader>
          <div>
            <SLink to="/">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2DkVkL9XWuiNUGKmP2YbMlSTXh2hkX_GUjw&usqp=CAU"
                }
                width="100"
                alt=""
              />
            </SLink>
          </div>
          <ConteinerTickets>Tickets: {tickets}</ConteinerTickets>
          <ConteinerTickets>
            Balance: {(balance / 10 ** 6).toLocaleString()}
          </ConteinerTickets>
          <ConteinerTickets>Address:{getAddress(address, 10)}</ConteinerTickets>
          <DivLink>
            <SLink to="/my-kazoos">MY Kazoos</SLink>
          </DivLink>
          <DivLink>
            <SLink to="/history">History</SLink>
          </DivLink>
          <LogoutButton onClick={() => setIsAutheticated(false)}>
            Logout
          </LogoutButton>
        </ContainerHeader>
      )}
    </Container>
  );
};

export default HeaderMenu;
