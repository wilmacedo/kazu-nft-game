import Header from "../../components/Header";

import { BackgroundImage, Container } from "./styles";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <BackgroundImage />
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
