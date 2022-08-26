import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import Routes from "./routes";
import { DataProvider } from "./contexts/ProviderData";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <DataProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </DataProvider>
  </ThemeProvider>
);

export default App;
