import { Route, Routes as ReactRoutes } from "react-router-dom";

import Home from "../pages/Home";
import HowWork from "../pages/HowWork";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowWork />} />
      <Route path="/*" element={<h1>404</h1>} />
    </ReactRoutes>
  );
};

export default Routes;
