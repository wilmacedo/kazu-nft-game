import React, { useEffect } from "react";
import { useProviderData } from "../../contexts/ProviderData";
import { shortenAddressSuffix } from "../../utils";
import Menu from "../Menu";
import {
  Container,
  Button,
  AccountContainer,
  AddressContainer,
  KlvIcon,
  LogoContainer,
} from "./styles";

import { KLVIcon as KLV } from "../../assets";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

interface IHeaderMenu {
  isAuthenticated?: boolean;
}

const Header: React.FC<IHeaderMenu> = () => {
  const navigate = useNavigate();
  const provider = useProviderData();

  const handleConnect = () => {
    const prov = window.kleverWeb;
    if (!prov) {
      console.info("Klever Web is not available");
      return;
    }

    (async () => {
      try {
        const address = await prov.enable();
        if (!address) {
          console.error("Cannot retrive address");
          return;
        }

        const balance = await prov.getBalance();

        // provider.setAddress(address);
        provider.setAddress(
          "klv1kam6acu6avm6jvaafasx88mu80na0tgeucevw3waxzauzxhnmkestu0dmk"
        );
        provider.setBalance(balance || 0);
        provider.setTickets(3);

        provider.setConnected(true);

        navigate("/battle");
      } catch (e) {
        console.error(e);
      }
    })();
  };

  useEffect(() => {
    if (!provider.isConnected() && location.pathname !== "/") {
      navigate("/");
    }
  }, [provider, location.pathname]);

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Menu
        disabled={
          !provider.isConnected() || location.pathname.includes("/accept")
        }
      />
      {provider.isConnected() === true ? (
        <AccountContainer>
          <p>{provider.getTickets()} 🎫</p>
          <span>{(provider.getBalance() / 10 ** 6).toLocaleString()} KLV</span>
          <AddressContainer>
            <span>{shortenAddressSuffix(provider.getAddress())}</span>
            <KlvIcon src={KLV} alt="KLV Icon" />
          </AddressContainer>
        </AccountContainer>
      ) : (
        <Button onClick={handleConnect}>
          <span>Connect Wallet</span>
        </Button>
      )}
    </Container>
  );
};

export default Header;
