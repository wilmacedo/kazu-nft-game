import HeaderMenu from "../../components/HeaderMenu";
import { useEffect } from "react";

import { BackgroundImage, Container } from "./styles";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <Container>
      <HeaderMenu isAuthenticated={true} />
      <BackgroundImage />
      <Outlet />
    </Container>
  );
};

export default Layout;
