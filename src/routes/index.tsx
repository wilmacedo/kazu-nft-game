import { Route, Routes as ReactRoutes } from "react-router-dom";

import Home from "../pages";

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
};

export default Routes;
