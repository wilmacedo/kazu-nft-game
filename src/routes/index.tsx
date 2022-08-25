import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import HowWork from "../pages/HowWork";
import Battle from "../pages/Battle";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HowWork />} />
        <Route path="/battle" element={<Home />} />
        <Route path="/battle/accept" element={<Battle />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
