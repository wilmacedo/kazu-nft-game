import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setBalence(71626);
      setTickets(34);
      setAddress(
        "klv1kmr8ckqaj5rnn28en80n2h5kn7ney5vve5v3h0sur882udrhs5lqmq2vk7"
      );
      navigate("/home");
    }
  }, [isAuthenticated]);

  return (
    <Container>
      {!isAuthenticated ? (
        <ContainerButton>
          <Button onClick={() => setIsAutheticated(true)}>
            connect wallet
          </Button>
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
          <ConteinerTickets>Balance: {balance}</ConteinerTickets>
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
