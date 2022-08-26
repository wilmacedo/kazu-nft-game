import React from "react";
import { Wrapper } from "./styles";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Link to="/">
        <Wrapper>Kazus</Wrapper>
      </Link>
    </React.Fragment>
  );
};

export default Logo;
