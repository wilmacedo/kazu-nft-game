import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
