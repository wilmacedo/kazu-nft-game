import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import Routes from "./routes";
import { DataProvider } from "./contexts/ProviderData";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <DataProvider>
      <GlobalStyle />
      <Routes />
    </DataProvider>
  </ThemeProvider>
);

export default App;
