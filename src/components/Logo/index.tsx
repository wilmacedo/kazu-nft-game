import React from "react";
import {
  Wrapper,
} from "./styles";

import { useNavigate } from "react-router-dom";


const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Wrapper>
        Kazus
      </Wrapper>
    </React.Fragment>
  );
};

export default Logo;
