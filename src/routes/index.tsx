import { BrowserRouter, Route, Routes } from "react-router-dom";
import BattleAccepted from "../pages/Battle";

import Home from "../pages/Home";
import HowWork from "../pages/HowWork";
import Layout from "../pages/Layout";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HowWork />} />
          <Route path="/home" element={<Home />} />
          <Route path="how-it-works" element={<HowWork />} />
          <Route path="battle" element={<BattleAccepted />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
