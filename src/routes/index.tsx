import { Route, Routes as ReactRoutes } from "react-router-dom";

import Home from "../pages";
import HohWork from "../pages/HowWork";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/hom-hork" element={<HohWork />} />
      <Route path="/*" element={<h1>404</h1>} />
    </ReactRoutes>
  );
};

export default Routes;
