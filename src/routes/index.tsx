import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Home from "../pages/Home";
import HowWork from "../pages/HowWork";
import Battle from "../pages/Battle";
import Marketplace from "../pages/Marketplace";
import { useProviderData } from "../contexts/ProviderData";
interface IProvider {
  children: React.ReactNode;
}

const AppRoutes: React.FC = () => {
  const provider = useProviderData();

  return (
    <Routes>
      <Route path="/" element={<HowWork />} />
      <Route path="/battle" element={<Home />} />
      <Route path="/battle/accept" element={<Battle />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
