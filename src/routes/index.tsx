import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import HowWork from "../pages/HowWork";
import Battle from "../pages/Battle";
import Marketplace from "../pages/Marketplace";
import Store from "../pages/Store";
import { useProviderData } from "../contexts/ProviderData";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HowWork />} />
      <Route path="/battle" element={<Home />} />
      <Route path="/battle/accept" element={<Battle />} />
      <Route path="/store" element={<Store />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
