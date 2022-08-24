import React, { Fragment } from "react";
import { Button } from "../Button";
import { Container } from "./styles";

const HeaderMenu: React.FC = () => {
  return (
    <Container>
      <Button onClick={() => console.log("func")}>Home</Button>
      <Button onClick={() => console.log("func")}>My kazus</Button>
      <Button onClick={() => console.log("func")}>connect wallet</Button>
    </Container>
  );
};

export default HeaderMenu;
